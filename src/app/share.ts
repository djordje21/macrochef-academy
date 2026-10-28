import { useSyncExternalStore } from 'react'

// Sharing the app, and the one polite moment to ask for it: after a few finished lessons,
// when the cook has clearly found something they like. Asked at most twice, never after a share.

const KEY = 'academy.share'
const FIRST_AT = 3
const AGAIN_AFTER = 15
const MAX_ASKS = 2

interface State {
  shared: boolean
  asks: number
  /** Finished-lesson count when the user last said "later". */
  laterAt: number
}

function load(): State {
  try {
    return { shared: false, asks: 0, laterAt: 0, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') }
  } catch {
    return { shared: false, asks: 0, laterAt: 0 }
  }
}

let state = load()
let visible = false
const listeners = new Set<() => void>()

function save(next: State) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    /* storage blocked: the prompt may come back next launch */
  }
}

function emit() {
  listeners.forEach((l) => l())
}

/** Called after a lesson is finished, with how many are finished in total. */
export function considerPrompt(finished: number) {
  if (visible || state.shared || state.asks >= MAX_ASKS) return
  const due = state.asks === 0 ? finished >= FIRST_AT : finished >= state.laterAt + AGAIN_AFTER
  if (!due) return
  save({ ...state, asks: state.asks + 1 })
  visible = true
  emit()
}

export function dismissPrompt(finished: number) {
  save({ ...state, laterAt: finished })
  visible = false
  emit()
}

export function closePrompt() {
  visible = false
  emit()
}

export function useSharePrompt(): boolean {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => visible,
  )
}

/**
 * Opens the phone's own share sheet; on desktops without one, copies the link instead.
 * Resolves to what happened, so the caller can say "link copied".
 */
export async function shareApp(title: string, text: string): Promise<'shared' | 'copied' | 'cancelled'> {
  const url = location.origin + '/'
  let result: 'shared' | 'copied' | 'cancelled' = 'cancelled'
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url })
      result = 'shared'
    } catch {
      return 'cancelled'
    }
  } else {
    try {
      await navigator.clipboard.writeText(`${text} ${url}`)
      result = 'copied'
    } catch {
      return 'cancelled'
    }
  }
  save({ ...state, shared: true })
  return result
}
