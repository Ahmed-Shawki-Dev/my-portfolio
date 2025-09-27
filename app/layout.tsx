import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import UpButton from '@/components/UpButton'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'

import { Cairo } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'

const cairoSans = Cairo({
  subsets: ['latin', 'arabic'],
})

export const metadata: Metadata = {
  title: 'Ahmed Shawki - Web Dev',
  description:
    'Portfolio of Ahmed Shawki, showcasing projects, skills, and contact information for web development services.',
  keywords: [
    'Ahmed Shawki',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Frontend',
    'Web Design',
    'Fullstack',
  ],
  authors: [{ name: 'Ahmed Shawki', url: 'https://ahmedshawkidev.vercel.app/' }],
  creator: 'Ahmed Shawki',
  publisher: 'Ahmed Shawki',
  openGraph: {
    type: 'website',
    title: 'Ahmed Shawki - Web Dev',
    description:
      'Portfolio of Ahmed Shawki, showcasing projects, skills, and contact information for web development services.',
    url: 'https://ahmedshawkidev.vercel.app/',
    siteName: 'Ahmed Shawki Portfolio',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Ahmed Shawki Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Shawki - Web Developer',
    description:
      'Portfolio of Ahmed Shawki, showcasing projects, skills, and contact information for web development services.',
    creator: '@AhmedShawkiDev',
    images: ['/og-image.webp'],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const store = await cookies()
  const locale = store.get('locale')?.value || 'en'
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${cairoSans.className}`} dir={locale==='ar'?'rtl':'ltr'} suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Navbar />
            {children}
            <Footer />
            <UpButton />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
