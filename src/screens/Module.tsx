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
  // Written and planned lessons in one list, in lesson order.
  const lessonNo = (id: string) => Number(id.split('.')[1])
  const rows = [...module.lessons.map((lesson) => ({ lesson })), ...(module.planned ?? [])].sort(
    (a, b) => lessonNo('lesson' in a ? a.lesson.id : a.id) - lessonNo('lesson' in b ? b.lesson.id : b.id),
  )

  return (
    <div className="module">
      <header className="module-cover">
        <Photo name={module.photo} />
        <button className="back module-back" onClick={goBack}>
          ‹ {t('grade.label', { n: 1 })}
        </button>
        <div className="module-title">
          <span className="label">
            M{module.n} · {t('module.lessons', { n: module.lessons.length + (module.planned?.length ?? 0) })}
          </span>
          <h1>{c(module.title)}</h1>
        </div>
      </header>

      <div className="screen">
        <p className="muted">{c(module.intro)}</p>
        <div className="rows">
          {rows.map((r) =>
            'lesson' in r ? (
              <button
                key={r.lesson.id}
                className={`row ${done.has(r.lesson.id) ? 'done' : ''} ${r.lesson === next ? 'current' : ''}`}
                onClick={() => navigate(`/lesson/${r.lesson.id}`)}
              >
                <span className="n">{r.lesson.id}</span>
                <span>{c(r.lesson.title)}</span>
                <span className="s">{done.has(r.lesson.id) ? '✓' : t('home.min', { n: r.lesson.minutes })}</span>
              </button>
            ) : (
              <div key={r.id} className="row soon">
                <span className="n">{r.id}</span>
                <span>{c(r.title)}</span>
                <span className="s">{t('module.soon')}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
