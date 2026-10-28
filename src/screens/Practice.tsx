import { findLesson } from '../content'
import { goBack, navigate } from '../app/router'
import { useT } from '../i18n/useT'
import './Practice.css'
import { Oops } from '../components/Oops'

/** The door into the kitchen: what to set up before the first step. */
export function Practice({ id }: { id: string }) {
  const { t, c } = useT()
  const found = findLesson(id)
  if (!found) return <Oops kind="missing" />
  const { lesson } = found

  return (
    <div className="screen practice">
      <div className="topbar">
        <button className="back" onClick={goBack}>
          ‹ {lesson.id} {c(lesson.title)}
        </button>
      </div>

      <span className="label">
        {t('mode.practice')} · {t('mode.practiceWhere')}
      </span>
      <h1 className="lesson-title">{t('practice.title')}</h1>

      <div className="need">
        <span className="label">{t('lesson.need')}</span>
        {lesson.need.map((x, i) => (
          <div key={i}>
            <span>{c(x.item)}</span>
            <span className="mono">{c(x.qty)}</span>
          </div>
        ))}
      </div>

      <ol className="practice-list">
        {(['practice.l1', 'practice.l2', 'practice.l3', 'practice.l4'] as const).map((k) => (
          <li key={k}>{t(k)}</li>
        ))}
      </ol>

      <button className="practice-theory" onClick={() => navigate(`/lesson/${lesson.id}/theory`)}>
        {t('practice.tip')} →
      </button>

      <div className="lesson-go">
        <button className="cta" onClick={() => navigate(`/lesson/${lesson.id}/step`, { n: 1 })}>
          {t('practice.go')}
        </button>
      </div>
    </div>
  )
}
