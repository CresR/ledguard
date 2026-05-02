"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "created_at",
    label: "Najnowsze",
  },
  {
    value: "price_asc",
    label: "Cena: rosnąco",
  },
  {
    value: "price_desc",
    label: "Cena: malejąco",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const handleChange = (value: string) => {
    setQueryParams("sortBy", value as SortOptions)
  }

  return (
    <FilterRadioGroup
      title="Sortuj"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortProducts
