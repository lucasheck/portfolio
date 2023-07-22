'use client'
import ProfilePic from '../../assets/profile-60-60.png'
import HamburguerMenu from '../../assets/hamburguer.svg'
import Image from 'next/image'
import { useEffect, useState, memo } from 'react'

interface ISectionInfo {
  id: string
  offsetTop: number
  offsetHeight: number
  name: string
  url: string
  active?: boolean
}

interface HeaderProps {
  yOffSet: number
}

const Header = ({ yOffSet }: HeaderProps) => {
  const [sections, setSections] = useState<ISectionInfo[]>()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const sectionsDOM = document.querySelectorAll('section')
    const sectionsArray = Array.from(sectionsDOM)
    const sectionsValues = sectionsArray.map((section) => ({
      id: section.id,
      offsetTop: section.offsetTop,
      offsetHeight: section.offsetHeight,
      name: section.id.toUpperCase(),
      url: '#' + section.id,
      active: section.id === 'home',
    }))
    setSections(sectionsValues)
  }, [])

  useEffect(() => {
    let sectionsValues
    if (sections) {
      if (
        yOffSet + window.innerHeight ===
        document.documentElement.scrollHeight
      ) {
        sectionsValues = sections.map((section) =>
          section.id === 'contact'
            ? { ...section, active: true }
            : { ...section, active: false },
        )
      } else {
        sectionsValues = sections.map((section) =>
          section.offsetTop <= yOffSet + 80 &&
          yOffSet + 80 <= section.offsetTop + section.offsetHeight
            ? { ...section, active: true }
            : { ...section, active: false },
        )
      }
      setSections(sectionsValues)
    }
  }, [yOffSet])

  return (
    <header className="fixed z-50 flex h-20 w-full flex-row items-center justify-between bg-gradient-to-r from-navGradientStart to-navGradientEnd px-[2.5%] py-5 text-base font-medium tracking-widest">
      <div
        className={
          openMenu
            ? 'absolute left-0 top-0 z-10 h-screen w-screen'
            : 'pointer-events-none hidden'
        }
        onClick={() => setOpenMenu(false)}
      ></div>
      <div className="flex flex-row items-center gap-4">
        <Image
          src={ProfilePic}
          alt="Logo"
          className="transition duration-300 ease-linear hover:scale-110"
        />
        <span className="transition ease-linear hover:text-accent_400">
          <a href="#">LUCAS HECK</a>
        </span>
      </div>
      <nav className="z-20">
        <ul
          className={
            openMenu
              ? 'absolute right-5 top-20 flex animate-dropDownMenu flex-col items-center gap-2 rounded-xl bg-skillsGradientEnd opacity-100 md:static md:flex md:flex-row md:gap-0 md:bg-transparent md:opacity-100 lg:gap-14'
              : 'absolute right-5 top-20 hidden animate-dropDownMenu flex-col items-center gap-2 rounded-xl bg-skillsGradientEnd opacity-0 md:static md:flex md:flex-row md:gap-0 md:bg-transparent md:opacity-100 lg:gap-14'
          }
          aria-label="Website Links"
        >
          {sections?.map((section) => (
            <li
              key={section.id}
              className={
                section.active
                  ? 'flex w-full bg-accent_600/20 transition-colors ease-linear hover:text-accent_400'
                  : 'flex w-full transition-colors ease-linear hover:text-accent_400'
              }
              onClick={() => setOpenMenu(false)}
            >
              <a
                href={section.url}
                className="h-20 w-full px-4 text-center leading-[80px]"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="z-20 flex items-center md:hidden">
        <button>
          <Image
            src={HamburguerMenu}
            alt="Menu"
            className={
              openMenu
                ? 'w-12 -rotate-90 rounded-full bg-accent_400 p-2 transition duration-[400ms] ease-linear'
                : 'w-12 rounded-full bg-white/10 p-2 transition duration-[400ms] ease-linear md:hover:bg-accent_400'
            }
            onClick={() => setOpenMenu(!openMenu)}
          />
        </button>
      </div>
    </header>
  )
}

export default memo(Header)
