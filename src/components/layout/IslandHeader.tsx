'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from '@/components/providers/ThemeProvider'
import { NAV_ITEMS } from '@/lib/constants'

export function IslandHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1200px]">
        <div
          className="relative flex items-center justify-between px-4 lg:px-6 h-[60px] rounded-full backdrop-blur-xl overflow-hidden"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(18, 18, 18, 0.98) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 250, 0.98) 100%)',
            boxShadow: isDark
              ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              : '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          {/* Subtle gradient accent line at top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 111, 97, 0.5), transparent)',
            }}
          />

          {/* Left: Logo */}
          <Logo />

          {/* Center: Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Hover background pill */}
                <span
                  className="absolute inset-0 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                  }}
                />
                {/* Text with hover color */}
                <span
                  className="relative transition-colors duration-200 group-hover:text-[#ff6f61]"
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              className="hidden md:inline-flex h-[36px] px-4 text-sm rounded-full"
              style={{
                color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
              }}
            >
              Start Free Trial
            </Button>

            <Button
              variant="primary"
              className="hidden sm:inline-flex h-[36px] px-5 text-sm rounded-full"
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-full transition-colors"
              style={{
                backgroundColor: 'transparent',
              }}
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)' }}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}
                style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)' }}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          background: isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-[90px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[400px] lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <nav
          className="rounded-2xl p-4 space-y-1"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(18, 18, 18, 0.99) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.99) 100%)',
            boxShadow: isDark
              ? '0 8px 32px rgba(0, 0, 0, 0.5)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200"
              style={{
                fontFamily: 'var(--font-heading)',
                color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
              }}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="pt-3 mt-3 space-y-2"
            style={{ borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)' }}
          >
            <Button
              variant="secondary"
              className="w-full h-[44px] text-sm rounded-xl"
            >
              Start Free Trial
            </Button>
            <Button
              variant="primary"
              className="w-full h-[44px] text-sm rounded-xl"
            >
              Login / Signup
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
