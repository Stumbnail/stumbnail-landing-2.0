'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { THUMBNAIL_IMAGES } from '@/lib/constants'

export function InfiniteScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<number | null>(null)
  const scrollPositionRef = useRef(0)
  const velocityRef = useRef(1) // 1 = full speed, 0 = stopped
  const targetVelocityRef = useRef(1)

  const baseSpeed = 0.8 // pixels per frame

  const animate = useCallback(() => {
    if (!scrollerRef.current) return

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
  }, [])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  useEffect(() => {
    targetVelocityRef.current = isHovered ? 0 : 1
  }, [isHovered])

  return (
    <div className="w-full overflow-hidden py-6 md:py-8">
      <div
        ref={scrollerRef}
        className="flex gap-4 md:gap-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {/* First complete set of all thumbnails */}
        {THUMBNAIL_IMAGES.map((src, i) => (
          <div key={`set1-${i}`} className="flex-shrink-0">
            <Image
              src={`/assets/images/thumbnails/${src}`}
              alt=""
              width={640}
              height={360}
              className="rounded-2xl w-56 h-auto md:w-72 lg:w-80 xl:w-96"
            />
          </div>
        ))}

        {/* Second complete set for seamless loop */}
        {THUMBNAIL_IMAGES.map((src, i) => (
          <div key={`set2-${i}`} className="flex-shrink-0">
            <Image
              src={`/assets/images/thumbnails/${src}`}
              alt=""
              width={640}
              height={360}
              className="rounded-2xl w-56 h-auto md:w-72 lg:w-80 xl:w-96"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
