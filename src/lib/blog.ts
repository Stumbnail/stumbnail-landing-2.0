import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const POSTS_PER_PAGE = 6

export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    author: string
    coverImage?: string
    tags: string[]
    content: string
    readingTime: number
}

export interface BlogPostMeta {
    slug: string
    title: string
    description: string
    date: string
    author: string
    coverImage?: string
    tags: string[]
    readingTime: number
}

function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
}

export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return []
    }

    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx') && !file.startsWith('_'))

    const posts = files.map(file => {
        const slug = file.replace('.mdx', '')
        const filePath = path.join(BLOG_DIR, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)

        return {
            slug,
            title: data.title || 'Untitled',
            description: data.description || '',
            date: data.date || new Date().toISOString(),
            author: 'Stumbnail Team',
            coverImage: data.coverImage,
            tags: data.tags || [],
            readingTime: calculateReadingTime(content),
        }
    })

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
        return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        author: 'Stumbnail Team',
        coverImage: data.coverImage,
        tags: data.tags || [],
        content,
        readingTime: calculateReadingTime(content),
    }
}

export function getPaginatedPosts(page: number = 1): {
    posts: BlogPostMeta[]
    totalPages: number
    currentPage: number
} {
    const allPosts = getAllPosts()
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
    const startIndex = (page - 1) * POSTS_PER_PAGE
    const posts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

    return {
        posts,
        totalPages,
        currentPage: page,
    }
}

export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return []
    }

    return fs.readdirSync(BLOG_DIR)
        .filter(file => file.endsWith('.mdx') && !file.startsWith('_'))
        .map(file => file.replace('.mdx', ''))
}
