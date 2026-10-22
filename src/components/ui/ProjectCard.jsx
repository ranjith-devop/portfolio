import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const isGithubOnly = project.url?.includes('github.com')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group rounded-2xl glass-panel-interactive flex flex-col justify-between overflow-hidden relative border border-white/10 hover:border-cyan-500/40"
    >
      {/* Top Banner Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Soft gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-black/20" />

        {/* Category Pill */}
        {project.category && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono font-medium text-cyan-300">
            {project.category}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors shrink-0"
              >
                <FiArrowUpRight size={18} />
              </a>
            )}
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            {isGithubOnly ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 transition-colors"
              >
                <FiGithub size={14} />
                <span>View Repository</span>
              </a>
            ) : (
              <>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-colors"
                >
                  <FiExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <FiGithub size={14} />
                    <span>Code</span>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
