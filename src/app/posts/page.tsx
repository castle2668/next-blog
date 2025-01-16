import PostCard from '@/components/PostCard'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { getAllPosts } from '@/lib/mdx'
import { getPaginatedPosts } from '@/lib/pagination'

interface PostsPageProps {
  searchParams: { page: string }
}

const PostsPage = async (props: PostsPageProps) => {
  const { searchParams } = props

  const { page } = await searchParams

  const posts = await getAllPosts()
  const currentPage = Number(page) || 1

  const { items: paginatedPosts, pagination } = getPaginatedPosts(
    posts,
    currentPage,
    8
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">所有文章</h1>
        <p className="mt-2 text-muted-foreground">
          分享技術、電影、動漫、遊戲和旅遊的心得
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {paginatedPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* 分頁導航 */}
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent className="flex flex-wrap justify-center gap-2">
            {pagination.hasPrevPage && (
              <PaginationItem className="min-w-[100px]">
                <PaginationPrevious href={`/posts?page=${currentPage - 1}`} />
              </PaginationItem>
            )}

            {/* 首頁 */}
            <PaginationItem>
              <PaginationLink href="/posts?page=1" isActive={currentPage === 1}>
                1
              </PaginationLink>
            </PaginationItem>

            {/* 省略號和中間頁碼 */}
            {currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
              .filter(num => num !== 1 && num !== pagination.totalPages)
              .filter(num => Math.abs(num - currentPage) <= 1)
              .map(pageNumber => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href={`/posts?page=${pageNumber}`}
                    isActive={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}

            {currentPage < pagination.totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* 最後一頁 */}
            {pagination.totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  href={`/posts?page=${Number(pagination.totalPages)}`}
                  isActive={currentPage === Number(pagination.totalPages)}
                >
                  {pagination.totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            {pagination.hasNextPage && (
              <PaginationItem className="min-w-[100px]">
                <PaginationNext href={`/posts?page=${currentPage + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default PostsPage
