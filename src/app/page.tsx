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

export default function HomePage() {
  return (
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
  )
}

