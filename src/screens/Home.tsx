import { allLessons, grades } from '../content'
import { useDone } from '../app/progress'
import { navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Photo } from '../components/Photo'
import { GradeCards } from '../components/GradeCards'
import { Projects } from '../components/Projects'
import './Home.css'

/** The textbook's front page: continue where you stopped, then the three grades as cards. */
export function Home() {
  const { t, c } = useT()
  const done = useDone()
  const grade = grades[0]
  const next = allLessons.find((x) => !done.has(x.id)) ?? allLessons[0]
  const started = done.size > 0

  return (
    <div className="home">
      <header className="home-cover">
        <Photo name={grade.photo} />
        <div className="home-title enter-up">
          <span className="label">Macro Chef Academy</span>
          <h1>{t('landing.gradesTitle')}</h1>
          <p>{t('landing.title')}</p>
        </div>
      </header>

      <div className="screen home-body">
        <button className="cta split nudge" onClick={() => navigate(`/lesson/${next.id}`)}>
          <span>
            {t(started ? 'home.continue' : 'home.start')}
            <small>
              {next.id} {c(next.title)} · {t('home.min', { n: next.minutes })}
            </small>
          </span>
          <span aria-hidden="true">→</span>
        </button>

        <span className="label home-grades-label">{t('menu.grades')}</span>
        <GradeCards />

        <Projects />
      </div>
    </div>
  )
}
