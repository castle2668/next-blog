import { Metadata } from 'next'
import Link from 'next/link'

import { PageTitle } from '@/components/PageTitle'
import { Badge } from '@/components/ui/badge'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: '標籤列表',
  description: '所有標籤列表',
  openGraph: {
    url: 'https://seanhuang.dev/tags',
    title: '標籤列表',
    description: '所有標籤列表',
  },
}

const TagsPage = async () => {
  const posts = await getAllPosts()

  // 收集所有標籤並計算文章數量
  const tagCounts = posts.reduce(
    (acc, post) => {
      post.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1
      })
      return acc
    },
    {} as Record<string, number>
  )

  // 轉換成陣列並排序
  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose dark:prose-invert mx-auto">
        <PageTitle>標籤列表</PageTitle>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          目前總共有 {sortedTags.length} 個標籤 `(๑•̀ω•́)ノ`
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {sortedTags.map(([tag, count]) => (
            <Link key={tag} href={`/tags/${tag}`}>
              <Badge
                variant="secondary"
                className="cursor-pointer px-4 py-2 text-lg hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
                <span className="ml-2 text-muted-foreground">({count})</span>
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TagsPage
