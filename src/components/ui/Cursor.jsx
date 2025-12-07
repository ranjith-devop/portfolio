import React, { useEffect, useRef, useState } from 'react'

const Cursor = () => {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e

            // Main dot follows instantly
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
            }

            // Follower uses simple lerp via CSS transition or requestAnimationFrame
            // For smoother performance, we'll use a direct transform update loop
            if (followerRef.current) {
                followerRef.current.animate({
                    transform: `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`
                }, {
                    duration: 500,
                    fill: "forwards"
                })
            }
        }

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setHovered(true)
            } else {
                setHovered(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 w-3 h-3 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out ${hovered ? 'scale-0' : 'scale-100'}`}
                style={{ transform: 'translate3d(-100px, -100px, 0)' }}
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-10 h-10 border border-neon-blue rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out ${hovered ? 'scale-[2] bg-neon-blue/20 border-transparent' : 'scale-100'}`}
                style={{ transform: 'translate3d(-100px, -100px, 0)' }}
            />
        </>
    )
}

export default Cursor
