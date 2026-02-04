import type { Metadata } from 'next'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/hero/HeroSection'
import { HeroContent } from '@/components/hero/HeroContent'
import { HeroThumbnails } from '@/components/hero/HeroThumbnails'
import { InfiniteScroller } from '@/components/hero/InfiniteScroller'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { MainFeaturesSection } from '@/components/sections/MainFeaturesSection'
import { WhyStumbnailSection } from '@/components/sections/WhyStumbnailSection'
import { CommunityGallerySection } from '@/components/sections/CommunityGallerySection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { faqData } from '@/components/seo/StructuredData'

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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <main className="min-h-screen">
        <IslandHeader />

        <HeroSection>
          <HeroThumbnails />
          <HeroContent />
          <div className="w-full mt-auto z-20">
            <InfiniteScroller />
          </div>
        </HeroSection>

        <PartnersSection />

        <MainFeaturesSection />

        <WhyStumbnailSection />

        <CommunityGallerySection />

        <FAQSection />

        <FinalCTASection />

        <Footer />
      </main>
    </>
  )
}
