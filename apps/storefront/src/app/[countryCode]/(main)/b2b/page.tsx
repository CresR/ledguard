import { Metadata } from "next"
import B2BContent from "./_b2b-content"

export const metadata: Metadata = {
  title: "Strefa Partnera B2B — LEDGUARD | Wyceny, dokumentacja, warunki hurtowe",
  description:
    "Kompletne rozwiązania oświetleniowe dla firm — szpitali, hoteli, gastronomii, biur i produkcji. Rabaty hurtowe od 15%, pełna dokumentacja przetargowa, wycena w 24h.",
}

export default function B2BPage() {
  return <B2BContent />
}
