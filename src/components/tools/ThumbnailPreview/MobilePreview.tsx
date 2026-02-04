'use client'

import Image from 'next/image'
import { YOUTUBE_VIDEOS, YouTubeVideo } from '@/lib/constants'
import { YouTubeLogo } from './YouTubeLogo'

interface MobilePreviewProps {
  userThumbnail: string | null
  userTitle: string
  userChannel: string
}

function ThumbnailPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#ff6f61]/20 to-[#ff6f61]/5 border-2 border-dashed border-[#ff6f61]/40">
      <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#ff6f61' }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="text-[8px] font-medium text-[#ff6f61]">Your Thumbnail</span>
    </div>
  )
}

function MobileVideoCard({
  thumbnail,
  title,
  channel,
  channelAvatar,
  views,
  timestamp,
  duration,
  isUserThumbnail = false,
}: {
  thumbnail: string | null
  title: string
  channel: string
  channelAvatar?: string
  views: string
  timestamp: string
  duration: string
  isUserThumbnail?: boolean
}) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-video">
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
        <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[11px] px-1.5 py-0.5 rounded font-medium">
          {duration}
        </div>
      </div>
      <div className="flex gap-3 p-3">
        {channelAvatar ? (
          <Image
            src={channelAvatar}
            alt={channel}
            width={36}
            height={36}
            className="rounded-full w-9 h-9 flex-shrink-0"
            unoptimized
          />
        ) : (
          <div className="w-9 h-9 flex-shrink-0 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-medium">{channel.charAt(0).toUpperCase()}</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium leading-snug line-clamp-2" style={{ color: 'var(--color-foreground)' }}>
            {title}
          </h3>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
            {channel} • {views} • {timestamp}
          </p>
        </div>
        <button className="self-start p-1 flex-shrink-0" style={{ color: 'var(--color-text-muted)' }}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export function MobilePreview({ userThumbnail, userTitle, userChannel }: MobilePreviewProps) {
  const videos = YOUTUBE_VIDEOS
  const userPosition = 1

  // Create display videos with user thumbnail at random position
  const displayVideos = (() => {
    const result: (YouTubeVideo | { isUser: true })[] = []
    let videoIndex = 0
    for (let i = 0; i < 4; i++) {
      if (i === userPosition) {
        result.push({ isUser: true })
      } else {
        result.push(videos[videoIndex])
        videoIndex++
      }
    }
    return result
  })()

  return (
    <div className="w-full flex items-center justify-center py-8">
      {/* Phone Container with Frame Image */}
      <div className="relative flex-shrink-0" style={{ width: '320px', height: '662px' }}>
        {/* Phone Frame Image - Overlay */}
        <Image
          src="/assets/phone.webp"
          alt="Phone frame"
          fill
          className="object-contain pointer-events-none z-10"
          unoptimized
          priority
        />

        {/* Screen Content - Behind the frame */}
        <div
          className="absolute overflow-hidden flex flex-col"
          style={{
            top: '1.2%',
            left: '3.5%',
            right: '3.5%',
            bottom: '1.2%',
            borderRadius: '38px',
            backgroundColor: 'var(--color-background)'
          }}
        >
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2" style={{ backgroundColor: 'var(--color-background)' }}>
            <span className="text-xs font-semibold" style={{ color: 'var(--color-foreground)' }}>9:41</span>
            <div className="w-24 h-6" /> {/* Space for Dynamic Island */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-foreground)' }}>
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-foreground)' }}>
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
              </svg>
            </div>
          </div>

          {/* YouTube Mobile Header */}
          <div className="flex items-center justify-between px-4 py-2" style={{ backgroundColor: 'var(--color-background)' }}>
            <YouTubeLogo size="sm" />
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-foreground)' }}>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-medium">U</span>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 px-3 py-2 overflow-x-auto scrollbar-hide" style={{ backgroundColor: 'var(--color-background)' }}>
            {['All', 'Gaming', 'Music', 'Mixes', 'Live'].map((cat, i) => (
              <button
                key={cat}
                className="px-2.5 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap"
                style={{
                  backgroundColor: i === 0 ? 'var(--color-foreground)' : 'var(--color-button-bg)',
                  color: i === 0 ? 'var(--color-background)' : 'var(--color-foreground)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Feed - Native scroll with touch support */}
          <div
            className="flex-1 overflow-y-auto"
            style={{
              backgroundColor: 'var(--color-background)',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {displayVideos.map((video) => {
              if ('isUser' in video) {
                return (
                  <MobileVideoCard
                    key="user-thumbnail"
                    thumbnail={userThumbnail}
                    title={userTitle || 'Your Video Title Goes Here'}
                    channel={userChannel || 'Your Channel'}
                    channelAvatar="https://yt3.googleusercontent.com/ytc/AIdro_kIXW8iHe4Hn5GHc92lJKm3LvT9qVb8xpgSlVCgPqUPgQ=s176-c-k-c0x00ffffff-no-rj"
                    views="0 views"
                    timestamp="Just now"
                    duration="10:00"
                    isUserThumbnail
                  />
                )
              }
              return (
                <MobileVideoCard
                  key={video.id}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  channel={video.channel}
                  channelAvatar={video.channelAvatar}
                  views={video.views}
                  timestamp={video.timestamp}
                  duration={video.duration}
                />
              )
            })}
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-around py-2 border-t" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
            {[
              { icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', label: 'Home', active: true },
              { icon: 'M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25z', label: 'Shorts' },
              { icon: 'M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z', label: '' },
              { icon: 'M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM4 19V11h16v8H4z', label: 'Subs' },
              { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z', label: 'You' },
            ].map((item, i) => (
              <button key={i} className="flex flex-col items-center gap-0.5 px-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: item.active ? 'var(--color-foreground)' : 'var(--color-text-muted)' }}>
                  <path d={item.icon} />
                </svg>
                {item.label && (
                  <span className="text-[9px]" style={{ color: item.active ? 'var(--color-foreground)' : 'var(--color-text-muted)' }}>
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center py-1.5" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="w-28 h-1 rounded-full" style={{ backgroundColor: 'var(--color-text-muted)' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
