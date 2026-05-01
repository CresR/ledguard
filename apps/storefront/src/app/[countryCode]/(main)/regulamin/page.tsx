import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin sklepu — LedGuard",
  description: "Regulamin sklepu internetowego LedGuard (ledguard.pl) prowadzonego przez EVS sp. z o.o.",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-brand-navy mb-4">{title}</h2>
    <div className="text-grey-60 space-y-3 text-sm leading-relaxed">{children}</div>
  </section>
)

export default function RegulaminPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-navy py-12">
        <div className="content-container text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Regulamin sklepu internetowego</h1>
          <p className="text-white/60 text-sm">Obowiązuje od 1 maja 2025 r.</p>
        </div>
      </section>

      <div className="content-container max-w-3xl mx-auto py-12">

        <Section title="§1. Postanowienia ogólne">
          <p>
            Sklep internetowy dostępny pod adresem <strong>ledguard.pl</strong> prowadzony jest przez
            <strong> EVS sp. z o.o.</strong> z siedzibą przy ul. Bolesława Prusa 7A, 16-001 Kleosin,
            NIP: 5423491568, wpisaną do Krajowego Rejestru Sądowego.
          </p>
          <p>
            Niniejszy Regulamin określa zasady korzystania ze Sklepu, składania zamówień,
            dostarczania produktów, uiszczania ceny, uprawnienia Kupującego do odstąpienia od umowy
            oraz zasady składania i rozpatrywania reklamacji.
          </p>
          <p>
            Korzystanie ze Sklepu jest dobrowolne. Złożenie zamówienia oznacza akceptację niniejszego Regulaminu.
          </p>
        </Section>

        <Section title="§2. Definicje">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Sklep</strong> — sklep internetowy ledguard.pl prowadzony przez Sprzedawcę.</li>
            <li><strong>Sprzedawca</strong> — EVS sp. z o.o., ul. Bolesława Prusa 7A, 16-001 Kleosin, NIP: 5423491568.</li>
            <li><strong>Kupujący</strong> — osoba fizyczna, osoba prawna lub jednostka organizacyjna składająca zamówienie.</li>
            <li><strong>Konsument</strong> — Kupujący będący osobą fizyczną dokonującą zakupu niezwiązanego bezpośrednio z działalnością zawodową lub gospodarczą.</li>
            <li><strong>Produkt</strong> — lamp LED EVSUN oraz akcesoria oferowane przez Sprzedawcę.</li>
            <li><strong>Zamówienie</strong> — oświadczenie woli Kupującego zmierzające bezpośrednio do zawarcia umowy sprzedaży.</li>
          </ul>
        </Section>

        <Section title="§3. Składanie zamówień">
          <p>
            Zamówienia można składać przez formularz na stronie ledguard.pl, 24 godziny na dobę,
            7 dni w tygodniu.
          </p>
          <p>
            Zamówienie jest skutecznie złożone, gdy Kupujący wypełni formularz zamówienia i wybierze
            formę płatności. Po złożeniu zamówienia Kupujący otrzymuje e-mail z potwierdzeniem przyjęcia
            zamówienia — umowa sprzedaży zostaje zawarta z chwilą jego wysłania.
          </p>
          <p>
            Sprzedawca zastrzega sobie prawo do weryfikacji zamówienia i kontaktu z Kupującym
            w przypadku wątpliwości co do jego poprawności.
          </p>
        </Section>

        <Section title="§4. Ceny i płatności">
          <p>
            Ceny Produktów podane są w złotych polskich (PLN) lub euro (EUR) i zawierają podatek VAT
            według stawki obowiązującej w chwili sprzedaży.
          </p>
          <p>
            Akceptowane formy płatności: karta płatnicza, przelew bankowy (Przelewy24), BLIK,
            płatność przy odbiorze (na zamówienie).
          </p>
          <p>
            Sprzedawca wystawia fakturę VAT na żądanie Kupującego, a w przypadku firm — automatycznie
            po każdym zamówieniu.
          </p>
        </Section>

        <Section title="§5. Dostawa">
          <p>
            Zamówienia są realizowane z magazynu w Białymstoku w ciągu 1–2 dni roboczych od dnia
            zaksięgowania płatności.
          </p>
          <p>
            Dostępne formy dostawy:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>InPost — paczkomat 24/7 (Polska)</li>
            <li>DPD — kurier (Polska i Europa)</li>
          </ul>
          <p>
            Koszty dostawy podane są w koszyku przed finalizacją zamówienia. Darmowa dostawa dla
            zamówień powyżej kwoty wskazanej w aktualnej ofercie promocyjnej.
          </p>
        </Section>

        <Section title="§6. Prawo odstąpienia od umowy">
          <p>
            Konsument ma prawo odstąpić od umowy zawartej na odległość bez podania przyczyny
            w terminie <strong>14 dni</strong> od dnia objęcia Produktu w posiadanie przez Konsumenta.
          </p>
          <p>
            Aby odstąpić od umowy, Konsument musi poinformować Sprzedawcę o swojej decyzji w drodze
            jednoznacznego oświadczenia (e-mail: kontakt@ledguard.pl lub listownie).
          </p>
          <p>
            Sprzedawca zwróci wszystkie otrzymane płatności, w tym koszty dostarczenia (z wyjątkiem
            dodatkowych kosztów wynikających z wybranego sposobu dostawy innego niż najtańszy
            oferowany), niezwłocznie, nie później niż 14 dni od dnia otrzymania oświadczenia
            o odstąpieniu.
          </p>
        </Section>

        <Section title="§7. Reklamacje">
          <p>
            Sprzedawca odpowiada wobec Konsumenta za wady Produktu na zasadach określonych
            w przepisach o rękojmi (art. 556 i następne Kodeksu cywilnego).
          </p>
          <p>
            Reklamację należy zgłosić na adres e-mail: <strong>kontakt@ledguard.pl</strong> lub
            listownie na adres Sprzedawcy. Reklamacja powinna zawierać: dane Kupującego, numer
            zamówienia, opis wady i żądane rozwiązanie.
          </p>
          <p>
            Sprzedawca rozpatruje reklamację w terminie 14 dni od dnia jej otrzymania.
          </p>
        </Section>

        <Section title="§8. Dane osobowe">
          <p>
            Administratorem danych osobowych jest EVS sp. z o.o. Dane przetwarzane są w celu
            realizacji zamówień, na podstawie art. 6 ust. 1 lit. b RODO (wykonanie umowy).
          </p>
          <p>
            Szczegółowe informacje o przetwarzaniu danych osobowych zawarte są w{" "}
            <a href="../polityka-prywatnosci" className="text-brand-cyan hover:underline">
              Polityce Prywatności
            </a>.
          </p>
        </Section>

        <Section title="§9. Postanowienia końcowe">
          <p>
            W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy prawa polskiego,
            w szczególności Kodeksu cywilnego oraz ustawy z dnia 30 maja 2014 r. o prawach konsumenta.
          </p>
          <p>
            Konsumentom przysługuje możliwość skorzystania z pozasądowych sposobów rozpatrywania
            reklamacji i dochodzenia roszczeń — platforma ODR:{" "}
            <span className="text-brand-cyan">ec.europa.eu/consumers/odr</span>
          </p>
          <p>
            Sprzedawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie
            w terminie 14 dni od ich opublikowania na stronie Sklepu.
          </p>
        </Section>

        <p className="text-xs text-grey-40 mt-8 border-t border-grey-10 pt-6">
          EVS sp. z o.o. · ul. Bolesława Prusa 7A, 16-001 Kleosin · NIP: 5423491568
        </p>
      </div>
    </div>
  )
}
