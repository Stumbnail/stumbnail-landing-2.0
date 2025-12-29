'use client'

interface YouTubeHeaderProps {
    searchValue?: string
    variant?: 'default' | 'search'
}

export function YouTubeHeader({ searchValue = '', variant = 'default' }: YouTubeHeaderProps) {
    return (
        <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 border-b" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)' }}>
            {/* Left Section: Menu + Logo */}
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Hamburger Menu */}
                <button className="p-1.5 sm:p-2 rounded-full hover:bg-[var(--color-button-bg)] transition-colors" style={{ color: 'var(--color-foreground)' }}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                </button>
                {/* YouTube Logo */}
                <div className="flex items-center gap-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#FF0000">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    <span className="text-base sm:text-lg font-semibold tracking-tighter" style={{ color: 'var(--color-foreground)' }}>YouTube</span>
                </div>
            </div>

            {/* Center: Search Bar - Hidden on mobile */}
            <div className="hidden sm:flex flex-1 max-w-xl mx-4">
                <div className="flex items-center w-full">
                    <div className="flex-1 flex items-center rounded-l-full overflow-hidden" style={{ backgroundColor: 'var(--color-button-bg)', border: '1px solid var(--color-border)' }}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            className="flex-1 px-4 py-1.5 bg-transparent outline-none text-sm"
                            style={{ color: 'var(--color-foreground)' }}
                            readOnly
                        />
                    </div>
                    <button
                        className="px-4 sm:px-5 py-[7px] rounded-r-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-button-bg)', borderTop: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
                            <circle cx="11" cy="11" r="6" />
                            <path d="m21 21-4-4" />
                        </svg>
                    </button>
                    {/* Voice Search - Hidden on smaller screens */}
                    <button
                        className="hidden md:block ml-2 p-2 rounded-full"
                        style={{ backgroundColor: 'var(--color-button-bg)', color: 'var(--color-foreground)' }}
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a.998.998 0 00-.98-.85c-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08a6.993 6.993 0 005.91-5.78c.1-.6-.39-1.14-1-1.14z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right Section: Icons + Profile */}
            <div className="flex items-center gap-1 sm:gap-2">
                {/* Search icon for mobile */}
                <button className="sm:hidden p-1.5 rounded-full hover:bg-[var(--color-button-bg)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="6" />
                        <path d="m21 21-4-4" />
                    </svg>
                </button>
                {/* Create Button - Hidden on mobile */}
                <button className="hidden sm:block p-2 rounded-full hover:bg-[var(--color-button-bg)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z" />
                    </svg>
                </button>
                {/* Notifications */}
                <button className="p-1.5 sm:p-2 rounded-full hover:bg-[var(--color-button-bg)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                    </svg>
                </button>
                {/* Profile Avatar */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center ml-0.5 sm:ml-1 cursor-pointer">
                    <span className="text-white text-xs sm:text-sm font-medium">U</span>
                </div>
            </div>
        </div>
    )
}
