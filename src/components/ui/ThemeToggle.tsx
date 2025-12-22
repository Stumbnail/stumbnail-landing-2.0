'use client'

import { useTheme } from '@/components/providers/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative w-[52px] h-[28px] rounded-full transition-all duration-300 ease-out"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
          : 'linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)',
        boxShadow: isDark
          ? 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)'
          : 'inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(255, 255, 255, 0.5)',
      }}
      aria-label="Toggle theme"
    >
      {/* Stars for dark mode */}
      {isDark && (
        <>
          <span className="absolute top-[6px] left-[8px] w-[2px] h-[2px] bg-white rounded-full opacity-80" />
          <span className="absolute top-[14px] left-[12px] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-60" />
          <span className="absolute top-[8px] left-[18px] w-[1px] h-[1px] bg-white rounded-full opacity-40" />
        </>
      )}

      {/* Sun rays / clouds for light mode */}
      {!isDark && (
        <>
          <span className="absolute top-[18px] left-[6px] w-[8px] h-[4px] bg-white/60 rounded-full" />
          <span className="absolute top-[16px] left-[16px] w-[6px] h-[3px] bg-white/40 rounded-full" />
        </>
      )}

      {/* Toggle circle (moon/sun) */}
      <span
        className="absolute top-[3px] w-[22px] h-[22px] rounded-full transition-all duration-300 ease-out flex items-center justify-center"
        style={{
          left: isDark ? '3px' : '27px',
          background: isDark
            ? 'linear-gradient(135deg, #f5f5f5 0%, #c9c9c9 100%)'
            : 'linear-gradient(135deg, #FFD93D 0%, #FF9F1C 100%)',
          boxShadow: isDark
            ? '0 2px 4px rgba(0, 0, 0, 0.3)'
            : '0 0 12px rgba(255, 159, 28, 0.5), 0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Moon craters */}
        {isDark && (
          <>
            <span className="absolute top-[5px] right-[4px] w-[4px] h-[4px] rounded-full bg-gray-300/50" />
            <span className="absolute bottom-[6px] left-[5px] w-[3px] h-[3px] rounded-full bg-gray-300/40" />
          </>
        )}
      </span>
    </button>
  )
}
