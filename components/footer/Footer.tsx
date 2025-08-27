'use client'

import { contacts } from '../../data'
import { Button } from '../ui/button'

const Footer = () => {
  const date = new Date()
  return (
    <footer className='py-5 space-y-2 flex flex-col container  m-auto'>
      <div className='text-base-content text-center text-base space-x-1 '>
        <span>&copy;{date.getFullYear()}</span>
        <span>Ahmed Shawki. Made With ❤️</span>
      </div>
      <div className='flex flex-wrap justify-center  gap-2  '>
        {contacts.map(({ id, icon, link }) => (
          <Button
            variant={'ghost'}
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
