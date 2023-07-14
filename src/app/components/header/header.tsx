import ProfilePic from '../../assets/profile-60-60.png'
import HamburguerMenu from '../../assets/hamburguer.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed z-50 flex h-20 w-full flex-row items-center justify-between bg-gradient-to-r from-navGradientStart to-navGradientEnd px-[2.5%] py-5 text-base font-medium tracking-widest">
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
      <nav>
        <ul
          className="absolute right-5 top-20 flex flex-col items-center gap-2 rounded bg-skillsGradientEnd p-5 opacity-0 md:static md:flex-row md:gap-6 md:bg-transparent md:opacity-100 lg:gap-14"
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
      <div className="flex items-center md:hidden">
        <button>
          <Image
            src={HamburguerMenu}
            alt="Menu"
            className="w-12 rounded-full bg-white/10 p-2 transition ease-linear hover:bg-accent_400"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
