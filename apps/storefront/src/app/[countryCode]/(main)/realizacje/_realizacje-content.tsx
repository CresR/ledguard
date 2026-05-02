"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"

const SECTORS = [
  "Wszystkie",
  "Healthcare",
  "Gastronomia",
  "Hotele",
  "Biura",
  "Produkcja",
  "Edukacja",
]

export default function RealizacjeContent() {
  const [activeSector, setActiveSector] = useState("Wszystkie")

  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Realizacje</span>
        </div>
      </div>

      {/* HERO */}
      <section className="cs-hero">
        <div className="shell">
          <div className="eyebrow">Realizacje i wdrożenia</div>
          <h1>Wdrożenia EVSun EVLN w Polsce i Europie</h1>
          <p>
            Dokumentacja wybranych projektów — szpitale, hotele, gastronomia, biura, produkcja.
            Dane przed/po, produkty, wyniki IAQ i oszczędności energii.
          </p>
          <div className="cs-stats">
            <div>
              <div className="cs-stat__val">140+</div>
              <div className="cs-stat__lbl">zrealizowanych projektów</div>
            </div>
            <div>
              <div className="cs-stat__val">28 000+</div>
              <div className="cs-stat__lbl">zamontowanych opraw</div>
            </div>
            <div>
              <div className="cs-stat__val">12</div>
              <div className="cs-stat__lbl">krajów EU</div>
            </div>
            <div>
              <div className="cs-stat__val">58%</div>
              <div className="cs-stat__lbl">śr. oszczędność energii</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="cs-filters">
        <div className="shell">
          <div className="cs-filters__row">
            <span className="cs-filters__label">Sektor:</span>
            {SECTORS.map((sector) => (
              <button
                key={sector}
                className={`seg-pill${activeSector === sector ? " is-active" : ""}`}
                onClick={() => setActiveSector(sector)}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="cs-main">
        <div className="shell">

          {/* FEATURED */}
          <article className="cs-featured" style={{ cursor: "default" }}>
            <div className="cs-featured__ph ph ph--photo" />
            <div className="cs-featured__body">
              <div className="cs-featured__sector">Healthcare · Szpital powiatowy · Mazowieckie</div>
              <h2>280 opraw EVLN-DL w oddziale wewnętrznym — monitoring IAQ 60 dni</h2>
              <p>
                Kompleksowa wymiana oświetlenia w salach 1- i 2-osobowych oraz korytarzach oddziału
                wewnętrznego. Pomiary stężenia bakterii i grzybów w powietrzu (IAQ) przez 60 dni
                przed i po instalacji.
              </p>
              <div className="cs-featured__kpis">
                <div className="kpi">
                  <div className="kpi__val">280</div>
                  <div className="kpi__lbl">opraw EVLN-DL-180-15</div>
                </div>
                <div className="kpi">
                  <div className="kpi__val">61%</div>
                  <div className="kpi__lbl">oszczędność energii vs poprzednie oprawy</div>
                </div>
                <div className="kpi">
                  <div className="kpi__val">Redukcja</div>
                  <div className="kpi__lbl">bakterii w powietrzu wg IAQ (szczegóły dla B2B)</div>
                </div>
                <div className="kpi">
                  <div className="kpi__val">6 tyg.</div>
                  <div className="kpi__lbl">od zamówienia do odbioru</div>
                </div>
              </div>
              <div className="cs-featured__meta">
                <span><strong>Lokalizacja:</strong> Mazowieckie</span>
                <span><strong>Rok:</strong> 2025</span>
                <span><strong>Produkty:</strong> EVLN-DL, EVLN-PL</span>
                <span><strong>Dokumentacja:</strong> PZH, CE, IAQ</span>
              </div>
            </div>
          </article>

          {/* GRID */}
          <div className="cs-grid">
            <article className="cs-card" style={{ cursor: "default" }}>
              <div className="cs-card__ph ph ph--photo" />
              <div className="cs-card__body">
                <div className="cs-card__sector">Gastronomia · Sieć restauracji</div>
                <h3>Kuchnie produkcyjne — 12 lokali, EVLN-VL IP65</h3>
                <p>
                  Wymiana oświetlenia w kuchniach linii produkcji żywności. Hermetyczne oprawy IP65
                  spełniające wymagania HACCP. Weryfikacja przez inspektora sanepid.
                </p>
                <div className="cs-card__kpis">
                  <div className="cs-card__kpi"><strong>144</strong>opraw EVLN-VL</div>
                  <div className="cs-card__kpi"><strong>54%</strong>oszczędność energii</div>
                  <div className="cs-card__kpi"><strong>HACCP</strong>zatwierdzone</div>
                </div>
                <div className="cs-card__meta">
                  <span><strong>Warszawa × 12</strong> · 2025</span>
                  <span>Szczegóły wkrótce</span>
                </div>
              </div>
            </article>

            <article className="cs-card" style={{ cursor: "default" }}>
              <div className="cs-card__ph ph ph--photo" />
              <div className="cs-card__body">
                <div className="cs-card__sector">Biura · Centrala korporacji</div>
                <h3>Open space 4200 m² — panele EVLN-PL Blue Care</h3>
                <p>
                  Wymiana 420 opraw w całym biurze: open space, sale konferencyjne, recepcja.
                  Certyfikat WELL Ready po audycie.
                </p>
                <div className="cs-card__kpis">
                  <div className="cs-card__kpi"><strong>420</strong>paneli EVLN-PL</div>
                  <div className="cs-card__kpi"><strong>63%</strong>oszczędność energii</div>
                  <div className="cs-card__kpi"><strong>WELL</strong>Ready</div>
                </div>
                <div className="cs-card__meta">
                  <span><strong>Kraków</strong> · 2024</span>
                  <span>Szczegóły wkrótce</span>
                </div>
              </div>
            </article>

            <article className="cs-card" style={{ cursor: "default" }}>
              <div className="cs-card__ph ph ph--photo" />
              <div className="cs-card__body">
                <div className="cs-card__sector">Hotele · Hotel 4★</div>
                <h3>Pokoje i SPA — 180 opraw EVLN-DL + natynkowe</h3>
                <p>
                  Pełna wymiana oświetlenia pokojów hotelowych, korytarzy i strefy SPA.
                  Oświetlenie dekoracyjne z modułem EVLN.
                </p>
                <div className="cs-card__kpis">
                  <div className="cs-card__kpi"><strong>180</strong>opraw</div>
                  <div className="cs-card__kpi"><strong>47%</strong>oszczędność</div>
                  <div className="cs-card__kpi"><strong>Blue Care</strong>SPA</div>
                </div>
                <div className="cs-card__meta">
                  <span><strong>Sopot</strong> · 2024</span>
                  <span>Szczegóły wkrótce</span>
                </div>
              </div>
            </article>

            <article className="cs-card" style={{ cursor: "default" }}>
              <div className="cs-card__ph ph ph--photo" />
              <div className="cs-card__body">
                <div className="cs-card__sector">Produkcja · Zakład farmaceutyczny</div>
                <h3>Hala klasy czystości ISO 7 — EVLN-PL + HighBay</h3>
                <p>
                  Oświetlenie strefy produkcji leków w klasie czystości ISO 7. Wymagania GMP, pełna
                  dokumentacja walidacyjna.
                </p>
                <div className="cs-card__kpis">
                  <div className="cs-card__kpi"><strong>340</strong>opraw</div>
                  <div className="cs-card__kpi"><strong>ISO 7</strong>cleanroom</div>
                  <div className="cs-card__kpi"><strong>GMP</strong>dokumentacja</div>
                </div>
                <div className="cs-card__meta">
                  <span><strong>Poznań</strong> · 2024</span>
                  <span>Szczegóły wkrótce</span>
                </div>
              </div>
            </article>

            <article className="cs-card" style={{ cursor: "default" }}>
              <div className="cs-card__ph ph ph--photo" />
              <div className="cs-card__body">
                <div className="cs-card__sector">Edukacja · Szkoła podstawowa</div>
                <h3>Klasy i świetlice — 96 opraw EVLN-PL, 18 sal</h3>
                <p>
                  Projekt ze środków EduGrant. Pomiary natężenia oświetlenia wg PN-EN 12464-1,
                  protokół odbioru inspektora BHP.
                </p>
                <div className="cs-card__kpis">
                  <div className="cs-card__kpi"><strong>96</strong>opraw</div>
                  <div className="cs-card__kpi"><strong>500 lx</strong>klasy</div>
                  <div className="cs-card__kpi"><strong>UGR ≤19</strong></div>
                </div>
                <div className="cs-card__meta">
                  <span><strong>Łódź</strong> · 2025</span>
                  <span>Szczegóły wkrótce</span>
                </div>
              </div>
            </article>

            <article className="cs-card" style={{ cursor: "default" }}>
              <div className="cs-card__ph ph ph--photo" />
              <div className="cs-card__body">
                <div className="cs-card__sector">Healthcare · Sieć klinik stomatologicznych</div>
                <h3>Gabinety stomatologiczne — 8 klinik, 210 opraw</h3>
                <p>
                  Specyficzne wymagania kolorystyki (CRI ≥ 90), oświetlenie uzupełniające EVLN-DL.
                  Atest PZH wymagany przez sieć.
                </p>
                <div className="cs-card__kpis">
                  <div className="cs-card__kpi"><strong>210</strong>opraw</div>
                  <div className="cs-card__kpi"><strong>CRI ≥ 90</strong></div>
                  <div className="cs-card__kpi"><strong>PZH</strong>atesty</div>
                </div>
                <div className="cs-card__meta">
                  <span><strong>Polska × 8</strong> · 2025</span>
                  <span>Szczegóły wkrótce</span>
                </div>
              </div>
            </article>
          </div>

          {/* PAGINATION */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <button className="btn btn--ghost btn--sm" disabled style={{ opacity: 0.4 }}>
              ←
            </button>
            <button className="btn btn--primary btn--sm" style={{ width: "38px", padding: "0" }}>
              1
            </button>
            <button className="btn btn--ghost btn--sm" style={{ width: "38px", padding: "0" }}>
              2
            </button>
            <button className="btn btn--ghost btn--sm" style={{ width: "38px", padding: "0" }}>
              3
            </button>
            <button className="btn btn--ghost btn--sm">→</button>
          </div>

          {/* B2B CTA */}
          <div
            style={{
              marginTop: "72px",
              background: "linear-gradient(135deg,#0F1F4C,#1B2D63)",
              borderRadius: "20px",
              padding: "48px 56px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "40px",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "-100px",
                top: "-100px",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(0,180,216,0.2),transparent 65%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="eyebrow" style={{ color: "var(--cyan-400)" }}>Twój projekt</div>
              <h2 style={{ color: "var(--white)", fontSize: "32px" }}>
                Chcesz wdrożyć EVSun w swoim obiekcie?
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  marginTop: "10px",
                  fontSize: "16px",
                  maxWidth: "560px",
                }}
              >
                Przygotujemy dobór produktów, projekt oświetlenia DIALux i pełną dokumentację
                przetargową w 24h.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                position: "relative",
                zIndex: 1,
                flexShrink: 0,
              }}
            >
              <LocalizedClientLink href="/b2b" className="btn btn--accent btn--lg">
                Poproś o wycenę B2B
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/kontakt"
                className="btn btn--lg"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  justifyContent: "center",
                }}
              >
                Umów konsultację
              </LocalizedClientLink>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
