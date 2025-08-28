'use client'
import { easeInOut, motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'
const fadeInRight = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeInOut } },
  
}

export default function Section({ children }: { children: ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.section
      ref={ref}
      variants={fadeInRight}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.section>
  )
}
