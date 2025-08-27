'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HeroImage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')

    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    })

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  return (
    <div className=''>
      {theme === 'dark' ? (
        <Image alt='Hero Dark' src='/hero-image-dark.png' width={500} height={500} />
      ) : (
        <Image alt='Hero Light' src='/hero-image-light.png' width={500} height={500} />
      )}
    </div>
  )
}

export default HeroImage
