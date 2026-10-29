import { useT } from '../i18n/useT'
import { macrochefUrl, portfolioUrl } from '../app/family'
import { Monogram } from './Monogram'
import './Projects.css'

/** The other two projects of the family as two big cards: MacroChef and Đorđe's portfolio. */
export function Projects() {
  const { t, lang } = useT()
  return (
    <section className="projects" aria-labelledby="projects-title">
      <span className="label">{t('projects.label')}</span>
      <h2 id="projects-title">{t('projects.title')}</h2>

      <a className="project-card mc" href={macrochefUrl(lang)}>
        <span className="project-badge" aria-hidden="true">
          MC
        </span>
        <span className="project-kind">{t('projects.mcKind')}</span>
        <b className="project-name">MacroChef</b>
        <span className="project-text">{t('projects.mcText')}</span>
        <span className="project-macros" aria-hidden="true">
          <i className="p" />
          <i className="c" />
          <i className="f" />
        </span>
        <span className="project-cta">
          {t('projects.mcCta')} <span aria-hidden="true">↗</span>
        </span>
      </a>

      <a className="project-card me" href={portfolioUrl(lang)}>
        <Monogram className="project-mark" />
        <span className="project-kind">{t('projects.meKind')}</span>
        <b className="project-name">Đorđe Milenković</b>
        <span className="project-text">{t('projects.meText')}</span>
        <span className="project-cta">
          {t('projects.meCta')} <span aria-hidden="true">↗</span>
        </span>
      </a>
    </section>
  )
}
