import type { Lang } from '../content/types'

// The other two projects of the family. `?lang=` carries the language across, since each app keeps its own storage.
const PORTFOLIO = 'https://portfolio.macrochef.workers.dev'
const MACROCHEF = 'https://macrochef.macrochef.workers.dev/'

export const portfolioUrl = (lang: Lang) => `${PORTFOLIO}/${lang}/`

export function macrochefUrl(lang: Lang, path = '', params?: Record<string, string | number>) {
  const q = params ? `?${new URLSearchParams(Object.entries(params).map(([k, v]) => [k, String(v)]))}` : ''
  return `${MACROCHEF}?lang=${lang}${path ? `#${path}${q}` : ''}`
}
