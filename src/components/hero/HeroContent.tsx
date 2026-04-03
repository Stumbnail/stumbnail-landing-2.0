'use client'

import type { CSSProperties } from 'react'
import { Caveat } from 'next/font/google'
import { ButtonLink } from '@/components/ui/Button'
import { trackExternalLinkClick, trackHeroCtaClick } from '@/lib/analytics'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
})

export function HeroContent() {
  const heroButtonStyle = {
    '--button-bg': 'var(--hero-button-bg)',
    '--button-text': 'var(--hero-button-text)',
    '--button-hover-text': '#ffffff',
    '--button-ring': 'var(--hero-button-ring)',
    '--button-hover-ring': 'var(--hero-button-hover-ring)',
    '--button-orb-bg': '#ff6f61',
    '--button-icon-filter': 'var(--hero-button-icon-filter)',
    '--button-icon-filter-hover': 'none',
  } as CSSProperties

  const heroTextStyle = {
    color: 'var(--hero-text-color)',
    textShadow: 'var(--hero-text-shadow)',
  } as CSSProperties

  return (
    <div className="relative z-30 mt-6 flex w-full max-w-[880px] flex-grow flex-col items-center justify-start px-1 pt-6 text-center md:mt-14 md:justify-center md:px-0 md:pt-0">
      <h1
        className="mb-6 max-w-[900px] font-heading text-[clamp(2.7rem,5.9vw,5.35rem)] font-semibold leading-[0.95] tracking-[-0.055em] md:mb-10"
        style={heroTextStyle}
      >
        Create{' '}
        <span className="inline-flex px-[0.06em]">
          <span
            className={`${caveat.className} inline-block pr-[0.04em] text-[#ff6f61] tracking-[-0.02em]`}
          >
            Click-Worthy
          </span>
        </span>{' '}
        YouTube Thumbnails With AI
      </h1>

      <div className="mb-8 md:mb-12">
        <p
          className="hero-summary mx-auto max-w-[560px] text-[clamp(0.98rem,1.08vw,1.08rem)] leading-[1.72]"
          style={heroTextStyle}
        >
          Turn ideas into thumbnails people actually click in seconds. No
          design skills needed.
        </p>
      </div>

      <div className="mb-2 flex justify-center md:mb-1">
        <ButtonLink
          href="https://app.stumbnail.com/login"
          onClick={() => {
            trackHeroCtaClick('trial')
            trackExternalLinkClick('https://app.stumbnail.com/login')
          }}
          variant="primary"
          size="hero"
          className="w-full max-w-[20rem] px-8 py-3 text-base sm:min-w-[228px] sm:w-auto"
          style={heroButtonStyle}
          icon="/assets/icons/try-stumbnail.svg"
        >
          Start Creating
        </ButtonLink>
      </div>
    </div>
  )
}
