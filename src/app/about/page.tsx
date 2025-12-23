import { Metadata } from 'next'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { ProblemIllustration } from '@/components/illustrations/ProblemIllustration'
import { SolutionIllustration } from '@/components/illustrations/SolutionIllustration'
import { CreatorIllustration } from '@/components/illustrations/CreatorIllustration'
import { MultiModelIcon } from '@/components/illustrations/MultiModelIcon'
import { TunedIcon } from '@/components/illustrations/TunedIcon'
import { AffordableIcon } from '@/components/illustrations/AffordableIcon'
import { CommunityThumbnail } from '@/components/illustrations/CommunityThumbnail'

export const metadata: Metadata = {
    title: 'About Us - Stumbnail',
    description: 'Learn about why we built Stumbnail and our mission to help creators make better thumbnails.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
            <IslandHeader />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                {/* Background glow */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        left: '50%',
                        top: '0',
                        transform: 'translateX(-50%)',
                        width: '800px',
                        height: '400px',
                        background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.15) 0%, transparent 70%)',
                    }}
                />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                            lineHeight: '1.1',
                        }}
                    >
                        Built for Creators{' '}
                        <br />
                        Who{' '}
                        <span style={{ color: '#ff6f61' }}>Demand Better</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        We&apos;re on a mission to simplify thumbnail creation with smart tools,
                        clean workflows, and results that actually look professional — without
                        the usual hassle.
                    </p>

                    <Button
                        variant="primary"
                        className="h-[56px] px-10 text-lg rounded-2xl"
                        icon="/assets/icons/sparkle.svg"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 600,
                            backgroundColor: '#ff6f61',
                        }}
                    >
                        Start Free Trial
                    </Button>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div
                            className="relative rounded-2xl overflow-hidden w-full h-[300px] md:h-[400px]"
                            style={{
                                backgroundColor: 'var(--color-button-bg)',
                            }}
                        >
                            <ProblemIllustration />
                        </div>

                        {/* Right - Content */}
                        <div>
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-6"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                }}
                            >
                                The <span style={{ color: '#ff6f61' }}>Problem</span>
                            </h2>

                            <p
                                className="text-base md:text-lg mb-6"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                    lineHeight: '1.8',
                                }}
                            >
                                As a YouTuber, I knew thumbnails were critical. But every single one was a headache:
                            </p>

                            <ul className="space-y-4">
                                {[
                                    'Spending 2-3 hours in Photoshop for one thumbnail',
                                    'Hiring designers was expensive and slow',
                                    'Generic AI tools created terrible results that looked nothing like YouTube thumbnails',
                                    'I just wanted to make videos, not become a graphic designer',
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                        style={{
                                            color: 'var(--color-text-muted)',
                                            fontFamily: 'var(--font-body)',
                                        }}
                                    >
                                        <span
                                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                            style={{ backgroundColor: 'rgba(255, 111, 97, 0.2)' }}
                                        >
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff6f61' }} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* So I Built Stumbnail Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                                style={{
                                    backgroundColor: 'rgba(255, 111, 97, 0.12)',
                                    border: '1px solid rgba(255, 111, 97, 0.2)',
                                }}
                            >
                                <span className="text-sm font-semibold" style={{ color: '#ff6f61', fontFamily: 'var(--font-heading)' }}>
                                    Simple Yet Powerful
                                </span>
                            </div>

                            <h2
                                className="text-3xl md:text-4xl font-bold mb-6"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                }}
                            >
                                So I Built <span style={{ color: '#ff6f61' }}>Stumbnail</span>
                            </h2>

                            <p
                                className="text-base md:text-lg mb-6"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                    lineHeight: '1.8',
                                }}
                            >
                                I started working on Stumbnail in late 2024. The goal was simple: make it stupidly easy
                                to create good thumbnails without design skills or burning through your budget.
                            </p>

                            <p
                                className="text-base md:text-lg"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                    lineHeight: '1.8',
                                }}
                            >
                                No fluff. No &quot;revolutionary AI technology&quot; marketing nonsense. Just a tool that works.
                            </p>
                        </div>

                        {/* Right - Product Mockup */}
                        <div
                            className="relative rounded-2xl overflow-hidden p-1"
                            style={{
                                backgroundColor: 'var(--color-button-bg)',
                            }}
                        >
                            <div
                                className="relative rounded-xl overflow-hidden w-full h-[300px] md:h-[360px]"
                            >
                                <SolutionIllustration />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Actually Makes Us Different Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            What Actually Makes Us{' '}
                            <span style={{ color: '#ff6f61' }}>Different</span>
                        </h2>
                        <p
                            className="text-base md:text-lg max-w-2xl mx-auto"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            We&apos;re a creator. Your time should go into making your content,
                            not fighting with Photoshop.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4">
                                <MultiModelIcon />
                            </div>
                            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                                Multiple AI Models in One Place
                            </h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>
                                We give you access to multiple AI image models: Flux, DALL-E, Stable Diffusion, and more. One subscription, all models. No need to juggle different tools or pay separately.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4">
                                <TunedIcon />
                            </div>
                            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                                Fine-Tuned for Thumbnails
                            </h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>
                                Generic AI image generators don&apos;t understand YouTube. We&apos;ve trained our system specifically for thumbnail best practices: the right compositions, text placements, and visual hooks that actually work.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-button-bg)' }}>
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4">
                                <AffordableIcon />
                            </div>
                            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-foreground)' }}>
                                Actually Affordable
                            </h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>
                                Hiring a designer costs $50-100+ per thumbnail. Using separate AI tools adds up. We&apos;ve priced Stumbnail so any creator can afford it - from beginners to full-time YouTubers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Am I Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-6"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                }}
                            >
                                Who <span style={{ color: '#ff6f61' }}>Am I?</span>
                            </h2>

                            <p
                                className="text-base md:text-lg mb-6"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                    lineHeight: '1.8',
                                }}
                            >
                                I&apos;m Ahmed, a Computer Science student working through a YouTube
                                journey. I&apos;ve been creating content across multiple YouTube
                                platforms: Flex, Meser and YouTube. I&apos;m struggling with thumbnails,
                                designs finally. I built this Stumbnail studio — in beta, but polished
                                and a viable quality editor I need.
                            </p>
                        </div>

                        {/* Right - Avatar/Illustration */}
                        <div className="flex justify-center">
                            <div
                                className="relative w-64 h-64 md:w-80 md:h-80"
                            >
                                <CreatorIllustration />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where We're Going Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Community Thumbnails */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative rounded-xl overflow-hidden aspect-video">
                                <CommunityThumbnail variant="gaming" />
                            </div>
                            <div className="relative rounded-xl overflow-hidden aspect-video">
                                <CommunityThumbnail variant="vlog" />
                            </div>
                            <div className="relative rounded-xl overflow-hidden aspect-video">
                                <CommunityThumbnail variant="reaction" />
                            </div>
                            <div className="relative rounded-xl overflow-hidden aspect-video">
                                <CommunityThumbnail variant="tech" />
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-6"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                }}
                            >
                                Where We&apos;re <span style={{ color: '#ff6f61' }}>Going</span>
                            </h2>

                            <p
                                className="text-base md:text-lg mb-6"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                    lineHeight: '1.8',
                                }}
                            >
                                Right now, Stumbnail is in an early growth phase. But nothing gets
                                even bigger. I want this to be the ultimate platform for the creators.
                            </p>

                            <p
                                className="text-base md:text-lg"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                    lineHeight: '1.8',
                                }}
                            >
                                Imagine being able to re-use templates, hire designers, or use AI to
                                analyze your thumbnails and get something better in seconds.
                                That&apos;s the goal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-foreground)',
                        }}
                    >
                        Ready to Create Better Thumbnails?
                    </h2>
                    <p
                        className="text-base md:text-lg max-w-2xl mx-auto mb-8"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                        }}
                    >
                        Join thousands of creators who are saving time and getting more clicks.
                    </p>
                    <Button
                        variant="primary"
                        className="h-[56px] px-10 text-lg rounded-2xl"
                        icon="/assets/icons/sparkle.svg"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 600,
                            backgroundColor: '#ff6f61',
                        }}
                    >
                        Start Free Trial
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
