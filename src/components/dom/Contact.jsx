import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiCopy, 
  FiCheck, 
  FiArrowUpRight, 
  FiSend, 
  FiLinkedin, 
  FiGithub,
  FiArrowUp
} from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const SOCIAL_CARDS = [
  {
    name: 'LinkedIn',
    handle: 'in/ranjith9597',
    href: 'https://www.linkedin.com/in/ranjith9597',
    icon: FiLinkedin,
    color: 'hover:text-blue-400 hover:border-blue-500/40'
  },
  {
    name: 'GitHub',
    handle: '@ranjith-devop',
    href: 'https://github.com/ranjith-devop',
    icon: FiGithub,
    color: 'hover:text-slate-200 hover:border-white/30'
  },
  {
    name: 'LeetCode',
    handle: '@Ranjith_C',
    href: 'https://leetcode.com/u/Ranjith_C/',
    icon: SiLeetcode,
    color: 'hover:text-amber-400 hover:border-amber-500/40'
  },
  {
    name: 'Direct Phone',
    handle: '+91 95979 98489',
    href: 'tel:+919597998489',
    icon: FiPhone,
    color: 'hover:text-emerald-400 hover:border-emerald-500/40'
  }
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formSent, setFormSent] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ranjithshiva22@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return

    // Open mailto with prefilled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)
    window.location.href = `mailto:ranjithshiva22@gmail.com?subject=${subject}&body=${body}`

    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      setFormState({ name: '', email: '', message: '' })
    }, 4000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-12 relative max-w-6xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-500/5 via-purple-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
          <FiMail size={14} />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let's build something <span className="aurora-text">remarkable.</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Whether you have a full-time role, internship, freelance project, or just want to discuss tech — my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 mb-20">
        {/* Left Side: Contact Direct Cards (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Primary Email Card */}
          <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group border-cyan-500/20">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
              <FiMail size={22} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Direct Email</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Fastest way to get in touch. Click to copy or open in your email client.
            </p>

            <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between gap-2 mb-4">
              <span className="text-xs sm:text-sm font-mono text-cyan-300 truncate">
                ranjithshiva22@gmail.com
              </span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-400" size={14} />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="mailto:ranjithshiva22@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <span>Compose mail directly</span>
              <FiArrowUpRight size={14} />
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3">
            {SOCIAL_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <a
                  key={card.name}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-xl glass-panel-interactive border border-white/5 transition-all group ${card.color}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={18} className="text-slate-400 group-hover:text-inherit transition-colors" />
                    <FiArrowUpRight size={14} className="text-slate-500 group-hover:text-inherit transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="text-xs font-semibold text-white group-hover:text-inherit">{card.name}</div>
                  <div className="text-[11px] font-mono text-slate-400 truncate">{card.handle}</div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Right Side: Quick Message Form (Span 7) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleFormSubmit}
            className="p-8 rounded-2xl glass-panel flex flex-col justify-between h-full border border-white/10"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in your details below and hit send to connect directly.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                {formSent ? (
                  <>
                    <FiCheck size={18} />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Ranjith. Built with modern React & Three.js.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <span>Back to Top</span>
          <FiArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
