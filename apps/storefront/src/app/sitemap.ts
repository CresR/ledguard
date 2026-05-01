import { MetadataRoute } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ledguard.pl"
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || ""

async function getProductHandles(): Promise<string[]> {
  try {
    const res = await fetch(
      `${BACKEND_URL}/store/products?fields=handle&limit=100`,
      {
        headers: { "x-publishable-api-key": PUBLISHABLE_KEY },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return []
    const data = await res.json()
    return (data.products || []).map((p: { handle: string }) => p.handle)
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const LOCALES = ["pl", "en", "de"]

  const staticPages = [
    "",
    "/store",
    "/o-nas",
    "/technologia",
    "/b2b",
    "/regulamin",
    "/polityka-prywatnosci",
    "/zwroty",
  ]

  const handles = await getProductHandles()

  const entries: MetadataRoute.Sitemap = []

  // Static pages — all locales
  for (const page of staticPages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" || page === "/store" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page === "/store" ? 0.9 : 0.7,
      })
    }
  }

  // Product pages — all locales
  for (const handle of handles) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${handle}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      })
    }
  }

  return entries
}
