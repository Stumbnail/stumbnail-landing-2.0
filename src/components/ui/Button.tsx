'use client'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'hero'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  icon?: string
  fullWidth?: boolean
}

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  icon?: string
  fullWidth?: boolean
}

const baseStyles =
  'button-shell font-ui cursor-pointer items-center justify-center gap-2 whitespace-nowrap border-0 no-underline disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-60'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'button-shell-primary',
  secondary: 'button-shell-secondary',
  ghost: 'button-shell-ghost',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'rounded-full px-4 py-2 text-sm font-semibold',
  md: 'rounded-full px-5 py-2.5 text-sm font-semibold',
  lg: 'rounded-full px-6 py-3 text-base font-semibold',
  xl: 'rounded-full px-8 py-3.5 text-base font-semibold md:px-10 md:text-lg',
  hero: 'rounded-full px-8 py-3.5 text-base font-semibold md:px-10 md:py-4 md:text-lg',
}

function getButtonClassName({
  variant,
  size,
  fullWidth,
  className,
}: {
  variant: ButtonVariant
  size: ButtonSize
  fullWidth?: boolean
  className?: string
}) {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  )
}

function ButtonContent({ icon, children }: { icon?: string; children: ReactNode }) {
  return (
    <span className="button-label">
      {icon ? (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="button-icon shrink-0"
        />
      ) : null}
      {children}
    </span>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName({ variant, size, fullWidth, className })}
      {...props}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
      <span className="button-orb" aria-hidden="true" />
    </button>
  )
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={getButtonClassName({ variant, size, fullWidth, className })}
      {...props}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
      <span className="button-orb" aria-hidden="true" />
    </Link>
  )
}
