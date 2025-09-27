'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useForm, ValidationError } from '@formspree/react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { useTranslations } from 'next-intl'

export default function ContactMe() {
  const [state, handleSubmit] = useForm('xgvlvolo')
  const [showSuccess, setShowSuccess] = useState(false)
  const [formKey, setFormKey] = useState(0)
  const t = useTranslations("contact")

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true)
      setFormKey((prev) => prev + 1)
      const timer = setTimeout(() => setShowSuccess(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  return (
    <section className='min-h-fit flex items-start justify-center px-4 py-15' id='contact'>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col items-center gap-8 rtl:space-y-5'>
        <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left'>
          {t('title')}
        </h2>

        {showSuccess && (
          <div className='w-full max-w-xl p-4 mb-4 rounded-md bg-green-100 text-green-700 shadow-md animate-in fade-in-0 zoom-in-95'>
            Message sent successfully! I’ll get back to you soon.
          </div>
        )}

        <div className='space-y-5 w-full'>
          <Card>
            <CardHeader>
              <h3 className='text-2xl font-bold'> {t('contactTitle')}</h3>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center space-x-2'>
                  <MapPin className='w-6 h-6' />
                  <span>{t('address')}</span>
                </div>
                <div>
                  <Link href='tel:+201098786468' className='flex items-center space-x-2 flex-row'>
                    <Phone className='w-6 h-6' />
                    <span>+201098786468</span>
                  </Link>
                </div>
                <div>
                  <Link
                    href='mailto:ahmedshawki.dev@gmail.com'
                    className='flex items-center space-x-2 flex-row'
                  >
                    <Mail className='w-6 h-6' />
                    <span>ahmedshawki.dev@gmail.com</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className='text-2xl font-bold'>{t('contactFormTitle')}</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4' key={formKey}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='flex flex-col space-y-2'>
                    <Label htmlFor='firstName'>{t('firstNameLabel')}</Label>
                    <Input id='firstName' type='text' name='firstName' required />
                    <ValidationError
                      prefix={t('firstNameLabel')}
                      field='firstName'
                      errors={state.errors}
                    />
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <Label htmlFor='lastName'>{t('lastNameLabel')}</Label>
                    <Input id='lastName' type='text' name='lastName' required />
                    <ValidationError
                      prefix={t('lastNameLabel')}
                      field='lastName'
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='email'>{t('emailLabel')}</Label>
                  <Input id='email' type='email' name='email' required />
                  <ValidationError prefix={t('emailLabel')} field='email' errors={state.errors} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='message'>{t('messageLabel')}</Label>
                  <Textarea id='message' name='message' rows={5} required />
                  <ValidationError
                    prefix={t('messageLabel')}
                    field='message'
                    errors={state.errors}
                  />
                </div>

                <Button
                  variant={'secondary'}
                  type='submit'
                  disabled={state.submitting}
                  className='w-full'
                >
                  {state.submitting ? t('sending') : t('sendMessage')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
