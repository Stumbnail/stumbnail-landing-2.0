/**
 * Schema.org Structured Data Component
 * Provides JSON-LD structured data for SEO and rich snippets
 */

// FAQ data for reuse across components
export const faqData = [
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
        question: "Do you offer a free plan?",
        answer: "We’ve discontinued the free tier. With our small budget, we couldn’t fund it anymore, so we can’t keep providing free credits. We’re really sorry. You’re still welcome to try Stumbnail with a paid plan."
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

// Organization Schema
const organizationSchema = {
    "@type": "Organization",
    "@id": "https://stumbnail.com/#organization",
    "name": "Stumbnail",
    "url": "https://stumbnail.com",
    "logo": {
        "@type": "ImageObject",
        "url": "https://stumbnail.com/assets/logo.svg",
        "width": 512,
        "height": 512
    },
    "description": "Stumbnail is an AI-powered YouTube thumbnail generator that helps creators make click-worthy thumbnails in seconds.",
    "foundingDate": "2024",
    "sameAs": [
        "https://x.com/Stumbnail",
        "https://www.instagram.com/stumbnail.ai/",
        "https://www.facebook.com/stumbnail"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://stumbnail.com/contact"
    }
}

// WebSite Schema
const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://stumbnail.com/#website",
    "url": "https://stumbnail.com",
    "name": "Stumbnail",
    "description": "AI YouTube Thumbnail Generator - Create click-worthy thumbnails in seconds",
    "publisher": {
        "@id": "https://stumbnail.com/#organization"
    }
}

// SoftwareApplication Schema
const softwareSchema = {
    "@type": "SoftwareApplication",
    "@id": "https://stumbnail.com/#software",
    "name": "Stumbnail",
    "applicationCategory": "DesignApplication",
    "applicationSubCategory": "AI Thumbnail Generator",
    "operatingSystem": "Web Browser",
    "description": "AI-powered YouTube thumbnail generator with canvas-based editor. Create professional thumbnails in seconds without design skills.",
    "url": "https://stumbnail.com",
    "screenshot": "https://stumbnail.com/assets/opengraph.png",
    "featureList": [
        "AI-powered thumbnail generation",
        "Canvas-based editor",
        "Smart Merge technology",
        "Text overlay with AI suggestions",
        "YouTube-optimized 1280x720 output",
        "No design skills required"
    ],
    "offers": [
        {
            "@type": "Offer",
            "name": "Starter Plan",
            "price": "4",
            "priceCurrency": "USD",
            "url": "https://stumbnail.com/pricing",
            "availability": "https://schema.org/InStock"
        },
        {
            "@type": "Offer",
            "name": "Creator Plan",
            "price": "9.99",
            "priceCurrency": "USD",
            "url": "https://stumbnail.com/pricing",
            "availability": "https://schema.org/InStock"
        }
    ],
    "provider": {
        "@id": "https://stumbnail.com/#organization"
    }
}

// Combined structured data graph
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        organizationSchema,
        websiteSchema,
        softwareSchema
    ]
}

export function StructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData, null, 0)
            }}
        />
    )
}

// Export individual schemas for use on other pages
export { organizationSchema, websiteSchema, softwareSchema }
