import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Blue Care — zdrowe światło bez agresywnego niebieskiego spektrum | LEDGUARD",
  description:
    "Blue Care to technologia EVSun ograniczająca niebieskie spektrum światła, które zaburza rytm dobowy, melatoninę i sen. Bezpieczne dla dzieci, seniorów i przy pracy nocnej.",
}

export default function BlueCare() {
  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Blue Care</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bc-hero">
        <div className="shell">
          <div className="bc-hero__grid">
            <div>
              <div className="eyebrow">Blue Care Technology</div>
              <h1>
                Światło bez agresywnego <em>niebieskiego</em> spektrum
              </h1>
              <p>
                Blue Care to technologia EVSun, która ogranicza emisję niebieskiego spektrum
                (&lt;450 nm) w godzinach wieczornych i podczas długotrwałej pracy przy sztucznym
                świetle. Chroni rytm dobowy, wspiera produkcję melatoniny i zmniejsza zmęczenie
                oczu.
              </p>
              <div
                style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}
              >
                <LocalizedClientLink
                  href="/store"
                  className="btn btn--primary btn--lg"
                >
                  Produkty z Blue Care
                </LocalizedClientLink>
                <LocalizedClientLink href="/technologia" className="btn btn--ghost btn--lg">
                  Technologia EVLN →
                </LocalizedClientLink>
              </div>
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span className="chip">Bez agresywnego niebieskiego &lt;450 nm</span>
                <span className="chip">Bezpieczne dla dzieci i seniorów</span>
                <span className="chip">Non-flicker</span>
              </div>
            </div>
            <div className="spectrum-compare">
              <div className="sc-title">Porównanie spektrum — standardowe LED vs Blue Care</div>
              <div className="sc-bars">
                <div className="sc-bar-row">
                  <div className="sc-bar-label">
                    <span>Standardowe LED</span>
                    <strong>wysoki pik niebieskiego</strong>
                  </div>
                  <div className="sc-bar sc-bar--std">
                    <div className="sc-bar__label">STANDARD</div>
                  </div>
                </div>
                <div className="sc-bar-row">
                  <div className="sc-bar-label">
                    <span>EVSun Blue Care</span>
                    <strong style={{ color: "#4ADE80" }}>zredukowany pik &lt;450 nm</strong>
                  </div>
                  <div className="sc-bar sc-bar--bc">
                    <div className="sc-bar__mask"></div>
                    <div className="sc-bar__label" style={{ color: "#4ADE80" }}>
                      BLUE CARE
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-legend">
                <span className="std">Standardowe LED</span>
                <span className="bc">Blue Care (zredukowany niebieski)</span>
                <span style={{ color: "rgba(239,68,68,0.8)" }}>Strefa &lt;450 nm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bc-why">
        <div className="shell">
          <div className="bc-why__grid">
            <div>
              <div className="eyebrow">Dlaczego to ważne</div>
              <h2>Niebieskie spektrum a zdrowie — co mówi nauka</h2>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: "16px",
                  marginTop: "14px",
                  lineHeight: "1.7",
                }}
              >
                Receptory melanopsynowe w siatkówce oka są najbardziej wrażliwe na światło o
                długości fali ~480 nm (zakres niebiesko-zielony). Ekspozycja wieczorna na
                wysokoenergetyczne niebieskie światło (szczególnie z LED o niekorygowanym spektrum)
                hamuje wydzielanie melatoniny — hormonu regulującego sen.
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: "16px",
                  marginTop: "14px",
                  lineHeight: "1.7",
                }}
              >
                Blue Care obniża intensywność tej strefy spektrum bez zmniejszania strumienia
                świetlnego ani zmiany postrzeganej temperatury barwowej — zachowując pełną
                użyteczność oświetlenia.
              </p>
              <div
                style={{
                  marginTop: "24px",
                  padding: "20px",
                  background: "var(--tint)",
                  borderRadius: "12px",
                  borderLeft: "4px solid #3B82F6",
                }}
              >
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--ink-2)",
                    lineHeight: "1.6",
                  }}
                >
                  <strong style={{ color: "var(--navy)" }}>
                    Badania Harvard Medical School (2014):
                  </strong>{" "}
                  ekspozycja na niebieskie światło przed snem przesuwa rytm dobowy o 3h i hamuje
                  produkcję melatoniny 2× silniej niż zielone. Blue Care redukuje ten efekt.
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)",
                  borderRadius: "16px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "#1D4ED8",
                    letterSpacing: "-0.03em",
                    lineHeight: "1",
                  }}
                >
                  2×
                </div>
                <div
                  style={{ fontSize: "14px", color: "#1E40AF", marginTop: "4px", lineHeight: "1.4" }}
                >
                  silniejsze hamowanie melatoniny przez niebieskie światło vs zielone
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "#3B82F6",
                    marginTop: "8px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Harvard Medical School, 2014
                </div>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)",
                  borderRadius: "16px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "#15803D",
                    letterSpacing: "-0.03em",
                    lineHeight: "1",
                  }}
                >
                  3h
                </div>
                <div
                  style={{ fontSize: "14px", color: "#166534", marginTop: "4px", lineHeight: "1.4" }}
                >
                  przesunięcie rytmu dobowego przy ekspozycji na niebieskie światło wieczorem
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "#16A34A",
                    marginTop: "8px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Circadian Medicine Research
                </div>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg,#FFFBEB,#FEF3C7)",
                  borderRadius: "16px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "#B45309",
                    letterSpacing: "-0.03em",
                    lineHeight: "1",
                  }}
                >
                  ↓ 25%
                </div>
                <div
                  style={{ fontSize: "14px", color: "#92400E", marginTop: "4px", lineHeight: "1.4" }}
                >
                  zmęczenie oczu przy długotrwałej pracy z Blue Care vs standardowe LED
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "#D97706",
                    marginTop: "8px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Ophthalmology Research, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="bc-science">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Działanie Blue Care</div>
            <h2>Trzy mechanizmy ochrony wzroku i rytmu dobowego</h2>
          </div>
          <div className="science-cards">
            <div className="sci-card">
              <div className="sci-card__ico sci-card__ico--blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h4>Ochrona receptorów melanopsynowych</h4>
              <p>
                Ograniczenie emisji w zakresie &lt;450 nm zmniejsza stymulację receptorów
                melanopsynowych odpowiedzialnych za regulację rytmu dobowego i hamowanie melatoniny.
              </p>
            </div>
            <div className="sci-card">
              <div className="sci-card__ico sci-card__ico--amber">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4>Wsparcie rytmu dobowego</h4>
              <p>
                Naturalne światło ma różną temperaturę barwową w ciągu dnia. Blue Care naśladuje
                ten cykl — chłodniejsze w południe, cieplejsze wieczorem, minimalizując zaburzenia
                chronobiologiczne.
              </p>
            </div>
            <div className="sci-card">
              <div className="sci-card__ico sci-card__ico--green">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M3 12h4l3-9 4 18 3-9h4" />
                </svg>
              </div>
              <h4>Redukcja zmęczenia oczu (CVS)</h4>
              <p>
                Computer Vision Syndrome — zmęczenie oczu przy długiej pracy z ekranami. Blue Care
                łącznie z non-flicker zmniejsza skurcze akomodacyjne i uczucie suchości oczu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bc-for">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Kto skorzysta najbardziej</div>
            <h2>Blue Care — dla kogo to szczególnie ważne</h2>
          </div>
          <div className="for-grid">
            <div className="for-card">
              <span className="for-card__ico">👶</span>
              <h4>Dzieci i niemowlęta</h4>
              <p>Rozwijający się wzrok szczególnie wrażliwy na niebieskie spektrum. Pokoje dziecięce, żłobki, szkoły.</p>
            </div>
            <div className="for-card">
              <span className="for-card__ico">👴</span>
              <h4>Seniorzy</h4>
              <p>Zmniejszona zdolność filtrowania niebieskiego przez soczewkę oka. Domy opieki, geriatria.</p>
            </div>
            <div className="for-card">
              <span className="for-card__ico">💻</span>
              <h4>Pracownicy biurowi</h4>
              <p>8+ godzin dziennie przy ekranie i sztucznym oświetleniu. Redukcja CVS i poprawia koncentrację.</p>
            </div>
            <div className="for-card">
              <span className="for-card__ico">🏥</span>
              <h4>Pacjenci szpitalni</h4>
              <p>Oświetlenie sal chorych. Wieczorna ekspozycja na niebieskie zaburza sen i regenerację — Blue Care minimalizuje ten efekt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DAY/NIGHT */}
      <section className="daynight">
        <div className="shell">
          <div className="daynight__grid">
            <div>
              <div className="eyebrow" style={{ color: "var(--cyan-400)" }}>
                Profil dobowy
              </div>
              <h2>Oświetlenie dostosowane do pory dnia</h2>
              <p>
                Lampy EVSun z Blue Care i CCT przełączalnym (3000K/4000K/5000K) pozwalają dopasować
                spektrum do rytmu dnia. Chłodne, pobudzające rano — ciepłe, relaksujące wieczorem.
              </p>
              <div className="timeline-day">
                <div className="td-row">
                  <span className="td-row__time">06:00–09:00</span>
                  <div className="td-row__bar">
                    <div
                      className="td-row__fill"
                      style={{
                        width: "90%",
                        background: "linear-gradient(90deg,#60A5FA,#38BDF8)",
                      }}
                    ></div>
                  </div>
                  <span
                    className="td-row__label"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    5000K · pobudzające
                  </span>
                </div>
                <div className="td-row">
                  <span className="td-row__time">09:00–17:00</span>
                  <div className="td-row__bar">
                    <div
                      className="td-row__fill"
                      style={{ width: "100%", background: "var(--cyan)" }}
                    ></div>
                  </div>
                  <span
                    className="td-row__label"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    4000K · neutralne
                  </span>
                </div>
                <div className="td-row">
                  <span className="td-row__time">17:00–21:00</span>
                  <div className="td-row__bar">
                    <div
                      className="td-row__fill"
                      style={{
                        width: "70%",
                        background: "linear-gradient(90deg,#FBBF24,#F97316)",
                      }}
                    ></div>
                  </div>
                  <span
                    className="td-row__label"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    3000K · ciepłe
                  </span>
                </div>
                <div className="td-row">
                  <span className="td-row__time">21:00+</span>
                  <div className="td-row__bar">
                    <div
                      className="td-row__fill"
                      style={{
                        width: "40%",
                        background: "linear-gradient(90deg,#F97316,#DC2626)",
                      }}
                    ></div>
                  </div>
                  <span
                    className="td-row__label"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    2700K · relaks
                  </span>
                </div>
              </div>
              <div style={{ marginTop: "24px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <LocalizedClientLink href="/store" className="btn btn--accent">
                  Produkty z Blue Care
                </LocalizedClientLink>
                <LocalizedClientLink
                  href="/b2b"
                  className="btn"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Wycena B2B
                </LocalizedClientLink>
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "18px",
                padding: "32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--cyan-400)",
                  marginBottom: "20px",
                }}
              >
                Modele z Blue Care
              </div>
              <div style={{ display: "grid", gap: "10px" }}>
                <div
                  style={{
                    padding: "14px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{ fontWeight: 600, color: "var(--white)", fontSize: "14px" }}
                  >
                    EVLN-PL — Panele LED
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)",
                      marginTop: "4px",
                    }}
                  >
                    600×600, 300×1200, 600×1200 · Blue Care + EVLN
                  </div>
                </div>
                <div
                  style={{
                    padding: "14px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{ fontWeight: 600, color: "var(--white)", fontSize: "14px" }}
                  >
                    EVLN-DL — Podtynkowe
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)",
                      marginTop: "4px",
                    }}
                  >
                    Ø150–200mm · Blue Care dostępne w wybranych modelach
                  </div>
                </div>
                <div
                  style={{
                    padding: "14px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{ fontWeight: 600, color: "var(--white)", fontSize: "14px" }}
                  >
                    EVLN-SDL — Natynkowe
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)",
                      marginTop: "4px",
                    }}
                  >
                    Okrągłe i kwadratowe · Blue Care w seriach 2026
                  </div>
                </div>
              </div>
              <LocalizedClientLink
                href="/store"
                className="btn btn--accent"
                style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}
              >
                Przeglądaj produkty Blue Care →
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "var(--tint)", padding: "72px 0", textAlign: "center" }}>
        <div className="shell">
          <div
            className="eyebrow"
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            Zdrowe światło zaczyna się od wyboru
          </div>
          <h2 style={{ maxWidth: "700px", margin: "0 auto 14px" }}>
            Blue Care + EVLN = pełna ochrona dla Twojego zespołu i klientów
          </h2>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto 28px",
              color: "var(--ink-3)",
              fontSize: "16px",
            }}
          >
            Sprawdź nasze lampy z Blue Care lub skontaktuj się po dobór dla konkretnego
            pomieszczenia.
          </p>
          <div
            style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <LocalizedClientLink href="/store" className="btn btn--primary btn--lg">
              Produkty EVSun
            </LocalizedClientLink>
            <LocalizedClientLink href="/technologia" className="btn btn--ghost btn--lg">
              Technologia EVLN
            </LocalizedClientLink>
            <LocalizedClientLink href="/kontakt" className="btn btn--ghost btn--lg">
              Konsultacja bezpłatna
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </div>
  )
}
