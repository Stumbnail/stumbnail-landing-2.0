import { Metadata } from 'next'
import Link from 'next/link'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
    title: 'Pricing - AI YouTube Thumbnail Generator | Stumbnail',
    description: 'Affordable pricing for the best AI thumbnail generator. Create professional YouTube thumbnails with our AI thumbnail maker. Start free, upgrade when you need more.',
    keywords: 'AI thumbnail generator pricing, YouTube thumbnail maker cost, AI thumbnail creator price, thumbnail generator subscription, affordable thumbnail maker',
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

function CrownIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
            <path d="M5 21h14" />
        </svg>
    );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

const features = [
    { icon: MergeIcon, text: "Smart Merge — combine assets intelligently" },
    { icon: WandIcon, text: "Prompt-based generation" },
    { icon: YouTubeIcon, text: "Clone any YouTube thumbnail" },
    { icon: ImageIcon, text: "Upload custom assets" },
    { icon: LayersIcon, text: "Access to multiple AI models" },
    { icon: LockIcon, text: "Keep thumbnails private" },
];

const faqs = [
    {
        question: "How does the AI thumbnail generator work?",
        answer: "Our AI thumbnail maker analyzes your input — whether it's a YouTube link, prompt, or uploaded assets — and generates professional thumbnails optimized for clicks. You can generate, edit, and refine until it's perfect."
    },
    {
        question: "What makes Stumbnail different from other thumbnail makers?",
        answer: "Unlike generic design tools, Stumbnail is built specifically for YouTube creators. Our AI understands what makes thumbnails click-worthy: faces, contrast, text placement, and visual hierarchy. Plus, features like Smart Merge let you combine multiple assets seamlessly."
    },
    {
        question: "Can I try the AI thumbnail creator for free?",
        answer: "Yes! You can start with our free tier to test the AI thumbnail generator. No credit card required. Upgrade to Creator or Pro when you need more credits and features."
    },
    {
        question: "How many thumbnails can I create with each plan?",
        answer: "Credits work across all features. A single thumbnail generation costs 10 credits on average. Creator gives you 1,430 credits (~140+ thumbnails), and Pro gives you 4,500 credits (~450+ thumbnails) per month."
    },
    {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with our YouTube thumbnail generator, contact us for a full refund."
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
            <IslandHeader />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
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
                        AI Thumbnail Generator{' '}
                        <br className="hidden md:block" />
                        <span style={{ color: '#ff6f61' }}>Pricing</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-4"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        Simple, transparent pricing for the best YouTube thumbnail maker. Pay for what you use. Different AI models, different costs.
                    </p>
                </div>
            </section>

            {/* Pricing Cards Section */}
            <section className="relative py-12 px-4 overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff6f61] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

                        {/* Creator Plan */}
                        <div className="relative p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-alt)]/60 backdrop-blur-sm">
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">Creator</p>
                                    <div className="mt-3 flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--color-foreground)' }}>$12.99</span>
                                        <span className="text-[var(--color-text-muted)]">/mo</span>
                                    </div>
                                    <p className="mt-2 text-[#ff6f61] font-semibold">1,430 credits</p>
                                </div>

                                <div className="h-px w-full bg-[var(--color-border)]" />

                                <ul className="space-y-3">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-foreground)]">
                                            <feature.icon className="w-4 h-4 text-[var(--color-text-muted)] shrink-0" />
                                            <span>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="https://app.stumbnail.com/login" className="block">
                                    <button className="w-full py-3 px-6 rounded-xl bg-[var(--color-button-bg)] border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold transition-colors duration-200 hover:bg-[var(--color-border)]">
                                        Get Creator
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div className="relative p-6 md:p-8 rounded-2xl border-2 border-[#ff6f61]/40 bg-[var(--color-background-alt)]/80 backdrop-blur-sm">
                            {/* Best Value Badge */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#ff6f61] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                                <CrownIcon className="w-3 h-3" />
                                Best Value
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-medium text-[#ff6f61] uppercase tracking-wider">Pro</p>
                                    <div className="mt-3 flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--color-foreground)' }}>$39</span>
                                        <span className="text-[var(--color-text-muted)]">/mo</span>
                                    </div>
                                    <p className="mt-2 text-[#ff6f61] font-semibold">4,500 credits</p>
                                </div>

                                <div className="h-px w-full bg-[#ff6f61]/20" />

                                <ul className="space-y-3">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-foreground)]">
                                            <feature.icon className="w-4 h-4 text-[#ff6f61] shrink-0" />
                                            <span>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="https://app.stumbnail.com/login" className="block">
                                    <button className="w-full py-3 px-6 rounded-xl bg-[#ff6f61] text-white font-bold shadow-lg shadow-[#ff6f61]/20 transition-colors duration-200 hover:bg-[#e85a4d]">
                                        Get Pro
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Free Plan CTA */}
                    <div className="mt-10 text-center">
                        <p className="text-[var(--color-text-muted)] text-sm">
                            Want to try our AI thumbnail maker first?{' '}
                            <Link href="https://app.stumbnail.com/login" className="text-[var(--color-foreground)] font-semibold underline underline-offset-4 decoration-[#ff6f61] hover:text-[#ff6f61] transition-colors">
                                Start free
                            </Link>
                            {' '}— no card required.
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
                            <div className="text-3xl font-bold mb-2" style={{ color: '#ff6f61' }}>10</div>
                            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}>Standard Generation</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Create a thumbnail from a prompt or YouTube link</p>
                        </div>

                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="text-3xl font-bold mb-2" style={{ color: '#ff6f61' }}>10</div>
                            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}>Smart Merge (Standard)</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Combine multiple assets into one thumbnail</p>
                        </div>

                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="text-3xl font-bold mb-2" style={{ color: '#ff6f61' }}>37</div>
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
