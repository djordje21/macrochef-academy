import { useEffect, useState, useSyncExternalStore } from 'react'

// One kitchen timer for the whole app. It keeps running while the cook moves on to the next step,
// and it works from timestamps, so a sleeping screen does not slow it down.

export interface Timer {
  label: string
  endAt: number
  total: number
}

let current: Timer | null = null
let audio: AudioContext | null = null
let alarm = 0
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

/** "3 min", "2–3 min", "30–60 s", "3 h" → seconds, taking the lower bound of a range. Null when not a timer. */
export function parseDuration(text: string): number | null {
  if (/^do |pakovanja/.test(text)) return null
  const m = text.match(/(\d+)(?:[–-]\d+)?\s*(min|s|h)\b/)
  if (!m) return null
  const value = Number(m[1]) * (m[2] === 'h' ? 3600 : m[2] === 'min' ? 60 : 1)
  return value >= 10 ? value : null
}

function beep() {
  if (!audio) return
  const now = audio.currentTime
  for (let i = 0; i < 3; i++) {
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.frequency.value = 880
    gain.gain.setValueAtTime(0.0001, now + i * 0.45)
    gain.gain.exponentialRampToValueAtTime(0.4, now + i * 0.45 + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.45 + 0.3)
    osc.connect(gain).connect(audio.destination)
    osc.start(now + i * 0.45)
    osc.stop(now + i * 0.45 + 0.32)
  }
}

export function startTimer(label: string, seconds: number) {
  // Audio may only start from a tap, so the context is created here rather than when the time is up.
  try {
    audio ??= new AudioContext()
    void audio.resume()
  } catch {
    audio = null
  }
  window.clearTimeout(alarm)
  current = { label, endAt: Date.now() + seconds * 1000, total: seconds }
  alarm = window.setTimeout(() => {
    beep()
    navigator.vibrate?.([300, 150, 300, 150, 300])
    emit()
  }, seconds * 1000)
  emit()
}

export function stopTimer() {
  window.clearTimeout(alarm)
  current = null
  emit()
}

/** The running timer and the seconds left, refreshed every second. */
export function useTimer(): { timer: Timer | null; left: number } {
  const timer = useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => current,
  )
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (!timer) return
    const id = window.setInterval(() => setNow(Date.now()), 250)
    return () => window.clearInterval(id)
  }, [timer])
  return { timer, left: timer ? Math.max(0, Math.ceil((timer.endAt - now) / 1000)) : 0 }
}

export function formatClock(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  const mm = h ? String(m).padStart(2, '0') : String(m)
  return `${h ? `${h}:` : ''}${mm}:${String(s).padStart(2, '0')}`
}
