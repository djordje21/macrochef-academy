import { navigate } from './router'
import { useT } from '../i18n/useT'
import { LangSwitch } from '../components/LangSwitch'
import { Logo } from '../components/Logo'
import './AppBar.css'

/** The bar fixed to the top of every screen: logo back to the landing on the left, languages next to the burger. */
export function AppBar() {
  const { t } = useT()
  return (
    <header className="app-bar">
      <button className="app-bar-home" onClick={() => navigate('/about')} aria-label={t('landing.about')}>
        <Logo />
      </button>
      <LangSwitch />
    </header>
  )
}
