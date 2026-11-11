'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
      <div style={{ height: '56px' }} />

      {/* Opening statement */}
      <section style={{
        backgroundColor: '#080808',
        padding: '4rem 6vw 4rem',
        borderBottom: '1px solid #161616',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '780px', margin: '0 auto' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.8rem, 5.5vw, 6.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            color: '#f5f2ee',
          }}>
            Most AI implementations fail for the same reason.
          </h1>
        </motion.div>
      </section>

      {/* The reason + Max intro */}
      <section style={{
        backgroundColor: '#080808',
        padding: '4rem 6vw 5rem',
        borderBottom: '1px solid #161616',
      }}>
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left: photo */}
          <FadeIn>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/max.webp"
                alt="Max Cunningham"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  aspectRatio: '3 / 4',
                  objectFit: 'cover',
                  objectPosition: 'center 45%',
                  display: 'block',
                  filter: 'grayscale(100%)',
                  marginBottom: '1.5rem',
                }}
              />
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                letterSpacing: '0.04em',
                color: 'rgba(245,242,238,0.5)',
                marginBottom: '0.5rem',
              }}>
                Max Cunningham
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                letterSpacing: '0.02em',
                color: 'rgba(245,242,238,0.25)',
                marginBottom: '1.5rem',
              }}>
                Founder, Cunning AI
              </p>
              <a
                href="https://www.linkedin.com/in/max-cunningham-94305163"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  opacity: 0.35,
                  transition: 'opacity 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(245,242,238,0.9)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '10px',
                  letterSpacing: '0.04em',
                  color: 'rgba(245,242,238,0.7)',
                }}>
                  LinkedIn
                </span>
              </a>
            </div>
          </FadeIn>

          {/* Right: story */}
          <FadeIn delay={0.1}>
            <div>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                lineHeight: 1.95,
                color: 'rgba(245,242,238,0.75)',
                letterSpacing: '0.01em',
                maxWidth: '52ch',
                marginBottom: '1.5rem',
              }}>
                Not because the AI is bad. Because nobody took the time to understand the problem first. A tool gets purchased, a pilot gets run, and six months later it is used by two people and ignored by everyone else.
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                lineHeight: 1.95,
                color: 'rgba(245,242,238,0.5)',
                letterSpacing: '0.01em',
                maxWidth: '52ch',
                marginBottom: '1.5rem',
              }}>
                Cunning AI was built around a different approach. We start with your team, not a product catalogue. We map how people actually work, find where time gets wasted, and design solutions that fit the way your business already operates. Then we build them.
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                lineHeight: 1.95,
                color: 'rgba(245,242,238,0.5)',
                letterSpacing: '0.01em',
                maxWidth: '52ch',
              }}>
                The result is tools that people actually use. Because they were built for the problems people actually have.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Three beliefs */}
      <section style={{
        backgroundColor: '#080808',
        padding: '6rem 6vw',
        borderBottom: '1px solid #161616',
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <FadeIn>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              letterSpacing: '0.05em',
              color: 'rgba(245,242,238,0.2)',
              marginBottom: '3rem',
            }}>
              How we think
            </p>
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
                  padding: '2rem 0 2rem',
                  paddingRight: '2rem',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11.5px',
                    lineHeight: 1.5,
                    color: 'rgba(245,242,238,0.8)',
                    letterSpacing: '0.02em',
                    marginBottom: '1rem',
                  }}>
                    {belief.heading}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11.5px',
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
