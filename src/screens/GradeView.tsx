import { useState, type CSSProperties } from 'react'
import { grades, upcoming } from '../content'
import { useDone } from '../app/progress'
import { goBack, navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Photo } from '../components/Photo'
import { GradeCards } from '../components/GradeCards'
import './GradeView.css'
import { Oops } from '../components/Oops'

// Grades whose plan the user opened, kept for the session so Back from a module finds it still open.
const openPlans = new Set<number>()

/** A short intro to one grade: who it is for, what you can do at the end, its modules and exam. */
export function GradeView({ n }: { n: number }) {
  const { t, c } = useT()
  const done = useDone()
  const [showPlan, setShowPlanState] = useState(() => openPlans.has(n))
  const setShowPlan = (update: (v: boolean) => boolean) =>
    setShowPlanState((v) => {
      const next = update(v)
      if (next) openPlans.add(n)
      else openPlans.delete(n)
      return next
    })
  const written = grades.find((g) => g.n === n)
  const planned = upcoming.find((g) => g.n === n)
  const grade = written ?? planned
  if (!grade) return <Oops kind="missing" />

  const lessons = written ? written.modules.flatMap((m) => m.lessons) : []
  const plannedCount = written ? written.modules.reduce((sum, m) => sum + (m.planned?.length ?? 0), 0) : 0
  const open = lessons.length > 0
  const minutes = lessons.reduce((sum, x) => sum + x.minutes, 0)
  const next = lessons.find((x) => !done.has(x.id))

  return (
    <div className={`grade-view g${n}`} style={{ '--accent': `var(--grade-${n})` } as CSSProperties}>
      <header className="gv-cover">
        <Photo name={grade.photo} />
        <button className="back gv-back" onClick={goBack}>
          ‹ {t('nav.book')}
        </button>
        <div className="gv-title enter-up">
          <span className="label">{t('grade.label', { n })}</span>
          <h1>{c(grade.title)}</h1>
          <p>{c(grade.tagline)}</p>
        </div>
      </header>

      <div className="screen gv-body">
        <div className="facts">
          <div>
            <b>{written ? written.modules.length : planned!.plannedModules.length}</b>
            <span>{t('gradeview.modulesN')}</span>
          </div>
          <div>
            <b>{written ? lessons.length + plannedCount : '—'}</b>
            <span>{t('gradeview.lessonsN')}</span>
          </div>
          <div>
            <b>{open ? `~${Math.round(minutes / 60)} h` : '—'}</b>
            <span>{t('gradeview.read')}</span>
          </div>
        </div>

        <p className="note">
          <span className="label">{t('gradeview.forWho')}</span>
          {c(grade.audience)}
        </p>

        <div className="gv-outcome">
          <span className="label">{t('gradeview.outcome')}</span>
          <p>{c(grade.outcome)}</p>
        </div>

        {grade.exam && (
          <div className="gv-exam">
            <span className="label">{t('module.exam')}</span>
            <b>{c(grade.exam.title)}</b>
            <span className="muted">{c(grade.exam.text)}</span>
          </div>
        )}

        {open ? (
          <button className="cta split" onClick={() => navigate(next ? `/lesson/${next.id}` : '/exam')}>
            <span>
              {t(done.size ? 'home.continue' : 'home.start')}
              {next && (
                <small>
                  {next.id} {c(next.title)}
                </small>
              )}
            </span>
            <span aria-hidden="true">→</span>
          </button>
        ) : (
          <button className="cta" disabled>
            {t('gradeview.soonCta', { n: n - 1 })}
          </button>
        )}

        <button className="gv-plan-toggle" aria-expanded={showPlan} onClick={() => setShowPlan((v) => !v)}>
          {t(showPlan ? 'gradeview.hidePlan' : 'gradeview.showPlan')}
          <span aria-hidden="true">{showPlan ? '−' : '+'}</span>
        </button>

        {showPlan && (
          <div className="gv-modules">
            <span className="label">{t('gradeview.modules')}</span>
            {!open && <p className="muted gv-planned">{t('gradeview.planned')}</p>}
            <ol>
              {written
                ? written.modules.map((m) => (
                    <li key={m.id}>
                      <button onClick={() => navigate(`/module/${m.id}`)}>
                        <b>{c(m.title)}</b>
                        <span>{c(m.intro)}</span>
                      </button>
                    </li>
                  ))
                : planned!.plannedModules.map((m, i) => (
                    <li key={i}>
                      <div>
                        <b>{c(m)}</b>
                      </div>
                    </li>
                  ))}
            </ol>
          </div>
        )}

        <div className="gv-others">
          <span className="label">{t('gradeview.others')}</span>
          <GradeCards exclude={n} />
        </div>
      </div>
    </div>
  )
}
