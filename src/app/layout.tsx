import './globals.css'

import type { Metadata } from 'next'

import { ModeToggle } from '@/components/ModeToggle'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: '大貓的第一個家',
  description: '大貓的第一個家',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
