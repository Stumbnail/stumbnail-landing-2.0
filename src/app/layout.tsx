import type { Metadata } from 'next'
import { spaceGrotesk, lexend, merriweather } from './fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import { StructuredData } from '@/components/seo/StructuredData'
import './globals.css'

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Lexend:wght@100..900&family=Merriweather:wght@300;400;700;900&display=swap"
        />
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
      <body className={`${spaceGrotesk.variable} ${lexend.variable} ${merriweather.variable} antialiased`}>
        <ThemeProvider>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
