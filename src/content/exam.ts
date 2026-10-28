import { l, type L } from './types'

// Final exam of grade 1. The fridge is drawn from pools so every basket can make one balanced plate:
// a protein, a starch, vegetables, an aromatic, an acid, a fat and a herb.

interface Item {
  name: L
  qty: L
}

const pools: Record<string, Item[]> = {
  protein: [
    { name: l('Pileći file', 'Chicken breast', 'Куриное филе'), qty: l('300 g', '300 g', '300 г') },
    { name: l('Svinjski kotlet', 'Pork chop', 'Свиная отбивная'), qty: l('2 kom', '2', '2 шт') },
    { name: l('File lososa sa kožom', 'Salmon fillet, skin on', 'Филе лосося с кожей'), qty: l('250 g', '250 g', '250 г') },
    { name: l('Jaja', 'Eggs', 'Яйца'), qty: l('6 kom', '6', '6 шт') },
    { name: l('Pileći bataci', 'Chicken thighs', 'Куриные бёдра'), qty: l('4 kom', '4', '4 шт') },
  ],
  starch: [
    { name: l('Krompir', 'Potatoes', 'Картофель'), qty: l('600 g', '600 g', '600 г') },
    { name: l('Dugozrni pirinač', 'Long-grain rice', 'Длиннозёрный рис'), qty: l('200 g', '200 g', '200 г') },
    { name: l('Testenina', 'Pasta', 'Паста'), qty: l('250 g', '250 g', '250 г') },
    { name: l('Pirinač za rizoto', 'Risotto rice', 'Рис для ризотто'), qty: l('180 g', '180 g', '180 г') },
  ],
  veg: [
    { name: l('Šargarepa', 'Carrots', 'Морковь'), qty: l('3 kom', '3', '3 шт') },
    { name: l('Tikvica', 'Courgette', 'Кабачок'), qty: l('1 kom', '1', '1 шт') },
    { name: l('Brokoli', 'Broccoli', 'Брокколи'), qty: l('300 g', '300 g', '300 г') },
    { name: l('Boranija', 'Green beans', 'Стручковая фасоль'), qty: l('200 g', '200 g', '200 г') },
    { name: l('Šampinjoni', 'Mushrooms', 'Шампиньоны'), qty: l('250 g', '250 g', '250 г') },
    { name: l('Paradajz', 'Tomatoes', 'Помидоры'), qty: l('3 kom', '3', '3 шт') },
    { name: l('Paprika', 'Bell pepper', 'Сладкий перец'), qty: l('2 kom', '2', '2 шт') },
  ],
  aromatic: [
    { name: l('Crni luk', 'Onion', 'Репчатый лук'), qty: l('2 kom', '2', '2 шт') },
    { name: l('Beli luk', 'Garlic', 'Чеснок'), qty: l('1 glavica', '1 bulb', '1 головка') },
  ],
  acid: [
    { name: l('Limun', 'Lemon', 'Лимон'), qty: l('1 kom', '1', '1 шт') },
    { name: l('Belo vinsko sirće', 'White wine vinegar', 'Белый винный уксус'), qty: l('—', '—', '—') },
    { name: l('Jogurt', 'Yogurt', 'Йогурт'), qty: l('200 g', '200 g', '200 г') },
  ],
  fat: [
    { name: l('Puter', 'Butter', 'Сливочное масло'), qty: l('100 g', '100 g', '100 г') },
    { name: l('Maslinovo ulje', 'Olive oil', 'Оливковое масло'), qty: l('—', '—', '—') },
  ],
  herb: [
    { name: l('Peršun', 'Parsley', 'Петрушка'), qty: l('1 vezica', '1 bunch', '1 пучок') },
    { name: l('Bosiljak', 'Basil', 'Базилик'), qty: l('1 saksija', '1 pot', '1 горшок') },
    { name: l('Majčina dušica', 'Thyme', 'Тимьян'), qty: l('3 grančice', '3 sprigs', '3 веточки') },
  ],
  extra: [
    { name: l('Parmezan', 'Parmesan', 'Пармезан'), qty: l('50 g', '50 g', '50 г') },
    { name: l('Pileći fond', 'Chicken stock', 'Куриный бульон'), qty: l('1 l', '1 l', '1 л') },
    { name: l('Mleko', 'Milk', 'Молоко'), qty: l('500 ml', '500 ml', '500 мл') },
    { name: l('Senf', 'Mustard', 'Горчица'), qty: l('—', '—', '—') },
  ],
}

// Always in the pantry: the exam is about choices, not about missing salt.
export const pantry: L[] = [l('so', 'salt', 'соль'), l('biber', 'pepper', 'перец'), l('ulje', 'oil', 'масло'), l('brašno', 'flour', 'мука')]

/** Indexes into the pools, so a saved basket survives a language change. */
export type Basket = [string, number][]

function pick<T>(list: T[], count: number): number[] {
  const order = list.map((_, i) => i).sort(() => Math.random() - 0.5)
  return order.slice(0, count)
}

export function drawBasket(): Basket {
  const take = (pool: string, count: number): Basket => pick(pools[pool], count).map((i) => [pool, i])
  return [
    ...take('protein', 1),
    ...take('starch', 1),
    ...take('veg', 3),
    ...take('aromatic', 1),
    ...take('acid', 1),
    ...take('fat', 1),
    ...take('herb', 1),
    ...take('extra', 1),
  ]
}

export function basketItems(basket: Basket): Item[] {
  return basket.map(([pool, i]) => pools[pool]?.[i]).filter((x): x is Item => Boolean(x))
}

/** The three decisions the cook writes down before cooking, each pointing to the module that taught it. */
export const decisions: { key: 'cut' | 'heat' | 'taste'; title: L; hint: L; lessons: string[] }[] = [
  {
    key: 'cut',
    title: l('Rez', 'The cut', 'Нарезка'),
    hint: l(
      'Kako sečeš povrće i zašto baš tako? Treba li da se otopi u sosu ili da ostane?',
      'How will you cut the vegetables and why that way? Should they melt into a sauce or stay whole?',
      'Как ты нарежешь овощи и почему именно так? Они должны раствориться в соусе или остаться?',
    ),
    lessons: ['2.3', '2.4'],
  },
  {
    key: 'heat',
    title: l('Tehnika', 'The technique', 'Техника'),
    hint: l(
      'Koja toplota za protein, a koja za prilog? Na kojoj temperaturi skidaš protein?',
      'Which heat for the protein and which for the side? At what temperature do you take the protein off?',
      'Какой нагрев для белка и какой для гарнира? При какой температуре снимаешь белок?',
    ),
    lessons: ['4.5', '4.6', '7.5'],
  },
  {
    key: 'taste',
    title: l('Ukus', 'The taste', 'Вкус'),
    hint: l(
      'Kako ćeš proveriti i ispraviti ukus na kraju? Šta iz korpe ti služi kao kiselina, a šta kao masnoća?',
      'How will you check and correct the taste at the end? What in the basket is your acid, and what is your fat?',
      'Как ты проверишь и поправишь вкус в конце? Что в корзине будет кислотой, а что жиром?',
    ),
    lessons: ['5.2', '5.5'],
  },
]

/** Things to tick while cooking, each one a habit from an earlier module. */
export const cookChecks: { text: L; lesson: string }[] = [
  { text: l('Mise en place je spreman pre paljenja ringle.', 'Mise en place is ready before the stove goes on.', 'Мизанплас готов до включения плиты.'), lesson: '1.2' },
  { text: l('Daska za sirovo meso je odvojena.', 'The raw-meat board is kept separate.', 'Доска для сырого мяса отдельно.'), lesson: '1.3' },
  { text: l('Protein je izmeren termometrom i odmoren.', 'The protein was measured with a thermometer and rested.', 'Белок измерен термометром и отдохнул.'), lesson: '7.6' },
  { text: l('Probao si i korigovao redom: so, kiselina, masnoća.', 'You tasted and corrected in order: salt, acid, fat.', 'Ты пробовал и поправлял по порядку: соль, кислота, жир.'), lesson: '5.5' },
  { text: l('Tanjir je topao i na njemu nema bare.', 'The plate is warm and has no puddle on it.', 'Тарелка тёплая, на ней нет лужи.'), lesson: '7.6' },
]
