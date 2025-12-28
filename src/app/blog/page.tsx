import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { IslandHeader } from '@/components/layout/IslandHeader'
import { Footer } from '@/components/layout/Footer'
import { getAllPosts, BlogPostMeta } from '@/lib/blog'

export const metadata: Metadata = {
    title: 'Blog - YouTube Thumbnail Tips & AI Design Guides | Stumbnail',
    description: 'Learn how to create stunning YouTube thumbnails with our expert guides. Tips on AI thumbnail generation, design best practices, and growing your YouTube channel.',
    keywords: [
        'youtube thumbnail tips',
        'thumbnail design guide',
        'ai thumbnail generator blog',
        'youtube creator tips',
        'thumbnail best practices',
        'youtube growth tips',
    ],
    openGraph: {
        title: 'Blog - YouTube Thumbnail Tips & AI Design Guides | Stumbnail',
        description: 'Learn how to create stunning YouTube thumbnails with our expert guides.',
        url: 'https://stumbnail.com/blog',
        type: 'website',
    },
    alternates: {
        canonical: 'https://stumbnail.com/blog',
    },
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function BlogCard({ post }: { post: BlogPostMeta }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl overflow-hidden transition-all duration-300"
            style={{ backgroundColor: 'var(--color-button-bg)' }}
        >
            {/* Featured Image */}
            <div className="relative w-full aspect-video overflow-hidden">
                {post.coverImage ? (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255, 111, 97, 0.1)' }}
                    >
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ff6f61"
                            strokeWidth="1.5"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs font-medium rounded-full"
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
                <h2
                    className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-[#ff6f61] transition-colors"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-foreground)',
                    }}
                >
                    {post.title}
                </h2>

                {/* Description */}
                <p
                    className="text-sm line-clamp-2 mb-4"
                    style={{
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-body)',
                        lineHeight: '1.6',
                    }}
                >
                    {post.description}
                </p>

                {/* Meta */}
                <div
                    className="flex items-center gap-3 text-sm"
                    style={{ color: 'var(--color-text-muted)' }}
                >
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
                </div>
            </div>
        </Link>
    )
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
            <IslandHeader />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                {/* Background glow */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        left: '50%',
                        top: '0',
                        transform: 'translateX(-50%)',
                        width: '800px',
                        height: '400px',
                        background: 'radial-gradient(ellipse at center, rgba(255, 111, 97, 0.12) 0%, transparent 70%)',
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
                        Stumbnail{' '}
                        <span style={{ color: '#ff6f61' }}>Blog</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            lineHeight: '1.7',
                        }}
                    >
                        Tips, tutorials, and insights on creating thumbnails that actually get clicked.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="pb-20 md:pb-28">
                <div className="max-w-6xl mx-auto px-6">
                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <p
                                className="text-lg"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-body)',
                                }}
                            >
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
