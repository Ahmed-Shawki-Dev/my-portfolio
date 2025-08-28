import { contacts } from '../../data'
import { AboutMeHover } from './AboutUsHover'

export default function AboutMe() {
  return (
    <section className='min-h-fit   flex items-start justify-center  px-4 py-15 ' id='about'>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col items-center gap-5'>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          About Me
        </h2>

        <p className='text-accent-foreground text-center  max-w-3xl xl:max-w-4xl text-base md:text-lg xl:text-2xl leading-relaxed tracking-wide font-light'>
          I&apos;m a Frontend Developer specializing in React & TypeScript, building high-quality,
          API-driven web applications with Next.js, Tailwind CSS, and Redux. I bridge the user
          interface to core functionality, delivering functional and performant solutions.
          Passionate about technology and continuous learning, I turn ideas into polished products
          while tackling new challenges.
        </p>

        <div className='flex flex-wrap justify-center md:justify-start gap-4'>
          {contacts.map(({ id, icon, link, hoverText, name }) => (
            <AboutMeHover
              key={id}
              icon={icon}
              link={link}
              hoverText={hoverText}
              id={id}
              name={name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
