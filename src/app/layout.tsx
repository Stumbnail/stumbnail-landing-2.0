import type { Metadata } from 'next'
import { spaceGrotesk, lexend } from './fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stumbnail.com'),
  title: 'Stumbnail - AI YouTube Thumbnail Generator | Create Click-Worthy Thumbnails in Seconds',
  description: 'Create professional YouTube thumbnails with AI. Free thumbnail maker with Smart Merge, prompt generation, and video analysis. No design skills needed. Try free today.',
  keywords: [
    'ai youtube thumbnail generator',
    'youtube thumbnail generator',
    'youtube thumbnail ai generator',
    'thumbnail maker ai',
    'free ai thumbnail maker',
    'ai thumbnail generator free',
    'youtube thumbnail ai',
    'best ai thumbnail generator',
    'thumbnail text generator',
    'free ai thumbnail generator',
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
    title: 'Stumbnail - AI YouTube Thumbnail Generator | Create Click-Worthy Thumbnails in Seconds',
    description: 'Create professional YouTube thumbnails with AI. Free thumbnail maker with Smart Merge, prompt generation, and video analysis. No design skills needed. Try free today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stumbnail - AI YouTube Thumbnail Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stumbnail - AI YouTube Thumbnail Generator',
    description: 'Create professional YouTube thumbnails with AI. Free thumbnail maker with Smart Merge, prompt generation, and video analysis. No design skills needed.',
    images: ['/og-image.png'],
    creator: '@stumbnail',
  },
  alternates: {
    canonical: 'https://stumbnail.com',
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
      </head>
      <body className={`${spaceGrotesk.variable} ${lexend.variable} antialiased`}>
        <ThemeProvider>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
