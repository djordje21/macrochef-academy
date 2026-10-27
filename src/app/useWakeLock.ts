import { useEffect } from 'react'

/** Keeps the screen on while a lesson is open; hands are busy with a knife, not the phone. */
export function useWakeLock() {
  useEffect(() => {
    let lock: WakeLockSentinel | null = null
    let alive = true
    const request = async () => {
      try {
        lock = (await navigator.wakeLock?.request('screen')) ?? null
        if (!alive) void lock?.release()
      } catch {
        /* not supported or refused: the screen just follows the phone's own timeout */
      }
    }
    void request()
    // The browser drops the lock when the app goes to the background; take it again on return.
    const onVisible = () => document.visibilityState === 'visible' && void request()
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      alive = false
      document.removeEventListener('visibilitychange', onVisible)
      void lock?.release()
    }
  }, [])
}
