import { NextResponse } from "next/server"

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || ""
const STORE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ledguard.pl"

async function fetchAllProducts() {
  const res = await fetch(
    `${BACKEND_URL}/store/products?fields=id,title,handle,description,thumbnail,variants.id,variants.title,variants.prices,variants.sku&limit=100`,
    {
      headers: { "x-publishable-api-key": PUBLISHABLE_KEY },
      next: { revalidate: 3600 },
    }
  )
  if (!res.ok) return []
  const data = await res.json()
  return data.products || []
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function formatPrice(amount: number, currency: string): string {
  const formatted = (amount).toFixed(2)
  return `${formatted} ${currency.toUpperCase()}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildItems(products: any[]): string {
  const items: string[] = []

  for (const product of products) {
    const variants = product.variants || []
    for (const variant of variants) {
      const plnPrice = variant.prices?.find((p: { currency_code: string }) => p.currency_code === "pln")
      if (!plnPrice) continue

      const title = escapeXml(`${product.title} — ${variant.title}`)
      const description = escapeXml(
        (product.description || product.subtitle || product.title).slice(0, 500)
      )
      const link = `${STORE_URL}/pl/products/${product.handle}`
      const imageLink = product.thumbnail
        ? escapeXml(product.thumbnail)
        : `${STORE_URL}/logo.png`
      const price = formatPrice(plnPrice.amount, "PLN")
      const sku = escapeXml(variant.sku || variant.id)

      items.push(`    <item>
      <g:id>${sku}</g:id>
      <g:title>${title}</g:title>
      <g:description>${description}</g:description>
      <g:link>${escapeXml(link)}</g:link>
      <g:image_link>${imageLink}</g:image_link>
      <g:price>${price}</g:price>
      <g:availability>in stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>EVSUN</g:brand>
      <g:product_type>Oświetlenie LED &gt; Fotokatalityczne lampy LED</g:product_type>
      <g:google_product_category>2901</g:google_product_category>
      <g:shipping>
        <g:country>PL</g:country>
        <g:service>InPost Paczkomat</g:service>
        <g:price>14.99 PLN</g:price>
      </g:shipping>
    </item>`)
    }
  }

  return items.join("\n")
}

export async function GET() {
  const products = await fetchAllProducts()
  const items = buildItems(products)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>LedGuard — Lampy fotokatalityczne EVSUN</title>
    <link>${STORE_URL}</link>
    <description>Fotokatalityczne lampy LED EVSUN — dezynfekcja powietrza bez UV. Sklep LedGuard.</description>
${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
