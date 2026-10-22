import React from 'react'
import Hero from './Hero'
import AboutBento from './AboutBento'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <main className="w-full relative z-10">
      <Hero />
      <AboutBento />
      <Projects />
      <Contact />
    </main>
  )
}
