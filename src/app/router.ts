import { useSyncExternalStore } from 'react'

// Tiny hash router: "#/lesson/2.3?step=3". Hash routing needs no server rewrites and survives home-screen launch.

export interface Route {
  path: string
  params: URLSearchParams
}

function read(): Route {
  const raw = location.hash.replace(/^#/, '') || '/'
  const [path, query = ''] = raw.split('?')
  return { path, params: new URLSearchParams(query) }
}

let current = read()
const listeners = new Set<() => void>()
// How many in-app screens sit behind the current one, so "back" never leaves the app.
let depth = 0
let pushing = false
// Where each screen was scrolled to, so Back returns to the same spot. The browser's own restore
// runs before React has rebuilt the screen and lands short, so it is turned off and done here.
const scrolls = new Map<string, number>()
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

window.addEventListener('hashchange', () => {
  const back = !pushing
  if (pushing) pushing = false
  else depth = Math.max(0, depth - 1)
  current = read()
  listeners.forEach((l) => l())
  if (back) {
    const y = scrolls.get(location.hash) ?? 0
    // Two frames: one for React to render the screen, one for images and layout to settle.
    requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, y)))
  }
})

export function useRoute(): Route {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => current,
  )
}

export function navigate(path: string, params?: Record<string, string | number | undefined>, replace = false) {
  const q = new URLSearchParams()
  Object.entries(params ?? {}).forEach(([k, v]) => v != null && v !== '' && q.set(k, String(v)))
  const hash = `#${path}${q.size ? `?${q}` : ''}`
  if (hash === location.hash) return
  scrolls.set(location.hash, window.scrollY)
  pushing = true
  if (replace) location.replace(hash)
  else {
    depth++
    location.hash = hash
  }
  // A new screen starts at the top; Back restores the saved position (see the hashchange listener).
  window.scrollTo(0, 0)
}

/** Back within the app, or to the home screen when the screen was opened directly. */
export function goBack() {
  if (depth > 0) history.back()
  else navigate('/', undefined, true)
}
