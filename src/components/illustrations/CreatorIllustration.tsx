'use client';

import React from 'react';

export const CreatorIllustration = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="creator-illustration"
        >
            <defs>
                {/* Brand gradient */}
                <linearGradient id="creator-brand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="100%" stopColor="#FF8A7A" />
                </linearGradient>

                {/* Skin tone gradient */}
                <linearGradient id="creator-skin" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FDB797" />
                    <stop offset="100%" stopColor="#E8A47C" />
                </linearGradient>

                {/* Hair gradient */}
                <linearGradient id="creator-hair" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2D2D2D" />
                    <stop offset="100%" stopColor="#1A1A1A" />
                </linearGradient>

                {/* Laptop gradient */}
                <linearGradient id="creator-laptop" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.25" />
                </linearGradient>

                {/* Screen glow */}
                <linearGradient id="creator-screen-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0.3" />
                </linearGradient>

                {/* Ambient glow */}
                <radialGradient id="creator-ambient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#FF6F61" stopOpacity="0" />
                </radialGradient>

                {/* Shadow filter */}
                <filter id="creator-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.15" />
                </filter>

                {/* Soft glow */}
                <filter id="creator-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Background ambient glow */}
            <circle cx="200" cy="200" r="180" fill="url(#creator-ambient)" />

            {/* Decorative orbit rings */}
            <ellipse cx="200" cy="200" rx="175" ry="100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" fill="none" transform="rotate(-15 200 200)" />
            <ellipse cx="200" cy="200" rx="160" ry="80" stroke="#FF6F61" strokeWidth="0.5" strokeOpacity="0.1" fill="none" transform="rotate(10 200 200)" strokeDasharray="8 8" />

            {/* ===== AVATAR FRAME ===== */}
            <g filter="url(#creator-shadow)">
                {/* Outer ring */}
                <circle cx="200" cy="160" r="100" fill="none" stroke="url(#creator-brand)" strokeWidth="4" />
                <circle cx="200" cy="160" r="95" fill="currentColor" fillOpacity="0.05" />

                {/* Inner decorative ring */}
                <circle cx="200" cy="160" r="85" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
            </g>

            {/* ===== PERSON ===== */}
            <g>
                {/* Shoulders/Body */}
                <ellipse cx="200" cy="260" rx="60" ry="25" fill="url(#creator-laptop)" />

                {/* Neck */}
                <rect x="185" y="205" width="30" height="30" fill="url(#creator-skin)" />

                {/* Head */}
                <ellipse cx="200" cy="165" rx="45" ry="55" fill="url(#creator-skin)" />

                {/* Hair */}
                <path d="M155 145 Q155 100 200 100 Q245 100 245 145 Q245 120 200 130 Q155 120 155 145" fill="url(#creator-hair)" />
                <ellipse cx="200" cy="115" rx="35" ry="20" fill="url(#creator-hair)" />

                {/* Eyes */}
                <g>
                    <ellipse cx="180" cy="160" rx="8" ry="6" fill="#FFFFFF" />
                    <ellipse cx="220" cy="160" rx="8" ry="6" fill="#FFFFFF" />
                    <circle cx="182" cy="160" r="4" fill="#2D2D2D" />
                    <circle cx="222" cy="160" r="4" fill="#2D2D2D" />
                    <circle cx="183" cy="159" r="1.5" fill="#FFFFFF" />
                    <circle cx="223" cy="159" r="1.5" fill="#FFFFFF" />
                </g>

                {/* Eyebrows */}
                <path d="M172 150 Q180 147 188 150" stroke="url(#creator-hair)" strokeWidth="2" fill="none" />
                <path d="M212 150 Q220 147 228 150" stroke="url(#creator-hair)" strokeWidth="2" fill="none" />

                {/* Nose */}
                <path d="M200 165 Q203 175 200 182" stroke="url(#creator-skin)" strokeWidth="2" fill="none" opacity="0.5" />

                {/* Smile */}
                <path d="M185 190 Q200 200 215 190" stroke="#D97666" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Ears */}
                <ellipse cx="153" cy="165" rx="8" ry="12" fill="url(#creator-skin)" />
                <ellipse cx="247" cy="165" rx="8" ry="12" fill="url(#creator-skin)" />
            </g>

            {/* ===== LAPTOP ===== */}
            <g transform="translate(120, 280)" filter="url(#creator-shadow)">
                {/* Laptop base */}
                <path d="M0 50 L10 80 L150 80 L160 50 Z" fill="url(#creator-laptop)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

                {/* Laptop screen back */}
                <rect x="10" y="0" width="140" height="55" rx="6" fill="url(#creator-laptop)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

                {/* Screen */}
                <rect x="16" y="6" width="128" height="43" rx="3" fill="url(#creator-screen-glow)" />

                {/* Code lines on screen */}
                <g opacity="0.6">
                    <rect x="22" y="12" width="40" height="4" rx="2" fill="#FF6F61" />
                    <rect x="22" y="20" width="60" height="3" rx="1.5" fill="currentColor" fillOpacity="0.4" />
                    <rect x="22" y="26" width="45" height="3" rx="1.5" fill="currentColor" fillOpacity="0.3" />
                    <rect x="22" y="32" width="70" height="3" rx="1.5" fill="#22C55E" fillOpacity="0.5" />
                    <rect x="22" y="38" width="35" height="3" rx="1.5" fill="currentColor" fillOpacity="0.3" />
                </g>

                {/* Keyboard dots */}
                <g fill="currentColor" fillOpacity="0.3">
                    <circle cx="40" cy="62" r="2" />
                    <circle cx="50" cy="62" r="2" />
                    <circle cx="60" cy="62" r="2" />
                    <circle cx="70" cy="62" r="2" />
                    <circle cx="80" cy="62" r="2" />
                    <circle cx="90" cy="62" r="2" />
                    <circle cx="100" cy="62" r="2" />
                    <circle cx="110" cy="62" r="2" />
                    <circle cx="120" cy="62" r="2" />
                </g>
                <g fill="currentColor" fillOpacity="0.25">
                    <circle cx="45" cy="70" r="2" />
                    <circle cx="55" cy="70" r="2" />
                    <circle cx="65" cy="70" r="2" />
                    <circle cx="75" cy="70" r="2" />
                    <circle cx="85" cy="70" r="2" />
                    <circle cx="95" cy="70" r="2" />
                    <circle cx="105" cy="70" r="2" />
                    <circle cx="115" cy="70" r="2" />
                </g>
            </g>

            {/* ===== FLOATING ELEMENTS ===== */}

            {/* Status indicator - "Online" */}
            <g transform="translate(310, 100)">
                <circle cx="0" cy="0" r="12" fill="url(#creator-brand)" filter="url(#creator-glow)">
                    <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
            </g>

            {/* Ideas/Lightbulb */}
            <g transform="translate(80, 90)">
                <circle cx="0" cy="0" r="18" fill="currentColor" fillOpacity="0.08" stroke="#FF6F61" strokeWidth="1.5" strokeOpacity="0.4" />
                <path d="M0 -8 Q5 -3 0 2 Q-5 -3 0 -8" fill="#FF6F61" fillOpacity="0.6" />
                <rect x="-3" y="4" width="6" height="4" rx="1" fill="#FF6F61" fillOpacity="0.4" />
            </g>

            {/* Sparkles */}
            <g fill="#FF6F61">
                <path d="M340 200 L342 204 L346 206 L342 208 L340 212 L338 208 L334 206 L338 204 Z">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M60 250 L62 254 L66 256 L62 258 L60 262 L58 258 L54 256 L58 254 Z">
                    <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.5s" repeatCount="indefinite" />
                </path>
                <circle cx="330" cy="300" r="3">
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.8s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Tech icons floating */}
            <g transform="translate(50, 180)" opacity="0.5">
                <rect x="0" y="0" width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                <text x="12" y="17" textAnchor="middle" fill="#FF6F61" fontSize="12" fontFamily="monospace">&lt;/&gt;</text>
            </g>
            <g transform="translate(326, 250)" opacity="0.4">
                <rect x="0" y="0" width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                <circle cx="12" cy="12" r="6" stroke="#FF6F61" strokeWidth="1" fill="none" />
                <path d="M12 6 L12 12 L16 14" stroke="#FF6F61" strokeWidth="1" fill="none" />
            </g>
        </svg>
    );
};
