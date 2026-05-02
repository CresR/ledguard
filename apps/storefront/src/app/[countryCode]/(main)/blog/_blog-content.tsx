"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CATEGORIES = [
  "Wszystkie",
  "Technologia",
  "Healthcare",
  "Gastronomia",
  "Energooszczędność",
  "Projektowanie",
  "Aktualności",
]

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie")

  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Blog</span>
        </div>
      </div>

      {/* HERO */}
      <section className="blog-hero">
        <div className="shell">
          <div className="eyebrow">Wiedza i poradniki</div>
          <h1>Blog LEDGUARD</h1>
          <p>Artykuły o technologii EVLN, projektowaniu oświetlenia, energooszczędności i higienie w obiektach komercyjnych i medycznych.</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="blog-main">
        <div className="shell">
          <div className="blog-layout">
            {/* POSTS COLUMN */}
            <div>
              {/* Category tabs */}
              <div className="cat-tabs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`cat-tab${activeCategory === cat ? " is-active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* FEATURED POST */}
              <LocalizedClientLink href="/blog" className="post-featured">
                <div className="post-featured__ph ph ph--photo">
                  <div className="ph__label">Zdjęcie artykułu · 800×600</div>
                </div>
                <div className="post-featured__body">
                  <div className="post-featured__cat">Technologia · Wyróżniony</div>
                  <h2>Oświetlenie dezynfekujące bez UV — jak działa technologia EVLN?</h2>
                  <p>Wyjaśniamy mechanizm fotochemiczny stojący za EVLN: od absorpcji fotonów przez porfiryny w komórkach bakterii, przez powstanie reaktywnych form tlenu, aż do dezintegracji komórki. Bez UV, bez chemii.</p>
                  <div className="post-featured__meta">
                    <strong>Zespół LEDGUARD</strong>
                    <span>28.04.2026</span>
                    <span>8 min czytania</span>
                  </div>
                  <LocalizedClientLink href="/blog" className="btn btn--primary" style={{ marginTop: "20px" }}>
                    Czytaj artykuł →
                  </LocalizedClientLink>
                </div>
              </LocalizedClientLink>

              {/* POST GRID */}
              <div className="posts-grid">
                <LocalizedClientLink href="/blog" className="post-card">
                  <div className="post-card__ph ph"><div className="ph__label">Cover 1200×675</div></div>
                  <div className="post-card__body">
                    <div className="post-card__cat">Healthcare</div>
                    <h3>Jak dobrać oświetlenie LED do gabinetu lekarskiego?</h3>
                    <p>Temperatura barwowa, CRI, migotanie — co naprawdę ma znaczenie w gabinecie medycznym.</p>
                    <div className="post-card__meta">
                      <span>21.04.2026 · 12 min</span>
                      <span className="post-card__read">Czytaj →</span>
                    </div>
                  </div>
                </LocalizedClientLink>

                <LocalizedClientLink href="/blog" className="post-card">
                  <div className="post-card__ph ph"><div className="ph__label">Cover 1200×675</div></div>
                  <div className="post-card__body">
                    <div className="post-card__cat">Energooszczędność</div>
                    <h3>Jak obniżyć koszty energii w firmie dzięki LED — realne dane z 3 wdrożeń</h3>
                    <p>Oszczędności 40–65% na energii elektrycznej w przeliczeniu na rok. Prezentujemy twarde liczby.</p>
                    <div className="post-card__meta">
                      <span>14.04.2026 · 10 min</span>
                      <span className="post-card__read">Czytaj →</span>
                    </div>
                  </div>
                </LocalizedClientLink>

                <LocalizedClientLink href="/blog" className="post-card">
                  <div className="post-card__ph ph"><div className="ph__label">Cover 1200×675</div></div>
                  <div className="post-card__body">
                    <div className="post-card__cat">Gastronomia</div>
                    <h3>HACCP a oświetlenie — co mówią przepisy i jak EVSun spełnia wymagania</h3>
                    <p>Wymagania sanitarne dla kuchni profesjonalnych i jak dobór opraw IP65 wpływa na audyt HACCP.</p>
                    <div className="post-card__meta">
                      <span>07.04.2026 · 9 min</span>
                      <span className="post-card__read">Czytaj →</span>
                    </div>
                  </div>
                </LocalizedClientLink>

                <LocalizedClientLink href="/blog" className="post-card">
                  <div className="post-card__ph ph"><div className="ph__label">Cover 1200×675</div></div>
                  <div className="post-card__body">
                    <div className="post-card__cat">Projektowanie</div>
                    <h3>Jak zaprojektować oświetlenie biura pod WELL Building Standard?</h3>
                    <p>Wymagania WELL v2 dla kategorii Light — minimalne natężenie, CRI, modulacja, circadian lighting.</p>
                    <div className="post-card__meta">
                      <span>01.04.2026 · 14 min</span>
                      <span className="post-card__read">Czytaj →</span>
                    </div>
                  </div>
                </LocalizedClientLink>

                <LocalizedClientLink href="/blog" className="post-card">
                  <div className="post-card__ph ph"><div className="ph__label">Cover 1200×675</div></div>
                  <div className="post-card__body">
                    <div className="post-card__cat">Technologia</div>
                    <h3>Blue Care — dlaczego ograniczenie niebieskiego spektrum poprawia sen i koncentrację</h3>
                    <p>Wpływ CCT i niebieskiego spektrum na melatoninę, sen i produktywność. Co mówi nauka.</p>
                    <div className="post-card__meta">
                      <span>24.03.2026 · 11 min</span>
                      <span className="post-card__read">Czytaj →</span>
                    </div>
                  </div>
                </LocalizedClientLink>

                <LocalizedClientLink href="/blog" className="post-card">
                  <div className="post-card__ph ph"><div className="ph__label">Cover 1200×675</div></div>
                  <div className="post-card__body">
                    <div className="post-card__cat">Aktualności</div>
                    <h3>EVSun EVLN w szpitalu powiatowym — wyniki po 60 dniach monitoringu IAQ</h3>
                    <p>Analiza wyników badania jakości powietrza (IAQ) przed wdrożeniem i po 60 dniach ciągłej pracy opraw.</p>
                    <div className="post-card__meta">
                      <span>17.03.2026 · 7 min</span>
                      <span className="post-card__read">Czytaj →</span>
                    </div>
                  </div>
                </LocalizedClientLink>
              </div>

              {/* PAGINATION */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "32px", gap: "8px", alignItems: "center" }}>
                <button className="btn btn--ghost btn--sm" disabled style={{ opacity: 0.4 }}>←</button>
                <button className="btn btn--primary btn--sm" style={{ width: "38px", padding: "0" }}>1</button>
                <button className="btn btn--ghost btn--sm" style={{ width: "38px", padding: "0" }}>2</button>
                <button className="btn btn--ghost btn--sm" style={{ width: "38px", padding: "0" }}>3</button>
                <button className="btn btn--ghost btn--sm">→</button>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="blog-sidebar">
              {/* Popular posts */}
              <div className="sidebar-widget">
                <h4>Popularne artykuły</h4>
                <div className="popular-post">
                  <span className="popular-post__num">01</span>
                  <div>
                    <div className="popular-post__title">Jak działa technologia EVLN?</div>
                    <div className="popular-post__meta">8 min · 2 840 odczytań</div>
                  </div>
                </div>
                <div className="popular-post">
                  <span className="popular-post__num">02</span>
                  <div>
                    <div className="popular-post__title">Dobór oświetlenia do gabinetu lekarskiego</div>
                    <div className="popular-post__meta">12 min · 1 920 odczytań</div>
                  </div>
                </div>
                <div className="popular-post">
                  <span className="popular-post__num">03</span>
                  <div>
                    <div className="popular-post__title">Oszczędności energii — realne dane</div>
                    <div className="popular-post__meta">10 min · 1 540 odczytań</div>
                  </div>
                </div>
                <div className="popular-post">
                  <span className="popular-post__num">04</span>
                  <div>
                    <div className="popular-post__title">HACCP a oświetlenie gastronomiczne</div>
                    <div className="popular-post__meta">9 min · 1 210 odczytań</div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="sidebar-widget">
                <h4>Newsletter</h4>
                <p style={{ fontSize: "13px", color: "var(--ink-3)", marginBottom: "12px", lineHeight: "1.5" }}>
                  Nowe artykuły, aktualności EVSun i poradniki — raz w miesiącu.
                </p>
                <form
                  className="newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert("Dziękujemy za zapis!")
                  }}
                >
                  <input type="email" required placeholder="Twój e-mail" aria-label="Adres e-mail do newslettera" />
                  <button type="submit" className="btn btn--primary">Zapisz się</button>
                </form>
              </div>

              {/* Tags */}
              <div className="sidebar-widget">
                <h4>Tagi</h4>
                <div className="tag-cloud">
                  <span className="chip">EVLN</span>
                  <span className="chip">dezynfekcja</span>
                  <span className="chip">LED</span>
                  <span className="chip">szpital</span>
                  <span className="chip">HACCP</span>
                  <span className="chip">Blue Care</span>
                  <span className="chip">energooszczędność</span>
                  <span className="chip">WELL</span>
                  <span className="chip">non-flicker</span>
                  <span className="chip">certyfikaty</span>
                  <span className="chip">B2B</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
