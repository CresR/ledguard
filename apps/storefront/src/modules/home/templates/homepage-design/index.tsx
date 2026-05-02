"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"

const SCENARIO_META: Record<string, string> = {
  hospital: "Scenariusz: SALA SZPITALNA · 30 m² · 8h dziennie",
  restaurant: "Scenariusz: KUCHNIA GASTRO · 80 m² · 14h dziennie · HACCP",
  office: "Scenariusz: BIURO · 200 m² · 9h dziennie",
  home: "Scenariusz: POKÓJ DZIECKA · 14 m² · 4h dziennie",
}

const Check = ({ size = 16, strokeWidth = 2.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const Cross = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </svg>
)

export default function HomepageDesign() {
  const [scenario, setScenario] = useState("hospital")

  return (
    <div className="ledg-design">
      {/* HERO */}
      <section className="hero">
        <div className="shell">
          <div className="hero__grid">
            <div className="hero__copy">
              <div className="eyebrow">EVLN · Visible-Light Disinfecting Technology</div>
              <h1>
                Oświetlenie <em>dezynfekujące</em> bez UV — dla firm i domu
              </h1>
              <p className="hero__sub">
                EVSun łączy energooszczędne światło LED z technologią EVLN, która wspiera redukcję bakterii i grzybów — bez promieniowania UV, bez migotania i bez dodatkowej obsługi.
              </p>
              <div className="hero__ctas">
                <LocalizedClientLink href="/store" className="btn btn--primary btn--lg">Zobacz produkty</LocalizedClientLink>
                <LocalizedClientLink href="/technologia" className="btn btn--ghost btn--lg">Poznaj technologię</LocalizedClientLink>
              </div>
              <div className="hero__proofs">
                <div className="hero__proof"><Check /><span><strong style={{ color: "var(--navy)" }}>Bez UV</strong> · bezpieczne w obecności ludzi</span></div>
                <div className="hero__proof"><Check /><span><strong style={{ color: "var(--navy)" }}>Bez migotania</strong> · komfort dla oczu</span></div>
                <div className="hero__proof"><Check /><span><strong style={{ color: "var(--navy)" }}>Bez chemii</strong> · ciągła praca, zero obsługi</span></div>
                <div className="hero__proof"><Check /><span><strong style={{ color: "var(--navy)" }}>Dokumentacja</strong> · CE, PZH, TÜV SÜD</span></div>
              </div>
            </div>

            <div className="hero__visual-wrap">
              <div className="hero__visual">
                <div className="hero__visual-inner">
                  <div className="product-render"></div>
                </div>
              </div>

              <div className="hero__floats">
                <div className="float-card float-card--1">
                  <div className="float-card__hdr">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                    TÜV SÜD Witness Test
                  </div>
                  <div className="float-card__num">99,71<span style={{ fontSize: "18px", color: "var(--cyan-600)" }}>%</span></div>
                  <div className="float-card__desc">redukcji <em>S. aureus</em> po 6h w określonych warunkach testowych</div>
                </div>
                <div className="float-card float-card--2">
                  <div className="float-card__hdr" style={{ color: "var(--success)" }}>
                    <Check size={14} />
                    ATESTOWANE
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "8px" }}>
                    {["CE", "PZH", "IBPRS", "TÜV", "UGENE"].map((c) => (
                      <span key={c} className="footer__cert" style={{ borderColor: "var(--line)", color: "var(--navy)", background: "var(--tint)" }}>{c}</span>
                    ))}
                  </div>
                  <div className="float-card__desc" style={{ marginTop: "8px" }}>
                    Pełna dokumentacja w sekcji <LocalizedClientLink href="/pobierz" style={{ color: "var(--cyan-600)", fontWeight: 500 }}>Do pobrania</LocalizedClientLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="benefits">
        <div className="shell">
          <div className="benefits__grid">
            <div className="benefit"><div className="benefit__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v6m0 14v-6m10-4h-6M2 12h6m12-7-4 4M6 18l4-4m8 4-4-4M6 6l4 4" /><circle cx="12" cy="12" r="2" /></svg></div><div className="benefit__ttl">Bez UV</div></div>
            <div className="benefit"><div className="benefit__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3 8-8M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div><div className="benefit__ttl">Skuteczność potwierdzona badaniami</div></div>
            <div className="benefit"><div className="benefit__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div><div className="benefit__ttl">Redukcja bakterii i grzybów</div></div>
            <div className="benefit"><div className="benefit__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l3-9 4 18 3-9h4" /></svg></div><div className="benefit__ttl">Non-flicker</div></div>
            <div className="benefit"><div className="benefit__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg></div><div className="benefit__ttl">Blue Care</div></div>
            <div className="benefit"><div className="benefit__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div><div className="benefit__ttl">Energooszczędność</div></div>
            <div className="benefit"><div className="benefit__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg></div><div className="benefit__ttl">2 lata gwarancji</div></div>
          </div>
        </div>
      </section>

      {/* PATHS B2B/B2C */}
      <section className="paths">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Wybierz ścieżkę</div>
            <h2>Rozwiązania dopasowane do Twojej organizacji</h2>
            <p>Niezależnie czy projektujesz oświetlenie dla szpitala, hotelu, restauracji, czy chcesz zdrowsze światło w domu — EVSun ma model dla każdego scenariusza.</p>
          </div>
          <div className="paths__grid">
            <LocalizedClientLink href="/b2b" className="path-card path-card--b2b">
              <div className="path-card__bg"></div>
              <div>
                <div className="path-card__eyebrow">Dla firm i inwestorów · B2B</div>
                <h3>Projekt, dokumentacja i wsparcie wdrożenia</h3>
                <p>Kompleksowa obsługa dla szpitali, klinik, hoteli, gastronomii, biur, produkcji i obiektów użyteczności publicznej.</p>
                <ul className="path-card__list">
                  <li><Check size={14} />Wycena projektu w 24h</li>
                  <li><Check size={14} />Dokumentacja do przetargów</li>
                  <li><Check size={14} />Warunki hurtowe i 2 lata gwarancji</li>
                </ul>
              </div>
              <div className="path-card__cta">
                <span className="btn btn--accent">Poproś o wycenę B2B</span>
                <span className="btn btn--ghost" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.18)" }}>Pobierz pakiet inwestora</span>
              </div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/store" className="path-card path-card--b2c">
              <div>
                <div className="path-card__eyebrow">Dla domu · B2C</div>
                <h3>Zdrowsze, energooszczędne światło w Twoim domu</h3>
                <p>Bezpieczne dla rodzin, dzieci i seniorów. Idealne do kuchni, łazienek, pokoi dziecięcych, salonów oraz pomieszczeń mieszkalnych.</p>
                <ul className="path-card__list">
                  <li><Check size={14} />Sklep online z cenami brutto</li>
                  <li><Check size={14} />Wysyłka 24–48h, zwrot 30 dni</li>
                  <li><Check size={14} />Pomoc w doborze do pomieszczeń</li>
                </ul>
              </div>
              <div className="path-card__cta">
                <span className="btn btn--primary">Przejdź do sklepu</span>
                <span className="btn btn--text">Pomóż mi wybrać</span>
              </div>
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* COMPARISON WIDGET */}
      <section className="section">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">10 sekund — i wszystko jasne</div>
            <h2>Zwykłe LED vs EVSun LED</h2>
            <p>Standardowe LED daje światło. EVSun daje światło <strong style={{ color: "var(--navy)" }}>plus funkcję wspierającą redukcję bakterii i grzybów</strong>, potwierdzoną badaniami laboratoryjnymi.</p>
          </div>

          <div className="compare-widget">
            <div className="compare-toolbar">
              <div className="compare-toggle" role="tablist" aria-label="Scenariusz porównania">
                {[
                  { k: "hospital", l: "Sala szpitalna" },
                  { k: "restaurant", l: "Kuchnia gastro" },
                  { k: "office", l: "Biuro" },
                  { k: "home", l: "Pokój dziecka" },
                ].map((s) => (
                  <button key={s.k} className={scenario === s.k ? "is-active" : ""} onClick={() => setScenario(s.k)}>{s.l}</button>
                ))}
              </div>
              <div style={{ fontSize: "12.5px", color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>
                {SCENARIO_META[scenario]}
              </div>
            </div>

            <div className="compare-stage">
              <div className="compare-side compare-side--led">
                <h4>Zwykłe LED <span className="badge badge--navy">Standard</span></h4>
                <div className="compare-led-vis"></div>
                <div className="compare-feature compare-feature--yes-strong"><Check size={14} />Energooszczędne oświetlenie</div>
                <div className="compare-feature compare-feature--no"><Cross />Brak funkcji higienizującej</div>
                <div className="compare-feature compare-feature--no"><Cross />Zwykle widoczne migotanie</div>
                <div className="compare-feature compare-feature--no"><Cross />Brak Blue Care</div>
                <div className="compare-feature compare-feature--no"><Cross />Standardowa gwarancja 2 lata</div>
              </div>

              <div className="compare-vs">VS</div>

              <div className="compare-side compare-side--evsun">
                <h4>EVSun LED <span className="badge">EVLN Technology</span></h4>
                <div className="compare-evsun-vis"></div>
                <div className="compare-feature compare-feature--yes-strong"><Check size={14} />Energooszczędne oświetlenie</div>
                <div className="compare-feature compare-feature--yes-strong"><Check size={14} />Wspiera redukcję bakterii i grzybów (EVLN)</div>
                <div className="compare-feature compare-feature--yes-strong"><Check size={14} />Non-flicker — komfort dla oczu</div>
                <div className="compare-feature compare-feature--yes-strong"><Check size={14} />Blue Care — ograniczone niebieskie spektrum</div>
                <div className="compare-feature compare-feature--yes-strong"><Check size={14} />2 lata gwarancji + dokumentacja techniczna</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH TABLE */}
      <section className="section section--tint" id="badania" style={{ padding: "72px 0" }}>
        <div className="shell">
          <div className="section__head section__head--center" style={{ marginBottom: "32px" }}>
            <div className="eyebrow">Skuteczność potwierdzona badaniami</div>
            <h2>Dowody laboratoryjne i niezależne testy</h2>
            <p style={{ marginTop: "10px" }}>Wyniki uzyskane w określonych warunkach laboratoryjnych. Skuteczność w praktyce zależy od warunków instalacji, czasu ekspozycji i otoczenia.</p>
          </div>

          <table className="research-table" aria-label="Wyniki badań skuteczności EVSun">
            <thead>
              <tr>
                <th>Laboratorium</th>
                <th>Mikroorganizm</th>
                <th>Czas</th>
                <th style={{ textAlign: "right" }}>Redukcja</th>
                <th>Warunki testu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="lab"><span className="lab__chip">TÜV SÜD</span> Witness Test</span></td>
                <td><em>Staphylococcus aureus</em></td>
                <td className="mono tnum">6 h</td>
                <td style={{ textAlign: "right" }}><span className="pct">99,71%</span></td>
                <td className="muted">określone warunki testowe</td>
              </tr>
              <tr>
                <td><span className="lab"><span className="lab__chip" style={{ background: "#1B2D63" }}>UGENE</span> Laboratory</span></td>
                <td><em>Staphylococcus aureus</em></td>
                <td className="mono tnum">6 h</td>
                <td style={{ textAlign: "right" }}><span className="pct">99,714%</span></td>
                <td className="muted">próba kontrolna · komora testowa</td>
              </tr>
              <tr>
                <td><span className="lab"><span className="lab__chip" style={{ background: "#1B2D63" }}>UGENE</span> Laboratory</span></td>
                <td><em>Escherichia coli</em></td>
                <td className="mono tnum">6 h</td>
                <td style={{ textAlign: "right" }}><span className="pct">99,668%</span></td>
                <td className="muted">próba kontrolna · komora testowa</td>
              </tr>
              <tr>
                <td><span className="lab"><span className="lab__chip" style={{ background: "#1B2D63" }}>UGENE</span> Laboratory</span></td>
                <td><em>Staphylococcus aureus</em></td>
                <td className="mono tnum">24 h</td>
                <td style={{ textAlign: "right" }}><span className="pct">99,938%</span></td>
                <td className="muted">próba kontrolna · komora testowa</td>
              </tr>
              <tr>
                <td><span className="lab"><span className="lab__chip" style={{ background: "#1B2D63" }}>UGENE</span> Laboratory</span></td>
                <td><em>Escherichia coli</em></td>
                <td className="mono tnum">24 h</td>
                <td style={{ textAlign: "right" }}><span className="pct">99,984%</span></td>
                <td className="muted">próba kontrolna · komora testowa</td>
              </tr>
              <tr>
                <td><span className="lab"><span className="lab__chip" style={{ background: "#15803D" }}>IAQ</span> Hospital PoC</span></td>
                <td>bakterie i grzyby (oznaczenie środowiskowe)</td>
                <td className="mono tnum">14 dni</td>
                <td style={{ textAlign: "right" }}><span className="pct">redukcja</span></td>
                <td className="muted">rzeczywiste warunki szpitalne</td>
              </tr>
            </tbody>
          </table>

          <div className="research-disclaimer">
            <strong>Ważne:</strong> Wyniki odnoszą się do określonych warunków testowych. Skuteczność zależy od warunków instalacji, czasu ekspozycji i otoczenia. EVSun nie zastępuje standardowych procedur dezynfekcji ani higieny w obiektach medycznych. Pełne raporty dostępne w sekcji <LocalizedClientLink href="/pobierz" style={{ color: "var(--cyan-600)", fontWeight: 600 }}>Do pobrania</LocalizedClientLink>.
          </div>

          <div style={{ marginTop: "20px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <LocalizedClientLink href="/badania" className="btn btn--primary">Pełna sekcja badań i certyfikatów</LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="btn btn--ghost">Pobierz raporty (PDF)</LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="section">
        <div className="shell">
          <div className="row row--between" style={{ marginBottom: "48px", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ maxWidth: "680px" }}>
              <div className="eyebrow">Katalog EVLN</div>
              <h2>Lampy z technologią EVLN dla każdego pomieszczenia</h2>
            </div>
            <LocalizedClientLink href="/store" className="btn btn--text">Zobacz wszystkie produkty</LocalizedClientLink>
          </div>
          <div className="cats-grid">
            <LocalizedClientLink href="/store?cat=panele" className="cat-card cat-card--feature">
              <div className="cat-card__ph"><div className="silhouette silhouette--square"></div></div>
              <div>
                <div className="cat-card__code">EVLN-PL</div>
                <h4>Panele LED</h4>
                <p style={{ fontSize: "14px", color: "var(--ink-3)", marginTop: "6px" }}>600×600, 300×1200, 600×1200 — biura, szpitale, sale konferencyjne. Wbudowana technologia EVLN i Blue Care.</p>
              </div>
              <div className="cat-card__count">14 modeli · od 320 PLN netto</div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/store?cat=podtynkowe" className="cat-card cat-card--b">
              <div className="cat-card__ph"><div className="silhouette silhouette--round"></div></div>
              <div><div className="cat-card__code">EVLN-DL</div><h4>Podtynkowe</h4></div>
              <div className="cat-card__count">22 modele</div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/store?cat=natynkowe" className="cat-card cat-card--c">
              <div className="cat-card__ph"><div className="silhouette silhouette--round"></div></div>
              <div><div className="cat-card__code">EVLN-SDL</div><h4>Natynkowe</h4></div>
              <div className="cat-card__count">11 modeli</div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/store?cat=liniowe" className="cat-card cat-card--d">
              <div className="cat-card__ph"><div className="silhouette silhouette--linear"></div></div>
              <div><div className="cat-card__code">EVLN-T8 / VL</div><h4>Liniowe i hermetyczne</h4></div>
              <div className="cat-card__count">18 modeli</div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/store?cat=przemyslowe" className="cat-card cat-card--e">
              <div className="cat-card__ph"><div className="silhouette silhouette--square"></div></div>
              <div><div className="cat-card__code">EVLN-HBN</div><h4>Przemysłowe HighBay</h4></div>
              <div className="cat-card__count">7 modeli</div>
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* B2B LEAD SECTION */}
      <section className="section section--sm">
        <div className="shell">
          <div className="b2b-lead">
            <div className="b2b-lead__grid">
              <div>
                <div className="eyebrow" style={{ color: "var(--cyan-400)" }}>Strefa Partnera B2B</div>
                <h2 style={{ fontSize: "42px" }}>Wycena projektu w 24 godziny</h2>
                <p>Prześlij rzut, opis obiektu lub listę pomieszczeń. Nasz zespół projektowy przygotuje dobór oświetlenia, kalkulację i pełną dokumentację techniczną.</p>
                <div className="b2b-lead__perks">
                  <div className="b2b-lead__perk"><Check size={18} strokeWidth={2.2} />Dobór oświetlenia do obiektu i wymagań technicznych</div>
                  <div className="b2b-lead__perk"><Check size={18} strokeWidth={2.2} />Komplet dokumentów do przetargów (CE, PZH, deklaracje, karty)</div>
                  <div className="b2b-lead__perk"><Check size={18} strokeWidth={2.2} />Warunki hurtowe, dystrybucja w PL i UE</div>
                  <div className="b2b-lead__perk"><Check size={18} strokeWidth={2.2} />Wsparcie techniczne i 2 lata gwarancji</div>
                </div>
              </div>
              <form className="b2b-lead__form" onSubmit={(e) => { e.preventDefault(); alert("Dziękujemy — odezwiemy się w 24h."); (e.target as HTMLFormElement).reset(); }}>
                <h4>Szybkie zapytanie B2B</h4>
                <div className="stack" style={{ gap: "14px" }}>
                  <div className="b2b-lead__row">
                    <div className="field"><label>Imię i nazwisko <span className="req">*</span></label><input required placeholder="np. Anna Kowalska" /></div>
                    <div className="field"><label>Firma</label><input placeholder="np. Szpital Św. Łukasza" /></div>
                  </div>
                  <div className="b2b-lead__row">
                    <div className="field"><label>E-mail służbowy <span className="req">*</span></label><input type="email" required placeholder="anna@firma.pl" /></div>
                    <div className="field"><label>Telefon</label><input type="tel" placeholder="+48 ..." /></div>
                  </div>
                  <div className="b2b-lead__row">
                    <div className="field">
                      <label>Typ obiektu</label>
                      <select>
                        <option>Szpital / klinika</option>
                        <option>Hotel</option>
                        <option>Gastronomia</option>
                        <option>Biuro</option>
                        <option>Produkcja / magazyn</option>
                        <option>Szkoła / uczelnia</option>
                        <option>Inne</option>
                      </select>
                    </div>
                    <div className="field"><label>Powierzchnia (m²)</label><input type="number" placeholder="np. 1200" /></div>
                  </div>
                  <button type="submit" className="btn btn--accent btn--lg" style={{ width: "100%", justifyContent: "center" }}>Wyślij zapytanie</button>
                  <div style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
                    Pełen formularz z załącznikami i checkboxami w <LocalizedClientLink href="/b2b" style={{ color: "var(--cyan-400)" }}>strefie B2B</LocalizedClientLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="section section--sm">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Certyfikaty i patenty</div>
            <h2>Pełna zgodność z wymaganiami EU i polskimi</h2>
          </div>
          <div className="certs-grid">
            <div className="cert">CE<span>Deklaracja zgodności</span></div>
            <div className="cert">PZH<span>Atest higieniczny</span></div>
            <div className="cert">IBPRS<span>Badania mikrobio.</span></div>
            <div className="cert">TÜV SÜD<span>Witness Test</span></div>
            <div className="cert">UGENE<span>Laboratory</span></div>
            <div className="cert">SIRIM<span>Malaysian Cert.</span></div>
            <div className="cert">ISO 9001<span>System zarządzania</span></div>
            <div className="cert">ABCi<span>Patent EVLN</span></div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section section--tint">
        <div className="shell">
          <div className="row row--between" style={{ marginBottom: "48px", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ maxWidth: "680px" }}>
              <div className="eyebrow">Realizacje</div>
              <h2>Wdrożenia w obiektach komercyjnych i publicznych</h2>
            </div>
            <LocalizedClientLink href="/realizacje" className="btn btn--text">Wszystkie realizacje</LocalizedClientLink>
          </div>
          <div className="cases-grid">
            <LocalizedClientLink href="/realizacje" className="case-card">
              <div className="case-card__ph ph ph--photo"><div className="ph__icon">🏥</div><div className="ph__label">Photo · Hospital ward · 1600×1200</div></div>
              <div className="case-card__body">
                <div className="case-card__type">Healthcare · Szpital powiatowy</div>
                <h4>Sale chorych i korytarze — 280 punktów EVLN-DL</h4>
                <p>Wymiana 280 lamp w salach 1- i 2-osobowych oraz korytarzach. Pomiary IAQ przed/po przez 60 dni.</p>
                <div className="case-card__meta"><span><strong>Mazowieckie</strong> · 2025</span><span>Czytaj →</span></div>
              </div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/realizacje" className="case-card">
              <div className="case-card__ph ph ph--photo"><div className="ph__icon">🍽</div><div className="ph__label">Photo · Restaurant kitchen · 1600×1200</div></div>
              <div className="case-card__body">
                <div className="case-card__type">Gastronomy · Sieć restauracji</div>
                <h4>Kuchnie produkcyjne i strefy wydawcze</h4>
                <p>Hermetyczne EVLN-VL nad liniami produkcji żywności. Spełnienie wymagań HACCP i komfort pracy.</p>
                <div className="case-card__meta"><span><strong>Warszawa</strong> · 2025</span><span>Czytaj →</span></div>
              </div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/realizacje" className="case-card">
              <div className="case-card__ph ph ph--photo"><div className="ph__icon">🏢</div><div className="ph__label">Photo · Office floor · 1600×1200</div></div>
              <div className="case-card__body">
                <div className="case-card__type">Offices · Centrala korporacji</div>
                <h4>Open-space i sale konferencyjne — 4200 m²</h4>
                <p>Panele EVLN-PL z Blue Care. Zmniejszenie zmęczenia oczu i certyfikat WELL Building.</p>
                <div className="case-card__meta"><span><strong>Kraków</strong> · 2024</span><span>Czytaj →</span></div>
              </div>
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* DOWNLOADS STRIP */}
      <section className="section section--sm">
        <div className="shell">
          <div className="section__head" style={{ marginBottom: "32px" }}>
            <div className="eyebrow">Centrum dokumentów</div>
            <h2>Dokumentacja techniczna i materiały do pobrania</h2>
          </div>
          <div className="dl-strip">
            <LocalizedClientLink href="/pobierz" className="dl-card">
              <div className="dl-card__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></div>
              <div><div className="dl-card__t">Pakiet inwestora</div><div className="dl-card__m">PDF · 8.4 MB · PL</div></div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-card">
              <div className="dl-card__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3 8-8M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
              <div><div className="dl-card__t">Raport TÜV SÜD</div><div className="dl-card__m">PDF · 1.2 MB · EN</div></div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-card">
              <div className="dl-card__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
              <div><div className="dl-card__t">Katalog produktów 2026</div><div className="dl-card__m">PDF · 24 MB · PL/EN</div></div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-card">
              <div className="dl-card__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <div><div className="dl-card__t">Atesty PZH + IBPRS</div><div className="dl-card__m">ZIP · 6.1 MB · PL</div></div>
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="shell">
          <div className="row row--between" style={{ marginBottom: "48px", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ maxWidth: "680px" }}>
              <div className="eyebrow">Wiedza i poradniki</div>
              <h2>Blog: technologia, projektowanie, energooszczędność</h2>
            </div>
            <LocalizedClientLink href="/blog" className="btn btn--text">Wszystkie wpisy</LocalizedClientLink>
          </div>
          <div className="blog-grid">
            <LocalizedClientLink href="/blog" className="blog-card">
              <div className="blog-card__ph ph"><div className="ph__icon">💡</div><div className="ph__label">Article cover · 1200×675</div></div>
              <div className="blog-card__body">
                <div className="blog-card__cat">Technologia</div>
                <h4>Oświetlenie dezynfekujące bez UV — jak działa technologia EVLN?</h4>
                <div className="blog-card__meta">8 min czytania · 28.04.2026</div>
              </div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/blog" className="blog-card">
              <div className="blog-card__ph ph"><div className="ph__icon">🩺</div><div className="ph__label">Article cover · 1200×675</div></div>
              <div className="blog-card__body">
                <div className="blog-card__cat">Medycyna</div>
                <h4>Jak dobrać oświetlenie LED do gabinetu medycznego?</h4>
                <div className="blog-card__meta">12 min czytania · 21.04.2026</div>
              </div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/blog" className="blog-card">
              <div className="blog-card__ph ph"><div className="ph__icon">⚡</div><div className="ph__label">Article cover · 1200×675</div></div>
              <div className="blog-card__body">
                <div className="blog-card__cat">Energooszczędność</div>
                <h4>Jak obniżyć koszty energii w firmie dzięki LED — realne dane</h4>
                <div className="blog-card__meta">10 min czytania · 14.04.2026</div>
              </div>
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="shell">
          <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>Następny krok</div>
          <h2>Zwykłe LED daje światło. EVSun daje światło + funkcję higienizującą.</h2>
          <p>Zacznij od bezpłatnej konsultacji technicznej, doboru produktów lub pełnej wyceny B2B z dokumentacją.</p>
          <div className="final-cta__ctas">
            <LocalizedClientLink href="/b2b" className="btn btn--primary btn--lg">Poproś o wycenę B2B</LocalizedClientLink>
            <LocalizedClientLink href="/store" className="btn btn--accent btn--lg">Przejdź do sklepu</LocalizedClientLink>
            <LocalizedClientLink href="/kontakt" className="btn btn--ghost btn--lg">Umów konsultację</LocalizedClientLink>
          </div>
        </div>
      </section>
    </div>
  )
}
