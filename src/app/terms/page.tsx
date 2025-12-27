import { Metadata } from 'next'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Terms of Service - Stumbnail | AI YouTube Thumbnail Generator',
    description: 'Read Stumbnail\'s Terms of Service. Learn about our AI-powered YouTube thumbnail generator policies, user rights, payment terms, and usage guidelines.',
    keywords: [
        'stumbnail terms of service',
        'ai thumbnail generator terms',
        'youtube thumbnail maker terms',
        'stumbnail user agreement',
        'thumbnail generator legal',
    ],
    alternates: {
        canonical: 'https://stumbnail.com/terms',
    },
    openGraph: {
        title: 'Terms of Service - Stumbnail',
        description: 'Terms of Service for Stumbnail AI YouTube Thumbnail Generator',
        url: 'https://stumbnail.com/terms',
        type: 'website',
    },
}

// Icon components for visual sections
const icons = {
    document: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
    ),
    sparkles: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
        </svg>
    ),
    user: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
    folder: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
        </svg>
    ),
    creditCard: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    ),
    wand: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 4V2" />
            <path d="M15 16v-2" />
            <path d="M8 9h2" />
            <path d="M20 9h2" />
            <path d="M17.8 11.8 19 13" />
            <path d="M15 9h0" />
            <path d="M17.8 6.2 19 5" />
            <path d="m3 21 9-9" />
            <path d="M12.2 6.2 11 5" />
        </svg>
    ),
    ban: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
        </svg>
    ),
    server: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    ),
    database: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    ),
    shield: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    ),
    alertTriangle: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    ),
    lock: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    ),
    fileEdit: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
        </svg>
    ),
    userX: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="17" x2="22" y1="8" y2="13" />
            <line x1="22" x2="17" y1="8" y2="13" />
        </svg>
    ),
    scale: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
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

function HighlightBox({ children, variant = 'warning' }: { children: React.ReactNode; variant?: 'warning' | 'info' }) {
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

export default function TermsPage() {
    const lastUpdated = 'December 26, 2024'

    const tableOfContents = [
        { id: 'acceptance', title: 'Acceptance of Terms' },
        { id: 'description', title: 'Description of Service' },
        { id: 'accounts', title: 'User Accounts' },
        { id: 'content', title: 'User Content and Ownership' },
        { id: 'payment', title: 'Payment and Refunds' },
        { id: 'ai-content', title: 'AI-Generated Content' },
        { id: 'prohibited', title: 'Prohibited Uses' },
        { id: 'availability', title: 'Service Availability' },
        { id: 'retention', title: 'Data Retention and Deletion' },
        { id: 'ip', title: 'Intellectual Property' },
        { id: 'liability', title: 'Limitation of Liability' },
        { id: 'privacy', title: 'Privacy and Data Protection' },
        { id: 'changes', title: 'Changes to Terms' },
        { id: 'termination', title: 'Termination' },
        { id: 'law', title: 'Governing Law' },
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
                        <span style={{ color: '#ff6f61' }}>{icons.document}</span>
                        <span className="text-sm font-medium" style={{ color: '#ff6f61' }}>
                            Legal Document
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
                        Terms of <span style={{ color: '#ff6f61' }}>Service</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        Please read these terms carefully before using Stumbnail.
                        By accessing or using our service, you agree to be bound by these terms.
                    </p>

                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Last Updated: <span className="font-semibold">{lastUpdated}</span>
                    </p>
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
                    <Section id="acceptance" number={1} title="Acceptance of Terms" icon={icons.document}>
                        <p>
                            By accessing or using Stumbnail, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our service.
                        </p>
                    </Section>

                    <Section id="description" number={2} title="Description of Service" icon={icons.sparkles}>
                        <p>
                            Stumbnail is an AI-powered YouTube thumbnail generator. We provide users with the ability
                            to create high-quality, engaging thumbnails for their YouTube videos using artificial
                            intelligence technology.
                        </p>
                        <p className="mt-4">
                            Our service operates on a <strong>credit-based system</strong> where users purchase credits
                            to generate thumbnails using various AI models.
                        </p>
                    </Section>

                    <Section id="accounts" number={3} title="User Accounts" icon={icons.user}>
                        <p>
                            To use certain features of Stumbnail, you may be required to create an account.
                            You are responsible for maintaining the confidentiality of your account information
                            and for all activities that occur under your account.
                        </p>
                        <p className="mt-4 font-semibold" style={{ color: 'var(--color-foreground)' }}>
                            Your responsibilities include:
                        </p>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Providing accurate and complete registration information
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Maintaining the security of your password and account
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Notifying us immediately of any unauthorized use of your account
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Being responsible for all activities under your account
                            </li>
                        </ul>
                    </Section>

                    <Section id="content" number={4} title="User Content and Ownership" icon={icons.folder}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            Your Content
                        </h3>
                        <p>
                            You retain full ownership of any content you submit to Stumbnail, including prompts,
                            images, and other materials.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            License to Stumbnail
                        </h3>
                        <p>
                            By using our service, you grant us a non-exclusive, worldwide, royalty-free license to
                            use, store, and process your content for the purpose of providing and improving our service.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Generated Thumbnails
                        </h3>
                        <p>
                            You own the thumbnails generated by our AI service. You are free to use, modify,
                            and distribute them for any lawful purpose.
                        </p>
                    </Section>

                    <Section id="payment" number={5} title="Payment and Refunds" icon={icons.creditCard}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            Credit Purchases
                        </h3>
                        <p>
                            Credits are purchased through our platform and are immediately available for use upon
                            successful payment.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Refund Policy
                        </h3>
                        <ul className="space-y-3 mt-3">
                            <li>
                                <HighlightBox variant="warning">
                                    <strong>No refunds on credits</strong> once purchased, as they are immediately available for use
                                </HighlightBox>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                <span><strong>Subscription refunds:</strong> Pro-rated refunds available within 14 days if minimal or no credits were used</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                <span><strong>Technical issues:</strong> Refunds or credit compensation provided if service fails to deliver due to technical problems on our end</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                <span><strong>Fraudulent charges:</strong> Full refund for unauthorized transactions</span>
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Pricing Changes
                        </h3>
                        <p>
                            We reserve the right to modify our pricing at any time. Changes will not affect credits
                            already purchased.
                        </p>
                    </Section>

                    <Section id="ai-content" number={6} title="AI-Generated Content" icon={icons.wand}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            Content Limitations
                        </h3>
                        <p>
                            AI-generated thumbnails may have limitations, imperfections, or unexpected results.
                            We do not guarantee that every generated thumbnail will meet your expectations.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            User Responsibility
                        </h3>
                        <p>
                            You are responsible for reviewing and verifying all AI-generated content before use.
                            Stumbnail is not liable for how you choose to use the generated thumbnails.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Content Accuracy
                        </h3>
                        <p>
                            We do not guarantee the accuracy, quality, or appropriateness of AI-generated content
                            for any specific purpose.
                        </p>
                    </Section>

                    <Section id="prohibited" number={7} title="Prohibited Uses" icon={icons.ban}>
                        <p>
                            You agree not to use Stumbnail for any unlawful or prohibited purpose, including but not limited to:
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Creating thumbnails that infringe on copyrights, trademarks, or other intellectual property rights
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Generating content that is obscene, defamatory, hateful, or otherwise offensive
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Attempting to gain unauthorized access to our systems or other users&apos; accounts
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Using the service to create misleading, deceptive, or fraudulent content
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Reverse engineering or attempting to extract the underlying AI models
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Reselling or redistributing our service without authorization
                            </li>
                        </ul>
                    </Section>

                    <Section id="availability" number={8} title="Service Availability and Usage Limits" icon={icons.server}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            Uptime
                        </h3>
                        <p>
                            While we strive for high availability, we do not guarantee 100% uptime. The service may
                            be unavailable due to maintenance, updates, or technical issues.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Usage Limits
                        </h3>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Credit usage is subject to your account balance
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Rate limits may apply to prevent abuse
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                We reserve the right to implement fair use policies
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Service Modifications
                        </h3>
                        <p>
                            We may modify, suspend, or discontinue any aspect of the service at any time with or without notice.
                        </p>
                    </Section>

                    <Section id="retention" number={9} title="Data Retention and Deletion" icon={icons.database}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            Retention Period
                        </h3>
                        <HighlightBox variant="info">
                            Thumbnails and related data are retained for up to <strong>365 days</strong>. After this period,
                            data may be permanently deleted as part of our storage optimization process.
                        </HighlightBox>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Account Deletion
                        </h3>
                        <p>
                            If you delete your account or request deletion, all associated thumbnails and personal data
                            will be permanently removed from our systems without undue delay.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Data Loss
                        </h3>
                        <p>
                            We are not responsible for any loss of data resulting from automatic deletion policies
                            or account termination.
                        </p>
                    </Section>

                    <Section id="ip" number={10} title="Intellectual Property" icon={icons.shield}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            Service Ownership
                        </h3>
                        <p>
                            The Stumbnail service, including its software, design, and branding, is the property of
                            Stumbnail and is protected by copyright and other intellectual property laws.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            User-Generated Content
                        </h3>
                        <p>
                            You retain ownership of your generated thumbnails and may use them freely for any lawful purpose.
                        </p>
                    </Section>

                    <Section id="liability" number={11} title="Limitation of Liability" icon={icons.alertTriangle}>
                        <p>
                            Stumbnail is provided &quot;as is&quot; without any warranties, express or implied. We shall not be
                            liable for any indirect, incidental, special, consequential, or punitive damages resulting
                            from your use of our service.
                        </p>
                        <p className="mt-4">
                            This includes but is not limited to:
                        </p>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Loss of profits, data, or business opportunities
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Service interruptions or errors
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Quality or accuracy of AI-generated content
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                                Third-party actions or content
                            </li>
                        </ul>
                    </Section>

                    <Section id="privacy" number={12} title="Privacy and Data Protection" icon={icons.lock}>
                        <p>
                            Your use of Stumbnail is also governed by our{' '}
                            <Link href="/privacy" className="font-semibold hover:underline" style={{ color: '#ff6f61' }}>
                                Privacy Policy
                            </Link>
                            . We collect and process personal data in accordance with applicable privacy laws.
                        </p>
                    </Section>

                    <Section id="changes" number={13} title="Changes to Terms" icon={icons.fileEdit}>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. We will notify users
                            of any significant changes via email or through our website.
                        </p>
                        <p className="mt-4">
                            Continued use of the service after changes constitutes acceptance of the modified terms.
                        </p>
                    </Section>

                    <Section id="termination" number={14} title="Termination" icon={icons.userX}>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                            By Stumbnail
                        </h3>
                        <p>
                            We reserve the right to terminate or suspend your account and access to Stumbnail at our
                            sole discretion, without notice, for conduct that we believe violates these Terms of Service
                            or is harmful to other users, us, or third parties.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            By You
                        </h3>
                        <p>
                            You may terminate your account at any time through your account settings. Unused credits
                            are non-refundable upon termination.
                        </p>
                    </Section>

                    <Section id="law" number={15} title="Governing Law" icon={icons.scale}>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance with the laws of
                            the State of Delaware, United States, without regard to its conflict of law provisions.
                        </p>
                        <p className="mt-4">
                            Any disputes arising from these terms shall be resolved in the courts of Delaware.
                        </p>
                    </Section>

                    <Section id="contact" number={16} title="Contact Us" icon={icons.mail}>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:
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
                                href="/privacy"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all hover:scale-105"
                                style={{
                                    backgroundColor: 'rgba(255, 111, 97, 0.1)',
                                    color: '#ff6f61',
                                    border: '1px solid rgba(255, 111, 97, 0.2)',
                                }}
                            >
                                {icons.lock}
                                Privacy Policy
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
                                {icons.database}
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
