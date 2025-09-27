'use client'

import { useTranslations } from 'next-intl'
import { contacts } from '../../data'
import { Button } from '../ui/button'
import { CopyrightIcon } from 'lucide-react'

const Footer = () => {
  const t = useTranslations('footer')
  const date = new Date()
  return (
    <footer className='py-5 space-y-2 flex flex-col container  m-auto'>
      <div className='text-base-content text-center text-base space-x-1 '>
        <span>{t("footer")}</span>
      </div>
      <div className='flex flex-wrap justify-center  gap-2  '>
        {contacts.map(({ id, icon, link }) => (
          <Button
            variant={'link'}
            key={id}
            className='cursor-pointer'
            onClick={() => {
              window.open(link)
            }}
          >
            {icon}
          </Button>
        ))}
      </div>
    </footer>
  )
}

export default Footer
