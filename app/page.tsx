'use client'
import AboutMe from '@/components/about/AboutMe'
import ContactMe from '@/components/contact/ContactUs'
import Hero from '@/components/hero/Hero'
import Projects from '@/components/projects/Projects'
import Section from '@/animations/Section'
import Services from '@/components/Services/Services'
import Skills from '@/components/skills/Skills'
import { useLenis } from '../hooks/useLenis'

const Page = () => {
  useLenis()
  return (
    <main className='container mx-auto '>
      <Hero />
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <ContactMe />
      </Section>
    </main>
  )
}

export default Page
