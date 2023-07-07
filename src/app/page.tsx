import Image from 'next/image'
import ProfilePic from './assets/profile-90-90.png'
import Hand from './assets/hand-waving.svg'
import Linkedin from './assets/linkedin.svg'
import Github from './assets/github.svg'
import Resume from './assets/resume.svg'

export default function Home() {
  return (
    <main className="bg-primary_600 font-sans text-white">
      <header className="fixed z-10 flex h-24 w-full flex-row items-center justify-between bg-gradient-to-r from-navGradientStart to-navGradientEnd px-12 py-5 text-base font-medium tracking-widest">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={ProfilePic}
            alt="Logo"
            className="h-[60px] w-[60px] transition duration-300 ease-linear hover:scale-110"
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

      {/******************************************************************/}

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
              <Image
                src={Linkedin}
                alt="linkedin"
                className="rounded-lg border border-white bg-white transition ease-linear hover:-translate-y-1 hover:translate-x-1 hover:bg-yellow-300"
              />
              <Image
                src={Github}
                alt="github"
                className="rounded-full border border-white bg-white transition ease-linear hover:-translate-y-1 hover:translate-x-1 hover:bg-yellow-300"
              />
              <Image
                src={Resume}
                alt="resume"
                className="rounded-lg rounded-tl-2xl border border-white bg-white transition ease-linear hover:-translate-y-1 hover:translate-x-1 hover:bg-yellow-300"
              />
            </div>
          </div>
          <p className="text-right text-base">
            I have 34 years old, I’m a developer with 7 years of experience
            <br />
            working as fullstack developer
          </p>
        </div>
      </section>

      {/******************************************************************/}

      <section id="projects" className="bg-red-300">
        <h2>Recent Works</h2>
        <line />
        <div className="card-list">
          <div className="card">
            <h3>Title</h3>
            <h4>Subtitle</h4>
            <div>
              <img></img>
              <img></img>
            </div>
            <div>
              <button>Github</button>
              <button>demo</button>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sapiente modi, necessitatibus impedit doloribus officia
                quibusdam, eum maxime cum ullam esse quis blanditiis distinctio
                eligendi atque possimus. Sunt, voluptatem repellendus!
              </p>
              <button>+ more info</button>
            </div>
          </div>

          <div className="card">
            <h3>Title</h3>
            <h4>Subtitle</h4>
            <div>
              <img></img>
              <img></img>
            </div>
            <div>
              <button>Github</button>
              <button>demo</button>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sapiente modi, necessitatibus impedit doloribus officia
                quibusdam, eum maxime cum ullam esse quis blanditiis distinctio
                eligendi atque possimus. Sunt, voluptatem repellendus!
              </p>
              <button>+ more info</button>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Professional Skills</h2>
        <line />
        <ul>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Mobile</li>
        </ul>
        <div>
          <ul className="frontendTechs">
            <li>React</li>
            <li>React-Redux</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Scss</li>
            <li>NextJS</li>
            <li>UI / UX</li>
          </ul>
          <ul className="backendTechs">
            <li>NodeJS</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Prisma DB</li>
            <li>Jest</li>
            <li>Fastify</li>
            <li>Rest API</li>
          </ul>
          <ul className="mobileTechs">
            <li>React Native</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Tailwind CSS</li>
            <li>Expo</li>
            <li>UI / UX</li>
          </ul>
        </div>
        <div className="imageTechs"></div>
        <p></p>
        <line />
      </section>

      <section id="about">
        <div>
          <Image src="" alt="About me photo"></Image>
          <div>
            <h2>About me</h2>
            <line />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, quo ipsam! Totam nobis quisquam ipsam excepturi,
              quidem explicabo natus deserunt voluptatum blanditiis nostrum
              labore odit. Laboriosam repellendus deserunt distinctio.
              Consectetur!
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <line />
        <h2>Let&#39;s talk?</h2>
        <line />
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea placeholder="Your Message..."></textarea>
        </form>
        <input type="text" placeholder="Send message" />
        <line />
      </section>
    </main>
  )
}
