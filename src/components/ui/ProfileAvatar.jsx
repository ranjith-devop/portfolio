import React from 'react'

const ProfileAvatar = ({ src, alt }) => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>

            {/* Image Container with Float, Scale, and Top-Down Reveal */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-700 ease-out transform hover:scale-105 animate-float">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover animate-slide-down-reveal"
                />
            </div>
        </div>
    )
}

export default ProfileAvatar
