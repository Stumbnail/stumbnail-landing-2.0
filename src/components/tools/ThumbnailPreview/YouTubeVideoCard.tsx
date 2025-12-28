'use client'

import Image from 'next/image'

interface YouTubeVideoCardProps {
  thumbnail: string | null
  title: string
  channel: string
  channelAvatar?: string
  views: string
  timestamp: string
  duration: string
  verified?: boolean
  isUserThumbnail?: boolean
  variant?: 'home' | 'search' | 'sidebar'
}

function ThumbnailPlaceholder({ label }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#ff6f61]/20 to-[#ff6f61]/5 border-2 border-dashed border-[#ff6f61]/40">
      <svg className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#ff6f61' }}>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="m21 15-5-5L5 21"/>
      </svg>
      <span className="text-[10px] font-medium text-[#ff6f61]">{label || 'Your Thumbnail'}</span>
    </div>
  )
}

export function YouTubeVideoCard({
  thumbnail,
  title,
  channel,
  channelAvatar,
  views,
  timestamp,
  duration,
  verified = false,
  isUserThumbnail = false,
  variant = 'home',
}: YouTubeVideoCardProps) {
  if (variant === 'sidebar') {
    return (
      <div className="flex gap-2 group cursor-pointer">
        <div className="relative w-[168px] min-w-[168px] aspect-video rounded-lg overflow-hidden">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              unoptimized
            />
          ) : isUserThumbnail ? (
            <ThumbnailPlaceholder />
          ) : null}
          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 py-0.5 rounded font-medium">
            {duration}
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-0 py-0.5">
          <h3 className="text-[13px] font-medium leading-tight line-clamp-2 group-hover:text-[#3ea6ff] transition-colors" style={{ color: 'var(--color-foreground)' }}>
            {title}
          </h3>
          <span className="text-[11px] mt-1 flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>
            {channel}
            {verified && (
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            )}
          </span>
          <span className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
            {views} • {timestamp}
          </span>
        </div>
      </div>
    )
  }

  if (variant === 'search') {
    return (
      <div className="flex gap-4 group cursor-pointer">
        <div className="relative w-[360px] min-w-[360px] aspect-video rounded-xl overflow-hidden">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              unoptimized
            />
          ) : isUserThumbnail ? (
            <ThumbnailPlaceholder />
          ) : null}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
            {duration}
          </div>
        </div>
        <div className="flex flex-col flex-1 py-1">
          <h3 className="text-lg font-medium leading-snug line-clamp-2 group-hover:text-[#3ea6ff] transition-colors" style={{ color: 'var(--color-foreground)' }}>
            {title}
          </h3>
          <span className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
            {views} • {timestamp}
          </span>
          <div className="flex items-center gap-2 mt-3">
            {channelAvatar && (
              <Image
                src={channelAvatar}
                alt={channel}
                width={24}
                height={24}
                className="rounded-full"
                unoptimized
              />
            )}
            <span className="text-sm flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>
              {channel}
              {verified && (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              )}
            </span>
          </div>
        </div>
      </div>
    )
  }

  // Home variant (default)
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        ) : isUserThumbnail ? (
          <ThumbnailPlaceholder />
        ) : null}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {duration}
        </div>
      </div>
      <div className="flex gap-3 mt-3">
        {channelAvatar && (
          <Image
            src={channelAvatar}
            alt={channel}
            width={36}
            height={36}
            className="rounded-full w-9 h-9"
            unoptimized
          />
        )}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-sm font-medium leading-tight line-clamp-2 group-hover:text-[#3ea6ff] transition-colors" style={{ color: 'var(--color-foreground)' }}>
            {title}
          </h3>
          <span className="text-[13px] mt-1 flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>
            {channel}
            {verified && (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            )}
          </span>
          <span className="text-[13px]" style={{ color: 'var(--color-text-muted)' }}>
            {views} • {timestamp}
          </span>
        </div>
      </div>
    </div>
  )
}
