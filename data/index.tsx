import p1 from '@/assets/projects/p1.webp'
import p2 from '@/assets/projects/p2.webp'
import p3 from '@/assets/projects/p3.webp'
import p4 from '@/assets/projects/p4.webp'
import p5 from '@/assets/projects/p5.webp'
import p6 from '@/assets/projects/p6.webp'
import { Code2, Gauge, Github, Layout, Linkedin, Phone, Plug } from 'lucide-react'
import { IContact, IProject, IService } from '../interface'

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'VS Code Clone',
    description:
      'This project is a Visual Studio Code clone (preview only, not a real code editor) built with React, TypeScript, and Redux Toolkit. It simulates the VS Code file explorer, tab management, and basic layout — with a focus on recursion for file tree rendering, state management with Redux, and persisting data for a realistic experience.',
    image: p1,
    demoLink: 'https://vs-code-clone-omega.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/Project4-VS-Code-Clone',
    technology: ['React', 'Redux', 'Typescript'],
    hasDemo: true,
  },
  {
    id: 2,
    title: 'Product Builder',
    description:
      'Quick, lightweight tool for building and customizing products, with live previews, responsive layout, and intuitive configuration options.',
    image: p2,
    demoLink: 'https://simple-product-builder.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/project2-react',
    technology: ['React', 'Typescript'],
    hasDemo: true,
  },
  {
    id: 3,
    title: 'AI CV Analyzer',
    description:
      'AI-powered CV evaluation platform that analyzes uploaded resumes and provides instant insights, helping users understand their strengths and areas to improve.',
    image: p3,
    demoLink: 'https://ai-cv-analyzer-three.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/AI-CV-Analyzer',
    technology: ['Typescript', 'API Fetch', 'AI'],
    hasDemo: true,
  },
  {
    id: 4,
    title: 'Headphone Landingpage',
    description:
      'A sleek and modern landing page for premium headphones, showcasing product features with a clean design and responsive layout.',
    image: p4,
    demoLink: 'https://headphones-website-six.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/headphones-website',
    technology: ['Typescript', 'React', 'Landingpage'],
    hasDemo: true,
  },
  {
    id: 5,
    title: 'E-Commerce-React',
    description:
      'Simple e-commerce website built with React to browse products and manage a shopping cart.',
    image: p5,
    demoLink: '/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/E-Commerce-React',
    technology: ['Typescript', 'React', 'API Fetch', 'Fullstack'],
    hasDemo: false,
  },
  {
    id: 6,
    title: 'Fullstack Todolist',
    description:
      'Fullstack todo app with authentication and database support for managing daily tasks.',
    image: p6,
    demoLink: '/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/full-stack-todoList-react',
    technology: ['Typescript', 'React', 'API Fetch', 'Fullstack'],
    hasDemo: false,
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
    title: 'Web Development',
    description: 'Building responsive, scalable, and maintainable web applications.',
    icon: Code2,
  },
  {
    id: 2,
    title: 'UI/UX Implementation',
    description: 'Transforming designs into pixel-perfect, accessible, and interactive interfaces.',
    icon: Layout,
  },
  {
    id: 3,
    title: 'API Integration',
    description: 'Connecting frontends with REST & GraphQL APIs to deliver dynamic experiences.',
    icon: Plug,
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'Optimizing apps for speed, SEO, and best user experience across devices.',
    icon: Gauge,
  },
]
