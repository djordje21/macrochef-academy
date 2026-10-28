import { l, type Lesson } from '../types'

// Grade 3 · Module 1 · Restaurant mise en place. A station that is set before the first ticket, a prep list
// built from par levels, labels nobody has to guess, and a line check that catches mistakes before a guest does.

const station: Lesson = {
  id: '3.1.1',
  title: l('Stanica za servis', 'The service station', 'Станция для сервиса'),
  goal: l(
    'Postaviš radnu stanicu tako da tokom servisa ne napraviš nijedan suvišan korak.',
    'You set up a work station so you never take an unnecessary step during service.',
    'Ты настраиваешь рабочую станцию так, чтобы во время сервиса не делать ни одного лишнего шага.',
  ),
  minutes: 6,
  key: { value: l('1 korak', '1 step', '1 шаг'), label: l('do svega na stanici', 'to everything on the station', 'до всего на станции') },
  need: [
    { item: l('Daska i nož', 'Board and knife', 'Доска и нож'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Posude za mise en place', 'Mise en place containers', 'Ёмкости для мизанплас'), qty: l('6–10', '6–10', '6–10') },
    { item: l('Vlažna i suva krpa, kanta za otpad', 'Damp and dry cloth, waste bin', 'Влажное и сухое полотенце, ведро для отходов'), qty: l('1 + 1 + 1', '1 + 1 + 1', '1 + 1 + 1') },
  ],
  why: l(
    'Na servisu nema vremena za traženje. Svaki suvišan pokret se ponavlja za svaki tanjir, a na punom servisu to je razlika između mirne i izgubljene stanice.',
    'There is no time to search during service. Every extra movement repeats for every plate, and on a full service that is the difference between a calm station and a lost one.',
    'Во время сервиса нет времени искать. Каждое лишнее движение повторяется для каждой тарелки, и на полном сервисе это разница между спокойной и потерянной станцией.',
  ),
  steps: [
    {
      text: l('Vlažna krpa ispod daske, daska na sredinu stanice.', 'Damp cloth under the board, board in the middle of the station.', 'Влажное полотенце под доску, доска в центр станции.'),
      done: l('Daska se ne pomera kad pritisneš nož.', 'The board does not move when you press the knife.', 'Доска не сдвигается, когда нажимаешь ножом.'),
      why: l('Daska koja klizi je posekotina koja čeka svoj trenutak.', 'A board that slides is a cut waiting to happen.', 'Скользящая доска — порез, который ждёт своего момента.'),
      drawing: 'board',
    },
    {
      text: l('Najčešće korišćeno stavi najbliže ruci kojom radiš.', 'Put what you use most closest to your working hand.', 'Самое используемое поставь ближе всего к рабочей руке.'),
      params: [l('so, ulje, bilje, kašike', 'salt, oil, herbs, spoons', 'соль, масло, зелень, ложки')],
      done: l('Do njih stižeš bez okretanja i bez pružanja.', 'You reach them without turning or stretching.', 'Ты достаёшь их, не поворачиваясь и не тянясь.'),
      why: l('So uzimaš za skoro svaki tanjir. Ono što ide u svaki tanjir mora da bude na dohvat ruke.', 'You reach for salt on almost every plate. What goes on every plate must be within reach.', 'Соль берёшь почти для каждой тарелки. То, что идёт в каждую тарелку, должно быть под рукой.'),
    },
    {
      text: l('Posude poređaj redom kojim sastojci idu na tanjir.', 'Line the containers up in the order the components go on the plate.', 'Расставь ёмкости в том порядке, в котором компоненты идут на тарелку.'),
      done: l('Jelo složiš s leva na desno, bez traženja.', 'You build the dish left to right without searching.', 'Ты собираешь блюдо слева направо, ничего не ища.'),
      why: l('Isti red svaki dan znači da ruka sama zna gde je šta, i kad je servis najgušći.', 'The same order every day means your hand knows where everything is, even at the busiest moment.', 'Один и тот же порядок каждый день — рука сама знает, где что, даже в самый пик.'),
      drawing: 'bowlsInOrder',
    },
    {
      text: l('Kanta za otpad i suva krpa idu uz stanicu, ne preko kuhinje.', 'The waste bin and dry cloth go next to the station, not across the kitchen.', 'Ведро для отходов и сухое полотенце — у станции, а не через всю кухню.'),
      done: l('Otpad ide pravo u kantu, a ruke su suve.', 'Waste goes straight into the bin and your hands stay dry.', 'Отходы идут прямо в ведро, руки сухие.'),
      why: l('Otpad ostavljen na dasci se meša sa sledećim jelom.', 'Waste left on the board ends up in the next dish.', 'Отходы, оставленные на доске, попадают в следующее блюдо.'),
    },
    {
      text: l('Posle svakog tanjira obriši dasku i vrati posude na mesto.', 'After every plate, wipe the board and put the containers back in place.', 'После каждой тарелки протри доску и верни ёмкости на место.'),
      params: [l('10 sekundi', '10 seconds', '10 секунд')],
      done: l('Stanica izgleda kao na početku servisa.', 'The station looks the same as at the start of service.', 'Станция выглядит так же, как в начале сервиса.'),
      why: l('Nered na stanici raste brže nego što misliš. Deset sekundi sada štedi minut kasnije.', 'Mess on a station grows faster than you think. Ten seconds now saves a minute later.', 'Беспорядок на станции растёт быстрее, чем кажется. Десять секунд сейчас экономят минуту потом.'),
    },
  ],
  mistake: {
    title: l('Stanica natrpana stvarima „za svaki slučaj“.', 'A station crammed with things "just in case".', 'Станция, заставленная вещами «на всякий случай».'),
    fix: l(
      'Na stanici je samo ono što treba za tvoja jela. Rezerve stoje u frižideru ispod stanice. Više stvari znači manje prostora i više grešaka.',
      'Keep only what your dishes need on the station. Backups go in the fridge under it. More things means less space and more mistakes.',
      'На станции только то, что нужно для твоих блюд. Запас — в холодильнике под станцией. Больше вещей — меньше места и больше ошибок.',
    ),
  },
  think: {
    question: l('Šta stavljaš najbliže ruci kojom radiš?', 'What goes closest to your working hand?', 'Что ставишь ближе всего к рабочей руке?'),
    options: [
      l('Ono što koristiš najčešće', 'What you use most often', 'То, что используешь чаще всего'),
      l('Ono što je najteže', 'What is heaviest', 'То, что тяжелее всего'),
      l('Ono što je najskuplje', 'What is most expensive', 'То, что дороже всего'),
    ],
    answer: 0,
    explain: l(
      'Raspored stanice prati učestalost. So i ulje uzimaš za skoro svaki tanjir, pa stoje najbliže. Ono što ti treba jednom na sat može da bude dalje.',
      'A station is arranged by frequency. You reach for salt and oil on almost every plate, so they sit closest. What you need once an hour can be further away.',
      'Станция устроена по частоте. Соль и масло нужны почти для каждой тарелки, поэтому они ближе всего. То, что нужно раз в час, может стоять дальше.',
    ),
  },
}

const prepList: Lesson = {
  id: '3.1.2',
  title: l('Prep lista i par nivoi', 'Prep list and par levels', 'Преп-лист и пар-уровни'),
  goal: l(
    'Napraviš prep listu za smenu i znaš koliko čega mora da bude spremno pre servisa.',
    'You write a prep list for the shift and know how much of everything must be ready before service.',
    'Ты составляешь преп-лист на смену и знаешь, сколько чего должно быть готово до сервиса.',
  ),
  minutes: 7,
  key: { value: l('par', 'par', 'пар'), label: l('za svaku stavku', 'for every item', 'для каждой позиции') },
  need: [
    { item: l('Meni sa svim jelima', 'The menu with every dish', 'Меню со всеми блюдами'), qty: l('1', '1', '1') },
    { item: l('Prodaja istog dana prošle nedelje', 'Sales from the same day last week', 'Продажи в тот же день прошлой недели'), qty: l('1', '1', '1') },
    { item: l('Papir ili tabla i marker', 'Paper or a whiteboard and marker', 'Бумага или доска и маркер'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Par je broj porcija koji mora da bude spreman za jedan dan. Bez njega praviš previše u ponedeljak i ostaneš bez u subotu.',
    'A par is the number of portions that must be ready for one day. Without it you make too much on Monday and run out on Saturday.',
    'Пар — это количество порций, которое должно быть готово на день. Без него в понедельник делаешь слишком много, а в субботу не хватает.',
  ),
  steps: [
    {
      text: l('Za svako jelo zapiši svaku komponentu koja se sprema unapred.', 'For every dish, write down each component that is prepped ahead.', 'Для каждого блюда запиши каждый компонент, который готовится заранее.'),
      done: l('Na listi su komponente, ne samo nazivi jela.', 'The list holds components, not just dish names.', 'В списке компоненты, а не только названия блюд.'),
      why: l('„Riba sa sosom“ nije zadatak. Očišćeni fileti, sos i garnir jesu.', '"Fish with sauce" is not a task. Cleaned fillets, the sauce and the garnish are.', '«Рыба с соусом» — не задача. Почищенное филе, соус и гарнир — задачи.'),
    },
    {
      text: l('Odredi par za svaku komponentu.', 'Set a par for every component.', 'Определи пар для каждого компонента.'),
      params: [l('prodaja prošle nedelje', 'last week\'s sales', 'продажи прошлой недели'), l('+10–20% rezerve', '+10–20% buffer', '+10–20% запаса')],
      done: l('Pored svake stavke stoji broj porcija.', 'Every item has a number of portions next to it.', 'Рядом с каждой позицией стоит число порций.'),
      why: l('Par se menja po danu: petak i subota imaju veći par od utorka.', 'The par changes by day: Friday and Saturday carry a higher par than Tuesday.', 'Пар меняется по дням: у пятницы и субботы он выше, чем у вторника.'),
    },
    {
      text: l('Pre smene prebroj šta već imaš i upiši razliku.', 'Before the shift, count what you already have and write the difference.', 'Перед сменой пересчитай, что уже есть, и запиши разницу.'),
      done: l('Za svaku stavku znaš koliko danas treba da napraviš.', 'For every item you know how much to make today.', 'Для каждой позиции знаешь, сколько нужно сделать сегодня.'),
      why: l('Prep lista nije šta se pravi uvek, nego šta fali danas.', 'A prep list is not what you always make, but what is missing today.', 'Преп-лист — не то, что делают всегда, а то, чего не хватает сегодня.'),
    },
    {
      text: l('Poređaj stavke po vremenu: dugo prvo, brzo na kraju.', 'Order the items by time: long jobs first, quick ones last.', 'Расставь позиции по времени: долгое сначала, быстрое в конце.'),
      params: [l('prvo: fond, braziranje', 'first: stock, braises', 'сначала: бульон, тушение'), l('na kraju: bilje, dresing', 'last: herbs, dressing', 'в конце: зелень, заправка')],
      done: l('Ono što se dugo kuva krene u prvih pola sata.', 'Everything that cooks for a long time starts within the first half hour.', 'Всё долгое начинает готовиться в первые полчаса.'),
      why: l('Fond kuva sam dok ti sečeš. Ako ga staviš poslednji, smena traje sat duže.', 'Stock cooks on its own while you cut. Put it on last and the shift runs an hour longer.', 'Бульон варится сам, пока ты режешь. Поставишь его последним — смена затянется на час.'),
      drawing: 'prepTimeline',
    },
    {
      text: l('Precrtaj stavku kad je gotova i stavi inicijale.', 'Cross an item off when it is done and add your initials.', 'Вычеркни позицию, когда готово, и поставь инициалы.'),
      done: l('Na kraju smene lista je precrtana do kraja.', 'By the end of the shift the list is crossed off completely.', 'К концу смены список вычеркнут полностью.'),
      why: l('Šef jednim pogledom vidi šta je urađeno i ko je radio.', 'The chef sees at a glance what is done and who did it.', 'Шеф одним взглядом видит, что сделано и кем.'),
    },
  ],
  mistake: {
    title: l('Isti prep svaki dan, „po osećaju“.', 'The same prep every day, "by feel".', 'Одинаковая заготовка каждый день, «на глаз».'),
    fix: l(
      'Bez para višak ide u otpad radnim danima, a vikendom ponestane usred servisa. Par vodi računa o danu u nedelji i rezervacijama.',
      'Without a par, the surplus goes in the bin on weekdays and you run out mid-service at the weekend. A par accounts for the day of the week and the bookings.',
      'Без пара излишки уходят в отходы в будни, а в выходные заканчивается посреди сервиса. Пар учитывает день недели и брони.',
    ),
  },
  think: {
    question: l('Šta na prep listi radiš prvo?', 'What do you do first on a prep list?', 'Что в преп-листе делаешь первым?'),
    options: [
      l('Ono što se dugo kuva', 'What takes longest to cook', 'То, что дольше всего готовится'),
      l('Sečeno bilje', 'Chopped herbs', 'Нарезанную зелень'),
      l('Ono što je na vrhu liste', 'Whatever is at the top of the list', 'То, что вверху списка'),
    ],
    answer: 0,
    explain: l(
      'Dugi poslovi rade sami dok ti radiš ostalo. Bilje na kraju, da bude sveže kad počne servis.',
      'Long jobs work on their own while you do the rest. Herbs go last so they are fresh when service starts.',
      'Долгие задачи работают сами, пока ты делаешь остальное. Зелень — в конце, чтобы была свежей к сервису.',
    ),
  },
}

const labels: Lesson = {
  id: '3.1.3',
  title: l('Etiketiranje, FIFO i rokovi', 'Labels, FIFO and shelf life', 'Маркировка, FIFO и сроки'),
  goal: l(
    'Označiš svaku posudu tako da svako u kuhinji zna šta je unutra i do kada sme da se koristi.',
    'You label every container so anyone in the kitchen knows what is inside and until when it can be used.',
    'Ты маркируешь каждую ёмкость так, чтобы любой на кухне знал, что внутри и до какого срока можно использовать.',
  ),
  minutes: 6,
  key: { value: l('4', '4', '4'), label: l('podatka na etiketi', 'facts on every label', 'данных на этикетке') },
  need: [
    { item: l('Traka za markiranje i marker', 'Masking tape and a marker', 'Малярный скотч и маркер'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Posude sa poklopcem', 'Containers with lids', 'Ёмкости с крышками'), qty: l('10', '10', '10') },
    { item: l('Lista otpada', 'A waste log', 'Журнал отходов'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Posuda bez etikete je zagonetka. Neko je baci iako je dobra, ili je upotrebi iako je istekla. Oba su skupa, a drugo je i opasno.',
    'A container without a label is a riddle. Someone throws it out though it is fine, or uses it though it has expired. Both cost money, and the second is dangerous.',
    'Ёмкость без этикетки — загадка. Кто-то выбросит её, хотя она в порядке, или использует, хотя срок истёк. Оба варианта стоят денег, второй ещё и опасен.',
  ),
  steps: [
    {
      text: l('Svaka posuda dobija etiketu čim se napuni.', 'Every container gets a label as soon as it is filled.', 'Каждая ёмкость получает этикетку сразу после заполнения.'),
      params: [l('naziv · datum · rok · inicijali', 'name · date · use by · initials', 'название · дата · срок · инициалы')],
      done: l('U frižideru nema nijedne posude bez etikete.', 'There is not a single unlabelled container in the fridge.', 'В холодильнике нет ни одной ёмкости без этикетки.'),
      why: l('„Kasnije ću“ znači nikad. Etiketa ide pre nego što posuda uđe u frižider.', '"Later" means never. The label goes on before the container goes in the fridge.', '«Потом» значит никогда. Этикетка — до того, как ёмкость попадёт в холодильник.'),
    },
    {
      text: l('Rok upiši po pravilu kuhinje, ne po osećaju.', 'Write the use-by date by the kitchen\'s rule, not by feel.', 'Срок пиши по правилу кухни, а не на глаз.'),
      params: [l('kuvano i sosovi: do 3 dana', 'cooked food and sauces: up to 3 days', 'готовое и соусы: до 3 дней'), l('0–5°C', '0–5°C', '0–5°C')],
      done: l('Svaka etiketa ima tačan datum isteka.', 'Every label has an exact use-by date.', 'На каждой этикетке точная дата окончания срока.'),
      why: l('Svaka kuhinja ima svoju tabelu rokova u HACCP planu (3.11.1). Ona je zakon, ne preporuka.', 'Every kitchen has its own shelf-life table in its HACCP plan (3.11.1). It is the rule, not a suggestion.', 'У каждой кухни есть своя таблица сроков в плане ХАССП (3.11.1). Это правило, а не рекомендация.'),
    },
    {
      text: l('Novo ide iza starog.', 'New goes behind old.', 'Новое ставь за старое.'),
      params: [l('FIFO: prvo unutra, prvo napolje', 'FIFO: first in, first out', 'FIFO: первым пришёл — первым ушёл')],
      done: l('Napred na polici je uvek najstarija posuda.', 'The oldest container is always at the front of the shelf.', 'Впереди на полке всегда самая старая ёмкость.'),
      why: l('Kuvar uzima ono što je napred. Ako je napred novo, staro istekne iza njega.', 'Cooks take what is in front. If the new stuff is in front, the old expires behind it.', 'Повар берёт то, что впереди. Если впереди новое, старое истекает за ним.'),
      drawing: 'fifoShelf',
    },
    {
      text: l('Svako jutro pregledaj rokove i baci isteklo.', 'Every morning, check the dates and throw out anything expired.', 'Каждое утро проверяй сроки и выбрасывай просроченное.'),
      done: l('U frižideru ništa nije prešlo rok.', 'Nothing in the fridge is past its date.', 'В холодильнике нет ничего просроченного.'),
      why: l('Jedna provera dnevno, uvek u isto vreme, da ne zavisi od toga ko je na smeni.', 'One check a day, always at the same time, so it does not depend on who is on shift.', 'Одна проверка в день, всегда в одно время, чтобы не зависеть от того, кто на смене.'),
    },
    {
      text: l('Sve što baciš upiši u listu otpada.', 'Write everything you throw out in the waste log.', 'Всё выброшенное записывай в журнал отходов.'),
      done: l('Na kraju nedelje vidiš šta se baca najčešće.', 'At the end of the week you can see what gets thrown out most.', 'В конце недели видно, что выбрасывается чаще всего.'),
      why: l('Ako svake nedelje bacaš isti sos, par je previsok (3.1.2). Otpad je novac koji se vidi (3.10.5).', 'If you throw out the same sauce every week, the par is too high (3.1.2). Waste is money you can see (3.10.5).', 'Если каждую неделю выбрасываешь один и тот же соус, пар слишком высок (3.1.2). Отходы — это видимые деньги (3.10.5).'),
    },
  ],
  mistake: {
    title: l('„Videće se po mirisu da li je dobro.“', '"You can tell by the smell if it is still good."', '«По запаху будет понятно, хорошее ли».'),
    fix: l(
      'Mnoge bakterije koje izazivaju trovanje ne menjaju ni miris ni izgled hrane. Rok je na etiketi, ne u nosu.',
      'Many bacteria that cause food poisoning change neither the smell nor the look of food. The use-by date is on the label, not in your nose.',
      'Многие бактерии, вызывающие отравление, не меняют ни запаха, ни вида еды. Срок — на этикетке, а не в носу.',
    ),
  },
  think: {
    question: l('Gde ide nova tura sosa?', 'Where does a new batch of sauce go?', 'Куда ставить новую партию соуса?'),
    options: [
      l('U novu posudu, iza stare', 'In a new container, behind the old one', 'В новую ёмкость, за старую'),
      l('Doliva se u staru posudu', 'Topped up into the old container', 'Доливается в старую ёмкость'),
      l('Ispred stare, da se vidi', 'In front of the old one, so it is seen', 'Перед старой, чтобы было видно'),
    ],
    answer: 0,
    explain: l(
      'Dolivanje meša dva datuma u jednoj posudi i rok više ne znači ništa. Nova tura ide u novu posudu, sa svojom etiketom, iza stare.',
      'Topping up mixes two dates in one container and the use-by date stops meaning anything. A new batch goes in a new container, with its own label, behind the old one.',
      'Доливание смешивает две даты в одной ёмкости, и срок теряет смысл. Новая партия — в новую ёмкость, со своей этикеткой, за старую.',
    ),
  },
}

const dayBefore: Lesson = {
  id: '3.1.4',
  title: l('Šta se sprema dan ranije', 'What is prepped the day before', 'Что готовят накануне'),
  goal: l(
    'Podeliš pripremu na ono što se sprema dan ranije i ono što mora da bude sveže na dan servisa.',
    'You split prep into what is made the day before and what must be fresh on the day of service.',
    'Ты делишь заготовку на то, что делают накануне, и то, что должно быть свежим в день сервиса.',
  ),
  minutes: 6,
  key: { value: l('24 h', '24 h', '24 ч'), label: l('unapred, bez gubitka', 'ahead, with no loss', 'заранее, без потерь') },
  need: [
    { item: l('Meni i prep lista (3.1.2)', 'Menu and prep list (3.1.2)', 'Меню и преп-лист (3.1.2)'), qty: l('1', '1', '1') },
    { item: l('Plitke posude i led', 'Shallow containers and ice', 'Плоские ёмкости и лёд'), qty: l('4 + 2 kg', '4 + 2 kg', '4 + 2 кг') },
    { item: l('Etikete (3.1.3)', 'Labels (3.1.3)', 'Этикетки (3.1.3)'), qty: l('10', '10', '10') },
  ],
  why: l(
    'Nekim jelima stajanje prija, nekima šteti. Kuhinja koja to zna počinje servis mirna, a kuhinja koja sve radi isti dan počinje servis u kašnjenju.',
    'Some food improves with time, some suffers. A kitchen that knows which starts service calm; a kitchen that does everything on the day starts service late.',
    'Одним блюдам время на пользу, другим во вред. Кухня, которая это знает, начинает сервис спокойно; кухня, которая всё делает в тот же день, начинает с опозданием.',
  ),
  steps: [
    {
      text: l('Podeli komponente u dve grupe: stajanje prija ili šteti.', 'Split the components into two groups: time helps or time hurts.', 'Раздели компоненты на две группы: время помогает или вредит.'),
      done: l('Za svaku stavku sa prep liste znaš u koju grupu ide.', 'You know which group each item on the prep list belongs to.', 'Для каждой позиции из преп-листа ты знаешь её группу.'),
      why: l('Ovo je jedno pitanje za svaku komponentu, a uštedi sate na dan servisa.', 'It is one question per component, and it saves hours on the day of service.', 'Это один вопрос на компонент, а экономит часы в день сервиса.'),
    },
    {
      text: l('Dan ranije: fondovi, sosovi, braziranja, testa i marinade.', 'The day before: stocks, sauces, braises, doughs and marinades.', 'Накануне: бульоны, соусы, тушёное, тесто и маринады.'),
      done: l('Sve iz ove grupe je ohlađeno i označeno pre kraja smene.', 'Everything in this group is chilled and labelled before the shift ends.', 'Всё из этой группы охлаждено и промаркировано до конца смены.'),
      why: l('Braziran obraz i gulaš su bolji sutradan. Testo se odmara, a marinada radi preko noći.', 'Braised cheek and goulash are better the next day. Dough rests, and a marinade works overnight.', 'Тушёные щёки и гуляш на следующий день вкуснее. Тесто отдыхает, а маринад работает ночью.'),
    },
    {
      text: l('Na dan servisa: bilje, salata, prženo i riba.', 'On the day: herbs, salad, anything fried, and fish.', 'В день сервиса: зелень, салат, жареное и рыба.'),
      done: l('Ova grupa je na prep listi za jutro servisa.', 'This group sits on the prep list for the morning of service.', 'Эта группа в преп-листе на утро сервиса.'),
      why: l('Sečeno bilje potamni, prženo omekša, a riba gubi svežinu svakog sata.', 'Cut herbs darken, fried food goes soft, and fish loses freshness every hour.', 'Нарезанная зелень темнеет, жареное размягчается, а рыба теряет свежесть каждый час.'),
    },
    {
      text: l('Ono što ide unapred ohladi brzo, u plitkim posudama.', 'Chill whatever is made ahead quickly, in shallow containers.', 'То, что готовишь заранее, охлаждай быстро, в плоских ёмкостях.'),
      params: [l('sloj do 5 cm', 'layer up to 5 cm', 'слой до 5 см'), l('do 5°C', 'down to 5°C', 'до 5°C')],
      done: l('Posuda je hladna na dodir pre nego što ode u frižider na noć.', 'The container is cold to the touch before it goes in the fridge overnight.', 'Ёмкость холодная на ощупь, прежде чем уйти в холодильник на ночь.'),
      why: l('Pun lonac vrelog fonda se u frižideru hladi satima i greje sve oko sebe. Pravila za hlađenje su u 3.11.2.', 'A full pot of hot stock takes hours to cool in the fridge and warms everything around it. The cooling rules are in 3.11.2.', 'Полная кастрюля горячего бульона остывает в холодильнике часами и греет всё вокруг. Правила охлаждения — в 3.11.2.'),
    },
    {
      text: l('Šta ne može ceo, pripremi napola: blanširaj dan ranije, završi na servisu.', 'What cannot be done fully, do halfway: blanch the day before, finish on service.', 'Что нельзя сделать целиком, сделай наполовину: бланшируй накануне, доводи на сервисе.'),
      params: [l('blanširano povrće u ledenoj vodi', 'blanched vegetables in ice water', 'бланшированные овощи в ледяной воде')],
      done: l('Povrće je zeleno i čvrsto, a na servisu mu treba minut u tiganju.', 'The vegetables are green and firm, and on service they need a minute in the pan.', 'Овощи зелёные и упругие, а на сервисе им нужна минута на сковороде.'),
      why: l('Najduži deo posla ide dan ranije, a poslednji minut ostaje za tanjir koji ide gostu.', 'The longest part of the job goes the day before, and the last minute stays for the plate going to the guest.', 'Самая долгая часть работы — накануне, а последняя минута остаётся для тарелки гостю.'),
      drawing: 'iceBath',
    },
  ],
  mistake: {
    title: l('Sve se sprema na dan servisa, „da bude sveže“.', 'Everything is made on the day of service, "so it is fresh".', 'Всё готовится в день сервиса, «чтобы было свежим».'),
    fix: l(
      'Smena počinje u gužvi i servis kasni. Ono čemu stajanje ne škodi spremi dan ranije, a svežinu čuvaj za ono što se vidi i hrska.',
      'The shift starts in a rush and service runs late. Make whatever time does not harm the day before, and save freshness for what is seen and what crunches.',
      'Смена начинается в спешке, и сервис опаздывает. То, чему время не вредит, готовь накануне, а свежесть береги для того, что видно и что хрустит.',
    ),
  },
  think: {
    question: l('Šta od ovoga spremaš dan ranije?', 'Which of these do you make the day before?', 'Что из этого готовишь накануне?'),
    options: [
      l('Braziran juneći obraz', 'Braised beef cheek', 'Тушёные говяжьи щёки'),
      l('Pržen luk za garnir', 'Fried onion for garnish', 'Жареный лук для гарнира'),
      l('Seckan vlasac', 'Chopped chives', 'Нарезанный шнитт-лук'),
    ],
    answer: 0,
    explain: l(
      'Braziranom mesu noć u sosu prija: ukus se slegne, a meso se lakše porcioniše hladno. Pržen luk omekša, a vlasac potamni.',
      'Braised meat benefits from a night in its sauce: the flavour settles and cold meat portions more cleanly. Fried onion goes soft and chives darken.',
      'Тушёному мясу ночь в соусе на пользу: вкус устаивается, а холодное мясо ровнее порционируется. Жареный лук размягчается, а шнитт-лук темнеет.',
    ),
  },
}

const lineCheck: Lesson = {
  id: '3.1.5',
  title: l('Provera pred servis', 'The line check', 'Проверка перед сервисом'),
  goal: l(
    'Prođeš stanicu po listi pre servisa i uhvatiš grešku pre nego što stigne do gosta.',
    'You walk the station with a checklist before service and catch a mistake before it reaches a guest.',
    'Ты проходишь станцию по списку перед сервисом и ловишь ошибку до того, как она дойдёт до гостя.',
  ),
  minutes: 6,
  key: { value: l('30 min', '30 min', '30 мин'), label: l('pre prvog gosta', 'before the first guest', 'до первого гостя') },
  need: [
    { item: l('Lista za proveru stanice', 'A station checklist', 'Чек-лист станции'), qty: l('1', '1', '1') },
    { item: l('Termometar', 'Thermometer', 'Термометр'), qty: l('1', '1', '1') },
    { item: l('Čiste kašičice za probu', 'Clean tasting spoons', 'Чистые ложки для пробы'), qty: l('10', '10', '10') },
  ],
  why: l(
    'Greška koja se nađe pre servisa košta minut. Ista greška nađena na tanjiru košta jelo, gosta i ponekad recenziju.',
    'A mistake found before service costs a minute. The same mistake found on a plate costs the dish, the guest and sometimes a review.',
    'Ошибка, найденная до сервиса, стоит минуту. Та же ошибка на тарелке стоит блюда, гостя, а иногда и отзыва.',
  ),
  steps: [
    {
      text: l('Pola sata pre servisa prođi stanicu po listi.', 'Half an hour before service, go through the station with the list.', 'За полчаса до сервиса пройди станцию по списку.'),
      done: l('Svaka stavka na listi ima kvačicu.', 'Every item on the list has a tick.', 'У каждой позиции в списке стоит галочка.'),
      why: l('Lista ne zaboravlja. Ti posle osam sati na nogama možeš.', 'A list does not forget. After eight hours on your feet, you might.', 'Список не забывает. Ты после восьми часов на ногах — можешь.'),
    },
    {
      text: l('Proveri količine prema paru.', 'Check quantities against the par.', 'Сверь количество с паром.'),
      done: l('Svake komponente ima dovoljno za ceo servis.', 'There is enough of every component for the whole service.', 'Каждого компонента хватает на весь сервис.'),
      why: l('Bolje je saznati sada da fali sos nego u 21 čas sa punom salom.', 'Better to find out now that a sauce is short than at 9 pm with a full room.', 'Лучше узнать сейчас, что соуса мало, чем в 21:00 при полном зале.'),
    },
    {
      text: l('Izmeri temperature: frižider stanice i toplu kupku za sosove.', 'Take the temperatures: the station fridge and the warm bath for sauces.', 'Измерь температуры: холодильник станции и тёплую баню для соусов.'),
      params: [l('hladno: do 5°C', 'cold: up to 5°C', 'холодное: до 5°C'), l('toplo: iznad 63°C', 'hot: above 63°C', 'горячее: выше 63°C')],
      done: l('Obe temperature su zapisane i u granicama.', 'Both temperatures are written down and within limits.', 'Обе температуры записаны и в пределах нормы.'),
      why: l('Između 5 i 63°C je opasna zona (1.4). Sos koji ceo servis stoji na 50°C nije topao, nego rizičan.', 'Between 5 and 63°C is the danger zone (1.4). A sauce held at 50°C all service is not warm; it is a risk.', 'Между 5 и 63°C — опасная зона (1.4). Соус, весь сервис стоящий при 50°C, не тёплый, а рискованный.'),
      drawing: 'fridgeTemp',
    },
    {
      text: l('Probaj svaki sos i garnir, svaki čistom kašičicom.', 'Taste every sauce and garnish, each with a clean spoon.', 'Попробуй каждый соус и гарнир, каждый чистой ложкой.'),
      done: l('So i kiselina su tačni, a ništa nije prekuvano.', 'Salt and acid are right and nothing is overcooked.', 'Соль и кислота в норме, ничего не переварено.'),
      why: l('Sos se steže dok stoji, a so se oseti jače. Ono što je jutros bilo tačno do večeri nije (5.5).', 'A sauce tightens as it stands and the salt comes through stronger. What was right this morning is not right by evening (5.5).', 'Соус густеет, пока стоит, и соль чувствуется сильнее. То, что было верным утром, к вечеру уже нет (5.5).'),
      drawing: 'cleanSpoon',
    },
    {
      text: l('Javi šefu: spreman, ili tačno šta fali.', 'Tell the chef: ready, or exactly what is missing.', 'Скажи шефу: готов, или что именно не хватает.'),
      done: l('Šef zna stanje svake stanice pre prvog bona.', 'The chef knows the state of every station before the first ticket.', 'Шеф знает состояние каждой станции до первого заказа.'),
      why: l('„Fali mi pola litre demi-glacea“ šef može da reši. „Nisam spreman“ ne može.', '"I am half a litre short on demi-glace" is something the chef can fix. "I am not ready" is not.', '«Мне не хватает пол-литра деми-гласа» шеф может решить. «Я не готов» — нет.'),
    },
  ],
  mistake: {
    title: l('Sos se proba tek kad ode prvi tanjir.', 'The sauce is tasted only after the first plate goes out.', 'Соус пробуют только после того, как ушла первая тарелка.'),
    fix: l(
      'Ako je sos preslan, ide preslan sve dok neko ne vrati tanjir. Provera pred servis hvata grešku pre gosta, a ne posle njega.',
      'If the sauce is too salty, it goes out too salty until someone sends a plate back. The line check catches the mistake before the guest, not after.',
      'Если соус пересолен, он уходит пересоленным, пока кто-то не вернёт тарелку. Проверка перед сервисом ловит ошибку до гостя, а не после.',
    ),
  },
  think: {
    question: l('Kad se radi provera pred servis?', 'When is the line check done?', 'Когда делают проверку перед сервисом?'),
    options: [
      l('Oko 30 minuta pre servisa', 'About 30 minutes before service', 'Примерно за 30 минут до сервиса'),
      l('Na početku smene', 'At the start of the shift', 'В начале смены'),
      l('Kad stigne prvi bon', 'When the first ticket arrives', 'Когда придёт первый заказ'),
    ],
    answer: 0,
    explain: l(
      'Na početku smene još ništa nije spremno, a sa prvim bonom je kasno. Pola sata ostavlja vreme da se ispravi ono što fali.',
      'At the start of the shift nothing is ready yet, and with the first ticket it is too late. Half an hour leaves time to fix whatever is missing.',
      'В начале смены ещё ничего не готово, а с первым заказом уже поздно. Полчаса оставляют время исправить недостающее.',
    ),
  },
}

export const stationLessons: Lesson[] = [station, prepList, labels, dayBefore, lineCheck]
