'use client'

import React from 'react'

function CheckIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}

function XIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

const comparisonPoints = [
    { feature: "Thumbnail-First Design", desc: "Built for YouTube CTR, not general images" },
    { feature: "True 16:9 Output", desc: "No cropping — ChatGPT produces square-ish" },
    { feature: "Multiple AI Models", desc: "Choose the style that fits your brand" },
    { feature: "Smart Merge Assets", desc: "Combine faces, text, backgrounds intelligently" },
    { feature: "Full Design Studio", desc: "Workspace canvas — compare, iterate, refine" },
    { feature: "Clone Any YouTube Thumbnail", desc: "Paste a link → edit → make it yours" },
    { feature: "Understands Thumbnails", desc: "Knows tone, messaging, what drives clicks" },
]

export function WhyStumbnailSection() {
    return (
        <section className="py-20 md:py-28 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            backgroundColor: 'rgba(255, 111, 97, 0.12)',
                            border: '1px solid rgba(255, 111, 97, 0.2)',
                        }}
                    >
                        <span
                            className="text-sm font-semibold"
                            style={{ color: '#ff6f61', fontFamily: 'var(--font-heading)' }}
                        >
                            The Real Question
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                            lineHeight: '1.1',
                        }}
                    >
                        &quot;Why Not Just Use{' '}
                        <span style={{ color: '#ff6f61' }}>ChatGPT</span>?&quot;
                    </h2>

                    <p
                        className="text-base md:text-lg max-w-2xl mx-auto"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        ChatGPT is a chatbot that happens to generate images.{' '}
                        <br className="hidden md:block" />
                        Photoshop and Canva are powerful, but built for pros with time.{' '}
                        <br className="hidden md:block" />
                        <strong style={{ color: 'var(--color-foreground)' }}>Stumbnail is a full thumbnail studio built for creators.</strong>
                    </p>
                </div>

                {/* Visual Comparison Grid */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Background glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.08) 0%, transparent 70%)',
                        }}
                    />

                    {/* Comparison Card */}
                    <div
                        className="relative rounded-3xl p-6 md:p-8 overflow-hidden"
                        style={{
                            backgroundColor: 'var(--color-background-alt)',
                            border: '1px solid var(--color-border)',
                        }}
                    >
                        {/* Header Row */}
                        <div className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_120px_120px] gap-4 mb-6 pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                            <div className="text-sm font-semibold" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-heading)' }}>
                                What You Get
                            </div>
                            <div className="text-center">
                                <span
                                    className="inline-block px-2 md:px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold"
                                    style={{
                                        backgroundColor: '#ff6f61',
                                        color: 'white',
                                    }}
                                >
                                    Stumbnail
                                </span>
                            </div>
                            <div className="text-center">
                                <span
                                    className="inline-block px-2 md:px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold"
                                    style={{
                                        backgroundColor: 'var(--color-button-bg)',
                                        color: 'var(--color-text-muted)',
                                    }}
                                >
                                    Others
                                </span>
                            </div>
                        </div>

                        {/* Comparison Rows */}
                        <div className="space-y-3 md:space-y-4">
                            {comparisonPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_120px_120px] gap-4 items-center py-2 md:py-3"
                                    style={{
                                        borderBottom: index < comparisonPoints.length - 1 ? '1px solid var(--color-border)' : 'none',
                                    }}
                                >
                                    <div>
                                        <p
                                            className="font-semibold text-sm md:text-base"
                                            style={{
                                                color: 'var(--color-foreground)',
                                                fontFamily: 'var(--font-heading)',
                                            }}
                                        >
                                            {point.feature}
                                        </p>
                                        <p
                                            className="text-xs mt-0.5 hidden sm:block"
                                            style={{ color: 'var(--color-text-muted)', opacity: 0.8 }}
                                        >
                                            {point.desc}
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div
                                            className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                                            style={{
                                                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                                            }}
                                        >
                                            <CheckIcon className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: '#22c55e' }} />
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div
                                            className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                                            style={{
                                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                            }}
                                        >
                                            <XIcon className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: '#ef4444' }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Tagline */}
                    <div className="text-center mt-10">
                        <p
                            className="text-sm md:text-base"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            All the tools. All the models. One focus:{' '}
                            <span style={{ color: '#ff6f61', fontWeight: 600 }}>thumbnails that get clicks.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

