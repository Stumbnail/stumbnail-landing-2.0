'use client';

import React from 'react';

export const ProblemIllustration = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className="problem-illustration"
        >
            <defs>
                {/* Grid pattern that adapts to theme */}
                <pattern id="prob-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
                </pattern>

                {/* Radial vignette */}
                <radialGradient id="prob-vignette" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
                </radialGradient>

                {/* Chaos gradient */}
                <linearGradient id="prob-chaos-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#FF6F61" stopOpacity="0" />
                </linearGradient>

                {/* Error red gradient */}
                <linearGradient id="prob-error-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4444" />
                    <stop offset="100%" stopColor="#FF6F61" />
                </linearGradient>

                {/* Shadow filter */}
                <filter id="prob-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.3" />
                </filter>

                {/* Blur for background elements */}
                <filter id="prob-blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" />
                </filter>

                {/* Noise texture */}
                <filter id="prob-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                    <feComposite in="SourceGraphic" in2="noise" operator="in" />
                </filter>
            </defs>

            {/* Background */}
            <rect width="800" height="500" fill="currentColor" fillOpacity="0.03" />
            <rect width="800" height="500" fill="url(#prob-grid)" />
            <rect width="800" height="500" fill="url(#prob-vignette)" />

            {/* Chaos overlay glow */}
            <ellipse cx="400" cy="250" rx="400" ry="300" fill="url(#prob-chaos-gradient)" />

            {/* Scattered chaotic elements */}
            <g transform="translate(400, 250)">

                {/* ===== ELEMENT 1: Overflowing Layer Stack ===== */}
                <g transform="translate(-180, -80)" filter="url(#prob-shadow)">
                    {/* Multiple misaligned layers representing Photoshop hell */}
                    <rect x="0" y="40" width="140" height="90" rx="4" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" transform="rotate(-12)" />
                    <rect x="10" y="30" width="140" height="90" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" transform="rotate(-6)" />
                    <rect x="20" y="20" width="140" height="90" rx="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" transform="rotate(3)" />
                    <rect x="30" y="10" width="140" height="90" rx="4" fill="currentColor" fillOpacity="0.15" stroke="#FF6F61" strokeWidth="1.5" transform="rotate(-2)" />

                    {/* Layer panel icons */}
                    <g transform="translate(40, 25) rotate(-2)" opacity="0.5">
                        <rect x="0" y="0" width="8" height="8" rx="1" fill="currentColor" />
                        <rect x="12" y="0" width="60" height="4" rx="1" fill="currentColor" />
                        <rect x="12" y="6" width="40" height="2" rx="1" fill="currentColor" fillOpacity="0.5" />
                    </g>
                </g>

                {/* ===== ELEMENT 2: Time Wasted Clock ===== */}
                <g transform="translate(160, -110)">
                    {/* Clock face */}
                    <circle cx="0" cy="0" r="50" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <circle cx="0" cy="0" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 8" />

                    {/* Clock center */}
                    <circle cx="0" cy="0" r="4" fill="#FF6F61" />

                    {/* Hour markers */}
                    <g stroke="currentColor" strokeWidth="2" strokeOpacity="0.3">
                        <line x1="0" y1="-42" x2="0" y2="-36" />
                        <line x1="42" y1="0" x2="36" y2="0" />
                        <line x1="0" y1="42" x2="0" y2="36" />
                        <line x1="-42" y1="0" x2="-36" y2="0" />
                    </g>

                    {/* Clock hands - spinning chaos */}
                    <line x1="0" y1="0" x2="0" y2="-30" stroke="#FF6F61" strokeWidth="3" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1="0" x2="20" y2="0" stroke="#FF6F61" strokeWidth="2" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="60s" repeatCount="indefinite" />
                    </line>

                    {/* "2-3 hrs" text */}
                    <text x="0" y="70" textAnchor="middle" fill="#FF6F61" fontSize="14" fontFamily="sans-serif" fontWeight="bold" opacity="0.8">2-3 HRS</text>
                </g>

                {/* ===== ELEMENT 3: Money Flying Away ===== */}
                <g transform="translate(180, 60)">
                    {/* Dollar bills floating away */}
                    <g opacity="0.6">
                        <rect x="0" y="0" width="50" height="25" rx="2" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1" transform="rotate(15)">
                            <animateTransform attributeName="transform" type="translate" values="0,0; 20,-30; 0,0" dur="4s" repeatCount="indefinite" />
                        </rect>
                        <text x="25" y="15" textAnchor="middle" fill="#FF6F61" fontSize="12" fontWeight="bold" transform="rotate(15)">$</text>
                    </g>
                    <g opacity="0.4" transform="translate(30, 20)">
                        <rect x="0" y="0" width="50" height="25" rx="2" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1" transform="rotate(35)">
                            <animateTransform attributeName="transform" type="translate" values="0,0; 35,-40; 0,0" dur="5s" repeatCount="indefinite" />
                        </rect>
                        <text x="25" y="15" textAnchor="middle" fill="#FF6F61" fontSize="12" fontWeight="bold" transform="rotate(35)">$</text>
                    </g>
                    <g opacity="0.3" transform="translate(50, 40)">
                        <rect x="0" y="0" width="50" height="25" rx="2" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1" transform="rotate(50)">
                            <animateTransform attributeName="transform" type="translate" values="0,0; 45,-35; 0,0" dur="4.5s" repeatCount="indefinite" />
                        </rect>
                    </g>
                </g>

                {/* ===== ELEMENT 4: Error/Failure X Marks ===== */}
                <g transform="translate(-50, 80)">
                    <g stroke="url(#prob-error-gradient)" strokeWidth="4" strokeLinecap="round" opacity="0.7">
                        <line x1="-15" y1="-15" x2="15" y2="15" />
                        <line x1="15" y1="-15" x2="-15" y2="15" />
                    </g>
                    <circle cx="0" cy="0" r="25" stroke="#FF6F61" strokeWidth="2" fill="none" strokeOpacity="0.3" />
                </g>

                {/* ===== ELEMENT 5: Broken Image Icon ===== */}
                <g transform="translate(50, -30)" filter="url(#prob-blur)" opacity="0.5">
                    <rect x="-30" y="-25" width="60" height="50" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
                    {/* Mountain/sun broken image icon */}
                    <path d="M-20 15 L-5 0 L10 15 L25 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="15" cy="-10" r="6" fill="currentColor" fillOpacity="0.3" />
                    {/* Crack through it */}
                    <path d="M-30 -10 L0 5 L30 -5" stroke="#FF6F61" strokeWidth="2" strokeDasharray="6 4" />
                </g>

                {/* ===== ELEMENT 6: Stress/Scribble Lines ===== */}
                <g opacity="0.3">
                    <path d="M-250 120 Q-150 80 -50 130 T 150 110 T 300 90" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="8 8" />
                    <path d="M-280 160 Q-200 180 -100 150 T 100 170" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
                </g>

                {/* ===== ELEMENT 7: Confusion Question Marks ===== */}
                <g fill="#FF6F61" opacity="0.4">
                    <text x="-230" y="-100" fontSize="40" fontFamily="serif">?</text>
                    <text x="250" y="100" fontSize="30" fontFamily="serif">?</text>
                    <text x="-280" y="60" fontSize="24" fontFamily="serif">?</text>
                </g>

            </g>

            {/* Decorative corner elements */}
            <g stroke="#FF6F61" strokeWidth="1" strokeOpacity="0.2" fill="none">
                <path d="M20 20 L20 60 L60 60" />
                <path d="M780 20 L780 60 L740 60" />
                <path d="M20 480 L20 440 L60 440" />
                <path d="M780 480 L780 440 L740 440" />
            </g>

            {/* "THE STRUGGLE" text watermark */}
            <text x="400" y="470" textAnchor="middle" fill="currentColor" fontSize="14" fontFamily="sans-serif" letterSpacing="8" opacity="0.1" fontWeight="bold">
                THE STRUGGLE
            </text>
        </svg>
    );
};
