import type { MetadataRoute } from 'next'

import { getAllPosts } from '@/lib/mdx'

const baseUrl = 'https://www.seanhuang.dev'

const posts = await getAllPosts()
const postsMap: MetadataRoute.Sitemap = posts.map(post => ({
  url: `${baseUrl}/posts/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'daily',
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/archives`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/categories/life`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/categories/tech`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/categories/travel`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    ...postsMap,
  ]
}
