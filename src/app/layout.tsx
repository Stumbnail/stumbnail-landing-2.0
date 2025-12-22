import type { Metadata } from 'next'
import { spaceGrotesk, lexend } from './fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stumbnail - AI YouTube Thumbnail Generator',
  description: 'Create stunning YouTube thumbnails in seconds with AI-powered technology',
  openGraph: {
    title: 'Stumbnail - AI YouTube Thumbnail Generator',
    description: 'Create stunning YouTube thumbnails in seconds with AI-powered technology',
  },
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
