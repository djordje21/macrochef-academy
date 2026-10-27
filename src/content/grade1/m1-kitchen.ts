import { l, type Lesson } from '../types'

// Module 1 · Kitchen before cooking. No knife work and no heat yet: equipment, order and hygiene,
// written to the same six rules as every other module.

const equipment: Lesson = {
  id: '1.1',
  title: l('Minimum opreme', 'Minimum equipment', 'Минимум инвентаря'),
  goal: l(
    'Složiš osnovnu opremu za kuvanje i znaš čemu služi svaki komad.',
    'You put together a basic cooking kit and know what each piece is for.',
    'Ты собираешь базовый набор для готовки и знаешь, зачем нужен каждый предмет.',
  ),
  minutes: 6,
  key: { value: l('10', '10', '10'), label: l('komada', 'pieces', 'предметов') },
  need: [
    { item: l('Ono što već imaš u kuhinji', 'What you already have in the kitchen', 'То, что уже есть на кухне'), qty: l('—', '—', '—') },
    { item: l('Papir i olovka za spisak', 'Paper and pen for a list', 'Бумага и ручка для списка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kuvar ne treba puno stvari, nego prave stvari. Sa ovih 10 komada skuvaš ceo prvi razred.',
    'A cook needs the right things, not many things. With these 10 pieces you can cook the whole first grade.',
    'Повару нужно не много вещей, а правильные. С этими 10 предметами ты приготовишь весь первый класс.',
  ),
  steps: [
    {
      text: l(
        'Izdvoj dva noža: kuvarski i mali.',
        "Set aside two knives: a chef's knife and a paring knife.",
        'Отложи два ножа: поварской и маленький.',
      ),
      params: [l('20 cm', '20 cm', '20 см'), l('8–10 cm', '8–10 cm', '8–10 см')],
      done: l(
        'Oba noža seku list papira bez cepanja.',
        'Both knives cut a sheet of paper without tearing.',
        'Оба ножа режут лист бумаги, не разрывая его.',
      ),
      why: l(
        'Dva dobra noža rade sve. Set od 15 noževa znači 13 koji stoje i tupe se.',
        'Two good knives do everything. A set of 15 means 13 that sit around getting dull.',
        'Два хороших ножа делают всё. Набор из 15 — это 13 ножей, которые лежат и тупятся.',
      ),
      drawing: 'twoKnives',
    },
    {
      text: l('Izaberi veliku dasku.', 'Choose a large cutting board.', 'Выбери большую разделочную доску.'),
      params: [l('najmanje 40 × 30 cm', 'at least 40 × 30 cm', 'не меньше 40 × 30 см')],
      done: l(
        'Na dasku stane glavica kupusa i ostane mesta za seckano.',
        'A head of cabbage fits on the board with room left for what you cut.',
        'На доске помещается кочан капусты и остаётся место для нарезанного.',
      ),
      why: l(
        'Na maloj dasci seckano pada preko ivice, pa ga gura nož.',
        'On a small board the cut food falls over the edge and the knife pushes it around.',
        'На маленькой доске нарезанное падает за край, и нож его толкает.',
      ),
      drawing: 'bigBoard',
    },
    {
      text: l(
        'Posuđe: tiganj, šerpa i lonac, sa debelim dnom.',
        'Pans: a frying pan, a saucepan and a pot, all with thick bases.',
        'Посуда: сковорода, сотейник и кастрюля, все с толстым дном.',
      ),
      params: [l('tiganj 28 cm', 'pan 28 cm', 'сковорода 28 см'), l('šerpa 2–3 l', 'saucepan 2–3 l', 'сотейник 2–3 л'), l('lonac 5 l', 'pot 5 l', 'кастрюля 5 л')],
      done: l(
        'U lonac stane 4 l vode i ostane 5 cm do ivice.',
        'The pot holds 4 l of water with 5 cm to spare at the top.',
        'В кастрюлю помещается 4 л воды, и до края остаётся 5 см.',
      ),
      why: l(
        'Debelo dno raspoređuje toplotu, pa hrana ne zagori u jednoj tački.',
        'A thick base spreads the heat, so food does not burn in one spot.',
        'Толстое дно распределяет тепло, и еда не пригорает в одной точке.',
      ),
      drawing: 'pans',
    },
    {
      text: l(
        'Nabavi ubodni termometar i kuhinjsku vagu.',
        'Get a probe thermometer and a kitchen scale.',
        'Купи щуп-термометр и кухонные весы.',
      ),
      params: [l('termometar ±1°C', 'thermometer ±1°C', 'термометр ±1°C'), l('vaga 1 g', 'scale 1 g', 'весы 1 г')],
      done: l(
        'Termometar u čaši vode sa ledom pokaže 0°C.',
        'The thermometer shows 0°C in a glass of ice water.',
        'В стакане воды со льдом термометр показывает 0°C.',
      ),
      why: l(
        'Oko ne meri temperaturu ni grame. Ova dva alata zamenjuju nagađanje.',
        'Your eye cannot measure temperature or grams. These two tools replace guessing.',
        'Глаз не измеряет ни температуру, ни граммы. Эти два прибора заменяют догадки.',
      ),
      drawing: 'iceTest',
    },
    {
      text: l(
        'Sitan alat: varjača, hvataljka, rende, cediljka i ljuštilica.',
        'Small tools: wooden spoon, tongs, grater, colander and peeler.',
        'Мелкий инвентарь: деревянная ложка, щипцы, тёрка, дуршлаг и овощечистка.',
      ),
      params: [l('5 komada', '5 pieces', '5 предметов')],
      done: l(
        'Sve stane u jednu fioku pored šporeta.',
        'Everything fits in one drawer next to the stove.',
        'Всё помещается в один ящик рядом с плитой.',
      ),
      why: l(
        'Alat koji tražiš dok kuvaš znači da nešto u tiganju zagoreva.',
        'A tool you search for while cooking means something in the pan is burning.',
        'Если ищешь инструмент во время готовки, значит, что-то на сковороде подгорает.',
      ),
    },
  ],
  mistake: {
    title: l('Kupovina seta umesto alata.', 'Buying a set instead of tools.', 'Покупка набора вместо инструментов.'),
    fix: l(
      'Set od 15 noževa i 10 šerpi tankog dna košta kao jedan dobar nož i jedan dobar tiganj. Kupuj komad po komad, kad ti zatreba.',
      'A set of 15 knives and 10 thin pans costs as much as one good knife and one good pan. Buy piece by piece, when you need it.',
      'Набор из 15 ножей и 10 тонких кастрюль стоит как один хороший нож и одна хорошая сковорода. Покупай по одному предмету, когда он нужен.',
    ),
  },
  think: {
    question: l(
      'Zašto je šerpa sa debelim dnom bolja od tanke?',
      'Why is a thick-based pan better than a thin one?',
      'Почему кастрюля с толстым дном лучше тонкой?',
    ),
    options: [
      l('Brže se zagreje', 'It heats up faster', 'Быстрее нагревается'),
      l('Ravnomerno raspoređuje toplotu', 'It spreads heat evenly', 'Равномерно распределяет тепло'),
      l('Lakše se pere', 'It is easier to wash', 'Легче моется'),
    ],
    answer: 1,
    explain: l(
      'Tanko dno je vrelo iznad plamena, a hladno pored njega. Debelo dno izjednači toplotu, pa jelo ne zagori u sredini.',
      'A thin base is hot over the flame and cool beside it. A thick base evens the heat, so food does not burn in the middle.',
      'Тонкое дно горячее над огнём и холодное рядом. Толстое дно выравнивает тепло, и еда не пригорает в центре.',
    ),
  },
}

const miseEnPlace: Lesson = {
  id: '1.2',
  title: l('Mise en place', 'Mise en place', 'Мизанплас'),
  goal: l(
    'Pre nego što upališ ringlu, sve je oprano, isečeno, izmereno i poređano redom.',
    'Before you turn on the stove, everything is washed, cut, weighed and lined up in order.',
    'Прежде чем включить плиту, всё вымыто, нарезано, взвешено и расставлено по порядку.',
  ),
  minutes: 6,
  key: { value: l('0', '0', '0'), label: l('traženja', 'searching', 'поисков') },
  need: [
    { item: l('Jedan jednostavan recept', 'One simple recipe', 'Один простой рецепт'), qty: l('1', '1', '1') },
    { item: l('Male posude ili tanjiri', 'Small bowls or plates', 'Маленькие миски или тарелки'), qty: l('5–6', '5–6', '5–6') },
    { item: l('Posuda za otpatke', 'Scrap bowl', 'Миска для очистков'), qty: l('1', '1', '1') },
  ],
  why: l(
    '„Mise en place“ znači „sve na svom mestu“. Tako radi svaka profesionalna kuhinja na svetu.',
    '"Mise en place" means "everything in its place". Every professional kitchen in the world works this way.',
    '«Мизанплас» значит «всё на своих местах». Так работает каждая профессиональная кухня в мире.',
  ),
  steps: [
    {
      text: l('Pročitaj recept do kraja, dva puta.', 'Read the recipe to the end, twice.', 'Прочитай рецепт до конца два раза.'),
      done: l(
        'Znaš poslednji korak bez gledanja.',
        'You know the last step without looking.',
        'Ты знаешь последний шаг, не подглядывая.',
      ),
      why: l(
        'Iznenađenja su u sredini recepta: „mariniraj 2 sata“, „zagrej rernu“.',
        'Surprises hide in the middle of a recipe: "marinate for 2 hours", "preheat the oven".',
        'Сюрпризы прячутся в середине рецепта: «мариновать 2 часа», «разогреть духовку».',
      ),
    },
    {
      text: l('Izvadi sve namirnice na sto.', 'Take all the ingredients out onto the counter.', 'Выложи все продукты на стол.'),
      done: l(
        'Tokom kuvanja više ne otvaraš frižider.',
        'You do not open the fridge again while cooking.',
        'Во время готовки ты больше не открываешь холодильник.',
      ),
      why: l(
        'Tako odmah vidiš šta fali, dok još ima vremena da se snađeš.',
        'You see what is missing right away, while there is still time to adapt.',
        'Сразу видно, чего не хватает, пока ещё есть время что-то придумать.',
      ),
    },
    {
      text: l(
        'Operi, iseci i odmeri sve unapred.',
        'Wash, cut and weigh everything in advance.',
        'Заранее вымой, нарежь и взвесь всё.',
      ),
      params: [l('svaka namirnica u svojoj posudi', 'each ingredient in its own bowl', 'каждый продукт в своей миске')],
      done: l(
        'Na dasci nema ničega, sve je u posudama.',
        'The board is empty, everything is in bowls.',
        'Доска пуста, всё разложено по мискам.',
      ),
    },
    {
      text: l(
        'Poređaj posude redom kojim idu u jelo, sleva nadesno.',
        'Line up the bowls in the order they go into the dish, left to right.',
        'Расставь миски в том порядке, в котором они идут в блюдо, слева направо.',
      ),
      done: l(
        'Prva posuda sleva ide prva u tiganj.',
        'The first bowl on the left goes into the pan first.',
        'Первая миска слева первой идёт на сковороду.',
      ),
      why: l(
        'Kad je tiganj vruć, nema vremena za razmišljanje šta je sledeće.',
        'Once the pan is hot there is no time to think about what comes next.',
        'Когда сковорода горячая, нет времени думать, что дальше.',
      ),
      drawing: 'bowlsInOrder',
    },
    {
      text: l(
        'Stavi posudu za otpatke i vlažnu krpu pored daske.',
        'Put the scrap bowl and a damp cloth next to the board.',
        'Поставь миску для очистков и влажную салфетку рядом с доской.',
      ),
      done: l(
        'Ne pomeraš se od daske da baciš ljusku.',
        'You do not leave the board to throw away a peel.',
        'Ты не отходишь от доски, чтобы выбросить шелуху.',
      ),
      why: l(
        'Svaki odlazak do kante je minut manje i prljav pod više.',
        'Every trip to the bin is a minute lost and a dirtier floor.',
        'Каждый поход к ведру — минута потерь и грязный пол.',
      ),
      drawing: 'station',
    },
  ],
  mistake: {
    title: l('Seckanje dok se tiganj greje.', 'Chopping while the pan heats up.', 'Нарезка, пока греется сковорода.'),
    fix: l(
      'Ulje počne da gori dok ti još seckaš beli luk, a beli luk zagori dok seckaš paradajz. Ništa na vatru dok sve nije spremno.',
      'The oil starts smoking while you are still chopping garlic, and the garlic burns while you chop tomatoes. Nothing goes on the heat until everything is ready.',
      'Масло начинает дымить, пока ты режешь чеснок, а чеснок подгорает, пока режешь помидоры. Ничего на огонь, пока всё не готово.',
    ),
  },
  think: {
    question: l(
      'Recept kaže: „dodaj beli luk, pa odmah paradajz“. Šta mora biti spremno pre nego što beli luk uđe?',
      'The recipe says: "add the garlic, then the tomatoes right away". What has to be ready before the garlic goes in?',
      'В рецепте: «добавь чеснок, затем сразу помидоры». Что должно быть готово до того, как положишь чеснок?',
    ),
    options: [
      l('Samo beli luk', 'Only the garlic', 'Только чеснок'),
      l('I beli luk i paradajz', 'Both the garlic and the tomatoes', 'И чеснок, и помидоры'),
      l('Samo paradajz', 'Only the tomatoes', 'Только помидоры'),
    ],
    answer: 1,
    explain: l(
      'Beli luk zagori za 30–60 sekundi. „Odmah“ u receptu znači da sledeća namirnica čeka spremna pored šporeta.',
      'Garlic burns in 30–60 seconds. "Right away" in a recipe means the next ingredient is waiting, ready, by the stove.',
      'Чеснок подгорает за 30–60 секунд. «Сразу» в рецепте значит, что следующий продукт уже ждёт у плиты.',
    ),
  },
}

const hygiene: Lesson = {
  id: '1.3',
  title: l('Ruke, daske, krpe', 'Hands, boards, cloths', 'Руки, доски, салфетки'),
  goal: l(
    'Ne preneseš bakterije sa sirovog mesa na hranu koja se ne kuva.',
    'You do not carry bacteria from raw meat to food that will not be cooked.',
    'Ты не переносишь бактерии с сырого мяса на еду, которую не будут готовить.',
  ),
  minutes: 5,
  key: { value: l('20 s', '20 s', '20 с'), label: l('pranje ruku', 'hand washing', 'мытьё рук') },
  need: [
    { item: l('Sapun', 'Soap', 'Мыло'), qty: l('1', '1', '1') },
    { item: l('Daske različite boje', 'Boards of different colours', 'Доски разного цвета'), qty: l('2', '2', '2') },
    { item: l('Krpe', 'Cloths', 'Салфетки'), qty: l('2', '2', '2') },
  ],
  why: l(
    'Kuvanje ubija bakterije u mesu. Salata se ne kuva, pa sve što na nju prenesemo ostaje.',
    'Cooking kills the bacteria in meat. Salad is not cooked, so whatever gets onto it stays there.',
    'Готовка убивает бактерии в мясе. Салат не готовят, поэтому всё, что на него попадёт, там и останется.',
  ),
  steps: [
    {
      text: l(
        'Operi ruke sapunom, između prstiju i ispod noktiju.',
        'Wash your hands with soap, between the fingers and under the nails.',
        'Вымой руки с мылом, между пальцами и под ногтями.',
      ),
      params: [l('20 s', '20 s', '20 с')],
      done: l(
        'Otpevaš „Srećan rođendan“ dva puta, u sebi.',
        'You sing "Happy Birthday" twice, silently.',
        'Ты про себя дважды пропел «С днём рождения».',
      ),
      why: l(
        'Kraće pranje samo pokvasi ruke, a bakterije ostanu.',
        'A shorter wash only wets your hands; the bacteria stay.',
        'Более короткое мытьё только намочит руки, а бактерии останутся.',
      ),
    },
    {
      text: l(
        'Odvoji dve daske: jednu za sirovo meso, drugu za sve ostalo.',
        'Keep two boards: one for raw meat, one for everything else.',
        'Заведи две доски: одну для сырого мяса, другую для всего остального.',
      ),
      params: [l('2 boje', '2 colours', '2 цвета')],
      done: l(
        'Znaš koja je koja bez razmišljanja.',
        'You know which is which without thinking.',
        'Ты знаешь, какая для чего, не задумываясь.',
      ),
      drawing: 'twoBoards',
    },
    {
      text: l(
        'Ako imaš jednu dasku, meso seci poslednje.',
        'If you have one board, cut the meat last.',
        'Если доска одна, мясо режь последним.',
      ),
      done: l(
        'Povrće je već u posudi kad meso dođe na dasku.',
        'The vegetables are already in a bowl when the meat goes on the board.',
        'Овощи уже в миске, когда мясо попадает на доску.',
      ),
      why: l(
        'Redosled zamenjuje drugu dasku.',
        'The order does the job of a second board.',
        'Порядок заменяет вторую доску.',
      ),
    },
    {
      text: l(
        'Posle sirovog mesa operi dasku, nož i ruke.',
        'After raw meat, wash the board, the knife and your hands.',
        'После сырого мяса вымой доску, нож и руки.',
      ),
      params: [l('vruća voda + deterdžent', 'hot water + detergent', 'горячая вода + средство')],
      done: l(
        'Daska nije masna ni klizava na dodir.',
        'The board does not feel greasy or slippery.',
        'Доска не жирная и не скользкая на ощупь.',
      ),
      why: l(
        'Masnoća čuva bakterije od vode. Deterdžent je skida.',
        'Grease shields bacteria from water. Detergent removes it.',
        'Жир защищает бактерии от воды. Средство его смывает.',
      ),
    },
    {
      text: l(
        'Drži dve krpe: jednu za ruke, drugu za površine.',
        'Keep two cloths: one for hands, one for surfaces.',
        'Держи две салфетки: одну для рук, другую для поверхностей.',
      ),
      params: [l('menjaj svaki dan', 'change daily', 'меняй каждый день')],
      done: l(
        'Krpa za ruke nikad ne dodiruje sto.',
        'The hand cloth never touches the counter.',
        'Салфетка для рук никогда не касается стола.',
      ),
      why: l(
        'Vlažna krpa posle jednog dana nosi više bakterija od daske.',
        'After a day, a damp cloth carries more bacteria than the board.',
        'Через день влажная салфетка несёт больше бактерий, чем доска.',
      ),
    },
  ],
  mistake: {
    title: l('Pečeno meso na tanjiru od sirovog.', 'Cooked meat on the raw-meat plate.', 'Готовое мясо на тарелке от сырого.'),
    fix: l(
      'Meso je ispečeno kako treba, a onda se vrati na tanjir na kome je stajalo sirovo. Za pečeno uvek uzmi čist tanjir.',
      'The meat is cooked properly, then goes back onto the plate that held it raw. Always use a clean plate for cooked meat.',
      'Мясо приготовлено правильно, а потом его кладут на тарелку, где оно лежало сырым. Для готового всегда бери чистую тарелку.',
    ),
  },
  think: {
    question: l(
      'Zašto je opasnije seckati salatu na dasci od sirove piletine nego ispeći piletinu?',
      'Why is cutting salad on the raw-chicken board more dangerous than cooking the chicken?',
      'Почему резать салат на доске от сырой курицы опаснее, чем жарить саму курицу?',
    ),
    options: [
      l('Salata se ne kuva, pa bakterije ostaju', 'Salad is not cooked, so the bacteria stay', 'Салат не готовят, и бактерии остаются'),
      l('Salata se brže kvari', 'Salad spoils faster', 'Салат быстрее портится'),
      l('Piletina menja ukus salate', 'Chicken changes the taste of the salad', 'Курица меняет вкус салата'),
    ],
    answer: 0,
    explain: l(
      'Bakterije u piletini umiru na 74°C. Na salati nema ničega što bi ih ubilo, pa idu pravo u stomak.',
      'The bacteria in chicken die at 74°C. Nothing on a salad kills them, so they go straight to your stomach.',
      'Бактерии в курице погибают при 74°C. На салате их ничто не убьёт, и они попадут прямо в желудок.',
    ),
  },
}

const fridge: Lesson = {
  id: '1.4',
  title: l('Frižider i opasna zona', 'Fridge and the danger zone', 'Холодильник и опасная зона'),
  goal: l(
    'Znaš gde šta stoji u frižideru i koliko dugo hrana sme da bude van njega.',
    'You know where things go in the fridge and how long food can stay out of it.',
    'Ты знаешь, что где хранить в холодильнике и сколько еда может находиться вне его.',
  ),
  minutes: 7,
  key: { value: l('5–60°C', '5–60°C', '5–60°C'), label: l('opasna zona', 'danger zone', 'опасная зона') },
  need: [
    { item: l('Termometar', 'Thermometer', 'Термометр'), qty: l('1', '1', '1') },
    { item: l('Čaša vode', 'Glass of water', 'Стакан воды'), qty: l('1', '1', '1') },
    { item: l('Flomaster i traka', 'Marker and tape', 'Маркер и скотч'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Između 5°C i 60°C bakterije se najbrže množe. Ceo posao frižidera je da drži hranu ispod te zone.',
    'Between 5°C and 60°C bacteria multiply fastest. The fridge exists to keep food below that zone.',
    'От 5°C до 60°C бактерии размножаются быстрее всего. Задача холодильника — держать еду ниже этой зоны.',
  ),
  steps: [
    {
      text: l(
        'Izmeri temperaturu frižidera u čaši vode na srednjoj polici.',
        'Measure the fridge temperature in a glass of water on the middle shelf.',
        'Измерь температуру холодильника в стакане воды на средней полке.',
      ),
      params: [l('0–4°C', '0–4°C', '0–4°C'), l('posle 2 sata', 'after 2 hours', 'через 2 часа')],
      done: l(
        'Termometar pokaže 4°C ili manje.',
        'The thermometer reads 4°C or less.',
        'Термометр показывает 4°C или меньше.',
      ),
      why: l(
        'Voda pokazuje temperaturu hrane, a vazduh samo trenutni hlad kad otvoriš vrata.',
        'Water shows the temperature of the food; air only shows the draught when you open the door.',
        'Вода показывает температуру еды, а воздух — лишь сквозняк при открытой дверце.',
      ),
      drawing: 'fridgeTemp',
    },
    {
      text: l(
        'Sirovo meso i ribu stavi na najnižu policu, u posudi.',
        'Put raw meat and fish on the lowest shelf, in a container.',
        'Сырое мясо и рыбу ставь на нижнюю полку, в контейнере.',
      ),
      done: l(
        'Ništa ne može da kaplje na drugu hranu.',
        'Nothing can drip onto other food.',
        'Ничего не может капнуть на другую еду.',
      ),
      why: l(
        'Sok od sirovog mesa nosi bakterije. Ako kaplje, neka kaplje u posudu, ne na sir.',
        'Raw meat juice carries bacteria. If it drips, let it drip into a container, not onto the cheese.',
        'Сок сырого мяса несёт бактерии. Пусть капает в контейнер, а не на сыр.',
      ),
      drawing: 'fridgeShelves',
    },
    {
      text: l(
        'Gotovu hranu i ostatke stavi gore, pokrivene.',
        'Put cooked food and leftovers higher up, covered.',
        'Готовую еду и остатки ставь наверх, накрытыми.',
      ),
      done: l(
        'Svaka posuda je zatvorena ili pokrivena.',
        'Every container is closed or covered.',
        'Каждый контейнер закрыт или накрыт.',
      ),
    },
    {
      text: l(
        'Kuvanu hranu ohladi u plitkoj posudi, pa u frižider.',
        'Cool cooked food in a shallow container, then into the fridge.',
        'Остуди готовую еду в плоском контейнере, затем в холодильник.',
      ),
      params: [l('najviše 2 sata', 'within 2 hours', 'не дольше 2 часов'), l('sloj do 5 cm', 'layer up to 5 cm', 'слой до 5 см')],
      done: l(
        'Hrana nije stajala na sobnoj temperaturi duže od 2 sata.',
        'The food has not been at room temperature for more than 2 hours.',
        'Еда не стояла при комнатной температуре дольше 2 часов.',
      ),
      why: l(
        'U plitkoj posudi hrana prođe kroz opasnu zonu brzo. Pun lonac se hladi satima.',
        'In a shallow container food passes through the danger zone quickly. A full pot takes hours.',
        'В плоском контейнере еда быстро проходит опасную зону. Полная кастрюля остывает часами.',
      ),
      drawing: 'dangerZone',
    },
    {
      text: l('Obeleži posudu datumom.', 'Label the container with the date.', 'Подпиши на контейнере дату.'),
      params: [l('ostaci do 3 dana', 'leftovers up to 3 days', 'остатки до 3 дней')],
      done: l(
        'Na svakoj posudi u frižideru piše datum.',
        'Every container in the fridge has a date on it.',
        'На каждом контейнере в холодильнике есть дата.',
      ),
      why: l(
        'Pokvarena hrana ne mora da miriše loše. Datum ne laže.',
        'Spoiled food does not always smell bad. A date does not lie.',
        'Испорченная еда не всегда плохо пахнет. Дата не обманет.',
      ),
    },
  ],
  mistake: {
    title: l('Lonac supe preko noći na šporetu.', 'A pot of soup left on the stove overnight.', 'Кастрюля супа на плите всю ночь.'),
    fix: l(
      'Pun lonac je satima u opasnoj zoni. Podeli supu u plitke posude i za 2 sata je stavi u frižider.',
      'A full pot sits in the danger zone for hours. Split the soup into shallow containers and get it into the fridge within 2 hours.',
      'Полная кастрюля часами находится в опасной зоне. Разлей суп по плоским контейнерам и в течение 2 часов убери в холодильник.',
    ),
  },
  think: {
    question: l(
      'Jučerašnji ručak je stajao 5 sati na stolu. Šta radiš?',
      "Yesterday's lunch sat on the table for 5 hours. What do you do?",
      'Вчерашний обед простоял на столе 5 часов. Что делаешь?',
    ),
    options: [
      l('Dobro ga podgrejem', 'Reheat it well', 'Хорошо разогреваю'),
      l('Bacim ga', 'Throw it away', 'Выбрасываю'),
      l('Stavim ga u frižider', 'Put it in the fridge', 'Убираю в холодильник'),
    ],
    answer: 1,
    explain: l(
      'Neke bakterije za to vreme naprave otrove koje toplota ne uništava. Podgrevanje ubija bakterije, ali ne i njihove otrove.',
      'In that time some bacteria make toxins that heat does not destroy. Reheating kills bacteria, not their toxins.',
      'За это время некоторые бактерии выделяют токсины, которые не разрушаются при нагреве. Разогрев убивает бактерии, но не их токсины.',
    ),
  },
}

const measuring: Lesson = {
  id: '1.5',
  title: l('Čitanje recepta i merenje', 'Reading a recipe and measuring', 'Чтение рецепта и взвешивание'),
  goal: l(
    'Pročitaš recept kao kuvar i izmeriš tačno ono što piše.',
    'You read a recipe like a cook and measure exactly what it says.',
    'Ты читаешь рецепт как повар и отмеряешь ровно то, что написано.',
  ),
  minutes: 6,
  key: { value: l('1 g', '1 g', '1 г'), label: l('tačnost', 'accuracy', 'точность') },
  need: [
    { item: l('Kuhinjska vaga', 'Kitchen scale', 'Кухонные весы'), qty: l('1', '1', '1') },
    { item: l('Kašika i kašičica', 'Tablespoon and teaspoon', 'Столовая и чайная ложки'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Brašno', 'Flour', 'Мука'), qty: l('200 g', '200 g', '200 г') },
  ],
  why: l(
    'Recept je dogovor između onoga ko ga je napisao i tebe. Merenje je način da ga ispoštuješ.',
    'A recipe is an agreement between its writer and you. Measuring is how you keep it.',
    'Рецепт — это договор между автором и тобой. Взвешивание — способ его соблюсти.',
  ),
  steps: [
    {
      text: l(
        'Prvo pročitaj količine i ukupno vreme, pa tek onda korake.',
        'Read the quantities and total time first, then the steps.',
        'Сначала прочитай количества и общее время, потом шаги.',
      ),
      done: l(
        'Znaš koliko traje recept i šta ti fali.',
        'You know how long the recipe takes and what you are missing.',
        'Ты знаешь, сколько займёт рецепт и чего не хватает.',
      ),
    },
    {
      text: l(
        'Meri suve namirnice vagom, ne šoljom.',
        'Weigh dry ingredients on a scale, not with a cup.',
        'Сыпучие продукты взвешивай на весах, а не меряй чашкой.',
      ),
      params: [l('tara: 0 g sa posudom', 'tare: 0 g with the bowl', 'тара: 0 г с миской')],
      done: l(
        'Vaga pokazuje 0 g kad je na njoj prazna posuda.',
        'The scale shows 0 g with the empty bowl on it.',
        'Весы показывают 0 г с пустой миской на них.',
      ),
      why: l(
        'Šolja brašna može da ima 120 g ili 160 g, zavisno kako je napuniš.',
        'A cup of flour can hold 120 g or 160 g, depending on how you fill it.',
        'В чашке муки может быть 120 г или 160 г — зависит от того, как насыпать.',
      ),
      drawing: 'scaleTare',
    },
    {
      text: l(
        'Vodu i mleko možeš da meriš i vagom.',
        'You can weigh water and milk on the scale too.',
        'Воду и молоко тоже можно взвешивать.',
      ),
      params: [l('1 ml vode = 1 g', '1 ml water = 1 g', '1 мл воды = 1 г')],
      done: l(
        '250 ml vode na vagi pokaže 250 g.',
        '250 ml of water shows 250 g on the scale.',
        '250 мл воды на весах показывают 250 г.',
      ),
      why: l(
        'Jedna posuda i jedna vaga za ceo recept. Manje sudova, manje grešaka.',
        'One bowl and one scale for the whole recipe. Fewer dishes, fewer mistakes.',
        'Одна миска и одни весы на весь рецепт. Меньше посуды, меньше ошибок.',
      ),
    },
    {
      text: l(
        'Kašika i kašičica su ravne, ne pune do vrha.',
        'Tablespoons and teaspoons are level, not heaped.',
        'Столовая и чайная ложки — без горки.',
      ),
      params: [l('kašika 15 ml', 'tablespoon 15 ml', 'столовая 15 мл'), l('kašičica 5 ml', 'teaspoon 5 ml', 'чайная 5 мл')],
      done: l(
        'Poravnaš kašiku hrptom noža i ništa ne viri preko ivice.',
        'You level the spoon with the back of a knife and nothing sticks out above the rim.',
        'Ты выравниваешь ложку обухом ножа, и ничего не выступает над краем.',
      ),
      why: l(
        'Puna kašika je skoro duplo više od ravne. Kod soli to je razlika između dobrog i slanog.',
        'A heaped spoon is almost double a level one. With salt that is the difference between good and too salty.',
        'Ложка с горкой — почти вдвое больше ровной. С солью это разница между вкусно и пересолено.',
      ),
      drawing: 'levelSpoon',
    },
    {
      text: l(
        'Za više porcija pomnoži sve, a so i začine dodaj postepeno.',
        'For more portions multiply everything, but add salt and spices gradually.',
        'Для большего числа порций умножь всё, а соль и специи добавляй постепенно.',
      ),
      params: [l('2 → 4 osobe: × 2', '2 → 4 people: × 2', '2 → 4 человека: × 2')],
      done: l(
        'Probao si pre poslednjeg dodavanja soli.',
        'You tasted before the last addition of salt.',
        'Ты попробовал перед последним добавлением соли.',
      ),
      why: l(
        'Veća količina sporije isparava i drugačije se ukuva, pa duplo soli lako postane previše.',
        'A larger batch reduces more slowly and differently, so double the salt easily becomes too much.',
        'Большой объём уваривается медленнее и иначе, поэтому двойная соль легко становится лишней.',
      ),
    },
  ],
  mistake: {
    title: l('„Po ukusu“ shvaćeno kao „odoka“.', '"To taste" read as "by eye".', '«По вкусу» понято как «на глаз».'),
    fix: l(
      '„Po ukusu“ znači: dodaj malo, probaj, pa dodaj još. Ne znači: sipaj koliko misliš da treba.',
      '"To taste" means: add a little, taste, then add more. It does not mean: pour what you think is right.',
      '«По вкусу» значит: добавь немного, попробуй, добавь ещё. А не «сыпь сколько кажется нужным».',
    ),
  },
  think: {
    question: l(
      'Recept je za 2 osobe, a kuvaš za 4. Šta je sa vremenom pečenja?',
      'The recipe serves 2 and you cook for 4. What about the baking time?',
      'Рецепт на 2 человека, а ты готовишь на 4. Что со временем запекания?',
    ),
    options: [
      l('Duplo duže', 'Double it', 'Вдвое дольше'),
      l('Slično, ali proveravaš ranije i češće', 'Similar, but you check earlier and more often', 'Примерно так же, но проверяешь раньше и чаще'),
      l('Upola kraće', 'Half as long', 'Вдвое короче'),
    ],
    answer: 1,
    explain: l(
      'Vreme zavisi od debljine komada, ne od broja porcija. Dva pileća bataka se peku isto kao jedan, samo im treba veći pleh.',
      'Time depends on the thickness of each piece, not on the number of portions. Two chicken thighs cook as long as one, they just need a bigger tray.',
      'Время зависит от толщины куска, а не от числа порций. Два куриных бедра готовятся столько же, сколько одно, им просто нужен противень побольше.',
    ),
  },
}

export const kitchenLessons: Lesson[] = [equipment, miseEnPlace, hygiene, fridge, measuring]
