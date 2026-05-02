import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Technologia EVLN — jak działa oświetlenie dezynfekujące EVSun | LEDGUARD",
  description:
    "Poznaj technologię EVLN: widoczne spektrum światła wspiera redukcję bakterii i grzybów bez UV, bez chemii. Potwierdzone badaniami TÜV SÜD, UGENE, PZH.",
}

export default function TechnologiaPage() {
  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Technologia EVLN</span>
        </div>
      </div>

      {/* HERO */}
      <section className="tech-hero">
        <div className="shell">
          <div className="tech-hero__grid">
            <div>
              <div className="eyebrow">EVLN · Enhanced Visible Light Node</div>
              <h1>
                Światło, które <em>dezynfekuje</em> — bez UV, bez chemii
              </h1>
              <p>
                EVLN to opatentowana technologia, która integruje specyficzne zakresy widocznego
                spektrum świetlnego z konwencjonalnym oświetleniem LED. Efektem jest redukcja
                bakterii i grzybów w otoczeniu — ciągła, bezpieczna, bez emisji UV i bez żadnej
                obsługi.
              </p>
              <div className="tech-hero__badges">
                <span className="chip">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Patent EVLN (ABCi)
                </span>
                <span className="chip">TÜV SÜD Witness Test</span>
                <span className="chip">Bez UV — bezpieczne przy ludziach</span>
                <span className="chip">PZH · CE · IBPRS</span>
              </div>
              <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <LocalizedClientLink href="/store" className="btn btn--primary">
                  Zobacz lampy EVLN
                </LocalizedClientLink>
                <LocalizedClientLink href="/badania" className="btn btn--ghost">
                  Wyniki badań →
                </LocalizedClientLink>
              </div>
            </div>
            <div>
              <div className="spectrum-wrap">
                <div className="spectrum-title">Spektrum świetlne — EVLN vs UV</div>
                <div className="spectrum-bar"></div>
                <div className="spectrum-labels">
                  <span>
                    200 nm<br />UV-C
                  </span>
                  <span>
                    315 nm<br />UV-A
                  </span>
                  <span>
                    380 nm<br />fiolet
                  </span>
                  <span>
                    450 nm<br />niebieski
                  </span>
                  <span>
                    550 nm<br />zielony
                  </span>
                  <span>
                    650 nm<br />czerwony
                  </span>
                  <span>
                    780 nm<br />IR
                  </span>
                </div>
                <div className="spectrum-zone">
                  <div className="spectrum-zone__dot"></div>
                  <span>
                    Strefa EVLN: <strong>450–600 nm</strong> — widoczne spektrum, aktywuje
                    fotouczulacze w bakteriach
                  </span>
                </div>
                <div className="no-uv-badge">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  UV (200–380 nm) — EVSun{" "}
                  <strong style={{ color: "#4ADE80" }}>NIE emituje</strong> UV · bezpieczne przy
                  ludziach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <div className="shell">
          <div className="section__head">
            <div className="eyebrow">Mechanizm działania</div>
            <h2>Jak EVLN redukuje bakterie i grzyby</h2>
            <p>
              Cztery etapy reakcji fotochemicznej, która zachodzi podczas normalnego użytkowania
              oświetlenia.
            </p>
          </div>
          <div className="steps__grid">
            <div className="step-list">
              <div className="step is-active">
                <div className="step__num">1</div>
                <div>
                  <h4>Emisja światła w zakresie EVLN (450–600 nm)</h4>
                  <p>
                    Diody LED w lampach EVSun emitują oprócz zwykłego białego oświetlenia także
                    specyficzny zakres widocznego spektrum (zielono-żółty, 450–600 nm). Nie jest to
                    UV — jest w pełni widoczne dla oka.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step__num">2</div>
                <div>
                  <h4>Absorpcja przez fotouczulacze w komórkach</h4>
                  <p>
                    Wewnątrz komórek bakterii i grzybów (m.in. <em>S. aureus, E. coli</em>) obecne
                    są naturalne fotouczulacze — porfiryny. Absorbują one energię ze spektrum EVLN.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step__num">3</div>
                <div>
                  <h4>Reakcja fotochemiczna — powstanie ROS</h4>
                  <p>
                    Pochłoniięta energia wyzwala reakcję fotochemiczną, w wyniku której powstają
                    reaktywne formy tlenu (ROS). Prowadzą one do peroksydacji lipidów błony
                    komórkowej mikroorganizmu.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step__num">4</div>
                <div>
                  <h4>Dezintegracja komórki — redukcja populacji</h4>
                  <p>
                    Uszkodzenie błony komórkowej prowadzi do śmierci bakterii lub grzyba. Proces
                    przebiega ciągle, przez cały czas pracy oświetlenia, nie wymaga wyłączania
                    pomieszczenia.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-visual">
              <div className="step-visual__title">Wizualizacja — komórka bakterii vs EVLN</div>
              <div className="cell-diagram">
                <div className="cell"></div>
                <div className="photon"></div>
                <div className="photon" style={{ animationDelay: "-1s" }}></div>
                <div className="photon" style={{ animationDelay: "-2s" }}></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    left: "14px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.06em",
                  }}
                >
                  FOTON EVLN · spektrum widzialne
                </div>
              </div>
              <div className="step-visual__stats">
                <div className="stat-box">
                  <div className="stat-box__val">99,71%</div>
                  <div className="stat-box__lbl">redukcja S. aureus · 6h · TÜV SÜD</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__val">99,98%</div>
                  <div className="stat-box__lbl">redukcja E. coli · 24h · UGENE Lab</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__val">0 UV</div>
                  <div className="stat-box__lbl">
                    brak emisji UV — bezpieczne przy ludziach 24/7
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-box__val">24/7</div>
                  <div className="stat-box__lbl">ciągła praca, zero dodatkowej obsługi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVLN vs UV */}
      <section className="vs-section">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">EVLN vs UV</div>
            <h2>Dlaczego EVLN, a nie lampy UV?</h2>
            <p>
              Lampy UV-C są skuteczne, ale wymagają wyłączenia pomieszczenia, mogą niszczyć
              materiały i są niebezpieczne dla ludzi. EVLN pracuje w obecności ludzi przez całą
              dobę.
            </p>
          </div>
          <div className="vs-grid">
            <div className="vs-card vs-card--uv">
              <h3>☠ Lampy UV-C (tradycyjne)</h3>
              <div className="vs-row vs-row--no">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Niebezpieczne dla ludzi — pomieszczenie musi być puste</span>
              </div>
              <div className="vs-row vs-row--no">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Praca tylko w trybie przerywanym, noce / weekendy</span>
              </div>
              <div className="vs-row vs-row--no">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Uszkadza tworzywa, kolory, tekstylia i skórę</span>
              </div>
              <div className="vs-row vs-row--no">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Osobna instalacja — nie zastępuje oświetlenia ogólnego</span>
              </div>
              <div className="vs-row vs-row--no">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Wymaga procedur BHP, szkoleń, blokad</span>
              </div>
              <div className="vs-row vs-row--no">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Wysoki koszt TCO — czujniki, interloki, serwis</span>
              </div>
            </div>
            <div className="vs-card vs-card--evln">
              <h3>✦ EVSun EVLN Technology</h3>
              <div className="vs-row vs-row--yes">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Bezpieczne w pełnej obecności ludzi, dzieci, zwierząt</span>
              </div>
              <div className="vs-row vs-row--yes">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Ciągła praca 24/7 — im dłużej świeci, tym skuteczniej</span>
              </div>
              <div className="vs-row vs-row--yes">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Nie wpływa na materiały, meble, kolory ani tkaniny</span>
              </div>
              <div className="vs-row vs-row--yes">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Zastępuje standardowe oświetlenie — jeden montaż</span>
              </div>
              <div className="vs-row vs-row--yes">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Zero dodatkowej obsługi, procedur i szkoleń</span>
              </div>
              <div className="vs-row vs-row--yes">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Niski TCO — energooszczędne LED + 2 lata gwarancji</span>
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "var(--ink-3)",
              textAlign: "center",
            }}
          >
            <strong>Ważne:</strong> EVSun EVLN jest uzupełnieniem — nie zastępuje standardowych
            procedur dezynfekcji wymaganych w obiektach medycznych.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="section">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Zastosowania</div>
            <h2>Gdzie sprawdza się technologia EVLN</h2>
          </div>
          <div className="apps-grid">
            <LocalizedClientLink href="/realizacje" className="app-card">
              <div className="app-card__ph ph ph--photo">
                <div className="ph__label">Zdjęcie: sala szpitalna / 1200×675</div>
              </div>
              <div className="app-card__body">
                <div className="app-card__tag">Healthcare</div>
                <h4>Szpitale, kliniki, gabinety</h4>
                <p>
                  Sale chorych, gabinety zabiegowe, korytarze, izolatki. Wsparcie przy redukcji HAI
                  (zakażeń szpitalnych). Wymagana dokumentacja CE + PZH.
                </p>
              </div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/realizacje" className="app-card">
              <div className="app-card__ph ph ph--photo">
                <div className="ph__label">Zdjęcie: kuchnia restauracyjna / 1200×675</div>
              </div>
              <div className="app-card__body">
                <div className="app-card__tag">Gastronomia</div>
                <h4>Restauracje, hotele, kuchnie</h4>
                <p>
                  Kuchnie produkcyjne, bufety, linie wydawcze. IP65, kompatybilność z wymaganiami
                  HACCP, mniej skażeń powierzchniowych.
                </p>
              </div>
            </LocalizedClientLink>
            <LocalizedClientLink href="/realizacje" className="app-card">
              <div className="app-card__ph ph ph--photo">
                <div className="ph__label">Zdjęcie: open space biurowy / 1200×675</div>
              </div>
              <div className="app-card__body">
                <div className="app-card__tag">Biura i edukacja</div>
                <h4>Open space, klasy, świetlice</h4>
                <p>
                  Redukcja sezonowych infekcji w przestrzeniach biurowych i szkolnych. Non-flicker
                  i Blue Care dla komfortu pracy.
                </p>
              </div>
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* PATENTS */}
      <section className="patents">
        <div className="shell">
          <div className="section__head" style={{ marginBottom: "40px" }}>
            <div className="eyebrow" style={{ color: "var(--cyan-400)" }}>
              Własność intelektualna
            </div>
            <h2 style={{ color: "var(--white)" }}>Patenty i ochrona technologii EVLN</h2>
          </div>
          <div className="patents__grid">
            <div className="patent-card">
              <div className="patent-card__num">PL · ABCi · 2021/0034</div>
              <h4>Metoda redukcji mikroorganizmów przy użyciu widocznego spektrum świetlnego</h4>
              <p>Patent obejmujący core technologii EVLN — użycie zakresu 450–600 nm do aktywacji fotouczulaczy.</p>
            </div>
            <div className="patent-card">
              <div className="patent-card__num">EU · EPO · 2022/119847</div>
              <h4>Wielofunkcyjna oprawa oświetleniowa z modułem dezynfekującym</h4>
              <p>Konstrukcja integrująca standardowe LED z modułem EVLN w jednej oprawie.</p>
            </div>
            <div className="patent-card">
              <div className="patent-card__num">MY · MyIPO · 2020/1234</div>
              <h4>Blue Care — spektralne ograniczenie emisji niebieskiej dla komfortu wzroku</h4>
              <p>Technologia Blue Care redukująca zmęczenie oczu przy długotrwałej pracy.</p>
            </div>
            <div className="patent-card">
              <div className="patent-card__num">WIPO · PCT/2023/045</div>
              <h4>System zarządzania ekspozycją EVLN w sieci opraw IoT</h4>
              <p>
                Zarządzanie strefami EVLN, monitoring i raportowanie redukcji — moduł SmartEVLN.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="final-cta"
        style={{ background: "var(--tint)", textAlign: "center", padding: "80px 0" }}
      >
        <div className="shell">
          <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
            Następny krok
          </div>
          <h2 style={{ maxWidth: "700px", margin: "0 auto 14px" }}>
            Chcesz zobaczyć wyniki badań lub dobrać produkt do obiektu?
          </h2>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto 28px",
              color: "var(--ink-3)",
              fontSize: "17px",
            }}
          >
            Pobierz raporty z niezależnych laboratoriów lub poproś o bezpłatną wycenę B2B.
          </p>
          <div
            style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <LocalizedClientLink href="/badania" className="btn btn--primary btn--lg">
              Badania i certyfikaty
            </LocalizedClientLink>
            <LocalizedClientLink href="/b2b" className="btn btn--accent btn--lg">
              Wycena B2B w 24h
            </LocalizedClientLink>
            <LocalizedClientLink href="/pobierz" className="btn btn--ghost btn--lg">
              Pobierz dokumenty
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </div>
  )
}
