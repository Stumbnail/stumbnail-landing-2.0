'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

type InfiniteScrollerProps = {
  images: string[]
}

export function InfiniteScroller({ images }: InfiniteScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<number | null>(null)
  const scrollPositionRef = useRef(0)
  const velocityRef = useRef(1) // 1 = full speed, 0 = stopped
  const targetVelocityRef = useRef(1)
  const hasImages = images.length > 0

  const baseSpeed = 0.8 // pixels per frame

  const animate = useCallback(function animate() {
    if (!scrollerRef.current || !hasImages) return

    // Ease velocity towards target
    const easeFactor = 0.03 // Lower = smoother easing
    velocityRef.current += (targetVelocityRef.current - velocityRef.current) * easeFactor

    // Update scroll position
    scrollPositionRef.current += baseSpeed * velocityRef.current

    // Get the width of one set of thumbnails (half the total width)
    const halfWidth = scrollerRef.current.scrollWidth / 2

    // Reset position for seamless loop
    if (scrollPositionRef.current >= halfWidth) {
      scrollPositionRef.current = 0
    }

    // Apply transform
    scrollerRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`

    animationRef.current = requestAnimationFrame(animate)
  }, [hasImages])

  useEffect(() => {
    if (!hasImages) return

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, hasImages])

  useEffect(() => {
    targetVelocityRef.current = isHovered ? 0 : 1
  }, [isHovered])

  if (!hasImages) {
    return null
  }

  return (
    <div className="w-full overflow-hidden py-6 md:py-7">
      <div
        ref={scrollerRef}
        className="flex gap-3 md:gap-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {/* First complete set of all thumbnails */}
        {images.map((src, i) => (
          <div key={`set1-${i}`} className="flex-shrink-0">
            <Image
              src={`/assets/images/thumbnails/${src}`}
              alt=""
              width={640}
              height={360}
              className="h-auto w-44 rounded-2xl md:w-52 lg:w-60 xl:w-64"
            />
          </div>
        ))}

        {/* Second complete set for seamless loop */}
        {images.map((src, i) => (
          <div key={`set2-${i}`} className="flex-shrink-0">
            <Image
              src={`/assets/images/thumbnails/${src}`}
              alt=""
              width={640}
              height={360}
              className="h-auto w-44 rounded-2xl md:w-52 lg:w-60 xl:w-64"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
