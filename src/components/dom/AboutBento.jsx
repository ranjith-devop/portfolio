import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiServer, 
  FiCpu, 
  FiLayers, 
  FiAward, 
  FiExternalLink,
  FiTerminal
} from 'react-icons/fi'
import { SiLeetcode, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript } from 'react-icons/si'

const SKILL_CATEGORIES = [
  {
    category: 'Frontend & UI',
    icon: SiReact,
    color: 'text-cyan-400',
    skills: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / Modern CSS', 'Framer Motion', 'Three.js / R3F']
  },
  {
    category: 'Backend & APIs',
    icon: SiNodedotjs,
    color: 'text-emerald-400',
    skills: ['Node.js', 'Express.js', 'Java (Core & OOP)', 'RESTful APIs', 'Authentication (OAuth / JWT)']
  },
  {
    category: 'Mobile Apps',
    icon: FiSmartphone,
    color: 'text-purple-400',
    skills: ['React Native', 'Expo', 'Mobile Navigation', 'Offline Storage', 'Cross-Platform UI']
  },
  {
    category: 'Database & Tools',
    icon: SiMongodb,
    color: 'text-amber-400',
    skills: ['MongoDB', 'Mongoose', 'Git & GitHub', 'Postman', 'VS Code', 'Vite']
  }
]

export default function AboutBento() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <FiCpu size={14} />
          <span>Profile & Capabilities</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Architecting ideas with <span className="aurora-text">modern code.</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-base md:text-lg">
          A blend of frontend precision, robust backend fundamentals, and algorithmic problem-solving.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Main Bio (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 rounded-2xl glass-panel p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500 pointer-events-none" />

          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
              <FiCode size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-slate-300 leading-relaxed text-base mb-4 font-light">
              I am an aspiring <strong className="text-white font-semibold">Fullstack & Mobile Developer</strong> passionate about building production-ready applications from the ground up.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Whether architecting responsive web apps with <span className="text-cyan-300">React & Tailwind</span>, engineering RESTful backends with <span className="text-emerald-300">Node & Express</span>, or designing cross-platform mobile experiences with <span className="text-purple-300">React Native</span>, I focus on clean code, intuitive UX, and maintainable systems.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Fullstack Engineering
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Mobile App Development
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Algorithmic Problem Solving
            </span>
          </div>
        </motion.div>

        {/* Card 2: LeetCode & Problem Solving (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 rounded-2xl glass-panel p-8 flex flex-col justify-between relative overflow-hidden group border-amber-500/20 hover:border-amber-500/40 transition-colors"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <SiLeetcode size={22} />
              </div>
              <a
                href="https://leetcode.com/u/Ranjith_C/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 hover:text-amber-300"
              >
                <span>View Profile</span>
                <FiExternalLink size={12} />
              </a>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Algorithm & DSA Craft</h3>
            <p className="text-slate-400 text-sm mb-6">
              Active problem solver dedicated to strengthening core computer science principles, data structures, and algorithmic complexity.
            </p>

            <div className="space-y-3 bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">LeetCode Profile</span>
                <span className="text-amber-400 font-semibold">@Ranjith_C</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Core Languages</span>
                <span className="text-slate-200">Java, JavaScript</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Focus Areas</span>
                <span className="text-slate-200">Arrays, Strings, Trees, DP</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-amber-400/90 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Consistently practicing coding challenges</span>
          </div>
        </motion.div>

        {/* Section: Tech Arsenal Cards (Span 12) */}
        <div id="skills" className="md:col-span-12 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <FiLayers className="text-cyan-400" />
              <span>Tech Arsenal</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Categorized by Domain</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-xl glass-panel-interactive p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-white/5 ${cat.color}`}>
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-white text-base">{cat.category}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-cyan-400/30 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Quick Metrics Bar (Span 12) */}
        <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
          <div className="p-4 rounded-xl glass-panel text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">3+</div>
            <div className="text-xs text-slate-400 mt-1">Shipped Projects</div>
          </div>
          <div className="p-4 rounded-xl glass-panel text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">10+</div>
            <div className="text-xs text-slate-400 mt-1">Tech Frameworks</div>
          </div>
          <div className="p-4 rounded-xl glass-panel text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">DSA</div>
            <div className="text-xs text-slate-400 mt-1">Java & Logic Solving</div>
          </div>
          <div className="p-4 rounded-xl glass-panel text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">2026</div>
            <div className="text-xs text-slate-400 mt-1">Graduation Batch</div>
          </div>
        </div>
      </div>
    </section>
  )
}
