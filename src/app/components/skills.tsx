'use client'

import { useState } from 'react'
import Image from 'next/image'

import frontendSkills from '../utils/frontend.json'
import backendSkills from '../utils/backend.json'
import mobileSkills from '../utils/mobile.json'
import cssIcon from '../assets/skills/css3.svg'
import expoIcon from '../assets/skills/expo.svg'
import fastifyIcon from '../assets/skills/fastify.svg'
import htmlIcon from '../assets/skills/html5.svg'
import jestIcon from '../assets/skills/jest.svg'
import jsIcon from '../assets/skills/js.svg'
import nextIcon from '../assets/skills/next.svg'
import nodeIcon from '../assets/skills/node.svg'
import prismaIcon from '../assets/skills/prisma.svg'
import reactIcon from '../assets/skills/react.svg'
import reduxIcon from '../assets/skills/redux.svg'
import restApiIcon from '../assets/skills/restapi.svg'
import scssIcon from '../assets/skills/scss.svg'
import tailwindIcon from '../assets/skills/tailwind.svg'
import typescriptIcon from '../assets/skills/typescript.svg'
import uiuxIcon from '../assets/skills/uiux.svg'
import Skill from './skills/skill'

const Skills = () => {
  const [skillTab, setSkillTab] = useState(1)

  const toggleTab = (tabIndex: number) => {
    setSkillTab(tabIndex)
  }

  return (
    <section
      id="skills"
      className="flex min-h-screen scroll-mt-14 flex-col items-center bg-gradient-to-t from-primary_600 from-[98%] to-secondary_200 to-100%"
    >
      <h2 className="py-14 text-5xl font-normal after:absolute after:left-1/2 after:z-30 after:h-1 after:w-7 after:-translate-x-1/2 after:translate-y-16 after:rounded-xl after:bg-accent_400 after:content-['']">
        Professional Skills
      </h2>
      <div className="mb-10 flex h-28 w-3/5 flex-row overflow-hidden rounded-3xl bg-primary_600 text-4xl shadow-skillsMenuShadow ">
        <button
          className={
            skillTab === 1
              ? 'h-full w-1/3 rounded-3xl bg-gradient-to-r from-skillsGradientStart to-skillsGradientEnd leading-[112px] tracking-wider text-accent_400 transition duration-500 ease-linear'
              : 'h-full w-1/3 leading-[112px] tracking-wider transition duration-500 ease-linear'
          }
          onClick={() => toggleTab(1)}
        >
          Frontend
        </button>
        <button
          className={
            skillTab === 2
              ? 'h-full w-1/3 rounded-3xl bg-gradient-to-r from-skillsGradientStart to-skillsGradientEnd leading-[112px] tracking-wider text-accent_400 transition duration-500 ease-linear'
              : 'h-full w-1/3 leading-[112px] tracking-wider'
          }
          onClick={() => toggleTab(2)}
        >
          Backend
        </button>
        <button
          className={
            skillTab === 3
              ? 'h-full w-1/3 rounded-3xl bg-gradient-to-r from-skillsGradientStart to-skillsGradientEnd leading-[112px] tracking-wider text-accent_400 transition duration-500 ease-linear'
              : 'h-full w-1/3 leading-[112px] tracking-wider'
          }
          onClick={() => toggleTab(3)}
        >
          Mobile
        </button>
      </div>

      <div className="mt-5 flex h-[450px] w-3/5 flex-row px-[3%] font-alt tracking-widest">
        <ul
          id="frontendTechs"
          className={
            skillTab === 1
              ? 'grid w-full animate-fadeIn auto-rows-min grid-cols-2 gap-14 opacity-100'
              : 'hidden opacity-0'
          }
        >
          {frontendSkills.map((item) => (
            <Skill key={item.id} {...item} />
          ))}
        </ul>

        <ul
          id="backendTechs"
          className={
            skillTab === 2
              ? 'grid w-full animate-fadeIn auto-rows-min grid-cols-2 gap-14 opacity-100'
              : 'hidden opacity-0'
          }
        >
          {backendSkills.map((item) => {
            return <Skill key={item.id} {...item} />
          })}
        </ul>

        <ul
          id="mobileTechs"
          className={
            skillTab === 3
              ? 'grid w-full animate-fadeIn auto-rows-min grid-cols-2 gap-14 opacity-100'
              : 'hidden opacity-0'
          }
        >
          {mobileSkills.map((item) => {
            return <Skill key={item.id} {...item} />
          })}
        </ul>
      </div>
      <div className="mt-2 flex w-4/6 flex-row flex-wrap justify-center gap-5">
        <Image
          className={`${skillTab === 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={reactIcon}
          alt="React Icon"
        />
        <Image
          className={`${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={reduxIcon}
          alt="Redux Icon"
        />
        <Image
          className={`${skillTab === 0 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={typescriptIcon}
          alt="Typescript Icon"
        />
        <Image
          className={`${skillTab === 0 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={jsIcon}
          alt="Javascript Icon"
        />
        <Image
          className={`${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={htmlIcon}
          alt="HTML5 Icon"
        />
        <Image
          className={`${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={cssIcon}
          alt="CSS3 Icon"
        />
        <Image
          className={`${skillTab === 2 ? 'h-7 opacity-20 grayscale' : 'h-7'}`}
          src={tailwindIcon}
          alt="TailwindCSS Icon"
        />
        <Image
          className={`${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={scssIcon}
          alt="SCSS Icon"
        />
        <Image
          className={`${skillTab !== 1 ? 'h-10 opacity-20' : 'h-10'}`}
          src={nextIcon}
          alt="Next Icon"
        />
        <Image
          className={`${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={nodeIcon}
          alt="Node Icon"
        />
        <Image
          className={`${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={prismaIcon}
          alt="Prsima Database Icon"
        />
        <Image
          className={`${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={jestIcon}
          alt="Jest Icon"
        />
        <Image
          className={`${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={fastifyIcon}
          alt="Fastify Icon"
        />
        <Image
          className={`${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={restApiIcon}
          alt="RestAPI Icon"
        />
        <Image
          className={`${skillTab !== 3 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={expoIcon}
          alt="Expo Icon"
        />
        <Image
          className={`${skillTab === 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}`}
          src={uiuxIcon}
          alt="UI/UX Icon"
        />
      </div>

      <p className="mt-5 font-alt tracking-wider after:absolute after:left-1/2 after:h-1 after:w-4/5 after:-translate-x-1/2 after:translate-y-20 after:rounded-full after:bg-primary_400 after:content-['']">
        The values above describes how confident I fell about each one of this
        technologies.
      </p>
    </section>
  )
}

export default Skills
