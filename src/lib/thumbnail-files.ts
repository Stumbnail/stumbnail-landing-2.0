import 'server-only'

import { readdir } from 'node:fs/promises'
import path from 'node:path'

const THUMBNAIL_DIRECTORY = path.join(process.cwd(), 'public', 'assets', 'images', 'thumbnails')
const IMAGE_FILE_PATTERN = /\.(avif|gif|jpe?g|png|webp)$/i

export async function getThumbnailFiles(): Promise<string[]> {
  const entries = await readdir(THUMBNAIL_DIRECTORY, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isFile() && IMAGE_FILE_PATTERN.test(entry.name))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }))
}
