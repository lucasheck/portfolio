import Image from 'next/image'
import profilePhoto from '../../assets/about_me_photo.jpg'

const About = () => {
  const aboutDescription =
    'Hello! My name is Lucas, an enthusiast of life and passionate about overcoming challenges. I am Brazilian and part of a lovely family, composed of my wife, a son and a dog. Together, we share the dream of experiencing new adventures and immersing ourselves in diverse cultures, nurturing our thirst for knowledge and personal and professional growth. \n\n I hold a degree in Computer Science from the Federal University of Mato Grosso do Sul (UFMS) and worked as a developer for 7 years, gaining valuable skills and knowledge in this fascinating field. Later, I founded my own document management company, which has become a reference in my city. \n\n Currently, with my company established and thriving in the local market, I realized that my heart has always been connected to developing innovative technological solutions. This passion led me back to studies, focusing on learning React, NodeJS, and React-Native programming languages, as well as other modern technologies. Simultaneously, I am enhancing my English proficiency to pursue international opportunities and new challenges. I believe this combination of technical and linguistic skills will open new paths and possibilities in my career as a developer. \n\n Driven by challenges and passionate about learning, I am always seeking personal and professional growth. I am eager to explore what the future holds and embrace new opportunities that lie ahead.'

  return (
    <section id="about" className="flex scroll-mt-16 justify-center py-24">
      <div className="mx-[10%] flex w-full flex-col items-center justify-evenly lg:flex-row lg:gap-12">
        <div className="max-w-[350px] -translate-x-2 rounded-md border-8 border-white object-cover object-center">
          <Image
            src={profilePhoto}
            className="-translate-y-6 translate-x-6 rounded-md shadow-aboutPhotoShadow"
            alt="About me photo"
          ></Image>
        </div>
        <div className="flex max-w-[750px] flex-1 flex-col items-center gap-20">
          <h2 className="pt-10 text-5xl after:absolute after:z-30 after:h-1 after:w-7 after:-translate-x-32 after:translate-y-20 after:rounded-xl after:bg-accent_400 after:content-[''] lg:pt-0">
            About me
          </h2>
          <p className="whitespace-pre-line text-justify ">
            {aboutDescription}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
