'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Cursor from '@/components/Cursor'

// ─── Shared animation ─────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
    >
      {children}
    </motion.div>
  )
}

function Fade({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <motion.div variants={fadeUp} style={style}>
      {children}
    </motion.div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/image.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.40)',
        }}
      />

      {/* Text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.4s ease',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3.5rem, 7vw, 9rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '0.04em',
            color: '#f5f2ee',
            userSelect: 'none',
            margin: 0,
          }}
        >
          C-AI
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 'clamp(0.65rem, 1vw, 1rem)',
            fontWeight: 400,
            letterSpacing: '0.35em',
            color: 'rgba(245,242,238,0.65)',
            textTransform: 'uppercase',
            margin: 0,
            userSelect: 'none',
          }}
        >
          The quiet advantage.
        </p>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section
      style={{
        backgroundColor: '#080808',
        padding: '10rem 6vw 10rem',
        borderTop: '1px solid #161616',
      }}
    >
      <Reveal>
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left — byline */}
          <Fade>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  color: 'rgba(245,242,238,0.35)',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                Founder
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: 'rgba(245,242,238,0.55)',
                  textTransform: 'uppercase',
                }}
              >
                Max Cunningham
              </p>
            </div>
          </Fade>

          {/* Right — copy */}
          <Fade>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '0.02em',
                  color: '#f5f2ee',
                  marginBottom: '2rem',
                }}
              >
                Streamlining business
                <br />
                through AI.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '12.5px',
                  lineHeight: 1.95,
                  color: 'rgba(245,242,238,0.6)',
                  letterSpacing: '0.02em',
                  maxWidth: '52ch',
                }}
              >
                C-AI works with organisations navigating the shift to intelligent
                systems. Drawing on deep expertise in digital transformation,
                we identify where AI creates genuine leverage — then build the
                tools and strategies to get there. Fast, considered, and without
                the noise.
              </p>
            </div>
          </Fade>
        </div>
      </Reveal>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section
      style={{
        backgroundColor: '#080808',
        padding: '10rem 6vw 12rem',
        borderTop: '1px solid #161616',
        textAlign: 'center',
      }}
    >
      <Reveal>
        <Fade>
          <p
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '10px',
              letterSpacing: '0.35em',
              color: 'rgba(245,242,238,0.3)',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
            }}
          >
            Get in touch
          </p>
        </Fade>

        <Fade>
          <a
            href="mailto:max@cunning-ai.com"
            className="contact-email"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2rem, 5.5vw, 7rem)',
              fontWeight: 700,
              letterSpacing: '0.03em',
              color: '#f5f2ee',
              textDecoration: 'none',
              display: 'inline-block',
              opacity: 0.85,
              transition: 'opacity 0.3s ease',
            }}
          >
            max@cunning-ai.com
          </a>
        </Fade>
      </Reveal>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Cursor />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  )
}
