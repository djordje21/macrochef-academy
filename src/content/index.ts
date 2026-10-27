import { l, type Grade, type Lesson, type Module } from './types'
import { grade1 } from './grade1'

/** Grades 2 and 3 are announced on the home screen but have no modules yet. */
export const upcoming: Pick<Grade, 'n' | 'title' | 'tagline' | 'photo'>[] = [
  {
    n: 2,
    title: l('Zanat', 'Craft', 'Ремесло'),
    tagline: l(
      'Obrada mesa i ribe, testa, konzervacija, plating.',
      'Butchery and fish, dough, preserving, plating.',
      'Разделка мяса и рыбы, тесто, заготовки, подача.',
    ),
    photo: 'grade-2.webp',
  },
  {
    n: 3,
    title: l('Chef', 'Chef', 'Шеф'),
    tagline: l(
      'Fine dining, pastry, meni, food cost, vođenje tima.',
      'Fine dining, pastry, menus, food cost, leading a team.',
      'Высокая кухня, кондитерка, меню, фудкост, управление командой.',
    ),
    photo: 'grade-3.webp',
  },
]

export const grades: Grade[] = [grade1]

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
