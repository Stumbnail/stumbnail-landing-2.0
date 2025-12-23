'use client';

import React from 'react';

interface CommunityThumbnailProps {
    variant: 'gaming' | 'vlog' | 'reaction' | 'tech';
}

export const CommunityThumbnail = ({ variant }: CommunityThumbnailProps) => {

    const renderGaming = () => (
        <>
            <defs>
                <linearGradient id="gaming-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="100%" stopColor="#16213e" />
                </linearGradient>
                <linearGradient id="gaming-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="100%" stopColor="#e94560" />
                </linearGradient>
                <filter id="gaming-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            <rect width="100%" height="100%" fill="url(#gaming-bg)" />

            {/* Grid background */}
            <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.05">
                {Array.from({ length: 10 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="180" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 36} x2="320" y2={i * 36} />
                ))}
            </g>

            {/* Crosshair */}
            <g filter="url(#gaming-glow)" transform="translate(160, 90)">
                <circle cx="0" cy="0" r="30" stroke="url(#gaming-accent)" strokeWidth="2" fill="none" />
                <circle cx="0" cy="0" r="20" stroke="url(#gaming-accent)" strokeWidth="1" fill="none" strokeOpacity="0.5" />
                <circle cx="0" cy="0" r="3" fill="url(#gaming-accent)" />
                <line x1="0" y1="-45" x2="0" y2="-32" stroke="url(#gaming-accent)" strokeWidth="2" />
                <line x1="0" y1="32" x2="0" y2="45" stroke="url(#gaming-accent)" strokeWidth="2" />
                <line x1="-45" y1="0" x2="-32" y2="0" stroke="url(#gaming-accent)" strokeWidth="2" />
                <line x1="32" y1="0" x2="45" y2="0" stroke="url(#gaming-accent)" strokeWidth="2" />
            </g>

            {/* HUD elements */}
            <g opacity="0.7">
                <rect x="20" y="140" width="80" height="8" rx="2" fill="currentColor" fillOpacity="0.2" />
                <rect x="20" y="140" width="50" height="8" rx="2" fill="url(#gaming-accent)" />
                <text x="20" y="135" fill="currentColor" fontSize="8" opacity="0.5">HEALTH</text>

                <rect x="220" y="20" width="80" height="8" rx="2" fill="currentColor" fillOpacity="0.2" />
                <rect x="220" y="20" width="70" height="8" rx="2" fill="#4F46E5" />
                <text x="220" y="35" fill="currentColor" fontSize="8" opacity="0.5">AMMO 70/100</text>
            </g>

            {/* Kill feed lines */}
            <g opacity="0.4" transform="translate(20, 50)">
                <rect x="0" y="0" width="100" height="12" rx="2" fill="currentColor" fillOpacity="0.1" />
                <rect x="0" y="16" width="90" height="12" rx="2" fill="currentColor" fillOpacity="0.08" />
            </g>
        </>
    );

    const renderVlog = () => (
        <>
            <defs>
                <linearGradient id="vlog-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#764ba2" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="vlog-sun" cx="80%" cy="20%" r="30%">
                    <stop offset="0%" stopColor="#FFD93D" />
                    <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="currentColor" fillOpacity="0.05" />
            <rect width="100%" height="100%" fill="url(#vlog-bg)" />

            {/* Landscape background */}
            <ellipse cx="260" cy="40" rx="40" ry="40" fill="url(#vlog-sun)" opacity="0.8" />
            <path d="M0 130 Q80 100 160 130 Q240 160 320 110 V180 H0 Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M0 150 Q100 120 200 150 Q280 170 320 140 V180 H0 Z" fill="currentColor" fillOpacity="0.15" />

            {/* Vlogger silhouette hint */}
            <g transform="translate(160, 180)" opacity="0.3">
                <ellipse cx="0" cy="0" rx="40" ry="20" fill="currentColor" />
                <circle cx="0" cy="-50" r="25" fill="currentColor" />
                <ellipse cx="0" cy="-15" rx="25" ry="30" fill="currentColor" />
            </g>

            {/* REC indicator */}
            <g transform="translate(20, 20)">
                <circle cx="8" cy="8" r="8" fill="#FF4444">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <text x="24" y="13" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">REC</text>
            </g>

            {/* Time code */}
            <g transform="translate(240, 150)">
                <rect x="0" y="0" width="70" height="20" rx="4" fill="currentColor" fillOpacity="0.3" />
                <text x="35" y="14" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace">00:12:34</text>
            </g>

            {/* Camera frame */}
            <rect x="15" y="15" width="290" height="150" rx="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" fill="none" />
        </>
    );

    const renderReaction = () => (
        <>
            <defs>
                <linearGradient id="react-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1f1f1f" />
                    <stop offset="100%" stopColor="#2a2a2a" />
                </linearGradient>
                <linearGradient id="react-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="100%" stopColor="#FFB347" />
                </linearGradient>
                <filter id="react-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            <rect width="100%" height="100%" fill="url(#react-bg)" />

            {/* Shock lines radiating */}
            <g stroke="url(#react-accent)" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round">
                <path d="M160 90 L160 20" />
                <path d="M160 90 L100 30" />
                <path d="M160 90 L220 30" />
                <path d="M160 90 L270 50" />
                <path d="M160 90 L50 50" />
                <path d="M160 90 L30 90" />
                <path d="M160 90 L290 90" />
            </g>

            {/* Surprised face abstract */}
            <g transform="translate(160, 90)" filter="url(#react-glow)">
                {/* Face circle */}
                <circle cx="0" cy="0" r="45" fill="currentColor" fillOpacity="0.1" stroke="url(#react-accent)" strokeWidth="2" />

                {/* Wide eyes */}
                <ellipse cx="-15" cy="-10" rx="12" ry="16" fill="currentColor" fillOpacity="0.2" stroke="url(#react-accent)" strokeWidth="1.5" />
                <ellipse cx="15" cy="-10" rx="12" ry="16" fill="currentColor" fillOpacity="0.2" stroke="url(#react-accent)" strokeWidth="1.5" />
                <circle cx="-15" cy="-8" r="5" fill="url(#react-accent)" />
                <circle cx="15" cy="-8" r="5" fill="url(#react-accent)" />

                {/* Open mouth */}
                <ellipse cx="0" cy="20" rx="15" ry="20" fill="currentColor" fillOpacity="0.3" stroke="url(#react-accent)" strokeWidth="2" />
            </g>

            {/* Exclamation marks */}
            <g fill="url(#react-accent)">
                <text x="70" y="60" fontSize="40" fontWeight="bold">!</text>
                <text x="250" y="70" fontSize="30" fontWeight="bold">!</text>
                <text x="40" y="130" fontSize="24" fontWeight="bold" opacity="0.6">?!</text>
            </g>

            {/* Emoji reaction hints */}
            <g opacity="0.6">
                <circle cx="280" cy="150" r="12" fill="#FFD93D" />
                <circle cx="40" cy="150" r="10" fill="#FF6B6B" />
            </g>
        </>
    );

    const renderTech = () => (
        <>
            <defs>
                <linearGradient id="tech-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f0f23" />
                    <stop offset="100%" stopColor="#1a1a2e" />
                </linearGradient>
                <linearGradient id="tech-circuit" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6F61" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
                <filter id="tech-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            <rect width="100%" height="100%" fill="url(#tech-bg)" />

            {/* Circuit board pattern */}
            <g stroke="url(#tech-circuit)" strokeWidth="1.5" strokeOpacity="0.4" fill="none" filter="url(#tech-glow)">
                <path d="M0 90 H60 L80 70 H120" />
                <path d="M320 90 H260 L240 110 H200" />
                <path d="M160 0 V40 L140 60 V80" />
                <path d="M160 180 V140 L180 120 V100" />
                <path d="M80 70 V40 L100 20" />
                <path d="M240 110 V140 L220 160" />
            </g>

            {/* Circuit nodes */}
            <g fill="url(#tech-circuit)">
                <circle cx="60" cy="90" r="4" />
                <circle cx="120" cy="70" r="4" />
                <circle cx="260" cy="90" r="4" />
                <circle cx="200" cy="110" r="4" />
                <circle cx="140" cy="80" r="4" />
                <circle cx="180" cy="100" r="4" />
            </g>

            {/* Central device/chip */}
            <g transform="translate(120, 60)">
                <rect x="0" y="0" width="80" height="60" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                <rect x="10" y="10" width="60" height="40" rx="4" fill="url(#tech-circuit)" fillOpacity="0.15" />

                {/* Chip details */}
                <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.3">
                    <line x1="-8" y1="20" x2="0" y2="20" />
                    <line x1="-8" y1="30" x2="0" y2="30" />
                    <line x1="-8" y1="40" x2="0" y2="40" />
                    <line x1="80" y1="20" x2="88" y2="20" />
                    <line x1="80" y1="30" x2="88" y2="30" />
                    <line x1="80" y1="40" x2="88" y2="40" />
                </g>

                {/* Processing indicator */}
                <rect x="20" y="22" width="40" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
                <rect x="20" y="22" width="25" height="4" rx="2" fill="#22C55E">
                    <animate attributeName="width" values="0;40;0" dur="2s" repeatCount="indefinite" />
                </rect>
                <rect x="20" y="32" width="40" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
                <rect x="20" y="32" width="30" height="4" rx="2" fill="#6366F1">
                    <animate attributeName="width" values="40;0;40" dur="2.5s" repeatCount="indefinite" />
                </rect>
            </g>

            {/* Data particles */}
            <g fill="#FF6F61" opacity="0.6">
                <circle cx="40" cy="40" r="2">
                    <animate attributeName="cy" values="40;140;40" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="280" cy="140" r="2">
                    <animate attributeName="cy" values="140;40;140" dur="2.5s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Binary code hints */}
            <text x="20" y="170" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.2">01001010 11010010</text>
            <text x="200" y="25" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.2">10110101</text>
        </>
    );

    const getVariantContent = () => {
        switch (variant) {
            case 'gaming': return renderGaming();
            case 'vlog': return renderVlog();
            case 'reaction': return renderReaction();
            case 'tech': return renderTech();
        }
    };

    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 320 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className={`community-thumbnail community-thumbnail--${variant}`}
        >
            {getVariantContent()}
        </svg>
    );
};
