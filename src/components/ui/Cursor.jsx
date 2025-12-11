import React, { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const showTimeout = useRef(null)

  const [hovered, setHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [visible, setVisible] = useState(false) // used for touch to briefly show indicators

  useEffect(() => {
    // detect touch / coarse pointer devices
    const checkTouch = () => {
      const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches
      setIsTouchDevice(!!hasTouch)
    }

    checkTouch()
    // listen for changes (for some browsers / hybrid devices)
    window.addEventListener('resize', checkTouch)

    return () => {
      window.removeEventListener('resize', checkTouch)
    }
  }, [])

  useEffect(() => {
    // common mouse move handler
    const moveCursor = (clientX, clientY) => {
      if (cursorRef.current) {
        // offset the 1x cursor so the dot centers on the pointer
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
      }

      if (followerRef.current) {
        // follower lags behind a bit
        try {
          followerRef.current.animate({
            transform: `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`
          }, {
            duration: 500,
            fill: 'forwards'
          })
        } catch (e) {
          // fallback: set transform directly if animate isn't available
          followerRef.current.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`
        }
      }
    }

    const onMouseMove = (e) => {
      moveCursor(e.clientX, e.clientY)
    }

    const onTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return
      const t = e.touches[0]
      // show indicator briefly on touch
      setVisible(true)
      if (showTimeout.current) clearTimeout(showTimeout.current)
      showTimeout.current = setTimeout(() => setVisible(false), 600)
      moveCursor(t.clientX, t.clientY)
    }

    const handleMouseOver = (e) => {
      // when hovering anchors or buttons, enlarge / hide inner dot
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    if (!isTouchDevice) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseover', handleMouseOver)
    } else {
      // Touch devices: track touches
      window.addEventListener('touchstart', onTouchMove, { passive: true })
      window.addEventListener('touchmove', onTouchMove, { passive: true })
      // optional: listen to touchend to hide after short delay
      window.addEventListener('touchend', () => {
        if (showTimeout.current) clearTimeout(showTimeout.current)
        showTimeout.current = setTimeout(() => setVisible(false), 120)
      })
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseover', handleMouseOver)
      } else {
        window.removeEventListener('touchstart', onTouchMove)
        window.removeEventListener('touchmove', onTouchMove)
        window.removeEventListener('touchend', () => {})
      }
      if (showTimeout.current) clearTimeout(showTimeout.current)
    }
  }, [isTouchDevice])

  // If the device is touch-only, we keep the cursor elements in the DOM but
  // only show them briefly on touch (so they don't interfere with native UX).
  // For non-touch devices we show always and respond to mouse movement.

  return (
    <>
      {/* Primary cursor dot - hidden by default on touch devices, shown briefly when touching */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-3 h-3 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out ${hovered ? 'scale-0' : 'scale-100'}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          // hide by default on touch devices unless visible is true
          opacity: isTouchDevice ? (visible ? 1 : 0) : 1,
          transition: 'transform 75ms ease-out, opacity 150ms ease-out'
        }}
      />

      {/* Follower / ring - scaled up on hover for mouse, appears briefly on touch */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-10 h-10 border border-neon-blue rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out ${hovered ? 'scale-[2] bg-neon-blue/20 border-transparent' : 'scale-100'}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          opacity: isTouchDevice ? (visible ? 0.9 : 0) : 1,
          transition: 'transform 300ms ease-out, opacity 200ms ease-out'
        }}
      />

     
    </>
  )
}
