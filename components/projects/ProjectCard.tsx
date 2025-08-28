import { Eye, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { IProject } from '../../interface'

const ProjectCard = ({ demoLink, description, image, repoLink, technology, title }: IProject) => {
  return (
    <div className='bg-accent rounded-lg shadow-md '>
      <Link href={demoLink ? demoLink : ''} target='_blank' className='relative group'>
        <div className='relative w-full aspect-[16/9] rounded-t-lg overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 transition-opacity z-50 space-x-1 flex-col'>
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
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
