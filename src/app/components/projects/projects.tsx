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
      'Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequatur quos veritatis quia saepe modi, harum rerum vero nesciunt assumenda itaque, ipsum accusantium possimus ex nulla sint. Inventore, facilis tenetur. Techs Used: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in justo id quam laoreet vulputate vitae sed diam.',
    githubLink: 'https://github.com/lucasheck/crown-clothing',
    liveDemoLink: 'https://master--boisterous-pika-b91b7d.netlify.app/',
  }
  const spacetime: CardProps = {
    title: 'SPACETIME',
    subtitle:
      'Collect memorable moments from your journey \n and share (if you want) with the world!',
    imagePath: MonitorSpacetime,
    description:
      'Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequatur quos veritatis quia saepe modi, harum rerum vero nesciunt assumenda itaque, ipsum accusantium possimus ex nulla sint. Inventore, facilis tenetur. Techs Used: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in justo id quam laoreet vulputate vitae sed diam.',
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
