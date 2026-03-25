import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import LettresApercu from '@/components/sections/LettresApercu'
import PourquoiApprendre from '@/components/sections/PourquoiApprendre'
import TroisPiliers from '@/components/sections/TroisPiliers'
import LeadMagnetPDF from '@/components/sections/LeadMagnetPDF'
import FAQ from '@/components/sections/FAQ'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Alphabet arabe : apprendre les 29 lettres facilement',
  description: 'Apprenez l\'alphabet arabe gratuitement : les 29 lettres avec prononciation, PDF à imprimer et exercices pour débutants. Guide complet en français.',
  alternates: { canonical: 'https://alphabet-arabe.com' },
  openGraph: {
    title:       'Alphabet arabe : apprendre les 29 lettres facilement',
    description: 'Guide complet pour apprendre l\'alphabet arabe. 29 lettres, prononciation, PDF gratuit.',
    url:         'https://alphabet-arabe.com',
    images: [{ url: '/images/hero-alphabet-arabe.webp', width: 720, height: 393 }],
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'alphabet-arabe.com',
    url: 'https://alphabet-arabe.com',
    description: 'Apprendre l\'alphabet arabe facilement — Guide complet gratuit',
    inLanguage: 'fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://alphabet-arabe.com/lettres-arabes',
    },
  }

  return (
    <>
      <Script
        id="jsonld-homepage"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <LettresApercu />
      <PourquoiApprendre />
      <TroisPiliers />
      <LeadMagnetPDF />
      <FAQ />
    </>
  )
}
