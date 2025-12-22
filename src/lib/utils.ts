import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { THUMBNAIL_IMAGES } from './constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomThumbnails(count: number): string[] {
  const shuffled = [...THUMBNAIL_IMAGES].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
