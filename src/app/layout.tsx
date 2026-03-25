import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default:  'Alphabet arabe : apprendre les 29 lettres facilement',
    template: '%s | alphabet-arabe.com',
  },
  description: 'Apprenez l\'alphabet arabe gratuitement : les 29 lettres avec prononciation, PDF à imprimer et exercices pour débutants. Guide complet en français.',
  metadataBase: new URL('https://alphabet-arabe.com'),
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico',    sizes: '32x32',  type: 'image/x-icon' },
      { url: '/icon-16.png',    sizes: '16x16',  type: 'image/png' },
      { url: '/icon-32.png',    sizes: '32x32',  type: 'image/png' },
      { url: '/icon-192.png',   sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png',   sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type:   'website',
    locale: 'fr_FR',
    url:    'https://alphabet-arabe.com',
    siteName: 'alphabet-arabe.com',
    images: [{ url: '/images/hero-alphabet-arabe.webp', width: 720, height: 393 }],
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
