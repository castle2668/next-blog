import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

interface PostContentProps {
  code: string
  frontmatter: any
}

const PostContent = (props: PostContentProps) => {
  const { code, frontmatter } = props
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <div className="mb-8">
        <h1>{frontmatter.title}</h1>
        <div className="text-sm text-muted-foreground">
          {new Date(frontmatter.date).toLocaleDateString('zh-TW')} ·{' '}
          {frontmatter.author}
        </div>
      </div>
      <Component />
    </article>
  )
}

export default PostContent
