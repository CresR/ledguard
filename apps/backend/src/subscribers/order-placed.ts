import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework"
import { Modules } from "@medusajs/framework/utils"
import { IOrderModuleService } from "@medusajs/framework/types"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = "LedGuard <noreply@ledguard.pl>"
const STORE_URL = process.env.STORE_URL || "https://ledguard.pl"

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) return
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM_EMAIL, to: [to], subject, html }),
  })
}

function formatMoney(amount: unknown, currency: string): string {
  const num = typeof amount === "string" ? parseFloat(amount) : Number(amount ?? 0)
  return new Intl.NumberFormat("pl-PL", { style: "currency", currency: currency.toUpperCase() }).format(num / 100)
}

export default async function orderPlacedHandler({ event: { data }, container }: SubscriberArgs<{ id: string }>) {
  const orderService: IOrderModuleService = container.resolve(Modules.ORDER)
  const order = await orderService.retrieveOrder(data.id, {
    relations: ["items", "shipping_address", "summary"],
  })

  const customerEmail = order.email
  if (!customerEmail) return

  const shippingAddr = order.shipping_address
  const addressLine = shippingAddr
    ? `${shippingAddr.first_name} ${shippingAddr.last_name}, ${shippingAddr.address_1}, ${shippingAddr.postal_code} ${shippingAddr.city}`
    : "—"

  const itemsHtml = (order.items || [])
    .map(
      (item) => `<tr>
      <td style="padding:8px;border-bottom:1px solid #eee">${item.title}</td>
      <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${item.quantity}</td>
      <td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${formatMoney(item.unit_price, order.currency_code)}</td>
    </tr>`
    )
    .join("")

  const total = formatMoney(order.summary?.paid_total ?? order.total ?? 0, order.currency_code)

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Potwierdzenie zamówienia</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#333">
  <div style="background:#0F1F4C;padding:24px;border-radius:8px 8px 0 0;text-align:center">
    <h1 style="color:white;margin:0;font-size:24px">LedGuard</h1>
    <p style="color:rgba(255,255,255,0.7);margin:8px 0 0">Lampy fotokatalityczne EVSUN</p>
  </div>

  <div style="padding:24px;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px">
    <h2 style="color:#0F1F4C">Dziękujemy za zamówienie!</h2>
    <p>Numer zamówienia: <strong>#${order.display_id}</strong></p>
    <p>Adres dostawy: ${addressLine}</p>

    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <thead>
        <tr style="background:#f5f5f5">
          <th style="padding:8px;text-align:left">Produkt</th>
          <th style="padding:8px;text-align:center">Ilość</th>
          <th style="padding:8px;text-align:right">Cena</th>
        </tr>
      </thead>
      <tbody>${itemsHtml}</tbody>
    </table>

    <p style="text-align:right;font-size:18px;font-weight:bold;color:#0F1F4C">
      Razem: ${total}
    </p>

    <div style="background:#f0f6ff;padding:16px;border-radius:8px;margin-top:16px">
      <p style="margin:0;font-size:14px;color:#555">
        Zamówienie zostanie przygotowane do wysyłki w ciągu 24 godzin roboczych.
        Status możesz śledzić w swoim koncie na <a href="${STORE_URL}" style="color:#00B4D8">${STORE_URL}</a>.
      </p>
    </div>

    <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
    <p style="font-size:12px;color:#999;text-align:center">
      EVS sp. z o.o. · ul. Bolesława Prusa 7A, 16-001 Kleosin · NIP: 5423491568<br>
      <a href="mailto:info@ledguard.pl" style="color:#00B4D8">info@ledguard.pl</a>
    </p>
  </div>
</body>
</html>`

  await sendEmail(
    customerEmail,
    `Potwierdzenie zamówienia #${order.display_id} — LedGuard`,
    html
  )
}

export const config: SubscriberConfig = {
  event: "order.placed",
}
