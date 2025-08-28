'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Code, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ModeToggle } from '../mode-toggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <div className='flex flex-row-reverse justify-between items-center w-full absolute top-0 left-0 px-5 py-5'>
          <div className='xl:hidden'>
            <ModeToggle />
          </div>
          <SheetTrigger asChild className='fixed top-4 left-5 px-4 py-5 z-50 backdrop-blur-3xl'>
            <Button variant='ghost' size='icon' className='xl:hidden'>
              <MenuIcon className='h-8 w-8' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='pl-5 pt-5'
            onCloseAutoFocus={(event) => event.preventDefault()}
          >
            <SheetHeader className='flex flex-row gap-1'>
              <Code className='h-6 w-6 items-center ' />
              <span className='text-xl'>Ahmed Shawki</span>
            </SheetHeader>
            <div className='grid gap-2 py-6'>
              <Link href={'#home'} onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href='#about' onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href='#services' onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link href='#projects' onClick={() => setOpen(false)}>
                Projects
              </Link>
              <Link href='#skills' onClick={() => setOpen(false)}>
                Skills
              </Link>
              <Link href='#contact' onClick={() => setOpen(false)}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </div>
      </Sheet>

      <header
        className={`fixed left-0 top-0 w-full h-15 hidden xl:flex items-center transition-colors duration-300 z-50 backdrop-blur-xs`}
      >
        <div className=' w-[80%]  flex items-center justify-between m-auto px-6'>
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
