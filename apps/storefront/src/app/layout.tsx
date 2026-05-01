import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "styles/globals.css"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "LedGuard — Lampy LED z dezynfekcją EVLN",
    template: "%s | LedGuard",
  },
  description:
    "Fotokatalityczne lampy LED EVSUN — dezynfekcja powietrza bez UV. Zasięg 3–6m, certyfikat TÜV i SIRIM. Sklep dla domu, biura i przemysłu.",
  keywords: ["lampy LED", "dezynfekcja", "EVSUN", "EVLN", "fotokataliza", "LedGuard"],
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pl" data-mode="light" className={inter.className}>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
            </Script>
          </>
        )}
      </head>
      <body>
        <Script id="org-schema" type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"Organization","name":"LedGuard / EVS sp. z o.o.","url":"https://ledguard.pl","logo":"https://ledguard.pl/logo.png","email":"kontakt@ledguard.pl","address":{"@type":"PostalAddress","streetAddress":"ul. Bolesława Prusa 7A","addressLocality":"Kleosin","postalCode":"16-001","addressCountry":"PL"},"taxID":"5423491568","sameAs":["https://ledguard.eu"]}`}
        </Script>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
