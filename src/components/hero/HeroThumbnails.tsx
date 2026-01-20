import Image from 'next/image'

export function HeroThumbnails() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Left thumbnail - rotated CCW */}
      <div
        className="hidden xl:block absolute top-[35%] left-[-5%] 2xl:left-[0%]"
        style={{
          transform: 'rotate(-12deg)',
          width: '280px',
        }}
      >
        <div className="relative border-[3px] border-white/20 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/images/thumbnails/asdqwe.webp"
            alt="Skull Trooper Thumbnail"
            width={640}
            height={360}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right thumbnail - rotated CW */}
      <div
        className="hidden xl:block absolute top-[38%] right-[-5%] 2xl:right-[0%]"
        style={{
          transform: 'rotate(12deg)',
          width: '280px',
        }}
      >
        <div className="relative border-[3px] border-white/20 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/images/thumbnails/youtube-thumbnail-new (1).webp"
            alt="Featured Thumbnail"
            width={640}
            height={360}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
