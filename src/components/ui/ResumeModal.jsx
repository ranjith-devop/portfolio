import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiX, 
  FiDownload, 
  FiExternalLink, 
  FiBriefcase, 
  FiCpu, 
  FiLayers, 
  FiFolder, 
  FiAward, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiCheckCircle, 
  FiTerminal,
  FiPrinter
} from 'react-icons/fi'
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiFlutter, 
  SiGooglegemini, 
  SiGithub,
  SiLinkedin
} from 'react-icons/si'

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen) return null

  const handlePrint = () => {
    window.open('/ranjithresume.pdf', '_blank')
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0d1017] border border-white/15 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/[0.02]">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Verified Curriculum Vitae
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  1 Year Industry Experience
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Ranjith C <span className="text-slate-400 text-sm font-normal">— Software Developer</span>
              </h2>
              <p className="text-xs text-slate-400 flex flex-wrap items-center gap-3 mt-1 font-mono">
                <span className="flex items-center gap-1"><FiMapPin size={12} className="text-cyan-400" /> Kanniyakumari, India</span>
                <span className="flex items-center gap-1"><FiPhone size={12} className="text-emerald-400" /> +91 95979 98489</span>
                <span className="flex items-center gap-1"><FiMail size={12} className="text-purple-400" /> ranjithshiva22@gmail.com</span>
                <a href="https://www.linkedin.com/in/ranjith9597" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <SiLinkedin size={12} className="text-blue-400" /> in/ranjith9597
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href="/ranjithresume.pdf"
                download="Ranjith_C_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
              >
                <FiDownload size={14} />
                <span>Download PDF</span>
              </a>

              <button
                onClick={handlePrint}
                title="Open PDF in new tab"
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <FiPrinter size={16} />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="px-5 sm:px-6 py-2 border-b border-white/10 flex items-center gap-2 bg-[#08090d]/60 overflow-x-auto text-xs">
            {[
              { id: 'overview', label: 'Summary & Highlights', icon: FiAward },
              { id: 'experience', label: 'Experience (1 Yr)', icon: FiBriefcase },
              { id: 'ai-development', label: 'AI Arsenal & Superpowers', icon: FiCpu },
              { id: 'skills', label: 'Tech Stack & What I Know', icon: FiLayers },
              { id: 'projects', label: 'Projects & Education', icon: FiFolder },
            ].map((tab) => {
              const Icon = tab.icon
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                    active
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Modal Content Body */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                {/* Summary Card */}
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                  <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Professional Summary
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-light text-sm">
                    Software Developer with <strong className="text-white font-semibold">1 year of professional experience</strong> contributing to application architecture, maintenance, debugging, and performance improvement. Specializing in modern web and mobile ecosystems including <span className="text-cyan-300">React.js, Express.js, Elysia.js, Laravel, PHP, and React Native</span>, with comprehensive knowledge of relational and NoSQL databases (<span className="text-emerald-300">MySQL, PostgreSQL, MongoDB</span>).
                  </p>
                  <p className="text-slate-300 leading-relaxed font-light text-sm mt-3">
                    Adept in <strong className="text-purple-300 font-semibold">AI-Assisted Software Engineering</strong> (Cursor Composer, Google Antigravity, GitHub Copilot, Gemini CLI, Claude 3.5), utilizing modern AI tools to accelerate sprint delivery, engineer automated test suites, perform rapid root-cause diagnosis, and integrate conversational AI APIs.
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-2xl font-bold font-mono text-cyan-400">1 Year</div>
                    <div className="text-xs text-slate-400 mt-1">Edmond Remedies (L1)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-2xl font-bold font-mono text-purple-400">AI-Native</div>
                    <div className="text-xs text-slate-400 mt-1">Cursor & Antigravity</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-2xl font-bold font-mono text-emerald-400">8.06 / 10</div>
                    <div className="text-xs text-slate-400 mt-1">B.E. CSE (Rohini Engg)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-2xl font-bold font-mono text-amber-400">Full-Stack</div>
                    <div className="text-xs text-slate-400 mt-1">Web, Mobile & DBs</div>
                  </div>
                </div>

                {/* Highlights Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-transparent border border-purple-500/30 flex items-start gap-3">
                  <FiCpu className="text-purple-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Superpowered by AI-Augmented Workflows</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Leveraging next-generation agentic IDEs, LLM scaffolding, and prompt engineering to write cleaner code, eliminate repetitive boilerplate, and deliver enterprise-ready features with high velocity.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: EXPERIENCE */}
            {activeTab === 'experience' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                {/* Role 1 */}
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>Edmond Remedies</span>
                        <span className="text-cyan-400 text-xs font-normal">| Software Developer L1</span>
                      </h3>
                      <p className="text-xs text-slate-400">Full-time Software Engineering Role</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 self-start sm:self-auto">
                      Oct 2025 – Oct 2026 (1 Year)
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-4 list-none">
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-cyan-400 shrink-0 mt-1" size={14} />
                      <span><strong>Feature Engineering:</strong> Contributed to the development and maintenance of scalable application features, supporting ongoing product requirements and clean code conventions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-purple-400 shrink-0 mt-1" size={14} />
                      <span><strong>AI-Assisted Efficiency:</strong> Utilized <strong>AI-assisted tools (Cursor Composer, GitHub Copilot, Antigravity)</strong> for rapid prototyping, complex code refactoring, context-aware debugging, and automated test scaffolding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-emerald-400 shrink-0 mt-1" size={14} />
                      <span><strong>Debugging & Performance:</strong> Diagnosed and resolved application bugs, optimized critical runtime bottlenecks, and enhanced overall system stability and code efficiency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-blue-400 shrink-0 mt-1" size={14} />
                      <span><strong>API & Data Flow:</strong> Integrated RESTful APIs and handled data flow between application components, ensuring reliable state synchronization.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-amber-400 shrink-0 mt-1" size={14} />
                      <span><strong>Databases & Queries:</strong> Worked with relational (MySQL) and NoSQL (MongoDB) databases to support efficient data retrieval, updates, and indexing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-slate-400 shrink-0 mt-1" size={14} />
                      <span><strong>Agile Collaboration:</strong> Collaborated with team members following coding standards, Git version-control, pull-request reviews, and Agile development practices.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {['React.js', 'Express.js', 'Laravel', 'PHP', 'MySQL', 'MongoDB', 'Cursor', 'Antigravity', 'GitHub Copilot', 'Git'].map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Role 2 */}
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>AK Infopark</span>
                        <span className="text-cyan-400 text-xs font-normal">| Full-Stack Development Intern</span>
                      </h3>
                      <p className="text-xs text-slate-400">Onsite Internship Program</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/10 self-start sm:self-auto">
                      15-Day Onsite Internship
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-3 list-none">
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-cyan-400 shrink-0 mt-1" size={14} />
                      <span>Gained practical exposure to full-stack web application development using React.js, Express.js, and MongoDB.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-emerald-400 shrink-0 mt-1" size={14} />
                      <span>Learned fundamentals of frontend development and component-based UI implementation using React.js.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-blue-400 shrink-0 mt-1" size={14} />
                      <span>Explored backend development concepts, including server-side logic and REST API handling with Express.js.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-amber-400 shrink-0 mt-1" size={14} />
                      <span>Gained hands-on understanding of NoSQL database concepts and data management using MongoDB.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* TAB: AI DEVELOPMENT */}
            {activeTab === 'ai-development' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-purple-950/40 via-[#0d1017] to-cyan-950/30 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                      <FiCpu size={18} />
                    </span>
                    <h3 className="text-base font-bold text-white">
                      AI-Assisted Development Knowledge & Methodology
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    I treat modern AI not as a shortcut, but as a high-octane engineering force multiplier. By pairing deep CS fundamentals with cutting-edge AI environments, I achieve 3x–5x velocity across the full software lifecycle.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-2">
                      <FiTerminal size={15} />
                      <span>Agentic Coding & IDEs</span>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      Proficient with <strong>Cursor (Composer & multi-file agents)</strong> and <strong>Google Antigravity IDE</strong> for full-context repository navigation, intent-driven editing, and autonomous task execution.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Cursor Composer', 'Antigravity IDE', 'VS Code', 'Zcode'].map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                      <SiGooglegemini size={15} />
                      <span>LLM Assistants & CLIs</span>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      Mastery of <strong>GitHub Copilot, Gemini CLI, Claude 3.5 Sonnet</strong> for architectural review, edge-case generation, boilerplate elimination, and instant syntax exploration.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['GitHub Copilot', 'Gemini CLI', 'Claude 3.5', 'OpenAI APIs'].map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-sm font-semibold text-emerald-300 mb-2 flex items-center gap-2">
                      <FiLayers size={15} />
                      <span>Conversational AI API Integration</span>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      Engineered real-world applications with integrated LLM endpoints, including the <strong>Smart Medication App</strong> featuring an AI chatbot assistant for real-time prescription queries and automated patient guidance.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Chatbot APIs', 'Prompt Engineering', 'Streaming Responses', 'Context Tuning'].map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-2">
                      <FiCheckCircle size={15} />
                      <span>AI-Augmented SDLC & Testing</span>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      Synthesize unit and integration tests, perform automated code audits, diagnose obscure stack traces, and refactor legacy patterns into modern typed structures.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Automated Testing', 'Root-Cause Diagnosis', 'Code Refactoring', 'Documentation'].map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: SKILLS */}
            {activeTab === 'skills' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                {[
                  {
                    domain: 'AI-Assisted Dev & Engineering',
                    icon: FiCpu,
                    color: 'text-purple-400',
                    items: ['Cursor (Composer & Agentic)', 'Google Antigravity IDE', 'GitHub Copilot', 'Gemini CLI', 'Claude 3.5 Sonnet', 'Zcode', 'Prompt Engineering', 'Agentic Workflows', 'AI Chatbot APIs']
                  },
                  {
                    domain: 'Frontend & UI Engineering',
                    icon: SiReact,
                    color: 'text-cyan-400',
                    items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Blade (Laravel)', 'Framer Motion', 'JavaScript (ES6+)', 'Responsive Web UI']
                  },
                  {
                    domain: 'Backend & Server-Side',
                    icon: SiNodedotjs,
                    color: 'text-emerald-400',
                    items: ['Express.js', 'Elysia.js (Bun)', 'Node.js', 'PHP', 'Laravel', 'Java (Core & OOP)', 'RESTful APIs', 'JWT / Auth']
                  },
                  {
                    domain: 'Mobile App Development',
                    icon: SiFlutter,
                    color: 'text-blue-400',
                    items: ['React Native', 'Flutter', 'Expo', 'AsyncStorage', 'Cross-Platform UI', 'Mobile Navigation']
                  },
                  {
                    domain: 'Databases & Data Modeling',
                    icon: SiMongodb,
                    color: 'text-amber-400',
                    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Mongoose', 'Schema Design', 'Query Optimization']
                  },
                  {
                    domain: 'Tools & Workflows',
                    icon: SiGithub,
                    color: 'text-rose-400',
                    items: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Vite', 'npm / bun', 'Agile / Scrum', 'C (Basics)']
                  }
                ].map((cat) => {
                  const Icon = cat.icon
                  return (
                    <div key={cat.domain} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <Icon className={cat.color} size={16} />
                        <h4 className="font-semibold text-white text-xs sm:text-sm">{cat.domain}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map(item => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )}

            {/* TAB: PROJECTS & EDUCATION */}
            {activeTab === 'projects' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                    Featured Projects
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm">Smart Medication App</h4>
                        <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          AI Chatbot API Integrated
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Developed a cross-platform mobile healthcare app with dosage tracking, automated reminder schedules, and an integrated AI chatbot API to assist patients with drug info and FAQs.
                      </p>
                      <a
                        href="https://github.com/ranjith-devop/Smartmeds"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 mt-2"
                      >
                        <span>github.com/ranjith-devop/Smartmeds</span>
                        <FiExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm">Memory Management Application (Memo)</h4>
                        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          React Native
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Cross-platform personal memory and notes management app with fast local search, rich media attachments, AsyncStorage persistence, and cloud sync APIs.
                      </p>
                      <a
                        href="https://github.com/ranjith-devop/Memo"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 mt-2"
                      >
                        <span>github.com/ranjith-devop/Memo</span>
                        <FiExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm">Pattern-Based Authentication System</h4>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          React & Canvas
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Freehand gesture-drawn security credential authentication system enhancing security by avoiding plaintext credential leakage.
                      </p>
                      <a
                        href="https://patternauthsystem.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 mt-2"
                      >
                        <span>patternauthsystem.netlify.app</span>
                        <FiExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                    Education
                  </h3>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">Rohini College of Engineering and Technology</h4>
                      <p className="text-xs text-slate-400">Bachelor of Engineering (B.E.) in Computer Science and Engineering</p>
                    </div>
                    <div className="text-left sm:text-right font-mono text-xs">
                      <div className="text-cyan-400 font-semibold">2022 – 2026 Batch</div>
                      <div className="text-slate-300">CGPA: 8.06 / 10</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-4 px-6 border-t border-white/10 flex items-center justify-between bg-black/40 text-xs text-slate-400">
            <span className="font-mono">Updated October 2026 • ATS-Optimized Single Page</span>
            <a
              href="/ranjithresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              <span>View Raw PDF</span>
              <FiExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
