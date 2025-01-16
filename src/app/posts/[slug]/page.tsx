import PostContent from '@/components/PostContent'
import { getMdxSource } from '@/lib/mdx'

interface PostPageProps {
  params: { slug: string }
}

const PostPage = async (props: PostPageProps) => {
  const { params } = props

  const { slug } = await params

  const { code, frontmatter } = await getMdxSource(slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <PostContent code={code} frontmatter={frontmatter} />
    </div>
  )
}

export default PostPage
