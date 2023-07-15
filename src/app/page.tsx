import Header from './components/header/header'
import Hero from './components/hero/hero'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import About from './components/about/about'
import Contact from './components/contact/contact'

export default function Home() {
  return (
    <main className="bg-primary_600 pb-10 font-sans text-white">
      <Header />

      <Hero />

      <Projects />

      <Skills />

      <About />

      <Contact />
    </main>
  )
}
