import { NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL = "info@ledguard.pl"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { company, nip, email, phone, message } = body

  if (!company || !email) {
    return NextResponse.json({ error: "Wymagane pola: firma i email" }, { status: 400 })
  }

  if (!RESEND_API_KEY) {
    // Dev fallback — log and return success so form works without Resend configured
    console.log("[B2B request]", { company, nip, email, phone, message })
    return NextResponse.json({ ok: true })
  }

  const html = `<h2>Nowe zapytanie B2B — LedGuard</h2>
<table cellpadding="8" style="border-collapse:collapse">
  <tr><td><b>Firma:</b></td><td>${company}</td></tr>
  <tr><td><b>NIP/VAT:</b></td><td>${nip || "—"}</td></tr>
  <tr><td><b>Email:</b></td><td>${email}</td></tr>
  <tr><td><b>Telefon:</b></td><td>${phone || "—"}</td></tr>
  <tr><td><b>Wiadomość:</b></td><td>${message || "—"}</td></tr>
</table>
<p style="margin-top:16px;color:#888">Wyślij ofertę hurtową na: ${email}</p>`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "LedGuard <noreply@ledguard.pl>",
      to: [ADMIN_EMAIL],
      reply_to: email,
      subject: `[B2B] Zapytanie hurtowe — ${company}`,
      html,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error("[B2B email error]", err)
    return NextResponse.json({ error: "Błąd wysyłki" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
