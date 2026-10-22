import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiCheckCircle, 
  FiCpu, 
  FiTerminal, 
  FiArrowUpRight,
  FiZap
} from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiLaravel, SiMysql, SiTailwindcss } from 'react-icons/si'

const EXPERIENCES = [
  {
    company: 'Edmond Remedies',
    role: 'Software Developer L1',
    period: 'Oct 2025 – Oct 2026',
    duration: '1 Year Full-Time',
    location: 'India',
    type: 'Full-Time',
    featured: true,
    aiBadge: 'AI-Accelerated Engineering',
    summary: 'Led the development, maintenance, and performance tuning of scalable application features, working across frontend, backend, and relational/NoSQL databases with modern AI-augmented workflows.',
    points: [
      {
        title: 'Feature Development & Engineering',
        desc: 'Contributed to end-to-end design, implementation, and maintenance of application features supporting production requirements and clean code conventions.'
      },
      {
        title: 'AI-Assisted Delivery Workflows',
        highlight: true,
        desc: 'Actively harnessed AI-assisted development environments (Cursor Composer, Google Antigravity IDE, GitHub Copilot) for rapid feature prototyping, automated test suite generation, and context-aware refactoring.'
      },
      {
        title: 'Debugging & System Optimization',
        desc: 'Diagnosed complex application issues, identified bottleneck queries, and executed performance improvements to maximize system reliability and user response times.'
      },
      {
        title: 'API Orchestration & Data Integration',
        desc: 'Integrated RESTful APIs and handled data contracts between decoupled components to ensure seamless state flow and error-tolerant operations.'
      },
      {
        title: 'Database Architecture & Operations',
        desc: 'Managed data retrieval, schema updates, and query optimization across MySQL and MongoDB to support critical application workflows.'
      },
      {
        title: 'Agile & Version Control Practices',
        desc: 'Collaborated in Agile sprints, peer code reviews, continuous iteration, and strict Git version-control workflows.'
      }
    ],
    tech: ['React.js', 'Express.js', 'Laravel', 'PHP', 'MySQL', 'MongoDB', 'Cursor', 'Antigravity IDE', 'GitHub Copilot', 'Git']
  },
  {
    company: 'AK Infopark',
    role: 'Full-Stack Development Intern',
    period: '15-Day Onsite Internship',
    duration: 'Onsite Internship',
    location: 'India',
    type: 'Internship',
    featured: false,
    summary: 'Intensive onsite internship focused on modern full-stack web architectures, component lifecycle management, and server-side API integration.',
    points: [
      {
        title: 'Full-Stack Web Engineering',
        desc: 'Gained practical exposure to full-stack web application development utilizing React.js, Express.js, and MongoDB.'
      },
      {
        title: 'Component-Based UI Architecture',
        desc: 'Learned fundamentals of frontend development and component-based UI implementation using React.js and modern CSS.'
      },
      {
        title: 'Backend Logic & RESTful APIs',
        desc: 'Explored backend development concepts, including server-side routing, controller logic, and API handling with Express.js.'
      },
      {
        title: 'NoSQL Data Modeling',
        desc: 'Gained hands-on understanding of NoSQL database concepts and collection-based data management using MongoDB.'
      }
    ],
    tech: ['React.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript (ES6+)']
  }
]

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-gradient-to-l from-cyan-500/5 via-purple-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FiBriefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Professional <span className="aurora-text">Experience.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            1 year of hands-on software engineering delivering reliable features, API ecosystems, and AI-accelerated workflows.
          </p>
        </div>

        {/* Action Button: View Full Resume */}
        {onOpenResume && (
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-cyan-300 border border-cyan-500/30 transition-all self-start md:self-auto hover:scale-[1.02]"
          >
            <FiZap size={15} className="text-cyan-400" />
            <span>Open Complete CV & AI Matrix</span>
          </button>
        )}
      </div>

      {/* Timeline Cards */}
      <div className="space-y-8 relative z-10">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`rounded-2xl glass-panel p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${
              exp.featured 
                ? 'border-cyan-500/30 hover:border-cyan-500/50 shadow-[0_10px_40px_rgba(6,182,212,0.06)]' 
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            {/* Top Accent Gradient for Featured */}
            {exp.featured && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500" />
            )}

            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="text-cyan-400 text-sm font-semibold">
                    / {exp.role}
                  </span>
                  {exp.aiBadge && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      <FiCpu size={12} />
                      <span>{exp.aiBadge}</span>
                    </span>
                  )}
                </div>
                <p className="text-slate-300 text-sm max-w-2xl font-light">
                  {exp.summary}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-1.5 shrink-0 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 flex items-center gap-1.5">
                  <FiCalendar size={13} className="text-cyan-400" />
                  <span>{exp.period}</span>
                </span>
                <span className="text-slate-400">
                  {exp.duration}
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {exp.points.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-3.5 rounded-xl transition-colors ${
                    pt.highlight 
                      ? 'bg-purple-950/20 border border-purple-500/25' 
                      : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className={`mt-0.5 shrink-0 ${pt.highlight ? 'text-purple-400' : 'text-cyan-400'}`}>
                      <FiCheckCircle size={15} />
                    </span>
                    <div>
                      <h4 className={`text-xs font-semibold mb-1 ${pt.highlight ? 'text-purple-300' : 'text-white'}`}>
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mr-2">
                Technologies:
              </span>
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:text-white transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
