'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ScrollDownButton = () => {
  const handleScroll = () => {
    const section = document.getElementById('AboutMe')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={handleScroll}
      className='absolute bottom-5 left-1/2 -translate-x-1/2 text-foreground'
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ChevronDown size={36} />
    </motion.button>
  )
}

export default ScrollDownButton
