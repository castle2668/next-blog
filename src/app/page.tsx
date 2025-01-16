import Link from 'next/link'

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
        <h1 className="mb-4 text-4xl font-bold">歡迎來到我的部落格</h1>
        <p className="text-lg text-muted-foreground">
          分享技術、電影、動漫、遊戲和旅遊的心得
        </p>
      </section>

      {/* 文章分類區域 */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {['技術筆記', '電影觀後感', '動漫心得', '遊戲評論', '旅遊紀錄'].map(
          category => (
            <Card
              key={category}
              className="transition-colors hover:border-primary"
            >
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  瀏覽文章
                </Button>
              </CardContent>
            </Card>
          )
        )}
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
