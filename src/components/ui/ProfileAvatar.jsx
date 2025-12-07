import React, { useState } from 'react'

const ProfileAvatar = ({ src, alt, onHoverStart, onHoverEnd }) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
        if (onHoverStart) onHoverStart()
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        if (onHoverEnd) onHoverEnd()
    }

    return (
        <div
            className="relative w-64 h-64 md:w-80 md:h-80 group perspective-1000 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>

            {/* Image Container with Earthquake Effect */}
            <div className={`relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-700 ease-out transform hover:scale-105 ${isHovered ? 'animate-earthquake' : 'animate-float'}`}>
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />

                {/* Air Wave Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none ${isHovered ? 'animate-air-wave' : 'opacity-0'}`}></div>
            </div>
        </div>
    )
}

export default ProfileAvatar
