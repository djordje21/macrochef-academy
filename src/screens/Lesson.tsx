import { findLesson } from '../content'
import { useDone } from '../app/progress'
import { goBack, navigate } from '../app/router'
import { useT } from '../i18n/useT'
import './Lesson.css'

export function LessonScreen({ id }: { id: string }) {
  const { t, c } = useT()
  const done = useDone()
  const found = findLesson(id)
  if (!found) return null
  const { lesson, module } = found

  return (
    <div className="screen lesson">
      <div className="topbar">
        <button className="back" onClick={goBack}>
          ‹ M{module.n} {c(module.title)}
        </button>
        <span className="mono">{lesson.id}</span>
      </div>

      <h1 className="lesson-title">{c(lesson.title)}</h1>

      <p className="note">
        <span className="label">{t('lesson.goal')}</span>
        {c(lesson.goal)}
      </p>

      <div className="facts">
        <div>
          <b>{t('home.min', { n: lesson.minutes })}</b>
          <span>{t('lesson.duration')}</span>
        </div>
        <div>
          <b>{lesson.steps.length}</b>
          <span>{t('lesson.steps')}</span>
        </div>
        <div>
          <b>{c(lesson.key.value)}</b>
          <span>{c(lesson.key.label)}</span>
        </div>
      </div>

      <div className="need">
        <span className="label">{t('lesson.need')}</span>
        {lesson.need.map((x, i) => (
          <div key={i}>
            <span>{c(x.item)}</span>
            <span className="mono">{c(x.qty)}</span>
          </div>
        ))}
      </div>

      <p className="note muted">
        <span className="label">{t('lesson.why')}</span>
        {c(lesson.why)}
      </p>

      <div className="lesson-go">
        <button className="cta" onClick={() => navigate(`/lesson/${lesson.id}/step`, { n: 1 })}>
          {done.has(lesson.id) ? t('lesson.again') : t('lesson.start')}
        </button>
      </div>
    </div>
  )
}
