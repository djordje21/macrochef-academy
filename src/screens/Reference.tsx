import { useEffect, useRef, useState } from 'react'
import { cuts, temps } from '../content/reference'
import { navigate } from '../app/router'
import { useT } from '../i18n/useT'
import './Reference.css'

const ROOM = 20

/** Counts the reading up from room temperature, so the target sticks as a picture, not only a number. */
function useRising(target: number) {
  const [value, setValue] = useState(ROOM)
  const raf = useRef(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1200)
      setValue(Math.round(ROOM + (target - ROOM) * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [target])
  return value
}

export function Reference() {
  const { t, c } = useT()
  const [pick, setPick] = useState(0)
  const target = temps[pick]
  const value = useRising(target.c)
  const hit = value === target.c

  return (
    <div className="screen reference">
      <h1 className="ref-title">{t('ref.title')}</h1>
      <p className="muted">{t('ref.intro')}</p>

      <section className="ref-block">
        <h2>{t('ref.temps')}</h2>
        <div className={`thermo ${hit ? 'hit' : ''}`}>
          <div className="tube" aria-hidden="true">
            <i style={{ height: `${value}%` }} />
            <span className="mark" style={{ bottom: `${target.c}%` }} />
          </div>
          <div className="reading">
            <b className="mono">{value}°C</b>
            <span>
              {c(target.food)} · {t('ref.target', { t: `${target.label ?? target.c}°C` })}
            </span>
          </div>
        </div>
        <div className="rows">
          {temps.map((x, i) => (
            <button key={i} className={`row temp ${i === pick ? 'current' : ''}`} onClick={() => setPick(i)}>
              <span>
                {c(x.food)}
                {x.note && <small>{c(x.note)}</small>}
              </span>
              <span className="s">{x.label ?? x.c}°C</span>
            </button>
          ))}
        </div>
        <p className="note muted">{t('ref.tempsNote')}</p>
      </section>

      <section className="ref-block">
        <h2>{t('ref.rest')}</h2>
        <p className="note">{t('ref.restText')}</p>
      </section>

      <section className="ref-block">
        <h2>{t('ref.zone')}</h2>
        <div className="zone" aria-hidden="true">
          <span>0°C</span>
          <div>
            <i />
          </div>
          <span>100°C</span>
        </div>
        <p className="note">{t('ref.zoneText')}</p>
      </section>

      <section className="ref-block">
        <h2>{t('ref.cuts')}</h2>
        <div className="rows">
          {cuts.map((x, i) => (
            <button key={i} className="row temp" onClick={() => navigate(`/lesson/${x.lesson}`)}>
              <span>
                {c(x.name)}
                <small>{x.lesson}</small>
              </span>
              <span className="s">{c(x.size)}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
