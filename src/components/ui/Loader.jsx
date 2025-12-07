import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500) // Simulate load time
        return () => clearTimeout(timer)
    }, [])

    if (!loading) return null

    return (
        <div className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center transition-opacity duration-1000" style={{ opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none' }}>

            {/* Glowing Ring */}
            <div className="relative w-32 h-32 mb-12">
                <div className="absolute inset-0 border-4 border-neon-blue/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 border-t-4 border-neon-blue rounded-full animate-spin shadow-[0_0_20px_#00f3ff]"></div>
            </div>

            {/* Newton's Cradle */}
            <div className="flex gap-1 items-center justify-center h-20">
                <div className="w-4 h-4 bg-white rounded-full animate-cradle-left shadow-[0_0_10px_white]"></div>
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                <div className="w-4 h-4 bg-white rounded-full animate-cradle-right shadow-[0_0_10px_white]"></div>
            </div>

            <div className="mt-8 text-neon-blue font-mono text-sm tracking-[0.5em] animate-pulse">
                INITIALIZING
            </div>
        </div>
    )
}

export default Loader
