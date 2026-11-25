'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { trackEmailClick } from '@/lib/gtm'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(14px)',
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* Opening statement */}
      <section style={{
        position: 'relative',
        backgroundColor: '#080808',
        padding: 'calc(56px + 7rem) 6vw 6rem',
        borderBottom: '1px solid #161616',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/artworks/sunset.jpg"
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
            transform: 'scale(1.12)',
            transformOrigin: 'center center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8,8,8,0.45)' }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.8rem, 5.5vw, 6.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            color: '#f5f2ee',
          }}>
            Bespoke AI built around your business. Not another tool. A real outcome.
          </h1>
        </motion.div>
      </section>

      {/* Three beliefs */}
      <section style={{
        backgroundColor: '#080808',
        padding: '6rem 6vw',
        borderBottom: '1px solid #161616',
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(3rem, 7vw, 8rem)',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '0.02em',
              color: '#f5f2ee',
              marginBottom: '4rem',
            }}>
              How we think
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }} className="beliefs-grid">
            {[
              {
                heading: 'Discovery first.',
                body: 'We will not build anything until we understand your business. The best AI solution for a problem we have not properly understood is still the wrong solution.',
              },
              {
                heading: 'Work with your team.',
                body: 'The people who know what is broken are the ones doing the work every day. That is where we start. Tools designed with the team get used by the team.',
              },
              {
                heading: 'Own what you build.',
                body: 'We build things you can run without us. No dependency on our tools, our access, or our continued involvement. You should be able to hand it to someone new on day one.',
              },
            ].map((belief, i) => (
              <FadeIn key={belief.heading} delay={i * 0.08}>
                <div style={{
                  borderTop: '1px solid #161616',
                  padding: '2.5rem 2rem 2.5rem 0',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: 'rgba(245,242,238,0.85)',
                    letterSpacing: '0.02em',
                    marginBottom: '1rem',
                    fontWeight: 600,
                  }}>
                    {belief.heading}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    lineHeight: 1.85,
                    color: 'rgba(245,242,238,0.4)',
                    letterSpacing: '0.01em',
                  }}>
                    {belief.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
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
        }} className="about-cta">
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            lineHeight: 1.9,
            color: 'rgba(245,242,238,0.4)',
            letterSpacing: '0.02em',
            maxWidth: '44ch',
          }}>
            If that sounds like the right way to approach it, let&apos;s talk.
          </p>
          <a href="mailto:max@cunning-ai.com" onClick={() => trackEmailClick()} style={{
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
