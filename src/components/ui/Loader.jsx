import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 450)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-[#08090d] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping opacity-30" />
            <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin" />
            <span className="absolute text-xs font-mono font-bold text-white tracking-widest">RS</span>
          </div>

          <div className="mt-6 text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase animate-pulse">
            INITIALIZING
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
