import { useState } from 'react'
import { navigate } from '../app/router'
import { useT } from '../i18n/useT'
import './ModeCards.css'

type Mode = 'theory' | 'practice'

const ICON: Record<Mode, string> = {
  theory: 'M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z',
  practice: 'M5 11h14v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6zM3 11h18M9 7c-1-1.5 1-2.5 0-4M15 7c-1-1.5 1-2.5 0-4',
}

/**
 * A switch between the two parts of a lesson. The panel below slides to the chosen part and
 * explains it; inside a lesson the button underneath opens that part.
 */
export function ModeCards({ lessonId, minutes }: { lessonId?: string; minutes?: number }) {
  const { t } = useT()
  const [mode, setMode] = useState<Mode>('theory')
  const points = mode === 'theory' ? (['mode.t1', 'mode.t2', 'mode.t3'] as const) : (['mode.p1', 'mode.p2', 'mode.p3'] as const)

  return (
    <div className={`modes ${mode}`}>
      <div className="mode-switch" role="tablist">
        <i className="mode-thumb" aria-hidden="true" />
        {(['theory', 'practice'] as const).map((m) => (
          <button key={m} role="tab" aria-selected={mode === m} className={mode === m ? 'on' : ''} onClick={() => setMode(m)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={ICON[m]} />
            </svg>
            {t(`mode.${m}`)}
          </button>
        ))}
      </div>

      <div className="mode-panel" key={mode} role="tabpanel">
        <span className="label">
          {mode === 'theory'
            ? minutes
              ? t('mode.read', { n: minutes })
              : t('mode.theoryWhere')
            : t('mode.practiceWhere')}
        </span>
        <p className="mode-lead">{t(mode === 'theory' ? 'mode.theoryText' : 'mode.practiceText')}</p>
        <ul>
          {points.map((k) => (
            <li key={k}>{t(k)}</li>
          ))}
        </ul>
        {lessonId && (
          <button className="cta" onClick={() => navigate(`/lesson/${lessonId}/${mode}`)}>
            {t(mode === 'theory' ? 'mode.goTheory' : 'mode.goPractice')} <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </div>
  )
}
