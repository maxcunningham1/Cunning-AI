'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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

const paintings = [
  '/artworks/SK-A-4688.jpg',
  '/artworks/SK-A-5003.jpg',
  '/artworks/image.jpg',
  '/artworks/painting.jpg',
  '/artworks/SK-A-154.jpg',
]

function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % paintings.length), 6000)
    return () => clearInterval(id)
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
      {paintings.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
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
            opacity: i === current ? 1 : 0,
            transition: 'opacity 2.5s ease-in-out',
          }}
        />
      ))}

      {/* Overlay — heavier to ensure logo legibility across all paintings */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.52)',
        }}
      />

      {/* Logo + wordmark — upper centre */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.4s ease',
          userSelect: 'none',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          style={{
            display: 'block',
            margin: '0 auto',
            height: 'clamp(55px, 6vw, 85px)',
            width: 'auto',
            filter: 'invert(1) sepia(0.5) brightness(0.8)',
            opacity: 0.55,
          }}
        />
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
        padding: '5rem 6vw 7rem',
        borderTop: '1px solid #161616',
      }}
    >
      <Reveal>
        <div>
          {/* Full-width heading */}
          <Fade>
            <h2
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(1.8rem, 3vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '0.02em',
                color: '#f5f2ee',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              You don&apos;t need another AI tool.
            </h2>
          </Fade>

          {/* Two-column: byline + body */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '4rem',
              alignItems: 'start',
              maxWidth: '960px',
              margin: '0 auto',
            }}
            className="about-grid"
          >
            <Fade>
              <div>
                {/* Headshot */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/max.webp"
                    alt="Max Cunningham"
                    style={{
                      width: '100%',
                      maxWidth: '260px',
                      aspectRatio: '3 / 4',
                      objectFit: 'cover',
                      objectPosition: 'center 45%',
                      display: 'block',
                      margin: '0 auto',
                      filter: 'grayscale(100%)',
                    }}
                  />
                </div>

                <div style={{ maxWidth: '260px', margin: '0 auto' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    letterSpacing: '0.05em',
                    color: 'rgba(245,242,238,0.7)',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}
                >
                  Max Cunningham
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                    color: 'rgba(245,242,238,0.35)',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                  }}
                >
                  Founder
                </p>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/max-cunningham-94305163"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: 0.45,
                    transition: 'opacity 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(245,242,238,0.9)">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    letterSpacing: '0.05em',
                    color: 'rgba(245,242,238,0.7)',
                    textTransform: 'uppercase',
                  }}>
                    LinkedIn
                  </span>
                </a>
                </div>
              </div>
            </Fade>

            <Fade>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    lineHeight: 1.95,
                    color: 'rgba(245,242,238,0.85)',
                    letterSpacing: '0.02em',
                    maxWidth: '52ch',
                    marginBottom: '1.5rem',
                  }}
                >
                  Not because the AI is bad. Because nobody took the time to understand the problem first. A tool gets purchased, a pilot gets run, and six months later it is used by two people and ignored by everyone else.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    lineHeight: 1.95,
                    color: 'rgba(245,242,238,0.6)',
                    letterSpacing: '0.02em',
                    maxWidth: '52ch',
                    marginBottom: '1.5rem',
                  }}
                >
                  Cunning AI was built around a different approach. We start with your team, not a product catalogue. We map how people actually work, find where time gets wasted, and design solutions that fit the way your business already operates. Then we build them.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    lineHeight: 1.95,
                    color: 'rgba(245,242,238,0.6)',
                    letterSpacing: '0.02em',
                    maxWidth: '52ch',
                  }}
                >
                  The result is tools that people actually use. Because they were built for the problems people actually have.
                </p>
              </div>
            </Fade>
          </div>

          <Fade>
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <a
                href="/contact"
                className="contact-email"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: 'rgba(245,242,238,0.85)',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(245,242,238,0.25)',
                  borderRadius: '100px',
                  padding: '10px 32px',
                  display: 'inline-block',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,242,238,0.5)'
                  ;(e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,1)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,242,238,0.25)'
                  ;(e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.85)'
                }}
              >
                Get in touch
              </a>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            style={{
              display: 'block',
              margin: '0 auto',
              height: 'clamp(200px, 25vw, 340px)',
              width: 'auto',
              filter: 'invert(1) sepia(0.5) brightness(0.8)',
              opacity: 0.45,
            }}
          />
        </Fade>
      </Reveal>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#080808',
        borderTop: '1px solid #161616',
        padding: '2rem 6vw',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '10px',
          letterSpacing: '0.03em',
          color: 'rgba(245,242,238,0.2)',
          textTransform: 'uppercase',
        }}
      >
        Cunning AI Ltd &nbsp;·&nbsp; Company No. 17561322
      </p>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
