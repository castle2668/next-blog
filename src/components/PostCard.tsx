import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Post } from '@/types/post'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="h-full transition-colors hover:border-primary">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center gap-2">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('zh-TW')}
              </time>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default PostCard
