import type { Metadata } from 'next'
import { Bebas_Neue, Nunito, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const nunito = Nunito({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cunning-ai.com'),
  title: 'Cunning AI · Implementation & Consultancy, London',
  description:
    'Cunning AI helps businesses turn AI\'s potential into results. We identify where AI can save your team time, improve processes and unlock new efficiencies.',
  keywords: ['Cunning AI', 'AI consultancy', 'AI implementation', 'London', 'Max Cunningham', 'digital transformation'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cunning AI · Implementation & Consultancy, London',
    description: 'Cunning AI helps businesses turn AI\'s potential into results. We identify where AI can save your team time, improve processes and unlock new efficiencies.',
    url: 'https://cunning-ai.com',
    siteName: 'Cunning AI',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cunning AI · Implementation & Consultancy, London',
    description: 'Cunning AI helps businesses turn AI\'s potential into results. We identify where AI can save your team time, improve processes and unlock new efficiencies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cunning AI',
    legalName: 'Cunning AI Ltd',
    url: 'https://cunning-ai.com',
    areaServed: 'London',
  }

  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
