'use client'

import React, { useEffect, useRef, useState } from 'react'

interface VimeoPlayerProps {
    videoUrl: string
    className?: string
}

export function VimeoPlayer({ videoUrl, className = '' }: VimeoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [isInView, setIsInView] = useState(false)

    // Extract video ID from Vimeo URL
    const getVimeoId = (url: string) => {
        const match = url.match(/vimeo\.com\/(\d+)/)
        return match ? match[1] : null
    }

    const videoId = getVimeoId(videoUrl)

    useEffect(() => {
        if (!containerRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                    }
                })
            },
            {
                threshold: 0.5, // Trigger when 50% of the video is visible
            }
        )

        observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    if (!videoId) {
        return (
            <div
                className={`relative w-full aspect-video rounded-2xl ${className}`}
                style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '1px solid var(--color-border)',
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <p style={{ color: 'var(--color-text-muted)' }}>Invalid Vimeo URL</p>
                </div>
            </div>
        )
    }

    return (
        <div ref={containerRef} className={`relative w-full aspect-video rounded-2xl overflow-hidden ${className}`}>
            {isInView && (
                <iframe
                    ref={iframeRef}
                    src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0&muted=1&background=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                        border: 'none',
                    }}
                />
            )}
        </div>
    )
}
