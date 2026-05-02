import { Metadata } from "next"
import PobierzContent from "./_pobierz-content"

export const metadata: Metadata = {
  title: "Do pobrania — dokumentacja EVSun | LEDGUARD",
  description:
    "Karty katalogowe, certyfikaty, atesty, deklaracje, raporty z badań, projekty DIALux oraz materiały dla architektów i inwestorów — wszystko w jednym miejscu.",
}

export default function PobierzPage() {
  return <PobierzContent />
}
