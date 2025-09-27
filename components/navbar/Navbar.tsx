'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ChangeLanguageButton from '../ChangeLanguageButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const t = useTranslations('Navbar')
const locale = useLocale() 
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <div className='flex flex-row items-center justify-between w-full fixed top-0 left-0 px-5 py-5 z-50 xl:hidden backdrop-blur-3xl'>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon'>
              <MenuIcon className='h-8 w-8' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <ChangeLanguageButton />
        </div>

        <SheetContent
          side={locale === 'ar' ? 'right' : 'left'}
          className='pl-5 pt-5'
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <SheetHeader>
            <Image alt='logo' src={'/logo.webp'} width={60} height={60} />
          </SheetHeader>
          <div className='grid gap-2'>
            <Link href={'#home'} onClick={() => setOpen(false)}>
              {t('home')}
            </Link>
            <Link href='#about' onClick={() => setOpen(false)}>
              {t('about')}
            </Link>
            <Link href='#services' onClick={() => setOpen(false)}>
              {t('services')}
            </Link>
            <Link href='#projects' onClick={() => setOpen(false)}>
              {t('projects')}
            </Link>
            <Link href='#skills' onClick={() => setOpen(false)}>
              {t('skills')}
            </Link>
            <Link href='#contact' onClick={() => setOpen(false)}>
              {t('contact')}
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <header
        className={`fixed left-0 top-0   w-full h-15 hidden xl:flex items-center  transition-colors duration-300 z-50 backdrop-blur-xs `}
      >
        <div className=' w-[80%] flex items-center justify-between m-auto px-6'>
          <Link href='/' className='flex items-center gap-1' prefetch={false}>
            <Image alt='logo' src={'/logo.webp'} width={60} height={60} />
            <span className='sr-only'>Ahmed Shawki</span>
          </Link>
          <nav className='flex gap-6 items-center'>
            <Link href='#home' prefetch={false}>
              {t('home')}
            </Link>
            <Link href='#about' prefetch={false}>
              {t('about')}
            </Link>
            <Link href='#services' prefetch={false}>
              {t('services')}
            </Link>
            <Link href='#projects' prefetch={false}>
              {t('projects')}
            </Link>
            <Link href='#skills' prefetch={false}>
              {t('skills')}
            </Link>
            <Link href='#contact' prefetch={false}>
              {t('contact')}
            </Link>
            <ChangeLanguageButton />
          </nav>
        </div>
      </header>
    </>
  )
}
