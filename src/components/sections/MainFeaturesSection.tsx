'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CreateWithPromptCard } from '@/components/features/CreateWithPromptCard'
import { YouTubeLinkCard } from '@/components/features/YouTubeLinkCard'
import { SmartMergeCard } from '@/components/features/SmartMergeCard'

type TabType = 'standard' | 'youtube' | 'smart-merge'

const tabs: { id: TabType; label: string }[] = [
  { id: 'standard', label: 'Standard' },
  { id: 'youtube', label: 'YouTube Link' },
  { id: 'smart-merge', label: 'Smart Merge' },
]

const tabContent: Record<TabType, { heading: React.ReactNode; description: string }> = {
  standard: {
    heading: (
      <>
        Create Thumbnails from <span style={{ color: '#ff6f61' }}>Prompts</span>
      </>
    ),
    description:
      'Describe the thumbnail you want, and our AI instantly turns your words into a polished, high-impact design. No complicated tools, no manual editing - just fast, accurate results built from your prompt.',
  },
  youtube: {
    heading: (
      <>
        Create Thumbnails from <span style={{ color: '#ff6f61' }}>Links</span>
      </>
    ),
    description:
      'Quickly generate thumbnails from any YouTube link. Paste the URL and get instant results. Supports all resolutions including SD, HD, and Full HD. Automatically fetches every available thumbnail version.',
  },
  'smart-merge': {
    heading: (
      <>
        Create Thumbnails with <span style={{ color: '#ff6f61' }}>Smart Merge</span>
      </>
    ),
    description:
      'Combine multiple elements, faces, and backgrounds into one cohesive thumbnail. Our AI intelligently blends your assets for professional-looking results every time.',
  },
}

export function MainFeaturesSection() {
  const [activeTab, setActiveTab] = useState<TabType>('standard')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = tabs.findIndex((tab) => tab.id === activeTab)
      const activeButton = tabsRef.current[activeIndex]
      const container = containerRef.current

      if (activeButton && container) {
        const containerRect = container.getBoundingClientRect()
        const buttonRect = activeButton.getBoundingClientRect()

        setIndicatorStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        })
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeTab])

  const renderCard = () => {
    switch (activeTab) {
      case 'youtube':
        return <YouTubeLinkCard />
      case 'smart-merge':
        return <SmartMergeCard />
      default:
        return <CreateWithPromptCard />
    }
  }

  return (
    <section className="relative w-full py-16 md:py-24 overflow-x-hidden">
      {/* Background glow effect */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 111, 97, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10 col-span-12 lg:col-span-5">
            {/* Robot Icon */}
            <div className="mb-5 w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
              <Image
                src="/assets/icons/robot-emoji.svg"
                alt="AI Robot"
                width={90}
                height={90}
                className="w-full h-full"
              />
            </div>

            {/* Tab Selector with sliding indicator */}
            <div
              ref={containerRef}
              className="relative inline-flex items-center p-1 rounded-full mb-6 md:mb-8"
              style={{
                backgroundColor: 'var(--color-background-alt)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Sliding indicator */}
              <div
                className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  backgroundColor: '#ff6f61',
                }}
              />

              {/* Tab buttons */}
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabsRef.current[index] = el
                  }}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative z-10 px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm transition-colors duration-300"
                  style={{
                    color: activeTab === tab.id ? 'white' : 'var(--color-text-muted)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: activeTab === tab.id ? 500 : 400,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Heading */}
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-5"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-foreground)',
              }}
            >
              {tabContent[activeTab].heading}
            </h2>

            {/* Description */}
            <p
              className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-[480px]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 300,
                color: 'var(--color-text-muted)',
                lineHeight: '1.7',
              }}
            >
              {tabContent[activeTab].description}
            </p>

            {/* CTA Button */}
            <Button
              variant="primary"
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base rounded-xl"
              icon="/assets/icons/sparkle.svg"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                backgroundColor: '#ff6f61',
              }}
            >
              Try for free
            </Button>
          </div>

          {/* Right Column - Feature Card */}
          <div className="relative w-full col-span-12 lg:col-span-7">
            {renderCard()}
          </div>
        </div>
      </div>
    </section>
  )
}
