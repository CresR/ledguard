import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Zastosowania EVSun EVLN — szpitale, hotele, gastronomia, biura | LEDGUARD",
  description: "Technologia EVLN sprawdza się wszędzie tam, gdzie higiena, komfort wzroku i energooszczędność mają kluczowe znaczenie — od sal szpitalnych po kuchnie gastronomiczne i nowoczesne biura.",
}

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function ZastosowaniaPage() {
  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Zastosowania</span>
        </div>
      </div>

      {/* HERO */}
      <section className="app-hero">
        <div className="shell">
          <div className="eyebrow">Zastosowania EVSun EVLN</div>
          <h1>Rozwiązania dla każdego sektora</h1>
          <p>Technologia EVLN sprawdza się wszędzie tam, gdzie higiena, komfort wzroku i energooszczędność mają kluczowe znaczenie — od sal szpitalnych po kuchnie gastronomiczne i nowoczesne biura.</p>
        </div>
      </section>

      {/* SEGMENT NAV */}
      <nav className="seg-nav">
        <div className="shell">
          <ul className="seg-nav__list">
            <li><a href="#healthcare">🏥 Healthcare</a></li>
            <li><a href="#gastronomy">🍽 Gastronomia</a></li>
            <li><a href="#hotels">🏨 Hotele i SPA</a></li>
            <li><a href="#offices">🏢 Biura</a></li>
            <li><a href="#education">🎓 Edukacja</a></li>
            <li><a href="#industry">🏭 Produkcja</a></li>
            <li><a href="#home">🏠 Dom</a></li>
          </ul>
        </div>
      </nav>

      {/* HEALTHCARE */}
      <section className="app-section" id="healthcare">
        <div className="shell">
          <div className="app-section__grid">
            <div className="app-section__ph ph ph--photo">
              <div className="ph__label">Zdjęcie: sala szpitalna / 1200×900</div>
            </div>
            <div className="app-section__body">
              <div className="app-section__tag">Healthcare</div>
              <h2>Szpitale, kliniki, gabinety lekarskie</h2>
              <p>Oświetlenie EVSun EVLN wspiera redukcję bakterii i grzybów w środowisku szpitalnym — bez konieczności opróżniania pomieszczeń, bez UV, bez chemii. Idealne dla sal chorych, gabinetów, korytarzy i izolatek.</p>
              <div className="app-benefits">
                <div className="app-benefit"><Check />Wsparcie redukcji HAI (zakażeń wewnątrzszpitalnych)</div>
                <div className="app-benefit"><Check />Praca ciągła 24/7 w obecności pacjentów i personelu</div>
                <div className="app-benefit"><Check />Dokumentacja do przetargów NFZ i PZP (PZH, CE, TÜV SÜD)</div>
                <div className="app-benefit"><Check />Non-flicker i Blue Care — komfort pacjentów i personelu</div>
              </div>
              <div className="req-box">
                <strong>Wymagane certyfikaty:</strong> Atest PZH, Deklaracja CE, Raport TÜV SÜD/UGENE — wszystkie dostępne w{" "}
                <LocalizedClientLink href="/pobierz" style={{ color: "var(--cyan-600)" }}>centrum dokumentów</LocalizedClientLink>.
              </div>
              <div className="kpi-strip">
                <div className="kpi-strip__item">
                  <div className="kpi-strip__val">99,71%</div>
                  <div className="kpi-strip__lbl">redukcja S. aureus 6h</div>
                </div>
                <div className="kpi-strip__item">
                  <div className="kpi-strip__val">280+</div>
                  <div className="kpi-strip__lbl">opraw w szpitalach PL</div>
                </div>
                <div className="kpi-strip__item">
                  <div className="kpi-strip__val">24/7</div>
                  <div className="kpi-strip__lbl">ciągła praca</div>
                </div>
              </div>
              <div className="app-products">
                <span className="chip">EVLN-PL panele</span>
                <span className="chip">EVLN-DL podtynkowe</span>
                <span className="chip">EVLN-SDL natynkowe</span>
              </div>
              <div className="app-ctas">
                <LocalizedClientLink href="/store?app=healthcare" className="btn btn--primary">Produkty dla Healthcare</LocalizedClientLink>
                <LocalizedClientLink href="/b2b" className="btn btn--ghost">Wycena B2B</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GASTRONOMY */}
      <section className="app-section" id="gastronomy" style={{ background: "var(--tint)" }}>
        <div className="shell">
          <div className="app-section__grid app-section__grid--rev">
            <div className="app-section__ph ph ph--photo">
              <div className="ph__label">Zdjęcie: kuchnia produkcyjna / 1200×900</div>
            </div>
            <div className="app-section__body">
              <div className="app-section__tag">Gastronomia i Food Service</div>
              <h2>Restauracje, hotele, kuchnie produkcyjne</h2>
              <p>Hermetyczne oprawy EVLN-VL (IP65) nad liniami produkcji żywności, w kuchniach restauracyjnych i magazynach chłodniczych. Wspierają higienę powierzchni i powietrza przy zachowaniu zgodności z HACCP.</p>
              <div className="app-benefits">
                <div className="app-benefit"><Check />IP65 — odporne na wilgoć, parę i mycie ciśnieniowe</div>
                <div className="app-benefit"><Check />Atest IBPRS dla branży spożywczej</div>
                <div className="app-benefit"><Check />Zgodność z wymaganiami HACCP</div>
                <div className="app-benefit"><Check />Obsługa sieci i franczyz — dokumentacja zbiorowa</div>
              </div>
              <div className="req-box">
                <strong>Wymogi HACCP:</strong> Oprawy IP65, możliwość mycia, brak emisji szkodliwych substancji, dokumentacja higieniczna IBPRS.
              </div>
              <div className="app-products">
                <span className="chip">EVLN-VL IP65</span>
                <span className="chip">EVLN-T8 tuba</span>
                <span className="chip">EVLN-HBN HighBay</span>
              </div>
              <div className="app-ctas">
                <LocalizedClientLink href="/store?app=gastronomy" className="btn btn--primary">Produkty dla gastronomii</LocalizedClientLink>
                <LocalizedClientLink href="/realizacje" className="btn btn--ghost">Realizacje →</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOTELS */}
      <section className="app-section" id="hotels">
        <div className="shell">
          <div className="app-section__grid">
            <div className="app-section__ph ph ph--photo">
              <div className="ph__label">Zdjęcie: pokój hotelowy / 1200×900</div>
            </div>
            <div className="app-section__body">
              <div className="app-section__tag">Hotele i obiekty SPA</div>
              <h2>Pokoje, restauracje, strefy wellness</h2>
              <p>Dyskretna higiena bez kompromisów estetycznych. EVSun EVLN w pokojach hotelowych, strefach SPA i łazienkach — podnosi standardy czystości przy zachowaniu atmosfery miejsca.</p>
              <div className="app-benefits">
                <div className="app-benefit"><Check />Blue Care — komfort wzroku gości, lepsza jakość snu</div>
                <div className="app-benefit"><Check />Wiele kształtów i wymiarów — design-friendly</div>
                <div className="app-benefit"><Check />Możliwość certyfikacji WELL Building Standard</div>
                <div className="app-benefit"><Check />Znaczna redukcja kosztów energii vs tradycyjne oprawy</div>
              </div>
              <div className="app-products">
                <span className="chip">EVLN-DL podtynkowe</span>
                <span className="chip">EVLN-SDL natynkowe</span>
                <span className="chip">EVLN-PL panele</span>
              </div>
              <div className="app-ctas">
                <LocalizedClientLink href="/store?app=hotels" className="btn btn--primary">Produkty dla hoteli</LocalizedClientLink>
                <LocalizedClientLink href="/b2b" className="btn btn--ghost">Wycena B2B</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="app-section" id="offices" style={{ background: "var(--tint)" }}>
        <div className="shell">
          <div className="app-section__grid app-section__grid--rev">
            <div className="app-section__ph ph ph--photo">
              <div className="ph__label">Zdjęcie: biuro open space / 1200×900</div>
            </div>
            <div className="app-section__body">
              <div className="app-section__tag">Biura i przestrzenie coworkingowe</div>
              <h2>Open space, sale konferencyjne, recepcje</h2>
              <p>Non-flicker, Blue Care i EVLN w jednym — mniej absencji chorobowych, lepsza koncentracja i komfort wzroku przez cały dzień pracy. Certyfikacja WELL, BREEAM, LEED.</p>
              <div className="app-benefits">
                <div className="app-benefit"><Check />UGR ≤ 19, Ra ≥ 80 — standard komfortu wzroku</div>
                <div className="app-benefit"><Check />WELL v2 Light category — gotowa dokumentacja</div>
                <div className="app-benefit"><Check />Integracja KNX / DALI na zamówienie</div>
                <div className="app-benefit"><Check />Projekt DIALux w ramach wyceny B2B</div>
              </div>
              <div className="app-products">
                <span className="chip">EVLN-PL panele 600×600</span>
                <span className="chip">EVLN-PL 300×1200</span>
                <span className="chip">EVLN-SDL natynkowe</span>
              </div>
              <div className="app-ctas">
                <LocalizedClientLink href="/store?app=offices" className="btn btn--primary">Produkty dla biur</LocalizedClientLink>
                <LocalizedClientLink href="/b2b" className="btn btn--ghost">Projekt DIALux</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="app-section" id="education">
        <div className="shell">
          <div className="app-section__grid">
            <div className="app-section__ph ph ph--photo">
              <div className="ph__label">Zdjęcie: sala szkolna / 1200×900</div>
            </div>
            <div className="app-section__body">
              <div className="app-section__tag">Edukacja — szkoły i uczelnie</div>
              <h2>Klasy, aule, świetlice, laboratoria</h2>
              <p>Bezpieczne dla dzieci — bez UV, z Blue Care i non-flicker. Zmniejsza zmęczenie oczu i sezonowe infekcje w klasach. Finansowanie z programów EduGrant i środków JST.</p>
              <div className="app-benefits">
                <div className="app-benefit"><Check />500 lx w klasach wg PN-EN 12464-1</div>
                <div className="app-benefit"><Check />Bez UV — bezpieczne dla uczniów i nauczycieli</div>
                <div className="app-benefit"><Check />Wsparcie w pozyskaniu EduGrant / MEN</div>
                <div className="app-benefit"><Check />Protokół odbioru BHP, dokumentacja dla dyrektora</div>
              </div>
              <div className="app-products">
                <span className="chip">EVLN-PL 600×600</span>
                <span className="chip">EVLN-PL 300×1200</span>
                <span className="chip">EVLN-SDL</span>
              </div>
              <div className="app-ctas">
                <LocalizedClientLink href="/b2b" className="btn btn--primary">Wycena dla szkoły</LocalizedClientLink>
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost">Dokumentacja BHP</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY */}
      <section className="app-section" id="industry" style={{ background: "var(--tint)" }}>
        <div className="shell">
          <div className="app-section__grid app-section__grid--rev">
            <div className="app-section__ph ph ph--photo">
              <div className="ph__label">Zdjęcie: hala produkcyjna / 1200×900</div>
            </div>
            <div className="app-section__body">
              <div className="app-section__tag">Produkcja i magazyny</div>
              <h2>Hale, chłodnie, magazyny high-bay</h2>
              <p>Przemysłowe oprawy EVLN-HBN (100–200W, IP65) do hal produkcyjnych, magazynów wysokiego składowania i chłodni. Trwałość L80B10 ≥ 50 000h, klasa EX na zamówienie.</p>
              <div className="app-benefits">
                <div className="app-benefit"><Check />HighBay 100–200W, IP65, montaż 8–20m</div>
                <div className="app-benefit"><Check />Leasing i wynajem długoterminowy</div>
                <div className="app-benefit"><Check />ROI typowo poniżej 3 lat</div>
                <div className="app-benefit"><Check />Klasa EX (strefa zagrożona wybuchem) na zamówienie</div>
              </div>
              <div className="app-products">
                <span className="chip">EVLN-HBN 100W</span>
                <span className="chip">EVLN-HBN 150W</span>
                <span className="chip">EVLN-VL IP65</span>
              </div>
              <div className="app-ctas">
                <LocalizedClientLink href="/store?app=industry" className="btn btn--primary">Produkty przemysłowe</LocalizedClientLink>
                <LocalizedClientLink href="/b2b" className="btn btn--ghost">Wycena projektu</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME */}
      <section className="app-section" id="home">
        <div className="shell">
          <div className="app-section__grid">
            <div className="app-section__ph ph ph--photo">
              <div className="ph__label">Zdjęcie: nowoczesne wnętrze domowe / 1200×900</div>
            </div>
            <div className="app-section__body">
              <div className="app-section__tag">Dom i mieszkanie</div>
              <h2>Kuchnia, łazienka, pokój dziecięcy</h2>
              <p>Zdrowsze światło dla całej rodziny. Blue Care i non-flicker chronią wzrok dzieci i seniorów. Dostępne w sklepie online z dostawą 24–48h.</p>
              <div className="app-benefits">
                <div className="app-benefit"><Check />IP44 do łazienek i kuchni</div>
                <div className="app-benefit"><Check />Blue Care — zdrowszy sen całej rodziny</div>
                <div className="app-benefit"><Check />Łatwy montaż — wpust do sufitu podwieszanego</div>
                <div className="app-benefit"><Check />Sklep online, ceny brutto, zwrot 30 dni</div>
              </div>
              <div className="app-products">
                <span className="chip">EVLN-DL IP44</span>
                <span className="chip">EVLN-SDL okrągłe</span>
                <span className="chip">EVLN-PL 600×600</span>
              </div>
              <div className="app-ctas">
                <LocalizedClientLink href="/store" className="btn btn--primary">Sklep online</LocalizedClientLink>
                <LocalizedClientLink href="/blue-care" className="btn btn--ghost">Blue Care →</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "var(--navy)", padding: "72px 0", textAlign: "center" }}>
        <div className="shell">
          <div className="eyebrow" style={{ color: "var(--cyan-400)", display: "inline-flex", justifyContent: "center" }}>
            Dopasowane do Twojego sektora
          </div>
          <h2 style={{ color: "var(--white)", maxWidth: "680px", margin: "0 auto 14px" }}>
            Nie znalazłeś swojego zastosowania?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 28px", fontSize: "16px" }}>
            Opisz nam obiekt — dopasujemy produkty, przygotujemy projekt i wycenę w 24h.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <LocalizedClientLink href="/b2b" className="btn btn--accent btn--lg">Zapytanie B2B</LocalizedClientLink>
            <LocalizedClientLink href="/kontakt" className="btn btn--lg" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
              Konsultacja bezpłatna
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </div>
  )
}
