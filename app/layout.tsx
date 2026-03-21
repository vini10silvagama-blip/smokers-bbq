import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smokers BBQ — Carnes Defumadas Premium | Fornecedor B2B São Paulo',
  description: 'Smokers BBQ: American BBQ autêntico para bares e restaurantes. Carnes defumadas 12h, prontas em 5 minutos. 60%+ de margem. Fornecedor B2B em São Paulo.',
  keywords: 'smokers bbq, carnes defumadas, american bbq, fornecedor b2b, brisket, costelinha, são paulo',
  openGraph: {
    title: 'Smokers BBQ — Carnes Defumadas Premium',
    description: 'American BBQ autêntico para bares e restaurantes. Sem fumaça, sem caos, apenas lucro.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
