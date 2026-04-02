'use client'

import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { useConsent } from '@/components/providers/ConsentProvider'
import { initAnalytics, syncAnalyticsConsent } from '@/lib/firebase'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const {
    consent: { analytics },
  } = useConsent()

  useEffect(() => {
    syncAnalyticsConsent(analytics).catch((error) => {
      console.warn('Firebase consent synchronization failed:', error)
    })

    if (!analytics) {
      return
    }

    initAnalytics().catch((error) => {
      console.warn('Firebase Analytics initialization failed:', error)
    })
  }, [analytics])

  return (
    <>
      {children}
      {analytics ? <Analytics /> : null}
    </>
  )
}
