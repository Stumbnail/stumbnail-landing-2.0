import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'header' | 'footer'
}

const variantStyles = {
  header: {
    container: 'gap-3',
    icon: 'h-8 w-8 md:h-9 md:w-9',
    label: 'text-base md:text-lg',
  },
  footer: {
    container: 'gap-3.5',
    icon: 'h-10 w-10 md:h-12 md:w-12',
    label: 'text-lg md:text-xl',
  },
} as const

export function Logo({ className, variant = 'header' }: LogoProps) {
  const styles = variantStyles[variant]

  return (
    <Link href="/" className={cn('flex items-center whitespace-nowrap', styles.container, className)}>
      <Image
        src="/assets/logo.svg"
        alt="Stumbnail"
        width={48}
        height={48}
        priority
        className={cn('shrink-0', styles.icon)}
      />
      <span
        className={cn(
          'font-ui leading-none font-normal tracking-[-0.01em] text-[var(--color-foreground)]',
          styles.label
        )}
      >
        Stumbnail
      </span>
    </Link>
  )
}
