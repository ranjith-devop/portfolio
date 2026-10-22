import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiFileText, FiCpu } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import HeroCanvas from '../canvas/HeroCanvas'
import imgProfile from '../../assets/imgprofile.png'

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Three.js Interactive 3D Canvas */}
      <HeroCanvas />

      {/* Atmospheric Glow Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Subtitle / Intro */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-medium tracking-wide mb-3">
            <FiCpu size={13} className="text-cyan-400" />
            <span>Software Developer & AI-Assisted Engineer</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">Ranjith C</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4 leading-relaxed">
            Crafting scalable web architectures, cross-platform mobile apps, and high-velocity systems powered by <span className="aurora-text">AI-assisted engineering</span>.
          </p>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            <strong className="text-slate-200">1 Year Professional Experience</strong> at Edmond Remedies. Specialized in <span className="text-slate-200 font-semibold">React.js, Express.js, Elysia.js, Laravel, React Native, and MySQL/MongoDB</span>. Supercharging feature delivery with Cursor Composer, Google Antigravity, GitHub Copilot, Gemini CLI, and Claude 3.5.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Experience</span>
              <FiArrowDown size={16} />
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/40 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FiFileText size={16} />
                <span>Interactive Resume</span>
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/ranjith-devop"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-200"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ranjith9597"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all duration-200"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/Ranjith_C/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all duration-200"
              >
                <SiLeetcode size={18} />
              </a>
              <a
                href="mailto:ranjithshiva22@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-rose-500/10 border border-white/10 hover:border-rose-500/40 text-slate-300 hover:text-rose-400 flex items-center justify-center transition-all duration-200"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Avatar Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Ambient Aurora Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse-slow" />

            {/* Avatar Container */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-[390px] md:w-80 md:h-[430px] rounded-2xl p-2 bg-[#0d1017]/80 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden animate-float">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-gradient-to-b from-slate-900 to-black">
                <img
                  src={imgProfile}
                  alt="Ranjith"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/85 via-transparent to-transparent opacity-70" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-medium">Software Dev L1 • 1 Yr Exp</span>
                  <span className="text-purple-400 font-semibold">AI-Augmented</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </section>
  )
}
