import { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  titleAs?: ElementType
  titleId?: string
  size?: 'sm' | 'md' | 'lg'
  width?: 'narrow' | 'default' | 'wide'
  className?: string
  eyebrowClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

const widthClassNames = {
  narrow: 'max-w-2xl',
  default: 'max-w-3xl',
  wide: 'max-w-4xl',
}

const sizeClassNames = {
  sm: 'section-title-sm',
  md: '',
  lg: 'section-title-lg',
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  titleAs: Title = 'h2',
  titleId,
  size = 'md',
  width = 'default',
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'section-heading',
        widthClassNames[width],
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow ? (
        <p className={cn('section-eyebrow', eyebrowClassName)}>{eyebrow}</p>
      ) : null}

      <Title
        id={titleId}
        className={cn('section-title', sizeClassNames[size], titleClassName)}
      >
        {title}
      </Title>

      {description ? (
        <p className={cn('section-lead', descriptionClassName)}>{description}</p>
      ) : null}
    </div>
  )
}
