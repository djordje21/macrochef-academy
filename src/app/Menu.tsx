import { useEffect, useState } from 'react'
import { gradeList, grades, isOpen } from '../content'
import { useDone } from './progress'
import { useExam } from './exam'
import { navigate, useRoute } from './router'
import { useT } from '../i18n/useT'
import { LangSwitch } from '../components/LangSwitch'
import { Logo } from '../components/Logo'
import './Menu.css'

/** The burger button and the drawer behind it: every place in the app, two taps away. */
export function Menu() {
  const { t, c } = useT()
  const { path } = useRoute()
  const done = useDone()
  const exam = useExam()
  const [open, setOpen] = useState(false)
  const grade = grades[0]

  // Close on any navigation and on Escape.
  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const go = (to: string) => {
    setOpen(false)
    navigate(to)
  }
  const here = (to: string) => (path === to ? 'on' : '')

  return (
    <>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label={t('menu.open')} aria-expanded={open}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </button>

      <div className={`menu-scrim ${open ? 'open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={`menu-drawer ${open ? 'open' : ''}`} aria-hidden={!open} inert={!open}>
        <div className="menu-head">
          <Logo />
          <button className="menu-close" onClick={() => setOpen(false)} aria-label={t('menu.close')}>
            ✕
          </button>
        </div>
        <LangSwitch />

        <nav className="menu-links">
          <button className={here('/')} onClick={() => go('/')}>
            {t('nav.book')}
          </button>
          <button className={here('/reference')} onClick={() => go('/reference')}>
            {t('nav.reference')}
          </button>
          <button className={here('/exam')} onClick={() => go('/exam')}>
            {t('module.exam')}
            {exam.passed && <span className="menu-ok">✓</span>}
          </button>
          <button className={here('/about')} onClick={() => go('/about')}>
            {t('landing.about')}
          </button>
        </nav>

        <span className="label menu-label">{t('menu.grades')}</span>
        <nav className="menu-links">
          {gradeList.map((g) => (
            <button key={g.n} className={here(`/grade/${g.n}`)} onClick={() => go(`/grade/${g.n}`)}>
              <span className={`menu-dot g${g.n}`} />
              {g.n}. {c(g.title)}
              {!isOpen(g.n) && <span className="menu-soon">{t('grade.soon')}</span>}
            </button>
          ))}
        </nav>

        <span className="label menu-label">{t('menu.modules')}</span>
        <div className="menu-modules">
          {grade.modules.map((m) => {
            const finished = m.lessons.filter((x) => done.has(x.id)).length
            return (
              <details key={m.id} open={path.startsWith(`/module/${m.id}`)}>
                <summary>
                  <span className="mono">M{m.n}</span>
                  <span>{c(m.title)}</span>
                  <span className="mono menu-count">
                    {finished}/{m.lessons.length}
                  </span>
                </summary>
                <button className="menu-module-open" onClick={() => go(`/module/${m.id}`)}>
                  {c(m.intro)}
                </button>
                {m.lessons.map((x) => (
                  <button key={x.id} className={`menu-lesson ${here(`/lesson/${x.id}`)}`} onClick={() => go(`/lesson/${x.id}`)}>
                    <span className="mono">{x.id}</span>
                    <span>{c(x.title)}</span>
                    {done.has(x.id) && <span className="menu-ok">✓</span>}
                  </button>
                ))}
              </details>
            )
          })}
        </div>

        <p className="menu-foot">
          {t('menu.family')}
          <span className="mono">v {__APP_VERSION__}</span>
        </p>
      </aside>
    </>
  )
}
