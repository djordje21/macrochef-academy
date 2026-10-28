import { useSyncExternalStore } from 'react'

// Finished lessons, kept on this device only. A Set of lesson ids such as "2.3".

const KEY = 'academy.done'
const listeners = new Set<() => void>()

// Lesson ids before grade 1 grew from 8 to 16 modules, mapped to their new numbers.
const RENUMBERED: Record<string, string> = {
  ...Object.fromEntries([1, 2, 3, 4, 5, 6].map((i) => [`3.${i}`, `4.${i}`])),
  ...Object.fromEntries([1, 2, 3, 4, 5].map((i) => [`4.${i}`, `5.${i}`])),
  ...Object.fromEntries([1, 2, 3, 4, 5].map((i) => [`5.${i}`, `6.${i}`])),
  ...Object.fromEntries([1, 2, 3, 4, 5].map((i) => [`6.${i}`, `7.${i + 4}`])),
  '7.1': '8.1',
  '7.2': '8.6',
  '7.3': '9.8',
  '7.4': '9.1',
  '7.5': '3.2',
  ...Object.fromEntries([1, 2, 3, 4, 5].map((i) => [`8.${i}`, `10.${i}`])),
}
const SCHEME = 'academy.scheme'

function load(): Set<string> {
  try {
    let ids = JSON.parse(localStorage.getItem(KEY) ?? '[]') as string[]
    if (localStorage.getItem(SCHEME) !== '2') {
      ids = ids.map((id) => RENUMBERED[id] ?? id)
      localStorage.setItem(KEY, JSON.stringify(ids))
      localStorage.setItem(SCHEME, '2')
    }
    return new Set(ids)
  } catch {
    return new Set()
  }
}

let done = load()

export function markDone(id: string) {
  if (done.has(id)) return
  done = new Set(done).add(id)
  try {
    localStorage.setItem(KEY, JSON.stringify([...done]))
  } catch {
    /* storage blocked: progress lasts until the tab closes */
  }
  listeners.forEach((l) => l())
}

export function doneCount(): number {
  return done.size
}

export function useDone(): Set<string> {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => done,
  )
}

// The landing page opens every launch of the app; once passed, the app stays inside until it is
// opened again. Kept in memory on purpose, so each new launch starts on the landing page.
let welcomed = false

export function isWelcomed(): boolean {
  return welcomed
}

export function markWelcomed() {
  welcomed = true
}
