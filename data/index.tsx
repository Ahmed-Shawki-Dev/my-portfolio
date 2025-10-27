import p1 from '@/assets/projects/p1.webp'
import p2 from '@/assets/projects/p2.webp'
import p3 from '@/assets/projects/p3.webp'
import p4 from '@/assets/projects/p4.webp'
import p5 from '@/assets/projects/p5.webp'
import p6 from '@/assets/projects/p6.webp'
import p7 from '@/assets/projects/p7.webp'
import { Code2, Gauge, Github, Layout, Linkedin, Phone, Plug } from 'lucide-react'
import { IContact, IProject, IService } from '../interface'

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'VSCodeClone',
    description: 'VSCodeCloneDesc',
    image: p1,
    demoLink: 'https://vs-code-clone-omega.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/Project4-VS-Code-Clone',
    technology: ['React', 'Redux', 'Typescript'],
    hasDemo: true,
  },
  {
    id: 2,
    title: 'FullstackEcommerce',
    description: 'FullstackEcommerceDesc',
    image: p2,
    demoLink: 'https://haztech-computer.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/fullstack-ecommerce-nextjs-prisma-monogdb',
    technology: ['Typescript', 'Next.js', 'Fullstack'],
    hasDemo: true,
  },
  {
    id: 3,
    title: 'AICVAnalyzer',
    description: 'AICVAnalyzerDesc',
    image: p3,
    demoLink: 'https://ai-cv-analyzer-three.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/AI-CV-Analyzer',
    technology: ['Typescript', 'API Fetch', 'AI'],
    hasDemo: true,
  },
  {
    id: 4,
    title: 'HeadphoneLandingpage',
    description: 'HeadphoneLandingpageDesc',
    image: p4,
    demoLink: 'https://headphones-website-six.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/headphones-website',
    technology: ['Typescript', 'React', 'Landingpage'],
    hasDemo: true,
  },
  {
    id: 5,
    title: 'ECommerceReact',
    description: 'ECommerceReactDesc',
    image: p5,
    demoLink: '/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/E-Commerce-React',
    technology: ['Typescript', 'React', 'API Fetch', 'Fullstack'],
    hasDemo: false,
  },
  {
    id: 6,
    title: 'FullstackTodolist',
    description: 'FullstackTodolistDesc',
    image: p6,
    demoLink: '/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/full-stack-todoList-react',
    technology: ['Typescript', 'React', 'API Fetch', 'Fullstack'],
    hasDemo: false,
  },
  {
    id: 7,
    title: 'ProductBuilder',
    description: 'ProductBuilderDesc',
    image: p7,
    demoLink: 'https://simple-product-builder.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/project2-react',
    technology: ['React', 'Typescript'],
    hasDemo: true,
  },
]

export const skillsDataObj = [
  { src: '/icons/react.svg', alt: 'React', href: 'https://react.dev/' },
  { src: '/icons/next.svg', alt: 'Next.js', href: 'https://nextjs.org/' },
  { src: '/icons/typescript.svg', alt: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  {
    src: '/icons/javascript.svg',
    alt: 'JavaScript',
    href: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  { src: '/icons/redux-reducer.svg', alt: 'Redux Toolkit', href: 'https://redux-toolkit.js.org/' },
  { src: '/icons/tailwindcss.svg', alt: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { src: '/icons/prisma.svg', alt: 'Prisma', href: 'https://www.prisma.io/' },
  { src: '/icons/vercel.svg', alt: 'Vercel', href: 'https://vercel.com/' },
  { src: '/icons/git.svg', alt: 'Git', href: 'https://git-scm.com/' },
  { src: '/icons/html.svg', alt: 'HTML', href: 'https://developer.mozilla.org/docs/Web/HTML' },
  { src: '/icons/css.svg', alt: 'CSS', href: 'https://developer.mozilla.org/docs/Web/CSS' },
  { src: '/icons/sass.svg', alt: 'Sass', href: 'https://sass-lang.com/' },
  { src: '/icons/pnpm.svg', alt: 'pnpm', href: 'https://pnpm.io/' },
]

export const contacts: IContact[] = [
  {
    id: 1,
    name: 'Github',
    icon: <Github className='w-5 h-5' />,
    link: 'https://github.com/Ahmed-Shawki-Dev',
    hoverText: 'Check out my GitHub repos',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: <Linkedin className='w-5 h-5' />,
    link: 'https://linkedin.com/in/ahmedshawkidev',
    hoverText: 'Connect with me on LinkedIn',
  },
  {
    id: 3,
    name: 'Phone',
    icon: <Phone className='w-5 h-5' />,
    link: 'tel:+201098786468',
    hoverText: 'Call me directly',
  },
]

export const ServicesData: IService[] = [
  {
    id: 1,
    title: 'WebDevelopment',
    description: 'WebDevelopmentDesc',
    icon: Code2,
  },
  {
    id: 2,
    title: 'UIUXImplementation',
    description: 'UIUXImplementationDesc',
    icon: Layout,
  },
  {
    id: 3,
    title: 'APIIntegration',
    description: 'APIIntegrationDesc',
    icon: Plug,
  },
  {
    id: 4,
    title: 'PerformanceOptimization',
    description: 'PerformanceOptimizationDesc',
    icon: Gauge,
  },
]
