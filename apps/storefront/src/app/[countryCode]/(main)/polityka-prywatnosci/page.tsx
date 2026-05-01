import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka prywatności — LedGuard",
  description: "Polityka prywatności i ochrony danych osobowych sklepu LedGuard (RODO/GDPR). EVS sp. z o.o.",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-brand-navy mb-4">{title}</h2>
    <div className="text-grey-60 space-y-3 text-sm leading-relaxed">{children}</div>
  </section>
)

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-navy py-12">
        <div className="content-container text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Polityka prywatności</h1>
          <p className="text-white/60 text-sm">Obowiązuje od 1 maja 2025 r.</p>
        </div>
      </section>

      <div className="content-container max-w-3xl mx-auto py-12">

        <Section title="1. Administrator danych">
          <p>
            Administratorem Twoich danych osobowych jest <strong>EVS sp. z o.o.</strong>
            z siedzibą przy ul. Bolesława Prusa 7A, 16-001 Kleosin, NIP: 5423491568.
          </p>
          <p>
            Kontakt z Administratorem: <strong>kontakt@ledguard.pl</strong>
          </p>
        </Section>

        <Section title="2. Cel i podstawa przetwarzania">
          <p>Twoje dane osobowe przetwarzamy w następujących celach:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Realizacja zamówień</strong> — imię, nazwisko, adres dostawy, e-mail, telefon.
              Podstawa: art. 6 ust. 1 lit. b RODO (wykonanie umowy).
            </li>
            <li>
              <strong>Wystawienie faktury VAT</strong> — dane firmy, NIP.
              Podstawa: art. 6 ust. 1 lit. c RODO (obowiązek prawny).
            </li>
            <li>
              <strong>Obsługa konta klienta</strong> — e-mail, historia zamówień.
              Podstawa: art. 6 ust. 1 lit. b RODO.
            </li>
            <li>
              <strong>Marketing</strong> — e-mail (tylko za zgodą).
              Podstawa: art. 6 ust. 1 lit. a RODO (zgoda).
            </li>
            <li>
              <strong>Analityka strony</strong> — anonimowe dane o ruchu (Google Analytics 4).
              Podstawa: art. 6 ust. 1 lit. f RODO (uzasadniony interes).
            </li>
          </ul>
        </Section>

        <Section title="3. Odbiorcy danych">
          <p>
            Twoje dane przekazujemy wyłącznie podmiotom niezbędnym do realizacji zamówień:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Operatorzy płatności: Stripe Inc. (Stany Zjednoczone, standardowe klauzule umowne)</li>
            <li>Firmy kurierskie: InPost S.A., DPD Polska sp. z o.o.</li>
            <li>Dostawca poczty elektronicznej: Resend Inc.</li>
            <li>Google LLC — Google Analytics 4 (anonimizacja IP włączona)</li>
          </ul>
          <p>
            Nie sprzedajemy danych osobowych podmiotom trzecim.
          </p>
        </Section>

        <Section title="4. Okres przechowywania">
          <ul className="list-disc pl-5 space-y-2">
            <li>Dane zamówieniowe: 5 lat od końca roku podatkowego (obowiązek podatkowy)</li>
            <li>Dane konta klienta: do usunięcia konta lub 3 lata od ostatniego logowania</li>
            <li>Zgoda marketingowa: do wycofania zgody</li>
            <li>Dane analityczne: 14 miesięcy (Google Analytics domyślny TTL)</li>
          </ul>
        </Section>

        <Section title="5. Twoje prawa">
          <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Dostęp</strong> — prawo do uzyskania kopii swoich danych</li>
            <li><strong>Sprostowanie</strong> — prawo do poprawienia nieprawidłowych danych</li>
            <li><strong>Usunięcie</strong> — prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
            <li><strong>Ograniczenie przetwarzania</strong> — prawo do ograniczenia przetwarzania</li>
            <li><strong>Przenoszalność</strong> — prawo do otrzymania danych w formacie CSV/JSON</li>
            <li><strong>Sprzeciw</strong> — prawo do sprzeciwu wobec przetwarzania marketingowego</li>
            <li><strong>Wycofanie zgody</strong> — możliwe w każdej chwili (bez wpływu na zgodność z prawem przetwarzania przed wycofaniem)</li>
          </ul>
          <p>
            Aby skorzystać z praw, napisz na: <strong>kontakt@ledguard.pl</strong>.
            Odpiszemy w ciągu 30 dni.
          </p>
          <p>
            Masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO),
            ul. Stawki 2, 00-193 Warszawa.
          </p>
        </Section>

        <Section title="6. Pliki cookie">
          <p>
            Strona ledguard.pl korzysta z plików cookie w celu:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Konieczne</strong> — sesja koszyka, logowanie, CSRF token</li>
            <li><strong>Analityczne</strong> — Google Analytics 4 (za zgodą)</li>
            <li><strong>Marketingowe</strong> — Meta Pixel, Google Ads (za zgodą)</li>
          </ul>
          <p>
            Zgodę możesz wycofać w dowolnym momencie poprzez ustawienia przeglądarki lub
            panel zarządzania zgodami dostępny na stronie.
          </p>
        </Section>

        <Section title="7. Bezpieczeństwo">
          <p>
            Stosujemy środki techniczne i organizacyjne zapewniające ochronę danych, w tym
            szyfrowanie HTTPS/TLS dla całego ruchu, szyfrowanie danych płatniczych przez Stripe
            (certyfikat PCI DSS), oraz regularne kopie zapasowe baz danych.
          </p>
        </Section>

        <p className="text-xs text-grey-40 mt-8 border-t border-grey-10 pt-6">
          EVS sp. z o.o. · ul. Bolesława Prusa 7A, 16-001 Kleosin · NIP: 5423491568
          · kontakt@ledguard.pl
        </p>
      </div>
    </div>
  )
}
