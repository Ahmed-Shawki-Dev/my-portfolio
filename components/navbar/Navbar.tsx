'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Code, LucideOctagon, MenuIcon, MountainIcon } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'

export default function Navbar() {
  return (
    <>
      <Sheet>
        <div className='flex flex-row-reverse justify-between items-center w-full absolute top-0 left-0 px-5 py-5'>
          <div className='md:hidden'>
            <ModeToggle />
          </div>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='pl-5 pt-5'>
            <Link href='#home' className='mr-6  flex space-x-1' prefetch={false}>
              <Code className='h-6 w-6' />
              <span className='text-xl'>Ahmed Shawki</span>
              <span className='sr-only'>Ahmed Shawki</span>
              <span className='sr-only'>Ahmed Shawki</span>
            </Link>
            <div className='grid gap-2 py-6'>
              <Link
                href='#home'
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href='#about'
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                About
              </Link>
              <Link
                href='#services'
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href='#contact'
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </div>
      </Sheet>

      <header
        className={`fixed left-0 top-0 w-full h-15 hidden md:flex items-center transition-colors duration-300 z-50 backdrop-blur-xs`}
      >
        <div className=' w-[80%]  flex items-center justify-between m-auto px-6  '>
          <Link href='#home' className='flex items-center gap-1' prefetch={false}>
            <Code className='h-8 w-8' />
            <span className='text-xl'>Ahmed Shawki</span>
            <span className='sr-only'>Ahmed Shawki</span>
          </Link>
          <nav className='flex gap-6 items-center'>
            <Link href='#home' prefetch={false}>
              Home
            </Link>
            <Link href='#about' prefetch={false}>
              About
            </Link>
            <Link href='#services' prefetch={false}>
              Services
            </Link>
            <Link href='#projects' prefetch={false}>
              Projects
            </Link>
            <Link href='#skills' prefetch={false}>
              Skills
            </Link>
            <Link href='#contact' prefetch={false}>
              Contact
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
    </>
  )
}
