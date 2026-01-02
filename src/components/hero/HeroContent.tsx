'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { trackHeroCtaClick, trackExternalLinkClick } from '@/lib/analytics'

export function HeroContent() {
  return (
    <div className="relative z-30 w-full max-w-[900px] mx-auto px-6 md:px-8 flex-grow flex flex-col justify-center items-center text-center mt-8 md:mt-12">
      {/* Main Headline */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 md:mb-10"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <span style={{ color: 'var(--color-foreground)' }}>Great content, </span>
        <span style={{ color: '#ff6f61' }}>Bad Thumbnails?</span>
      </h1>

      {/* Subtext */}
      <div className="flex flex-col items-center gap-5 md:gap-6 mb-10 md:mb-14">
        <p
          className="text-lg md:text-xl lg:text-2xl mx-auto max-w-[863px] leading-relaxed"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            color: 'var(--color-foreground)',
            opacity: 0.85,
          }}
        >
          Fix that in 30 seconds with our AI YouTube thumbnail generator that actually gets clicks.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-5 md:mb-6">
        <Link
          href="https://app.stumbnail.com/login"
          onClick={() => {
            trackHeroCtaClick('trial')
            trackExternalLinkClick('https://app.stumbnail.com/login')
          }}
        >
          <Button
            variant="primary"
            className="h-[60px] md:h-[68px] px-8 md:px-10 text-lg md:text-xl rounded-2xl"
            icon="/assets/icons/try-stumbnail.svg"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              backgroundColor: '#ff6f61',
              minWidth: '260px',
            }}
          >
            Try Stumbnail Free
          </Button>
        </Link>
      </div>

      {/* Distinct badge style for "No design skills needed" */}
      <span
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-16 md:mb-20"
        style={{
          fontFamily: 'var(--font-heading)',
          background: 'linear-gradient(135deg, rgba(255, 111, 97, 0.15) 0%, rgba(255, 111, 97, 0.08) 100%)',
          border: '1px solid rgba(255, 111, 97, 0.3)',
          color: '#ff6f61',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1L10.163 5.279L15 6.012L11.5 9.387L12.326 14.2L8 11.96L3.674 14.2L4.5 9.387L1 6.012L5.837 5.279L8 1Z" fill="#ff6f61" stroke="#ff6f61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        No design skills needed
      </span>
    </div>
  )
}
