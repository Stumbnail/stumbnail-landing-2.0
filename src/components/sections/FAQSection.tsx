'use client'

import { useState } from 'react'
import { faqData } from '@/components/seo/StructuredData'

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
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
                backgroundColor: 'var(--color-background)',
            }}
        >
            {/* Background glow */}
            <div
                className="absolute pointer-events-none"
                style={{
                    right: '-200px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.1) 0%, transparent 70%)',
                }}
            />

            <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                        }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <p
                        className="text-lg md:text-xl"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-foreground-muted)',
                        }}
                    >
                        Everything you need to know about our AI thumbnail generator
                    </p>
                </div>

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
                                    className="text-base md:text-lg font-semibold"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-foreground)',
                                    }}
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
                                    className="px-5 md:px-6 pb-5 md:pb-6 text-base leading-relaxed"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        color: 'var(--color-foreground-muted)',
                                    }}
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
