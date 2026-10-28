import { useEffect, useRef, useState } from 'react'
import { allLessons, gradeList, grades, isOpen } from '../content'
import { useDone } from '../app/progress'
import { navigate } from '../app/router'
import { markWelcomed } from '../app/progress'
import { useT } from '../i18n/useT'
import { Photo } from '../components/Photo'
import { Drawing } from '../drawings'
import { ModeCards } from '../components/ModeCards'
import './Landing.css'

const steps = allLessons.reduce((sum, x) => sum + x.steps.length, 0)
// Step 4 of 2.3 Diced onion: the horizontal cuts, shown as a sample of a real step.
const demoLesson = allLessons.find((x) => x.id === '2.3')!
const demo = demoLesson.steps[3]

/**
 * The first page a visitor sees. The hero plays public/media/hero.mp4 when that file exists
 * and falls back to the grade-1 photo when it does not.
 */
export function Landing() {
  const { t, c } = useT()
  const [video, setVideo] = useState(true)
  const grade = grades[0]

  // A slim call to action follows the reader once the hero's button scrolls away,
  // and steps aside when the closing call to action comes into view.
  const heroCta = useRef<HTMLDivElement>(null)
  const finalCta = useRef<HTMLElement>(null)
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const seen = new Map<Element, boolean>()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.isIntersecting))
      const heroGone = heroCta.current ? seen.get(heroCta.current) === false : false
      const finalShown = finalCta.current ? seen.get(finalCta.current) === true : false
      setSticky(heroGone && !finalShown)
    })
    if (heroCta.current) io.observe(heroCta.current)
    if (finalCta.current) io.observe(finalCta.current)
    return () => io.disconnect()
  }, [])

  const done = useDone()
  const next = allLessons.find((x) => !done.has(x.id))
  const started = done.size > 0

  const start = () => {
    markWelcomed()
    navigate('/', undefined, true)
  }
  // Someone who has already begun goes straight back to their next lesson.
  const resume = () => {
    markWelcomed()
    navigate('/', undefined, true)
    if (next) navigate(`/lesson/${next.id}`)
  }

  const mainCta = started ? (
    <button className="cta split" onClick={resume}>
      <span>
        {t('home.continue')}
        {next && (
          <small>
            {next.id} {c(next.title)} · {t('home.min', { n: next.minutes })}
          </small>
        )}
      </span>
      <span aria-hidden="true">→</span>
    </button>
  ) : (
    <button className="cta" onClick={start}>
      {t('landing.cta')} <span aria-hidden="true">→</span>
    </button>
  )

  return (
    <div className="landing">
      <header className="landing-hero">
        <div className="photo">
          <picture>
            <source media="(max-width: 700px)" srcSet={`${import.meta.env.BASE_URL}media/hero-portrait.webp`} />
            <img src={`${import.meta.env.BASE_URL}media/hero-wide.webp`} alt="" decoding="async" />
          </picture>
        </div>
        {video && (
          <video
            className="landing-video"
            src={`${import.meta.env.BASE_URL}media/hero.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideo(false)}
            aria-hidden="true"
          />
        )}
        <div className="landing-copy enter-up">
          <span className="label landing-eyebrow">{t('landing.eyebrow')}</span>
          <h1>{t('landing.title')}</h1>
          <p>{t('landing.sub')}</p>
          <div ref={heroCta}>{mainCta}</div>
          <ul className="landing-trust">
            {(['trust1', 'trust2', 'trust3'] as const).map((k) => (
              <li key={k}>{t(`landing.${k}`)}</li>
            ))}
          </ul>
          {started && (
            <button className="landing-book" onClick={start}>
              {t('nav.book')} →
            </button>
          )}
        </div>
      </header>

      <div className="landing-body">
        <div className="landing-stats">
          <div>
            <b>{allLessons.length}</b>
            <span>{t('landing.lessons')}</span>
          </div>
          <div>
            <b>{steps}</b>
            <span>{t('landing.steps')}</span>
          </div>
          <div>
            <b>3</b>
            <span>{t('landing.langs')}</span>
          </div>
        </div>

        <section className="landing-pain">
          <h2>{t('landing.painTitle')}</h2>
          <ul>
            {(['pain1', 'pain2', 'pain3', 'pain4'] as const).map((k) => (
              <li key={k}>{t(`landing.${k}`)}</li>
            ))}
          </ul>
          <p className="pain-answer">{t('landing.painAnswer')}</p>
        </section>

        <section className="landing-chef">
          <span className="label">{t('landing.chefTitle')}</span>
          <h2>{t('landing.chefName')}</h2>
          <span className="chef-role">{t('landing.chefRole')}</span>
          <blockquote>„{t('landing.quote')}“</blockquote>
        </section>

        <section>
          <h2>{t('landing.vsTitle')}</h2>
          <div className="landing-vs" role="table">
            <div className="vs-row vs-head" role="row">
              <span role="columnheader" />
              <span role="columnheader">{t('landing.vsThem')}</span>
              <span role="columnheader">{t('landing.vsUs')}</span>
            </div>
            {([1, 2, 3, 4, 5] as const).map((n) => (
              <div key={n} className="vs-row" role="row">
                <span role="rowheader">{t(`landing.vs${n}l`)}</span>
                <span role="cell">{t(`landing.vs${n}a`)}</span>
                <span role="cell">{t(`landing.vs${n}b`)}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>{t('landing.outTitle')}</h2>
          <ul className="landing-out">
            {(['out1', 'out2', 'out3', 'out4', 'out5', 'out6'] as const).map((k) => (
              <li key={k}>{t(`landing.${k}`)}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{t('landing.modesTitle')}</h2>
          <ModeCards />
        </section>

        <section>
          <h2>{t('landing.howTitle')}</h2>
          <div className="landing-how">
            <div className="how-demo">
              <span className="how-example">
                <span className="label">{t('landing.example', { id: demoLesson.id, title: c(demoLesson.title) })}</span>
                <span className="mono">{t('landing.stepOf', { n: 4, total: demoLesson.steps.length })}</span>
              </span>
              <span className="how-num">4</span>
              <p className="how-step">{c(demo.text)}</p>
              <div className="param">
                {demo.params?.map((p, i) => (
                  <span key={i}>{c(p)}</span>
                ))}
              </div>
              <Drawing id="onionHorizontal" />
              <button className="how-open" onClick={() => navigate(`/lesson/${demoLesson.id}`)}>
                {t('landing.exampleOpen')} →
              </button>
            </div>
            <ol className="how-list">
              {(['how1', 'how2', 'how3', 'how4'] as const).map((k) => (
                <li key={k}>
                  <b>{t(`landing.${k}`)}</b>
                  <span>{t(`landing.${k}d`)}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2>{t('landing.gradesTitle')}</h2>
          <div className="landing-grades">
            <button className="lg-card g1" onClick={() => navigate(`/grade/1`)}>
              <Photo name={grade.photo} />
              <div>
                <span className="next-top">
                  <span className="label">{t('grade.label', { n: 1 })}</span>
                  <span className="next-pill open">{t('landing.open')}</span>
                </span>
                <b>{c(grade.title)}</b>
                <small>{c(grade.tagline)}</small>
              </div>
            </button>
            {gradeList.filter((g) => g.n !== 1).map((g) => (
              <button key={g.n} className={`lg-card g${g.n}`} onClick={() => navigate(`/grade/${g.n}`)}>
                <Photo name={g.photo} />
                <div>
                  <span className="next-top">
                    <span className="label">{t('grade.label', { n: g.n })}</span>
                    <span className={`next-pill ${isOpen(g.n) ? 'open' : ''}`}>{t(isOpen(g.n) ? 'landing.open' : 'grade.soon')}</span>
                  </span>
                  <b>{c(g.title)}</b>
                  <small>{c(g.tagline)}</small>
                </div>
              </button>
            ))}
          </div>
          <span className="label">{t('menu.modules', { n: 1 })}</span>
          <div className="landing-modules">
            {grade.modules.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  markWelcomed()
                  navigate(`/module/${m.id}`)
                }}
              >
                <span className="mono">M{m.n}</span>
                {c(m.title)}
              </button>
            ))}
          </div>
          <button className="how-open" onClick={() => navigate('/grade/1')}>
            {t('landing.plan')} →
          </button>
        </section>

        <section>
          <h2>{t('landing.forTitle')}</h2>
          <div className="landing-for">
            {([1, 2, 3] as const).map((n) => (
              <div key={n}>
                <span className="mono">0{n}</span>
                <b>{t(`landing.for${n}t`)}</b>
                <span>{t(`landing.for${n}d`)}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="landing-faq">
          <h2>{t('landing.faqTitle')}</h2>
          {([1, 2, 3, 4, 5] as const).map((n) => (
            <details key={n}>
              <summary>{t(`landing.faq${n}q`)}</summary>
              <p>{t(`landing.faq${n}a`)}</p>
            </details>
          ))}
        </section>

        <section className="landing-final" ref={finalCta}>
          <h2>{t('landing.finalTitle')}</h2>
          <p className="muted">{t('landing.finalText')}</p>
          {mainCta}
        </section>
      </div>

      <div className={`landing-sticky ${sticky ? 'on' : ''}`} aria-hidden={!sticky} inert={!sticky}>
        {mainCta}
      </div>
    </div>
  )
}
