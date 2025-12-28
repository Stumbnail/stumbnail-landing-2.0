import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post.title} | Stumbnail Blog`,
        description: post.description,
        keywords: post.tags,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: post.coverImage ? [{ url: post.coverImage }] : [],
            url: `https://stumbnail.com/blog/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: post.coverImage ? [post.coverImage] : [],
        },
        alternates: {
            canonical: `https://stumbnail.com/blog/${slug}`,
        },
    }
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.coverImage,
        datePublished: post.date,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Stumbnail',
            logo: {
                '@type': 'ImageObject',
                url: 'https://stumbnail.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://stumbnail.com/blog/${slug}`,
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
                <IslandHeader />

                {/* Article Header */}
                <article className="pt-32 pb-20 md:pt-40">
                    <div className="max-w-3xl mx-auto px-6">
                        {/* Breadcrumb */}
                        <nav className="mb-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#ff6f61]"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Back to Blog
                            </Link>
                        </nav>

                        {/* Tags */}
                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm font-medium rounded-full"
                                        style={{
                                            backgroundColor: 'rgba(255, 111, 97, 0.12)',
                                            color: '#ff6f61',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                                lineHeight: '1.2',
                            }}
                        >
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div
                            className="flex flex-wrap items-center gap-4 mb-8 pb-8"
                            style={{
                                color: 'var(--color-text-muted)',
                                borderBottom: '1px solid var(--color-border)',
                            }}
                        >
                            <span className="font-medium">{post.author}</span>
                            <span>·</span>
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                            <span>·</span>
                            <span>{post.readingTime} min read</span>
                        </div>

                        {/* Featured Image */}
                        {post.coverImage && (
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Content */}
                        <MarkdownRenderer content={post.content} />

                        {/* CTA */}
                        <div
                            className="mt-12 p-8 rounded-2xl text-center"
                            style={{ backgroundColor: 'var(--color-button-bg)' }}
                        >
                            <h3
                                className="text-2xl font-bold mb-3"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-foreground)',
                                }}
                            >
                                Ready to Create Better Thumbnails?
                            </h3>
                            <p
                                className="mb-6"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                }}
                            >
                                Start using AI to generate click-worthy thumbnails in seconds.
                            </p>
                            <Link
                                href="https://app.stumbnail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                                style={{
                                    backgroundColor: '#ff6f61',
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                Try Stumbnail Free
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </article>

                <Footer />
            </main>
        </>
    )
}
