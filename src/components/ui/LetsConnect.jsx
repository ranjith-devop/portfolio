import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiTwitter, FiChevronRight, FiPhone } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import PreviewPopup from './PreviewPopup'

const LINKS = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/ranjith-sakun-2004',
        icon: FiLinkedin,
        color: 'text-blue-500',
        description: 'Connect with me on LinkedIn for professional updates and networking.'
    },
    {
        id: 'github',
        label: 'GitHub',
        href: 'https://github.com/ranjith-devop',
        icon: FiGithub,
        color: 'text-gray-200',
        description: 'Check out my open source projects and coding contributions.'
    },
    {
        id: 'leetcode',
        label: 'LeetCode',
        href: 'https://leetcode.com/u/Ranjith_C/',
        icon: SiLeetcode,
        color: 'text-yellow-500',
        description: 'View my problem-solving stats and coding challenges.'
    },
    {
        id: 'email',
        label: 'Email',
        href: 'mailto:ranjitran9597@gmail.com',
        icon: FiMail,
        color: 'text-red-500',
        description: 'Shoot me an email for inquiries, collaborations, or just to say hi.',
        disablePreview: true
    },
    {
        id: 'phone',
        label: '+91 9597998489',
        href: 'tel:+919597998489',
        icon: FiPhone,
        color: 'text-green-500',
        description: 'Call or text me directly.',
        disablePreview: true
    }
]

const LetsConnect = () => {
    const [activeLink, setActiveLink] = useState(null)
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })
    const hoverTimeout = useRef(null)
    const containerRef = useRef(null)

    const handleMouseEnter = (link, e) => {
        // Disable preview on mobile
        if (window.innerWidth < 768) return

        // Clear any pending close timer
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)

        if (link.disablePreview) return

        const target = e.currentTarget;

        // Delay opening
        hoverTimeout.current = setTimeout(() => {
            const rect = target.getBoundingClientRect()

            // Calculate fixed position
            // Position to the right of the tile, centered vertically
            setPopupPosition({
                top: rect.top + rect.height / 2,
                left: rect.right + 20 // 20px gap
            })
            setActiveLink(link)
        }, 150)
    }

    const handleMouseLeave = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
        // Delay closing to allow moving to popup
        hoverTimeout.current = setTimeout(() => {
            setActiveLink(null)
        }, 300)
    }

    const handlePopupEnter = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }

    return (
        <div className="relative flex flex-col gap-4 w-full max-w-md" ref={containerRef}>
            {LINKS.map(link => (
                <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-neon-blue/50 transition-all duration-300 outline-none focus:ring-2 focus:ring-neon-blue"
                    onMouseEnter={(e) => handleMouseEnter(link, e)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={(e) => handleMouseEnter(link, e)}
                    onBlur={handleMouseLeave}
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg bg-black/50 ${link.color} group-hover:scale-110 transition-transform`}>
                            <link.icon size={24} />
                        </div>
                        <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                            {link.label}
                        </span>
                    </div>
                    <FiChevronRight className="text-gray-500 group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                </a>
            ))}

            {/* Popup Portal */}
            {createPortal(
                <AnimatePresence>
                    {activeLink && (
                        <PreviewPopup
                            link={activeLink}
                            position={popupPosition}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    )
}

export default LetsConnect
