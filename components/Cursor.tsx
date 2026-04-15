'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const currentRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor-expand]')
      setExpanded(!!interactive)
    }

    const loop = () => {
      const EASE = 0.12
      currentRef.current.x += (posRef.current.x - currentRef.current.x) * EASE
      currentRef.current.y += (posRef.current.y - currentRef.current.y) * EASE

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(rafRef.current)
    }
  }, [visible])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        width: expanded ? '28px' : '6px',
        height: expanded ? '28px' : '6px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        transition: 'width 0.25s ease, height 0.25s ease, opacity 0.3s ease',
        opacity: visible ? 1 : 0,
        willChange: 'transform',
      }}
    />
  )
}
