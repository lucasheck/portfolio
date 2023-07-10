'use client'
import Image from 'next/image'
import ProfilePic from './assets/profile-90-90.png'
import Hand from './assets/hand-waving.svg'
import Linkedin from './assets/linkedin.svg'
import Github from './assets/github.svg'
import Resume from './assets/resume.svg'
import MonitorCrown from './assets/monitor_crown.png'
import GithubBtn from './assets/btnGithub.svg'
import LiveBtn from './assets/btnLive.svg'
import LineBtn from './assets/btnLine.svg'
import MonitorSpacetime from './assets/monitor_spacetime.png'
import { useState } from 'react'
import frontendSkills from './utils/frontend.json'
import backendSkills from './utils/backend.json'
import mobileSkills from './utils/mobile.json'
import cssIcon from './assets/skills/css3.svg'
import expoIcon from './assets/skills/expo.svg'
import fastifyIcon from './assets/skills/fastify.svg'
import htmlIcon from './assets/skills/html5.svg'
import jestIcon from './assets/skills/jest.svg'
import jsIcon from './assets/skills/js.svg'
import nextIcon from './assets/skills/next.svg'
import nodeIcon from './assets/skills/node.svg'
import prismaIcon from './assets/skills/prisma.svg'
import reactIcon from './assets/skills/react.svg'
import reduxIcon from './assets/skills/redux.svg'
import restApiIcon from './assets/skills/restapi.svg'
import scssIcon from './assets/skills/scss.svg'
import tailwindIcon from './assets/skills/tailwind.svg'
import typescriptIcon from './assets/skills/typescript.svg'
import uiuxIcon from './assets/skills/uiux.svg'
import profilePhoto from './assets/about_me_photo.jpg'
import sendMessageIcon from './assets/sendMessage.svg'
import Link from 'next/link'

export default function Home() {
  const [skillTab, setSkillTab] = useState(1)

  const toggleTab = (tabIndex: number) => {
    setSkillTab(tabIndex)
  }

  return (
    <main className="bg-primary_600 font-sans text-white">
      {/** *************************** HEADER *********************************/}

      <header className="fixed z-50 flex h-24 w-full flex-row items-center justify-between bg-gradient-to-r from-navGradientStart to-navGradientEnd px-[2.5%] py-5 text-base font-medium tracking-widest">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={ProfilePic}
            alt="Logo"
            width={60}
            height={60}
            className="transition duration-300 ease-linear hover:scale-110"
          />
          <span className="transition ease-linear hover:text-accent_400">
            <a href="#">LUCAS HECK</a>
          </span>
        </div>
        <nav>
          <ul
            className="flex flex-row items-center gap-14"
            aria-label="Website Links"
          >
            {[
              ['HOME', '#'],
              ['PROJECT', '#projects'],
              ['SKILLS', '#skills'],
              ['ABOUT', '#about'],
              ['CONTACT', '#contact'],
            ].map(([text, url]) => (
              <li
                key={text}
                className="transition ease-linear hover:text-accent_400"
              >
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/** *************************** HERO *********************************/}

      <section
        className="flex h-[984px] flex-col items-center justify-center bg-gradient-to-b from-heroGradientStart from-10% to-heroGradientEnd to-95% pt-24 "
        id="hero"
      >
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-row gap-2">
            <span>HI</span>
            <Image
              src={Hand}
              alt="hand"
              width={25}
              className="animate-wiggle"
            />
            <span>MY NAME IS</span>
          </div>
          <span className="pr-5 text-7xl font-bold -tracking-wider text-white drop-shadow-xl after:absolute after:left-0 after:top-1 after:-z-10 after:ml-0.5 after:text-gray-700 after:opacity-60 after:blur-sm after:content-['LUCAS_HECK']">
            LUCAS HECK
          </span>
          <div className="flex flex-row items-center">
            <span className="pr-5 text-6xl font-semibold -tracking-wider text-secondary_300 drop-shadow-xl after:absolute after:left-1 after:top-2 after:-z-10 after:ml-0.5 after:text-gray-700 after:opacity-60 after:blur-sm after:content-['REACT_DEVELOPER']">
              REACT DEVELOPER
            </span>
            <div className="flex flex-row gap-3">
              <Link
                href="https://linkedin.com/in/lucas-tomaz-heck"
                target="_blank"
              >
                <Image
                  src={Linkedin}
                  alt="linkedin"
                  className="cursor-pointer rounded-lg border border-white bg-white transition ease-linear hover:-translate-y-1 hover:translate-x-1 hover:bg-yellow-300"
                />
              </Link>
              <Link href="https://github.com/lucasheck" target="_blank">
                <Image
                  src={Github}
                  alt="github"
                  className="cursor-pointer rounded-full border border-white bg-white transition ease-linear hover:-translate-y-1 hover:translate-x-1 hover:bg-yellow-300"
                />
              </Link>
              <Image
                src={Resume}
                alt="resume"
                className="cursor-pointer rounded-lg rounded-tl-2xl border border-white bg-white transition ease-linear hover:-translate-y-1 hover:translate-x-1 hover:bg-yellow-300"
              />
            </div>
          </div>
          <p className="text-right text-base">
            I have 34 years old, I&#039;m a developer with 7 years of experience
            <br />
            working as fullstack developer
          </p>
        </div>
      </section>

      {/** *************************** WORKS *********************************/}

      <section
        id="projects"
        className="flex h-auto scroll-mt-20 flex-col items-center bg-gradient-to-t from-secondary_200 from-[99%] to-heroGradientEnd to-100% pb-10 text-primary_600"
      >
        <h2 className="pt-14 text-5xl font-medium after:absolute after:left-1/2 after:z-30 after:h-1 after:w-7 after:-translate-x-1/2 after:translate-y-16 after:rounded-xl after:bg-accent_400 after:content-['']">
          Recent Works
        </h2>
        <div
          id="card-list"
          className="mt-14 flex h-full w-full flex-row justify-evenly"
        >
          <div className="flex w-2/5 flex-col items-center rounded-2xl bg-white px-[5%] py-10 shadow-cardShadow">
            <h3 className="pb-2 text-4xl">CROWN-CLOTHING</h3>
            <h4 className="whitespace-pre-line text-center">
              Experience seamless online shopping with our
              <br />
              captivating e-commerce clothing platform.
            </h4>
            <div id="image" className="pb-10 pt-6">
              <Image
                src={MonitorCrown}
                alt="Preview Card Image"
                className="-translate-x-4"
              />
            </div>

            <div id="card-buttons" className="flex w-4/5 justify-evenly pb-6">
              <Link
                href="https://github.com/lucasheck/crown-clothing"
                target="_blank"
                className="flex h-[50px] w-36 items-center justify-evenly rounded-[25px] bg-accent_400 px-2 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
              >
                <Image src={GithubBtn} alt="Github Button Image" height={30} />
                <Image
                  src={LineBtn}
                  alt="Github Button Image"
                  className="h-8"
                />
                github
              </Link>

              <Link
                href="https://master--boisterous-pika-b91b7d.netlify.app/"
                className="flex h-[50px] w-40 items-center justify-evenly rounded-[25px] bg-accent_400 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
                target="_blank"
              >
                <Image src={LiveBtn} alt="Github Button Image" height={30} />
                <Image
                  src={LineBtn}
                  alt="Github Button Image"
                  className="h-8"
                />
                live demo
              </Link>
            </div>

            <div className="mt-5 flex flex-col items-center gap-3">
              <p className="text-justify">
                Description: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Perferendis consequatur quos veritatis quia saepe modi,
                harum rerum vero nesciunt assumenda itaque, ipsum accusantium
                possimus ex nulla sint. Inventore, facilis tenetur. Techs Used:
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in justo id quam laoreet vulputate vitae sed diam.
              </p>
              <button className="drop-shadow-textShadow">+ more info</button>
            </div>
          </div>

          <div className="flex w-2/5 flex-col items-center rounded-2xl bg-white px-[5%] py-10 shadow-cardShadow">
            <h3 className="pb-2 text-4xl">SPACETIME</h3>
            <h4 className="whitespace-pre-line text-center">
              Collect memorable moments from your journey <br />
              and share (if you want) with the world!
            </h4>
            <div id="image" className="pb-10 pt-6">
              <Image
                src={MonitorSpacetime}
                alt="Preview Card Image"
                className="-translate-x-4"
              />
            </div>

            <div id="card-buttons" className="flex w-4/5 justify-evenly pb-6">
              <Link
                className="flex h-[50px] w-36 items-center justify-evenly rounded-[25px] bg-accent_400 px-2 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
                href="https://github.com/lucasheck/spacetime_web"
                target="_blank"
              >
                <Image src={GithubBtn} alt="Github Button Image" height={30} />
                <Image
                  src={LineBtn}
                  alt="Github Button Image"
                  className="h-8"
                />
                github
              </Link>

              <Link
                id="btnLive"
                className="flex h-[50px] w-40 items-center justify-evenly rounded-[25px] bg-accent_400 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
                href="https://www.linkedin.com/posts/lucas-tomaz-heck_nlw-rocketseat-neverstoplearning-activity-7073977255110033409-xA4k"
                target="_blank"
              >
                <Image src={LiveBtn} alt="Github Button Image" height={30} />
                <Image
                  src={LineBtn}
                  alt="Github Button Image"
                  className="h-8"
                />
                video demo
              </Link>
            </div>

            <div className="mt-5 flex flex-col items-center gap-3">
              <p className="text-justify">
                Description: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Perferendis consequatur quos veritatis quia saepe modi,
                harum rerum vero nesciunt assumenda itaque, ipsum accusantium
                possimus ex nulla sint. Inventore, facilis tenetur. Techs Used:
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in justo id quam laoreet vulputate vitae sed diam.
              </p>
              <button className="drop-shadow-textShadow">+ more info</button>
            </div>
          </div>
        </div>
      </section>

      {/** *************************** SKILLS *********************************/}

      <section
        id="skills"
        className="flex h-[100vh] scroll-mt-16 flex-col items-center bg-gradient-to-t from-primary_600 from-[98%] to-secondary_200 to-100%"
      >
        <h2 className="py-14 text-5xl font-medium after:absolute after:left-1/2 after:z-30 after:h-1 after:w-7 after:-translate-x-1/2 after:translate-y-16 after:rounded-xl after:bg-accent_400 after:content-['']">
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
              <li key={item.id} className="relative h-10 w-full">
                <div className="flex">
                  <span className="-translate-y-3">{item.name}</span>
                  <span
                    style={{ left: `${item.percentage - 2}%`, bottom: '5px' }}
                    className="absolute -translate-y-3"
                  >
                    {item.percentage}%
                  </span>
                </div>
                <div
                  style={{ width: `${item.percentage}%` }}
                  className="absolute bottom-1 left-1 z-10 h-2 rounded-md bg-gradient-to-r from-skillBarActiveGradientStart from-10% to-skillBarActiveGradientEnd to-65%"
                ></div>
                <div className="absolute bottom-0 z-0 h-4 w-full rounded-md bg-gradient-to-t from-skillBarGradientStart to-skillBarGradientEnd"></div>
              </li>
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
              return (
                <li key={item.id} className="relative h-10 w-full">
                  <div className="flex">
                    <span className="-translate-y-3">{item.name}</span>
                    <span
                      style={{ left: `${item.percentage - 2}%`, bottom: '5px' }}
                      className="absolute -translate-y-3"
                    >
                      {item.percentage}%
                    </span>
                  </div>
                  <div
                    style={{ width: `${item.percentage}%` }}
                    className="absolute bottom-1 left-1 z-10 h-2 rounded-md bg-gradient-to-r from-skillBarActiveGradientStart from-10% to-skillBarActiveGradientEnd to-65%"
                  ></div>
                  <div className="absolute bottom-0 z-0 h-4 w-full rounded-md bg-gradient-to-t from-skillBarGradientStart to-skillBarGradientEnd"></div>
                </li>
              )
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
              return (
                <li key={item.id} className="relative h-10 w-full">
                  <div className="flex">
                    <span className="-translate-y-3">{item.name}</span>
                    <span
                      style={{ left: `${item.percentage - 2}%`, bottom: '5px' }}
                      className="absolute -translate-y-3"
                    >
                      {item.percentage}%
                    </span>
                  </div>
                  <div
                    style={{ width: `${item.percentage}%` }}
                    className="absolute bottom-1 left-1 z-10 h-2 rounded-md bg-gradient-to-r from-skillBarActiveGradientStart from-10% to-skillBarActiveGradientEnd to-65%"
                  ></div>
                  <div className="absolute bottom-0 z-0 h-4 w-full rounded-md bg-gradient-to-t from-skillBarGradientStart to-skillBarGradientEnd"></div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-2 flex h-20 w-[55%] flex-row justify-center gap-5">
          <Image
            height={40}
            className={`${skillTab === 2 ? 'opacity-20 grayscale' : ''}`}
            src={reactIcon}
            alt="React Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 1 ? 'opacity-20 grayscale' : ''}`}
            src={reduxIcon}
            alt="Redux Icon"
          />
          <Image
            height={40}
            className={`${skillTab === 0 ? 'opacity-20 grayscale' : ''}`}
            src={typescriptIcon}
            alt="Typescript Icon"
          />
          <Image
            height={40}
            className={`${skillTab === 0 ? 'opacity-20 grayscale' : ''}`}
            src={jsIcon}
            alt="Javascript Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 1 ? 'opacity-20 grayscale' : ''}`}
            src={htmlIcon}
            alt="HTML5 Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 1 ? 'opacity-20 grayscale' : ''}`}
            src={cssIcon}
            alt="CSS3 Icon"
          />
          <Image
            height={30}
            className={`${skillTab === 2 ? 'opacity-20 grayscale' : ''}`}
            src={tailwindIcon}
            alt="TailwindCSS Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 1 ? 'opacity-20 grayscale' : ''}`}
            src={scssIcon}
            alt="SCSS Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 1 ? 'opacity-20' : ''}`}
            src={nextIcon}
            alt="Next Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 2 ? 'opacity-20 grayscale' : ''}`}
            src={nodeIcon}
            alt="Node Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 2 ? 'opacity-20 grayscale' : ''}`}
            src={prismaIcon}
            alt="Prsima Database Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 2 ? 'opacity-20 grayscale' : ''}`}
            src={jestIcon}
            alt="Jest Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 2 ? 'opacity-20 grayscale' : ''}`}
            src={fastifyIcon}
            alt="Fastify Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 2 ? 'opacity-20 grayscale' : ''}`}
            src={restApiIcon}
            alt="RestAPI Icon"
          />
          <Image
            height={40}
            className={`${skillTab !== 3 ? 'opacity-20 grayscale' : ''}`}
            src={expoIcon}
            alt="Expo Icon"
          />
          <Image
            height={40}
            className={`${skillTab === 2 ? 'opacity-20 grayscale' : ''}`}
            src={uiuxIcon}
            alt="UI/UX Icon"
          />
        </div>

        <p className="mt-5 font-alt tracking-wider after:absolute after:left-1/2 after:h-1 after:w-4/5 after:-translate-x-1/2 after:translate-y-20 after:rounded-full after:bg-primary_400 after:content-['']">
          The values above describes how confident I fell about each one of this
          technologies.
        </p>
      </section>

      {/** *************************** ABOUT *********************************/}

      <section
        id="about"
        className="mt-20 flex h-[70vh] scroll-mt-52 justify-center"
      >
        <div className="mt-10 flex h-full w-3/5 flex-row gap-40">
          <Image
            src={profilePhoto}
            className="max-h-[500px] w-auto rounded-md shadow-aboutPhotoShadow"
            alt="About me photo"
          ></Image>
          <div className="flex flex-col items-center gap-20">
            <h2 className="pt-10 text-5xl after:absolute after:z-30 after:h-1 after:w-7 after:-translate-x-32 after:translate-y-20 after:rounded-xl after:bg-accent_400 after:content-['']">
              About me
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis consequatur quos veritatis quia saepe modi, harum
              rerum vero nesciunt assumenda itaque, ipsum accusantium possimus
              ex nulla sint. Inventore, facilis tenetur. Numquam incidunt, sed
              odit fuga nostrum dolorem eum, nam, quia laudantium perspiciatis
              in eveniet laborum quas. Temporibus a molestiae necessitatibus
              sapiente voluptas aut obcaecati quaerat at, omnis, facere incidunt
              similique! <br />
              <br />
              Repudiandae vitae adipisci laudantium dicta vel sint dolorem
              provident totam repellendus omnis pariatur, exercitationem,
              cupiditate maiores magnam praesentium facere veritatis quas
              recusandae esse reiciendis commodi? Vel ea libero officia
              architecto!
            </p>
          </div>
        </div>
      </section>

      {/** *************************** CONTACT *********************************/}

      <section id="contact" className="flex h-[60vh] w-full justify-center">
        <div className="flex w-1/2 flex-col items-center gap-14">
          <h2
            className="text-7xl font-semibold -tracking-wider 
          before:absolute before:left-0 before:h-1 before:w-1/5 before:translate-x-1/2 before:translate-y-10 before:rounded-full before:bg-primary_400 before:content-['']
          after:absolute after:right-0 after:h-1 after:w-1/5 after:-translate-x-1/2 after:translate-y-10 after:rounded-full after:bg-primary_400 after:content-['']"
          >
            Let&#39;s talk?
          </h2>
          <form className="flex w-full flex-col items-center justify-center">
            <div className="grid-col-2 grid w-4/5 gap-4">
              <input
                type="text"
                className="h-10 rounded pl-4 text-primary_400 shadow-inputShadow"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="h-10 rounded pl-4 text-primary_400 shadow-inputShadow"
                placeholder="Your Email"
              />
              <textarea
                className="col-span-2 h-40 resize-none rounded p-4 text-primary_400 shadow-inputShadow"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <div className="mt-10 flex w-full justify-center after:absolute after:h-1 after:w-4/5 after:translate-y-24 after:bg-primary_400 after:content-['']">
              <button
                className="flex h-11 w-44 items-center justify-evenly rounded-[25px] bg-accent_400 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
                type="submit"
              >
                <Image src={sendMessageIcon} alt="Letter Icon" height={20} />
                <Image src={LineBtn} alt="Line" className="h-8" />
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
