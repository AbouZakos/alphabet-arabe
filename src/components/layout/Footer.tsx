import Link from 'next/link'
import { NAV_LINKS, SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-ardoise/40 border-t border-bordure/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Marque */}
          <div>
            <p className="font-serif text-albatre text-lg font-bold mb-2">
              alphabet<span className="text-or">-arabe</span>.com
            </p>
            <p className="text-albatre/50 text-sm font-sans max-w-xs leading-relaxed">
              Apprendre l&apos;alphabet arabe facilement, gratuitement, à votre rythme.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <p className="text-or text-xs font-sans font-semibold uppercase tracking-widest mb-1">Pages</p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-albatre/60 hover:text-or text-sm font-sans transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Réseau */}
          <div className="flex flex-col gap-2">
            <p className="text-or text-xs font-sans uppercase tracking-widest mb-1">Pour aller plus loin</p>
            <a
              href="https://tanger-institut.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-albatre/60 hover:text-or text-sm font-sans transition-colors"
            >
              Tanger Institut
            </a>
            <a
              href="https://cours-darabe.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-albatre/60 hover:text-or text-sm font-sans transition-colors"
            >
              cours-darabe.fr
            </a>
          </div>
        </div>

        <div className="border-t border-bordure/10 mt-8 pt-6 text-center">
          <p className="text-albatre/30 text-xs font-sans">
            © {new Date().getFullYear()} alphabet-arabe.com — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
