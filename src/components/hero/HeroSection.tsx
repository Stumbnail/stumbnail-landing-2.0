import { ReactNode } from 'react'

interface HeroSectionProps {
  children: ReactNode
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen pt-32 md:pt-40 pb-8 flex flex-col items-center overflow-hidden">
      {children}
    </section>
  )
}
