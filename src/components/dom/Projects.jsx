import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFolder, FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectCard from '../ui/ProjectCard'

import authImage from '../../assets/auth.png'
import smartmedImage from '../../assets/smartmed.jpg'
import memoImage from '../../assets/memo.webp'

const ALL_PROJECTS = [
  {
    id: 'pattern-auth',
    title: 'Pattern Based Auth System',
    category: 'Web Application',
    type: 'web',
    description: 'A visual freehand pattern authentication system that enhances security by using drawn gestures as credentials rather than standard plaintext passwords.',
    image: authImage,
    tech: ['React.js', 'Material UI', 'Canvas API', 'State Management'],
    url: 'https://patternauthsystem.netlify.app',
    githubUrl: 'https://github.com/ranjith-devop'
  },
  {
    id: 'smart-meds',
    title: 'Smart Meds',
    category: 'Fullstack Mobile App',
    type: 'mobile',
    description: 'Healthcare & medication management app enabling real-time prescription tracking, reminder schedules, and secure doctor-to-patient communication.',
    image: smartmedImage,
    tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB', 'OAuth'],
    url: 'https://github.com/ranjith-devop/Smartmeds.git',
    githubUrl: 'https://github.com/ranjith-devop/Smartmeds.git'
  },
  {
    id: 'memo-app',
    title: 'Memo — Personal Memory App',
    category: 'Mobile Application',
    type: 'mobile',
    description: 'A personal memory and note management utility featuring rich media entries, quick search, local persistence, and cloud synchronization.',
    image: memoImage,
    tech: ['React Native', 'Expo', 'Express.js', 'Node.js', 'AsyncStorage'],
    url: 'https://github.com/ranjith-devop/Memo.git',
    githubUrl: 'https://github.com/ranjith-devop/Memo.git'
  }
]

const TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile (React Native)' }
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return ALL_PROJECTS
    return ALL_PROJECTS.filter((p) => p.type === activeTab)
  }, [activeTab])

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative max-w-6xl mx-auto">
      {/* Background ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FiFolder size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Featured <span className="aurora-text">Creations.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            A selection of fullstack web architectures and mobile applications built with modern tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 self-start md:self-auto">
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="projectTab"
                    className="absolute inset-0 bg-white/10 rounded-lg border border-white/15"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Callout Footer */}
      <div className="mt-14 p-6 rounded-2xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
        <div>
          <h4 className="text-white font-semibold text-base mb-1">Looking for more code?</h4>
          <p className="text-slate-400 text-sm">
            Check out my GitHub repositories for prototypes, experimental repos, and daily commits.
          </p>
        </div>
        <a
          href="https://github.com/ranjith-devop"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-cyan-400/40 transition-all shrink-0"
        >
          <FiGithub size={16} />
          <span>Explore GitHub Profile</span>
        </a>
      </div>
    </section>
  )
}
