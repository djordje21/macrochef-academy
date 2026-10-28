import { l, type Lesson } from '../types'

// Module 7 · Meat and fish. A thermometer replaces guessing; every lesson ends on a measured
// number from the measures and temperatures page, then rest.

const thermometer: Lesson = {
  id: '7.5',
  title: l('Termometar i temperature', 'Thermometer and temperatures', 'Термометр и температуры'),
  goal: l(
    'Izmeriš temperaturu u sredini mesa tačno, iz prvog pokušaja.',
    'You measure the temperature at the centre of the meat accurately, first time.',
    'Ты точно измеряешь температуру в центре мяса с первой попытки.',
  ),
  minutes: 6,
  key: { value: l('±1°C', '±1°C', '±1°C'), label: l('tačnost', 'accuracy', 'точность') },
  need: [
    { item: l('Ubodni termometar', 'Probe thermometer', 'Щуп-термометр'), qty: l('1', '1', '1') },
    { item: l('Čaša vode sa ledom', 'Glass of ice water', 'Стакан воды со льдом'), qty: l('1', '1', '1') },
    { item: l('Komad mesa', 'Piece of meat', 'Кусок мяса'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Prst, boja i rez nožem greše. Termometar ne greši, a meso ostaje celo i sočno.',
    'A finger, the colour or a cut with a knife can be wrong. A thermometer is not, and the meat stays whole and juicy.',
    'Палец, цвет и надрез ножом ошибаются. Термометр — нет, а мясо остаётся целым и сочным.',
  ),
  steps: [
    {
      text: l('Proveri termometar u vodi sa ledom.', 'Check the thermometer in ice water.', 'Проверь термометр в воде со льдом.'),
      params: [l('0°C', '0°C', '0°C')],
      done: l('Termometar pokaže 0°C, ili znaš za koliko greši.', 'It reads 0°C, or you know by how much it is off.', 'Он показывает 0°C, или ты знаешь, на сколько он ошибается.'),
      why: l('Isto kao u 1.1. Termometar kome ne veruješ ne vredi ništa.', 'Same as in 1.1. A thermometer you do not trust is worth nothing.', 'Как в 1.1. Термометр, которому не доверяешь, ничего не стоит.'),
    },
    {
      text: l('Ubodi termometar u najdeblji deo, sa strane.', 'Insert the probe into the thickest part, from the side.', 'Введи щуп в самую толстую часть, сбоку.'),
      params: [l('vrh u sredini', 'tip at the centre', 'кончик в центре')],
      done: l('Vrh termometra je tačno u sredini komada.', 'The tip of the probe is right at the centre of the piece.', 'Кончик щупа ровно в центре куска.'),
      why: l('Sredina se poslednja zagreje. Ona je jedina bitna.', 'The centre heats up last. It is the only part that matters.', 'Центр прогревается последним. Только он и важен.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Pazi da vrh ne dodiruje kost ni tiganj.', 'Make sure the tip does not touch bone or the pan.', 'Следи, чтобы кончик не касался кости или сковороды.'),
      done: l('Vrh je okružen samo mesom.', 'The tip is surrounded only by meat.', 'Кончик окружён только мясом.'),
      why: l('Kost i tiganj su topliji od mesa i daju lažno visok broj.', 'Bone and pan are hotter than the meat and give a falsely high number.', 'Кость и сковорода горячее мяса и дают ложно высокое значение.'),
    },
    {
      text: l('Sačekaj da se broj smiri.', 'Wait for the number to settle.', 'Дождись, пока цифра установится.'),
      params: [l('3–5 s', '3–5 s', '3–5 с')],
      done: l('Broj se ne menja dve sekunde.', 'The number does not change for two seconds.', 'Цифра не меняется две секунды.'),
    },
    {
      text: l('Skini meso 3–5°C pre cilja.', 'Take the meat off 3–5°C before the target.', 'Снимай мясо за 3–5°C до цели.'),
      params: [l('svinjetina: skini na 60°C → 63°C', 'pork: off at 60°C → 63°C', 'свинина: снять при 60°C → 63°C')],
      done: l('Posle odmaranja termometar pokaže cilj.', 'After resting the thermometer shows the target.', 'После отдыха термометр показывает цель.'),
      why: l('Toplota iz spoljnih slojeva nastavi da putuje ka sredini. Za piletinu ne skraćuj: 74°C.', 'Heat from the outer layers keeps moving to the centre. For chicken do not cut it short: 74°C.', 'Тепло из внешних слоёв продолжает идти к центру. Для курицы не сокращай: 74°C.'),
      drawing: 'carryOver',
    },
  ],
  mistake: {
    title: l('Zasecanje mesa da vidiš da li je gotovo.', 'Cutting the meat open to see if it is done.', 'Надрезать мясо, чтобы посмотреть, готово ли.'),
    fix: l(
      'Sok iscuri kroz rez, a boja vara: svinjetina na 63°C može biti blago ružičasta i potpuno bezbedna. Meri, ne seci.',
      'The juices run out through the cut, and colour lies: pork at 63°C can be slightly pink and completely safe. Measure, do not cut.',
      'Сок вытекает через надрез, а цвет обманывает: свинина при 63°C может быть слегка розовой и полностью безопасной. Измеряй, а не режь.',
    ),
  },
  think: {
    question: l('Termometar je dodirnuo kost. Šta pokazuje?', 'The probe touched the bone. What does it show?', 'Щуп коснулся кости. Что он покажет?'),
    options: [
      l('Previsoku temperaturu, pa meso može biti nedovoljno pečeno', 'Too high a reading, so the meat may be undercooked', 'Слишком высокую температуру, и мясо может быть недожаренным'),
      l('Prenisku temperaturu', 'Too low a reading', 'Слишком низкую температуру'),
      l('Tačnu temperaturu', 'The exact temperature', 'Точную температуру'),
    ],
    answer: 0,
    explain: l(
      'Kost brže provodi toplotu od mesa i bude toplija. Broj izgleda dobro, a sredina je još sirova.',
      'Bone conducts heat faster than meat and gets hotter. The number looks fine while the centre is still raw.',
      'Кость проводит тепло быстрее мяса и нагревается сильнее. Цифра выглядит хорошо, а центр ещё сырой.',
    ),
  },
}

const resting: Lesson = {
  id: '7.6',
  title: l('Odmaranje mesa', 'Resting meat', 'Отдых мяса'),
  goal: l(
    'Odmoriš meso posle pečenja i iseceš ga tako da ostane sočno i mekano.',
    'You rest meat after cooking and slice it so it stays juicy and tender.',
    'Ты даёшь мясу отдохнуть после жарки и нарезаешь его так, чтобы оно осталось сочным и мягким.',
  ),
  minutes: 5,
  key: { value: l('5 min', '5 min', '5 мин'), label: l('stek', 'steak', 'стейк') },
  need: [
    { item: l('Pečeni komad mesa', 'A cooked piece of meat', 'Приготовленный кусок мяса'), qty: l('1', '1', '1') },
    { item: l('Daska ili rešetka', 'Board or rack', 'Доска или решётка'), qty: l('1', '1', '1') },
    { item: l('Folija', 'Foil', 'Фольга'), qty: l('1 list', '1 sheet', '1 лист') },
    { item: l('Termometar', 'Thermometer', 'Термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Meso izvađeno iz tiganja još nije gotovo. Poslednjih nekoliko minuta završava se na dasci.',
    'Meat out of the pan is not finished yet. The last few minutes happen on the board.',
    'Мясо, снятое со сковороды, ещё не готово. Последние минуты проходят на доске.',
  ),
  steps: [
    {
      text: l('Skini meso 3–5°C pre cilja.', 'Take the meat off 3–5°C before the target.', 'Сними мясо за 3–5°C до цели.'),
      done: l('Termometar pokazuje broj malo ispod cilja.', 'The thermometer shows a number just below the target.', 'Термометр показывает чуть ниже цели.'),
    },
    {
      text: l('Stavi meso na dasku ili rešetku, ne na vreo tanjir.', 'Put the meat on a board or rack, not on a hot plate.', 'Положи мясо на доску или решётку, а не на горячую тарелку.'),
      done: l('Meso stoji na suvom i ne leži u sopstvenom soku.', 'The meat sits dry, not in its own juices.', 'Мясо лежит сухим, а не в собственном соку.'),
      why: l('U soku bi se donja korica razmekšala.', 'Sitting in juice would soften the crust underneath.', 'В соку нижняя корочка размякла бы.'),
    },
    {
      text: l('Pokrij meso labavo folijom i sačekaj.', 'Cover the meat loosely with foil and wait.', 'Неплотно накрой мясо фольгой и подожди.'),
      params: [l('stek 5 min', 'steak 5 min', 'стейк 5 мин'), l('pečenje 10–15 min', 'roast 10–15 min', 'запечённое 10–15 мин')],
      done: l('Folija ne dodiruje koricu čvrsto.', 'The foil does not press on the crust.', 'Фольга не прижата к корочке.'),
      why: l('Čvrsto zatvorena folija pravi paru i omekša koricu.', 'Tightly sealed foil creates steam and softens the crust.', 'Плотная фольга создаёт пар и размягчает корочку.'),
      drawing: 'restTent',
    },
    {
      text: l('Izmeri ponovo pre sečenja.', 'Measure again before slicing.', 'Измерь ещё раз перед нарезкой.'),
      done: l('Temperatura je porasla do cilja.', 'The temperature has risen to the target.', 'Температура поднялась до цели.'),
    },
    {
      text: l('Seci poprečno na vlakna.', 'Slice across the grain.', 'Режь поперёк волокон.'),
      params: [l('1 cm', '1 cm', '1 см')],
      done: l('Na preseku vidiš kratka vlakna kao tačkice, ne duge niti.', 'On the cut face you see short fibres like dots, not long strands.', 'На срезе видны короткие волокна точками, а не длинные нити.'),
      why: l('Kratka vlakna se lako žvaću. Duga vlakna su žilava bez obzira na pečenje.', 'Short fibres are easy to chew. Long ones are tough however well it was cooked.', 'Короткие волокна легко жевать. Длинные жёсткие, как бы мясо ни приготовили.'),
      drawing: 'acrossGrain',
    },
  ],
  mistake: {
    title: l('Sečenje odmah iz tiganja.', 'Slicing straight from the pan.', 'Нарезка сразу со сковороды.'),
    fix: l(
      'Sredina još nije stigla do cilja, a prvi rez pusti sok po dasci. Pet minuta čekanja vraća i temperaturu i sočnost.',
      'The centre has not reached its target yet and the first cut lets the juices run over the board. Five minutes of waiting brings both the temperature and the juiciness.',
      'Центр ещё не дошёл до цели, а первый разрез выпускает сок на доску. Пять минут ожидания дают и температуру, и сочность.',
    ),
  },
  think: {
    question: l('Zašto se meso seče poprečno na vlakna?', 'Why is meat sliced across the grain?', 'Почему мясо режут поперёк волокон?'),
    options: [
      l('Vlakna postanu kratka, pa je meso mekše u ustima', 'The fibres become short, so the meat is more tender to eat', 'Волокна становятся короткими, и мясо мягче'),
      l('Lepše izgleda na tanjiru', 'It looks better on the plate', 'Красивее на тарелке'),
      l('Lakše se seče', 'It is easier to cut', 'Легче резать'),
    ],
    answer: 0,
    explain: l(
      'Mišić je snop dugih vlakana. Nož preseče ono što bi inače morali da pregrizu zubi.',
      'Muscle is a bundle of long fibres. The knife cuts what your teeth would otherwise have to.',
      'Мышца — пучок длинных волокон. Нож перерезает то, что иначе пришлось бы перегрызать зубами.',
    ),
  },
}

const chicken: Lesson = {
  id: '7.7',
  title: l('Pileći file', 'Chicken breast', 'Куриное филе'),
  goal: l(
    'Ispečeš pileći file koji je bezbedan, zlatan spolja i sočan iznutra.',
    'You cook a chicken breast that is safe, golden outside and juicy inside.',
    'Ты готовишь куриное филе, безопасное, золотистое снаружи и сочное внутри.',
  ),
  minutes: 9,
  key: { value: l('74°C', '74°C', '74°C'), label: l('u sredini', 'at the centre', 'в центре') },
  need: [
    { item: l('Pileći file', 'Chicken breast', 'Куриное филе'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Prijanjajuća folija', 'Cling film', 'Пищевая плёнка'), qty: l('1', '1', '1') },
    { item: l('Tiganj sa poklopcem', 'Pan with a lid', 'Сковорода с крышкой'), qty: l('1', '1', '1') },
    { item: l('Termometar', 'Thermometer', 'Термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Pileći file je deblji na jednom kraju. Dok se debeo deo ispeče, tanak se osuši. Rešenje je da bude iste debljine.',
    'A chicken breast is thicker at one end. By the time the thick end is cooked, the thin end is dry. The fix is to make it even.',
    'Куриное филе толще с одного конца. Пока толстая часть дойдёт, тонкая пересохнет. Решение — сделать толщину одинаковой.',
  ),
  steps: [
    {
      text: l('Stavi file između folije i izravnaj ga dnom tiganja.', 'Put the breast between cling film and flatten it with the base of a pan.', 'Положи филе между плёнкой и выровняй дном сковороды.'),
      params: [l('2 cm svuda', '2 cm all over', '2 см везде')],
      done: l('File je iste debljine od kraja do kraja.', 'The breast is the same thickness end to end.', 'Филе одинаковой толщины от края до края.'),
      why: l('Ista debljina, isto vreme. Lekcija 2.3 važi i za meso.', 'Same thickness, same time. Lesson 2.3 applies to meat too.', 'Одинаковая толщина — одинаковое время. Урок 2.3 работает и для мяса.'),
      drawing: 'flattenChicken',
    },
    {
      text: l('Osuši file i posoli ga.', 'Pat the breast dry and salt it.', 'Обсуши филе и посоли.'),
      params: [l('1 g soli na 100 g', '1 g salt per 100 g', '1 г соли на 100 г')],
      done: l('Ubrus ostaje suv kad dodirne meso.', 'A fresh paper towel stays dry against the meat.', 'Чистое полотенце остаётся сухим.'),
      why: l('Pravilo iz 4.6: suvo meso dobije koricu.', 'The rule from 4.6: dry meat gets a crust.', 'Правило из 4.6: сухое мясо получает корочку.'),
    },
    {
      text: l('Peci na srednje jakoj vatri i ne pomeraj.', 'Cook over medium-high heat without moving it.', 'Жарь на огне выше среднего, не двигая.'),
      params: [l('4–5 min', '4–5 min', '4–5 мин')],
      done: l('File se sam odvoji od tiganja i donja strana je zlatna.', 'The breast releases on its own and the underside is golden.', 'Филе само отходит от сковороды, нижняя сторона золотистая.'),
    },
    {
      text: l('Okreni, smanji vatru i poklopi.', 'Turn it, lower the heat and cover.', 'Переверни, убавь огонь и накрой крышкой.'),
      params: [l('tiha vatra', 'low heat', 'слабый огонь'), l('4–6 min', '4–6 min', '4–6 мин')],
      done: l('Termometar u sredini pokaže 74°C.', 'The thermometer at the centre reads 74°C.', 'Термометр в центре показывает 74°C.'),
      why: l('Poklopac zadrži toplotu, pa sredina stigne do cilja pre nego što se spolja osuši.', 'The lid holds the heat in, so the centre reaches its target before the outside dries out.', 'Крышка удерживает тепло, и центр доходит до цели раньше, чем пересохнет поверхность.'),
    },
    {
      text: l('Odmori file pa ga iseci poprečno.', 'Rest the breast, then slice it across the grain.', 'Дай филе отдохнуть, затем нарежь поперёк.'),
      params: [l('3 min', '3 min', '3 мин')],
      done: l('Na preseku je belo meso koje se presijava od soka.', 'The cut face is white and glistens with juice.', 'На срезе белое мясо, блестящее от сока.'),
    },
  ],
  mistake: {
    title: l('Pečenje „dok ne bude suvo“ da bude sigurno.', 'Cooking it "until dry" to be safe.', 'Жарить «до сухости» для надёжности.'),
    fix: l(
      'Strah od sirove piletine pravi suvu piletinu. Na 74°C je bezbedna. Sve preko toga je samo gubitak soka.',
      'Fear of raw chicken makes dry chicken. At 74°C it is safe. Anything above that only loses juice.',
      'Страх перед сырой курицей делает её сухой. При 74°C она безопасна. Всё, что выше, — только потеря сока.',
    ),
  },
  think: {
    question: l('Zašto je pileći batak sočniji od filea i kad se malo prepeče?', 'Why does chicken thigh stay juicier than breast even when slightly overcooked?', 'Почему куриное бедро остаётся сочнее филе, даже если немного передержать?'),
    options: [
      l('Ima više masti i vezivnog tkiva', 'It has more fat and connective tissue', 'В нём больше жира и соединительной ткани'),
      l('Batak se peče kraće', 'Thighs cook for less time', 'Бедро готовится быстрее'),
      l('Batak upije više soli', 'Thighs absorb more salt', 'Бедро впитывает больше соли'),
    ],
    answer: 0,
    explain: l(
      'Mast i kolagen u bataku se tope na toploti i zadržavaju vlagu. File je skoro čist protein, pa nema rezervu.',
      'The fat and collagen in a thigh melt with heat and hold moisture. Breast is almost pure protein, so it has no margin.',
      'Жир и коллаген в бедре плавятся при нагреве и удерживают влагу. Филе — почти чистый белок, и запаса у него нет.',
    ),
  },
}

const porkChop: Lesson = {
  id: '7.8',
  title: l('Svinjski kotlet', 'Pork chop', 'Свиная отбивная'),
  goal: l(
    'Ispečeš ravan kotlet sa koricom i ružičastom, sočnom sredinom.',
    'You cook a flat pork chop with a crust and a pink, juicy centre.',
    'Ты жаришь ровную отбивную с корочкой и розовой сочной серединой.',
  ),
  minutes: 8,
  key: { value: l('63°C', '63°C', '63°C'), label: l('u sredini', 'at the centre', 'в центре') },
  need: [
    { item: l('Svinjski kotlet', 'Pork chop', 'Свиная отбивная'), qty: l('2 cm', '2 cm', '2 см') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('Mali nož', 'Paring knife', 'Маленький нож'), qty: l('1', '1', '1') },
    { item: l('Termometar', 'Thermometer', 'Термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kotlet je lekcija 4.6 na pravom mesu, plus jedan trik koji ga drži ravnim.',
    'A chop is lesson 4.6 on real meat, plus one trick that keeps it flat.',
    'Отбивная — урок 4.6 на настоящем мясе плюс один приём, который держит её ровной.',
  ),
  steps: [
    {
      text: l('Zaseci masnu ivicu, do mesa.', 'Nick the fat edge, down to the meat.', 'Надрежь жировой край до мяса.'),
      params: [l('na svaka 3 cm', 'every 3 cm', 'каждые 3 см')],
      done: l('Zarezi prolaze kroz mast i tanku opnu ispod nje.', 'The cuts go through the fat and the thin membrane under it.', 'Надрезы проходят через жир и тонкую плёнку под ним.'),
      why: l('Opna se na toploti skupi i savije kotlet kao činiju.', 'The membrane shrinks in the heat and curls the chop into a bowl.', 'Плёнка сжимается от жара и выгибает отбивную чашкой.'),
      drawing: 'fatNicks',
    },
    {
      text: l('Osuši kotlet i posoli ga.', 'Pat the chop dry and salt it.', 'Обсуши отбивную и посоли.'),
      params: [l('1 g soli na 100 g', '1 g salt per 100 g', '1 г соли на 100 г')],
      done: l('Površina je suva na dodir.', 'The surface feels dry.', 'Поверхность сухая на ощупь.'),
    },
    {
      text: l('Peci prvu stranu na jakoj vatri.', 'Sear the first side over high heat.', 'Обжарь первую сторону на сильном огне.'),
      params: [l('3 min', '3 min', '3 мин')],
      done: l('Kotlet se sam odvoji i donja strana je tamnozlatna.', 'The chop releases on its own and the underside is deep golden.', 'Отбивная сама отходит, низ насыщенно-золотистый.'),
    },
    {
      text: l('Okreni, pa uspravi kotlet na masnu ivicu.', 'Turn it, then stand the chop on its fat edge.', 'Переверни, затем поставь отбивную на жировой край.'),
      params: [l('masna ivica 1 min', 'fat edge 1 min', 'жировой край 1 мин')],
      done: l('Mast je zlatna i hrskava, ne bela i gumena.', 'The fat is golden and crisp, not white and rubbery.', 'Жир золотистый и хрустящий, а не белый и резиновый.'),
      why: l('Mast se istopi i postane najukusniji deo kotleta.', 'The fat renders and becomes the tastiest part of the chop.', 'Жир вытапливается и становится самой вкусной частью.'),
    },
    {
      text: l('Završi drugu stranu do temperature i odmori.', 'Finish the second side to temperature and rest.', 'Дожарь вторую сторону до нужной температуры и дай отдохнуть.'),
      params: [l('skini na 60°C', 'off at 60°C', 'снять при 60°C'), l('odmori 5 min → 63°C', 'rest 5 min → 63°C', 'отдых 5 мин → 63°C')],
      done: l('Posle odmora termometar pokaže 63°C, a sredina je blago ružičasta.', 'After resting the thermometer reads 63°C and the centre is faintly pink.', 'После отдыха термометр показывает 63°C, центр слегка розовый.'),
    },
  ],
  mistake: {
    title: l('Kotlet pečen dok ne bude potpuno beo.', 'A chop cooked until completely white.', 'Отбивная, прожаренная до белизны.'),
    fix: l(
      'Svinjetina je bezbedna na 63°C. Na 75°C je suva i tvrda kao đon. Veruj termometru, ne boji.',
      'Pork is safe at 63°C. At 75°C it is dry and tough as a shoe. Trust the thermometer, not the colour.',
      'Свинина безопасна при 63°C. При 75°C она сухая и жёсткая, как подошва. Доверяй термометру, а не цвету.',
    ),
  },
  think: {
    question: l('Kotlet se savio kao činija. Šta si zaboravio?', 'The chop curled into a bowl. What did you forget?', 'Отбивная выгнулась чашкой. Что ты забыл?'),
    options: [
      l('Da zarežeš masnu ivicu', 'To nick the fat edge', 'Надрезать жировой край'),
      l('Da ga posoliš', 'To salt it', 'Посолить'),
      l('Da ga izvadiš ranije iz frižidera', 'To take it out of the fridge earlier', 'Заранее достать из холодильника'),
    ],
    answer: 0,
    explain: l(
      'Opna ispod masti se na toploti skuplja brže od mesa i povuče ivice nagore. Zarezi je prekinu.',
      'The membrane under the fat shrinks faster than the meat in the heat and pulls the edges up. The nicks break it.',
      'Плёнка под жиром сжимается от жара быстрее мяса и тянет края вверх. Надрезы её разрывают.',
    ),
  },
}

const fish: Lesson = {
  id: '7.9',
  title: l('Riba sa kožom', 'Skin-on fish', 'Рыба с кожей'),
  goal: l(
    'Ispečeš file ribe sa hrskavom kožom i sočnim mesom koje se lista.',
    'You cook a fish fillet with crisp skin and moist flesh that flakes.',
    'Ты жаришь рыбное филе с хрустящей кожей и сочной мякотью, которая расслаивается.',
  ),
  minutes: 8,
  key: { value: l('80%', '80%', '80%'), label: l('na koži', 'skin side', 'на коже') },
  need: [
    { item: l('File lososa ili brancina sa kožom', 'Salmon or sea bass fillet, skin on', 'Филе лосося или сибаса с кожей'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('Tanka lopatica', 'Thin spatula', 'Тонкая лопатка'), qty: l('1', '1', '1') },
    { item: l('Termometar', 'Thermometer', 'Термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Riba se peče brže i nežnije od mesa. Koža je njen štit: ona prima toplotu, a meso ostaje sočno.',
    'Fish cooks faster and more delicately than meat. The skin is its shield: it takes the heat while the flesh stays moist.',
    'Рыба готовится быстрее и нежнее мяса. Кожа — её щит: она принимает жар, а мякоть остаётся сочной.',
  ),
  steps: [
    {
      text: l('Osuši kožu ubrusom, pa je posoli.', 'Dry the skin with paper towel, then salt it.', 'Обсуши кожу полотенцем, затем посоли.'),
      done: l('Koža je suva i blago lepljiva na dodir.', 'The skin is dry and slightly tacky to the touch.', 'Кожа сухая и слегка липкая на ощупь.'),
      why: l('Mokra koža se ne zapeče, nego se kuva i lepi.', 'Wet skin does not crisp; it steams and sticks.', 'Мокрая кожа не хрустит, а варится и прилипает.'),
    },
    {
      text: l('Zagrej tiganj i ulje do treperenja.', 'Heat the pan and oil until the oil shimmers.', 'Разогрей сковороду с маслом до дрожания.'),
      params: [l('srednje jaka vatra', 'medium-high heat', 'огонь выше среднего')],
      done: l('Ulje treperi, ali ne dimi.', 'The oil shimmers but does not smoke.', 'Масло дрожит, но не дымит.'),
    },
    {
      text: l('Spusti ribu kožom nadole i pritisni je lopaticom.', 'Lay the fish skin-side down and press it with the spatula.', 'Положи рыбу кожей вниз и прижми лопаткой.'),
      params: [l('20 s', '20 s', '20 с')],
      done: l('File leži ravno i koža celom dužinom dodiruje tiganj.', 'The fillet lies flat and the whole skin touches the pan.', 'Филе лежит ровно, вся кожа касается сковороды.'),
      why: l('Koža se na toploti skupi i podigne file. Pritisak je drži ravnom.', 'The skin shrinks in the heat and lifts the fillet. Pressing keeps it flat.', 'Кожа сжимается от жара и приподнимает филе. Нажим держит её ровной.'),
      drawing: 'fishPress',
    },
    {
      text: l('Peci na koži dok meso ne pobeli skoro do vrha.', 'Cook on the skin until the flesh turns opaque almost to the top.', 'Жарь на коже, пока мякоть не побелеет почти до верха.'),
      params: [l('3–4 min', '3–4 min', '3–4 мин')],
      done: l('Neprozirni deo se popeo na 80% visine filea.', 'The opaque part has climbed 80% of the way up the fillet.', 'Непрозрачная часть поднялась на 80% высоты филе.'),
      why: l('Vidiš kako toplota putuje kroz ribu. Kad stigne skoro do vrha, gotovo je.', 'You can watch the heat travel through the fish. When it nearly reaches the top, it is done.', 'Видно, как тепло идёт сквозь рыбу. Когда оно почти дошло до верха — готово.'),
      drawing: 'fishOpaque',
    },
    {
      text: l('Okreni ribu na kratko i skini je.', 'Turn the fish briefly and take it off.', 'Ненадолго переверни рыбу и сними.'),
      params: [l('30–60 s', '30–60 s', '30–60 с'), l('50–55°C', '50–55°C', '50–55°C')],
      done: l('Meso se lista pod pritiskom prsta, a koža krcka.', 'The flesh flakes under a finger and the skin crackles.', 'Мякоть расслаивается от нажатия пальцем, а кожа хрустит.'),
    },
  ],
  mistake: {
    title: l('Pomeranje ribe pre nego što se koža zapeče.', 'Moving the fish before the skin has crisped.', 'Двигать рыбу, пока кожа не схватилась.'),
    fix: l(
      'Koža se zalepi i otkine, a file se raspadne. Kao meso u 4.6: kad je koža gotova, sama se odvoji.',
      'The skin sticks and tears, and the fillet falls apart. As with meat in 4.6: when the skin is done, it lets go on its own.',
      'Кожа прилипает и рвётся, филе разваливается. Как с мясом в 4.6: когда кожа готова, она отходит сама.',
    ),
  },
  think: {
    question: l('Zašto se riba peče skoro sva na koži?', 'Why is fish cooked almost entirely skin-side down?', 'Почему рыбу жарят почти всё время на коже?'),
    options: [
      l('Koža štiti nežno meso od direktne toplote', 'The skin shields the delicate flesh from direct heat', 'Кожа защищает нежную мякоть от прямого жара'),
      l('Tako se brže ispeče', 'It cooks faster that way', 'Так быстрее'),
      l('Koža je ukusnija od mesa', 'The skin tastes better than the flesh', 'Кожа вкуснее мякоти'),
    ],
    answer: 0,
    explain: l(
      'Riblji protein se steže na nižoj temperaturi od mesa i lako se osuši. Koža prima udar vatre, a meso se peče nežno, odozdo.',
      'Fish protein sets at a lower temperature than meat and dries out easily. The skin takes the blast of heat and the flesh cooks gently from below.',
      'Рыбный белок сворачивается при более низкой температуре, чем мясо, и легко пересыхает. Кожа принимает удар жара, а мякоть готовится мягко, снизу.',
    ),
  },
}

export const meatLessons: Lesson[] = [thermometer, resting, chicken, porkChop, fish]
