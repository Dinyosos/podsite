import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Podsite - Modern Podcast',
  description: 'A sleek, modern podcast website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

