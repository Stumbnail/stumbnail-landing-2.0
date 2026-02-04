'use client'

import { ButtonLink } from '@/components/ui/Button'
import { trackHeroCtaClick, trackExternalLinkClick, trackPricingView } from '@/lib/analytics'

export function FinalCTASection() {
    return (
        <section
            className="relative py-20 md:py-28"
            style={{
                backgroundColor: 'var(--color-background)',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Card Container */}
                <div
                    className="relative overflow-hidden rounded-3xl p-10 md:p-16"
                    style={{
                        backgroundColor: 'var(--color-background-alt)',
                        border: '1px solid var(--color-border)',
                    }}
                >
                    {/* Minimal Grid Background Pattern */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                        style={{
                            backgroundImage: `
                                linear-gradient(var(--color-foreground) 1px, transparent 1px),
                                linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                        }}
                    />

                    {/* Gradient Orb - Top Right */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            right: '-100px',
                            top: '-100px',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle at center, rgba(255, 111, 97, 0.15) 0%, transparent 60%)',
                            filter: 'blur(40px)',
                        }}
                    />

                    {/* Gradient Orb - Bottom Left */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            left: '-80px',
                            bottom: '-80px',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle at center, rgba(255, 111, 97, 0.1) 0%, transparent 60%)',
                            filter: 'blur(30px)',
                        }}
                    />

                    {/* Decorative Corner Accent */}
                    <div
                        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 111, 97, 0.08) 0%, transparent 50%)',
                        }}
                    />

                    {/* Content */}
                    <div className="relative text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                            style={{
                                backgroundColor: 'rgba(255, 111, 97, 0.1)',
                                border: '1px solid rgba(255, 111, 97, 0.2)',
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 21L12 17.77L6.82 21L8 13.97L3 9.27L9.91 8.26L12 2Z"
                                    fill="#ff6f61"
                                />
                            </svg>
                            <span
                                className="text-sm font-medium"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: '#ff6f61',
                                }}
                            >
                                Get Started
                            </span>
                        </div>

                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            Ready to Get More{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #ff6f61 0%, #ff8a7a 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Clicks
                            </span>
                            ?
                        </h2>

                        <p
                            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
                            style={{
                                fontFamily: 'var(--font-body)',
                                color: 'var(--color-foreground-muted)',
                                lineHeight: 1.7,
                            }}
                        >
                            Join creators using Stumbnail to stand out with click-worthy thumbnails. Start free and make your next thumbnail today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ButtonLink
                                href="https://app.stumbnail.com/login"
                                onClick={() => {
                                    trackHeroCtaClick('trial')
                                    trackExternalLinkClick('https://app.stumbnail.com/login')
                                }}
                                variant="primary"
                                className="h-[56px] px-10 text-lg rounded-2xl"
                                icon="/assets/icons/sparkle.svg"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 600,
                                    backgroundColor: '#ff6f61',
                                    minWidth: '200px',
                                    boxShadow: '0 8px 24px rgba(255, 111, 97, 0.3)',
                                }}
                            >
                                Get Started
                            </ButtonLink>

                            <ButtonLink
                                href="/pricing"
                                onClick={() => trackPricingView('cta')}
                                variant="secondary"
                                className="h-[56px] px-10 text-lg rounded-2xl"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 600,
                                    minWidth: '200px',
                                }}
                            >
                                See Pricing
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
