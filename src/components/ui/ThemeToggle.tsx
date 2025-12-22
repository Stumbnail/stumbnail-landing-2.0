'use client'

import { useTheme } from '@/components/providers/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative w-[52px] h-[28px] rounded-full transition-all duration-300 ease-out overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
          : 'linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)',
        boxShadow: isDark
          ? 'inset 0 2px 4px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(48, 43, 99, 0.4), inset 0 -1px 2px rgba(138, 43, 226, 0.2)'
          : 'inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(255, 255, 255, 0.5)',
      }}
      aria-label="Toggle theme"
    >
      {/* Stars for dark mode - more stars with twinkling effect */}
      {isDark && (
        <>
          {/* Larger bright stars */}
          <span className="absolute top-[5px] left-[30px] w-[2.5px] h-[2.5px] bg-white rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
          <span className="absolute top-[18px] left-[38px] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }} />
          <span className="absolute top-[10px] left-[44px] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />

          {/* Medium stars */}
          <span className="absolute top-[7px] left-[35px] w-[1.5px] h-[1.5px] bg-white/90 rounded-full" />
          <span className="absolute top-[20px] left-[32px] w-[1.5px] h-[1.5px] bg-white/80 rounded-full" />
          <span className="absolute top-[14px] left-[42px] w-[1.5px] h-[1.5px] bg-white/85 rounded-full" />

          {/* Small stars */}
          <span className="absolute top-[12px] left-[29px] w-[1px] h-[1px] bg-white/70 rounded-full" />
          <span className="absolute top-[16px] left-[36px] w-[1px] h-[1px] bg-white/60 rounded-full" />
          <span className="absolute top-[8px] left-[40px] w-[1px] h-[1px] bg-white/65 rounded-full" />
          <span className="absolute top-[22px] left-[45px] w-[1px] h-[1px] bg-white/50 rounded-full" />

          {/* Subtle purple/blue nebula glow */}
          <span
            className="absolute top-[2px] right-[4px] w-[20px] h-[12px] rounded-full opacity-30 blur-[3px]"
            style={{ background: 'radial-gradient(ellipse, rgba(138, 43, 226, 0.6) 0%, transparent 70%)' }}
          />
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
        className="absolute top-[3px] w-[22px] h-[22px] rounded-full transition-all duration-300 ease-out flex items-center justify-center overflow-hidden"
        style={{
          left: isDark ? '3px' : '27px',
          background: isDark
            ? 'linear-gradient(145deg, #f5f3ce 0%, #ebe8c8 40%, #d4d0a0 100%)'
            : 'linear-gradient(135deg, #FFD93D 0%, #FF9F1C 100%)',
          boxShadow: isDark
            ? '0 0 10px rgba(245, 243, 206, 0.7), 0 0 20px rgba(245, 243, 206, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3)'
            : '0 0 12px rgba(255, 159, 28, 0.5), 0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Crescent shadow - clipped inside moon */}
        {isDark && (
          <span
            className="absolute w-[18px] h-[18px] rounded-full"
            style={{
              top: '-3px',
              left: '8px',
              background: 'linear-gradient(135deg, #1a1535 0%, #252050 100%)',
            }}
          />
        )}
      </span>
    </button>
  )
}
