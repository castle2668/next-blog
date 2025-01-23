import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { PageTitle } from '@/components/PageTitle'
import { getAllPosts } from '@/lib/mdx'
import { Post } from '@/types/post'

export const metadata: Metadata = {
  title: '歸檔',
  description: '所有文章的歸檔，按照年份與月份分類',
  openGraph: {
    url: 'https://seanhuang.dev/archives',
    title: '歸檔',
    description: '所有文章的歸檔，按照年份與月份分類',
  },
}

const ArchivesPage = async () => {
  const posts = await getAllPosts()

  // 按年份分類 最新年份在最前面
  const yearPosts = posts.reduce(
    (acc, post) => {
      const year = new Date(post.date).getFullYear()
      acc[year] = acc[year] || []
      acc[year].push(post)
      return acc
    },
    {} as Record<string, Post[]>
  )
  const sortedYearPosts = Object.entries(yearPosts).sort(
    (a, b) => Number(b[0]) - Number(a[0])
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose dark:prose-invert mx-auto">
        <PageTitle>歸檔</PageTitle>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          目前總共有 {posts.length} 篇文章 `ʕ•̀ω•́ʔ✧`
        </p>
        {/* 直接用 ul li 全部列表列出 但分出 2024 然後列出來 然後標題前面加上 Jul. 這樣 */}
        <ul>
          {sortedYearPosts.map(([year, posts]) => (
            <li key={year}>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {year}
              </h3>
              <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:marker:text-foreground">
                {posts.map(post => (
                  <li key={post.slug}>
                    <span className="mr-1 text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en', {
                        month: 'short',
                      })}
                      .
                    </span>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="font-medium text-primary underline underline-offset-4"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ArchivesPage
