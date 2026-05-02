import { NextResponse } from "next/server"

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || ""
const STORE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ledguard.pl"

async function fetchAllProducts() {
  const res = await fetch(
    `${BACKEND_URL}/store/products?fields=id,title,handle,description,subtitle,thumbnail,variants.id,variants.title,variants.prices,variants.sku&limit=100`,
    {
      headers: { "x-publishable-api-key": PUBLISHABLE_KEY },
      next: { revalidate: 3600 },
    }
  )
  if (!res.ok) return []
  const data = await res.json()
  return data.products || []
}

export async function GET() {
  const products = await fetchAllProducts()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = products.flatMap((product: any) => {
    const variants = product.variants || []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return variants.map((variant: any) => {
      const plnPrice = variant.prices?.find((p: { currency_code: string }) => p.currency_code === "pln")
      return {
        id: variant.sku || variant.id,
        title: `${product.title} — ${variant.title}`,
        description: (product.description || product.subtitle || product.title).slice(0, 500),
        link: `${STORE_URL}/pl/products/${product.handle}`,
        image_link: product.thumbnail || `${STORE_URL}/logo.png`,
        price: plnPrice ? `${(plnPrice.amount / 100).toFixed(2)} PLN` : undefined,
        availability: "in stock",
        condition: "new",
        brand: "EVSUN",
        google_product_category: "2901",
      }
    }).filter((item: { price?: string }) => item.price)
  })

  const feed = {
    version: "2.0",
    channel: {
      title: "LedGuard",
      link: STORE_URL,
      description: "Fotokatalityczne lampy LED EVSUN",
      items,
    },
  }

  return NextResponse.json(feed, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
