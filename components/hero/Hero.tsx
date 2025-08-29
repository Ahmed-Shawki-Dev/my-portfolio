'use client'
import { Eye, Paperclip } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import HeroImage from '../hero/HeroImage'
import ScrollDownButton from '../ScrollDown'
import { Button } from '../ui/button'

const Typewriter = dynamic(() => import('react-simple-typewriter').then((mod) => mod.Typewriter), {
  ssr: false,
})

const Hero = () => {
  return (
    <div
      className='hero relative min-h-[92vh] md:min-h-screen flex items-center justify-center py-15 '
      id='Home'
    >
      <div className='max-w-screen-xl w-full  mx-auto grid lg:grid-cols-2 gap-12  md:px-6  '>
        <div className='flex-1 flex flex-col justify-center items-center xl:items-start space-y-5'>
          <div className='space-y-1'>
            <h1 className='text-[2rem] md:text-5xl xl:text-[3.5rem] 2xl:text-6xl font-bold text-center xl:text-left'>
              HELLO, I&apos;M{' '}
              <span className='font-black text-primary'>
                <Typewriter
                  words={['WEB DEV', 'AHMED']}
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

            <p className='font-light text-center text-[0.95rem]  xl:text-left max-w-3xl space-y-1  md:text-xl xl:text-[1.7rem] 2xl:text-3xl flex flex-col'>
              <span>
                Frontend Developer <span className=' font-medium'>React & Next.js</span>
              </span>
              <span>Building Modern Web Apps</span>
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <Link href={'mailto:ahmedshawki.dev@gmail.com'} target='_blank'>
              <Button>
                <Paperclip /> Hire Me
              </Button>
            </Link>
            <Link href={'/Ahmed-Shawki-CV.pdf'} target='_blank'>
              <Button variant='outline'>
                <Eye /> View CV
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center xl:justify-end items-center w-full px-10  md:p-0 '>
          <HeroImage />
        </div>
      </div>
      <ScrollDownButton />
    </div>
  )
}

export default Hero
