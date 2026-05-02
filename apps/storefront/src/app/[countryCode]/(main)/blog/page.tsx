import { Metadata } from "next"
import BlogContent from "./_blog-content"

export const metadata: Metadata = {
  title: "Blog — wiedza o oświetleniu EVSun, EVLN, dezynfekcja | LEDGUARD",
  description:
    "Artykuły o technologii EVLN, projektowaniu oświetlenia, energooszczędności i higienie w obiektach komercyjnych i medycznych.",
}

export default function BlogPage() {
  return <BlogContent />
}
