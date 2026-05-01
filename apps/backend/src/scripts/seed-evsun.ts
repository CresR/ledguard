/**
 * Seed script — prawdziwy katalog EVSUN
 * Ceny: Polish Warehouse (USD) × 2 = retail netto, × 1.23 = brutto
 * PLN: brutto × 4.08 (kurs USD/PLN)
 * EUR: brutto USD (USD ≈ EUR dla uproszczenia, korekta po ustaleniu kursu)
 */

const ADMIN_URL = "http://localhost:9000"
const ADMIN_EMAIL = "admin@ledguard.pl"
const ADMIN_PASSWORD = "LedGuardAdmin2026!"

// Kategorie ID (z seed)
const CAT = {
  dl: "pcat_01KQJN6N9Z4DQSJJDWQCG8SS2H",
  sdl: "pcat_01KQJN6NM6X5VZSTDMYDB3S5JZ",
  t8: "pcat_01KQJN6NZ1QJSF24ZTTZSHXQVK",
  gu10: "pcat_01KQJN6P9GB9556YTH5CBM13T7",
  panel: "pcat_01KQJN6PKJ4MN1G866HP6RYN16",
  highbay: "pcat_01KQJN6PXZX2051HHRWB6BK8BB",
}

// USD warehouse price → PLN/EUR brutto (major units — Medusa v2 uses PLN not grosze)
const price = (warehouseUsd: number) => {
  const retailNetto = warehouseUsd * 2
  const retailBrutto = retailNetto * 1.23
  return {
    pln: Math.round(retailBrutto * 4.08 * 100) / 100, // PLN
    eur: Math.round(retailBrutto * 100) / 100,         // EUR
  }
}

const TEMPS = ["3000K", "4000K", "6000K"]
const SHAPES = ["Square", "Round"]

// Generuj warianty dla produktu z opcjami shape + temp
function variantsShapeTemp(skuBase: string, warehouseUsd: number) {
  const p = price(warehouseUsd)
  return SHAPES.flatMap(shape =>
    TEMPS.map(temp => ({
      title: `${shape} ${temp}`,
      sku: `${skuBase}-${shape === "Square" ? "S" : "R"}-${temp.replace("K","")}`,
      prices: [
        { amount: p.pln, currency_code: "pln" },
        { amount: p.eur, currency_code: "eur" },
      ],
      options: { "Kształt": shape, "Temperatura barwowa": temp },
    }))
  )
}

// Generuj warianty tylko z temperaturą
function variantsTemp(skuBase: string, warehouseUsd: number, temps = TEMPS) {
  const p = price(warehouseUsd)
  return temps.map(temp => ({
    title: temp,
    sku: `${skuBase}-${temp.replace("K","")}`,
    prices: [
      { amount: p.pln, currency_code: "pln" },
      { amount: p.eur, currency_code: "eur" },
    ],
    options: { "Temperatura barwowa": temp },
  }))
}

const META_BASE = {
  technology: "EVLN photocatalysis",
  certifications: "TUV, SIRIM",
  uv_free: "true",
  lifespan_h: "50000",
  disinfection_range_m: "3",
  brand: "EVSUN",
}

const PRODUCTS = [
  // ─── Recessed Downlight 4" 16W ───────────────────────────────────────────
  {
    title: "EVSUN EVLN-DL-16W Oprawa wpuszczana 4\" 16W",
    handle: "evln-dl-16w",
    subtitle: "Fotokatalityczna oprawa wpuszczana — dezynfekcja bez UV",
    description: `Oprawa wpuszczana EVSUN 16W z technologią EVLN. Eliminuje 99,7% bakterii w 6 godzin.
Zasięg dezynfekcji: 3m. Bezpieczna dla ludzi — aktywna w obecności osób.
Certyfikat TÜV i SIRIM. Żywotność do 50 000 godzin. Brak UV, rtęci i kadmu.`,
    status: "published" as const,
    categories: [{ id: CAT.dl }],
    metadata: { ...META_BASE, wattage: "16", size_inch: "4" },
    options: [
      { title: "Kształt", values: SHAPES },
      { title: "Temperatura barwowa", values: TEMPS },
    ],
    variants: variantsShapeTemp("EVLN-DL-16W", 24),
  },
  // ─── Recessed Downlight 6" 24W ───────────────────────────────────────────
  {
    title: "EVSUN EVLN-DL-24W Oprawa wpuszczana 6\" 24W",
    handle: "evln-dl-24w",
    subtitle: "Fotokatalityczna oprawa wpuszczana — dezynfekcja bez UV",
    description: `Oprawa wpuszczana EVSUN 24W z technologią EVLN. Zasięg dezynfekcji: 3m.
Idealna do biur, gabinetów lekarskich i korytarzy. Certyfikat TÜV i SIRIM.`,
    status: "published" as const,
    categories: [{ id: CAT.dl }],
    metadata: { ...META_BASE, wattage: "24", size_inch: "6" },
    options: [
      { title: "Kształt", values: SHAPES },
      { title: "Temperatura barwowa", values: TEMPS },
    ],
    variants: variantsShapeTemp("EVLN-DL-24W", 28),
  },
  // ─── Surface Mounted 4" 16W ──────────────────────────────────────────────
  {
    title: "EVSUN EVLN-SDL-16W Panel natynkowy 4\" 16W",
    handle: "evln-sdl-16w",
    subtitle: "Fotokatalityczny panel natynkowy — dezynfekcja bez UV",
    description: `Panel natynkowy EVSUN 16W z technologią EVLN. Montaż na suficie bez konieczności zabudowy.
Eliminuje 99,7% bakterii (Staphylococcus aureus) w 6 godzin. Zasięg: 3m.
Idealny do domu, biura, gabinetu. Certyfikat TÜV, SIRIM.`,
    status: "published" as const,
    categories: [{ id: CAT.sdl }],
    metadata: { ...META_BASE, wattage: "16", size_inch: "4" },
    options: [
      { title: "Kształt", values: SHAPES },
      { title: "Temperatura barwowa", values: TEMPS },
    ],
    variants: variantsShapeTemp("EVLN-SDL-16W", 20),
  },
  // ─── Surface Mounted 6" 24W ──────────────────────────────────────────────
  {
    title: "EVSUN EVLN-SDL-24W Panel natynkowy 6\" 24W",
    handle: "evln-sdl-24w",
    subtitle: "Fotokatalityczny panel natynkowy — dezynfekcja bez UV",
    description: `Panel natynkowy EVSUN 24W z technologią EVLN. Większy zasięg oświetlenia przy tej samej
technologii dezynfekcji. Eliminuje 99,7% bakterii w 6 godzin. Zasięg: 3m.`,
    status: "published" as const,
    categories: [{ id: CAT.sdl }],
    metadata: { ...META_BASE, wattage: "24", size_inch: "6" },
    options: [
      { title: "Kształt", values: SHAPES },
      { title: "Temperatura barwowa", values: TEMPS },
    ],
    variants: variantsShapeTemp("EVLN-SDL-24W", 24),
  },
  // ─── T8 0.6m 9W ──────────────────────────────────────────────────────────
  {
    title: "EVSUN EVLN-600T8 Świetlówka T8 0.6m 9W",
    handle: "evln-600t8-9w",
    subtitle: "Zamiennik świetlówek fluorescencyjnych z dezynfekcją EVLN",
    description: `Świetlówka LED T8 9W 60cm z technologią EVLN. Bezpośredni zamiennik tradycyjnych świetlówek
fluorescencyjnych. Dezynfekcja powietrza bez UV, zasięg 3m. Certyfikat TÜV, SIRIM.`,
    status: "published" as const,
    categories: [{ id: CAT.t8 }],
    metadata: { ...META_BASE, wattage: "9", length_cm: "60" },
    options: [{ title: "Temperatura barwowa", values: TEMPS }],
    variants: variantsTemp("EVLN-600T8-9W", 20),
  },
  // ─── T8 1.2m 18W ─────────────────────────────────────────────────────────
  {
    title: "EVSUN EVLN-1200T8 Świetlówka T8 1.2m 18W",
    handle: "evln-1200t8-18w",
    subtitle: "Zamiennik świetlówek fluorescencyjnych z dezynfekcją EVLN",
    description: `Świetlówka LED T8 18W 120cm z technologią EVLN. Idealna do biur i pomieszczeń komercyjnych.
Dezynfekcja powietrza bez UV, zasięg 3m. Certyfikat TÜV, SIRIM.`,
    status: "published" as const,
    categories: [{ id: CAT.t8 }],
    metadata: { ...META_BASE, wattage: "18", length_cm: "120" },
    options: [{ title: "Temperatura barwowa", values: TEMPS }],
    variants: variantsTemp("EVLN-1200T8-18W", 24),
  },
  // ─── GU10 7W ─────────────────────────────────────────────────────────────
  {
    title: "EVSUN EVLN-GU10 Żarówka GU10 7W",
    handle: "evln-gu10-7w",
    subtitle: "Żarówka GU10 z technologią dezynfekcji EVLN",
    description: `Żarówka EyeBall GU10 7W z technologią EVLN. Dezynfekcja w zasięgu 3m.
Idealna do salonów, kuchni, łazienek. Certyfikat TÜV, SIRIM.`,
    status: "published" as const,
    categories: [{ id: CAT.gu10 }],
    metadata: { ...META_BASE, wattage: "7", base: "GU10" },
    options: [{ title: "Temperatura barwowa", values: ["3000K", "4000K"] }],
    variants: variantsTemp("EVLN-GU10-7W", 8, ["3000K", "4000K"]),
  },
  // ─── LED Panel 2x2 36W ───────────────────────────────────────────────────
  {
    title: "EVSUN EVLN-PL2X2 Panel LED 2×2ft 36W",
    handle: "evln-pl2x2-36w",
    subtitle: "Panel sufitowy LED 60×60cm z technologią dezynfekcji EVLN",
    description: `Panel LED 2×2ft (ok. 60×60cm) 36W z technologią EVLN. Zasięg dezynfekcji: 3m.
Idealny do sufitów podwieszanych w biurach, szkołach, szpitalach.
Certyfikat TÜV, SIRIM. Eliminuje 99,7% bakterii w 6 godzin.`,
    status: "published" as const,
    categories: [{ id: CAT.panel }],
    metadata: { ...META_BASE, wattage: "36", size: "2x2ft" },
    options: [{ title: "Temperatura barwowa", values: ["6000K"] }],
    variants: variantsTemp("EVLN-PL2X2-36W", 136, ["6000K"]),
  },
  // ─── LED Panel 2x4 60W ───────────────────────────────────────────────────
  {
    title: "EVSUN EVLN-PL2X4 Panel LED 2×4ft 60W",
    handle: "evln-pl2x4-60w",
    subtitle: "Panel sufitowy LED 60×120cm z technologią dezynfekcji EVLN",
    description: `Panel LED 2×4ft (ok. 60×120cm) 60W z technologią EVLN. Zasięg dezynfekcji: 3m.
Idealny do dużych biur, sal konferencyjnych, szpitali.
Certyfikat TÜV, SIRIM.`,
    status: "published" as const,
    categories: [{ id: CAT.panel }],
    metadata: { ...META_BASE, wattage: "60", size: "2x4ft" },
    options: [{ title: "Temperatura barwowa", values: ["6000K"] }],
    variants: variantsTemp("EVLN-PL2X4-60W", 176, ["6000K"]),
  },
  // ─── High Bay 100W ───────────────────────────────────────────────────────
  {
    title: "EVSUN EVLN-HBN-100W Lampa przemysłowa High Bay 100W",
    handle: "evln-hbn-100w",
    subtitle: "Przemysłowa lampa High Bay z dezynfekcją EVLN — zasięg 6m",
    description: `Lampa przemysłowa High Bay 100W z technologią EVLN high-beam.
Zasięg dezynfekcji: 6m (wersja high-beam). Idealna do magazynów, hal produkcyjnych, obiektów sportowych.
Certyfikat TÜV, SIRIM. Eliminuje 99,7% bakterii w 6 godzin.`,
    status: "published" as const,
    categories: [{ id: CAT.highbay }],
    metadata: { ...META_BASE, wattage: "100", disinfection_range_m: "6", type: "high-bay" },
    options: [{ title: "Temperatura barwowa", values: ["6000K"] }],
    variants: variantsTemp("EVLN-HBN-100W", 220, ["6000K"]),
  },
  // ─── High Bay 150W ───────────────────────────────────────────────────────
  {
    title: "EVSUN EVLN-HBN-150W Lampa przemysłowa High Bay 150W",
    handle: "evln-hbn-150w",
    subtitle: "Przemysłowa lampa High Bay z dezynfekcją EVLN — zasięg 6m",
    description: `Lampa przemysłowa High Bay 150W z technologią EVLN high-beam.
Zasięg dezynfekcji: 6m (wersja high-beam). Dla dużych hal i przestrzeni przemysłowych.
Certyfikat TÜV, SIRIM.`,
    status: "published" as const,
    categories: [{ id: CAT.highbay }],
    metadata: { ...META_BASE, wattage: "150", disinfection_range_m: "6", type: "high-bay" },
    options: [{ title: "Temperatura barwowa", values: ["6000K"] }],
    variants: variantsTemp("EVLN-HBN-150W", 246, ["6000K"]),
  },
]

async function getToken(): Promise<string> {
  const res = await fetch(`${ADMIN_URL}/auth/user/emailpass`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  })
  const data = await res.json() as any
  if (!data.token) throw new Error(`Auth failed: ${JSON.stringify(data)}`)
  return data.token
}

async function getDefaultShippingProfileId(token: string): Promise<string> {
  const res = await fetch(`${ADMIN_URL}/admin/shipping-profiles`, {
    headers: { "Authorization": `Bearer ${token}` },
  })
  const data = await res.json() as any
  const profile = data.shipping_profiles?.find((p: any) => p.type === "default")
  if (!profile) throw new Error("Default shipping profile not found")
  return profile.id
}

async function createProduct(token: string, product: any): Promise<void> {
  const res = await fetch(`${ADMIN_URL}/admin/products`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
  const data = await res.json() as any
  if (data.product) {
    console.log(`✅ ${data.product.title} (${data.product.variants?.length || 0} wariantów)`)
  } else {
    console.error(`❌ ${product.title}: ${data.message || JSON.stringify(data).slice(0,200)}`)
  }
}

async function seed() {
  console.log("🌱 Startuję seed produktów EVSUN...\n")
  const token = await getToken()
  console.log("✅ Zalogowano jako admin\n")

  const shippingProfileId = await getDefaultShippingProfileId(token)
  console.log(`✅ Shipping profile: ${shippingProfileId}\n`)

  for (const product of PRODUCTS) {
    await createProduct(token, { ...product, shipping_profile_id: shippingProfileId })
  }

  console.log(`\n✅ Seed zakończony — ${PRODUCTS.length} produktów`)
}

seed().catch(console.error)
