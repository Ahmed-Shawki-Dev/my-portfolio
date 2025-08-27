import { IService } from '../../interface'

const ServiceCard = ({ id, title, description, icon: Icon }: IService) => {
  return (
    <div className='bg-accent rounded-lg shadow-md p-6 flex flex-col items-center text-center gap-3'>
      <Icon className='w-10 h-10 text-primary' />
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-muted-foreground text-sm'>{description}</p>
    </div>
  )
}

export default ServiceCard
