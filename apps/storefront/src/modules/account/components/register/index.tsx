"use client"

import { useActionState, useState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup as (state: string | null, formData: FormData) => Promise<string | null>, null as string | null)
  const [isB2B, setIsB2B] = useState(false)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-large-semi uppercase mb-6">
        Utwórz konto LedGuard
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Załóż konto, aby śledzić zamówienia i zarządzać swoim profilem.
      </p>

      {/* Account type toggle */}
      <div className="w-full flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setIsB2B(false)}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${
            !isB2B
              ? "bg-brand-navy text-white border-brand-navy"
              : "text-grey-60 border-grey-20 hover:border-grey-40"
          }`}
        >
          Klient prywatny
        </button>
        <button
          type="button"
          onClick={() => setIsB2B(true)}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${
            isB2B
              ? "bg-brand-navy text-white border-brand-navy"
              : "text-grey-60 border-grey-20 hover:border-grey-40"
          }`}
        >
          Firma / B2B
        </button>
      </div>

      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Imię"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Nazwisko"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="E-mail"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Telefon"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />

          {isB2B && (
            <>
              <Input
                label="Nazwa firmy"
                name="company_name"
                required={isB2B}
                autoComplete="organization"
                data-testid="company-name-input"
              />
              <Input
                label="NIP / VAT EU (np. PL5423491568)"
                name="tax_id"
                required={isB2B}
                data-testid="tax-id-input"
              />
              <p className="text-xs text-grey-50 bg-brand-bg-subtle rounded-lg p-3">
                Konta B2B wymagają weryfikacji. Po rejestracji skontaktujemy się z Tobą
                w ciągu 1 dnia roboczego i aktywujemy rabaty hurtowe (-40%).
              </p>
            </>
          )}

          <Input
            label="Hasło"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Rejestrując się, akceptujesz{" "}
          <LocalizedClientLink href="/regulamin" className="underline">
            Regulamin
          </LocalizedClientLink>{" "}
          i{" "}
          <LocalizedClientLink href="/polityka-prywatnosci" className="underline">
            Politykę prywatności
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          Utwórz konto
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Masz już konto?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Zaloguj się
        </button>
        .
      </span>
    </div>
  )
}

export default Register
