'use client';

import React from 'react';

export const SolutionIllustration = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className="solution-illustration"
        >
            <defs>
                {/* Glass effect gradient */}
                <linearGradient id="sol-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="currentColor" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
                </linearGradient>

                {/* Window header gradient */}
                <linearGradient id="sol-header" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                </linearGradient>

                {/* Brand gradient */}
                <linearGradient id="sol-brand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="100%" stopColor="#FF8A7A" />
                </linearGradient>

                {/* Success green gradient */}
                <linearGradient id="sol-success" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>

                {/* Radial glow */}
                <radialGradient id="sol-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FF6F61" stopOpacity="0" />
                </radialGradient>

                {/* UI Shadow */}
                <filter id="sol-ui-shadow" x="-20%" y="-20%" width="140%" height="150%">
                    <feDropShadow dx="0" dy="12" stdDeviation="24" floodColor="#000000" floodOpacity="0.15" />
                </filter>

                {/* Soft glow for success elements */}
                <filter id="sol-success-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Subtle blur */}
                <filter id="sol-blur">
                    <feGaussianBlur stdDeviation="2" />
                </filter>
            </defs>

            {/* Background */}
            <rect width="800" height="500" fill="currentColor" fillOpacity="0.02" />

            {/* Central glow */}
            <ellipse cx="400" cy="250" rx="350" ry="250" fill="url(#sol-glow)" />

            {/* ===== MAIN UI WINDOW ===== */}
            <g transform="translate(125, 60)" filter="url(#sol-ui-shadow)">

                {/* Window frame */}
                <rect width="550" height="380" rx="16" fill="url(#sol-glass)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />

                {/* Window header */}
                <path d="M0 16 C0 7.16 7.16 0 16 0 H534 C542.84 0 550 7.16 550 16 V48 H0 V16Z" fill="url(#sol-header)" />

                {/* Traffic lights */}
                <circle cx="24" cy="24" r="6" fill="#FF6F61" />
                <circle cx="44" cy="24" r="6" fill="currentColor" fillOpacity="0.2" />
                <circle cx="64" cy="24" r="6" fill="currentColor" fillOpacity="0.2" />

                {/* Window title */}
                <text x="275" y="28" textAnchor="middle" fill="currentColor" fontSize="12" fontFamily="sans-serif" opacity="0.5">Stumbnail Studio</text>

                {/* ===== LEFT SIDEBAR ===== */}
                <rect x="0" y="48" width="130" height="332" fill="currentColor" fillOpacity="0.03" />
                <line x1="130" y1="48" x2="130" y2="380" stroke="currentColor" strokeWidth="1" strokeOpacity="0.08" />

                {/* Sidebar items */}
                <g transform="translate(16, 70)">
                    {/* Active item */}
                    <rect x="0" y="0" width="98" height="36" rx="8" fill="#FF6F61" fillOpacity="0.15" />
                    <rect x="12" y="10" width="16" height="16" rx="4" fill="url(#sol-brand)" />
                    <rect x="36" y="12" width="50" height="6" rx="3" fill="currentColor" fillOpacity="0.4" />
                    <rect x="36" y="20" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />

                    {/* Inactive items */}
                    <g opacity="0.4">
                        <rect x="12" y="56" width="16" height="16" rx="4" fill="currentColor" fillOpacity="0.2" />
                        <rect x="36" y="58" width="45" height="6" rx="3" fill="currentColor" fillOpacity="0.3" />
                        <rect x="36" y="66" width="25" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />
                    </g>
                    <g opacity="0.3">
                        <rect x="12" y="96" width="16" height="16" rx="4" fill="currentColor" fillOpacity="0.2" />
                        <rect x="36" y="98" width="55" height="6" rx="3" fill="currentColor" fillOpacity="0.3" />
                        <rect x="36" y="106" width="35" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />
                    </g>
                    <g opacity="0.25">
                        <rect x="12" y="136" width="16" height="16" rx="4" fill="currentColor" fillOpacity="0.2" />
                        <rect x="36" y="138" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.3" />
                    </g>
                </g>

                {/* ===== MAIN CANVAS AREA ===== */}
                <g transform="translate(150, 68)">
                    {/* Canvas container */}
                    <rect width="380" height="240" rx="12" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="6 6" />

                    {/* Generated thumbnail preview */}
                    <g transform="translate(30, 20)">
                        <rect width="320" height="180" rx="8" fill="currentColor" fillOpacity="0.05" stroke="#FF6F61" strokeWidth="2" />

                        {/* Thumbnail content - abstract representation */}
                        {/* Background gradient bar */}
                        <rect x="0" y="0" width="320" height="180" rx="8" fill="url(#sol-brand)" fillOpacity="0.1" />

                        {/* Person silhouette */}
                        <ellipse cx="100" cy="150" rx="50" ry="60" fill="currentColor" fillOpacity="0.15" />
                        <circle cx="100" cy="80" r="35" fill="currentColor" fillOpacity="0.15" />

                        {/* Text overlay representation */}
                        <g transform="translate(180, 60)">
                            <rect x="0" y="0" width="120" height="16" rx="4" fill="#FF6F61" fillOpacity="0.8" />
                            <rect x="10" y="24" width="100" height="10" rx="3" fill="currentColor" fillOpacity="0.3" />
                            <rect x="20" y="40" width="80" height="8" rx="2" fill="currentColor" fillOpacity="0.2" />
                        </g>

                        {/* Decorative elements */}
                        <circle cx="280" cy="40" r="15" fill="#FF6F61" fillOpacity="0.3" />
                        <path d="M30 160 L60 130 L90 150 L130 110" stroke="#FF6F61" strokeWidth="2" fill="none" strokeOpacity="0.3" />
                    </g>
                </g>

                {/* ===== ACTION BAR ===== */}
                <g transform="translate(150, 320)">
                    {/* Input field */}
                    <rect x="0" y="0" width="240" height="44" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                    <text x="16" y="27" fill="currentColor" fontSize="13" fontFamily="sans-serif" opacity="0.4">Describe your thumbnail...</text>

                    {/* Generate button */}
                    <g transform="translate(260, 0)">
                        <rect width="120" height="44" rx="10" fill="url(#sol-brand)" />
                        <text x="60" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="sans-serif" fontWeight="600">Generate</text>

                        {/* Sparkle on button */}
                        <path d="M100 10 L102 14 L106 16 L102 18 L100 22 L98 18 L94 16 L98 14 Z" fill="#FFFFFF" fillOpacity="0.6">
                            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                        </path>
                    </g>
                </g>
            </g>

            {/* ===== SUCCESS INDICATOR ===== */}
            <g transform="translate(700, 100)" filter="url(#sol-success-glow)">
                <circle cx="0" cy="0" r="35" fill="url(#sol-success)" />
                <path d="M-12 0 L-4 8 L14 -10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                {/* Pulse rings */}
                <circle cx="0" cy="0" r="35" stroke="url(#sol-success)" strokeWidth="2" fill="none">
                    <animate attributeName="r" values="35;50;35" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* ===== FLOATING ELEMENTS ===== */}
            {/* Sparkles around the UI */}
            <g fill="#FF6F61">
                <path d="M100 150 L102 154 L106 156 L102 158 L100 162 L98 158 L94 156 L98 154 Z">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
                </path>
                <path d="M720 380 L722 384 L726 386 L722 388 L720 392 L718 388 L714 386 L718 384 Z">
                    <animate attributeName="opacity" values="0.6;0.15;0.6" dur="3s" repeatCount="indefinite" />
                </path>
                <circle cx="80" cy="400" r="3" fill="#FF6F61" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Time saved indicator */}
            <g transform="translate(60, 80)">
                <rect x="0" y="0" width="50" height="50" rx="12" fill="currentColor" fillOpacity="0.05" stroke="#FF6F61" strokeWidth="1" strokeOpacity="0.3" />
                <text x="25" y="30" textAnchor="middle" fill="#FF6F61" fontSize="16" fontWeight="bold">5m</text>
                <text x="25" y="42" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.5">saved</text>
            </g>

            {/* Decorative corner elements */}
            <g stroke="#FF6F61" strokeWidth="1.5" strokeOpacity="0.15" fill="none">
                <path d="M20 20 L20 50 L50 50" />
                <path d="M780 20 L780 50 L750 50" />
                <path d="M20 480 L20 450 L50 450" />
                <path d="M780 480 L780 450 L750 450" />
            </g>

            {/* Bottom text */}
            <text x="400" y="480" textAnchor="middle" fill="currentColor" fontSize="12" fontFamily="sans-serif" letterSpacing="6" opacity="0.08" fontWeight="bold">
                SIMPLE • FAST • BEAUTIFUL
            </text>
        </svg>
    );
};
