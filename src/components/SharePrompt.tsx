import { useState } from 'react'
import { closePrompt, dismissPrompt, shareApp, useSharePrompt } from '../app/share'
import { useDone } from '../app/progress'
import { useT } from '../i18n/useT'
import './SharePrompt.css'

/** The quiet card that asks, once in a while, to pass the academy on to a friend. */
export function SharePrompt() {
  const { t } = useT()
  const visible = useSharePrompt()
  const done = useDone()
  const [copied, setCopied] = useState(false)
  if (!visible) return null

  const share = async () => {
    const r = await shareApp(t('share.title'), t('share.message'))
    if (r === 'shared') closePrompt()
    if (r === 'copied') {
      setCopied(true)
      setTimeout(closePrompt, 2000)
    }
  }

  return (
    <div className="share-prompt" role="dialog" aria-modal="true" aria-labelledby="share-prompt-title">
      <div className="share-scrim" onClick={() => dismissPrompt(done.size)} />
      <div className="share-card">
        <span className="share-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
          </svg>
        </span>
        <span className="label">{t('share.eyebrow', { n: done.size })}</span>
        <h2 id="share-prompt-title">{t('share.promptTitle')}</h2>
        <p className="muted">{t('share.promptText')}</p>
        <button className="cta" onClick={share}>
          {t('share.cta')}
        </button>
        {copied && <p className="share-copied">{t('share.copied')}</p>}
        <button className="share-later" onClick={() => dismissPrompt(done.size)}>
          {t('share.later')}
        </button>
      </div>
    </div>
  )
}
