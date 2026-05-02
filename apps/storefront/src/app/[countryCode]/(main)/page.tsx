import { Metadata } from "next"

import HomepageDesign from "@modules/home/templates/homepage-design"
import { getRegion } from "@lib/data/regions"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ledguard.pl"

export async function generateMetadata(props: {
  params: Promise<{ countryCode: string }>
}): Promise<Metadata> {
  const { countryCode } = await props.params
  return {
    title: "LedGuard — Lampy LED z dezynfekcją EVLN",
    description:
      "Fotokatalityczne lampy LED EVSUN — dezynfekcja powietrza bez UV. Zasięg 3–6m, certyfikat TÜV i SIRIM.",
    alternates: {
      canonical: `${BASE_URL}/${countryCode}`,
      languages: {
        pl: `${BASE_URL}/pl`,
        en: `${BASE_URL}/en`,
        de: `${BASE_URL}/de`,
        "x-default": `${BASE_URL}/pl`,
      },
    },
  }
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)
  if (!region) return null
  return <HomepageDesign />
}
