import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-brand-navy" style={{ minHeight: "75vh" }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy opacity-90" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-cyan opacity-5" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-cyan opacity-5" />

      <div className="relative z-10 content-container flex flex-col justify-center items-start py-24 gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-brand-cyan text-sm font-medium">Technologia EVLN — dezynfekcja bez UV</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl small:text-6xl font-bold text-white leading-tight">
            Lampy które<br />
            <span className="text-brand-cyan">dezynfekują</span> powietrze
          </h1>
          <p className="text-white/70 text-lg small:text-xl max-w-xl leading-relaxed">
            Fotokatalityczne lampy LED EVSUN eliminują 99,7% bakterii w zasięgu 3–6m.
            Bezpieczne dla ludzi — aktywne w obecności osób. Certyfikat TÜV i SIRIM.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 py-4">
          <div className="flex flex-col">
            <span className="text-brand-cyan text-3xl font-bold">99,7%</span>
            <span className="text-white/60 text-sm">skuteczność vs. bakterie</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-cyan text-3xl font-bold">6h</span>
            <span className="text-white/60 text-sm">czas dezynfekcji</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-cyan text-3xl font-bold">50 000h</span>
            <span className="text-white/60 text-sm">żywotność</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-cyan text-3xl font-bold">0 UV</span>
            <span className="text-white/60 text-sm">bezpieczne dla ludzi</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Zobacz produkty
          </LocalizedClientLink>
          <a
            href="#technologia"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Jak to działa?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
