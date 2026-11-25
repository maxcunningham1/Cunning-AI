import type { Metadata } from 'next'
import { Bebas_Neue, Nunito, Inter } from 'next/font/google'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
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
  title: 'Cunning AI · AI Implementation Consultancy, London',
  description:
    'Cunning AI is a London-based AI implementation consultancy. We identify where AI can save your team time, build it into your workflow, and make sure it actually gets used.',
  keywords: ['AI implementation consultancy London', 'AI consultancy London', 'AI implementation', 'AI consultant', 'London', 'Max Cunningham'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cunning AI · AI Implementation Consultancy, London',
    description: 'Cunning AI is a London-based AI implementation consultancy. We identify where AI can save your team time, build it into your workflow, and make sure it actually gets used.',
    url: 'https://cunning-ai.com',
    siteName: 'Cunning AI',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cunning AI · AI Implementation Consultancy, London',
    description: 'Cunning AI is a London-based AI implementation consultancy. We identify where AI can save your team time, build it into your workflow, and make sure it actually gets used.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cunning AI',
    legalName: 'Cunning AI Ltd',
    url: 'https://cunning-ai.com',
    email: 'max@cunning-ai.com',
    description: 'AI implementation consultant based in London. We identify where AI can save your team time, build it into your workflow, and make sure it gets used.',
    areaServed: { '@type': 'City', name: 'London' },
    address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
    founder: {
      '@type': 'Person',
      name: 'Max Cunningham',
      sameAs: 'https://www.linkedin.com/in/max-cunningham-94305163',
    },
    knowsAbout: ['AI implementation', 'AI automation', 'workflow automation', 'AI consultancy'],
  }

  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Cookiebot — loads before GTM and handles Consent Mode v2 */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="5374430c-8946-40a5-8752-4ac5e29200dd"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-K5MQ4CFG" />
    </html>
  )
}
