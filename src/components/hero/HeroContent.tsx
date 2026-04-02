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
        className="mb-6 max-w-[760px] font-heading text-[clamp(2.35rem,4vw,4.15rem)] font-medium leading-[1.04] tracking-[-0.04em] md:mb-10"
        style={heroTextStyle}
      >
        Create{' '}
        <span className={`${caveat.className} inline-block pb-[0.08em] pr-[0.04em] leading-[1.04]`}>
          Click-Worthy
        </span>{' '}
        YouTube Thumbnails With AI
      </h1>

      <div className="mb-8 md:mb-12">
        <p
          className="hero-summary mx-auto max-w-[520px] text-[clamp(0.94rem,1.05vw,1.05rem)] leading-[1.76]"
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
