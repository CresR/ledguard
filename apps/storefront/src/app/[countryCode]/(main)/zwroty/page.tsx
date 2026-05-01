import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zwroty i reklamacje — LedGuard",
  description: "14-dniowe prawo zwrotu bez podania przyczyny. Procedura zwrotów i reklamacji lamp EVSUN w sklepie LedGuard.",
}

const Step = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-cyan text-white font-bold flex items-center justify-center text-sm">
      {num}
    </div>
    <div className="pb-6">
      <h3 className="font-semibold text-brand-navy mb-1">{title}</h3>
      <p className="text-grey-60 text-sm">{children}</p>
    </div>
  </div>
)

export default function ZwrotyPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-navy py-12">
        <div className="content-container text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Zwroty i reklamacje</h1>
          <p className="text-white/70 text-lg">14 dni na zwrot bez podania przyczyny</p>
        </div>
      </section>

      <div className="content-container max-w-3xl mx-auto py-12">

        {/* Return rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Prawo odstąpienia od umowy</h2>
          <div className="bg-brand-bg-subtle rounded-xl p-6 mb-6">
            <p className="text-grey-60 text-sm leading-relaxed">
              Jeśli jesteś konsumentem (zakup niezwiązany z działalnością gospodarczą), masz prawo
              odstąpić od umowy zawartej na odległość w terminie <strong>14 dni kalendarzowych</strong>
              od dnia otrzymania przesyłki — bez podawania przyczyny.
            </p>
          </div>
          <p className="text-grey-60 text-sm mb-2">
            Prawa do odstąpienia nie stosuje się do produktów:
          </p>
          <ul className="list-disc pl-5 text-grey-60 text-sm space-y-1 mb-4">
            <li>wykonanych na zamówienie (niestandardowe konfiguracje)</li>
            <li>których opakowanie zostało otwarte i produkt był używany</li>
          </ul>
        </section>

        {/* Return process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Jak zwrócić towar?</h2>
          <div className="space-y-0">
            <Step num="1" title="Wyślij wiadomość e-mail">
              Napisz na <strong>kontakt@ledguard.pl</strong> z tytułem „Zwrot #[numer zamówienia]".
              Podaj numer zamówienia i czy chcesz zwrot pieniędzy, czy wymianę produktu.
              Nie musisz podawać przyczyny zwrotu.
            </Step>
            <Step num="2" title="Otrzymaj potwierdzenie">
              Odpiszemy w ciągu 1 dnia roboczego z adresem do zwrotu oraz numerem RMA
              (Return Merchandise Authorization).
            </Step>
            <Step num="3" title="Zapakuj i wyślij">
              Zapakuj produkt w oryginalne lub inne odpowiednie opakowanie. Dołącz numer RMA
              do paczki. Koszty odesłania ponosi Kupujący (chyba że produkt jest wadliwy —
              wtedy koszt zwrotu pokrywamy my).
            </Step>
            <Step num="4" title="Zwrot pieniędzy">
              Po otrzymaniu i sprawdzeniu produktu, zwrócimy pełną kwotę zamówienia (łącznie
              z kosztami dostawy przy pierwotnej wysyłce) na rachunek bankowy lub kartę
              w ciągu <strong>14 dni roboczych</strong>.
            </Step>
          </div>
        </section>

        {/* Complaints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Reklamacje (rękojmia)</h2>
          <p className="text-grey-60 text-sm mb-4">
            Wszystkie produkty objęte są 2-letnią gwarancją producenta EVSUN oraz rękojmią
            zgodnie z Kodeksem cywilnym. Sprzedawca odpowiada za wady fizyczne i prawne
            Produktu stwierdzone w ciągu 2 lat od daty zakupu.
          </p>

          <div className="bg-brand-bg-subtle rounded-xl p-6">
            <h3 className="font-semibold text-brand-navy mb-3">Jak złożyć reklamację?</h3>
            <ol className="list-decimal pl-5 text-grey-60 text-sm space-y-2">
              <li>
                Wyślij e-mail na <strong>kontakt@ledguard.pl</strong> z tytułem
                „Reklamacja #[numer zamówienia]"
              </li>
              <li>
                Opisz wadę: kiedy się pojawiła, jak objawia, dołącz zdjęcia lub film jeśli możliwe
              </li>
              <li>Podaj preferowane rozwiązanie: naprawa, wymiana, zwrot pieniędzy</li>
              <li>Odpiszemy w ciągu 14 dni z informacją o sposobie rozpatrzenia</li>
            </ol>
          </div>

          <div className="mt-6 grid grid-cols-1 small:grid-cols-3 gap-4">
            {[
              { label: "Czas rozpatrzenia", value: "14 dni" },
              { label: "Gwarancja EVSUN", value: "24 miesiące" },
              { label: "Żywotność lampy", value: "50 000h" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center p-4 rounded-lg border border-grey-20">
                <div className="text-brand-cyan text-2xl font-bold mb-1">{value}</div>
                <div className="text-grey-50 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Kontakt</h2>
          <div className="bg-brand-navy rounded-xl p-6 text-center">
            <p className="text-white/70 text-sm mb-4">
              Masz pytanie dotyczące zwrotu lub reklamacji?
            </p>
            <a
              href="mailto:kontakt@ledguard.pl"
              className="inline-block bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              kontakt@ledguard.pl
            </a>
            <p className="text-white/40 text-xs mt-4">
              Odpowiadamy w ciągu 1 dnia roboczego (pon–pt, 9:00–17:00)
            </p>
          </div>
        </section>

        <p className="text-xs text-grey-40 mt-8 border-t border-grey-10 pt-6">
          EVS sp. z o.o. · ul. Bolesława Prusa 7A, 16-001 Kleosin · NIP: 5423491568
        </p>
      </div>
    </div>
  )
}
