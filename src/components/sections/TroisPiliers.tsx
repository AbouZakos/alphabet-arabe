import Link from 'next/link'

const PILIERS = [
  {
    numero: '01',
    titre: "L'alphabet",
    sous_titre: 'Les 29 lettres arabes',
    description:
      'Toutes les lettres arabes avec leur prononciation, leurs formes et leur ordre. Le point de départ de tout apprentissage.',
    liens: [
      { label: 'Les 29 lettres',         href: '/lettres-arabes' },
      { label: 'Début, milieu, fin',      href: '/lettres-debut-milieu-fin' },
      { label: 'Prononciation',           href: '/alphabet-arabe-prononciation' },
      { label: 'PDF à imprimer',          href: '/alphabet-arabe-pdf' },
    ],
    arabique: 'أ',
    accentColor: 'or',
  },
  {
    numero: '02',
    titre: 'Apprentissage',
    sous_titre: 'Méthode structurée',
    description:
      'Des guides pas à pas pour apprendre à lire et écrire l\'arabe depuis zéro, avec exercices pratiques.',
    liens: [
      { label: 'Apprendre l\'alphabet',  href: '/apprendre-alphabet-arabe' },
      { label: 'Exercices pratiques',    href: '/exercices-alphabet-arabe' },
      { label: 'Écriture arabe',         href: '/ecriture-arabe' },
      { label: 'Pour les enfants',       href: '/alphabet-arabe-enfant' },
    ],
    arabique: 'ب',
    accentColor: 'or',
  },
  {
    numero: '03',
    titre: 'Outils',
    sous_titre: 'Ressources pratiques',
    description:
      'PDF à imprimer, chiffres arabes, calligraphie — tout ce qu\'il faut pour pratiquer au quotidien.',
    liens: [
      { label: 'PDF gratuit',            href: '/alphabet-arabe-pdf' },
      { label: 'Chiffres arabes',        href: '/chiffres-arabes' },
      { label: 'Calligraphie arabe',     href: '/calligraphie-arabe' },
      { label: 'Écriture arabe',         href: '/ecriture-arabe' },
    ],
    arabique: 'ج',
    accentColor: 'or',
  },
]

export default function TroisPiliers() {
  return (
    <section className="py-20 px-4 sm:px-8" style={{ backgroundColor: '#F1EDE3' }}>
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-6 h-px bg-or" />
              <span className="text-or text-xs font-sans uppercase tracking-[0.2em]">
                Tout le contenu du site
              </span>
            </div>
            <h2 className="font-serif text-nuit text-3xl sm:text-4xl font-bold leading-tight">
              Explorer l&apos;alphabet arabe
            </h2>
            <p className="text-nuit/50 font-sans text-sm mt-2 leading-relaxed max-w-md">
              3 piliers thématiques pour progresser à votre rythme.
            </p>
          </div>
        </div>

        {/* 3 cards piliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILIERS.map((pilier) => (
            <div
              key={pilier.numero}
              className="group relative flex flex-col border border-bordure/10
                         hover:border-or/30 rounded-xl overflow-hidden
                         transition-all duration-300
                         shadow-[0_4px_20px_rgba(10,17,40,0.15)]
                         hover:shadow-[0_8px_30px_rgba(10,17,40,0.25)]
                         hover:-translate-y-2 hover:scale-[1.02]"
              style={{ backgroundColor: '#0D1E3A' }}
            >
              {/* Header card */}
              <div className="px-7 pt-7 pb-5 border-b border-bordure/10">
                {/* Lettre arabe décorative */}
                <div
                  className="font-arabic text-7xl leading-none mb-4 select-none"
                  style={{ color: 'rgba(197,160,89,0.12)' }}
                >
                  {pilier.arabique}
                </div>

                {/* Numéro */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-or text-xs font-sans font-500 tracking-widest uppercase">
                    {pilier.numero}
                  </span>
                  <span className="block w-4 h-px bg-or/30" />
                </div>

                {/* Titre */}
                <h3 className="font-serif text-albatre text-2xl font-bold leading-tight mb-1">
                  {pilier.titre}
                </h3>
                <p className="text-or/70 text-xs font-sans uppercase tracking-widest">
                  {pilier.sous_titre}
                </p>
              </div>

              {/* Description */}
              <div className="px-7 py-5">
                <p className="text-albatre/50 font-sans text-sm leading-relaxed">
                  {pilier.description}
                </p>
              </div>

              {/* Liste de liens */}
              <div className="px-7 pb-7 mt-auto flex flex-col gap-2">
                {pilier.liens.map((lien) => (
                  <Link
                    key={lien.href}
                    href={lien.href}
                    className="flex items-center justify-between
                               text-albatre/60 hover:text-or
                               text-xs font-sans uppercase tracking-widest
                               py-2 border-b border-bordure/10
                               hover:border-or/20
                               transition-all duration-200 group/lien"
                  >
                    <span>{lien.label}</span>
                    <span className="text-or/30 group-hover/lien:text-or
                                     group-hover/lien:translate-x-1
                                     transition-all duration-200">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
