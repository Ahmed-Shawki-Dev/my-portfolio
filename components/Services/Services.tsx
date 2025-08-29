import { ServicesData } from '../../data'
import { IService } from '../../interface'
import { trimText } from '../../utils'
import SpotlightCard from '../SpotlightCard '
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className='min-h-fit  flex items-start justify-center  px-4 py-15' id='services'>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col items-center gap-8'>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          Services
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
          {ServicesData?.map((service: IService) => {
            const { description, icon, id, title } = service
            return (
              <ServiceCard
                key={id}
                id={id}
                icon={icon}
                title={title}
                description={trimText(description)}
                />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
