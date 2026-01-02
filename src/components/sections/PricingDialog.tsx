'use client'

import React, { useState } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'

function SparklesIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        </svg>
    );
}

function MergeIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 6 4-4 4 4" />
            <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
            <path d="m20 22-5-5" />
        </svg>
    );
}

function WandIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 4V2" />
            <path d="M15 16v-2" />
            <path d="M8 9h2" />
            <path d="M20 9h2" />
            <path d="M17.8 11.8 19 13" />
            <path d="M15 9h.01" />
            <path d="M17.8 6.2 19 5" />
            <path d="m3 21 9-9" />
            <path d="M12.2 6.2 11 5" />
        </svg>
    );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    );
}

function ImageIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
    );
}

function LayersIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        </svg>
    );
}

function LockIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}

function GlobeIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    );
}

function CrownIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
            <path d="M5 21h14" />
        </svg>
    );
}

function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

function ChevronRightIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

const paidFeatures = [
    { icon: MergeIcon, text: "Smart Merge: combine assets with AI" },
    { icon: WandIcon, text: "Prompt-based generation" },
    { icon: YouTubeIcon, text: "Clone any YouTube thumbnail" },
    { icon: ImageIcon, text: "Upload custom assets" },
    { icon: LayersIcon, text: "Access to all AI models" },
    { icon: LockIcon, text: "Keep thumbnails private" },
];

const freeFeatures = [
    { icon: MergeIcon, text: "Smart Merge: combine assets with AI" },
    { icon: WandIcon, text: "Prompt-based generation" },
    { icon: YouTubeIcon, text: "Clone any YouTube thumbnail" },
    { icon: ImageIcon, text: "Upload custom assets" },
    { icon: LayersIcon, text: "Standard AI models" },
    { icon: GlobeIcon, text: "Thumbnails are public", isLimitation: true },
];

interface PricingDialogProps {
    open: boolean
    onClose: () => void
}

export function PricingDialog({ open, onClose }: PricingDialogProps) {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    const [selectedPlan, setSelectedPlan] = useState<'creator' | 'automation'>('creator');

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: isDark
                        ? 'rgba(0, 0, 0, 0.85)'
                        : 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                }}
            />

            {/* Dialog Content */}
            <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10"
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: isDark
                        ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(18, 18, 18, 0.99) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.99) 100%)',
                    boxShadow: isDark
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                        : '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(0, 0, 0, 0.06)',
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full transition-colors duration-200"
                    style={{
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                        color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                    }}
                    aria-label="Close pricing"
                >
                    <CloseIcon className="w-5 h-5" />
                </button>

                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff6f61] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-10 md:mb-12 space-y-3">
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                            style={{ color: 'var(--color-foreground)' }}
                        >
                            Simple, Credit-Based Pricing
                        </h2>
                        <p
                            className="max-w-lg mx-auto text-base md:text-lg"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Start free, upgrade when you need more. Different AI models use different credits.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">

                        {/* Free Trial Card */}
                        <div
                            className="relative p-6 md:p-8 rounded-2xl flex flex-col"
                            style={{
                                backgroundColor: isDark ? 'rgba(16, 185, 129, 0.05)' : 'rgba(16, 185, 129, 0.03)',
                                border: '2px dashed rgba(16, 185, 129, 0.4)',
                            }}
                        >
                            {/* Free Badge */}
                            <div
                                className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg"
                                style={{
                                    backgroundColor: '#10b981',
                                    color: 'white',
                                }}
                            >
                                <SparklesIcon className="w-3 h-3" />
                                Start Here
                            </div>

                            <div className="flex-1 flex flex-col space-y-5 pt-2">
                                {/* Price Display */}
                                <div
                                    className="text-center pb-4"
                                    style={{ borderBottom: '1px solid rgba(16, 185, 129, 0.2)' }}
                                >
                                    <p
                                        className="text-sm font-medium uppercase tracking-wider"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        Free Trial
                                    </p>
                                    <div className="mt-3 flex items-baseline justify-center gap-1">
                                        <span
                                            className="text-4xl md:text-5xl font-bold tracking-tight"
                                            style={{ color: 'var(--color-foreground)' }}
                                        >
                                            $0
                                        </span>
                                    </div>
                                    <p className="mt-2 font-bold text-lg" style={{ color: '#10b981' }}>30 credits</p>
                                </div>

                                {/* Features */}
                                <div className="flex-1">
                                    <ul className="space-y-2.5">
                                        {freeFeatures.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-3 text-sm"
                                                style={{ color: 'var(--color-foreground)' }}
                                            >
                                                <feature.icon
                                                    className="w-4 h-4 shrink-0"
                                                    style={{ color: feature.isLimitation ? '#f59e0b' : '#10b981' }}
                                                />
                                                <span style={feature.isLimitation ? { color: isDark ? '#fbbf24' : '#d97706' } : {}}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="https://app.stumbnail.com/login"
                                    className="block w-full py-3 px-6 rounded-xl font-bold text-center text-white transition-all duration-200 hover:shadow-lg mt-auto"
                                    style={{
                                        backgroundColor: '#10b981',
                                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                                    }}
                                >
                                    Start Free
                                </a>
                            </div>
                        </div>

                        {/* Paid Plans Card */}
                        <div
                            className="relative p-6 md:p-8 rounded-2xl flex flex-col"
                            style={{
                                backgroundColor: isDark ? 'rgba(255, 111, 97, 0.05)' : 'rgba(255, 111, 97, 0.03)',
                                border: '2px solid rgba(255, 111, 97, 0.3)',
                            }}
                        >
                            {/* Toggle for Plan Selection */}
                            <div
                                className="flex gap-2 p-1.5 rounded-xl mb-6"
                                style={{
                                    backgroundColor: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                                    border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                                }}
                            >
                                <button
                                    onClick={() => setSelectedPlan('creator')}
                                    className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200"
                                    style={{
                                        backgroundColor: selectedPlan === 'creator' ? '#ff6f61' : 'transparent',
                                        color: selectedPlan === 'creator' ? 'white' : 'var(--color-text-muted)',
                                    }}
                                >
                                    Creator
                                </button>
                                <button
                                    onClick={() => setSelectedPlan('automation')}
                                    className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 relative"
                                    style={{
                                        backgroundColor: selectedPlan === 'automation' ? '#ff6f61' : 'transparent',
                                        color: selectedPlan === 'automation' ? 'white' : 'var(--color-text-muted)',
                                    }}
                                >
                                    Automation
                                    {selectedPlan !== 'automation' && (
                                        <span
                                            className="absolute -top-2 -right-2 flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold"
                                            style={{ backgroundColor: '#ff6f61', color: 'white' }}
                                        >
                                            <CrownIcon className="w-2.5 h-2.5" />
                                            Best
                                        </span>
                                    )}
                                </button>
                            </div>

                            <div className="flex-1 flex flex-col space-y-5">
                                {/* Price Display */}
                                <div
                                    className="text-center pb-4"
                                    style={{ borderBottom: '1px solid var(--color-border)' }}
                                >
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span
                                            className="text-4xl md:text-5xl font-bold tracking-tight"
                                            style={{ color: 'var(--color-foreground)' }}
                                        >
                                            {selectedPlan === 'creator' ? '$12.99' : '$39'}
                                        </span>
                                        <span style={{ color: 'var(--color-text-muted)' }}>/mo</span>
                                    </div>
                                    <p className="mt-2 font-bold text-lg" style={{ color: '#ff6f61' }}>
                                        {selectedPlan === 'creator' ? '1,430 credits' : '4,500 credits'}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="flex-1">
                                    <ul className="space-y-2.5">
                                        {paidFeatures.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-3 text-sm"
                                                style={{ color: 'var(--color-foreground)' }}
                                            >
                                                <feature.icon className="w-4 h-4 shrink-0" style={{ color: '#ff6f61' }} />
                                                <span>{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="https://app.stumbnail.com/login"
                                    className="block w-full py-3 px-6 rounded-xl font-bold text-center transition-all duration-200 mt-auto"
                                    style={{
                                        backgroundColor: '#ff6f61',
                                        color: 'white',
                                        boxShadow: '0 4px 14px rgba(255, 111, 97, 0.3)',
                                    }}
                                >
                                    Get {selectedPlan === 'creator' ? 'Creator' : 'Automation'}
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Credit Usage Info */}
                    <div className="mt-8 text-center">
                        <p style={{ color: 'var(--color-text-muted)' }} className="text-sm max-w-xl mx-auto">
                            Credits vary by AI model, from 7 credits for fast generations to 75 for premium quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
