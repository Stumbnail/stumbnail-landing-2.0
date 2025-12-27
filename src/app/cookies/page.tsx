import { Metadata } from 'next'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Cookie Policy - Stumbnail | AI YouTube Thumbnail Generator',
    description: 'Learn about how Stumbnail uses cookies. Our cookie policy explains the types of cookies we use and how to manage them.',
    keywords: [
        'stumbnail cookies',
        'ai thumbnail generator cookies',
        'youtube thumbnail maker cookies',
        'stumbnail cookie policy',
        'thumbnail generator privacy',
    ],
    alternates: {
        canonical: 'https://stumbnail.com/cookies',
    },
    openGraph: {
        title: 'Cookie Policy - Stumbnail',
        description: 'Cookie Policy for Stumbnail AI YouTube Thumbnail Generator',
        url: 'https://stumbnail.com/cookies',
        type: 'website',
    },
}

// Icon components
const icons = {
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
    info: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    ),
    settings: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
    sliders: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="4" y1="21" y2="14" />
            <line x1="4" x2="4" y1="10" y2="3" />
            <line x1="12" x2="12" y1="21" y2="12" />
            <line x1="12" x2="12" y1="8" y2="3" />
            <line x1="20" x2="20" y1="21" y2="16" />
            <line x1="20" x2="20" y1="12" y2="3" />
            <line x1="2" x2="6" y1="14" y2="14" />
            <line x1="10" x2="14" y1="8" y2="8" />
            <line x1="18" x2="22" y1="16" y2="16" />
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
    check: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
    lock: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    ),
    barChart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
    ),
    heart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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

interface CookieCardProps {
    icon: React.ReactNode
    title: string
    description: string
    examples: string[]
    required?: boolean
}

function CookieCard({ icon, title, description, examples, required }: CookieCardProps) {
    return (
        <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            <div className="flex items-start gap-4">
                <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                >
                    {icon}
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold" style={{ color: 'var(--color-foreground)' }}>
                            {title}
                        </h3>
                        {required && (
                            <span
                                className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                                style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                            >
                                Required
                            </span>
                        )}
                    </div>
                    <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {examples.map((example, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-1 rounded-md"
                                style={{
                                    backgroundColor: 'var(--color-button-bg)',
                                    color: 'var(--color-text-muted)',
                                }}
                            >
                                {example}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CookiesPage() {
    const lastUpdated = 'December 26, 2024'

    const tableOfContents = [
        { id: 'what', title: 'What Are Cookies?' },
        { id: 'how', title: 'How We Use Cookies' },
        { id: 'manage', title: 'Managing Cookies' },
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
                        <span style={{ color: '#ff6f61' }}>{icons.cookie}</span>
                        <span className="text-sm font-medium" style={{ color: '#ff6f61' }}>
                            Transparency First
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
                        Cookie <span style={{ color: '#ff6f61' }}>Policy</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        This policy explains how Stumbnail uses cookies and similar technologies
                        when you visit our website and use our AI-powered thumbnail generation service.
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
                            Quick Navigation
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {tableOfContents.map((item, index) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl transition-colors hover:bg-[rgba(255,111,97,0.1)]"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        color: 'var(--color-foreground)',
                                    }}
                                >
                                    <span
                                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                                        style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                                    >
                                        {index + 1}
                                    </span>
                                    <span className="text-sm font-medium">{item.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-6">
                    <Section id="what" number={1} title="What Are Cookies?" icon={icons.info}>
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device when you visit
                            a website. They help websites remember your preferences, understand how you use the site, and
                            improve your experience.
                        </p>

                        <div
                            className="mt-6 p-5 rounded-xl"
                            style={{ backgroundColor: 'var(--color-background)' }}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}
                                >
                                    {icons.info}
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2" style={{ color: 'var(--color-foreground)' }}>
                                        Did you know?
                                    </h3>
                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                        Cookies got their name from &quot;magic cookies,&quot; a term used in computing for a piece of data
                                        passed between programs. They&apos;ve been around since the early days of the web!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section id="how" number={2} title="How We Use Cookies" icon={icons.settings}>
                        <p>We use cookies for the following purposes:</p>

                        <div className="mt-6 space-y-4">
                            <CookieCard
                                icon={icons.lock}
                                title="Essential Cookies"
                                description="These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you."
                                examples={['Authentication', 'Session management', 'Security', 'Credit balance']}
                                required
                            />

                            <CookieCard
                                icon={icons.barChart}
                                title="Analytics Cookies"
                                description="Help us understand how visitors interact with our website by collecting and reporting information anonymously."
                                examples={['Page views', 'Feature usage', 'Error tracking', 'Performance metrics']}
                            />

                            <CookieCard
                                icon={icons.heart}
                                title="Preference Cookies"
                                description="Enable the website to remember your choices and provide enhanced, personalized features."
                                examples={['Theme preference', 'AI model settings', 'Generation mode', 'Language']}
                            />
                        </div>

                        <div
                            className="mt-6 p-5 rounded-xl"
                            style={{
                                backgroundColor: 'rgba(255, 111, 97, 0.1)',
                                border: '1px solid rgba(255, 111, 97, 0.2)',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <span style={{ color: '#ff6f61' }}>{icons.check}</span>
                                <p className="text-sm font-medium" style={{ color: '#ff6f61' }}>
                                    We do <strong>not</strong> use advertising or tracking cookies.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section id="manage" number={3} title="Managing Cookies" icon={icons.sliders}>
                        <p>
                            You can control and delete cookies through your browser settings. Please note that disabling
                            essential cookies will prevent you from using core features of Stumbnail, such as logging in
                            and generating thumbnails.
                        </p>

                        <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: 'var(--color-foreground)' }}>
                            Browser Settings
                        </h3>
                        <p>
                            Most web browsers allow you to manage cookies through their settings. You can typically find
                            these options in the &quot;Privacy&quot; or &quot;Security&quot; section of your browser settings.
                        </p>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { name: 'Chrome', action: 'Settings → Privacy and security → Cookies' },
                                { name: 'Firefox', action: 'Settings → Privacy & Security → Cookies' },
                                { name: 'Safari', action: 'Preferences → Privacy → Cookies' },
                                { name: 'Edge', action: 'Settings → Privacy & security → Cookies' },
                            ].map((browser) => (
                                <div
                                    key={browser.name}
                                    className="p-4 rounded-xl"
                                    style={{ backgroundColor: 'var(--color-background)' }}
                                >
                                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--color-foreground)' }}>
                                        {browser.name}
                                    </p>
                                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                        {browser.action}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div
                            className="mt-6 p-5 rounded-xl"
                            style={{
                                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                                border: '1px solid rgba(251, 191, 36, 0.3)',
                            }}
                        >
                            <div className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                    <path d="M12 9v4" />
                                    <path d="M12 17h.01" />
                                </svg>
                                <p className="text-sm" style={{ color: '#f59e0b' }}>
                                    <strong>Important:</strong> Blocking essential cookies will affect your ability to use Stumbnail.
                                    You may not be able to log in or generate thumbnails.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section id="changes" number={4} title="Changes to This Policy" icon={icons.fileEdit}>
                        <p>
                            We may update this Cookie Policy from time to time. Any changes will be posted on this page
                            with an updated date.
                        </p>
                        <p className="mt-4">
                            We recommend checking this page periodically to stay informed about our cookie practices.
                        </p>
                    </Section>

                    <Section id="contact" number={5} title="Contact Us" icon={icons.mail}>
                        <p>
                            If you have questions about our Cookie Policy, please contact us:
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
                                href="/privacy"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all hover:scale-105"
                                style={{
                                    backgroundColor: 'rgba(255, 111, 97, 0.1)',
                                    color: '#ff6f61',
                                    border: '1px solid rgba(255, 111, 97, 0.2)',
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
