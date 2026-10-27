import { useEffect, useState } from 'react'
import { findLesson } from '../content'
import { goBack, navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Drawing } from '../drawings'
import { useWakeLock } from '../app/useWakeLock'
import { parseDuration, startTimer } from '../app/timer'
import './Step.css'

/** One step per screen, read with wet hands next to the board: big type, one action, the screen stays on. */
export function StepScreen({ id, n }: { id: string; n: number }) {
  const { t, c } = useT()
  const [seen, setSeen] = useState(false)
  useWakeLock()
  // Each step starts unconfirmed.
  useEffect(() => setSeen(false), [n])

  const found = findLesson(id)
  if (!found) return null
  const { lesson } = found
  const total = lesson.steps.length
  const step = lesson.steps[Math.min(Math.max(n, 1), total) - 1]
  const last = n >= total

  const go = (to: number) => navigate(`/lesson/${id}/step`, { n: to }, true)

  return (
    <div className="screen step">
      <div className="stepbar" aria-hidden="true">
        {lesson.steps.map((_, i) => (
          <i key={i} className={i < n ? 'on' : ''} />
        ))}
      </div>
      <div className="topbar">
        <button className="back" onClick={() => navigate(`/lesson/${id}`, undefined, true)} aria-label="Close">
          ✕ <span>{c(lesson.title)}</span>
        </button>
        <span className="mono">{t('step.of', { n, total })}</span>
      </div>

      <div className="step-body" key={n}>
        <div className="step-num">{n}</div>
        <h1 className="step-text">{c(step.text)}</h1>
        {step.params && (
          <div className="param">
            {step.params.map((p, i) => {
              const seconds = parseDuration(p.sr)
              return seconds ? (
                <button
                  key={i}
                  className="param-timer"
                  onClick={() => startTimer(`${lesson.id} ${c(lesson.title)} · ${c(p)}`, seconds)}
                  aria-label={`${t('timer.start')} ${c(p)}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2.5 2M9 2h6" />
                  </svg>
                  {c(p)}
                </button>
              ) : (
                <span key={i}>{c(p)}</span>
              )
            })}
          </div>
        )}
        {step.drawing && (
          <div className="step-drawing">
            <Drawing id={step.drawing} />
          </div>
        )}

        <button className={`done-when ${seen ? 'on' : ''}`} onClick={() => setSeen((s) => !s)} aria-pressed={seen}>
          <span className="check" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <polyline points="5 12.5 10 17 19 7" pathLength={1} />
            </svg>
          </span>
          <span>
            <span className="label">{t('step.doneWhen')}</span>
            {c(step.done)}
          </span>
        </button>

        {step.why && (
          <p className="note muted">
            <span className="label">{t('step.why')}</span>
            {c(step.why)}
          </p>
        )}
      </div>

      <div className="step-nav">
        <button className="ghost" onClick={() => (n > 1 ? go(n - 1) : goBack())}>
          ‹ {t('step.prev')}
        </button>
        <button className="cta" onClick={() => (last ? navigate(`/lesson/${id}/end`, undefined, true) : go(n + 1))}>
          {last ? t('step.finish') : t('step.next')}
        </button>
      </div>
    </div>
  )
}
