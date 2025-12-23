'use client';

import React from 'react';

export const MultiModelIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="multi-model-icon"
        >
            <defs>
                {/* Primary brand gradient */}
                <linearGradient id="mm-brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="50%" stopColor="#FF8A7A" />
                    <stop offset="100%" stopColor="#FFB4AB" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="mm-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Inner shadow */}
                <filter id="mm-inner-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feOffset dx="0" dy="2" />
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
                    <feFlood floodColor="#000000" floodOpacity="0.3" />
                    <feComposite in2="shadowDiff" operator="in" />
                    <feComposite in2="SourceGraphic" operator="over" />
                </filter>

                {/* Radial glow for center */}
                <radialGradient id="mm-center-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#FF6F61" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FF6F61" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Background glow circle */}
            <circle cx="40" cy="40" r="38" fill="url(#mm-center-glow)" opacity="0.3" />

            {/* Outer decorative ring */}
            <circle
                cx="40" cy="40" r="36"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.1"
                fill="none"
                strokeDasharray="4 6"
            />

            {/* Middle decorative ring */}
            <circle
                cx="40" cy="40" r="28"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.15"
                fill="none"
                strokeDasharray="2 4"
            />

            {/* Connection lines to nodes - with gradient stroke effect */}
            <g opacity="0.6">
                {/* Top node connection */}
                <path d="M40 28 L40 12" stroke="url(#mm-brand-gradient)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="40" cy="12" r="1" fill="#FF6F61" />

                {/* Top-right node connection */}
                <path d="M52 32 L66 20" stroke="url(#mm-brand-gradient)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="66" cy="20" r="1" fill="#FF6F61" />

                {/* Bottom-right node connection */}
                <path d="M52 48 L66 60" stroke="url(#mm-brand-gradient)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="66" cy="60" r="1" fill="#FF6F61" />

                {/* Bottom node connection */}
                <path d="M40 52 L40 68" stroke="url(#mm-brand-gradient)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="40" cy="68" r="1" fill="#FF6F61" />

                {/* Bottom-left node connection */}
                <path d="M28 48 L14 60" stroke="url(#mm-brand-gradient)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="14" cy="60" r="1" fill="#FF6F61" />

                {/* Top-left node connection */}
                <path d="M28 32 L14 20" stroke="url(#mm-brand-gradient)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="14" cy="20" r="1" fill="#FF6F61" />
            </g>

            {/* Outer model nodes */}
            <g filter="url(#mm-inner-shadow)">
                {/* Top node */}
                <circle cx="40" cy="8" r="5" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1.5" />
                <circle cx="40" cy="8" r="2" fill="#FF6F61" />

                {/* Top-right node */}
                <circle cx="68" cy="18" r="5" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1.5" />
                <circle cx="68" cy="18" r="2" fill="#FF6F61" />

                {/* Bottom-right node */}
                <circle cx="68" cy="62" r="5" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1.5" />
                <circle cx="68" cy="62" r="2" fill="#FF6F61" />

                {/* Bottom node */}
                <circle cx="40" cy="72" r="5" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1.5" />
                <circle cx="40" cy="72" r="2" fill="#FF6F61" />

                {/* Bottom-left node */}
                <circle cx="12" cy="62" r="5" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1.5" />
                <circle cx="12" cy="62" r="2" fill="#FF6F61" />

                {/* Top-left node */}
                <circle cx="12" cy="18" r="5" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1.5" />
                <circle cx="12" cy="18" r="2" fill="#FF6F61" />
            </g>

            {/* Central hub - main element */}
            <g filter="url(#mm-glow)">
                {/* Outer ring of hub */}
                <circle
                    cx="40" cy="40" r="14"
                    fill="currentColor"
                    fillOpacity="0.05"
                    stroke="url(#mm-brand-gradient)"
                    strokeWidth="2"
                />

                {/* Inner ring of hub */}
                <circle
                    cx="40" cy="40" r="10"
                    fill="currentColor"
                    fillOpacity="0.1"
                    stroke="#FF6F61"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                />

                {/* Core of hub */}
                <circle cx="40" cy="40" r="5" fill="url(#mm-brand-gradient)" />

                {/* Highlight on core */}
                <circle cx="38" cy="38" r="2" fill="#FFFFFF" fillOpacity="0.4" />
            </g>

            {/* Animated pulse rings */}
            <circle cx="40" cy="40" r="16" stroke="#FF6F61" strokeWidth="0.5" fill="none" opacity="0.3">
                <animate attributeName="r" values="16;22;16" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="40" r="20" stroke="#FF6F61" strokeWidth="0.5" fill="none" opacity="0.2">
                <animate attributeName="r" values="20;28;20" dur="3s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </circle>

            {/* Sparkle accents */}
            <g fill="#FF6F61">
                <path d="M72 40 L73 42 L75 43 L73 44 L72 46 L71 44 L69 43 L71 42 Z" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M8 40 L9 41.5 L10.5 42.5 L9 43.5 L8 45 L7 43.5 L5.5 42.5 L7 41.5 Z" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
                </path>
            </g>
        </svg>
    );
};
