import Image from 'next/image'
import profilePhoto from '../../assets/about_me_photo.jpg'

const About = () => {
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
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis consequatur quos veritatis quia saepe modi, harum rerum
            vero nesciunt assumenda itaque, ipsum accusantium possimus ex nulla
            sint. Inventore, facilis tenetur. Numquam incidunt, sed odit fuga
            nostrum dolorem eum, nam, quia laudantium perspiciatis in eveniet
            laborum quas. Temporibus a molestiae necessitatibus sapiente
            voluptas aut obcaecati quaerat at, omnis, facere incidunt similique!
            <br />
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
  )
}

export default About
