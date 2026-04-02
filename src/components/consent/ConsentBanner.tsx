'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import type { ConsentState } from '@/lib/consent'

type ConsentBannerProps = {
  consent: ConsentState
  analyticsEnabled: boolean
  preferencesOpen: boolean
  onOpenPreferences: () => void
  onClosePreferences: () => void
  onAnalyticsChange: (enabled: boolean) => void
  onSaveConsent: (analytics: boolean) => void
  onRejectOptional: () => void
  onAcceptAnalytics: () => void
}

function CookieToggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}) {
  return (
    <label
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-opacity ${
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
      }`}
      style={{
        backgroundColor: checked ? '#ff6f61' : 'rgba(var(--color-ink-rgb), 0.14)',
      }}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
      />
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </label>
  )
}

export function ConsentBanner({
  consent,
  analyticsEnabled,
  preferencesOpen,
  onOpenPreferences,
  onClosePreferences,
  onAnalyticsChange,
  onSaveConsent,
  onRejectOptional,
  onAcceptAnalytics,
}: ConsentBannerProps) {
  const bannerOpen = !consent.hasInteracted || preferencesOpen
  const lastUpdatedLabel = useMemo(() => {
    if (!consent.updatedAt) {
      return null
    }

    return new Date(consent.updatedAt).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  }, [consent.updatedAt])

  if (!bannerOpen) {
    return (
      <button
        type="button"
        onClick={onOpenPreferences}
        className="fixed right-4 bottom-4 z-[60] inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(255,248,246,0.98) 100%)',
          color: 'var(--color-foreground)',
          border: '1px solid rgba(255, 111, 97, 0.22)',
          backdropFilter: 'blur(20px)',
        }}
        aria-label="Open cookie settings"
      >
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: 'rgba(255, 111, 97, 0.12)', color: '#ff6f61' }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
          </svg>
        </span>
        Cookie settings
      </button>
    )
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 sm:px-5 sm:pb-5">
      <div
        className="mx-auto w-full max-w-[920px] overflow-hidden rounded-[2rem] border"
        style={{
          background:
            'linear-gradient(140deg, rgba(255,255,255,0.97) 0%, rgba(255,249,247,0.98) 54%, rgba(255,241,237,0.99) 100%)',
          borderColor: 'rgba(255, 111, 97, 0.18)',
          boxShadow: '0 28px 80px rgba(0, 0, 0, 0.18)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.35fr_0.95fr] lg:p-7">
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{
                    backgroundColor: 'rgba(255, 111, 97, 0.1)',
                    color: '#ff6f61',
                  }}
                >
                  Privacy Choices
                </div>
                <div className="space-y-2">
                  <h2 className="font-heading text-2xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-[2rem]">
                    Choose how Stumbnail measures site usage.
                  </h2>
                  <p className="max-w-[58ch] text-sm leading-7 text-[var(--color-text-muted)] sm:text-[0.98rem]">
                    Essential cookies stay on so the site can work. Optional analytics help us
                    understand page performance and feature usage. We keep advertising-related
                    consent denied because this site does not use advertising cookies.
                  </p>
                </div>
              </div>

              {consent.hasInteracted ? (
                <button
                  type="button"
                  onClick={onClosePreferences}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  style={{
                    backgroundColor: 'rgba(var(--color-ink-rgb), 0.05)',
                    color: 'var(--color-foreground)',
                  }}
                  aria-label="Close cookie settings"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              ) : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div
                className="rounded-[1.5rem] border p-4"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  borderColor: 'rgba(var(--color-ink-rgb), 0.08)',
                }}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-foreground)]">
                      Essential cookies
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Required for security and core site behavior.
                    </p>
                  </div>
                  <CookieToggle checked disabled />
                </div>
                <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                  Includes session integrity, protection against abuse, and storing this privacy
                  preference after you choose.
                </p>
              </div>

              <div
                className="rounded-[1.5rem] border p-4"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  borderColor: analyticsEnabled
                    ? 'rgba(255, 111, 97, 0.22)'
                    : 'rgba(var(--color-ink-rgb), 0.08)',
                }}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-foreground)]">
                      Analytics cookies
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Optional insights for traffic, flows, and product usage.
                    </p>
                  </div>
                  <CookieToggle checked={analyticsEnabled} onChange={onAnalyticsChange} />
                </div>
                <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                  Controls Google Consent Mode analytics storage and whether Vercel/Firebase
                  analytics run in the browser.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)]">
              <Link
                href="/cookies"
                className="font-semibold text-[#ff6f61] transition-opacity hover:opacity-70"
              >
                Cookie Policy
              </Link>
              <span className="hidden h-1 w-1 rounded-full bg-[rgba(var(--color-ink-rgb),0.25)] sm:block" />
              <Link
                href="/privacy"
                className="font-semibold text-[#ff6f61] transition-opacity hover:opacity-70"
              >
                Privacy Policy
              </Link>
              {lastUpdatedLabel ? (
                <>
                  <span className="hidden h-1 w-1 rounded-full bg-[rgba(var(--color-ink-rgb),0.25)] sm:block" />
                  <span>Saved: {lastUpdatedLabel}</span>
                </>
              ) : null}
            </div>
          </div>

          <div
            className="flex flex-col justify-between rounded-[1.75rem] border p-5"
            style={{
              background:
                'linear-gradient(160deg, rgba(255,111,97,0.08) 0%, rgba(255,255,255,0.62) 42%, rgba(255,255,255,0.92) 100%)',
              borderColor: 'rgba(255, 111, 97, 0.16)',
            }}
          >
            <div className="space-y-3">
              <p className="font-heading text-xl font-semibold text-[var(--color-foreground)]">
                Current setup
              </p>
              <ul className="space-y-3 text-sm leading-6 text-[var(--color-text-muted)]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#ff6f61]" />
                  Google Consent Mode v2 starts with denied defaults before measurement commands.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#ff6f61]" />
                  Advertising-related consent stays denied unless the product changes policy later.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#ff6f61]" />
                  Your choice is stored locally and reused on future page loads.
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button variant="ghost" size="md" onClick={onRejectOptional}>
                Reject optional
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => onSaveConsent(analyticsEnabled)}
              >
                Save choices
              </Button>
              <Button variant="primary" size="md" onClick={onAcceptAnalytics}>
                Allow analytics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
