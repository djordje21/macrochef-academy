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
window.addEventListener('hashchange', () => {
  if (pushing) pushing = false
  else depth = Math.max(0, depth - 1)
  current = read()
  listeners.forEach((l) => l())
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
  pushing = true
  if (replace) location.replace(hash)
  else {
    depth++
    location.hash = hash
  }
  // A new screen starts at the top; Back keeps the browser's own scroll restore.
  window.scrollTo(0, 0)
}

/** Back within the app, or to the home screen when the screen was opened directly. */
export function goBack() {
  if (depth > 0) history.back()
  else navigate('/', undefined, true)
}
