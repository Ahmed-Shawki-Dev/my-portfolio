import Image from 'next/image'
const HeroImage = () => {
  return (
    <div>
      <Image alt='Hero Dark' src='/hero-image.png' width={450} height={450} priority />
    </div>
  )
}

export default HeroImage
