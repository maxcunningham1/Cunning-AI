'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

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


const tools = [
  {
    name: 'Inbound deal triage',
    problem: 'Each inbound deal took 15–30 minutes to assess before anyone could reply.',
    built: 'An AI tool that reads unstructured inbound emails, extracts the key investment signals, and returns a structured brief. The team can triage in seconds, not minutes.',
  },
  {
    name: 'Bramble Brief',
    problem: 'Market intelligence existed but wasn\'t reaching everyone at Bramble consistently.',
    built: 'A daily AI-generated briefing, tailored to Bramble\'s investment focus, delivered every weekday morning. No manual curation.',
  },
  {
    name: 'Personal brief',
    problem: 'Everyone ran their own admin by hand: inbox, to-dos, Slack, call actions.',
    built: 'A personal daily brief that surfaces each team member\'s priorities, upcoming calls, and outstanding actions in one place, every morning.',
  },
]

export default function Work() {
  return (
    <>
      {/* Page top spacer for fixed nav */}
      <div style={{ height: '56px' }} />

      {/* Case study hero */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#080808',
          padding: '7rem 6vw 6rem 3vw',
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
          <div style={{ maxWidth: '880px', margin: '0', position: 'relative', zIndex: 1 }}>
            <Fade>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bramble-logo.png"
                  alt="Bramble Partners"
                  style={{
                    height: 'clamp(2.8rem, 5.5vw, 6.5rem)',
                    width: 'auto',
                    opacity: 0.85,
                    flexShrink: 0,
                    display: 'block',
                    transform: 'translateY(-4px)',
                  }}
                />
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

      {/* Tools built */}
      <section
        style={{
          backgroundColor: '#080808',
          padding: '6rem 6vw 8rem',
        }}
      >
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Fade>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  letterSpacing: '0.07em',
                  color: 'rgba(245,242,238,0.3)',
                  textTransform: 'uppercase',
                  marginBottom: '3.5rem',
                }}
              >
                What was built
              </p>
            </Fade>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {tools.map((tool, i) => (
              <Reveal key={tool.name}>
                <Fade>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0',
                      backgroundColor: '#0c0c0c',
                      border: '1px solid #161616',
                    }}
                    className="tool-row"
                  >
                    {/* Left: problem */}
                    <div
                      style={{
                        padding: '2.5rem 2.5rem',
                        borderRight: '1px solid #161616',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '10px',
                          letterSpacing: '0.05em',
                          color: 'rgba(245,242,238,0.25)',
                          textTransform: 'uppercase',
                          marginBottom: '1.25rem',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')} · {tool.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '14px',
                          lineHeight: 1.85,
                          color: 'rgba(245,242,238,0.55)',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {tool.problem}
                      </p>
                    </div>

                    {/* Right: solution */}
                    <div style={{ padding: '2.5rem 2.5rem' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '10px',
                          letterSpacing: '0.05em',
                          color: 'rgba(245,242,238,0.25)',
                          textTransform: 'uppercase',
                          marginBottom: '1.25rem',
                        }}
                      >
                        Solution
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '14px',
                          lineHeight: 1.85,
                          color: 'rgba(245,242,238,0.75)',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {tool.built}
                      </p>
                    </div>
                  </div>
                </Fade>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal>
            <Fade>
              <div
                style={{
                  marginTop: '5rem',
                  paddingTop: '3rem',
                  borderTop: '1px solid #161616',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                className="work-cta"
              >
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    lineHeight: 1.9,
                    color: 'rgba(245,242,238,0.5)',
                    letterSpacing: '0.02em',
                    maxWidth: '44ch',
                  }}
                >
                  Want to find where AI can save your team time and build it into how you work?
                </p>

                <a
                  href="mailto:max@cunning-ai.com"
                  style={{
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
                  }}
                >
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
