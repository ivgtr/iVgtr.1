import React, { useEffect, useState, HTMLAttributes } from 'react'
import { applyPolyfills, defineCustomElements, JSX as LocalJSX } from '@uit/glitch-image/loader'

type ToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, 'className'> & {
      class?: string
      alt?: string
    }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ToReact<LocalJSX.IntrinsicElements> {}
  }
}

applyPolyfills().then(() => {
  defineCustomElements()
})

const LazyLoad: React.FC<{ imgUrl: string; preImgUrl: string; alt: string }> = ({
  imgUrl,
  preImgUrl,
  alt
}) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imgUrl

    img.onload = () => {
      setLoaded(true)
    }
  }, [])

  if (loaded) {
    // return <glitch-image src={imgUrl} alt={alt} />
  }

  return <img src={preImgUrl} alt={alt} className="w-full h-full object-cover" />
}

const Icon = () => {
  return (
    <div className="relative grid items-center justify-items-center box-border bg-rainbow rounded-full">
      <div className="relative box-border w-28 h-28 m-1 rounded-full overflow-hidden">
        <LazyLoad imgUrl="/icon.jpg" preImgUrl="/tmp_icon.jpg" alt="すみっこソフト" />
      </div>
    </div>
  )
}

export default Icon
