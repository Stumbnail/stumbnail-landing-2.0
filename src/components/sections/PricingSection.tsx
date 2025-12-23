import React from 'react';

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

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

function CrownIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
            <path d="M5 21h14" />
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

export function PricingSection() {
    return (
        <section className="relative py-24 px-4 overflow-hidden" id="pricing">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-primary)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Simple Pricing
                    </h2>
                    <p className="text-[var(--color-text-muted)] max-w-lg mx-auto">
                        Pay for what you use. Different models, different costs.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

                    {/* Creator Plan */}
                    <div className="relative p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-alt)]/60 backdrop-blur-sm">
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">Creator</p>
                                <div className="mt-3 flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight">$10</span>
                                    <span className="text-[var(--color-text-muted)]">/mo</span>
                                </div>
                                <p className="mt-2 text-[var(--color-primary)] font-semibold">1,100 credits</p>
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

                            <button className="w-full py-3 px-6 rounded-xl bg-[var(--color-button-bg)] border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold transition-colors duration-200 hover:bg-[var(--color-border)]">
                                Get Creator
                            </button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative p-6 md:p-8 rounded-2xl border-2 border-[var(--color-primary)]/40 bg-[var(--color-background-alt)]/80 backdrop-blur-sm">
                        {/* Best Value Badge */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                            <CrownIcon className="w-3 h-3" />
                            Best Value
                        </div>

                        <div className="space-y-5">
                            <div>
                                <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider">Pro</p>
                                <div className="mt-3 flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight">$39</span>
                                    <span className="text-[var(--color-text-muted)]">/mo</span>
                                </div>
                                <p className="mt-2 text-[var(--color-primary)] font-semibold">4,500 credits</p>
                            </div>

                            <div className="h-px w-full bg-[var(--color-primary)]/20" />

                            <ul className="space-y-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-foreground)]">
                                        <feature.icon className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 px-6 rounded-xl bg-[var(--color-primary)] text-white font-bold shadow-lg shadow-[var(--color-primary)]/20 transition-colors duration-200 hover:bg-[var(--color-primary-hover)]">
                                Get Pro
                            </button>
                        </div>
                    </div>

                </div>

                {/* Free Plan CTA */}
                <div className="mt-10 text-center">
                    <p className="text-[var(--color-text-muted)] text-sm">
                        Want to try first?{' '}
                        <button className="text-[var(--color-foreground)] font-semibold underline underline-offset-4 decoration-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                            Start free
                        </button>
                        {' '}— no card required.
                    </p>
                </div>
            </div>
        </section>
    );
}
