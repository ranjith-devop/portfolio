import React from 'react'
import Navbar from './components/dom/Navbar'
import Home from './components/dom/Home'
import Cursor from './components/ui/Cursor'
import Loader from './components/ui/Loader'

function App() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      <Cursor />
      <Loader />
      <Navbar />

      {/* Subtle global background grid and atmospheric light */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />

      <Home />
    </div>
  )
}

export default App
