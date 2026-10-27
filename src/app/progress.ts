import { useSyncExternalStore } from 'react'

// Finished lessons, kept on this device only. A Set of lesson ids such as "2.3".

const KEY = 'academy.done'
const listeners = new Set<() => void>()

function load(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) ?? '[]') as string[])
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

export function useDone(): Set<string> {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => done,
  )
}
