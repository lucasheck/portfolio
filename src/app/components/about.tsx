import Image from 'next/image'
import profilePhoto from '../assets/about_me_photo.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="mt-20 flex min-h-screen w-full scroll-mt-52 justify-center"
    >
      <div className="mt-10 flex h-full w-3/5 flex-col gap-40 xl:flex-row">
        <Image
          src={profilePhoto}
          className="max-h-[500px] w-auto rounded-md object-contain shadow-aboutPhotoShadow"
          alt="About me photo"
        ></Image>
        <div className="flex flex-col items-center gap-20">
          <h2 className="pt-10 text-5xl after:absolute after:z-30 after:h-1 after:w-7 after:-translate-x-32 after:translate-y-20 after:rounded-xl after:bg-accent_400 after:content-['']">
            About me
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis consequatur quos veritatis quia saepe modi, harum rerum
            vero nesciunt assumenda itaque, ipsum accusantium possimus ex nulla
            sint. Inventore, facilis tenetur. Numquam incidunt, sed odit fuga
            nostrum dolorem eum, nam, quia laudantium perspiciatis in eveniet
            laborum quas. Temporibus a molestiae necessitatibus sapiente
            voluptas aut obcaecati quaerat at, omnis, facere incidunt similique!{' '}
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
