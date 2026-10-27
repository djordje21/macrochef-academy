import { grades } from '../content'
import { basketItems, cookChecks, decisions, drawBasket, pantry } from '../content/exam'
import { setExam, useExam } from '../app/exam'
import { goBack, navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Photo } from '../components/Photo'
import './Exam.css'

const ORDER = ['intro', 'basket', 'plan', 'cook', 'done'] as const

/** Grade 1 final exam: draw a fridge, write three decisions, cook with the module habits, finish. */
export function Exam() {
  const { t, c } = useT()
  const exam = useExam()
  const grade = grades[0]
  const items = basketItems(exam.basket)
  const at = ORDER.indexOf(exam.stage)

  const lessonLinks = (ids: string[]) => (
    <span className="exam-links">
      {t('exam.seeLesson')}{' '}
      {ids.map((id) => (
        <button key={id} onClick={() => navigate(`/lesson/${id}`)}>
          {id}
        </button>
      ))}
    </span>
  )

  return (
    <div className="exam">
      {exam.stage === 'intro' && (
        <header className="exam-cover">
          <Photo name="m4.webp" />
        </header>
      )}
      <div className="screen exam-body">
        <div className="topbar">
          <button className="back" onClick={goBack}>
            {t('exam.back')}
          </button>
          <span className="mono">{grade.exam && c(grade.exam.title)}</span>
        </div>
        <div className="stepbar" aria-hidden="true">
          {ORDER.slice(1).map((s, i) => (
            <i key={s} className={i < at ? 'on' : ''} />
          ))}
        </div>

        {exam.stage === 'intro' && (
          <div className="exam-stage" key="intro">
            <span className="label">{t('exam.label')}</span>
            <h1>{grade.exam && c(grade.exam.title)}</h1>
            <p className="muted">{t('exam.intro')}</p>
            <ul className="exam-rules">
              <li>{t('exam.rules1')}</li>
              <li>{t('exam.rules2')}</li>
              <li>{t('exam.rules3')}</li>
            </ul>
            <button className="cta" onClick={() => setExam({ stage: 'basket', basket: drawBasket(), answers: {}, checks: [] })}>
              {t('exam.draw')}
            </button>
          </div>
        )}

        {exam.stage === 'basket' && (
          <div className="exam-stage" key="basket">
            <h1>{t('exam.basket')}</h1>
            <div className="fridge">
              {items.map((x, i) => (
                <div key={i} className="fridge-item" style={{ animationDelay: `${i * 0.06}s` }}>
                  <span>{c(x.name)}</span>
                  <span className="mono">{c(x.qty)}</span>
                </div>
              ))}
            </div>
            <p className="note muted">
              <span className="label">{t('exam.pantry')}</span>
              {pantry.map((p) => c(p)).join(', ')}
            </p>
            <div className="exam-nav">
              <button className="ghost" onClick={() => setExam({ basket: drawBasket() })}>
                {t('exam.redraw')}
              </button>
              <button className="cta" onClick={() => setExam({ stage: 'plan' })}>
                {t('exam.toPlan')}
              </button>
            </div>
          </div>
        )}

        {exam.stage === 'plan' && (
          <div className="exam-stage" key="plan">
            <h1>{t('exam.plan')}</h1>
            <p className="muted">{t('exam.planIntro')}</p>
            {decisions.map((d, i) => (
              <label key={d.key} className="decision">
                <span className="decision-head">
                  <b className="mono">0{i + 1}</b> {c(d.title)}
                </span>
                <span className="muted">{c(d.hint)}</span>
                <textarea
                  id={`exam-${d.key}`}
                  rows={3}
                  placeholder={t('exam.write')}
                  value={exam.answers[d.key] ?? ''}
                  onChange={(e) => setExam({ answers: { ...exam.answers, [d.key]: e.target.value } })}
                />
                {lessonLinks(d.lessons)}
              </label>
            ))}
            <button
              className="cta"
              disabled={decisions.some((d) => !(exam.answers[d.key] ?? '').trim())}
              onClick={() => setExam({ stage: 'cook' })}
            >
              {t('exam.toCook')}
            </button>
          </div>
        )}

        {exam.stage === 'cook' && (
          <div className="exam-stage" key="cook">
            <h1>{t('exam.cook')}</h1>
            <p className="muted">{t('exam.cookIntro')}</p>
            <div className="checks">
              {cookChecks.map((x, i) => {
                const on = exam.checks.includes(i)
                return (
                  <button
                    key={i}
                    className={`done-when ${on ? 'on' : ''}`}
                    aria-pressed={on}
                    onClick={() => setExam({ checks: on ? exam.checks.filter((k) => k !== i) : [...exam.checks, i] })}
                  >
                    <span className="check" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <polyline points="5 12.5 10 17 19 7" pathLength={1} />
                      </svg>
                    </span>
                    <span>
                      {c(x.text)} <span className="mono muted">{x.lesson}</span>
                    </span>
                  </button>
                )
              })}
            </div>
            <button
              className="cta"
              disabled={exam.checks.length < cookChecks.length}
              onClick={() => setExam({ stage: 'done', passed: true })}
            >
              {t('exam.toFinish')}
            </button>
          </div>
        )}

        {exam.stage === 'done' && (
          <div className="exam-stage" key="done">
            <div className="diploma">
              <span className="label">{t('grade.label', { n: 1 })} · {c(grade.title)}</span>
              <h1>{t('exam.doneTitle')}</h1>
              <p>{t('exam.doneText')}</p>
            </div>
            <span className="label">{t('exam.yourPlan')}</span>
            <p className="muted">{items.map((x) => c(x.name)).join(' · ')}</p>
            <div className="rows">
              {decisions.map((d) => (
                <div key={d.key} className="plan-row">
                  <b>{c(d.title)}</b>
                  <span>{exam.answers[d.key]}</span>
                </div>
              ))}
            </div>
            <p className="note">{t('exam.macro')}</p>
            <button className="ghost" onClick={() => setExam({ stage: 'basket', basket: drawBasket(), answers: {}, checks: [] })}>
              {t('exam.again')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
