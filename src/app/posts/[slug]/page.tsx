import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PostContent from '@/components/PostContent'
import { getMdxSource } from '@/lib/mdx'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = await getMdxSource(slug)
  if (!frontmatter) return {}

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    openGraph: {
      url: `https://seanhuang.dev/posts/${slug}`,
      title: frontmatter.title,
      description: frontmatter.excerpt,
    },
  }
}

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params

  let codeData
  let frontmatterData

  try {
    const { code, frontmatter } = await getMdxSource(slug)
    codeData = code
    frontmatterData = frontmatter
  } catch (error) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PostContent code={codeData} frontmatter={frontmatterData} />
    </div>
  )
}

export default PostPage
