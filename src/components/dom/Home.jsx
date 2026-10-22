import React from 'react'
import Hero from './Hero'
import AboutBento from './AboutBento'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

export default function Home({ onOpenResume }) {
  return (
    <main className="w-full relative z-10">
      <Hero onOpenResume={onOpenResume} />
      <AboutBento onOpenResume={onOpenResume} />
      <Experience onOpenResume={onOpenResume} />
      <Projects />
      <Contact />
    </main>
  )
}
