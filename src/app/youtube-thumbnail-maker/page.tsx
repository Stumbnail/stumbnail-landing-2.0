import type { Metadata } from 'next'
import Link from 'next/link'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { ButtonLink } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'YouTube Thumbnail Maker (AI) - Create Click-Worthy Thumbnails | Stumbnail',
  description:
    'Use Stumbnail as your AI YouTube thumbnail maker: generate thumbnail ideas fast, edit on a clean canvas, and export YouTube-ready 16:9 thumbnails. Start free.',
  keywords: [
    'youtube thumbnail maker',
    'ai youtube thumbnail maker',
    'youtube thumbnail maker ai',
    'ai youtube thumbnail generator',
    'youtube thumbnail generator ai',
    'thumbnail maker for youtube',
    'youtube thumbnail size',
    'youtube thumbnail maker online',
  ],
  alternates: {
    canonical: 'https://stumbnail.com/youtube-thumbnail-maker',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stumbnail.com/youtube-thumbnail-maker',
    siteName: 'Stumbnail',
    title: 'YouTube Thumbnail Maker (AI) - Create Click-Worthy Thumbnails | Stumbnail',
    description:
      'Generate, edit, and export YouTube-ready thumbnails (true 16:9). A creator-first AI thumbnail maker with a clean canvas editor.',
    images: [
      {
        url: '/assets/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Stumbnail - YouTube Thumbnail Maker (AI)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Thumbnail Maker (AI) | Stumbnail',
    description:
      'Generate, edit, and export YouTube-ready thumbnails (true 16:9). A creator-first AI thumbnail maker with a clean canvas editor.',
    images: ['/assets/opengraph.png'],
    creator: '@stumbnail',
  },
}

const faq = [
  {
    question: 'What is a YouTube thumbnail maker?',
    answer:
      'A YouTube thumbnail maker is a tool used to design the image viewers see before clicking a video. A good thumbnail maker helps you create a clear, high-contrast design that is readable on mobile and matches your title.',
  },
  {
    question: 'Can I use Stumbnail as an AI YouTube thumbnail maker?',
    answer:
      'Yes. Stumbnail generates thumbnail concepts with AI and lets you refine them on a canvas so you can adjust text, layout, and style without starting over.',
  },
  {
    question: 'What is the best YouTube thumbnail size?',
    answer:
      'The recommended YouTube thumbnail size is 1280×720 pixels with a 16:9 aspect ratio. Stumbnail is built around true 16:9 exports so your thumbnails are YouTube-ready.',
  },
  {
    question: 'Do I need design skills to make a good thumbnail?',
    answer:
      'No. You still need a clear idea and a strong hook, but Stumbnail is designed to help you get to a solid thumbnail faster with AI generation plus simple editing.',
  },
] as const

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://stumbnail.com/youtube-thumbnail-maker#webpage',
      url: 'https://stumbnail.com/youtube-thumbnail-maker',
      name: 'YouTube Thumbnail Maker (AI) - Create Click-Worthy Thumbnails | Stumbnail',
      description:
        'Use Stumbnail as your AI YouTube thumbnail maker: generate thumbnail ideas fast, edit on a clean canvas, and export YouTube-ready 16:9 thumbnails. Start free.',
      isPartOf: { '@id': 'https://stumbnail.com/#website' },
      about: { '@id': 'https://stumbnail.com/#software' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stumbnail.com' },
          { '@type': 'ListItem', position: 2, name: 'YouTube Thumbnail Maker', item: 'https://stumbnail.com/youtube-thumbnail-maker' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://stumbnail.com/youtube-thumbnail-maker#faq',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

export default function YouTubeThumbnailMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              YouTube Thumbnail Maker{' '}
              <span style={{ color: '#ff6f61' }}>(AI)</span>
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-body)',
                lineHeight: '1.7',
              }}
            >
              Generate click-worthy thumbnail concepts fast, then refine them on a clean canvas and export YouTube-ready
              16:9 thumbnails.
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

            <p className="text-sm mt-6" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
              Want to validate your design first? Use the free{' '}
              <Link href="/tools/youtube-thumbnail-previewer" className="text-[#ff6f61] hover:underline underline-offset-4">
                YouTube Thumbnail Previewer
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Generate with AI',
                  body: 'Start from a prompt or a concept and get thumbnail directions quickly — great for brainstorming multiple angles.',
                },
                {
                  title: 'Edit on a canvas',
                  body: 'Refine text, layout, and composition without fighting templates. Iterate like a creator, not a designer.',
                },
                {
                  title: 'Export YouTube-ready',
                  body: 'Designed for true 16:9 thumbnails so your final export is ready to upload to YouTube.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl p-6"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <h2
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                  >
                    {card.title}
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="mt-14 md:mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
              >
                How this AI thumbnail maker works
              </h2>

              <div
                className="rounded-3xl p-6 md:p-8"
                style={{ backgroundColor: 'var(--color-button-bg)', border: '1px solid var(--color-border)' }}
              >
                <ol className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Pick a workflow', body: 'Prompt, Smart Merge, or start from a YouTube link.' },
                    { title: 'Generate variations', body: 'Create a few strong options with different hooks and styles.' },
                    { title: 'Polish + export', body: 'Adjust text and layout, then export a YouTube-ready 16:9 thumbnail.' },
                  ].map((step, idx) => (
                    <li key={step.title} className="list-none">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
                          style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <h3
                            className="font-semibold mb-1"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                          >
                            {step.title}
                          </h3>
                          <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>{step.body}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-14 md:mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
              >
                YouTube Thumbnail Maker FAQs
              </h2>

              <div className="space-y-3">
                {faq.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-2xl p-5"
                    style={{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }}
                  >
                    <summary
                      className="font-semibold cursor-pointer"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
                    >
                      {item.question}
                    </summary>
                    <p className="mt-3" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

