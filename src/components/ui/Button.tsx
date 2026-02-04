'use client'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  icon?: string
}

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  icon?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

  const variantStyles = {
    primary: 'text-white border-none',
    secondary: 'border backdrop-blur-sm',
    ghost: 'border-none bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
  }

  const sizeStyles = {
    sm: 'text-sm px-4 py-2 h-10',
    md: 'text-base px-6 py-3 h-12',
    lg: 'text-lg px-8 py-4 h-14',
  }

  const getVariantStyle = () => {
    if (variant === 'primary') {
      return {
        backgroundColor: '#ff6f61',
        boxShadow: '0 4px 12px rgba(255, 111, 97, 0.25)',
      }
    }
    if (variant === 'secondary') {
      return {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-foreground)',
      }
    }
    return {
      color: 'var(--color-foreground)',
    }
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        variant === 'primary' && 'hover:shadow-[0_8px_25px_rgba(255,111,97,0.45)]',
        variant === 'secondary' && 'hover:bg-[#ff6f61] hover:text-white hover:border-[#ff6f61] hover:shadow-[0_4px_12px_rgba(255,111,97,0.3)]',
        variant === 'ghost' && 'hover:opacity-70',
        'focus-visible:ring-[#ff6f61]',
        className
      )}
      style={getVariantStyle()}
      {...props}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="flex-shrink-0"
        />
      )}
      {children}
    </button>
  )
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}: ButtonLinkProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variantStyles = {
    primary: 'text-white border-none',
    secondary: 'border backdrop-blur-sm',
    ghost: 'border-none bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
  }

  const sizeStyles = {
    sm: 'text-sm px-4 py-2 h-10',
    md: 'text-base px-6 py-3 h-12',
    lg: 'text-lg px-8 py-4 h-14',
  }

  const getVariantStyle = () => {
    if (variant === 'primary') {
      return {
        backgroundColor: '#ff6f61',
        boxShadow: '0 4px 12px rgba(255, 111, 97, 0.25)',
      }
    }
    if (variant === 'secondary') {
      return {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-foreground)',
      }
    }
    return {
      color: 'var(--color-foreground)',
    }
  }

  return (
    <Link
      href={href}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        variant === 'primary' && 'hover:shadow-[0_8px_25px_rgba(255,111,97,0.45)]',
        variant === 'secondary' &&
          'hover:bg-[#ff6f61] hover:text-white hover:border-[#ff6f61] hover:shadow-[0_4px_12px_rgba(255,111,97,0.3)]',
        variant === 'ghost' && 'hover:opacity-70',
        'focus-visible:ring-[#ff6f61]',
        className
      )}
      style={getVariantStyle()}
      {...props}
    >
      {icon && (
        <Image src={icon} alt="" width={20} height={20} className="flex-shrink-0" />
      )}
      {children}
    </Link>
  )
}
