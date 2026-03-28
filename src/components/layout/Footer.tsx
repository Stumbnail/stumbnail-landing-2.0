'use client'

import Link from 'next/link'
import { useTheme } from '@/components/providers/ThemeProvider'

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

type FooterGroup = {
  title: string
  links: FooterLink[]
}

const footerGroups: FooterGroup[] = [
  {
    title: 'Product',
    links: [
      { label: 'Get Started', href: 'https://app.stumbnail.com/login', external: true },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Free Tools', href: '/tools' },
      { label: 'Thumbnail Previewer', href: '/tools/youtube-thumbnail-previewer' },
      { label: 'Thumbnail Downloader', href: '/tools/youtube-thumbnail-downloader' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Twitter / X', href: 'https://twitter.com/stumbnail', external: true },
      { label: 'YouTube', href: 'https://youtube.com/@stumbnail', external: true },
    ],
  },
]

function FooterLinkItem({ link, isDark }: { link: FooterLink; isDark: boolean }) {
  const className =
    'font-body text-sm transition-colors hover:text-[#ff6f61]'
  const linkStyle = {
    color: isDark ? 'rgba(250, 250, 250, 0.68)' : '#24201f',
  } as const

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={linkStyle}
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className} style={linkStyle}>
      {link.label}
    </Link>
  )
}

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const wordmarkStyle = {
    backgroundImage: isDark
      ? 'linear-gradient(180deg, rgba(44, 38, 36, 0.98) 0%, rgba(56, 48, 46, 0.98) 30%, rgba(94, 74, 70, 0.94) 62%, rgba(160, 99, 91, 0.92) 82%, rgba(255, 111, 97, 0.86) 100%)'
      : 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,248,246,0.93) 28%, rgba(255,233,228,0.9) 54%, rgba(255,183,172,0.86) 76%, rgba(255,111,97,0.92) 100%)',
    opacity: isDark ? 0.96 : 1,
  } as const

  return (
    <footer
      className="relative overflow-hidden px-4 pt-14 pb-0 sm:px-6 sm:pt-16 sm:pb-0"
      style={{
        backgroundColor: 'var(--color-background)',
        borderTop: isDark
          ? '1px solid rgba(255, 255, 255, 0.06)'
          : '1px solid rgba(var(--color-ink-rgb), 0.06)',
      }}
    >
      <div className="landing-shell relative">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-ui mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <FooterLinkItem link={link} isDark={isDark} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative mt-14"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
        }}
      >
        <p
          className="font-heading text-center text-[clamp(5.3rem,18vw,17rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-transparent bg-clip-text"
          style={wordmarkStyle}
        >
          STUMBNAIL
        </p>
      </div>
    </footer>
  )
}
