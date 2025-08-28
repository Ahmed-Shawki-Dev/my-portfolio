'use client'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { IContact } from '../../interface'

export function AboutMeHover({ hoverText, icon, link, name }: IContact) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant='outline'
          size={'icon'}
          className='flex items-center gap-2  font-medium justify-center cursor-pointer rounded-full p-2 '
          onClick={() => window.open(link, '_blank')}
        >
          {icon}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between gap-4'>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>{name}</h4>
            <p className='text-sm'>{hoverText}</p>
            <div className='text-muted-foreground text-xs'>{link}</div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
