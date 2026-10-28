import { l, type Lesson } from '../types'

// Grade 3 · Module 13 · Opening a kitchen. Everything from the grade comes together: a layout that keeps raw
// and cooked apart, equipment chosen from the menu, a test kitchen that standardises every dish, a soft
// opening that finds the problems before the full room does, and the numbers that matter in the first 90 days.

const layout: Lesson = {
  id: '3.13.1',
  title: l('Tok rada i raspored prostora', 'Workflow and layout', 'Поток работы и планировка'),
  goal: l(
    'Nacrtaš raspored kuhinje u kome roba ide u jednom smeru, od prijema do sale, bez ukrštanja sirovog i gotovog.',
    'You draw a kitchen layout where goods move one way, from receiving to the dining room, without raw and cooked crossing.',
    'Ты рисуешь планировку кухни, где товар идёт в одном направлении, от приёмки до зала, без пересечения сырого и готового.',
  ),
  minutes: 7,
  key: { value: l('1', '1', '1'), label: l('smer kretanja robe', 'direction for goods', 'направление движения товара') },
  need: [
    { item: l('Tlocrt prostora u razmeri', 'A scaled floor plan of the space', 'План помещения в масштабе'), qty: l('1', '1', '1') },
    { item: l('Meni i očekivani broj gostiju', 'The menu and expected covers', 'Меню и ожидаемое число гостей'), qty: l('1', '1', '1') },
    { item: l('Olovke u dve boje', 'Pens in two colours', 'Ручки двух цветов'), qty: l('2', '2', '2') },
  ],
  why: l(
    'Raspored se pravi jednom, a sa njim se radi godinama. Loš raspored znači hiljade suvišnih koraka dnevno i rizik da se sirovo i gotovo sretnu.',
    'A layout is made once and worked in for years. A bad layout means thousands of extra steps a day and the risk of raw and cooked meeting.',
    'Планировку делают один раз, а работают в ней годами. Плохая планировка — тысячи лишних шагов в день и риск встречи сырого и готового.',
  ),
  steps: [
    {
      text: l('Nacrtaj tok robe u jednom smeru.', 'Draw the flow of goods in one direction.', 'Нарисуй поток товара в одном направлении.'),
      params: [l('prijem → skladište → priprema → kuvanje → pass → sala', 'receiving → storage → prep → cooking → pass → dining room', 'приёмка → склад → заготовка → готовка → раздача → зал')],
      done: l('Strelica toka nigde ne ide nazad.', 'The flow arrow never goes backwards.', 'Стрелка потока нигде не идёт назад.'),
      why: l('Kad roba ide napred-nazad, sirova piletina prolazi pored gotove salate. Jedan smer to sprečava sam po sebi.', 'When goods go back and forth, raw chicken passes the finished salad. One direction prevents that by design.', 'Когда товар ходит туда-обратно, сырая курица проходит мимо готового салата. Одно направление предотвращает это само собой.'),
      drawing: 'backwardsPlan',
    },
    {
      text: l('Odvoji zone za sirovo i za gotovo.', 'Separate the zones for raw and for ready food.', 'Раздели зоны для сырого и готового.'),
      params: [l('priprema mesa i ribe · hladna kuhinja · poslastičarnica', 'meat and fish prep · cold kitchen · pastry', 'заготовка мяса и рыбы · холодный цех · кондитерский')],
      done: l('Sirovo meso nikad ne prolazi kroz zonu gotove hrane.', 'Raw meat never passes through a ready-food zone.', 'Сырое мясо никогда не проходит через зону готовой еды.'),
      why: l('Ovo je osnova HACCP plana (3.11.1). Inspektor gleda raspored pre nego što pogleda liste.', 'This is the foundation of the HACCP plan (3.11.1). An inspector looks at the layout before the logs.', 'Это основа плана ХАССП (3.11.1). Инспектор смотрит на планировку раньше журналов.'),
      drawing: 'twoBoards',
    },
    {
      text: l('Prljavo posuđe vrati drugim putem, ne preko pass-a.', 'Send dirty dishes back by a different route, not across the pass.', 'Грязная посуда возвращается другим путём, не через раздачу.'),
      done: l('Prljavi tanjiri i gotova jela se nigde ne mimoilaze.', 'Dirty plates and finished dishes never pass each other.', 'Грязные тарелки и готовые блюда нигде не встречаются.'),
      why: l('Konobar sa punim rukama prljavih tanjira i kuvar sa gotovim jelom na istom mestu je sudar i kontaminacija.', 'A server with arms full of dirty plates and a cook with a finished dish in one spot is a collision and contamination.', 'Официант с охапкой грязных тарелок и повар с готовым блюдом в одном месте — это столкновение и загрязнение.'),
    },
    {
      text: l('Odredi širinu prolaza.', 'Set the width of the aisles.', 'Определи ширину проходов.'),
      params: [l('najmanje 90 cm', 'at least 90 cm', 'не менее 90 см'), l('za dvoje 120 cm', '120 cm for two people', '120 см для двоих')],
      done: l('Dva kuvara mogu da se mimoiđu bez okretanja.', 'Two cooks can pass each other without turning.', 'Два повара могут разойтись, не разворачиваясь.'),
      why: l('Uzak prolaz je sudar sa vrelim tiganjem. Preširok znači više koraka za sve.', 'A narrow aisle is a collision with a hot pan. Too wide means more steps for everyone.', 'Узкий проход — столкновение с горячей сковородой. Слишком широкий — больше шагов для всех.'),
    },
    {
      text: l('Prođi jedan tanjir na papiru, od prijema do stola.', 'Walk one plate through on paper, from receiving to the table.', 'Проведи одну тарелку по бумаге, от приёмки до стола.'),
      done: l('Put nema ukrštanja, vraćanja ni čekanja.', 'The route has no crossings, backtracking or waiting.', 'На пути нет пересечений, возвратов и ожидания.'),
      why: l('Greška na papiru košta gumicu. Ista greška posle gradnje košta zid.', 'A mistake on paper costs an eraser. The same mistake after building costs a wall.', 'Ошибка на бумаге стоит ластика. Та же ошибка после стройки стоит стены.'),
    },
  ],
  mistake: {
    title: l('Oprema postavljena tamo gde ima mesta, a ne gde je posao.', 'Equipment placed where there is space, not where the work is.', 'Оборудование поставлено туда, где есть место, а не где работа.'),
    fix: l(
      'Kuvar trči preko kuhinje za svakim tanjirom, a sirovo i gotovo se mešaju. Prvo tok rada, pa tek onda gde ide koji uređaj.',
      'Cooks run across the kitchen for every plate, and raw and cooked mix. First the workflow, then where each appliance goes.',
      'Повар бегает через кухню за каждой тарелкой, а сырое и готовое смешиваются. Сначала поток работы, потом — где какое оборудование.',
    ),
  },
  think: {
    question: l('Zašto roba u kuhinji ide samo u jednom smeru?', 'Why do goods move in only one direction in a kitchen?', 'Почему товар на кухне движется только в одном направлении?'),
    options: [
      l('Da se sirovo i gotovo ne sretnu', 'So raw and cooked never meet', 'Чтобы сырое и готовое не встречались'),
      l('Zbog izgleda', 'For appearance', 'Ради внешнего вида'),
      l('Tako je jeftinije', 'It is cheaper', 'Так дешевле'),
    ],
    answer: 0,
    explain: l(
      'Kad je put jednosmeran, ono što je čisto i gotovo uvek je ispred onoga što je sirovo. Bezbednost je ugrađena u prostor, ne zavisi od pažnje na smeni.',
      'When the path is one-way, what is clean and ready is always ahead of what is raw. Safety is built into the space and does not depend on attention on shift.',
      'Когда путь односторонний, чистое и готовое всегда впереди сырого. Безопасность встроена в пространство и не зависит от внимательности на смене.',
    ),
  },
}

const equipment: Lesson = {
  id: '3.13.2',
  title: l('Izbor opreme', 'Choosing equipment', 'Выбор оборудования'),
  goal: l(
    'Izabereš opremu prema meniju i najjačem satu servisa, uz proveru instalacija i servisa pre kupovine.',
    'You choose equipment from the menu and the busiest hour of service, checking the installations and servicing before you buy.',
    'Ты выбираешь оборудование по меню и самому загруженному часу сервиса, проверяя коммуникации и сервис до покупки.',
  ),
  minutes: 7,
  key: { value: l('meni', 'menu', 'меню'), label: l('određuje opremu', 'decides the equipment', 'определяет оборудование') },
  need: [
    { item: l('Meni sa recept-karticama', 'The menu with recipe cards', 'Меню с техкартами'), qty: l('1', '1', '1') },
    { item: l('Procena najjačeg sata', 'An estimate of the busiest hour', 'Оценка самого загруженного часа'), qty: l('1', '1', '1') },
    { item: l('Tlocrt sa instalacijama', 'The floor plan with services', 'План с коммуникациями'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Oprema je najveći trošak otvaranja posle prostora. Kupljena po katalogu, a ne po meniju, ili stoji neiskorišćena ili ne stiže na najjačem satu.',
    'Equipment is the biggest opening cost after the premises. Bought from a catalogue rather than the menu, it either sits unused or cannot keep up in the busiest hour.',
    'Оборудование — самая большая статья расходов на открытие после помещения. Купленное по каталогу, а не по меню, оно либо простаивает, либо не справляется в пиковый час.',
  ),
  steps: [
    {
      text: l('Za svako jelo zapiši na čemu se sprema.', 'For every dish, write down what it is cooked on.', 'Для каждого блюда запиши, на чём оно готовится.'),
      params: [l('ringla · rerna · roštilj · friteza · konvektomat', 'hob · oven · grill · fryer · combi oven', 'плита · духовка · гриль · фритюр · пароконвектомат')],
      done: l('Imaš listu uređaja i koliko jela zavisi od svakog.', 'You have a list of appliances and how many dishes depend on each.', 'У тебя список приборов и сколько блюд зависит от каждого.'),
      why: l('Uređaj na kome se ne sprema nijedno jelo sa menija je skup komad metala.', 'An appliance that cooks nothing on the menu is an expensive piece of metal.', 'Прибор, на котором не готовится ни одно блюдо меню, — дорогой кусок металла.'),
    },
    {
      text: l('Izračunaj kapacitet za najjači sat servisa.', 'Work out the capacity for the busiest hour of service.', 'Посчитай мощность для самого загруженного часа сервиса.'),
      params: [l('npr. 80 glavnih jela za sat', 'e.g. 80 mains in an hour', 'например 80 основных блюд в час')],
      done: l('Za svaki uređaj znaš da li stiže na vrhuncu.', 'For each appliance you know whether it keeps up at the peak.', 'Для каждого прибора известно, справится ли он в пик.'),
      why: l('Kuhinja se ne pravi za prosečan utorak, nego za subotu u 21 čas.', 'A kitchen is not built for an average Tuesday, but for Saturday at 9 pm.', 'Кухню строят не под средний вторник, а под субботу в 21:00.'),
    },
    {
      text: l('Šok hladnjak stavi na listu obavezno.', 'Put a blast chiller on the list, no exceptions.', 'Обязательно внеси в список шоковый охладитель.'),
      done: l('Kuhinja ima uređaj koji hladi kuvanu hranu za propisano vreme.', 'The kitchen has a machine that chills cooked food within the required time.', 'На кухне есть прибор, охлаждающий готовую еду за положенное время.'),
      why: l('Brzo hlađenje je kritična tačka (3.11.2). Led i voda rade za jedan lonac, a ne za kuhinju koja hladi 50 litara dnevno.', 'Fast cooling is a critical point (3.11.2). Ice and water work for one pot, not for a kitchen chilling 50 litres a day.', 'Быстрое охлаждение — критическая точка (3.11.2). Лёд с водой работают для одной кастрюли, а не для кухни, охлаждающей 50 литров в день.'),
    },
    {
      text: l('Pre kupovine proveri struju, gas, ventilaciju i odvod.', 'Before buying, check the power, gas, ventilation and drainage.', 'До покупки проверь электричество, газ, вентиляцию и канализацию.'),
      done: l('Za svaki uređaj postoji priključak koji ga podnosi.', 'Every appliance has a connection that can carry it.', 'Для каждого прибора есть подключение, которое его выдержит.'),
      why: l('Konvektomat koji traži jaču struju od one u zgradi stoji u kutiji dok se ne promeni instalacija.', 'A combi oven needing more power than the building has stays in its box until the wiring is changed.', 'Пароконвектомат, которому нужно больше мощности, чем есть в здании, стоит в коробке, пока не переделают проводку.'),
    },
    {
      text: l('Uz svaki uređaj obezbedi servis, rezervne delove i garanciju.', 'For every appliance, arrange servicing, spare parts and a warranty.', 'Для каждого прибора обеспечь сервис, запчасти и гарантию.'),
      done: l('Za svaki uređaj imaš broj servisera koji dolazi u roku od jednog dana.', 'For every appliance you have the number of an engineer who comes within a day.', 'Для каждого прибора есть номер мастера, который приедет в течение суток.'),
      why: l('Uređaj koji stane u petak, a servis dolazi u utorak, košta vikend. Jeftiniji uređaj bez servisa je skuplji.', 'An appliance that breaks on Friday with an engineer coming on Tuesday costs a weekend. A cheaper appliance with no service is the dearer one.', 'Прибор, сломавшийся в пятницу, когда мастер приедет во вторник, стоит выходных. Дешёвый прибор без сервиса обходится дороже.'),
    },
  ],
  mistake: {
    title: l('Oprema kupljena po preporuci prodavca, pre menija.', 'Equipment bought on a salesperson\'s advice, before the menu exists.', 'Оборудование куплено по совету продавца, до появления меню.'),
    fix: l(
      'Kuhinja dobije uređaje koje prodavac ima na lageru, a ne one koje meni traži. Prvo meni i recept-kartice, pa lista opreme, pa tek onda razgovor sa prodavcem.',
      'The kitchen gets whatever the seller has in stock, not what the menu needs. First the menu and recipe cards, then the equipment list, and only then the conversation with the seller.',
      'Кухня получает то, что есть на складе у продавца, а не то, что требует меню. Сначала меню и техкарты, потом список оборудования, и только потом разговор с продавцом.',
    ),
  },
  think: {
    question: l('Za koji trenutak se računa kapacitet opreme?', 'Which moment is equipment capacity calculated for?', 'Для какого момента рассчитывают мощность оборудования?'),
    options: [
      l('Najjači sat servisa', 'The busiest hour of service', 'Самый загруженный час сервиса'),
      l('Prosečan dan', 'An average day', 'Средний день'),
      l('Najmirniji dan', 'The quietest day', 'Самый спокойный день'),
    ],
    answer: 0,
    explain: l(
      'Prosečan dan kuhinja izgura sa bilo čim. Subota u 21 čas pokazuje da li oprema stiže. Tada se gosti ili vraćaju ili ne.',
      'A kitchen gets through an average day with anything. Saturday at 9 pm shows whether the equipment keeps up. That is when guests either come back or do not.',
      'Средний день кухня вытянет с чем угодно. Суббота в 21:00 покажет, справляется ли оборудование. Именно тогда гости либо возвращаются, либо нет.',
    ),
  },
}

const testKitchen: Lesson = {
  id: '3.13.3',
  title: l('Test kuhinja', 'The test kitchen', 'Тестовая кухня'),
  goal: l(
    'Pre otvaranja skuvaš svako jelo više puta, izmeriš vreme i trošak i zaključaš recept-karticu.',
    'Before opening, you cook every dish several times, time and cost it, and lock the recipe card.',
    'До открытия ты готовишь каждое блюдо несколько раз, замеряешь время и себестоимость и фиксируешь техкарту.',
  ),
  minutes: 6,
  key: { value: l('3×', '3×', '3×'), label: l('svako jelo pre otvaranja', 'every dish before opening', 'каждое блюдо до открытия') },
  need: [
    { item: l('Recept-kartice svih jela (3.7.5)', 'Recipe cards for every dish (3.7.5)', 'Техкарты всех блюд (3.7.5)'), qty: l('sve', 'all', 'все') },
    { item: l('Štoperica i telefon za fotografije', 'A timer and a phone for photos', 'Секундомер и телефон для фото'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Ceo kuhinjski tim', 'The whole kitchen team', 'Вся команда кухни'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Prvi gost ne treba da proba jelo koje je skuvano prvi put. Test kuhinja je mesto gde greške koštaju sastojke, a ne goste.',
    'The first guest should not taste a dish being cooked for the first time. The test kitchen is where mistakes cost ingredients, not guests.',
    'Первый гость не должен пробовать блюдо, приготовленное впервые. Тестовая кухня — место, где ошибки стоят продуктов, а не гостей.',
  ),
  steps: [
    {
      text: l('Skuvaj svako jelo najmanje tri puta, svaki put drugi kuvar.', 'Cook every dish at least three times, a different cook each time.', 'Приготовь каждое блюдо минимум три раза, каждый раз другим поваром.'),
      done: l('Tri kuvara su napravila isto jelo i ono izgleda i ima ukus isto.', 'Three cooks have made the same dish and it looks and tastes the same.', 'Три повара приготовили одно блюдо, и оно одинаковое на вид и вкус.'),
      why: l('Jelo koje uspeva samo tebi nije spremno za meni. Mora da uspe svakom na toj stanici.', 'A dish that works only for you is not ready for the menu. It must work for anyone on that station.', 'Блюдо, которое получается только у тебя, не готово для меню. Оно должно получаться у любого на этой станции.'),
    },
    {
      text: l('Izmeri vreme od bona do pass-a za svako jelo.', 'Time every dish from ticket to pass.', 'Замерь время каждого блюда от заказа до раздачи.'),
      done: l('Uz svako jelo stoji vreme u minutima.', 'Every dish has a time in minutes beside it.', 'У каждого блюда указано время в минутах.'),
      why: l('Jelo od 25 minuta na meniju gde je sve ostalo za 12 usporava ceo sto. Vreme se vidi tek u test kuhinji.', 'A 25-minute dish on a menu where everything else takes 12 holds up the whole table. You only see the time in the test kitchen.', 'Блюдо на 25 минут в меню, где всё остальное за 12, тормозит весь стол. Время видно только на тестовой кухне.'),
    },
    {
      text: l('Posle svake ture popravi recept-karticu.', 'After every round, fix the recipe card.', 'После каждого раунда исправляй техкарту.'),
      done: l('Treća verzija kartice se ne razlikuje od onoga što je na tanjiru.', 'The third version of the card matches what is on the plate exactly.', 'Третья версия карты в точности соответствует тому, что на тарелке.'),
      why: l('Svako pitanje kuvara je rupa u kartici (3.7.5). Test kuhinja ih nađe sve.', 'Every question a cook asks is a hole in the card (3.7.5). The test kitchen finds them all.', 'Каждый вопрос повара — дыра в карте (3.7.5). Тестовая кухня находит их все.'),
    },
    {
      text: l('Fotografiši konačni tanjir i izračunaj trošak.', 'Photograph the final plate and work out its cost.', 'Сфотографируй финальную тарелку и посчитай себестоимость.'),
      done: l('Svaka kartica ima fotografiju i trošak porcije (3.10.2).', 'Every card has a photo and a portion cost (3.10.2).', 'У каждой карты есть фото и себестоимость порции (3.10.2).'),
      why: l('Cena na meniju se određuje sada, ne posle prvog meseca gubitka.', 'The menu price is set now, not after the first month of losses.', 'Цена в меню определяется сейчас, а не после первого убыточного месяца.'),
      drawing: 'photoAngle',
    },
    {
      text: l('Napravi degustaciju za ceo tim i salu.', 'Hold a tasting for the whole team and the floor staff.', 'Проведи дегустацию для всей команды и зала.'),
      done: l('Svako ko radi u restoranu je probao svako jelo.', 'Everyone who works in the restaurant has tasted every dish.', 'Каждый, кто работает в ресторане, попробовал каждое блюдо.'),
      why: l('Konobar koji je probao jelo ga i prodaje. Kuvar koji je probao tuđe jelo zna kako izgleda ceo meni (3.8.5).', 'A server who has tasted a dish sells it. A cook who has tasted another station\'s dish knows what the whole menu looks like (3.8.5).', 'Официант, попробовавший блюдо, его продаёт. Повар, попробовавший блюдо другой станции, знает, как выглядит всё меню (3.8.5).'),
    },
  ],
  mistake: {
    title: l('Test kuhinja preskočena jer „rok za otvaranje je sutra“.', 'Skipping the test kitchen because "we open tomorrow".', 'Тестовую кухню пропустили, потому что «открываемся завтра».'),
    fix: l(
      'Prva nedelja postaje test kuhinja, ali sa pravim gostima i pravim recenzijama. Bolje je otvoriti nedelju dana kasnije nego mesecima popravljati prvi utisak.',
      'The first week becomes the test kitchen, but with real guests and real reviews. Better to open a week late than to spend months repairing a first impression.',
      'Первая неделя становится тестовой кухней, но с настоящими гостями и настоящими отзывами. Лучше открыться на неделю позже, чем месяцами исправлять первое впечатление.',
    ),
  },
  think: {
    question: l('Zašto jelo u test kuhinji pravi više različitih kuvara?', 'Why do several different cooks make a dish in the test kitchen?', 'Почему на тестовой кухне блюдо готовят разные повара?'),
    options: [
      l('Da se proveri da kartica radi bez autora', 'To check the card works without its author', 'Чтобы проверить, что карта работает без автора'),
      l('Da svi budu zauzeti', 'To keep everyone busy', 'Чтобы все были заняты'),
      l('Zbog brzine', 'For speed', 'Ради скорости'),
    ],
    answer: 0,
    explain: l(
      'Na servisu jelo pravi onaj ko je na stanici, ne onaj ko ga je smislio. Test sa više kuvara pokazuje da li je jelo zapisano ili samo zapamćeno.',
      'On service a dish is made by whoever is on the station, not whoever created it. Testing with several cooks shows whether the dish is written down or merely remembered.',
      'На сервисе блюдо готовит тот, кто на станции, а не тот, кто его придумал. Проверка несколькими поварами показывает, записано блюдо или просто запомнено.',
    ),
  },
}

const softOpening: Lesson = {
  id: '3.13.4',
  title: l('Soft opening', 'The soft opening', 'Мягкое открытие'),
  goal: l(
    'Otvoriš kuhinju postepeno: manje gostiju, kraći meni, i lista problema koja se rešava svake večeri.',
    'You open the kitchen gradually: fewer guests, a shorter menu, and a list of problems fixed every night.',
    'Ты открываешь кухню постепенно: меньше гостей, короче меню и список проблем, который решается каждый вечер.',
  ),
  minutes: 6,
  key: { value: l('50%', '50%', '50%'), label: l('kapaciteta prvih večeri', 'capacity on the first nights', 'загрузки в первые вечера') },
  need: [
    { item: l('Lista pozvanih gostiju', 'A list of invited guests', 'Список приглашённых гостей'), qty: l('1', '1', '1') },
    { item: l('Skraćen meni', 'A shortened menu', 'Сокращённое меню'), qty: l('1', '1', '1') },
    { item: l('Kartice za utiske gostiju', 'Guest feedback cards', 'Карточки отзывов гостей'), qty: l('50', '50', '50') },
  ],
  why: l(
    'Svaka nova kuhinja ima probleme koje niko nije predvideo. Soft opening ih otkrije na pola sale, umesto na punoj.',
    'Every new kitchen has problems nobody foresaw. A soft opening finds them with half a room instead of a full one.',
    'У каждой новой кухни есть проблемы, которых никто не предвидел. Мягкое открытие находит их при половине зала, а не при полном.',
  ),
  steps: [
    {
      text: l('Pozovi ograničen broj gostiju.', 'Invite a limited number of guests.', 'Пригласи ограниченное число гостей.'),
      params: [l('pola kapaciteta', 'half capacity', 'половина вместимости')],
      done: l('Sala je napola puna, a kuhinja ima vremena da diše.', 'The room is half full and the kitchen has room to breathe.', 'Зал наполовину полон, и у кухни есть время перевести дух.'),
      why: l('Prijatelji, porodica i komšije oproste grešku i kažu je. Puna sala nepoznatih ne oprosti i ne kaže.', 'Friends, family and neighbours forgive a mistake and tell you about it. A full room of strangers does neither.', 'Друзья, семья и соседи прощают ошибку и говорят о ней. Полный зал незнакомцев — ни то, ни другое.'),
    },
    {
      text: l('Skrati meni na jela koja kuhinja najsigurnije radi.', 'Cut the menu to the dishes the kitchen does most confidently.', 'Сократи меню до блюд, которые кухня делает увереннее всего.'),
      params: [l('2–3 jela po kategoriji', '2–3 dishes per category', '2–3 блюда в категории')],
      done: l('Svaka stanica ima manje jela i više kontrole.', 'Every station has fewer dishes and more control.', 'У каждой станции меньше блюд и больше контроля.'),
      why: l('Kad kraći meni radi bez greške, dodaje se jelo po jelo. Obrnuto ne ide.', 'Once the short menu runs without mistakes, dishes are added one by one. It does not work the other way round.', 'Когда короткое меню работает без ошибок, блюда добавляют по одному. Наоборот не работает.'),
    },
    {
      text: l('Rasporedi rezervacije na svakih 15 minuta.', 'Spread the bookings every 15 minutes.', 'Распредели брони каждые 15 минут.'),
      params: [l('ne svi u 20 h', 'not everyone at 8 pm', 'не все в 20:00')],
      done: l('Bonovi stižu ravnomerno, a ne u jednom talasu.', 'Tickets arrive evenly, not in one wave.', 'Заказы приходят равномерно, а не одной волной.'),
      why: l('Deset stolova u istom minutu ruši i iskusnu kuhinju, a kamoli novu.', 'Ten tables in the same minute topples even an experienced kitchen, let alone a new one.', 'Десять столов в одну минуту обрушат даже опытную кухню, не то что новую.'),
    },
    {
      text: l('Posle svake večeri napravi listu problema i jednu promenu po stanici.', 'After every night, make a problem list and one change per station.', 'После каждого вечера составь список проблем и одно изменение на станцию.'),
      done: l('Sutradan svaka stanica radi jednu stvar bolje nego juče.', 'The next day every station does one thing better than yesterday.', 'На следующий день каждая станция делает одну вещь лучше, чем вчера.'),
      why: l('Deset promena odjednom zbuni tim. Jedna po stanici svaki dan, za nedelju dana je sedam.', 'Ten changes at once confuse the team. One per station each day makes seven in a week.', 'Десять изменений сразу путают команду. По одному на станцию каждый день — за неделю семь.'),
    },
    {
      text: l('Otvori puni kapacitet tek posle nekoliko mirnih večeri zaredom.', 'Open to full capacity only after several calm nights in a row.', 'Открывайся на полную загрузку только после нескольких спокойных вечеров подряд.'),
      params: [l('npr. 3 večeri bez većih problema', 'e.g. 3 nights with no major problems', 'например 3 вечера без серьёзных проблем')],
      done: l('Kuhinja je spremna za punu salu, i to zna.', 'The kitchen is ready for a full room, and knows it.', 'Кухня готова к полному залу и знает это.'),
      why: l('Datum otvaranja je dogovor, a spremnost kuhinje je činjenica. Kad se ne slažu, pobeđuje činjenica.', 'The opening date is an agreement; the kitchen\'s readiness is a fact. When they disagree, the fact wins.', 'Дата открытия — договорённость, а готовность кухни — факт. Когда они расходятся, побеждает факт.'),
    },
  ],
  mistake: {
    title: l('Veliko otvaranje sa punom salom prve večeri.', 'A grand opening with a full room on the first night.', 'Большое открытие с полным залом в первый вечер.'),
    fix: l(
      'Svi problemi kuhinje se pokažu odjednom, pred najvećim brojem gostiju i ponekad pred novinarima. Prvo tiho, pa glasno.',
      'Every problem in the kitchen shows at once, in front of the most guests and sometimes the press. Quiet first, loud later.',
      'Все проблемы кухни проявляются разом, перед максимумом гостей, а иногда и журналистов. Сначала тихо, потом громко.',
    ),
  },
  think: {
    question: l('Zašto se rezervacije na soft openingu raspoređuju na svakih 15 minuta?', 'Why are soft opening bookings spread every 15 minutes?', 'Почему брони на мягком открытии распределяют каждые 15 минут?'),
    options: [
      l('Da bonovi ne stignu svi u istom talasu', 'So the tickets do not all arrive in one wave', 'Чтобы заказы не пришли одной волной'),
      l('Da gosti ne čekaju sto', 'So guests do not wait for a table', 'Чтобы гости не ждали стол'),
      l('Zbog parkinga', 'Because of parking', 'Из-за парковки'),
    ],
    answer: 0,
    explain: l(
      'Nova kuhinja još nema ritam. Ravnomeran tok bonova joj daje vreme da ga nađe, a ne da se uči usred talasa.',
      'A new kitchen has no rhythm yet. An even flow of tickets gives it time to find one, instead of learning in the middle of a rush.',
      'У новой кухни ещё нет ритма. Равномерный поток заказов даёт ей время его найти, а не учиться посреди наплыва.',
    ),
  },
}

const firstNinety: Lesson = {
  id: '3.13.5',
  title: l('Prvih 90 dana', 'The first 90 days', 'Первые 90 дней'),
  goal: l(
    'Pratiš pet brojeva nedeljno, doneseš prve odluke o meniju posle 30 dana i postaviš standarde kuhinje do kraja tri meseca.',
    'You track five numbers weekly, make the first menu decisions after 30 days and set the kitchen\'s standards by the end of three months.',
    'Ты отслеживаешь пять цифр еженедельно, принимаешь первые решения по меню через 30 дней и устанавливаешь стандарты кухни к концу трёх месяцев.',
  ),
  minutes: 7,
  key: { value: l('90', '90', '90'), label: l('dana do stabilne kuhinje', 'days to a stable kitchen', 'дней до стабильной кухни') },
  need: [
    { item: l('Tabela za nedeljne brojeve', 'A spreadsheet for weekly numbers', 'Таблица для еженедельных цифр'), qty: l('1', '1', '1') },
    { item: l('Podaci iz kase i inventure', 'Data from the till and stocktake', 'Данные кассы и инвентаризации'), qty: l('1', '1', '1') },
    { item: l('Recenzije i utisci gostiju', 'Guest reviews and feedback', 'Отзывы и впечатления гостей'), qty: l('sve', 'all', 'все') },
  ],
  why: l(
    'Prva tri meseca odlučuju da li restoran opstaje. Kuhinja koja tada gleda brojeve i ispravlja kurs ulazi u godinu jaka. Ona koja čeka, često ne uđe.',
    'The first three months decide whether a restaurant survives. A kitchen that watches the numbers and corrects course then enters the year strong. One that waits often does not make it.',
    'Первые три месяца решают, выживет ли ресторан. Кухня, которая тогда следит за цифрами и корректирует курс, входит в год сильной. Та, что ждёт, часто не доживает.',
  ),
  steps: [
    {
      text: l('Svake nedelje upiši pet brojeva.', 'Every week, record five numbers.', 'Каждую неделю записывай пять цифр.'),
      params: [l('gosti · food cost · trošak rada · vreme bona · otpad', 'covers · food cost · labour cost · ticket time · waste', 'гости · фудкост · затраты на персонал · время заказа · отходы')],
      done: l('Tabela ima nedelju po nedelju i vidi se pravac.', 'The table runs week by week and the trend is visible.', 'Таблица ведётся неделя за неделей, и видна тенденция.'),
      why: l('Jedan broj ne kaže ništa. Pet brojeva kroz deset nedelja kažu sve.', 'One number says nothing. Five numbers over ten weeks say everything.', 'Одно число ничего не говорит. Пять чисел за десять недель говорят всё.'),
    },
    {
      text: l('Posle 30 dana napravi prvu matricu menija.', 'After 30 days, build the first menu matrix.', 'Через 30 дней составь первую матрицу меню.'),
      done: l('Znaš koja su jela zvezde, a koja psi (3.8.4).', 'You know which dishes are stars and which are dogs (3.8.4).', 'Ты знаешь, какие блюда звёзды, а какие собаки (3.8.4).'),
      why: l('Mesec dana prodaje je prvi pravi podatak. Pre toga je sve nagađanje.', 'A month of sales is the first real data. Before that, it is all guesswork.', 'Месяц продаж — первые настоящие данные. До этого всё догадки.'),
      drawing: 'menuMatrix',
    },
    {
      text: l('Čitaj svaku recenziju i odgovori konkretno na kritiku.', 'Read every review and answer criticism specifically.', 'Читай каждый отзыв и отвечай на критику конкретно.'),
      done: l('Svaka kritika ima odgovor i, ako je opravdana, promenu u kuhinji.', 'Every criticism has a reply and, if it is fair, a change in the kitchen.', 'На каждую критику есть ответ и, если она справедлива, изменение на кухне.'),
      why: l('Isti prigovor tri puta je podatak, ne mišljenje. Kuhinja ga popravi, a gost vidi da je saslušan.', 'The same complaint three times is data, not opinion. The kitchen fixes it, and the guest sees they were heard.', 'Одна и та же жалоба трижды — данные, а не мнение. Кухня исправляет, гость видит, что его услышали.'),
    },
    {
      text: l('Jednom mesečno razgovaraj sa svakim članom tima.', 'Once a month, talk with every team member.', 'Раз в месяц поговори с каждым членом команды.'),
      params: [l('15 min, nasamo', '15 min, one to one', '15 мин, наедине')],
      done: l('Znaš šta svaki kuvar misli, šta mu treba i da li planira da ostane.', 'You know what each cook thinks, what they need and whether they plan to stay.', 'Ты знаешь, что думает каждый повар, что ему нужно и собирается ли он остаться.'),
      why: l('Novi timovi gube ljude u prva tri meseca. Razgovor na vreme zadrži dobrog kuvara jeftinije od zapošljavanja novog.', 'New teams lose people in the first three months. A timely conversation keeps a good cook for less than hiring a new one.', 'Новые команды теряют людей в первые три месяца. Своевременный разговор удерживает хорошего повара дешевле, чем найм нового.'),
    },
    {
      text: l('Posle 90 dana zapiši šta je kuhinja naučila i postavi standarde za godinu.', 'After 90 days, write down what the kitchen has learned and set the standards for the year.', 'Через 90 дней запиши, чему научилась кухня, и установи стандарты на год.'),
      done: l('Postoji dokument sa standardima, ciljanim brojevima i planom promene menija.', 'There is a document with the standards, target numbers and the menu change plan.', 'Есть документ со стандартами, целевыми цифрами и планом смены меню.'),
      why: l('Tri meseca iskustva vrede više od svakog plana pre otvaranja. Sada znaš kakva je tvoja kuhinja zaista.', 'Three months of experience are worth more than any plan made before opening. Now you know what your kitchen is really like.', 'Три месяца опыта стоят больше любого плана до открытия. Теперь ты знаешь, какая твоя кухня на самом деле.'),
    },
  ],
  mistake: {
    title: l('Brojevi se gledaju tek na kraju godine.', 'The numbers are looked at only at the end of the year.', 'Цифры смотрят только в конце года.'),
    fix: l(
      'Food cost od 40% u februaru je gubitak koji se gomila do decembra. Pet brojeva nedeljno, i čim se jedan pomeri, traži se razlog iste nedelje.',
      'A 40% food cost in February is a loss that piles up until December. Five numbers weekly, and as soon as one moves, look for the reason that same week.',
      'Фудкост 40% в феврале — убыток, копящийся до декабря. Пять цифр еженедельно, и как только одна сдвинулась, причину ищут в ту же неделю.',
    ),
  },
  think: {
    question: l('Kada se prvi put pravi matrica menija u novom restoranu?', 'When is the first menu matrix made in a new restaurant?', 'Когда в новом ресторане впервые составляют матрицу меню?'),
    options: [
      l('Posle prvih mesec dana prodaje', 'After the first month of sales', 'После первого месяца продаж'),
      l('Pre otvaranja', 'Before opening', 'До открытия'),
      l('Posle godinu dana', 'After a year', 'Через год'),
    ],
    answer: 0,
    explain: l(
      'Matrica traži stvarnu prodaju. Pre otvaranja je nema, a posle godinu dana je kasno: loše jelo je već dvanaest meseci koštalo novac.',
      'The matrix needs real sales. Before opening there are none, and after a year it is too late: a bad dish has already cost money for twelve months.',
      'Матрице нужны реальные продажи. До открытия их нет, а через год поздно: плохое блюдо уже двенадцать месяцев стоило денег.',
    ),
  },
}

export const openingLessons: Lesson[] = [layout, equipment, testKitchen, softOpening, firstNinety]
