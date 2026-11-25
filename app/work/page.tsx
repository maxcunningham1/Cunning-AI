'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { trackEmailClick } from '@/lib/gtm'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
      {children}
    </motion.div>
  )
}

function Fade({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <motion.div variants={fadeUp} style={style}>{children}</motion.div>
}


const cases = [
  {
    title: 'Inbound triage',
    sector: 'Sales · Investment · Recruitment',
    body: 'Every inbound assessed and summarised the moment it arrives. The right people see what matters, without anyone reading everything first. A team spending 20 minutes per inbound spends two.',
  },
  {
    title: 'Portfolio monitoring',
    sector: 'Investment · Venture',
    body: 'The investment case and the monthly accounts lived in different places and never met. A Claude routine now sits each company\'s thesis next to its accounts and board papers and produces a short monthly view: on or off plan against the original assumptions, cash and runway with a warning when it drops inside twelve months, and a flag for anything missing. The quarterly valuation pack is prepared the same way.',
  },
  {
    title: 'Exit database',
    sector: 'Investment · Research',
    body: 'Exit comps started from scratch on every deal. A live database now tracks the buyers rather than the companies — the universe of plausible acquirers is small and knowable. For each transaction: target, buyer, date, sub-sector, deal value and multiple where disclosed, and a source. Backfilled five years, refreshed weekly, so the team starts every deal and every valuation from the same number.',
  },
  {
    title: 'Daily intelligence',
    sector: 'Investment · Strategy · Research',
    body: 'A briefing built around your team\'s specific interests, generated and delivered every morning. Market news, sector moves, relevant company updates. No one compiles it. It just arrives.',
  },
  {
    title: 'Document generation',
    sector: 'Legal · Finance · Consulting',
    body: 'First drafts of contracts, investment memos, reports, and summaries generated from your data and templates. Documents that took two hours take ten minutes.',
  },
  {
    title: 'Meeting preparation',
    sector: 'Sales · Investment · Client Services',
    body: 'Before every call: the relevant background pulled and formatted automatically. Company overview, recent news, what was discussed last time, what needs following up.',
  },
  {
    title: 'Admin automation',
    sector: 'Operations · Any team',
    body: 'Task lists, follow-up emails, action items from calls: handled automatically. The work that takes thirty minutes and does not require a person to do it no longer requires a person to do it.',
  },
  {
    title: 'Workflow automation',
    sector: 'Operations · Finance · HR',
    body: 'Multi-step processes that move between tools, people, and formats, automated end-to-end. One trigger, everything that follows.',
  },
]


export default function Work() {
  return (
    <>
      {/* Case study hero */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#080808',
          padding: 'calc(56px + 7rem) 6vw 6rem',
          borderBottom: '1px solid #161616',
          overflow: 'hidden',
        }}
      >
        {/* Artwork background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/artworks/SK-A-154.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.5,
            filter: 'grayscale(10%)',
          }}
        />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8,8,8,0.45)' }} />

        <Reveal>
          <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Fade>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <h1
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    fontSize: 'clamp(3rem, 6vw, 7rem)',
                    fontWeight: 700,
                    lineHeight: 1.0,
                    letterSpacing: '0.02em',
                    color: '#f5f2ee',
                    margin: 0,
                  }}
                >
                  Bramble Partners
                </h1>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bramble-logo.png"
                  alt="Bramble Partners"
                  style={{
                    height: 'clamp(3rem, 5vw, 6rem)',
                    width: 'auto',
                    opacity: 0.85,
                    display: 'block',
                    flexShrink: 0,
                    transform: 'translateY(-3px)',
                  }}
                />
              </div>
            </Fade>

            <Fade>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  lineHeight: 1.9,
                  color: 'rgba(245,242,238,0.75)',
                  letterSpacing: '0.02em',
                  maxWidth: '54ch',
                  marginBottom: '1.25rem',
                }}
              >
                Bramble is a Series A to growth venture firm. Their deals team was spending hours each week on tasks that could be automated: assessing inbound deals, compiling market intelligence, managing daily admin.
              </p>
            </Fade>

            <Fade>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  lineHeight: 1.9,
                  color: 'rgba(245,242,238,0.5)',
                  letterSpacing: '0.02em',
                  maxWidth: '54ch',
                }}
              >
                We ran an end-to-end AI build pipeline, from team interviews and workflow mapping to building and deploying three tools in production.
              </p>
            </Fade>
          </div>
        </Reveal>
      </section>

      {/* What we build */}
      <section style={{ backgroundColor: '#080808', padding: '6rem 6vw 2rem', borderTop: '1px solid #161616' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Fade>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                letterSpacing: '0.07em',
                color: 'rgba(245,242,238,0.3)',
                textTransform: 'uppercase',
                marginBottom: '3.5rem',
              }}>
                What we built
              </p>
            </Fade>
          </Reveal>

          {cases.map((c, i) => (
            <Reveal key={c.title}>
              <Fade>
                <div style={{
                  borderTop: '1px solid #161616',
                  padding: '2.5rem 0',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.4fr',
                  gap: '2rem 4rem',
                  alignItems: 'start',
                }} className="case-row">
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                      color: 'rgba(245,242,238,0.2)',
                      marginBottom: '0.5rem',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                      letterSpacing: '0.03em',
                      color: '#f5f2ee',
                      marginBottom: '0.5rem',
                    }}>
                      {c.title}
                    </h2>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    lineHeight: 1.9,
                    color: 'rgba(245,242,238,0.55)',
                    letterSpacing: '0.01em',
                  }}>
                    {c.body}
                  </p>
                </div>
              </Fade>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid #161616' }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#080808', padding: '5rem 6vw 7rem' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Fade>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }} className="work-cta">
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  lineHeight: 1.9,
                  color: 'rgba(245,242,238,0.5)',
                  letterSpacing: '0.02em',
                  maxWidth: '44ch',
                }}>
                  Want to find where AI can save your team time and build it into how you work?
                </p>
                <a href="mailto:max@cunning-ai.com" onClick={() => trackEmailClick()} style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  letterSpacing: '0.06em',
                  color: 'rgba(245,242,238,0.9)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(245,242,238,0.3)',
                  paddingBottom: '2px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  marginLeft: '3rem',
                }}>
                  Get in touch →
                </a>
              </div>
            </Fade>
          </Reveal>
        </div>
      </section>
    </>
  )
}
