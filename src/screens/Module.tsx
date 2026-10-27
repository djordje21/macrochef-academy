import { findModule } from '../content'
import { useDone } from '../app/progress'
import { goBack, navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Photo } from '../components/Photo'
import './Module.css'

export function ModuleScreen({ id }: { id: string }) {
  const { t, c } = useT()
  const done = useDone()
  const module = findModule(id)
  if (!module) return null
  const next = module.lessons.find((x) => !done.has(x.id))

  return (
    <div className="module">
      <header className="module-cover">
        <Photo name={module.photo} />
        <button className="back module-back" onClick={goBack}>
          ‹ {t('grade.label', { n: 1 })}
        </button>
        <div className="module-title">
          <span className="label">
            M{module.n} · {t('module.lessons', { n: module.lessons.length || module.planned?.length || 0 })}
          </span>
          <h1>{c(module.title)}</h1>
        </div>
      </header>

      <div className="screen">
        <p className="muted">{c(module.intro)}</p>
        <div className="rows">
          {module.lessons.map((x) => (
            <button
              key={x.id}
              className={`row ${done.has(x.id) ? 'done' : ''} ${x === next ? 'current' : ''}`}
              onClick={() => navigate(`/lesson/${x.id}`)}
            >
              <span className="n">{x.id}</span>
              <span>{c(x.title)}</span>
              <span className="s">{done.has(x.id) ? '✓' : t('home.min', { n: x.minutes })}</span>
            </button>
          ))}
          {module.planned?.map((x, i) => (
            <div key={i} className="row soon">
              <span className="n">
                {module.n}.{i + 1}
              </span>
              <span>{c(x.title)}</span>
              <span className="s">{t('module.soon')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
