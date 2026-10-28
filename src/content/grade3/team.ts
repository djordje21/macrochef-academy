import { l, type Lesson } from '../types'

// Grade 3 · Module 12 · Leading the team. A chef cooks through other people: who does what in the brigade,
// a rota that is fair and legal, a new cook trained in a fixed order, a service run on short calls,
// and a culture where standards do the work that shouting used to do.

const brigade: Lesson = {
  id: '3.12.1',
  title: l('Brigada u restoranu', 'The restaurant brigade', 'Бригада в ресторане'),
  goal: l(
    'Rasporediš poslove kuhinje u stanice i za svakog kuvara odrediš šta radi i kome odgovara.',
    'You divide the kitchen\'s work into stations and decide, for every cook, what they do and who they answer to.',
    'Ты распределяешь работу кухни по станциям и для каждого повара определяешь, что он делает и кому подчиняется.',
  ),
  minutes: 6,
  key: { value: l('1', '1', '1'), label: l('nadređeni za svakog kuvara', 'boss for every cook', 'руководитель у каждого повара') },
  need: [
    { item: l('Meni restorana', 'The restaurant menu', 'Меню ресторана'), qty: l('1', '1', '1') },
    { item: l('Spisak ljudi u kuhinji', 'A list of the kitchen staff', 'Список сотрудников кухни'), qty: l('1', '1', '1') },
    { item: l('Papir za šemu', 'Paper for a chart', 'Бумага для схемы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Brigada je sistem koji je Escoffier postavio pre više od sto godina, i i dalje radi: svako zna svoj posao, i niko ne radi tuđi.',
    'The brigade is a system Escoffier set up more than a hundred years ago, and it still works: everyone knows their job and nobody does someone else\'s.',
    'Бригада — система, которую Эскофье выстроил больше ста лет назад, и она до сих пор работает: каждый знает своё дело и не делает чужое.',
  ),
  steps: [
    {
      text: l('Nabroj sve poslove u kuhinji, ne ljude.', 'List every job in the kitchen, not the people.', 'Перечисли все работы на кухне, а не людей.'),
      params: [l('sosovi · riba · meso · hladna kuhinja · prilozi · poslastice · pranje', 'sauces · fish · meat · cold kitchen · sides · pastry · washing up', 'соусы · рыба · мясо · холодный цех · гарниры · кондитерка · мойка')],
      done: l('Imaš spisak svih poslova koje meni zahteva.', 'You have a list of every job the menu demands.', 'У тебя есть список всех работ, которых требует меню.'),
      why: l('Kad kreneš od ljudi, praviš brigadu oko onoga ko je tu. Kad kreneš od posla, praviš brigadu koja radi.', 'Start from the people and you build a brigade around whoever is there. Start from the work and you build one that functions.', 'Начнёшь с людей — построишь бригаду вокруг тех, кто есть. Начнёшь с работы — построишь работающую.'),
    },
    {
      text: l('Grupiši poslove u stanice.', 'Group the jobs into stations.', 'Сгруппируй работы по станциям.'),
      done: l('Svaki posao pripada tačno jednoj stanici.', 'Each job belongs to exactly one station.', 'Каждая работа принадлежит ровно одной станции.'),
      why: l('U maloj kuhinji jedna stanica radi i ribu i meso. Ime nije bitno, bitno je da je jasno.', 'In a small kitchen one station does both fish and meat. The name does not matter; clarity does.', 'На маленькой кухне одна станция делает и рыбу, и мясо. Название неважно, важна ясность.'),
      drawing: 'stations',
    },
    {
      text: l('Svakoj stanici odredi šefa stanice i pomoćnika.', 'Give every station a station chef and an assistant.', 'Назначь каждой станции шефа станции и помощника.'),
      params: [l('chef de partie + commis', 'chef de partie + commis', 'шеф де парти + коми')],
      done: l('Za svaku stanicu se zna ko je odgovoran.', 'For every station you know who is responsible.', 'Для каждой станции известно, кто отвечает.'),
      why: l('Šef stanice odgovara za mise en place, kvalitet i čistoću. Commis uči od njega i radi pod njim.', 'The station chef answers for the mise en place, quality and cleanliness. The commis learns from them and works under them.', 'Шеф станции отвечает за мизанплас, качество и чистоту. Коми учится у него и работает под его началом.'),
    },
    {
      text: l('Odredi sous chefa kao desnu ruku.', 'Name a sous chef as your right hand.', 'Назначь су-шефа своей правой рукой.'),
      done: l('Neko vodi pass i kuhinju kad šef nije tu.', 'Someone runs the pass and the kitchen when the chef is out.', 'Кто-то ведёт раздачу и кухню, когда шефа нет.'),
      why: l('Kuhinja koja ne radi bez šefa nije dobro vođena, nego zavisna.', 'A kitchen that cannot run without the chef is not well led; it is dependent.', 'Кухня, которая не работает без шефа, не хорошо управляется, а зависима.'),
    },
    {
      text: l('Nacrtaj šemu: ko kome odgovara, jednom linijom.', 'Draw the chart: who answers to whom, in one line each.', 'Нарисуй схему: кто кому подчиняется, одной линией.'),
      done: l('Svaki kuvar ima tačno jednog nadređenog.', 'Every cook has exactly one boss.', 'У каждого повара ровно один руководитель.'),
      why: l('Dva šefa sa dva različita naređenja su najbrži put do greške i do svađe.', 'Two bosses with two different orders is the fastest route to a mistake and an argument.', 'Два начальника с двумя разными указаниями — быстрейший путь к ошибке и ссоре.'),
    },
  ],
  mistake: {
    title: l('Svi rade sve, „jer smo mali tim“.', 'Everyone does everything, "because we are a small team".', 'Все делают всё, «потому что мы маленькая команда».'),
    fix: l(
      'Kad su svi odgovorni za sve, niko nije odgovoran ni za šta. I u timu od tri čoveka svaka stanica ima svoje ime, a svaki posao svog vlasnika.',
      'When everyone is responsible for everything, nobody is responsible for anything. Even in a team of three, every station has a name and every job an owner.',
      'Когда все отвечают за всё, никто ни за что не отвечает. Даже в команде из трёх у каждой станции есть имя, а у каждой работы — владелец.',
    ),
  },
  think: {
    question: l('Ko vodi kuhinju kad šef nije na smeni?', 'Who runs the kitchen when the chef is off?', 'Кто руководит кухней, когда шефа нет на смене?'),
    options: [
      l('Sous chef', 'The sous chef', 'Су-шеф'),
      l('Najstariji kuvar', 'The oldest cook', 'Самый старший повар'),
      l('Svako za sebe', 'Everyone for themselves', 'Каждый сам по себе'),
    ],
    answer: 0,
    explain: l(
      'Sous chef je zamenik šefa, i to treba da zna cela kuhinja pre prvog dana kad šef nije tu.',
      'The sous chef is the chef\'s deputy, and the whole kitchen should know that before the first day the chef is away.',
      'Су-шеф — заместитель шефа, и вся кухня должна знать это до первого дня отсутствия шефа.',
    ),
  },
}

const rota: Lesson = {
  id: '3.12.2',
  title: l('Raspored smena', 'The rota', 'График смен'),
  goal: l(
    'Napraviš raspored za dve nedelje po prometu, uz zakonski odmor i fer raspodelu vikenda.',
    'You build a two-week rota around the trade, with legal rest and a fair share of weekends.',
    'Ты составляешь график на две недели по загрузке, с законным отдыхом и честным распределением выходных.',
  ),
  minutes: 6,
  key: { value: l('2 nedelje', '2 weeks', '2 недели'), label: l('unapred', 'ahead', 'заранее') },
  need: [
    { item: l('Rezervacije i promet od prošle godine', 'Bookings and last year\'s trade', 'Брони и загрузка прошлого года'), qty: l('1', '1', '1') },
    { item: l('Spisak ljudi i njihovih stanica', 'The staff list and their stations', 'Список людей и их станций'), qty: l('1', '1', '1') },
    { item: l('Tabela rasporeda', 'A rota spreadsheet', 'Таблица графика'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Raspored je mesto gde se sreću novac i ljudi. Previše ljudi na smeni troši platu, premalo troši ljude.',
    'The rota is where money and people meet. Too many on shift wastes wages; too few wears out the people.',
    'График — место, где встречаются деньги и люди. Слишком много людей на смене тратит зарплаты, слишком мало — изматывает людей.',
  ),
  steps: [
    {
      text: l('Kreni od očekivanog prometa za svaki dan.', 'Start from the expected trade for each day.', 'Начни с ожидаемой загрузки на каждый день.'),
      params: [l('rezervacije + isti period prošle godine', 'bookings + the same period last year', 'брони + тот же период прошлого года')],
      done: l('Za svaki dan imaš procenu broja gostiju.', 'You have an estimate of covers for each day.', 'На каждый день есть оценка числа гостей.'),
      why: l('Raspored po navici daje isti broj ljudi u utorak i u subotu. Promet nije isti.', 'A rota by habit puts the same number of people on Tuesday as on Saturday. The trade is not the same.', 'График по привычке ставит одинаково людей во вторник и в субботу. Загрузка разная.'),
    },
    {
      text: l('Odredi koliko ljudi treba po stanici i po satu.', 'Work out how many people each station needs, hour by hour.', 'Определи, сколько людей нужно каждой станции по часам.'),
      done: l('Znaš kada je kuhinji potrebno najviše ruku.', 'You know when the kitchen needs the most hands.', 'Ты знаешь, когда кухне нужно больше всего рук.'),
      why: l('Pripremi treba više ljudi ujutru, servisu uveče. Smene ne moraju da počinju u isto vreme.', 'Prep needs more people in the morning, service in the evening. Shifts do not all have to start at the same time.', 'Заготовке нужно больше людей утром, сервису — вечером. Смены не обязаны начинаться одновременно.'),
    },
    {
      text: l('Poštuj odmor između smena i u nedelji.', 'Respect rest between shifts and in the week.', 'Соблюдай отдых между сменами и в неделе.'),
      params: [l('12 h između smena', '12 h between shifts', '12 ч между сменами'), l('24 h nedeljno bez prekida', '24 h unbroken each week', '24 ч непрерывно в неделю')],
      done: l('Niko nema „zatvaranje, pa otvaranje“ sa manje od 12 sati između.', 'Nobody has a "close then open" with less than 12 hours between.', 'Ни у кого нет «закрытие — открытие» с перерывом меньше 12 часов.'),
      why: l('To je zakonski minimum u Srbiji. Umoran kuvar se seče, peče i greši.', 'That is the legal minimum in Serbia. A tired cook cuts, burns and makes mistakes.', 'Это законный минимум в Сербии. Уставший повар режется, обжигается и ошибается.'),
    },
    {
      text: l('Objavi raspored dve nedelje unapred i rotiraj vikende.', 'Publish the rota two weeks ahead and rotate the weekends.', 'Публикуй график за две недели и чередуй выходные.'),
      done: l('Svako zna kada radi, a slobodni vikendi su raspodeljeni pošteno.', 'Everyone knows when they work, and free weekends are shared fairly.', 'Каждый знает, когда работает, а свободные выходные распределены честно.'),
      why: l('Ljudi imaju život van kuhinje. Raspored koji se zna unapred zadržava dobre kuvare duže od povišice.', 'People have lives outside the kitchen. A rota known in advance keeps good cooks longer than a pay rise.', 'У людей есть жизнь вне кухни. График, известный заранее, удерживает хороших поваров дольше, чем прибавка.'),
      drawing: 'weekGrid',
    },
    {
      text: l('Preklopi smene za predaju.', 'Overlap the shifts for the handover.', 'Перекрывай смены для передачи.'),
      params: [l('30 min', '30 min', '30 мин')],
      done: l('Odlazeća smena predaje stanje stanice i prep listu dolazećoj.', 'The outgoing shift hands over the state of the station and the prep list to the incoming one.', 'Уходящая смена передаёт состояние станции и преп-лист приходящей.'),
      why: l('Bez predaje nova smena ne zna šta fali i ponavlja ono što je već urađeno.', 'Without a handover the new shift does not know what is missing and redoes what is already done.', 'Без передачи новая смена не знает, чего не хватает, и повторяет уже сделанное.'),
    },
  ],
  mistake: {
    title: l('Raspored objavljen u nedelju uveče za ponedeljak.', 'The rota posted on Sunday evening for Monday.', 'График вывешен в воскресенье вечером на понедельник.'),
    fix: l(
      'Ljudi ne mogu da planiraju ništa, i najbolji odu tamo gde mogu. Dve nedelje unapred, a izmene samo kad su neophodne i uz dogovor.',
      'People cannot plan anything, and the best ones leave for somewhere they can. Two weeks ahead, with changes only when necessary and by agreement.',
      'Люди не могут ничего планировать, и лучшие уходят туда, где могут. За две недели, а изменения — только при необходимости и по договорённости.',
    ),
  },
  think: {
    question: l('Kuvar zatvara u ponoć. Kada najranije sme da otvara?', 'A cook closes at midnight. What is the earliest they can open?', 'Повар закрывает в полночь. Когда самое раннее он может открывать?'),
    options: [
      l('U podne', 'At noon', 'В полдень'),
      l('U 7 ujutru', 'At 7 am', 'В 7 утра'),
      l('U 9 ujutru', 'At 9 am', 'В 9 утра'),
    ],
    answer: 0,
    explain: l(
      'Dvanaest sati odmora između smena je zakonski minimum. Od ponoći to je podne, i to bez puta do kuće i nazad.',
      'Twelve hours of rest between shifts is the legal minimum. From midnight that is noon, and that is before travelling home and back.',
      'Двенадцать часов отдыха между сменами — законный минимум. От полуночи это полдень, и это без дороги домой и обратно.',
    ),
  },
}

const training: Lesson = {
  id: '3.12.3',
  title: l('Obuka novog kuvara', 'Training a new cook', 'Обучение нового повара'),
  goal: l(
    'Uvedeš novog kuvara u kuhinju po planu, jednu stanicu po jednu, u četiri koraka.',
    'You bring a new cook into the kitchen by plan, one station at a time, in four steps.',
    'Ты вводишь нового повара в кухню по плану, станция за станцией, в четыре шага.',
  ),
  minutes: 6,
  key: { value: l('4', '4', '4'), label: l('koraka: pokaži, zajedno, sam, provera', 'steps: show, together, alone, check', 'шага: показать, вместе, сам, проверка') },
  need: [
    { item: l('Recept-kartice i liste stanice', 'The station\'s recipe cards and checklists', 'Техкарты и чек-листы станции'), qty: l('sve', 'all', 'все') },
    { item: l('Iskusan kuvar kao mentor', 'An experienced cook as mentor', 'Опытный повар-наставник'), qty: l('1', '1', '1') },
    { item: l('Plan za prve dve nedelje', 'A plan for the first two weeks', 'План на первые две недели'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Novi kuvar bačen na servis prvog dana ili ode posle nedelju dana, ili nauči loše navike koje se posle teško ispravljaju. Plan štedi oba.',
    'A new cook thrown onto service on day one either leaves within a week or learns bad habits that are hard to undo. A plan saves both.',
    'Новый повар, брошенный на сервис в первый день, либо уходит через неделю, либо учится плохим привычкам, которые потом трудно исправить. План спасает от обоих.',
  ),
  steps: [
    {
      text: l('Prvi dan: kuhinja, bezbednost i gde je šta.', 'Day one: the kitchen, safety and where everything is.', 'Первый день: кухня, безопасность и где что лежит.'),
      params: [l('HACCP osnove · protivpožarni aparat · prva pomoć', 'HACCP basics · fire extinguisher · first aid', 'основы ХАССП · огнетушитель · аптечка')],
      done: l('Novi kuvar zna gde su izlazi, aparat, prva pomoć i liste.', 'The new cook knows where the exits, extinguisher, first aid kit and logs are.', 'Новый повар знает, где выходы, огнетушитель, аптечка и журналы.'),
      why: l('Prvi dan nije za brzinu, nego za orijentaciju. Ko zna gde je šta, ne smeta ostalima.', 'Day one is for orientation, not speed. Someone who knows where things are does not get in the others\' way.', 'Первый день — для ориентации, а не скорости. Кто знает, где что, не мешает остальным.'),
    },
    {
      text: l('Uči jednu stanicu, ne celu kuhinju.', 'Learn one station, not the whole kitchen.', 'Осваивай одну станцию, а не всю кухню.'),
      done: l('Novi kuvar ima jednu stanicu i jednog mentora.', 'The new cook has one station and one mentor.', 'У нового повара одна станция и один наставник.'),
      why: l('Cela kuhinja odjednom je previše informacija. Jedna stanica, savladana do kraja, gradi samopouzdanje.', 'The whole kitchen at once is too much information. One station mastered fully builds confidence.', 'Вся кухня сразу — слишком много информации. Одна станция, освоенная до конца, даёт уверенность.'),
    },
    {
      text: l('Svaki zadatak u četiri koraka: pokaži, uradite zajedno, uradi sam, proveri.', 'Each task in four steps: show, do it together, do it alone, check.', 'Каждая задача в четыре шага: показать, сделать вместе, сделать самому, проверить.'),
      done: l('Zadatak je proveren pre nego što ga kuvar radi sam na servisu.', 'The task is checked before the cook does it alone on service.', 'Задача проверена до того, как повар выполнит её сам на сервисе.'),
      why: l('Gledanje nije učenje. Tek kad uradi sam i neko proveri, zna se da je naučio.', 'Watching is not learning. Only when they do it alone and someone checks do you know it is learned.', 'Наблюдение — не обучение. Только когда сделал сам и кто-то проверил, ясно, что научился.'),
    },
    {
      text: l('Recept-kartice i liste su udžbenik.', 'The recipe cards and checklists are the textbook.', 'Техкарты и чек-листы — учебник.'),
      done: l('Novi kuvar radi po karticama, ne po sećanju mentora.', 'The new cook works from the cards, not from the mentor\'s memory.', 'Новый повар работает по картам, а не по памяти наставника.'),
      why: l('Mentor zaboravi detalj ili ga objasni drugačije svaki put. Kartica je ista svaki put (3.7.5).', 'A mentor forgets a detail or explains it differently each time. The card is the same every time (3.7.5).', 'Наставник забывает детали или объясняет по-разному. Карта одинакова всегда (3.7.5).'),
    },
    {
      text: l('Na kraju svake smene kratak razgovor, prve dve nedelje.', 'A short talk at the end of every shift, for the first two weeks.', 'Короткий разговор в конце каждой смены, первые две недели.'),
      params: [l('5 min', '5 min', '5 мин')],
      done: l('Novi kuvar zna šta je dobro uradio i šta da popravi sutra.', 'The new cook knows what went well and what to improve tomorrow.', 'Новый повар знает, что сделал хорошо и что улучшить завтра.'),
      why: l('Pet minuta dnevno ispravi grešku dok je mala. Bez razgovora, greška postane navika.', 'Five minutes a day corrects a mistake while it is small. Without the talk, the mistake becomes a habit.', 'Пять минут в день исправляют ошибку, пока она мала. Без разговора ошибка становится привычкой.'),
    },
  ],
  mistake: {
    title: l('Novi kuvar prvog dana na petak uveče, „da vidi kako je“.', 'A new cook put on a Friday night service on day one, "to see what it is like".', 'Новый повар в первый день на пятничном вечернем сервисе, «чтобы посмотреть, как это».'),
    fix: l(
      'Vidi samo haos, uči od straha i smeta celoj stanici. Prvi servis ide posle nekoliko dana pripreme, na mirnijem danu, uz mentora pored sebe.',
      'They see only chaos, learn from fear and get in the whole station\'s way. The first service comes after a few days of prep, on a quieter day, with a mentor beside them.',
      'Он видит только хаос, учится через страх и мешает всей станции. Первый сервис — после нескольких дней заготовки, в спокойный день, с наставником рядом.',
    ),
  },
  think: {
    question: l('Kada novi kuvar radi zadatak sam na servisu?', 'When does a new cook do a task alone on service?', 'Когда новый повар выполняет задачу сам на сервисе?'),
    options: [
      l('Kad ga je uradio sam i neko je proverio', 'Once they have done it alone and someone has checked', 'Когда сделал сам и кто-то проверил'),
      l('Čim ga je video jednom', 'As soon as they have seen it once', 'Как только увидел один раз'),
      l('Posle mesec dana, bez obzira', 'After a month, regardless', 'Через месяц в любом случае'),
    ],
    answer: 0,
    explain: l(
      'Provera je poslednji korak obuke. Bez nje ne znaš da li je naučio, a gost to sazna umesto tebe.',
      'The check is the last step of training. Without it you do not know whether they have learned, and the guest finds out instead of you.',
      'Проверка — последний шаг обучения. Без неё не знаешь, научился ли он, и узнаёт это гость вместо тебя.',
    ),
  },
}

const calls: Lesson = {
  id: '3.12.4',
  title: l('Komunikacija na servisu', 'Communication on service', 'Общение на сервисе'),
  goal: l(
    'Vodiš servis kratkim, jasnim pozivima na koje svaka stanica odgovara, od bona do pass-a.',
    'You run service with short, clear calls that every station answers, from ticket to pass.',
    'Ты ведёшь сервис короткими ясными командами, на которые отвечает каждая станция, от заказа до раздачи.',
  ),
  minutes: 5,
  key: { value: l('„Čujem“', '"Heard"', '«Слышу»'), label: l('odgovor na svaki poziv', 'the answer to every call', 'ответ на каждую команду') },
  need: [
    { item: l('Bonovi i pass', 'Tickets and the pass', 'Заказы и раздача'), qty: l('1', '1', '1') },
    { item: l('Dogovorene reči za kuhinju', 'Agreed words for the kitchen', 'Договорённые слова для кухни'), qty: l('1 lista', '1 list', '1 список') },
    { item: l('Mirni glas', 'A calm voice', 'Спокойный голос'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Na servisu je bučno, vruće i brzo. Kratak poziv koji svi razumeju isto je jedini način da deset ljudi radi kao jedan.',
    'Service is loud, hot and fast. A short call that everyone understands the same way is the only way ten people work as one.',
    'На сервисе шумно, жарко и быстро. Короткая команда, понятная всем одинаково, — единственный способ, чтобы десять человек работали как один.',
  ),
  steps: [
    {
      text: l('Šef čita bon jasno: sto, jela i posebni zahtevi.', 'The chef reads the ticket clearly: table, dishes and special requests.', 'Шеф читает заказ чётко: стол, блюда и особые пожелания.'),
      params: [l('„Sto 7: dva brancina, jedan rib-eye srednje pečen“', '"Table 7: two sea bass, one rib-eye medium"', '«Стол 7: два сибаса, один рибай средней прожарки»')],
      done: l('Svaka stanica je čula šta je njeno.', 'Every station has heard what is theirs.', 'Каждая станция услышала, что её.'),
      why: l('Isti red reči svaki put: sto, broj, jelo, zahtev. Uho se navikne i ne propušta.', 'The same word order every time: table, number, dish, request. The ear gets used to it and misses nothing.', 'Тот же порядок слов каждый раз: стол, число, блюдо, пожелание. Ухо привыкает и ничего не пропускает.'),
    },
    {
      text: l('Svaka stanica odgovara: „Čujem!“', 'Every station answers: "Heard!"', 'Каждая станция отвечает: «Слышу!»'),
      done: l('Šef je čuo odgovor sa svake stanice kojoj se obratio.', 'The chef has heard an answer from every station they called.', 'Шеф услышал ответ от каждой станции, к которой обратился.'),
      why: l('Poziv bez odgovora je poruka bačena u buku. Odgovor zatvara krug.', 'A call without an answer is a message thrown into the noise. The answer closes the loop.', 'Команда без ответа — сообщение, брошенное в шум. Ответ замыкает круг.'),
    },
    {
      text: l('Kad treba da krene glavno jelo, šef kaže: „Vatra, sto 7!“', 'When the main course should start, the chef calls: "Fire table 7!"', 'Когда пора начинать основное, шеф говорит: «Огонь, стол 7!»'),
      done: l('Stanice počinju glavno jelo za taj sto u istom trenutku.', 'The stations start the main course for that table at the same moment.', 'Станции начинают основное для этого стола в один момент.'),
      why: l('Bon kaže šta, „vatra“ kaže kada. Bez toga riba i meso za isti sto ne stignu zajedno (2.1.5).', 'The ticket says what; "fire" says when. Without it, the fish and the meat for one table do not arrive together (2.1.5).', 'Заказ говорит что, «огонь» — когда. Без этого рыба и мясо для одного стола не придут вместе (2.1.5).'),
    },
    {
      text: l('Javi vreme do gotovog: „Brancin, dva minuta!“', 'Call the time to ready: "Sea bass, two minutes!"', 'Сообщай время до готовности: «Сибас, две минуты!»'),
      done: l('Šef zna kada će svaki deo stola biti spreman.', 'The chef knows when every part of the table will be ready.', 'Шеф знает, когда будет готова каждая часть стола.'),
      why: l('Šef na pass-u slaže tanjire iz više stanica. Bez vremena čeka ili žuri na slepo.', 'The chef on the pass assembles plates from several stations. Without times, they wait or rush blind.', 'Шеф на раздаче собирает тарелки с нескольких станций. Без времени он ждёт или спешит вслепую.'),
    },
    {
      text: l('Najavi kretanje: „Iza tebe!“, „Vruće!“, „Nož!“', 'Call your movement: "Behind!", "Hot!", "Knife!"', 'Предупреждай о движении: «За тобой!», «Горячо!», «Нож!»'),
      done: l('Niko se ne okreće naglo u nekoga sa vrelim tiganjem ili nožem.', 'Nobody turns suddenly into someone carrying a hot pan or a knife.', 'Никто резко не разворачивается в человека с горячей сковородой или ножом.'),
      why: l('Većina povreda u kuhinji nastaje u sudaru dva čoveka u pokretu. Jedna reč ga sprečava.', 'Most kitchen injuries happen when two moving people collide. One word prevents it.', 'Большинство травм на кухне — столкновения двух людей в движении. Одно слово это предотвращает.'),
    },
  ],
  mistake: {
    title: l('Šef viče, a niko ne odgovara.', 'The chef shouts and nobody answers.', 'Шеф кричит, а никто не отвечает.'),
    fix: l(
      'Glasnije nije jasnije. Miran poziv, uvek istim redom, i pravilo da svaka stanica odgovori „Čujem“. Tišina posle poziva znači da poruka nije stigla.',
      'Louder is not clearer. A calm call, always in the same order, and the rule that every station answers "Heard". Silence after a call means the message did not arrive.',
      'Громче — не значит яснее. Спокойная команда, всегда в одном порядке, и правило: каждая станция отвечает «Слышу». Тишина после команды значит, что сообщение не дошло.',
    ),
  },
  think: {
    question: l('Šta znači „Vatra, sto 7“?', 'What does "Fire table 7" mean?', 'Что значит «Огонь, стол 7»?'),
    options: [
      l('Počni glavno jelo za sto 7 sada', 'Start table 7\'s main course now', 'Начинай основное для стола 7 сейчас'),
      l('Na stolu 7 je problem', 'There is a problem at table 7', 'На столе 7 проблема'),
      l('Sto 7 je završio', 'Table 7 has finished', 'Стол 7 закончил'),
    ],
    answer: 0,
    explain: l(
      'Bon se čita kad stigne, ali glavno jelo kreće tek kad gost završi predjelo. „Vatra“ je znak da je taj trenutak došao.',
      'A ticket is read when it arrives, but the main course starts only when the guest finishes the starter. "Fire" is the signal that the moment has come.',
      'Заказ читают, когда он приходит, но основное начинают только когда гость доел закуску. «Огонь» — сигнал, что момент настал.',
    ),
  },
}

const culture: Lesson = {
  id: '3.12.5',
  title: l('Kultura kuhinje i pritisak', 'Kitchen culture and pressure', 'Культура кухни и давление'),
  goal: l(
    'Gradiš kuhinju u kojoj standardi rade umesto vikanja, greške se ispravljaju mirno, a ljudi ostaju.',
    'You build a kitchen where standards do the work instead of shouting, mistakes are corrected calmly and people stay.',
    'Ты строишь кухню, где вместо крика работают стандарты, ошибки исправляют спокойно, а люди остаются.',
  ),
  minutes: 6,
  key: { value: l('0', '0', '0'), label: l('vikanja kao metode', 'shouting as a method', 'крика как метода') },
  need: [
    { item: l('Zapisani standardi: kartice, liste, fotografije tanjira', 'Written standards: cards, checklists, plate photos', 'Записанные стандарты: карты, чек-листы, фото тарелок'), qty: l('sve', 'all', 'все') },
    { item: l('Vreme za porodični obrok', 'Time for staff meal', 'Время на обед персонала'), qty: l('15–20 min', '15–20 min', '15–20 мин') },
    { item: l('Pet minuta posle servisa', 'Five minutes after service', 'Пять минут после сервиса'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kuhinja je pod pritiskom po prirodi posla. Šef odlučuje da li taj pritisak pravi tim ili ga razbija. Dobri kuvari biraju gde rade.',
    'A kitchen is under pressure by the nature of the work. The chef decides whether that pressure builds the team or breaks it. Good cooks choose where they work.',
    'Кухня по природе работы под давлением. Шеф решает, сплачивает это давление команду или разрушает. Хорошие повара выбирают, где работать.',
  ),
  steps: [
    {
      text: l('Zapiši standarde i okači ih kod stanica.', 'Write the standards down and hang them by the stations.', 'Запиши стандарты и повесь у станций.'),
      done: l('Svaki kuvar može da proveri sam da li je tanjir dobar, bez pitanja šefa.', 'Every cook can check for themselves whether a plate is right, without asking the chef.', 'Каждый повар может сам проверить, хороша ли тарелка, не спрашивая шефа.'),
      why: l('Kad je standard na zidu, ljudi rade po standardu, a ne po raspoloženju šefa.', 'When the standard is on the wall, people work to the standard, not to the chef\'s mood.', 'Когда стандарт на стене, люди работают по стандарту, а не по настроению шефа.'),
      drawing: 'photoAngle',
    },
    {
      text: l('Grešku ispravi odmah, mirno i nasamo.', 'Correct a mistake at once, calmly and in private.', 'Исправляй ошибку сразу, спокойно и наедине.'),
      done: l('Kuvar zna šta je pogrešio i kako se radi, a ostali nisu morali da gledaju.', 'The cook knows what went wrong and how it is done, and the others did not have to watch.', 'Повар знает, в чём ошибся и как надо, а остальным не пришлось смотреть.'),
      why: l('Javno ponižavanje uči strahu, ne kuvanju. Kuvar koji se boji krije greške, umesto da ih prijavi.', 'Public humiliation teaches fear, not cooking. A cook who is afraid hides mistakes instead of reporting them.', 'Публичное унижение учит страху, а не готовке. Повар, который боится, скрывает ошибки, а не сообщает о них.'),
    },
    {
      text: l('Pohvali naglas, pred svima.', 'Praise out loud, in front of everyone.', 'Хвали вслух, при всех.'),
      done: l('Dobar posao je primećen i rečen.', 'Good work is noticed and named.', 'Хорошая работа замечена и названа.'),
      why: l('Ljudi ponavljaju ono što je primećeno. Pohvala je najjeftiniji alat koji šef ima.', 'People repeat what gets noticed. Praise is the cheapest tool a chef has.', 'Люди повторяют то, что замечено. Похвала — самый дешёвый инструмент шефа.'),
    },
    {
      text: l('Na svakoj smeni porodični obrok i pauza za vodu.', 'A staff meal and a water break on every shift.', 'На каждой смене обед персонала и перерыв на воду.'),
      params: [l('15–20 min pre servisa', '15–20 min before service', '15–20 мин до сервиса')],
      done: l('Tim jede zajedno, seda i pije vodu pre servisa.', 'The team eats together, sits down and drinks water before service.', 'Команда ест вместе, садится и пьёт воду до сервиса.'),
      why: l('Gladan i dehidriran kuvar je spor i nervozan. Obrok zajedno je i jedini trenutak dana kad je tim tim.', 'A hungry, dehydrated cook is slow and on edge. Eating together is also the one moment of the day when the team is a team.', 'Голодный и обезвоженный повар медлителен и нервен. Общий обед — ещё и единственный момент дня, когда команда — команда.'),
    },
    {
      text: l('Posle servisa pet minuta: šta je radilo, a šta nije.', 'Five minutes after service: what worked and what did not.', 'После сервиса пять минут: что сработало, а что нет.'),
      params: [l('5 min', '5 min', '5 мин')],
      done: l('Svaki problem sa servisa ima ime i jednu meru za sutra.', 'Every problem from service has a name and one action for tomorrow.', 'Каждая проблема сервиса названа, и на завтра есть одна мера.'),
      why: l('Servis koji se ne razgovori ponavlja iste greške. Pet minuta zatvara dan i otvara sledeći.', 'A service that is never talked through repeats the same mistakes. Five minutes closes the day and opens the next.', 'Сервис, который не обсуждают, повторяет те же ошибки. Пять минут закрывают день и открывают следующий.'),
    },
  ],
  mistake: {
    title: l('„Tako je i mene učio moj šef.“', '"That is how my chef taught me."', '«Так меня учил мой шеф».'),
    fix: l(
      'Vikanje i ponižavanje su nekad bili normalni, i kuhinje su zbog toga gubile najbolje ljude. Standard, mir i poštovanje grade kuhinju u koju dobri kuvari žele da dođu i u kojoj žele da ostanu.',
      'Shouting and humiliation used to be normal, and kitchens lost their best people because of it. Standards, calm and respect build a kitchen good cooks want to join and want to stay in.',
      'Крик и унижение когда-то были нормой, и кухни из-за этого теряли лучших. Стандарты, спокойствие и уважение строят кухню, куда хорошие повара хотят прийти и где хотят остаться.',
    ),
  },
  think: {
    question: l('Kuvar je pogrešio na servisu. Kada i kako ga ispravljaš?', 'A cook made a mistake on service. When and how do you correct them?', 'Повар ошибся на сервисе. Когда и как его поправить?'),
    options: [
      l('Odmah, mirno i nasamo', 'At once, calmly and in private', 'Сразу, спокойно и наедине'),
      l('Glasno, da svi nauče', 'Loudly, so everyone learns', 'Громко, чтобы все научились'),
      l('Na kraju meseca', 'At the end of the month', 'В конце месяца'),
    ],
    answer: 0,
    explain: l(
      'Odmah, dok se greška još vidi. Mirno, da kuvar čuje rešenje, a ne ton. Nasamo, da ne mora da brani obraz pred drugima.',
      'At once, while the mistake is still visible. Calmly, so the cook hears the fix and not the tone. In private, so they do not have to save face in front of others.',
      'Сразу, пока ошибка ещё видна. Спокойно, чтобы повар услышал решение, а не тон. Наедине, чтобы ему не пришлось сохранять лицо перед другими.',
    ),
  },
}

export const teamLessons: Lesson[] = [brigade, rota, training, calls, culture]
