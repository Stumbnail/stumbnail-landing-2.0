import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { ButtonLink } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Free YouTube Thumbnail Tools - Previewer & Downloader | Stumbnail',
  description:
    'Free YouTube thumbnail tools: preview how your thumbnail looks on YouTube before uploading, or download any YouTube thumbnail in HD. No signup required.',
  keywords: [
    'youtube thumbnail tools',
    'youtube thumbnail previewer',
    'youtube thumbnail downloader',
    'youtube thumbnail tester',
    'download youtube thumbnail',
    'preview youtube thumbnail',
    'youtube thumbnail checker',
    'free youtube thumbnail tools',
  ],
  alternates: {
    canonical: 'https://stumbnail.com/tools',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stumbnail.com/tools',
    siteName: 'Stumbnail',
    title: 'Free YouTube Thumbnail Tools - Previewer & Downloader | Stumbnail',
    description:
      'Preview thumbnails in real YouTube layouts or download any YouTube thumbnail in HD. Free tools from Stumbnail.',
    images: [
      {
        url: '/assets/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Stumbnail - Free YouTube Thumbnail Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Thumbnail Tools | Stumbnail',
    description:
      'Preview thumbnails in real YouTube layouts or download any YouTube thumbnail in HD. Free tools from Stumbnail.',
    images: ['/assets/opengraph.png'],
    creator: '@stumbnail',
  },
}

const tools = [
  {
    title: 'YouTube Thumbnail Previewer',
    href: '/tools/youtube-thumbnail-previewer',
    description:
      'Upload a thumbnail and preview how it looks on YouTube home, search, suggested, and mobile — before you publish.',
    image: '/assets/phone.webp',
    badge: 'Free',
  },
  {
    title: 'YouTube Thumbnail Downloader',
    href: '/tools/youtube-thumbnail-downloader',
    description:
      'Paste any YouTube URL to download the thumbnail in max resolution (when available) and other sizes instantly.',
    image: '/assets/youtube.webp',
    badge: 'Free',
  },
] as const

export default function ToolsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <IslandHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '420px',
            background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.12) 0%, transparent 70%)',
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
            Free <span style={{ color: '#ff6f61' }}>YouTube Thumbnail</span> Tools
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-body)',
              lineHeight: '1.7',
            }}
          >
            Use these free tools to validate your thumbnails before you upload — or grab a thumbnail from any YouTube
            video in seconds.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--color-background-alt)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-300"
                    priority={false}
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'rgba(255, 111, 97, 0.12)',
                      color: '#ff6f61',
                      border: '1px solid rgba(255, 111, 97, 0.2)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {tool.badge}
                  </div>
                </div>

                <div className="p-6">
                  <h2
                    className="text-2xl font-bold mb-3 group-hover:text-[#ff6f61] transition-colors"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-foreground)',
                    }}
                  >
                    {tool.title}
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-body)',
                      lineHeight: '1.7',
                    }}
                  >
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 md:mt-16 rounded-3xl p-8 md:p-10 text-center"
            style={{
              backgroundColor: 'var(--color-button-bg)',
              border: '1px solid var(--color-border)',
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-foreground)',
              }}
            >
              Want to generate thumbnails with AI?
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-7"
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Use Stumbnail to generate concepts fast, then refine them on a clean canvas and export YouTube-ready 16:9
              thumbnails.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href="https://app.stumbnail.com/login"
                variant="primary"
                className="h-[56px] px-10 text-lg rounded-2xl"
                icon="/assets/icons/sparkle.svg"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  backgroundColor: '#ff6f61',
                }}
              >
                Try Stumbnail Free
              </ButtonLink>
              <ButtonLink
                href="/pricing"
                variant="secondary"
                className="h-[56px] px-10 text-lg rounded-2xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                }}
              >
                See Pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

