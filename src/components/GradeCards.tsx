import { gradeList, isOpen } from '../content'
import { navigate } from '../app/router'
import { useT } from '../i18n/useT'
import { Photo } from './Photo'
import './GradeCards.css'

/** Cards for every grade, or every grade but the one on screen; each opens that grade's overview. */
export function GradeCards({ exclude }: { exclude?: number }) {
  const { t, c } = useT()
  const cards = gradeList.filter((g) => g.n !== exclude).map((g) => ({ ...g, open: isOpen(g.n) }))

  return (
    <div className="home-next">
      {cards.map((g) => (
        <button key={g.n} className={`next-grade g${g.n}`} onClick={() => navigate(`/grade/${g.n}`)}>
          <Photo name={g.photo} />
          <div className="next-text">
            <span className="next-top">
              <span className="label">{t('grade.label', { n: g.n })}</span>
              <span className={`next-pill ${g.open ? 'open' : ''}`}>{t(g.open ? 'landing.open' : 'grade.soon')}</span>
            </span>
            <b>{c(g.title)}</b>
            <small>{c(g.tagline)}</small>
          </div>
        </button>
      ))}
    </div>
  )
}
