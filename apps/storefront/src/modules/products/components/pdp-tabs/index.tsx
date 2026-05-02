"use client"

import { HttpTypes } from "@medusajs/types"
import { useState } from "react"

type PdpTabsProps = {
  product: HttpTypes.StoreProduct
}

type Tab = {
  id: string
  label: string
}

const TABS: Tab[] = [
  { id: "opis", label: "Opis" },
  { id: "spec", label: "Specyfikacja" },
  { id: "tech", label: "Technologia EVLN" },
  { id: "dokumenty", label: "Dokumenty do pobrania" },
]

export default function PdpTabs({ product }: PdpTabsProps) {
  const [activeTab, setActiveTab] = useState("opis")

  const meta = (product.metadata ?? {}) as Record<string, unknown>
  const power = (meta.power || meta.wattage || meta.W) as string | undefined
  const lumens = (meta.lumens || meta.lm) as string | undefined
  const cct = (meta.cct || meta.color_temp) as string | undefined
  const ip = (meta.ip || meta.ip_rating) as string | undefined
  const weight = product.weight ? `${product.weight} g` : undefined
  const dims =
    product.length && product.width && product.height
      ? `${product.length} × ${product.width} × ${product.height} mm`
      : undefined
  const material = product.material ?? undefined

  return (
    <div className="pdp-tabs">
      <div className="tabs-bar" role="tablist" aria-label="Informacje o produkcie">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            className={`tab-btn${activeTab === tab.id ? " is-active" : ""}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`tab-pane-${tab.id}`}
            id={`tab-btn-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Opis */}
      <div
        id="tab-pane-opis"
        role="tabpanel"
        aria-labelledby="tab-btn-opis"
        className={`tab-pane${activeTab === "opis" ? " is-active" : ""}`}
      >
        <div className="spec-grid">
          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              {product.title}
            </h3>
            {product.description ? (
              <p style={{ color: "var(--ink-2)", fontSize: "15px", lineHeight: "1.7" }}>
                {product.description}
              </p>
            ) : (
              <p style={{ color: "var(--ink-2)", fontSize: "15px", lineHeight: "1.7" }}>
                Panel LED z technologią EVLN — wspiera redukcję bakterii i grzybów w pomieszczeniu. Moduł Blue Care ogranicza udział niebieskiego spektrum, zmniejszając zmęczenie oczu.
              </p>
            )}
          </div>
          <div className="tech-card">
            <div className="tech-card__bg" aria-hidden="true" />
            <span
              className="badge"
              style={{ background: "rgba(0,180,216,0.18)", color: "var(--cyan-400)" }}
            >
              TÜV SÜD Witness Test
            </span>
            <div className="tech-card__pct">
              99,71<small>%</small>
            </div>
            <h3 style={{ fontSize: "18px" }}>
              redukcji <em>S. aureus</em> po 6 godzinach
            </h3>
            <p>
              Wynik uzyskany w określonych warunkach laboratoryjnych. Skuteczność w praktyce zależy od warunków instalacji, czasu ekspozycji i otoczenia.
            </p>
          </div>
        </div>
      </div>

      {/* Specyfikacja */}
      <div
        id="tab-pane-spec"
        role="tabpanel"
        aria-labelledby="tab-btn-spec"
        className={`tab-pane${activeTab === "spec" ? " is-active" : ""}`}
      >
        <div className="spec-grid">
          <div>
            <h4
              style={{
                fontSize: "14px",
                color: "var(--ink-3)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Parametry świetlne
            </h4>
            <table className="spec-table">
              <tbody>
                {power && (
                  <tr>
                    <th scope="row">Moc</th>
                    <td>{power}</td>
                  </tr>
                )}
                {lumens && (
                  <tr>
                    <th scope="row">Strumień świetlny</th>
                    <td>{lumens}</td>
                  </tr>
                )}
                {cct && (
                  <tr>
                    <th scope="row">Temperatura barwowa</th>
                    <td>{cct}</td>
                  </tr>
                )}
                {ip && (
                  <tr>
                    <th scope="row">Stopień ochrony IP</th>
                    <td>{ip}</td>
                  </tr>
                )}
                <tr>
                  <th scope="row">Migotanie (flicker)</th>
                  <td>{"< 1% (Non-flicker)"}</td>
                </tr>
                <tr>
                  <th scope="row">Blue Care</th>
                  <td>Tak — ograniczone niebieskie spektrum</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4
              style={{
                fontSize: "14px",
                color: "var(--ink-3)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Parametry techniczne
            </h4>
            <table className="spec-table">
              <tbody>
                {dims && (
                  <tr>
                    <th scope="row">Wymiary (mm)</th>
                    <td>{dims}</td>
                  </tr>
                )}
                {weight && (
                  <tr>
                    <th scope="row">Waga</th>
                    <td>{weight}</td>
                  </tr>
                )}
                {material && (
                  <tr>
                    <th scope="row">Materiał</th>
                    <td>{material}</td>
                  </tr>
                )}
                <tr>
                  <th scope="row">Napięcie zasilania</th>
                  <td>220–240 V AC, 50/60 Hz</td>
                </tr>
                <tr>
                  <th scope="row">Gwarancja</th>
                  <td>2 lata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Technologia EVLN */}
      <div
        id="tab-pane-tech"
        role="tabpanel"
        aria-labelledby="tab-btn-tech"
        className={`tab-pane${activeTab === "tech" ? " is-active" : ""}`}
      >
        <div style={{ maxWidth: "780px" }}>
          <h3 style={{ marginBottom: "16px" }}>Jak działa technologia EVLN</h3>
          <p style={{ color: "var(--ink-2)", fontSize: "15px", lineHeight: "1.7" }}>
            Panel emituje światło widzialne w wybranym zakresie spektrum, które oddziałuje na fotouczulacze obecne w komórkach mikroorganizmów (porfiryny). W wyniku reakcji fotochemicznej powstają reaktywne formy tlenu, które uszkadzają strukturę bakterii i grzybów — bez UV, bez chemii, bez dodatkowej obsługi.
          </p>
          <p style={{ color: "var(--ink-2)", fontSize: "15px", lineHeight: "1.7", marginTop: "14px" }}>
            Technologia EVLN działa w sposób ciągły, nie wymaga promieniowania UV, dzięki czemu jest bezpieczna w pomieszczeniach z ludźmi, dziećmi i zwierzętami.
          </p>
        </div>
      </div>

      {/* Dokumenty */}
      <div
        id="tab-pane-dokumenty"
        role="tabpanel"
        aria-labelledby="tab-btn-dokumenty"
        className={`tab-pane${activeTab === "dokumenty" ? " is-active" : ""}`}
      >
        <div className="doc-list">
          <div className="doc-item">
            <div className="doc-item__ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <div className="doc-item__name">Karta katalogowa</div>
              <div className="doc-item__meta">PDF · PL/EN</div>
            </div>
            <span className="doc-item__btn" aria-label="Pobierz kartę katalogową">↓</span>
          </div>
          <div className="doc-item">
            <div className="doc-item__ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="doc-item__name">Deklaracja zgodności CE</div>
              <div className="doc-item__meta">PDF · PL</div>
            </div>
            <span className="doc-item__btn" aria-label="Pobierz deklarację CE">↓</span>
          </div>
          <div className="doc-item">
            <div className="doc-item__ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 11l3 3 8-8" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <div className="doc-item__name">Atest higieniczny PZH</div>
              <div className="doc-item__meta">PDF · PL</div>
            </div>
            <span className="doc-item__btn" aria-label="Pobierz atest PZH">↓</span>
          </div>
          <div className="doc-item">
            <div className="doc-item__ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 11l3 3 8-8M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <div className="doc-item__name">Raport TÜV SÜD</div>
              <div className="doc-item__meta">PDF · EN</div>
            </div>
            <span className="doc-item__btn" aria-label="Pobierz raport TÜV SÜD">↓</span>
          </div>
        </div>
      </div>
    </div>
  )
}
