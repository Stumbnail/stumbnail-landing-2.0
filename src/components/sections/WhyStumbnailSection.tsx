'use client'

import React from 'react'
import Image from 'next/image'
import { VimeoPlayer } from '@/components/ui/VimeoPlayer'
import { ComparisonSlider } from '@/components/ui/ComparisonSlider'

// Illustration: Trained on Thumbnails
function TrainedIllustration() {
    return (
        <div
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background-alt)',
                border: '1px solid var(--color-border)',
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center p-6">
                {/* Thumbnail frame */}
                <div className="relative w-full max-w-[280px] aspect-video">
                    {/* Main thumbnail background */}
                    <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,111,97,0.12) 0%, rgba(255,111,97,0.04) 100%)',
                            border: '2px solid rgba(255,111,97,0.25)',
                        }}
                    />

                    {/* Face zone */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <div
                            className="w-14 h-14 rounded-full relative"
                            style={{
                                background: 'radial-gradient(circle, rgba(255,111,97,0.35) 0%, rgba(255,111,97,0.08) 100%)',
                                border: '2px solid rgba(255,111,97,0.5)',
                            }}
                        >
                            <div
                                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                                style={{ backgroundColor: '#ff6f61', color: 'white' }}
                            >
                                1
                            </div>
                        </div>
                    </div>

                    {/* Text zone */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-1.5">
                        <div
                            className="w-20 h-3 rounded relative"
                            style={{
                                background: 'linear-gradient(90deg, rgba(255,111,97,0.45) 0%, rgba(255,111,97,0.15) 100%)',
                            }}
                        >
                            <div
                                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                                style={{ backgroundColor: '#ff6f61', color: 'white' }}
                            >
                                2
                            </div>
                        </div>
                        <div
                            className="w-14 h-2.5 rounded"
                            style={{ backgroundColor: 'rgba(255,111,97,0.2)' }}
                        />
                    </div>

                    {/* CTR badge */}
                    <div
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[9px] font-bold"
                        style={{
                            backgroundColor: 'rgba(255,111,97,0.15)',
                            color: '#ff6f61',
                            border: '1px solid rgba(255,111,97,0.25)',
                        }}
                    >
                        HIGH CTR
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-3 text-[9px]" style={{ color: 'var(--color-text-muted)', opacity: 0.7 }}>
                <span><strong style={{ color: '#ff6f61' }}>1</strong> Face</span>
                <span><strong style={{ color: '#ff6f61' }}>2</strong> Text</span>
            </div>
        </div>
    )
}

// Illustration: Multiple AI Models
function MultiModelIllustration() {
    return (
        <div
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background-alt)',
                border: '1px solid var(--color-border)',
            }}
        >
            <div className="absolute inset-0 p-5">
                {/* Model selector */}
                <div className="flex gap-1.5 mb-3">
                    {['Real', 'Art', 'Film'].map((model, i) => (
                        <div
                            key={model}
                            className="px-2.5 py-1 rounded text-[10px] font-semibold"
                            style={{
                                backgroundColor: i === 0 ? 'rgba(255,111,97,0.15)' : 'var(--color-button-bg)',
                                color: i === 0 ? '#ff6f61' : 'var(--color-text-muted)',
                                border: i === 0 ? '1px solid rgba(255,111,97,0.3)' : 'none',
                            }}
                        >
                            {model}
                        </div>
                    ))}
                </div>

                {/* Three thumbnails */}
                <div className="grid grid-cols-3 gap-2 h-[calc(100%-40px)]">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="relative rounded-lg overflow-hidden"
                            style={{
                                backgroundColor: 'var(--color-button-bg)',
                                border: i === 0 ? '2px solid #ff6f61' : '1px solid var(--color-border)',
                                opacity: i === 0 ? 1 : 0.6,
                            }}
                        >
                            {/* Content hint */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                                <div
                                    className="w-7 h-7 rounded-full"
                                    style={{ backgroundColor: 'rgba(255,111,97,0.15)' }}
                                />
                                <div className="w-10 h-1.5 rounded" style={{ backgroundColor: 'rgba(255,111,97,0.1)' }} />
                            </div>

                            {/* Check on selected */}
                            {i === 0 && (
                                <div
                                    className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: '#ff6f61' }}
                                >
                                    <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Illustration: True 16:9
function AspectRatioIllustration() {
    return (
        <div
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background-alt)',
                border: '1px solid var(--color-border)',
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center p-5">
                <div className="flex items-center gap-6">
                    {/* Wrong ratio */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="relative">
                            <div
                                className="w-14 h-14 rounded flex items-center justify-center"
                                style={{
                                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                                    border: '2px dashed rgba(239, 68, 68, 0.3)',
                                }}
                            >
                                <span className="text-[9px] font-mono" style={{ color: 'rgba(239,68,68,0.5)' }}>1:1</span>
                            </div>
                            <div
                                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: '#ef4444' }}
                            >
                                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" stroke="white" strokeWidth="3" fill="none">
                                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-[9px]" style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}>ChatGPT</span>
                    </div>

                    {/* Arrow */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-text-muted)', opacity: 0.3 }}>
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Correct 16:9 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="relative">
                            <div
                                className="w-28 aspect-video rounded flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,111,97,0.15) 0%, rgba(255,111,97,0.05) 100%)',
                                    border: '2px solid #ff6f61',
                                }}
                            >
                                <span className="text-xs font-bold" style={{ color: '#ff6f61' }}>16:9</span>
                            </div>
                            <div
                                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: '#22c55e' }}
                            >
                                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" stroke="white" strokeWidth="3" fill="none">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-[9px] font-semibold" style={{ color: '#ff6f61' }}>Stumbnail</span>
                    </div>
                </div>
            </div>

            {/* Badge */}
            <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-bold"
                style={{
                    backgroundColor: 'rgba(255,111,97,0.12)',
                    color: '#ff6f61',
                    border: '1px solid rgba(255,111,97,0.2)',
                }}
            >
                YouTube-ready
            </div>
        </div>
    )
}

export function WhyStumbnailSection() {
    return (
        <section className="py-24 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-20 md:mb-28">
                    <p
                        className="text-base md:text-lg mb-4"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                        }}
                    >
                        &quot;Why not just use ChatGPT?&quot;
                    </p>
                    <h2
                        className="text-4xl md:text-6xl lg:text-7xl font-bold"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                            lineHeight: '1.05',
                            letterSpacing: '-0.03em',
                        }}
                    >
                        Because ChatGPT<br />
                        can&apos;t do <span style={{ color: '#ff6f61' }}>this</span>.
                    </h2>
                </div>

                {/* Feature 1: Clone */}
                <div className="mb-20 md:mb-32">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="lg:pr-8">
                            <h3
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                    lineHeight: '1.1',
                                }}
                            >
                                Paste a link.{' '}
                                <span style={{ color: '#ff6f61' }}>Clone the thumbnail.</span>
                            </h3>
                            <p
                                className="text-lg md:text-xl"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    lineHeight: '1.6',
                                }}
                            >
                                See a thumbnail you like? Drop the YouTube link. Get it in full quality. Edit it, swap your face in, change the text. Make it yours.
                            </p>
                        </div>
                        <VimeoPlayer videoUrl="https://vimeo.com/1156615752?fl=tl&fe=ec" />
                    </div>
                </div>

                {/* Feature 2: Asset Merge */}
                <div className="mb-20 md:mb-32">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <VimeoPlayer videoUrl="https://vimeo.com/1156615673?share=copy&fl=sv&fe=ci" />
                        </div>
                        <div className="order-1 lg:order-2 lg:pl-8">
                            <h3
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                    lineHeight: '1.1',
                                }}
                            >
                                Drop your assets.{' '}
                                <span style={{ color: '#ff6f61' }}>Get a thumbnail.</span>
                            </h3>
                            <p
                                className="text-lg md:text-xl"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    lineHeight: '1.6',
                                }}
                            >
                                Your face. Your text. Your background. Stumbnail merges them intelligently—proper composition, right tone, click-worthy hierarchy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Workspace */}
                <div className="mb-20 md:mb-32">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="lg:pr-8">
                            <h3
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                    lineHeight: '1.1',
                                }}
                            >
                                A workspace.{' '}
                                <span style={{ color: '#ff6f61' }}>Not a chatbox.</span>
                            </h3>
                            <p
                                className="text-lg md:text-xl"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    lineHeight: '1.6',
                                }}
                            >
                                Full design studio. Layers. Compare mode. Real editing tools. Iterate like a designer, not like you&apos;re prompting an AI.
                            </p>
                        </div>
                        <div
                            className="relative w-full aspect-video rounded-2xl overflow-hidden"
                            style={{
                                border: '1px solid var(--color-border)',
                            }}
                        >
                            <Image
                                src="/assets/images/thumbnails/canvas.webp"
                                alt="Stumbnail workspace"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature 4: Language */}
                <div className="mb-20 md:mb-32">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <ComparisonSlider
                                beforeImage="/assets/images/thumbnails/thumbnail-1.webp"
                                afterImage="/assets/images/thumbnails/Translate-the-text-into-french.webp"
                                beforeAlt="English"
                                afterAlt="French"
                            />
                        </div>
                        <div className="order-1 lg:order-2 lg:pl-8">
                            <h3
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                    lineHeight: '1.1',
                                }}
                            >
                                Any language.{' '}
                                <span style={{ color: '#ff6f61' }}>Proper typography.</span>
                            </h3>
                            <p
                                className="text-lg md:text-xl"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    lineHeight: '1.6',
                                }}
                            >
                                Global audience? Generate text in their language with correct glyphs and cultural context. One tool for every market.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three illustrations */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    <div>
                        <TrainedIllustration />
                        <h4
                            className="text-xl md:text-2xl font-bold mt-5 mb-2"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            Trained on thumbnails
                        </h4>
                        <p
                            className="text-sm md:text-base"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Understands faces, text hierarchy, what gets clicks. Not trained on random images.
                        </p>
                    </div>

                    <div>
                        <MultiModelIllustration />
                        <h4
                            className="text-xl md:text-2xl font-bold mt-5 mb-2"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            Multiple AI models
                        </h4>
                        <p
                            className="text-sm md:text-base"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Photorealistic. Illustrated. Cinematic. Pick what fits your channel.
                        </p>
                    </div>

                    <div>
                        <AspectRatioIllustration />
                        <h4
                            className="text-xl md:text-2xl font-bold mt-5 mb-2"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            True 16:9 output
                        </h4>
                        <p
                            className="text-sm md:text-base"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Perfect dimensions every time. ChatGPT gives you squares. We give you thumbnails.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
