'use client'
import { Eye, Paperclip } from 'lucide-react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import HeroImage from '../hero/HeroImage'
import ScrollDownButton from '../ScrollDown'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'

const Typewriter = dynamic(() => import('react-simple-typewriter').then((mod) => mod.Typewriter), {
  ssr: false,
})

const Hero = () => {
  const t = useTranslations('HomePage')
  const [langKey, setLangKey] = useState(0)

  useEffect(() => {
    setLangKey((prev) => prev + 1) 
  }, [t]) 

  return (
    <div
      className='hero relative min-h-[92vh] md:min-h-screen flex items-center justify-center py-15'
      id='Home'
    >
      <div className='max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 md:px-6'>
        <div className='flex-1 flex flex-col justify-center items-center xl:items-start space-y-5 '>
          <div className='space-y-1 rtl:space-y-3'>
            <h1 className='text-[2rem] md:text-5xl xl:text-[3.5rem] 2xl:text-6xl font-bold text-center xl:text-left xl:rtl:text-right'>
              {t('title')}
              <span className='font-black text-primary'>
                <Typewriter
                  key={langKey}
                  words={[t('WEB DEV'), t('AHMED')]}
                  loop={1}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursorBlinking
                />
              </span>
            </h1>

            <p className='font-light text-center text-[0.95rem] xl:text-left max-w-3xl space-y-1 md:text-xl xl:text-[1.7rem] 2xl:text-3xl flex flex-col xl:rtl:text-right'>
              <span>
                {t('role1')} <span className='font-medium'>{t('role2')}</span>
              </span>
              <span>{t('desc')}</span>
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <Link href={'mailto:ahmedshawki.dev@gmail.com'} target='_blank'>
              <Button>
                <Paperclip /> {t('hire')}
              </Button>
            </Link>
            <Link href={'/Ahmed-Shawki-CV.pdf'} target='_blank'>
              <Button variant='outline'>
                <Eye /> {t('cv')}
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center xl:justify-end items-center w-full px-10 md:p-0'>
          <HeroImage />
        </div>
      </div>
      <ScrollDownButton />
    </div>
  )
}

export default Hero
