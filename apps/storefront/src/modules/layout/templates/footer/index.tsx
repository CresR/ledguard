import LocalizedClientLink from "@modules/common/components/localized-client-link"

const ICONS = {
  phone: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  mail: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  pin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
}

const LogoMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3z" />
    <path d="M9 12h6M12 9v6" stroke="#00B4D8" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="ledg-footer">
      <div className="ledg-footer__inner">
        <div className="ledg-footer__grid">
          <div className="ledg-footer__brand">
            <LocalizedClientLink href="/" className="ledg-footer__logo" aria-label="LEDGUARD">
              <span className="ledg-logo__mark"><LogoMark /></span>
              <span>LEDGUARD</span>
              <span className="ledg-footer__sub">EVSun · Disinfecting Light</span>
            </LocalizedClientLink>
            <p className="ledg-footer__about">
              Oficjalny dystrybutor technologii oświetleniowej EVSun w Polsce i Unii Europejskiej. Energooszczędne LED + wspomagająca redukcja bakterii i grzybów, bez UV.
            </p>
            <div className="ledg-footer__certs">
              {["CE", "PZH", "IBPRS", "TÜV SÜD", "UGENE", "SIRIM", "ISO 9001"].map((c) => (
                <span key={c} className="ledg-footer__cert">{c}</span>
              ))}
            </div>
          </div>

          <div className="ledg-footer__col">
            <h4>Produkty</h4>
            <ul>
              <li><LocalizedClientLink href="/store?cat=podtynkowe">Lampy podtynkowe</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/store?cat=natynkowe">Lampy natynkowe</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/store?cat=panele">Panele LED</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/store?cat=liniowe">Lampy liniowe</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/store?cat=hermetyczne">Hermetyczne</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/store?cat=przemyslowe">Przemysłowe</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/store?cat=akcesoria">Akcesoria</LocalizedClientLink></li>
            </ul>
          </div>

          <div className="ledg-footer__col">
            <h4>Wiedza</h4>
            <ul>
              <li><LocalizedClientLink href="/technologia">Technologia EVLN</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/blue-care">Blue Care</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/badania">Badania i certyfikaty</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/realizacje">Realizacje</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/pobierz">Dokumenty do pobrania</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/blog">Blog / poradniki</LocalizedClientLink></li>
            </ul>
          </div>

          <div className="ledg-footer__col">
            <h4>Dla firm</h4>
            <ul>
              <li><LocalizedClientLink href="/b2b">Strefa Partnera B2B</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/b2b">Wycena projektu</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/zastosowania">Zastosowania</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/pobierz">Pakiet inwestora</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/kontakt">Umów konsultację</LocalizedClientLink></li>
            </ul>
          </div>

          <div className="ledg-footer__col">
            <h4>Kontakt</h4>
            <ul>
              <li>{ICONS.phone} +48 22 110 88 00</li>
              <li>{ICONS.mail} kontakt@ledguard.pl</li>
              <li>{ICONS.pin} ul. Bolesława Prusa 7A, Kleosin</li>
              <li>Pn–Pt 8:00–17:00</li>
              <li><LocalizedClientLink href="/kontakt">Umów konsultację →</LocalizedClientLink></li>
            </ul>
          </div>
        </div>

        <div className="ledg-footer__bottom">
          <div>© 2026 EVS Sp. z o.o. · NIP 5423491568 · ledguard.pl · ledguard.eu</div>
          <div className="ledg-footer__legal">
            <LocalizedClientLink href="/regulamin">Regulamin</LocalizedClientLink>
            <LocalizedClientLink href="/polityka-prywatnosci">Polityka prywatności</LocalizedClientLink>
            <LocalizedClientLink href="/zwroty">Reklamacje</LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
