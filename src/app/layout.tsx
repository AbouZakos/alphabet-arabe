import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default:  'Alphabet arabe : apprendre les 28 lettres facilement',
    template: '%s | alphabet-arabe.com',
  },
  description: 'Apprenez l\'alphabet arabe gratuitement : les 28 lettres avec prononciation, PDF à imprimer, exercices pour débutants. Guide complet en français.',
  metadataBase: new URL('https://alphabet-arabe.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type:   'website',
    locale: 'fr_FR',
    url:    'https://alphabet-arabe.com',
    siteName: 'alphabet-arabe.com',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
