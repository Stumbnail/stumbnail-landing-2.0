import type { Metadata } from 'next'
import { spaceGrotesk, lexend, merriweather } from './fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stumbnail.com'),
  title: 'AI YouTube Thumbnail Generator - Free | Stumbnail',
  description: 'Generate click-worthy YouTube thumbnails in seconds with AI. Canvas-based editor, no design skills needed. Start creating for free.',
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
    title: 'AI YouTube Thumbnail Generator - Free | Stumbnail',
    description: 'Generate click-worthy YouTube thumbnails in seconds with AI. Canvas-based editor, no design skills needed. Start creating for free.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI YouTube Thumbnail Generator - Free | Stumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI YouTube Thumbnail Generator - Free | Stumbnail',
    description: 'Generate click-worthy YouTube thumbnails in seconds with AI. Canvas-based editor, no design skills needed. Start creating for free.',
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
      <body className={`${spaceGrotesk.variable} ${lexend.variable} ${merriweather.variable} antialiased`}>
        <ThemeProvider>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
