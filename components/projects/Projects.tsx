import { projectsData } from '../../data'
import { IProject } from '../../interface'
import { trimText } from '../../utils'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='min-h-fit flex items-start justify-center  px-4 py-15' id='projects'>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col items-center gap-8 '>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          Projects
        </h2>
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, max-content))',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {projectsData?.map((project: IProject) => {
            const { demoLink, description, id, image, repoLink, technology, title } = project
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
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
