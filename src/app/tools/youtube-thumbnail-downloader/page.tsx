import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { ThumbnailDownloader } from '@/components/tools/ThumbnailDownloader'

export const metadata: Metadata = {
    title: 'Free YouTube Thumbnail Downloader - Download in HD | Stumbnail',
    description: 'Download YouTube video thumbnails in HD quality for free. Get max resolution (1280x720), high quality, and standard sizes instantly. No signup required - just paste the URL.',
    keywords: [
        'youtube thumbnail downloader',
        'download youtube thumbnail',
        'youtube thumbnail download',
        'yt thumbnail downloader',
        'youtube video thumbnail download',
        'get youtube thumbnail',
        'youtube thumbnail grabber',
        'youtube thumbnail saver',
        'download yt thumbnail',
        'youtube thumbnail extractor',
        'youtube thumbnail hd download',
        'youtube thumbnail full size',
        'youtube thumbnail image download',
        'save youtube thumbnail',
        'youtube thumbnail download free',
        'youtube thumbnail download online',
        'youtube thumbnail download hd',
        'youtube thumbnail 1080p download',
        'youtube thumbnail max resolution',
        'youtube custom thumbnail download',
        'how to download youtube thumbnail',
        'youtube thumbnail download without software',
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://stumbnail.com/tools/youtube-thumbnail-downloader',
        siteName: 'Stumbnail',
        title: 'Free YouTube Thumbnail Downloader - HD Quality',
        description: 'Download any YouTube video thumbnail in HD. Just paste the URL and download in multiple resolutions. Free, fast, no signup.',
        images: [
            {
                url: '/assets/opengraph.png',
                width: 1200,
                height: 630,
                alt: 'Stumbnail - YouTube Thumbnail Downloader',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free YouTube Thumbnail Downloader | Stumbnail',
        description: 'Download YouTube thumbnails in HD quality. Paste URL, get all sizes. Free and instant.',
        images: ['/assets/opengraph.png'],
        creator: '@stumbnail',
    },
    alternates: {
        canonical: 'https://stumbnail.com/tools/youtube-thumbnail-downloader',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

// JSON-LD structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'YouTube Thumbnail Downloader',
    description: 'Free tool to download YouTube video thumbnails in HD quality. Get max resolution, high quality, and standard sizes instantly.',
    url: 'https://stumbnail.com/tools/youtube-thumbnail-downloader',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    featureList: [
        'Download thumbnails in max resolution (1280×720)',
        'Multiple quality options available',
        'No signup or login required',
        'Instant download - no waiting',
        'Works with any YouTube video URL',
        'Supports youtube.com and youtu.be links',
    ],
    creator: {
        '@type': 'Organization',
        name: 'Stumbnail',
        url: 'https://stumbnail.com',
    },
}

export default function ThumbnailDownloaderPage() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
                {/* Tool */}
                <ThumbnailDownloader />

                {/* SEO Content */}
                <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="max-w-4xl mx-auto">
                        {/* Main Heading */}
                        <div className="text-center mb-12">
                            <h2
                                className="text-2xl sm:text-3xl font-bold mb-4"
                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                            >
                                Download YouTube Thumbnails Instantly
                            </h2>
                            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                                Get high-quality thumbnails from any YouTube video. Just paste the URL and download.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-3 gap-6 mb-16">
                            <article className="p-5 rounded-xl text-center" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}>
                                    <svg className="w-5 h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                                    HD Quality
                                </h3>
                                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                    Download in max resolution 1280×720
                                </p>
                            </article>

                            <article className="p-5 rounded-xl text-center" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}>
                                    <svg className="w-5 h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                                    Instant
                                </h3>
                                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                    No waiting, download immediately
                                </p>
                            </article>

                            <article className="p-5 rounded-xl text-center" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}>
                                    <svg className="w-5 h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                        <path d="M8.5 8.5v.01" />
                                        <path d="M16 15.5v.01" />
                                        <path d="M12 12v.01" />
                                        <path d="M11 17v.01" />
                                        <path d="M7 14v.01" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                                    No Signup
                                </h3>
                                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                    100% free, no account needed
                                </p>
                            </article>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h2
                                className="text-2xl font-bold mb-8 text-center"
                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                            >
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-4 max-w-2xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
                                <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                    <h3 className="font-semibold mb-2" itemProp="name" style={{ color: 'var(--color-foreground)' }}>
                                        How do I download a YouTube thumbnail?
                                    </h3>
                                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="text-sm" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                                            Simply paste the YouTube video URL in the input field above and click the download button. You&apos;ll see all available thumbnail sizes. Click on any thumbnail to download it instantly.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                    <h3 className="font-semibold mb-2" itemProp="name" style={{ color: 'var(--color-foreground)' }}>
                                        What thumbnail sizes are available?
                                    </h3>
                                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="text-sm" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                                            We provide four sizes: Max Resolution (1280×720), High Quality (480×360), Medium Quality (320×180), and Standard (120×90). The max resolution option gives you the best quality available.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                    <h3 className="font-semibold mb-2" itemProp="name" style={{ color: 'var(--color-foreground)' }}>
                                        Is this YouTube thumbnail downloader free?
                                    </h3>
                                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="text-sm" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                                            Yes, this tool is completely free with no limits. Download as many thumbnails as you need. No signup, no account, no watermarks.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                    <h3 className="font-semibold mb-2" itemProp="name" style={{ color: 'var(--color-foreground)' }}>
                                        What URL formats are supported?
                                    </h3>
                                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="text-sm" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                                            We support all YouTube URL formats including youtube.com/watch?v=, youtu.be/, youtube.com/shorts/, and youtube.com/embed/ links. You can also paste just the video ID.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-16 text-center">
                            <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
                                Need to create your own thumbnails?
                            </p>
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
                                style={{
                                    backgroundColor: '#ff6f61',
                                    color: 'white',
                                    boxShadow: '0 4px 14px rgba(255, 111, 97, 0.3)',
                                }}
                            >
                                Try Stumbnail&apos;s AI Thumbnail Generator
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
