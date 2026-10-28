import { useState } from 'react'
import { allLessons, findLesson } from '../content'
import { doneCount, markDone } from '../app/progress'
import { considerPrompt } from '../app/share'
import { navigate } from '../app/router'
import { useT } from '../i18n/useT'
import './LessonEnd.css'
import { Oops } from '../components/Oops'

export function LessonEnd({ id }: { id: string }) {
  const { t, c } = useT()
  const [picked, setPicked] = useState<number | null>(null)
  const found = findLesson(id)
  if (!found) return <Oops kind="missing" />
  const { lesson, module } = found
  const { think, mistake, recipe } = lesson

  const finish = () => {
    markDone(lesson.id)
    considerPrompt(doneCount())
    const next = allLessons[allLessons.indexOf(lesson) + 1]
    // Straight on to the next lesson inside the module; back to the module when it is done.
    if (next && findLesson(next.id)?.module === module) navigate(`/lesson/${next.id}`, undefined, true)
    else navigate(`/module/${module.id}`, undefined, true)
  }

  return (
    <div className="screen lesson-end">
      <div className="stepbar" aria-hidden="true">
        {lesson.steps.map((_, i) => (
          <i key={i} className="on" />
        ))}
      </div>
      <div className="topbar">
        <span>
          {lesson.id} {c(lesson.title)}
        </span>
        <span className="mono">{t('end.title')}</span>
      </div>

      <div className="warn-box">
        <span className="label">{t('end.mistake')}</span>
        <b>{c(mistake.title)}</b>
        <span className="muted">{c(mistake.fix)}</span>
      </div>

      <div className="think">
        <span className="label">{t('end.think')}</span>
        <h2>{c(think.question)}</h2>
        <div className="options">
          {think.options.map((o, i) => {
            const state = picked == null ? '' : i === think.answer ? 'right' : i === picked ? 'wrong' : 'dim'
            return (
              <button key={i} className={`option ${state}`} onClick={() => setPicked(i)} disabled={picked != null}>
                <i>{'ABC'[i]}</i>
                {c(o)}
              </button>
            )
          })}
        </div>
        {picked != null && (
          <p className="explain">
            <b>{t(picked === think.answer ? 'end.right' : 'end.wrong')}</b> {c(think.explain)}
          </p>
        )}
      </div>

      {recipe && (
        <div className="recipe">
          <span className="label">{t('end.recipe')}</span>
          <b>{c(recipe.name)}</b>
          <div className="macros">
            <span className="p">
              {recipe.protein}
              <small>{t('macro.p')}</small>
            </span>
            <span className="c">
              {recipe.carbs}
              <small>{t('macro.c')}</small>
            </span>
            <span className="f">
              {recipe.fat}
              <small>{t('macro.f')}</small>
            </span>
            <span>
              {recipe.kcal}
              <small>kcal · {t('end.per100')}</small>
            </span>
          </div>
        </div>
      )}

      <div className="lesson-go">
        <button className="cta" onClick={finish}>
          {t('end.complete')}
        </button>
      </div>
    </div>
  )
}
