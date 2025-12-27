'use client'

import React from 'react'
import Image from 'next/image'

// Assets to be "selected"
const assets = [
    {
        id: 1,
        src: '/assets/illustration-assets/features/ducttape.webp',
        label: 'Duct Tape',
    },
    {
        id: 2,
        src: '/assets/illustration-assets/features/banana.webp',
        label: 'Banana',
    },
    {
        id: 3,
        src: '/assets/illustration-assets/features/phone.webp',
        label: 'Phone',
    },
    {
        id: 4,
        src: '/assets/illustration-assets/features/profile-min.png',
        label: 'Profile',
    },
]

// Genre categories that appear
const genres = ['Comedy', 'Survival Vlog', 'Tutorial', 'Gaming']

// The merged result
const mergedResult = '/assets/illustration-assets/features/generated.webp'

export function SmartMergeCard() {
    const [cursorPosition, setCursorPosition] = React.useState({ x: -10, y: -10 })
    const [selectionBox, setSelectionBox] = React.useState({ x: 0, y: 0, width: 0, height: 0, visible: false })
    const [selectedAssets, setSelectedAssets] = React.useState<number[]>([])
    const [showGenreSelector, setShowGenreSelector] = React.useState(false)
    const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null)
    const [showTitleInput, setShowTitleInput] = React.useState(false)
    const [typedTitle, setTypedTitle] = React.useState('')
    const [isMerging, setIsMerging] = React.useState(false)
    const [showResult, setShowResult] = React.useState(false)
    const [buttonPulse, setButtonPulse] = React.useState(false)
    const [animationPhase, setAnimationPhase] = React.useState<
        'idle' | 'selecting' | 'genreAppear' | 'genreSelect' | 'titleAppear' | 'typing' | 'movingToButton' | 'clicking' | 'merging' | 'revealing' | 'done'
    >('idle')

    const fullTitle = 'Surviving on an island'

    React.useEffect(() => {
        let timeouts: NodeJS.Timeout[] = []
        let animationFrames: number[] = []

        const runAnimation = () => {
            // Reset everything
            setSelectedAssets([])
            setShowGenreSelector(false)
            setSelectedGenre(null)
            setShowTitleInput(false)
            setTypedTitle('')
            setIsMerging(false)
            setShowResult(false)
            setButtonPulse(false)
            setAnimationPhase('idle')
            setSelectionBox({ x: 0, y: 0, width: 0, height: 0, visible: false })
            setCursorPosition({ x: -10, y: -10 })

            // ========== PHASE 1: CURSOR APPEARS & SELECTS ASSETS ==========
            timeouts.push(setTimeout(() => {
                setCursorPosition({ x: 5, y: 25 }) // Start above assets
                setAnimationPhase('selecting')
            }, 400))

            // ========== PHASE 2: RUBBERBAND SELECTION ==========
            timeouts.push(setTimeout(() => {
                setSelectionBox({ x: 8, y: 28, width: 0, height: 0, visible: true })
            }, 700))

            let startTime = 0
            const dragDuration = 1200
            const startX = 8, startY = 28
            const endX = 92, endY = 48 // Adjusted for assets position

            const animateDrag = (timestamp: number) => {
                if (!startTime) startTime = timestamp
                const progress = Math.min((timestamp - startTime) / dragDuration, 1)
                const eased = 1 - Math.pow(1 - progress, 3)

                const currentX = startX + (endX - startX) * eased
                const currentY = startY + (endY - startY) * eased

                setCursorPosition({ x: currentX, y: currentY })
                setSelectionBox({
                    x: startX,
                    y: startY,
                    width: currentX - startX,
                    height: currentY - startY,
                    visible: true,
                })

                if (progress > 0.2) setSelectedAssets([1])
                if (progress > 0.4) setSelectedAssets([1, 2])
                if (progress > 0.6) setSelectedAssets([1, 2, 3])
                if (progress > 0.8) setSelectedAssets([1, 2, 3, 4])

                if (progress < 1) {
                    animationFrames.push(requestAnimationFrame(animateDrag))
                }
            }

            timeouts.push(setTimeout(() => {
                startTime = 0
                animationFrames.push(requestAnimationFrame(animateDrag))
            }, 800))

            // ========== PHASE 3: TITLE & GENRE APPEARANCE (BELOW ASSETS) ==========
            timeouts.push(setTimeout(() => {
                setSelectionBox(prev => ({ ...prev, visible: false }))
                setAnimationPhase('titleAppear')
                setShowTitleInput(true) // Show title input first
                setShowGenreSelector(true) // Show genres too
            }, 2200))

            // Cursor moves to Title Input FIRST (it's above genres in the layout)
            timeouts.push(setTimeout(() => {
                // Title input is at ~58-64% height, center-left
                setCursorPosition({ x: 25, y: 64 })
                setAnimationPhase('typing')
            }, 2600))

            // ========== PHASE 4: TYPEWRITER EFFECT ==========
            const typeDelay = 3000
            for (let i = 0; i <= fullTitle.length; i++) {
                timeouts.push(setTimeout(() => {
                    setTypedTitle(fullTitle.slice(0, i))
                }, typeDelay + i * 45))
            }

            // ========== PHASE 5: MOVE TO GENRE "Survival Vlog" ==========
            timeouts.push(setTimeout(() => {
                // "Survival Vlog" is the 2nd pill, at ~22% from left, ~75% height
                setCursorPosition({ x: 22, y: 79 })
                setAnimationPhase('genreSelect')
            }, typeDelay + fullTitle.length * 45 + 300))

            // Click genre
            timeouts.push(setTimeout(() => {
                setSelectedGenre('Survival Vlog')
            }, typeDelay + fullTitle.length * 45 + 600))

            // ========== PHASE 6: MOVE TO BUTTON ==========
            timeouts.push(setTimeout(() => {
                setAnimationPhase('movingToButton')
                // Button is at ~88-95% height, centered
                setCursorPosition({ x: 50, y: 96 })
                setButtonPulse(true)
            }, typeDelay + fullTitle.length * 45 + 1000))

            // ========== PHASE 7: CLICK BUTTON ==========
            timeouts.push(setTimeout(() => {
                setAnimationPhase('clicking')
            }, typeDelay + fullTitle.length * 45 + 1400))

            timeouts.push(setTimeout(() => {
                setAnimationPhase('merging')
                setIsMerging(true)
                setButtonPulse(false)
                setCursorPosition({ x: -20, y: -20 })
            }, typeDelay + fullTitle.length * 45 + 1600))

            // ========== PHASE 8: SHOW RESULT ==========
            timeouts.push(setTimeout(() => {
                setAnimationPhase('revealing')
            }, typeDelay + fullTitle.length * 45 + 2800))

            timeouts.push(setTimeout(() => {
                setAnimationPhase('done')
                setIsMerging(false)
                setShowResult(true)
            }, typeDelay + fullTitle.length * 45 + 3400))

            // ========== RESTART LOOP ==========
            timeouts.push(setTimeout(() => {
                runAnimation()
            }, typeDelay + fullTitle.length * 45 + 7500))
        }

        runAnimation()

        return () => {
            timeouts.forEach(t => clearTimeout(t))
            animationFrames.forEach(f => cancelAnimationFrame(f))
        }
    }, [])

    return (
        <div className="relative">
            {/* Floating Thumbnail - Top Right */}
            <div
                className="absolute -top-6 -right-10 w-28 h-16 rounded-lg overflow-hidden shadow-xl z-20 hidden lg:block"
                style={{
                    transform: 'rotate(8deg)',
                    border: '2px solid var(--color-border)',
                }}
            >
                <Image
                    src="/assets/images/thumbnails/YouTube-thumbnail-featuring-Johnny-Depp-holding-a-.webp"
                    alt="Floating thumbnail"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Floating Thumbnail - Bottom Left */}
            <div
                className="absolute -bottom-4 -left-12 w-32 h-18 rounded-lg overflow-hidden shadow-xl z-20 hidden lg:block"
                style={{
                    transform: 'rotate(-6deg)',
                    border: '2px solid var(--color-border)',
                }}
            >
                <Image
                    src="/assets/images/thumbnails/YouTube-thumbnail-featuring-Napoleon-Bonaparte-sit.webp"
                    alt="Floating thumbnail"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Main Card */}
            <div
                className="relative w-full"
                style={{
                    backgroundColor: 'var(--color-background-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '24px',
                    padding: '44px',
                    maxWidth: '100%',
                }}
            >
                {/* Header and Assets Container */}
                <div
                    className="rounded-xl p-5 relative overflow-hidden"
                    style={{
                        backgroundColor: 'var(--color-background)',
                        minHeight: '420px',
                    }}
                >
                    {/* Result Overlay - Appears on top when done */}
                    <div
                        className="absolute inset-0 z-30 flex items-center justify-center p-5 rounded-xl"
                        style={{
                            opacity: showResult ? 1 : 0,
                            visibility: showResult ? 'visible' : 'hidden',
                            transition: 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            backgroundColor: 'var(--color-background)',
                        }}
                    >
                        <div
                            className="relative w-full overflow-hidden"
                            style={{
                                aspectRatio: '16/9',
                                borderRadius: '16px',
                                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
                            }}
                        >
                            <Image
                                src={mergedResult}
                                alt="Merged Thumbnail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    {/* Animated Cursor */}
                    {cursorPosition.x > 0 && (
                        <div
                            className="absolute z-50 pointer-events-none"
                            style={{
                                left: `${cursorPosition.x}%`,
                                top: `${cursorPosition.y}%`,
                                transform: 'translate(-50%, -50%)',
                                transition: animationPhase === 'selecting' ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            }}
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{
                                    filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))',
                                    transform: animationPhase === 'clicking' ? 'scale(0.85) rotate(-5deg)' : 'scale(1)',
                                    transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                }}
                            >
                                <path
                                    d="M4 4L10.5 20.5L12.5 13.5L19.5 11.5L4 4Z"
                                    fill="white"
                                    stroke="#333"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    )}

                    {/* Rubberband Selection Box */}
                    <div
                        className="absolute z-40 pointer-events-none"
                        style={{
                            left: `${selectionBox.x}%`,
                            top: `${selectionBox.y}%`,
                            width: `${selectionBox.width}%`,
                            height: `${selectionBox.height}%`,
                            border: '2px dashed #ff6f61',
                            backgroundColor: 'rgba(255, 111, 97, 0.08)',
                            borderRadius: '6px',
                            opacity: selectionBox.visible ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                        }}
                    />

                    {/* Card Header */}
                    <div className="mb-4">
                        <h3
                            className="text-xl md:text-2xl font-semibold leading-normal"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-foreground)',
                            }}
                        >
                            Select Assets to <span style={{ color: '#ff6f61' }}>Merge</span>
                        </h3>
                    </div>

                    {/* Asset Grid (MOVED TO TOP) */}
                    <div className="grid grid-cols-4 gap-3 mb-4">
                        {assets.map((asset, index) => {
                            const isSelected = selectedAssets.includes(asset.id)
                            return (
                                <div
                                    key={asset.id}
                                    className="relative rounded-xl overflow-hidden"
                                    style={{
                                        aspectRatio: '1/1',
                                        border: isSelected ? '2px solid #ff6f61' : '1px solid var(--color-border)',
                                        transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                                        boxShadow: isSelected ? '0 6px 16px rgba(255, 111, 97, 0.3)' : 'none',
                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        transitionDelay: `${index * 30}ms`,
                                    }}
                                >
                                    <Image
                                        src={asset.src}
                                        alt={asset.label}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Video Title Input (MOVED BELOW ASSETS) */}
                    <div
                        className="mb-4 overflow-hidden"
                        style={{
                            maxHeight: showTitleInput ? '60px' : '0px',
                            opacity: showTitleInput ? 1 : 0,
                            transform: showTitleInput ? 'translateY(0)' : 'translateY(-10px)',
                            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        <div
                            className="flex items-center gap-2 px-4 py-3 rounded-xl"
                            style={{
                                backgroundColor: 'var(--color-button-bg)',
                                border: animationPhase === 'typing' ? '2px solid #ff6f61' : '1px solid var(--color-border)',
                                transition: 'border 0.3s ease',
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                                <path
                                    d="M4 6h16M4 12h16M4 18h10"
                                    stroke="#ff6f61"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span
                                className="text-sm"
                                style={{
                                    color: 'var(--color-foreground)',
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                {typedTitle}
                                {animationPhase === 'typing' && (
                                    <span className="animate-pulse" style={{ color: '#ff6f61' }}>|</span>
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Genre Selector (MOVED BELOW TITLE) */}
                    <div
                        className="mb-4 overflow-hidden"
                        style={{
                            maxHeight: showGenreSelector ? '50px' : '0px',
                            opacity: showGenreSelector ? 1 : 0,
                            transform: showGenreSelector ? 'translateY(0)' : 'translateY(-10px)',
                            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        <div className="flex gap-2 flex-wrap">
                            {genres.map((genre, index) => {
                                const isSelected = selectedGenre === genre
                                // Skeleton widths for non-selected pills
                                const skeletonWidths = ['48px', '72px', '52px', '56px']
                                return (
                                    <div
                                        key={genre}
                                        className="py-1.5 rounded-full cursor-pointer transition-all duration-300"
                                        style={{
                                            backgroundColor: isSelected ? '#ff6f61' : 'transparent',
                                            color: isSelected ? 'white' : 'transparent',
                                            border: isSelected ? '2px solid #ff6f61' : '1px solid var(--color-border)',
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                                            boxShadow: isSelected ? '0 4px 12px rgba(255, 111, 97, 0.4)' : 'none',
                                            opacity: showGenreSelector ? 1 : 0,
                                            transitionDelay: `${index * 50}ms`,
                                            paddingLeft: isSelected ? '12px' : '0',
                                            paddingRight: isSelected ? '12px' : '0',
                                            width: isSelected ? 'auto' : skeletonWidths[index],
                                            minHeight: '28px',
                                        }}
                                    >
                                        {isSelected ? genre : ''}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Smart Merge Button */}
                    <button
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl relative overflow-hidden"
                        style={{
                            backgroundColor: isMerging ? '#e85a4d' : '#ff6f61',
                            transform: animationPhase === 'clicking' ? 'scale(0.97)' : 'scale(1)',
                            boxShadow: buttonPulse
                                ? '0 0 0 4px rgba(255, 111, 97, 0.3), 0 8px 24px rgba(255, 111, 97, 0.5)'
                                : selectedAssets.length === 4
                                    ? '0 6px 20px rgba(255, 111, 97, 0.4)'
                                    : 'none',
                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        {/* Shimmer effect */}
                        {buttonPulse && (
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                    animation: 'shimmer 1s infinite',
                                }}
                            />
                        )}
                        <svg width="18" height="18" viewBox="0 0 35 35" fill="none" className="relative z-10">
                            <path
                                d="M16.6613 0.243845C16.5396 0.385878 15.7077 2.41493 14.7743 4.72804C12.7047 9.94269 11.8322 11.2413 9.2959 12.8239C9.01183 12.9863 6.92191 13.879 4.62909 14.7921C2.33627 15.7255 0.347802 16.598 0.185478 16.74C0.0231542 16.9023 -0.0377173 17.2067 0.0231542 17.4907C0.144897 17.9168 0.733321 18.2009 4.16241 19.5604C8.89009 21.4271 9.62055 21.8329 11.1626 23.2735C12.5424 24.6127 13.212 25.8504 15.1801 30.781C15.9715 32.8303 16.7222 34.4942 16.8034 34.4942C16.9048 34.4942 17.1077 34.555 17.2701 34.6159C17.7976 34.8188 18.1831 34.1492 19.6237 30.4158C21.4499 25.7895 21.8151 25.0794 23.1137 23.659C24.5138 22.117 25.2645 21.7112 30.2762 19.6821C33.9691 18.2009 34.5575 17.8966 34.6184 17.4907C34.659 17.227 34.5778 16.9023 34.4561 16.74C34.3141 16.5777 32.5488 15.8066 30.54 14.995C26.0355 13.2297 24.7369 12.5602 23.4992 11.363C22.0992 10.0036 21.6528 9.17165 19.8267 4.62659C18.9339 2.35405 18.102 0.385878 17.9802 0.243845C17.8585 0.122102 17.5541 0.000359316 17.3106 0.000359316C17.0671 0.000359316 16.7628 0.122102 16.6613 0.243845Z"
                                fill="white"
                            />
                        </svg>
                        <span
                            className="text-sm font-semibold text-white relative z-10"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            {isMerging ? 'Creating Magic...' : 'Smart Merge'}
                        </span>
                        {isMerging && (
                            <div className="animate-spin ml-1 relative z-10">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                                    <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        )}
                    </button>

                    <style>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
                </div>
            </div>
        </div>
    )
}
