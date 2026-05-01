import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

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
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!region) {
    return null
  }

  return (
    <>
      <Hero />

      {/* Technology section */}
      <section id="technologia" className="bg-brand-bg-subtle py-20">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-3">
              Jak działa technologia EVLN?
            </h2>
            <p className="text-grey-50 max-w-2xl mx-auto">
              Opatentowana powłoka fotokatalityczna aktywna w świetle widzialnym —
              bez szkodliwego promieniowania UV. Bezpieczna dla ludzi i zwierząt.
            </p>
          </div>

          <div className="grid grid-cols-1 small:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-grey-20">
              <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-brand-cyan text-2xl">🔬</span>
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">Fotokataliza</h3>
              <p className="text-grey-50 text-sm leading-relaxed">
                Powłoka EVLN reaguje ze światłem widzialnym, generując reaktywne formy
                tlenu które neutralizują patogeny w powietrzu i na powierzchniach.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-grey-20">
              <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-brand-cyan text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">Bezpieczna dla ludzi</h3>
              <p className="text-grey-50 text-sm leading-relaxed">
                W odróżnieniu od lamp UV-C, technologia EVLN jest aktywna w obecności
                ludzi i zwierząt. Zero UV, rtęci i kadmu.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-grey-20">
              <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-brand-cyan text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">Certyfikat TÜV i SIRIM</h3>
              <p className="text-grey-50 text-sm leading-relaxed">
                Skuteczność potwierdzona niezależnymi badaniami: eliminacja 99,7%
                bakterii Staphylococcus aureus w ciągu 6 godzin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      {collections && collections.length > 0 && (
        <section className="py-20">
          <div className="content-container">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-brand-navy">Polecane produkty</h2>
              <LocalizedClientLink
                href="/store"
                className="text-brand-cyan hover:text-brand-cyan-dark font-semibold text-sm transition-colors"
              >
                Zobacz wszystkie →
              </LocalizedClientLink>
            </div>
            <ul className="flex flex-col gap-x-6">
              <FeaturedProducts collections={collections} region={region} />
            </ul>
          </div>
        </section>
      )}

      {/* CTA section */}
      <section className="bg-brand-navy py-20">
        <div className="content-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Jesteś dystrybutorem lub firmą?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Oferujemy rabaty B2B do 40% dla hurtowników, szpitali, hoteli i firm.
            Skontaktuj się z nami po indywidualną ofertę.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LocalizedClientLink
              href="/b2b"
              className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Oferta B2B
            </LocalizedClientLink>
            <a
              href="mailto:info@ledguard.pl"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Napisz do nas
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
