import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import GithubBtn from '../../assets/btnGithub.svg'
import LiveBtn from '../../assets/btnLive.svg'
import LineBtn from '../../assets/btnLine.svg'

export interface CardProps {
  title: string
  subtitle: string
  imagePath: StaticImageData
  description: string
  githubLink: string
  liveDemoLink: string
}

const Card = ({
  title,
  subtitle,
  imagePath,
  description,
  githubLink,
  liveDemoLink,
}: CardProps) => {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-white px-[5%] py-10 shadow-cardShadow">
      <h3 className="pb-2 text-center text-2xl md:text-4xl">{title}</h3>
      <h4 className="whitespace-pre-line pb-6 text-center text-sm md:text-base">
        {subtitle}
      </h4>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
        <Image
          src={imagePath}
          alt="Preview Card Image"
          className="h-3/5 w-2/5 max-w-fit flex-1 self-center justify-self-center object-cover transition-transform duration-1000 hover:scale-105 hover:transition-transform hover:duration-1000"
        />

        <div className="flex flex-1 flex-col items-center justify-between gap-5 lg:mt-5">
          <p className="w-11/12 text-justify text-sm md:text-base">
            {description}
          </p>

          <div id="card-buttons" className="flex w-4/5 justify-evenly pb-6">
            <Link
              href={githubLink}
              target="_blank"
              className="flex h-[50px] w-36 items-center justify-evenly rounded-[25px] bg-accent_400 px-2 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
            >
              <Image
                src={GithubBtn}
                alt="Github Button Image"
                className="h-8 w-auto"
              />
              <Image src={LineBtn} alt="Vertical Line" />
              github
            </Link>

            <Link
              href={liveDemoLink}
              className="flex h-[50px] w-40 items-center justify-evenly rounded-[25px] bg-accent_400 text-white shadow-btnShadow transition duration-300 ease-linear hover:shadow-btnShadowHover"
              target="_blank"
            >
              <Image
                src={LiveBtn}
                alt="Github Button Image"
                className="h-8 w-auto"
              />
              <Image src={LineBtn} alt="Vertical Line" />
              live demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
