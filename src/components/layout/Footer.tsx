'use client'

import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { useTheme } from '@/components/providers/ThemeProvider'

export function Footer() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className="relative py-16 px-6 overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background)',
                borderTop: isDark
                    ? '1px solid rgba(255, 255, 255, 0.06)'
                    : '1px solid rgba(0, 0, 0, 0.06)',
            }}
        >
            {/* Subtle glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.08) 0%, transparent 70%)',
                }}
            />

            <div className="relative max-w-[1200px] mx-auto">
                {/* Humorous CTA */}
                <div className="text-center mb-12">
                    <p
                        className="text-lg md:text-xl font-medium mb-4"
                        style={{
                            color: 'var(--color-foreground)',
                            fontFamily: 'var(--font-heading)',
                        }}
                    >
                        Still scrolling? C&apos;mon, just{' '}
                        <Link
                            href="https://app.stumbnail.com/login"
                            className="text-[#ff6f61] hover:underline underline-offset-4"
                        >
                            try it already
                        </Link>
                        . 🙄
                    </p>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Product */}
                    <div>
                        <h4
                            className="text-sm font-semibold uppercase tracking-wider mb-4"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Product
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="https://app.stumbnail.com/login"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    Get Started
                                </Link>
                            </li>
                            <li>
                                <span
                                    className="text-sm flex items-center gap-2"
                                    style={{ color: 'var(--color-foreground)', opacity: 0.6 }}
                                >
                                    Blog
                                    <span
                                        className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                                        style={{
                                            backgroundColor: 'rgba(255, 111, 97, 0.15)',
                                            color: '#ff6f61',
                                        }}
                                    >
                                        Soon
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4
                            className="text-sm font-semibold uppercase tracking-wider mb-4"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4
                            className="text-sm font-semibold uppercase tracking-wider mb-4"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookies"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4
                            className="text-sm font-semibold uppercase tracking-wider mb-4"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://twitter.com/stumbnail"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtube.com/@stumbnail"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm transition-colors hover:text-[#ff6f61]"
                                    style={{ color: 'var(--color-foreground)' }}
                                >
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{
                        borderTop: isDark
                            ? '1px solid rgba(255, 255, 255, 0.06)'
                            : '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                >
                    <Logo />
                    <p
                        className="text-sm"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        © {currentYear} Stumbnail. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
