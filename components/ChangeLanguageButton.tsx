'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const ChangeLanguageButton = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const router = useRouter()

  useEffect(() => {
    const match = document.cookie.match(/locale=(ar|en)(?=;|$)/)
    if (match) setLanguage(match[1] as 'en' | 'ar')
  }, [])

  const onChangeLanguage = (value: 'en' | 'ar') => {
    setLanguage(value)
    document.cookie = `locale=${value}; path=/`
    router.refresh()
  }

  return (
    <Select value={language} onValueChange={onChangeLanguage}>
      <SelectTrigger className='w-[80px]'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='z-[999]'>
        <SelectItem value='en'>EN</SelectItem>
        <SelectItem value='ar'>AR</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default ChangeLanguageButton
