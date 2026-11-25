'use client'

import { useState } from 'react'
import { submitContact } from '@/app/actions/contact'
import { trackFormSubmit } from '@/lib/gtm'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('pending')
    const result = await submitContact(new FormData(e.currentTarget))
    if (result.success) {
      setStatus('success')
      trackFormSubmit('contact')
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? 'Something went wrong.')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(245,242,238,0.15)',
    padding: '0.75rem 0',
    fontFamily: 'var(--font-inter)',
    fontSize: '14px',
    color: '#f5f2ee',
    outline: 'none',
    letterSpacing: '0.01em',
    lineHeight: 1.6,
    resize: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter)',
    fontSize: '11px',
    letterSpacing: '0.07em',
    color: 'rgba(245,242,238,0.3)',
    display: 'block',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
  }

  return (
    <>
      <div style={{ height: '56px' }} />
      <section style={{
        backgroundColor: '#080808',
        minHeight: 'calc(100vh - 56px)',
        padding: '6rem 6vw 7rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '0.02em',
            color: '#f5f2ee',
            marginBottom: '0.75rem',
          }}>
            Get in touch
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            lineHeight: 1.9,
            color: 'rgba(245,242,238,0.45)',
            letterSpacing: '0.01em',
            marginBottom: '3.5rem',
          }}>
            Tell us what you&apos;re working on and we&apos;ll come back to you as soon as possible.
          </p>

          {status === 'success' ? (
            <div style={{ borderTop: '1px solid rgba(245,242,238,0.1)', paddingTop: '2rem' }}>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                lineHeight: 1.9,
                color: 'rgba(245,242,238,0.75)',
                letterSpacing: '0.01em',
              }}>
                Thanks — we&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Name *</label>
                <input id="name" name="name" type="text" required autoComplete="name" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="phone" style={labelStyle}>Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="company" style={labelStyle}>Company</label>
                <input id="company" name="company" type="text" autoComplete="organization" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>Message *</label>
                <textarea id="message" name="message" required rows={5} style={inputStyle} />
              </div>

              {status === 'error' && (
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  color: 'rgba(245,100,100,0.9)',
                  letterSpacing: '0.01em',
                }}>
                  {errorMsg}
                </p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'pending'}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: status === 'pending' ? 'rgba(245,242,238,0.4)' : 'rgba(245,242,238,0.85)',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(245,242,238,0.25)',
                    borderRadius: '100px',
                    padding: '8px 24px',
                    cursor: status === 'pending' ? 'default' : 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (status !== 'pending') {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,242,238,0.5)'
                      ;(e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,1)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (status !== 'pending') {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,242,238,0.25)'
                      ;(e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.85)'
                    }
                  }}
                >
                  {status === 'pending' ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
