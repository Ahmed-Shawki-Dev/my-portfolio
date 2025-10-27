import { useTranslations } from 'next-intl'

import { ServicesData } from '../../data'
import { IService } from '../../interface'
import { trimText } from '../../utils'
import ServiceCard from './ServiceCard'

const Services = () => {
  const t = useTranslations('Services')

  return (
    <section className='min-h-fit  flex items-start justify-center  px-4 py-15' id='services'>
      <div className='max-w-7xl w-full mx-auto flex flex-col items-center gap-8 rtl:space-y-5'>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          {t('title')}
        </h2>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,max-content))] justify-center gap-4 w-full'>
          {ServicesData?.map((service: IService) => {
            const { description, icon, id, title } = service
            return (
              <ServiceCard
                key={id}
                id={id}
                icon={icon}
                title={t(title)}
                description={trimText(t(description))}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
