'use client';

import React from 'react';

export const TunedIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tuned-icon"
        >
            <defs>
                {/* Brand gradient */}
                <linearGradient id="tuned-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="100%" stopColor="#FFB4AB" />
                </linearGradient>

                {/* Frame gradient */}
                <linearGradient id="tuned-frame-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FF8A7A" stopOpacity="0.6" />
                </linearGradient>

                {/* Glow effect */}
                <filter id="tuned-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Drop shadow for frame */}
                <filter id="tuned-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.2" />
                </filter>

                {/* Diagonal hatch pattern for artistic touch */}
                <pattern id="tuned-hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.05" />
                </pattern>
            </defs>

            {/* Background subtle shape */}
            <rect x="4" y="4" width="72" height="72" rx="8" fill="url(#tuned-hatch)" />

            {/* Main thumbnail frame */}
            <g filter="url(#tuned-shadow)">
                {/* Outer frame border */}
                <rect
                    x="8" y="16"
                    width="64" height="48"
                    rx="6"
                    fill="currentColor"
                    fillOpacity="0.08"
                    stroke="url(#tuned-frame-gradient)"
                    strokeWidth="2"
                />

                {/* Inner canvas area */}
                <rect
                    x="12" y="20"
                    width="56" height="40"
                    rx="4"
                    fill="currentColor"
                    fillOpacity="0.04"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.1"
                />
            </g>

            {/* Rule of thirds grid - composition guides */}
            <g stroke="#FF6F61" strokeOpacity="0.25" strokeWidth="0.5" strokeDasharray="3 3">
                {/* Vertical lines */}
                <line x1="30.67" y1="20" x2="30.67" y2="60" />
                <line x1="49.33" y1="20" x2="49.33" y2="60" />
                {/* Horizontal lines */}
                <line x1="12" y1="33.33" x2="68" y2="33.33" />
                <line x1="12" y1="46.67" x2="68" y2="46.67" />
            </g>

            {/* Golden spiral hint in corner */}
            <path
                d="M50 35 Q58 35 58 43 Q58 48 53 48 Q50 48 50 45"
                stroke="#FF6F61"
                strokeWidth="1"
                strokeOpacity="0.3"
                fill="none"
            />

            {/* Subject focus area indicator */}
            <g filter="url(#tuned-glow)">
                <circle
                    cx="32" cy="40" r="10"
                    stroke="#FF6F61"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    fill="none"
                />
                <circle cx="32" cy="40" r="3" fill="url(#tuned-gradient)" />
            </g>

            {/* Aspect ratio indicator */}
            <g opacity="0.7">
                <rect x="58" y="50" width="8" height="6" rx="1" stroke="#FF6F61" strokeWidth="1" fill="none" />
                <text x="62" y="55" fontSize="4" fill="#FF6F61" textAnchor="middle" fontFamily="monospace">16:9</text>
            </g>

            {/* Optimization checkmark */}
            <g transform="translate(54, 22)">
                <circle cx="8" cy="8" r="7" fill="url(#tuned-gradient)" />
                <path d="M5 8 L7 10 L11 6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            {/* Sparkle effects */}
            <g fill="#FF6F61">
                {/* Large sparkle top-left */}
                <path d="M6 10 L7.5 13 L10.5 14.5 L7.5 16 L6 19 L4.5 16 L1.5 14.5 L4.5 13 Z">
                    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                </path>

                {/* Medium sparkle bottom-right */}
                <path d="M70 66 L71 68 L73 69 L71 70 L70 72 L69 70 L67 69 L69 68 Z">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                </path>

                {/* Small sparkle */}
                <circle cx="74" cy="12" r="1.5">
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Text/title placeholder lines */}
            <g opacity="0.3">
                <rect x="16" y="52" width="24" height="2" rx="1" fill="currentColor" />
                <rect x="16" y="56" width="16" height="2" rx="1" fill="currentColor" />
            </g>

            {/* Decorative corner brackets */}
            <g stroke="#FF6F61" strokeWidth="1.5" strokeOpacity="0.4" fill="none">
                <path d="M14 24 L14 20 L18 20" />
                <path d="M66 24 L66 20 L62 20" />
                <path d="M14 56 L14 60 L18 60" />
                <path d="M66 56 L66 60 L62 60" />
            </g>
        </svg>
    );
};
