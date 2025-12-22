import React from 'react'
import Header from './components/dom/Header'
import Home from './components/dom/Home'
import Cursor from './components/ui/Cursor'
import Loader from './components/ui/Loader'

function App() {
  return (
    <>
      <Cursor />
      <Loader />

      <div className="relative z-10 bg-black min-h-screen text-white overflow-hidden selection:bg-neon-pink selection:text-white">
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App
