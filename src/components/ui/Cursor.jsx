import React, { useEffect, useRef } from 'react'

// Celestial star colors tailored to portfolio theme
const STAR_COLORS = [
  '#00f2fe', // Aurora Cyan
  '#a855f7', // Electric Violet
  '#ffffff', // Diamond White
  '#38bdf8', // Electric Sky
  '#fef08a', // Golden Starlight
  '#f472b6', // Radiant Pink
]

// Draws a mathematical 4-pointed or 8-pointed glowing sparkle star
function drawSparkleStar(ctx, x, y, size, color, rotation, alpha, glowIntensity = 8, isEightPoint = false) {
  if (alpha <= 0.01 || size <= 0.5) return
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.globalAlpha = Math.max(0, Math.min(1, alpha))

  // Radiant outer glow
  ctx.shadowColor = color
  ctx.shadowBlur = glowIntensity

  // Draw 4-point tapered sparkle star
  const drawFourPoints = (r, pinchRatio = 0.16) => {
    const pinch = r * pinchRatio
    ctx.beginPath()
    ctx.moveTo(0, -r)
    ctx.quadraticCurveTo(pinch, -pinch, r, 0)
    ctx.quadraticCurveTo(pinch, pinch, 0, r)
    ctx.quadraticCurveTo(-pinch, pinch, -r, 0)
    ctx.quadraticCurveTo(-pinch, -pinch, 0, -r)
    ctx.closePath()
    ctx.fill()
  }

  // Outer primary star
  ctx.fillStyle = color
  drawFourPoints(size, 0.15)

  // Secondary 45-degree cross for extra glittering brilliance
  if (isEightPoint) {
    ctx.save()
    ctx.rotate(Math.PI / 4)
    drawFourPoints(size * 0.55, 0.22)
    ctx.restore()
  }

  // Brilliant white diamond core
  ctx.shadowBlur = 0
  ctx.fillStyle = '#ffffff'
  const core = size * 0.32
  ctx.beginPath()
  ctx.moveTo(0, -core)
  ctx.lineTo(core, 0)
  ctx.lineTo(0, core)
  ctx.lineTo(-core, 0)
  ctx.closePath()
  ctx.fill()

  ctx.restore()
}

export default function Cursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Only enable on desktop non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId
    let isVisible = false
    let isHovered = false

    // Mouse coordinates
    const mouse = { x: -100, y: -100, targetX: -100, targetY: -100 }

    // Resize canvas with high-DPI retina support
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // Follower stars constellation (cluster of 9 small glittering stars)
    const followerStars = [
      { id: 0, size: 10, dist: 8,  angle: 0,       speed: 0.22, orbitSpeed: 1.2,  color: '#00f2fe', eightPoint: true,  phase: 0 },
      { id: 1, size: 7,  dist: 16, angle: 0.8,     speed: 0.18, orbitSpeed: -1.5, color: '#ffffff', eightPoint: false, phase: 1.1 },
      { id: 2, size: 8,  dist: 22, angle: 2.1,     speed: 0.15, orbitSpeed: 1.0,  color: '#a855f7', eightPoint: true,  phase: 2.3 },
      { id: 3, size: 6,  dist: 14, angle: 3.4,     speed: 0.17, orbitSpeed: -1.8, color: '#38bdf8', eightPoint: false, phase: 3.5 },
      { id: 4, size: 9,  dist: 28, angle: 4.5,     speed: 0.12, orbitSpeed: 0.8,  color: '#fef08a', eightPoint: true,  phase: 4.2 },
      { id: 5, size: 5,  dist: 19, angle: 5.6,     speed: 0.14, orbitSpeed: -1.3, color: '#f472b6', eightPoint: false, phase: 5.0 },
      { id: 6, size: 6,  dist: 34, angle: 1.5,     speed: 0.09, orbitSpeed: 0.7,  color: '#00f2fe', eightPoint: false, phase: 1.8 },
      { id: 7, size: 5,  dist: 25, angle: 3.9,     speed: 0.11, orbitSpeed: -0.9, color: '#ffffff', eightPoint: false, phase: 2.9 },
      { id: 8, size: 7,  dist: 38, angle: 5.1,     speed: 0.08, orbitSpeed: 0.6,  color: '#a855f7', eightPoint: true,  phase: 3.7 },
    ].map((s) => ({
      ...s,
      x: -100,
      y: -100,
      twinkleBoost: 0,
      spinAngle: Math.random() * Math.PI,
    }))

    // Click burst particles and shockwave ripples
    const burstStars = []
    const ripples = []

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      if (!isVisible) {
        isVisible = true
        mouse.x = e.clientX
        mouse.y = e.clientY
        followerStars.forEach((s) => {
          s.x = e.clientX
          s.y = e.clientY
        })
      }
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.getAttribute('role') === 'button'
      ) {
        isHovered = true
      } else {
        isHovered = false
      }
    }

    const handleMouseLeave = () => {
      isVisible = false
    }

    // Trigger twinkling & sparkle explosion on click
    const handleMouseDown = (e) => {
      const clickX = e.clientX
      const clickY = e.clientY

      // 1. Boost existing follower stars into a brilliant twinkle flare
      followerStars.forEach((s) => {
        s.twinkleBoost = 1.0
      })

      // 2. Spawn a radial burst of 18 small glittering stars that twinkle and shoot outward
      const count = 18
      for (let i = 0; i < count; i++) {
        const baseAngle = (Math.PI * 2 * i) / count
        const angle = baseAngle + (Math.random() - 0.5) * 0.4
        const speed = 2.2 + Math.random() * 4.2
        const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]

        burstStars.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 4 + Math.random() * 8,
          color,
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.35,
          alpha: 1.0,
          decay: 0.022 + Math.random() * 0.02,
          twinkleFreq: 14 + Math.random() * 16,
          phase: Math.random() * Math.PI * 2,
          eightPoint: Math.random() > 0.5,
        })
      }

      // 3. Delicate starlight ripple ring
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 2,
        maxRadius: 42,
        alpha: 0.75,
        color: '#00f2fe',
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      const time = performance.now() * 0.003

      // Smooth mouse follow interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.25
      mouse.y += (mouse.targetY - mouse.y) * 0.25

      // 1. Render and update click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.radius += (r.maxRadius - r.radius) * 0.16 + 0.5
        r.alpha -= 0.038
        if (r.alpha <= 0.01 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1)
          continue
        }
        ctx.save()
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = r.color
        ctx.shadowColor = r.color
        ctx.shadowBlur = 8
        ctx.globalAlpha = Math.max(0, r.alpha)
        ctx.lineWidth = 1.2
        ctx.stroke()
        ctx.restore()
      }

      // 2. Render and update click burst glittering stars
      for (let i = burstStars.length - 1; i >= 0; i--) {
        const p = burstStars[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.93 // Soft friction
        p.vy *= 0.93
        p.rotation += p.rotSpeed
        p.alpha -= p.decay

        if (p.alpha <= 0.01) {
          burstStars.splice(i, 1)
          continue
        }

        // High-frequency twinkle flicker on burst stars
        const twinkleOsc = Math.abs(Math.sin(time * p.twinkleFreq + p.phase))
        const renderAlpha = p.alpha * (0.35 + 0.65 * twinkleOsc)
        const renderSize = p.size * (0.75 + 0.45 * twinkleOsc)

        drawSparkleStar(
          ctx,
          p.x,
          p.y,
          renderSize,
          p.color,
          p.rotation,
          renderAlpha,
          10,
          p.eightPoint
        )
      }

      // 3. Render and update follower stars cluster
      if (isVisible) {
        followerStars.forEach((star) => {
          // Orbit calculation around the cursor
          const currentDist = isHovered ? star.dist * 0.6 : star.dist
          const orbitAngle = time * star.orbitSpeed + star.angle
          const targetX = mouse.x + Math.cos(orbitAngle) * currentDist
          const targetY = mouse.y + Math.sin(orbitAngle) * currentDist

          // Spring lerp towards target orbit position
          star.x += (targetX - star.x) * star.speed
          star.y += (targetY - star.y) * star.speed

          // Decay click twinkle boost
          if (star.twinkleBoost > 0) {
            star.twinkleBoost = Math.max(0, star.twinkleBoost - 0.035)
          }

          // Natural sparkling glittering oscillation
          const naturalTwinkle = 0.72 + 0.28 * Math.sin(time * 5 + star.phase)
          const boostScale = 1 + star.twinkleBoost * 1.2 // Scale up during click
          const renderSize = star.size * naturalTwinkle * boostScale

          // Continuous slow tumbling rotation plus spin on click
          star.spinAngle += (star.orbitSpeed * 0.02) + (star.twinkleBoost * 0.15)

          // Luminance and alpha pulsation
          const alpha = Math.min(1, 0.75 + 0.25 * Math.sin(time * 4 + star.phase) + star.twinkleBoost * 0.25)
          const glow = 8 + star.twinkleBoost * 12

          drawSparkleStar(
            ctx,
            star.x,
            star.y,
            renderSize,
            star.color,
            star.spinAngle,
            alpha,
            glow,
            star.eightPoint
          )
        })
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}
