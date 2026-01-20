'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface ComparisonSliderProps {
    beforeImage: string
    afterImage: string
    beforeAlt?: string
    afterAlt?: string
    className?: string
}

export function ComparisonSlider({
    beforeImage,
    afterImage,
    beforeAlt = 'Before',
    afterAlt = 'After',
    className = '',
}: ComparisonSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const percentage = (x / rect.width) * 100

        setSliderPosition(Math.min(Math.max(percentage, 0), 100))
    }

    const handleMouseDown = () => {
        setIsDragging(true)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return
        handleMove(e.clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return
        handleMove(e.touches[0].clientX)
    }

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
            document.addEventListener('touchmove', handleTouchMove)
            document.addEventListener('touchend', handleMouseUp)
        } else {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleMouseUp)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleMouseUp)
        }
    }, [isDragging])

    return (
        <div
            ref={containerRef}
            className={`relative w-full aspect-video rounded-2xl overflow-hidden select-none ${className}`}
            style={{
                border: '1px solid var(--color-border)',
                touchAction: 'none',
            }}
        >
            {/* After Image (full width) */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={afterImage}
                    alt={afterAlt}
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            {/* Before Image (clipped) */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
            >
                <Image
                    src={beforeImage}
                    alt={beforeAlt}
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 cursor-ew-resize"
                style={{
                    left: `${sliderPosition}%`,
                    backgroundColor: '#ff6f61',
                    boxShadow: '0 0 10px rgba(255, 111, 97, 0.5)',
                    transform: 'translateX(-50%)',
                }}
            >
                {/* Slider Handle */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full cursor-ew-resize flex items-center justify-center"
                    style={{
                        backgroundColor: '#ff6f61',
                        boxShadow: '0 4px 12px rgba(255, 111, 97, 0.4)',
                    }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={(e) => {
                        e.preventDefault()
                        setIsDragging(true)
                    }}
                >
                    {/* Arrows */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M15 18l-6-6 6-6M9 18l-6-6 6-6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    opacity: sliderPosition > 20 ? 1 : 0,
                    transition: 'opacity 0.2s',
                }}
            >
                {beforeAlt}
            </div>
            <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    opacity: sliderPosition < 80 ? 1 : 0,
                    transition: 'opacity 0.2s',
                }}
            >
                {afterAlt}
            </div>
        </div>
    )
}
