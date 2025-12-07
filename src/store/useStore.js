import { create } from 'zustand'

const useStore = create((set) => ({
    // Accessibility
    reducedMotion: false,
    setReducedMotion: (value) => set({ reducedMotion: value }),

    // Navigation / Scroll
    scrollProgress: 0,
    setScrollProgress: (progress) => set({ scrollProgress: progress }),

    // Project Interaction
    activeProject: null,
    setActiveProject: (project) => set({ activeProject: project }),

    // Theme (optional, but good for neon toggle)
    theme: 'neon-blue',
    setTheme: (theme) => set({ theme: theme }),
}))

export default useStore
