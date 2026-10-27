import { useState } from 'react'
import { allLessons, grades, upcoming } from '../content'
import { navigate } from '../app/router'
import { markWelcomed } from '../app/progress'
import { useT } from '../i18n/useT'
import { Photo } from '../components/Photo'
import { LangSwitch } from '../components/LangSwitch'
import { Drawing } from '../drawings'
import { ModeCards } from '../components/ModeCards'
import './Landing.css'

const steps = allLessons.reduce((sum, x) => sum + x.steps.length, 0)
// Step 4 of 2.3 Diced onion: the horizontal cuts, shown as a sample of a real step.
const demo = allLessons.find((x) => x.id === '2.3')!.steps[3]

/**
 * The first page a visitor sees. The hero plays public/media/hero.mp4 when that file exists
 * and falls back to the grade-1 photo when it does not.
 */
export function Landing() {
  const { t, c } = useT()
  const [video, setVideo] = useState(true)
  const grade = grades[0]

  const start = () => {
    markWelcomed()
    navigate('/', undefined, true)
  }

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
        <div className="landing-bar">
          <span className="home-brand">{t('landing.eyebrow')}</span>
          <LangSwitch />
        </div>
        <div className="landing-copy enter-up">
          <h1>{t('landing.title')}</h1>
          <p>{t('landing.sub')}</p>
          <button className="cta" onClick={start}>
            {t('landing.cta')} <span aria-hidden="true">→</span>
          </button>
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

        <section>
          <h2>{t('landing.modesTitle')}</h2>
          <ModeCards />
        </section>

        <section>
          <h2>{t('landing.howTitle')}</h2>
          <div className="landing-how">
            <div className="how-demo">
              <span className="how-num">4</span>
              <p className="how-step">{c(demo.text)}</p>
              <div className="param">
                {demo.params?.map((p, i) => (
                  <span key={i}>{c(p)}</span>
                ))}
              </div>
              <Drawing id="onionHorizontal" />
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
            {upcoming.map((g) => (
              <button key={g.n} className={`lg-card g${g.n}`} onClick={() => navigate(`/grade/${g.n}`)}>
                <Photo name={g.photo} />
                <div>
                  <span className="next-top">
                    <span className="label">{t('grade.label', { n: g.n })}</span>
                    <span className="next-pill">{t('grade.soon')}</span>
                  </span>
                  <b>{c(g.title)}</b>
                  <small>{c(g.tagline)}</small>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="landing-chef">
          <span className="label">{t('landing.chefTitle')}</span>
          <h2>{t('landing.chefName')}</h2>
          <span className="chef-role">{t('landing.chefRole')}</span>
          <p>{t('landing.chefText')}</p>
        </section>

        <section className="landing-mc">
          <h2>{t('landing.mcTitle')}</h2>
          <p className="muted">{t('landing.mcText')}</p>
        </section>

        <button className="cta" onClick={start}>
          {t('landing.cta')} <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
