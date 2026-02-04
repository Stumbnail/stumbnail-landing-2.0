'use client'

import { YOUTUBE_VIDEOS, YouTubeVideo } from '@/lib/constants'
import { YouTubeVideoCard } from './YouTubeVideoCard'
import { YouTubeHeader } from './YouTubeHeader'

interface SearchResultsPreviewProps {
  userThumbnail: string | null
  userTitle: string
  userChannel: string
}

export function SearchResultsPreview({ userThumbnail, userTitle, userChannel }: SearchResultsPreviewProps) {
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
    <div className="w-full rounded-xl overflow-hidden border" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
      {/* YouTube Header with Search */}
      <YouTubeHeader searchValue="how to make thumbnails" />

      {/* Filter Pills */}
      <div className="flex gap-2 px-4 py-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <button
          className="px-3 py-1 rounded-full text-xs flex items-center gap-1.5 font-medium"
          style={{ backgroundColor: 'var(--color-button-bg)', color: 'var(--color-foreground)' }}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
          </svg>
          Filters
        </button>
        {['All', 'Videos', 'Channels', 'Playlists'].map((filter, i) => (
          <button
            key={filter}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: i === 0 ? 'var(--color-foreground)' : 'transparent',
              color: i === 0 ? 'var(--color-background)' : 'var(--color-text-muted)'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Search Results - Horizontal List */}
      <div className="flex flex-col gap-4 p-4">
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
                variant="search"
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
              variant="search"
            />
          )
        })}
      </div>
    </div>
  )
}
