'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react'
import { ConsentBanner } from '@/components/consent/ConsentBanner'
import {
  CONSENT_CHANGE_EVENT,
  applyGoogleConsent,
  buildConsentState,
  defaultConsentState,
  persistConsent,
  readStoredConsent,
  type ConsentState,
} from '@/lib/consent'

type ConsentContextValue = {
  consent: ConsentState
  preferencesOpen: boolean
  openPreferences: () => void
  closePreferences: () => void
  saveConsent: (analytics: boolean) => void
  rejectOptional: () => void
  acceptAnalytics: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

function subscribeToConsentStore(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange)
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange)

  return () => {
    window.removeEventListener('storage', onStoreChange)
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange)
  }
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const consent = useSyncExternalStore(
    subscribeToConsentStore,
    readStoredConsent,
    () => defaultConsentState
  )
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [draftAnalytics, setDraftAnalytics] = useState(defaultConsentState.analytics)

  const saveConsent = useCallback((analytics: boolean) => {
    const nextConsent = buildConsentState(analytics)

    persistConsent(nextConsent)
    applyGoogleConsent(nextConsent)
    setDraftAnalytics(nextConsent.analytics)
    setPreferencesOpen(false)
  }, [])

  const rejectOptional = useCallback(() => {
    saveConsent(false)
  }, [saveConsent])

  const acceptAnalytics = useCallback(() => {
    saveConsent(true)
  }, [saveConsent])

  const openPreferences = useCallback(() => {
    setDraftAnalytics(consent.analytics)
    setPreferencesOpen(true)
  }, [consent.analytics])

  const closePreferences = useCallback(() => {
    setDraftAnalytics(consent.analytics)
    setPreferencesOpen(false)
  }, [consent.analytics])

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      preferencesOpen,
      openPreferences,
      closePreferences,
      saveConsent,
      rejectOptional,
      acceptAnalytics,
    }),
    [
      acceptAnalytics,
      closePreferences,
      consent,
      openPreferences,
      preferencesOpen,
      rejectOptional,
      saveConsent,
    ]
  )

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <ConsentBanner
        consent={consent}
        analyticsEnabled={draftAnalytics}
        preferencesOpen={preferencesOpen}
        onOpenPreferences={openPreferences}
        onClosePreferences={closePreferences}
        onAnalyticsChange={setDraftAnalytics}
        onSaveConsent={saveConsent}
        onRejectOptional={rejectOptional}
        onAcceptAnalytics={acceptAnalytics}
      />
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const context = useContext(ConsentContext)

  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider')
  }

  return context
}
