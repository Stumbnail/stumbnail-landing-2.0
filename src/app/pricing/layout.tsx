import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing - AI YouTube Thumbnail Generator | Stumbnail',
    description: 'Affordable pricing for the best AI thumbnail generator. Create professional YouTube thumbnails with our AI thumbnail maker. Start free, upgrade when you need more.',
    keywords: 'AI thumbnail generator pricing, YouTube thumbnail maker cost, AI thumbnail creator price, thumbnail generator subscription, affordable thumbnail maker',
}

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
