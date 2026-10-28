import { useEffect, useRef, useState, type FormEvent } from 'react'
import { findLesson, findModule } from '../content'
import type { L, Lang } from '../content/types'
import { useRoute } from '../app/router'
import { useT, type Key } from '../i18n/useT'
import './AskBubble.css'

interface Turn {
  q: string
  a: string
}

// The conversation survives closing the bubble and moving between screens, until the app is closed.
let saved: Turn[] = []

/** The lesson or module on screen, as plain text in the reader's language, so answers fit what they are doing. */
function contextFor(path: string, lang: Lang): string {
  const [, section, id] = path.split('/')
  const c = (x: L) => x[lang]
  if (section === 'lesson' && id) {
    const found = findLesson(id)
    if (!found) return ''
    const { lesson, module } = found
    return [
      `${lesson.id} ${c(lesson.title)} (module: ${c(module.title)})`,
      `Goal: ${c(lesson.goal)}`,
      `Needed: ${lesson.need.map((n) => `${c(n.item)} ${c(n.qty)}`).join('; ')}`,
      ...lesson.steps.map(
        (s, i) =>
          `Step ${i + 1}: ${c(s.text)}${s.params ? ` [${s.params.map(c).join(', ')}]` : ''} Done when: ${c(s.done)}${s.why ? ` Why: ${c(s.why)}` : ''}`,
      ),
      `Common mistake: ${c(lesson.mistake.title)} ${c(lesson.mistake.fix)}`,
    ].join('\n')
  }
  if (section === 'module' && id) {
    const module = findModule(id)
    if (!module) return ''
    return [`Module: ${c(module.title)}`, c(module.intro), ...module.lessons.map((x) => `${x.id} ${c(x.title)}: ${c(x.goal)}`)].join('\n')
  }
  return ''
}

const ERRORS: Record<string, Key> = {
  not_configured: 'ask.notConfigured',
  rate_limited: 'ask.limited',
  busy: 'ask.limited',
  refused: 'ask.refused',
}

/** "Ask the chef": a bubble in the corner that opens a short chat with the AI assistant. */
export function AskBubble() {
  const { t, lang } = useT()
  const { path } = useRoute()
  const [open, setOpen] = useState(false)
  const [turns, setTurns] = useState<Turn[]>(saved)
  const [question, setQuestion] = useState('')
  const [pending, setPending] = useState<string | null>(null)
  const [error, setError] = useState<Key | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    saved = turns
  }, [turns])
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [turns, pending, open])
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const send = async (e?: FormEvent) => {
    e?.preventDefault()
    const q = question.trim()
    if (!q || pending) return
    setQuestion('')
    setError(null)
    setPending(q)
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: q, lang, context: contextFor(path, lang), history: turns }),
      })
      const data = (await res.json().catch(() => ({}))) as { answer?: string; error?: string }
      if (data.answer) setTurns((ts) => [...ts, { q, a: data.answer! }])
      else {
        setError(ERRORS[data.error ?? ''] ?? 'ask.error')
        setQuestion(q)
      }
    } catch {
      setError(navigator.onLine ? 'ask.error' : 'ask.offline')
      setQuestion(q)
    } finally {
      setPending(null)
    }
  }

  return (
    <>
      <button className={`ask-bubble ${open ? 'hidden' : ''}`} onClick={() => setOpen(true)} aria-label={t('ask.open')}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
          <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.4M12 15.5h.01" />
        </svg>
      </button>

      <div className={`ask-scrim ${open ? 'open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <section className={`ask-sheet ${open ? 'open' : ''}`} aria-label={t('ask.title')} aria-hidden={!open} inert={!open}>
        <header className="ask-head">
          <div>
            <span className="label">{t('ask.eyebrow')}</span>
            <b>{t('ask.title')}</b>
          </div>
          <button className="ask-close" onClick={() => setOpen(false)} aria-label={t('menu.close')}>
            ✕
          </button>
        </header>

        <div className="ask-list" ref={listRef}>
          {turns.length === 0 && !pending && <p className="ask-empty">{t('ask.empty')}</p>}
          {turns.map((turn, i) => (
            <div key={i} className="ask-turn">
              <p className="ask-q">{turn.q}</p>
              <p className="ask-a">{turn.a}</p>
            </div>
          ))}
          {pending && (
            <div className="ask-turn">
              <p className="ask-q">{pending}</p>
              <p className="ask-a ask-thinking">
                <i />
                <i />
                <i />
                <span>{t('ask.thinking')}</span>
              </p>
            </div>
          )}
          {error && <p className="ask-error">{t(error)}</p>}
        </div>

        <form className="ask-form" onSubmit={send}>
          <textarea
            ref={inputRef}
            value={question}
            onChange={(e) => setQuestion(e.target.value.slice(0, 600))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) send(e)
            }}
            placeholder={t('ask.placeholder')}
            rows={2}
          />
          <button type="submit" className="cta" disabled={!question.trim() || !!pending} aria-label={t('ask.send')}>
            →
          </button>
        </form>
        <p className="ask-note">{t('ask.note')}</p>
      </section>
    </>
  )
}
