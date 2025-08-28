import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { ThemeProvider } from '../components/theme-provider'
import './globals.css'
import UpButton from '../components/UpButton'

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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${cairoSans.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <UpButton/>
        </ThemeProvider>
      </body>
    </html>
  )
}
