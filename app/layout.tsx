import type { Metadata } from 'next'
import { Bebas_Neue, Space_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CAI — Cunning AI',
  description:
    'CAI is an AI consultancy founded by Max Cunningham. We build AI strategies and tools for businesses that want to move fast.',
  keywords: ['AI consultancy', 'AI strategy', 'digital transformation', 'tool development', 'Max Cunningham'],
  openGraph: {
    title: 'CAI — Cunning AI',
    description: 'AI strategies and tools for businesses that want to move fast.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
