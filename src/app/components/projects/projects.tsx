import Card, { CardProps } from './card'
import MonitorCrown from '../../assets/monitor_crown.png'
import MonitorSpacetime from '../../assets/monitor_spacetime.png'

const Projects = () => {
  const crownCard: CardProps = {
    title: 'CROWN CLOTHING',
    subtitle:
      'Experience seamless online shopping with our \n captivating e-commerce clothing platform.',
    imagePath: MonitorCrown,
    description:
      "Published on the Netlify server, Crown Clothing is an online clothing store that allows users to browse the shop, add products to their cart, and immerse themselves in a virtual shopping experience. Although a fictional project, this e-commerce serves as a practical example of my dedication to honing my skills as a full-stack developer and creating engaging web applications. \n\n By utilizing React, Typescript and Styled Components, I crafted a modern and responsive interface that provides an immersive shopping experience for users. Additionally, the integration of React-Redux enabled the creation of a global state, ensuring smooth and interactive navigation. \n\n Security and reliability are ensured through the powerful Google solution, Firebase Authentication. Furthermore, with Firebase Firestore, I implemented full data storage functionality, enabling real-time queries of the store's categories and product information.",
    githubLink: 'https://github.com/lucasheck/crown-clothing',
    liveDemoLink: 'https://master--boisterous-pika-b91b7d.netlify.app/',
  }
  const spacetime: CardProps = {
    title: 'SPACETIME',
    subtitle:
      'Collect memorable moments from your journey \n and share (if you want) with the world!',
    imagePath: MonitorSpacetime,
    description:
      'The Spacetime project, developed with the aim of collecting memories and special moments, allows users to store photos or videos, along with the date of the memory and a description. \n\n With a responsive and bilingual interface, the frontend was built using Next.js, React, TypeScript, and Tailwind CSS. The backend, created with Node.js and TypeScript, uses the Prisma database and APIs developed with Axios and Fastify. Additionally, a mobile app was developed using Expo, React Native, Tailwind CSS, and TypeScript, providing a complete experience for users, allowing access to memories on both the web and mobile devices. \n\n Although the project has not been publicly published, a video demonstrating its features is available through the link provided in this card. I developed the Spacetime project to enhance my full-stack skills and create a versatile solution for storing and sharing cherished memories.',
    githubLink: 'https://github.com/lucasheck/spacetime_web',
    liveDemoLink:
      'https://www.linkedin.com/posts/lucas-tomaz-heck_nlw-rocketseat-neverstoplearning-activity-7073977255110033409-xA4k',
  }
  return (
    <section
      id="projects"
      className="flex scroll-mt-14 flex-col items-center bg-gradient-to-t from-secondary_200 from-[99%] to-heroGradientEnd to-100% pb-14 text-primary_600"
    >
      <h2 className="pt-14 text-3xl font-medium after:absolute after:left-1/2 after:z-30 after:h-1 after:w-7 after:-translate-x-1/2 after:translate-y-10 after:rounded-xl after:bg-accent_400 after:content-[''] md:text-5xl md:after:translate-y-16">
        Recent Works
      </h2>
      <div
        id="card-list"
        className="mt-8 flex min-h-full w-4/5 flex-col gap-16 max-[360px]:w-11/12 md:mt-14"
      >
        <Card {...crownCard} />
        <Card {...spacetime} />
      </div>
    </section>
  )
}

export default Projects
