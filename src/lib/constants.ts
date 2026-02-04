export const NAV_ITEMS = [
  { label: "What's New", href: '/whats-new' },
  { label: 'Blog', href: '/blog' },
  { label: 'Free Tools', href: '/tools' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const THUMBNAIL_IMAGES = [
  'youtube-thumbnail-new (1).webp',
  'youtube-thumbnail-new (2).webp',
  'youtube-thumbnail-new (3).webp',
  'youtube-thumbnail-new (4).webp',
  'youtube-thumbnail-new (5).webp',
  'YouTube-thumbnail-featuring-Cristiano-Ronaldo-shoc.webp',
  'Split-screen-YouTube-thumbnail-Left-side-Cristiano.webp',
  'asdqwe.webp',
  'YouTube-thumbnail-featuring-Drake-holding-a-phone-.webp',
  'YouTube-thumbnail-featuring-Kanye-West-mid-gesture.webp',
  'YouTube-thumbnail-featuring-Dwayne-Johnson-sitting.webp',
  'YouTube-thumbnail-featuring-Mahatma-Gandhi-angrily.webp',
  'YouTube-thumbnail-Bill-Gates-standing-outdoors-in-.webp',
  'Barack-Obama-sitting-on-the-floor-of-a-minimalist-.webp',
  'YouTube-thumbnail-featuring-Mark-Zuckerberg-wearin.webp',
  'YouTube-thumbnail-featuring-Socrates-pointing-at-t.webp',
  'YouTube-thumbnail-featuring-Isaac-Newton-pointing-.webp',
  'Alone.Stranded..webp',
  'Only HOpe.webp',
] as const

export const COLORS = {
  primary: '#ff6f61',
  primaryHover: '#e85a4d',
} as const

// Real YouTube video data for thumbnail previewer
export const YOUTUBE_VIDEOS = [
  {
    id: '1',
    title: 'Survive 30 Days Trapped In The Sky, Win $250,000',
    channel: 'MrBeast',
    channelAvatar: 'https://yt3.googleusercontent.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s900-c-k-c0x00ffffff-no-rj',
    views: '95M views',
    timestamp: '2 months ago',
    duration: '21:32',
    thumbnail: 'https://i.ytimg.com/vi/ZFoNBxpXen4/maxresdefault.jpg',
    verified: true,
  },
  {
    id: '2',
    title: 'There Is Something Faster Than Light',
    channel: 'Veritasium',
    channelAvatar: 'https://yt3.googleusercontent.com/7vCbvtCqtjQ3YLgsJt7Y952MQV1sBvhllSCSxHP8_sVZdcPCBrITfhkN2RdyCuwPnsByq-1GoA=s900-c-k-c0x00ffffff-no-rj',
    views: '28M views',
    timestamp: '1 year ago',
    duration: '19:42',
    thumbnail: 'https://i.ytimg.com/vi/NIk_0AW5hFU/maxresdefault.jpg',
    verified: true,
  },
  {
    id: '3',
    title: 'The Strange Math That Predicts (Almost) Anything',
    channel: 'Veritasium',
    channelAvatar: 'https://yt3.googleusercontent.com/7vCbvtCqtjQ3YLgsJt7Y952MQV1sBvhllSCSxHP8_sVZdcPCBrITfhkN2RdyCuwPnsByq-1GoA=s900-c-k-c0x00ffffff-no-rj',
    views: '14M views',
    timestamp: '8 months ago',
    duration: '23:15',
    thumbnail: 'https://i.ytimg.com/vi/KZeIEiBrT_w/maxresdefault.jpg',
    verified: true,
  },
  {
    id: '4',
    title: 'Minecraft Speedrunner VS 3 Hunters REVIVAL',
    channel: 'Dream',
    channelAvatar: 'https://yt3.googleusercontent.com/In7JtEzLm2klae8nEa04D9OEYn_Sz8DUCEEs3lon3db0d2B7Ng4-jNRWv3C5hetujaqAj9mwBg=s900-c-k-c0x00ffffff-no-rj',
    views: '5.7M views',
    timestamp: '3 weeks ago',
    duration: '38:24',
    thumbnail: 'https://i.ytimg.com/vi/Bx2ejavSVSw/maxresdefault.jpg',
    verified: true,
  },
  {
    id: '5',
    title: 'iSHOWSPEED\'S FORTNITE ICON SKIN REVEAL!',
    channel: 'IShowSpeed',
    channelAvatar: 'https://yt3.googleusercontent.com/ieK0j0sDqI_AHDwYxZ2Wly07-R7PG4S3YMtxOWCEe1QH-I0FgimJ92tlydQa6M78YD0VaywCaw=s160-c-k-c0x00ffffff-no-rj',
    views: '12M views',
    timestamp: '1 week ago',
    duration: '15:47',
    thumbnail: 'https://i.ytimg.com/vi/EaH24ooWkWc/maxresdefault.jpg',
    verified: true,
  },
] as const

export type YouTubeVideo = typeof YOUTUBE_VIDEOS[number]
