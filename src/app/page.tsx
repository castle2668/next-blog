import Link from 'next/link'

import { PageTitle } from '@/components/PageTitle'
import PostCard from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllPosts } from '@/lib/mdx'

const Homepage = async () => {
  const posts = await getAllPosts()

  const recentPosts = posts.slice(0, 6) // 只取最新的 6 篇

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 頁面標題區域 */}
      <section className="mb-12 text-center">
        <PageTitle>歡迎來到我的部落格</PageTitle>
        <p className="text-lg text-muted-foreground">
          分享技術、電影、動漫、遊戲和旅遊的心得
        </p>
      </section>

      {/* 文章分類區域 */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: '技術筆記',
            description: '分享前端開發與程式設計相關的學習心得',
            href: '/category/tech',
          },
          {
            title: '生活點滴',
            description: '記錄電影、動漫、遊戲等日常生活的體驗',
            href: '/category/life',
          },
          {
            title: '旅遊見聞',
            description: '分享旅行中的所見所聞與特別的體驗',
            href: '/category/travel',
          },
        ].map(category => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <Link href={category.href}>
                <Button variant="outline" className="w-full">
                  瀏覽文章
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* 最新文章區域 */}
      <section>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle>最新文章</CardTitle>
            <Link href="/posts">
              <Button variant="outline">查看全部</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {recentPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Homepage
