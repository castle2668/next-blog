import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '大貓的第一個家',
    short_name: '大貓的第一個家',
    description:
      '歡迎來到我的部落格，這裡有我分享的技術筆記、生活點滴和旅遊見聞。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo-rounded.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-rounded.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
