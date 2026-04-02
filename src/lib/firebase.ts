import { getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported, setConsent, type Analytics } from 'firebase/analytics'
import { getGoogleConsentSettings, readStoredConsent } from '@/lib/consent'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase - prevent multiple initializations
let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

export const initFirebase = (): FirebaseApp => {
  if (!app && getApps().length === 0) {
    app = initializeApp(firebaseConfig)
  } else if (!app) {
    app = getApps()[0]
  }
  return app
}

export const initAnalytics = async (): Promise<Analytics | undefined> => {
  if (typeof window === 'undefined') return undefined

  const supported = await isSupported()
  if (!supported) return undefined

  if (!analytics) {
    const firebaseApp = initFirebase()
    analytics = getAnalytics(firebaseApp)
  }

  setConsent(getGoogleConsentSettings(readStoredConsent()))

  return analytics
}

export const syncAnalyticsConsent = async (enabled: boolean): Promise<void> => {
  if (typeof window === 'undefined') {
    return
  }

  const supported = await isSupported()
  if (!supported || (!enabled && !analytics)) {
    return
  }

  if (!analytics) {
    const firebaseApp = initFirebase()
    analytics = getAnalytics(firebaseApp)
  }

  setConsent(getGoogleConsentSettings({ analytics: enabled }))
}

export { app, analytics }
