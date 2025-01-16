import Link from 'next/link'

import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">大貓的第一個家</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center space-x-6">
            <Link
              href="/posts"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              文章
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
