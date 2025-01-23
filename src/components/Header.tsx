'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Logo from '@/assets/images/logo.jpeg'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

import { ModeToggle } from './ModeToggle'

const Header = () => {
  const pathname = usePathname()
  if (pathname === '/resume') {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={Logo.src} alt="網站 Logo" />
          </Avatar>
          <span className="hidden font-bold md:inline">大貓的第一個家</span>
        </Link>

        <div className="flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center space-x-6">
            <Link
              href="/posts"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              文章
            </Link>
            <Link
              href="/tags"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              標籤
            </Link>
            <Link
              href="/archives"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              歸檔
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              關於我
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
