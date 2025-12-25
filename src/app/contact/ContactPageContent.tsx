'use client'

import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { useTheme } from '@/components/providers/ThemeProvider'

function EmailIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="3" fill="#25D366" />
            <path d="M2 7L12 13L22 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function WhatsAppIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.55 3.35 17L2 22L7.15 20.7C8.55 21.45 10.2 21.9 12 21.9C17.52 21.9 22 17.42 22 11.9C22 6.38 17.52 2 12 2Z" fill="#25D366" />
            <path d="M8.5 7.5C8.5 7.5 9 7 9.5 7C10 7 10.5 7.5 10.5 8C10.5 8.5 10 9.5 10 9.5L11 11L12.5 12.5C12.5 12.5 13.5 12 14 12C14.5 12 15 12.5 15.5 13C16 13.5 16.5 14 16.5 14C16.5 14 15.5 15.5 14.5 16C13.5 16.5 12 16.5 10.5 15.5C9 14.5 7.5 12.5 7 11C6.5 9.5 7 8 7.5 7.5C8 7 8.5 7.5 8.5 7.5Z" fill="white" />
        </svg>
    )
}

function ChatBubbleIllustration({ isDark }: { isDark: boolean }) {
    const bubbleFill1 = isDark ? '#1a1a1a' : '#f5f5f5'
    const bubbleFill2 = isDark ? '#2a2a2a' : '#ebebeb'
    const bubbleStroke = isDark ? '#333' : '#ddd'
    const lineFill = isDark ? '#444' : '#ccc'

    return (
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
            <path d="M20 60C20 54.4772 24.4772 50 30 50H70C75.5228 50 80 54.4772 80 60V75C80 80.5228 75.5228 85 70 85H40L25 95V85H30C24.4772 85 20 80.5228 20 75V60Z" fill={bubbleFill1} stroke={bubbleStroke} strokeWidth="2" />
            <rect x="30" y="62" width="40" height="4" rx="2" fill={lineFill} />
            <rect x="30" y="72" width="25" height="4" rx="2" fill={lineFill} />
            <path d="M50 30C50 24.4772 54.4772 20 60 20H100C105.523 20 110 24.4772 110 30V45C110 50.5228 105.523 55 100 55H70L55 65V55H60C54.4772 55 50 50.5228 50 45V30Z" fill={bubbleFill2} stroke={bubbleStroke} strokeWidth="2" />
            <rect x="60" y="32" width="40" height="4" rx="2" fill={lineFill} />
            <rect x="60" y="42" width="25" height="4" rx="2" fill={lineFill} />
        </svg>
    )
}

function EnvelopeIllustration({ isDark }: { isDark: boolean }) {
    const envelopeFill = isDark ? '#2a2a2a' : '#f0f0f0'
    const envelopeStroke = isDark ? '#444' : '#ccc'

    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <rect x="10" y="20" width="60" height="45" rx="4" fill={envelopeFill} stroke={envelopeStroke} strokeWidth="2" />
            <path d="M10 25L40 45L70 25" stroke={envelopeStroke} strokeWidth="2" />
            <path d="M10 60L30 42" stroke={envelopeStroke} strokeWidth="2" />
            <path d="M70 60L50 42" stroke={envelopeStroke} strokeWidth="2" />
        </svg>
    )
}

export function ContactPageContent() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

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
                        We&apos;re Here{' '}
                        <span
                            className="inline-block px-3 py-1 rounded-lg"
                            style={{
                                backgroundColor: '#ff6f61',
                                color: 'white',
                            }}
                        >
                            to Help
                        </span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        Whether you have questions, feedback, or feature requests,
                        our team is ready to support your creative workflow.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-16 md:py-24">
                {/* Decorative Chat Bubbles - Left */}
                <div className="absolute left-4 md:left-12 lg:left-24 top-0 pointer-events-none">
                    <ChatBubbleIllustration isDark={isDark} />
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left - What to expect */}
                        <div>
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-8"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                }}
                            >
                                What to{' '}
                                <span style={{ color: '#ff6f61' }}>expect</span>
                            </h2>

                            <ul className="space-y-5">
                                {[
                                    "We're real people, not bots. No corporate jargon, just straight talk.",
                                    "Quick responses during business hours (9 AM - 6 PM EST, Mon-Fri)",
                                    "WhatsApp works 24/7 for urgent stuff - we'll get back to you ASAP",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                        style={{
                                            color: 'var(--color-text-muted)',
                                            fontFamily: 'var(--font-body)',
                                            lineHeight: '1.7',
                                        }}
                                    >
                                        <span
                                            className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                                            style={{ backgroundColor: 'var(--color-text-muted)' }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right - Contact Cards */}
                        <div
                            className="rounded-2xl p-6 md:p-8"
                            style={{
                                backgroundColor: isDark ? 'var(--color-button-bg)' : '#f8f8f8',
                                border: isDark
                                    ? '1px solid rgba(255, 255, 255, 0.06)'
                                    : '1px solid rgba(0, 0, 0, 0.08)',
                                boxShadow: isDark
                                    ? 'none'
                                    : '0 4px 24px rgba(0, 0, 0, 0.06)',
                            }}
                        >
                            {/* Email Card */}
                            <div
                                className="flex items-start gap-4 p-4 rounded-xl mb-4"
                                style={{
                                    backgroundColor: isDark
                                        ? 'rgba(0, 0, 0, 0.2)'
                                        : 'white',
                                    border: isDark
                                        ? '1px solid rgba(255, 255, 255, 0.04)'
                                        : '1px solid rgba(0, 0, 0, 0.06)',
                                    boxShadow: isDark
                                        ? 'none'
                                        : '0 2px 8px rgba(0, 0, 0, 0.04)',
                                }}
                            >
                                <div
                                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)' }}
                                >
                                    <EmailIcon />
                                </div>
                                <div>
                                    <h3
                                        className="text-lg font-semibold mb-1"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--color-foreground)',
                                        }}
                                    >
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:Stumbnail@gmail.com"
                                        className="text-[#ff6f61] hover:underline underline-offset-2 font-medium"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        Stumbnail@gmail.com
                                    </a>
                                    <p
                                        className="text-sm mt-2"
                                        style={{
                                            color: 'var(--color-text-muted)',
                                            fontFamily: 'var(--font-body)',
                                        }}
                                    >
                                        We usually reply within few hours
                                    </p>
                                </div>
                            </div>

                            {/* WhatsApp Card */}
                            <div
                                className="flex items-start gap-4 p-4 rounded-xl"
                                style={{
                                    backgroundColor: isDark
                                        ? 'rgba(0, 0, 0, 0.2)'
                                        : 'white',
                                    border: isDark
                                        ? '1px solid rgba(255, 255, 255, 0.04)'
                                        : '1px solid rgba(0, 0, 0, 0.06)',
                                    boxShadow: isDark
                                        ? 'none'
                                        : '0 2px 8px rgba(0, 0, 0, 0.04)',
                                }}
                            >
                                <div
                                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)' }}
                                >
                                    <WhatsAppIcon />
                                </div>
                                <div>
                                    <h3
                                        className="text-lg font-semibold mb-1"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--color-foreground)',
                                        }}
                                    >
                                        Whatsapp
                                    </h3>
                                    <a
                                        href="https://wa.me/13024442760"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ff6f61] hover:underline underline-offset-2 font-medium"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        Click to Chat
                                    </a>
                                    <p
                                        className="text-sm mt-2"
                                        style={{
                                            color: 'var(--color-text-muted)',
                                            fontFamily: 'var(--font-body)',
                                        }}
                                    >
                                        Fastest Way to reach us
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Envelope - Right */}
                <div className="absolute right-4 md:right-12 lg:right-24 bottom-0 pointer-events-none">
                    <EnvelopeIllustration isDark={isDark} />
                </div>
            </section>

            {/* Spacer for visual balance */}
            <div className="h-20 md:h-32" />

            <Footer />
        </main>
    )
}
