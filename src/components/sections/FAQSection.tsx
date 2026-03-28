'use client'

import { useState } from 'react'
import { faqData } from '@/components/seo/StructuredData'
import { trackFaqExpand } from '@/lib/analytics'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface FAQItem {
    question: string
    answer: string
}

// Use the shared FAQ data from StructuredData
const faqs: FAQItem[] = faqData

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    )
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        const isOpening = openIndex !== index
        setOpenIndex(isOpening ? index : null)

        // Track FAQ expand (only when opening)
        if (isOpening) {
            trackFaqExpand(faqs[index].question)
        }
    }

    return (
        <section
            aria-labelledby="faq-title"
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background)',
            }}
        >
            <div className="landing-shell-narrow relative">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Frequently asked questions"
                    description="Everything you need to know about how Stumbnail fits into a thumbnail workflow."
                    titleId="faq-title"
                    className="mb-12"
                />

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden transition-all duration-200"
                            style={{
                                backgroundColor: 'var(--color-button-bg)',
                                border: '1px solid var(--color-border)',
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                            >
                                <span
                                    className="font-heading text-base font-semibold text-[var(--color-foreground)] md:text-lg"
                                >
                                    {faq.question}
                                </span>
                                <span style={{ color: '#ff6f61' }}>
                                    <ChevronIcon isOpen={openIndex === index} />
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                                    }`}
                            >
                                <p
                                    className="font-body px-5 pb-5 text-base leading-relaxed text-[var(--color-foreground-muted)] md:px-6 md:pb-6"
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
