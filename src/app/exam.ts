import { useSyncExternalStore } from 'react'
import type { Basket } from '../content/exam'

// The exam in progress, kept on this device so a cook can plan in the morning and cook in the evening.

export type Stage = 'intro' | 'basket' | 'plan' | 'cook' | 'done'

export interface ExamState {
  stage: Stage
  basket: Basket
  answers: Record<string, string>
  checks: number[]
  passed: boolean
}

const KEY = 'academy.exam'
const empty: ExamState = { stage: 'intro', basket: [], answers: {}, checks: [], passed: false }
const listeners = new Set<() => void>()

function load(): ExamState {
  try {
    return { ...empty, ...(JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<ExamState>) }
  } catch {
    return empty
  }
}

let state = load()

export function setExam(patch: Partial<ExamState>) {
  state = { ...state, ...patch }
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    /* storage blocked: the exam lasts until the tab closes */
  }
  listeners.forEach((l) => l())
}

export function useExam(): ExamState {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => state,
  )
}
