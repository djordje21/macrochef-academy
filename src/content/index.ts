import { type Grade, type Lesson, type Module, type UpcomingGrade } from './types'
import { grade1 } from './grade1'
import { grade2 } from './grade2'
import { grade3 } from './grade3'

/** Grades announced with their planned modules but not yet in the course. None right now. */
export const upcoming: UpcomingGrade[] = []

export const grades: Grade[] = [grade1, grade2, grade3]

/** Every grade in order, written or announced, for cards and menus. */
export const gradeList: (Grade | UpcomingGrade)[] = [...grades, ...upcoming]

/** A grade is open once at least one of its lessons is written. */
export function isOpen(n: number): boolean {
  return grades.some((g) => g.n === n && g.modules.some((m) => m.lessons.length > 0))
}

export function gradeOfModule(id: string): Grade | undefined {
  return grades.find((g) => g.modules.some((m) => m.id === id))
}

export function findModule(id: string): Module | undefined {
  return grades.flatMap((g) => g.modules).find((m) => m.id === id)
}

export function findLesson(id: string): { lesson: Lesson; module: Module } | undefined {
  for (const module of grades.flatMap((g) => g.modules)) {
    const lesson = module.lessons.find((x) => x.id === id)
    if (lesson) return { lesson, module }
  }
  return undefined
}

/** Written lessons in course order, for "continue" and "next lesson". */
export const allLessons: Lesson[] = grades.flatMap((g) => g.modules.flatMap((m) => m.lessons))
