'use client'

import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'
import { trackHeroCtaClick, trackExternalLinkClick } from '@/lib/analytics'

export function HeroContent() {
  return (
    <div className="relative z-30 w-full max-w-[900px] mx-auto px-6 md:px-8 flex-grow flex flex-col justify-center items-center text-center mt-8 md:mt-12">
      {/* Main Headline */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6 md:mb-10"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <span style={{ color: 'var(--color-foreground)' }}>AI YouTube </span>
        <span style={{ color: '#ff6f61' }}>Thumbnail</span>
        <span style={{ color: 'var(--color-foreground)' }}> Generator</span>
      </h1>

      {/* Subtext */}
      <div className="flex flex-col items-center gap-5 md:gap-6 mb-10 md:mb-14">
        <p
          className="text-lg md:text-xl lg:text-2xl mx-auto max-w-[863px] leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            color: 'var(--color-foreground)',
            opacity: 0.85,
          }}
        >
          Create click-worthy thumbnails in minutes, not hours.
          <br className="hidden md:block" />
          Generate with AI, refine on a canvas, and export true 16:9.
        </p>
      </div>

      {/* Key Value Props */}
      <div
        className="flex flex-wrap justify-center items-center gap-5 md:gap-8 mb-8 md:mb-10"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-bold" style={{ color: '#ff6f61' }}>
            True 16:9
          </span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            YouTube-ready exports
          </span>
        </div>
        <div className="hidden sm:block w-px h-8" style={{ backgroundColor: 'var(--color-border)' }} />
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-bold" style={{ color: '#ff6f61' }}>
            Canvas editor
          </span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Adjust text and layout
          </span>
        </div>
        <div className="hidden sm:block w-px h-8" style={{ backgroundColor: 'var(--color-border)' }} />
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-bold" style={{ color: '#ff6f61' }}>
            Fast variations
          </span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Iterate quickly
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-5 md:mb-6">
        <ButtonLink
          href="https://app.stumbnail.com/login"
          onClick={() => {
            trackHeroCtaClick('trial')
            trackExternalLinkClick('https://app.stumbnail.com/login')
          }}
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
        </ButtonLink>
      </div>

      <p
        className="text-sm md:text-base mb-16 md:mb-20"
        style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text-muted)',
        }}
      >
        No design skills needed.
      </p>
    </div>
  )
}
