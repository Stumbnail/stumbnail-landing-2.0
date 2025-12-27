'use client'

import Image from 'next/image'

const youtubeLink = "https://www.youtube.com/watch?v=ZFoNBxpXen4"

export function YouTubeLinkCard() {
  return (
    <div className="relative w-full max-w-full overflow-hidden lg:overflow-visible">
      {/* Floating Thumbnail - Top Right */}
      <div
        className="absolute -top-6 -right-10 w-28 h-16 rounded-lg overflow-hidden shadow-xl z-20 hidden lg:block"
        style={{
          transform: 'rotate(8deg)',
          border: '2px solid var(--color-border)',
        }}
      >
        <Image
          src="/assets/images/thumbnails/YouTube-thumbnail-featuring-Dwayne-Johnson-sitting.webp"
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
          src="/assets/images/thumbnails/YouTube-thumbnail-featuring-Mahatma-Gandhi-angrily.webp"
          alt="Floating thumbnail"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Card */}
      <div
        className="relative w-full p-4 sm:p-8 md:p-11 overflow-hidden"
        style={{
          backgroundColor: 'var(--color-background-alt)',
          border: '1px solid var(--color-border)',
          borderRadius: '24px',
          maxWidth: '100%',
        }}
      >
        {/* Header and Input Container */}
        <div
          className="rounded-xl p-3 sm:p-5 mb-4 overflow-hidden"
          style={{
            backgroundColor: 'var(--color-background)',
          }}
        >
          {/* Top Row: Thumbnail Preview + Input Section */}
          <div className="flex gap-4 items-stretch">
            {/* Video Thumbnail Preview */}
            <div
              className="relative flex-shrink-0 rounded-xl overflow-hidden hidden sm:block"
              style={{
                width: '180px',
                aspectRatio: '16/9',
              }}
            >
              <Image
                src="/assets/illustration-assets/features/base-for-youtube-link-feature.webp"
                alt="Video thumbnail preview"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side: Title + Input */}
            <div className="flex-1 flex flex-col justify-center min-w-0 overflow-hidden">
              {/* Card Header */}
              <div className="mb-3">
                <h3
                  className="text-xl md:text-2xl font-semibold leading-normal"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-foreground)',
                  }}
                >
                  Paste a <span style={{ color: '#ff6f61' }}>Youtube Link</span>
                </h3>
              </div>

              {/* URL Input Mockup */}
              <div
                className="flex items-center gap-3 px-4 overflow-hidden"
                style={{
                  height: '56px',
                  backgroundColor: 'var(--color-button-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--color-border)',
                  maxWidth: '100%',
                }}
              >
                {/* Link Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    stroke="#ff6f61"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    stroke="#ff6f61"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* URL Text */}
                <span
                  className="text-sm truncate flex-1 min-w-0"
                  style={{
                    color: 'var(--color-foreground)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {youtubeLink}
                </span>
                {/* Submit button */}
                <div
                  className="flex items-center justify-center cursor-pointer flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ff6f61',
                    borderRadius: '10px',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 29 29"
                    fill="none"
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
          </div>
        </div>

        {/* Curved Connection Line - Hidden on mobile */}
        <div className="hidden sm:flex justify-end mb-2">
          <svg
            width="280"
            height="94"
            viewBox="0 0 595 199"
            className="mr-4 md:mr-[60px]"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 111, 97, 0.4))',
            }}
          >
            <path
              d="M422.37 114.244L421.943 116.198L422.37 114.244ZM-4.23565e-06 198.059L21.5129 189.661L3.48338 175.23L-4.23565e-06 198.059ZM21.2579 176.065L22.5434 177.597C27.1584 173.725 32.4998 169.588 38.5812 165.314L37.4313 163.678L36.2814 162.042C30.1084 166.379 24.6764 170.586 19.9724 174.533L21.2579 176.065ZM54.5879 152.535L55.618 154.25C61.1131 150.948 67.0283 147.631 73.3692 144.352L72.4506 142.575L71.5319 140.799C65.1149 144.117 59.1253 147.476 53.5578 150.821L54.5879 152.535ZM90.9267 133.71L91.739 135.537C97.6981 132.889 103.959 130.301 110.524 127.806L109.814 125.937L109.104 124.067C102.469 126.588 96.1401 129.204 90.1144 131.882L90.9267 133.71ZM129.143 119.168L129.755 121.072C136.014 119.061 142.509 117.143 149.244 115.34L148.727 113.408L148.209 111.476C141.411 113.296 134.853 115.233 128.532 117.264L129.143 119.168ZM168.632 108.583L169.058 110.537C175.539 109.126 182.217 107.824 189.092 106.648L188.754 104.676L188.417 102.705C181.483 103.892 174.747 105.205 168.207 106.629L168.632 108.583ZM208.939 101.666L209.192 103.65C215.773 102.811 222.517 102.087 229.427 101.489L229.255 99.4967L229.083 97.5041C222.119 98.1061 215.32 98.8361 208.686 99.6825L208.939 101.666ZM249.653 98.1339L249.748 100.132C256.395 99.8156 263.184 99.6164 270.114 99.5429L270.093 97.543L270.072 95.5431C263.093 95.6171 256.255 95.8178 249.558 96.1361L249.653 98.1339ZM290.545 97.6883L290.496 99.6877C297.164 99.8513 303.955 100.13 310.869 100.531L310.985 98.5347L311.101 96.538C304.143 96.1342 297.307 95.8536 290.594 95.6889L290.545 97.6883ZM331.396 100.048L331.217 102.04C337.88 102.64 344.65 103.352 351.529 104.183L351.769 102.197L352.008 100.212C345.09 99.3764 338.279 98.6599 331.575 98.0563L331.396 100.048ZM372.086 104.95L371.789 106.928C378.381 107.918 385.068 109.015 391.85 110.223L392.201 108.254L392.552 106.285C385.735 105.07 379.012 103.968 372.382 102.973L372.086 104.95ZM412.244 112.098L411.842 114.057C415.187 114.744 418.554 115.457 421.943 116.198L422.37 114.244L422.797 112.29C419.392 111.546 416.008 110.829 412.646 110.139L412.244 112.098ZM422.37 114.244L421.943 116.198C425.088 116.885 428.191 117.457 431.253 117.92L431.552 115.943L431.851 113.965C428.876 113.515 425.858 112.959 422.797 112.29L422.37 114.244ZM450.162 117.432L450.148 119.432C456.672 119.479 462.981 119.022 469.077 118.12L468.784 116.142L468.491 114.163C462.598 115.035 456.494 115.478 450.177 115.432L450.162 117.432ZM486.961 111.974L487.559 113.883C493.685 111.964 499.552 109.599 505.162 106.866L504.286 105.068L503.41 103.27C497.971 105.92 492.289 108.21 486.364 110.066L486.961 111.974ZM520.456 95.7509L521.568 97.4132C526.857 93.8744 531.869 90.0259 536.603 85.9572L535.299 84.4404L533.996 82.9236C529.374 86.8958 524.49 90.6456 519.344 94.0886L520.456 95.7509ZM548.782 71.5292L550.238 72.9007C554.631 68.2377 558.721 63.4286 562.508 58.5766L560.931 57.346L559.354 56.1155C555.638 60.8775 551.629 65.5916 547.327 70.1578L548.782 71.5292ZM571.779 42.1513L573.454 43.2446C577.061 37.7186 580.277 32.2736 583.103 27.0624L581.345 26.109L579.587 25.1556C576.81 30.2761 573.65 35.6273 570.104 41.0581L571.779 42.1513ZM589.521 9.33527L591.357 10.1269C592.709 6.98994 593.872 4.0505 594.845 1.36114L592.964 0.680659L591.084 0.000180926C590.14 2.6091 589.007 5.47436 587.684 8.54367L589.521 9.33527Z"
              fill="#FF6F61"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 50%, transparent 100%)',
                maskSize: '200% 100%',
                animation: 'mask-flow-yt 2s linear infinite'
              }}
            />
          </svg>
          <style>{`
            @keyframes mask-flow-yt {
              0% { mask-position: 100% 0; }
              100% { mask-position: -100% 0; }
            }
          `}</style>
        </div>
        {/* Spacer for mobile when curve is hidden */}
        <div className="sm:hidden h-4" />

        {/* Result Preview - Final Edited Thumbnail */}
        <div
          className="relative overflow-hidden w-full"
          style={{
            aspectRatio: '16/9',
            borderRadius: '12px',
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/illustration-assets/features/Swap-the-face-of-Mr-Beast-in-the-thumbnail-with-th.webp"
              alt="AI Edited Thumbnail"
              fill
              className="object-cover"
            />
          </div>

          {/* AI Generated badge */}
          <div
            className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(255, 111, 97, 0.95)',
              boxShadow: '0 0 10px rgba(255, 111, 97, 0.4)',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 35 35" fill="none">
              <path
                d="M16.6613 0.243845C16.5396 0.385878 15.7077 2.41493 14.7743 4.72804C12.7047 9.94269 11.8322 11.2413 9.2959 12.8239C9.01183 12.9863 6.92191 13.879 4.62909 14.7921C2.33627 15.7255 0.347802 16.598 0.185478 16.74C0.0231542 16.9023 -0.0377173 17.2067 0.0231542 17.4907C0.144897 17.9168 0.733321 18.2009 4.16241 19.5604C8.89009 21.4271 9.62055 21.8329 11.1626 23.2735C12.5424 24.6127 13.212 25.8504 15.1801 30.781C15.9715 32.8303 16.7222 34.4942 16.8034 34.4942C16.9048 34.4942 17.1077 34.555 17.2701 34.6159C17.7976 34.8188 18.1831 34.1492 19.6237 30.4158C21.4499 25.7895 21.8151 25.0794 23.1137 23.659C24.5138 22.117 25.2645 21.7112 30.2762 19.6821C33.9691 18.2009 34.5575 17.8966 34.6184 17.4907C34.659 17.227 34.5778 16.9023 34.4561 16.74C34.3141 16.5777 32.5488 15.8066 30.54 14.995C26.0355 13.2297 24.7369 12.5602 23.4992 11.363C22.0992 10.0036 21.6528 9.17165 19.8267 4.62659C18.9339 2.35405 18.102 0.385878 17.9802 0.243845C17.8585 0.122102 17.5541 0.000359316 17.3106 0.000359316C17.0671 0.000359316 16.7628 0.122102 16.6613 0.243845Z"
                fill="white"
              />
            </svg>
            <span
              className="text-[11px] font-medium"
              style={{ color: 'white', fontFamily: 'var(--font-heading)' }}
            >
              AI Edited
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
