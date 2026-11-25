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

        {/* 1. Consent Mode v2 defaults — denied before GTM or Silktide fire */}
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
                wait_for_update: 500
              });
            `,
          }}
        />

        {/* 2. Silktide CSS + overrides */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          id="silktide-consent-manager-css"
          href="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.css"
          integrity="sha384-EdMq+R+YOnsbelo08wPenoTlnxbAyxI11NMIxzugx/qAsbh64KcOkqxYqq6pfvO/"
          crossOrigin="anonymous"
        />
        <style id="silktide-consent-manager-overrides">{`
          #stcm-wrapper {
            --boxShadow: -5px 5px 10px 0px #00000012, 0px 0px 50px 0px #0000001a;
            --fontFamily: Helvetica Neue, Segoe UI, Arial, sans-serif;
            --primaryColor: #AFE3FF;
            --backgroundColor: #070219;
            --textColor: #E5F6FA;
            --backdropBackgroundColor: #00000099;
            --backdropBackgroundBlur: 0px;
            --iconColor: #AFE3FF;
            --iconBackgroundColor: #070219;
          }
        `}</style>

        {/* 3. Silktide script + init */}
        <Script
          id="silktide-consent-manager-js"
          src="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.js"
          integrity="sha384-5Pt34uiIbCsvfiiZXoLi4HRf/YBXjr9c8e+gYeVo9smUaInNHYVtc8NZ8wUnXJIq"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          id="silktide-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.silktideConsentManager.init({
                backdrop: { show: true },
                icon: { position: "bottomRight" },
                prompt: { position: "center" },
                consentTypes: [
                  {
                    id: "essential",
                    label: "Essential",
                    description: "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.</p>",
                    required: true
                  },
                  {
                    id: "analytics",
                    label: "Analytics",
                    description: "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.</p>",
                    required: false,
                    gtag: "analytics_storage"
                  },
                  {
                    id: "marketing",
                    label: "Marketing",
                    description: "<p>These cookies are used by us and our advertising partners to show you relevant ads on this site and elsewhere, and to measure how those campaigns perform.</p>",
                    required: false,
                    gtag: ["ad_storage", "ad_user_data", "ad_personalization"]
                  }
                ],
                text: {
                  prompt: {
                    description: "<p>We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic.</p>",
                    acceptAllButtonText: "Accept all",
                    acceptAllButtonAccessibleLabel: "Accept all cookies",
                    rejectNonEssentialButtonText: "Reject non-essential",
                    rejectNonEssentialButtonAccessibleLabel: "Reject all non-essential cookies",
                    preferencesButtonText: "Preferences",
                    preferencesButtonAccessibleLabel: "Toggle preferences"
                  },
                  preferences: {
                    title: "Customize your cookie preferences",
                    description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
                    saveButtonText: "Save and close",
                    saveButtonAccessibleLabel: "Save your cookie preferences",
                    creditLinkText: "Get this banner for free",
                    creditLinkAccessibleLabel: "Get this banner for free"
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
      {/* 4. GTM fires after consent is established */}
      <GoogleTagManager gtmId="GTM-K5MQ4CFG" />
    </html>
  )
}
