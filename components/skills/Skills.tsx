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
import { skillsData } from '../../data'

const Skills = () => {
  return (
    <section className='min-h-fit flex items-start justify-center px-4 py-15  ' id='skills'>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col items-center gap-8 '>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          Skills
        </h2>
        <Carousel className='w-full max-w-full select-none'>
          <CarouselContent className='-ml-1'>
            {skillsData.map((skill) => (
              <CarouselItem key={skill} className='pl-1  md:basis-1/2 lg:basis-1/5 '>
                <div className='p-1'>
                  <Card className='bg-accent'>
                    <CardContent className='flex  items-center justify-center p-2'>
                      <span className='text-2xl font-semibold'>
                        <Image src={skill} width={100} height={100} alt='skills' />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Skills
