'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { skillsDataObj } from '../../data'
import LogoLoop from './LogoLoop'

const Skills = () => {
  return (
    <section className='min-h-fit flex items-center justify-center px-8 py-30  ' id='skills'>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col items-center gap-8 '>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          Skills
        </h2>
        <LogoLoop
          logos={skillsDataObj}
          speed={50}
          direction='left'
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel='Technology Skills'
        />
      </div>
    </section>
  )
}

export default Skills
