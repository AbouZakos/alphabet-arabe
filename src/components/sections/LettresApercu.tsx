import Link from 'next/link'
import { LETTRES_ARABES } from '@/lib/constants'

export default function LettresApercu() {
  return (
    <section className="bg-nuit py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* En-tête section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-6 h-px bg-or" />
              <span className="text-or text-xs font-sans uppercase tracking-[0.2em]">
                L&apos;alphabet complet
              </span>
            </div>
            <h2 className="font-serif text-albatre text-3xl sm:text-4xl font-bold leading-tight">
              Les 28 lettres arabes
            </h2>
            <p className="text-albatre/50 font-sans text-sm mt-2 max-w-md leading-relaxed">
              Chaque lettre possède jusqu&apos;à 4 formes selon sa position dans le mot.
              Cliquez sur une lettre pour en savoir plus.
            </p>
          </div>
          <Link
            href="/lettres-arabes"
            className="btn-outline-or px-5 py-2.5 text-xs font-sans uppercase tracking-widest whitespace-nowrap self-start sm:self-auto"
          >
            Voir le guide complet →
          </Link>
        </div>

        {/* Grille des 28 lettres */}
        <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-7 gap-3">
          {LETTRES_ARABES.map((lettre) => (
            <Link
              key={lettre.nom}
              href="/lettres-arabes"
              className="group relative flex flex-col items-center justify-center
                         bg-ardoise/30 border border-bordure/10
                         hover:border-or/40 hover:bg-ardoise/50
                         rounded-lg p-3 sm:p-4
                         transition-all duration-200
                         cursor-pointer"
            >
              {/* Numéro */}
              <span className="absolute top-1.5 left-2.5 text-albatre/20 text-[10px] font-sans">
                {lettre.position}
              </span>

              {/* Lettre arabe */}
              <span
                className="font-arabic text-3xl sm:text-4xl text-or/80
                           group-hover:text-or group-hover:scale-110
                           transition-all duration-200 leading-none mb-2"
              >
                {lettre.arabe}
              </span>

              {/* Nom français */}
              <span className="text-albatre/60 text-[11px] font-sans group-hover:text-albatre/90 transition-colors text-center leading-tight">
                {lettre.nom.replace('Ha2', 'Ha')}
              </span>

              {/* Translittération */}
              <span className="text-or/40 text-[10px] font-sans mt-0.5 group-hover:text-or/70 transition-colors">
                /{lettre.transliteration}/
              </span>
            </Link>
          ))}
        </div>

        {/* Bandeau info bas */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4
                        border-t border-bordure/10 pt-8">
          <p className="text-albatre/40 text-xs font-sans text-center sm:text-left leading-relaxed">
            L&apos;arabe s&apos;écrit de droite à gauche. Chaque lettre peut avoir jusqu&apos;à 4 formes :<br className="hidden sm:block" />
            <span className="text-albatre/60">isolée · initiale · médiane · finale</span>
          </p>
          <Link
            href="/alphabet-arabe-pdf"
            className="btn-or px-6 py-2.5 text-xs font-sans uppercase tracking-widest whitespace-nowrap"
          >
            Télécharger le PDF gratuit
          </Link>
        </div>

      </div>
    </section>
  )
}
