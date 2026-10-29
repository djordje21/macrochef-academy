import { useT } from '../i18n/useT'
import { Monogram } from './Monogram'
import './Signature.css'

// The signature shared by the portfolio, MacroChef and the Academy. The current project is not a link.
const PORTFOLIO = 'https://djordje-milenkovic.netlify.app'
const MACROCHEF = 'https://macrochef.macrochef.workers.dev/'

export function Signature({ compact = false }: { compact?: boolean }) {
  const { lang } = useT()
  return (
    <div className={`signature ${compact ? 'compact' : ''}`}>
      <Monogram className="signature-mark" />
      <p>
        <a href={`${PORTFOLIO}/${lang}/`}>Executive Chef Đorđe Milenković</a>
        <span className="dot" aria-hidden="true">·</span>{' '}
        <a href={MACROCHEF}>MacroChef</a>
        <span className="dot" aria-hidden="true">·</span>{' '}
        <span className="here">Macro Chef Academy</span>
      </p>
    </div>
  )
}
