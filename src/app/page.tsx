import { Button } from '@/components/ui/button'

const Homepage = () => {
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
            <div
              key={category}
              className="rounded-lg border p-6 transition-colors hover:border-primary"
            >
              <h2 className="mb-2 text-xl font-semibold">{category}</h2>
              <Button variant="outline" className="w-full">
                瀏覽文章
              </Button>
            </div>
          )
        )}
      </section>

      {/* 最新文章區域 */}
      <section className="grid gap-8">
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">最新文章</h2>
          <div className="space-y-4">
            {/* 這裡之後會放最新文章列表 */}
            <p className="text-muted-foreground">即將加入文章列表...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
