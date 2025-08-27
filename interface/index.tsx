import { LucideIcon } from "lucide-react"

export interface IProject {
  id: number
  title: string
  description: string
  image: string
  demoLink: string
  repoLink: string
  technology: string[]
}

export interface IContact {
  id: number
  name: string
  icon: React.ReactNode
  link: string
  hoverText: string
}

export interface IService {
  id: number
  title: string
  description: string
  icon: LucideIcon
}