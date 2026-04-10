import type { Metadata } from 'next'
import { CustomCursor, StarField } from '@/components'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'NEXUS - Premium Tech Solutions',
  description: 'Experience cutting-edge technology with an elegant interface. We build the future today.',
  keywords: 'web development, mobile apps, UI/UX design, cloud solutions, AI integration',
  authors: [{ name: 'NEXUS Technologies' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className="bg-dark-bg text-dark-text">
        <CustomCursor />
        <StarField />
        {children}
      </body>
    </html>
  )
}
