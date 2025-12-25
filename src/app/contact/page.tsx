import { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'

export const metadata: Metadata = {
    title: 'Contact Us - Stumbnail',
    description: 'Get in touch with the Stumbnail team. We\'re here to help with questions, feedback, or feature requests.',
}

export default function ContactPage() {
    return <ContactPageContent />
}
