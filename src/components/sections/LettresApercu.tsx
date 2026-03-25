import Link from 'next/link'
import { LETTRES_ARABES } from '@/lib/constants'

export default function LettresApercu() {
  return (
    <section className="py-20 px-4 sm:px-8" style={{ backgroundColor: '#F1EDE3' }}>
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
            <h2 className="font-serif text-nuit text-3xl sm:text-4xl font-bold leading-tight">
              Les 29 lettres arabes
            </h2>
            <p className="text-nuit/50 font-sans text-sm mt-2 max-w-md leading-relaxed">
              Les 29 lettres de l&apos;alphabet arabe en français, chacune avec sa prononciation et translittération.
              Cliquez pour en savoir plus.
            </p>
          </div>
          <Link
            href="/lettres-arabes"
            className="border border-nuit/30 hover:border-or text-nuit/70 hover:text-or
                       px-5 py-2.5 text-xs font-sans uppercase tracking-widest
                       rounded-cta transition-all duration-200
                       whitespace-nowrap self-start sm:self-auto"
          >
            Voir le guide complet →
          </Link>
        </div>

        {/* Grille 29 lettres — direction RTL (Alif à droite) */}
        <div
          className="grid grid-cols-4 sm:grid-cols-7 gap-3"
          style={{
            direction: 'rtl',
          }}
        >
          {LETTRES_ARABES.map((lettre) => (
            <Link
              key={lettre.position}
              href="/lettres-arabes"
              className="group relative flex flex-col items-center justify-center
                         bg-white border border-bordure
                         hover:border-or hover:scale-105
                         rounded-lg p-3 sm:p-4
                         transition-all duration-200 cursor-pointer
                         shadow-[0_2px_8px_rgba(10,17,40,0.08)]
                         hover:shadow-[0_4px_16px_rgba(197,160,89,0.18)]
                         active:scale-95"
            >
              {/* Numéro */}
              <span
                className="absolute top-1.5 text-[10px] font-sans text-nuit/25 group-hover:text-or/60 transition-colors"
                style={{ right: '8px', direction: 'ltr' }}
              >
                {lettre.position}
              </span>

              {/* Lettre arabe */}
              <span
                className={`font-arabic text-4xl text-nuit/75
                           group-hover:text-or group-hover:scale-110
                           transition-all duration-200 leading-none mt-1
                           ${['ج', 'ح', 'خ'].includes(lettre.arabe) ? 'mb-4' : 'mb-2'}`}
              >
                {lettre.arabe}
              </span>

              {/* Nom français */}
              <span
                className="text-nuit/55 text-[11px] font-sans
                           group-hover:text-nuit/90 transition-colors
                           text-center leading-tight"
                style={{ direction: 'ltr' }}
              >
                {lettre.nom}
              </span>

              {/* Translittération */}
              <span
                className="text-or/50 text-[10px] font-sans mt-0.5
                           group-hover:text-or transition-colors"
                style={{ direction: 'ltr' }}
              >
                /{lettre.transliteration}/
              </span>
            </Link>
          ))}
        </div>

        {/* Bandeau info bas */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4
                        border-t border-nuit/10 pt-8">
          <p className="text-nuit/40 text-xs font-sans text-center sm:text-left leading-relaxed">
            Chaque lettre arabe s&apos;écrit de droite à gauche
            <br />
            et peut prendre jusqu&apos;à 4 formes :
            <br />
            <span className="text-nuit/60">isolée · initiale · médiane · finale</span>
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
