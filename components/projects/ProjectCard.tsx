import { Eye, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { IProject } from '../../interface'
import { Badge } from '../ui/badge'

const ProjectCard = ({ demoLink, description, image, repoLink, technology, title }: IProject) => {
  return (
    <div className='bg-accent rounded-lg shadow-md pb-5 relative'>
      <Link href={demoLink ? demoLink : ''} target='_blank' className='relative group'>
        <div className='relative w-full aspect-[16/9] rounded-t-lg overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 transition-opacity z-30 space-x-1 flex-col'>
            <Eye className='text-white' />
            <span className='text-white'>Live Demo</span>
          </div>
          <Image src={image} alt={title} fill />
        </div>
      </Link>

      <div className='p-5'>
        <Link href={repoLink ? repoLink : ''} target='_blank'>
          <h5 className='flex space-x-1 mb-2 text-2xl font-bold tracking-tight  '>
            <Github />
            <span>{title}</span>
          </h5>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 pb-3'>{description}</p>
        <div className='absolute bottom-4 space-x-2 '>
          {technology?.map((tech) => (
            <Badge key={tech} variant={'secondary'}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
