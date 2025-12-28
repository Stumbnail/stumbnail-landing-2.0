'use client'

import { useMemo } from 'react'
import { YOUTUBE_VIDEOS, YouTubeVideo } from '@/lib/constants'
import { YouTubeVideoCard } from './YouTubeVideoCard'
import { YouTubeHeader } from './YouTubeHeader'

interface HomeFeedPreviewProps {
  userThumbnail: string | null
  userTitle: string
  userChannel: string
}

export function HomeFeedPreview({ userThumbnail, userTitle, userChannel }: HomeFeedPreviewProps) {
  const videos = [...YOUTUBE_VIDEOS]

  // Randomize user thumbnail position on each load
  const userPosition = useMemo(() => Math.floor(Math.random() * 6), [])

  // Create display videos with user thumbnail at random position
  const displayVideos = useMemo(() => {
    const result: (YouTubeVideo | { isUser: true })[] = []
    let videoIndex = 0
    for (let i = 0; i < 6; i++) {
      if (i === userPosition) {
        result.push({ isUser: true })
      } else {
        result.push(videos[videoIndex])
        videoIndex++
      }
    }
    return result
  }, [userPosition, videos])

  return (
    <div className="w-full rounded-xl overflow-hidden border" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
      {/* YouTube Header */}
      <YouTubeHeader />

      {/* Category Pills */}
      <div className="flex gap-2 px-4 py-2 overflow-x-auto scrollbar-hide border-b" style={{ borderColor: 'var(--color-border)' }}>
        {['All', 'Gaming', 'Music', 'Live', 'Podcasts', 'News', 'Comedy'].map((cat, i) => (
          <button
            key={cat}
            className="px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors"
            style={{
              backgroundColor: i === 0 ? 'var(--color-foreground)' : 'var(--color-button-bg)',
              color: i === 0 ? 'var(--color-background)' : 'var(--color-foreground)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 p-4">
        {displayVideos.map((video, index) => {
          if ('isUser' in video) {
            return (
              <YouTubeVideoCard
                key="user-thumbnail"
                thumbnail={userThumbnail}
                title={userTitle || 'Your Video Title Goes Here'}
                channel={userChannel || 'Your Channel'}
                channelAvatar="https://yt3.googleusercontent.com/ytc/AIdro_kIXW8iHe4Hn5GHc92lJKm3LvT9qVb8xpgSlVCgPqUPgQ=s176-c-k-c0x00ffffff-no-rj"
                views="0 views"
                timestamp="Just now"
                duration="10:00"
                isUserThumbnail
                variant="home"
              />
            )
          }
          return (
            <YouTubeVideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              channel={video.channel}
              channelAvatar={video.channelAvatar}
              views={video.views}
              timestamp={video.timestamp}
              duration={video.duration}
              verified={video.verified}
              variant="home"
            />
          )
        })}
      </div>
    </div>
  )
}
