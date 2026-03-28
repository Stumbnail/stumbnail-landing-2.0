import type { Metadata } from 'next'
import { Caveat, Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import { StructuredData } from '@/components/seo/StructuredData'
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
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
