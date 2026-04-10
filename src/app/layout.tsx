import type { Metadata } from 'next'
import Script from 'next/script'
import { Caveat, Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ConsentProvider } from '@/components/providers/ConsentProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import { StructuredData } from '@/components/seo/StructuredData'
import { CONSENT_STORAGE_KEY } from '@/lib/consent'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

const googleTagId = 'GT-T5P2FWBK'

const consentBootstrapScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  try {
    var rawConsent = window.localStorage.getItem('${CONSENT_STORAGE_KEY}');
    if (rawConsent) {
      var parsedConsent = JSON.parse(rawConsent);
      if (parsedConsent && parsedConsent.hasInteracted === true) {
        gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: parsedConsent.analytics ? 'granted' : 'denied'
        });
      }
    }
  } catch (error) {}
`

export const metadata: Metadata = {
  metadataBase: new URL('https://stumbnail.com'),
  title: 'AI YouTube Thumbnail Generator | Stumbnail',
  description: 'Generate click-worthy YouTube thumbnails in seconds with AI. Canvas-based editor, no design skills needed. Choose a plan and start creating.',
  keywords: [
    'ai youtube thumbnail generator',
    'youtube thumbnail generator',
    'youtube thumbnail ai generator',
    'thumbnail maker ai',
    'youtube thumbnail ai',
    'best ai thumbnail generator',
    'thumbnail text generator',
    'youtube thumbnail size',
    'youtube thumbnail templates',
    'ai thumbnail maker',
    'clickbait thumbnail generator',
  ],
  authors: [{ name: 'Stumbnail' }],
  creator: 'Stumbnail',
  publisher: 'Stumbnail',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stumbnail.com',
    siteName: 'Stumbnail',
    title: 'AI YouTube Thumbnail Generator | Stumbnail',
    description: 'Generate click-worthy YouTube thumbnails in seconds with AI. Canvas-based editor, no design skills needed. Choose a plan and start creating.',
    images: [
      {
        url: '/assets/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'AI YouTube Thumbnail Generator | Stumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI YouTube Thumbnail Generator | Stumbnail',
    description: 'Generate click-worthy YouTube thumbnails in seconds with AI. Canvas-based editor, no design skills needed. Choose a plan and start creating.',
    images: ['/assets/opengraph.png'],
    creator: '@stumbnail',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-consent-bootstrap" strategy="beforeInteractive">
          {consentBootstrapScript}
        </Script>
        <Script
          id="google-tag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="beforeInteractive"
        />
        <Script id="google-tag-config" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} ${caveat.variable}`}>
        <ThemeProvider>
          <ConsentProvider>
            <AnalyticsProvider>{children}</AnalyticsProvider>
          </ConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
