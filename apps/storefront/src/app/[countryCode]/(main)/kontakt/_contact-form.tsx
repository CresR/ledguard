"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type TabKey = "zapytanie" | "b2b" | "tech" | "reklamacja"

const TABS: { key: TabKey; label: string }[] = [
  { key: "zapytanie", label: "Ogólne zapytanie" },
  { key: "b2b", label: "Wycena B2B" },
  { key: "tech", label: "Pomoc techniczna" },
  { key: "reklamacja", label: "Reklamacja" },
]

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<TabKey>("zapytanie")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="contact-form">
      <div className="form-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`form-tab${activeTab === tab.key ? " is-active" : ""}`}
            data-tab={tab.key}
            onClick={() => {
              setActiveTab(tab.key)
              setSubmitted(false)
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {/* PANE: Ogólne zapytanie */}
          <div className={`form-pane${activeTab === "zapytanie" ? " is-active" : ""}`} data-pane="zapytanie">
            <div className="form-row-2">
              <div className="field">
                <label>Imię i nazwisko <span className="req">*</span></label>
                <input required placeholder="Anna Kowalska" />
              </div>
              <div className="field">
                <label>E-mail <span className="req">*</span></label>
                <input type="email" required placeholder="anna@firma.pl" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>Telefon</label>
                <input type="tel" placeholder="+48 600 000 000" />
              </div>
              <div className="field">
                <label>Firma</label>
                <input placeholder="Opcjonalnie" />
              </div>
            </div>
            <div className="field">
              <label>Temat <span className="req">*</span></label>
              <select required>
                <option value="">Wybierz temat</option>
                <option>Informacje o produktach</option>
                <option>Zapytanie o dostępność</option>
                <option>Pytanie techniczne</option>
                <option>Inne</option>
              </select>
            </div>
            <div className="field">
              <label>Wiadomość <span className="req">*</span></label>
              <textarea required rows={5} placeholder="Opisz, jak możemy pomóc…"></textarea>
            </div>
            <div className="form-footer">
              <label className="checkbox">
                <input type="checkbox" required />
                <span>
                  Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na zapytanie.{" "}
                  <a href="#" style={{ color: "var(--cyan-600)" }}>Polityka prywatności</a>
                </span>
              </label>
              <button type="submit" className="btn btn--primary btn--lg">Wyślij wiadomość</button>
            </div>
          </div>

          {/* PANE: Wycena B2B */}
          <div className={`form-pane${activeTab === "b2b" ? " is-active" : ""}`} data-pane="b2b">
            <div className="form-row-2">
              <div className="field">
                <label>Imię i nazwisko <span className="req">*</span></label>
                <input required placeholder="Anna Kowalska" />
              </div>
              <div className="field">
                <label>Firma <span className="req">*</span></label>
                <input required placeholder="Szpital Św. Łukasza Sp. z o.o." />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>E-mail służbowy <span className="req">*</span></label>
                <input type="email" required placeholder="anna@firma.pl" />
              </div>
              <div className="field">
                <label>Telefon</label>
                <input type="tel" placeholder="+48 22 000 00 00" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>NIP firmy</label>
                <input placeholder="0000000000" />
              </div>
              <div className="field">
                <label>Typ obiektu</label>
                <select>
                  <option>Szpital / klinika</option>
                  <option>Hotel</option>
                  <option>Gastronomia</option>
                  <option>Biuro</option>
                  <option>Produkcja / magazyn</option>
                  <option>Szkoła</option>
                  <option>Inne</option>
                </select>
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>Szacowana pow. (m²)</label>
                <input type="number" placeholder="1200" />
              </div>
              <div className="field">
                <label>Szacowany budżet netto</label>
                <select>
                  <option>do 20 000 PLN</option>
                  <option>20 000 – 100 000 PLN</option>
                  <option>100 000 – 500 000 PLN</option>
                  <option>powyżej 500 000 PLN</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Opis projektu</label>
              <textarea rows={4} placeholder="Opisz obiekt, liczbę pomieszczeń, specyficzne wymagania (HACCP, klasy czystości, itp.)…"></textarea>
            </div>
            <div className="field">
              <label>Załącz rzut / specyfikację (PDF, DWG)</label>
              <input type="file" accept=".pdf,.dwg,.dxf,.jpg,.png" style={{ height: "auto", padding: "8px 14px" }} />
            </div>
            <div className="form-footer">
              <label className="checkbox">
                <input type="checkbox" required />
                <span>
                  Wyrażam zgodę na przetwarzanie danych osobowych.{" "}
                  <a href="#" style={{ color: "var(--cyan-600)" }}>Polityka prywatności</a>
                </span>
              </label>
              <button type="submit" className="btn btn--primary btn--lg">Prześlij zapytanie B2B</button>
            </div>
          </div>

          {/* PANE: Pomoc techniczna */}
          <div className={`form-pane${activeTab === "tech" ? " is-active" : ""}`} data-pane="tech">
            <div className="form-row-2">
              <div className="field">
                <label>Imię i nazwisko <span className="req">*</span></label>
                <input required placeholder="Jan Kowalski" />
              </div>
              <div className="field">
                <label>E-mail <span className="req">*</span></label>
                <input type="email" required placeholder="jan@firma.pl" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>Numer seryjny / model produktu</label>
                <input placeholder="EVLN-PL-6060-40" />
              </div>
              <div className="field">
                <label>Data zakupu</label>
                <input type="date" />
              </div>
            </div>
            <div className="field">
              <label>Opis problemu <span className="req">*</span></label>
              <textarea required rows={5} placeholder="Opisz dokładnie problem: objawy, kiedy wystąpił, warunki instalacji…"></textarea>
            </div>
            <div className="field">
              <label>Zdjęcia / dokumenty</label>
              <input type="file" accept="image/*,.pdf" multiple style={{ height: "auto", padding: "8px 14px" }} />
            </div>
            <div className="form-footer">
              <label className="checkbox">
                <input type="checkbox" required />
                <span>
                  Wyrażam zgodę na przetwarzanie danych.{" "}
                  <a href="#" style={{ color: "var(--cyan-600)" }}>Polityka prywatności</a>
                </span>
              </label>
              <button type="submit" className="btn btn--primary btn--lg">Wyślij zgłoszenie techniczne</button>
            </div>
          </div>

          {/* PANE: Reklamacja */}
          <div className={`form-pane${activeTab === "reklamacja" ? " is-active" : ""}`} data-pane="reklamacja">
            <div className="form-row-2">
              <div className="field">
                <label>Imię i nazwisko <span className="req">*</span></label>
                <input required />
              </div>
              <div className="field">
                <label>Nr zamówienia <span className="req">*</span></label>
                <input required placeholder="LG/2026/00000" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>E-mail <span className="req">*</span></label>
                <input type="email" required />
              </div>
              <div className="field">
                <label>Telefon</label>
                <input type="tel" />
              </div>
            </div>
            <div className="field">
              <label>Model produktu / EAN</label>
              <input placeholder="EVLN-PL-6060-40 · EAN: 5901234567890" />
            </div>
            <div className="field">
              <label>Opis wady <span className="req">*</span></label>
              <textarea required rows={4} placeholder="Opisz dokładnie stwierdzoną wadę…"></textarea>
            </div>
            <div className="field">
              <label>Żądanie</label>
              <select>
                <option>Naprawa gwarancyjna</option>
                <option>Wymiana na nowy</option>
                <option>Zwrot pieniędzy</option>
              </select>
            </div>
            <div className="form-footer">
              <label className="checkbox">
                <input type="checkbox" required />
                <span>
                  Potwierdzam prawdziwość podanych danych.{" "}
                  <a href="#" style={{ color: "var(--cyan-600)" }}>Regulamin reklamacji</a>
                </span>
              </label>
              <button type="submit" className="btn btn--primary btn--lg">Złóż reklamację</button>
            </div>
          </div>
        </form>
      ) : (
        <div className="form-success is-visible">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Dziękujemy! Odpiszemy w ciągu 1 dnia roboczego.
        </div>
      )}
    </div>
  )
}
