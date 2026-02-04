import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'
import { ThumbnailPreviewer } from '@/components/tools/ThumbnailPreview'

export const metadata: Metadata = {
  title: 'Free YouTube Thumbnail Previewer - Test Before You Upload | Stumbnail',
  description: 'Preview how your YouTube thumbnail looks on home feed, search results, suggested videos & mobile app. Free thumbnail tester - no upload required. See exactly how viewers will see your video before publishing. 100% private - works offline.',
  keywords: [
    'youtube thumbnail previewer',
    'youtube thumbnail preview tool',
    'youtube thumbnail tester',
    'preview youtube thumbnail',
    'youtube thumbnail mockup',
    'how does my thumbnail look on youtube',
    'youtube thumbnail size preview',
    'youtube thumbnail simulator',
    'test youtube thumbnail',
    'youtube thumbnail checker',
    'thumbnail preview tool',
    'youtube thumbnail preview free',
    'youtube thumbnail preview online',
    'youtube video thumbnail preview',
    'youtube thumbnail look',
    'youtube thumbnail appearance',
    'youtube mobile thumbnail preview',
    'youtube search thumbnail preview',
    'youtube home feed thumbnail preview',
    'youtube recommended thumbnail preview',
    'youtube thumbnail size 2024',
    'best youtube thumbnail size',
    'thumbnail previewer free',
    'youtube thumbnail tester online',
    'check youtube thumbnail before upload',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stumbnail.com/tools/youtube-thumbnail-previewer',
    siteName: 'Stumbnail',
    title: 'Free YouTube Thumbnail Previewer - See How Your Thumbnail Looks',
    description: 'Preview your YouTube thumbnail on home, search, sidebar & mobile views. Free tool - no sign up required. Test unlimited thumbnails privately in your browser.',
    images: [
      {
        url: '/assets/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'YouTube Thumbnail Previewer Tool - Free Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Thumbnail Previewer | Stumbnail',
    description: 'See how your thumbnail looks on YouTube before uploading. Test on home, search, sidebar & mobile. Free, private, no sign up.',
    images: ['/assets/opengraph.png'],
    creator: '@stumbnail',
  },
  alternates: {
    canonical: 'https://stumbnail.com/tools/youtube-thumbnail-previewer',
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

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'YouTube Thumbnail Previewer',
  description: 'Free tool to preview how your YouTube thumbnail looks on home feed, search results, suggested videos, and mobile app before uploading.',
  url: 'https://stumbnail.com/tools/youtube-thumbnail-previewer',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Preview thumbnails on YouTube home feed',
    'Preview thumbnails on YouTube search results',
    'Preview thumbnails on suggested videos sidebar',
    'Preview thumbnails on mobile app',
    'No upload required - works offline',
    '100% private - images never leave your browser',
  ],
  creator: {
    '@type': 'Organization',
    name: 'Stumbnail',
    url: 'https://stumbnail.com',
  },
}

export default function ThumbnailPreviewerPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
        {/* Tool with integrated header */}
        <ThumbnailPreviewer />

        {/* SEO Content Section - Below the Fold */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <div className="max-w-5xl mx-auto">
            {/* Main SEO Heading */}
            <div className="text-center mb-12 sm:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
              >
                Why Preview Your YouTube Thumbnails?
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                Your thumbnail is the first thing viewers see. Make sure it stands out in every YouTube layout before you hit publish.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
              <article className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}>
                  <svg className="w-6 h-6 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  Test Visual Impact
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  See how your thumbnail stands out against competitors. What looks great in Photoshop might blend in on YouTube.
                </p>
              </article>

              <article className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}>
                  <svg className="w-6 h-6 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  Mobile-First Preview
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  70%+ of YouTube views come from mobile devices. Ensure your thumbnail text is readable on smaller screens.
                </p>
              </article>

              <article className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}>
                  <svg className="w-6 h-6 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  Boost CTR by 154%
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Studies show optimized thumbnails can increase click-through rates dramatically. Preview to perfect.
                </p>
              </article>

              <article className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}>
                  <svg className="w-6 h-6 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  Search Optimization
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Thumbnails appear differently in search vs. home feed vs. sidebar. Test all views before publishing.
                </p>
              </article>
            </div>

            {/* FAQ Section with Schema.org markup */}
            <div className="mt-12 sm:mt-16">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-8 text-center"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
              >
                YouTube Thumbnail FAQs
              </h2>

              <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold mb-3 text-base sm:text-lg" itemProp="name" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                    What is the ideal YouTube thumbnail size in 2024?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm sm:text-base leading-relaxed" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                      The recommended YouTube thumbnail size is <strong>1280×720 pixels</strong> with a <strong>16:9 aspect ratio</strong>. The minimum width is 640 pixels, and the maximum file size is 2MB. YouTube supports JPG, GIF, and PNG formats. For best quality, always use the maximum resolution.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold mb-3 text-base sm:text-lg" itemProp="name" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                    How does this free thumbnail previewer work?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm sm:text-base leading-relaxed" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                      Simply drag and drop your thumbnail image (or click to upload). Instantly see how it will appear across four different YouTube layouts: home feed, search results, recommended sidebar, and mobile app. Your thumbnail is displayed alongside real YouTube video mockups for accurate comparison.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold mb-3 text-base sm:text-lg" itemProp="name" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                    Is this YouTube thumbnail previewer really free?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm sm:text-base leading-relaxed" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                      Yes, this YouTube thumbnail previewer is 100% free with no limits. Test as many thumbnails as you want. No account required. Your images are processed entirely in your browser—they&apos;re never uploaded to any server, ensuring complete privacy.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold mb-3 text-base sm:text-lg" itemProp="name" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                    Why do thumbnails look different on mobile devices?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm sm:text-base leading-relaxed" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                      Mobile thumbnails appear much smaller than desktop versions—sometimes 70% smaller. Small text, fine details, and subtle elements become unreadable. That&apos;s why professional YouTubers use large, bold text and high-contrast images. Use our mobile preview to test readability before publishing.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background-alt)' }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold mb-3 text-base sm:text-lg" itemProp="name" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                    How can I make my YouTube thumbnails stand out?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm sm:text-base leading-relaxed" itemProp="text" style={{ color: 'var(--color-text-muted)' }}>
                      Great thumbnails use: (1) High-contrast colors that pop against YouTube&apos;s white/dark backgrounds, (2) Large, readable text limited to 3-5 words, (3) Expressive faces showing emotion, (4) Clean, uncluttered compositions. Use this previewer to test your thumbnail against competing videos in the home feed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 sm:mt-20 text-center">
              <p className="text-sm sm:text-base mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Need help creating stunning thumbnails?
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: '#ff6f61',
                  color: 'white',
                  boxShadow: '0 4px 14px rgba(255, 111, 97, 0.35)',
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Try Stumbnail&apos;s AI Thumbnail Generator
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
