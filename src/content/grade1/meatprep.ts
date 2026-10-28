import { l, type Lesson } from '../types'

// Module 7 · Meat and fish, the prep half. Before the heat: how meat is kept, thawed, trimmed and cut.
// Food-safety numbers are the cold-chain ones: fridge 0–4°C, freezer −18°C.

const storing: Lesson = {
  id: '7.1',
  title: l('Skladištenje i odmrzavanje', 'Storing and thawing', 'Хранение и разморозка'),
  goal: l(
    'Meso i ribu čuvaš i odmrzavaš tako da ostanu bezbedni i sočni.',
    'You store and thaw meat and fish so they stay safe and juicy.',
    'Ты хранишь и размораживаешь мясо и рыбу так, чтобы они оставались безопасными и сочными.',
  ),
  minutes: 5,
  key: { value: l('0–4°C', '0–4°C', '0–4°C'), label: l('frižider', 'fridge', 'холодильник') },
  need: [
    { item: l('Termometar za frižider', 'Fridge thermometer', 'Термометр для холодильника'), qty: l('1', '1', '1') },
    { item: l('Posuda sa poklopcem', 'Container with lid', 'Контейнер с крышкой'), qty: l('2', '2', '2') },
    { item: l('Kesa sa zatvaračem', 'Zip-lock bag', 'Пакет с застёжкой'), qty: l('1', '1', '1') },
    { item: l('Flomaster i traka', 'Marker and tape', 'Маркер и скотч'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Bakterije se najbrže množe između 5°C i 60°C. Hladan lanac drži meso ispod te zone sve dok ne stigne u tiganj.',
    'Bacteria multiply fastest between 5°C and 60°C. The cold chain keeps meat below that zone until it reaches the pan.',
    'Бактерии быстрее всего размножаются между 5°C и 60°C. Холодовая цепь держит мясо ниже этой зоны, пока оно не попадёт на сковороду.',
  ),
  steps: [
    {
      text: l('Izmeri temperaturu u frižideru.', 'Measure the temperature inside the fridge.', 'Измерь температуру в холодильнике.'),
      params: [l('0–4°C', '0–4°C', '0–4°C'), l('zamrzivač −18°C', 'freezer −18°C', 'морозилка −18°C')],
      done: l('Termometar na srednjoj polici pokaže najviše 4°C.', 'The thermometer on the middle shelf reads 4°C at most.', 'Термометр на средней полке показывает не больше 4°C.'),
      why: l('Brojka na dugmetu frižidera nije temperatura. Opasna zona iz 1.4 počinje na 5°C.', 'The number on the fridge dial is not a temperature. The danger zone from 1.4 starts at 5°C.', 'Цифра на ручке холодильника — не температура. Опасная зона из 1.4 начинается с 5°C.'),
    },
    {
      text: l('Sirovo meso stavi na najnižu policu, u zatvorenu posudu.', 'Put raw meat on the lowest shelf, in a closed container.', 'Положи сырое мясо на нижнюю полку, в закрытый контейнер.'),
      params: [l('dole: sirovo', 'bottom: raw', 'внизу: сырое'), l('gore: gotovo', 'top: ready to eat', 'вверху: готовое')],
      done: l('Ispod sirovog mesa nema ničega što se jede bez kuvanja.', 'Nothing that is eaten uncooked sits below the raw meat.', 'Под сырым мясом нет ничего, что едят без готовки.'),
      why: l('Sok od sirovog mesa curi naniže. Isto pravilo kao daske u 1.3.', 'Raw meat juice drips downwards. Same rule as the boards in 1.3.', 'Сок сырого мяса капает вниз. То же правило, что с досками в 1.3.'),
      drawing: 'fridgeShelves',
    },
    {
      text: l('Na svaku posudu napiši šta je i datum.', 'Write what it is and the date on every container.', 'Подпиши на каждом контейнере, что это и дату.'),
      params: [l('mleveno, piletina, riba: 1–2 dana', 'mince, chicken, fish: 1–2 days', 'фарш, курица, рыба: 1–2 дня'), l('komad mesa: 3–5 dana', 'whole cut: 3–5 days', 'цельный кусок: 3–5 дней')],
      done: l('Za svaku kutiju znaš do kada traje bez otvaranja.', 'For every box you know how long it lasts without opening it.', 'Для каждой коробки ты знаешь срок, не открывая её.'),
      why: l('Mleveno meso i piletina imaju više površine i kvare se prvi.', 'Mince and chicken have more surface and spoil first.', 'У фарша и курицы больше поверхность, они портятся первыми.'),
    },
    {
      text: l('Zamrznuto meso odmrzavaj u frižideru, na tanjiru.', 'Thaw frozen meat in the fridge, on a plate.', 'Размораживай мясо в холодильнике, на тарелке.'),
      params: [l('porcija: 12–24 h', 'portion: 12–24 h', 'порция: 12–24 ч'), l('celo pile: 24–36 h', 'whole chicken: 24–36 h', 'целая курица: 24–36 ч')],
      done: l('Meso je mekano do sredine, bez leda u jezgru.', 'The meat is soft to the centre, with no ice in the core.', 'Мясо мягкое до центра, без льда внутри.'),
      why: l('Spolja se nikad ne zagreje iznad 4°C dok se sredina otapa.', 'The outside never goes above 4°C while the centre thaws.', 'Снаружи оно не нагревается выше 4°C, пока оттаивает центр.'),
      drawing: 'thawPlate',
    },
    {
      text: l('Ako žuri: kesu potopi u hladnu vodu i menjaj je.', 'In a hurry: sink the sealed bag in cold water and change it.', 'Если спешишь: опусти пакет в холодную воду и меняй её.'),
      params: [l('voda svakih 30 min', 'water every 30 min', 'вода каждые 30 мин'), l('~1 h na 500 g', '~1 h per 500 g', '~1 ч на 500 г')],
      done: l('Meso je odmrznuto, a voda je sve vreme bila hladna.', 'The meat is thawed and the water stayed cold the whole time.', 'Мясо разморожено, а вода всё время была холодной.'),
      why: l('Voda prenosi toplotu brže od vazduha. Meso iz vode kuvaš odmah.', 'Water moves heat faster than air. Meat thawed in water is cooked straight away.', 'Вода передаёт тепло быстрее воздуха. Мясо из воды готовь сразу.'),
      drawing: 'thawBath',
    },
  ],
  mistake: {
    title: l('Odmrzavanje na pultu preko noći.', 'Thawing on the counter overnight.', 'Разморозка на столе за ночь.'),
    fix: l(
      'Spoljni sloj satima stoji na sobnoj temperaturi dok je sredina još zaleđena. Planiraj dan unapred i prebaci meso iz zamrzivača u frižider uveče.',
      'The outer layer sits at room temperature for hours while the centre is still frozen. Plan a day ahead and move the meat from freezer to fridge in the evening.',
      'Внешний слой часами стоит при комнатной температуре, пока центр ещё заморожен. Планируй на день вперёд и вечером перекладывай мясо из морозилки в холодильник.',
    ),
  },
  think: {
    question: l(
      'Pileći file si odmrznuo u frižideru, ali večeras ne stigneš da kuvaš. Šta radiš?',
      'You thawed chicken breast in the fridge, but you cannot cook tonight. What do you do?',
      'Ты разморозил куриное филе в холодильнике, но сегодня не успеваешь готовить. Что делаешь?',
    ),
    options: [
      l('Kuvaš ga sutra, najkasnije prekosutra', 'Cook it tomorrow, the day after at the latest', 'Готовишь завтра, не позже послезавтра'),
      l('Ostaviš ga u frižideru do kraja nedelje', 'Leave it in the fridge until the end of the week', 'Оставляешь в холодильнике до конца недели'),
      l('Ne smeš ga više ni zamrznuti ni kuvati', 'You can no longer freeze or cook it', 'Его больше нельзя ни заморозить, ни готовить'),
    ],
    answer: 0,
    explain: l(
      'Odmrznuto u frižideru je kao sveže: piletina traje 1–2 dana. Tako odmrznuto meso se sme i ponovo zamrznuti, uz malo gubitka soka.',
      'Thawed in the fridge counts as fresh: chicken keeps 1–2 days. Meat thawed this way may even be refrozen, losing a little juice.',
      'Размороженное в холодильнике считается свежим: курица хранится 1–2 дня. Такое мясо можно даже снова заморозить, с небольшой потерей сока.',
    ),
  },
}

const trimming: Lesson = {
  id: '7.2',
  title: l('Čišćenje mesa: žile, opna, masnoća', 'Trimming meat: sinew, silver skin, fat', 'Зачистка мяса: жилы, плёнка, жир'),
  goal: l(
    'Očistiš svinjski file od opne i žila, a da ne baciš meso.',
    'You clean a pork tenderloin of silver skin and sinew without throwing meat away.',
    'Ты очищаешь свиную вырезку от плёнки и жил, не выбрасывая мясо.',
  ),
  minutes: 8,
  key: { value: l('< 5%', '< 5%', '< 5%'), label: l('otpad', 'waste', 'отходы') },
  need: [
    { item: l('Svinjski file', 'Pork tenderloin', 'Свиная вырезка'), qty: l('1 kom, ~500 g', '1, ~500 g', '1 шт, ~500 г') },
    { item: l('Tanak, oštar nož', 'Thin, sharp knife', 'Тонкий острый нож'), qty: l('1', '1', '1') },
    { item: l('Daska za sirovo meso', 'Raw-meat board', 'Доска для сырого мяса'), qty: l('1', '1', '1') },
    { item: l('Papirni ubrus', 'Paper towel', 'Бумажное полотенце'), qty: l('3 lista', '3 sheets', '3 листа') },
  ],
  why: l(
    'Opna (srebrnasta kožica) se u toploti skuplja i savija meso, a ostaje žilava i kad je sve ostalo mekano.',
    'Silver skin shrinks in the heat, bends the meat and stays chewy when everything else is tender.',
    'Плёнка (серебристая оболочка) сжимается от жара, выгибает мясо и остаётся жёсткой, когда всё остальное мягкое.',
  ),
  steps: [
    {
      text: l('Osuši meso ubrusom sa svih strana.', 'Pat the meat dry on all sides.', 'Обсуши мясо полотенцем со всех сторон.'),
      done: l('Površina je mat i ne kliza pod prstima.', 'The surface is matte and does not slip under your fingers.', 'Поверхность матовая и не скользит под пальцами.'),
      why: l('Mokro meso kliza, a nož kliza za njim.', 'Wet meat slips, and the knife slips after it.', 'Мокрое мясо скользит, а нож — за ним.'),
    },
    {
      text: l('Skini labavu masnoću i komadiće prstima.', 'Pull off loose fat and scraps with your fingers.', 'Сними пальцами рыхлый жир и обрезки.'),
      done: l('Ostao je samo čist mišić sa srebrnastom opnom na vrhu.', 'Only clean muscle is left, with the silver skin on top.', 'Остались только чистая мышца и серебристая плёнка сверху.'),
      why: l('Ono što ide samo, ne seci. Nož uzima i meso.', 'What comes off by hand needs no knife. A knife takes meat with it.', 'Что снимается само, не режь. Нож забирает и мясо.'),
    },
    {
      text: l('Podvuci vrh noža pod opnu, 2 cm od kraja.', 'Slide the knife tip under the silver skin, 2 cm from the end.', 'Подведи кончик ножа под плёнку, в 2 см от края.'),
      params: [l('2 cm', '2 cm', '2 см')],
      done: l('Kroz opnu vidiš sečivo, a ispod nje je meso.', 'You see the blade through the skin, with meat under it.', 'Сквозь плёнку видно лезвие, а под ним мясо.'),
      drawing: 'silverSkin',
    },
    {
      text: l('Drži jezičak opne i vodi nož ka sebi, sečivom blago nagore.', 'Hold the tab of skin and run the knife away from it, blade tilted slightly up.', 'Держи край плёнки и веди нож от него, лезвием чуть вверх.'),
      params: [l('ugao 10–15°', 'angle 10–15°', 'угол 10–15°'), l('trake 2–3 cm', 'strips 2–3 cm', 'полосы 2–3 см')],
      done: l('Odvaja se tanka srebrna traka, skoro bez crvenog mesa.', 'A thin silver strip comes away, with almost no red meat on it.', 'Отходит тонкая серебристая полоса почти без красного мяса.'),
      why: l('Sečivo nagore seče opnu. Sečivo nadole seče meso.', 'Blade up cuts the skin. Blade down cuts the meat.', 'Лезвие вверх режет плёнку. Лезвие вниз режет мясо.'),
    },
    {
      text: l('Podvij tanak kraj fileta i veži ili ga odseci za drugo jelo.', 'Fold the thin tail under and tie it, or cut it off for another dish.', 'Подогни тонкий хвост и перевяжи, или отрежь для другого блюда.'),
      params: [l('ista debljina', 'even thickness', 'одинаковая толщина')],
      done: l('Komad je iste debljine celom dužinom.', 'The piece is the same thickness all along.', 'Кусок одинаковой толщины по всей длине.'),
      why: l('Isti presek, isto vreme pečenja. Tanki vrh bi se presušio pre sredine.', 'Same thickness, same cooking time. The thin tip would dry out before the centre is done.', 'Одинаковое сечение — одинаковое время. Тонкий кончик пересох бы раньше центра.'),
    },
  ],
  mistake: {
    title: l('Sečenje opne odozgo, kao da ljuštiš jabuku.', 'Cutting the silver skin from above, like peeling an apple.', 'Срезать плёнку сверху, как кожуру с яблока.'),
    fix: l(
      'Svaki potez odnese i sloj mesa. Opnu ne sečeš, nego je odvajaš: nož ispod nje, sečivo blago nagore, a drugom rukom zatežeš jezičak.',
      'Every stroke takes a layer of meat with it. You do not cut silver skin, you lift it: knife under it, blade tilted up, the other hand pulling the tab tight.',
      'Каждое движение уносит слой мяса. Плёнку не режут, её отделяют: нож под ней, лезвие чуть вверх, другая рука натягивает край.',
    ),
  },
  think: {
    question: l('Koja masnoća ostaje na mesu?', 'Which fat stays on the meat?', 'Какой жир остаётся на мясе?'),
    options: [
      l('Tanak sloj koji se topi u tiganju i daje ukus', 'A thin layer that melts in the pan and gives flavour', 'Тонкий слой, который тает на сковороде и даёт вкус'),
      l('Nijedna, sve se skida', 'None, it all comes off', 'Никакой, всё срезается'),
      l('Sva, i opna sa njom', 'All of it, silver skin too', 'Весь, и плёнка вместе с ним'),
    ],
    answer: 0,
    explain: l(
      'Masnoća nije opna. Tanak sloj od 3–5 mm na kotletu ili rebrima se istopi i hrani meso. Skidaš samo debele komade i opnu, koja se ne topi nikad.',
      'Fat is not silver skin. A thin 3–5 mm layer on a chop or ribs melts and feeds the meat. Remove only thick lumps and the silver skin, which never melts.',
      'Жир — не плёнка. Тонкий слой 3–5 мм на отбивной или рёбрах тает и питает мясо. Срезай только толстые куски и плёнку, которая не тает никогда.',
    ),
  },
}

const cutting: Lesson = {
  id: '7.3',
  title: l('Sečenje i porcioniranje', 'Cutting and portioning', 'Нарезка и порционирование'),
  goal: l(
    'Iz komada mesa iseceš jednake porcije i trake poprečno na vlakna.',
    'You cut equal portions and strips across the grain from one piece of meat.',
    'Ты нарезаешь из куска мяса равные порции и полоски поперёк волокон.',
  ),
  minutes: 7,
  key: { value: l('150 g', '150 g', '150 г'), label: l('porcija', 'portion', 'порция') },
  need: [
    { item: l('Pileći file ili junetina', 'Chicken breast or beef', 'Куриное филе или говядина'), qty: l('600 g', '600 g', '600 г') },
    { item: l('Kuvarski nož', 'Chef\'s knife', 'Поварской нож'), qty: l('1', '1', '1') },
    { item: l('Kuhinjska vaga', 'Kitchen scale', 'Кухонные весы'), qty: l('1', '1', '1') },
    { item: l('Prozirna folija', 'Cling film', 'Пищевая плёнка'), qty: l('1 list', '1 sheet', '1 лист') },
  ],
  why: l(
    'Vlakna su kao snop slamki. Kad ih presečeš poprek, zubi dobiju kratke komade. Kad ih sečeš uzduž, žvaćeš kanap.',
    'Muscle fibres are like a bundle of straws. Cut across them and your teeth get short pieces. Cut along them and you chew string.',
    'Волокна — как пучок соломинок. Режешь поперёк — зубам достаются короткие куски. Режешь вдоль — жуёшь верёвку.',
  ),
  steps: [
    {
      text: l('Pronađi pravac vlakana na mesu.', 'Find which way the fibres run.', 'Найди направление волокон.'),
      done: l('Vidiš tanke linije koje idu u jednom pravcu.', 'You see thin lines running in one direction.', 'Ты видишь тонкие линии в одном направлении.'),
      why: l('Na junetini se vide golim okom. Na piletini prati linije po dužini fileta.', 'On beef you see them plainly. On chicken follow the lines along the breast.', 'На говядине их видно сразу. На курице следуй линиям вдоль филе.'),
    },
    {
      text: l('Za trake, stavi meso u zamrzivač na kratko.', 'For strips, put the meat in the freezer briefly.', 'Для полосок положи мясо ненадолго в морозилку.'),
      params: [l('20–30 min', '20–30 min', '20–30 мин')],
      done: l('Meso je čvrsto spolja, ali nije zaleđeno.', 'The meat is firm on the outside but not frozen.', 'Мясо твёрдое снаружи, но не замёрзшее.'),
      why: l('Čvrsto meso se ne gužva pod nožem, pa su trake ravne.', 'Firm meat does not squash under the knife, so the strips come out even.', 'Твёрдое мясо не мнётся под ножом, и полоски выходят ровными.'),
    },
    {
      text: l('Seci poprečno na vlakna, jednim dugim potezom.', 'Slice across the fibres, in one long stroke.', 'Режь поперёк волокон одним длинным движением.'),
      params: [l('trake 1 cm', 'strips 1 cm', 'полоски 1 см'), l('90° na vlakna', '90° to the fibres', '90° к волокнам')],
      done: l('Na preseku svake trake vidiš kratka vlakna, kao tačkice.', 'On each strip\'s face you see the short fibres as dots.', 'На срезе каждой полоски видны короткие волокна, как точки.'),
      why: l('Testerisanje cepa meso. Oštar nož iz 2.2 i dug potez ga seku.', 'Sawing tears the meat. A sharp knife from 2.2 and one long stroke cut it.', 'Пиление рвёт мясо. Острый нож из 2.2 и длинное движение его режут.'),
      drawing: 'acrossGrain',
    },
    {
      text: l('Debeo file prepolovi po debljini ili istanji pod folijom.', 'Halve a thick breast through its thickness, or flatten it under film.', 'Толстое филе разрежь пополам по толщине или отбей под плёнкой.'),
      params: [l('2 cm', '2 cm', '2 см')],
      done: l('Komad je iste debljine od kraja do kraja.', 'The piece is the same thickness end to end.', 'Кусок одинаковой толщины от края до края.'),
      why: l('Debljina određuje vreme pečenja. Isto pravilo kao kockice u 2.4.', 'Thickness sets the cooking time. Same rule as the dice in 2.4.', 'Толщина задаёт время жарки. То же правило, что с кубиками в 2.4.'),
      drawing: 'butterfly',
    },
    {
      text: l('Izmeri svaku porciju na vagi.', 'Weigh every portion.', 'Взвесь каждую порцию.'),
      params: [l('150–180 g sirovo', '150–180 g raw', '150–180 г сырого'), l('±10 g', '±10 g', '±10 г')],
      done: l('Sve porcije su u razmaku od 10 g.', 'All portions are within 10 g of each other.', 'Все порции в пределах 10 г друг от друга.'),
      why: l('Iste porcije se peku isto vreme i daju iste makroe. To je ono što MacroChef broji.', 'Equal portions cook in the same time and give the same macros. That is what MacroChef counts.', 'Равные порции жарятся одинаково и дают одинаковые макросы. Именно это считает MacroChef.'),
      drawing: 'portionScale',
    },
  ],
  mistake: {
    title: l('Trake sečene uzduž vlakana.', 'Strips cut along the fibres.', 'Полоски, нарезанные вдоль волокон.'),
    fix: l(
      'I savršeno pečena junetina je žilava ako su vlakna duga. Okreni komad za 90° pre prvog reza i proveri presek: treba da vidiš tačkice, ne linije.',
      'Even perfectly cooked beef is chewy if the fibres are long. Turn the piece 90° before the first cut and check the face: you should see dots, not lines.',
      'Даже идеально приготовленная говядина жёсткая, если волокна длинные. Поверни кусок на 90° перед первым разрезом и проверь срез: должны быть точки, а не линии.',
    ),
  },
  think: {
    question: l(
      'Dva komada piletine, jedan 1 cm, drugi 3 cm debeo, idu u isti tiganj. Šta se desi?',
      'Two pieces of chicken, one 1 cm and one 3 cm thick, go into the same pan. What happens?',
      'Два куска курицы, 1 см и 3 см толщиной, идут на одну сковороду. Что будет?',
    ),
    options: [
      l('Tanak se presuši dok debeo ne stigne do 74°C', 'The thin one dries out before the thick one reaches 74°C', 'Тонкий пересохнет, пока толстый дойдёт до 74°C'),
      l('Oba budu gotova u isto vreme', 'Both are done at the same time', 'Оба будут готовы одновременно'),
      l('Debeo se prepeče', 'The thick one overcooks', 'Толстый пережарится'),
    ],
    answer: 0,
    explain: l(
      'Toplota putuje do sredine, a put je tri puta duži. Zato meso izjednačiš pre tiganja, ne u njemu.',
      'Heat travels to the centre, and that path is three times longer. So you even out the meat before the pan, not in it.',
      'Тепло идёт к центру, а путь втрое длиннее. Поэтому мясо выравнивают до сковороды, а не на ней.',
    ),
  },
}

const skinBones: Lesson = {
  id: '7.4',
  title: l('Koščice i koža ribe', 'Fish pin bones and skin', 'Косточки и кожа рыбы'),
  goal: l(
    'Izvadiš koščice iz ribljeg fileta i skineš kožu u jednom komadu.',
    'You pull the pin bones from a fish fillet and take the skin off in one piece.',
    'Ты удаляешь косточки из рыбного филе и снимаешь кожу одним куском.',
  ),
  minutes: 8,
  key: { value: l('0', '0', '0'), label: l('koščica', 'bones left', 'косточек') },
  need: [
    { item: l('File lososa sa kožom', 'Salmon fillet, skin on', 'Филе лосося с кожей'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Pinceta za riblje kosti', 'Fish-bone tweezers', 'Пинцет для рыбных костей'), qty: l('1', '1', '1') },
    { item: l('Dugačak tanak nož', 'Long, thin knife', 'Длинный тонкий нож'), qty: l('1', '1', '1') },
    { item: l('Čaša vode', 'Glass of water', 'Стакан воды'), qty: l('1', '1', '1') },
    { item: l('So', 'Salt', 'Соль'), qty: l('prstohvat', 'a pinch', 'щепотка') },
  ],
  why: l(
    'Koščica u zalogaju pokvari celo jelo. Koža je ili hrskava ili je nema. Mlitava koža na tanjiru je greška.',
    'One pin bone in a bite spoils the whole dish. Skin is either crisp or gone. Soft skin on the plate is a mistake.',
    'Одна косточка в куске портит всё блюдо. Кожа либо хрустящая, либо её нет. Вялая кожа на тарелке — ошибка.',
  ),
  steps: [
    {
      text: l('Prevuci prst duž sredine fileta, od glave ka repu.', 'Run a finger along the middle of the fillet, head to tail.', 'Проведи пальцем по середине филе от головы к хвосту.'),
      done: l('Osetiš red tvrdih vrhova koji bodu.', 'You feel a row of hard tips poking up.', 'Ты чувствуешь ряд твёрдых кончиков.'),
      why: l('Koščice idu u jednom redu, otprilike trećinu širine od debele strane.', 'Pin bones run in one line, about a third of the way in from the thick side.', 'Косточки идут одним рядом, примерно на трети ширины от толстого края.'),
    },
    {
      text: l('Uhvati vrh pincetom i vuci ka glavi, pod uglom.', 'Grip the tip with the tweezers and pull towards the head, at an angle.', 'Захвати кончик пинцетом и тяни к голове, под углом.'),
      params: [l('ugao 45°', 'angle 45°', 'угол 45°'), l('pinceta u vodu posle svake', 'tweezers in water after each', 'пинцет в воду после каждой')],
      done: l('Koščica izađe cela, a meso oko nje nije pocepano.', 'The bone comes out whole and the flesh around it is not torn.', 'Косточка выходит целой, мясо вокруг не порвано.'),
      why: l('Koščice su okrenute ka glavi. Vučeš ih kako su izrasle, pa ne cepaš meso.', 'Pin bones point towards the head. Pull them the way they grew and the flesh stays whole.', 'Косточки направлены к голове. Тянешь по их росту, и мясо не рвётся.'),
      drawing: 'pinBones',
    },
    {
      text: l('Stavi file kožom nadole, rep prema sebi.', 'Lay the fillet skin side down, tail towards you.', 'Положи филе кожей вниз, хвостом к себе.'),
      params: [l('so na prste', 'salt on your fingers', 'соль на пальцы')],
      done: l('File leži ravno i ne kliza.', 'The fillet lies flat and does not slip.', 'Филе лежит ровно и не скользит.'),
      why: l('Malo soli na prstima drži kožu bolje od bilo kakve hvataljke.', 'A little salt on your fingers grips the skin better than any tool.', 'Немного соли на пальцах держит кожу лучше любого инструмента.'),
    },
    {
      text: l('Zaseci do kože 1 cm od repa, ne kroz nju.', 'Cut down to the skin 1 cm from the tail, not through it.', 'Надрежь до кожи в 1 см от хвоста, не прорезая её.'),
      params: [l('1 cm', '1 cm', '1 см')],
      done: l('Imaš jezičak kože za koji možeš da uhvatiš.', 'You have a tab of skin to hold on to.', 'Есть край кожи, за который можно держать.'),
    },
    {
      text: l('Drži kožu i pomeraj nju levo-desno, a nož drži skoro položeno.', 'Hold the skin and wiggle it side to side, keeping the knife almost flat.', 'Держи кожу и двигай её влево-вправо, а нож держи почти плашмя.'),
      params: [l('ugao 15–20°', 'angle 15–20°', 'угол 15–20°')],
      done: l('Koža izađe u jednom komadu, sa samo tankim sivim slojem na njoj.', 'The skin comes off in one piece with only a thin grey layer on it.', 'Кожа снимается одним куском, на ней только тонкий серый слой.'),
      why: l('Pomeraš kožu, ne nož. Nož stoji, koža klizi ispod njega.', 'You move the skin, not the knife. The knife stays still and the skin slides under it.', 'Двигаешь кожу, а не нож. Нож стоит, кожа скользит под ним.'),
      drawing: 'skinFish',
    },
  ],
  mistake: {
    title: l('Vađenje koščica ka repu.', 'Pulling pin bones towards the tail.', 'Тянуть косточки к хвосту.'),
    fix: l(
      'Koščica se zakači i pocepa meso, pa file izgleda kao da je čupan. Vuci ka glavi, pod uglom, i drugom rukom pridrži meso pored koščice.',
      'The bone catches and tears the flesh, and the fillet looks plucked. Pull towards the head at an angle, holding the flesh beside the bone with your other hand.',
      'Косточка цепляется и рвёт мясо, филе выглядит ощипанным. Тяни к голове под углом, придерживая мясо рядом другой рукой.',
    ),
  },
  think: {
    question: l(
      'Losos ćeš peći na koži do hrskavog (7.9). Šta radiš sa kožom?',
      'You will cook the salmon skin side down until crisp (7.9). What do you do with the skin?',
      'Ты будешь жарить лосося на коже до хруста (7.9). Что делаешь с кожей?',
    ),
    options: [
      l('Ostaviš je, izvadiš koščice i osušiš kožu', 'Leave it on, pull the bones and dry the skin', 'Оставляешь, удаляешь косточки и сушишь кожу'),
      l('Skineš je pre pečenja', 'Take it off before cooking', 'Снимаешь до жарки'),
      l('Opereš je pod vodom', 'Rinse it under the tap', 'Моешь под водой'),
    ],
    answer: 0,
    explain: l(
      'Kožu skidaš kad riba ide u sos, kremu ili tartar. Za pečenje koža štiti meso od tiganja i postaje hrskava, ali samo ako je suva.',
      'You skin fish when it goes into a sauce, a cream or a tartare. For pan-frying the skin shields the flesh from the pan and turns crisp, but only if it is dry.',
      'Кожу снимают, когда рыба идёт в соус, крем или тартар. При жарке кожа защищает мясо от сковороды и становится хрустящей, но только сухая.',
    ),
  },
}

export const meatPrepLessons: Lesson[] = [storing, trimming, cutting, skinBones]
