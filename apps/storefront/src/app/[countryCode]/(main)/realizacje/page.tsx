import { Metadata } from "next"
import RealizacjeContent from "./_realizacje-content"

export const metadata: Metadata = {
  title: "Realizacje EVSun — wdrożenia EVLN w szpitalach, hotelach, biurach | LEDGUARD",
  description:
    "Dokumentacja wybranych projektów EVSun EVLN — szpitale, hotele, gastronomia, biura, produkcja. Dane przed/po, produkty, wyniki IAQ i oszczędności energii.",
}

export default function RealizacjePage() {
  return <RealizacjeContent />
}
