import { findLesson } from '../content'
import { goBack, navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Drawing } from '../drawings'
import './Theory.css'

/** The whole lesson on one scrolling page, for reading away from the stove. */
export function Theory({ id }: { id: string }) {
  const { t, c } = useT()
  const found = findLesson(id)
  if (!found) return null
  const { lesson } = found

  return (
    <div className="screen theory">
      <div className="topbar">
        <button className="back" onClick={goBack}>
          ‹ {lesson.id} {c(lesson.title)}
        </button>
      </div>

      <span className="label">
        {t('mode.theory')} · {t('mode.read', { n: lesson.minutes })}
      </span>
      <h1 className="lesson-title">{c(lesson.title)}</h1>
      <p className="note">
        <span className="label">{t('lesson.goal')}</span>
        {c(lesson.goal)}
      </p>
      <p className="note muted">
        <span className="label">{t('lesson.why')}</span>
        {c(lesson.why)}
      </p>

      <ol className="theory-steps">
        {lesson.steps.map((step, i) => (
          <li key={i}>
            <span className="theory-num">{i + 1}</span>
            <div className="theory-step">
              <p className="theory-text">{c(step.text)}</p>
              {step.params && (
                <div className="param">
                  {step.params.map((p, k) => (
                    <span key={k}>{c(p)}</span>
                  ))}
                </div>
              )}
              {step.drawing && (
                <div className="step-drawing">
                  <Drawing id={step.drawing} />
                </div>
              )}
              <p className="note ok">
                <span className="label">{t('step.doneWhen')}</span>
                {c(step.done)}
              </p>
              {step.why && (
                <p className="note muted">
                  <span className="label">{t('step.why')}</span>
                  {c(step.why)}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="warn-box">
        <span className="label">{t('end.mistake')}</span>
        <b>{c(lesson.mistake.title)}</b>
        <span className="muted">{c(lesson.mistake.fix)}</span>
      </div>

      <div className="theory-go">
        <button className="cta" onClick={() => navigate(`/lesson/${lesson.id}/end`)}>
          {t('mode.toCheck')}
        </button>
        <button className="ghost" onClick={() => navigate(`/lesson/${lesson.id}/practice`)}>
          {t('mode.toPractice')}
        </button>
      </div>
    </div>
  )
}
