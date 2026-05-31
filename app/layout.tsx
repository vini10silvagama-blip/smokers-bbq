import type { Metadata, Viewport } from 'next'
import { Oswald, Lato } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
  preload: true,
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-lato',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Smokers BBQ — Carnes Defumadas Premium | Fornecedor B2B São Paulo',
  description: 'Smokers BBQ: American BBQ autêntico para bares e restaurantes. Carnes defumadas 12h, prontas em 5 minutos. Alta margem e padronização. Fornecedor B2B em São Paulo.',
  keywords: 'smokers bbq, carnes defumadas, american bbq, fornecedor b2b, brisket, costelinha, são paulo',
  openGraph: {
    title: 'Smokers BBQ — Carnes Defumadas Premium',
    description: 'American BBQ autêntico para bares e restaurantes. Sem fumaça, sem caos, apenas lucro.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
