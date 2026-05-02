"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"

const FILTERS = ["Wszystkie", "PDF", "ZIP", "PL", "EN", "Certyfikaty", "Karty produktów", "Raporty badań"]

const IconFile = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const IconPdfFile = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const IconZipFile = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
)

export default function PobierzContent() {
  const [activeFilter, setActiveFilter] = useState("Wszystkie")
  const [activeNav, setActiveNav] = useState("certyfikaty")

  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Do pobrania</span>
        </div>
      </div>

      {/* HERO */}
      <section className="dl-hero">
        <div className="shell">
          <div className="eyebrow">Centrum dokumentów</div>
          <h1>Dokumentacja techniczna do pobrania</h1>
          <p>
            Karty katalogowe, certyfikaty, atesty, deklaracje, raporty z badań, projekty DIALux
            oraz materiały dla architektów i inwestorów — wszystko w jednym miejscu.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="dl-main">
        <div className="shell">
          <div className="dl-layout">

            {/* SIDEBAR NAV */}
            <aside className="dl-nav">
              <a
                href="#certyfikaty"
                className={activeNav === "certyfikaty" ? "is-active" : ""}
                onClick={() => setActiveNav("certyfikaty")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Certyfikaty i atesty
              </a>
              <a
                href="#katalogi"
                className={activeNav === "katalogi" ? "is-active" : ""}
                onClick={() => setActiveNav("katalogi")}
              >
                <IconFile />
                Karty katalogowe
              </a>
              <a
                href="#badania"
                className={activeNav === "badania" ? "is-active" : ""}
                onClick={() => setActiveNav("badania")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                </svg>
                Raporty z badań
              </a>
              <a
                href="#montaz"
                className={activeNav === "montaz" ? "is-active" : ""}
                onClick={() => setActiveNav("montaz")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
                </svg>
                Instrukcje montażu
              </a>
              <div className="dl-nav__divider" />
              <a
                href="#inwestor"
                className={activeNav === "inwestor" ? "is-active" : ""}
                onClick={() => setActiveNav("inwestor")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Pakiet inwestora
              </a>
              <a
                href="#dialux"
                className={activeNav === "dialux" ? "is-active" : ""}
                onClick={() => setActiveNav("dialux")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                Projekty DIALux / IES
              </a>
              <a
                href="#marketing"
                className={activeNav === "marketing" ? "is-active" : ""}
                onClick={() => setActiveNav("marketing")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                Materiały marketingowe
              </a>
            </aside>

            <div>
              {/* SEARCH */}
              <div className="dl-search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="search" placeholder="Szukaj dokumentu, produktu, certyfikatu…" />
              </div>

              {/* FILTER CHIPS */}
              <div className="dl-filters">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    className={`dl-filter${activeFilter === f ? " is-active" : ""}`}
                    onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* CERTYFIKATY */}
              <div className="dl-cat" id="certyfikaty">
                <div className="dl-cat__head">
                  <h2>Certyfikaty i atesty</h2>
                  <span className="dl-cat__count">7 plików</span>
                </div>
                <div className="dl-list">
                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">Atest higieniczny PZH — lampy EVSun EVLN</div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">PZH</span>
                        <span className="dl-file__tag">PL</span>
                        <span className="dl-file__size">420 KB</span>
                        <span className="dl-file__date">2024-03-15</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>

                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">Atest IBPRS — przemysł spożywczy / HACCP</div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">IBPRS</span>
                        <span className="dl-file__tag">PL</span>
                        <span className="dl-file__size">380 KB</span>
                        <span className="dl-file__date">2023-11-08</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>

                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">Deklaracja zgodności CE — seria EVLN-PL (panele)</div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">CE</span>
                        <span className="dl-file__tag">PL/EN</span>
                        <span className="dl-file__size">280 KB</span>
                        <span className="dl-file__date">2024-01-10</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>

                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--zip"><IconZipFile /></div>
                    <div>
                      <div className="dl-file__name">Komplet deklaracji CE — wszystkie serie (ZIP)</div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">CE</span>
                        <span className="dl-file__tag">ZIP</span>
                        <span className="dl-file__tag">PL/EN</span>
                        <span className="dl-file__size">2.1 MB</span>
                        <span className="dl-file__date">2024-01-10</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAPORTY */}
              <div className="dl-cat" id="badania">
                <div className="dl-cat__head">
                  <h2>Raporty z badań laboratoryjnych</h2>
                  <span className="dl-cat__count">5 plików</span>
                </div>
                <div className="dl-list">
                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">TÜV SÜD Witness Test — raport pełny</div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">TÜV SÜD</span>
                        <span className="dl-file__tag">EN</span>
                        <span className="dl-file__tag">99,71% S. aureus</span>
                        <span className="dl-file__size">1.2 MB</span>
                        <span className="dl-file__date">2023-09-12</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>

                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--zip"><IconZipFile /></div>
                    <div>
                      <div className="dl-file__name">
                        UGENE Laboratory — 4 raporty (S. aureus + E. coli, 6h + 24h)
                      </div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">UGENE</span>
                        <span className="dl-file__tag">EN</span>
                        <span className="dl-file__tag">ZIP</span>
                        <span className="dl-file__size">3.8 MB</span>
                        <span className="dl-file__date">2023-06-20</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* KARTY KATALOGOWE */}
              <div className="dl-cat" id="katalogi">
                <div className="dl-cat__head">
                  <h2>Karty katalogowe produktów</h2>
                  <span className="dl-cat__count">14 plików</span>
                </div>
                <div className="dl-list">
                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">
                        Karta katalogowa — Panel EVLN-PL (600×600, 300×1200, 600×1200)
                      </div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">EVLN-PL</span>
                        <span className="dl-file__tag">PL/EN</span>
                        <span className="dl-file__size">1.4 MB</span>
                        <span className="dl-file__date">2026-01-05</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>

                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">Karta katalogowa — Lampa podtynkowa EVLN-DL</div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">EVLN-DL</span>
                        <span className="dl-file__tag">PL/EN</span>
                        <span className="dl-file__size">980 KB</span>
                        <span className="dl-file__date">2026-01-05</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>

                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">Katalog produktów 2026 — pełna gama EVSun EVLN</div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">Katalog</span>
                        <span className="dl-file__tag">PL/EN</span>
                        <span className="dl-file__size">24 MB</span>
                        <span className="dl-file__date">2026-02-01</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAKIET INWESTORA */}
              <div className="dl-cat" id="inwestor">
                <div className="dl-cat__head">
                  <h2>Pakiet dla inwestora</h2>
                  <span className="dl-cat__count">3 zestawy</span>
                </div>
                <div className="dl-list">
                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--zip"><IconZipFile /></div>
                    <div>
                      <div className="dl-file__name">
                        Pakiet inwestora — PEŁNY (certyfikaty + karty + raporty)
                      </div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">ZIP</span>
                        <span className="dl-file__tag">PL/EN</span>
                        <span className="dl-file__tag">Przetargi</span>
                        <span className="dl-file__size">18 MB</span>
                        <span className="dl-file__date">2026-02-01</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--accent btn--sm">Pobierz</button>
                    </div>
                  </div>

                  <div className="dl-file">
                    <div className="dl-file__ico dl-file__ico--pdf"><IconPdfFile /></div>
                    <div>
                      <div className="dl-file__name">
                        Prezentacja technologii EVSun dla inwestorów i zarządów
                      </div>
                      <div className="dl-file__meta">
                        <span className="dl-file__tag">PDF</span>
                        <span className="dl-file__tag">PL</span>
                        <span className="dl-file__size">8.4 MB</span>
                        <span className="dl-file__date">2026-03-10</span>
                      </div>
                    </div>
                    <div className="dl-file__btn">
                      <button className="btn btn--primary btn--sm">Pobierz</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
