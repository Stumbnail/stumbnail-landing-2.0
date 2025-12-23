'use client';

import React from 'react';

export const AffordableIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="affordable-icon"
        >
            <defs>
                {/* Coin gradient */}
                <linearGradient id="aff-coin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="50%" stopColor="#FF8A7A" />
                    <stop offset="100%" stopColor="#FFB4AB" />
                </linearGradient>

                {/* Metallic sheen */}
                <linearGradient id="aff-metallic" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
                </linearGradient>

                {/* Glow */}
                <filter id="aff-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* 3D shadow */}
                <filter id="aff-shadow" x="-20%" y="-20%" width="150%" height="150%">
                    <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
                </filter>

                {/* Radial shine */}
                <radialGradient id="aff-shine" cx="30%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Background glow */}
            <circle cx="40" cy="40" r="35" fill="#FF6F61" fillOpacity="0.05" />

            {/* Decorative orbit rings */}
            <ellipse cx="40" cy="40" rx="38" ry="20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" fill="none" transform="rotate(-20 40 40)" />
            <ellipse cx="40" cy="40" rx="38" ry="20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" fill="none" transform="rotate(20 40 40)" />

            {/* Main coin stack - back coins */}
            <g filter="url(#aff-shadow)">
                {/* Back coin 2 */}
                <ellipse cx="42" cy="48" rx="22" ry="8" fill="currentColor" fillOpacity="0.1" stroke="#FF6F61" strokeWidth="1" strokeOpacity="0.3" />

                {/* Back coin 1 */}
                <ellipse cx="41" cy="44" rx="22" ry="8" fill="currentColor" fillOpacity="0.15" stroke="#FF6F61" strokeWidth="1" strokeOpacity="0.4" />
            </g>

            {/* Main front coin */}
            <g filter="url(#aff-glow)">
                {/* Coin body */}
                <ellipse cx="40" cy="40" rx="22" ry="8" fill="url(#aff-coin-gradient)" />

                {/* Coin edge (3D effect) */}
                <path
                    d="M18 40 Q18 48 40 48 Q62 48 62 40"
                    fill="currentColor"
                    fillOpacity="0.1"
                    stroke="#FF6F61"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                />

                {/* Metallic sheen overlay */}
                <ellipse cx="40" cy="40" rx="22" ry="8" fill="url(#aff-metallic)" />

                {/* Shine highlight */}
                <ellipse cx="32" cy="38" rx="8" ry="3" fill="url(#aff-shine)" />

                {/* Inner ring detail */}
                <ellipse cx="40" cy="40" rx="16" ry="6" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
            </g>

            {/* Value symbol on coin */}
            <g transform="translate(40, 40)">
                {/* Diamond/gem shape representing value */}
                <path
                    d="M0 -4 L4 0 L0 4 L-4 0 Z"
                    fill="#FFFFFF"
                    fillOpacity="0.9"
                    stroke="#FF6F61"
                    strokeWidth="0.5"
                />
                <path d="M0 -4 L4 0 L0 0 Z" fill="#FFFFFF" fillOpacity="0.6" />
            </g>

            {/* Upward arrows indicating value/savings */}
            <g stroke="#FF6F61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M24 22 L24 14 L18 20" opacity="0.8" />
                <path d="M24 22 L24 14 L30 20" opacity="0.8" />

                <path d="M56 22 L56 14 L50 20" opacity="0.6" />
                <path d="M56 22 L56 14 L62 20" opacity="0.6" />
            </g>

            {/* Small coins/dots floating */}
            <g>
                <circle cx="14" cy="28" r="3" fill="url(#aff-coin-gradient)" opacity="0.7">
                    <animate attributeName="cy" values="28;24;28" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="66" cy="32" r="2.5" fill="url(#aff-coin-gradient)" opacity="0.5">
                    <animate attributeName="cy" values="32;28;32" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="52" r="2" fill="url(#aff-coin-gradient)" opacity="0.4">
                    <animate attributeName="cy" values="52;48;52" dur="2.8s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Sparkles */}
            <g fill="#FF6F61">
                <path d="M8 14 L9.5 17 L12.5 18.5 L9.5 20 L8 23 L6.5 20 L3.5 18.5 L6.5 17 Z">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M72 60 L73 62 L75 63 L73 64 L72 66 L71 64 L69 63 L71 62 Z" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.3s" repeatCount="indefinite" />
                </path>
            </g>

            {/* Dollar sign accent */}
            <g transform="translate(10, 56)" opacity="0.6">
                <text fontSize="12" fill="#FF6F61" fontFamily="sans-serif" fontWeight="bold">$</text>
            </g>

            {/* Percentage badge */}
            <g transform="translate(60, 8)">
                <circle cx="8" cy="8" r="8" fill="url(#aff-coin-gradient)" />
                <text x="8" y="11" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">%</text>
            </g>
        </svg>
    );
};
