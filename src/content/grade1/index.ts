import { l, type Grade, type L } from '../types'
import { kitchenLessons } from './kitchen'
import { knifeLessons } from './knife'
import { heatLessons } from './heat'
import { tasteLessons } from './taste'
import { eggLessons } from './eggs'
import { meatLessons } from './meat'
import { meatPrepLessons } from './meatprep'
import { dressingBaseLesson, sauceBaseLessons, soupBaseLessons } from './sauces'
import { starchLessons } from './starches'
import { coldLessons } from './cold'
import { soupLessons } from './soups'
import { motherSauceLessons } from './mothersauces'

// Grade 1 · First steps. Modules follow the stations of a kitchen: set-up and knife, the cold
// station, heat and taste, then the dishes, and finally the habits that run a home kitchen.
// Lessons not written yet are listed as planned, so the whole path is visible from day one.

const p = (id: string, title: L) => ({ id, title })

export const grade1: Grade = {
  n: 1,
  title: l('Prvi koraci', 'First steps', 'Первые шаги'),
  tagline: l(
    'Od prvog reza do ručka bez recepta.',
    'From the first cut to a meal without a recipe.',
    'От первого разреза до обеда без рецепта.',
  ),
  photo: 'grade-1.webp',
  audience: l(
    'Za one koji nikad nisu kuvali, ili kuvaju po receptu i ne znaju zašto nešto uspe, a nešto ne.',
    'For people who have never cooked, or who follow recipes without knowing why something works or fails.',
    'Для тех, кто никогда не готовил или готовит по рецепту, не понимая, почему одно получается, а другое нет.',
  ),
  outcome: l(
    'Otvoriš frižider, skuvaš ručak bez recepta i znaš zašto si uradio svaki korak.',
    'You open the fridge, cook a meal without a recipe and know why you did every step.',
    'Ты открываешь холодильник, готовишь обед без рецепта и знаешь, зачем сделал каждый шаг.',
  ),
  modules: [
    {
      id: 'm1',
      n: 1,
      title: l('Kuhinja pre kuvanja', 'Kitchen before cooking', 'Кухня до готовки'),
      intro: l(
        'Oprema, red i higijena. Sve što treba da bude spremno pre nego što upališ ringlu.',
        'Equipment, order and hygiene. Everything that has to be ready before you turn on the stove.',
        'Инвентарь, порядок и гигиена. Всё, что должно быть готово, прежде чем включить плиту.',
      ),
      photo: 'kitchen.webp',
      lessons: kitchenLessons,
    },
    {
      id: 'm2',
      n: 2,
      title: l('Nož', 'Knife', 'Нож'),
      intro: l(
        'Hvat, oštrenje i četiri osnovna reza. Posle ovog modula seckaš brže i sigurnije.',
        'Grip, honing and the four basic cuts. After this module you cut faster and safer.',
        'Хват, правка и четыре базовые нарезки. После этого модуля ты режешь быстрее и безопаснее.',
      ),
      photo: 'knife.webp',
      lessons: knifeLessons,
    },
    {
      id: 'm3',
      n: 3,
      title: l('Hladna kuhinja', 'The cold station', 'Холодный цех'),
      intro: l(
        'Salate i dresinzi, od pranja lista do organizacije cele partije. Prvi modul u kom praviš pravo jelo.',
        'Salads and dressings, from washing a leaf to organising the whole station. The first module where you make a real dish.',
        'Салаты и заправки, от мытья листа до организации всего цеха. Первый модуль, где ты готовишь настоящее блюдо.',
      ),
      photo: 'cold.webp',
      lessons: [coldLessons.washing, dressingBaseLesson, coldLessons.dressings, coldLessons.building, coldLessons.station],
    },
    {
      id: 'm4',
      n: 4,
      title: l('Toplota', 'Heat', 'Огонь'),
      intro: l(
        'Šta toplota radi hrani i kako je kontrolišeš: voda, para, rerna, tiganj.',
        'What heat does to food and how to control it: water, steam, oven, pan.',
        'Что огонь делает с едой и как им управлять: вода, пар, духовка, сковорода.',
      ),
      photo: 'heat.webp',
      lessons: heatLessons,
    },
    {
      id: 'm5',
      n: 5,
      title: l('Ukus', 'Taste', 'Вкус'),
      intro: l(
        'So, kiselina, masnoća, slatko, ljuto, umami. Probaj, koriguj, probaj ponovo.',
        'Salt, acid, fat, sweet, heat, umami. Taste, adjust, taste again.',
        'Соль, кислота, жир, сладость, острота, умами. Попробуй, поправь, попробуй снова.',
      ),
      photo: 'taste.webp',
      lessons: tasteLessons,
    },
    {
      id: 'm6',
      n: 6,
      title: l('Jaja i povrće', 'Eggs and vegetables', 'Яйца и овощи'),
      intro: l(
        'Jaja na četiri načina i povrće iz tiganja. Najjeftiniji način da naučiš kontrolu vatre.',
        'Eggs four ways and vegetables from the pan. The cheapest way to learn heat control.',
        'Яйца четырьмя способами и овощи со сковороды. Самый дешёвый способ научиться управлять огнём.',
      ),
      photo: 'eggs.webp',
      lessons: eggLessons,
    },
    {
      id: 'm7',
      n: 7,
      title: l('Meso i riba', 'Meat and fish', 'Мясо и рыба'),
      intro: l(
        'Od skladištenja i čišćenja do tiganja: žile, koža, porcije, termometar i riba sa hrskavom kožom.',
        'From storing and trimming to the pan: sinew, skin, portions, the thermometer and crisp-skinned fish.',
        'От хранения и зачистки до сковороды: жилы, кожа, порции, термометр и рыба с хрустящей кожей.',
      ),
      photo: 'meat.webp',
      lessons: [...meatPrepLessons, ...meatLessons],
    },
    {
      id: 'm8',
      n: 8,
      title: l('Supe i čorbe', 'Soups and stews', 'Супы и похлёбки'),
      intro: l(
        'Fondovi, bistre supe, čorbe i potaži. Osnova polovine naše kuhinje.',
        'Stocks, clear soups, thick soups and potages. The base of half our cooking.',
        'Бульоны, прозрачные супы, похлёбки и потажи. Основа половины нашей кухни.',
      ),
      photo: 'soups.webp',
      lessons: [soupBaseLessons[0], soupLessons.brownStock, soupLessons.quickStocks, soupLessons.beefSoup, soupLessons.corba, soupBaseLessons[1]],
    },
    {
      id: 'm9',
      n: 9,
      title: l('Sosevi', 'Sauces', 'Соусы'),
      intro: l(
        'Pet osnovnih sosova klasične kuhinje i njihove nadogradnje, plus sos iz tiganja za tri minuta.',
        'The five mother sauces of classic cooking and their derivatives, plus a pan sauce in three minutes.',
        'Пять базовых соусов классической кухни и их производные, плюс соус на сковороде за три минуты.',
      ),
      photo: 'sauces.webp',
      lessons: [
        sauceBaseLessons[0],
        motherSauceLessons.mornay,
        motherSauceLessons.veloute,
        motherSauceLessons.brownSauce,
        motherSauceLessons.tomatoSauce,
        motherSauceLessons.hollandaise,
        motherSauceLessons.bearnaise,
        sauceBaseLessons[1],
        motherSauceLessons.beurreBlanc,
      ],
    },
    {
      id: 'm10',
      n: 10,
      title: l('Pirinač, testenina, krompir', 'Rice, pasta, potatoes', 'Рис, паста, картофель'),
      intro: l(
        'Prilozi koji uvek uspeju: pirinač, al dente, pire i pečeni krompir.',
        'Sides that always work: rice, al dente pasta, mash and roast potatoes.',
        'Гарниры, которые всегда получаются: рис, паста аль денте, пюре и печёный картофель.',
      ),
      photo: 'starches.webp',
      lessons: starchLessons,
    },
    {
      id: 'm11',
      n: 11,
      title: l('Mahunarke i žitarice', 'Pulses and grains', 'Бобовые и крупы'),
      intro: l(
        'Pasulj, sočivo, leblebija i bulgur. Jeftino, zdravo i domaće.',
        'Beans, lentils, chickpeas and bulgur. Cheap, healthy and homely.',
        'Фасоль, чечевица, нут и булгур. Дёшево, полезно и по-домашнему.',
      ),
      photo: 'legumes.webp',
      lessons: [],
      planned: [
        p('11.1', l('Pasulj: namakanje i kuvanje', 'Beans: soaking and cooking', 'Фасоль: замачивание и варка')),
        p('11.2', l('Prebranac', 'Baked beans (prebranac)', 'Запечённая фасоль (пребранац)')),
        p('11.3', l('Sočivo', 'Lentils', 'Чечевица')),
        p('11.4', l('Leblebija i humus', 'Chickpeas and hummus', 'Нут и хумус')),
        p('11.5', l('Bulgur', 'Bulgur', 'Булгур')),
      ],
    },
    {
      id: 'm12',
      n: 12,
      title: l('Dinstanje i braziranje', 'Stewing and braising', 'Тушение и брезирование'),
      intro: l(
        'Gulaš, paprikaš, sarma. Tehnika iza pola naše kuhinje: sporo, poklopljeno, sa malo tečnosti.',
        'Goulash, paprikash, sarma. The technique behind half our cooking: slow, covered, with little liquid.',
        'Гуляш, паприкаш, сарма. Техника, на которой держится половина нашей кухни: медленно, под крышкой, с малым количеством жидкости.',
      ),
      photo: 'braise.webp',
      lessons: [],
      planned: [
        p('12.1', l('Šta je braziranje', 'What braising is', 'Что такое брезирование')),
        p('12.2', l('Gulaš', 'Goulash', 'Гуляш')),
        p('12.3', l('Pileći paprikaš', 'Chicken paprikash', 'Куриный паприкаш')),
        p('12.4', l('Sarma', 'Sarma', 'Сарма')),
        p('12.5', l('Braziran juneći obraz', 'Braised beef cheeks', 'Тушёные говяжьи щёчки')),
      ],
    },
    {
      id: 'm13',
      n: 13,
      title: l('Pečenje u rerni', 'Oven roasting', 'Запекание в духовке'),
      intro: l(
        'Celo pile, pečenje i sve što ide uz njih. Nedeljni ručak bez stresa.',
        'A whole chicken, a roast and everything that goes with them. Sunday lunch without stress.',
        'Целая курица, запечённое мясо и всё, что к ним полагается. Воскресный обед без стресса.',
      ),
      photo: 'roast.webp',
      lessons: [],
      planned: [
        p('13.1', l('Celo pile', 'Whole roast chicken', 'Целая курица')),
        p('13.2', l('Rasecanje pečenog pileta', 'Carving a roast chicken', 'Как разделать запечённую курицу')),
        p('13.3', l('Svinjsko pečenje', 'Roast pork', 'Запечённая свинина')),
        p('13.4', l('Krompir i povrće uz pečenje', 'Potatoes and vegetables with the roast', 'Картофель и овощи к жаркому')),
        p('13.5', l('Sos od soka pečenja', 'Gravy from the roasting juices', 'Соус из сока жаркого')),
      ],
    },
    {
      id: 'm14',
      n: 14,
      title: l('Roštilj i grill tiganj', 'Grill and grill pan', 'Гриль и сковорода-гриль'),
      intro: l(
        'Zone vatre, marinade i meso koje je sočno, a ne zagorelo.',
        'Heat zones, marinades and meat that is juicy, not charred.',
        'Зоны жара, маринады и мясо, которое сочное, а не обугленное.',
      ),
      photo: 'grill.webp',
      lessons: [],
      planned: [
        p('14.1', l('Roštilj: žar i zone vatre', 'The grill: coals and heat zones', 'Гриль: угли и зоны жара')),
        p('14.2', l('Grill tiganj u stanu', 'A grill pan at home', 'Сковорода-гриль дома')),
        p('14.3', l('Pljeskavica i ćevapi', 'Pljeskavica and ćevapi', 'Плескавица и чевапи')),
        p('14.4', l('Marinade i ražnjići', 'Marinades and skewers', 'Маринады и шашлычки')),
        p('14.5', l('Povrće na roštilju', 'Grilled vegetables', 'Овощи на гриле')),
      ],
    },
    {
      id: 'm15',
      n: 15,
      title: l('Ostaci i zero waste', 'Leftovers and zero waste', 'Остатки и ноль отходов'),
      intro: l(
        'Šta od obrezaka, kore i jučerašnjeg ručka. Kako restoran ne baca, a kako i ti ne moraš.',
        'What to do with trimmings, peels and yesterday’s lunch. How a restaurant wastes nothing, and how you need not either.',
        'Что делать с обрезками, кожурой и вчерашним обедом. Как ресторан ничего не выбрасывает и как этого добиться дома.',
      ),
      photo: 'leftovers.webp',
      lessons: [],
      planned: [
        p('15.1', l('Obrezci: fond, ulje, čips', 'Trimmings: stock, oil, crisps', 'Обрезки: бульон, масло, чипсы')),
        p('15.2', l('Hleb od juče', 'Yesterday’s bread', 'Вчерашний хлеб')),
        p('15.3', l('Jučerašnji ručak, novo jelo', 'Yesterday’s lunch, a new dish', 'Вчерашний обед — новое блюдо')),
        p('15.4', l('Pametno zamrzavanje', 'Freezing smart', 'Умная заморозка')),
        p('15.5', l('Kora, peteljke, lišće', 'Peels, stems and leaves', 'Кожура, стебли и листья')),
      ],
    },
    {
      id: 'm16',
      n: 16,
      title: l('Planiranje i meal prep', 'Planning and meal prep', 'Планирование и заготовки'),
      intro: l(
        'Nedelja unapred: jelovnik, nabavka i kutije u frižideru. Sa makroima u MacroChefu.',
        'A week ahead: menu, shopping and boxes in the fridge. With macros in MacroChef.',
        'Неделя вперёд: меню, покупки и контейнеры в холодильнике. С макросами в MacroChef.',
      ),
      photo: 'mealprep.webp',
      lessons: [],
      planned: [
        p('16.1', l('Jelovnik za nedelju', 'A menu for the week', 'Меню на неделю')),
        p('16.2', l('Spisak za nabavku', 'The shopping list', 'Список покупок')),
        p('16.3', l('Meal prep nedeljom', 'Sunday meal prep', 'Заготовки в воскресенье')),
        p('16.4', l('Kutije, frižider i rokovi', 'Boxes, fridge and use-by dates', 'Контейнеры, холодильник и сроки')),
        p('16.5', l('Makroi u MacroChefu', 'Macros in MacroChef', 'Макросы в MacroChef')),
      ],
    },
  ],
  exam: {
    title: l('Izazov frižider', 'The fridge challenge', 'Испытание холодильником'),
    text: l(
      'Dobiješ 10 namirnica, sam smisliš i skuvaš obrok i obrazložiš tri odluke: rez, tehniku i korekciju ukusa.',
      'You get 10 ingredients, plan and cook a meal on your own, and explain three decisions: the cut, the technique and how you adjusted the taste.',
      'Ты получаешь 10 продуктов, сам придумываешь и готовишь блюдо и объясняешь три решения: нарезку, технику и правку вкуса.',
    ),
  },
}
