import { LANGS, useT } from '../i18n/useT'
import './LangSwitch.css'

export function LangSwitch() {
  const { lang, setLang, t } = useT()
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button key={l} className={l === lang ? 'on' : ''} aria-pressed={l === lang} onClick={() => setLang(l)}>
          {t(`lang.${l}`)}
        </button>
      ))}
    </div>
  )
}
