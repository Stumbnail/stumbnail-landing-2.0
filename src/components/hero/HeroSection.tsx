import { ReactNode } from 'react'

interface HeroSectionProps {
  children: ReactNode
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[34rem] w-full flex-col items-center overflow-hidden pt-[7rem] pb-10 sm:min-h-[38rem] md:min-h-screen md:pt-42 md:pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundImage: 'var(--hero-background)' }}
      />
      {children}
    </section>
  )
}
