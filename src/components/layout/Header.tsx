'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { NAV_LINKS, CTA_PRINCIPAL } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-nuit/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/images/logo-alphabet-arabe.png"
            alt="Logo alphabet-arabe.com"
            width={60}
            height={60}
            className="rounded-full transition-transform duration-500 group-hover:scale-110 brightness-0 invert"
          />
          <span className="font-serif text-albatre text-base sm:text-lg font-bold tracking-tight leading-none">
            alphabet<span className="text-or">-arabe</span>.com
          </span>
        </Link>

        {/* Nav desktop — séparateurs | */}
        <nav className="hidden lg:flex items-center gap-0">
          {NAV_LINKS.slice(0, 4).map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && (
                <span className="text-albatre/20 text-xs mx-3 select-none">|</span>
              )}
              <Link
                href={link.href}
                className="text-xs font-sans font-medium tracking-widest uppercase text-albatre/70 hover:text-or transition-colors duration-200"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="/lettres-arabes"
          className="hidden lg:inline-flex btn-or px-5 py-2 text-xs font-sans font-semibold tracking-widest uppercase"
        >
          Commencer
        </Link>

        {/* Burger mobile */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span
            className={`block h-px bg-albatre transition-all duration-300 origin-center ${
              menuOpen ? 'w-5 rotate-45 translate-y-[6px]' : 'w-5'
            }`}
          />
          <span
            className={`block h-px bg-albatre transition-all duration-300 ${
              menuOpen ? 'w-0 opacity-0' : 'w-4'
            }`}
          />
          <span
            className={`block h-px bg-albatre transition-all duration-300 origin-center ${
              menuOpen ? 'w-5 -rotate-45 -translate-y-[6px]' : 'w-5'
            }`}
          />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-nuit/98 border-t border-or/10 px-5 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-albatre/75 hover:text-or text-sm font-sans uppercase tracking-widest transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/lettres-arabes"
            className="btn-or px-5 py-3 text-xs font-sans font-semibold tracking-widest uppercase text-center mt-1"
            onClick={() => setMenuOpen(false)}
          >
            Commencer maintenant
          </Link>
        </div>
      </div>
    </header>
  )
}
