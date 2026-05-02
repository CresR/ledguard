import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import B2BForm from "@modules/b2b/b2b-form"

export const metadata: Metadata = {
  title: "Oferta B2B — LedGuard",
  description: "Hurtowe ceny lamp EVSUN dla firm. Rabaty do 40% dla szpitali, hoteli, hurtowni i dystrybutorów.",
}

export default function B2BPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="content-container text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Oferta dla firm B2B</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Rabaty hurtowe do 40% dla autoryzowanych dystrybutorów, szpitali, hoteli i firm.
            Skontaktuj się z nami po indywidualną wycenę.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-brand-bg-subtle">
        <div className="content-container">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-10">Dlaczego warto?</h2>
          <div className="grid grid-cols-1 small:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-grey-20 text-center">
              <div className="text-brand-cyan text-4xl font-bold mb-2">-40%</div>
              <h3 className="font-semibold text-brand-navy mb-2">Rabat hurtowy</h3>
              <p className="text-grey-50 text-sm">40% zniżki od ceny detalicznej dla autoryzowanych partnerów</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-grey-20 text-center">
              <div className="text-brand-cyan text-4xl font-bold mb-2">NET</div>
              <h3 className="font-semibold text-brand-navy mb-2">Faktura VAT</h3>
              <p className="text-grey-50 text-sm">Automatyczna faktura VAT po każdym zamówieniu. Obsługa odwrotnego obciążenia dla EU VAT.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-grey-20 text-center">
              <div className="text-brand-cyan text-4xl font-bold mb-2">24h</div>
              <h3 className="font-semibold text-brand-navy mb-2">Szybka wysyłka</h3>
              <p className="text-grey-50 text-sm">Magazyn w Białymstoku, wysyłka w 24h. InPost paczkomat lub kurier DPD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="py-16">
        <div className="content-container">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-10">Dla kogo?</h2>
          <div className="grid grid-cols-1 small:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "🏥", title: "Szpitale i placówki medyczne", desc: "Dezynfekcja powietrza bez UV — bezpieczna przy pacjentach" },
              { icon: "🏨", title: "Hotele i obiekty HoReCa", desc: "Czystsze powietrze dla gości, marketing jakości" },
              { icon: "🏫", title: "Szkoły i przedszkola", desc: "Redukcja zachorowań, bezpieczne dla dzieci" },
              { icon: "🏢", title: "Biura i przestrzenie korporacyjne", desc: "Poprawa jakości powietrza, mniej zwolnień lekarskich" },
              { icon: "🏭", title: "Hurtownie elektryczne", desc: "Autoryzowana dystrybucja EVSUN w Polsce i Europie" },
              { icon: "⚡", title: "Instalatorzy i wykonawcy", desc: "Specjalne ceny dla firm instalacyjnych" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-lg border border-grey-20">
                <span className="text-2xl">{icon}</span>
                <div>
                  <h3 className="font-semibold text-brand-navy text-sm">{title}</h3>
                  <p className="text-grey-50 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="formularz" className="py-16">
        <div className="content-container max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-2">Złóż zapytanie B2B</h2>
          <p className="text-grey-50 text-center mb-8 text-sm">
            Wypełnij formularz — odpiszemy w ciągu 24 godzin z indywidualną ofertą hurtową.
          </p>
          <B2BForm />
          <p className="text-grey-40 text-xs text-center mt-4">
            EVS sp. z o.o. · ul. Bolesława Prusa 7A, Kleosin · NIP: 5423491568 ·{" "}
            <a href="mailto:b2b@ledguard.pl" className="hover:text-brand-cyan">b2b@ledguard.pl</a>
          </p>
        </div>
      </section>
    </div>
  )
}
