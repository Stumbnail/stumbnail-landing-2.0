'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

// Type for community thumbnail from API
interface CommunityThumbnail {
    id: string
    thumbnailUrl: string
    ownerName: string
    ownerAvatar: string | null
}

// API response type
interface CommunityFeedResponse {
    success: boolean
    thumbnails: CommunityThumbnail[]
    hasMore: boolean
}

// Fallback thumbnails for when API fails or during initial load
const FALLBACK_THUMBNAILS: CommunityThumbnail[] = [
    {
        id: '1',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Drake-holding-a-phone-.webp',
        ownerName: 'DrakeViews',
        ownerAvatar: null,
    },
    {
        id: '2',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Elon-Musk-serious-thou.webp',
        ownerName: 'TechInsider',
        ownerAvatar: null,
    },
    {
        id: '3',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Dwayne-Johnson-sitting.webp',
        ownerName: 'RockNation',
        ownerAvatar: null,
    },
    {
        id: '4',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Johnny-Depp-holding-a-.webp',
        ownerName: 'PirateCreator',
        ownerAvatar: null,
    },
    {
        id: '5',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Kanye-West-mid-gesture.webp',
        ownerName: 'YeezyStudio',
        ownerAvatar: null,
    },
    {
        id: '6',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Napoleon-Bonaparte-sit.webp',
        ownerName: 'HistoryBuff',
        ownerAvatar: null,
    },
    {
        id: '7',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Robert-Downey-Jr-point.webp',
        ownerName: 'MarvelFan',
        ownerAvatar: null,
    },
    {
        id: '8',
        thumbnailUrl: '/assets/images/thumbnails/Alone.Stranded..webp',
        ownerName: 'SurvivalPro',
        ownerAvatar: null,
    },
    {
        id: '9',
        thumbnailUrl: '/assets/images/thumbnails/A-YouTube-thumbnail-featuring-Abraham-Lincoln-stan.webp',
        ownerName: 'PresidentTales',
        ownerAvatar: null,
    },
    {
        id: '10',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Cristiano-Ronaldo-shoc.webp',
        ownerName: 'FootballKing',
        ownerAvatar: null,
    },
    {
        id: '11',
        thumbnailUrl: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Isaac-Newton-pointing-.webp',
        ownerName: 'ScienceNerd',
        ownerAvatar: null,
    },
    {
        id: '12',
        thumbnailUrl: '/assets/images/thumbnails/Barack-Obama-sitting-on-the-floor-of-a-minimalist-.webp',
        ownerName: 'ObamaDaily',
        ownerAvatar: null,
    },
]

const ITEMS_PER_PAGE = 6
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.stumbnail.com'

export function CommunityGallerySection() {
    const [thumbnails, setThumbnails] = useState<CommunityThumbnail[]>(FALLBACK_THUMBNAILS)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)

    // Fetch community thumbnails on mount
    useEffect(() => {
        const fetchThumbnails = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/thumbnail/feed?limit=12&sort=recent`)

                if (!response.ok) {
                    throw new Error('Failed to fetch')
                }

                const data: CommunityFeedResponse = await response.json()

                if (data.success && data.thumbnails.length > 0) {
                    setThumbnails(data.thumbnails)
                }
                // If no thumbnails from API, keep fallbacks
            } catch (error) {
                console.error('Error fetching community thumbnails:', error)
                // Keep fallback thumbnails on error
            } finally {
                setIsLoading(false)
            }
        }

        fetchThumbnails()
    }, [])

    const totalPages = Math.ceil(thumbnails.length / ITEMS_PER_PAGE)

    const visibleThumbnails = thumbnails.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    )

    return (
        <section
            className="relative py-16 md:py-24 overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background)',
            }}
        >
            {/* Subtle coral glow - top left */}
            <div
                className="absolute pointer-events-none"
                style={{
                    left: '-200px',
                    top: '-100px',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.15) 0%, transparent 70%)',
                }}
            />

            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                        }}
                    >
                        See What Creators Are Making
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-foreground-muted)',
                        }}
                    >
                        Real thumbnails. Real results. Real creators. Join thousands using the best AI thumbnail generator to stand out in crowded feeds.
                    </p>
                </div>

                {/* Thumbnail Cards Grid - 3 columns x 2 rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleThumbnails.map((thumb) => (
                        <div
                            key={thumb.id}
                            className={`rounded-2xl overflow-hidden p-5 pb-4 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
                            style={{
                                backgroundColor: 'var(--color-button-bg)',
                            }}
                        >
                            {/* Thumbnail container - 16:9 aspect ratio */}
                            <div
                                className="relative w-full rounded-xl overflow-hidden"
                                style={{
                                    aspectRatio: '16/9',
                                }}
                            >
                                <Image
                                    src={thumb.thumbnailUrl}
                                    alt={`Thumbnail by ${thumb.ownerName}`}
                                    fill
                                    className="object-cover"
                                    unoptimized={thumb.thumbnailUrl.startsWith('http')}
                                />
                            </div>

                            {/* User info */}
                            <div className="pt-4 flex items-center gap-3">
                                {/* Avatar */}
                                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                                    {thumb.ownerAvatar ? (
                                        <Image
                                            src={thumb.ownerAvatar}
                                            alt={thumb.ownerName}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full flex items-center justify-center text-white font-bold"
                                            style={{ backgroundColor: '#ff6f61' }}
                                        >
                                            {thumb.ownerName?.[0]?.toUpperCase() || 'U'}
                                        </div>
                                    )}
                                </div>
                                {/* Username */}
                                <span
                                    className="text-base font-bold"
                                    style={{
                                        color: 'var(--color-foreground)',
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                >
                                    {thumb.ownerName || 'Creator'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center items-center gap-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className="rounded-full transition-all duration-200"
                            style={{
                                width: '40px',
                                height: '10px',
                                backgroundColor: currentPage === index
                                    ? '#ff6f61'
                                    : 'var(--color-border)',
                            }}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-8">
                    <Button
                        variant="primary"
                        className="h-[56px] px-10 text-lg rounded-2xl"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 600,
                            backgroundColor: '#ff6f61',
                            minWidth: '200px',
                        }}
                        onClick={() => window.open('https://app.stumbnail.com/community', '_blank')}
                    >
                        View All
                    </Button>
                </div>
            </div>
        </section>
    )
}
