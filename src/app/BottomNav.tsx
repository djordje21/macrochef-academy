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
          <path d="M10 4v11a3 3 0 1 0 4 0V4a2 2 0 0 0-4 0zM12 12v5M17 7h3M17 11h3" />
        </svg>
        {t('nav.reference')}
      </button>
    </nav>
  )
}
