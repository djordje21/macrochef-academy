import { l, type Lesson } from '../types'

// Module 2 · Knife. Every step follows the six writing rules: one action, a unit on every number,
// a "done when" the cook can check, one sentence of why, a drawing where the cut needs one.

const grip: Lesson = {
  id: '2.1',
  title: l('Kako se drži nož', 'How to hold a knife', 'Как держать нож'),
  goal: l(
    'Držiš nož sigurno, a prsti druge ruke ne mogu pod sečivo.',
    'You hold the knife securely, and the fingers of your other hand cannot get under the blade.',
    'Ты уверенно держишь нож, а пальцы другой руки не могут попасть под лезвие.',
  ),
  minutes: 8,
  key: { value: l('5 mm', '5 mm', '5 мм'), label: l('kolut', 'slice', 'кружок') },
  need: [
    { item: l('Kuvarski nož', "Chef's knife", 'Поварской нож'), qty: l('20 cm', '20 cm', '20 см') },
    { item: l('Daska', 'Cutting board', 'Разделочная доска'), qty: l('1', '1', '1') },
    { item: l('Vlažna krpa', 'Damp cloth', 'Влажная салфетка'), qty: l('1', '1', '1') },
    { item: l('Šargarepa', 'Carrot', 'Морковь'), qty: l('1 kom', '1', '1 шт') },
  ],
  why: l(
    'Dobar hvat je razlika između sigurnog i sporog seckanja. Sve ostale lekcije o nožu počinju odavde.',
    'A good grip is the difference between safe cutting and slow cutting. Every other knife lesson starts here.',
    'Правильный хват отличает безопасную нарезку от медленной. Все остальные уроки о ноже начинаются здесь.',
  ),
  steps: [
    {
      text: l('Stavi vlažnu krpu ispod daske.', 'Put a damp cloth under the board.', 'Положи влажную салфетку под доску.'),
      done: l(
        'Gurneš dasku rukom i ona se ne pomera.',
        'You push the board with your hand and it does not move.',
        'Толкаешь доску рукой, и она не двигается.',
      ),
      why: l(
        'Daska koja klizi je najčešći uzrok posekotina.',
        'A sliding board is the most common cause of cuts.',
        'Скользящая доска — самая частая причина порезов.',
      ),
      drawing: 'board',
    },
    {
      text: l(
        'Palcem i kažiprstom uhvati sečivo, odmah ispred drške.',
        'Pinch the blade with thumb and index finger, just in front of the handle.',
        'Возьми лезвие большим и указательным пальцами сразу перед ручкой.',
      ),
      params: [l('palac + kažiprst na sečivu', 'thumb + index on the blade', 'большой + указательный на лезвии')],
      done: l(
        'Nož ne može da se iskrene levo-desno.',
        'The knife cannot tilt left or right.',
        'Нож не может наклониться влево или вправо.',
      ),
      why: l(
        'Kontrola je u sečivu, ne u dršci.',
        'Control comes from the blade, not the handle.',
        'Контроль — в лезвии, а не в ручке.',
      ),
      drawing: 'pinchGrip',
    },
    {
      text: l(
        'Ostala tri prsta obavij oko drške, bez stezanja.',
        'Wrap the other three fingers around the handle, without squeezing.',
        'Остальные три пальца оберни вокруг ручки, не сжимая.',
      ),
      done: l(
        'Možeš da mrdaš prstima na dršci, a nož i dalje stoji čvrsto.',
        'You can wiggle your fingers on the handle and the knife still stays firm.',
        'Ты можешь пошевелить пальцами на ручке, а нож всё равно держится крепко.',
      ),
      why: l(
        'Stegnuta šaka se brzo umori, a umorna ruka greši.',
        'A clenched hand tires fast, and a tired hand makes mistakes.',
        'Сжатая рука быстро устаёт, а уставшая рука ошибается.',
      ),
    },
    {
      text: l(
        'Drugu ruku savij u mačju šapu: vrhovi prstiju iza zglobova.',
        'Curl your other hand into a claw: fingertips behind the knuckles.',
        'Сложи другую руку «кошачьей лапкой»: кончики пальцев за костяшками.',
      ),
      params: [l('zglob uz sečivo', 'knuckle against the blade', 'костяшка у лезвия')],
      done: l(
        'Sečivo dodiruje zglob srednjeg prsta, a vrhovi prstiju su iza njega.',
        'The blade touches the middle knuckle, and your fingertips are behind it.',
        'Лезвие касается костяшки среднего пальца, а кончики пальцев — за ней.',
      ),
      why: l(
        'Zglob vodi nož. Vrh prsta nikad nije na putu sečiva.',
        'The knuckle guides the knife. A fingertip is never in the blade’s path.',
        'Костяшка направляет нож. Кончик пальца никогда не на пути лезвия.',
      ),
      drawing: 'claw',
    },
    {
      text: l(
        'Seci šargarepu na kolutove: nož ide napred i dole.',
        'Slice the carrot into rounds: the knife moves forward and down.',
        'Нарежь морковь кружками: нож движется вперёд и вниз.',
      ),
      params: [l('5 mm', '5 mm', '5 мм'), l('20 kolutova', '20 rounds', '20 кружков')],
      done: l(
        'Kolutovi su iste debljine i čuješ ravnomeran ritam.',
        'The rounds are the same thickness and you hear an even rhythm.',
        'Кружки одинаковой толщины, и ты слышишь ровный ритм.',
      ),
      why: l(
        'Pokret napred seče. Samo pritisak dole lomi i gnječi.',
        'Moving forward cuts. Pressing straight down only crushes.',
        'Движение вперёд режет. Давление только вниз ломает и мнёт.',
      ),
      drawing: 'rounds',
    },
  ],
  mistake: {
    title: l('Kažiprst na hrbatu noža.', 'Index finger on the spine of the knife.', 'Указательный палец на обухе ножа.'),
    fix: l(
      'Izgleda precizno, ali nož se iskrene čim seče nešto tvrdo. Vrati kažiprst na stranu sečiva.',
      'It looks precise, but the knife tilts as soon as it hits something hard. Move the finger back to the side of the blade.',
      'Выглядит точно, но нож перекашивается, как только встречает твёрдое. Верни палец на боковую сторону лезвия.',
    ),
  },
  think: {
    question: l(
      'Zašto je veliki kuvarski nož sigurniji od malog?',
      "Why is a big chef's knife safer than a small one?",
      'Почему большой поварской нож безопаснее маленького?',
    ),
    options: [
      l('Teži je, pa seče sam', 'It is heavier, so it cuts by itself', 'Он тяжелее и режет сам'),
      l(
        'Dugo sečivo seče jednim potezom, bez pritiskanja',
        'A long blade cuts in one stroke, without pressing',
        'Длинное лезвие режет одним движением, без нажима',
      ),
      l('Uvek je oštriji', 'It is always sharper', 'Он всегда острее'),
    ],
    answer: 1,
    explain: l(
      'Nož klizi kad ga pritiskaš. Dugo sečivo uradi posao jednim mirnim potezom, pa nema razloga za silu.',
      'Knives slip when you force them. A long blade does the job in one calm stroke, so there is no need for force.',
      'Нож соскальзывает, когда на него давят. Длинное лезвие делает работу одним спокойным движением, сила не нужна.',
    ),
  },
}

const sharpen: Lesson = {
  id: '2.2',
  title: l('Oštrenje i čelik', 'Sharpening and honing', 'Заточка и мусат'),
  goal: l(
    'Ispraviš ivicu noža čelikom pre svakog kuvanja i znaš kad mu treba brus.',
    'You straighten the edge with a honing steel before every cooking session and know when it needs a whetstone.',
    'Ты правишь кромку мусатом перед каждой готовкой и знаешь, когда ножу нужен точильный камень.',
  ),
  minutes: 6,
  key: { value: l('15–20°', '15–20°', '15–20°'), label: l('ugao', 'angle', 'угол') },
  need: [
    { item: l('Kuvarski nož', "Chef's knife", 'Поварской нож'), qty: l('20 cm', '20 cm', '20 см') },
    { item: l('Čelik (musat)', 'Honing steel', 'Мусат'), qty: l('1', '1', '1') },
    { item: l('Vlažna krpa', 'Damp cloth', 'Влажная салфетка'), qty: l('1', '1', '1') },
    { item: l('List papira', 'Sheet of paper', 'Лист бумаги'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Tup nož klizi po namirnici i beži u prst. Oštar nož ide tamo gde ga usmeriš.',
    'A dull knife slides off the food and into your finger. A sharp knife goes where you point it.',
    'Тупой нож соскальзывает с продукта на палец. Острый нож идёт туда, куда ты его направишь.',
  ),
  steps: [
    {
      text: l(
        'Postavi čelik uspravno, vrhom na vlažnu krpu.',
        'Stand the steel upright, tip on the damp cloth.',
        'Поставь мусат вертикально, кончиком на влажную салфетку.',
      ),
      done: l('Čelik stoji i vrh ne klizi.', 'The steel stands and the tip does not slip.', 'Мусат стоит, кончик не скользит.'),
      why: l(
        'Uspravan čelik je sigurniji od mahanja u vazduhu kao na televiziji.',
        'An upright steel is safer than waving it in the air like on TV.',
        'Вертикальный мусат безопаснее, чем размахивать им в воздухе, как по телевизору.',
      ),
    },
    {
      text: l(
        'Nasloni petu sečiva na čelik, pod uglom od 15–20°.',
        'Rest the heel of the blade on the steel at 15–20°.',
        'Приложи пятку лезвия к мусату под углом 15–20°.',
      ),
      params: [l('15–20°', '15–20°', '15–20°')],
      done: l(
        'Prepolovi pravi ugao, pa ga prepolovi opet. To je oko 20°.',
        'Halve a right angle, then halve it again. That is about 20°.',
        'Раздели прямой угол пополам, а потом ещё раз. Это около 20°.',
      ),
      why: l(
        'Ugao je ono što čelik vraća u red. Ako se menja, ivica se kvari.',
        'The angle is what the steel restores. If it changes, the edge gets worse.',
        'Угол — это то, что восстанавливает мусат. Если он меняется, кромка портится.',
      ),
      drawing: 'angle',
    },
    {
      text: l(
        'Povuci sečivo niz čelik, od pete do vrha, jednim laganim potezom.',
        'Draw the blade down the steel, heel to tip, in one light stroke.',
        'Проведи лезвие вниз по мусату, от пятки до кончика, одним лёгким движением.',
      ),
      params: [l('5 poteza', '5 strokes', '5 движений'), l('lagan pritisak', 'light pressure', 'лёгкий нажим')],
      done: l(
        'Čuješ tih, ujednačen zvuk, bez škripe.',
        'You hear a quiet, even sound, with no scraping.',
        'Слышишь тихий ровный звук, без скрежета.',
      ),
      why: l(
        'Čelik ne skida metal, samo ispravlja povijenu ivicu.',
        'A steel does not remove metal, it only straightens a bent edge.',
        'Мусат не снимает металл, он только выпрямляет загнутую кромку.',
      ),
      drawing: 'hone',
    },
    {
      text: l(
        'Ponovi sa druge strane sečiva, isti broj poteza.',
        'Repeat on the other side of the blade, same number of strokes.',
        'Повтори с другой стороны лезвия, столько же движений.',
      ),
      params: [l('5 poteza', '5 strokes', '5 движений')],
      done: l(
        'Obe strane imaju isti broj poteza.',
        'Both sides have the same number of strokes.',
        'На каждой стороне одинаковое число движений.',
      ),
    },
    {
      text: l('Proveri nož na listu papira.', 'Test the knife on a sheet of paper.', 'Проверь нож на листе бумаги.'),
      done: l(
        'Nož seče papir glatko, bez cepanja.',
        'The knife cuts the paper cleanly, without tearing.',
        'Нож режет бумагу ровно, не разрывая.',
      ),
      why: l(
        'Ako i dalje cepa, ivica je istupljena i treba joj brus, ne čelik.',
        'If it still tears, the edge is worn and needs a whetstone, not a steel.',
        'Если всё ещё рвёт, кромка затупилась, и нужен камень, а не мусат.',
      ),
      drawing: 'paper',
    },
  ],
  mistake: {
    title: l('Brzo „mačevanje“ kao na televiziji.', 'Fast "sword fighting" like on TV.', 'Быстрое «фехтование», как по телевизору.'),
    fix: l(
      'Na brzini se ugao menja u svakom potezu i ivica postaje gora. Polako, uspravan čelik, isti ugao.',
      'At speed the angle changes on every stroke and the edge gets worse. Slowly, steel upright, same angle.',
      'На скорости угол меняется при каждом движении, и кромка становится хуже. Медленно, мусат вертикально, один угол.',
    ),
  },
  think: {
    question: l(
      'Nož i posle čelika cepa papir. Šta mu treba?',
      'After honing the knife still tears paper. What does it need?',
      'После мусата нож всё ещё рвёт бумагу. Что ему нужно?',
    ),
    options: [
      l('Još poteza čelikom', 'More strokes on the steel', 'Больше движений мусатом'),
      l('Brus ili oštrač', 'A whetstone or sharpener', 'Точильный камень или точилка'),
      l('Jači pritisak na čelik', 'More pressure on the steel', 'Сильнее давить на мусат'),
    ],
    answer: 1,
    explain: l(
      'Čelik samo ispravlja ivicu koja postoji. Kad je ivica istrošena, novu pravi samo brus.',
      'A steel only straightens an edge that is there. When the edge is worn, only a whetstone makes a new one.',
      'Мусат только выпрямляет существующую кромку. Когда она стёрлась, новую делает только камень.',
    ),
  },
}

const onion: Lesson = {
  id: '2.3',
  title: l('Kockice od luka', 'Diced onion', 'Лук кубиками'),
  goal: l(
    'Iseckaš luk na kockice od 5 mm, sve iste veličine.',
    'You dice an onion into 5 mm cubes, all the same size.',
    'Ты нарезаешь лук кубиками по 5 мм, все одного размера.',
  ),
  minutes: 8,
  key: { value: l('5 mm', '5 mm', '5 мм'), label: l('kockica', 'cube', 'кубик') },
  need: [
    { item: l('Crni luk', 'Yellow onion', 'Репчатый лук'), qty: l('2 glavice', '2', '2 шт') },
    { item: l('Kuvarski nož', "Chef's knife", 'Поварской нож'), qty: l('20 cm', '20 cm', '20 см') },
    { item: l('Daska + vlažna krpa', 'Board + damp cloth', 'Доска + влажная салфетка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Luk je u skoro svakom slanom jelu. Iste kockice se ispeku za isto vreme.',
    'Onion is in almost every savoury dish. Equal cubes cook in equal time.',
    'Лук есть почти в каждом несладком блюде. Одинаковые кубики готовятся за одинаковое время.',
  ),
  steps: [
    {
      text: l('Preseci luk na pola, kroz koren.', 'Cut the onion in half through the root.', 'Разрежь лук пополам через корень.'),
      done: l(
        'Imaš dve polovine i svaka ima pola korena.',
        'You have two halves and each has half of the root.',
        'У тебя две половинки, у каждой половина корня.',
      ),
      why: l(
        'Koren drži slojeve na okupu do poslednjeg reza.',
        'The root holds the layers together until the last cut.',
        'Корень держит слои вместе до последнего разреза.',
      ),
      drawing: 'onionHalf',
    },
    {
      text: l(
        'Odseci vrh, ne koren, i skini ljusku.',
        'Cut off the top, not the root, and peel.',
        'Срежь верхушку, но не корень, и сними шелуху.',
      ),
      done: l(
        'Na polovini nema suve ljuske, a koren je ceo.',
        'No dry skin is left on the half and the root is whole.',
        'На половинке нет сухой шелухи, а корень цел.',
      ),
    },
    {
      text: l(
        'Ravnu stranu na dasku. Zaseci uspravno, ka korenu.',
        'Flat side down. Make vertical cuts towards the root.',
        'Плоской стороной на доску. Сделай вертикальные надрезы к корню.',
      ),
      params: [l('razmak 5 mm', '5 mm apart', 'шаг 5 мм'), l('stani 1 cm pre korena', 'stop 1 cm before the root', 'не доходи 1 см до корня')],
      done: l(
        'Luk izgleda kao češalj i drži se u jednom komadu.',
        'The onion looks like a comb and holds together.',
        'Лук похож на расчёску и держится одним куском.',
      ),
      drawing: 'onionVertical',
    },
    {
      text: l(
        'Dlan na vrh luka. Zaseci vodoravno, do korena.',
        'Palm flat on top. Make horizontal cuts towards the root.',
        'Ладонь сверху. Сделай горизонтальные надрезы к корню.',
      ),
      params: [l('2–3 reza', '2–3 cuts', '2–3 надреза'), l('razmak 5 mm', '5 mm apart', 'шаг 5 мм')],
      done: l(
        'Luk se drži u jednom komadu kad ga podigneš za koren.',
        'The onion stays in one piece when you lift it by the root.',
        'Лук остаётся целым, если поднять его за корень.',
      ),
      why: l(
        'Bez ovih rezova kockice ispadnu duguljaste.',
        'Without these cuts the cubes come out long.',
        'Без этих надрезов кубики получаются вытянутыми.',
      ),
      drawing: 'onionHorizontal',
    },
    {
      text: l(
        'Seci poprečno, prsti u mačjoj šapi.',
        'Slice across, fingers in a claw.',
        'Режь поперёк, пальцы «кошачьей лапкой».',
      ),
      params: [l('razmak 5 mm', '5 mm apart', 'шаг 5 мм')],
      done: l(
        'Kockice padaju same, iste veličine. Koren ostaje.',
        'The cubes fall away on their own, all the same size. The root is left.',
        'Кубики отпадают сами, одного размера. Остаётся корень.',
      ),
      why: l(
        'Koren baci ili sačuvaj za fond iz modula 8.',
        'Throw the root away or keep it for the stock in module 8.',
        'Корень выброси или сохрани для бульона из модуля 8.',
      ),
      drawing: 'onionDice',
    },
  ],
  mistake: {
    title: l('Koren odsečen na početku.', 'Root cut off at the start.', 'Корень срезан в самом начале.'),
    fix: l(
      'Luk se raspadne pod nožem i kockice ispadnu neravne. Kod sledeće glavice ne diraj koren do kraja.',
      'The onion falls apart under the knife and the cubes come out uneven. On the next one, leave the root until the end.',
      'Лук разваливается под ножом, кубики выходят неровными. Со следующей луковицей не трогай корень до конца.',
    ),
  },
  think: {
    question: l(
      'Luk za sos seckaš na 3 mm, za gulaš na 10 mm. Zašto?',
      'Onion for a sauce is cut to 3 mm, for goulash to 10 mm. Why?',
      'Лук для соуса режут по 3 мм, для гуляша по 10 мм. Почему?',
    ),
    options: [
      l('Zbog izgleda na tanjiru', 'For the look on the plate', 'Ради вида на тарелке'),
      l(
        'Sitan se otopi u sosu, krupan ostane u gulašu',
        'Small melts into the sauce, large stays in the goulash',
        'Мелкий растворяется в соусе, крупный остаётся в гуляше',
      ),
      l('Krupan se brže ispeče', 'Large cooks faster', 'Крупный готовится быстрее'),
    ],
    answer: 1,
    explain: l(
      'Veličina reza određuje šta će se desiti sa namirnicom. Pre seckanja se pitaj: treba li da nestane ili da ostane?',
      'The size of the cut decides what happens to the food. Before you cut, ask: should it disappear or stay?',
      'Размер нарезки решает, что будет с продуктом. Прежде чем резать, спроси себя: он должен исчезнуть или остаться?',
    ),
  },
  recipe: { name: l('Karamelizovani luk', 'Caramelised onion', 'Карамелизированный лук'), protein: 1.8, carbs: 14, fat: 6.5, kcal: 121 },
}

const sticks: Lesson = {
  id: '2.4',
  title: l('Štapići i kockice', 'Sticks and small dice', 'Соломка и мелкий кубик'),
  goal: l(
    'Iseckaš šargarepu na štapiće 3 × 3 mm (julienne), pa na kockice od 3 mm (brunoise).',
    'You cut a carrot into 3 × 3 mm sticks (julienne), then into 3 mm cubes (brunoise).',
    'Ты нарезаешь морковь соломкой 3 × 3 мм (жюльен), а затем кубиками 3 мм (брюнуаз).',
  ),
  minutes: 10,
  key: { value: l('3 mm', '3 mm', '3 мм'), label: l('štapić', 'stick', 'соломка') },
  need: [
    { item: l('Šargarepa', 'Carrot', 'Морковь'), qty: l('2 kom', '2', '2 шт') },
    { item: l('Kuvarski nož', "Chef's knife", 'Поварской нож'), qty: l('20 cm', '20 cm', '20 см') },
    { item: l('Ljuštilica', 'Peeler', 'Овощечистка'), qty: l('1', '1', '1') },
    { item: l('Daska + vlažna krpa', 'Board + damp cloth', 'Доска + влажная салфетка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Svako tvrdo povrće seče se istim redom: ravna strana, listići, štapići, kockice.',
    'Every firm vegetable is cut in the same order: flat side, slabs, sticks, cubes.',
    'Любой твёрдый овощ режется в одном порядке: плоская сторона, пластины, соломка, кубики.',
  ),
  steps: [
    {
      text: l('Oljušti šargarepu i iseci je na komade.', 'Peel the carrot and cut it into pieces.', 'Очисти морковь и нарежь на куски.'),
      params: [l('6 cm', '6 cm', '6 см')],
      done: l('Svi komadi su iste dužine.', 'All pieces are the same length.', 'Все куски одной длины.'),
    },
    {
      text: l(
        'Odseci tanak sloj sa jedne strane.',
        'Cut a thin slice off one side.',
        'Срежь тонкий слой с одной стороны.',
      ),
      params: [l('2–3 mm', '2–3 mm', '2–3 мм')],
      done: l(
        'Šargarepa leži na toj strani i ne ljulja se.',
        'The carrot lies on that side and does not rock.',
        'Морковь лежит на этой стороне и не качается.',
      ),
      why: l(
        'Okrugla namirnica se kotrlja ispod noža. Ravna strana je najvažniji rez za sigurnost.',
        'Round food rolls under the knife. The flat side is the most important cut for safety.',
        'Круглый продукт катается под ножом. Плоская сторона — самый важный разрез для безопасности.',
      ),
      drawing: 'flatSide',
    },
    {
      text: l('Iseci šargarepu na listiće.', 'Cut the carrot into slabs.', 'Нарежь морковь пластинами.'),
      params: [l('3 mm', '3 mm', '3 мм')],
      done: l(
        'Kad složiš listiće, svi su iste debljine.',
        'Stacked up, all slabs are the same thickness.',
        'Если сложить пластины стопкой, все одной толщины.',
      ),
      drawing: 'slabs',
    },
    {
      text: l(
        'Složi 3–4 listića i iseci ih na štapiće.',
        'Stack 3–4 slabs and cut them into sticks.',
        'Сложи 3–4 пластины и нарежь соломкой.',
      ),
      params: [l('3 × 3 mm', '3 × 3 mm', '3 × 3 мм'), l('julienne', 'julienne', 'жюльен')],
      done: l(
        'Presek štapića je kvadrat, ne pravougaonik.',
        'The cross-section of a stick is a square, not a rectangle.',
        'Сечение соломки — квадрат, а не прямоугольник.',
      ),
      drawing: 'julienne',
    },
    {
      text: l('Skupi štapiće i seci poprečno.', 'Gather the sticks and cut across.', 'Собери соломку и режь поперёк.'),
      params: [l('3 mm', '3 mm', '3 мм'), l('brunoise', 'brunoise', 'брюнуаз')],
      done: l(
        'Dobiješ kockice kao krupna zrna, sve iste.',
        'You get cubes like coarse grains, all the same.',
        'Получаются кубики, как крупные зёрна, все одинаковые.',
      ),
      why: l(
        'Brunoise se brzo i ravnomerno ispeče, zato ide u sosove i nadeve.',
        'Brunoise cooks quickly and evenly, so it goes into sauces and fillings.',
        'Брюнуаз готовится быстро и равномерно, поэтому его кладут в соусы и начинки.',
      ),
      drawing: 'brunoise',
    },
  ],
  mistake: {
    title: l('Preskočena ravna strana.', 'Skipping the flat side.', 'Пропущена плоская сторона.'),
    fix: l(
      'Šargarepa se kotrlja, listići ispadnu klinasti i prsti su u opasnosti. Uvek prvo napravi ravnu stranu.',
      'The carrot rolls, the slabs come out wedge-shaped and your fingers are at risk. Always make the flat side first.',
      'Морковь катается, пластины выходят клиновидными, пальцы в опасности. Всегда сначала делай плоскую сторону.',
    ),
  },
  think: {
    question: l(
      'Šta radiš sa obrezcima šargarepe?',
      'What do you do with carrot trimmings?',
      'Что делать с обрезками моркови?',
    ),
    options: [
      l('Bacaš ih', 'Throw them away', 'Выбрасываешь'),
      l('Čuvaš ih za fond ili supu', 'Keep them for stock or soup', 'Сохраняешь для бульона или супа'),
      l('Seckaš ih na kockice', 'Dice them as well', 'Тоже режешь кубиками'),
    ],
    answer: 1,
    explain: l(
      'Obrezci imaju isti ukus kao šargarepa, samo nisu lepi. U fondu se oblik ne vidi, a ukus ostaje.',
      'Trimmings taste the same as the carrot, they just are not pretty. In a stock the shape does not matter, the flavour stays.',
      'Обрезки на вкус такие же, просто некрасивые. В бульоне форма не важна, а вкус остаётся.',
    ),
  },
}

const ribbons: Lesson = {
  id: '2.5',
  title: l('Trakice lista', 'Herb ribbons', 'Лента из листьев'),
  goal: l(
    'Iseckaš bosiljak na tanke trakice (chiffonade), a da ne pocrni.',
    'You cut basil into thin ribbons (chiffonade) without it turning black.',
    'Ты нарезаешь базилик тонкими лентами (шифонад), и он не темнеет.',
  ),
  minutes: 5,
  key: { value: l('1–2 mm', '1–2 mm', '1–2 мм'), label: l('trakica', 'ribbon', 'лента') },
  need: [
    { item: l('Bosiljak', 'Basil', 'Базилик'), qty: l('12 listova', '12 leaves', '12 листьев') },
    { item: l('Kuvarski nož, oštar', "Chef's knife, sharp", 'Поварской нож, острый'), qty: l('20 cm', '20 cm', '20 см') },
    { item: l('Daska', 'Cutting board', 'Разделочная доска'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Isti rez važi za spanać, nanu i zelenu salatu. Lista se seče, ne gnječi.',
    'The same cut works for spinach, mint and lettuce. Leaves are sliced, not crushed.',
    'Так же режут шпинат, мяту и салат. Листья режут, а не мнут.',
  ),
  steps: [
    {
      text: l('Složi listove jedan na drugi, najveći dole.', 'Stack the leaves, largest at the bottom.', 'Сложи листья стопкой, самый большой снизу.'),
      params: [l('5–6 listova', '5–6 leaves', '5–6 листьев')],
      done: l('Gomilica je poravnata po dužini.', 'The stack is lined up lengthwise.', 'Стопка выровнена по длине.'),
      drawing: 'leafStack',
    },
    {
      text: l('Uvij listove čvrsto po dužini.', 'Roll the leaves tightly lengthwise.', 'Плотно сверни листья по длине.'),
      done: l(
        'Valjak se ne odmotava kad ga pustiš.',
        'The roll does not unroll when you let go.',
        'Рулет не разворачивается, если отпустить.',
      ),
      why: l(
        'Čvrst valjak se seče jednim potezom, bez gnječenja.',
        'A tight roll is cut in one stroke, without crushing.',
        'Плотный рулет режется одним движением, без смятия.',
      ),
      drawing: 'leafRoll',
    },
    {
      text: l('Seci valjak poprečno, jednim potezom napred.', 'Slice the roll across, one forward stroke each.', 'Режь рулет поперёк, одним движением вперёд.'),
      params: [l('1–2 mm', '1–2 mm', '1–2 мм')],
      done: l(
        'Trakice se razdvoje kad ih protreseš prstima.',
        'The ribbons separate when you shake them with your fingers.',
        'Ленты разделяются, если встряхнуть их пальцами.',
      ),
      why: l(
        'Pritisak nadole gnječi list i on pocrni za nekoliko minuta.',
        'Pressing down crushes the leaf and it turns black within minutes.',
        'Давление вниз мнёт лист, и он темнеет за несколько минут.',
      ),
      drawing: 'ribbons',
    },
    {
      text: l('Rastresi trakice i iskoristi ih odmah.', 'Fluff the ribbons and use them right away.', 'Распуши ленты и сразу используй.'),
      params: [l('do 10 min', 'within 10 min', 'в течение 10 мин')],
      done: l(
        'Trakice su zelene i suve, bez tamnih ivica.',
        'The ribbons are green and dry, with no dark edges.',
        'Ленты зелёные и сухие, без тёмных краёв.',
      ),
      why: l(
        'Isečen list brzo gubi miris i boju.',
        'A cut leaf quickly loses its aroma and colour.',
        'Нарезанный лист быстро теряет аромат и цвет.',
      ),
    },
  ],
  mistake: {
    title: l('Tup nož i pritiskanje.', 'A dull knife and pressing down.', 'Тупой нож и давление.'),
    fix: l(
      'List se zgnječi umesto da se preseče i pocrni pre nego što stigne na tanjir. Naoštri nož (2.2) i seci potezom napred.',
      'The leaf gets crushed instead of cut and turns black before it reaches the plate. Hone the knife (2.2) and cut with a forward stroke.',
      'Лист сминается вместо разреза и темнеет до подачи. Поправь нож (2.2) и режь движением вперёд.',
    ),
  },
  think: {
    question: l(
      'Zašto se bosiljak dodaje na kraju, a ne na početku kuvanja?',
      'Why is basil added at the end of cooking, not at the start?',
      'Почему базилик добавляют в конце готовки, а не в начале?',
    ),
    options: [
      l('Da ne potone', 'So it does not sink', 'Чтобы не утонул'),
      l('Toplota mu brzo uništi miris i boju', 'Heat quickly destroys its aroma and colour', 'Нагрев быстро разрушает его аромат и цвет'),
      l('Postane gorak samo ako se kuva dugo', 'It only turns bitter if cooked long', 'Он горчит, только если долго варить'),
    ],
    answer: 1,
    explain: l(
      'Mekano bilje (bosiljak, peršun, nana) ide na kraju. Tvrdo bilje (ruzmarin, majčina dušica) može od početka.',
      'Soft herbs (basil, parsley, mint) go in at the end. Hard herbs (rosemary, thyme) can go in from the start.',
      'Мягкие травы (базилик, петрушка, мята) кладут в конце. Жёсткие (розмарин, тимьян) можно с самого начала.',
    ),
  },
}

export const knifeLessons: Lesson[] = [grip, sharpen, onion, sticks, ribbons]
