import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import rehypePrettyCode from 'rehype-pretty-code'

import { Post } from '@/types/post'

const prettyCodeOptions = {
  theme: 'one-dark-pro',
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['word']
  },
}

export async function getMdxSource(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content', `${slug}.md`)
  const source = fs.readFileSync(filePath, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrettyCode, prettyCodeOptions],
      ]
      return options
    },
  })

  return {
    code,
    frontmatter,
  }
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content'))

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const source = fs.readFileSync(
        path.join(process.cwd(), 'src/content', file),
        'utf8'
      )
      const { data } = matter(source)

      return {
        ...(data as Omit<Post, 'slug'>),
        slug: file.replace('.md', ''),
      }
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
}
