import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { organizationSchema } from '@/lib/schema'

const GA_ID = 'G-Y4MCKMSW56'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://varefinance.com'),
  title: {
    default: 'VARefinance.com — VA Loan Refinancing for Veterans',
    template: '%s | VARefinance.com',
  },
  description:
    'VARefinance.com helps veterans and military families understand VA loan refinancing options including VA IRRRL and VA Cash-Out refinance. You served your country — now let your VA loan serve you.',
  keywords: ['VA loan refinance', 'VA IRRRL', 'VA cash-out refinance', 'veteran home loan', 'military mortgage', 'streamline refinance'],
  openGraph: {
    type: 'website',
    siteName: 'VARefinance.com',
    title: 'VARefinance.com — VA Loan Refinancing for Veterans',
    description: 'Educational resource helping veterans and military families get the most from their VA home loan benefits.',
    url: 'https://varefinance.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VARefinance.com — VA Loan Refinancing for Veterans',
    description: 'Educational resource helping veterans and military families get the most from their VA home loan benefits.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="cwLT3buJK4DWWeGg7jqmhqkjP75jN-Hbwwx8ErD6DxY" />
        <JsonLd data={organizationSchema} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
