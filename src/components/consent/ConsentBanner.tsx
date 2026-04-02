'use client'

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
  const showExpanded = preferencesOpen || consent.hasInteracted

  if (!bannerOpen) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 sm:px-5 sm:pb-5">
      <div
        className="mx-auto w-full max-w-[1100px] overflow-hidden rounded-[1.5rem] border"
        style={{
          background:
            'linear-gradient(140deg, rgba(255,255,255,0.97) 0%, rgba(255,250,248,0.99) 100%)',
          borderColor: 'rgba(255, 111, 97, 0.18)',
          boxShadow: '0 18px 55px rgba(0, 0, 0, 0.14)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className={showExpanded ? 'space-y-4 p-4 sm:p-5' : 'space-y-3 p-3 sm:p-4'}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h2
                className={`font-heading font-semibold text-[var(--color-foreground)] ${
                  showExpanded ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                }`}
              >
                Cookies
              </h2>
              <p
                className={`max-w-[52ch] text-[var(--color-text-muted)] ${
                  showExpanded ? 'text-sm leading-6' : 'text-xs leading-5 sm:text-sm'
                }`}
              >
                Essential cookies keep the site working. Analytics helps us improve it.
              </p>
            </div>

            {showExpanded ? (
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

          {showExpanded ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <div
                className="flex items-center justify-between rounded-[1.1rem] border px-4 py-3"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.76)',
                  borderColor: 'rgba(var(--color-ink-rgb), 0.08)',
                }}
              >
                <div>
                  <p className="text-sm font-semibold text-[var(--color-foreground)]">
                    Essential
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">Always on</p>
                </div>
                <CookieToggle checked disabled />
              </div>

              <div
                className="flex items-center justify-between rounded-[1.1rem] border px-4 py-3"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.76)',
                  borderColor: analyticsEnabled
                    ? 'rgba(255, 111, 97, 0.22)'
                    : 'rgba(var(--color-ink-rgb), 0.08)',
                }}
              >
                <div>
                  <p className="text-sm font-semibold text-[var(--color-foreground)]">
                    Analytics
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">Optional</p>
                </div>
                <CookieToggle checked={analyticsEnabled} onChange={onAnalyticsChange} />
              </div>
            </div>
          ) : null}

          {showExpanded ? (
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
            </div>
          ) : null}

          <div
            className={`flex gap-2 ${
              showExpanded
                ? 'flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-end'
                : 'flex-col sm:flex-row sm:items-center sm:justify-end'
            }`}
          >
            {!showExpanded ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenPreferences}
                className="min-w-[124px]"
                style={{
                  color: 'var(--color-text-muted)',
                  border: '1px solid rgba(var(--color-ink-rgb), 0.1)',
                  background: 'rgba(255,255,255,0.55)',
                }}
              >
                Manage
              </Button>
            ) : null}
            <Button
              variant="ghost"
              size="sm"
              onClick={onRejectOptional}
              className="min-w-[124px]"
              style={{
                color: 'var(--color-text-muted)',
                border: '1px solid rgba(var(--color-ink-rgb), 0.1)',
                background: 'rgba(255,255,255,0.55)',
              }}
            >
              Reject optional
            </Button>
            {showExpanded ? (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onSaveConsent(analyticsEnabled)}
                className="min-w-[124px]"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  color: 'var(--color-foreground)',
                  boxShadow: '0 0 0 1px rgba(var(--color-ink-rgb), 0.12)',
                }}
              >
                Save choices
              </Button>
            ) : null}
            <Button
              variant="primary"
              size="sm"
              onClick={onAcceptAnalytics}
              className="min-w-[124px]"
              style={{
                background: '#ff6f61',
                color: '#ffffff',
                boxShadow: '0 0 0 1px rgba(255, 111, 97, 0.18)',
              }}
            >
              Allow analytics
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
