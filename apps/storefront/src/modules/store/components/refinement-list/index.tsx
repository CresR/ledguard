"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import type { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  "data-testid"?: string
}

const SORT_OPTIONS: { value: SortOptions; label: string }[] = [
  { value: "created_at", label: "Najnowsze" },
  { value: "price_asc", label: "Cena: rosnąco" },
  { value: "price_desc", label: "Cena: malejąco" },
]

const RefinementList = ({ sortBy }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setSort = useCallback(
    (value: SortOptions) => {
      const params = new URLSearchParams(searchParams)
      params.set("sortBy", value)
      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams]
  )

  return (
    <aside className="filters" aria-label="Filtry produktów">
      <div className="filter-section">
        <h4>Sortuj</h4>
        {SORT_OPTIONS.map((opt) => (
          <label key={opt.value} className="filter-opt" htmlFor={`sort-${opt.value}`}>
            <input
              type="radio"
              id={`sort-${opt.value}`}
              name="sort"
              checked={sortBy === opt.value}
              onChange={() => setSort(opt.value)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Kategoria</h4>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Panele LED</span><span className="count">14</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Lampy podtynkowe</span><span className="count">22</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Lampy natynkowe</span><span className="count">11</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Liniowe T8</span><span className="count">9</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Hermetyczne VL</span><span className="count">9</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Przemysłowe HighBay</span><span className="count">7</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Akcesoria</span><span className="count">6</span></label>
      </div>

      <div className="filter-section">
        <h4>Moc</h4>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>8–18 W</span><span className="count">14</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>20–40 W</span><span className="count">28</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>40–80 W</span><span className="count">22</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>80+ W</span><span className="count">9</span></label>
      </div>

      <div className="filter-section">
        <h4>Temperatura barwowa</h4>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>3000 K · ciepła</span><span className="count">21</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>4000 K · neutralna</span><span className="count">36</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>5000 K · zimna</span><span className="count">18</span></label>
      </div>

      <div className="filter-section">
        <h4>Stopień ochrony IP</h4>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>IP20</span><span className="count">42</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>IP44</span><span className="count">12</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>IP65 / IP66</span><span className="count">18</span></label>
      </div>

      <div className="filter-section">
        <h4>Zastosowanie</h4>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Medycyna</span><span className="count">38</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Gastronomia</span><span className="count">22</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Biuro / edukacja</span><span className="count">31</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Hotele</span><span className="count">18</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Produkcja / magazyn</span><span className="count">14</span></label>
        <label className="filter-opt"><input type="checkbox" disabled /> <span>Dom</span><span className="count">26</span></label>
      </div>

      <div className="filter-section">
        <h4>Cennik</h4>
        <label className="filter-opt"><input type="radio" name="ctype" defaultChecked disabled /> <span>Detaliczny B2C (brutto)</span></label>
        <label className="filter-opt"><input type="radio" name="ctype" disabled /> <span>Hurtowy B2B (netto)</span></label>
      </div>
    </aside>
  )
}

export default RefinementList
