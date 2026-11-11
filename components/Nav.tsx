'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/work', label: 'Work' },
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
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '56px',
        backgroundColor: 'rgba(8,8,8,0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(245,242,238,0.08)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 6vw',
      }}>

        {/* Left: logo mark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Cunning AI"
            style={{ height: '30px', width: 'auto', filter: 'invert(1)', opacity: 0.9 }}
          />
        </Link>

        {/* Center: nav links — absolutely centered so logo+CTA don't push them */}
        <nav className="nav-desktop" style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          whiteSpace: 'nowrap',
        }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              color: isActive(href) ? 'rgba(245,242,238,1)' : 'rgba(245,242,238,0.65)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.9)' }}
            onMouseLeave={e => { if (!isActive(href)) (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.65)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA pill + mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <a
            href="mailto:max@cunning-ai.com"
            className="nav-cta"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              color: '#080808',
              textDecoration: 'none',
              backgroundColor: 'rgba(245,242,238,0.9)',
              borderRadius: '100px',
              padding: '7px 18px',
              transition: 'background-color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#f5f2ee'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(245,242,238,0.9)'}
          >
            Get in touch
          </a>

          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              display: 'block', width: '20px', height: '1px',
              backgroundColor: 'rgba(245,242,238,0.6)',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '20px', height: '1px',
              backgroundColor: 'rgba(245,242,238,0.6)',
              transition: 'opacity 0.2s',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '20px', height: '1px',
              backgroundColor: 'rgba(245,242,238,0.6)',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
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

          <a href="mailto:max@cunning-ai.com" style={{
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
