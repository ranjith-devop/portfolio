import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HammerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
        <path d="M17.64 15L22 10.64" />
        <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V3h-5.25c-.85 0-1.65.33-2.25.93L10 5.18" />
    </svg>
)

const SkillMeter = ({ skill, percentage }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative flex items-center justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Percentage Panel (Left Side) */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ width: 0, opacity: 0, x: 20 }}
                        animate={{ width: 'auto', opacity: 1, x: 0 }}
                        exit={{ width: 0, opacity: 0, x: 20 }}
                        className="absolute right-full mr-4 bg-gray-900/90 border border-neon-blue/30 rounded-lg px-3 py-1 flex items-center gap-2 overflow-hidden whitespace-nowrap z-20"
                    >
                        <span className="text-neon-blue font-mono font-bold">
                            <CountUp to={percentage} />%
                        </span>
                        <div className="h-1 w-16 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-neon-blue"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Skill Tag */}
            <div className="relative group cursor-pointer">
                <div className={`
                    px-6 py-3 border rounded-full text-lg font-mono transition-all duration-300
                    ${isHovered
                        ? 'border-neon-blue bg-neon-blue/10 text-white scale-105 shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                        : 'border-neon-blue/30 bg-neon-blue/5 text-neon-blue'}
                `}>
                    {skill}
                </div>

                {/* Hammer & Spike (Right Side/Overlay) */}
                {isHovered && (
                    <div className="absolute -right-8 bottom-0 flex flex-col items-center justify-end h-24 w-8 pointer-events-none">
                        {/* Hammer */}
                        <motion.div
                            animate={{ rotate: [0, -45, 45, 0] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 0.5
                            }}
                            className="absolute -top-4 -right-4 text-neon-pink origin-bottom-left"
                        >
                            <HammerIcon />
                        </motion.div>

                        {/* Spike/Scale */}
                        <div className="w-2 bg-gray-800 rounded-t-full h-full relative overflow-hidden border border-gray-700">
                            <motion.div
                                initial={{ height: "0%" }}
                                animate={{ height: `${percentage}%` }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                    mass: 1
                                }}
                                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neon-blue to-neon-purple"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

// Simple CountUp component
const CountUp = ({ to }) => {
    const [count, setCount] = useState(0)

    React.useEffect(() => {
        let start = 0
        const duration = 1000
        const startTime = performance.now()

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4)

            setCount(Math.floor(start + (to - start) * ease))

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [to])

    return <>{count}</>
}

export default SkillMeter
