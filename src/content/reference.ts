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
