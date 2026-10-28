import { l, type Grade, type L } from '../types'
import { timingLessons } from './timing'
import { poultryLessons } from './poultry'
import { butcheryLessons } from './butchery'
import { fishLessons } from './fish'
import { doughLessons } from './doughs'
import { breadLessons } from './bread'
import { dessertLessons } from './desserts'
import { preserveLessons } from './preserves'
import { lowTempLessons } from './lowtemp'
import { frenchLessons } from './french'
import { italianLessons } from './italian'
import { mediterraneanLessons } from './mediterranean'
import { platingLessons } from './plating'

// Grade 2 · Craft. From a home cook to a cook who can work a station: raw butchery, dough and bread,
// desserts, preserving, low temperature, then three cuisines that teach technique (France, Italy,
// the Mediterranean, grouped as world kitchens), plating, and Asia as a bonus world kitchen. Lesson ids carry the grade: "2.4.1".
// Every lesson is announced as planned first, so the whole path is visible before it is written.

const p = (id: string, title: L) => ({ id, title })

export const grade2: Grade = {
  n: 2,
  title: l('Zanat', 'Craft', 'Ремесло'),
  tagline: l(
    'Obrada mesa i ribe, testa i hleb, deserti i kuhinje sveta: Francuska, Italija, Mediteran.',
    'Butchery and fish, dough and bread, desserts and world kitchens: France, Italy, the Mediterranean.',
    'Разделка мяса и рыбы, тесто и хлеб, десерты и кухни мира: Франция, Италия, Средиземноморье.',
  ),
  photo: 'grade-2.webp',
  audience: l(
    'Za one koji su završili 1. razred i kuvaju samostalno, a hoće da rade kao u profesionalnoj kuhinji.',
    'For cooks who finished grade 1 and cook on their own, and want to work like a professional kitchen.',
    'Для тех, кто окончил 1 класс и готовит самостоятельно, а хочет работать как на профессиональной кухне.',
  ),
  outcome: l(
    'Obradiš celu pticu i ribu, umesiš hleb i testo za pastu, skuvaš klasiku francuske i italijanske kuhinje i serviraš meni od tri jela na vreme.',
    'You break down a whole bird and a fish, make bread and pasta dough, cook French and Italian classics and serve a three-course menu on time.',
    'Ты разделываешь целую птицу и рыбу, замешиваешь хлеб и тесто для пасты, готовишь классику французской и итальянской кухни и подаёшь меню из трёх блюд вовремя.',
  ),
  modules: [
    {
      id: 'g2m1',
      n: 1,
      title: l('Tajming i radni plan', 'Timing and the work plan', 'Тайминг и рабочий план'),
      intro: l(
        'Kako se kuva više jela odjednom i servira sve u isti minut. Bez ovoga nema menija od tri jela.',
        'How to cook several dishes at once and serve them all the same minute. Without this there is no three-course menu.',
        'Как готовить несколько блюд сразу и подать всё в одну минуту. Без этого нет меню из трёх блюд.',
      ),
      photo: 'g2-timing.webp',
      lessons: timingLessons,
    },
    {
      id: 'g2m2',
      n: 2,
      title: l('Obrada živine', 'Poultry butchery', 'Разделка птицы'),
      intro: l(
        'Sirovo pile na osam delova, na leptir, otkoštavanje i suprem. Celo pile je jeftinije, a ništa ne propada.',
        'A raw chicken into eight pieces, spatchcocked, boned and cut as a suprême. A whole bird is cheaper and nothing goes to waste.',
        'Сырая курица на восемь частей, бабочкой, без костей и супрем. Целая птица дешевле, и ничего не пропадает.',
      ),
      photo: 'g2-poultry.webp',
      lessons: poultryLessons,
    },
    {
      id: 'g2m3',
      n: 3,
      title: l('Obrada mesa', 'Meat butchery', 'Разделка мяса'),
      intro: l(
        'Rezovi junetine, svinjetine i jagnjetine, otkoštavanje, roladna i svoje mleveno meso. Znaš šta kupuješ i zašto.',
        'Beef, pork and lamb cuts, boning, a rolled roast and your own mince. You know what you are buying and why.',
        'Отрубы говядины, свинины и баранины, обвалка, рулет и собственный фарш. Ты знаешь, что покупаешь и зачем.',
      ),
      photo: 'g2-butchery.webp',
      lessons: butcheryLessons,
    },
    {
      id: 'g2m4',
      n: 4,
      title: l('Riba i plodovi mora', 'Fish and seafood', 'Рыба и морепродукты'),
      intro: l(
        'Cela riba od krljušti do fileta, pljosnata riba, lignje, školjke i škampi. Svežina se vidi, miriše i oseti.',
        'A whole fish from scales to fillet, flat fish, squid, mussels and prawns. Freshness can be seen, smelled and felt.',
        'Целая рыба от чешуи до филе, плоская рыба, кальмары, мидии и креветки. Свежесть видна глазом, чувствуется по запаху и на ощупь.',
      ),
      photo: 'g2-fish.webp',
      lessons: fishLessons,
    },
    {
      id: 'g2m5',
      n: 5,
      title: l('Testa', 'Doughs', 'Тесто'),
      intro: l(
        'Palačinke, kore za pitu, prhko, lisnato i testo za ekler. Pet testa na kojima stoji pola poslastičarnice.',
        'Crêpes, filo for pita, shortcrust, puff and choux. Five doughs that half of all baking stands on.',
        'Блины, тесто для питы, песочное, слоёное и заварное. Пять видов теста, на которых держится половина выпечки.',
      ),
      photo: 'g2-doughs.webp',
      lessons: doughLessons,
    },
    {
      id: 'g2m6',
      n: 6,
      title: l('Hleb', 'Bread', 'Хлеб'),
      intro: l(
        'Brašno, voda, so i vreme. Od pogače i fokače do hleba od kiselog testa.',
        'Flour, water, salt and time. From pogača and focaccia to sourdough.',
        'Мука, вода, соль и время. От погачи и фокаччи до хлеба на закваске.',
      ),
      photo: 'g2-bread.webp',
      lessons: breadLessons,
    },
    {
      id: 'g2m7',
      n: 7,
      title: l('Deserti, osnova', 'Desserts: the basics', 'Десерты: основа'),
      intro: l(
        'Kremovi, panakota, mus, karamel i voćni tart. Dovoljno za desert na ispitu, a poslastičarnica ostaje za 3. razred.',
        'Creams, panna cotta, mousse, caramel and a fruit tart. Enough for the exam dessert; pastry proper waits for grade 3.',
        'Кремы, панакота, мусс, карамель и фруктовый тарт. Достаточно для десерта на экзамене, а кондитерка ждёт 3 класса.',
      ),
      photo: 'g2-desserts.webp',
      lessons: dessertLessons,
    },
    {
      id: 'g2m8',
      n: 8,
      title: l('Zimnica i konzervacija', 'Preserving', 'Заготовки'),
      intro: l(
        'Sterilne tegle, kiseljenje, kiseli kupus, ajvar i džem. Sezona u tegli, bezbedno.',
        'Sterile jars, pickling, sauerkraut, ajvar and jam. The season in a jar, safely.',
        'Стерильные банки, маринование, квашеная капуста, айвар и джем. Сезон в банке, безопасно.',
      ),
      photo: 'g2-preserves.webp',
      lessons: preserveLessons,
    },
    {
      id: 'g2m9',
      n: 9,
      title: l('Niske temperature', 'Low temperature', 'Низкие температуры'),
      intro: l(
        'Konfi, sous vide i sporo pečenje. Meso pečeno tačno do ivice, bez sivog prstena.',
        'Confit, sous vide and slow roasting. Meat cooked exactly to the edge, with no grey band.',
        'Конфи, су-вид и медленное запекание. Мясо, приготовленное точно до края, без серого кольца.',
      ),
      photo: 'g2-lowtemp.webp',
      lessons: lowTempLessons,
    },
    {
      id: 'g2m10',
      n: 10,
      title: l('Kuhinje sveta: Francuska', 'World kitchens: France', 'Кухни мира: Франция'),
      intro: l(
        'Osnova svake profesionalne kuhinje. Puter, vino, sporo kuvanje i klasična jela na kojima se uči tehnika.',
        'The foundation of every professional kitchen. Butter, wine, slow cooking and the classic dishes technique is learned on.',
        'Основа любой профессиональной кухни. Масло, вино, медленная готовка и классические блюда, на которых учат технику.',
      ),
      photo: 'g2-french.webp',
      lessons: frenchLessons,
    },
    {
      id: 'g2m11',
      n: 11,
      title: l('Kuhinje sveta: Italija', 'World kitchens: Italy', 'Кухни мира: Италия'),
      intro: l(
        'Ručno pravljena pasta i njoke, ragu i rizoto. Malo sastojaka, a svaki mora da bude tačan.',
        'Handmade pasta and gnocchi, ragù and risotto. Few ingredients, and every one has to be right.',
        'Паста и ньокки ручной работы, рагу и ризотто. Мало ингредиентов, и каждый должен быть точным.',
      ),
      photo: 'g2-italian.webp',
      lessons: italianLessons,
    },
    {
      id: 'g2m12',
      n: 12,
      title: l('Kuhinje sveta: Mediteran', 'World kitchens: the Mediterranean', 'Кухни мира: Средиземноморье'),
      intro: l(
        'Maslinovo ulje, limun, bilje i žar. Jednostavno, sezonski i lagano, a puno ukusa.',
        'Olive oil, lemon, herbs and fire. Simple, seasonal and light, and full of flavour.',
        'Оливковое масло, лимон, травы и огонь. Просто, по сезону и легко, но очень вкусно.',
      ),
      photo: 'g2-med.webp',
      lessons: mediterraneanLessons,
    },
    {
      id: 'g2m13',
      n: 13,
      title: l('Plating', 'Plating', 'Подача'),
      intro: l(
        'Tanjir kao u restoranu: boja, visina, sos i kontrast. Jelo se prvo jede očima.',
        'A restaurant plate: colour, height, sauce and contrast. We eat with our eyes first.',
        'Тарелка как в ресторане: цвет, высота, соус и контраст. Сначала едят глазами.',
      ),
      photo: 'g2-plating.webp',
      lessons: platingLessons,
    },
    {
      id: 'g2m14',
      n: 14,
      title: l('Kuhinje sveta: Azija (bonus)', 'World kitchens: Asia (bonus)', 'Кухни мира: Азия (бонус)'),
      intro: l(
        'Dodatak za radoznale: vok, kari, knedle i ramen. Nije uslov za ispit.',
        'An extra for the curious: wok, curry, dumplings and ramen. Not required for the exam.',
        'Дополнение для любопытных: вок, карри, пельмени и рамен. Не обязательно для экзамена.',
      ),
      photo: 'g2-asia.webp',
      lessons: [],
      planned: [
        p('2.14.1', l('Vok i ukus vatre', 'The wok and the taste of fire', 'Вок и вкус огня')),
        p('2.14.2', l('Tajlandski kari', 'Thai curry', 'Тайское карри')),
        p('2.14.3', l('Gjoze', 'Gyoza', 'Гёдза')),
        p('2.14.4', l('Ramen čorba', 'Ramen broth', 'Бульон для рамена')),
      ],
    },
  ],
  exam: {
    title: l('Meni od tri jela', 'A three-course menu', 'Меню из трёх блюд'),
    text: l(
      'Predjelo, glavno jelo i desert za četiri osobe, servirano u isto vreme.',
      'A starter, main and dessert for four, served on time.',
      'Закуска, основное блюдо и десерт на четверых, поданные вовремя.',
    ),
  },
}
