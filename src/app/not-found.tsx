import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex h-[calc(100vh-57px)] flex-col items-center justify-center gap-10 px-4 py-8">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground">
        抱歉，您訪問的頁面不存在。
      </p>
      <Link href="/">
        <Button>返回首頁</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
