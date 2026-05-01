import { Metadata } from "next"

export const metadata: Metadata = {
  title: "O nas — LedGuard",
  description: "LedGuard to oficjalny dystrybutor lamp fotokatalitycznych EVSUN w Polsce i Europie. EVS sp. z o.o., Kleosin k. Białegostoku.",
}

export default function ONasPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="content-container text-center">
          <h1 className="text-4xl font-bold text-white mb-4">O LedGuard</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Oficjalny dystrybutor lamp fotokatalitycznych EVSUN w Polsce i Europie.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="content-container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Nasza misja</h2>
          <p className="text-grey-60 mb-4">
            LedGuard to projekt EVS sp. z o.o. — firmy z siedzibą w Kleosinie k. Białegostoku. Naszą misją
            jest wprowadzenie na rynek polski i europejski lamp LED z technologią fotokatalityczną EVLN,
            które jednocześnie oświetlają i dezynfekują powietrze — bez UV, bez ozonu, bezpieczne
            w obecności ludzi.
          </p>
          <p className="text-grey-60 mb-4">
            Technologia EVSUN to przyszłość oświetlenia dla szpitali, szkół, biur i przestrzeni publicznych.
            Zamiast kupować osobne oczyszczacze powietrza, wystarczy wymienić żarówki — i każda lampa
            zaczyna pracować na zdrowie przebywających w pomieszczeniu osób.
          </p>
          <p className="text-grey-60">
            Działamy w Polsce od 2024 roku. Magazyn mamy w Białymstoku, skąd wysyłamy zamówienia
            w ciągu 24 godzin — kurierem DPD lub do paczkomatu InPost.
          </p>
        </div>
      </section>

      {/* Why EVSUN */}
      <section className="py-16 bg-brand-bg-subtle">
        <div className="content-container">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-10">Dlaczego EVSUN?</h2>
          <div className="grid grid-cols-1 small:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-brand-cyan text-3xl font-bold mb-3">TÜV + SIRIM</div>
              <h3 className="font-semibold text-brand-navy mb-2">Certyfikowane</h3>
              <p className="text-grey-50 text-sm">
                Wszystkie produkty EVSUN posiadają certyfikaty TÜV (Niemcy) i SIRIM (Malezja).
                Niezależne testy skuteczności w warunkach laboratoryjnych.
              </p>
            </div>
            <div className="text-center">
              <div className="text-brand-cyan text-3xl font-bold mb-3">99,7%</div>
              <h3 className="font-semibold text-brand-navy mb-2">Skuteczność</h3>
              <p className="text-grey-50 text-sm">
                Eliminacja 99,7% Staphylococcus aureus w 6 godzin w warunkach laboratoryjnych.
                Potwierdzone przez niezależne instytuty badawcze.
              </p>
            </div>
            <div className="text-center">
              <div className="text-brand-cyan text-3xl font-bold mb-3">50 000h</div>
              <h3 className="font-semibold text-brand-navy mb-2">Żywotność</h3>
              <p className="text-grey-50 text-sm">
                Żywotność do 50 000 godzin — ponad 17 lat przy 8 godzinach pracy dziennie.
                Brak UV, rtęci i kadmu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="py-16">
        <div className="content-container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Dane firmy</h2>
          <div className="bg-brand-bg-subtle rounded-xl p-8">
            <dl className="grid grid-cols-1 small:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-grey-50 mb-1">Firma</dt>
                <dd className="font-semibold text-brand-navy">EVS sp. z o.o.</dd>
              </div>
              <div>
                <dt className="text-sm text-grey-50 mb-1">NIP</dt>
                <dd className="font-semibold text-brand-navy">5423491568</dd>
              </div>
              <div>
                <dt className="text-sm text-grey-50 mb-1">Adres</dt>
                <dd className="font-semibold text-brand-navy">ul. Bolesława Prusa 7A<br />16-001 Kleosin</dd>
              </div>
              <div>
                <dt className="text-sm text-grey-50 mb-1">Magazyn i wysyłka</dt>
                <dd className="font-semibold text-brand-navy">Białystok, Polska</dd>
              </div>
              <div>
                <dt className="text-sm text-grey-50 mb-1">E-mail</dt>
                <dd className="font-semibold text-brand-navy">
                  <a href="mailto:kontakt@ledguard.pl" className="text-brand-cyan hover:underline">
                    kontakt@ledguard.pl
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-grey-50 mb-1">B2B / hurtownie</dt>
                <dd className="font-semibold text-brand-navy">
                  <a href="mailto:b2b@ledguard.pl" className="text-brand-cyan hover:underline">
                    b2b@ledguard.pl
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
