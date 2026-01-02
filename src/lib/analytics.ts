/**
 * Analytics utility for tracking custom events
 * Sends events to both Vercel Analytics and Google Analytics
 */

import { track } from '@vercel/analytics';

// Event properties type
type EventProperties = Record<string, string | number | boolean | null | undefined>;

/**
 * Track a custom event to both Vercel Analytics and Google Analytics
 */
export function trackEvent(eventName: string, properties?: EventProperties): void {
    // Only track on client side
    if (typeof window === 'undefined') return;

    // Send to Vercel Analytics
    try {
        track(eventName, properties);
    } catch (error) {
        console.warn('[Analytics] Vercel tracking failed:', error);
    }

    // Send to Google Analytics (gtag)
    try {
        if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag(
                'event',
                eventName,
                properties
            );
        }
    } catch (error) {
        console.warn('[Analytics] GA tracking failed:', error);
    }
}

// Pre-defined event helpers for type safety

// Landing Page Events
export const trackHeroCtaClick = (button: 'trial' | 'pricing') =>
    trackEvent('hero_cta_click', { button });

export const trackPricingView = (source: 'nav' | 'cta' | 'scroll') =>
    trackEvent('pricing_view', { source });

export const trackPricingPlanClick = (plan: string, price: string) =>
    trackEvent('pricing_plan_click', { plan, price });

export const trackExternalLinkClick = (url: string) =>
    trackEvent('external_link_click', { url });

export const trackToolUse = (tool: 'downloader' | 'previewer') =>
    trackEvent('tool_use', { tool });

export const trackToolToSignup = (tool: string) =>
    trackEvent('tool_to_signup', { tool });

export const trackFaqExpand = (question: string) =>
    trackEvent('faq_expand', { question });

export const trackContactFormSubmit = (type: string) =>
    trackEvent('contact_form_submit', { type });
