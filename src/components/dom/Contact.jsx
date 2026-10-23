import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiCopy, 
  FiCheck, 
  FiArrowUpRight, 
  FiSend, 
  FiLinkedin, 
  FiGithub,
  FiArrowUp,
  FiAlertCircle,
  FiExternalLink,
  FiRefreshCw
} from 'react-icons/fi'
import { SiLeetcode, SiGmail } from 'react-icons/si'

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
  const [service, setService] = useState('gmail') // 'gmail' | 'mailto' | 'outlook'
  const [formStatus, setFormStatus] = useState(null) // null | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')
  const [lastSubmission, setLastSubmission] = useState(null)
  const [copiedMessage, setCopiedMessage] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ranjithshiva22@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message before sending.')
      setFormStatus('error')
      return
    }

    setErrorMessage('')

    const recipient = 'ranjithshiva22@gmail.com'
    const subject = `Portfolio Inquiry from ${formState.name.trim()}`
    const body = `Hi Ranjith,\n\n${formState.message.trim()}\n\n---\nSender Name: ${formState.name.trim()}\nSender Email: ${formState.email.trim()}`

    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)

    let targetUrl = ''
    let serviceLabel = 'Gmail'

    if (service === 'gmail') {
      targetUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`
      serviceLabel = 'Gmail'
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    } else if (service === 'outlook') {
      targetUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=${encodedSubject}&body=${encodedBody}`
      serviceLabel = 'Outlook Web'
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    } else {
      targetUrl = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`
      serviceLabel = 'Default Mail App'
      const link = document.createElement('a')
      link.href = targetUrl
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    setLastSubmission({
      url: targetUrl,
      serviceLabel,
      recipient,
      subject,
      body
    })
    setFormStatus('success')
  }

  const copyFormattedMessage = () => {
    if (!lastSubmission) return
    const textToCopy = `To: ${lastSubmission.recipient}\nSubject: ${lastSubmission.subject}\n\n${lastSubmission.body}`
    navigator.clipboard.writeText(textToCopy)
    setCopiedMessage(true)
    setTimeout(() => setCopiedMessage(false), 2500)
  }

  const resetForm = () => {
    setFormState({ name: '', email: '', message: '' })
    setFormStatus(null)
    setLastSubmission(null)
    setErrorMessage('')
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
              Fastest way to get in touch. Click to copy, launch directly in Gmail, or open your mail app.
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

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ranjithshiva22@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <SiGmail size={13} />
                <span>Open in Gmail</span>
                <FiArrowUpRight size={13} />
              </a>
              <span className="text-slate-600 text-xs">•</span>
              <a
                href="mailto:ranjithshiva22@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FiMail size={13} />
                <span>Mail App</span>
                <FiArrowUpRight size={13} />
              </a>
            </div>
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Direct Compose
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Fill in your details below. Clicking send will open your chosen email client with the message pre-filled.
              </p>

              {/* Error Alert */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2"
                  >
                    <FiAlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

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
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value })
                      if (errorMessage) setErrorMessage('')
                    }}
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
                    onChange={(e) => {
                      setFormState({ ...formState, email: e.target.value })
                      if (errorMessage) setErrorMessage('')
                    }}
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
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value })
                      if (errorMessage) setErrorMessage('')
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Email Service Selector */}
                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-300">
                    <span>Send Using</span>
                    <span className="text-[11px] text-cyan-400 font-sans normal-case">
                      {service === 'gmail' && 'Opens Gmail in browser (Recommended)'}
                      {service === 'mailto' && 'Opens system mail client (Outlook / Apple Mail)'}
                      {service === 'outlook' && 'Opens Outlook.com in browser'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setService('gmail')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                        service === 'gmail'
                          ? 'bg-rose-500/15 border-rose-500/50 text-white shadow-sm shadow-rose-500/20'
                          : 'bg-black/30 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                      }`}
                    >
                      <SiGmail className={service === 'gmail' ? 'text-rose-400' : 'text-slate-400'} size={14} />
                      <span>Gmail</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setService('mailto')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                        service === 'mailto'
                          ? 'bg-cyan-500/15 border-cyan-500/50 text-white shadow-sm shadow-cyan-500/20'
                          : 'bg-black/30 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                      }`}
                    >
                      <FiMail className={service === 'mailto' ? 'text-cyan-400' : 'text-slate-400'} size={14} />
                      <span>Mail App</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setService('outlook')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                        service === 'outlook'
                          ? 'bg-blue-500/15 border-blue-500/50 text-white shadow-sm shadow-blue-500/20'
                          : 'bg-black/30 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                      }`}
                    >
                      <FiSend className={service === 'outlook' ? 'text-blue-400' : 'text-slate-400'} size={14} />
                      <span>Outlook</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions / Success State */}
            <div className="mt-8 pt-4">
              <AnimatePresence mode="wait">
                {formStatus === 'success' && lastSubmission ? (
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-slate-200 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                        <FiCheck size={18} />
                        <span>Opening in {lastSubmission.serviceLabel}...</span>
                      </div>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                      >
                        <FiRefreshCw size={12} />
                        <span>New Message</span>
                      </button>
                    </div>

                    <p className="text-xs text-slate-300">
                      If your browser blocked the new tab or the mail client didn't launch:
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        href={lastSubmission.url}
                        target={service === 'mailto' ? '_self' : '_blank'}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/40 transition-colors"
                      >
                        <FiExternalLink size={13} />
                        <span>Click to Open {lastSubmission.serviceLabel}</span>
                      </a>

                      <button
                        type="button"
                        onClick={copyFormattedMessage}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
                      >
                        {copiedMessage ? (
                          <>
                            <FiCheck size={13} className="text-emerald-400" />
                            <span className="text-emerald-400">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <FiCopy size={13} />
                            <span>Copy Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <FiSend size={16} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Ranjith. Built with knowledge.</span>
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
