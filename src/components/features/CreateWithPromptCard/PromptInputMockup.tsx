'use client'

interface PromptInputMockupProps {
  currentText?: string
}

export function PromptInputMockup({ currentText = '' }: PromptInputMockupProps) {
  return (
    <div
      className="relative w-full flex items-center justify-between gap-2 px-2 sm:px-3 md:px-4"
      style={{
        height: '48px',
        backgroundColor: 'var(--color-button-bg)',
        borderRadius: '12px',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Placeholder/Typed text */}
      <span
        className="text-xs sm:text-sm truncate flex-1 min-w-0"
        style={{
          color: currentText ? 'var(--color-foreground)' : 'var(--color-text-muted)',
          fontFamily: 'var(--font-heading)',
          opacity: currentText ? 1 : 0.6,
        }}
      >
        {currentText || 'Describe your thumbnail'}
      </span>

      {/* Right side buttons */}
      <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
        {/* Model Selector Button - Hidden on small screens */}
        <div
          className="hidden sm:flex items-center gap-1 px-2 md:px-3 cursor-pointer"
          style={{
            height: '36px',
            backgroundColor: 'var(--color-background)',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Sparkle/AI Icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M16.6613 0.243845C16.5396 0.385878 15.7077 2.41493 14.7743 4.72804C12.7047 9.94269 11.8322 11.2413 9.2959 12.8239C9.01183 12.9863 6.92191 13.879 4.62909 14.7921C2.33627 15.7255 0.347802 16.598 0.185478 16.74C0.0231542 16.9023 -0.0377173 17.2067 0.0231542 17.4907C0.144897 17.9168 0.733321 18.2009 4.16241 19.5604C8.89009 21.4271 9.62055 21.8329 11.1626 23.2735C12.5424 24.6127 13.212 25.8504 15.1801 30.781C15.9715 32.8303 16.7222 34.4942 16.8034 34.4942C16.9048 34.4942 17.1077 34.555 17.2701 34.6159C17.7976 34.8188 18.1831 34.1492 19.6237 30.4158C21.4499 25.7895 21.8151 25.0794 23.1137 23.659C24.5138 22.117 25.2645 21.7112 30.2762 19.6821C33.9691 18.2009 34.5575 17.8966 34.6184 17.4907C34.659 17.227 34.5778 16.9023 34.4561 16.74C34.3141 16.5777 32.5488 15.8066 30.54 14.995C26.0355 13.2297 24.7369 12.5602 23.4992 11.363C22.0992 10.0036 21.6528 9.17165 19.8267 4.62659C18.9339 2.35405 18.102 0.385878 17.9802 0.243845C17.8585 0.122102 17.5541 0.000359316 17.3106 0.000359316C17.0671 0.000359316 16.7628 0.122102 16.6613 0.243845Z"
              fill="#ff6f61"
            />
          </svg>
          <span
            className="text-xs hidden md:inline"
            style={{
              color: 'var(--color-foreground)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Model
          </span>
          {/* Dropdown chevron */}
          <svg
            width="8"
            height="5"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block flex-shrink-0"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="var(--color-text-muted)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Add/Reference Button */}
        <div
          className="flex items-center justify-center cursor-pointer flex-shrink-0"
          style={{
            width: '36px',
            height: '36px',
            backgroundColor: 'var(--color-background)',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Add circle icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="#ff6f61"
              strokeWidth="1.5"
            />
            <path
              d="M12 8V16M8 12H16"
              stroke="#ff6f61"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Submit Button */}
        <div
          className="flex items-center justify-center cursor-pointer flex-shrink-0"
          style={{
            width: '36px',
            height: '36px',
            backgroundColor: '#ff6f61',
            borderRadius: '8px',
          }}
        >
          {/* Send icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.312 3.7579C21.3766 1.34952 24.9089 0.145331 26.8088 2.04522C28.7086 3.94512 27.5044 7.47744 25.0962 14.5421L23.4561 19.353C21.6066 24.7785 20.6817 27.4913 19.1572 27.7158C18.7474 27.7761 18.3232 27.7399 17.9176 27.6097C16.4095 27.1255 15.6122 24.2652 14.0176 18.5447C13.664 17.2759 13.4872 16.6414 13.0844 16.1568C12.9675 16.0162 12.8379 15.8866 12.6973 15.7697C12.2127 15.3669 11.5782 15.19 10.3094 14.8364C4.58885 13.2418 1.72859 12.4446 1.24437 10.9364C1.11418 10.5309 1.07785 10.1066 1.13821 9.69679C1.36271 8.17233 4.07551 7.24753 9.50108 5.39794L14.312 3.7579Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
