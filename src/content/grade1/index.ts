import { l, type Grade } from '../types'
import { knifeLessons } from './m2-knife'

// Grade 1 · First steps. Modules in teaching order: kitchen and knife first, then heat and taste,
// then dishes. Unwritten modules list their planned lessons so the whole path is visible from day one.

export const grade1: Grade = {
  n: 1,
  title: l('Prvi koraci', 'First steps', 'Первые шаги'),
  tagline: l(
    'Od prvog reza do ručka bez recepta.',
    'From the first cut to a meal without a recipe.',
    'От первого разреза до обеда без рецепта.',
  ),
  photo: 'grade-1.webp',
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
      photo: 'm1.webp',
      lessons: [],
      planned: [
        { title: l('Minimum opreme', 'Minimum equipment', 'Минимум инвентаря'), minutes: 6 },
        { title: l('Mise en place', 'Mise en place', 'Мизанплас'), minutes: 6 },
        { title: l('Ruke, daske, krpe', 'Hands, boards, cloths', 'Руки, доски, салфетки'), minutes: 5 },
        { title: l('Frižider i opasna zona', 'Fridge and the danger zone', 'Холодильник и опасная зона'), minutes: 7 },
        { title: l('Čitanje recepta i merenje', 'Reading a recipe and measuring', 'Чтение рецепта и взвешивание'), minutes: 6 },
      ],
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
      photo: 'm2.webp',
      lessons: knifeLessons,
    },
    {
      id: 'm3',
      n: 3,
      title: l('Toplota', 'Heat', 'Огонь'),
      intro: l(
        'Šta toplota radi hrani i kako je kontrolišeš: voda, para, rerna, tiganj.',
        'What heat does to food and how to control it: water, steam, oven, pan.',
        'Что огонь делает с едой и как им управлять: вода, пар, духовка, сковорода.',
      ),
      photo: 'm3.webp',
      lessons: [],
      planned: [
        { title: l('Šta toplota radi hrani', 'What heat does to food', 'Что огонь делает с едой'), minutes: 6 },
        { title: l('Kuvanje, krčkanje, blanširanje', 'Boiling, simmering, blanching', 'Варка, томление, бланширование'), minutes: 8 },
        { title: l('Para', 'Steam', 'Пар'), minutes: 5 },
        { title: l('Rerna', 'Oven', 'Духовка'), minutes: 7 },
        { title: l('Tiganj i sotiranje', 'Pan and sautéing', 'Сковорода и соте'), minutes: 8 },
        { title: l('Zlatna korica', 'The golden crust', 'Золотистая корочка'), minutes: 7 },
      ],
    },
    {
      id: 'm4',
      n: 4,
      title: l('Ukus', 'Taste', 'Вкус'),
      intro: l(
        'So, kiselina, masnoća, slatko, ljuto, umami. Probaj, koriguj, probaj ponovo.',
        'Salt, acid, fat, sweet, heat, umami. Taste, adjust, taste again.',
        'Соль, кислота, жир, сладость, острота, умами. Попробуй, поправь, попробуй снова.',
      ),
      photo: 'm4.webp',
      lessons: [],
      planned: [
        { title: l('So: kada i koliko', 'Salt: when and how much', 'Соль: когда и сколько'), minutes: 7 },
        { title: l('Kiselina', 'Acid', 'Кислота'), minutes: 5 },
        { title: l('Masnoća i slatko', 'Fat and sweetness', 'Жир и сладость'), minutes: 6 },
        { title: l('Ljuto i umami', 'Heat and umami', 'Острота и умами'), minutes: 6 },
        { title: l('Probaj i koriguj', 'Taste and adjust', 'Попробуй и поправь'), minutes: 8 },
      ],
    },
    {
      id: 'm5',
      n: 5,
      title: l('Jaja i povrće', 'Eggs and vegetables', 'Яйца и овощи'),
      intro: l(
        'Jaja na pet načina i povrće koje ostaje hrskavo i zeleno.',
        'Eggs five ways and vegetables that stay crisp and green.',
        'Яйца пятью способами и овощи, которые остаются хрустящими и зелёными.',
      ),
      photo: 'm5.webp',
      lessons: [],
      planned: [
        { title: l('Kuvana jaja', 'Boiled eggs', 'Варёные яйца'), minutes: 6 },
        { title: l('Kajgana i omlet', 'Scrambled eggs and omelette', 'Скрэмбл и омлет'), minutes: 8 },
        { title: l('Poširano jaje', 'Poached egg', 'Яйцо пашот'), minutes: 7 },
        { title: l('Blanširanje i šok', 'Blanching and shocking', 'Бланширование и шок'), minutes: 6 },
        { title: l('Pečeno povrće', 'Roasted vegetables', 'Запечённые овощи'), minutes: 7 },
      ],
    },
    {
      id: 'm6',
      n: 6,
      title: l('Meso i riba', 'Meat and fish', 'Мясо и рыба'),
      intro: l(
        'Termometar umesto nagađanja. Piletina, kotlet i riba sa hrskavom kožom.',
        'A thermometer instead of guessing. Chicken, a chop and fish with crisp skin.',
        'Термометр вместо догадок. Курица, отбивная и рыба с хрустящей кожей.',
      ),
      photo: 'm6.webp',
      lessons: [],
      planned: [
        { title: l('Termometar i temperature', 'Thermometer and temperatures', 'Термометр и температуры'), minutes: 6 },
        { title: l('Odmaranje mesa', 'Resting meat', 'Отдых мяса'), minutes: 5 },
        { title: l('Pileći file i batak', 'Chicken breast and thigh', 'Куриное филе и бедро'), minutes: 9 },
        { title: l('Svinjski kotlet', 'Pork chop', 'Свиная отбивная'), minutes: 8 },
        { title: l('Riba sa kožom', 'Skin-on fish', 'Рыба с кожей'), minutes: 8 },
      ],
    },
    {
      id: 'm7',
      n: 7,
      title: l('Supe i sosevi', 'Soups and sauces', 'Супы и соусы'),
      intro: l(
        'Fond, krem supa i tri sosa koja koristiš celog života.',
        'Stock, a cream soup and three sauces you will use for life.',
        'Бульон, крем-суп и три соуса на всю жизнь.',
      ),
      photo: 'm7.webp',
      lessons: [],
      planned: [
        { title: l('Pileći fond', 'Chicken stock', 'Куриный бульон'), minutes: 8 },
        { title: l('Krem supa od povrća', 'Vegetable cream soup', 'Овощной крем-суп'), minutes: 7 },
        { title: l('Deglaziranje', 'Deglazing', 'Деглазирование'), minutes: 6 },
        { title: l('Bešamel', 'Béchamel', 'Бешамель'), minutes: 7 },
        { title: l('Vinegret i majonez', 'Vinaigrette and mayonnaise', 'Винегрет и майонез'), minutes: 8 },
      ],
    },
    {
      id: 'm8',
      n: 8,
      title: l('Pirinač, testenina, krompir', 'Rice, pasta, potatoes', 'Рис, паста, картофель'),
      intro: l(
        'Prilozi koji uvek uspeju: pirinač, al dente, pire i pečeni krompir.',
        'Sides that always work: rice, al dente pasta, mash and roast potatoes.',
        'Гарниры, которые всегда получаются: рис, паста аль денте, пюре и печёный картофель.',
      ),
      photo: 'm8.webp',
      lessons: [],
      planned: [
        { title: l('Pirinač', 'Rice', 'Рис'), minutes: 6 },
        { title: l('Testenina al dente', 'Pasta al dente', 'Паста аль денте'), minutes: 6 },
        { title: l('Pire krompir', 'Mashed potatoes', 'Картофельное пюре'), minutes: 7 },
        { title: l('Pečeni krompir', 'Roast potatoes', 'Печёный картофель'), minutes: 7 },
        { title: l('Jednostavan rizoto', 'Simple risotto', 'Простое ризотто'), minutes: 9 },
      ],
    },
  ],
  exam: {
    title: l('Izazov frižider', 'The fridge challenge', 'Испытание холодильником'),
    text: l(
      'Dobiješ 8–10 namirnica, sam smisliš i skuvaš obrok i obrazložiš tri odluke: rez, tehniku i korekciju ukusa.',
      'You get 8–10 ingredients, plan and cook a meal on your own, and explain three decisions: the cut, the technique and how you adjusted the taste.',
      'Ты получаешь 8–10 продуктов, сам придумываешь и готовишь блюдо и объясняешь три решения: нарезку, технику и правку вкуса.',
    ),
  },
}
