import type { Metadata } from 'next'
import { getSiteMeta } from '@/lib/data'
import { Header, Footer } from '@/components/SiteNav'
import './globals.css'

const siteMeta = getSiteMeta()

export const metadata: Metadata = {
  title: {
    default: siteMeta.siteName,
    template: `%s | ${siteMeta.siteName}`,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: siteMeta.author }],
  openGraph: {
    type: 'website',
    locale: siteMeta.language,
    url: siteMeta.siteUrl,
    siteName: siteMeta.siteName,
    title: siteMeta.siteName,
    description: siteMeta.description,
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteMeta.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.siteName,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: siteMeta.favicon,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={siteMeta.language}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

