import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { retrieveCart } from "@lib/data/cart"

const NAV_ITEMS = [
  { label: "Produkty", href: "/store" },
  { label: "Technologia EVLN", href: "/technologia" },
  { label: "Blue Care", href: "/blue-care" },
  { label: "Zastosowania", href: "/zastosowania" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Badania i certyfikaty", href: "/badania" },
  { label: "Do pobrania", href: "/pobierz" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
]

const ICON = {
  shield: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  truck: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  phone: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  user: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  cart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
}

const LogoMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3z" />
    <path d="M9 12h6M12 9v6" stroke="#00B4D8" />
  </svg>
)

export default async function Nav() {
  const cart = await retrieveCart().catch(() => null)
  const cartCount = cart?.items?.reduce((s: number, i: { quantity: number }) => s + i.quantity, 0) || 0

  return (
    <div className="ledg-nav-wrap" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* TRUSTBAR */}
      <div className="ledg-trustbar">
        <div className="ledg-trustbar__inner">
          <div className="ledg-trustbar__items">
            <span className="ledg-trustbar__item">{ICON.shield} Oficjalny dystrybutor EVSun w Polsce i Europie</span>
            <span className="ledg-trustbar__item">{ICON.truck} Wysyłka B2B w 24–48h</span>
            <span className="ledg-trustbar__item">{ICON.check} 2 lata gwarancji</span>
          </div>
          <div className="ledg-trustbar__right">
            <a href="tel:+48221108800">{ICON.phone} +48 22 110 88 00</a>
            <LocalizedClientLink href="/kontakt">Pomoc techniczna</LocalizedClientLink>
            <LocalizedClientLink href="/pobierz">Do pobrania</LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="ledg-header">
        <div className="ledg-header__inner">
          <LocalizedClientLink href="/" className="ledg-logo" aria-label="LEDGUARD — strona główna">
            <span className="ledg-logo__mark"><LogoMark /></span>
            <span>LEDGUARD</span>
            <span className="ledg-logo__sub">EVSun · Disinfecting Light</span>
          </LocalizedClientLink>

          <LocalizedClientLink href="/store" className="ledg-search" aria-label="Szukaj produktów">
            {ICON.search}
            <span className="ledg-search__placeholder">Szukaj produktów, modeli, dokumentów…</span>
          </LocalizedClientLink>

          <div className="ledg-header__actions">
            <LocalizedClientLink href="/cart" className="ledg-icon-btn">
              {ICON.cart}
              <span>Koszyk{cartCount > 0 ? ` (${cartCount})` : ""}</span>
            </LocalizedClientLink>
            <LocalizedClientLink href="/account" className="ledg-icon-btn ledg-icon-btn--cta">
              {ICON.user}
              <span>Konto</span>
            </LocalizedClientLink>
          </div>
        </div>
      </header>

      {/* MAIN NAV */}
      <nav className="ledg-mainnav">
        <div className="ledg-mainnav__inner">
          <ul className="ledg-mainnav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="ledg-mainnav__item">
                <LocalizedClientLink href={item.href}>{item.label}</LocalizedClientLink>
              </li>
            ))}
            <li className="ledg-mainnav__item ledg-mainnav__item--cta">
              <LocalizedClientLink href="/b2b">Poproś o wycenę B2B →</LocalizedClientLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
