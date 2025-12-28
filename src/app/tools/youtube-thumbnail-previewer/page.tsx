import type { Metadata } from 'next'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { ThumbnailPreviewer } from '@/components/tools/ThumbnailPreview'

export const metadata: Metadata = {
  title: 'YouTube Thumbnail Previewer | Test Your Thumbnails Before Publishing | Stumbnail',
  description: 'Free YouTube thumbnail preview tool. See how your thumbnail looks on YouTube home, search, recommended sidebar, and mobile app before uploading. Test thumbnail visibility and click appeal instantly.',
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
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stumbnail.com/tools/youtube-thumbnail-previewer',
    siteName: 'Stumbnail',
    title: 'YouTube Thumbnail Previewer | Test Your Thumbnails Before Publishing',
    description: 'Free YouTube thumbnail preview tool. See how your thumbnail looks on YouTube home, search, recommended sidebar, and mobile app before uploading.',
    images: [
      {
        url: '/og-thumbnail-previewer.png',
        width: 1200,
        height: 630,
        alt: 'YouTube Thumbnail Previewer - Stumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Thumbnail Previewer | Stumbnail',
    description: 'Free YouTube thumbnail preview tool. Test your thumbnails on home, search, sidebar, and mobile before uploading.',
    images: ['/og-thumbnail-previewer.png'],
    creator: '@stumbnail',
  },
  alternates: {
    canonical: 'https://stumbnail.com/tools/youtube-thumbnail-previewer',
  },
}

export default function ThumbnailPreviewerPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <IslandHeader />

      {/* Compact Header */}
      <section className="pt-24 pb-4 px-4 lg:px-8 xl:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
            >
              YouTube Thumbnail <span style={{ color: '#ff6f61' }}>Previewer</span>
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
              See how your thumbnail looks before publishing
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs" style={{ backgroundColor: 'var(--color-button-bg)' }}>
            <svg className="w-3.5 h-3.5 text-[#ff6f61]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81z"/>
              <path d="M10 15V9l5.2 3-5.2 3z" fill="var(--color-background)"/>
            </svg>
            <span style={{ color: 'var(--color-foreground)' }}>Free Tool</span>
          </div>
        </div>
      </section>

      {/* Tool Section - Full Width */}
      <section className="pb-16 px-4 lg:px-8 xl:px-12">
        <ThumbnailPreviewer />
      </section>

      {/* SEO Content Section - Below the Fold */}
      <section className="py-16 px-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
          >
            Why Preview Your YouTube Thumbnails?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                <svg className="w-5 h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                Test Visual Impact
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                See how your thumbnail stands out against competitors. A thumbnail that looks great in your editor might blend in on YouTube.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                <svg className="w-5 h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                Mobile Preview
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Over 70% of YouTube views come from mobile. Make sure your thumbnail looks great on smaller screens.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                <svg className="w-5 h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/>
                  <path d="M18 20V4"/>
                  <path d="M6 20v-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                Boost Click-Through Rate
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Thumbnails can increase CTR by up to 154%. Preview before publishing to maximize your video&#39;s potential.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                <svg className="w-5 h-5 text-[#ff6f61]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                Search Visibility
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Check how your thumbnail appears in search results. Thumbnails display differently across YouTube&#39;s various pages.
              </p>
            </div>
          </div>

          {/* FAQ Section for SEO */}
          <div className="mt-12">
            <h2
              className="text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  What is the ideal YouTube thumbnail size?
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  The recommended YouTube thumbnail size is 1280×720 pixels with a 16:9 aspect ratio. The minimum width is 640 pixels, and the file size should be under 2MB. Supported formats include JPG, GIF, and PNG.
                </p>
              </div>

              <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  How does this thumbnail previewer work?
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Upload your thumbnail image and instantly see how it will appear across different YouTube layouts: home feed, search results, recommended sidebar, and mobile app. Your thumbnail is displayed alongside real YouTube videos for accurate comparison.
                </p>
              </div>

              <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  Is this YouTube thumbnail previewer free?
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Yes, this YouTube thumbnail previewer is completely free to use. There are no limits on how many thumbnails you can test. Your images are processed locally in your browser and are never uploaded to any server.
                </p>
              </div>

              <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                  Why do thumbnails look different on mobile?
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Mobile thumbnails appear much smaller than desktop versions. Small text and fine details may become unreadable. Use this previewer to ensure your thumbnail&#39;s key elements remain visible and impactful on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
