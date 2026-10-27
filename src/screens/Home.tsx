import type { CSSProperties } from 'react'
import { allLessons, findLesson, grades, upcoming } from '../content'
import { useDone } from '../app/progress'
import { navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Photo } from '../components/Photo'
import { LangSwitch } from '../components/LangSwitch'
import './Home.css'

export function Home() {
  const { t, c } = useT()
  const done = useDone()
  const grade = grades[0]
  const next = allLessons.find((x) => !done.has(x.id)) ?? allLessons[0]
  const nextModule = findLesson(next.id)?.module
  const started = done.size > 0

  return (
    <div className="home">
      <header className="home-cover">
        <Photo name={grade.photo} />
        <div className="home-bar">
          <button className="home-brand" onClick={() => navigate('/about')}>
            {t('app.name')} <span className="home-about">· {t('landing.about')}</span>
          </button>
          <LangSwitch />
        </div>
        <div className="home-title enter-up">
          <span className="label">{t('grade.label', { n: grade.n })}</span>
          <h1>{c(grade.title)}</h1>
          <p>{c(grade.tagline)}</p>
        </div>
      </header>

      <div className="screen home-body">
        <div className="chips">
          <button className="chip on">
            {grade.n}. {c(grade.title)}
          </button>
          {upcoming.map((g) => (
            <button key={g.n} className="chip" disabled>
              {g.n}. {c(g.title)}
            </button>
          ))}
        </div>

        <button className="cta split nudge" onClick={() => navigate(`/lesson/${next.id}`)}>
          <span>
            {t(started ? 'home.continue' : 'home.start')}
            <small>
              {next.id} {c(next.title)} · {t('home.min', { n: next.minutes })}
            </small>
          </span>
          <span aria-hidden="true">→</span>
        </button>

        <div className="rows">
          {grade.modules.map((m, i) => {
            const total = m.lessons.length || m.planned?.length || 0
            const finished = m.lessons.filter((x) => done.has(x.id)).length
            const cls = [
              'row',
              m.lessons.length === 0 ? 'soon' : '',
              m === nextModule ? 'current' : '',
              m.lessons.length > 0 && finished === total ? 'done' : '',
            ].join(' ')
            return (
              <button
                key={m.id}
                className={`${cls} enter`}
                style={{ '--i': i } as CSSProperties}
                onClick={() => navigate(`/module/${m.id}`)}
              >
                <span className="n">M{m.n}</span>
                <span>{c(m.title)}</span>
                <span className="s">
                  {m.lessons.length ? t('module.done', { d: finished, n: total }) : t('module.soon')}
                </span>
                <span className="meter" aria-hidden="true">
                  <i style={{ width: `${total ? (finished / total) * 100 : 0}%` }} />
                </span>
              </button>
            )
          })}
          {grade.exam && (
            <div className="row soon enter" style={{ '--i': grade.modules.length } as CSSProperties}>
              <span className="n">∎</span>
              <span>{c(grade.exam.title)}</span>
              <span className="s">{t('module.exam')}</span>
            </div>
          )}
        </div>

        <div className="home-next">
          {upcoming.map((g) => (
            <div key={g.n} className={`next-grade g${g.n}`}>
              <Photo name={g.photo} />
              <div className="next-text">
                <span className="label">
                  {t('grade.label', { n: g.n })} · {t('grade.locked', { n: g.n - 1 })}
                </span>
                <b>{c(g.title)}</b>
                <small>{c(g.tagline)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
