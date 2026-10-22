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
  FiTerminal,
  FiZap,
  FiCheckCircle
} from 'react-icons/fi'
import { 
  SiLeetcode, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiJavascript, 
  SiFlutter, 
  SiPhp, 
  SiLaravel, 
  SiMysql, 
  SiPostgresql, 
  SiBun, 
  SiClaude, 
  SiGooglegemini, 
  SiGithub 
} from 'react-icons/si'

const SKILL_CATEGORIES = [
  {
    category: 'AI-Assisted Dev & Engineering',
    icon: FiCpu,
    color: 'text-purple-400',
    skills: [
      'Cursor (Composer & Agentic)', 
      'Google Antigravity IDE', 
      'GitHub Copilot', 
      'Gemini CLI', 
      'Claude 3.5 Sonnet', 
      'Zcode',
      'Prompt Engineering', 
      'AI Chatbot APIs'
    ]
  },
  {
    category: 'Frontend & UI Engineering',
    icon: SiReact,
    color: 'text-cyan-400',
    skills: [
      'React.js', 
      'Tailwind CSS', 
      'JavaScript (ES6+)', 
      'Blade (Laravel)', 
      'HTML5 / Modern CSS', 
      'Framer Motion', 
      'Responsive Web UI'
    ]
  },
  {
    category: 'Backend & Frameworks',
    icon: SiNodedotjs,
    color: 'text-emerald-400',
    skills: [
      'Express.js', 
      'Elysia.js (Bun)', 
      'Node.js', 
      'PHP', 
      'Laravel', 
      'Java (Core & OOP)', 
      'RESTful APIs', 
      'JWT Auth'
    ]
  },
  {
    category: 'Mobile & Databases',
    icon: FiSmartphone,
    color: 'text-amber-400',
    skills: [
      'React Native', 
      'Flutter', 
      'Expo', 
      'MySQL', 
      'PostgreSQL', 
      'MongoDB', 
      'AsyncStorage', 
      'Git & GitHub'
    ]
  }
]

export default function AboutBento({ onOpenResume }) {
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
          1 year of software engineering experience bridging frontend precision, robust backends, and AI-accelerated development workflows.
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
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <FiCode size={20} />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                1 Year Professional Experience
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Who I Am</h3>
            <p className="text-slate-300 leading-relaxed text-base mb-4 font-light">
              I am a <strong className="text-white font-semibold">Software Developer</strong> with 1 year of professional experience at <strong className="text-cyan-300 font-medium">Edmond Remedies</strong>, contributing to scalable web and mobile feature development, debugging, and database performance.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              My engineering stack spans <span className="text-cyan-300">React.js, Tailwind CSS</span>, high-performance backends with <span className="text-emerald-300">Express.js, Elysia.js, PHP/Laravel</span>, cross-platform apps with <span className="text-purple-300">React Native & Flutter</span>, and both relational and NoSQL databases (<span className="text-amber-300">MySQL, PostgreSQL, MongoDB</span>).
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Fullstack & Mobile
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              AI-Assisted Workflows
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              API & DB Engineering
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
                <span>View LeetCode</span>
                <FiExternalLink size={12} />
              </a>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Algorithm & DSA Craft</h3>
            <p className="text-slate-400 text-sm mb-6">
              Active problem solver applying core data structures and algorithmic efficiency to everyday architecture.
            </p>

            <div className="space-y-3 bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">LeetCode Profile</span>
                <span className="text-amber-400 font-semibold">@Ranjith_C</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Core Languages</span>
                <span className="text-slate-200">Java (Core & OOP), JavaScript</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Focus Areas</span>
                <span className="text-slate-200">Arrays, Strings, Trees, Logic</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-amber-400/90 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Dedicated to algorithmic optimization</span>
          </div>
        </motion.div>

        {/* Card 3: AI-Assisted Development Superpower (Span 12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-12 rounded-2xl glass-panel p-8 relative overflow-hidden group border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 bg-gradient-to-br from-purple-950/20 via-[#0d1017] to-cyan-950/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
                <FiZap size={14} className="text-purple-400" />
                <span>Specialized Competency</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                AI-Assisted Software Engineering Mastery
              </h3>
              <p className="text-slate-300 max-w-2xl text-sm sm:text-base mt-2 font-light">
                Harnessing next-generation agentic IDEs, LLMs, and prompt architectures to achieve 3x–5x velocity across the full software lifecycle.
              </p>
            </div>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 transition-all shrink-0 hover:scale-[1.02]"
              >
                <span>View Full AI Skill Matrix</span>
                <FiExternalLink size={14} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-colors">
              <div className="text-purple-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                <FiTerminal size={16} />
                <span>Agentic IDEs</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-3">
                Expertise in <strong>Cursor Composer</strong> and <strong>Google Antigravity IDE</strong> for full-repo context indexing and autonomous task execution.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Cursor', 'Antigravity', 'VS Code', 'Zcode'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors">
              <div className="text-cyan-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                <SiGooglegemini size={16} />
                <span>LLM Assistants</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-3">
                Daily command of <strong>GitHub Copilot, Gemini CLI, Claude 3.5</strong> for instant code synthesis, edge-case analysis, and refactoring.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Copilot', 'Claude 3.5', 'Gemini CLI'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{t}</span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/30 transition-colors">
              <div className="text-emerald-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                <FiLayers size={16} />
                <span>Chatbot API Apps</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-3">
                Engineered production features like the <strong>Smart Medication App AI Chatbot</strong> with prompt engineering and conversational endpoints.
              </p>
              <div className="flex flex-wrap gap-1">
                {['AI Chatbot API', 'Prompt Design', 'Context Tuning'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{t}</span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/30 transition-colors">
              <div className="text-amber-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                <FiCheckCircle size={16} />
                <span>AI Debugging & Tests</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-3">
                Leverage AI diagnostics for rapid root-cause debugging, automated test scaffold generation, and performance optimization.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Test Generation', 'Bug Diagnosis', 'Refactoring'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section: Tech Arsenal Cards (Span 12) */}
        <div id="skills" className="md:col-span-12 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <FiLayers className="text-cyan-400" />
              <span>Tech Arsenal & What I Know</span>
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
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">1 Year</div>
            <div className="text-xs text-slate-400 mt-1">Edmond Remedies Experience</div>
          </div>
          <div className="p-4 rounded-xl glass-panel text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">AI-Native</div>
            <div className="text-xs text-slate-400 mt-1">Cursor, Copilot & Antigravity</div>
          </div>
          <div className="p-4 rounded-xl glass-panel text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">3+ Shipped</div>
            <div className="text-xs text-slate-400 mt-1">AI-Integrated Web & Mobile Apps</div>
          </div>
          <div className="p-4 rounded-xl glass-panel text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">8.06 / 10</div>
            <div className="text-xs text-slate-400 mt-1">Rohini College of Engg (2026)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
