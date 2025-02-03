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

interface GroupedPost {
  yearMonth: string
  displayMonth: string
  posts: Post[]
}

export default async function ArchivesPage() {
  const posts = await getAllPosts()

  // 將文章依年月分組
  const groupedPosts = posts.reduce((acc: GroupedPost[], post) => {
    const date = new Date(post.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const yearMonth = `${year}-${month.toString().padStart(2, '0')}`
    const displayMonth = `${year}年${month}月`

    const existingGroup = acc.find(group => group.yearMonth === yearMonth)
    if (existingGroup) {
      existingGroup.posts.push(post)
    } else {
      acc.push({
        yearMonth,
        displayMonth,
        posts: [post],
      })
    }
    return acc
  }, [])

  // 依年月排序（新到舊）
  const sortedGroups = groupedPosts.sort((a, b) =>
    b.yearMonth.localeCompare(a.yearMonth)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose dark:prose-invert mx-auto">
        <PageTitle>歸檔</PageTitle>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          目前總共有 {posts.length} 篇文章 `ʕ•̀ω•́ʔ✧`
        </p>

        <div className="mt-8 space-y-12">
          {sortedGroups.map(group => (
            <div
              key={group.yearMonth}
              className="flex flex-col sm:flex-row sm:gap-12"
            >
              {/* 左側年月 */}
              <div className="w-32 flex-shrink-0">
                <p className="text-lg font-medium">{group.displayMonth}</p>
              </div>

              {/* 右側文章列表 */}
              <div className="mt-6 flex-1 space-y-4 sm:mt-0.5">
                {group.posts
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map(post => (
                    <div key={post.slug} className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-1 sm:gap-4">
                        <time className="min-w-24 text-sm text-muted-foreground lg:text-base">
                          {new Date(post.date).toISOString().split('T')[0]}
                        </time>
                        <Link
                          href={`/posts/${post.slug}`}
                          className="text-base font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                        >
                          {post.title}
                        </Link>
                      </div>
                      <div className="hidden sm:block">
                        {post.tags && (
                          <div className="flex flex-wrap gap-2 sm:ml-28">
                            {post.tags.map(tag => (
                              <span
                                key={tag}
                                className="text-sm text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
