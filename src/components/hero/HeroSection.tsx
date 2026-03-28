import { ReactNode } from 'react'

interface HeroSectionProps {
  children: ReactNode
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[34rem] w-full flex-col items-center overflow-hidden pt-[7rem] pb-10 sm:min-h-[38rem] md:min-h-screen md:pt-42 md:pb-16">
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-x-0 top-0 bottom-[8.75rem] bg-cover bg-center bg-no-repeat md:bottom-[13rem]"
          style={{
            backgroundImage: "url('/assets/images/bg-bg.webp')",
          }}
        />
        <div
          className="absolute inset-x-3 top-[5.4rem] bottom-[9.75rem] origin-top rounded-[1.25rem] bg-[length:100%_auto] bg-top bg-no-repeat md:inset-x-4 md:top-5 md:bottom-[14rem] md:rounded-[1.5rem] md:bg-contain"
          style={{
            backgroundImage: "url('/assets/images/hero-background.webp')",
            transform: 'scale(1.008)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 76%, rgba(0,0,0,0) 100%)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 76%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>
      {children}
    </section>
  )
}
