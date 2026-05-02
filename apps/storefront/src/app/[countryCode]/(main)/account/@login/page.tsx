import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Logowanie",
  description: "Zaloguj się na swoje konto LedGuard.",
}

export default function Login() {
  return <LoginTemplate />
}
