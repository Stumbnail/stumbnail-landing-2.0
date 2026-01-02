'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { trackToolUse } from '@/lib/analytics'

interface ThumbnailResult {
    quality: string
    resolution: string
    url: string
}

// Extract video ID from various YouTube URL formats
function extractVideoId(url: string): string | null {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
        /^([a-zA-Z0-9_-]{11})$/
    ]

    for (const pattern of patterns) {
        const match = url.match(pattern)
        if (match) return match[1]
    }
    return null
}

// Get all thumbnail URLs for a video
function getThumbnailUrls(videoId: string): ThumbnailResult[] {
    return [
        { quality: 'Max Resolution', resolution: '1280×720', url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` },
        { quality: 'High Quality', resolution: '480×360', url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` },
        { quality: 'Medium Quality', resolution: '320×180', url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` },
        { quality: 'Standard', resolution: '120×90', url: `https://img.youtube.com/vi/${videoId}/default.jpg` },
    ]
}

export function ThumbnailDownloader() {
    const [url, setUrl] = useState('')
    const [videoId, setVideoId] = useState<string | null>(null)
    const [thumbnails, setThumbnails] = useState<ThumbnailResult[]>([])
    const [autoDownload, setAutoDownload] = useState(false)

    // Download max resolution helper
    const downloadMaxRes = useCallback(async (id: string) => {
        const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
        try {
            const response = await fetch(thumbnailUrl)
            const blob = await response.blob()
            const downloadUrl = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = downloadUrl
            a.download = `youtube-thumbnail-${id}-max-resolution.jpg`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            window.URL.revokeObjectURL(downloadUrl)
        } catch {
            window.open(thumbnailUrl, '_blank')
        }
    }, [])

    // Auto-fetch on URL change
    useEffect(() => {
        const id = extractVideoId(url.trim())
        if (id && id !== videoId) {
            setVideoId(id)
            setThumbnails(getThumbnailUrls(id))
            // Track tool usage
            trackToolUse('downloader')
            // Auto-download if toggle is on
            if (autoDownload) {
                downloadMaxRes(id)
            }
        }
    }, [url, videoId, autoDownload, downloadMaxRes])

    const handleDownload = useCallback(async (thumbnailUrl: string, quality: string) => {
        try {
            const response = await fetch(thumbnailUrl)
            const blob = await response.blob()
            const downloadUrl = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = downloadUrl
            a.download = `youtube-thumbnail-${videoId}-${quality.toLowerCase().replace(/\s+/g, '-')}.jpg`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            window.URL.revokeObjectURL(downloadUrl)
        } catch {
            window.open(thumbnailUrl, '_blank')
        }
    }, [videoId])

    const clearResults = useCallback(() => {
        setUrl('')
        setVideoId(null)
        setThumbnails([])
    }, [])

    return (
        <div className="w-full">
            {/* Header */}
            <header
                className="sticky top-0 z-50 px-4 sm:px-6 py-3"
                style={{
                    backgroundColor: 'var(--color-background)',
                    borderBottom: '1px solid var(--color-border)',
                }}
            >
                <div className="flex items-center justify-between gap-3">
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex-shrink-0">
                            <div
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3v12" />
                                    <path d="m8 11 4 4 4-4" />
                                    <path d="M8 21h8" />
                                    <path d="M6 17h12v4H6z" />
                                </svg>
                            </div>
                        </Link>
                        <h1
                            className="hidden sm:block text-sm lg:text-base font-medium"
                            style={{ color: 'var(--color-foreground)' }}
                        >
                            Thumbnail Downloader
                        </h1>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
                            style={{
                                backgroundColor: '#ff6f61',
                                color: 'white',
                                boxShadow: '0 2px 8px rgba(255, 111, 97, 0.3)',
                            }}
                        >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                            <span className="hidden sm:inline">Try Stumbnail</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="w-full flex flex-col items-center min-h-[calc(100vh-56px)] py-8">
                    {/* Input Card */}
                    <div
                        className="w-full max-w-md p-6 rounded-2xl mb-8"
                        style={{
                            backgroundColor: 'var(--color-background-alt)',
                            border: '1px solid var(--color-border)',
                        }}
                    >
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
                            Paste YouTube URL
                        </label>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://youtube.com/watch?v=..."
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ff6f61]/20"
                            style={{
                                backgroundColor: 'var(--color-button-bg)',
                                color: 'var(--color-foreground)',
                                border: '1px solid var(--color-border)',
                            }}
                        />

                        {/* Auto-download toggle */}
                        <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                            <div>
                                <p className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>
                                    Auto-download HD
                                </p>
                                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                    Download max resolution on paste
                                </p>
                            </div>
                            <button
                                onClick={() => setAutoDownload(!autoDownload)}
                                className="relative w-11 h-6 rounded-full transition-colors"
                                style={{ backgroundColor: autoDownload ? '#ff6f61' : 'var(--color-button-bg)' }}
                            >
                                <span
                                    className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform"
                                    style={{ transform: autoDownload ? 'translateX(20px)' : 'translateX(0)' }}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    {thumbnails.length > 0 && (
                        <div className="w-full max-w-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>
                                    Available Sizes
                                </p>
                                <button
                                    onClick={clearResults}
                                    className="text-xs px-3 py-1.5 rounded-lg"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    Clear
                                </button>
                            </div>

                            {/* 2x2 Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {thumbnails.map((thumb) => (
                                    <div
                                        key={thumb.quality}
                                        className="rounded-xl overflow-hidden"
                                        style={{
                                            backgroundColor: 'var(--color-background-alt)',
                                            border: '1px solid var(--color-border)',
                                        }}
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative aspect-video">
                                            <Image
                                                src={thumb.url}
                                                alt={`YouTube thumbnail - ${thumb.quality}`}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="p-3 flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>
                                                    {thumb.quality}
                                                </p>
                                                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                                    {thumb.resolution}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleDownload(thumb.url, thumb.quality)}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                                                style={{ backgroundColor: '#ff6f61', color: 'white' }}
                                            >
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 3v12m0 0-4-4m4 4 4-4" />
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                                                </svg>
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
