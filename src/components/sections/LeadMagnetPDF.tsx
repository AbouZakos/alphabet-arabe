import Link from 'next/link'

export default function LeadMagnetPDF() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Bloc principal PDF */}
        <div
          className="relative rounded-2xl overflow-hidden px-8 sm:px-14 py-14
                     flex flex-col md:flex-row items-center justify-between gap-10"
          style={{ backgroundColor: '#0A1128' }}
        >
          {/* Ornement arabesque coin haut gauche */}
          <div
            className="absolute top-0 left-0 w-40 h-40 opacity-[0.06] select-none pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='none' stroke='%23C5A059' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%23C5A059' stroke-width='1.5'/%3E%3Ccircle cx='100' cy='100' r='30' fill='none' stroke='%23C5A059' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Ornement coin bas droit */}
          <div
            className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.05] select-none pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='none' stroke='%23C5A059' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%23C5A059' stroke-width='1.5'/%3E%3Ccircle cx='100' cy='100' r='30' fill='none' stroke='%23C5A059' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Gauche — Texte */}
          <div className="relative z-10 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span
                className="text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                style={{ background: 'rgba(197,160,89,0.15)', color: '#C5A059', border: '1px solid rgba(197,160,89,0.25)' }}
              >
                Téléchargement gratuit
              </span>
            </div>

            <h2 className="font-serif text-albatre text-3xl sm:text-4xl font-bold leading-tight mb-4">
              PDF alphabet arabe —{' '}
              <span className="text-or">à imprimer gratuitement</span>
            </h2>

            <p className="text-albatre/60 font-sans text-base leading-relaxed mb-8">
              Toutes les 29 lettres arabes sur une seule page : forme isolée, nom,
              prononciation et translittération. Idéal pour réviser, mémoriser ou
              afficher chez vous.
            </p>

            {/* Points forts */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {[
                { val: '29', label: 'lettres arabes' },
                { val: 'A4',  label: 'format imprimable' },
                { val: '0€',  label: '100% gratuit' },
              ].map((item) => (
                <div key={item.val} className="flex items-center gap-3">
                  <span className="font-serif text-or text-2xl font-bold leading-none">
                    {item.val}
                  </span>
                  <span className="text-albatre/50 text-xs font-sans leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/alphabet-arabe-cartes.pdf"
                download="alphabet-arabe-29-lettres.pdf"
                className="btn-or px-8 py-3.5 text-sm font-sans font-semibold
                           uppercase tracking-widest text-center inline-block"
              >
                Télécharger le PDF gratuit
              </a>
              <Link
                href="/lettres-arabes"
                className="btn-outline-or px-8 py-3.5 text-sm font-sans
                           uppercase tracking-widest text-center"
                style={{ borderColor: 'rgba(197,160,89,0.4)', color: 'rgba(197,160,89,0.7)' }}
              >
                Voir les lettres
              </Link>
            </div>
          </div>

          {/* Droite — Aperçu PDF simulé */}
          <div className="relative z-10 shrink-0">
            <div
              className="w-48 sm:w-56 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                         border border-or/20 overflow-hidden"
              style={{ backgroundColor: '#F8F9FA' }}
            >
              {/* Header du PDF */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ backgroundColor: '#0A1128', borderBottom: '1px solid rgba(197,160,89,0.2)' }}
              >
                <span className="font-serif text-albatre text-xs font-bold">
                  alphabet<span className="text-or">-arabe</span>.com
                </span>
                <span className="text-or/60 text-[10px] font-sans">PDF</span>
              </div>

              {/* Aperçu lettres */}
              <div className="p-3 grid grid-cols-4 gap-1.5" style={{ direction: 'rtl' }}>
                {['ا','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س'].map((l) => (
                  <div
                    key={l}
                    className="aspect-square rounded flex flex-col items-center
                               justify-center border"
                    style={{ borderColor: '#E2E8F0', backgroundColor: '#fff' }}
                  >
                    <span className="font-arabic text-lg leading-none"
                          style={{ color: '#0A1128' }}>
                      {l}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer PDF */}
              <div
                className="px-3 py-2 text-center"
                style={{ borderTop: '1px solid #E2E8F0' }}
              >
                <span className="text-[9px] font-sans uppercase tracking-wider"
                      style={{ color: '#C5A059' }}>
                  29 lettres arabes
                </span>
              </div>
            </div>

            {/* Badge "Gratuit" sur le PDF */}
            <div
              className="absolute -top-3 -right-3 w-12 h-12 rounded-full
                         flex items-center justify-center shadow-lg"
              style={{ backgroundColor: '#C5A059' }}
            >
              <span className="text-nuit text-[9px] font-sans font-semibold
                               uppercase text-center leading-tight">
                Gra<br/>tuit
              </span>
            </div>
          </div>

        </div>

        {/* Bloc lien contextuel Tanger Institut */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between
                        gap-4 px-6 py-5 rounded-xl border border-bordure"
             style={{ backgroundColor: '#F8F9FA' }}>
          <div>
            <p className="text-nuit/70 font-sans text-sm leading-relaxed">
              Vous souhaitez aller plus loin que l&apos;alphabet ?{' '}
              <a
                href="https://tanger-institut.com/cours-intensif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nuit font-medium underline underline-offset-2
                           decoration-or/40 hover:text-or transition-colors"
              >
                Tanger Institut propose des cours d&apos;arabe intensifs
              </a>{' '}
              avec des professeurs natifs — en présentiel à Tanger ou à distance.
            </p>
          </div>
          <a
            href="https://tanger-institut.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-or px-5 py-2.5 text-xs font-sans uppercase
                       tracking-widest whitespace-nowrap shrink-0"
          >
            Découvrir →
          </a>
        </div>

      </div>
    </section>
  )
}
