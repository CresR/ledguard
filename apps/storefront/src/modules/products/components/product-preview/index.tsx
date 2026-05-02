import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const formatPrice = (calculatedPrice?: string, original?: number) => {
  if (!original) return calculatedPrice
  return new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(original)
}

const extractSpecs = (product: HttpTypes.StoreProduct) => {
  // Try common metadata keys
  const meta = (product.metadata ?? {}) as Record<string, unknown>
  const power = (meta.power || meta.wattage || meta.W) as string | undefined
  const lumens = (meta.lumens || meta.lm) as string | undefined
  const cct = (meta.cct || meta.color_temp) as string | undefined
  const ip = (meta.ip || meta.ip_rating) as string | undefined
  return { power, lumens, cct, ip }
}

const extractCode = (product: HttpTypes.StoreProduct) => {
  const handle = product.handle || ""
  // EVSUN handles like evln-pl-6060-40 → uppercase
  if (handle.startsWith("evln-")) return handle.toUpperCase()
  return handle.toUpperCase().slice(0, 18)
}

export default async function ProductPreview({
  product,
  isFeatured: _isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })
  const code = extractCode(product)
  const specs = extractSpecs(product)
  const grossPrice = cheapestPrice?.calculated_price
  const grossNumber = cheapestPrice?.calculated_price_number
  const netPrice = grossNumber ? Math.round(grossNumber / 1.23) : undefined
  const currencyCode = cheapestPrice?.currency_code?.toUpperCase() || "PLN"
  const thumbnail = product.thumbnail || product.images?.[0]?.url

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="prod" data-testid="product-wrapper">
      <div className="prod__media">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={product.title || ""}
            width={400}
            height={300}
            sizes="(max-width: 980px) 50vw, 33vw"
          />
        ) : (
          <div className="silhouette silhouette--square" aria-hidden="true" />
        )}
      </div>
      <div className="prod__body">
        <div className="prod__code" aria-label={`Kod produktu: ${code}`}>{code}</div>
        <div className="prod__title" data-testid="product-title">{product.title}</div>
        {(specs.power || specs.lumens || specs.cct || specs.ip) && (
          <div className="prod__specs" aria-label="Specyfikacja techniczna">
            {specs.power && <div className="prod__spec"><strong>{specs.power}</strong>moc</div>}
            {specs.lumens && <div className="prod__spec"><strong>{specs.lumens}</strong>lm</div>}
            {specs.cct && <div className="prod__spec"><strong>{specs.cct}</strong>cct</div>}
            {specs.ip && <div className="prod__spec"><strong>{specs.ip}</strong>ip</div>}
          </div>
        )}
        <div className="prod__price-row">
          <div>
            {grossNumber ? (
              <>
                <div className="prod__price">
                  {formatPrice(grossPrice, grossNumber)}
                  <small>{currencyCode} brutto</small>
                </div>
                {netPrice && <div className="prod__price-net">{netPrice.toLocaleString("pl-PL")} {currencyCode} netto</div>}
              </>
            ) : (
              <div className="prod__price">{grossPrice ?? "—"}</div>
            )}
          </div>
          <span className="badge badge--success">Dostępny</span>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
