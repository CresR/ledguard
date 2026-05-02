import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ContactForm from "./_contact-form"

export const metadata: Metadata = {
  title: "Kontakt — LEDGUARD | Pomoc techniczna, wyceny B2B, konsultacje",
  description:
    "Skontaktuj się z LEDGUARD — pomoc techniczna, wyceny B2B, zapytania o produkty EVSun. Dostępni pon.–pt. 8:00–17:00.",
}

export default function KontaktPage() {
  return (
    <div className="ledg-design">
      {/* BREADCRUMBS */}
      <div className="crumbs">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep">/</span>
          <span>Kontakt</span>
        </div>
      </div>

      {/* HERO */}
      <section className="contact-hero">
        <div className="shell">
          <div className="eyebrow">Porozmawiajmy</div>
          <h1>Kontakt i wsparcie techniczne</h1>
          <p>Masz pytania o produkty, chcesz wycenę projektu, potrzebujesz dokumentacji lub wsparcia technicznego? Jesteśmy dostępni od poniedziałku do piątku.</p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section>
        <div className="shell">
          <div className="contact-grid">
            {/* FORM (client component) */}
            <ContactForm />

            {/* CONTACT DETAILS */}
            <aside className="contact-info">
              <div className="info-card">
                <h4>Dane kontaktowe</h4>

                <div className="info-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <a href="tel:+48221108800">+48 22 110 88 00</a>
                    <small>Sprzedaż i B2B</small>
                  </div>
                </div>

                <div className="info-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <a href="tel:+48221108801">+48 22 110 88 01</a>
                    <small>Pomoc techniczna</small>
                  </div>
                </div>

                <div className="info-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <div>
                    <a href="mailto:kontakt@ledguard.pl">kontakt@ledguard.pl</a>
                    <small>Ogólne zapytania</small>
                  </div>
                </div>

                <div className="info-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <div>
                    <a href="mailto:b2b@ledguard.pl">b2b@ledguard.pl</a>
                    <small>Zapytania B2B i projekty</small>
                  </div>
                </div>

                <div className="info-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span>ul. Domaniewska 47<br />02-672 Warszawa</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h4>Godziny pracy biura</h4>
                <div className="hours">
                  <div className="hours-row">
                    <span>Poniedziałek – Piątek</span>
                    <strong>8:00 – 17:00</strong>
                  </div>
                  <div className="hours-row">
                    <span>Sobota</span>
                    <strong>Zamknięte</strong>
                  </div>
                  <div className="hours-row">
                    <span>Niedziela</span>
                    <strong>Zamknięte</strong>
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "var(--ink-3)", marginTop: "12px" }}>
                  Zamówienia złożone po 14:00 realizowane są następnego dnia roboczego.
                </p>
              </div>

              <div className="info-card">
                <h4>Dane rejestrowe</h4>
                <div style={{ fontSize: "13px", color: "var(--ink-2)", lineHeight: "1.8" }}>
                  <div><strong style={{ color: "var(--navy)" }}>EVS Sp. z o.o.</strong></div>
                  <div>Kleosin, ul. Wiejska 1, 16-001 Kleosin</div>
                  <div>NIP: 9662131616</div>
                  <div>KRS: 0000541471</div>
                  <div>REGON: 360871680</div>
                  <div>Sąd Rejonowy w Białymstoku, XII Wydział KRS</div>
                </div>
              </div>

              <div className="map-ph ph ph--photo">
                <div className="ph__label">Mapa Google / Mapbox — Domaniewska 47, Warszawa · 1200×500</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
