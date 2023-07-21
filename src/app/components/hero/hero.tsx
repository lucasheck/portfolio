import Link from 'next/link'
import Image from 'next/image'
import Hand from '../../assets/hand-waving.svg'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'
import Resume from '../../assets/resume.svg'

const Hero = () => {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-heroGradientStart from-10% to-heroGradientEnd to-95% px-4"
      id="home"
    >
      <div className="flex flex-col gap-5 ">
        <div className="flex w-full flex-row justify-center gap-2 md:justify-normal">
          <span>HI</span>
          <Image src={Hand} alt="hand" className="w-6 animate-wiggle" />
          <span>MY NAME IS</span>
        </div>
        <span className="self-center text-center text-5xl font-bold -tracking-wider text-white drop-shadow-xl after:absolute after:left-0 after:top-2 after:-z-10 after:text-gray-700 after:opacity-60 after:blur-sm after:content-['LUCAS_HECK'] sm:text-7xl md:self-start md:text-left">
          LUCAS HECK
        </span>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <span className="text-center text-4xl font-semibold -tracking-wider text-secondary_300 drop-shadow-xl after:absolute after:left-0 after:top-2 after:-z-10 after:text-gray-700 after:opacity-60 after:blur-sm after:content-['REACT_DEVELOPER'] sm:text-6xl">
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
              className="rounded-lg rounded-tl-2xl border border-white bg-gray-300 opacity-50 transition ease-linear"
            />
          </div>
        </div>
        <p className="whitespace-pre-line text-center text-base md:text-right">
          {
            "I'm 34 years old, and I have 7 years of experience \n working as a fullstack developer."
          }
        </p>
      </div>
    </section>
  )
}

export default Hero
