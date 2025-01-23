import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageTitle } from '@/components/PageTitle'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/mdx'
import { Post } from '@/types/post'

const lifeTags = [
  'yearlyreview',
  'movie',
  'tools',
  'informationethics',
  'sdgs',
  'opendata',
]
const travelTags = ['travel', 'taiwan', 'japan', 'korea']

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params

  if (!category) return {}

  return {
    title: `${category === 'tech' ? '技術筆記' : category === 'life' ? '生活點滴' : '旅遊見聞'}`,
    description: `所有 ${category === 'tech' ? '技術筆記' : category === 'life' ? '生活點滴' : '旅遊見聞'} 相關的文章`,
    openGraph: {
      url: `https://seanhuang.dev/${category}`,
      title: `${category === 'tech' ? '技術筆記' : category === 'life' ? '生活點滴' : '旅遊見聞'}`,
      description: `所有 ${category === 'tech' ? '技術筆記' : category === 'life' ? '生活點滴' : '旅遊見聞'} 相關的文章`,
    },
  }
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params

  // 根據 category 對應的 tags 過濾出該類別的文章
  const posts = await getAllPosts()
  let categoryPosts: Post[] = []
  if (category === 'life') {
    categoryPosts = posts.filter(post =>
      lifeTags.some(tag => post.tags.includes(tag))
    )
  } else if (category === 'travel') {
    categoryPosts = posts.filter(post =>
      travelTags.some(tag => post.tags.includes(tag))
    )
  } else if (category === 'tech') {
    // 不屬於 lifeTags 和 travelTags 的其他文章都是屬於 tech 類別
    categoryPosts = posts.filter(
      post => !lifeTags.some(tag => post.tags.includes(tag))
    )
  }

  if (categoryPosts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <PageTitle>
          {category === 'tech'
            ? '技術筆記'
            : category === 'life'
              ? '生活點滴'
              : '旅遊見聞'}
        </PageTitle>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          共有 {categoryPosts.length} 篇相關文章
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categoryPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
