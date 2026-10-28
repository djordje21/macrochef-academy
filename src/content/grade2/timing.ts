import { l, type Lesson } from '../types'

// Grade 2 · Module 1 · Timing and the work plan. One menu, four guests, one stove: the module turns
// the habits of grade 1 into a plan that puts three courses on the table on time.

const brigade: Lesson = {
  id: '2.1.1',
  title: l('Brigada kod kuće: ko radi šta', 'A brigade at home: who does what', 'Бригада дома: кто что делает'),
  goal: l(
    'Podeliš kuhinju na stanice i poslove, tako da niko ne čeka i ništa ne zagori.',
    'You split the kitchen into stations and jobs, so nobody waits and nothing burns.',
    'Ты делишь кухню на станции и задачи, чтобы никто не ждал и ничего не сгорело.',
  ),
  minutes: 6,
  key: { value: l('4', '4', '4'), label: l('stanice', 'stations', 'станции') },
  need: [
    { item: l('Meni od tri jela', 'A three-course menu', 'Меню из трёх блюд'), qty: l('1', '1', '1') },
    { item: l('Papir i traka za lepljenje', 'Paper and tape', 'Бумага и скотч'), qty: l('—', '—', '—') },
    { item: l('Pomoćnik (po želji)', 'A helper (optional)', 'Помощник (по желанию)'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Brigada nije hijerarhija, nego raspored. U restoranu svako zna svoju stanicu i svoj zadatak. Kod kuće to radiš ti, pa ti treba isti raspored.',
    'A brigade is not a hierarchy but a layout. In a restaurant everyone knows their station and their job. At home you do it all, so you need the same layout.',
    'Бригада — не иерархия, а распределение. В ресторане каждый знает свою станцию и задачу. Дома всё делаешь ты, поэтому нужно то же распределение.',
  ),
  steps: [
    {
      text: l('Podeli kuhinju na četiri stanice.', 'Divide the kitchen into four stations.', 'Раздели кухню на четыре станции.'),
      params: [l('topla', 'hot', 'горячая'), l('hladna', 'cold', 'холодная'), l('desert', 'dessert', 'десерт'), l('pas', 'pass', 'раздача')],
      done: l('Svaka stanica ima svoje mesto na radnoj površini.', 'Every station has its own place on the counter.', 'У каждой станции своё место на столе.'),
      why: l('Hladno ne stoji pored šporeta, a desert ne deli dasku sa sirovim mesom (1.3).', 'Cold food does not sit by the stove, and dessert does not share a board with raw meat (1.3).', 'Холодное не стоит у плиты, а десерт не делит доску с сырым мясом (1.3).'),
      drawing: 'stations',
    },
    {
      text: l('Odredi pas: prazno mesto gde se slažu tanjiri.', 'Set up the pass: a clear spot where plates are built.', 'Определи раздачу: свободное место для сборки тарелок.'),
      params: [l('60 × 40 cm', '60 × 40 cm', '60 × 40 см'), l('uvek prazno', 'always clear', 'всегда свободно')],
      done: l('Na pasu nema ničega osim krpe i kašika za probu.', 'Nothing is on the pass but a cloth and tasting spoons.', 'На раздаче нет ничего, кроме полотенца и ложек для пробы.'),
      why: l('Tanjiri za četiri osobe traže prostor. Ako ga tražiš u poslednjem minutu, jelo se hladi.', 'Plates for four need room. Look for it at the last minute and the food goes cold.', 'Тарелкам на четверых нужно место. Будешь искать его в последнюю минуту — еда остынет.'),
    },
    {
      text: l('Napiši sve poslove menija na papir, svaki na svoju stanicu.', 'Write every task of the menu on paper, each under its station.', 'Выпиши все задачи меню на бумагу, каждую под своей станцией.'),
      done: l('Svaki zadatak ima stanicu, a nijedan nije na dve.', 'Every task has a station, and none is on two.', 'У каждой задачи есть станция, и ни одна не на двух.'),
    },
    {
      text: l('Ako imaš pomoćnika, daj mu jednu celu stanicu.', 'If you have a helper, give them one whole station.', 'Если есть помощник, отдай ему одну станцию целиком.'),
      params: [l('ti: topla i pas', 'you: hot and pass', 'ты: горячая и раздача')],
      done: l('Pomoćnik zna šta radi bez pitanja.', 'The helper knows what to do without asking.', 'Помощник знает, что делать, без вопросов.'),
      why: l('"Pomozi mi" ne znači ništa. "Ti si na hladnoj, salata za 4 do 19:40" znači sve.', '"Help me" means nothing. "You are on cold, salad for 4 by 7:40" means everything.', '«Помоги мне» ничего не значит. «Ты на холодной, салат на 4 к 19:40» — значит всё.'),
    },
    {
      text: l('Dogovorite odgovor na svaki poziv: "Čujem!"', 'Agree on an answer to every call: "Heard!"', 'Договоритесь отвечать на каждую команду: «Слышу!»'),
      done: l('Svaka naredba dobije odgovor, pa niko ne pita dvaput.', 'Every call gets an answer, so nobody asks twice.', 'Каждая команда получает ответ, никто не спрашивает дважды.'),
      why: l('U restoranu se kaže "Oui, chef". Poenta nije poštovanje, nego potvrda da je poruka stigla.', 'In a restaurant it is "Oui, chef". The point is not respect but confirmation that the message landed.', 'В ресторане говорят «Oui, chef». Смысл не в уважении, а в подтверждении, что команда услышана.'),
    },
  ],
  mistake: {
    title: l('Svi rade sve, u istoj tački kuhinje.', 'Everyone does everything, in the same spot.', 'Все делают всё в одной точке кухни.'),
    fix: l(
      'Dvoje ljudi oko jednog šporeta se sudaraju, a hladna stanica stoji prazna. Jedna osoba, jedna stanica, jedan spisak zadataka.',
      'Two people around one stove collide while the cold station stands empty. One person, one station, one task list.',
      'Двое у одной плиты сталкиваются, а холодная станция пустует. Один человек, одна станция, один список задач.',
    ),
  },
  think: {
    question: l('Gde stoji desert dok se kuva glavno jelo?', 'Where does the dessert sit while the main cooks?', 'Где стоит десерт, пока готовится основное блюдо?'),
    options: [
      l('Na svojoj stanici, daleko od šporeta, ili u frižideru', 'At its own station, away from the stove, or in the fridge', 'На своей станции, вдали от плиты, или в холодильнике'),
      l('Na pasu, da bude spreman', 'On the pass, ready to go', 'На раздаче, чтобы был готов'),
      l('Pored šporeta, da se ne ohladi', 'By the stove so it does not cool', 'У плиты, чтобы не остыл'),
    ],
    answer: 0,
    explain: l(
      'Pas je za ono što ide sad. Desert zauzima prostor i greje se pored šporeta. Izlazi tek kad je glavno jelo pojedeno.',
      'The pass is for what goes now. A dessert takes up space and warms by the stove. It comes out once the main is eaten.',
      'Раздача — для того, что подаётся сейчас. Десерт занимает место и греется у плиты. Он выходит, когда основное съедено.',
    ),
  },
}

const backwards: Lesson = {
  id: '2.1.2',
  title: l('Radni plan unazad od serviranja', 'Planning backwards from service', 'План назад от подачи'),
  goal: l(
    'Napraviš radni plan sa satnicom, krenuvši od minuta kad prvo jelo ide na sto.',
    'You write a timed work plan, starting from the minute the first course goes to the table.',
    'Ты составляешь рабочий план по времени, начиная с минуты, когда первое блюдо идёт на стол.',
  ),
  minutes: 7,
  key: { value: l('15 min', '15 min', '15 мин'), label: l('rezerva', 'buffer', 'запас') },
  need: [
    { item: l('Recepti menija sa vremenima', 'The menu\'s recipes with timings', 'Рецепты меню со временем'), qty: l('3', '3', '3') },
    { item: l('Papir sa kolonom za vreme', 'Paper with a time column', 'Бумага с колонкой времени'), qty: l('1', '1', '1') },
    { item: l('Tajmer ili sat', 'Timer or clock', 'Таймер или часы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Recept kaže koliko traje, ali ne kaže kad da počneš. Plan unazad pretvara tri recepta u jedan raspored sa tačnim satima.',
    'A recipe tells you how long, not when to start. Planning backwards turns three recipes into one schedule with exact times.',
    'Рецепт говорит, сколько длится, но не когда начинать. План назад превращает три рецепта в одно расписание с точным временем.',
  ),
  steps: [
    {
      text: l('Napiši vreme kad predjelo ide na sto.', 'Write the time the starter goes to the table.', 'Запиши время, когда закуска идёт на стол.'),
      params: [l('npr. 20:00', 'e.g. 8 pm', 'напр. 20:00')],
      done: l('Na vrhu papira je jedan sat: vreme serviranja.', 'One time sits at the top of the page: service.', 'Вверху листа одно время: подача.'),
      why: l('Sve ostalo se računa od ove tačke, unazad.', 'Everything else is counted back from this point.', 'Всё остальное считается назад от этой точки.'),
    },
    {
      text: l('Za svako jelo napiši pripremu, kuvanje i odmor.', 'For each dish write prep, cooking and resting time.', 'Для каждого блюда запиши подготовку, готовку и отдых.'),
      params: [l('priprema + kuvanje + odmor', 'prep + cook + rest', 'подготовка + готовка + отдых')],
      done: l('Svako jelo ima tri broja u minutima.', 'Every dish has three numbers in minutes.', 'У каждого блюда три числа в минутах.'),
      why: l('Odmor se zaboravlja najčešće. Pečenje od 20 minuta odmora (13.3) je 20 minuta u planu.', 'Resting is forgotten most often. A roast with 20 minutes of rest (13.3) is 20 minutes in the plan.', 'Отдых забывают чаще всего. Жаркое с 20 минутами отдыха (13.3) — это 20 минут в плане.'),
    },
    {
      text: l('Od vremena serviranja oduzmi i upiši kad svako jelo počinje.', 'Subtract from service time and write when each dish starts.', 'Вычти из времени подачи и запиши, когда начинается каждое блюдо.'),
      params: [l('glavno: 20:25 − 1 h 40 = 18:45', 'main: 8:25 pm − 1 h 40 = 6:45 pm', 'основное: 20:25 − 1 ч 40 = 18:45')],
      done: l('Svako jelo ima sat početka.', 'Every dish has a start time.', 'У каждого блюда есть время начала.'),
      why: l('Glavno jelo ne služiš u 20:00, nego posle predjela. Računaj od trenutka kad ono ide na sto.', 'The main is not served at 8 but after the starter. Count from when it goes to the table.', 'Основное подают не в 20:00, а после закуски. Считай от момента, когда оно идёт на стол.'),
      drawing: 'backwardsPlan',
    },
    {
      text: l('Označi tačke koje se ne pomeraju: rerna, testo, odmor.', 'Mark the fixed points: oven, dough, resting.', 'Отметь неподвижные точки: духовка, тесто, отдых.'),
      done: l('Vidiš šta mora da počne baš tada, a šta može da klizi.', 'You can see what must start exactly then and what can slide.', 'Видно, что должно начаться ровно тогда, а что может сдвигаться.'),
      why: l('Testo koje fermentiše ne čeka. Seckanje luka može pet minuta ranije ili kasnije.', 'Proving dough does not wait. Chopping an onion can go five minutes either way.', 'Расстаивающееся тесто не ждёт. Нарезка лука может сдвинуться на пять минут.'),
    },
    {
      text: l('Dodaj rezervu od 15 minuta pre prvog serviranja.', 'Add a 15-minute buffer before the first course.', 'Добавь запас 15 минут перед первой подачей.'),
      params: [l('15 min', '15 min', '15 мин')],
      done: l('Plan završava pripremu u 19:45, ne u 20:00.', 'The plan ends prep at 7:45, not at 8.', 'План заканчивает подготовку в 19:45, а не в 20:00.'),
      why: l('Nešto uvek kasni: gost, rerna, pomoćnik. Rezerva je deo plana, ne luksuz.', 'Something is always late: a guest, the oven, a helper. The buffer is part of the plan, not a luxury.', 'Что-то всегда опаздывает: гость, духовка, помощник. Запас — часть плана, а не роскошь.'),
    },
  ],
  mistake: {
    title: l('Plan napravljen od jutra unapred, sa "pa onda".', 'A plan written forwards from the morning, with "and then".', 'План вперёд с утра, с «а потом».'),
    fix: l(
      'Plan unapred ne zna kad je kraj, pa se sve sabije u poslednjih sat vremena. Kreni od vremena serviranja i idi unazad, minut po minut.',
      'A forward plan does not know where it ends, so everything piles into the last hour. Start from service and work backwards, minute by minute.',
      'План вперёд не знает, где конец, и всё сжимается в последний час. Начни от подачи и иди назад, минута за минутой.',
    ),
  },
  think: {
    question: l('Pečenje traje 90 min, odmor 20, a glavno jelo služiš u 20:30. Kad ide u rernu?', 'The roast takes 90 min plus 20 rest, and the main is served at 8:30. When does it go in?', 'Жаркое 90 мин и 20 отдыха, основное подаётся в 20:30. Когда в духовку?'),
    options: [l('18:40', '6:40 pm', '18:40'), l('19:00', '7:00 pm', '19:00'), l('19:10', '7:10 pm', '19:10')],
    answer: 0,
    explain: l(
      '20:30 − 20 min odmora = 20:10 izlazi iz rerne. 20:10 − 90 min = 18:40 ulazi. Rernu uključi 15 minuta ranije.',
      '8:30 − 20 min rest = out at 8:10. 8:10 − 90 min = in at 6:40. Turn the oven on 15 minutes before that.',
      '20:30 − 20 мин отдыха = вынимаешь в 20:10. 20:10 − 90 мин = ставишь в 18:40. Включи духовку на 15 минут раньше.',
    ),
  },
}

const menuMep: Lesson = {
  id: '2.1.3',
  title: l('Mise en place za ceo meni', 'Mise en place for a whole menu', 'Мизанплас для всего меню'),
  goal: l(
    'Pripremiš 80% menija pre nego što gosti stignu, i to tako da ništa ne izgubi svežinu.',
    'You have 80% of the menu ready before the guests arrive, without anything losing freshness.',
    'Ты готовишь 80% меню до прихода гостей, и ничего не теряет свежести.',
  ),
  minutes: 6,
  key: { value: l('80%', '80%', '80%'), label: l('pre gostiju', 'before guests', 'до гостей') },
  need: [
    { item: l('Radni plan (2.1.2)', 'The work plan (2.1.2)', 'Рабочий план (2.1.2)'), qty: l('1', '1', '1') },
    { item: l('Posude i tacne', 'Containers and trays', 'Контейнеры и подносы'), qty: l('3 tacne', '3 trays', '3 подноса') },
    { item: l('Traka i flomaster', 'Tape and marker', 'Скотч и маркер'), qty: l('1', '1', '1') },
  ],
  why: l(
    'U restoranu se tokom servisa ne secka, nego slaže. Sve što može da se uradi ranije, uradi se ranije. Ostaje samo ono što mora u poslednjem minutu.',
    'In a restaurant nobody chops during service; they assemble. Whatever can be done earlier is done earlier. Only what must happen last-minute is left.',
    'В ресторане во время сервиса не режут, а собирают. Всё, что можно сделать раньше, делают раньше. Остаётся только то, что должно быть в последнюю минуту.',
  ),
  steps: [
    {
      text: l('Podeli svaki zadatak: dan ranije, isti dan, poslednji minut.', 'Sort every task: the day before, the same day, the last minute.', 'Раздели задачи: накануне, в тот же день, в последнюю минуту.'),
      params: [l('fond, desert: dan ranije', 'stock, dessert: day before', 'бульон, десерт: накануне')],
      done: l('Svaki zadatak ima jednu od tri oznake.', 'Every task has one of three labels.', 'У каждой задачи одна из трёх меток.'),
      why: l('Panakota, fond, braziranje i dresing su bolji sutradan. Prženje i sos sa puterom ne mogu da čekaju.', 'Panna cotta, stock, braises and dressings are better the next day. Frying and butter sauces cannot wait.', 'Панакота, бульон, тушёное и заправка лучше на следующий день. Жарка и масляные соусы ждать не могут.'),
    },
    {
      text: l('Jedna tacna po jelu: sve za to jelo na njoj.', 'One tray per course: everything for that course on it.', 'Один поднос на блюдо: всё для этого блюда на нём.'),
      params: [l('3 tacne', '3 trays', '3 подноса')],
      done: l('Za predjelo ne tražiš ništa van njegove tacne.', 'For the starter you need nothing beyond its tray.', 'Для закуски не нужно ничего вне её подноса.'),
      why: l('Mise en place iz 1.2, samo pomnožen sa tri. Tacna je jelo pre nego što postane jelo.', 'The mise en place from 1.2, multiplied by three. The tray is the dish before it becomes the dish.', 'Мизанплас из 1.2, умноженный на три. Поднос — это блюдо до того, как оно станет блюдом.'),
      drawing: 'courseTrays',
    },
    {
      text: l('Svaku posudu obeleži jelom i količinom.', 'Label every container with the course and the amount.', 'Подпиши каждый контейнер: блюдо и количество.'),
      params: [l('"glavno · sos · 4 porcije"', '"main · sauce · 4 portions"', '«основное · соус · 4 порции»')],
      done: l('Pomoćnik može da složi tanjir bez tebe.', 'A helper could plate without you.', 'Помощник может собрать тарелку без тебя.'),
    },
    {
      text: l('Hladno drži u frižideru do serviranja, toplo pripremi tek po planu.', 'Keep cold items in the fridge until service; make hot items on the plan\'s schedule.', 'Холодное держи в холодильнике до подачи, горячее готовь строго по плану.'),
      params: [l('hladno ≤ 5°C', 'cold ≤ 5°C', 'холодное ≤ 5°C'), l('toplo ≥ 63°C', 'hot ≥ 63°C', 'горячее ≥ 63°C')],
      done: l('Ništa ne stoji na sobnoj temperaturi duže od pola sata.', 'Nothing sits at room temperature for more than half an hour.', 'Ничто не стоит при комнатной температуре дольше получаса.'),
      why: l('Opasna zona iz 1.4 važi i za goste. Pripremljeno ne znači ostavljeno na stolu.', 'The danger zone from 1.4 applies to guests too. Prepared does not mean left on the counter.', 'Опасная зона из 1.4 касается и гостей. Подготовлено не значит оставлено на столе.'),
      drawing: 'dangerZone',
    },
    {
      text: l('Pola sata pre gostiju operi sve sudove i očisti stanice.', 'Half an hour before the guests, wash up and clear the stations.', 'За полчаса до гостей вымой посуду и очисти станции.'),
      params: [l('T − 30 min', 'T − 30 min', 'T − 30 мин')],
      done: l('Sudopera je prazna, a radne površine čiste.', 'The sink is empty and the counters are clear.', 'Раковина пуста, поверхности чистые.'),
      why: l('Servis počinje sa čistom kuhinjom. Prljav sud tokom servisa ti uzme mesto koje ti treba.', 'Service starts with a clean kitchen. A dirty pan during service takes space you need.', 'Сервис начинается с чистой кухни. Грязная посуда во время сервиса занимает нужное место.'),
    },
  ],
  mistake: {
    title: l('Salata prelivena i meso isečeno dva sata unapred.', 'Salad dressed and meat sliced two hours ahead.', 'Салат заправлен и мясо нарезано за два часа.'),
    fix: l(
      'Neke stvari se samo pripreme, a završe u poslednjem minutu: dresing u tegli, salata suva, meso u komadu. Pripremi delove, a ne gotovo jelo.',
      'Some things are only prepared and finished at the last minute: dressing in a jar, salad dry, meat in one piece. Prepare the parts, not the finished dish.',
      'Некоторые вещи только готовят заранее, а завершают в последнюю минуту: заправка в банке, салат сухой, мясо куском. Готовь части, а не готовое блюдо.',
    ),
  },
  think: {
    question: l('Šta od ovoga NE radiš dan ranije?', 'Which of these do you NOT do the day before?', 'Что из этого НЕ делают накануне?'),
    options: [
      l('Riba meunière', 'Fish meunière', 'Рыба мёньер'),
      l('Panakota', 'Panna cotta', 'Панакота'),
      l('Pileći fond', 'Chicken stock', 'Куриный бульон'),
    ],
    answer: 0,
    explain: l(
      'Riba se peče minut pre serviranja i ne podgreva se. Panakota mora da se stegne preko noći, a fond je bolji ohlađen i obran od masti.',
      'Fish is cooked a minute before service and never reheated. Panna cotta needs a night to set, and stock is better chilled and defatted.',
      'Рыбу жарят за минуту до подачи и не разогревают. Панакоте нужна ночь, чтобы застыть, а бульон лучше охлаждённый и без жира.',
    ),
  },
}

const oneStove: Lesson = {
  id: '2.1.4',
  title: l('Tri jela, jedan šporet', 'Three dishes, one stove', 'Три блюда, одна плита'),
  goal: l(
    'Rasporediš ringle i rernu tako da se tri jela ne bore za isto mesto u isto vreme.',
    'You allocate hobs and oven so three dishes never fight for the same spot at the same time.',
    'Ты распределяешь конфорки и духовку так, чтобы три блюда не боролись за одно место в одно время.',
  ),
  minutes: 6,
  key: { value: l('1', '1', '1'), label: l('rerna, jedna temperatura', 'oven, one temperature', 'духовка, одна температура') },
  need: [
    { item: l('Radni plan (2.1.2)', 'The work plan (2.1.2)', 'Рабочий план (2.1.2)'), qty: l('1', '1', '1') },
    { item: l('Skica šporeta na papiru', 'A sketch of your stove on paper', 'Схема плиты на бумаге'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kućni šporet ima četiri ringle i jednu rernu. Restoran ima dvanaest i tri. Meni mora da stane u ono što imaš, a to se planira, ne nadamo se.',
    'A home stove has four hobs and one oven. A restaurant has twelve and three. The menu must fit what you have, and that is planned, not hoped for.',
    'У домашней плиты четыре конфорки и одна духовка. В ресторане двенадцать и три. Меню должно уместиться в то, что есть, — это планируют, а не надеются.',
  ),
  steps: [
    {
      text: l('Nacrtaj šporet i upiši koje jelo koristi šta.', 'Draw the stove and write which dish uses what.', 'Нарисуй плиту и впиши, какое блюдо что использует.'),
      done: l('Svaka ringla i rerna imaju ime jela i vreme.', 'Every hob and the oven carry a dish name and a time.', 'У каждой конфорки и духовки есть название блюда и время.'),
      drawing: 'stoveMap',
    },
    {
      text: l('Rerni daj jednu temperaturu za ceo servis.', 'Give the oven one temperature for the whole service.', 'Дай духовке одну температуру на весь сервис.'),
      params: [l('npr. 180°C', 'e.g. 180°C', 'напр. 180°C')],
      done: l('Nijedno jelo ne traži da se rerna menja usred servisa.', 'No dish needs the oven changed mid-service.', 'Ни одно блюдо не требует менять духовку посреди сервиса.'),
      why: l('Rerni treba 10–15 minuta da promeni 50°C. To je ceo jedan sled.', 'An oven needs 10–15 minutes to change by 50°C. That is a whole course.', 'Духовке нужно 10–15 минут, чтобы изменить температуру на 50°C. Это целая перемена блюд.'),
    },
    {
      text: l('Desert napravi hladan, a predjelo hladno ili brzo.', 'Make the dessert cold, and the starter cold or quick.', 'Десерт сделай холодным, а закуску холодной или быстрой.'),
      params: [l('desert: 0 ringli', 'dessert: 0 hobs', 'десерт: 0 конфорок')],
      done: l('Tokom servisa samo glavno jelo traži toplotu.', 'During service only the main needs heat.', 'Во время сервиса тепло нужно только основному.'),
      why: l('Ovo je najvažnija odluka menija. Tri topla jela na kućnom šporetu su recept za haos.', 'This is the menu\'s most important decision. Three hot courses on a home stove are a recipe for chaos.', 'Это главное решение меню. Три горячих блюда на домашней плите — рецепт хаоса.'),
    },
    {
      text: l('Jednu ringlu ostavi slobodnu za sos i podgrevanje.', 'Keep one hob free for the sauce and reheating.', 'Оставь одну конфорку свободной для соуса и разогрева.'),
      done: l('U poslednjih 10 minuta imaš gde da staviš šerpicu.', 'In the last 10 minutes you have somewhere to put a pan.', 'В последние 10 минут есть куда поставить сотейник.'),
      why: l('Sos se završava u poslednjem minutu (9.8). Ako nema mesta, završava se loše.', 'The sauce is finished at the last minute (9.8). With no room, it is finished badly.', 'Соус заканчивают в последнюю минуту (9.8). Нет места — закончат плохо.'),
    },
    {
      text: l('Proveri plan: nijedna ringla nema dva jela u istom minutu.', 'Check the plan: no hob holds two dishes in the same minute.', 'Проверь план: ни на одной конфорке нет двух блюд в одну минуту.'),
      done: l('Plan i skica šporeta se slažu.', 'The plan and the stove sketch agree.', 'План и схема плиты совпадают.'),
    },
  ],
  mistake: {
    title: l('Meni od tri topla jela, svako na drugoj temperaturi rerne.', 'A menu of three hot courses, each at a different oven temperature.', 'Меню из трёх горячих блюд, каждое при своей температуре духовки.'),
    fix: l(
      'Rerna ne može biti na 220°C i 160°C u isto vreme. Promeni meni, ne rernu: jedno jelo iz rerne, jedno sa ringle, jedno hladno.',
      'The oven cannot be at 220°C and 160°C at once. Change the menu, not the oven: one dish from the oven, one from the hob, one cold.',
      'Духовка не может быть одновременно 220°C и 160°C. Меняй меню, а не духовку: одно блюдо из духовки, одно с плиты, одно холодное.',
    ),
  },
  think: {
    question: l('Koji meni najbolje staje na kućni šporet?', 'Which menu fits a home stove best?', 'Какое меню лучше всего подходит домашней плите?'),
    options: [
      l('Salata, pečena piletina, panakota', 'Salad, roast chicken, panna cotta', 'Салат, запечённая курица, панакота'),
      l('Supa, pečena piletina, sufle', 'Soup, roast chicken, soufflé', 'Суп, запечённая курица, суфле'),
      l('Pržene lignje, biftek, palačinke', 'Fried squid, steak, crêpes', 'Жареные кальмары, стейк, блины'),
    ],
    answer: 0,
    explain: l(
      'Jedno hladno, jedno iz rerne, jedno spremljeno dan ranije. Ostala dva menija traže rernu ili ringle za sva tri jela u poslednjem satu.',
      'One cold, one from the oven, one made the day before. The other two menus need the oven or the hobs for all three courses in the last hour.',
      'Одно холодное, одно из духовки, одно сделано накануне. Два других меню требуют духовку или конфорки для всех трёх блюд в последний час.',
    ),
  },
}

const service: Lesson = {
  id: '2.1.5',
  title: l('Služenje na vreme: toplo, hladno, odmor', 'Serving on time: hot, cold, resting', 'Подача вовремя: горячее, холодное, отдых'),
  goal: l(
    'Serviraš četiri tanjira istovremeno: topla jela topla, hladna hladna, meso odmoreno.',
    'You serve four plates at once: hot food hot, cold food cold, meat rested.',
    'Ты подаёшь четыре тарелки одновременно: горячее горячим, холодное холодным, мясо отдохнувшим.',
  ),
  minutes: 6,
  key: { value: l('2 min', '2 min', '2 мин'), label: l('za 4 tanjira', 'for 4 plates', 'на 4 тарелки') },
  need: [
    { item: l('Tanjiri za svako jelo', 'Plates for each course', 'Тарелки для каждого блюда'), qty: l('3 × 4', '3 × 4', '3 × 4') },
    { item: l('Rerna ili topla voda za tanjire', 'Oven or hot water for the plates', 'Духовка или горячая вода для тарелок'), qty: l('1', '1', '1') },
    { item: l('Krpa i kašike za probu', 'Cloth and tasting spoons', 'Полотенце и ложки для пробы'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Hrana se hladi na hladnom tanjiru za dva minuta. Ako slažeš tanjir po tanjir, prvi gost dobija mlako jelo. Servis je tajming u malom.',
    'Food cools on a cold plate in two minutes. Plate one at a time and the first guest gets a lukewarm dish. Service is timing in miniature.',
    'Еда остывает на холодной тарелке за две минуты. Будешь собирать по одной — первый гость получит тёплое, а не горячее. Сервис — это тайминг в миниатюре.',
  ),
  steps: [
    {
      text: l('Zagrej tanjire za toplo jelo, ohladi za hladno.', 'Warm the plates for the hot course, chill them for the cold one.', 'Нагрей тарелки для горячего, охлади для холодного.'),
      params: [l('topli: rerna 70°C, 10 min', 'warm: oven 70°C, 10 min', 'тёплые: духовка 70°C, 10 мин'), l('hladni: frižider 20 min', 'cold: fridge 20 min', 'холодные: холодильник 20 мин')],
      done: l('Topao tanjir se drži krpom, ali ne peče ruku kroz nju.', 'A warm plate is held with a cloth but does not burn through it.', 'Тёплую тарелку держат полотенцем, и она не обжигает сквозь него.'),
      drawing: 'warmPlates',
    },
    {
      text: l('Meso odmara dok gosti jedu predjelo.', 'The meat rests while the guests eat the starter.', 'Мясо отдыхает, пока гости едят закуску.'),
      params: [l('10–20 min', '10–20 min', '10–20 мин')],
      done: l('Kad se tanjiri predjela vrate, meso je spremno za sečenje.', 'When the starter plates come back, the meat is ready to slice.', 'Когда тарелки с закуской возвращаются, мясо готово к нарезке.'),
      why: l('Odmor iz 7.6 je skriveno vreme. Ugradi ga u predjelo i dobiješ ga besplatno.', 'The rest from 7.6 is hidden time. Fit it inside the starter and you get it for free.', 'Отдых из 7.6 — скрытое время. Встрой его в закуску, и получишь его бесплатно.'),
    },
    {
      text: l('Postavi četiri tanjira u red i slaži ih sve odjednom.', 'Line up four plates and build them all at once.', 'Поставь четыре тарелки в ряд и собирай все сразу.'),
      params: [l('prvo prilog, pa meso, pa sos', 'side first, then meat, then sauce', 'сначала гарнир, потом мясо, потом соус')],
      done: l('Sva četiri tanjira izgledaju isto.', 'All four plates look the same.', 'Все четыре тарелки выглядят одинаково.'),
      why: l('Isti korak na sva četiri tanjira je brži od četiri cela tanjira redom. Tako se radi na pasu.', 'The same step on all four plates is faster than four whole plates in turn. That is how a pass works.', 'Один шаг на всех четырёх тарелках быстрее, чем четыре целых по очереди. Так работают на раздаче.'),
      drawing: 'plateLine',
    },
    {
      text: l('Sos ide poslednji, tek kad je sve ostalo na tanjiru.', 'Sauce goes on last, once everything else is plated.', 'Соус идёт последним, когда всё остальное на тарелке.'),
      done: l('Sos sija, a prilog ispod njega nije razmekšao.', 'The sauce shines and the side beneath it has not gone soggy.', 'Соус блестит, а гарнир под ним не размок.'),
      why: l('Sos koji stoji na tanjiru dva minuta se stegne i izgubi sjaj.', 'A sauce left on a plate two minutes sets and loses its shine.', 'Соус, простоявший на тарелке две минуты, схватывается и теряет блеск.'),
    },
    {
      text: l('Obriši ivice, proveri tanjire i nosi sve odjednom.', 'Wipe the rims, check the plates and send them all together.', 'Протри края, проверь тарелки и неси все сразу.'),
      params: [l('2 min od prvog do poslednjeg', '2 min from first to last', '2 мин от первой до последней')],
      done: l('Sva četiri gosta dobijaju tanjir u istom minutu.', 'All four guests get their plate in the same minute.', 'Все четыре гостя получают тарелку в одну минуту.'),
      why: l('Mrlja na ivici je prva stvar koju gost vidi. Krpa sa kapljicom sirćeta skida masnoću bez traga.', 'A smear on the rim is the first thing a guest sees. A cloth with a drop of vinegar lifts grease without a mark.', 'Пятно на краю — первое, что видит гость. Полотенце с каплей уксуса снимает жир без следа.'),
    },
  ],
  mistake: {
    title: l('Toplo jelo na tanjiru pravo iz ormarića.', 'A hot course on a plate straight from the cupboard.', 'Горячее блюдо на тарелке прямо из шкафа.'),
    fix: l(
      'Hladan porcelan izvuče toplotu iz jela za par minuta, a sos se stegne pre nego što stigne do stola. Tanjire za toplo jelo stavi u rernu na 70°C dok se meso odmara.',
      'Cold china draws the heat out of food in a couple of minutes, and the sauce sets before it reaches the table. Put the plates for the hot course in a 70°C oven while the meat rests.',
      'Холодный фарфор вытягивает тепло из еды за пару минут, и соус схватывается до стола. Поставь тарелки для горячего в духовку на 70°C, пока мясо отдыхает.',
    ),
  },
  think: {
    question: l('Gosti kasne 20 minuta, a meso je gotovo. Šta radiš?', 'The guests are 20 minutes late and the meat is done. What do you do?', 'Гости опаздывают на 20 минут, а мясо готово. Что делаешь?'),
    options: [
      l('Izvadiš ga i pustiš da se odmori duže, sečeš kad stignu', 'Take it out and let it rest longer; slice when they arrive', 'Вынимаешь и даёшь отдохнуть дольше, режешь, когда придут'),
      l('Ostaviš ga u rerni na istoj temperaturi', 'Leave it in the oven at the same temperature', 'Оставляешь в духовке при той же температуре'),
      l('Isečeš ga odmah da bude spremno', 'Slice it now so it is ready', 'Сразу нарезаешь, чтобы было готово'),
    ],
    answer: 0,
    explain: l(
      'Duži odmor ne šteti, a pečenje i sečenje štete. Celo meso pokriveno ostaje toplo pola sata. Isečeno se suši za par minuta.',
      'A longer rest does no harm; more cooking and early slicing do. A whole covered piece stays warm for half an hour. Sliced meat dries in minutes.',
      'Долгий отдых не вредит, вредят дожаривание и ранняя нарезка. Целый укрытый кусок остаётся тёплым полчаса. Нарезанный сохнет за минуты.',
    ),
  },
}

export const timingLessons: Lesson[] = [brigade, backwards, menuMep, oneStove, service]
