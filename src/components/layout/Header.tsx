'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'

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

      {/* Menu mobile plein écran */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-nuit flex flex-col items-center justify-center
                    transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Header du menu : logo + croix */}
        <div className="absolute top-0 left-0 right-0 px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo-alphabet-arabe.png"
              alt="Logo alphabet-arabe.com"
              width={60}
              height={60}
              className="rounded-full brightness-0 invert"
            />
            <span className="font-serif text-albatre text-base font-bold tracking-tight leading-none">
              alphabet<span className="text-or">-arabe</span>.com
            </span>
          </Link>
          <button
            className="w-10 h-10 flex items-center justify-center
                       border border-albatre/20 rounded-md hover:border-or transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" className="text-albatre" />
            </svg>
          </button>
        </div>

        {/* Liens */}
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-albatre text-2xl font-bold
                         hover:text-or transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/lettres-arabes"
          className="btn-or px-8 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase mt-12"
          onClick={() => setMenuOpen(false)}
        >
          Commencer maintenant
        </Link>
      </div>
    </header>
  )
}
