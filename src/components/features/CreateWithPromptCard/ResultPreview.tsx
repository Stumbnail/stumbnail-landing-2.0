'use client'

export function ResultPreview() {
  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        aspectRatio: '16/9',
        borderRadius: '12px',
        backgroundColor: 'var(--color-button-bg)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Decorative background glow */}
      <div
        className="absolute"
        style={{
          right: '-10%',
          top: '-10%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(255, 111, 97, 0.15) 0%, transparent 60%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Person silhouette (left side) */}
      <div
        className="absolute bottom-0 left-[8%]"
        style={{ width: '26%', height: '65%' }}
      >
        {/* Body */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '60%',
            height: '55%',
            backgroundColor: 'var(--color-text-muted)',
            opacity: 0.2,
            borderRadius: '6px 6px 0 0',
          }}
        />
        {/* Head */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: '52%',
            width: '38%',
            aspectRatio: '1',
            backgroundColor: 'var(--color-text-muted)',
            opacity: 0.2,
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Text content (right side) */}
      <div className="absolute right-[8%] top-[20%] flex flex-col items-end gap-1">
        {/* Main headline */}
        <div
          className="px-2 py-0.5 rounded"
          style={{
            background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
          }}
        >
          <span
            className="text-sm md:text-base font-black"
            style={{
              color: '#000',
              fontFamily: 'var(--font-heading)',
            }}
          >
            $50,000
          </span>
        </div>
        <span
          className="text-xs md:text-sm font-bold"
          style={{
            color: 'var(--color-foreground)',
            fontFamily: 'var(--font-heading)',
          }}
        >
          PER MONTH
        </span>
      </div>

      {/* Decorative YouTube play icon */}
      <div className="absolute top-3 right-3 opacity-40">
        <svg width="22" height="16" viewBox="0 0 28 20" fill="none">
          <rect width="28" height="20" rx="4" fill="#FF0000" />
          <path d="M11 6L18 10L11 14V6Z" fill="white" />
        </svg>
      </div>

      {/* Sparkle decoration */}
      <div className="absolute top-[15%] left-[40%] opacity-40">
        <svg width="14" height="14" viewBox="0 0 35 35" fill="none">
          <path
            d="M16.6613 0.243845C16.5396 0.385878 15.7077 2.41493 14.7743 4.72804C12.7047 9.94269 11.8322 11.2413 9.2959 12.8239C9.01183 12.9863 6.92191 13.879 4.62909 14.7921C2.33627 15.7255 0.347802 16.598 0.185478 16.74C0.0231542 16.9023 -0.0377173 17.2067 0.0231542 17.4907C0.144897 17.9168 0.733321 18.2009 4.16241 19.5604C8.89009 21.4271 9.62055 21.8329 11.1626 23.2735C12.5424 24.6127 13.212 25.8504 15.1801 30.781C15.9715 32.8303 16.7222 34.4942 16.8034 34.4942C16.9048 34.4942 17.1077 34.555 17.2701 34.6159C17.7976 34.8188 18.1831 34.1492 19.6237 30.4158C21.4499 25.7895 21.8151 25.0794 23.1137 23.659C24.5138 22.117 25.2645 21.7112 30.2762 19.6821C33.9691 18.2009 34.5575 17.8966 34.6184 17.4907C34.659 17.227 34.5778 16.9023 34.4561 16.74C34.3141 16.5777 32.5488 15.8066 30.54 14.995C26.0355 13.2297 24.7369 12.5602 23.4992 11.363C22.0992 10.0036 21.6528 9.17165 19.8267 4.62659C18.9339 2.35405 18.102 0.385878 17.9802 0.243845C17.8585 0.122102 17.5541 0.000359316 17.3106 0.000359316C17.0671 0.000359316 16.7628 0.122102 16.6613 0.243845Z"
            fill="#fbbf24"
          />
        </svg>
      </div>

      {/* AI Generated badge */}
      <div
        className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full"
        style={{
          backgroundColor: 'rgba(255, 111, 97, 0.85)',
        }}
      >
        <svg width="10" height="10" viewBox="0 0 35 35" fill="none">
          <path
            d="M16.6613 0.243845C16.5396 0.385878 15.7077 2.41493 14.7743 4.72804C12.7047 9.94269 11.8322 11.2413 9.2959 12.8239C9.01183 12.9863 6.92191 13.879 4.62909 14.7921C2.33627 15.7255 0.347802 16.598 0.185478 16.74C0.0231542 16.9023 -0.0377173 17.2067 0.0231542 17.4907C0.144897 17.9168 0.733321 18.2009 4.16241 19.5604C8.89009 21.4271 9.62055 21.8329 11.1626 23.2735C12.5424 24.6127 13.212 25.8504 15.1801 30.781C15.9715 32.8303 16.7222 34.4942 16.8034 34.4942C16.9048 34.4942 17.1077 34.555 17.2701 34.6159C17.7976 34.8188 18.1831 34.1492 19.6237 30.4158C21.4499 25.7895 21.8151 25.0794 23.1137 23.659C24.5138 22.117 25.2645 21.7112 30.2762 19.6821C33.9691 18.2009 34.5575 17.8966 34.6184 17.4907C34.659 17.227 34.5778 16.9023 34.4561 16.74C34.3141 16.5777 32.5488 15.8066 30.54 14.995C26.0355 13.2297 24.7369 12.5602 23.4992 11.363C22.0992 10.0036 21.6528 9.17165 19.8267 4.62659C18.9339 2.35405 18.102 0.385878 17.9802 0.243845C17.8585 0.122102 17.5541 0.000359316 17.3106 0.000359316C17.0671 0.000359316 16.7628 0.122102 16.6613 0.243845Z"
            fill="white"
          />
        </svg>
        <span
          className="text-[10px] font-medium"
          style={{ color: 'white', fontFamily: 'var(--font-heading)' }}
        >
          AI Generated
        </span>
      </div>
    </div>
  )
}
