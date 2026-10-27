import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { L, Lang } from '../content/types'
import sr from './sr.json'
import en from './en.json'
import ru from './ru.json'

export type Key = keyof typeof sr
const dictionaries: Record<Lang, Record<Key, string>> = { sr, en, ru }
export const LANGS: Lang[] = ['sr', 'en', 'ru']

// Same key as MacroChef, so both apps open in the language the user already picked.
const STORAGE_KEY = 'mc.lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (saved && LANGS.includes(saved)) return saved
  } catch {
    /* storage blocked */
  }
  const nav = navigator.language.slice(0, 2)
  if (nav === 'ru') return 'ru'
  if (nav === 'en') return 'en'
  return 'sr'
}

interface I18n {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: Key, vars?: Record<string, string | number>) => string
  /** Picks the current language out of a content string. */
  c: (text: L) => string
}

const Ctx = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* storage blocked */
    }
  }, [])

  const value = useMemo<I18n>(() => {
    const dict = dictionaries[lang]
    return {
      lang,
      setLang,
      t: (key, vars) =>
        (dict[key] ?? sr[key] ?? key).replace(/\{(\w+)\}/g, (_, k: string) => String(vars?.[k] ?? `{${k}}`)),
      c: (text) => text[lang] || text.sr,
    }
  }, [lang, setLang])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useT() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useT outside I18nProvider')
  return ctx
}
