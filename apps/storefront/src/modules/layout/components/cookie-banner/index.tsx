"use client"

import { useEffect, useState } from "react"

const COOKIE_KEY = "ledguard_cookie_consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-navy border-t border-white/10 p-4 shadow-2xl">
      <div className="content-container flex flex-col small:flex-row items-start small:items-center gap-4 justify-between">
        <p className="text-white/80 text-sm max-w-xl">
          Używamy plików cookie do obsługi sklepu i analityki ruchu (Google Analytics).
          Szczegóły w naszej{" "}
          <a href="../polityka-prywatnosci" className="text-brand-cyan hover:underline">
            Polityce prywatności
          </a>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-white/60 hover:text-white text-sm px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-colors"
          >
            Odrzuć
          </button>
          <button
            onClick={accept}
            className="bg-brand-cyan hover:bg-brand-cyan-dark text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  )
}
