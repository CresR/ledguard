"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Check = ({ size = 16, strokeWidth = 2.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function B2BContent() {
  const [quickSubmitted, setQuickSubmitted] = useState(false)
  const [fullSubmitted, setFullSubmitted] = useState(false)

  function handleQuickSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert("Dziękujemy — odezwiemy się w 24h.")
    ;(e.target as HTMLFormElement).reset()
    setQuickSubmitted(true)
  }

  function handleFullSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert("Dziękujemy — odezwiemy się w 24h.")
    ;(e.target as HTMLFormElement).reset()
    setFullSubmitted(true)
  }

  return (
    <div className="ledg-design">

      {/* HERO */}
      <section className="b2b-hero">
        <div className="shell">
          <div className="b2b-hero__grid">
            <div>
              <div className="eyebrow" style={{ color: "var(--cyan-400)" }}>Strefa Partnera B2B</div>
              <h1>Wycena projektu<br />w <em>24 godziny</em></h1>
              <p>Dostarczamy kompletne rozwiązania oświetleniowe dla szpitali, hoteli, gastronomii, biur i obiektów przemysłowych — z pełną dokumentacją techniczną, warunkami hurtowymi i 2-letnią gwarancją.</p>
              <div className="b2b-hero__perks">
                <div className="b2b-hero__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Bezpłatne dobór produktów i projekt oświetlenia
                </div>
                <div className="b2b-hero__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Komplet dokumentów do przetargów publicznych
                </div>
                <div className="b2b-hero__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Rabaty hurtowe od 15% przy zamówieniach ≥ 20 szt.
                </div>
                <div className="b2b-hero__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Obsługa projektów UE i zamówień publicznych
                </div>
                <div className="b2b-hero__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Dystrybucja w Polsce, EU, Ukraina, MENA
                </div>
              </div>
              <div className="b2b-hero__ctas">
                <a href="#b2b-form" className="btn btn--accent btn--lg">Poproś o wycenę B2B</a>
                <LocalizedClientLink
                  href="/pobierz"
                  className="btn"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
                >
                  Pobierz pakiet inwestora
                </LocalizedClientLink>
              </div>
            </div>

            <form className="qform" id="b2b-form" onSubmit={handleQuickSubmit}>
              <h3>Szybkie zapytanie B2B</h3>
              <p className="sub">Wypełnij i oddzwonimy w ciągu 4 godzin roboczych.</p>
              <div style={{ display: "grid", gap: "12px" }}>
                <div className="qform-row">
                  <div className="field">
                    <label htmlFor="b2b-name-quick">Imię i nazwisko <span className="req">*</span></label>
                    <input id="b2b-name-quick" required placeholder="Anna Kowalska" />
                  </div>
                  <div className="field">
                    <label htmlFor="b2b-company-quick">Firma</label>
                    <input id="b2b-company-quick" placeholder="Sp. z o.o." />
                  </div>
                </div>
                <div className="qform-row">
                  <div className="field">
                    <label htmlFor="b2b-email-quick">E-mail <span className="req">*</span></label>
                    <input id="b2b-email-quick" type="email" required placeholder="anna@firma.pl" />
                  </div>
                  <div className="field">
                    <label htmlFor="b2b-phone-quick">Telefon</label>
                    <input id="b2b-phone-quick" type="tel" placeholder="+48 ..." />
                  </div>
                </div>
                <div className="qform-row">
                  <div className="field">
                    <label htmlFor="b2b-type-quick">Typ obiektu</label>
                    <select id="b2b-type-quick">
                      <option>Szpital / klinika</option>
                      <option>Hotel / SPA</option>
                      <option>Gastronomia</option>
                      <option>Biuro</option>
                      <option>Produkcja / magazyn</option>
                      <option>Szkoła / uczelnia</option>
                      <option>Handel detaliczny</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="b2b-area-quick">Pow. (m²)</label>
                    <input id="b2b-area-quick" type="number" placeholder="1200" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="b2b-notes-quick">Uwagi / specyficzne wymagania</label>
                  <textarea
                    id="b2b-notes-quick"
                    placeholder="np. klasa czystości ISO 7, HACCP, certyfikaty BREEAM…"
                    style={{ minHeight: "80px" }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--accent btn--lg" style={{ width: "100%", justifyContent: "center" }}>
                  Wyślij zapytanie →
                </button>
                <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                  Pełen formularz z załącznikami dostępny poniżej. Odpowiedź w 24h robocze.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="segments">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Segmenty B2B</div>
            <h2>Dla kogo mamy rozwiązania</h2>
          </div>
          <div className="seg-grid">
            <div className="seg-card">
              <div className="seg-card__ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Szpitale i kliniki</h3>
              <p>Sale chorych, gabinety, bloki operacyjne, korytarze. Wsparcie przy redukcji HAI, dokumentacja do przetargów NFZ i PZP.</p>
              <ul className="seg-card__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Atest PZH wymagany — mamy</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Raport TÜV SÜD i UGENE</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Dokumentacja do PZP (SIWZ)</li>
              </ul>
            </div>
            <div className="seg-card">
              <div className="seg-card__ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                  <rect x="12" y="2" width="8" height="6" rx="1" />
                </svg>
              </div>
              <h3>Hotele i obiekty SPA</h3>
              <p>Restauracje, pokoje hotelowe, strefy wellness, SPA. Dyskretna higiena bez kompromisów estetycznych.</p>
              <ul className="seg-card__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Blue Care — komfort gości</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Desig-friendly — wiele kształtów</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Certyfikat WELL Building</li>
              </ul>
            </div>
            <div className="seg-card">
              <div className="seg-card__ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Gastronomia i food service</h3>
              <p>Kuchnie produkcyjne, linie wydawcze, chłodnie. Hermetyczne EVLN-VL IP65, zgodność z HACCP.</p>
              <ul className="seg-card__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>IP65 — wodoszczelne oprawy</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Atest IBPRS dla żywności</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Obsługa sieci i franczyz</li>
              </ul>
            </div>
            <div className="seg-card">
              <div className="seg-card__ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Biura i coworking</h3>
              <p>Open space, sale konferencyjne, recepcje. Certyfikat WELL, BREEAM, LEED. Non-flicker i Blue Care — mniej zwolnień.</p>
              <ul className="seg-card__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>WELL Building Standard</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>UGR ≤ 19, Ra ≥ 80</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Integracja KNX / DALI</li>
              </ul>
            </div>
            <div className="seg-card">
              <div className="seg-card__ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3>Szkoły i uczelnie</h3>
              <p>Klasy, świetlice, sale gimnastyczne, laboratoria. Redukcja sezonowych infekcji i komfort wzroku dla uczniów.</p>
              <ul className="seg-card__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Bezpieczne dla dzieci — bez UV</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Warunki EduGrant i MEN</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Wycena w 24h</li>
              </ul>
            </div>
            <div className="seg-card">
              <div className="seg-card__ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <path d="M7 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01" />
                </svg>
              </div>
              <h3>Produkcja i magazyny</h3>
              <p>Hale produkcyjne, chłodnie, magazyny high-bay. Przemysłowe EVLN-HBN 100–200W, IP65, trwałość 50 000h.</p>
              <ul className="seg-card__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>HighBay 100–200W, IP65</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Klasa EX na zamówienie</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Leasing i wynajem długoterminowy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="pricing">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Cennik B2B</div>
            <h2>Warunki hurtowe i programy partnerskie</h2>
          </div>
          <div className="pricing-grid">
            <div className="tier tier--standard">
              <div className="tier__badge">Partner Standard</div>
              <h3>Zamawiający / dystrybutor</h3>
              <div className="tier__discount">−15%</div>
              <div className="tier__from">od 20 szt. jednej referencji</div>
              <ul className="tier__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Cennik netto</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Dokumentacja techniczna PDF</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Faktura VAT</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Wsparcie e-mail</li>
              </ul>
              <div className="tier__cta"><a href="#b2b-form" className="btn btn--primary">Złóż zapytanie</a></div>
            </div>
            <div className="tier tier--featured">
              <div className="tier__badge">Partner Preferowany ★</div>
              <h3>Integrator / wykonawca</h3>
              <div className="tier__discount">−25%</div>
              <div className="tier__from">od 100 szt. / 30 000 PLN netto</div>
              <ul className="tier__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Wszystko z Standard</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Bezpłatne projekty oświetlenia DIALux</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Komplet dokumentów przetargowych</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Opiekun projektu + tel. priorytet</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Płatność 30/60 dni</li>
              </ul>
              <div className="tier__cta"><a href="#b2b-form" className="btn btn--accent">Zostań partnerem</a></div>
            </div>
            <div className="tier tier--premium">
              <div className="tier__badge">Dystrybutor regionalny</div>
              <h3>Wyłączna dystrybucja</h3>
              <div className="tier__discount">−40%</div>
              <div className="tier__from">min. 200 000 PLN / rok</div>
              <ul className="tier__list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Wszystko z Preferowanego</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Wyłączność na region / branżę</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Branding EVSun na materiałach</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Szkolenia produktowe i demo</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Konsygnacja do 60 dni</li>
              </ul>
              <div className="tier__cta">
                <LocalizedClientLink href="/kontakt" className="btn btn--primary">Skontaktuj się</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="process">
        <div className="shell">
          <div className="section__head section__head--center">
            <div className="eyebrow">Jak to działa</div>
            <h2>Realizacja projektu w 5 krokach</h2>
          </div>
          <div className="timeline">
            <div className="tl-step">
              <div className="tl-step__dot">1</div>
              <h4>Zapytanie</h4>
              <p>Wypełnij formularz lub zadzwoń — opisz obiekt i potrzeby</p>
            </div>
            <div className="tl-step">
              <div className="tl-step__dot">2</div>
              <h4>Dobór</h4>
              <p>Nasz specjalista proponuje produkty i ilości w 24h</p>
            </div>
            <div className="tl-step">
              <div className="tl-step__dot">3</div>
              <h4>Wycena</h4>
              <p>Oferta z cenami netto, warunkami i dokumentacją</p>
            </div>
            <div className="tl-step">
              <div className="tl-step__dot">4</div>
              <h4>Zamówienie</h4>
              <p>Akceptacja, faktura, wysyłka 24–48h z magazynu PL</p>
            </div>
            <div className="tl-step">
              <div className="tl-step__dot">5</div>
              <h4>Wsparcie</h4>
              <p>Montaż, odbiór, serwis, dokumentacja powykonawcza</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCS PACKAGE */}
      <section className="docs-pkg">
        <div className="shell">
          <div className="docs-grid">
            <div>
              <div className="eyebrow">Dokumentacja przetargowa</div>
              <h2>Pełna dokumentacja do przetargów publicznych</h2>
              <p style={{ color: "var(--ink-2)", fontSize: "15px", marginTop: "14px", lineHeight: "1.65" }}>
                Każde zamówienie B2B obejmuje komplet dokumentów wymaganych w postępowaniach o udzielenie zamówienia publicznego (PZP) w Polsce i UE.
              </p>
              <div className="doc-chips">
                <span className="chip">Deklaracja CE</span>
                <span className="chip">Atest PZH</span>
                <span className="chip">Atest IBPRS</span>
                <span className="chip">Raport TÜV SÜD</span>
                <span className="chip">Raport UGENE</span>
                <span className="chip">Karta katalogowa</span>
                <span className="chip">Deklaracja właściwości użytkowych</span>
                <span className="chip">Projekt DIALux</span>
                <span className="chip">Karty MSDS</span>
                <span className="chip">Gwarancja 2-letnia</span>
              </div>
              <LocalizedClientLink href="/pobierz" className="btn btn--primary" style={{ marginTop: "24px" }}>
                Pobierz pakiet inwestora (PDF)
              </LocalizedClientLink>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "16px", padding: "36px" }}>
              <div className="eyebrow">Referencje</div>
              <h3 style={{ fontSize: "22px", marginBottom: "20px" }}>Realizacje referencyjne</h3>
              <div style={{ display: "grid", gap: "16px" }}>
                <div style={{ padding: "16px", background: "var(--white)", borderRadius: "10px", border: "1px solid var(--line)" }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>Szpital Powiatowy — Mazowieckie</div>
                  <div style={{ fontSize: "12px", color: "var(--ink-3)", marginTop: "4px" }}>280 lamp EVLN-DL · sale chorych i korytarze · 2025</div>
                </div>
                <div style={{ padding: "16px", background: "var(--white)", borderRadius: "10px", border: "1px solid var(--line)" }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>Sieć restauracji — Warszawa × 12 lokali</div>
                  <div style={{ fontSize: "12px", color: "var(--ink-3)", marginTop: "4px" }}>EVLN-VL hermetyczne IP65 · kuchnie HACCP · 2025</div>
                </div>
                <div style={{ padding: "16px", background: "var(--white)", borderRadius: "10px", border: "1px solid var(--line)" }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>Centrum biurowe — Kraków 4200 m²</div>
                  <div style={{ fontSize: "12px", color: "var(--ink-3)", marginTop: "4px" }}>Panele EVLN-PL Blue Care · WELL Ready · 2024</div>
                </div>
                <LocalizedClientLink href="/realizacje" className="btn btn--text">Wszystkie realizacje →</LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA NAVY */}
      <section className="b2b-cta-navy">
        <div className="shell">
          <div className="eyebrow" style={{ color: "var(--cyan-400)", display: "inline-flex", justifyContent: "center" }}>Porozmawiajmy</div>
          <h2 style={{ color: "var(--white)", maxWidth: "700px", margin: "0 auto 14px" }}>Gotowy na wycenę? Oddzwonimy w 4h robocze.</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "17px", maxWidth: "540px", margin: "0 auto 28px" }}>
            Wyślij zapytanie lub zadzwoń bezpośrednio do zespołu B2B.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#b2b-form" className="btn btn--accent btn--lg">Formularz B2B</a>
            <a
              href="tel:+48221108800"
              className="btn btn--lg"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              +48 22 110 88 00
            </a>
            <LocalizedClientLink
              href="/kontakt"
              className="btn btn--lg btn--ghost"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}
            >
              Kontakt ogólny
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* DETAILED CONTACT FORM */}
      <section className="b2b-contact" id="formularz-pelny">
        <div className="shell">
          <div className="b2b-contact-grid">
            <div className="b2b-contact-info">
              <div className="eyebrow">Pełne zapytanie B2B</div>
              <h3>Szczegółowe zapytanie z załącznikami</h3>
              <p>Opisz projekt dokładnie — rzut obiektu, liczbę pomieszczeń, wymagania techniczne. Przygotujemy kompletną ofertę z doborem oświetlenia i dokumentacją.</p>
              <div className="b2b-contact-info__perks">
                <div className="b2b-contact-info__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Odpowiedź z wyceną w 24h robocze
                </div>
                <div className="b2b-contact-info__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Bezpłatny projekt oświetlenia DIALux
                </div>
                <div className="b2b-contact-info__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Komplet dokumentów przetargowych
                </div>
                <div className="b2b-contact-info__perk">
                  <Check size={16} strokeWidth={2.5} />
                  Dedykowany opiekun projektu
                </div>
              </div>
              <div style={{ marginTop: "28px", padding: "18px 20px", background: "var(--white)", border: "1px solid var(--line)", borderRadius: "12px" }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--navy)", marginBottom: "8px" }}>Kontakt bezpośredni</div>
                <div style={{ fontSize: "14px", color: "var(--ink-2)" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <a href="mailto:b2b@ledguard.pl" style={{ color: "var(--cyan-600)", fontWeight: 500 }}>b2b@ledguard.pl</a>
                  </div>
                  <div>
                    <a href="tel:+48221108800" style={{ color: "var(--navy)", fontWeight: 500 }}>+48 22 110 88 00</a>
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--ink-3)", marginTop: "6px" }}>Pon–Pt 8:00–17:00</div>
                </div>
              </div>
            </div>

            <div className="b2b-contact-form">
              <h3>Formularz szczegółowy B2B</h3>
              <form onSubmit={handleFullSubmit} style={{ display: "grid", gap: "16px" }}>
                <div className="b2b-form-row">
                  <div className="field">
                    <label htmlFor="b2b-name-full">Imię i nazwisko <span className="req">*</span></label>
                    <input id="b2b-name-full" required placeholder="Anna Kowalska" />
                  </div>
                  <div className="field">
                    <label htmlFor="b2b-company-full">Firma <span className="req">*</span></label>
                    <input id="b2b-company-full" required placeholder="Szpital / Hotel / Sp. z o.o." />
                  </div>
                </div>
                <div className="b2b-form-row">
                  <div className="field">
                    <label htmlFor="b2b-email-full">E-mail służbowy <span className="req">*</span></label>
                    <input id="b2b-email-full" type="email" required placeholder="anna@firma.pl" />
                  </div>
                  <div className="field">
                    <label htmlFor="b2b-phone-full">Telefon <span className="req">*</span></label>
                    <input id="b2b-phone-full" type="tel" required placeholder="+48 ..." />
                  </div>
                </div>
                <div className="b2b-form-row">
                  <div className="field">
                    <label htmlFor="b2b-type-full">Typ obiektu</label>
                    <select id="b2b-type-full">
                      <option>Szpital / klinika</option>
                      <option>Hotel / SPA</option>
                      <option>Gastronomia</option>
                      <option>Biuro / coworking</option>
                      <option>Produkcja / magazyn</option>
                      <option>Szkoła / uczelnia</option>
                      <option>Handel detaliczny</option>
                      <option>Obiekt publiczny</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="b2b-area-full">Powierzchnia (m²)</label>
                    <input id="b2b-area-full" type="number" placeholder="np. 1200" />
                  </div>
                </div>
                <div className="b2b-form-row">
                  <div className="field">
                    <label htmlFor="b2b-qty-full">Szacowana liczba lamp</label>
                    <input id="b2b-qty-full" type="number" placeholder="np. 50" />
                  </div>
                  <div className="field">
                    <label htmlFor="b2b-tier-full">Interesujący program</label>
                    <select id="b2b-tier-full">
                      <option>Partner Standard (−15%)</option>
                      <option>Partner Preferowany (−25%)</option>
                      <option>Dystrybutor regionalny (−40%)</option>
                      <option>Nie wiem — pomóżcie dobrać</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="b2b-message-full">Opis projektu / wymagania</label>
                  <textarea
                    id="b2b-message-full"
                    placeholder="Opisz obiekt: typ pomieszczeń, wymagania techniczne (klasa czystości, HACCP, BREEAM), harmonogram, inne potrzeby…"
                    style={{ minHeight: "120px" }}
                  ></textarea>
                </div>
                <div className="field">
                  <label htmlFor="b2b-nip-full">NIP firmy</label>
                  <input id="b2b-nip-full" placeholder="000-000-00-00" />
                </div>
                <div className="checkbox">
                  <input id="b2b-consent" type="checkbox" required />
                  <label htmlFor="b2b-consent">
                    Wyrażam zgodę na przetwarzanie danych osobowych w celu przygotowania oferty handlowej przez EVS sp. z o.o. <span className="req">*</span>
                  </label>
                </div>
                <button type="submit" className="btn btn--accent btn--lg" style={{ width: "100%", justifyContent: "center" }}>
                  Wyślij zapytanie B2B →
                </button>
                <p style={{ fontSize: "12px", color: "var(--ink-3)", textAlign: "center" }}>
                  EVS sp. z o.o. · ul. Bolesława Prusa 7A, Kleosin · NIP: 5423491568 · Odpowiedź w 24h robocze.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
