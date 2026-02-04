'use client'

import { trackPricingPlanClick, trackExternalLinkClick } from '@/lib/analytics';

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

const paidFeatures = [
    { icon: MergeIcon, text: "Smart Merge: combine assets with AI" },
    { icon: WandIcon, text: "Prompt-based generation" },
    { icon: YouTubeIcon, text: "Clone any YouTube thumbnail" },
    { icon: ImageIcon, text: "Upload custom assets" },
    { icon: LayersIcon, text: "Access to all AI models" },
    { icon: LockIcon, text: "Keep thumbnails private" },
];

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        monthlyPrice: 4,
        credits: 590,
        highlight: false,
    },
    {
        id: 'creator',
        name: 'Creator',
        monthlyPrice: 9.99,
        credits: 1475,
        highlight: true,
    },
] as const;

const weeksPerMonth = 52 / 12;
const formatMonthlyPrice = (price: number) => (Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`);
const formatWeeklyPrice = (monthlyPrice: number) => `$${(monthlyPrice / weeksPerMonth).toFixed(2)}`;

export function PricingSection() {
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
                        Choose a plan that fits your workflow. Different AI models use different credits.
                    </p>
                    <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60 p-4 text-left text-sm text-[var(--color-text-muted)]">
                        <span className="font-semibold text-[var(--color-foreground)]">Note:</span>{' '}
                        We’ve discontinued the free tier. With our small budget, we couldn’t fund it anymore, so we can’t keep providing free credits. We’re really sorry. You’re still welcome to try Stumbnail with a paid plan below.
                    </div>
                </div>

                {/* Pricing Layout */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="relative p-6 md:p-8 rounded-2xl backdrop-blur-sm flex flex-col"
                            style={{
                                backgroundColor: plan.highlight ? 'rgba(255, 111, 97, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                                border: plan.highlight ? '2px solid rgba(255, 111, 97, 0.35)' : '1px solid var(--color-border)',
                            }}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-3 left-6 flex items-center gap-1.5 bg-[#ff6f61] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                                    <CrownIcon className="w-3 h-3" />
                                    Best Value
                                </div>
                            )}

                            <div className="flex-1 flex flex-col space-y-5 pt-2">
                                <div className="text-center pb-4 border-b border-[var(--color-border)]">
                                    <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                                        {plan.name}
                                    </p>
                                    <div className="mt-3 flex items-baseline justify-center gap-1">
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight">
                                            {formatWeeklyPrice(plan.monthlyPrice)}
                                        </span>
                                        <span className="text-[var(--color-text-muted)]">/wk</span>
                                    </div>
                                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                                        Billed {formatMonthlyPrice(plan.monthlyPrice)}/mo
                                    </p>
                                    <p className="mt-3 font-bold text-lg" style={{ color: '#ff6f61' }}>
                                        {plan.credits.toLocaleString()} credits/mo
                                    </p>
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
                                        trackPricingPlanClick(plan.id, formatMonthlyPrice(plan.monthlyPrice));
                                        trackExternalLinkClick('https://app.stumbnail.com/login');
                                    }}
                                >
                                    Choose {plan.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60 p-6">
                        <h3 className="text-base font-semibold text-[var(--color-foreground)] mb-4">
                            Included with every plan
                        </h3>
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
                </div>

                {/* Credit Usage Info */}
                <div className="mt-12 text-center">
                    <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">
                        Credits vary by AI model, from 3 credits for fast generations to 47 for premium quality.
                    </p>
                </div>
            </div>
        </section>
    );
}
