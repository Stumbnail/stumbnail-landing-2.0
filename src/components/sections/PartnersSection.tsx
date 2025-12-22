'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

const PARTNERS = [
    { name: 'OpenAI', logo: '/assets/partners/openai.webp' },
    { name: 'Gemini', logo: '/assets/partners/gemini.webp' },
    { name: 'ByteDance', logo: '/assets/partners/bytedance.webp' },
    { name: 'Replicate', logo: '/assets/partners/replicate.webp' },
    { name: 'Black Forest Labs', logo: '/assets/partners/blackforest-labs.webp' },
]

export function PartnersSection() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
        scrollRef.current.style.cursor = 'grabbing'
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab'
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 1.5 // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab'
        }
    }

    return (
        <section className="relative w-full py-16 md:py-20 overflow-hidden">
            {/* Subtle top border gradient */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-[800px]"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--color-border), transparent)',
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-4 md:mb-5">
                    <p
                        className="text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-2"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-heading)',
                        }}
                    >
                        Trusted By Industry Leaders
                    </p>
                    <h2
                        className="text-2xl md:text-3xl font-semibold"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                        }}
                    >
                        Powered by the <span style={{ color: '#ff6f61' }}>Best in AI</span>
                    </h2>
                </div>
            </div>

            {/* Scrollable Partners Row */}
            <div className="relative w-full">
                {/* Left fade gradient */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to right, var(--color-background), transparent)',
                    }}
                />

                {/* Right fade gradient */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to left, var(--color-background), transparent)',
                    }}
                />

                {/* Horizontal scroll container with drag support */}
                <div
                    ref={scrollRef}
                    className="flex justify-center gap-6 md:gap-10 px-8 md:px-16 py-4 overflow-x-auto scrollbar-hide select-none"
                    style={{
                        scrollBehavior: isDragging ? 'auto' : 'smooth',
                        cursor: 'grab',
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {PARTNERS.map((partner) => (
                        <div
                            key={partner.name}
                            className="group relative flex-shrink-0 flex items-center justify-center px-6 md:px-10 py-4 transition-all duration-300"
                        >
                            {/* Hover glow effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'radial-gradient(circle at center, rgba(255, 111, 97, 0.1) 0%, transparent 70%)',
                                }}
                            />

                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={300}
                                height={120}
                                className="w-auto h-24 md:h-32 lg:h-40 object-contain transition-all duration-300 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 pointer-events-none"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle bottom border gradient */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-[800px]"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--color-border), transparent)',
                }}
            />
        </section>
    )
}
