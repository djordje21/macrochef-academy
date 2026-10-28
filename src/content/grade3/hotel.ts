import { l, type Lesson } from '../types'

// Grade 3 · Module 14 · Banquets and the hotel kitchen. Cooking for many at once and for guests who never see
// the kitchen: a banquet for a hundred, food held hot and cold for hours, hotel breakfast, room service and
// the buffet. Same standards as à la carte, different arithmetic.

const banquet: Lesson = {
  id: '3.14.1',
  title: l('Banket za sto ljudi', 'A banquet for a hundred', 'Банкет на сто человек'),
  goal: l(
    'Isplaniraš i serviraš banket za sto gostiju: potvrda, uvećani recepti, plan proizvodnje i linija za slaganje.',
    'You plan and serve a banquet for a hundred guests: confirmation, scaled recipes, a production plan and a plating line.',
    'Ты планируешь и подаёшь банкет на сто гостей: подтверждение, масштабированные рецепты, план производства и линия сборки.',
  ),
  minutes: 8,
  key: { value: l('72 h', '72 h', '72 ч'), label: l('potvrda broja i alergija', 'confirming numbers and allergies', 'подтверждение числа и аллергий') },
  need: [
    { item: l('Dogovoren meni i broj gostiju', 'The agreed menu and guest count', 'Согласованное меню и число гостей'), qty: l('1', '1', '1') },
    { item: l('Recept-kartice za 10 porcija', 'Recipe cards for 10 portions', 'Техкарты на 10 порций'), qty: l('sve', 'all', 'все') },
    { item: l('Dugačak sto za liniju i 100 tanjira', 'A long table for the line and 100 plates', 'Длинный стол для линии и 100 тарелок'), qty: l('1 + 100', '1 + 100', '1 + 100') },
  ],
  why: l(
    'Banket nije sto porcija à la carte. Svih sto tanjira mora da izađe u istih nekoliko minuta, isti, topli i tačni.',
    'A banquet is not a hundred à la carte portions. All hundred plates must go out in the same few minutes, identical, hot and correct.',
    'Банкет — это не сто порций а-ля карт. Все сто тарелок должны выйти за те же несколько минут, одинаковые, горячие и правильные.',
  ),
  steps: [
    {
      text: l('Tri dana ranije potvrdi broj gostiju, meni i alergije.', 'Three days ahead, confirm the guest count, menu and allergies.', 'За три дня подтверди число гостей, меню и аллергии.'),
      params: [l('72 h', '72 h', '72 ч')],
      done: l('Imaš pisanu potvrdu sa tačnim brojem i listom posebnih obroka.', 'You have written confirmation with the exact count and a list of special meals.', 'У тебя письменное подтверждение с точным числом и списком особых блюд.'),
      why: l('Nabavka i priprema počinju dva dana ranije. Promena broja dan pre je novac ili gladan gost.', 'Ordering and prep start two days ahead. A change of numbers the day before is money lost or a hungry guest.', 'Закупка и заготовка начинаются за два дня. Изменение числа накануне — потерянные деньги или голодный гость.'),
    },
    {
      text: l('Uvećaj recepte po težini, a so i začine dodaj postepeno.', 'Scale the recipes by weight, but add salt and spices gradually.', 'Масштабируй рецепты по весу, а соль и специи добавляй постепенно.'),
      params: [l('× 10', '× 10', '× 10'), l('so: prvo 80%, pa proba', 'salt: 80% first, then taste', 'соль: сначала 80%, затем проба')],
      done: l('Velika količina ima isti ukus kao mala.', 'The large batch tastes the same as the small one.', 'Большая партия на вкус как маленькая.'),
      why: l('U velikom loncu manje tečnosti ispari, pa so i ljutina deluju jače. Zato ne množiš slepo.', 'Less liquid evaporates from a large pot, so salt and heat come through stronger. That is why you do not multiply blindly.', 'Из большой кастрюли испаряется меньше жидкости, поэтому соль и острота ощущаются сильнее. Поэтому не умножают вслепую.'),
    },
    {
      text: l('Napravi plan proizvodnje unazad od trenutka serviranja.', 'Build a production plan backwards from the moment of service.', 'Составь план производства в обратном порядке от момента подачи.'),
      done: l('Svaka komponenta ima vreme početka i ime kuvara.', 'Every component has a start time and a cook\'s name.', 'У каждого компонента есть время начала и имя повара.'),
      why: l('Isti princip kao za tri jela kod kuće (2.1.2), samo sa više ljudi i više šerpi.', 'The same principle as for three courses at home (2.1.2), only with more people and more pans.', 'Тот же принцип, что и для трёх блюд дома (2.1.2), только больше людей и кастрюль.'),
      drawing: 'backwardsPlan',
    },
    {
      text: l('Postavi liniju za slaganje: svaki kuvar stavlja jednu komponentu.', 'Set up a plating line: each cook adds one component.', 'Организуй линию сборки: каждый повар кладёт один компонент.'),
      params: [l('1 kuvar = 1 komponenta', '1 cook = 1 component', '1 повар = 1 компонент')],
      done: l('Tanjiri idu niz sto, a na kraju ih šef proverava i šalje.', 'Plates move down the table, and at the end the chef checks and sends them.', 'Тарелки идут по столу, в конце шеф проверяет и отправляет.'),
      why: l('Jedan pokret ponovljen sto puta je brz i isti. Sto tanjira od jednog kuvara je spor i svaki je drugačiji.', 'One movement repeated a hundred times is fast and consistent. A hundred plates from one cook is slow and every one is different.', 'Одно движение, повторённое сто раз, быстро и одинаково. Сто тарелок от одного повара — медленно, и каждая разная.'),
      drawing: 'plateLine',
    },
    {
      text: l('Složi prvi tanjir kao uzorak, fotografiši ga, pa pokreni liniju.', 'Plate the first one as a sample, photograph it, then start the line.', 'Собери первую тарелку как образец, сфотографируй и запускай линию.'),
      done: l('Svaki tanjir na kraju linije izgleda kao prvi.', 'Every plate at the end of the line looks like the first.', 'Каждая тарелка в конце линии выглядит как первая.'),
      why: l('Uzorak ostaje na početku linije. Kuvari ga gledaju, ne pamte.', 'The sample stays at the head of the line. Cooks look at it rather than remember it.', 'Образец стоит в начале линии. Повара смотрят на него, а не вспоминают.'),
    },
  ],
  mistake: {
    title: l('Recept za 10 pomnožen sa 10, so i začini takođe.', 'A recipe for 10 multiplied by 10, salt and spices included.', 'Рецепт на 10, умноженный на 10, включая соль и специи.'),
    fix: l(
      'Veliki lonac ispari manje, pa jelo bude preslano i preljuto. Glavne sastojke množi, a so i začine dodaj do 80% i probaj pre ostatka.',
      'A big pot evaporates less, so the dish ends up too salty and too hot. Multiply the main ingredients, but add salt and spices to 80% and taste before the rest.',
      'Большая кастрюля испаряет меньше, и блюдо получается пересоленным и переострённым. Основные продукты умножай, а соль и специи добавь на 80% и попробуй перед остальным.',
    ),
  },
  think: {
    question: l('Zašto se na banketu svaki kuvar drži jedne komponente?', 'Why does each cook stick to one component at a banquet?', 'Почему на банкете каждый повар отвечает за один компонент?'),
    options: [
      l('Jedan pokret ponovljen je brz i isti', 'One repeated movement is fast and consistent', 'Одно повторяемое движение быстро и одинаково'),
      l('Da niko ne bude umoran', 'So nobody gets tired', 'Чтобы никто не устал'),
      l('Tako je lakše za šefa', 'It is easier for the chef', 'Так проще шефу'),
    ],
    answer: 0,
    explain: l(
      'Kuvar koji sto puta stavi isti pire posle desetog tanjira radi bez razmišljanja, tačno i brzo. Linija je fabrika, i zato radi.',
      'A cook placing the same purée a hundred times does it without thinking after the tenth plate, accurately and fast. The line is a factory, and that is why it works.',
      'Повар, кладущий одно и то же пюре сто раз, после десятой тарелки делает это не думая, точно и быстро. Линия — это конвейер, поэтому она работает.',
    ),
  },
}

const holding: Lesson = {
  id: '3.14.2',
  title: l('Topla i hladna linija', 'Hot and cold holding', 'Горячая и холодная линия'),
  goal: l(
    'Držiš hranu toplu i hladnu satima, na bezbednoj temperaturi i u dobrom stanju, uz dopunu i zapise.',
    'You keep food hot and cold for hours, at a safe temperature and in good condition, with refills and records.',
    'Ты держишь еду горячей и холодной часами, при безопасной температуре и в хорошем состоянии, с пополнением и записями.',
  ),
  minutes: 6,
  key: { value: l('63°C / 5°C', '63°C / 5°C', '63°C / 5°C'), label: l('toplo iznad, hladno ispod', 'hot above, cold below', 'горячее выше, холодное ниже') },
  need: [
    { item: l('Bain-marie ili grejači za posude', 'A bain-marie or chafing dishes', 'Мармит или чафинги'), qty: l('4', '4', '4') },
    { item: l('Posude na ledu za hladno', 'Containers on ice for cold food', 'Ёмкости на льду для холодного'), qty: l('4', '4', '4') },
    { item: l('Termometar i lista', 'Thermometer and log', 'Термометр и журнал'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Na banketu, doručku i švedskom stolu hrana stoji. Pitanje je samo da li stoji na pravoj temperaturi i koliko dugo.',
    'At a banquet, breakfast or buffet, food sits. The only question is whether it sits at the right temperature, and for how long.',
    'На банкете, завтраке и шведском столе еда стоит. Вопрос лишь в том, при какой температуре и как долго.',
  ),
  steps: [
    {
      text: l('Toplu hranu drži iznad 63°C.', 'Keep hot food above 63°C.', 'Держи горячую еду выше 63°C.'),
      params: [l('iznad 63°C', 'above 63°C', 'выше 63°C'), l('merenje na 30 min', 'check every 30 min', 'замер каждые 30 мин')],
      done: l('Svaka topla posuda pokazuje više od 63°C pri svakom merenju.', 'Every hot container reads above 63°C at every check.', 'Каждая горячая ёмкость показывает выше 63°C при каждом замере.'),
      why: l('Grejač drži toplotu, ali ne podiže hladnu hranu. Hrana mora da stigne vruća.', 'A heater holds heat but does not bring cold food up. The food must arrive hot.', 'Подогрев держит тепло, но не нагревает холодную еду. Еда должна прийти горячей.'),
    },
    {
      text: l('Hladnu hranu drži ispod 5°C, posude na ledu.', 'Keep cold food below 5°C, containers on ice.', 'Держи холодную еду ниже 5°C, ёмкости на льду.'),
      params: [l('do 5°C', 'up to 5°C', 'до 5°C')],
      done: l('Led je ispod i oko posuda, i dopunjava se kad se otopi.', 'Ice is under and around the containers and is topped up as it melts.', 'Лёд под ёмкостями и вокруг, его добавляют по мере таяния.'),
      why: l('Salata sa majonezom na sobnoj temperaturi je jedan od najčešćih uzroka trovanja na proslavama.', 'Mayonnaise salad at room temperature is one of the most common causes of food poisoning at parties.', 'Салат с майонезом при комнатной температуре — одна из самых частых причин отравлений на праздниках.'),
    },
    {
      text: l('Biraj jela koja podnose čekanje.', 'Choose dishes that can stand waiting.', 'Выбирай блюда, которые выдерживают ожидание.'),
      params: [l('braziranje, gulaš, pečeno povrće: da', 'braises, goulash, roast vegetables: yes', 'тушёное, гуляш, запечённые овощи: да'), l('prženo, riba na koži: ne', 'fried food, skin-on fish: no', 'жареное, рыба с кожей: нет')],
      done: l('Na liniji su jela koja posle sat vremena izgledaju kao na početku.', 'The line holds dishes that look the same after an hour as at the start.', 'На линии блюда, которые через час выглядят как в начале.'),
      why: l('Para u posudi razmekša svaku koricu. Braziranom jelu sat vremena na toplom ne smeta.', 'The steam in a container softens any crust. An hour on the heat does a braise no harm.', 'Пар в ёмкости размягчает любую корочку. Тушёному блюду час в тепле не вредит.'),
    },
    {
      text: l('Dopunjavaj malim turama, novom posudom, nikad doliva.', 'Refill in small batches, with a fresh container, never topping up.', 'Пополняй небольшими партиями, новой ёмкостью, никогда не доливая.'),
      done: l('Posuda se menja celom, a stara ide u kuhinju.', 'The container is swapped whole and the old one goes back to the kitchen.', 'Ёмкость меняют целиком, старая уходит на кухню.'),
      why: l('Nova hrana preko stare meša vremena, a ostaci sa dna nikad ne odu. Isto pravilo kao 3.1.3.', 'New food over old mixes the times, and the leftovers at the bottom never leave. The same rule as 3.1.3.', 'Новая еда поверх старой смешивает время, а остатки со дна никогда не уходят. То же правило, что в 3.1.3.'),
    },
    {
      text: l('Upisuj temperature i baci hranu kojoj je isteklo vreme.', 'Log the temperatures and throw out food whose time is up.', 'Записывай температуры и выбрасывай еду, время которой вышло.'),
      params: [l('van kontrole: najviše 2 h', 'out of control: 2 h at most', 'без контроля: не более 2 ч')],
      done: l('Lista pokazuje temperaturu svake posude kroz ceo događaj.', 'The log shows the temperature of every container through the whole event.', 'Журнал показывает температуру каждой ёмкости на протяжении всего мероприятия.'),
      why: l('Hrana koja je pala ispod 63°C ili porasla iznad 5°C ima najviše dva sata, i ne vraća se nazad u kuhinju.', 'Food that has dropped below 63°C or risen above 5°C has two hours at most, and does not go back into the kitchen.', 'У еды, опустившейся ниже 63°C или поднявшейся выше 5°C, не более двух часов, и на кухню она не возвращается.'),
    },
  ],
  mistake: {
    title: l('Hladna hrana vraćena u grejač „da se zagreje“.', 'Cold food put back on the heater "to warm it up".', 'Холодная еда возвращена на подогрев, «чтобы согрелась».'),
    fix: l(
      'Grejač za držanje greje sporo i hrana satima prolazi kroz opasnu zonu. Hrana koja se ohladila ide u kuhinju i podgreva se brzo do 75°C (3.11.2), ili se baca.',
      'A holding heater warms slowly and the food spends hours in the danger zone. Food that has cooled goes to the kitchen and is reheated fast to 75°C (3.11.2), or thrown out.',
      'Подогрев для удержания греет медленно, и еда часами проходит опасную зону. Остывшая еда уходит на кухню и быстро разогревается до 75°C (3.11.2) или выбрасывается.',
    ),
  },
  think: {
    question: l('Koje jelo najbolje podnosi dva sata na toploj liniji?', 'Which dish best survives two hours on a hot line?', 'Какое блюдо лучше всего выдерживает два часа на горячей линии?'),
    options: [
      l('Gulaš', 'Goulash', 'Гуляш'),
      l('Pomfrit', 'Chips', 'Картофель фри'),
      l('Riba na koži', 'Skin-on fish', 'Рыба с кожей'),
    ],
    answer: 0,
    explain: l(
      'Gulaš je već kuvan dugo u tečnosti, i para mu ne smeta. Pomfrit i koža ribe omekšaju za nekoliko minuta u zatvorenoj posudi.',
      'Goulash has already cooked a long time in liquid, so steam does it no harm. Chips and fish skin go soft within minutes in a covered container.',
      'Гуляш уже долго варился в жидкости, и пар ему не вредит. Картофель фри и рыбья кожа размягчаются за минуты в закрытой ёмкости.',
    ),
  },
}

const breakfast: Lesson = {
  id: '3.14.3',
  title: l('Hotelski doručak', 'Hotel breakfast', 'Гостиничный завтрак'),
  goal: l(
    'Isplaniraš hotelski doručak: količine po gostu, priprema dan ranije, stanica za jaja i dopuna kroz najjači sat.',
    'You plan a hotel breakfast: quantities per guest, prep the night before, an egg station and refills through the busiest hour.',
    'Ты планируешь гостиничный завтрак: количество на гостя, заготовку накануне, станцию яиц и пополнение в пиковый час.',
  ),
  minutes: 7,
  key: { value: l('7:30–9:00', '7:30–9:00', '7:30–9:00'), label: l('najjači deo doručka', 'the busiest part of breakfast', 'пик завтрака') },
  need: [
    { item: l('Broj gostiju u hotelu za tu noć', 'The number of hotel guests that night', 'Число гостей отеля на ту ночь'), qty: l('1', '1', '1') },
    { item: l('Stanica za jaja: ringla, tiganji, jaja', 'Egg station: hob, pans, eggs', 'Станция яиц: плита, сковороды, яйца'), qty: l('1', '1', '1') },
    { item: l('Etikete sa alergenima i hvataljke', 'Allergen labels and tongs', 'Этикетки с аллергенами и щипцы'), qty: l('po jelu', 'one per dish', 'на каждое блюдо') },
  ],
  why: l(
    'Doručak je obrok koji jede skoro svaki gost hotela, i jedini koji jede pre nego što je potpuno budan. Mora da radi bez greške, svako jutro.',
    'Breakfast is the meal almost every hotel guest eats, and the only one they eat before they are fully awake. It must work without a hitch, every morning.',
    'Завтрак — приём пищи, который едят почти все гости отеля, и единственный, который едят ещё не до конца проснувшись. Он должен работать безупречно каждое утро.',
  ),
  steps: [
    {
      text: l('Iz broja gostiju izračunaj količine.', 'Work out quantities from the guest count.', 'Посчитай количество по числу гостей.'),
      params: [l('npr. po gostu: 2 jaja, 1 pecivo, 150 g voća', 'e.g. per guest: 2 eggs, 1 pastry, 150 g fruit', 'например на гостя: 2 яйца, 1 выпечка, 150 г фруктов')],
      done: l('Za svako jelo imaš količinu za sutrašnje jutro.', 'You have a quantity of every item for tomorrow morning.', 'Для каждого блюда есть количество на завтрашнее утро.'),
      why: l('Hotel zna broj gostiju veče ranije. Doručak je jedini obrok sa skoro tačnim brojem unapred.', 'The hotel knows the guest count the night before. Breakfast is the one meal with an almost exact number in advance.', 'Отель знает число гостей накануне вечером. Завтрак — единственный приём пищи с почти точным числом заранее.'),
    },
    {
      text: l('Veče ranije pripremi sve što može da čeka.', 'The night before, prep everything that can wait.', 'Накануне вечером заготовь всё, что может подождать.'),
      params: [l('voće, sirevi, narezak, testo, posude', 'fruit, cheeses, cold cuts, dough, dishes', 'фрукты, сыры, нарезка, тесто, посуда')],
      done: l('Ujutru ostaje samo pečenje, jaja i postavljanje.', 'In the morning only the baking, eggs and setting out remain.', 'Утром остаются только выпечка, яйца и выкладка.'),
      why: l('Smena doručka počinje u 5 ili 6 ujutru. Sve što je urađeno uveče je san koji kuvar nije izgubio.', 'The breakfast shift starts at 5 or 6 am. Everything done the night before is sleep the cook did not lose.', 'Смена завтрака начинается в 5–6 утра. Всё сделанное накануне — сон, который повар не потерял.'),
    },
    {
      text: l('Na stanici za jaja radi à la minute: omlet, na oko, poširana.', 'Run the egg station à la minute: omelette, fried, poached.', 'На станции яиц готовь по заказу: омлет, глазунья, пашот.'),
      done: l('Svaki gost dobija jaja po svom izboru, sveža, za par minuta.', 'Every guest gets eggs as they like them, fresh, within a few minutes.', 'Каждый гость получает яйца на свой выбор, свежие, за пару минут.'),
      why: l('Kajgana iz grejača posle pola sata je guma. Stanica za jaja je ono što gosti pamte i pominju u recenzijama.', 'Scrambled egg from a heater after half an hour is rubber. The egg station is what guests remember and mention in reviews.', 'Омлет-болтунья с подогрева через полчаса — резина. Станция яиц — то, что гости помнят и упоминают в отзывах.'),
      drawing: 'omeletteFold',
    },
    {
      text: l('Dopunjavaj po satu, najviše u najjačem delu jutra.', 'Refill hour by hour, most in the busiest part of the morning.', 'Пополняй по часам, больше всего в самую загруженную часть утра.'),
      params: [l('7:30–9:00', '7:30–9:00', '7:30–9:00')],
      done: l('Nijedna posuda nije prazna kad gost dođe do nje.', 'No dish is empty when a guest reaches it.', 'Ни одна ёмкость не пуста, когда до неё доходит гость.'),
      why: l('Prazna posuda u 8:15 je gost koji čeka i loša ocena. Dopuna kreće pre nego što se isprazni.', 'An empty dish at 8:15 is a guest waiting and a bad rating. The refill starts before it runs out.', 'Пустая ёмкость в 8:15 — ждущий гость и плохая оценка. Пополнение начинается до того, как она опустеет.'),
    },
    {
      text: l('Uz svako jelo stavi etiketu sa alergenima i posebnu hvataljku.', 'Put an allergen label and its own tongs by every dish.', 'У каждого блюда поставь этикетку с аллергенами и отдельные щипцы.'),
      done: l('Gost zna šta jede, a hvataljke se ne sele iz posude u posudu.', 'Guests know what they are eating, and tongs do not wander from dish to dish.', 'Гость знает, что ест, а щипцы не кочуют из ёмкости в ёмкость.'),
      why: l('Jedna hvataljka za orašaste plodove i za voćnu salatu je alergen u voćnoj salati (3.11.4).', 'One pair of tongs for the nuts and the fruit salad is an allergen in the fruit salad (3.11.4).', 'Одни щипцы для орехов и для фруктового салата — аллерген во фруктовом салате (3.11.4).'),
    },
  ],
  mistake: {
    title: l('Kajgana napravljena u 6 ujutru za ceo doručak.', 'Scrambled eggs made at 6 am for the whole breakfast.', 'Болтунья сделана в 6 утра на весь завтрак.'),
    fix: l(
      'Do 9 sati je suva, siva i gumena. Jaja se prave u malim turama na svakih 15–20 minuta, ili po narudžbi na stanici za jaja.',
      'By 9 o\'clock it is dry, grey and rubbery. Eggs are made in small batches every 15–20 minutes, or to order at the egg station.',
      'К 9 часам она сухая, серая и резиновая. Яйца готовят небольшими партиями каждые 15–20 минут или на заказ на станции яиц.',
    ),
  },
  think: {
    question: l('Kada se pravi glavnina pripreme za doručak?', 'When is most of the breakfast prep done?', 'Когда делают основную часть заготовки к завтраку?'),
    options: [
      l('Veče ranije', 'The night before', 'Накануне вечером'),
      l('U 5 ujutru', 'At 5 am', 'В 5 утра'),
      l('Dok gosti jedu', 'While guests are eating', 'Пока гости едят'),
    ],
    answer: 0,
    explain: l(
      'Sve što može da čeka, čeka u frižideru: voće, sirevi, testo. Ujutru ostaje samo ono što mora biti sveže: pečenje i jaja.',
      'Everything that can wait waits in the fridge: fruit, cheeses, dough. In the morning only what must be fresh is left: baking and eggs.',
      'Всё, что может ждать, ждёт в холодильнике: фрукты, сыры, тесто. Утром остаётся только то, что должно быть свежим: выпечка и яйца.',
    ),
  },
}

const roomService: Lesson = {
  id: '3.14.4',
  title: l('Room service', 'Room service', 'Рум-сервис'),
  goal: l(
    'Napraviš meni i postupak za room service, tako da jelo stigne do sobe toplo, celo i tačno.',
    'You build a menu and a routine for room service, so a dish reaches the room hot, intact and correct.',
    'Ты составляешь меню и порядок работы рум-сервиса, чтобы блюдо доходило до номера горячим, целым и правильным.',
  ),
  minutes: 6,
  key: { value: l('15–20 min', '15–20 min', '15–20 мин'), label: l('put od kuhinje do sobe', 'from kitchen to room', 'путь от кухни до номера') },
  need: [
    { item: l('Meni jela koja izdrže put', 'A menu of dishes that travel well', 'Меню блюд, выдерживающих доставку'), qty: l('1', '1', '1') },
    { item: l('Topli tanjiri i poklopci', 'Warm plates and cloches', 'Тёплые тарелки и клоши'), qty: l('po jelu', 'one per dish', 'на каждое блюдо') },
    { item: l('Lista za poslužavnik', 'A tray checklist', 'Чек-лист подноса'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Gost koji naruči u sobu ne vidi kuhinju, ni konobara pri stolu, ni šefa. Vidi samo poslužavnik, i po njemu ocenjuje ceo hotel.',
    'A guest who orders to their room sees neither the kitchen, a waiter at the table nor the chef. They see only the tray, and judge the whole hotel by it.',
    'Гость, заказавший в номер, не видит ни кухни, ни официанта за столом, ни шефа. Он видит только поднос и по нему оценивает весь отель.',
  ),
  steps: [
    {
      text: l('Meni sastavi od jela koja podnose 15–20 minuta puta.', 'Build the menu from dishes that can take a 15–20 minute journey.', 'Составь меню из блюд, выдерживающих 15–20 минут пути.'),
      params: [l('da: čorbe, braziranje, testenine, sendviči', 'yes: soups, braises, pasta, sandwiches', 'да: супы, тушёное, паста, сэндвичи'), l('ne: suflé, pomfrit', 'no: soufflé, chips', 'нет: суфле, картофель фри')],
      done: l('Svako jelo na room service meniju stiže u sobu kao što je izašlo iz kuhinje.', 'Every dish on the room service menu reaches the room the way it left the kitchen.', 'Каждое блюдо меню рум-сервиса доходит до номера таким, каким вышло с кухни.'),
      why: l('Hrskavo pod poklopcem postane mekano za pet minuta. Room service meni nije isti kao meni restorana.', 'Anything crisp turns soft under a cloche within five minutes. A room service menu is not the restaurant menu.', 'Хрустящее под клошем размягчается за пять минут. Меню рум-сервиса — не меню ресторана.'),
    },
    {
      text: l('Koristi zagrejane tanjire i poklopce.', 'Use warmed plates and cloches.', 'Используй подогретые тарелки и клоши.'),
      params: [l('tanjir oko 60°C', 'plate about 60°C', 'тарелка около 60°C')],
      done: l('Jelo je toplo kad gost podigne poklopac.', 'The food is hot when the guest lifts the cloche.', 'Еда горячая, когда гость поднимает клош.'),
      why: l('Hladan tanjir izvuče toplotu iz hrane za par minuta. Topli tanjir je kao termos (2.1.5).', 'A cold plate pulls the heat out of the food within minutes. A warm plate works like a flask (2.1.5).', 'Холодная тарелка вытягивает тепло из еды за минуты. Тёплая тарелка работает как термос (2.1.5).'),
      drawing: 'warmPlates',
    },
    {
      text: l('Sos i dresing stavi posebno, u posudici.', 'Put sauce and dressing on the side, in a small pot.', 'Соус и заправку подавай отдельно, в соуснике.'),
      done: l('Salata je hrskava, a meso nije natopljeno.', 'The salad is crisp and the meat is not soaked.', 'Салат хрустящий, а мясо не размокло.'),
      why: l('Gost prelije sam kad je spreman. Sos koji putuje preko hrane razmekša sve ispod sebe.', 'The guest pours it when ready. Sauce travelling on top of the food softens everything beneath.', 'Гость польёт сам, когда будет готов. Соус, путешествующий поверх еды, размягчает всё под ним.'),
    },
    {
      text: l('Proveri poslužavnik po listi pre nego što izađe.', 'Check the tray against the list before it leaves.', 'Проверь поднос по списку перед отправкой.'),
      params: [l('pribor · so i biber · salvete · račun · alergije', 'cutlery · salt and pepper · napkins · bill · allergies', 'приборы · соль и перец · салфетки · счёт · аллергии')],
      done: l('Na poslužavniku je sve sa liste, i ništa ne fali.', 'Everything on the list is on the tray, and nothing is missing.', 'На подносе всё по списку, ничего не забыто.'),
      why: l('Zaboravljena viljuška znači drugi put do sobe i hladno jelo. Lista ne zaboravlja (3.1.5).', 'A forgotten fork means a second trip to the room and a cold dish. A list does not forget (3.1.5).', 'Забытая вилка — второй поход в номер и холодное блюдо. Список не забывает (3.1.5).'),
    },
    {
      text: l('Meri vreme od narudžbe do vrata sobe.', 'Time it from order to the room door.', 'Замеряй время от заказа до двери номера.'),
      params: [l('cilj do 30 min', 'target up to 30 min', 'цель до 30 мин')],
      done: l('Gost zna kada da očekuje jelo, i ono stigne tada.', 'The guest knows when to expect the food, and it arrives then.', 'Гость знает, когда ждать еду, и она приходит вовремя.'),
      why: l('Gost u sobi gleda na sat. Obećanih 30 minuta koje traju 30 je bolje od obećanih 20 koje traju 40.', 'A guest in a room watches the clock. Thirty minutes promised and kept beats twenty promised that take forty.', 'Гость в номере смотрит на часы. Обещанные и выдержанные 30 минут лучше обещанных 20, которые длятся 40.'),
    },
  ],
  mistake: {
    title: l('Room service meni je isti kao meni restorana.', 'The room service menu is the same as the restaurant menu.', 'Меню рум-сервиса такое же, как меню ресторана.'),
    fix: l(
      'Pola jela stigne u sobu mekano, hladno ili razliveno. Room service meni ima manje jela, i sva su izabrana jer podnose put.',
      'Half the dishes reach the room soft, cold or spilled. A room service menu has fewer dishes, all chosen because they travel well.',
      'Половина блюд доходит до номера размякшими, холодными или разлитыми. В меню рум-сервиса меньше блюд, и все выбраны потому, что выдерживают путь.',
    ),
  },
  think: {
    question: l('Zašto se sos za room service šalje posebno?', 'Why is the sauce sent separately for room service?', 'Почему соус для рум-сервиса отправляют отдельно?'),
    options: [
      l('Da ne razmekša hranu dok putuje', 'So it does not soften the food on the way', 'Чтобы не размягчил еду в пути'),
      l('Da gost dobije više sosa', 'So the guest gets more sauce', 'Чтобы гость получил больше соуса'),
      l('Zbog izgleda', 'For looks', 'Ради вида'),
    ],
    answer: 0,
    explain: l(
      'Petnaest minuta sosa na mesu ili salati je dovoljno da korica i listovi omekšaju. Posebna posudica čuva teksturu do trenutka kad gost jede.',
      'Fifteen minutes of sauce on meat or salad is enough to soften the crust and the leaves. A separate pot keeps the texture until the moment the guest eats.',
      'Пятнадцати минут соуса на мясе или салате достаточно, чтобы размягчить корочку и листья. Отдельный соусник сохраняет текстуру до момента, когда гость ест.',
    ),
  },
}

const buffet: Lesson = {
  id: '3.14.5',
  title: l('Švedski sto', 'The buffet', 'Шведский стол'),
  goal: l(
    'Postaviš švedski sto koji teče u jednom smeru, izgleda puno celo vreme i drži hranu bezbednom.',
    'You set up a buffet that flows one way, looks full the whole time and keeps food safe.',
    'Ты организуешь шведский стол, который идёт в одном направлении, всё время выглядит полным и держит еду безопасной.',
  ),
  minutes: 6,
  key: { value: l('1', '1', '1'), label: l('smer kretanja gostiju', 'direction for guests', 'направление движения гостей') },
  need: [
    { item: l('Stolovi, postolja za visinu, posude', 'Tables, risers for height, dishes', 'Столы, подставки для высоты, ёмкости'), qty: l('1 set', '1 set', '1 набор') },
    { item: l('Kartice sa nazivom i alergenima', 'Cards with names and allergens', 'Карточки с названием и аллергенами'), qty: l('po jelu', 'one per dish', 'на каждое блюдо') },
    { item: l('Termometar i lista (3.14.2)', 'Thermometer and log (3.14.2)', 'Термометр и журнал (3.14.2)'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Švedski sto je tanjir koji gosti slažu sami. Kuvar ne kontroliše porciju ni redosled, ali kontroliše sve ostalo: tok, izgled i bezbednost.',
    'A buffet is a plate the guests assemble themselves. The cook does not control the portion or the order, but controls everything else: the flow, the look and the safety.',
    'Шведский стол — тарелка, которую гости собирают сами. Повар не контролирует порцию и порядок, но контролирует всё остальное: поток, вид и безопасность.',
  ),
  steps: [
    {
      text: l('Postavi sto u jednom smeru: tanjiri, hladno, toplo, deserti.', 'Lay the table out one way: plates, cold, hot, desserts.', 'Расставь стол в одном направлении: тарелки, холодное, горячее, десерты.'),
      done: l('Gosti idu jedan za drugim i niko se ne vraća protiv reda.', 'Guests move one behind another and nobody goes back against the line.', 'Гости идут друг за другом, и никто не идёт против потока.'),
      why: l('Tanjiri na početku, toplo na kraju glavnog dela, da se hrana ne hladi na tanjiru dok gost bira salatu.', 'Plates at the start, hot food at the end of the main section, so food does not cool on the plate while the guest picks salad.', 'Тарелки в начале, горячее в конце основной части, чтобы еда не остывала на тарелке, пока гость выбирает салат.'),
    },
    {
      text: l('Napravi visinu i boju.', 'Create height and colour.', 'Создай высоту и цвет.'),
      params: [l('3 visine', '3 heights', '3 уровня')],
      done: l('Sto se vidi sa vrata sale, a ne samo izbliza.', 'The table can be seen from the dining room door, not just up close.', 'Стол виден от входа в зал, а не только вблизи.'),
      why: l('Ravan sto deluje kao menza. Postolja i boja daju utisak obilja bez više hrane (2.13.1).', 'A flat table looks like a canteen. Risers and colour give an impression of plenty without more food (2.13.1).', 'Плоский стол выглядит как столовая. Подставки и цвет создают впечатление изобилия без лишней еды (2.13.1).'),
    },
    {
      text: l('Koristi manje posude i dopunjavaj ih često.', 'Use smaller dishes and refill them often.', 'Используй меньшие ёмкости и пополняй их часто.'),
      done: l('Svaka posuda izgleda puna celo vreme.', 'Every dish looks full the whole time.', 'Каждая ёмкость всё время выглядит полной.'),
      why: l('Pola prazna velika posuda izgleda kao ostaci. Mala puna posuda izgleda sveže, a manje hrane stoji na toplom (3.14.2).', 'A half-empty large dish looks like leftovers. A small full one looks fresh, and less food sits out (3.14.2).', 'Полупустая большая ёмкость выглядит как объедки. Маленькая полная выглядит свежей, и меньше еды стоит без дела (3.14.2).'),
    },
    {
      text: l('Uz svako jelo stavi karticu sa nazivom i alergenima.', 'Put a card with the name and allergens by every dish.', 'У каждого блюда поставь карточку с названием и аллергенами.'),
      params: [l('na sva tri jezika ako ima stranih gostiju', 'in all three languages if there are foreign guests', 'на трёх языках, если есть иностранные гости')],
      done: l('Gost bez pitanja zna šta je u svakoj posudi.', 'A guest knows what is in every dish without asking.', 'Гость без вопросов знает, что в каждой ёмкости.'),
      why: l('Kod švedskog stola nema konobara da objasni. Kartica radi njegov posao (3.9.2).', 'At a buffet there is no waiter to explain. The card does that job (3.9.2).', 'У шведского стола нет официанта, чтобы объяснить. Карточка делает его работу (3.9.2).'),
    },
    {
      text: l('Prati temperaturu i vreme za svaku posudu.', 'Track the temperature and time for every dish.', 'Следи за температурой и временем каждой ёмкости.'),
      params: [l('toplo iznad 63°C', 'hot above 63°C', 'горячее выше 63°C'), l('hladno do 5°C', 'cold up to 5°C', 'холодное до 5°C'), l('van kontrole: najviše 2 h', 'out of control: 2 h at most', 'без контроля: не более 2 ч')],
      done: l('Lista pokazuje svaku posudu kroz ceo događaj.', 'The log shows every dish through the whole event.', 'Журнал показывает каждую ёмкость на протяжении всего мероприятия.'),
      why: l('Gost ne zna koliko dugo hrana stoji. Zato kuhinja mora da zna, i da baci kad vreme istekne.', 'The guest does not know how long food has been out. That is why the kitchen must, and throw it away when the time is up.', 'Гость не знает, сколько еда стоит. Поэтому знать должна кухня и выбрасывать, когда время вышло.'),
    },
  ],
  mistake: {
    title: l('Velike posude napunjene jednom za ceo događaj.', 'Large dishes filled once for the whole event.', 'Большие ёмкости наполнены один раз на всё мероприятие.'),
    fix: l(
      'Posle sat vremena izgledaju kao ostaci, a hrana na dnu je satima van kontrole temperature. Male posude, česta zamena, a stara posuda ide u kuhinju, ne u novu.',
      'After an hour they look like leftovers, and the food at the bottom has been out of temperature control for hours. Small dishes, frequent swaps, and the old dish goes to the kitchen, not into the new one.',
      'Через час они выглядят как объедки, а еда на дне часами вне температурного контроля. Маленькие ёмкости, частая замена, и старая ёмкость уходит на кухню, а не в новую.',
    ),
  },
  think: {
    question: l('Zašto se na švedskom stolu koriste manje posude?', 'Why are smaller dishes used on a buffet?', 'Почему на шведском столе используют меньшие ёмкости?'),
    options: [
      l('Izgledaju pune i hrana kraće stoji', 'They look full and food sits out for less time', 'Они выглядят полными, и еда меньше стоит'),
      l('Jeftinije su', 'They are cheaper', 'Они дешевле'),
      l('Lakše se peru', 'They are easier to wash', 'Их легче мыть'),
    ],
    answer: 0,
    explain: l(
      'Mala posuda se brzo isprazni i zameni svežom. To je i lepše i bezbednije, jer ni jedna porcija ne stoji satima.',
      'A small dish empties fast and is swapped for a fresh one. That looks better and is safer, because no portion sits out for hours.',
      'Маленькая ёмкость быстро пустеет и заменяется свежей. Это и красивее, и безопаснее: ни одна порция не стоит часами.',
    ),
  },
}

export const hotelLessons: Lesson[] = [banquet, holding, breakfast, roomService, buffet]
