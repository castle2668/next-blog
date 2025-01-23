'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const pathname = usePathname()
  if (pathname === '/resume') {
    return null
  }

  return (
    <footer className="flex h-36 items-center justify-center bg-footer-texture bg-repeat-x text-center">
      <div className="container mx-auto px-4 text-white">
        <p>
          Copyright © 2019-{new Date().getFullYear()}{' '}
          <Link
            href="https://github.com/castle2668"
            className="underline underline-offset-4 hover:text-maple-600"
          >
            Sean Huang
          </Link>
          . All rights reserved.
        </p>
        <p>
          All images and other content related to MapleStory are owned by Nexon
          Corporation.
        </p>
      </div>
    </footer>
  )
}

export default Footer
