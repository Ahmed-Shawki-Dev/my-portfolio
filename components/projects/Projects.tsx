'use client'
import { useState } from 'react'
import { projectsData } from '../../data'
import { IProject } from '../../interface'
import { trimText } from '../../utils'
import { Button } from '../ui/button'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3)

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <section className='min-h-fit flex items-start justify-center px-4 py-15' id='projects'>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col items-center gap-8 '>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          Projects
        </h2>

        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(300px,max-content))] md:[grid-template-columns:repeat(auto-fit,minmax(400px,max-content))] justify-center gap-4 w-full'>
          {projectsData.slice(0, visibleCount).map((project: IProject) => {
            const { demoLink, description, id, image, repoLink, technology, title, hasDemo } =
              project
            return (
              <ProjectCard
                key={id}
                id={id}
                demoLink={demoLink}
                repoLink={repoLink}
                image={image}
                title={title}
                description={trimText(description)}
                technology={technology}
                hasDemo={hasDemo}
              />
            )
          })}
        </div>

        {visibleCount < projectsData.length && (
          <Button onClick={handleShowMore} className='' variant={'secondary'}>
            Show More
          </Button>
        )}
      </div>
    </section>
  )
}

export default Projects
