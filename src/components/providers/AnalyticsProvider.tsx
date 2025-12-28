'use client';

import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { initAnalytics } from '@/lib/firebase';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Firebase Analytics on mount
        initAnalytics().catch((error) => {
            console.warn('Firebase Analytics initialization failed:', error);
        });
    }, []);

    return (
        <>
            {children}
            {/* Vercel Analytics - automatically tracks page views */}
            <Analytics />
        </>
    );
}
