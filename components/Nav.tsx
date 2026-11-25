'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Cases' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header className="nav-pill" style={{
        position: 'fixed',
        top: '14px',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '44px',
        width: 'max-content',
        backgroundColor: 'rgba(10,10,10,0.48)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(245,242,238,0.09)',
        borderRadius: '100px',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px 0 24px',
        whiteSpace: 'nowrap',
        gap: '0',
      }}>

        {/* Logo */}
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none', marginRight: '2.5rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Cunning AI"
            style={{ height: '26px', width: 'auto', filter: 'invert(1)', opacity: 0.85 }}
          />
        </Link>

        {/* Nav links */}
        <nav className="nav-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          marginRight: '2.5rem',
        }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13.5px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              color: isActive(href) ? 'rgba(245,242,238,1)' : 'rgba(245,242,238,0.58)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.9)' }}
            onMouseLeave={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.58)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA pill */}
        <a
          href="/contact"
          className="nav-cta"
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
            padding: '5px 16px',
            transition: 'border-color 0.2s, color 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,242,238,0.5)'; (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,1)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,242,238,0.25)'; (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.85)' }}
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 10px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            flexShrink: 0,
          }}
        >
          <span style={{
            display: 'block', width: '18px', height: '1px',
            backgroundColor: 'rgba(245,242,238,0.65)',
            transition: 'transform 0.2s, opacity 0.2s',
            transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '18px', height: '1px',
            backgroundColor: 'rgba(245,242,238,0.65)',
            transition: 'opacity 0.2s',
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '18px', height: '1px',
            backgroundColor: 'rgba(245,242,238,0.65)',
            transition: 'transform 0.2s, opacity 0.2s',
            transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        className="nav-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#080808',
          zIndex: 199,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 10vw',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              letterSpacing: '0.04em',
              color: isActive(href) ? '#f5f2ee' : 'rgba(245,242,238,0.35)',
              textDecoration: 'none',
              borderBottom: '1px solid #161616',
              padding: '1.25rem 0',
              transition: 'color 0.15s',
            }}>
              {label}
            </Link>
          ))}

          <a href="mailto:max@cunning-ai.com" onClick={() => typeof window !== 'undefined' && (window.dataLayer = window.dataLayer || []) && window.dataLayer.push({ event: 'email_click', page_path: window.location.pathname })} style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            letterSpacing: '0.05em',
            color: 'rgba(245,242,238,0.5)',
            textDecoration: 'none',
            marginTop: '2.5rem',
          }}>
            max@cunning-ai.com
          </a>
        </nav>
      </div>
    </>
  )
}
