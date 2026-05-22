import { Metadata } from 'next'
import Link from 'next/link'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
    title: 'Refund Policy - Stumbnail',
    description: 'Review Stumbnail refund eligibility, cancellation terms, and how to request help with prior purchases.',
    alternates: {
        canonical: 'https://stumbnail.com/refund-policy',
    },
    openGraph: {
        title: 'Refund Policy - Stumbnail',
        description: 'Refund eligibility, cancellation terms, and refund request information for Stumbnail purchases.',
        url: 'https://stumbnail.com/refund-policy',
        type: 'website',
    },
}

const policySections = [
    {
        title: 'Credit Purchases',
        body: (
            <>
                Credits are made available immediately after a successful payment. Credit purchases are
                non-refundable once purchased.
            </>
        ),
    },
    {
        title: 'Subscription Refunds',
        body: (
            <>
                Subscription refund requests may be eligible for a pro-rated refund when submitted within
                14 days of the charge and when minimal or no subscription credits have been used.
            </>
        ),
    },
    {
        title: 'Technical Issues',
        body: (
            <>
                If Stumbnail fails to deliver paid access or credits because of a technical problem on our
                end, we may provide a refund or credit compensation after reviewing the issue.
            </>
        ),
    },
    {
        title: 'Unauthorized Charges',
        body: (
            <>
                Confirmed unauthorized or fraudulent charges are eligible for a full refund. Contact us
                promptly if you believe a Stumbnail charge was not authorized.
            </>
        ),
    },
] as const

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
            <IslandHeader />

            <section className="px-4 pb-12 pt-32 sm:px-6 md:pb-16 md:pt-40">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase text-[#ff6f61]">
                        Legal
                    </p>
                    <h1
                        className="mb-5 text-4xl font-bold md:text-6xl"
                        style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}
                    >
                        Refund Policy
                    </h1>
                    <p
                        className="max-w-3xl text-base leading-8 md:text-lg"
                        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                    >
                        This policy explains refund eligibility for Stumbnail purchases and how to request
                        support for a charge.
                    </p>
                    <div
                        className="mt-6 rounded-2xl border p-5"
                        style={{
                            borderColor: 'rgba(255, 111, 97, 0.28)',
                            backgroundColor: 'rgba(255, 111, 97, 0.08)',
                        }}
                    >
                        <p className="m-0 font-semibold" style={{ color: 'var(--color-foreground)' }}>
                            New payments are temporarily unavailable.
                        </p>
                        <p className="mb-0 mt-2 leading-7" style={{ color: 'var(--color-text-muted)' }}>
                            We have temporarily stopped accepting new payments. This policy applies to
                            prior purchases and any existing charges that need review.
                        </p>
                    </div>
                    <p className="mt-5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Last updated: May 22, 2026
                    </p>
                </div>
            </section>

            <section className="px-4 pb-20 sm:px-6 md:pb-28">
                <div className="mx-auto grid max-w-4xl gap-6">
                    <div
                        className="rounded-2xl border p-6 md:p-8"
                        style={{
                            borderColor: 'var(--color-border)',
                            backgroundColor: 'var(--color-button-bg)',
                        }}
                    >
                        <h2
                            className="mb-4 text-2xl font-bold"
                            style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}
                        >
                            Refund Eligibility
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {policySections.map((section) => (
                                <article
                                    key={section.title}
                                    className="rounded-xl border p-5"
                                    style={{
                                        borderColor: 'var(--color-border)',
                                        backgroundColor: 'var(--color-background)',
                                    }}
                                >
                                    <h3
                                        className="mb-2 text-lg font-semibold"
                                        style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}
                                    >
                                        {section.title}
                                    </h3>
                                    <p className="m-0 leading-7" style={{ color: 'var(--color-text-muted)' }}>
                                        {section.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div
                        className="rounded-2xl border p-6 md:p-8"
                        style={{
                            borderColor: 'var(--color-border)',
                            backgroundColor: 'var(--color-button-bg)',
                        }}
                    >
                        <h2
                            className="mb-4 text-2xl font-bold"
                            style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}
                        >
                            Cancellations
                        </h2>
                        <p className="leading-8" style={{ color: 'var(--color-text-muted)' }}>
                            Canceling a subscription stops future renewal charges. Cancellation does not
                            automatically refund a completed charge or unused credits unless the charge
                            qualifies under this refund policy.
                        </p>
                        <p className="mb-0 leading-8" style={{ color: 'var(--color-text-muted)' }}>
                            Existing subscribers can manage billing from their Stumbnail account where
                            available or contact support for assistance.
                        </p>
                    </div>

                    <div
                        className="rounded-2xl border p-6 md:p-8"
                        style={{
                            borderColor: 'var(--color-border)',
                            backgroundColor: 'var(--color-button-bg)',
                        }}
                    >
                        <h2
                            className="mb-4 text-2xl font-bold"
                            style={{ color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}
                        >
                            Request a Refund
                        </h2>
                        <p className="leading-8" style={{ color: 'var(--color-text-muted)' }}>
                            Email{' '}
                            <a
                                href="mailto:Support@stumbnail.com"
                                className="font-semibold hover:underline"
                                style={{ color: '#ff6f61' }}
                            >
                                Support@stumbnail.com
                            </a>{' '}
                            with the account email, charge date, and reason for the request. We may ask for
                            details needed to locate and review the payment.
                        </p>
                        <p className="leading-8" style={{ color: 'var(--color-text-muted)' }}>
                            Approved refunds are returned to the original payment method where supported.
                            Bank and payment-provider processing times can vary after a refund is issued.
                        </p>
                        <p className="mb-0 leading-8" style={{ color: 'var(--color-text-muted)' }}>
                            This policy works alongside the{' '}
                            <Link href="/terms" className="font-semibold hover:underline" style={{ color: '#ff6f61' }}>
                                Terms of Service
                            </Link>
                            . For privacy questions, review our{' '}
                            <Link href="/privacy" className="font-semibold hover:underline" style={{ color: '#ff6f61' }}>
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
