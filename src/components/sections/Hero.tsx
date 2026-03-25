import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden bg-nuit">

      {/* Image hero mobile — visible en haut */}
      <div className="relative w-full h-[40vh] mt-10 lg:hidden flex items-center justify-center">
        <Image
          src="/images/hero-alphabet-arabe.webp"
          alt="Calligraphie arabe dorée العربية sur fond bleu nuit"
          fill
          priority
          fetchPriority="high"
          className="object-contain"
          sizes="100vw"
        />
        {/* Dégradé bas pour transition vers le contenu */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-nuit to-transparent" />
      </div>

      {/* Image hero desktop — en fond */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/images/hero-alphabet-arabe.webp"
          alt="Calligraphie arabe dorée العربية sur fond bleu nuit"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dégradé gauche pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-nuit via-nuit/80 to-transparent" />
        {/* Dégradé bas pour transition douce */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-nuit to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full pt-0 lg:pt-24 pb-16">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="block w-6 h-px bg-or" />
            <span className="text-or text-xs font-sans uppercase tracking-[0.2em]">
              Guide complet gratuit
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-albatre text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
            Alphabet arabe :<br />
            apprendre les 29 lettres{' '}
            <span className="text-or"><br className="lg:hidden" />en partant de zéro.</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-albatre/65 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Apprenez les 29 lettres arabes — l&apos;alphabet en arabe en français,
            avec prononciation de l&apos;alphabet arabe et translittération. Alphabet arabe à imprimer gratuitement en PDF.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/lettres-arabes"
              className="btn-or px-7 py-3.5 text-sm font-sans font-semibold tracking-widest uppercase text-center"
            >
              Voir les lettres arabes
            </Link>
            <Link
              href="/alphabet-arabe-pdf"
              className="btn-outline-or px-7 py-3.5 text-sm font-sans tracking-widest uppercase text-center"
            >
              PDF gratuit
            </Link>
          </div>

          {/* Stats rapides */}
          <div className="flex items-center justify-center sm:justify-start gap-6 mt-10 pt-8 border-t border-or/15">
            {[
              { valeur: '29',      label: 'lettres arabes' },
              { valeur: '100%',    label: 'gratuit' },
              { valeur: 'PDF',     label: 'à imprimer' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-or text-xl font-bold leading-none">
                  {stat.valeur}
                </span>
                <span className="text-albatre/50 text-xs font-sans mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flèche scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-albatre/30 text-xs font-sans tracking-widest uppercase">Découvrir</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="text-or/50">
          <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

    </section>
  )
}
