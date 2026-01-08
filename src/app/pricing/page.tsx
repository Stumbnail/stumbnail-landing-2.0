'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

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

const faqs = [
    {
        question: "How does the AI thumbnail generator work?",
        answer: "Our AI thumbnail maker analyzes your input, whether it's a YouTube link, prompt, or uploaded assets, and generates professional thumbnails optimized for clicks. You can generate, edit, and refine until it's perfect."
    },
    {
        question: "What makes Stumbnail different from other thumbnail makers?",
        answer: "Unlike generic design tools, Stumbnail is built specifically for YouTube creators. Our AI understands what makes thumbnails click-worthy: faces, contrast, text placement, and visual hierarchy. Plus, features like Smart Merge let you combine multiple assets seamlessly."
    },
    {
        question: "Can I try the AI thumbnail creator for free?",
        answer: "Yes! You can start with our free tier to test the AI thumbnail generator. No credit card required. Upgrade to Creator or Automation when you need more credits and features."
    },
    {
        question: "How many thumbnails can I create with each plan?",
        answer: "Credits work across all features. A single thumbnail generation costs 3-47 credits depending on the model. Creator gives you 1,430 credits, and Automation gives you 4,500 credits per month."
    },
    {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with our YouTube thumbnail generator, contact us for a full refund."
    }
];

export default function PricingPage() {
    const [selectedPlan, setSelectedPlan] = useState<'creator' | 'automation'>('creator');

    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
            <IslandHeader />

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
                {/* Background glow */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        left: '50%',
                        top: '0',
                        transform: 'translateX(-50%)',
                        width: '800px',
                        height: '400px',
                        background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.15) 0%, transparent 70%)',
                    }}
                />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                            lineHeight: '1.1',
                        }}
                    >
                        Simple, Credit-Based{' '}
                        <br className="hidden md:block" />
                        <span style={{ color: '#ff6f61' }}>Pricing</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        Start free, upgrade when you need more. Different AI models use different credits.
                    </p>
                </div>
            </section>

            {/* Pricing Cards Section */}
            <section className="relative py-12 px-4 overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff6f61] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Pricing Layout - Side by Side */}
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
                            <div
                                className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg"
                                style={{ backgroundColor: '#10b981', color: 'white' }}
                            >
                                <SparklesIcon className="w-3 h-3" />
                                Start Here
                            </div>

                            <div className="flex-1 flex flex-col space-y-5 pt-2">
                                {/* Price Display */}
                                <div className="text-center pb-4" style={{ borderBottom: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">Free Trial</p>
                                    <div className="mt-3 flex items-baseline justify-center gap-1">
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--color-foreground)' }}>$0</span>
                                    </div>
                                    <p className="mt-2 font-bold text-lg" style={{ color: '#10b981' }}>30 credits</p>
                                </div>

                                {/* Features */}
                                <div className="flex-1">
                                    <ul className="space-y-2.5">
                                        {freeFeatures.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-foreground)' }}>
                                                <span style={{ color: feature.isLimitation ? '#f59e0b' : '#10b981' }}>
                                                    <feature.icon className="w-4 h-4 shrink-0" />
                                                </span>
                                                <span style={feature.isLimitation ? { color: '#d97706' } : {}}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="https://app.stumbnail.com/login"
                                    className="block w-full py-3.5 px-6 rounded-xl font-bold text-center text-white transition-all duration-200 hover:shadow-lg mt-auto"
                                    style={{
                                        backgroundColor: '#10b981',
                                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)',
                                    }}
                                >
                                    Start Free
                                </Link>
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
                            {/* Plan Toggle */}
                            <div
                                className="flex gap-2 p-1.5 rounded-xl mb-6"
                                style={{
                                    backgroundColor: 'var(--color-background)',
                                    border: '1px solid var(--color-border)',
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
                                <div className="text-center pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--color-foreground)' }}>
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
                                            <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-foreground)' }}>
                                                <span style={{ color: '#ff6f61' }}>
                                                    <feature.icon className="w-4 h-4 shrink-0" />
                                                </span>
                                                <span>{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="https://app.stumbnail.com/login"
                                    className="block w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all duration-200 mt-auto"
                                    style={{
                                        backgroundColor: '#ff6f61',
                                        color: 'white',
                                        boxShadow: '0 4px 14px rgba(255, 111, 97, 0.25)',
                                    }}
                                >
                                    Get {selectedPlan === 'creator' ? 'Creator' : 'Automation'}
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Credit Info */}
                    <div className="mt-10 text-center">
                        <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                            Credits vary by AI model, from 3 credits for fast generations to 47 for premium quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* How Credits Work Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            How <span style={{ color: '#ff6f61' }}>Credits</span> Work
                        </h2>
                        <p
                            className="text-base md:text-lg max-w-2xl mx-auto"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            Our AI thumbnail generator uses a credit-based system. Different actions cost different amounts depending on complexity.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="text-3xl font-bold mb-2" style={{ color: '#ff6f61' }}>3-47</div>
                            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}>Generation</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Create a thumbnail from a prompt or YouTube link</p>
                        </div>

                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="text-3xl font-bold mb-2" style={{ color: '#ff6f61' }}>24</div>
                            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}>Smart Merge (Standard)</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Combine multiple assets into one thumbnail</p>
                        </div>

                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="text-3xl font-bold mb-2" style={{ color: '#ff6f61' }}>47</div>
                            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}>Smart Merge (Pro)</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Higher quality merging with advanced AI models</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            Frequently Asked <span style={{ color: '#ff6f61' }}>Questions</span>
                        </h2>
                        <p
                            className="text-base md:text-lg max-w-2xl mx-auto"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            Everything you need to know about our AI YouTube thumbnail generator pricing.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl"
                                style={{
                                    backgroundColor: 'var(--color-background)',
                                    border: '1px solid var(--color-border)',
                                }}
                            >
                                <h3
                                    className="text-lg font-semibold mb-3"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-foreground)',
                                    }}
                                >
                                    {faq.question}
                                </h3>
                                <p
                                    className="text-sm"
                                    style={{
                                        color: 'var(--color-text-muted)',
                                        fontFamily: 'var(--font-body)',
                                        lineHeight: '1.7',
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                        }}
                    >
                        Ready to Create Click-Worthy Thumbnails?
                    </h2>
                    <p
                        className="text-base md:text-lg max-w-2xl mx-auto mb-8"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                        }}
                    >
                        Join thousands of creators using the best AI thumbnail generator to stand out on YouTube.
                    </p>
                    <Link href="https://app.stumbnail.com/login">
                        <Button
                            variant="primary"
                            className="h-[56px] px-10 text-lg rounded-2xl"
                            icon="/assets/icons/sparkle.svg"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                backgroundColor: '#ff6f61',
                            }}
                        >
                            Start Free Trial
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
