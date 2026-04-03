import type { Metadata } from 'next'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/hero/HeroSection'
import { HeroContent } from '@/components/hero/HeroContent'
import { InfiniteScroller } from '@/components/hero/InfiniteScroller'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { CommunityGallerySection } from '@/components/sections/CommunityGallerySection'
import { ViewsLiftSection } from '@/components/sections/ViewsLiftSection'
import { ResultsScrollerSection } from '@/components/sections/ResultsScrollerSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { faqData } from '@/components/seo/StructuredData'
import { getThumbnailFiles } from '@/lib/thumbnail-files'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://stumbnail.com',
  },
}

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://stumbnail.com/#home',
      url: 'https://stumbnail.com',
      name: 'AI YouTube Thumbnail Generator | Stumbnail',
      description:
        'Generate click-worthy YouTube thumbnails in seconds with AI. Canvas-based editor, no design skills needed. Choose a plan and start creating.',
      isPartOf: {
        '@id': 'https://stumbnail.com/#website',
      },
      about: {
        '@id': 'https://stumbnail.com/#software',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://stumbnail.com/assets/opengraph.png',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://stumbnail.com',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://stumbnail.com/#home-faq',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default async function HomePage() {
  const thumbnailFiles = await getThumbnailFiles()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <main className="min-h-screen overflow-x-hidden">
        <IslandHeader />

        <HeroSection>
          <div className="landing-shell-wide relative z-20 flex w-full justify-center px-4 pb-24 sm:px-6 sm:pb-28 md:px-8 md:pb-40 lg:pb-44">
            <HeroContent />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-30">
            <InfiniteScroller images={thumbnailFiles} />
          </div>
        </HeroSection>

        <PartnersSection />

        <div className="feature-section-band">
          <div className="feature-section-band__inner">
            <ViewsLiftSection />

            <ResultsScrollerSection />
          </div>
        </div>

        <CommunityGallerySection />

        <FAQSection />

        <FinalCTASection />

        <Footer />
      </main>
    </>
  )
}
