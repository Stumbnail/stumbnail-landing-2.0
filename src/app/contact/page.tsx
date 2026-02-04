import { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'

export const metadata: Metadata = {
    title: 'Contact Us - Stumbnail',
    description: 'Get in touch with the Stumbnail team. We\'re here to help with questions, feedback, or feature requests.',
    alternates: {
        canonical: 'https://stumbnail.com/contact',
    },
    openGraph: {
        title: 'Contact Us - Stumbnail',
        description: 'Get in touch with the Stumbnail team. We\'re here to help with questions, feedback, or feature requests.',
        url: 'https://stumbnail.com/contact',
        type: 'website',
    },
}

export default function ContactPage() {
    return <ContactPageContent />
}
