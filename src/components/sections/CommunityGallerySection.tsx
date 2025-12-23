'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

const COMMUNITY_THUMBNAILS = [
    {
        id: 1,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Drake-holding-a-phone-.webp',
        username: '@DrakeViews',
    },
    {
        id: 2,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Elon-Musk-serious-thou.webp',
        username: '@TechInsider',
    },
    {
        id: 3,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Dwayne-Johnson-sitting.webp',
        username: '@RockNation',
    },
    {
        id: 4,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Johnny-Depp-holding-a-.webp',
        username: '@PirateCreator',
    },
    {
        id: 5,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Kanye-West-mid-gesture.webp',
        username: '@YeezyStudio',
    },
    {
        id: 6,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Napoleon-Bonaparte-sit.webp',
        username: '@HistoryBuff',
    },
    {
        id: 7,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Robert-Downey-Jr-point.webp',
        username: '@MarvelFan',
    },
    {
        id: 8,
        src: '/assets/images/thumbnails/Alone.Stranded..webp',
        username: '@SurvivalPro',
    },
    {
        id: 9,
        src: '/assets/images/thumbnails/A-YouTube-thumbnail-featuring-Abraham-Lincoln-stan.webp',
        username: '@PresidentTales',
    },
    {
        id: 10,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Cristiano-Ronaldo-shoc.webp',
        username: '@FootballKing',
    },
    {
        id: 11,
        src: '/assets/images/thumbnails/YouTube-thumbnail-featuring-Isaac-Newton-pointing-.webp',
        username: '@ScienceNerd',
    },
    {
        id: 12,
        src: '/assets/images/thumbnails/Barack-Obama-sitting-on-the-floor-of-a-minimalist-.webp',
        username: '@ObamaDaily',
    },
]

const ITEMS_PER_PAGE = 6

export function CommunityGallerySection() {
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(COMMUNITY_THUMBNAILS.length / ITEMS_PER_PAGE)

    const visibleThumbnails = COMMUNITY_THUMBNAILS.slice(
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
                {/* Thumbnail Cards Grid - 3 columns x 2 rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleThumbnails.map((thumb) => (
                        <div
                            key={thumb.id}
                            className="rounded-2xl overflow-hidden p-5 pb-4"
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
                                    src={thumb.src}
                                    alt={`Thumbnail by ${thumb.username}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* User info */}
                            <div className="pt-4 flex items-center gap-3">
                                {/* Avatar */}
                                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src={thumb.src}
                                        alt={thumb.username}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Username */}
                                <span
                                    className="text-base font-bold"
                                    style={{
                                        color: 'var(--color-foreground)',
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                >
                                    {thumb.username}
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
                    >
                        View All
                    </Button>
                </div>
            </div>
        </section>
    )
}
