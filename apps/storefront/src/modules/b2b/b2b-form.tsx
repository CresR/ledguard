"use client"

import { useState } from "react"

type FormState = "idle" | "loading" | "success" | "error"

export default function B2BForm() {
  const [state, setState] = useState<FormState>("idle")
  const [fields, setFields] = useState({
    company: "",
    nip: "",
    email: "",
    phone: "",
    message: "",
  })

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("loading")
    try {
      const res = await fetch("/api/b2b-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setState("success")
      } else {
        setState("error")
      }
    } catch {
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-xl p-8 text-center">
        <div className="text-brand-cyan text-4xl mb-3">✓</div>
        <h3 className="text-brand-navy font-bold text-xl mb-2">Zapytanie wysłane!</h3>
        <p className="text-grey-60">
          Odpiszemy na <strong>{fields.email}</strong> w ciągu 24 godzin z indywidualną ofertą hurtową.
        </p>
      </div>
    )
  }

  const inputCls = "w-full border border-grey-20 rounded-lg px-4 py-3 text-sm text-brand-navy placeholder:text-grey-40 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 small:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">
            Nazwa firmy <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="ABC Sp. z o.o."
            value={fields.company}
            onChange={set("company")}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">NIP / VAT EU</label>
          <input
            type="text"
            placeholder="PL1234567890"
            value={fields.nip}
            onChange={set("nip")}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">
            Adres email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="zakupy@firma.pl"
            value={fields.email}
            onChange={set("email")}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">Telefon</label>
          <input
            type="tel"
            placeholder="+48 500 000 000"
            value={fields.phone}
            onChange={set("phone")}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1">
          Wiadomość (opcjonalnie)
        </label>
        <textarea
          rows={3}
          placeholder="Planowany wolumen zamówień, rodzaj działalności..."
          value={fields.message}
          onChange={set("message")}
          className={inputCls + " resize-none"}
        />
      </div>

      {state === "error" && (
        <p className="text-red-500 text-sm">Wystąpił błąd. Napisz bezpośrednio na b2b@ledguard.pl</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-brand-cyan hover:bg-brand-cyan-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {state === "loading" ? "Wysyłanie..." : "Wyślij zapytanie B2B"}
      </button>
      <p className="text-grey-40 text-xs text-center">
        Odpowiadamy w ciągu 24 godzin roboczych.
      </p>
    </form>
  )
}
