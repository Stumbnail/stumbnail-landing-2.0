'use client'

import Image from 'next/image'

const PARTNERS = [
  { name: 'OpenAI', logo: '/assets/partners/openai.webp' },
  { name: 'Gemini', logo: '/assets/partners/gemini.webp' },
  { name: 'ByteDance', logo: '/assets/partners/bytedance.webp' },
  { name: 'Replicate', logo: '/assets/partners/replicate.webp' },
  { name: 'Black Forest Labs', logo: '/assets/partners/blackforest-labs.webp' },
]

export function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-title"
      className="relative w-full overflow-hidden py-20 md:py-24"
    >
      <div className="landing-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p
            id="partners-title"
            className="font-ui text-sm font-semibold uppercase tracking-[0.2em] md:text-[0.95rem]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Powered by modern AI models
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-12 md:gap-x-14 md:gap-y-7">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-2 opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={240}
                height={96}
                className="h-14 w-auto object-contain md:h-16 lg:h-[4.5rem]"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
