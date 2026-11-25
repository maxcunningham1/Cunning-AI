'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { trackEmailClick } from '@/lib/gtm'

const steps = [
  {
    num: '1',
    title: 'Discovery',
    body: 'We spend time with the people who actually do the work, not just leadership. We map every step in a process: what people do, what they create, what they check, what they repeat. We track where time goes and what gets done the same way every time. By the end, there is a clear picture of where AI can genuinely help.',
    deliverable: 'A workflow map and a list of every identified opportunity.',
  },
  {
    num: '2',
    title: 'Design',
    body: 'Every opportunity gets scored on how much it would change, and how much work it would take to build. You see the full picture and choose what to prioritise. Nothing gets built until you understand exactly what it is, why it matters, and what it replaces.',
    deliverable: 'A prioritised shortlist with a clear recommendation on where to start.',
  },
  {
    num: '3',
    title: 'Build',
    body: 'We build the tool. Custom, specific to your workflow, integrated into the platforms your team already uses. Not a demo. Not a proof of concept. Something that works in the real environment, with your real data, used by real people.',
    deliverable: 'A working tool, tested with your team.',
  },
  {
    num: '4',
    title: 'Deploy',
    body: 'We get it running in your day-to-day and stay close until it is working properly. We track what is working, fix what is not, and hand over something your team owns, not something that requires us to maintain.',
    deliverable: 'Live deployment with documentation and a handover.',
  },
]

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
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
        borderTop: '1px solid #161616',
        padding: '4rem 0',
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: '0 3rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: `opacity 0.8s ease ${index * 0.08}s, transform 0.8s ease ${index * 0.08}s`,
      }}
      className="service-step"
    >
      {/* Number */}
      <div style={{ paddingTop: '0.4rem' }}>
        <span style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(5rem, 8vw, 9rem)',
          lineHeight: 0.9,
          color: 'rgba(245,242,238,0.07)',
          display: 'block',
          userSelect: 'none',
        }}>
          {step.num}
        </span>
      </div>

      {/* Content */}
      <div>
        <h2 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
          letterSpacing: '0.03em',
          color: '#f5f2ee',
          marginBottom: '1.5rem',
        }}>
          {step.title}
        </h2>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          lineHeight: 1.95,
          color: 'rgba(245,242,238,0.6)',
          letterSpacing: '0.01em',
          maxWidth: '52ch',
          marginBottom: '1.75rem',
        }}>
          {step.body}
        </p>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          lineHeight: 1.7,
          color: 'rgba(245,242,238,0.3)',
          letterSpacing: '0.01em',
          maxWidth: '48ch',
          borderLeft: '1px solid #2a2a2a',
          paddingLeft: '1rem',
        }}>
          {step.deliverable}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* Intro */}
      <section style={{
        position: 'relative',
        backgroundColor: '#080808',
        padding: 'calc(56px + 7rem) 6vw 5rem',
        borderBottom: '1px solid #161616',
        overflow: 'hidden',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/artworks/SK-A-4688.jpg" alt="" aria-hidden="true" style={{
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
            How we work
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            lineHeight: 1.9,
            color: 'rgba(245,242,238,0.65)',
            letterSpacing: '0.02em',
            maxWidth: '52ch',
          }}>
            Four steps. The first two are about understanding your business before we build anything. The second two are about building something that actually works.
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section style={{
        backgroundColor: '#080808',
        padding: '0 6vw 4rem',
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {steps.map((step, i) => (
            <Step key={step.num} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#080808',
        borderTop: '1px solid #161616',
        padding: '5rem 6vw 7rem',
      }}>
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} className="services-cta">
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            lineHeight: 1.9,
            color: 'rgba(245,242,238,0.4)',
            letterSpacing: '0.02em',
            maxWidth: '44ch',
          }}>
            Most projects start with a conversation about what you are trying to solve. No commitment required.
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
