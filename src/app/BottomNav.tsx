import { navigate, useRoute } from './router'
import { useT } from '../i18n/useT'
import './BottomNav.css'

export function BottomNav() {
  const { path } = useRoute()
  const { t } = useT()
  const onRef = path === '/reference'
  return (
    <nav className="bottom-nav">
      <button className={onRef ? '' : 'on'} onClick={() => navigate('/', undefined, true)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z" />
        </svg>
        {t('nav.book')}
      </button>
      <button className={onRef ? 'on' : ''} onClick={() => navigate('/reference', undefined, true)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 3h9l3 3v15H6zM9 9h6M9 13h6M9 17h4" />
        </svg>
        {t('nav.reference')}
      </button>
    </nav>
  )
}
