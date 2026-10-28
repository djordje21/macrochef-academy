import { Component, type ReactNode } from 'react'
import { useT } from '../i18n/useT'
import './Oops.css'

type Kind = 'crash' | 'missing'

/** The screen for anything that went wrong: a burnt pan for a crash, an empty plate for a missing page. */
export function Oops({ kind }: { kind: Kind }) {
  const { t } = useT()
  const home = () => {
    location.hash = '#/home'
    if (kind === 'crash') location.reload()
  }
  return (
    <div className="screen oops">
      <svg className="oops-art" viewBox="0 0 200 140" aria-hidden="true">
        {kind === 'crash' ? (
          <>
            <ellipse cx="96" cy="100" rx="70" ry="22" fill="#5E6E90" />
            <ellipse cx="96" cy="96" rx="60" ry="16" fill="#3A2A22" />
            <rect x="160" y="92" width="38" height="9" rx="4.5" fill="#3A4E78" />
            <path className="oops-smoke" d="M70 72 Q60 56 72 42 T70 12" />
            <path className="oops-smoke" d="M100 72 Q90 54 102 38 T98 6" />
            <path className="oops-smoke" d="M128 72 Q118 58 130 44 T126 16" />
          </>
        ) : (
          <>
            <ellipse cx="100" cy="96" rx="80" ry="24" fill="#DCE3EE" />
            <ellipse cx="100" cy="92" rx="56" ry="15" fill="#F3F5FA" />
            <path d="M24 30 L24 70 M16 30 L16 48 Q16 56 24 56 Q32 56 32 48 L32 30" stroke="#9AA6B8" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M176 30 Q188 46 176 62 L176 72" stroke="#9AA6B8" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        )}
      </svg>
      <span className="label">{t(`oops.${kind}.eyebrow`)}</span>
      <h1>{t(`oops.${kind}.title`)}</h1>
      <p className="muted">{t(`oops.${kind}.text`)}</p>
      <button className="cta" onClick={home}>
        {t(`oops.${kind}.cta`)}
      </button>
    </div>
  )
}

/** Catches a crash anywhere below it and shows the burnt pan instead of a blank screen. */
export class CrashGuard extends Component<{ children: ReactNode }, { crashed: boolean }> {
  state = { crashed: false }

  static getDerivedStateFromError() {
    return { crashed: true }
  }

  componentDidCatch(error: unknown) {
    console.error(error)
  }

  render() {
    return this.state.crashed ? <Oops kind="crash" /> : this.props.children
  }
}
