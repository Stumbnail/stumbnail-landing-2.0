'use client'

import React, { useState } from 'react';
import { trackPricingPlanClick, trackExternalLinkClick } from '@/lib/analytics';

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

export function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState<'creator' | 'automation'>('creator');

    return (
        <section className="relative py-24 px-4 overflow-hidden" id="pricing">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff6f61] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Simple, Credit-Based Pricing
                    </h2>
                    <p className="text-[var(--color-text-muted)] max-w-lg mx-auto">
                        Start free, upgrade when you need more. Different AI models use different credits.
                    </p>
                </div>

                {/* Pricing Layout */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

                    {/* Free Trial Card */}
                    <div
                        className="relative p-6 md:p-8 rounded-2xl backdrop-blur-sm flex flex-col"
                        style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.03)',
                            border: '2px dashed rgba(16, 185, 129, 0.4)',
                        }}
                    >
                        {/* Free Badge */}
                        <div className="absolute -top-3 left-6 flex items-center gap-1.5 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                            <SparklesIcon className="w-3 h-3" />
                            Start Here
                        </div>

                        <div className="flex-1 flex flex-col space-y-5 pt-2">
                            {/* Price Display */}
                            <div className="text-center pb-4" style={{ borderBottom: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">Free Trial</p>
                                <div className="mt-3 flex items-baseline justify-center gap-1">
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight">$0</span>
                                </div>
                                <p className="mt-2 text-emerald-500 font-bold text-lg">30 credits</p>
                            </div>

                            {/* Features */}
                            <div className="flex-1">
                                <ul className="space-y-2.5">
                                    {freeFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-foreground)]">
                                            <span style={{ color: feature.isLimitation ? '#f59e0b' : '#10b981' }}>
                                                <feature.icon className="w-4 h-4 shrink-0" />
                                            </span>
                                            <span className={feature.isLimitation ? 'text-amber-600 dark:text-amber-400' : ''}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="https://app.stumbnail.com/login"
                                className="block w-full py-3 px-6 rounded-xl bg-emerald-500 text-white font-bold text-center transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 mt-auto"
                                onClick={() => {
                                    trackPricingPlanClick('free', '$0');
                                    trackExternalLinkClick('https://app.stumbnail.com/login');
                                }}
                            >
                                Start Free
                            </a>
                        </div>
                    </div>

                    {/* Paid Plans Card */}
                    <div
                        className="relative p-6 md:p-8 rounded-2xl backdrop-blur-sm flex flex-col"
                        style={{
                            backgroundColor: 'rgba(255, 111, 97, 0.03)',
                            border: '2px solid rgba(255, 111, 97, 0.3)',
                        }}
                    >
                        {/* Toggle for Plan Selection */}
                        <div className="flex gap-2 p-1.5 rounded-xl bg-[var(--color-background)]/80 border border-[var(--color-border)] mb-6">
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
                                    <span className="absolute -top-2 -right-2 flex items-center gap-0.5 bg-[#ff6f61] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">
                                        <CrownIcon className="w-2.5 h-2.5" />
                                        Best
                                    </span>
                                )}
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col space-y-5">
                            {/* Price Display */}
                            <div className="text-center pb-4 border-b border-[var(--color-border)]">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight">
                                        {selectedPlan === 'creator' ? '$12.99' : '$39'}
                                    </span>
                                    <span className="text-[var(--color-text-muted)]">/mo</span>
                                </div>
                                <p className="mt-2 font-bold text-lg" style={{ color: '#ff6f61' }}>
                                    {selectedPlan === 'creator' ? '1,430 credits' : '4,500 credits'}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex-1">
                                <ul className="space-y-2.5">
                                    {paidFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-foreground)]">
                                            <span style={{ color: '#ff6f61' }}>
                                                <feature.icon className="w-4 h-4 shrink-0" />
                                            </span>
                                            <span>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="https://app.stumbnail.com/login"
                                className="block w-full py-3 px-6 rounded-xl font-bold text-center transition-all duration-200 hover:opacity-90 mt-auto"
                                style={{
                                    backgroundColor: '#ff6f61',
                                    color: 'white',
                                    boxShadow: '0 4px 14px rgba(255, 111, 97, 0.25)',
                                }}
                                onClick={() => {
                                    const plan = selectedPlan === 'creator' ? 'creator' : 'automation';
                                    const price = selectedPlan === 'creator' ? '$12.99' : '$39';
                                    trackPricingPlanClick(plan, price);
                                    trackExternalLinkClick('https://app.stumbnail.com/login');
                                }}
                            >
                                Get {selectedPlan === 'creator' ? 'Creator' : 'Automation'}
                            </a>
                        </div>
                    </div>

                </div>

                {/* Credit Usage Info */}
                <div className="mt-12 text-center">
                    <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">
                        Credits vary by AI model, from 7 credits for fast generations to 75 for premium quality.
                    </p>
                </div>
            </div>
        </section>
    );
}
