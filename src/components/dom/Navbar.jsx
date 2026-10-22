import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Arsenal', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section spy
      const sections = ['about', 'experience', 'projects', 'skills', 'contact']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleResumeClick = (e) => {
    if (onOpenResume) {
      e.preventDefault()
      onOpenResume()
    }
  }

  return (
    <>
      <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-6 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#0d1017]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
              : 'bg-[#0d1017]/50 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Logo / Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-2 group text-white font-semibold tracking-tight text-sm md:text-base pr-1 sm:pr-2"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-xs font-bold text-black shadow-sm group-hover:scale-105 transition-transform">
              RC
            </span>
            <span className="hidden sm:inline font-bold tracking-wider text-xs md:text-sm bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              RANJITH
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full border border-cyan-400/40 bg-cyan-400/10 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              )
            })}
          </div>

          {/* Action Button: Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Resume</span>
              <FiFileText size={13} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#0d1017]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (onOpenResume) onOpenResume()
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                >
                  <span>View Updated Resume (PDF & Matrix)</span>
                  <FiDownload size={15} />
                </button>
              </div>

              <div className="h-px bg-white/10 my-2" />

              <div className="flex justify-around pt-2 text-slate-400">
                <a
                  href="https://github.com/ranjith-devop"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ranjith9597"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="mailto:ranjithshiva22@gmail.com"
                  className="p-2 hover:text-purple-400 transition-colors"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
