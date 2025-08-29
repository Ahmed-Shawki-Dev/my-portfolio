import { IService } from '../../interface'
import SpotlightCard from '../SpotlightCard '

const ServiceCard = ({ id, title, description, icon: Icon }: IService) => {
  return (
    <SpotlightCard spotlightColor={`rgba(255, 255, 255, 0.25)`}>
      <Icon className='w-10 h-10 text-primary' />
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-muted-foreground text-sm'>{description}</p>
    </SpotlightCard>
  )
}

export default ServiceCard
