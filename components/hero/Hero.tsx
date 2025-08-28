'use client'
import { Eye, Paperclip } from 'lucide-react'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import HeroImage from '../hero/HeroImage'
import { Button } from '../ui/button'
import ScrollDownButton from '../ScrollDown'

const Hero = () => {
  return (
    <div
      className='relative min-h-[92vh] md:min-h-screen flex items-center justify-center py-15'
      id='Home'
    >
      <div className='max-w-screen-xl w-full  mx-auto grid lg:grid-cols-2 gap-12  md:px-6  '>
        <div className='flex-1 flex flex-col justify-center items-center xl:items-start space-y-5'>
          <div>
            <h1 className='text-[2rem] md:text-5xl xl:text-6xl font-semibold text-center xl:text-left'>
              HELLO, I&apos;M{' '}
              <span className='font-bold text-primary'>
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

            <p className='font-light text-center text-[0.95rem] xl:text-left max-w-3xl  md:text-xl xl:text-3xl flex flex-col'>
              <span>
                Frontend Developer{' '}
                <span className='text-secondary font-medium'>React & Next.js</span>
              </span>
              <span>building modern web apps</span>
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            <Link href={'mailto:ahmedshawki.dev@gmail.com'}>
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
        <div className='flex justify-center xl:justify-end items-center'>
          <HeroImage />
        </div>
      </div>
      <ScrollDownButton />
    </div>
  )
}

export default Hero
