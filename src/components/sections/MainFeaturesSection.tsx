'use client'

import React from 'react'
import { SmartMergeCard } from '@/components/features/SmartMergeCard'
import { YouTubeLinkCard } from '@/components/features/YouTubeLinkCard'
import { CreateWithPromptCard } from '@/components/features/CreateWithPromptCard'

type FeatureTab = 'smart-merge' | 'youtube-link' | 'prompt'

interface FeatureInfo {
    id: FeatureTab
    name: string
    tagline: string
    description: string
    icon: React.ReactNode
}

const features: FeatureInfo[] = [
    {
        id: 'smart-merge',
        name: 'Smart Merge',
        tagline: 'Assets to Thumbnail',
        description: 'Select your assets on the canvas. Your face, props, backgrounds. AI merges them into a thumbnail that looks like a pro made it. No design skills needed, done in seconds.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 35 35" fill="none">
                <path
                    d="M16.6613 0.243845C16.5396 0.385878 15.7077 2.41493 14.7743 4.72804C12.7047 9.94269 11.8322 11.2413 9.2959 12.8239C9.01183 12.9863 6.92191 13.879 4.62909 14.7921C2.33627 15.7255 0.347802 16.598 0.185478 16.74C0.0231542 16.9023 -0.0377173 17.2067 0.0231542 17.4907C0.144897 17.9168 0.733321 18.2009 4.16241 19.5604C8.89009 21.4271 9.62055 21.8329 11.1626 23.2735C12.5424 24.6127 13.212 25.8504 15.1801 30.781C15.9715 32.8303 16.7222 34.4942 16.8034 34.4942C16.9048 34.4942 17.1077 34.555 17.2701 34.6159C17.7976 34.8188 18.1831 34.1492 19.6237 30.4158C21.4499 25.7895 21.8151 25.0794 23.1137 23.659C24.5138 22.117 25.2645 21.7112 30.2762 19.6821C33.9691 18.2009 34.5575 17.8966 34.6184 17.4907C34.659 17.227 34.5778 16.9023 34.4561 16.74C34.3141 16.5777 32.5488 15.8066 30.54 14.995C26.0355 13.2297 24.7369 12.5602 23.4992 11.363C22.0992 10.0036 21.6528 9.17165 19.8267 4.62659C18.9339 2.35405 18.102 0.385878 17.9802 0.243845C17.8585 0.122102 17.5541 0.000359316 17.3106 0.000359316C17.0671 0.000359316 16.7628 0.122102 16.6613 0.243845Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        id: 'youtube-link',
        name: 'YouTube Link',
        tagline: 'Recreate Any Thumbnail',
        description: 'Found a thumbnail you love? Paste the YouTube link. Now you can swap faces, change text, edit backgrounds. Full control like you have the original Photoshop file. Keep the winning layout, make it yours.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: 'prompt',
        name: 'Prompt',
        tagline: 'Describe, Generate, Done',
        description: 'Describe what you want. Our AI has learned from millions of high-performing thumbnails, so it knows what gets clicks. One prompt, one click, one thumbnail ready to upload.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
]

export function MainFeaturesSection() {
    const [activeTab, setActiveTab] = React.useState<FeatureTab>('smart-merge')

    const activeFeature = features.find((f) => f.id === activeTab) || features[0]

    return (
        <section
            className="relative py-20 md:py-32 overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background)',
            }}
        >
            {/* Background subtle gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 111, 97, 0.06) 0%, transparent 60%)',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                {/* Feature Tabs */}
                <div className="flex justify-center mb-10 md:mb-14">
                    <div
                        className="inline-flex gap-2 p-1.5 rounded-2xl"
                        style={{
                            backgroundColor: 'var(--color-background-alt)',
                            border: '1px solid var(--color-border)',
                        }}
                    >
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                className="relative flex items-center gap-2 px-4 py-3 md:px-6 md:py-3.5 rounded-xl transition-all duration-300"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    backgroundColor: activeTab === feature.id ? '#ff6f61' : 'transparent',
                                    color: activeTab === feature.id ? 'white' : 'var(--color-foreground-muted)',
                                    boxShadow: activeTab === feature.id ? '0 4px 16px rgba(255, 111, 97, 0.35)' : 'none',
                                }}
                            >
                                <span
                                    className="hidden sm:block"
                                    style={{
                                        color: activeTab === feature.id ? 'white' : '#ff6f61',
                                    }}
                                >
                                    {feature.icon}
                                </span>
                                {feature.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Feature Content */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left: Feature Description */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 w-fit"
                            style={{
                                backgroundColor: 'rgba(255, 111, 97, 0.12)',
                                border: '1px solid rgba(255, 111, 97, 0.2)',
                            }}
                        >
                            <span
                                style={{
                                    color: '#ff6f61',
                                }}
                            >
                                {activeFeature.icon}
                            </span>
                            <span
                                className="text-sm font-semibold"
                                style={{
                                    color: '#ff6f61',
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                {activeFeature.tagline}
                            </span>
                        </div>

                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                                letterSpacing: '-0.02em',
                                lineHeight: '1.2',
                            }}
                        >
                            {activeFeature.name}
                        </h3>

                        <p
                            className="text-base md:text-lg mb-8"
                            style={{
                                color: 'var(--color-foreground-muted)',
                                fontFamily: 'var(--font-body)',
                                lineHeight: '1.8',
                                maxWidth: '520px',
                            }}
                        >
                            {activeFeature.description}
                        </p>
                    </div>

                    {/* Right: Feature Card/Demo */}
                    <div className="order-1 lg:order-2">
                        <div
                            className="transition-all duration-500"
                            style={{
                                opacity: 1,
                                transform: 'translateY(0)',
                            }}
                        >
                            {activeTab === 'smart-merge' && <SmartMergeCard />}
                            {activeTab === 'youtube-link' && <YouTubeLinkCard />}
                            {activeTab === 'prompt' && <CreateWithPromptCard />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
