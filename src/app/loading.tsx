import Image from 'next/image'
import React from 'react'

import LoadingImage from '@/assets/images/loading.gif'

const Loading = () => {
  return (
    <div className="flex h-[calc(100vh-201px)] w-full items-center justify-center">
      <Image
        src={LoadingImage.src}
        alt="loading image"
        width={250}
        height={250}
      />
    </div>
  )
}

export default Loading
