import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActions from "@modules/products/components/product-actions"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PdpGallery from "@modules/products/components/pdp-gallery"
import PdpTabs from "@modules/products/components/pdp-tabs"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  const collectionTitle = product.collection?.title
  const collectionHandle = product.collection?.handle

  return (
    <div className="ledg-design" data-testid="product-container">
      {/* Breadcrumb */}
      <nav aria-label="Nawigacja okruszkowa">
        <div className="crumbs">
          <div className="shell">
            <LocalizedClientLink href="/">Strona główna</LocalizedClientLink>
            <span className="sep" aria-hidden="true">/</span>
            <LocalizedClientLink href="/store">Produkty</LocalizedClientLink>
            {collectionTitle && collectionHandle && (
              <>
                <span className="sep" aria-hidden="true">/</span>
                <LocalizedClientLink href={`/collections/${collectionHandle}`}>
                  {collectionTitle}
                </LocalizedClientLink>
              </>
            )}
            <span className="sep" aria-hidden="true">/</span>
            <span>{product.title}</span>
          </div>
        </div>
      </nav>

      {/* Main PDP section */}
      <section className="pdp" aria-label="Szczegóły produktu">
        <div className="shell">
          {/* Two-column grid: gallery left, info right */}
          <div className="pdp__grid">
            {/* LEFT: Gallery + extras */}
            <div>
              <PdpGallery images={images} title={product.title ?? ""} />

              {/* Extras strip */}
              <div className="pdp-extras">
                <div className="pdp-extra">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M1 3h15v13H1z" />
                    <path d="M16 8h4l3 3v5h-7" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span><strong>Wysyłka 24–48h</strong> · darmowa od 5000 PLN netto</span>
                </div>
                <div className="pdp-extra">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span><strong>2 lata gwarancji</strong> + wsparcie techniczne LEDGUARD</span>
                </div>
                <div className="pdp-extra">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 11l3 3 8-8M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span><strong>Pełna dokumentacja</strong> · CE, PZH, IBPRS, TÜV SÜD, UGENE</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Product info + actions */}
            <div className="pdp-info">
              {/* Family eyebrow */}
              <span className="pdp-info__family">
                {collectionTitle ?? "Rodzina EVLN · Panele LED"}
              </span>

              {/* h1 — SEO critical, was h2 in default Medusa template */}
              <h1 data-testid="product-title">{product.title}</h1>

              {/* Subtitle / model code */}
              {product.subtitle && (
                <div className="pdp-info__sub">{product.subtitle}</div>
              )}

              {/* Benefits strip */}
              <div className="pdp-benefits">
                <div className="pdp-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Bez UV
                </div>
                <div className="pdp-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Wspiera redukcję bakterii
                </div>
                <div className="pdp-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Non-flicker
                </div>
                <div className="pdp-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Blue Care
                </div>
                <div className="pdp-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Energooszczędny
                </div>
                <div className="pdp-benefit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  2 lata gwarancji
                </div>
              </div>

              {/* Medusa ProductActions — variant select + price + add-to-cart */}
              {/* CRITICAL: do NOT remove or alter the Medusa cart integration below */}
              <div className="price-box">
                <Suspense
                  fallback={
                    <ProductActions
                      disabled={true}
                      product={product}
                      region={region}
                    />
                  }
                >
                  <ProductActionsWrapper id={product.id} region={region} />
                </Suspense>
              </div>

              {/* B2B offer link */}
              <div style={{ marginTop: "12px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <LocalizedClientLink href="/b2b" className="btn btn--accent">
                  Poproś o ofertę B2B
                </LocalizedClientLink>
              </div>
            </div>
          </div>

          {/* Tabs: Opis / Specyfikacja / Technologia / Dokumenty */}
          <PdpTabs product={product} />

          {/* B2B CTA navy banner */}
          <div className="pdp-b2b-cta" aria-label="Oferta B2B">
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="eyebrow" style={{ color: "var(--cyan-400)" }}>
                Konsultacja B2B
              </div>
              <h3>Potrzebujesz większej ilości lub doboru do projektu?</h3>
              <p>
                Wyślij rzut lub listę pomieszczeń — przygotujemy wycenę z rabatem hurtowym i pełną dokumentacją w 24h.
              </p>
            </div>
            <div className="pdp-b2b-cta__ctas">
              <LocalizedClientLink href="/b2b" className="btn btn--accent btn--lg">
                Poproś o wycenę B2B
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/kontakt"
                className="btn"
                style={{ color: "#fff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                Umów konsultację
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </section>

      {/* Similar / Related products */}
      <section className="similar" aria-label="Podobne produkty">
        <div className="shell">
          <h2 style={{ marginBottom: "32px" }}>
            Podobne produkty
            {collectionTitle ? ` z rodziny ${collectionTitle}` : ""}
          </h2>
          <div data-testid="related-products-container">
            <Suspense fallback={<SkeletonRelatedProducts />}>
              <RelatedProducts product={product} countryCode={countryCode} />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductTemplate
