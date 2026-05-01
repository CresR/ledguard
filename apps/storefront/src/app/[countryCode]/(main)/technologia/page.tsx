import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technologia EVLN — LedGuard",
  description: "Jak działa fotokataliza EVLN? Dezynfekcja powietrza bez UV — bezpieczna przy ludziach, skuteczna 24/7. Certyfikaty TÜV i SIRIM.",
}

export default function TechnologiaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="content-container text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Technologia EVLN</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Fotokataliza nowej generacji — dezynfekcja powietrza wbudowana w zwykłą lampę LED.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="content-container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Jak to działa?</h2>
          <p className="text-grey-60 mb-4">
            Technologia EVLN (EVSUN Light &amp; Nano) opiera się na <strong>fotokatalizie</strong> —
            procesie, w którym specjalna powłoka nanotechnologiczna na powierzchni lampy, aktywowana
            przez własne światło LED, wytwarza rodniki hydroksylowe (OH•).
          </p>
          <p className="text-grey-60 mb-4">
            Rodniki hydroksylowe to jedne z najsilniejszych naturalnych utleniaczy — rozkładają
            białka i DNA mikroorganizmów, skutecznie eliminując bakterie, wirusy i grzyby w zasięgu
            3–6 metrów od lampy.
          </p>
          <p className="text-grey-60">
            Kluczowa różnica w stosunku do tradycyjnych lamp UV-C: <strong>technologia EVLN
            jest całkowicie bezpieczna w obecności ludzi i zwierząt</strong>. Nie emituje
            promieniowania UV. Działa jak dezynfekcja przy otwartych drzwiach — ciągła, 24/7,
            niezauważalna.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-brand-bg-subtle">
        <div className="content-container">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-10">
            EVLN vs tradycyjne metody dezynfekcji
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-grey-20">
                  <th className="text-left py-3 px-4 text-brand-navy">Cecha</th>
                  <th className="text-center py-3 px-4 text-brand-cyan">EVLN</th>
                  <th className="text-center py-3 px-4 text-grey-50">UV-C</th>
                  <th className="text-center py-3 px-4 text-grey-50">Oczyszczacz HEPA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bezpieczna przy ludziach", "✅ Tak", "❌ Nie", "✅ Tak"],
                  ["Dezynfekcja powietrza", "✅ Tak", "✅ Tak", "✅ Tak"],
                  ["Dezynfekcja powierzchni", "✅ Częściowo", "✅ Tak", "❌ Nie"],
                  ["Instalacja", "✅ Zamiana lampy", "⚠️ Osobne urządzenie", "⚠️ Osobne urządzenie"],
                  ["Praca ciągła (24/7)", "✅ Tak", "❌ Tylko gdy brak ludzi", "✅ Tak"],
                  ["Zasięg", "✅ 3–6 m", "~3 m", "Przepływ powietrza"],
                  ["Dodatkowy koszt energii", "❌ Brak", "⚠️ Osobne urządzenie", "⚠️ Osobne urządzenie"],
                ].map(([feature, evln, uvc, hepa]) => (
                  <tr key={feature} className="border-b border-grey-10">
                    <td className="py-3 px-4 text-brand-navy font-medium">{feature}</td>
                    <td className="py-3 px-4 text-center">{evln}</td>
                    <td className="py-3 px-4 text-center text-grey-50">{uvc}</td>
                    <td className="py-3 px-4 text-center text-grey-50">{hepa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="content-container">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-10">Certyfikaty i testy</h2>
          <div className="grid grid-cols-1 small:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-brand-bg-subtle rounded-xl p-6">
              <h3 className="font-bold text-brand-navy mb-2">TÜV Rheinland</h3>
              <p className="text-grey-60 text-sm">
                Niezależne testy przeprowadzone przez TÜV Rheinland (Niemcy) — jeden z najbardziej
                renomowanych instytutów certyfikacyjnych na świecie. Potwierdzono skuteczność
                eliminacji 99,7% Staphylococcus aureus w warunkach laboratoryjnych w ciągu 6 godzin.
              </p>
            </div>
            <div className="bg-brand-bg-subtle rounded-xl p-6">
              <h3 className="font-bold text-brand-navy mb-2">SIRIM QAS International</h3>
              <p className="text-grey-60 text-sm">
                Certyfikacja SIRIM (Standards and Industrial Research Institute of Malaysia) —
                oficjalne laboratorium badań normalizacyjnych. Certyfikat obejmuje testy
                bakteriobójcze oraz bezpieczeństwo użytkowania.
              </p>
            </div>
            <div className="bg-brand-bg-subtle rounded-xl p-6">
              <h3 className="font-bold text-brand-navy mb-2">CE / RoHS</h3>
              <p className="text-grey-60 text-sm">
                Wszystkie produkty EVSUN spełniają wymagania dyrektywy CE (Conformité Européenne)
                oraz RoHS (Restriction of Hazardous Substances) — brak rtęci, kadmu
                i innych substancji niebezpiecznych.
              </p>
            </div>
            <div className="bg-brand-bg-subtle rounded-xl p-6">
              <h3 className="font-bold text-brand-navy mb-2">Parametry techniczne</h3>
              <p className="text-grey-60 text-sm">
                Żywotność: do 50 000 godzin. Zasięg dezynfekcji: 3m (standard) / 6m (High Bay).
                Temperatura barwowa: 3000K / 4000K / 6000K. IP44 (odporność na wilgoć).
                Brak migotania (flicker-free).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-brand-navy">
        <div className="content-container text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Gdzie sprawdza się najlepiej?</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Wszędzie tam, gdzie zdrowe powietrze ma znaczenie — a UV-C i oczyszczacze
            są niepraktyczne lub zbyt kosztowne.
          </p>
          <div className="grid grid-cols-2 small:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
            {[
              "Gabinety lekarskie",
              "Sale operacyjne",
              "Szkoły i przedszkola",
              "Hotele i recepcje",
              "Biura open space",
              "Magazyny i hale",
              "Restauracje i kawiarnie",
              "Siłownie i baseny",
              "Transport publiczny",
            ].map((place) => (
              <div key={place} className="bg-white/10 rounded-lg py-3 px-4 text-white">
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
