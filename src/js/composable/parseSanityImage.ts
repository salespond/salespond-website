import sanity from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(sanity)

export const parseSanityImage = (source: SanityImageSource) => {
  return builder.image(source)
}
