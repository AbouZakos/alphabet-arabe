import Link from 'next/link'

const ETAPES = [
  {
    numero: '01',
    titre: 'Lire l\'alphabet arabe',
    description:
      'L\'arabe possède 29 lettres, toutes consonantiques. Apprendre à les reconnaître est la première étape — sans elle, impossible d\'avancer. En quelques heures, vous pouvez identifier chaque lettre.',
    lien: { label: 'Voir les 29 lettres', href: '/lettres-arabes' },
    arabique: 'قراءة',
  },
  {
    numero: '02',
    titre: 'Comprendre la prononciation',
    description:
      'Chaque lettre a un son précis. Certains sons n\'existent pas en français — comme le ع (Aïn) ou le خ (Kha). Notre guide de prononciation vous accompagne lettre par lettre, avec la translittération.',
    lien: { label: 'Guide de prononciation', href: '/alphabet-arabe-prononciation' },
    arabique: 'نطق',
  },
  {
    numero: '03',
    titre: 'Maîtriser les formes des lettres',
    description:
      'En arabe, chaque lettre change de forme selon sa position dans le mot : isolée, initiale, médiane ou finale. C\'est ce qu\'on appelle les formes début-milieu-fin. Indispensable pour lire et écrire correctement.',
    lien: { label: 'Début, milieu, fin', href: '/lettres-debut-milieu-fin' },
    arabique: 'كتابة',
  },
]

export default function PourquoiApprendre() {
  return (
    <section className="py-20 px-4 sm:px-8" style={{ backgroundColor: '#0E1E3A' }}>
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-6 h-px bg-or" />
            <span className="text-or text-xs font-sans uppercase tracking-[0.2em]">
              Méthode pas à pas
            </span>
          </div>
          <h2 className="font-serif text-albatre text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Comment apprendre l&apos;alphabet arabe ?
          </h2>
          <p className="text-albatre/55 font-sans text-base leading-relaxed">
            L&apos;alphabet arabe s&apos;apprend en 3 étapes progressives. Contrairement aux idées reçues,
            les bases sont accessibles à tous — même sans expérience préalable.
          </p>
        </div>

        {/* 3 étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ETAPES.map((etape) => (
            <div
              key={etape.numero}
              className="relative border border-bordure/10 rounded-xl p-7
                         hover:border-or/25 transition-all duration-300"
              style={{ backgroundColor: '#F1EDE3' }}
            >
              {/* Numéro grand en filigrane */}
              <span
                className="absolute top-5 right-6 font-serif text-6xl font-bold
                           leading-none select-none pointer-events-none"
                style={{ color: 'rgba(197,160,89,0.07)' }}
              >
                {etape.numero}
              </span>

              {/* Mot arabe */}
              <div className="font-arabic text-3xl text-or/40 mb-4 leading-none">
                {etape.arabique}
              </div>

              {/* Numéro + titre */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-or text-xs font-sans font-500 tracking-widest uppercase">
                  {etape.numero}
                </span>
                <span className="block w-4 h-px bg-or/30" />
              </div>
              <h3 className="font-serif text-nuit text-xl font-bold mb-3 leading-snug">
                {etape.titre}
              </h3>

              {/* Description */}
              <p className="text-nuit/55 font-sans text-sm leading-relaxed mb-6">
                {etape.description}
              </p>

              {/* Lien */}
              <Link
                href={etape.lien.href}
                className="inline-flex items-center gap-1.5 text-or text-xs
                           font-sans uppercase tracking-widest
                           hover:gap-2.5 transition-all duration-200"
              >
                {etape.lien.label}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Texte SEO bas de section — contenu riche pour Google */}
        <div className="mt-16 pt-10 border-t border-bordure/10
                        grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-albatre text-lg font-bold mb-3">
              L&apos;alphabet arabe est-il difficile à apprendre ?
            </h3>
            <p className="text-albatre/50 font-sans text-sm leading-relaxed">
              Non — l&apos;alphabet arabe est plus simple qu&apos;il n&apos;y paraît. Il contient
              29 lettres, toutes consonantiques. La plupart des apprenants arrivent à les
              reconnaître en quelques jours. La vraie difficulté vient de l&apos;écriture
              cursive, où les lettres se lient entre elles et changent de forme.
              C&apos;est pourquoi notre méthode commence par les formes isolées avant
              d&apos;aborder les formes liées.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-albatre text-lg font-bold mb-3">
              Combien de temps pour apprendre l&apos;alphabet arabe ?
            </h3>
            <p className="text-albatre/50 font-sans text-sm leading-relaxed">
              Avec une pratique régulière de 15 à 20 minutes par jour, la plupart des
              débutants reconnaissent les 29 lettres en 1 à 2 semaines. La prononciation
              et les formes début-milieu-fin demandent 2 à 4 semaines supplémentaires.
              Pour aller plus loin et apprendre à lire couramment, des{' '}
              <a
                href="https://tanger-institut.com/cours-intensif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-or hover:text-or/80 underline underline-offset-2
                           decoration-or/30 transition-colors"
              >
                cours d&apos;arabe structurés
              </a>{' '}
              avec un professeur natif accélèrent considérablement la progression.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
