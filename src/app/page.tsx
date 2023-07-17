'use client'

import { useEffect, useState } from 'react'

import Header from './components/header/header'
import Hero from './components/hero/hero'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import About from './components/about/about'
import Contact from './components/contact/contact'

export default function Home() {
  const [yOffSet, setYOffSet] = useState(0)

  const handleScroll = () => {
    setYOffSet(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <main className="bg-primary_600 pb-10 font-sans text-white">
      <Header yOffSet={yOffSet} />

      <Hero />

      <Projects />

      <Skills />

      <About />

      <Contact />
    </main>
  )
}
