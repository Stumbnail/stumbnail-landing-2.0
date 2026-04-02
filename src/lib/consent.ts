import type { ConsentSettings } from 'firebase/analytics'

export const CONSENT_STORAGE_KEY = 'stumbnail-consent-v1'
export const CONSENT_CHANGE_EVENT = 'stumbnail:consent-changed'

export type ConsentState = {
  essential: true
  analytics: boolean
  hasInteracted: boolean
  updatedAt: string | null
}

type StoredConsent = {
  analytics: boolean
  hasInteracted: boolean
  updatedAt: string
}

export const defaultConsentState: ConsentState = {
  essential: true,
  analytics: false,
  hasInteracted: false,
  updatedAt: null,
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function isBrowser() {
  return typeof window !== 'undefined'
}

function isStoredConsent(value: unknown): value is StoredConsent {
  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Partial<StoredConsent>

  return (
    typeof candidate.analytics === 'boolean' &&
    typeof candidate.hasInteracted === 'boolean' &&
    typeof candidate.updatedAt === 'string'
  )
}

export function buildConsentState(analytics: boolean): ConsentState {
  return {
    essential: true,
    analytics,
    hasInteracted: true,
    updatedAt: new Date().toISOString(),
  }
}

export function readStoredConsent(): ConsentState {
  if (!isBrowser()) {
    return defaultConsentState
  }

  try {
    const rawValue = window.localStorage.getItem(CONSENT_STORAGE_KEY)

    if (!rawValue) {
      return defaultConsentState
    }

    const parsedValue = JSON.parse(rawValue) as unknown

    if (!isStoredConsent(parsedValue)) {
      return defaultConsentState
    }

    return {
      essential: true,
      analytics: parsedValue.analytics,
      hasInteracted: parsedValue.hasInteracted,
      updatedAt: parsedValue.updatedAt,
    }
  } catch {
    return defaultConsentState
  }
}

export function hasAnalyticsConsent(): boolean {
  return readStoredConsent().analytics
}

export function persistConsent(consent: ConsentState) {
  if (!isBrowser()) {
    return
  }

  const storedConsent: StoredConsent = {
    analytics: consent.analytics,
    hasInteracted: consent.hasInteracted,
    updatedAt: consent.updatedAt ?? new Date().toISOString(),
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(storedConsent))
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: consent }))
}

export function getGoogleConsentSettings(
  consent: Pick<ConsentState, 'analytics'>
): ConsentSettings {
  return {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
  }
}

export function applyGoogleConsent(consent: Pick<ConsentState, 'analytics'>) {
  if (!isBrowser() || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('consent', 'update', getGoogleConsentSettings(consent))
}
