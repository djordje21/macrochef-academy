import { useEffect } from 'react'
import { formatClock, stopTimer, useTimer } from '../app/timer'
import { useT } from '../i18n/useT'
import './TimerPill.css'

/** The running kitchen timer, visible on every screen until it is dismissed. */
export function TimerPill() {
  const { t } = useT()
  const { timer, left } = useTimer()
  // Screens add room at the bottom while the pill is up, so it never hides the last line.
  useEffect(() => {
    document.documentElement.classList.toggle('has-timer', Boolean(timer))
  }, [timer])
  if (!timer) return null
  const up = left === 0
  return (
    <div className={`timer-pill ${up ? 'up' : ''}`} role="status" aria-live="polite">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 2M9 2h6" />
      </svg>
      <span className="timer-time mono">{up ? t('timer.up') : formatClock(left)}</span>
      <span className="timer-label">{timer.label}</span>
      <button onClick={stopTimer} aria-label={t('timer.stop')}>
        ✕
      </button>
      <i className="timer-bar" style={{ transform: `scaleX(${timer.total ? left / timer.total : 0})` }} />
    </div>
  )
}
