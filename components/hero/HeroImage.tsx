'use client'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div >
      <Image alt='Hero Dark' src='/hero-image-dark.png' width={500} height={500} />
    </div>
  )
}

export default HeroImage
