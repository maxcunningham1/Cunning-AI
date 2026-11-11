'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    title: 'Inbound triage',
    sector: 'Sales · Investment · Recruitment',
    body: 'Every inbound (a lead, a deal, an application) assessed and summarised the moment it arrives. The right people see what matters, without anyone reading everything first. A team that was spending 20 minutes per inbound spends two.',
  },
  {
    title: 'Daily intelligence',
    sector: 'Investment · Strategy · Research',
    body: 'A briefing built around your team\'s specific interests, generated and delivered every morning. Market news, sector moves, relevant company updates. No one compiles it. It just arrives.',
  },
  {
    title: 'Document generation',
    sector: 'Legal · Finance · Consulting',
    body: 'First drafts of contracts, investment memos, reports, and summaries generated from your data and templates. The structure is done. The review is yours. Documents that took two hours take ten minutes.',
  },
  {
    title: 'Meeting preparation',
    sector: 'Sales · Investment · Client Services',
    body: 'Before every call: the relevant background pulled and formatted automatically. Company overview, recent news, what was discussed last time, what needs following up. Walk in prepared without preparing.',
  },
  {
    title: 'Admin automation',
    sector: 'Operations · Any team',
    body: 'Task lists, follow-up emails, action items from calls: handled automatically. The work that takes thirty minutes and does not require a person to do it no longer requires a person to do it.',
  },
  {
    title: 'Workflow automation',
    sector: 'Operations · Finance · HR',
    body: 'Multi-step processes that move between tools, people, and formats, automated end-to-end. One trigger, everything that follows. Processes that used to need coordination run on their own.',
  },
]

function Case({ c, index }: { c: typeof cases[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        borderTop: '1px solid #161616',
        padding: '3rem 0',
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: '2rem 4rem',
        alignItems: 'start',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(12px)',
        transition: `opacity 0.7s ease ${(index % 3) * 0.06}s, transform 0.7s ease ${(index % 3) * 0.06}s`,
      }}
      className="case-row"
    >
      <div>
        <h2 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          letterSpacing: '0.03em',
          color: '#f5f2ee',
          marginBottom: '0.6rem',
        }}>
          {c.title}
        </h2>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          letterSpacing: '0.02em',
          color: 'rgba(245,242,238,0.22)',
        }}>
          {c.sector}
        </p>
      </div>

      <p style={{
        fontFamily: 'var(--font-inter)',
        fontSize: '14px',
        lineHeight: 1.9,
        color: 'rgba(245,242,238,0.58)',
        letterSpacing: '0.01em',
      }}>
        {c.body}
      </p>
    </div>
  )
}

export default function UseCases() {
  return (
    <>
      <div style={{ height: '56px' }} />

      {/* Intro */}
      <section style={{
        position: 'relative',
        backgroundColor: '#080808',
        padding: '7rem 6vw 5rem',
        borderBottom: '1px solid #161616',
        overflow: 'hidden',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/artworks/SK-A-5003.jpg" alt="" aria-hidden="true" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center', opacity: 0.5, filter: 'grayscale(10%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8,8,8,0.45)' }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3rem, 6vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '0.02em',
            color: '#f5f2ee',
            marginBottom: '3rem',
          }}>
            What we build
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            lineHeight: 1.9,
            color: 'rgba(245,242,238,0.65)',
            letterSpacing: '0.02em',
            maxWidth: '52ch',
          }}>
            Every engagement is different, but the problems we solve tend to fall into recognisable patterns. These are the most common.
          </p>
        </motion.div>
      </section>

      {/* Cases */}
      <section style={{
        backgroundColor: '#080808',
        padding: '0 6vw 4rem',
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {cases.map((c, i) => (
            <Case key={c.title} c={c} index={i} />
          ))}
          <div style={{ borderTop: '1px solid #161616' }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#080808',
        padding: '5rem 6vw 7rem',
      }}>
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} className="usecases-cta">
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            lineHeight: 1.9,
            color: 'rgba(245,242,238,0.4)',
            letterSpacing: '0.02em',
            maxWidth: '44ch',
          }}>
            Not sure which applies to you? A short call is usually enough to find out.
          </p>
          <a href="mailto:max@cunning-ai.com" style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            letterSpacing: '0.05em',
            color: 'rgba(245,242,238,0.85)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(245,242,238,0.25)',
            paddingBottom: '2px',
            flexShrink: 0,
            marginLeft: '3rem',
            whiteSpace: 'nowrap',
          }}>
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}
