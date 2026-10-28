import { l, type Lesson } from '../types'

// Module 16 · Planning the week and meal prep. Everything from grade 1 put on a calendar:
// cook a few bases once, combine them into different meals, and keep the cold chain the whole week.

const menu: Lesson = {
  id: '16.1',
  title: l('Jelovnik za nedelju', 'A menu for the week', 'Меню на неделю'),
  goal: l(
    'Napraviš jelovnik za 5 dana iz 3 osnove koje kuvaš jednom.',
    'You plan 5 days of meals from 3 bases you cook once.',
    'Ты составляешь меню на 5 дней из 3 основ, которые готовишь один раз.',
  ),
  minutes: 6,
  key: { value: l('3 → 5', '3 → 5', '3 → 5'), label: l('osnove → jela', 'bases → meals', 'основы → блюда') },
  need: [
    { item: l('Papir i olovka ili beleške u telefonu', 'Paper and pen, or phone notes', 'Бумага и ручка или заметки в телефоне'), qty: l('1', '1', '1') },
    { item: l('Kalendar nedelje', 'The week\'s calendar', 'Календарь недели'), qty: l('1', '1', '1') },
    { item: l('Lekcije iz ovog razreda', 'The lessons from this grade', 'Уроки этого класса'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Ljudi ne jedu loše zato što ne znaju da kuvaju, nego zato što u 19h nemaju plan. Plan od 15 minuta nedeljom štedi sat svakog dana.',
    'People do not eat badly because they cannot cook, but because at 7 pm they have no plan. A 15-minute plan on Sunday saves an hour every day.',
    'Люди питаются плохо не потому, что не умеют готовить, а потому, что в 19:00 у них нет плана. План на 15 минут в воскресенье экономит час каждый день.',
  ),
  steps: [
    {
      text: l('Pogledaj kalendar i obeleži dane kad stižeš da kuvaš.', 'Look at the calendar and mark the days you have time to cook.', 'Посмотри календарь и отметь дни, когда успеваешь готовить.'),
      params: [l('kuvanje', 'cook', 'готовка'), l('sklapanje', 'assemble', 'сборка'), l('slobodno', 'free', 'свободно')],
      done: l('Svaki dan ima oznaku: kuvanje, sklapanje ili slobodno veče.', 'Every day is marked: cook, assemble or a night off.', 'У каждого дня метка: готовка, сборка или свободный вечер.'),
      why: l('Plan koji ignoriše tvoju nedelju pada u utorak. Realan plan ima dan za ostatke i dan za izlazak.', 'A plan that ignores your week collapses by Tuesday. A realistic plan has a leftovers night and a night out.', 'План, который не учитывает твою неделю, рушится во вторник. В реальном плане есть вечер остатков и вечер вне дома.'),
      drawing: 'weekGrid',
    },
    {
      text: l('Izaberi tri osnove: jedan protein, jedan skrob, jedno povrće.', 'Choose three bases: one protein, one starch, one vegetable.', 'Выбери три основы: один белок, один крахмал, один овощ.'),
      params: [l('npr. pile 13.1', 'e.g. chicken 13.1', 'напр. курица 13.1'), l('bulgur 11.5', 'bulgur 11.5', 'булгур 11.5'), l('pečeno povrće 13.4', 'roast veg 13.4', 'запечённые овощи 13.4')],
      done: l('Imaš tri jela koja se kuvaju zajedno i traju 3–4 dana.', 'You have three dishes that cook together and keep 3–4 days.', 'У тебя три блюда, которые готовятся вместе и хранятся 3–4 дня.'),
      why: l('Osnove su neutralne. Ukus im daju sosovi i dresinzi koji se menjaju svaki dan.', 'The bases are neutral. Sauces and dressings, which change daily, give them their flavour.', 'Основы нейтральные. Вкус им дают соусы и заправки, которые меняются каждый день.'),
      drawing: 'threeBases',
    },
    {
      text: l('Za svaki dan kombinuj osnove sa drugim sosom.', 'For each day combine the bases with a different sauce.', 'На каждый день сочетай основы с другим соусом.'),
      params: [l('5 kombinacija', '5 combinations', '5 сочетаний')],
      done: l('Nijedna dva dana nemaju isti ukus.', 'No two days taste the same.', 'Ни один день не повторяет вкус другого.'),
      why: l('Ponedeljak: pile i bulgur sa jogurt-dresingom. Utorak: isto pile u salati sa vinegretom (3.2). Sreda: prženi pirinač (15.3).', 'Monday: chicken and bulgur with yoghurt dressing. Tuesday: the same chicken in a salad with vinaigrette (3.2). Wednesday: fried rice (15.3).', 'Понедельник: курица с булгуром и йогуртовой заправкой. Вторник: та же курица в салате с винегретом (3.2). Среда: жареный рис (15.3).'),
    },
    {
      text: l('Jedno jelo planiraj kao "lanac": ostatak jednog je osnova sledećeg.', 'Plan one dish as a chain: the leftover of one is the base of the next.', 'Запланируй одно блюдо «цепочкой»: остаток одного — основа следующего.'),
      params: [l('pile → salata → fond', 'chicken → salad → stock', 'курица → салат → бульон')],
      done: l('Kosti od nedeljnog pileta u sredu postaju supa.', 'The bones from Sunday\'s chicken become Wednesday\'s soup.', 'Кости воскресной курицы в среду становятся супом.'),
      why: l('Lanac je zero waste iz modula 15, samo planiran unapred.', 'The chain is the zero waste of module 15, just planned ahead.', 'Цепочка — это zero waste из модуля 15, только запланированный заранее.'),
    },
    {
      text: l('Napiši plan i stavi ga na frižider.', 'Write the plan down and stick it on the fridge.', 'Запиши план и повесь на холодильник.'),
      done: l('Svako u kući vidi šta se jede koji dan.', 'Everyone at home can see what is eaten each day.', 'Каждый дома видит, что едят в какой день.'),
      why: l('Plan u glavi se promeni čim ogladniš. Plan na papiru te čeka.', 'A plan in your head changes the moment you get hungry. A plan on paper waits for you.', 'План в голове меняется, как только проголодаешься. План на бумаге тебя ждёт.'),
    },
  ],
  mistake: {
    title: l('Sedam različitih recepata za sedam dana.', 'Seven different recipes for seven days.', 'Семь разных рецептов на семь дней.'),
    fix: l(
      'To je sedam nabavki, sedam pripremi i sedam sudopera. Do četvrtka odustaneš. Kuvaj osnove, a menjaj sosove: tri kuvanja, pet ukusa.',
      'That is seven shops, seven preps and seven sinks of washing-up. By Thursday you give up. Cook bases and change sauces: three cooks, five tastes.',
      'Это семь закупок, семь заготовок и семь раковин посуды. К четвергу сдашься. Готовь основы и меняй соусы: три готовки, пять вкусов.',
    ),
  },
  think: {
    question: l('Koja osnova je najbolji izbor za 4 dana?', 'Which base is the best choice for 4 days?', 'Какая основа лучше всего на 4 дня?'),
    options: [
      l('Pečeni pileći bataci', 'Roast chicken thighs', 'Запечённые куриные бёдра'),
      l('Riba sa hrskavom kožom', 'Crisp-skinned fish', 'Рыба с хрустящей кожей'),
      l('Prženi krompir', 'Fried potatoes', 'Жареный картофель'),
    ],
    answer: 0,
    explain: l(
      'Bataci ostaju sočni i posle podgrevanja. Riba i hrskavi krompir su dobri samo dok su sveži, pa se kuvaju isti dan.',
      'Thighs stay juicy even after reheating. Fish and crisp potatoes are only good fresh, so they are cooked on the day.',
      'Бёдра остаются сочными и после разогрева. Рыба и хрустящий картофель хороши только свежими, их готовят в тот же день.',
    ),
  },
}

const shopping: Lesson = {
  id: '16.2',
  title: l('Spisak za nabavku', 'The shopping list', 'Список покупок'),
  goal: l(
    'Napraviš spisak po kome kupiš sve za nedelju, jednom, bez viška.',
    'You write a list that buys everything for the week, in one trip, with nothing extra.',
    'Ты составляешь список, по которому покупаешь всё на неделю за один раз и без лишнего.',
  ),
  minutes: 5,
  key: { value: l('1', '1', '1'), label: l('nabavka', 'shop', 'закупка') },
  need: [
    { item: l('Jelovnik za nedelju (16.1)', 'The week\'s menu (16.1)', 'Меню на неделю (16.1)'), qty: l('1', '1', '1') },
    { item: l('Recepti sa količinama', 'Recipes with quantities', 'Рецепты с количествами'), qty: l('—', '—', '—') },
    { item: l('Termo torba', 'Cool bag', 'Термосумка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Bez spiska kupiš ono što ti prodavnica pokaže, a ne ono što ti treba. Spisak je mise en place (1.2) za prodavnicu.',
    'Without a list you buy what the shop shows you, not what you need. A list is mise en place (1.2) for the shop.',
    'Без списка покупаешь то, что показывает магазин, а не то, что нужно. Список — это мизанплас (1.2) для магазина.',
  ),
  steps: [
    {
      text: l('Pre spiska otvori frižider, zamrzivač i ostavu.', 'Before writing, open the fridge, freezer and cupboard.', 'Перед списком открой холодильник, морозилку и шкаф.'),
      done: l('Znaš šta već imaš i šta mora da se potroši prvo.', 'You know what you already have and what must be used first.', 'Ты знаешь, что уже есть и что нужно израсходовать первым.'),
      why: l('Ono što je pri kraju roka ide u plan ove nedelje, ne u kantu.', 'What is near its date goes into this week\'s plan, not the bin.', 'То, у чего заканчивается срок, идёт в план этой недели, а не в ведро.'),
    },
    {
      text: l('Saberi količine iz recepata za ceo jelovnik.', 'Add up the quantities from the recipes for the whole menu.', 'Сложи количества из рецептов для всего меню.'),
      params: [l('× broj osoba', '× number of people', '× количество людей')],
      done: l('Pored svake namirnice piše tačna količina.', 'Every item has its exact quantity next to it.', 'У каждого продукта указано точное количество.'),
      why: l('"Piletina" nije stavka. "1.6 kg celo pile" jeste. Merenje iz 1.5 počinje u prodavnici.', '"Chicken" is not an item. "1.6 kg whole chicken" is. Measuring from 1.5 starts in the shop.', '«Курица» — не позиция. «Целая курица 1,6 кг» — позиция. Измерение из 1.5 начинается в магазине.'),
    },
    {
      text: l('Grupiši spisak po odeljenjima prodavnice.', 'Group the list by the shop\'s sections.', 'Сгруппируй список по отделам магазина.'),
      params: [l('ostava → povrće → mlečno → meso', 'pantry → produce → dairy → meat', 'бакалея → овощи → молочное → мясо')],
      done: l('Prolaziš kroz prodavnicu jednom, bez vraćanja.', 'You walk through the shop once, without doubling back.', 'Проходишь магазин один раз, не возвращаясь.'),
      drawing: 'shoppingList',
    },
    {
      text: l('Hladno i meso kupuj poslednje, a uzimaj iz dna police.', 'Buy chilled food and meat last, taking from the back of the shelf.', 'Охлаждённое и мясо бери последним, с дальней части полки.'),
      params: [l('najduži rok', 'longest date', 'самый долгий срок')],
      done: l('Meso je u korpi najkraće moguće, sa najdužim rokom.', 'The meat spends as little time in the basket as possible, with the longest date.', 'Мясо минимально время в корзине и с самым долгим сроком.'),
      why: l('Prodavnice stavljaju stariju robu napred. Ti uzimaš svežiju iza.', 'Shops put older stock at the front. You take the fresher stock behind.', 'Магазины ставят старый товар вперёд. Ты берёшь свежий сзади.'),
    },
    {
      text: l('Kod kuće složi novo iza starog: prvo ulazi, prvo izlazi.', 'At home put new behind old: first in, first out.', 'Дома ставь новое за старым: первым пришёл — первым ушёл.'),
      params: [l('u frižider za 30 min', 'into the fridge within 30 min', 'в холодильник за 30 мин')],
      done: l('Ono što ističe prvo je napred i vidi se.', 'What expires first is at the front and visible.', 'То, что истекает первым, стоит впереди и на виду.'),
      why: l('Isto pravilo koje restoran koristi za svaki frižider. Tako se ne zaboravi ništa iza.', 'The same rule restaurants use for every fridge. Nothing gets forgotten at the back.', 'То же правило, что в ресторане для каждого холодильника. Так ничего не забывается в глубине.'),
      drawing: 'fifoShelf',
    },
  ],
  mistake: {
    title: l('Nabavka gladan.', 'Shopping hungry.', 'Ходить в магазин голодным.'),
    fix: l(
      'Gladan kupiš 30% više, i to grickalice. Pojedi nešto pre nabavke i kupuj samo sa spiska. Ako nešto nije na spisku, nije za ovu nedelju.',
      'Hungry, you buy 30% more, and it is snacks. Eat something before you shop and buy only from the list. If it is not on the list, it is not for this week.',
      'Голодным покупаешь на 30% больше, и это снеки. Перекуси перед магазином и бери только по списку. Нет в списке — не для этой недели.',
    ),
  },
  think: {
    question: l('Imaš otvoren jogurt kome rok ističe sutra. Šta radiš?', 'You have an open yoghurt that expires tomorrow. What do you do?', 'У тебя открытый йогурт, у которого завтра истекает срок. Что делаешь?'),
    options: [
      l('Ubaciš ga u plan za sutra: marinada (14.4) ili dresing', 'Put it in tomorrow\'s plan: a marinade (14.4) or a dressing', 'Включаешь в план на завтра: маринад (14.4) или заправка'),
      l('Kupiš novi jogurt', 'Buy a new yoghurt', 'Покупаешь новый йогурт'),
      l('Baciš ga odmah', 'Throw it away now', 'Сразу выбрасываешь'),
    ],
    answer: 0,
    explain: l(
      'Spisak počinje od onoga što imaš. Namirnica pri kraju roka bira jelo, ne obrnuto.',
      'The list starts from what you have. An ingredient near its date chooses the dish, not the other way round.',
      'Список начинается с того, что есть. Продукт с истекающим сроком выбирает блюдо, а не наоборот.',
    ),
  },
}

const prepDay: Lesson = {
  id: '16.3',
  title: l('Meal prep nedeljom', 'Sunday meal prep', 'Заготовка в воскресенье'),
  goal: l(
    'Za dva sata skuvaš osnove za celu nedelju, sa rernom, ringlom i daskom u isto vreme.',
    'In two hours you cook the bases for the whole week, using oven, hob and board at the same time.',
    'За два часа ты готовишь основы на всю неделю, одновременно используя духовку, плиту и доску.',
  ),
  minutes: 7,
  key: { value: l('2 h', '2 h', '2 ч'), label: l('za celu nedelju', 'for the week', 'на всю неделю') },
  need: [
    { item: l('Pileći bataci bez kosti', 'Boneless chicken thighs', 'Куриные бёдра без кости'), qty: l('1.5 kg', '1.5 kg', '1,5 кг') },
    { item: l('Povrće za pečenje', 'Vegetables for roasting', 'Овощи для запекания'), qty: l('1.5 kg', '1.5 kg', '1,5 кг') },
    { item: l('Bulgur ili pirinač', 'Bulgur or rice', 'Булгур или рис'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Sočivo', 'Lentils', 'Чечевица'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Sastojci za 2 dresinga (3.3)', 'Ingredients for 2 dressings (3.3)', 'Продукты для 2 заправок (3.3)'), qty: l('—', '—', '—') },
    { item: l('2 pleha, 2 šerpe, posude za hlađenje', '2 trays, 2 pans, containers to cool in', '2 противня, 2 кастрюли, контейнеры для охлаждения'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Dva sata jednom umesto 45 minuta pet puta. Tajna nije brzina, nego redosled: ono što traje najduže kreće prvo.',
    'Two hours once instead of 45 minutes five times. The secret is not speed but order: whatever takes longest starts first.',
    'Два часа один раз вместо 45 минут пять раз. Секрет не в скорости, а в порядке: то, что дольше всего, начинается первым.',
  ),
  steps: [
    {
      text: l('Uključi rernu i pripremi mise en place za sve.', 'Turn on the oven and set up mise en place for everything.', 'Включи духовку и подготовь мизанплас для всего.'),
      params: [l('210°C', '210°C', '210°C'), l('15 min', '15 min', '15 мин')],
      done: l('Sve je oprano, izmereno i na radnoj površini.', 'Everything is washed, weighed and on the counter.', 'Всё вымыто, взвешено и на рабочем столе.'),
      why: l('Rerni treba 15 minuta da se zagreje. To je tačno vreme za mise en place (1.2).', 'The oven needs 15 minutes to heat. That is exactly the time for mise en place (1.2).', 'Духовке нужно 15 минут на разогрев — ровно столько, сколько на мизанплас (1.2).'),
    },
    {
      text: l('Najduže prvo: piletina i tvrdo povrće u rernu.', 'Longest first: chicken and hard vegetables into the oven.', 'Самое долгое первым: курица и твёрдые овощи в духовку.'),
      params: [l('2 pleha', '2 trays', '2 противня'), l('35–45 min', '35–45 min', '35–45 мин'), l('bataci 80°C', 'thighs 80°C', 'бёдра 80°C')],
      done: l('Oba pleha su u rerni, tajmer je postavljen.', 'Both trays are in the oven and the timer is set.', 'Оба противня в духовке, таймер поставлен.'),
      why: l('Rerna radi sama. Dok peče, ti si slobodan za ringlu.', 'The oven works on its own. While it roasts, your hands are free for the hob.', 'Духовка работает сама. Пока она печёт, ты свободен для плиты.'),
      drawing: 'prepTimeline',
    },
    {
      text: l('Na ringlama istovremeno skuvaj bulgur i sočivo.', 'On the hob, cook the bulgur and lentils at the same time.', 'На плите одновременно свари булгур и чечевицу.'),
      params: [l('bulgur 12 + 10 min', 'bulgur 12 + 10 min', 'булгур 12 + 10 мин'), l('sočivo 25 min', 'lentils 25 min', 'чечевица 25 мин')],
      done: l('Obe šerpe krčkaju, a ti si za daskom.', 'Both pans are simmering and you are at the board.', 'Обе кастрюли томятся, а ты у доски.'),
      why: l('Postupci iz 11.3 i 11.5. Oni ne traže mešanje, pa ne traže ni tebe.', 'The methods from 11.3 and 11.5. They need no stirring, so they do not need you.', 'Способы из 11.3 и 11.5. Им не нужно помешивание, значит, не нужен и ты.'),
    },
    {
      text: l('Dok se kuva, napravi dresinge i operi salatu.', 'While things cook, make the dressings and wash the salad.', 'Пока всё готовится, сделай заправки и помой салат.'),
      params: [l('2 dresinga', '2 dressings', '2 заправки'), l('salata osušena', 'salad spun dry', 'салат высушен')],
      done: l('Dresinzi su u teglama, a salata suva u kutiji sa ubrusom.', 'The dressings are in jars and the salad dry in a box with a paper towel.', 'Заправки в банках, салат сухой в контейнере с салфеткой.'),
      why: l('Hladna kuhinja (modul 3) se radi dok topla kuhinja radi sama.', 'The cold station (module 3) is done while the hot station runs itself.', 'Холодный цех (модуль 3) делается, пока горячий работает сам.'),
      drawing: 'dressingJars',
    },
    {
      text: l('Sve gotovo raširi u plitke posude da se brzo ohladi.', 'Spread everything cooked into shallow containers to cool fast.', 'Разложи всё готовое в плоские контейнеры, чтобы быстро остыло.'),
      params: [l('do 2 h u frižider', 'into the fridge within 2 h', 'в холодильник за 2 ч'), l('sloj 5 cm', 'layer 5 cm', 'слой 5 см')],
      done: l('Za sat vremena sve je mlako i ide u frižider.', 'Within an hour everything is lukewarm and goes in the fridge.', 'Через час всё тёплое и отправляется в холодильник.'),
      why: l('Pun lonac se hladi satima i stoji u opasnoj zoni (1.4). Plitak sloj se ohladi brzo.', 'A full pot takes hours to cool and sits in the danger zone (1.4). A shallow layer cools fast.', 'Полная кастрюля остывает часами и стоит в опасной зоне (1.4). Тонкий слой остывает быстро.'),
      drawing: 'dangerZone',
    },
  ],
  mistake: {
    title: l('Jedan po jedan: prvo piletina, pa bulgur, pa sočivo.', 'One at a time: chicken first, then bulgur, then lentils.', 'По одному: сначала курица, потом булгур, потом чечевица.'),
    fix: l(
      'Tako dva sata postanu pet. Rerna, ringle i daska su tri radne stanice. Napiši redosled po trajanju i uključi sve tri odjednom.',
      'That way two hours become five. Oven, hob and board are three workstations. Write the order by duration and run all three at once.',
      'Так два часа превращаются в пять. Духовка, плита и доска — три рабочих места. Запиши порядок по длительности и запусти все три сразу.',
    ),
  },
  think: {
    question: l('Šta od ovoga NE spremaš nedeljom unapred?', 'Which of these do you NOT make ahead on Sunday?', 'Что из этого НЕ готовишь заранее в воскресенье?'),
    options: [
      l('Salatu sa dresingom već prelivenu', 'Salad already dressed', 'Салат, уже заправленный'),
      l('Pečeno povrće', 'Roast vegetables', 'Запечённые овощи'),
      l('Kuvano sočivo', 'Cooked lentils', 'Варёную чечевицу'),
    ],
    answer: 0,
    explain: l(
      'Dresing za sat vremena uvene list (3.4). Salata i dresing se čuvaju odvojeno i spajaju tek pred jelo.',
      'Dressing wilts leaves within an hour (3.4). Salad and dressing are kept apart and combined only before eating.',
      'Заправка за час вянет листья (3.4). Салат и заправку хранят отдельно и соединяют только перед едой.',
    ),
  },
}

const boxes: Lesson = {
  id: '16.4',
  title: l('Kutije, frižider i rokovi', 'Boxes, fridge and dates', 'Контейнеры, холодильник и сроки'),
  goal: l(
    'Spakuješ obroke za 5 dana tako da je i petak bezbedan i ukusan.',
    'You pack 5 days of meals so that even Friday\'s is safe and tasty.',
    'Ты упаковываешь еду на 5 дней так, что даже пятничная безопасна и вкусна.',
  ),
  minutes: 6,
  key: { value: l('3–4 dana', '3–4 days', '3–4 дня'), label: l('u frižideru', 'in the fridge', 'в холодильнике') },
  need: [
    { item: l('Staklene posude sa poklopcem', 'Glass containers with lids', 'Стеклянные контейнеры с крышкой'), qty: l('10', '10', '10') },
    { item: l('Male posude za sos', 'Small sauce pots', 'Маленькие баночки для соуса'), qty: l('5', '5', '5') },
    { item: l('Traka i flomaster', 'Tape and marker', 'Скотч и маркер'), qty: l('1', '1', '1') },
    { item: l('Osnove iz 16.3', 'The bases from 16.3', 'Основы из 16.3'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Kuvana hrana je bezbedna 3–4 dana u frižideru. Nedelja ima pet radnih dana. Zato pola obroka ide u frižider, a pola u zamrzivač.',
    'Cooked food is safe for 3–4 days in the fridge. A working week has five days. So half the meals go in the fridge and half in the freezer.',
    'Готовая еда безопасна 3–4 дня в холодильнике. В рабочей неделе пять дней. Поэтому половина еды — в холодильник, половина — в морозилку.',
  ),
  steps: [
    {
      text: l('Podeli osnove u kutije po obroku.', 'Divide the bases into boxes, one per meal.', 'Разложи основы по контейнерам, по одному на приём пищи.'),
      params: [l('vaga', 'scale', 'весы'), l('protein · skrob · povrće', 'protein · starch · veg', 'белок · крахмал · овощи')],
      done: l('Sve kutije imaju istu težinu i isti raspored.', 'Every box has the same weight and the same layout.', 'Все контейнеры одного веса и с одинаковой раскладкой.'),
      why: l('Merena porcija je i merena makro vrednost (16.5).', 'A weighed portion is a known macro count (16.5).', 'Взвешенная порция — это известные макросы (16.5).'),
      drawing: 'boxRow',
    },
    {
      text: l('Sos i dresing stavi u posebnu malu posudu.', 'Put sauce and dressing in a separate small pot.', 'Соус и заправку положи в отдельную маленькую баночку.'),
      done: l('U kutiji nema tečnosti.', 'There is no liquid in the box.', 'В контейнере нет жидкости.'),
      why: l('Bulgur i povrće upiju sos za noć i postanu kaša. Odvojeno, ostaju kao prvog dana.', 'Bulgur and vegetables soak up sauce overnight and turn mushy. Kept apart, they stay as on day one.', 'Булгур и овощи за ночь впитывают соус и становятся кашей. Отдельно — остаются как в первый день.'),
    },
    {
      text: l('Kutije za ponedeljak–sredu u frižider, za četvrtak–petak u zamrzivač.', 'Boxes for Monday–Wednesday into the fridge, Thursday–Friday into the freezer.', 'Контейнеры на понедельник–среду — в холодильник, на четверг–пятницу — в морозилку.'),
      params: [l('frižider ≤ 4°C', 'fridge ≤ 4°C', 'холодильник ≤ 4°C'), l('zamrzivač −18°C', 'freezer −18°C', 'морозилка −18°C')],
      done: l('Nijedna kutija u frižideru nije starija od 3 dana kad je jedeš.', 'No box in the fridge is older than 3 days when you eat it.', 'Ни один контейнер в холодильнике не старше 3 дней, когда ты его ешь.'),
      why: l('Pirinač je izuzetak: najviše jedan dan u frižideru (15.3). Sve kutije sa pirinčem posle ponedeljka idu u zamrzivač.', 'Rice is the exception: one day in the fridge at most (15.3). Every rice box after Monday goes in the freezer.', 'Рис — исключение: не больше дня в холодильнике (15.3). Все контейнеры с рисом после понедельника — в морозилку.'),
      drawing: 'fridgeShelves',
    },
    {
      text: l('Na svaku kutiju napiši dan i datum kuvanja.', 'Write the day and the cooking date on every box.', 'Подпиши на каждом контейнере день и дату готовки.'),
      done: l('U 7 ujutru uzimaš kutiju bez razmišljanja.', 'At 7 am you grab a box without thinking.', 'В 7 утра берёшь контейнер, не думая.'),
      drawing: 'flatBags',
    },
    {
      text: l('Kutiju iz zamrzivača prebaci u frižider veče ranije, pa podgrej jednom.', 'Move a freezer box to the fridge the evening before, then reheat once.', 'Контейнер из морозилки переложи в холодильник накануне вечером и разогрей один раз.'),
      params: [l('74°C u sredini', '74°C at the centre', '74°C в центре'), l('jednom', 'once', 'один раз')],
      done: l('Jelo se puši u sredini, ne samo na ivicama.', 'The food steams at the centre, not only at the edges.', 'Еда горячая в центре, а не только по краям.'),
      why: l('Mikrotalasna greje neravnomerno. Promešaj na pola vremena i proveri sredinu.', 'A microwave heats unevenly. Stir halfway and check the centre.', 'Микроволновка греет неравномерно. Перемешай на середине и проверь центр.'),
      drawing: 'probeCenter',
    },
  ],
  mistake: {
    title: l('Petak iz frižidera, kuvan prošle nedelje.', 'Friday\'s box from the fridge, cooked last Sunday.', 'Пятничный контейнер из холодильника, сваренный в прошлое воскресенье.'),
    fix: l(
      'Peti dan je preko granice bezbednosti, čak i kad miriše dobro. Bakterije koje prave problem ne menjaju miris. Petak i četvrtak uvek iz zamrzivača.',
      'Day five is past the safety limit, even when it smells fine. The bacteria that cause trouble do not change the smell. Thursday and Friday always come from the freezer.',
      'Пятый день — за границей безопасности, даже если пахнет нормально. Опасные бактерии не меняют запах. Четверг и пятница — всегда из морозилки.',
    ),
  },
  think: {
    question: l('Zašto staklene posude, a ne plastične?', 'Why glass containers rather than plastic?', 'Почему стеклянные контейнеры, а не пластиковые?'),
    options: [
      l('Ne upijaju miris i boju i smeju u mikrotalasnu', 'They do not absorb smells or colour and are microwave-safe', 'Не впитывают запах и цвет и подходят для микроволновки'),
      l('Hrana se u njima brže hladi', 'Food cools faster in them', 'Еда в них быстрее остывает'),
      l('Lakše su za nošenje', 'They are lighter to carry', 'Их легче носить'),
    ],
    answer: 0,
    explain: l(
      'Plastika posle paprikaša ostane narandžasta zauvek i miriše na njega. Staklo se opere do kraja i podgreva bez brige.',
      'Plastic stays orange forever after paprikash and smells of it. Glass washes clean and reheats without worry.',
      'Пластик после паприкаша навсегда остаётся оранжевым и пахнет им. Стекло отмывается полностью и разогревается без забот.',
    ),
  },
}

const macros: Lesson = {
  id: '16.5',
  title: l('Makroi u MacroChefu', 'Macros in MacroChef', 'Макросы в MacroChef'),
  goal: l(
    'Izračunaš proteine, ugljene hidrate i masti za jednu porciju jela koje si sam skuvao.',
    'You calculate protein, carbs and fat for one portion of a dish you cooked yourself.',
    'Ты рассчитываешь белки, углеводы и жиры на порцию блюда, которое приготовил сам.',
  ),
  minutes: 7,
  key: { value: l('na 100 g', 'per 100 g', 'на 100 г'), label: l('kuvanog', 'cooked', 'готового') },
  need: [
    { item: l('Kuhinjska vaga', 'Kitchen scale', 'Кухонные весы'), qty: l('1', '1', '1') },
    { item: l('Posuda u kojoj kuvaš, izmerena prazna', 'The pot you cook in, weighed empty', 'Кастрюля, в которой готовишь, взвешенная пустой'), qty: l('1', '1', '1') },
    { item: l('Deklaracije ili tablica namirnica', 'Labels or a food table', 'Этикетки или таблица продуктов'), qty: l('—', '—', '—') },
    { item: l('MacroChef aplikacija', 'The MacroChef app', 'Приложение MacroChef'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kad kuvaš sam, znaš svaki gram koji je ušao u lonac. To je jedina tačna brojka. Restoran i kesa iz prodavnice daju procenu.',
    'When you cook yourself, you know every gram that went into the pot. That is the only exact number. A restaurant or a ready meal gives you an estimate.',
    'Когда готовишь сам, ты знаешь каждый грамм в кастрюле. Это единственная точная цифра. Ресторан и готовая еда дают лишь оценку.',
  ),
  steps: [
    {
      text: l('Izmeri svaku namirnicu sirovu, pre kuvanja.', 'Weigh every ingredient raw, before cooking.', 'Взвесь каждый продукт сырым, до готовки.'),
      params: [l('sirova težina', 'raw weight', 'сырой вес'), l('i ulje', 'oil too', 'и масло тоже')],
      done: l('Imaš spisak: namirnica i grami, uključujući masnoću.', 'You have a list: ingredient and grams, fat included.', 'У тебя список: продукт и граммы, включая жир.'),
      why: l('Tablice daju vrednosti za sirovo. Kašika ulja je 120 kcal i najčešće se zaboravi.', 'Tables give values for raw food. A spoon of oil is 120 kcal and is the item most often forgotten.', 'Таблицы дают значения для сырого. Ложка масла — 120 ккал, и её чаще всего забывают.'),
      drawing: 'scaleTare',
    },
    {
      text: l('Saberi proteine, ugljene hidrate i masti za ceo lonac.', 'Add up protein, carbs and fat for the whole pot.', 'Сложи белки, углеводы и жиры для всей кастрюли.'),
      params: [l('P · UH · M', 'P · C · F', 'Б · У · Ж')],
      done: l('Imaš tri broja za celo jelo.', 'You have three numbers for the whole dish.', 'У тебя три числа для всего блюда.'),
      why: l('Kalorije slede same: protein i ugljeni hidrati 4 kcal po gramu, masti 9.', 'Calories follow by themselves: protein and carbs 4 kcal per gram, fat 9.', 'Калории следуют сами: белки и углеводы 4 ккал на грамм, жиры 9.'),
    },
    {
      text: l('Izmeri celo gotovo jelo, bez posude.', 'Weigh the whole cooked dish, minus the pot.', 'Взвесь всё готовое блюдо без посуды.'),
      params: [l('ukupno − prazna posuda', 'total − empty pot', 'итог − пустая кастрюля')],
      done: l('Znaš koliko grama jela je izašlo iz lonca.', 'You know how many grams of food came out of the pot.', 'Ты знаешь, сколько граммов еды вышло из кастрюли.'),
      why: l('Kuvanje menja težinu: meso izgubi oko četvrtine vode, a pirinač i bulgur se utroštruče.', 'Cooking changes weight: meat loses about a quarter in water, while rice and bulgur triple.', 'Готовка меняет вес: мясо теряет около четверти воды, а рис и булгур утраиваются.'),
      drawing: 'rawCooked',
    },
    {
      text: l('Podeli zbir sa težinom i pomnoži sa 100.', 'Divide the totals by the weight and multiply by 100.', 'Раздели суммы на вес и умножь на 100.'),
      params: [l('makro ÷ grami × 100', 'macro ÷ grams × 100', 'макрос ÷ граммы × 100')],
      done: l('Imaš vrednosti na 100 g gotovog jela.', 'You have values per 100 g of the cooked dish.', 'У тебя значения на 100 г готового блюда.'),
      why: l('Isti format kao recepti na kraju lekcija u ovom kursu, pa ih možeš porediti.', 'The same format as the recipes at the end of the lessons in this course, so you can compare them.', 'Тот же формат, что у рецептов в конце уроков этого курса, — их можно сравнивать.'),
    },
    {
      text: l('Izmeri porciju na tanjiru i upiši je u MacroChef.', 'Weigh your portion on the plate and log it in MacroChef.', 'Взвесь порцию на тарелке и внеси её в MacroChef.'),
      params: [l('grami porcije', 'portion grams', 'граммы порции')],
      done: l('Znaš tačno šta si pojeo, a recept je sačuvan za sledeći put.', 'You know exactly what you ate, and the recipe is saved for next time.', 'Ты точно знаешь, что съел, а рецепт сохранён на следующий раз.'),
      why: l('Isto jelo se sledeći put ne računa ponovo. Ovo je veza između Academy i MacroChefa.', 'Next time the same dish needs no recalculating. This is the link between the Academy and MacroChef.', 'В следующий раз то же блюдо пересчитывать не нужно. Это связь между Academy и MacroChef.'),
      drawing: 'portionScale',
    },
  ],
  mistake: {
    title: l('Upis kuvane porcije sa vrednostima za sirovo.', 'Logging a cooked portion with raw values.', 'Вносить готовую порцию по значениям для сырого.'),
    fix: l(
      '200 g kuvanog pirinča nije 200 g sirovog: razlika je skoro 500 kcal. Ili meri sirovo pa računaj tako, ili koristi vrednosti na 100 g gotovog jela iz koraka 4. Nikad pomešano.',
      '200 g of cooked rice is not 200 g of raw: the difference is almost 500 kcal. Either weigh raw and count raw, or use the per-100 g cooked values from step 4. Never mixed.',
      '200 г варёного риса — не 200 г сырого: разница почти 500 ккал. Либо взвешивай сырое и считай сырое, либо используй значения на 100 г готового из шага 4. Никогда не смешивай.',
    ),
  },
  think: {
    question: l(
      'Gulaš: ukupno 180 g proteina, gotovo jelo teži 1500 g. Koliko proteina ima porcija od 300 g?',
      'Goulash: 180 g protein in total, the cooked dish weighs 1500 g. How much protein in a 300 g portion?',
      'Гуляш: всего 180 г белка, готовое блюдо весит 1500 г. Сколько белка в порции 300 г?',
    ),
    options: [l('36 g', '36 g', '36 г'), l('60 g', '60 g', '60 г'), l('12 g', '12 g', '12 г')],
    answer: 0,
    explain: l(
      '180 ÷ 1500 × 100 = 12 g na 100 g. Porcija od 300 g je 3 × 12 = 36 g. Isti račun važi za svako jelo iz ovog razreda.',
      '180 ÷ 1500 × 100 = 12 g per 100 g. A 300 g portion is 3 × 12 = 36 g. The same sum works for every dish in this grade.',
      '180 ÷ 1500 × 100 = 12 г на 100 г. Порция 300 г — это 3 × 12 = 36 г. Тот же расчёт подходит для любого блюда этого класса.',
    ),
  },
}

export const mealPrepLessons: Lesson[] = [menu, shopping, prepDay, boxes, macros]
