import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://varefinance.com'),
  title: {
    default: 'Varefinance.com — VA Loan Refinancing for Veterans',
    template: '%s | Varefinance.com',
  },
  description:
    'Varefinance.com helps veterans and military families understand VA loan refinancing options including VA IRRRL and VA Cash-Out refinance. You served your country — now let your VA loan serve you.',
  keywords: ['VA loan refinance', 'VA IRRRL', 'VA cash-out refinance', 'veteran home loan', 'military mortgage', 'streamline refinance'],
  openGraph: {
    type: 'website',
    siteName: 'Varefinance.com',
    title: 'Varefinance.com — VA Loan Refinancing for Veterans',
    description: 'Educational resource helping veterans and military families get the most from their VA home loan benefits.',
    url: 'https://varefinance.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varefinance.com — VA Loan Refinancing for Veterans',
    description: 'Educational resource helping veterans and military families get the most from their VA home loan benefits.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
