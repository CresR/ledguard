import { listCategories } from "@lib/data/categories"
import { Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const productCategories = await listCategories()
  const evsunCategories = productCategories?.filter(
    (c) => !c.parent_category
  ) ?? []

  return (
    <footer className="bg-brand-navy text-white w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-8 xsmall:flex-row items-start justify-between py-16">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <LocalizedClientLink href="/" className="flex items-center gap-1">
              <span className="text-brand-cyan font-bold text-2xl">Led</span>
              <span className="text-white font-bold text-2xl">Guard</span>
            </LocalizedClientLink>
            <p className="text-white/60 text-sm leading-relaxed">
              Oficjalny dystrybutor lamp EVSUN w Europie.
              Fotokatalityczna dezynfekcja powietrza bez UV.
            </p>
            <div className="flex flex-col gap-1 text-sm text-white/50">
              <span>EVS sp. z o.o.</span>
              <span>ul. Bolesława Prusa 7A, Kleosin</span>
              <span>NIP: 5423491568</span>
            </div>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {/* Categories */}
            {evsunCategories.length > 0 && (
              <div className="flex flex-col gap-y-3">
                <span className="text-white font-semibold text-sm uppercase tracking-wide">
                  Produkty
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {evsunCategories.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-white/60 hover:text-brand-cyan transition-colors text-sm"
                        href={`/categories/${c.handle}`}
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Info */}
            <div className="flex flex-col gap-y-3">
              <span className="text-white font-semibold text-sm uppercase tracking-wide">
                Informacje
              </span>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <LocalizedClientLink
                    className="text-white/60 hover:text-brand-cyan transition-colors text-sm"
                    href="/o-nas"
                  >
                    O nas
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="text-white/60 hover:text-brand-cyan transition-colors text-sm"
                    href="/technologia"
                  >
                    Technologia EVLN
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="text-white/60 hover:text-brand-cyan transition-colors text-sm"
                    href="/b2b"
                  >
                    Dla firm (B2B)
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-y-3">
              <span className="text-white font-semibold text-sm uppercase tracking-wide">
                Prawne
              </span>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <LocalizedClientLink
                    className="text-white/60 hover:text-brand-cyan transition-colors text-sm"
                    href="/regulamin"
                  >
                    Regulamin
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="text-white/60 hover:text-brand-cyan transition-colors text-sm"
                    href="/polityka-prywatnosci"
                  >
                    Polityka prywatności
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="text-white/60 hover:text-brand-cyan transition-colors text-sm"
                    href="/zwroty"
                  >
                    Zwroty i reklamacje
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col small:flex-row w-full justify-between items-center gap-4">
          <Text className="text-white/40 text-sm">
            © {new Date().getFullYear()} EVS sp. z o.o. Wszelkie prawa zastrzeżone.
          </Text>
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-sm">Certyfikaty:</span>
            <span className="bg-white/10 text-white/60 text-xs px-2 py-1 rounded">TÜV</span>
            <span className="bg-white/10 text-white/60 text-xs px-2 py-1 rounded">SIRIM</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
