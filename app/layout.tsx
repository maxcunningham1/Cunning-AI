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
  title: 'Cunning AI · AI Implementation Consultant, London',
  description:
    'Cunning AI is a London-based AI implementation consultant. We identify where AI can save your team time, build it into your workflow, and make sure it actually gets used.',
  keywords: ['AI implementation consultant London', 'AI consultancy London', 'AI implementation', 'AI consultant', 'London', 'Max Cunningham'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cunning AI · AI Implementation Consultant, London',
    description: 'Cunning AI is a London-based AI implementation consultant. We identify where AI can save your team time, build it into your workflow, and make sure it actually gets used.',
    url: 'https://cunning-ai.com',
    siteName: 'Cunning AI',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cunning AI · AI Implementation Consultant, London',
    description: 'Cunning AI is a London-based AI implementation consultant. We identify where AI can save your team time, build it into your workflow, and make sure it actually gets used.',
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
        {/* Consent Mode v2 defaults — must run before GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500,
                region: ['GB','AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE']
              });
            `,
          }}
        />
        {/*
          CookieYes — replace YOUR_SITE_ID below with your actual script URL from cookieyes.com
          Setup steps:
            1. Sign up at cookieyes.com and add cunning-ai.com
            2. In Settings → Integrations → Google Consent Mode, enable v2
            3. Copy your script URL and paste it into the src below
        */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/YOUR_SITE_ID/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-MT76KR47" />
    </html>
  )
}
