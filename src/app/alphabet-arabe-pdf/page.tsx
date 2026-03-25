import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PDF alphabet arabe à imprimer gratuitement — 29 lettres',
  description: 'Téléchargez gratuitement le PDF alphabet arabe : les 29 lettres arabes à imprimer et découper en cartes. Recto : la lettre, verso : la phonétique.',
  alternates: { canonical: 'https://alphabet-arabe.com/alphabet-arabe-pdf' },
}

export default function AlphabetArabePDFPage() {
  return (
    <main className="bg-albatre min-h-screen pt-24 pb-20 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">

        {/* En-tête */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-6 h-px bg-or" />
            <span className="text-or text-xs font-sans uppercase tracking-[0.2em]">
              Téléchargement gratuit
            </span>
          </div>
          <h1 className="font-serif text-nuit text-3xl sm:text-4xl font-bold leading-tight mb-4">
            PDF alphabet arabe à imprimer
          </h1>
          <p className="text-nuit/60 font-sans text-base leading-relaxed max-w-xl">
            Les 29 lettres arabes en cartes à découper. Recto : la lettre arabe.
            Verso : le nom, la phonétique et la translittération.
            Imprimez en recto/verso, découpez, et révisez partout.
          </p>
        </div>

        {/* Aperçu + CTA */}
        <div
          className="rounded-2xl p-8 sm:p-12 mb-8 text-center"
          style={{ backgroundColor: '#0A1128' }}
        >
          {/* Lettres décoratives */}
          <div className="font-arabic text-6xl text-or/30 mb-6 leading-none">
            أ ب ت
          </div>

          <h2 className="font-serif text-albatre text-2xl font-bold mb-2">
            29 cartes à découper
          </h2>
          <p className="text-albatre/50 font-sans text-sm mb-8 leading-relaxed">
            Format A4 · 9 pages · Recto / Verso · 100% gratuit
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            {[
              { val: '29', label: 'lettres' },
              { val: 'A4',  label: 'format' },
              { val: '0€',  label: 'gratuit' },
            ].map((s) => (
              <div key={s.val} className="flex flex-col items-center">
                <span className="font-serif text-or text-2xl font-bold">{s.val}</span>
                <span className="text-albatre/40 text-xs font-sans mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Bouton téléchargement */}
          <a
            href="/alphabet-arabe-cartes.pdf"
            download="alphabet-arabe-29-lettres.pdf"
            className="btn-or inline-block px-10 py-4 text-sm font-sans
                       font-semibold uppercase tracking-widest"
          >
            Télécharger le PDF gratuit
          </a>

          <p className="text-albatre/30 text-xs font-sans mt-4">
            PDF · 96 Ko · tanger-institut.com
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl p-6 border border-bordure mb-8">
          <h3 className="font-serif text-nuit text-lg font-bold mb-4">
            Comment utiliser ces cartes ?
          </h3>
          <ol className="space-y-3">
            {[
              'Imprimez le PDF en mode recto/verso (retourner sur le bord long)',
              'Découpez chaque carte le long des pointillés',
              'Recto : entraînez-vous à reconnaître la lettre arabe',
              'Verso : vérifiez le nom, la phonétique et la translittération',
              'Révisez dans l\'ordre ou mélangez les cartes pour varier',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-sm font-sans text-nuit/70">
                <span className="font-serif text-or font-bold shrink-0">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Lien retour */}
        <div className="text-center">
          <Link
            href="/lettres-arabes"
            className="text-or text-sm font-sans uppercase tracking-widest
                       hover:text-or/70 transition-colors"
          >
            ← Voir toutes les lettres arabes
          </Link>
        </div>

      </div>
    </main>
  )
}
