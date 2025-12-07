import React from 'react'
import { motion } from 'framer-motion'
import LinkPreview from './LinkPreview'

const PreviewPopup = ({ link, position }) => {
    return (
        <motion.div
            className="fixed z-[9999] pointer-events-auto"
            style={{
                top: position.top,
                left: position.left,
                width: 320,
                height: 200,
                transform: 'translateY(-50%)' // Center vertically relative to anchor
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="relative w-full h-full"
            >
                {/* Animated Border Container */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    <svg className="w-full h-full overflow-visible">
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <motion.rect
                            x="0" y="0" width="100%" height="100%"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            rx="8"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            filter="url(#glow)"
                        />
                    </svg>

                    {/* Sparkle Head (Simplified: just a moving dot for now, complex path following requires custom interpolation) */}
                    {/* To do this properly with Framer Motion, we'd need useMotionValue and a custom component. 
                        For this iteration, the glowing line is the primary effect. */}
                </div>

                {/* Content Container with Reveal Mask */}
                <motion.div
                    className="w-full h-full overflow-hidden rounded-lg bg-black shadow-2xl relative z-10"
                    initial={{ clipPath: 'inset(50% 50% 50% 50%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                >
                    <LinkPreview
                        url={link.href}
                        title={link.label}
                        description={link.description}
                        icon={link.icon}
                        color={link.color}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default PreviewPopup
