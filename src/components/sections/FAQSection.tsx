'use client'

import { useState } from 'react'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "What does your thumbnail creator actually do?",
        answer: "We're an AI YouTube thumbnail generator that turns your ideas into click-worthy visuals in seconds. Just describe what you want or paste your video title, and our AI generates a clean, creator-ready thumbnail. You can adjust colors, personas, text, and layout without starting over. It's built to give you fast results while keeping full creative control in your hands."
    },
    {
        question: "Do I need design skills to use this?",
        answer: "Not at all. The whole point is that you don't need to know Photoshop or spend hours learning design software. If you can type a sentence, you can make a thumbnail. Our thumbnail maker AI handles the heavy lifting like composition, style, and readability so you can focus on your content."
    },
    {
        question: "What's the right YouTube thumbnail size?",
        answer: "The recommended YouTube thumbnail size is 1280 × 720 pixels with a 16:9 aspect ratio. This is the standard that YouTube expects, and all thumbnails we generate follow this spec automatically. You don't need to resize anything. What you download is ready to upload."
    },
    {
        question: "Can I generate a thumbnail from my video?",
        answer: "Yes. You can generate a thumbnail from video by giving us context about what your video covers. Describe the topic, the vibe, or paste your title and we'll create a thumbnail that fits. You're not limited to screenshots; you get original, AI-generated visuals designed for clicks."
    },
    {
        question: "Is this free? What does the free plan include?",
        answer: "We have a free tier that lets you try the AI thumbnail generator free with limited credits. It's enough to test the tool and see if it fits your workflow. If you need more like higher volume, priority rendering, or team features, we have paid plans that scale with your needs."
    },
    {
        question: "Can I use this for gaming thumbnails?",
        answer: "Absolutely. We support gaming thumbnail creation for any game like Minecraft, Fortnite, Call of Duty, whatever you play. Just describe the scene or vibe you want, and the AI generates something that fits the energy of gaming content."
    },
    {
        question: "Do you have thumbnail templates I can use?",
        answer: "We take a different approach. Instead of static YouTube thumbnail templates, our AI generates fresh designs based on your input every time. This means your thumbnails don't look like everyone else's, and you're not stuck tweaking a template that doesn't quite fit."
    },
    {
        question: "Can I add text to my thumbnails?",
        answer: "Yes. Our thumbnail text generator lets you add bold, readable text directly on your thumbnail. You control the wording, size, and placement. The AI suggests layouts that keep text legible even at small sizes because that's where most people see thumbnails first."
    },
    {
        question: "How is this different from Canva or Photoshop?",
        answer: "Canva and Photoshop are general design tools. We're built specifically for YouTube creators. Our AI thumbnail maker understands what makes thumbnails click like faces, contrast, and text placement, then generates designs with that in mind. No templates to dig through, no learning curve. Just describe and generate."
    },
]

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
                                className={`overflow-hidden transition-all duration-200 ${
                                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
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
