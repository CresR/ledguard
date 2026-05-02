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
                <label htmlFor="contact-name-1">Imię i nazwisko <span className="req">*</span></label>
                <input id="contact-name-1" required placeholder="Anna Kowalska" />
              </div>
              <div className="field">
                <label htmlFor="contact-email-2">E-mail <span className="req">*</span></label>
                <input id="contact-email-2" type="email" required placeholder="anna@firma.pl" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label htmlFor="contact-phone-3">Telefon</label>
                <input id="contact-phone-3" type="tel" placeholder="+48 600 000 000" />
              </div>
              <div className="field">
                <label htmlFor="contact-company-4">Firma</label>
                <input id="contact-company-4" placeholder="Opcjonalnie" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="contact-subject-5">Temat <span className="req">*</span></label>
              <select id="contact-subject-5" required>
                <option value="">Wybierz temat</option>
                <option>Informacje o produktach</option>
                <option>Zapytanie o dostępność</option>
                <option>Pytanie techniczne</option>
                <option>Inne</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="contact-message-6">Wiadomość <span className="req">*</span></label>
              <textarea id="contact-message-6" required rows={5} placeholder="Opisz, jak możemy pomóc…"></textarea>
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
                <label htmlFor="b2b-name-7">Imię i nazwisko <span className="req">*</span></label>
                <input id="b2b-name-7" required placeholder="Anna Kowalska" />
              </div>
              <div className="field">
                <label htmlFor="b2b-company-8">Firma <span className="req">*</span></label>
                <input id="b2b-company-8" required placeholder="Szpital Św. Łukasza Sp. z o.o." />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label htmlFor="b2b-email-9">E-mail służbowy <span className="req">*</span></label>
                <input id="b2b-email-9" type="email" required placeholder="anna@firma.pl" />
              </div>
              <div className="field">
                <label htmlFor="b2b-phone-10">Telefon</label>
                <input id="b2b-phone-10" type="tel" placeholder="+48 22 000 00 00" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label htmlFor="b2b-nip-11">NIP firmy</label>
                <input id="b2b-nip-11" placeholder="0000000000" />
              </div>
              <div className="field">
                <label htmlFor="b2b-object-type-12">Typ obiektu</label>
                <select id="b2b-object-type-12">
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
                <label htmlFor="b2b-area-13">Szacowana pow. (m²)</label>
                <input id="b2b-area-13" type="number" placeholder="1200" />
              </div>
              <div className="field">
                <label htmlFor="b2b-budget-14">Szacowany budżet netto</label>
                <select id="b2b-budget-14">
                  <option>do 20 000 PLN</option>
                  <option>20 000 – 100 000 PLN</option>
                  <option>100 000 – 500 000 PLN</option>
                  <option>powyżej 500 000 PLN</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="b2b-description-15">Opis projektu</label>
              <textarea id="b2b-description-15" rows={4} placeholder="Opisz obiekt, liczbę pomieszczeń, specyficzne wymagania (HACCP, klasy czystości, itp.)…"></textarea>
            </div>
            <div className="field">
              <label htmlFor="b2b-file-16">Załącz rzut / specyfikację (PDF, DWG)</label>
              <input id="b2b-file-16" type="file" accept=".pdf,.dwg,.dxf,.jpg,.png" style={{ height: "auto", padding: "8px 14px" }} />
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
                <label htmlFor="tech-name-17">Imię i nazwisko <span className="req">*</span></label>
                <input id="tech-name-17" required placeholder="Jan Kowalski" />
              </div>
              <div className="field">
                <label htmlFor="tech-email-18">E-mail <span className="req">*</span></label>
                <input id="tech-email-18" type="email" required placeholder="jan@firma.pl" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label htmlFor="tech-serial-19">Numer seryjny / model produktu</label>
                <input id="tech-serial-19" placeholder="EVLN-PL-6060-40" />
              </div>
              <div className="field">
                <label htmlFor="tech-date-20">Data zakupu</label>
                <input id="tech-date-20" type="date" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="tech-problem-21">Opis problemu <span className="req">*</span></label>
              <textarea id="tech-problem-21" required rows={5} placeholder="Opisz dokładnie problem: objawy, kiedy wystąpił, warunki instalacji…"></textarea>
            </div>
            <div className="field">
              <label htmlFor="tech-file-22">Zdjęcia / dokumenty</label>
              <input id="tech-file-22" type="file" accept="image/*,.pdf" multiple style={{ height: "auto", padding: "8px 14px" }} />
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
                <label htmlFor="rekl-name-23">Imię i nazwisko <span className="req">*</span></label>
                <input id="rekl-name-23" required />
              </div>
              <div className="field">
                <label htmlFor="rekl-order-24">Nr zamówienia <span className="req">*</span></label>
                <input id="rekl-order-24" required placeholder="LG/2026/00000" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label htmlFor="rekl-email-25">E-mail <span className="req">*</span></label>
                <input id="rekl-email-25" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="rekl-phone-26">Telefon</label>
                <input id="rekl-phone-26" type="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="rekl-model-27">Model produktu / EAN</label>
              <input id="rekl-model-27" placeholder="EVLN-PL-6060-40 · EAN: 5901234567890" />
            </div>
            <div className="field">
              <label htmlFor="rekl-defect-28">Opis wady <span className="req">*</span></label>
              <textarea id="rekl-defect-28" required rows={4} placeholder="Opisz dokładnie stwierdzoną wadę…"></textarea>
            </div>
            <div className="field">
              <label htmlFor="rekl-demand-29">Żądanie</label>
              <select id="rekl-demand-29">
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Dziękujemy! Odpiszemy w ciągu 1 dnia roboczego.
        </div>
      )}
    </div>
  )
}
