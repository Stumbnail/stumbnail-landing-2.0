'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { YOUTUBE_VIDEOS, YouTubeVideo } from '@/lib/constants'
import { YouTubeVideoCard } from './YouTubeVideoCard'
import { YouTubeHeader } from './YouTubeHeader'

interface SidebarPreviewProps {
  userThumbnail: string | null
  userTitle: string
  userChannel: string
}

export function SidebarPreview({ userThumbnail, userTitle, userChannel }: SidebarPreviewProps) {
  const videos = [...YOUTUBE_VIDEOS]

  // Randomize user thumbnail position on each load (0-4 for 5 items)
  const userPosition = useMemo(() => Math.floor(Math.random() * 5), [])

  // Create display videos with user thumbnail at random position
  const displayVideos = useMemo(() => {
    const result: (YouTubeVideo | { isUser: true })[] = []
    let videoIndex = 1 // Start from index 1 (skip first video which is being "watched")
    for (let i = 0; i < 5; i++) {
      if (i === userPosition) {
        result.push({ isUser: true })
      } else {
        result.push(videos[videoIndex])
        videoIndex++
        if (videoIndex >= videos.length) videoIndex = 1
      }
    }
    return result
  }, [userPosition, videos])

  return (
    <div className="w-full rounded-xl overflow-hidden border" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
      {/* YouTube Header */}
      <YouTubeHeader />

      {/* Watch Page Layout - Stacks on mobile */}
      <div className="flex flex-col lg:flex-row gap-4 p-3 sm:p-4">
        {/* Main Video Player Area */}
        <div className="flex-1 min-w-0">
          <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-black">
            <Image
              src={YOUTUBE_VIDEOS[0].thumbnail}
              alt="Currently watching"
              fill
              className="object-cover opacity-60"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
              <div className="h-full bg-red-600 w-1/3" />
            </div>
          </div>
          <h2 className="text-sm sm:text-base font-medium mt-2 sm:mt-3 line-clamp-2" style={{ color: 'var(--color-foreground)' }}>
            {YOUTUBE_VIDEOS[0].title}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={YOUTUBE_VIDEOS[0].channelAvatar}
              alt={YOUTUBE_VIDEOS[0].channel}
              width={28}
              height={28}
              className="rounded-full sm:w-8 sm:h-8"
              unoptimized
            />
            <div>
              <span className="text-xs sm:text-sm font-medium flex items-center gap-1" style={{ color: 'var(--color-foreground)' }}>
                {YOUTUBE_VIDEOS[0].channel}
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-text-muted)' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
              <span className="text-[10px] sm:text-xs" style={{ color: 'var(--color-text-muted)' }}>50M subscribers</span>
            </div>
          </div>
        </div>

        {/* Recommended Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0">
          <div className="flex flex-col gap-2">
            {displayVideos.map((video, index) => {
              if ('isUser' in video) {
                return (
                  <YouTubeVideoCard
                    key="user-thumbnail"
                    thumbnail={userThumbnail}
                    title={userTitle || 'Your Video Title Goes Here'}
                    channel={userChannel || 'Your Channel'}
                    views="0 views"
                    timestamp="Just now"
                    duration="10:00"
                    isUserThumbnail
                    variant="sidebar"
                  />
                )
              }
              return (
                <YouTubeVideoCard
                  key={video.id}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  timestamp={video.timestamp}
                  duration={video.duration}
                  verified={video.verified}
                  variant="sidebar"
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
