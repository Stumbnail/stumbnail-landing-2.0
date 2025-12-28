'use client'

import Image from 'next/image'

interface YouTubeLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function YouTubeLogo({ className = '', size = 'md' }: YouTubeLogoProps) {
  const sizes = {
    sm: { iconSize: 18, fontSize: 'text-sm', gap: 'gap-0.5' },
    md: { iconSize: 22, fontSize: 'text-base', gap: 'gap-1' },
    lg: { iconSize: 28, fontSize: 'text-lg', gap: 'gap-1' },
  }

  const { iconSize, fontSize, gap } = sizes[size]

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      <Image
        src="/assets/youtube.webp"
        alt="YouTube"
        width={iconSize}
        height={Math.round(iconSize * 0.7)}
        unoptimized
      />
      <span
        className={`font-semibold tracking-tight ${fontSize}`}
        style={{ color: 'var(--color-foreground)' }}
      >
        YouTube
      </span>
    </div>
  )
}
