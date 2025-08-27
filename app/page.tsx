import AboutMe from '../components/about/AboutMe'
import ContactMe from '../components/contact/ContactUs'
import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import Services from '../components/Services/Services'
import Skills from '../components/skills/Skills'

const Page = () => {
  return (
    <main className='container mx-auto '>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  )
}

export default Page
