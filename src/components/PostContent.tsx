'use client'

import { getMDXComponent } from 'mdx-bundler/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Badge } from './ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

interface PostContentProps {
  code: string
  frontmatter: {
    title: string
    date: string
    excerpt: string
    tags: string[]
  }
}

const PostContent = ({ code, frontmatter }: PostContentProps) => {
  const MDXContent = getMDXComponent(code)
  const router = useRouter()

  return (
    <article className="mx-auto">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首頁</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/posts">文章</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{frontmatter.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {frontmatter.title}
      </h1>

      <div className="flex flex-wrap items-center gap-2 leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString('zh-TW')}
        </time>
        <span>·</span>
        {frontmatter.tags.map(tag => (
          <Badge
            key={tag}
            variant="secondary"
            onClick={() => {
              router.push(`/tags/${tag}`)
            }}
            className="cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {frontmatter.excerpt}
      </p>

      <div className="leading-7 [&:not(:first-child)]:mt-6">
        <MDXContent
          components={{
            h2: ({ children }) => (
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="font-medium text-primary underline underline-offset-4"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="mt-6 border-l-2 pl-6 italic">
                {children}
              </blockquote>
            ),
            ul: ({ children }) => (
              <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:marker:text-foreground">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-6 ml-6 list-decimal space-y-2 [&>li]:marker:text-foreground">
                {children}
              </ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            table: ({ children }) => (
              <div className="my-6 w-full overflow-y-auto">
                <table className="w-full">{children}</table>
              </div>
            ),
            thead: ({ children }) => <thead>{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => (
              <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>
            ),
            th: ({ children }) => (
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {children}
              </td>
            ),
            code: ({ children, className }) => {
              if (className) {
                return <code className={className}>{children}</code>
              }
              return (
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  {children}
                </code>
              )
            },
            pre: ({ children }) => <pre>{children}</pre>,
            img: ({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 768px"
                style={{
                  width: '100%',
                  maxWidth: '768px',
                  height: 'auto',
                  margin: '0 auto',
                }}
                className="my-6"
              />
            ),
          }}
        />
      </div>
    </article>
  )
}

export default PostContent
