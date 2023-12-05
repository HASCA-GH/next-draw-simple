import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { MyContextPointsProvider } from '@/components/context/myContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-Draw Simple App',
  description: 'Just draw and save it to the Local Storage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextPointsProvider> {children}</MyContextPointsProvider>
      </body>
    </html>
  )
}
