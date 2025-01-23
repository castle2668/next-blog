import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Post } from '@/types/post'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="flex h-full flex-col transition-colors hover:border-primary">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('zh-TW')}
            </time>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PostCard
