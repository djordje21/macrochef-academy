import { l, type Grade, type Lesson, type Module, type UpcomingGrade } from './types'
import { grade1 } from './grade1'

/** Grades 2 and 3 are announced with their planned modules; their lessons come later. */
export const upcoming: UpcomingGrade[] = [
  {
    n: 2,
    title: l('Zanat', 'Craft', 'Ремесло'),
    tagline: l(
      'Obrada mesa i ribe, testa, konzervacija, plating.',
      'Butchery and fish, dough, preserving, plating.',
      'Разделка мяса и рыбы, тесто, заготовки, подача.',
    ),
    photo: 'grade-2.webp',
    audience: l(
      'Za one koji su završili 1. razred i kuvaju samostalno, a hoće da rade kao u profesionalnoj kuhinji.',
      'For cooks who finished grade 1 and cook on their own, and want to work like a professional kitchen.',
      'Для тех, кто окончил 1 класс и готовит самостоятельно, а хочет работать как на профессиональной кухне.',
    ),
    outcome: l(
      'Obradiš celu pticu i ribu, umesiš hleb, sačuvaš sezonu u tegli i složiš tanjir kao u restoranu.',
      'You break down a whole bird and a fish, bake bread, preserve the season in a jar and plate like a restaurant.',
      'Ты разделываешь целую птицу и рыбу, печёшь хлеб, сохраняешь сезон в банке и подаёшь как в ресторане.',
    ),
    plannedModules: [
      l('Obrada mesa: cela piletina, otkoštavanje, porcioniranje', 'Butchery: whole chicken, boning, portioning', 'Разделка мяса: целая курица, обвалка, порционирование'),
      l('Riba: čišćenje i filetiranje', 'Fish: cleaning and filleting', 'Рыба: чистка и филетирование'),
      l('Testa i hleb', 'Doughs and bread', 'Тесто и хлеб'),
      l('Konzervacija: kiseljenje, fermentacija, sušenje', 'Preserving: pickling, fermenting, drying', 'Заготовки: маринование, ферментация, сушка'),
      l('Niske temperature i sous vide', 'Low temperature and sous vide', 'Низкие температуры и су-вид'),
      l('Kuhinje sveta: Balkan, Mediteran, Azija', 'World kitchens: Balkans, Mediterranean, Asia', 'Кухни мира: Балканы, Средиземноморье, Азия'),
      l('Plating: tanjir kao u restoranu', 'Plating: a restaurant plate', 'Подача: тарелка как в ресторане'),
    ],
    exam: {
      title: l('Meni od tri jela', 'A three-course menu', 'Меню из трёх блюд'),
      text: l(
        'Predjelo, glavno jelo i desert za četiri osobe, servirano u isto vreme.',
        'A starter, main and dessert for four, served on time.',
        'Закуска, основное блюдо и десерт на четверых, поданные вовремя.',
      ),
    },
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
