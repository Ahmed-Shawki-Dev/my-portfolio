import { useTranslations } from 'next-intl'
import { contacts } from '../../data'
import { AboutMeHover } from './AboutUsHover'

export default function AboutMe() {
  const t = useTranslations('AboutPage')

  return (
    <section className='min-h-fit flex items-start justify-center  px-4 py-15 ' id='about'>
      <div className='max-w-7xl w-full mx-auto flex flex-col items-center gap-5 rtl:space-y-3'>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-left xl:text-left'>
          {t('aboutTitle')}
        </h2>

        <p className='text-foreground text-center max-w-3xl xl:max-w-4xl text-base md:text-lg xl:text-2xl leading-relaxed tracking-wide font-light'>
          {t('aboutText')}
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
