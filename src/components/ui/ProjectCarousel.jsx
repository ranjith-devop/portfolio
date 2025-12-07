import React, { useRef, useEffect, useState, useCallback } from 'react'
import ProjectCard from './ProjectCard'

const ProjectCarousel = ({
    projects,
    vMin = 2,
    vMax = 15,
    maxDistance = 150,
    friction = 0.95
}) => {
    const containerRef = useRef(null)
    const trackRef = useRef(null)

    // Physics state (refs for performance)
    const state = useRef({
        currentX: 0,
        targetX: 0,
        velocity: 0,
        isDragging: false,
        startX: 0,
        lastX: 0,
        isAutoScrolling: false,
        autoScrollDirection: 0, // -1 left, 1 right
        autoScrollFactor: 0, // 0 to 1
        bounds: { min: 0, max: 0 }
    })

    const requestRef = useRef()
    const [isReducedMotion, setIsReducedMotion] = useState(false)

    // Check reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setIsReducedMotion(mediaQuery.matches)

        const handler = (e) => setIsReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    // Update bounds on resize
    useEffect(() => {
        const updateBounds = () => {
            if (containerRef.current && trackRef.current) {
                const containerWidth = containerRef.current.clientWidth
                const trackWidth = trackRef.current.scrollWidth
                state.current.bounds.min = Math.min(0, containerWidth - trackWidth)
                state.current.bounds.max = 0
            }
        }

        updateBounds()
        window.addEventListener('resize', updateBounds)
        return () => window.removeEventListener('resize', updateBounds)
    }, [projects])

    // Main Physics Loop
    const animate = useCallback(() => {
        const s = state.current

        // Auto-scroll logic (Edge Acceleration)
        if (s.isAutoScrolling && !s.isDragging && !isReducedMotion) {
            const targetV = s.autoScrollDirection * (vMin + (vMax - vMin) * s.autoScrollFactor)
            // Smoothly interpolate velocity
            s.velocity += (targetV - s.velocity) * 0.1
        } else if (!s.isDragging) {
            // Friction/Inertia when not dragging or auto-scrolling
            s.velocity *= friction
        }

        // Apply velocity
        if (Math.abs(s.velocity) > 0.01) {
            s.currentX += s.velocity
        } else {
            s.velocity = 0
        }

        // Bounds constraints (Rubber banding or hard stop? Hard stop for now)
        if (!s.isDragging) {
            if (s.currentX > s.bounds.max) {
                s.currentX += (s.bounds.max - s.currentX) * 0.2
                s.velocity *= 0.5
            } else if (s.currentX < s.bounds.min) {
                s.currentX += (s.bounds.min - s.currentX) * 0.2
                s.velocity *= 0.5
            }
        }

        // Apply transform
        if (trackRef.current) {
            trackRef.current.style.transform = `translate3d(${s.currentX}px, 0, 0)`
        }

        requestRef.current = requestAnimationFrame(animate)
    }, [vMin, vMax, friction, isReducedMotion])

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    }, [animate])

    // Interaction Handlers
    const handlePointerDown = (e) => {
        const s = state.current
        s.isDragging = true
        s.startX = e.clientX
        s.lastX = s.currentX
        s.velocity = 0
        s.isAutoScrolling = false // Stop auto-scroll on interaction

        if (trackRef.current) {
            trackRef.current.style.cursor = 'grabbing'
        }
    }

    const handlePointerMove = (e) => {
        const s = state.current
        if (!s.isDragging) return

        const delta = e.clientX - s.startX
        s.currentX = s.lastX + delta

        // Calculate instantaneous velocity for throw
        // Simple approach: just use the delta from this frame? 
        // Better: track previous position. For now, let's just let the physics loop handle velocity logic if we were tracking it differently.
        // Actually, for fling, we need to set velocity on release based on recent movement.
        // Let's update a "drag velocity" here roughly
        s.velocity = e.movementX
    }

    const handlePointerUp = () => {
        const s = state.current
        s.isDragging = false
        if (trackRef.current) {
            trackRef.current.style.cursor = 'grab'
        }
    }

    // Arrow Zone Logic
    const handleZoneEnter = (direction) => {
        state.current.isAutoScrolling = true
        state.current.autoScrollDirection = direction
    }

    const handleZoneLeave = () => {
        state.current.isAutoScrolling = false
        state.current.autoScrollFactor = 0
    }

    const handleZoneMove = (e, direction) => {
        if (isReducedMotion) return

        const rect = e.currentTarget.getBoundingClientRect()
        let distance = 0

        if (direction === -1) { // Left Zone
            // Distance from right edge of the left zone
            distance = rect.right - e.clientX
        } else { // Right Zone
            // Distance from left edge of the right zone
            distance = e.clientX - rect.left
        }

        // Normalize distance (0 to 1)
        const clampedDist = Math.max(0, Math.min(distance, maxDistance))
        // Non-linear easing (cubic)
        const t = clampedDist / maxDistance
        const factor = t * t // Ease in

        state.current.autoScrollFactor = factor
    }

    // Keyboard Navigation
    const handleKeyDown = (e) => {
        const s = state.current
        const nudge = 300

        if (e.key === 'ArrowLeft') {
            s.velocity += 10
        } else if (e.key === 'ArrowRight') {
            s.velocity -= 10
        } else if (e.key === 'Home') {
            s.currentX = 0
            s.velocity = 0
        } else if (e.key === 'End') {
            s.currentX = s.bounds.min
            s.velocity = 0
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] overflow-hidden group outline-none"
            tabIndex="0"
            onKeyDown={handleKeyDown}
            role="region"
            aria-label="Project Carousel"
        >
            {/* Track */}
            <div
                ref={trackRef}
                className="flex gap-8 absolute top-0 left-0 h-full items-center px-12 will-change-transform cursor-grab touch-pan-y"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                {projects.map((project, index) => (
                    <div key={index} className="w-[400px] flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>

            {/* Left Arrow Zone */}
            {!isReducedMotion && (
                <div
                    className="absolute top-0 left-0 w-32 h-full z-20 bg-gradient-to-r from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-w-resize flex items-center justify-start pl-4"
                    onMouseEnter={() => handleZoneEnter(1)} // Scroll Right (content moves right, so we see left items) -> Wait, if we want to scroll LEFT (see right items), content must move LEFT (negative X).
                    // If we are at the left edge and want to go right (see previous items), content moves RIGHT (positive X).
                    // So Left Zone = Positive Velocity.
                    onMouseLeave={handleZoneLeave}
                    onMouseMove={(e) => handleZoneMove(e, 1)}
                    role="button"
                    aria-label="Scroll Left"
                >
                    <svg className="w-12 h-12 text-neon-blue animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </div>
            )}

            {/* Right Arrow Zone */}
            {!isReducedMotion && (
                <div
                    className="absolute top-0 right-0 w-32 h-full z-20 bg-gradient-to-l from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-e-resize flex items-center justify-end pr-4"
                    onMouseEnter={() => handleZoneEnter(-1)} // Scroll Right (see next items) -> Content moves LEFT (negative X)
                    onMouseLeave={handleZoneLeave}
                    onMouseMove={(e) => handleZoneMove(e, -1)}
                    role="button"
                    aria-label="Scroll Right"
                >
                    <svg className="w-12 h-12 text-neon-blue animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            )}
        </div>
    )
}

export default ProjectCarousel
