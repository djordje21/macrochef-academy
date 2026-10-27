import { navigate } from '../app/router'
import { useT } from '../i18n/useT'
import './ModeCards.css'

/** The two ways into a lesson: read the theory anywhere, or practise it step by step at the stove. */
export function ModeCards({ lessonId, minutes }: { lessonId?: string; minutes?: number }) {
  const { t } = useT()
  const go = (to: string) => lessonId && navigate(`/lesson/${lessonId}/${to}`)
  const Tag = lessonId ? 'button' : 'div'
  return (
    <div className="modes">
      <Tag className="mode theory" onClick={() => go('theory')}>
        <span className="mode-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z" />
          </svg>
        </span>
        <span className="mode-text">
          <b>
            {t('mode.theory')} <small>· {minutes ? t('mode.read', { n: minutes }) : t('mode.theoryWhere')}</small>
          </b>
          <span>{t('mode.theoryText')}</span>
        </span>
      </Tag>
      <Tag className="mode practice" onClick={() => go('practice')}>
        <span className="mode-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 11h14v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6zM3 11h18M9 7c-1-1.5 1-2.5 0-4M15 7c-1-1.5 1-2.5 0-4" />
          </svg>
        </span>
        <span className="mode-text">
          <b>
            {t('mode.practice')} <small>· {t('mode.practiceWhere')}</small>
          </b>
          <span>{t('mode.practiceText')}</span>
        </span>
      </Tag>
    </div>
  )
}
