'use client'

import { useState, useCallback, useRef, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { HomeFeedPreview } from './HomeFeedPreview'
import { SearchResultsPreview } from './SearchResultsPreview'
import { SidebarPreview } from './SidebarPreview'
import { MobilePreview } from './MobilePreview'

type PreviewMode = 'home' | 'search' | 'sidebar' | 'mobile'

const PREVIEW_MODES: { id: PreviewMode; label: string; icon: ReactNode }[] = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    id: 'search',
    label: 'Search',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    id: 'sidebar',
    label: 'Suggested',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
      </svg>
    ),
  },
]

export function ThumbnailPreviewer() {
  const [userThumbnail, setUserThumbnail] = useState<string | null>(null)
  const [userTitle, setUserTitle] = useState('')
  const [userChannel, setUserChannel] = useState('')
  const [activeMode, setActiveMode] = useState<PreviewMode>('home')
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return

    const reader = new FileReader()
    reader.onload = (e) => {
      setUserThumbnail(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }, [handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }, [handleFileSelect])

  const clearThumbnail = useCallback(() => {
    setUserThumbnail(null)
    setUserTitle('')
    setUserChannel('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left Panel - Controls */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
          <div
            className="sticky top-24 p-4 rounded-2xl flex flex-col gap-4"
            style={{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}
          >
            {/* Thumbnail Upload */}
            <div>
              <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Thumbnail
              </label>
              <div
                className={`relative ${isDragging ? 'ring-2 ring-[#ff6f61]' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                {userThumbnail ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={userThumbnail}
                      alt="Your thumbnail"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <button
                      onClick={clearThumbnail}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-colors hover:border-[#ff6f61] hover:bg-[#ff6f61]/5"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17,8 12,3 7,8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                      Drop image or click
                    </span>
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Title Input */}
            <div>
              <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Video Title
              </label>
              <input
                type="text"
                value={userTitle}
                onChange={(e) => setUserTitle(e.target.value)}
                placeholder="Enter your video title..."
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#ff6f61]/30"
                style={{
                  backgroundColor: 'var(--color-button-bg)',
                  color: 'var(--color-foreground)',
                  border: '1px solid var(--color-border)',
                }}
              />
            </div>

            {/* Channel Input */}
            <div>
              <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Channel Name
              </label>
              <input
                type="text"
                value={userChannel}
                onChange={(e) => setUserChannel(e.target.value)}
                placeholder="Your channel name..."
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#ff6f61]/30"
                style={{
                  backgroundColor: 'var(--color-button-bg)',
                  color: 'var(--color-foreground)',
                  border: '1px solid var(--color-border)',
                }}
              />
            </div>

            {/* Preview Mode Tabs */}
            <div>
              <label className="block text-xs font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Preview Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PREVIEW_MODES.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      backgroundColor: activeMode === mode.id ? '#ff6f61' : 'var(--color-button-bg)',
                      color: activeMode === mode.id ? 'white' : 'var(--color-text-muted)',
                      boxShadow: activeMode === mode.id ? '0 4px 12px rgba(255,111,97,0.3)' : 'none',
                    }}
                  >
                    {mode.icon}
                    <span>{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stumbnail CTA */}
            <div className="mt-2 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <div className="text-center">
                <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Need better thumbnails?
                </p>
                <Link href="/">
                  <Button variant="secondary" size="sm" className="w-full">
                    Try Stumbnail Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - YouTube Preview */}
        <div className="flex-1 min-w-0">
          <div className="overflow-x-auto pb-4">
            <div className={activeMode === 'mobile' ? '' : 'min-w-[700px]'}>
              {activeMode === 'home' && (
                <HomeFeedPreview
                  userThumbnail={userThumbnail}
                  userTitle={userTitle}
                  userChannel={userChannel}
                />
              )}
              {activeMode === 'search' && (
                <SearchResultsPreview
                  userThumbnail={userThumbnail}
                  userTitle={userTitle}
                  userChannel={userChannel}
                />
              )}
              {activeMode === 'sidebar' && (
                <SidebarPreview
                  userThumbnail={userThumbnail}
                  userTitle={userTitle}
                  userChannel={userChannel}
                />
              )}
              {activeMode === 'mobile' && (
                <MobilePreview
                  userThumbnail={userThumbnail}
                  userTitle={userTitle}
                  userChannel={userChannel}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
