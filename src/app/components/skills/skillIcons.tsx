import Image from 'next/image'
import cssIcon from '../../assets/skills/css3.svg'
import expoIcon from '../../assets/skills/expo.svg'
import fastifyIcon from '../../assets/skills/fastify.svg'
import htmlIcon from '../../assets/skills/html5.svg'
import jestIcon from '../../assets/skills/jest.svg'
import jsIcon from '../../assets/skills/js.svg'
import nextIcon from '../../assets/skills/next.svg'
import nodeIcon from '../../assets/skills/node.svg'
import prismaIcon from '../../assets/skills/prismawhite.svg'
import reactIcon from '../../assets/skills/react.svg'
import reduxIcon from '../../assets/skills/redux.svg'
import restApiIcon from '../../assets/skills/restapiwhite.svg'
import scssIcon from '../../assets/skills/scss.svg'
import tailwindIcon from '../../assets/skills/tailwind.svg'
import typescriptIcon from '../../assets/skills/typescript.svg'
import uiuxIcon from '../../assets/skills/uiux.svg'

interface skillIconsProps {
  skillTab: number
  skillHover: number
}

const SkillIcons = ({ skillTab, skillHover }: skillIconsProps) => {
  return (
    <div className="mt-5 flex w-11/12 max-w-6xl flex-row flex-wrap items-center justify-center gap-4">
      <Image
        className={`
            ${skillTab === 2 ? 'h-10 opacity-20 grayscale ' : 'h-10'}
            ${
              skillHover === 1
                ? '-translate-y-4 transition-transform duration-300'
                : 'transition-transform duration-300'
            }
            `}
        src={reactIcon}
        alt="React Icon"
      />
      <Image
        className={`
            ${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}
            ${
              skillHover === 2
                ? '-translate-y-4 transition-transform duration-300'
                : 'transition-transform duration-300'
            }
          `}
        src={reduxIcon}
        alt="Redux Icon"
      />
      <Image
        className={`
          ${skillTab === 0 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 3
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={typescriptIcon}
        alt="Typescript Icon"
      />
      <Image
        className={`
          ${skillTab === 0 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 4
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={jsIcon}
        alt="Javascript Icon"
      />
      <Image
        className={`
          ${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 5
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={htmlIcon}
        alt="HTML5 Icon"
      />
      <Image
        className={`
          ${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 6
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={cssIcon}
        alt="CSS3 Icon"
      />
      <Image
        className={`
          ${skillTab === 2 ? 'h-7 opacity-20 grayscale' : 'h-7'}
          ${
            skillHover === 7
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={tailwindIcon}
        alt="TailwindCSS Icon"
      />
      <Image
        className={`
          ${skillTab !== 1 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 8
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={scssIcon}
        alt="SCSS Icon"
      />
      <Image
        className={`
          ${skillTab !== 1 ? 'h-10 opacity-20' : 'h-10'}
          ${
            skillHover === 9
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={nextIcon}
        alt="Next Icon"
      />
      <Image
        className={`
          ${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 10
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={nodeIcon}
        alt="Node Icon"
      />
      <Image
        className={`
          ${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 11
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={prismaIcon}
        alt="Prsima Database Icon"
      />
      <Image
        className={`
          ${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 12
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={jestIcon}
        alt="Jest Icon"
      />
      <Image
        className={`
          ${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 13
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={fastifyIcon}
        alt="Fastify Icon"
      />
      <Image
        className={`
          ${skillTab !== 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 14
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={restApiIcon}
        alt="RestAPI Icon"
      />
      <Image
        className={`
          ${skillTab !== 3 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 15
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={expoIcon}
        alt="Expo Icon"
      />
      <Image
        className={`
          ${skillTab === 2 ? 'h-10 opacity-20 grayscale' : 'h-10'}
          ${
            skillHover === 16
              ? '-translate-y-4 transition-transform duration-300'
              : 'transition-transform duration-300'
          }
          `}
        src={uiuxIcon}
        alt="UI/UX Icon"
      />
    </div>
  )
}

export default SkillIcons
