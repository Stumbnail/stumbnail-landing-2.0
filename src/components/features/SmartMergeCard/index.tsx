'use client'

import React from 'react'
import Image from 'next/image'
import { VimeoPlayer } from '@/components/ui/VimeoPlayer'

export function SmartMergeCard() {
    return (
        <div className="relative">
            {/* Floating Thumbnail - Top Right */}
            <div
                className="absolute -top-6 -right-10 w-28 h-16 rounded-lg overflow-hidden shadow-xl z-20 hidden lg:block"
                style={{
                    transform: 'rotate(8deg)',
                    border: '2px solid var(--color-border)',
                }}
            >
                <Image
                    src="/assets/images/thumbnails/youtube-thumbnail-new (2).webp"
                    alt="Floating thumbnail"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Floating Thumbnail - Bottom Left */}
            <div
                className="absolute -bottom-4 -left-12 w-32 h-18 rounded-lg overflow-hidden shadow-xl z-20 hidden lg:block"
                style={{
                    transform: 'rotate(-6deg)',
                    border: '2px solid var(--color-border)',
                }}
            >
                <Image
                    src="/assets/images/thumbnails/youtube-thumbnail-new (3).webp"
                    alt="Floating thumbnail"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Main Card */}
            <div
                className="relative w-full"
                style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '24px',
                    padding: '44px',
                    maxWidth: '100%',
                }}
            >
                <VimeoPlayer
                    videoUrl="https://vimeo.com/1156615673?share=copy&fl=sv&fe=ci"
                    className="w-full"
                />
            </div>
        </div>
    )
}
