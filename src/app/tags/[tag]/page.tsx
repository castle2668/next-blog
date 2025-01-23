import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageTitle } from '@/components/PageTitle'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/mdx'

interface TagPageProps {
  params: Promise<{ tag: string }>
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params

  return {
    title: `#${tag}`,
    description: `#${tag} 相關文章`,
    openGraph: {
      url: `https://seanhuang.dev/tags/${tag}`,
      title: `#${tag}`,
      description: `#${tag} 相關文章`,
    },
  }
}

const TagPage = async ({ params }: TagPageProps) => {
  const { tag } = await params
  const posts = await getAllPosts()

  // 過濾出含有該標籤的文章
  const tagPosts = posts.filter(post => post.tags.includes(tag))

  if (tagPosts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <PageTitle>#{tag}</PageTitle>
        <p className="text-muted-foreground">
          共有 {tagPosts.length} 篇相關文章
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {tagPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default TagPage
