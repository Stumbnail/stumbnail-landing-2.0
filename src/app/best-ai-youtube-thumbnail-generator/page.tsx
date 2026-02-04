import type { Metadata } from 'next'
import Link from 'next/link'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { ButtonLink } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Best AI YouTube Thumbnail Generator (2026) - How to Choose | Stumbnail',
  description:
    'Looking for the best AI YouTube thumbnail generator? Compare options, learn what matters (16:9 output, editing, readability), and see why creators use Stumbnail.',
  keywords: [
    'best ai youtube thumbnail generator',
    'best ai thumbnail generator for youtube',
    'ai youtube thumbnail generator',
    'ai youtube thumbnail maker',
    'youtube thumbnail generator ai',
    'youtube thumbnail maker ai',
  ],
  alternates: {
    canonical: 'https://stumbnail.com/best-ai-youtube-thumbnail-generator',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://stumbnail.com/best-ai-youtube-thumbnail-generator',
    siteName: 'Stumbnail',
    title: 'Best AI YouTube Thumbnail Generator (2026) - How to Choose | Stumbnail',
    description:
      'A practical guide to choosing an AI thumbnail generator: what to look for, what to avoid, and which tool fits your workflow.',
    images: [
      {
        url: '/assets/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Best AI YouTube Thumbnail Generator (2026) - Stumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI YouTube Thumbnail Generator (2026) | Stumbnail',
    description:
      'A practical guide to choosing an AI thumbnail generator: what to look for, what to avoid, and which tool fits your workflow.',
    images: ['/assets/opengraph.png'],
    creator: '@stumbnail',
  },
}

const criteria = [
  {
    title: 'True 16:9 output',
    body: 'YouTube thumbnails should be 1280×720 (16:9). Tools that default to square images often require extra fixing and can lead to awkward crops.',
  },
  {
    title: 'Editing after generation',
    body: 'The best results come from iteration. Look for a tool where you can adjust text, composition, and layout without starting over.',
  },
  {
    title: 'Readability at small sizes',
    body: 'Most impressions happen on mobile. Strong contrast, bold text, and a clear focal point matter more than “pretty.”',
  },
  {
    title: 'Fast variations',
    body: 'You rarely hit the perfect thumbnail on try #1. A good generator makes it easy to produce multiple options quickly.',
  },
] as const

const comparisons = [
  {
    name: 'Stumbnail',
    bestFor: 'Creators who want AI generation + a thumbnail-first editor.',
    notes: [
      'Designed specifically for YouTube thumbnails (true 16:9).',
      'Canvas workflow for refining text/layout without restarting.',
      'Good fit when you care about CTR and iteration speed.',
    ],
    ctaLabel: 'Try Stumbnail Free',
    ctaHref: 'https://app.stumbnail.com/login',
    highlight: true,
  },
  {
    name: 'Template-first design tools',
    bestFor: 'Creators who prefer templates and manual design.',
    notes: [
      'Great if you want a large template library and you already know what style you want.',
      'Often slower to iterate if you need many thumbnail variations.',
    ],
    ctaLabel: 'Read: Canva alternatives',
    ctaHref: '/blog/best-canva-alternatives-for-youtube-thumbnails',
    highlight: false,
  },
  {
    name: 'General-purpose chat tools',
    bestFor: 'Brainstorming concepts, hooks, and thumbnail text ideas.',
    notes: [
      'Helpful for ideation and copy, but you still need a thumbnail-focused editing workflow.',
      'Outputs may require extra work to match YouTube thumbnail constraints.',
    ],
    ctaLabel: 'Use the free previewer',
    ctaHref: '/tools/youtube-thumbnail-previewer',
    highlight: false,
  },
] as const

const faq = [
  {
    question: 'What makes an AI thumbnail generator “the best”?',
    answer:
      'The best tool is the one that helps you iterate fast and ship thumbnails that win clicks: true 16:9 output, easy editing, strong readability, and fast variations.',
  },
  {
    question: 'Is “best” the same for every niche?',
    answer:
      'Not always. Gaming thumbnails often need bold, high-energy composition, while business or education may prioritize clarity and trust. Your niche affects what “best” looks like.',
  },
  {
    question: 'Should I still A/B test thumbnails?',
    answer:
      'Yes. Even a strong generator is only the starting point. Testing variations is how you learn what works for your audience.',
  },
] as const

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://stumbnail.com/best-ai-youtube-thumbnail-generator#webpage',
      url: 'https://stumbnail.com/best-ai-youtube-thumbnail-generator',
      name: 'Best AI YouTube Thumbnail Generator (2026) - How to Choose | Stumbnail',
      description:
        'Looking for the best AI YouTube thumbnail generator? Compare options, learn what matters (16:9 output, editing, readability), and see why creators use Stumbnail.',
      isPartOf: { '@id': 'https://stumbnail.com/#website' },
      about: { '@id': 'https://stumbnail.com/#software' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stumbnail.com' },
          { '@type': 'ListItem', position: 2, name: 'Best AI YouTube Thumbnail Generator', item: 'https://stumbnail.com/best-ai-youtube-thumbnail-generator' },
        ],
      },
    },
    {
      '@type': 'Article',
      '@id': 'https://stumbnail.com/best-ai-youtube-thumbnail-generator#article',
      headline: 'Best AI YouTube Thumbnail Generator (2026): How to Choose',
      description:
        'A practical guide to choosing an AI thumbnail generator: what to look for, what to avoid, and which tool fits your workflow.',
      author: { '@type': 'Organization', name: 'Stumbnail' },
      publisher: { '@type': 'Organization', name: 'Stumbnail', url: 'https://stumbnail.com' },
      mainEntityOfPage: { '@id': 'https://stumbnail.com/best-ai-youtube-thumbnail-generator#webpage' },
      image: 'https://stumbnail.com/assets/opengraph.png',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://stumbnail.com/best-ai-youtube-thumbnail-generator#faq',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

export default function BestAiYouTubeThumbnailGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
              Best AI YouTube Thumbnail Generator{' '}
              <span style={{ color: '#ff6f61' }}>(2026)</span>
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-body)',
                lineHeight: '1.7',
              }}
            >
              “Best” depends on your workflow. This page shows what to look for (and what to avoid) so you can pick the
              right AI thumbnail generator for your channel.
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
              Already have a thumbnail? Test it with the free{' '}
              <Link href="/tools/youtube-thumbnail-previewer" className="text-[#ff6f61] hover:underline underline-offset-4">
                YouTube Thumbnail Previewer
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Criteria */}
        <section className="pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
            >
              What to look for
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {criteria.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl p-6"
                  style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Options */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
            >
              Options (and when to use them)
            </h2>

            <div className="grid lg:grid-cols-3 gap-6">
              {comparisons.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-3xl p-6 flex flex-col"
                  style={{
                    backgroundColor: tool.highlight ? 'rgba(255, 111, 97, 0.06)' : 'var(--color-background-alt)',
                    border: tool.highlight ? '1px solid rgba(255, 111, 97, 0.25)' : '1px solid var(--color-border)',
                  }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                        {tool.name}
                      </h3>
                      {tool.highlight && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                          style={{ backgroundColor: 'rgba(255, 111, 97, 0.15)', color: '#ff6f61' }}
                        >
                          Thumbnail-first
                        </span>
                      )}
                    </div>
                    <p className="mt-2" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                      <strong style={{ color: 'var(--color-foreground)' }}>Best for:</strong> {tool.bestFor}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tool.notes.map((note) => (
                      <li key={note} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6f61' }} />
                        <span style={{ fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>{note}</span>
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href={tool.ctaHref}
                    variant={tool.highlight ? 'primary' : 'secondary'}
                    className="mt-auto h-[48px] px-6 text-base rounded-2xl"
                    icon={tool.highlight ? '/assets/icons/sparkle.svg' : undefined}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      ...(tool.highlight ? { backgroundColor: '#ff6f61' } : {}),
                    }}
                  >
                    {tool.ctaLabel}
                  </ButtonLink>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-14 md:mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}
              >
                FAQs
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
