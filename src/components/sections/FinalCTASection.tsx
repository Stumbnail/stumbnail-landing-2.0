'use client'

import type { CSSProperties } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { trackHeroCtaClick, trackExternalLinkClick } from '@/lib/analytics'

export function FinalCTASection() {
  const ctaButtonStyle = {
    '--button-bg': 'rgba(255, 255, 255, 0.96)',
    '--button-text': '#24201f',
    '--button-hover-text': '#ffffff',
    '--button-ring': 'rgba(36, 32, 31, 0.18)',
    '--button-hover-ring': 'rgba(255, 111, 97, 0.22)',
    '--button-orb-bg': '#ff6f61',
    '--button-icon-filter': 'brightness(0) saturate(100%) opacity(0.9)',
    '--button-icon-filter-hover': 'none',
  } as CSSProperties

  const finalTextStyle = {
    color: '#24201f',
    textShadow: '0 1px 12px rgba(255, 255, 255, 0.2)',
  } as CSSProperties

  const finalLeadStyle = {
    color: 'rgba(82, 71, 71, 0.82)',
    textShadow: '0 1px 10px rgba(255, 255, 255, 0.16)',
  } as CSSProperties

  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative py-20 md:py-28"
      style={{
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="landing-shell">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(36,32,31,0.14)] p-10 md:p-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 scale-[1.08] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/images/footer-card.webp')",
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2
              id="final-cta-title"
              className="section-title section-title-sm mb-6"
              style={finalTextStyle}
            >
              Ready to Get More{' '}
              <span className="text-gradient-accent">Clicks</span>?
            </h2>

            <p className="section-lead mx-auto mb-10 max-w-2xl" style={finalLeadStyle}>
              Join creators using Stumbnail to stand out with click-worthy
              thumbnails. Start free and make your next thumbnail today.
            </p>

            <div className="flex items-center justify-center">
              <ButtonLink
                href="https://app.stumbnail.com/login"
                onClick={() => {
                  trackHeroCtaClick('trial')
                  trackExternalLinkClick('https://app.stumbnail.com/login')
                }}
                variant="primary"
                size="xl"
                style={ctaButtonStyle}
                icon="/assets/icons/sparkle.svg"
              >
                Get Started
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
