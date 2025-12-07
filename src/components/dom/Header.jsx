import React from 'react'
import useStore from '../../store/useStore'

const Header = () => {
    const reducedMotion = useStore((state) => state.reducedMotion)
    const setReducedMotion = useStore((state) => state.setReducedMotion)

    return (
        <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center pointer-events-auto z-50">
            <div className="text-neon-blue font-bold text-xl tracking-widest uppercase">
                RANJITH
            </div>

            <nav className="flex gap-6 items-center">
                

                <a href="#projects" className="text-white hover:text-neon-blue transition-colors">Projects</a>
                <a href="#about" className="text-white hover:text-neon-purple transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-neon-pink transition-colors">Contact</a>
            </nav>
        </header>
    )
}

export default Header
