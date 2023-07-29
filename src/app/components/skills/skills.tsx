'use client'

import { useState } from 'react'

import frontendSkills from '../../utils/frontend.json'
import backendSkills from '../../utils/backend.json'
import mobileSkills from '../../utils/mobile.json'

import Skill from './skill'
import SkillIcons from './skillIcons'

const Skills = () => {
  const [skillTab, setSkillTab] = useState(1)
  const [skillHover, setSkillHover] = useState<number>(0)

  const handleHover = (newValue: number) => {
    setSkillHover(newValue)
  }

  const toggleTab = (tabIndex: number) => {
    setSkillTab(tabIndex)
  }

  return (
    <section
      id="skills"
      className="flex scroll-mt-14 flex-col items-center bg-gradient-to-t from-primary_600 from-[98%] to-secondary_200 to-100% pb-20"
    >
      <h2 className="py-16 text-3xl font-normal after:absolute after:left-1/2 after:z-30 after:h-1 after:w-7 after:-translate-x-1/2 after:translate-y-16 after:rounded-xl after:bg-accent_400 after:content-[''] md:text-4xl">
        Professional Skills
      </h2>

      {/* *********************************** SKILL AREA *********************************** */}
      <div className="mb-6 flex h-20 w-11/12 max-w-5xl flex-row items-center overflow-hidden rounded-3xl bg-primary_600 text-xl font-light shadow-skillsMenuShadow md:text-3xl">
        <button
          className={
            skillTab === 1
              ? 'h-full flex-1 rounded-3xl bg-gradient-to-r from-skillsGradientStart to-skillsGradientEnd tracking-wider text-accent_400 transition duration-500 ease-linear'
              : 'h-full flex-1 tracking-wider transition duration-500 ease-linear'
          }
          onClick={() => toggleTab(1)}
        >
          Frontend
        </button>
        <button
          className={
            skillTab === 2
              ? 'h-full flex-1 rounded-3xl bg-gradient-to-r from-skillsGradientStart to-skillsGradientEnd tracking-wider text-accent_400 transition duration-500 ease-linear'
              : 'h-full flex-1 tracking-wider'
          }
          onClick={() => toggleTab(2)}
        >
          Backend
        </button>
        <button
          className={
            skillTab === 3
              ? 'h-full flex-1 rounded-3xl bg-gradient-to-r from-skillsGradientStart to-skillsGradientEnd tracking-wider text-accent_400 transition duration-500 ease-linear'
              : 'h-full flex-1 tracking-wider'
          }
          onClick={() => toggleTab(3)}
        >
          Mobile
        </button>
      </div>

      {/* *********************************** SKILLS PROGRESS BAR *********************************** */}
      <div className="mt-5 min-h-[360px] w-10/12 max-w-5xl font-alt tracking-widest">
        <ul
          id="frontendTechs"
          className={
            skillTab === 1
              ? 'grid w-full animate-fadeIn auto-rows-min grid-cols-1 gap-6 opacity-100 md:grid-cols-2'
              : 'hidden opacity-0'
          }
        >
          {frontendSkills.map((item) => (
            <Skill key={item.id} {...item} handleHover={handleHover} />
          ))}
        </ul>

        <ul
          id="backendTechs"
          className={
            skillTab === 2
              ? 'grid w-full animate-fadeIn auto-rows-min grid-cols-1 gap-6 opacity-100 md:grid-cols-2'
              : 'hidden opacity-0'
          }
        >
          {backendSkills.map((item) => {
            return <Skill key={item.id} {...item} handleHover={handleHover} />
          })}
        </ul>

        <ul
          id="mobileTechs"
          className={
            skillTab === 3
              ? 'grid w-full animate-fadeIn auto-rows-min grid-cols-1 gap-6 opacity-100 md:grid-cols-2'
              : 'hidden opacity-0'
          }
        >
          {mobileSkills.map((item) => {
            return <Skill key={item.id} {...item} handleHover={handleHover} />
          })}
        </ul>
      </div>

      {/* *********************************** SKILLS ICONS *********************************** */}
      <SkillIcons skillHover={skillHover} skillTab={skillTab} />

      <p className="mt-5 px-5 text-justify font-alt tracking-wider after:absolute after:left-1/2 after:h-1 after:w-4/5 after:-translate-x-1/2 after:translate-y-20 after:rounded-full after:bg-primary_400 after:content-['']">
        The values above describes how confident I fell about each one of this
        technologies.
      </p>
    </section>
  )
}

export default Skills
