import './globals.css'

import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    template: '%s | 大貓的第一個家',
    default: '大貓的第一個家',
  },
  description:
    '歡迎來到我的部落格，這裡有我分享的技術筆記、生活點滴和旅遊見聞。',
  applicationName: '大貓的第一個家',
  authors: [{ name: 'Sean Huang', url: 'https://github.com/castle2668' }],
  keywords: ['大貓', '大貓的第一個家', '大貓的部落格', '大貓的筆記'],
  creator: 'Sean Huang',
  publisher: 'Sean Huang',
  openGraph: {
    type: 'website',
    url: 'https://seanhuang.dev',
    title: '大貓的第一個家',
    description:
      '歡迎來到我的部落格，這裡有我分享的技術筆記、生活點滴和旅遊見聞。',
    siteName: '大貓的第一個家',
    // images: [
    //   {
    //     url: 'https://seanhuang.dev/og.png',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@castle2668',
    creator: '@castle2668',
    // images: 'https://seanhuang.dev/og.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-360W2PV7GV"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-360W2PV7GV');
        `}
      </Script>
    </html>
  )
}
