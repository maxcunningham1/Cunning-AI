import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work · Cunning AI',
  description: 'Case studies from Cunning AI. Implementation projects for real businesses.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work · Cunning AI',
    description: 'Case studies from Cunning AI. Implementation projects for real businesses.',
    url: 'https://cunning-ai.com/work',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
