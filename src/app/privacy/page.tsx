import { Metadata } from 'next'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Privacy Policy - Stumbnail | AI YouTube Thumbnail Generator',
    description: 'Learn how Stumbnail protects your privacy. Read our privacy policy covering data collection, usage, storage, and your rights when using our AI thumbnail generator.',
    keywords: [
        'stumbnail privacy policy',
        'ai thumbnail generator privacy',
        'youtube thumbnail maker privacy',
        'stumbnail data protection',
        'thumbnail generator data policy',
    ],
    alternates: {
        canonical: 'https://stumbnail.com/privacy',
    },
    openGraph: {
        title: 'Privacy Policy - Stumbnail',
        description: 'Privacy Policy for Stumbnail AI YouTube Thumbnail Generator',
        url: 'https://stumbnail.com/privacy',
        type: 'website',
    },
}

// Icon components
const icons = {
    shield: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    ),
    clipboard: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
        </svg>
    ),
    settings: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
    lock: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    ),
    share: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
        </svg>
    ),
    userCheck: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
        </svg>
    ),
    cookie: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
        </svg>
    ),
    link: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    baby: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12h.01" />
            <path d="M15 12h.01" />
            <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
            <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
        </svg>
    ),
    globe: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    ),
    alertCircle: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    ),
    fileEdit: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
        </svg>
    ),
    mail: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    ),
}

interface SectionProps {
    id: string
    number: number
    title: string
    icon: React.ReactNode
    children: React.ReactNode
}

function Section({ id, number, title, icon, children }: SectionProps) {
    return (
        <section id={id} className="scroll-mt-32">
            <div
                className="rounded-2xl p-6 md:p-8 mb-8"
                style={{ backgroundColor: 'var(--color-button-bg)' }}
            >
                <div className="flex items-start gap-4 mb-6">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                    >
                        {icon}
                    </div>
                    <div>
                        <span
                            className="text-sm font-semibold"
                            style={{ color: '#ff6f61' }}
                        >
                            Section {number}
                        </span>
                        <h2
                            className="text-xl md:text-2xl font-bold"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                        >
                            {title}
                        </h2>
                    </div>
                </div>
                <div
                    className="prose prose-lg max-w-none"
                    style={{
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-body)',
                        lineHeight: '1.8',
                    }}
                >
                    {children}
                </div>
            </div>
        </section>
    )
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
    return (
        <div
            className="rounded-xl p-5 mt-4"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            <h4 className="text-sm font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                {title}
            </h4>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function HighlightBox({ children, variant = 'info' }: { children: React.ReactNode; variant?: 'warning' | 'info' }) {
    const bgColor = variant === 'warning' ? 'rgba(255, 111, 97, 0.1)' : 'rgba(59, 130, 246, 0.1)'
    const borderColor = variant === 'warning' ? 'rgba(255, 111, 97, 0.3)' : 'rgba(59, 130, 246, 0.3)'
    const textColor = variant === 'warning' ? '#ff6f61' : '#3b82f6'

    return (
        <div
            className="rounded-xl p-4 my-4"
            style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
            }}
        >
            <p className="text-sm font-medium m-0" style={{ color: textColor }}>
                {children}
            </p>
        </div>
    )
}

export default function PrivacyPage() {
    const lastUpdated = 'December 26, 2024'

    const tableOfContents = [
        { id: 'collect', title: 'Information We Collect' },
        { id: 'use', title: 'How We Use Your Information' },
        { id: 'storage', title: 'Data Storage and Security' },
        { id: 'sharing', title: 'Sharing of Information' },
        { id: 'rights', title: 'Your Rights' },
        { id: 'cookies', title: 'Cookies and Tracking' },
        { id: 'third-party', title: 'Third-Party Services' },
        { id: 'children', title: "Children's Privacy" },
        { id: 'international', title: 'International Data Transfers' },
        { id: 'breach', title: 'Data Breach Notification' },
        { id: 'changes', title: 'Changes to This Policy' },
        { id: 'contact', title: 'Contact Us' },
    ]

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
                        background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.12) 0%, transparent 70%)',
                    }}
                />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            backgroundColor: 'rgba(255, 111, 97, 0.1)',
                            border: '1px solid rgba(255, 111, 97, 0.2)',
                        }}
                    >
                        <span style={{ color: '#ff6f61' }}>{icons.shield}</span>
                        <span className="text-sm font-medium" style={{ color: '#ff6f61' }}>
                            Your Privacy Matters
                        </span>
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                            lineHeight: '1.1',
                        }}
                    >
                        Privacy <span style={{ color: '#ff6f61' }}>Policy</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        At Stumbnail, we are committed to protecting your privacy. This policy explains
                        how we collect, use, and safeguard your personal information.
                    </p>

                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Last Updated: <span className="font-semibold">{lastUpdated}</span>
                    </p>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: icons.lock, title: 'Encrypted Data', desc: 'End-to-end encryption' },
                            { icon: icons.shield, title: 'Secure Storage', desc: 'Industry-standard protection' },
                            { icon: icons.userCheck, title: 'Your Control', desc: 'Full data ownership rights' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-xl"
                                style={{ backgroundColor: 'var(--color-button-bg)' }}
                            >
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm" style={{ color: 'var(--color-foreground)' }}>
                                        {item.title}
                                    </p>
                                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-6">
                    <div
                        className="rounded-2xl p-6"
                        style={{
                            backgroundColor: 'var(--color-button-bg)',
                            border: '1px solid var(--color-border)',
                        }}
                    >
                        <h2
                            className="text-lg font-bold mb-4"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                        >
                            Table of Contents
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {tableOfContents.map((item, index) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-[rgba(255,111,97,0.1)]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                        style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                                    >
                                        {index + 1}
                                    </span>
                                    <span className="text-sm">{item.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-6">
                    <Section id="collect" number={1} title="Information We Collect" icon={icons.clipboard}>
                        <p>We collect the following types of information:</p>

                        <InfoCard
                            title="Account Information"
                            items={[
                                'Name and email address',
                                'Account credentials',
                                'Profile preferences',
                            ]}
                        />

                        <InfoCard
                            title="Usage Data"
                            items={[
                                'Thumbnails generated',
                                'Features used',
                                'AI models selected',
                                'Prompts and generation history',
                            ]}
                        />

                        <InfoCard
                            title="Payment Information"
                            items={[
                                'Processed securely by our payment provider (Stripe)',
                                'We do not store full credit card details',
                                'Transaction history and credit balance',
                            ]}
                        />

                        <InfoCard
                            title="Content You Provide"
                            items={[
                                'Text prompts for thumbnail generation',
                                'Images uploaded for remix mode',
                                'Feedback and support inquiries',
                            ]}
                        />
                    </Section>

                    <Section id="use" number={2} title="How We Use Your Information" icon={icons.settings}>
                        <p>We use your information to:</p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Service Delivery
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Provide and improve our thumbnail generation service
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Process AI-generated content requests
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Store and manage your generated thumbnails
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Account Management
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Process payments and manage your credit balance
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Maintain your account and preferences
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Provide customer support
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Communication
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Send service updates and important notifications
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Respond to your inquiries and support requests
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Share product updates and new features (with your consent)
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Service Improvement
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Analyze usage patterns to enhance user experience
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Improve AI model performance and accuracy
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Develop new features based on user needs
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Legal Compliance
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Comply with legal obligations and regulations
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Prevent fraud and abuse
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Enforce our Terms of Service
                            </li>
                        </ul>
                    </Section>

                    <Section id="storage" number={3} title="Data Storage and Security" icon={icons.lock}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            Security Measures
                        </h3>
                        <p>We implement industry-standard security measures to protect your data:</p>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                End-to-end encryption in transit (TLS/SSL)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Encrypted storage at rest
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Secure access controls and authentication
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Regular security audits and updates
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Data Retention
                        </h3>
                        <HighlightBox variant="info">
                            Thumbnails and related data are retained for up to <strong>365 days</strong>.
                            After this period, data may be permanently deleted as part of our routine storage optimization process.
                        </HighlightBox>
                        <p className="mt-3">Account information is retained as long as your account is active.</p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Account Deletion
                        </h3>
                        <p>If you delete your account or request account deletion:</p>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                All associated thumbnails are permanently deleted
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Personal data is removed from our systems without undue delay
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Some information may be retained for legal compliance purposes
                            </li>
                        </ul>
                    </Section>

                    <Section id="sharing" number={4} title="Sharing of Information" icon={icons.share}>
                        <HighlightBox variant="warning">
                            <strong>We do not sell your personal information.</strong>
                        </HighlightBox>

                        <p className="mt-4">We may share your information with:</p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Service Providers
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Payment processors (Stripe)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Cloud hosting providers (Vercel, AWS)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                AI model providers (Google, Recraft, etc.)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Analytics services
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Legal Requirements
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Legal authorities when required by law
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                To enforce our Terms of Service
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                To protect the rights, property, or safety of Stumbnail, our users, or others
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Business Transfers
                        </h3>
                        <p>
                            In the event of a merger, acquisition, or sale of assets, your information may be
                            transferred to the new entity.
                        </p>
                    </Section>

                    <Section id="rights" number={5} title="Your Rights" icon={icons.userCheck}>
                        <p>You have the right to:</p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Access and Update
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Access and review your personal information
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Update or correct inaccurate data
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Download your data in a portable format
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Deletion
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Request deletion of your data
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Delete your account and associated content
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Exercise your &quot;right to be forgotten&quot; under applicable laws
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Control
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Opt-out of marketing communications
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Object to the processing of your information
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Withdraw consent for data processing
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Data Portability
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Request a copy of your data in a machine-readable format
                            </li>
                        </ul>

                        <div
                            className="mt-6 p-4 rounded-xl"
                            style={{ backgroundColor: 'var(--color-background)' }}
                        >
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                To exercise any of these rights, contact us at{' '}
                                <a href="mailto:Support@stumbnail.com" className="font-semibold hover:underline" style={{ color: '#ff6f61' }}>
                                    Support@stumbnail.com
                                </a>
                            </p>
                        </div>
                    </Section>

                    <Section id="cookies" number={6} title="Cookies and Tracking" icon={icons.cookie}>
                        <p>We use cookies and similar technologies to:</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Maintain your login session
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Remember your preferences
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Analyze site usage and performance
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Provide personalized experiences
                            </li>
                        </ul>
                        <p className="mt-4">
                            You can control cookies through your browser settings. For more details, see our{' '}
                            <Link href="/cookies" className="font-semibold hover:underline" style={{ color: '#ff6f61' }}>
                                Cookie Policy
                            </Link>
                            .
                        </p>
                    </Section>

                    <Section id="third-party" number={7} title="Third-Party Services" icon={icons.link}>
                        <p>Our service integrates with third-party AI models and services:</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Google Imagen
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Recraft AI
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Other AI providers
                            </li>
                        </ul>
                        <p className="mt-4">
                            These services have their own privacy policies and data handling practices. When you use
                            these AI models, your prompts may be processed by these third-party services.
                        </p>
                    </Section>

                    <Section id="children" number={8} title="Children's Privacy" icon={icons.baby}>
                        <p>
                            Stumbnail is not intended for use by children under 13. We do not knowingly collect
                            personal information from children under 13.
                        </p>
                        <p className="mt-4">
                            If we become aware that we have collected personal information from a child under 13,
                            we will take steps to delete such information.
                        </p>
                    </Section>

                    <Section id="international" number={9} title="International Data Transfers" icon={icons.globe}>
                        <p>
                            Your information may be transferred to and processed in countries other than your country
                            of residence. We ensure appropriate safeguards are in place to protect your data in
                            accordance with this Privacy Policy.
                        </p>
                    </Section>

                    <Section id="breach" number={10} title="Data Breach Notification" icon={icons.alertCircle}>
                        <p>In the event of a data breach that affects your personal information, we will:</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Notify affected users promptly
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Report to relevant authorities as required by law
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Take immediate steps to mitigate the breach
                            </li>
                        </ul>
                    </Section>

                    <Section id="changes" number={11} title="Changes to This Policy" icon={icons.fileEdit}>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes via:</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Email notification
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Notice on our website
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                In-app notification
                            </li>
                        </ul>
                        <p className="mt-4">
                            Continued use of the service after changes constitutes acceptance of the updated policy.
                        </p>
                    </Section>

                    <Section id="contact" number={12} title="Contact Us" icon={icons.mail}>
                        <p>
                            If you have any questions about this Privacy Policy or want to exercise your rights, please contact us at:
                        </p>
                        <div className="mt-6 space-y-4">
                            <div
                                className="flex items-center gap-4 p-4 rounded-xl"
                                style={{ backgroundColor: 'var(--color-background)' }}
                            >
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                                >
                                    {icons.mail}
                                </div>
                                <div>
                                    <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                        Primary Support
                                    </p>
                                    <a
                                        href="mailto:Support@stumbnail.com"
                                        className="font-semibold hover:underline"
                                        style={{ color: '#ff6f61' }}
                                    >
                                        Support@stumbnail.com
                                    </a>
                                </div>
                            </div>
                            <div
                                className="flex items-center gap-4 p-4 rounded-xl"
                                style={{ backgroundColor: 'var(--color-background)' }}
                            >
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                                >
                                    {icons.mail}
                                </div>
                                <div>
                                    <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                        Faster Response
                                    </p>
                                    <a
                                        href="mailto:Stumbnail@gmail.com"
                                        className="font-semibold hover:underline"
                                        style={{ color: '#ff6f61' }}
                                    >
                                        Stumbnail@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div
                        className="rounded-2xl p-6 md:p-8 text-center"
                        style={{
                            backgroundColor: 'var(--color-button-bg)',
                            border: '1px solid var(--color-border)',
                        }}
                    >
                        <h2
                            className="text-xl font-bold mb-4"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                        >
                            Related Legal Documents
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/terms"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all hover:scale-105"
                                style={{
                                    backgroundColor: 'rgba(255, 111, 97, 0.1)',
                                    color: '#ff6f61',
                                    border: '1px solid rgba(255, 111, 97, 0.2)',
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookies"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all hover:scale-105"
                                style={{
                                    backgroundColor: 'rgba(255, 111, 97, 0.1)',
                                    color: '#ff6f61',
                                    border: '1px solid rgba(255, 111, 97, 0.2)',
                                }}
                            >
                                {icons.cookie}
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
