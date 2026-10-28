import { l, type Lesson } from '../types'

// Module 15 · Leftovers and zero waste. Every lesson uses something that would go in the bin,
// and every one keeps the cold-chain rules from 1.4 and 7.1.

const trimmings: Lesson = {
  id: '15.1',
  title: l('Obrezci: fond, mast, čips', 'Trimmings: stock, fat, crisps', 'Обрезки: бульон, жир, чипсы'),
  goal: l(
    'Od obrezaka koje bi bacio napraviš fond, mast sa čvarcima i čips od ljuske krompira.',
    'From trimmings you would throw away, you make stock, rendered fat with cracklings and potato-peel crisps.',
    'Из обрезков, которые выбросил бы, ты делаешь бульон, топлёный жир со шкварками и чипсы из картофельной кожуры.',
  ),
  minutes: 7,
  key: { value: l('1 kg → 2 l', '1 kg → 2 l', '1 кг → 2 л'), label: l('obrezci → fond', 'trimmings → stock', 'обрезки → бульон') },
  need: [
    { item: l('Velika kesa za zamrzivač', 'Large freezer bag', 'Большой пакет для морозилки'), qty: l('2', '2', '2') },
    { item: l('Svinjska slanina bez kože ili obrezana mast', 'Pork back fat or fat trimmings', 'Свиной шпик или жировые обрезки'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Ljuske od opranog krompira', 'Peels from scrubbed potatoes', 'Кожура вымытого картофеля'), qty: l('od 1 kg', 'from 1 kg', 'с 1 кг') },
    { item: l('Ulje, so', 'Oil, salt', 'Масло, соль'), qty: l('—', '—', '—') },
  ],
  why: l(
    'U restoranu se ništa ne baca jer se sve plaća. Kod kuće isto: krajevi luka i kore šargarepe su besplatan fond.',
    'In a restaurant nothing is thrown away because everything is paid for. At home too: onion ends and carrot peels are free stock.',
    'В ресторане ничего не выбрасывают, потому что за всё заплачено. Дома так же: концы лука и очистки моркови — бесплатный бульон.',
  ),
  steps: [
    {
      text: l('U zamrzivaču drži kesu za obrezke povrća i kesu za kosti.', 'Keep one freezer bag for vegetable trimmings and one for bones.', 'Держи в морозилке пакет для овощных обрезков и пакет для костей.'),
      params: [l('luk, šargarepa, celer, peršun, pečurke', 'onion, carrot, celery, parsley, mushrooms', 'лук, морковь, сельдерей, петрушка, грибы')],
      done: l('Svaki put posle seckanja obrezci idu u kesu, ne u kantu.', 'After every chopping session the trimmings go in the bag, not the bin.', 'После каждой нарезки обрезки идут в пакет, а не в ведро.'),
      why: l('Bez kupusa, brokolija i krompira, iz istog razloga kao u 8.3.', 'No cabbage, broccoli or potato, for the same reason as in 8.3.', 'Без капусты, брокколи и картофеля — по той же причине, что в 8.3.'),
      drawing: 'trimBag',
    },
    {
      text: l('Kad se kesa napuni, skuvaj povrtni fond.', 'When the bag is full, make vegetable stock.', 'Когда пакет заполнится, свари овощной бульон.'),
      params: [l('1 kg + 2 l vode', '1 kg + 2 l water', '1 кг + 2 л воды'), l('45 min', '45 min', '45 мин')],
      done: l('Fond je bistar i miriše na baštu.', 'The stock is clear and smells of the garden.', 'Бульон прозрачный и пахнет огородом.'),
      why: l('Smrznuti obrezci idu pravo u lonac, bez odmrzavanja. Postupak iz 8.3.', 'Frozen trimmings go straight into the pot, no thawing. The method from 8.3.', 'Замороженные обрезки идут прямо в кастрюлю, без разморозки. Способ из 8.3.'),
      drawing: 'ladleStock',
    },
    {
      text: l('Mast iseci na kockice i topi je sa malo vode na tihoj vatri.', 'Dice the fat and render it slowly with a splash of water.', 'Нарежь жир кубиками и вытапливай с каплей воды на слабом огне.'),
      params: [l('1 cm', '1 cm', '1 см'), l('50 ml vode', '50 ml water', '50 мл воды'), l('1–1.5 h', '1–1.5 h', '1–1,5 ч')],
      done: l('Mast je bistra, a čvarci zlatni i plutaju.', 'The fat is clear and the cracklings are golden and float.', 'Жир прозрачный, шкварки золотистые и всплывают.'),
      why: l('Voda drži temperaturu na 100°C dok se mast ne počne topiti, pa ništa ne zagori na početku.', 'The water holds the temperature at 100°C until the fat starts to melt, so nothing burns at the start.', 'Вода держит температуру 100°C, пока жир не начнёт таять, и в начале ничего не пригорает.'),
      drawing: 'renderFat',
    },
    {
      text: l('Procedi mast u teglu, a čvarke posoli.', 'Strain the fat into a jar and salt the cracklings.', 'Процеди жир в банку, а шкварки посоли.'),
      params: [l('frižider 3 meseca', 'fridge 3 months', 'холодильник 3 месяца')],
      done: l('Ohlađena mast je bela i čvrsta.', 'Once cold the fat is white and firm.', 'Остывший жир белый и твёрдый.'),
      why: l('Domaća mast je najbolja masnoća za pečeni krompir (10.4) i gulaš (12.2).', 'Home-rendered lard is the best fat for roast potatoes (10.4) and goulash (12.2).', 'Домашний смалец — лучший жир для печёного картофеля (10.4) и гуляша (12.2).'),
    },
    {
      text: l('Osuši ljuske krompira, naulji ih, posoli i peci.', 'Dry the potato peels, oil and salt them, and bake.', 'Обсуши картофельную кожуру, смажь маслом, посоли и запеки.'),
      params: [l('200°C', '200°C', '200°C'), l('12–15 min', '12–15 min', '12–15 мин'), l('jedan sloj', 'one layer', 'один слой')],
      done: l('Ljuske su zlatne i krckaju.', 'The peels are golden and crunchy.', 'Кожура золотистая и хрустит.'),
      why: l('Samo ljuske od zdravog, opranog krompira. Zelene delove i klice baci, oni su otrovni.', 'Only peels from sound, scrubbed potatoes. Throw away green parts and sprouts, they are toxic.', 'Только кожура здорового вымытого картофеля. Зелёные части и ростки выбрось — они ядовиты.'),
      drawing: 'traySpacing',
    },
  ],
  mistake: {
    title: l('Kesa sa obrescima u frižideru, a ne u zamrzivaču.', 'The trimmings bag in the fridge, not the freezer.', 'Пакет с обрезками в холодильнике, а не в морозилке.'),
    fix: l(
      'U frižideru obrezci za tri dana uvenu i počnu da se kvare, a kesa se puni nedelju-dve. U zamrzivaču čekaju i dva meseca.',
      'In the fridge trimmings wilt and start to spoil in three days, while the bag takes a week or two to fill. In the freezer they wait two months.',
      'В холодильнике обрезки за три дня вянут и портятся, а пакет наполняется неделю-две. В морозилке они ждут два месяца.',
    ),
  },
  think: {
    question: l('Šta od ovoga NE ide u kesu za fond?', 'Which of these does NOT go in the stock bag?', 'Что из этого НЕ идёт в пакет для бульона?'),
    options: [
      l('Kora od krompira', 'Potato peel', 'Картофельная кожура'),
      l('Krajevi praziluka', 'Leek ends', 'Концы порея'),
      l('Peteljke peršuna', 'Parsley stalks', 'Стебли петрушки'),
    ],
    answer: 0,
    explain: l(
      'Krompir pušta skrob i zamuti fond. Njegova kora ima bolji put: čips iz poslednjeg koraka.',
      'Potato releases starch and clouds the stock. Its peel has a better use: the crisps from the last step.',
      'Картофель выделяет крахмал и мутит бульон. У его кожуры путь лучше — чипсы из последнего шага.',
    ),
  },
}

const bread: Lesson = {
  id: '15.2',
  title: l('Hleb od juče', 'Yesterday\'s bread', 'Вчерашний хлеб'),
  goal: l(
    'Od starog hleba napraviš krutone, prezlu i prženice.',
    'From stale bread you make croutons, breadcrumbs and French toast.',
    'Из чёрствого хлеба ты делаешь крутоны, панировочные сухари и гренки.',
  ),
  minutes: 6,
  key: { value: l('120°C', '120°C', '120°C'), label: l('prezla', 'breadcrumbs', 'сухари') },
  need: [
    { item: l('Hleb od juče ili prekjuče', 'Bread one or two days old', 'Хлеб вчерашний или позавчерашний'), qty: l('½ vekne', '½ loaf', '½ батона') },
    { item: l('Maslinovo ulje, so, beli luk', 'Olive oil, salt, garlic', 'Оливковое масло, соль, чеснок'), qty: l('—', '—', '—') },
    { item: l('Jaja i mleko', 'Eggs and milk', 'Яйца и молоко'), qty: l('2 + 200 ml', '2 + 200 ml', '2 + 200 мл') },
    { item: l('Blender ili rende', 'Blender or grater', 'Блендер или тёрка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Svake godine svako domaćinstvo baci mnogo hrane, a hleb je na vrhu liste. Star hleb je sirovina, ne otpad.',
    'A great deal of food is thrown away every year in every household, and bread tops the list. Stale bread is an ingredient, not waste.',
    'Каждый год в каждом доме выбрасывают много еды, и хлеб — в начале списка. Чёрствый хлеб — сырьё, а не отходы.',
  ),
  steps: [
    {
      text: l('Proveri hleb: suv je u redu, buđ nije.', 'Check the bread: dry is fine, mould is not.', 'Проверь хлеб: сухой — нормально, плесень — нет.'),
      done: l('Hleb je tvrd, ali bez ijedne zelene ili bele mrlje.', 'The bread is hard but has no green or white spots.', 'Хлеб твёрдый, но без единого зелёного или белого пятна.'),
      why: l('Buđ ima korene kroz celu veknu. Ako je vidiš na jednom mestu, cela vekna ide u kantu.', 'Mould has roots through the whole loaf. If you see it in one place, the whole loaf goes.', 'У плесени корни по всему батону. Увидел в одном месте — выбрасывай весь батон.'),
    },
    {
      text: l('Za krutone iseci kocke, prelij uljem i peci.', 'For croutons cut cubes, toss with oil and bake.', 'Для крутонов нарежь кубики, полей маслом и запеки.'),
      params: [l('2 cm', '2 cm', '2 см'), l('180°C', '180°C', '180°C'), l('10–12 min', '10–12 min', '10–12 мин')],
      done: l('Krutoni su zlatni spolja i krckaju do sredine.', 'The croutons are golden outside and crunchy right through.', 'Крутоны золотистые снаружи и хрустят до середины.'),
      why: l('Idu u salate iz 3.4 i krem supe iz 8.6. Čuvaju se nedelju dana u zatvorenoj tegli.', 'They go into the salads from 3.4 and the cream soups from 8.6. They keep a week in a closed jar.', 'Идут в салаты из 3.4 и крем-супы из 8.6. Хранятся неделю в закрытой банке.'),
      drawing: 'breadCubes',
    },
    {
      text: l('Za prezlu osuši hleb na niskoj temperaturi, pa ga samelji.', 'For breadcrumbs dry the bread at a low temperature, then blitz it.', 'Для сухарей высуши хлеб при низкой температуре, затем измельчи.'),
      params: [l('120°C', '120°C', '120°C'), l('30–40 min', '30–40 min', '30–40 мин')],
      done: l('Hleb se lomi kao dvopek, a prezla je sitna i suva.', 'The bread snaps like a rusk, and the crumbs are fine and dry.', 'Хлеб ломается, как сухарь, а крошка мелкая и сухая.'),
      why: l('Prezla mora da bude potpuno suva. Vlaga u tegli znači buđ za nedelju dana.', 'The crumbs must be completely dry. Moisture in the jar means mould within a week.', 'Сухари должны быть совершенно сухими. Влага в банке — плесень через неделю.'),
    },
    {
      text: l('Za prženice umuti jaja i mleko i potopi šnite.', 'For French toast whisk eggs and milk and soak the slices.', 'Для гренок взбей яйца с молоком и замочи ломти.'),
      params: [l('2 jaja + 200 ml', '2 eggs + 200 ml', '2 яйца + 200 мл'), l('30 s po strani', '30 s per side', '30 с на сторону')],
      done: l('Šnite su natopljene do sredine, ali se ne raspadaju.', 'The slices are soaked through but do not fall apart.', 'Ломти пропитаны до середины, но не разваливаются.'),
      why: l('Star hleb upije više tečnosti od svežeg i ne raspadne se. Zato su prženice bolje od jučerašnjeg hleba.', 'Stale bread soaks up more liquid than fresh without falling apart. That is why French toast is better from old bread.', 'Чёрствый хлеб впитывает больше жидкости, чем свежий, и не разваливается. Поэтому гренки лучше из вчерашнего хлеба.'),
      drawing: 'frenchToast',
    },
    {
      text: l('Prži prženice na puteru, na srednjoj vatri.', 'Fry the French toast in butter over medium heat.', 'Обжарь гренки на сливочном масле на среднем огне.'),
      params: [l('2–3 min po strani', '2–3 min per side', '2–3 мин на сторону')],
      done: l('Spolja su zlatne, a sredina je kremasta i nije tečna.', 'They are golden outside and creamy, not runny, inside.', 'Снаружи золотистые, внутри кремовые, не жидкие.'),
      why: l('Jaje u sredini mora da se zgusne. Na jakoj vatri spolja izgori pre toga (6.1).', 'The egg at the centre has to set. On high heat the outside burns first (6.1).', 'Яйцо в середине должно схватиться. На сильном огне снаружи сгорит раньше (6.1).'),
    },
  ],
  mistake: {
    title: l('Star hleb u frižideru "da duže traje".', 'Old bread in the fridge "to make it last".', 'Хлеб в холодильник, «чтобы дольше лежал».'),
    fix: l(
      'Frižider ubrzava sušenje hleba tri puta. Hleb drži na sobnoj temperaturi u platnu dva dana, a ono što ne pojedeš iseci na šnite i zamrzni (15.4).',
      'The fridge makes bread go stale three times faster. Keep bread at room temperature in cloth for two days, and slice and freeze what you will not eat (15.4).',
      'Холодильник ускоряет черствение хлеба втрое. Храни хлеб при комнатной температуре в ткани два дня, а остальное нарежь и заморозь (15.4).',
    ),
  },
  think: {
    question: l('Zašto prezla ide na 120°C, a krutoni na 180°C?', 'Why do breadcrumbs go at 120°C and croutons at 180°C?', 'Почему сухари сушат при 120°C, а крутоны — при 180°C?'),
    options: [
      l('Prezla treba da se osuši, a krutoni da dobiju boju', 'Crumbs need to dry, croutons need colour', 'Сухари нужно высушить, а крутонам — подрумяниться'),
      l('Prezla je od drugog hleba', 'Breadcrumbs use a different bread', 'Сухари из другого хлеба'),
      l('Nema razlike, može oba na 180°C', 'No difference, both can go at 180°C', 'Разницы нет, оба при 180°C'),
    ],
    answer: 0,
    explain: l(
      'Na 180°C spoljni deo dobije boju pre nego što se sredina osuši. Za prezlu želiš suvo bez boje, za kruton boju sa hrskavom sredinom.',
      'At 180°C the outside colours before the centre dries. For crumbs you want dry without colour; for croutons, colour with a crisp middle.',
      'При 180°C поверхность румянится раньше, чем высохнет середина. Сухарям нужна сухость без цвета, крутонам — цвет и хрустящая середина.',
    ),
  },
  recipe: { name: l('Prženice', 'French toast', 'Гренки'), protein: 7, carbs: 19, fat: 8, kcal: 175 },
}

const friedRice: Lesson = {
  id: '15.3',
  title: l('Jučerašnji ručak, novo jelo', 'Yesterday\'s lunch, a new dish', 'Вчерашний обед — новое блюдо'),
  goal: l(
    'Od jučerašnjeg pirinča i ostataka napraviš prženi pirinač za 10 minuta, bezbedno.',
    'You turn yesterday\'s rice and leftovers into fried rice in 10 minutes, safely.',
    'Ты превращаешь вчерашний рис и остатки в жареный рис за 10 минут, безопасно.',
  ),
  minutes: 6,
  key: { value: l('1 dan', '1 day', '1 день'), label: l('pirinač u frižideru', 'rice in the fridge', 'рис в холодильнике') },
  need: [
    { item: l('Kuvan pirinač od juče, iz frižidera', 'Yesterday\'s cooked rice, from the fridge', 'Вчерашний варёный рис из холодильника'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Ostaci: piletina, povrće', 'Leftovers: chicken, vegetables', 'Остатки: курица, овощи'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Jaja', 'Eggs', 'Яйца'), qty: l('2 kom', '2', '2 шт') },
    { item: l('Soja sos, mladi luk, beli luk', 'Soy sauce, spring onion, garlic', 'Соевый соус, зелёный лук, чеснок'), qty: l('2 kašike + 2 + 1', '2 tbsp + 2 + 1', '2 ст. л. + 2 + 1') },
    { item: l('Vok ili veliki tiganj, ulje', 'Wok or large pan, oil', 'Вок или большая сковорода, масло'), qty: l('2 kašike', '2 tbsp', '2 ст. л.') },
  ],
  why: l(
    'Ostaci nisu kazna. Jučerašnji pirinač je bolji za prženje od svežeg, a jučerašnje pile je pola gotovog obroka.',
    'Leftovers are not a punishment. Day-old rice fries better than fresh, and yesterday\'s chicken is half a meal already done.',
    'Остатки — не наказание. Вчерашний рис жарится лучше свежего, а вчерашняя курица — половина готового обеда.',
  ),
  steps: [
    {
      text: l('Proveri: pirinač je ohlađen i u frižideru najviše jedan dan.', 'Check: the rice was cooled quickly and has been in the fridge one day at most.', 'Проверь: рис быстро остужен и лежит в холодильнике не больше дня.'),
      params: [l('u frižider za 1 h', 'into the fridge within 1 h', 'в холодильник за 1 ч'), l('max 1 dan', 'max 1 day', 'макс. 1 день')],
      done: l('Znaš kad je pirinač skuvan i gde je stajao.', 'You know when the rice was cooked and where it has been.', 'Ты знаешь, когда сварен рис и где он стоял.'),
      why: l('Pirinač nosi spore bakterije koje prežive kuvanje. Na sobnoj temperaturi prave otrov koji podgrevanje ne uništi.', 'Rice carries bacterial spores that survive cooking. At room temperature they make a toxin that reheating does not destroy.', 'Рис несёт споры бактерий, которые переживают варку. При комнатной температуре они выделяют токсин, который не разрушается при разогреве.'),
      drawing: 'fridgeShelves',
    },
    {
      text: l('Razmrvi hladan pirinač rukama.', 'Break up the cold rice with your hands.', 'Разомни холодный рис руками.'),
      done: l('Nema grudvi, svako zrno je odvojeno.', 'No clumps, every grain separate.', 'Нет комков, каждое зёрнышко отдельно.'),
      why: l('Hladan pirinač je suv spolja i ne lepi se. Svež pirinač u voku postane kaša.', 'Cold rice is dry on the surface and does not stick. Fresh rice in a wok turns to mush.', 'Холодный рис сухой снаружи и не слипается. Свежий в воке превращается в кашу.'),
    },
    {
      text: l('U vrelom voku ispeci kajganu, pa je izvadi.', 'Scramble the eggs in the hot wok, then take them out.', 'В горячем воке сделай яичницу-болтунью и выложи.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь'), l('30 s', '30 s', '30 с')],
      done: l('Jaja su tek stegnuta, u velikim komadima.', 'The eggs have just set, in large pieces.', 'Яйца только схватились, крупными кусками.'),
      drawing: 'scramble',
    },
    {
      text: l('Proprži ostatke i beli luk, pa dodaj pirinač i rasporedi ga.', 'Stir-fry the leftovers and garlic, then add the rice and spread it out.', 'Обжарь остатки с чесноком, добавь рис и распредели.'),
      params: [l('pirinač ne mešaj 1 min', 'leave the rice 1 min', 'рис не мешай 1 мин')],
      done: l('Pirinač pucketa i dno je blago zapečeno.', 'The rice crackles and the bottom is lightly toasted.', 'Рис потрескивает, дно слегка поджарено.'),
      why: l('Ostaci se samo zagrevaju, oni su već kuvani. Pirinač koji miruje dobija koricu, kao meso u 4.6.', 'The leftovers only need heating; they are already cooked. Rice left alone gets a crust, like meat in 4.6.', 'Остатки только прогреваются — они уже готовы. Рис, который не трогают, получает корочку, как мясо в 4.6.'),
      drawing: 'friedRice',
    },
    {
      text: l('Vrati jaja, dodaj soja sos i mladi luk, i služi odmah.', 'Return the eggs, add soy sauce and spring onion, and serve at once.', 'Верни яйца, добавь соевый соус и зелёный лук и сразу подавай.'),
      params: [l('vruće u sredini', 'piping hot throughout', 'горячо до центра'), l('ne podgreva se ponovo', 'never reheat again', 'больше не разогревать')],
      done: l('Jelo se puši, a svako zrno je sjajno i odvojeno.', 'The dish is steaming and every grain is glossy and separate.', 'Блюдо дымится, каждое зерно блестящее и отдельное.'),
      why: l('Ostaci se podgrevaju samo jednom. Šta ne pojedeš sad, ide u kantu, ne nazad u frižider.', 'Leftovers are reheated once only. What you do not eat now goes in the bin, not back in the fridge.', 'Остатки разогревают только раз. Что не съел сейчас — в ведро, а не обратно в холодильник.'),
    },
  ],
  mistake: {
    title: l('Pirinač ostavljen na šporetu do večeri.', 'Rice left on the stove until evening.', 'Рис оставлен на плите до вечера.'),
    fix: l(
      'Za par sati na sobnoj temperaturi pirinač postane opasan, a ne vidi se i ne miriše. Ohladi ga raširenog u plitkoj posudi i stavi u frižider za sat vremena.',
      'A few hours at room temperature make rice dangerous, without any sign or smell. Cool it spread out in a shallow container and refrigerate within an hour.',
      'За несколько часов при комнатной температуре рис становится опасным, хотя по виду и запаху этого не понять. Остуди его тонким слоем в плоской посуде и убери в холодильник в течение часа.',
    ),
  },
  think: {
    question: l('Od juče imaš pečeno pile i pire. Šta je najbolji novi obrok?', 'From yesterday you have roast chicken and mash. What is the best new meal?', 'Со вчера остались запечённая курица и пюре. Какое новое блюдо лучше всего?'),
    options: [
      l('Pita od piletine sa pireom kao korom, pečena do 74°C', 'Chicken pie topped with the mash, baked to 74°C', 'Пирог с курицей под пюре, запечённый до 74°C'),
      l('Isto, podgrejano u mikrotalasnoj dvaput', 'The same, reheated twice in the microwave', 'То же самое, дважды разогретое в микроволновке'),
      l('Hladno, pravo iz frižidera, bez gledanja datuma', 'Cold, straight from the fridge, without checking the date', 'Холодное, прямо из холодильника, не глядя на дату'),
    ],
    answer: 0,
    explain: l(
      'Novo jelo je bolje od podgrejanog starog, a ostaci moraju jednom da se zagreju do 74°C u sredini. Isti broj kao za piletinu iz 7.5.',
      'A new dish beats reheated old food, and leftovers must be heated once to 74°C at the centre. The same number as chicken in 7.5.',
      'Новое блюдо лучше разогретого старого, а остатки нужно один раз прогреть до 74°C в центре. Та же цифра, что для курицы в 7.5.',
    ),
  },
  recipe: { name: l('Prženi pirinač sa piletinom', 'Chicken fried rice', 'Жареный рис с курицей'), protein: 9, carbs: 14, fat: 8.6, kcal: 170 },
}

const freezing: Lesson = {
  id: '15.4',
  title: l('Pametno zamrzavanje', 'Freezing smart', 'Умная заморозка'),
  goal: l(
    'Zamrzneš hranu ravno, obeleženo i u porcijama, tako da je posle tri meseca i dalje dobra.',
    'You freeze food flat, labelled and portioned, so it is still good three months later.',
    'Ты замораживаешь еду плоско, подписанной и порциями, так что через три месяца она всё ещё хороша.',
  ),
  minutes: 5,
  key: { value: l('−18°C', '−18°C', '−18°C'), label: l('zamrzivač', 'freezer', 'морозилка') },
  need: [
    { item: l('Kese za zamrzivač sa zatvaračem', 'Zip-lock freezer bags', 'Пакеты для заморозки с застёжкой'), qty: l('10', '10', '10') },
    { item: l('Kalup za led', 'Ice cube tray', 'Форма для льда'), qty: l('1', '1', '1') },
    { item: l('Pleh koji staje u zamrzivač', 'A tray that fits the freezer', 'Противень, который влезает в морозилку'), qty: l('1', '1', '1') },
    { item: l('Flomaster', 'Marker', 'Маркер'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Zamrzivač je pauza, ne čarolija. Hrana izlazi onakva kakva je ušla, minus ono što je mraz pojeo. Pravilno pakovanje je razlika.',
    'The freezer is a pause button, not magic. Food comes out as it went in, minus what freezer burn ate. Proper packing makes the difference.',
    'Морозилка — пауза, а не волшебство. Еда выходит такой, какой вошла, минус то, что съел иней. Разницу делает правильная упаковка.',
  ),
  steps: [
    {
      text: l('Kuvano jelo ohladi u frižideru pre zamrzavanja.', 'Cool cooked food in the fridge before freezing.', 'Остуди готовое блюдо в холодильнике перед заморозкой.'),
      params: [l('do 2 h u frižider', 'into the fridge within 2 h', 'в холодильник за 2 ч'), l('do 4°C', 'to 4°C', 'до 4°C')],
      done: l('Jelo je hladno do sredine.', 'The food is cold right to the centre.', 'Блюдо холодное до центра.'),
      why: l('Toplo jelo ugreje sve oko sebe u zamrzivaču i sporo se smrzava, pa nastaju veliki kristali leda.', 'Warm food heats everything around it in the freezer and freezes slowly, forming large ice crystals.', 'Тёплое блюдо нагревает всё вокруг в морозилке и замерзает медленно, образуя крупные кристаллы льда.'),
    },
    {
      text: l('Podeli u porcije za jedan obrok i istisni vazduh iz kese.', 'Portion into single meals and squeeze the air out of the bag.', 'Раздели на порции на один раз и выдави воздух из пакета.'),
      params: [l('bez vazduha', 'no air', 'без воздуха')],
      done: l('Kesa se priljubila uz hranu.', 'The bag clings to the food.', 'Пакет прилегает к еде.'),
      why: l('Vazduh u kesi isušuje hranu i pravi sive, suve mrlje. To je "opekotina od mraza".', 'Air in the bag dries the food into grey, leathery patches. That is freezer burn.', 'Воздух в пакете высушивает еду в серые сухие пятна. Это «ожог холодом».'),
      drawing: 'flatBags',
    },
    {
      text: l('Napiši šta je, datum i porciju.', 'Write what it is, the date and the portion.', 'Подпиши, что это, дату и порцию.'),
      params: [l('sirovo meso 3–6 meseci', 'raw meat 3–6 months', 'сырое мясо 3–6 месяцев'), l('kuvano 2–3 meseca', 'cooked 2–3 months', 'готовое 2–3 месяца')],
      done: l('Svaka kesa se čita bez otvaranja.', 'Every bag can be read without opening it.', 'Каждый пакет читается без открывания.'),
      why: l('Smrznuto, sve izgleda isto. Gulaš i paprikaš su u kesi blizanci.', 'Frozen, everything looks the same. In a bag goulash and paprikash are twins.', 'В замороженном виде всё выглядит одинаково. В пакете гуляш и паприкаш — близнецы.'),
    },
    {
      text: l('Zamrzni kese ravno na plehu, pa ih složi uspravno.', 'Freeze the bags flat on a tray, then file them upright.', 'Заморозь пакеты плоско на противне, потом поставь вертикально.'),
      params: [l('2 cm debljine', '2 cm thick', 'толщина 2 см')],
      done: l('Kese su tanke ploče koje stoje kao knjige.', 'The bags are thin slabs that stand like books.', 'Пакеты — тонкие плитки, стоящие, как книги.'),
      why: l('Tanko se brzo smrzne i brzo odmrzne. Ploča od 2 cm se odmrzne u frižideru za noć (7.1).', 'Thin freezes fast and thaws fast. A 2 cm slab thaws in the fridge overnight (7.1).', 'Тонкое быстро замерзает и быстро оттаивает. Плитка в 2 см размораживается в холодильнике за ночь (7.1).'),
      drawing: 'flatBags',
    },
    {
      text: l('Fond, sos i bilje u ulju zamrzni u kalupu za led.', 'Freeze stock, sauce and herbs in oil in an ice cube tray.', 'Заморозь бульон, соус и травы в масле в форме для льда.'),
      params: [l('kocka ~30 ml', 'cube ~30 ml', 'кубик ~30 мл')],
      done: l('Imaš kesu kockica koje vadiš po potrebi.', 'You have a bag of cubes to take out as needed.', 'У тебя пакет кубиков, которые берёшь по необходимости.'),
      why: l('Za sos u tiganju (9.8) treba 2–3 kocke fonda, ne ceo litar.', 'A pan sauce (9.8) needs 2–3 cubes of stock, not a whole litre.', 'Для соуса на сковороде (9.8) нужно 2–3 кубика бульона, а не целый литр.'),
      drawing: 'iceTray',
    },
  ],
  mistake: {
    title: l('Zamrzavanje "da ne propadne" hrane koja je već na izmaku.', 'Freezing food that is already on the turn "so it does not go to waste".', 'Замораживать еду, которая уже на грани, «чтобы не пропала».'),
    fix: l(
      'Zamrzivač ne vraća svežinu, samo je čuva. Zamrzni hranu dok je dobra: meso dan posle kupovine, ostatke istog dana.',
      'The freezer does not restore freshness, it only keeps it. Freeze food while it is good: meat the day after buying, leftovers the same day.',
      'Морозилка не возвращает свежесть, а только сохраняет её. Замораживай, пока еда хороша: мясо на следующий день после покупки, остатки — в тот же день.',
    ),
  },
  think: {
    question: l('Šta od ovoga se loše zamrzava?', 'Which of these freezes badly?', 'Что из этого плохо замораживается?'),
    options: [
      l('Zelena salata i krastavac', 'Lettuce and cucumber', 'Листовой салат и огурец'),
      l('Pileći fond', 'Chicken stock', 'Куриный бульон'),
      l('Gulaš', 'Goulash', 'Гуляш'),
    ],
    answer: 0,
    explain: l(
      'Povrće puno vode puca od leda i izađe kao mokra krpa. Jela sa sosom i fondovi se zamrzavaju odlično.',
      'Watery vegetables burst from the ice and come out like a wet rag. Saucy dishes and stocks freeze perfectly.',
      'Водянистые овощи лопаются ото льда и выходят, как мокрая тряпка. Блюда с соусом и бульоны замораживаются отлично.',
    ),
  },
}

const scraps: Lesson = {
  id: '15.5',
  title: l('Kora, peteljke, lišće', 'Peel, stalks, leaves', 'Кожура, стебли, листья'),
  goal: l(
    'Iskoristiš delove povrća koje inače bacaš: koru limuna, stabljiku brokolija i lišće šargarepe.',
    'You use the parts of vegetables you usually throw away: lemon zest, broccoli stalk and carrot tops.',
    'Ты используешь части овощей, которые обычно выбрасываешь: цедру лимона, стебель брокколи и ботву моркови.',
  ),
  minutes: 6,
  key: { value: l('100%', '100%', '100%'), label: l('povrća', 'of the vegetable', 'овоща') },
  need: [
    { item: l('Nepoprskan limun', 'Unwaxed lemon', 'Лимон без воска'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Brokoli sa stabljikom', 'Broccoli with its stalk', 'Брокколи со стеблем'), qty: l('1 glavica', '1 head', '1 кочан') },
    { item: l('Šargarepa sa lišćem', 'Carrots with their tops', 'Морковь с ботвой'), qty: l('1 vezica', '1 bunch', '1 пучок') },
    { item: l('Orasi, parmezan, beli luk, maslinovo ulje', 'Walnuts, Parmesan, garlic, olive oil', 'Грецкие орехи, пармезан, чеснок, оливковое масло'), qty: l('30 g + 30 g + 1 + 100 ml', '30 g + 30 g + 1 + 100 ml', '30 г + 30 г + 1 + 100 мл') },
    { item: l('Rende sa sitnim zupcima, ljuštač', 'Fine grater, peeler', 'Мелкая тёрка, овощечистка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kora limuna ima više mirisa od soka, a stabljika brokolija je slađa od cvetova. Bacamo najbolje delove iz navike.',
    'Lemon zest has more aroma than the juice, and broccoli stalk is sweeter than the florets. We throw away the best parts out of habit.',
    'В цедре лимона больше аромата, чем в соке, а стебель брокколи слаще соцветий. Мы выбрасываем лучшее по привычке.',
  ),
  steps: [
    {
      text: l('Izrendaj koru limuna pre nego što ga iscediš.', 'Zest the lemon before you juice it.', 'Натри цедру лимона, прежде чем выжать его.'),
      params: [l('samo žuto', 'only the yellow', 'только жёлтое')],
      done: l('Limun je bled, a na rendetu je žuta, mirisna kora.', 'The lemon is pale and fragrant yellow zest sits on the grater.', 'Лимон бледный, на тёрке жёлтая ароматная цедра.'),
      why: l('Belo ispod je gorko. Koru koju ne iskoristiš odmah zamrzni (15.4).', 'The white pith underneath is bitter. Freeze zest you do not use straight away (15.4).', 'Белый слой под цедрой горький. Неиспользованную цедру заморозь (15.4).'),
      drawing: 'zestLemon',
    },
    {
      text: l('Stabljiku brokolija oljušti i iseci na kolutove.', 'Peel the broccoli stalk and slice it into rounds.', 'Очисти стебель брокколи и нарежь кружками.'),
      params: [l('5 mm', '5 mm', '5 мм')],
      done: l('Iznutra je stabljika svetlozelena i sočna.', 'Inside, the stalk is pale green and juicy.', 'Внутри стебель светло-зелёный и сочный.'),
      why: l('Samo spoljna kora je vlaknasta. Unutrašnjost se kuva isto vreme kao cvetovi ako je tanko isečena.', 'Only the outer skin is fibrous. Sliced thin, the inside cooks in the same time as the florets.', 'Волокниста только внешняя кожица. Тонко нарезанная середина готовится столько же, сколько соцветия.'),
      drawing: 'peelStem',
    },
    {
      text: l('Lišće šargarepe operi i odvoji od debelih peteljki.', 'Wash the carrot tops and strip them from the thick stems.', 'Промой ботву моркови и отдели от толстых стеблей.'),
      params: [l('50 g lišća', '50 g leaves', '50 г листьев')],
      done: l('Imaš gomilu mekog, nežnog lišća.', 'You have a pile of soft, tender leaves.', 'У тебя горка мягких нежных листьев.'),
      why: l('Debele peteljke idu u kesu za fond (15.1). Lišće ima ukus između peršuna i šargarepe.', 'The thick stems go in the stock bag (15.1). The leaves taste somewhere between parsley and carrot.', 'Толстые стебли — в пакет для бульона (15.1). Листья на вкус между петрушкой и морковью.'),
    },
    {
      text: l('Izmiksaj lišće, orahe, sir, beli luk i ulje u pesto.', 'Blitz the leaves, walnuts, cheese, garlic and oil into pesto.', 'Измельчи листья, орехи, сыр, чеснок и масло в песто.'),
      params: [l('50 + 30 + 30 g', '50 + 30 + 30 g', '50 + 30 + 30 г'), l('100 ml ulja', '100 ml oil', '100 мл масла'), l('pulsiraj', 'pulse', 'импульсами')],
      done: l('Pesto je zrnast i zelen, ne glatka kaša.', 'The pesto is textured and green, not a smooth paste.', 'Песто зернистое и зелёное, а не гладкая каша.'),
      why: l('Dugo miksanje zagreje lišće i pesto potamni. Kratki impulsi čuvaju boju.', 'Long blending heats the leaves and the pesto darkens. Short pulses keep the colour.', 'Долгое измельчение нагревает листья, и песто темнеет. Короткие импульсы сохраняют цвет.'),
    },
    {
      text: l('Dovrši limunovom korom i sokom, pa posoli.', 'Finish with lemon zest and juice, then salt.', 'Заверши цедрой и соком лимона, посоли.'),
      params: [l('pola kore + 1 kašika soka', 'half the zest + 1 tbsp juice', 'половина цедры + 1 ст. л. сока')],
      done: l('Pesto je svež, oštar i jasno zelen.', 'The pesto is fresh, bright and clearly green.', 'Песто свежее, яркое и чисто-зелёное.'),
      why: l('Pesto sa brokolijem iz koraka 2 i testeninom iz 10.2 je ceo ručak od otpada.', 'Pesto with the broccoli from step 2 and pasta from 10.2 is a whole lunch made from scraps.', 'Песто с брокколи из шага 2 и пастой из 10.2 — целый обед из отходов.'),
      drawing: 'lemonDrops',
    },
  ],
  mistake: {
    title: l('Rendanje kore sa voskom i pesticidima.', 'Zesting a waxed, sprayed lemon.', 'Натирать цедру лимона с воском и пестицидами.'),
    fix: l(
      'Kod limuna se kora jede, pa je bitno šta je na njoj. Kupuj nepoprskane, a ako nemaš, operi limun toplom vodom i četkom, pa ga osuši.',
      'With lemons you eat the peel, so what is on it matters. Buy unwaxed; if you cannot, scrub the lemon with warm water and a brush, then dry it.',
      'У лимона едят кожуру, поэтому важно, что на ней. Покупай без воска; если нет — помой лимон тёплой водой со щёткой и обсуши.',
    ),
  },
  think: {
    question: l('Zašto se kora limuna renda pre ceđenja, a ne posle?', 'Why is a lemon zested before juicing, not after?', 'Почему цедру натирают до того, как выжать лимон, а не после?'),
    options: [
      l('Ceo limun je čvrst i lako se renda, isceđen se gužva', 'A whole lemon is firm and easy to zest; a squeezed one collapses', 'Целый лимон упругий и легко трётся, выжатый мнётся'),
      l('Kora je posle gorka', 'The zest turns bitter afterwards', 'Потом цедра горчит'),
      l('Sok bi pobegao kroz rende', 'The juice would run through the grater', 'Сок убежит сквозь тёрку'),
    ],
    answer: 0,
    explain: l(
      'Redosled je deo tehnike, kao mise en place u 1.2. Prvo kora, pa sok.',
      'Order is part of the technique, like the mise en place in 1.2. Zest first, then juice.',
      'Порядок — часть техники, как мизанплас в 1.2. Сначала цедра, потом сок.',
    ),
  },
  recipe: { name: l('Pesto od lišća šargarepe', 'Carrot-top pesto', 'Песто из морковной ботвы'), protein: 8, carbs: 4, fat: 58, kcal: 570 },
}

export const leftoverLessons: Lesson[] = [trimmings, bread, friedRice, freezing, scraps]
