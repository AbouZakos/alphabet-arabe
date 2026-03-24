import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-nuit">

      {/* Image hero en fond — العربية 3D dorée */}
      <div className="absolute inset-0 z-0">
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
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
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
            Maîtrisez<br />
            l&apos;alphabet arabe,<br />
            <span className="text-or">une lettre à la fois.</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-albatre/65 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Les 28 lettres arabes expliquées simplement, avec prononciation,
            exercices pratiques et PDF gratuit à imprimer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/lettres-arabes"
              className="btn-or px-7 py-3.5 text-sm font-sans font-semibold tracking-widest uppercase text-center"
            >
              Commencer ici
            </Link>
            <Link
              href="/alphabet-arabe-pdf"
              className="btn-outline-or px-7 py-3.5 text-sm font-sans tracking-widest uppercase text-center"
            >
              PDF gratuit
            </Link>
          </div>

          {/* Stats rapides */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-or/15">
            {[
              { valeur: '28',      label: 'lettres arabes' },
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-albatre/30 text-xs font-sans tracking-widest uppercase">Découvrir</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="text-or/50">
          <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

    </section>
  )
}
