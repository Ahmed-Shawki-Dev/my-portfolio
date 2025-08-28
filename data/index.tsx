import { Code2, Gauge, Github, Layout, Linkedin, Phone, Plug } from 'lucide-react'

import { IContact, IProject, IService } from '../interface'

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'VS Code Clone',
    description:
      'This project is a Visual Studio Code clone (preview only, not a real code editor) built with React, TypeScript, and Redux Toolkit. It simulates the VS Code file explorer, tab management, and basic layout — with a focus on recursion for file tree rendering, state management with Redux, and persisting data for a realistic experience.',
    image: '/p-1.png',
    demoLink: 'https://vs-code-clone-omega.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/Project4-VS-Code-Clone',
    technology: ['React', 'Redux', 'Typescript'],
  },
  {
    id: 2,
    title: 'Product Builder',
    description:
      'Quick, lightweight tool for building and customizing products, with live previews, responsive layout, and intuitive configuration options.',
    image: '/p-2.png',
    demoLink: 'https://simple-product-builder.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/project2-react',
    technology: ['React', 'Typescript'],
  },
  {
    id: 3,
    title: 'AI CV Analyzer',
    description:
      'AI-powered CV evaluation platform that analyzes uploaded resumes and provides instant insights, helping users understand their strengths and areas to improve.',
    image: '/p-3.png',
    demoLink: 'https://ai-cv-analyzer-three.vercel.app/',
    repoLink: 'https://github.com/Ahmed-Shawki-Dev/AI-CV-Analyzer',
    technology: ['Typescript', 'API Fetch', 'AI'],
  },
]

export const skillsData: string[] = [
  // Core Stack
  '/icons/react.svg',
  '/icons/next.svg',
  '/icons/typescript.svg',
  '/icons/javascript.svg',
  '/icons/tailwindcss.svg',
  '/icons/redux-reducer.svg',

  // Complementary Tools
  '/icons/prisma.svg',
  '/icons/git.svg',
  '/icons/vercel.svg',

  // Styling & Legacy
  '/icons/html.svg',
  '/icons/css.svg',
  '/icons/sass.svg',

  // Tooling
  '/icons/pnpm.svg',
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
    icon: <Phone  className='w-5 h-5' />,
    link: 'tel:+201098786468',
    hoverText: 'Call me directly',
  },
]

export const ServicesData:IService[] = [
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
