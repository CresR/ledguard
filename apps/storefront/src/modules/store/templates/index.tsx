import { Suspense } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="ledg-design" data-testid="category-container">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="shell">
          <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
          <span className="sep" aria-hidden="true">/</span>
          <span aria-current="page">Wszystkie produkty</span>
        </div>
      </nav>

      <section className="cat-intro">
        <div className="shell">
          <div className="eyebrow">Katalog EVSun</div>
          <h1 data-testid="store-page-title">Lampy LED z technologią EVLN</h1>
          <p>
            Pełna gama opraw oświetleniowych z technologią EVLN — energooszczędne LED + funkcja wspierająca redukcję bakterii i grzybów. Bez UV, bez chemii, bez dodatkowej obsługi. Wszystkie produkty z atestem PZH, deklaracją CE i 2-letnią gwarancją.
          </p>
          <div className="cat-intro__strip">
            <div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Modele w 7 rodzinach
            </div>
            <div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Wysyłka 24–48h z magazynu PL
            </div>
            <div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Cenniki B2B i B2C
            </div>
            <div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Dokumentacja techniczna w PDF
            </div>
          </div>
        </div>
      </section>

      <section className="listing">
        <div className="shell">
          <div className="listing__grid">
            <RefinementList sortBy={sort} />
            <div className="listing__main">
              <Suspense fallback={<SkeletonProductGrid />}>
                <PaginatedProducts
                  sortBy={sort}
                  page={pageNumber}
                  countryCode={countryCode}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoreTemplate
