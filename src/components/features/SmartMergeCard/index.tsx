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
                    className="rounded-xl p-5 mb-4 relative overflow-hidden"
                    style={{
                        backgroundColor: 'var(--color-background)',
                    }}
                >
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
                                        border: isSelected ? '3px solid #ff6f61' : '2px solid var(--color-border)',
                                        transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                                        boxShadow: isSelected ? '0 8px 20px rgba(255, 111, 97, 0.35)' : '0 2px 8px rgba(0,0,0,0.1)',
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
                                    {/* Selection Checkmark */}
                                    <div
                                        className="absolute top-2 right-2 flex items-center justify-center rounded-full"
                                        style={{
                                            width: '26px',
                                            height: '26px',
                                            backgroundColor: '#ff6f61',
                                            transform: isSelected ? 'scale(1)' : 'scale(0)',
                                            opacity: isSelected ? 1 : 0,
                                            transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            boxShadow: '0 2px 8px rgba(255, 111, 97, 0.5)',
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M20 6L9 17L4 12"
                                                stroke="white"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    {/* Asset label */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 px-2 py-1"
                                        style={{
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                                        }}
                                    >
                                        <span
                                            className="text-[10px] text-white font-medium"
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                        >
                                            {asset.label}
                                        </span>
                                    </div>
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
                            {genres.map((genre, index) => (
                                <div
                                    key={genre}
                                    className="px-3 py-1.5 rounded-full cursor-pointer transition-all duration-300"
                                    style={{
                                        backgroundColor: selectedGenre === genre ? '#ff6f61' : 'var(--color-button-bg)',
                                        color: selectedGenre === genre ? 'white' : 'var(--color-foreground)',
                                        border: selectedGenre === genre ? '2px solid #ff6f61' : '1px solid var(--color-border)',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                        transform: selectedGenre === genre ? 'scale(1.05)' : 'scale(1)',
                                        boxShadow: selectedGenre === genre ? '0 4px 12px rgba(255, 111, 97, 0.4)' : 'none',
                                        opacity: showGenreSelector ? 1 : 0,
                                        transitionDelay: `${index * 50}ms`,
                                    }}
                                >
                                    {genre}
                                </div>
                            ))}
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

                {/* Curved Connection Line */}
                <div className="flex justify-end mb-2">
                    <svg
                        width="280"
                        height="94"
                        viewBox="0 0 595 199"
                        style={{
                            marginRight: '60px',
                            filter: 'drop-shadow(0 0 6px rgba(255, 111, 97, 0.5))',
                            opacity: animationPhase === 'done' || animationPhase === 'revealing' ? 1 : 0.4,
                            transition: 'opacity 0.8s ease',
                        }}
                    >
                        <path
                            d="M422.37 114.244L421.943 116.198L422.37 114.244ZM-4.23565e-06 198.059L21.5129 189.661L3.48338 175.23L-4.23565e-06 198.059ZM21.2579 176.065L22.5434 177.597C27.1584 173.725 32.4998 169.588 38.5812 165.314L37.4313 163.678L36.2814 162.042C30.1084 166.379 24.6764 170.586 19.9724 174.533L21.2579 176.065ZM54.5879 152.535L55.618 154.25C61.1131 150.948 67.0283 147.631 73.3692 144.352L72.4506 142.575L71.5319 140.799C65.1149 144.117 59.1253 147.476 53.5578 150.821L54.5879 152.535ZM90.9267 133.71L91.739 135.537C97.6981 132.889 103.959 130.301 110.524 127.806L109.814 125.937L109.104 124.067C102.469 126.588 96.1401 129.204 90.1144 131.882L90.9267 133.71ZM129.143 119.168L129.755 121.072C136.014 119.061 142.509 117.143 149.244 115.34L148.727 113.408L148.209 111.476C141.411 113.296 134.853 115.233 128.532 117.264L129.143 119.168ZM168.632 108.583L169.058 110.537C175.539 109.126 182.217 107.824 189.092 106.648L188.754 104.676L188.417 102.705C181.483 103.892 174.747 105.205 168.207 106.629L168.632 108.583ZM208.939 101.666L209.192 103.65C215.773 102.811 222.517 102.087 229.427 101.489L229.255 99.4967L229.083 97.5041C222.119 98.1061 215.32 98.8361 208.686 99.6825L208.939 101.666ZM249.653 98.1339L249.748 100.132C256.395 99.8156 263.184 99.6164 270.114 99.5429L270.093 97.543L270.072 95.5431C263.093 95.6171 256.255 95.8178 249.558 96.1361L249.653 98.1339ZM290.545 97.6883L290.496 99.6877C297.164 99.8513 303.955 100.13 310.869 100.531L310.985 98.5347L311.101 96.538C304.143 96.1342 297.307 95.8536 290.594 95.6889L290.545 97.6883ZM331.396 100.048L331.217 102.04C337.88 102.64 344.65 103.352 351.529 104.183L351.769 102.197L352.008 100.212C345.09 99.3764 338.279 98.6599 331.575 98.0563L331.396 100.048ZM372.086 104.95L371.789 106.928C378.381 107.918 385.068 109.015 391.85 110.223L392.201 108.254L392.552 106.285C385.735 105.07 379.012 103.968 372.382 102.973L372.086 104.95ZM412.244 112.098L411.842 114.057C415.187 114.744 418.554 115.457 421.943 116.198L422.37 114.244L422.797 112.29C419.392 111.546 416.008 110.829 412.646 110.139L412.244 112.098ZM422.37 114.244L421.943 116.198C425.088 116.885 428.191 117.457 431.253 117.92L431.552 115.943L431.851 113.965C428.876 113.515 425.858 112.959 422.797 112.29L422.37 114.244ZM450.162 117.432L450.148 119.432C456.672 119.479 462.981 119.022 469.077 118.12L468.784 116.142L468.491 114.163C462.598 115.035 456.494 115.478 450.177 115.432L450.162 117.432ZM486.961 111.974L487.559 113.883C493.685 111.964 499.552 109.599 505.162 106.866L504.286 105.068L503.41 103.27C497.971 105.92 492.289 108.21 486.364 110.066L486.961 111.974ZM520.456 95.7509L521.568 97.4132C526.857 93.8744 531.869 90.0259 536.603 85.9572L535.299 84.4404L533.996 82.9236C529.374 86.8958 524.49 90.6456 519.344 94.0886L520.456 95.7509ZM548.782 71.5292L550.238 72.9007C554.631 68.2377 558.721 63.4286 562.508 58.5766L560.931 57.346L559.354 56.1155C555.638 60.8775 551.629 65.5916 547.327 70.1578L548.782 71.5292ZM571.779 42.1513L573.454 43.2446C577.061 37.7186 580.277 32.2736 583.103 27.0624L581.345 26.109L579.587 25.1556C576.81 30.2761 573.65 35.6273 570.104 41.0581L571.779 42.1513ZM589.521 9.33527L591.357 10.1269C592.709 6.98994 593.872 4.0505 594.845 1.36114L592.964 0.680659L591.084 0.000180926C590.14 2.6091 589.007 5.47436 587.684 8.54367L589.521 9.33527Z"
                            fill="#FF6F61"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 50%, transparent 100%)',
                                maskSize: '200% 100%',
                                animation: isMerging ? 'mask-flow-sm 0.6s linear infinite' : 'mask-flow-sm 2.5s linear infinite'
                            }}
                        />
                    </svg>
                    <style>{`
            @keyframes mask-flow-sm {
              0% { mask-position: 100% 0; }
              100% { mask-position: -100% 0; }
            }
          `}</style>
                </div>

                {/* Result Preview - Merged Thumbnail */}
                <div
                    className="relative overflow-hidden w-full"
                    style={{
                        aspectRatio: '16/9',
                        borderRadius: '16px',
                        border: '1px solid var(--color-border)',
                        boxShadow: showResult ? '0 12px 40px rgba(0, 0, 0, 0.25)' : '0 4px 16px rgba(0, 0, 0, 0.15)',
                        opacity: showResult ? 1 : 0.3,
                        filter: showResult ? 'none' : 'blur(6px) saturate(0.5)',
                        transform: showResult ? 'scale(1)' : 'scale(0.98)',
                        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                >
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={mergedResult}
                            alt="Merged Thumbnail"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Success particles effect on reveal */}
                    {animationPhase === 'revealing' && (
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full"
                                    style={{
                                        backgroundColor: '#ff6f61',
                                        left: `${20 + i * 10}%`,
                                        top: '50%',
                                        animation: `particle-${i % 2 === 0 ? 'up' : 'down'} 0.8s ease-out forwards`,
                                        animationDelay: `${i * 50}ms`,
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* AI Merged badge */}
                    <div
                        className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full"
                        style={{
                            backgroundColor: 'rgba(255, 111, 97, 0.95)',
                            boxShadow: '0 4px 16px rgba(255, 111, 97, 0.5)',
                            transform: showResult ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                            opacity: showResult ? 1 : 0,
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transitionDelay: '0.3s',
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 35 35" fill="none">
                            <path
                                d="M16.6613 0.243845C16.5396 0.385878 15.7077 2.41493 14.7743 4.72804C12.7047 9.94269 11.8322 11.2413 9.2959 12.8239C9.01183 12.9863 6.92191 13.879 4.62909 14.7921C2.33627 15.7255 0.347802 16.598 0.185478 16.74C0.0231542 16.9023 -0.0377173 17.2067 0.0231542 17.4907C0.144897 17.9168 0.733321 18.2009 4.16241 19.5604C8.89009 21.4271 9.62055 21.8329 11.1626 23.2735C12.5424 24.6127 13.212 25.8504 15.1801 30.781C15.9715 32.8303 16.7222 34.4942 16.8034 34.4942C16.9048 34.4942 17.1077 34.555 17.2701 34.6159C17.7976 34.8188 18.1831 34.1492 19.6237 30.4158C21.4499 25.7895 21.8151 25.0794 23.1137 23.659C24.5138 22.117 25.2645 21.7112 30.2762 19.6821C33.9691 18.2009 34.5575 17.8966 34.6184 17.4907C34.659 17.227 34.5778 16.9023 34.4561 16.74C34.3141 16.5777 32.5488 15.8066 30.54 14.995C26.0355 13.2297 24.7369 12.5602 23.4992 11.363C22.0992 10.0036 21.6528 9.17165 19.8267 4.62659C18.9339 2.35405 18.102 0.385878 17.9802 0.243845C17.8585 0.122102 17.5541 0.000359316 17.3106 0.000359316C17.0671 0.000359316 16.7628 0.122102 16.6613 0.243845Z"
                                fill="white"
                            />
                        </svg>
                        <span
                            className="text-xs font-semibold"
                            style={{ color: 'white', fontFamily: 'var(--font-heading)' }}
                        >
                            Smart Merged
                        </span>
                    </div>
                </div>

                <style>{`
          @keyframes particle-up {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-60px) scale(0); opacity: 0; }
          }
          @keyframes particle-down {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(60px) scale(0); opacity: 0; }
          }
        `}</style>
            </div>
        </div>
    )
}
