import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing - AI YouTube Thumbnail Generator | Stumbnail',
    description: 'Affordable pricing for the best AI thumbnail generator. Create professional YouTube thumbnails with our AI thumbnail maker. Choose a plan that fits your workflow.',
    keywords: 'AI thumbnail generator pricing, YouTube thumbnail maker cost, AI thumbnail creator price, thumbnail generator subscription, affordable thumbnail maker',
    alternates: {
        canonical: 'https://stumbnail.com/pricing',
    },
    openGraph: {
        title: 'Pricing - AI YouTube Thumbnail Generator | Stumbnail',
        description: 'Affordable pricing for the best AI thumbnail generator. Create professional YouTube thumbnails with our AI thumbnail maker. Choose a plan that fits your workflow.',
        url: 'https://stumbnail.com/pricing',
        type: 'website',
    },
}

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
