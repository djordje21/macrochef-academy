import { l, type Grade, type Lesson, type Module, type UpcomingGrade } from './types'
import { grade1 } from './grade1'
import { grade2 } from './grade2'

/** Grade 3 is announced with its planned modules; its lessons come later. */
export const upcoming: UpcomingGrade[] = [
  {
    n: 3,
    title: l('Chef', 'Chef', 'Шеф'),
    tagline: l(
      'Fine dining, pastry, meni, food cost, vođenje tima.',
      'Fine dining, pastry, menus, food cost, leading a team.',
      'Высокая кухня, кондитерка, меню, фудкост, управление командой.',
    ),
    photo: 'grade-3.webp',
    audience: l(
      'Za one koji kuvaju kao zanatlije, a hoće da vode: meni, ljude i brojeve.',
      'For cooks with the craft who want to lead: the menu, the people and the numbers.',
      'Для тех, кто владеет ремеслом и хочет руководить: меню, людьми и цифрами.',
    ),
    outcome: l(
      'Osmisliš meni, izračunaš mu cenu i vodiš kuhinju kao chef.',
      'You design a menu, cost it and run a kitchen like a chef.',
      'Ты составляешь меню, считаешь его себестоимость и руководишь кухней как шеф.',
    ),
    plannedModules: [
      l('Fine dining tehnike', 'Fine dining techniques', 'Техники высокой кухни'),
      l('Pastry i deserti', 'Pastry and desserts', 'Кондитерка и десерты'),
      l('Kreiranje menija', 'Menu design', 'Создание меню'),
      l('Food cost i nabavka', 'Food cost and purchasing', 'Фудкост и закупки'),
      l('Vođenje kuhinje: brigada i HACCP sistem', 'Running a kitchen: brigade and HACCP', 'Управление кухней: бригада и ХАССП'),
      l('Nutritivni dizajn jela, sa MacroChefom', 'Nutrition by design, with MacroChef', 'Питательный дизайн блюд с MacroChef'),
    ],
    exam: {
      title: l('Tvoj meni', 'Your menu', 'Твоё меню'),
      text: l(
        'Degustacioni meni od pet jela, sa food costom, alergenima i makroima za svako jelo.',
        'A five-course tasting menu with food cost, allergens and macros for every dish.',
        'Дегустационное меню из пяти блюд с фудкостом, аллергенами и макросами для каждого.',
      ),
    },
  },
]

export const grades: Grade[] = [grade1, grade2]

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
