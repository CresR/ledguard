import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Badania i certyfikaty EVSun — TÜV SÜD, PZH, UGENE, IBPRS | LEDGUARD",
  description: "Pełna dokumentacja naukowa i certyfikaty EVSun: TÜV SÜD Witness Test, PZH, UGENE, IBPRS, CE. Skuteczność potwierdzona w niezależnych laboratoriach.",
}

export default function BadaniaPage() {
  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Badania i certyfikaty</span>
        </div>
      </div>

      {/* HERO */}
      <section className="research-hero">
        <div className="shell">
          <div className="research-hero__grid">
            <div>
              <div className="eyebrow">Dokumentacja naukowa</div>
              <h1>Badania i certyfikaty EVSun</h1>
              <p>Skuteczność technologii EVLN potwierdzona w niezależnych laboratoriach na trzech kontynentach. Wszystkie wyniki dostępne w formie pełnych raportów PDF.</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <LocalizedClientLink href="/pobierz" className="btn btn--primary">Pobierz wszystkie dokumenty</LocalizedClientLink>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat-item">
              <div className="stat-item__val">99,71%</div>
              <div className="stat-item__lbl">redukcja S. aureus · 6h · TÜV SÜD</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__val">99,98%</div>
              <div className="stat-item__lbl">redukcja E. coli · 24h · UGENE</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__val">5</div>
              <div className="stat-item__lbl">niezależnych laboratoriów</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__val">8</div>
              <div className="stat-item__lbl">certyfikatów i atestów</div>
            </div>
          </div>
          <div className="disclaimer-banner" style={{ marginTop: "28px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              <strong>Ważna informacja:</strong> Wszystkie wyniki badań odnoszą się do określonych warunków laboratoryjnych (komora testowa, temperatura, wilgotność, czas ekspozycji). Skuteczność w warunkach rzeczywistych zależy od specyfiki instalacji, wysokości montażu, odległości od powierzchni i czasu pracy opraw. EVSun EVLN nie zastępuje standardowych procedur dezynfekcji wymaganych w obiektach medycznych.
            </span>
          </div>
        </div>
      </section>

      {/* LABS */}
      <section className="labs">
        <div className="shell">
          <div className="section__head">
            <div className="eyebrow">Wyniki badań</div>
            <h2>Wyniki z niezależnych laboratoriów</h2>
          </div>
          <div className="labs-grid">

            {/* TÜV SÜD */}
            <div className="lab-card">
              <div className="lab-card__header">
                <div>
                  <div className="lab-card__name">TÜV SÜD</div>
                  <div className="lab-card__country">Niemcy · Witness Test · 2023</div>
                </div>
                <span className="badge">Najwyższe standardy</span>
              </div>
              <div className="lab-card__body">
                <div className="result-row">
                  <span className="result-row__org"><em>Staphylococcus aureus</em></span>
                  <span className="result-row__time">6 h</span>
                  <span className="result-row__pct">99,71%</span>
                </div>
                <div className="result-row">
                  <div className="result-row__bar"><span style={{ width: "99.71%" }}></span></div>
                </div>
              </div>
              <div className="lab-card__footer">
                <span>Komora testowa · kontrolowane warunki · certyfikowany Witness Test</span>
                <LocalizedClientLink href="/pobierz">Pobierz raport PDF ↓</LocalizedClientLink>
              </div>
            </div>

            {/* UGENE */}
            <div className="lab-card">
              <div className="lab-card__header">
                <div>
                  <div className="lab-card__name">UGENE Laboratory</div>
                  <div className="lab-card__country">Malezja · 2022–2023</div>
                </div>
                <span className="badge badge--navy">Seria 4 testów</span>
              </div>
              <div className="lab-card__body">
                <div className="result-row">
                  <span className="result-row__org"><em>S. aureus</em></span>
                  <span className="result-row__time">6 h</span>
                  <span className="result-row__pct">99,714%</span>
                </div>
                <div className="result-row">
                  <div className="result-row__bar"><span style={{ width: "99.71%" }}></span></div>
                </div>
                <div className="result-row">
                  <span className="result-row__org"><em>E. coli</em></span>
                  <span className="result-row__time">6 h</span>
                  <span className="result-row__pct">99,668%</span>
                </div>
                <div className="result-row">
                  <div className="result-row__bar"><span style={{ width: "99.67%" }}></span></div>
                </div>
                <div className="result-row">
                  <span className="result-row__org"><em>S. aureus</em></span>
                  <span className="result-row__time">24 h</span>
                  <span className="result-row__pct">99,938%</span>
                </div>
                <div className="result-row">
                  <div className="result-row__bar"><span style={{ width: "99.94%" }}></span></div>
                </div>
                <div className="result-row">
                  <span className="result-row__org"><em>E. coli</em></span>
                  <span className="result-row__time">24 h</span>
                  <span className="result-row__pct">99,984%</span>
                </div>
                <div className="result-row">
                  <div className="result-row__bar"><span style={{ width: "99.98%" }}></span></div>
                </div>
              </div>
              <div className="lab-card__footer">
                <span>Próba kontrolna · komora testowa ISO</span>
                <LocalizedClientLink href="/pobierz">Pobierz raporty ↓</LocalizedClientLink>
              </div>
            </div>

            {/* IBPRS */}
            <div className="lab-card">
              <div className="lab-card__header">
                <div>
                  <div className="lab-card__name">IBPRS</div>
                  <div className="lab-card__country">Polska · Instytut Biotechnologii Przemysłu Rolno-Spożywczego</div>
                </div>
                <span className="badge badge--success">Polska · PL</span>
              </div>
              <div className="lab-card__body">
                <p style={{ fontSize: "14px", color: "var(--ink-2)", lineHeight: "1.65", marginBottom: "16px" }}>
                  Badania w warunkach zbliżonych do przemysłu spożywczego — kuchnie, linie produkcyjne. Wyniki potwierdzają skuteczność w środowiskach gastronomicznych i HACCP.
                </p>
                <div className="result-row">
                  <span className="result-row__org"><em>Staphylococcus aureus</em></span>
                  <span className="result-row__time">6 h</span>
                  <span className="result-row__pct">99,71%</span>
                </div>
                <div className="result-row">
                  <div className="result-row__bar"><span style={{ width: "99.71%" }}></span></div>
                </div>
                <div className="result-row">
                  <span className="result-row__org"><em>Escherichia coli</em></span>
                  <span className="result-row__time">6 h</span>
                  <span className="result-row__pct">99,67%</span>
                </div>
                <div className="result-row">
                  <div className="result-row__bar"><span style={{ width: "99.67%" }}></span></div>
                </div>
                <div className="result-row">
                  <span className="result-row__org">Bakterie (środowisko spożywcze)</span>
                  <span className="result-row__time">ciągła ekspozycja</span>
                  <span className="result-row__pct">redukcja</span>
                </div>
              </div>
              <div className="lab-card__footer">
                <span>Dedykowane dla branży gastronomicznej i food service</span>
                <LocalizedClientLink href="/pobierz">Pobierz atest IBPRS ↓</LocalizedClientLink>
              </div>
            </div>

            {/* IAQ */}
            <div className="lab-card">
              <div className="lab-card__header">
                <div>
                  <div className="lab-card__name">IAQ Proof of Concept</div>
                  <div className="lab-card__country">Szpital — warunki rzeczywiste · Polska · 2024</div>
                </div>
                <span className="badge" style={{ background: "rgba(21,128,61,0.1)", color: "var(--success)" }}>Real-world PoC</span>
              </div>
              <div className="lab-card__body">
                <p style={{ fontSize: "14px", color: "var(--ink-2)", lineHeight: "1.65" }}>
                  Pilotażowe wdrożenie w oddziale szpitalnym — pomiary stężenia bakterii i grzybów w powietrzu (badanie IAQ) przed instalacją i po 14 dniach pracy opraw EVSun.
                </p>
                <div className="result-row" style={{ marginTop: "14px" }}>
                  <span className="result-row__org">Bakterie + grzyby · powietrze</span>
                  <span className="result-row__time">14 dni</span>
                  <span className="result-row__pct" style={{ fontSize: "16px" }}>Znaczna redukcja</span>
                </div>
              </div>
              <div className="lab-card__footer">
                <span>Wyniki na zamówienie — raport dostępny dla klientów B2B</span>
                <LocalizedClientLink href="/b2b">Poproś o dostęp ↓</LocalizedClientLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="certs">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Certyfikaty i atesty</div>
            <h2>Pełne portfolio certyfikacji EVSun</h2>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-card__logo">CE</div>
              <h4>Deklaracja zgodności CE</h4>
              <p>Zgodność z dyrektywami UE: EMC 2014/30/UE, LVD 2014/35/UE, RoHS 2011/65/UE.</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">EU</span>
                <span className="cert-card__badge">Obowiązkowy</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--sm">Pobierz PDF ↓</LocalizedClientLink>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-card__logo">PZH</div>
              <h4>Atest higieniczny PZH</h4>
              <p>Narodowy Instytut Zdrowia Publicznego — PZH, Warszawa. Potwierdzenie bezpieczeństwa higienicznego.</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">Polska</span>
                <span className="cert-card__badge">Wymagany szpitale</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--sm">Pobierz PDF ↓</LocalizedClientLink>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-card__logo">TÜV</div>
              <h4>TÜV SÜD Witness Test</h4>
              <p>Certyfikowany test skuteczności w obecności niezależnego obserwatora TÜV SÜD. 99,71% redukcji S. aureus.</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">Niemcy</span>
                <span className="cert-card__badge">Witness</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--sm">Pobierz PDF ↓</LocalizedClientLink>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-card__logo">UGENE</div>
              <h4>UGENE Laboratory Report</h4>
              <p>Seria 4 testów mikrobiologicznych — S. aureus i E. coli w czasie 6h i 24h w warunkach laboratoryjnych.</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">Malezja</span>
                <span className="cert-card__badge">ISO Lab</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--sm">Pobierz PDF ↓</LocalizedClientLink>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-card__logo">IBPRS</div>
              <h4>Atest IBPRS</h4>
              <p>Instytut Biotechnologii Przemysłu Rolno-Spożywczego — dla środowisk gastronomicznych i food service.</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">Polska</span>
                <span className="cert-card__badge">HACCP</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--sm">Pobierz PDF ↓</LocalizedClientLink>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-card__logo">SIRIM</div>
              <h4>SIRIM QAS International</h4>
              <p>Malezyjska certyfikacja bezpieczeństwa i jakości produktu. Standard MS IEC 62471 (fotobiologia).</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">Malezja</span>
                <span className="cert-card__badge">MS IEC 62471</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--sm">Pobierz PDF ↓</LocalizedClientLink>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-card__logo" style={{ fontSize: "10px" }}>ISO<br />9001</div>
              <h4>ISO 9001:2015</h4>
              <p>System zarządzania jakością producenta EVSun — procesy produkcji, kontrola jakości, dokumentacja.</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">EVSun Factory</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--sm">Pobierz PDF ↓</LocalizedClientLink>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-card__logo" style={{ fontSize: "10px" }}>ABCi<br />PAT</div>
              <h4>Patent EVLN (ABCi)</h4>
              <p>Ochrona patentowa technologii EVLN w Polsce i UE. Numer: PL · ABCi · 2021/0034.</p>
              <div className="cert-card__badges">
                <span className="cert-card__badge">PL</span>
                <span className="cert-card__badge">EU EPO</span>
                <span className="cert-card__badge">WIPO PCT</span>
              </div>
              <div className="cert-card__dl">
                <LocalizedClientLink href="/technologia" className="btn btn--ghost btn--sm">Więcej o patencie →</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE TEST */}
      <section className="how">
        <div className="shell">
          <div className="how-grid">
            <div>
              <div className="eyebrow">Metodologia</div>
              <h2>Jak przeprowadzamy badania</h2>
              <div className="how-steps">
                <div className="how-step">
                  <div className="how-step__num">1</div>
                  <div>
                    <h4>Niezależne laboratorium</h4>
                    <p>Wszystkie badania zlecane zewnętrznym laboratoriom — bez wpływu producenta na wyniki.</p>
                  </div>
                </div>
                <div className="how-step">
                  <div className="how-step__num">2</div>
                  <div>
                    <h4>Standaryzowane warunki testowe</h4>
                    <p>Komora testowa, kontrolowana temperatura (~25°C), wilgotność, czas ekspozycji i odległość od źródła.</p>
                  </div>
                </div>
                <div className="how-step">
                  <div className="how-step__num">3</div>
                  <div>
                    <h4>Próba kontrolna i próba testowa</h4>
                    <p>Każdy test zawiera grupę kontrolną bez działania światła — wyniki porównawcze.</p>
                  </div>
                </div>
                <div className="how-step">
                  <div className="how-step__num">4</div>
                  <div>
                    <h4>Pełna dokumentacja</h4>
                    <p>Raport PDF z surymi danymi, warunkami testu, podpisem laboratorium i datą wykonania.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-vis">
              <h3>Podsumowanie wyników</h3>
              <p>Wszystkie testy przeprowadzone w określonych warunkach laboratoryjnych. Wyniki w warunkach rzeczywistych mogą się różnić w zależności od specyfiki instalacji.</p>
              <div className="how-vis__stats">
                <div className="how-stat">
                  <div className="how-stat__val">5</div>
                  <div className="how-stat__lbl">niezależnych laboratoriów w 3 krajach</div>
                </div>
                <div className="how-stat">
                  <div className="how-stat__val">2022–<br />2024</div>
                  <div className="how-stat__lbl">lata przeprowadzonych badań</div>
                </div>
                <div className="how-stat">
                  <div className="how-stat__val">S. aureus<br />E. coli</div>
                  <div className="how-stat__lbl">testowane mikroorganizmy</div>
                </div>
                <div className="how-stat">
                  <div className="how-stat__val">6–24h</div>
                  <div className="how-stat__lbl">czasy ekspozycji w testach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="dl-section">
        <div className="shell">
          <div className="section__head" style={{ marginBottom: "32px" }}>
            <div className="eyebrow">Do pobrania</div>
            <h2>Pobierz dokumenty badań i certyfikatów</h2>
          </div>
          <div className="dl-grid">
            <LocalizedClientLink href="/pobierz" className="dl-item">
              <div className="dl-item__ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <div className="dl-item__name">Raport TÜV SÜD Witness Test</div>
                <div className="dl-item__meta">PDF · 1.2 MB · EN</div>
              </div>
              <span className="dl-item__btn">↓</span>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-item">
              <div className="dl-item__ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <div className="dl-item__name">Raporty UGENE Lab (4 testy)</div>
                <div className="dl-item__meta">ZIP · 3.8 MB · EN</div>
              </div>
              <span className="dl-item__btn">↓</span>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-item">
              <div className="dl-item__ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="dl-item__name">Atest higieniczny PZH</div>
                <div className="dl-item__meta">PDF · 420 KB · PL</div>
              </div>
              <span className="dl-item__btn">↓</span>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-item">
              <div className="dl-item__ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="dl-item__name">Atest IBPRS (gastronomia)</div>
                <div className="dl-item__meta">PDF · 380 KB · PL</div>
              </div>
              <span className="dl-item__btn">↓</span>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-item">
              <div className="dl-item__ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3 8-8M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div>
                <div className="dl-item__name">Deklaracje zgodności CE (komplet)</div>
                <div className="dl-item__meta">ZIP · 2.1 MB · PL/EN</div>
              </div>
              <span className="dl-item__btn">↓</span>
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="dl-item">
              <div className="dl-item__ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div>
                <div className="dl-item__name">Pakiet inwestora (wszystko)</div>
                <div className="dl-item__meta">ZIP · 18 MB · PL/EN</div>
              </div>
              <span className="dl-item__btn">↓</span>
            </LocalizedClientLink>
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <LocalizedClientLink href="/pobierz" className="btn btn--primary">
              Centrum dokumentów — wszystkie pliki
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </div>
  )
}
