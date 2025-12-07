import React from 'react'

const ProjectCard = ({ project, index }) => {
    return (
        <div
            className="group relative bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            {/* Image Container */}
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content */}
            <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-neon-blue border border-neon-blue/20 bg-neon-blue/5 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
        </div>
    )
}

export default ProjectCard
