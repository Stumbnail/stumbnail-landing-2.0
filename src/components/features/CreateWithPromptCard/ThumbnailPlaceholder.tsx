'use client'

interface ThumbnailPlaceholderProps {
  variant?: 'warm' | 'cool' | 'vibrant'
  width?: number
  height?: number
  rotation?: number
  className?: string
}

export function ThumbnailPlaceholder({
  variant = 'warm',
  width = 100,
  height = 56,
  rotation = 0,
  className = '',
}: ThumbnailPlaceholderProps) {
  const gradients = {
    warm: 'linear-gradient(135deg, rgba(255, 111, 97, 0.2) 0%, rgba(255, 111, 97, 0.08) 100%)',
    cool: 'linear-gradient(135deg, rgba(97, 165, 255, 0.2) 0%, rgba(97, 165, 255, 0.08) 100%)',
    vibrant: 'linear-gradient(135deg, rgba(165, 97, 255, 0.2) 0%, rgba(165, 97, 255, 0.08) 100%)',
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotation}deg)`,
        background: gradients[variant],
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Person silhouette placeholder (left side) */}
      <div
        className="absolute bottom-0 left-1.5"
        style={{ width: '28%', height: '60%' }}
      >
        {/* Body */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '50%',
            height: '50%',
            backgroundColor: 'var(--color-text-muted)',
            opacity: 0.15,
            borderRadius: '2px 2px 0 0',
          }}
        />
        {/* Head */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: '48%',
            width: '30%',
            aspectRatio: '1',
            backgroundColor: 'var(--color-text-muted)',
            opacity: 0.15,
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Text lines placeholder (right side) */}
      <div className="absolute top-1.5 right-1.5 flex flex-col gap-0.5 items-end">
        <div
          style={{
            width: '28px',
            height: '4px',
            backgroundColor: '#ff6f61',
            opacity: 0.5,
            borderRadius: '1px',
          }}
        />
        <div
          style={{
            width: '20px',
            height: '3px',
            backgroundColor: 'var(--color-text-muted)',
            opacity: 0.15,
            borderRadius: '1px',
          }}
        />
      </div>

      {/* YouTube play button indicator */}
      <div
        className="absolute bottom-1 right-1 flex items-center justify-center"
        style={{
          width: '14px',
          height: '10px',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          borderRadius: '2px',
        }}
      >
        <svg width="5" height="5" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}
