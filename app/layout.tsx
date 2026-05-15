import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Riz Energy | Switch & Save | Electricity & Gas | Low Rates',

  description:
    'Switch & Save | Electricity & Gas | Low Rates',

  keywords: [
    'Texas Electricity',
    'Texas Energy',
    'Electricity Broker',
    'Natural Gas',
    'Commercial Energy',
    'Residential Energy',
    'Riz Energy',
    'Energy Rates Texas',
  ],

  authors: [
    {
      name: 'Riz Energy',
    },
  ],

  metadataBase: new URL('https://www.rizenergy.com'),

  openGraph: {
    title: 'Your Electricity and Natural Gas Broker',

    description:
      'Switch & Save | Electricity & Gas | Low Rates',

    url: 'https://www.rizenergy.com/',

    siteName: 'Riz Energy',

    images: [
      {
        url: '/social.jpg',
        width: 1024,
        height: 1024,
        type: 'image/jpg',
      },
    ],

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Riz Energy | Switch & Save',

    description:
      'Switch & Save | Electricity & Gas | Low Rates',

    images: ['/social.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
