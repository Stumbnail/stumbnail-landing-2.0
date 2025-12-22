import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <Image
        src="/assets/logo.svg"
        alt="Stumbnail"
        width={120}
        height={40}
        priority
        className="h-8 w-auto md:h-10"
      />
    </Link>
  )
}
