import { l, type L } from './types'

/** Core temperatures; the number is in °C, shown as-is in every language. */
export const temps: { food: L; note?: L; c: number; label?: string }[] = [
  { food: l('Piletina, ćuretina', 'Chicken, turkey', 'Курица, индейка'), note: l('bez izuzetka', 'no exceptions', 'без исключений'), c: 74 },
  { food: l('Mleveno meso', 'Minced meat', 'Фарш'), note: l('pljeskavica, ćufte', 'burgers, meatballs', 'котлеты, тефтели'), c: 71 },
  { food: l('Svinjetina', 'Pork', 'Свинина'), note: l('kotlet, file', 'chop, tenderloin', 'отбивная, вырезка'), c: 63 },
  { food: l('Junetina, medium', 'Beef, medium', 'Говядина, medium'), c: 60 },
  { food: l('Junetina, medium rare', 'Beef, medium rare', 'Говядина, medium rare'), note: l('stek', 'steak', 'стейк'), c: 55 },
  { food: l('Riba', 'Fish', 'Рыба'), note: l('losos, oslić', 'salmon, hake', 'лосось, хек'), c: 52, label: '50–55' },
]

/** Cuts from module 2, with the lesson that teaches each. */
export const cuts: { name: L; size: L; lesson: string }[] = [
  { name: l('Kockice', 'Dice', 'Кубики'), size: l('5 mm', '5 mm', '5 мм'), lesson: '2.3' },
  { name: l('Julienne (štapići)', 'Julienne (sticks)', 'Жюльен (соломка)'), size: l('3 × 3 mm', '3 × 3 mm', '3 × 3 мм'), lesson: '2.4' },
  { name: l('Brunoise (sitne kockice)', 'Brunoise (small dice)', 'Брюнуаз (мелкий кубик)'), size: l('3 mm', '3 mm', '3 мм'), lesson: '2.4' },
  { name: l('Chiffonade (trakice lista)', 'Chiffonade (leaf ribbons)', 'Шифонад (ленты)'), size: l('1–2 mm', '1–2 mm', '1–2 мм'), lesson: '2.5' },
]

/** Ratios and measures from the lessons, the numbers a cook checks most often. */
export const ratios: { name: L; value: L; lesson: string }[] = [
  { name: l('Pirinač : voda', 'Rice : water', 'Рис : вода'), value: l('1 : 1,5', '1 : 1.5', '1 : 1,5'), lesson: '10.1' },
  { name: l('Testenina', 'Pasta', 'Паста'), value: l('1 l vode na 100 g', '1 l water per 100 g', '1 л воды на 100 г'), lesson: '10.2' },
  { name: l('So u vodi za kuvanje', 'Salt in cooking water', 'Соль в воде для варки'), value: l('10 g na 1 l', '10 g per 1 l', '10 г на 1 л'), lesson: '4.2' },
  { name: l('So za meso i čorbe', 'Salt for meat and stews', 'Соль для мяса и рагу'), value: l('1% težine', '1% of weight', '1% веса'), lesson: '5.1' },
  { name: l('Bešamel: puter, brašno, mleko', 'Béchamel: butter, flour, milk', 'Бешамель: масло, мука, молоко'), value: l('1 : 1 : 16', '1 : 1 : 16', '1 : 1 : 16'), lesson: '9.1' },
  { name: l('Vinegret: sirće : ulje', 'Vinaigrette: vinegar : oil', 'Заправка: уксус : масло'), value: l('1 : 3', '1 : 3', '1 : 3'), lesson: '3.2' },
  { name: l('Majonez', 'Mayonnaise', 'Майонез'), value: l('1 žumance : 200 ml', '1 yolk : 200 ml', '1 желток : 200 мл'), lesson: '3.2' },
  { name: l('Kašika · kašičica', 'Tablespoon · teaspoon', 'Столовая · чайная ложка'), value: l('15 ml · 5 ml', '15 ml · 5 ml', '15 мл · 5 мл'), lesson: '1.5' },
]

/** Cooking times from the lessons. */
export const times: { name: L; value: L; lesson: string }[] = [
  { name: l('Jaje: tečno · kremasto · tvrdo', 'Egg: runny · jammy · hard', 'Яйцо: жидкий · кремовый · твёрдый'), value: l('6 · 7 · 10 min', '6 · 7 · 10 min', '6 · 7 · 10 мин'), lesson: '6.1' },
  { name: l('Poširano jaje, 80–85°C', 'Poached egg, 80–85°C', 'Яйцо пашот, 80–85°C'), value: l('3 min', '3 min', '3 мин'), lesson: '6.4' },
  { name: l('Boranija, blanširanje', 'Green beans, blanching', 'Стручковая фасоль, бланширование'), value: l('2–3 min', '2–3 min', '2–3 мин'), lesson: '4.2' },
  { name: l('Brokoli na pari', 'Steamed broccoli', 'Брокколи на пару'), value: l('5–6 min', '5–6 min', '5–6 мин'), lesson: '4.3' },
  { name: l('Pirinač: kuvanje + odmor', 'Rice: cook + rest', 'Рис: варка + отдых'), value: l('15 + 10 min', '15 + 10 min', '15 + 10 мин'), lesson: '10.1' },
  { name: l('Pečeno povrće, 220°C', 'Roast vegetables, 220°C', 'Запечённые овощи, 220°C'), value: l('25–30 min', '25–30 min', '25–30 мин'), lesson: '4.4' },
  { name: l('Pečeni krompir, 220°C', 'Roast potatoes, 220°C', 'Печёный картофель, 220°C'), value: l('40–45 min', '40–45 min', '40–45 мин'), lesson: '10.4' },
  { name: l('Pileći fond', 'Chicken stock', 'Куриный бульон'), value: l('3 h', '3 h', '3 ч'), lesson: '8.1' },
]
