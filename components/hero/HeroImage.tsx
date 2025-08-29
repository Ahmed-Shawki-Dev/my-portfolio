import heroImage from '@/public/hero-image.webp'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className='relative w-[450px] h-[450px]'>
      <Image
        src={heroImage}
        alt='Hero Dark'
        width={450}
        height={450}
        priority
        className='rounded-md'
      />
    </div>
  )
}

export default HeroImage
