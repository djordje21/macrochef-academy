import type { DrawingId } from '../drawings'

export type Lang = 'sr' | 'en' | 'ru'

/** A piece of course text in all three languages. */
export type L = Record<Lang, string>

export const l = (sr: string, en: string, ru: string): L => ({ sr, en, ru })

export interface Step {
  /** One action, at most about 15 words. */
  text: L
  /** Exact measures shown as chips: "5 mm", "3 cuts". */
  params?: L[]
  /** What the cook sees, hears or feels when the step is done. */
  done: L
  /** One sentence; readers who are cooking can skip it. */
  why?: L
  drawing?: DrawingId
}

export interface Lesson {
  /** "2.3" */
  id: string
  title: L
  goal: L
  minutes: number
  /** The measure that defines the result, shown next to duration and step count. */
  key: { value: L; label: L }
  need: { item: L; qty: L }[]
  why: L
  steps: Step[]
  mistake: { title: L; fix: L }
  think: { question: L; options: L[]; answer: number; explain: L }
  /** A MacroChef recipe that uses what the lesson produced. */
  recipe?: { name: L; protein: number; carbs: number; fat: number; kcal: number }
}

export interface Module {
  /** "m2" */
  id: string
  n: number
  title: L
  intro: L
  photo: string
  /** Written lessons. */
  lessons: Lesson[]
  /** Lessons announced but not written yet, with the id they will have. */
  planned?: { id: string; title: L }[]
}

export interface Grade {
  n: number
  title: L
  tagline: L
  photo: string
  /** Who the grade is for. */
  audience: L
  /** What the cook can do at the end of the grade. */
  outcome: L
  modules: Module[]
  exam?: { title: L; text: L }
}

/** A grade that is announced but not written yet: module titles only. */
export interface UpcomingGrade extends Pick<Grade, 'n' | 'title' | 'tagline' | 'photo' | 'audience' | 'outcome' | 'exam'> {
  plannedModules: L[]
}
