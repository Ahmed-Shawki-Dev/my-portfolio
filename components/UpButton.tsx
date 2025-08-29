'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const UpButton = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true)
      else setShow(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <div
      className='fixed bottom-10 right-10 transition-opacity duration-500 z-40 ease-in-out opacity-100 hidden xl:block'
      style={{ transform: show ? 'translateY(0)' : 'translateY(20px)' }}
    >
      <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp />
      </Button>
    </div>
  )
}

export default UpButton
