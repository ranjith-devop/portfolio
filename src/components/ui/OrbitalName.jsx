import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Sparkle = ({ x, y }) => {
    return (
        <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-1 h-1 bg-neon-blue rounded-full pointer-events-none z-20"
            style={{ left: x, top: y }}
        />
    )
}

const OrbitalName = ({ children, forceHighlight }) => {
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [sparkles, setSparkles] = useState([])

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            })
        }
    }, [children])

    // Generate sparkles
    useEffect(() => {
        if (!isHovered && !forceHighlight) {
            setSparkles([])
            return
        }

        const interval = setInterval(() => {
            const perimeter = 2 * (dimensions.width + dimensions.height)
            const randomPos = Math.random() * perimeter

            let x, y
            if (randomPos < dimensions.width) { // Top
                x = randomPos
                y = 0
            } else if (randomPos < dimensions.width + dimensions.height) { // Right
                x = dimensions.width
                y = randomPos - dimensions.width
            } else if (randomPos < 2 * dimensions.width + dimensions.height) { // Bottom
                x = (2 * dimensions.width + dimensions.height) - randomPos
                y = dimensions.height
            } else { // Left
                x = 0
                y = perimeter - randomPos
            }

            setSparkles(prev => [...prev.slice(-10), { id: Date.now(), x, y }])
        }, forceHighlight ? 50 : 100)

        return () => clearInterval(interval)
    }, [isHovered, dimensions, forceHighlight])

    return (
        <div
            ref={containerRef}
            className="relative inline-block cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative z-10 transition-all duration-500 ${forceHighlight ? 'brightness-150 drop-shadow-[0_0_15px_rgba(188,19,254,0.8)]' : ''}`}>
                {children}
            </div>

            {/* Orbiting Stroke Container */}
            {(isHovered || forceHighlight) && (
                <div className="absolute -inset-4 pointer-events-none">
                    <svg className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00f3ff" stopOpacity="0" />
                                <stop offset="50%" stopColor="#00f3ff" />
                                <stop offset="100%" stopColor="#bc13fe" />
                            </linearGradient>
                        </defs>

                        {/* The Stroke */}
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            rx="10"
                            fill="none"
                            stroke="url(#orbit-gradient)"
                            strokeWidth="2"
                            className="animate-orbit-stroke"
                        />
                    </svg>

                    {/* Particle Head - Moving Div */}
                    <div className="absolute top-0 left-0 w-full h-full animate-orbit-rotate">
                        <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff] z-20" />
                    </div>

                    {/* Sparkles */}
                    {sparkles.map(s => (
                        <Sparkle key={s.id} x={s.x} y={s.y} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default OrbitalName
