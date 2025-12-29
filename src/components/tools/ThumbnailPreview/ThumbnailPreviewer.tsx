'use client'

import { useState, useCallback, useRef, ReactNode, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HomeFeedPreview } from './HomeFeedPreview'
import { SearchResultsPreview } from './SearchResultsPreview'
import { SidebarPreview } from './SidebarPreview'
import { MobilePreview } from './MobilePreview'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

type PreviewMode = 'home' | 'search' | 'sidebar' | 'mobile'

const PREVIEW_MODES: { id: PreviewMode; label: string; description: string; icon: ReactNode }[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'YouTube homepage feed',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: 'search',
    label: 'Search',
    description: 'Search results page',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: 'sidebar',
    label: 'Suggested',
    description: 'Video sidebar recommendations',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    id: 'mobile',
    label: 'Mobile',
    description: 'YouTube mobile app',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
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
  const [isEditingDetails, setIsEditingDetails] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showTooltip, setShowTooltip] = useState<PreviewMode | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const hasUploadedThumbnail = userThumbnail !== null

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!hasUploadedThumbnail) return

      if (e.key >= '1' && e.key <= '4') {
        const modeIndex = parseInt(e.key) - 1
        if (PREVIEW_MODES[modeIndex]) {
          setActiveMode(PREVIEW_MODES[modeIndex].id)
        }
      }

      if (e.key === 'Escape') {
        clearThumbnail()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasUploadedThumbnail])

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return

    setIsTransitioning(true)
    const reader = new FileReader()
    reader.onload = (e) => {
      setUserThumbnail(e.target?.result as string)
      setTimeout(() => setIsTransitioning(false), 300)
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
    setIsTransitioning(true)
    setTimeout(() => {
      setUserThumbnail(null)
      setUserTitle('')
      setUserChannel('')
      setIsEditingDetails(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
      setIsTransitioning(false)
    }, 200)
  }, [])

  const handleModeChange = useCallback((mode: PreviewMode) => {
    if (mode === activeMode) return
    setIsTransitioning(true)
    setActiveMode(mode)
    setTimeout(() => setIsTransitioning(false), 200)
  }, [activeMode])

  return (
    <div className="w-full">
      {/* Unified Header */}
      <header
        className="sticky top-0 z-50 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 mb-4"
        style={{
          backgroundColor: 'var(--color-background)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Left Section */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            {/* Logo/Home Link */}
            <Link href="/" className="flex-shrink-0 group">
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </Link>

            {/* Title - Minimal, no subtitle */}
            {!hasUploadedThumbnail && (
              <h1
                className="hidden sm:block text-sm lg:text-base font-medium"
                style={{ color: 'var(--color-foreground)' }}
              >
                Thumbnail Previewer
              </h1>
            )}

            {/* Thumbnail Preview (when uploaded) */}
            {hasUploadedThumbnail && (
              <>
                <div
                  className="relative w-12 h-7 sm:w-14 sm:h-8 rounded-md overflow-hidden flex-shrink-0 cursor-pointer group ring-2 ring-transparent hover:ring-[#ff6f61]/50 transition-all duration-200"
                  onClick={() => setIsEditingDetails(!isEditingDetails)}
                >
                  <Image
                    src={userThumbnail}
                    alt="Your thumbnail"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                </div>

                {/* Title & Channel - Desktop only */}
                <div className="hidden lg:block min-w-0">
                  <p className="text-sm font-medium truncate max-w-[120px] xl:max-w-[180px]" style={{ color: 'var(--color-foreground)' }}>
                    {userTitle || 'Untitled Video'}
                  </p>
                  <p className="text-xs truncate max-w-[120px] xl:max-w-[180px]" style={{ color: 'var(--color-text-muted)' }}>
                    {userChannel || 'Your Channel'}
                  </p>
                </div>

                {/* Edit & Delete Buttons */}
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <button
                    onClick={() => setIsEditingDetails(!isEditingDetails)}
                    className={`p-1.5 sm:p-2 rounded-lg transition-all duration-200 ${isEditingDetails ? 'bg-[#ff6f61]/10 text-[#ff6f61]' : 'hover:bg-black/5'}`}
                    style={{ color: isEditingDetails ? '#ff6f61' : 'var(--color-text-muted)' }}
                    title="Edit details"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button
                    onClick={clearThumbnail}
                    className="p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:bg-red-500/10 text-red-500/70 hover:text-red-500"
                    title="New thumbnail"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Center: Preview Mode Tabs (when thumbnail uploaded) */}
          {hasUploadedThumbnail && (
            <div className="flex items-center flex-shrink-0">
              <div
                className="flex items-center gap-0.5 p-0.5 sm:p-1 rounded-lg sm:rounded-xl"
                style={{ backgroundColor: 'var(--color-button-bg)' }}
              >
                {PREVIEW_MODES.map((mode, index) => (
                  <div key={mode.id} className="relative">
                    <button
                      onClick={() => handleModeChange(mode.id)}
                      onMouseEnter={() => setShowTooltip(mode.id)}
                      onMouseLeave={() => setShowTooltip(null)}
                      className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs font-medium transition-all duration-200 ${activeMode === mode.id ? '' : 'hover:bg-white/5'
                        }`}
                      style={{
                        backgroundColor: activeMode === mode.id ? '#ff6f61' : 'transparent',
                        color: activeMode === mode.id ? 'white' : 'var(--color-text-muted)',
                        boxShadow: activeMode === mode.id ? '0 2px 8px rgba(255,111,97,0.35)' : 'none',
                      }}
                    >
                      {mode.icon}
                      <span className="hidden sm:inline">{mode.label}</span>
                      <span className="hidden xl:inline text-[10px] opacity-60 ml-0.5">{index + 1}</span>
                    </button>

                    {showTooltip === mode.id && activeMode !== mode.id && (
                      <div
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg text-xs whitespace-nowrap z-30 pointer-events-none hidden sm:block"
                        style={{
                          backgroundColor: 'var(--color-foreground)',
                          color: 'var(--color-background)',
                        }}
                      >
                        {mode.description}
                        <div
                          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                          style={{ backgroundColor: 'var(--color-foreground)' }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">

            <ThemeToggle />

            {/* Try Stumbnail CTA */}
            <Link
              href="/"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor: '#ff6f61',
                color: 'white',
                boxShadow: '0 2px 8px rgba(255, 111, 97, 0.3)',
              }}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
              <span className="hidden sm:inline">Try Stumbnail</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Step 1: Upload Interface */}
        {!hasUploadedThumbnail && (
          <div
            className={`w-full flex items-center justify-center min-h-[calc(100vh-56px)] py-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <div
              className="w-full max-w-sm p-6 sm:p-8 rounded-2xl"
              style={{
                backgroundColor: 'var(--color-background-alt)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 12px 24px -6px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* Upload Zone */}
              <div
                className={`relative mb-5 transition-all duration-300 ${isDragging ? 'scale-[1.01]' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full h-36 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all duration-200 group
                    ${isDragging
                      ? 'border-[#ff6f61] bg-[#ff6f61]/8'
                      : 'hover:border-[#ff6f61]/50'
                    }`}
                  style={{ borderColor: isDragging ? '#ff6f61' : 'var(--color-border)' }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-200 
                      ${isDragging ? 'scale-110' : 'group-hover:scale-105'}`}
                    style={{ backgroundColor: isDragging ? 'rgba(255,111,97,0.15)' : 'var(--color-button-bg)' }}
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      style={{ color: isDragging ? '#ff6f61' : 'var(--color-text-muted)' }}
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17,8 12,3 7,8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: isDragging ? '#ff6f61' : 'var(--color-text-muted)' }}
                  >
                    {isDragging ? 'Drop to preview' : 'Upload thumbnail'}
                  </span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </div>

              {/* Fields */}
              <div className="space-y-2.5">
                <input
                  type="text"
                  value={userTitle}
                  onChange={(e) => setUserTitle(e.target.value)}
                  placeholder="Title"
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-[#ff6f61]/15"
                  style={{
                    backgroundColor: 'var(--color-button-bg)',
                    color: 'var(--color-foreground)',
                    border: '1px solid var(--color-border)',
                  }}
                />
                <input
                  type="text"
                  value={userChannel}
                  onChange={(e) => setUserChannel(e.target.value)}
                  placeholder="Channel"
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-[#ff6f61]/15"
                  style={{
                    backgroundColor: 'var(--color-button-bg)',
                    color: 'var(--color-foreground)',
                    border: '1px solid var(--color-border)',
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Preview Mode */}
        {hasUploadedThumbnail && (
          <div className={`w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {/* Edit Details Panel */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${isEditingDetails ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
            >
              <div
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                style={{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div
                    className="relative w-full sm:w-32 md:w-36 aspect-video rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 cursor-pointer group"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Image
                      src={userThumbnail}
                      alt="Your thumbnail"
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17,8 12,3 7,8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="text-white text-xs font-medium">Change</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                    <input
                      type="text"
                      value={userTitle}
                      onChange={(e) => setUserTitle(e.target.value)}
                      placeholder="Video title..."
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#ff6f61]/30"
                      style={{
                        backgroundColor: 'var(--color-button-bg)',
                        color: 'var(--color-foreground)',
                        border: '1px solid var(--color-border)',
                      }}
                    />
                    <input
                      type="text"
                      value={userChannel}
                      onChange={(e) => setUserChannel(e.target.value)}
                      placeholder="Channel name..."
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#ff6f61]/30"
                      style={{
                        backgroundColor: 'var(--color-button-bg)',
                        color: 'var(--color-foreground)',
                        border: '1px solid var(--color-border)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Preview */}
            <div className={`pb-4 transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}>
              <div className={activeMode === 'mobile' ? 'flex justify-center' : 'w-full'}>
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

            {/* Keyboard shortcuts hint - Desktop only */}
            <div
              className="hidden lg:flex items-center justify-center gap-4 mt-4 pt-4 border-t text-xs"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
            >
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ backgroundColor: 'var(--color-button-bg)' }}>1-4</kbd>
                Switch views
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ backgroundColor: 'var(--color-button-bg)' }}>Esc</kbd>
                New thumbnail
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
