import { l, type Lesson } from '../types'

// Module 11 · Pulses and grains. Dried beans and chickpeas need water and time before heat;
// lentils and bulgur do not. The test for done is always the bite, never the clock alone.

const beans: Lesson = {
  id: '11.1',
  title: l('Pasulj: namakanje i kuvanje', 'Beans: soaking and cooking', 'Фасоль: замачивание и варка'),
  goal: l(
    'Skuvaš pasulj koji je kremast iznutra, a zrno ostaje celo.',
    'You cook beans that are creamy inside while each bean stays whole.',
    'Ты варишь фасоль, кремовую внутри, а каждое зерно остаётся целым.',
  ),
  minutes: 8,
  key: { value: l('8–12 h', '8–12 h', '8–12 ч'), label: l('namakanje', 'soaking', 'замачивание') },
  need: [
    { item: l('Beli pasulj (tetovac ili gradištanac)', 'Dried white beans', 'Сухая белая фасоль'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Luk, šargarepa, lovor', 'Onion, carrot, bay leaf', 'Лук, морковь, лавр'), qty: l('1 + 1 + 2', '1 + 1 + 2', '1 + 1 + 2') },
    { item: l('Ulje i brašno', 'Oil and flour', 'Масло и мука'), qty: l('po 2 kašike', '2 tbsp each', 'по 2 ст. л.') },
    { item: l('Slatka aleva paprika', 'Sweet paprika', 'Сладкая паприка'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
    { item: l('Veliki lonac', 'Large pot', 'Большая кастрюля'), qty: l('5 l', '5 l', '5 л') },
  ],
  why: l(
    'Pasulj je najjeftiniji protein u prodavnici. Dobro skuvan je jelo, loše skuvan je kamenčić u čorbi.',
    'Beans are the cheapest protein in the shop. Cooked well they are a meal; cooked badly they are pebbles in broth.',
    'Фасоль — самый дешёвый белок в магазине. Хорошо сваренная — это блюдо, плохо — камешки в бульоне.',
  ),
  steps: [
    {
      text: l('Preberi pasulj i isperi ga.', 'Pick over the beans and rinse them.', 'Перебери фасоль и промой.'),
      done: l('Nema kamenčića, praznih ni smežuranih zrna.', 'No stones, empty or shrivelled beans left.', 'Нет камешков, пустых и сморщенных зёрен.'),
      why: l('Kamenčić se ne vidi u loncu, a zub ga nađe.', 'A pebble is invisible in the pot, but a tooth finds it.', 'Камешек не видно в кастрюле, но зуб его найдёт.'),
    },
    {
      text: l('Potopi pasulj u hladnu vodu preko noći.', 'Soak the beans in cold water overnight.', 'Замочи фасоль в холодной воде на ночь.'),
      params: [l('3 × više vode', '3 × the water', 'воды в 3 раза больше'), l('8–12 h', '8–12 h', '8–12 ч')],
      done: l('Zrna su se duplo naduvala i glatka su, bez bora.', 'The beans have doubled and are smooth, without wrinkles.', 'Зёрна увеличились вдвое и гладкие, без морщин.'),
      why: l('Zrno koje je upilo vodu se kuva ravnomerno. Nenamočeno pukne spolja dok je sredina još tvrda.', 'A bean full of water cooks evenly. An unsoaked one bursts outside while the centre is still hard.', 'Набухшее зерно варится равномерно. Незамоченное лопается снаружи, пока центр твёрдый.'),
      drawing: 'soakBeans',
    },
    {
      text: l('Prospi vodu, nalij svežu i kuvaj na jakoj vatri.', 'Drain, cover with fresh water and boil hard.', 'Слей воду, залей свежей и вари на сильном огне.'),
      params: [l('10 min jako', '10 min hard boil', '10 мин сильно'), l('pa prospi i tu vodu', 'then drain again', 'потом снова слей')],
      done: l('Voda je mutna i penušava, pasulj je i dalje tvrd.', 'The water is cloudy and foamy, the beans still hard.', 'Вода мутная и пенистая, фасоль ещё твёрдая.'),
      why: l('Sirov pasulj sadrži lektine koji izazivaju muku. Deset minuta jakog ključanja ih uništi. Nikad ga ne kuvaj samo na tihoj vatri.', 'Raw beans contain lectins that make you sick. Ten minutes of hard boiling destroys them. Never cook beans on low heat only.', 'Сырая фасоль содержит лектины, вызывающие отравление. Десять минут сильного кипения их разрушают. Никогда не вари фасоль только на слабом огне.'),
      drawing: 'boil',
    },
    {
      text: l('Nalij novu vodu, dodaj povrće i lovor i krčkaj.', 'Add fresh water, the vegetables and bay, and simmer.', 'Залей новой водой, добавь овощи и лавр и томи.'),
      params: [l('1–1.5 h', '1–1.5 h', '1–1,5 ч'), l('so u poslednjih 30 min', 'salt in the last 30 min', 'соль в последние 30 мин')],
      done: l('Zrno se lako zgnječi jezikom o nepce, a koža je cela.', 'A bean squashes easily against the roof of your mouth and the skin is whole.', 'Зерно легко раздавливается языком о нёбо, кожица целая.'),
      why: l('Proveravaj pet zrna, ne jedno. Zrna nisu ista i poslednje mora biti meko.', 'Test five beans, not one. They are not all the same, and the last must be soft too.', 'Проверяй пять зёрен, а не одно. Они разные, и последнее тоже должно быть мягким.'),
      drawing: 'simmer',
    },
    {
      text: l('Napravi zapršku sa paprikom van vatre i umešaj je u pasulj.', 'Make a roux, add paprika off the heat and stir it into the beans.', 'Сделай ру, вне огня добавь паприку и вмешай в фасоль.'),
      params: [l('2 + 2 kašike', '2 + 2 tbsp', '2 + 2 ст. л.'), l('krčkaj još 10 min', 'simmer 10 min more', 'томи ещё 10 мин')],
      done: l('Čorba je gusta, crvenkasta i prekriva kašiku.', 'The broth is thick, reddish and coats a spoon.', 'Бульон густой, красноватый и обволакивает ложку.'),
      why: l('Aleva paprika izgori za par sekundi na vreloj masnoći i postane gorka. Zato ide van vatre.', 'Paprika burns in seconds in hot fat and turns bitter. That is why it goes in off the heat.', 'Паприка сгорает за секунды в горячем жире и горчит. Поэтому её добавляют вне огня.'),
      drawing: 'bloomSpice',
    },
  ],
  mistake: {
    title: l('So i paradajz od početka.', 'Salt and tomato from the start.', 'Соль и томат с самого начала.'),
    fix: l(
      'Kiselina iz paradajza drži kožu zrna tvrdom i kuvanje traje duplo. Paradajz, sirće i limun idu tek kad je pasulj mekan. So u poslednjih pola sata.',
      'Acid from tomato keeps the bean skins tough and cooking takes twice as long. Tomato, vinegar and lemon go in only once the beans are soft. Salt in the last half hour.',
      'Кислота томата держит кожицу твёрдой, и варка длится вдвое дольше. Томат, уксус и лимон — только когда фасоль мягкая. Соль — в последние полчаса.',
    ),
  },
  think: {
    question: l('Pasulj se kuva 2 sata i i dalje je tvrd. Najverovatniji uzrok?', 'The beans have cooked 2 hours and are still hard. The likeliest cause?', 'Фасоль варится 2 часа и всё ещё твёрдая. Самая вероятная причина?'),
    options: [
      l('Star pasulj ili kiselina u loncu', 'Old beans, or acid in the pot', 'Старая фасоль или кислота в кастрюле'),
      l('Premalo vode', 'Too little water', 'Мало воды'),
      l('Previše lovora', 'Too much bay leaf', 'Слишком много лавра'),
    ],
    answer: 0,
    explain: l(
      'Pasulj stariji od godinu dana se nikad ne skuva kako treba. Kupuj ga gde se brzo prodaje. Ako nije star, traži paradajz ili sirće u loncu.',
      'Beans older than a year never cook properly. Buy them where they sell fast. If they are not old, look for tomato or vinegar in the pot.',
      'Фасоль старше года никогда не разварится как надо. Покупай там, где её быстро раскупают. Если не старая — ищи томат или уксус в кастрюле.',
    ),
  },
  recipe: { name: l('Pasulj čorbast', 'Bean soup (pasulj)', 'Фасолевый суп (пасуль)'), protein: 5.5, carbs: 13, fat: 2, kcal: 92 },
}

const prebranac: Lesson = {
  id: '11.2',
  title: l('Prebranac', 'Baked beans (prebranac)', 'Запечённая фасоль (пребранац)'),
  goal: l(
    'Ispečeš prebranac sa slatkim lukom i korom, a pasulj ostaje sočan.',
    'You bake prebranac with sweet onion and a crust on top, while the beans stay moist.',
    'Ты запекаешь пребранац со сладким луком и корочкой, а фасоль остаётся сочной.',
  ),
  minutes: 7,
  key: { value: l('1 : 1', '1 : 1', '1 : 1'), label: l('pasulj : luk', 'beans : onion', 'фасоль : лук') },
  need: [
    { item: l('Kuvan beli pasulj (11.1), bez zaprške', 'Cooked white beans (11.1), no roux', 'Варёная белая фасоль (11.1), без ру'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Tečnost od kuvanja pasulja', 'The bean cooking liquid', 'Отвар фасоли'), qty: l('300 ml', '300 ml', '300 мл') },
    { item: l('Crni luk', 'Onions', 'Репчатый лук'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('100 ml', '100 ml', '100 мл') },
    { item: l('Aleva paprika, lovor, biber', 'Paprika, bay, pepper', 'Паприка, лавр, перец'), qty: l('—', '—', '—') },
    { item: l('Zemljana ili staklena posuda', 'Clay or glass baking dish', 'Глиняная или стеклянная форма'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Prebranac je pola pasulj, pola luk. Ceo ukus je u luku: ako je sladak i mek, jelo je dobro.',
    'Prebranac is half beans, half onion. All the flavour is in the onion: if it is sweet and soft, the dish is good.',
    'Пребранац — наполовину фасоль, наполовину лук. Весь вкус в луке: если он сладкий и мягкий, блюдо удалось.',
  ),
  steps: [
    {
      text: l('Iseci luk na tanke polumesece.', 'Slice the onions into thin half-moons.', 'Нарежь лук тонкими полукольцами.'),
      params: [l('3 mm', '3 mm', '3 мм')],
      done: l('Sve polutke su iste debljine.', 'Every slice is the same thickness.', 'Все полукольца одинаковой толщины.'),
      why: l('Ista tehnika kao 2.3, samo bez horizontalnog reza.', 'The same technique as 2.3, without the horizontal cut.', 'Та же техника, что в 2.3, без горизонтального надреза.'),
    },
    {
      text: l('Dinstaj luk na ulju dok ne postane mekan i zlatan.', 'Cook the onion slowly in the oil until soft and golden.', 'Томи лук на масле до мягкости и золотистого цвета.'),
      params: [l('srednje tiha vatra', 'medium-low heat', 'огонь ниже среднего'), l('25–30 min', '25–30 min', '25–30 мин')],
      done: l('Luk se raspada pod varjačom i sladak je kao džem.', 'The onion falls apart under the spoon and is sweet as jam.', 'Лук разваливается под ложкой и сладкий, как варенье.'),
      why: l('Polako dinstanje pretvara oštrinu luka u šećer. Na jakoj vatri izgori pre nego što omekša.', 'Slow cooking turns the onion\'s sharpness into sugar. On high heat it burns before it softens.', 'Медленное томление превращает остроту лука в сахар. На сильном огне он сгорит раньше, чем смягчится.'),
      drawing: 'sweatVeg',
    },
    {
      text: l('Skloni luk sa vatre i umešaj papriku i biber.', 'Take the onion off the heat and stir in paprika and pepper.', 'Сними лук с огня и вмешай паприку и перец.'),
      params: [l('2 kašičice paprike', '2 tsp paprika', '2 ч. л. паприки')],
      done: l('Luk je ravnomerno crven, bez tamnih tačaka.', 'The onion is evenly red with no dark specks.', 'Лук равномерно красный, без тёмных точек.'),
      drawing: 'bloomSpice',
    },
    {
      text: l('Slaži u posudu: pasulj, luk, pasulj, luk. Prelij tečnošću.', 'Layer in the dish: beans, onion, beans, onion. Pour over the liquid.', 'Выложи в форму слоями: фасоль, лук, фасоль, лук. Залей отваром.'),
      params: [l('4 sloja', '4 layers', '4 слоя'), l('tečnost do pola visine', 'liquid halfway up', 'жидкость до половины')],
      done: l('Gornji sloj je luk, a tečnost se vidi sa strane.', 'The top layer is onion, and you can see liquid at the sides.', 'Верхний слой — лук, по бокам видна жидкость.'),
      drawing: 'layerDish',
    },
    {
      text: l('Peci otkriveno dok tečnost ne upije i ne napravi koru.', 'Bake uncovered until the liquid is absorbed and a crust forms.', 'Запекай без крышки, пока жидкость не впитается и не образуется корочка.'),
      params: [l('200°C', '200°C', '200°C'), l('45–60 min', '45–60 min', '45–60 мин')],
      done: l('Gore je tamna kora, a sa strane tek po koji mehurić.', 'There is a dark crust on top and only the odd bubble at the sides.', 'Сверху тёмная корочка, по бокам лишь редкие пузырьки.'),
      why: l('Prebranac je bolji sutradan. Ukusi se povežu, a podgreva se u rerni.', 'Prebranac is better the next day. The flavours settle together; reheat it in the oven.', 'Пребранац лучше на следующий день: вкусы соединяются. Подогревай в духовке.'),
    },
  ],
  mistake: {
    title: l('Prebranac suv kao cigla.', 'Prebranac dry as a brick.', 'Пребранац сухой, как кирпич.'),
    fix: l(
      'Tečnost je isparila pre nego što se kora napravila. Uvek čuvaj vodu od kuvanja pasulja i dolij je ako posle 30 min ne vidiš tečnost sa strane.',
      'The liquid evaporated before the crust formed. Always keep the bean cooking water and top up if after 30 min you see no liquid at the sides.',
      'Жидкость испарилась раньше, чем образовалась корочка. Всегда сохраняй отвар фасоли и подливай, если через 30 мин по бокам нет жидкости.',
    ),
  },
  think: {
    question: l('Zašto tečnost od kuvanja pasulja, a ne voda?', 'Why the bean cooking liquid and not water?', 'Почему отвар фасоли, а не вода?'),
    options: [
      l('Ima skrob i ukus, pa veže i ne razvodni', 'It has starch and flavour, so it binds and does not dilute', 'В нём крахмал и вкус: связывает и не разбавляет'),
      l('Brže ispari', 'It evaporates faster', 'Быстрее испаряется'),
      l('Manje je slana', 'It is less salty', 'Менее солёный'),
    ],
    answer: 0,
    explain: l(
      'Ista logika kao voda od testenine u 10.2: skrob iz vode veže jelo u kremastu celinu.',
      'The same logic as pasta water in 10.2: the starch in the water binds the dish into one creamy whole.',
      'Та же логика, что с водой от пасты в 10.2: крахмал связывает блюдо в кремовое целое.',
    ),
  },
}

const lentils: Lesson = {
  id: '11.3',
  title: l('Sočivo', 'Lentils', 'Чечевица'),
  goal: l(
    'Skuvaš sočivo za 25 minuta, celo i mekano, bez namakanja.',
    'You cook lentils in 25 minutes, whole and tender, with no soaking.',
    'Ты варишь чечевицу за 25 минут, целую и мягкую, без замачивания.',
  ),
  minutes: 6,
  key: { value: l('1 : 3', '1 : 3', '1 : 3'), label: l('sočivo : voda', 'lentils : water', 'чечевица : вода') },
  need: [
    { item: l('Zeleno ili braon sočivo', 'Green or brown lentils', 'Зелёная или коричневая чечевица'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Voda ili fond (8.3)', 'Water or stock (8.3)', 'Вода или бульон (8.3)'), qty: l('750 ml', '750 ml', '750 мл') },
    { item: l('Luk, šargarepa, beli luk', 'Onion, carrot, garlic', 'Лук, морковь, чеснок'), qty: l('1 + 1 + 2', '1 + 1 + 2', '1 + 1 + 2') },
    { item: l('Sirće ili limun', 'Vinegar or lemon', 'Уксус или лимон'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
  ],
  why: l(
    'Sočivo je mahunarka za radni dan: bez namakanja, gotovo za pola sata, 9 g proteina na 100 g kuvanog.',
    'Lentils are the weekday pulse: no soaking, done in half an hour, 9 g of protein per 100 g cooked.',
    'Чечевица — бобовые на будний день: без замачивания, готова за полчаса, 9 г белка на 100 г варёной.',
  ),
  steps: [
    {
      text: l('Preberi sočivo i isperi ga u cediljci.', 'Pick over the lentils and rinse them in a sieve.', 'Перебери чечевицу и промой в сите.'),
      done: l('Voda ispod cediljke je bistra.', 'The water under the sieve runs clear.', 'Вода под ситом прозрачная.'),
      drawing: 'rinseRice',
    },
    {
      text: l('Dinstaj sitno iseckano povrće, bez boje.', 'Sweat the finely diced vegetables, without colour.', 'Потоми мелко нарезанные овощи без цвета.'),
      params: [l('5 mm kockice', '5 mm dice', 'кубики 5 мм'), l('6 min', '6 min', '6 мин')],
      done: l('Luk je providan, šargarepa omekšala.', 'The onion is translucent, the carrot softened.', 'Лук прозрачный, морковь размягчилась.'),
      drawing: 'sweatVeg',
    },
    {
      text: l('Dodaj sočivo i hladnu tečnost, pa krčkaj.', 'Add the lentils and cold liquid, then simmer.', 'Добавь чечевицу и холодную жидкость и томи.'),
      params: [l('250 g + 750 ml', '250 g + 750 ml', '250 г + 750 мл'), l('20–25 min', '20–25 min', '20–25 мин')],
      done: l('Sočivo je mekano, ali zrno drži oblik.', 'The lentils are tender but hold their shape.', 'Чечевица мягкая, но держит форму.'),
      why: l('Krčkanje, ne ključanje: na ključanju se zrna lome i ljuske odvajaju.', 'Simmer, do not boil: boiling breaks the lentils and splits off their skins.', 'Томить, а не кипятить: при кипении зёрна ломаются, кожица отделяется.'),
      drawing: 'simmer',
    },
    {
      text: l('Posoli na kraju i ostavi 5 minuta.', 'Salt at the end and let it stand 5 minutes.', 'Посоли в конце и дай постоять 5 минут.'),
      params: [l('~6 g soli', '~6 g salt', '~6 г соли'), l('5 min', '5 min', '5 мин')],
      done: l('Sočivo je upilo so, a tečnost se zgusnula.', 'The lentils have taken the salt and the liquid has thickened.', 'Чечевица впитала соль, жидкость загустела.'),
    },
    {
      text: l('Dodaj kiselinu tek pred služenje.', 'Add the acid only just before serving.', 'Добавь кислоту только перед подачей.'),
      params: [l('1 kašika', '1 tbsp', '1 ст. л.')],
      done: l('Ukus je postao svetliji i jasniji.', 'The taste has become brighter and clearer.', 'Вкус стал ярче и чище.'),
      why: l('Mahunarke su zemljane i teške. Kiselina ih podigne (5.2), ali u loncu bi zaustavila omekšavanje, kao kod pasulja.', 'Pulses taste earthy and heavy. Acid lifts them (5.2), but in the pot it would stop them softening, as with beans.', 'Бобовые землистые и тяжёлые. Кислота их поднимает (5.2), но в кастрюле остановила бы размягчение, как с фасолью.'),
      drawing: 'lemonDrops',
    },
  ],
  mistake: {
    title: l('Crveno sočivo za salatu.', 'Red lentils for a salad.', 'Красная чечевица для салата.'),
    fix: l(
      'Crveno sočivo nema ljusku i za 12–15 minuta se raspadne u pire. Odlično je za supu i dal. Za salatu i prilog uzmi zeleno, braon ili crno (beluga).',
      'Red lentils have no skin and turn to purée in 12–15 minutes. Perfect for soup and dal. For salads and sides use green, brown or black (beluga).',
      'Красная чечевица без оболочки и за 12–15 минут превращается в пюре. Отлично для супа и дала. Для салата и гарнира бери зелёную, коричневую или чёрную (белуга).',
    ),
  },
  think: {
    question: l('Zašto sočivo ne treba namakati, a pasulj treba?', 'Why do lentils not need soaking while beans do?', 'Почему чечевицу не замачивают, а фасоль — да?'),
    options: [
      l('Zrno je tanko i voda stigne do sredine za vreme kuvanja', 'The lentil is thin and water reaches its centre during cooking', 'Зерно тонкое, и вода доходит до центра во время варки'),
      l('Sočivo nema lektine', 'Lentils have no lectins', 'В чечевице нет лектинов'),
      l('Sočivo je uvek ljušteno', 'Lentils are always hulled', 'Чечевица всегда очищенная'),
    ],
    answer: 0,
    explain: l(
      'Ista ideja kao debljina mesa u 7.3: što je kraći put do sredine, to kraće kuvanje. Sočivo je pljosnato, pasulj je debelo zrno.',
      'The same idea as meat thickness in 7.3: the shorter the path to the centre, the shorter the cooking. Lentils are flat; beans are fat.',
      'Та же идея, что с толщиной мяса в 7.3: чем короче путь к центру, тем короче варка. Чечевица плоская, фасоль толстая.',
    ),
  },
  recipe: { name: l('Varivo od sočiva', 'Lentil stew', 'Рагу из чечевицы'), protein: 7, carbs: 16, fat: 1.5, kcal: 105 },
}

const hummus: Lesson = {
  id: '11.4',
  title: l('Leblebija i humus', 'Chickpeas and hummus', 'Нут и хумус'),
  goal: l(
    'Skuvaš suvu leblebiju do mekoće i napraviš humus gladak kao krem.',
    'You cook dried chickpeas until very soft and make hummus as smooth as cream.',
    'Ты развариваешь сухой нут и готовишь хумус, гладкий, как крем.',
  ),
  minutes: 7,
  key: { value: l('4 min', '4 min', '4 мин'), label: l('blender', 'blending', 'блендер') },
  need: [
    { item: l('Suva leblebija', 'Dried chickpeas', 'Сухой нут'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Soda bikarbona', 'Baking soda', 'Пищевая сода'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
    { item: l('Tahini', 'Tahini', 'Тахини'), qty: l('120 g', '120 g', '120 г') },
    { item: l('Limun, beli luk', 'Lemon, garlic', 'Лимон, чеснок'), qty: l('1 + 1 čen', '1 + 1 clove', '1 + 1 зубчик') },
    { item: l('Ledena voda', 'Ice water', 'Ледяная вода'), qty: l('4–6 kašika', '4–6 tbsp', '4–6 ст. л.') },
  ],
  why: l(
    'Leblebija iz konzerve daje zrnast humus. Sveže kuvana, premekana, daje humus kakav jedeš u Bejrutu.',
    'Tinned chickpeas make grainy hummus. Freshly cooked and very soft, they make hummus like the one you eat in Beirut.',
    'Нут из банки даёт зернистый хумус. Свежесваренный и разваренный — такой, как едят в Бейруте.',
  ),
  steps: [
    {
      text: l('Potopi leblebiju u hladnu vodu preko noći.', 'Soak the chickpeas in cold water overnight.', 'Замочи нут в холодной воде на ночь.'),
      params: [l('3 × više vode', '3 × the water', 'воды в 3 раза больше'), l('12 h', '12 h', '12 ч')],
      done: l('Zrna su duplo veća i lako se prepolove noktom.', 'The chickpeas have doubled and split easily with a fingernail.', 'Зёрна вдвое больше и легко делятся ногтем.'),
      drawing: 'soakBeans',
    },
    {
      text: l('Kuvaj u svežoj vodi sa sodom bikarbonom, skidaj penu.', 'Cook in fresh water with the baking soda, skimming the foam.', 'Вари в свежей воде с содой, снимая пену.'),
      params: [l('1 kašičica sode', '1 tsp soda', '1 ч. л. соды'), l('60–90 min', '60–90 min', '60–90 мин')],
      done: l('Zrno se raspadne kad ga lako stisneš prstima.', 'A chickpea falls apart when you press it gently between your fingers.', 'Зерно разваливается, если слегка сжать его пальцами.'),
      why: l('Soda razmekša ljusku. Za humus treba prekuvana leblebija, mnogo mekša nego za salatu.', 'Soda softens the skins. Hummus needs overcooked chickpeas, much softer than for a salad.', 'Сода размягчает оболочку. Для хумуса нужен переваренный нут, гораздо мягче, чем для салата.'),
      drawing: 'pinchTest',
    },
    {
      text: l('Izmiksaj tahini, limun, beli luk i so, pa dodaj ledenu vodu.', 'Blend tahini, lemon, garlic and salt, then add ice water.', 'Взбей тахини, лимон, чеснок и соль, потом добавь ледяную воду.'),
      params: [l('2 kašike vode', '2 tbsp water', '2 ст. л. воды')],
      done: l('Smesa je svetla i gusta kao jogurt.', 'The mixture is pale and thick as yoghurt.', 'Смесь светлая и густая, как йогурт.'),
      why: l('Tahini sa vodom prvo postane gust, pa svetao. To je emulzija koja će nositi leblebiju.', 'Tahini with water first seizes, then turns pale. That is the emulsion that carries the chickpeas.', 'Тахини с водой сначала густеет, потом светлеет. Это эмульсия, которая понесёт нут.'),
    },
    {
      text: l('Dodaj toplu leblebiju i miksaj dugo.', 'Add the warm chickpeas and blend for a long time.', 'Добавь тёплый нут и долго взбивай.'),
      params: [l('4 min', '4 min', '4 мин'), l('toplo, ne hladno', 'warm, not cold', 'тёплый, не холодный')],
      done: l('Humus je potpuno gladak, bez ijednog zrnca na jeziku.', 'The hummus is perfectly smooth, not a grain on the tongue.', 'Хумус абсолютно гладкий, ни крупинки на языке.'),
      why: l('Topla leblebija se lakše usitni. Četiri minuta zvuči dugo, a to je razlika između dobrog i odličnog.', 'Warm chickpeas break down more easily. Four minutes sounds long; it is the difference between good and great.', 'Тёплый нут легче измельчается. Четыре минуты кажутся долгими, но это разница между хорошим и отличным.'),
      drawing: 'blend',
    },
    {
      text: l('Proveri gustinu i ukus, pa dodaj vodu ili limun.', 'Check the texture and taste, then adjust with water or lemon.', 'Проверь густоту и вкус, поправь водой или лимоном.'),
      params: [l('kašika po kašika', 'a spoon at a time', 'по ложке')],
      done: l('Humus pada sa kašike u mekanom talasu.', 'The hummus falls off the spoon in a soft wave.', 'Хумус падает с ложки мягкой волной.'),
      why: l('Ohlađen se zgusne, pa ga ostavi malo mekšim nego što želiš.', 'It thickens once cold, so leave it a little softer than you want.', 'Остыв, он густеет, так что оставь его чуть мягче, чем хочешь.'),
    },
  ],
  mistake: {
    title: l('Hladna leblebija iz frižidera ide pravo u blender.', 'Cold chickpeas from the fridge go straight into the blender.', 'Холодный нут из холодильника сразу в блендер.'),
    fix: l(
      'Hladna zrna ostaju zrnasta, a ti doliješ vodu pa humus postane redak, a i dalje zrnast. Leblebiju zagrej u vodi od kuvanja 5 minuta pre miksanja.',
      'Cold chickpeas stay grainy, you add water, and the hummus turns thin and still grainy. Warm the chickpeas in their cooking water for 5 minutes before blending.',
      'Холодные зёрна остаются зернистыми, ты доливаешь воду, и хумус становится жидким, но всё ещё зернистым. Прогрей нут в отваре 5 минут перед взбиванием.',
    ),
  },
  think: {
    question: l('Leblebiju kuvaš za salatu, ne za humus. Šta menjaš?', 'You are cooking chickpeas for a salad, not hummus. What changes?', 'Ты варишь нут для салата, а не для хумуса. Что меняешь?'),
    options: [
      l('Kraće kuvanje, bez sode, zrno mekano ali celo', 'Shorter cooking, no soda, soft but whole', 'Варишь меньше, без соды: мягкий, но целый'),
      l('Kuvaš u slanoj vodi sa limunom', 'Cook in salty water with lemon', 'Варишь в солёной воде с лимоном'),
      l('Ništa, isto je', 'Nothing, it is the same', 'Ничего, всё то же'),
    ],
    answer: 0,
    explain: l(
      'Isti cilj kao kod pasulja u 11.1: mekano iznutra, a celo. Za humus želiš suprotno, da se raspadne.',
      'The same goal as beans in 11.1: soft inside but whole. For hummus you want the opposite, for it to fall apart.',
      'Та же цель, что с фасолью в 11.1: мягкий внутри, но целый. Для хумуса нужно обратное — чтобы разваливался.',
    ),
  },
  recipe: { name: l('Humus', 'Hummus', 'Хумус'), protein: 8, carbs: 14, fat: 11, kcal: 190 },
}

const bulgur: Lesson = {
  id: '11.5',
  title: l('Bulgur', 'Bulgur', 'Булгур'),
  goal: l(
    'Skuvaš rastresit bulgur pilav za 15 minuta, zrno po zrno.',
    'You make a fluffy bulgur pilaf in 15 minutes, every grain separate.',
    'Ты готовишь рассыпчатый плов из булгура за 15 минут, зёрнышко к зёрнышку.',
  ),
  minutes: 5,
  key: { value: l('1 : 2', '1 : 2', '1 : 2'), label: l('bulgur : voda', 'bulgur : water', 'булгур : вода') },
  need: [
    { item: l('Krupan bulgur', 'Coarse bulgur', 'Крупный булгур'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Topla voda ili fond', 'Hot water or stock', 'Горячая вода или бульон'), qty: l('400 ml', '400 ml', '400 мл') },
    { item: l('Puter ili ulje', 'Butter or oil', 'Сливочное или растительное масло'), qty: l('20 g', '20 g', '20 г') },
    { item: l('So', 'Salt', 'Соль'), qty: l('4 g', '4 g', '4 г') },
    { item: l('Šerpa sa poklopcem, čista krpa', 'Pan with a lid, clean cloth', 'Кастрюля с крышкой, чистое полотенце'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Bulgur je pšenica koja je već skuvana i osušena. Zato je gotov brže od pirinča, a ima više vlakana.',
    'Bulgur is wheat that has already been cooked and dried. That is why it is ready faster than rice and has more fibre.',
    'Булгур — пшеница, которую уже сварили и высушили. Поэтому он готовится быстрее риса, а клетчатки в нём больше.',
  ),
  steps: [
    {
      text: l('Zagrej puter i prži bulgur, uz mešanje.', 'Heat the butter and toast the bulgur, stirring.', 'Разогрей масло и обжарь булгур, помешивая.'),
      params: [l('srednja vatra', 'medium heat', 'средний огонь'), l('2 min', '2 min', '2 мин')],
      done: l('Bulgur miriše na orah i zrna su sjajna od masnoće.', 'The bulgur smells nutty and the grains are shiny with fat.', 'Булгур пахнет орехом, зёрна блестят от масла.'),
      why: l('Isto kao pirinač za rizoto u 10.5: masnoća obloži zrno i sprečava lepljenje.', 'Same as the risotto rice in 10.5: the fat coats each grain and stops sticking.', 'Как с рисом для ризотто в 10.5: жир обволакивает зерно и не даёт слипаться.'),
      drawing: 'riceToast',
    },
    {
      text: l('Nalij toplu tečnost, posoli i pusti da proključa.', 'Pour in the hot liquid, salt it and bring to the boil.', 'Влей горячую жидкость, посоли и доведи до кипения.'),
      params: [l('200 g + 400 ml', '200 g + 400 ml', '200 г + 400 мл')],
      done: l('Tečnost ključa preko cele površine.', 'The liquid boils across the whole surface.', 'Жидкость кипит по всей поверхности.'),
    },
    {
      text: l('Poklopi, smanji vatru na minimum i ne otvaraj.', 'Cover, turn the heat to minimum and do not lift the lid.', 'Накрой, убавь огонь до минимума и не открывай.'),
      params: [l('12 min', '12 min', '12 мин')],
      done: l('Na površini se vide male rupice, tečnosti nema.', 'Small holes show on the surface and no liquid is left.', 'На поверхности видны маленькие дырочки, жидкости нет.'),
      why: l('Para kuva zrno. Svaki put kad podigneš poklopac, para izađe.', 'The steam cooks the grain. Every time you lift the lid, the steam escapes.', 'Зерно варит пар. Каждый раз, когда поднимаешь крышку, пар уходит.'),
      drawing: 'lidOn',
    },
    {
      text: l('Skloni sa vatre, stavi krpu ispod poklopca i ostavi.', 'Take off the heat, put a cloth under the lid and leave it.', 'Сними с огня, положи полотенце под крышку и оставь.'),
      params: [l('10 min', '10 min', '10 мин')],
      done: l('Zrna su mekana, suva spolja, bez vode na dnu.', 'The grains are tender, dry outside, with no water at the bottom.', 'Зёрна мягкие, сухие снаружи, на дне нет воды.'),
      why: l('Krpa upije paru koja bi kapala nazad i zalepila zrna.', 'The cloth soaks up the steam that would drip back and make the grains sticky.', 'Полотенце впитывает пар, который капал бы обратно и склеивал зёрна.'),
    },
    {
      text: l('Rastresi viljuškom, ne kašikom.', 'Fluff with a fork, not a spoon.', 'Разрыхли вилкой, а не ложкой.'),
      done: l('Zrna se odvajaju jedno od drugog.', 'The grains separate from one another.', 'Зёрна отделяются друг от друга.'),
      why: l('Kašika gnječi. Viljuška razdvaja.', 'A spoon squashes. A fork separates.', 'Ложка давит. Вилка разделяет.'),
      drawing: 'forkFluff',
    },
  ],
  mistake: {
    title: l('Sitan bulgur kuvan kao krupan.', 'Fine bulgur cooked like coarse.', 'Мелкий булгур варят, как крупный.'),
    fix: l(
      'Sitan bulgur postane kaša. On se ne kuva: prelij ga ključalom vodom 1 : 1, poklopi i ostavi 15 minuta. Takav ide u tabule i salate.',
      'Fine bulgur turns to mush. It is not cooked at all: pour boiling water over it 1 : 1, cover and leave 15 minutes. That one goes into tabbouleh and salads.',
      'Мелкий булгур превращается в кашу. Его не варят: залей кипятком 1 : 1, накрой и оставь на 15 минут. Такой идёт в табуле и салаты.',
    ),
  },
  think: {
    question: l('Bulgur je posle 12 minuta i dalje tvrd, a vode nema. Šta radiš?', 'After 12 minutes the bulgur is still firm and the water is gone. What do you do?', 'Через 12 минут булгур ещё твёрдый, а воды нет. Что делаешь?'),
    options: [
      l('Dodaš 2–3 kašike vrele vode, poklopiš i čekaš 10 min', 'Add 2–3 tbsp boiling water, cover and wait 10 min', 'Добавляешь 2–3 ложки кипятка, накрываешь и ждёшь 10 мин'),
      l('Doliješ čašu hladne vode i mešaš', 'Add a glass of cold water and stir', 'Доливаешь стакан холодной воды и мешаешь'),
      l('Pojačaš vatru', 'Turn up the heat', 'Прибавляешь огонь'),
    ],
    answer: 0,
    explain: l(
      'Zrnu fali malo pare, ne potop. Malo vrele vode i odmor završe posao. Mešanje i hladna voda prave kašu.',
      'The grain needs a little steam, not a flood. A little boiling water and rest finish the job. Stirring and cold water make mush.',
      'Зерну нужно немного пара, а не потоп. Немного кипятка и отдых завершат дело. Помешивание и холодная вода дают кашу.',
    ),
  },
  recipe: { name: l('Bulgur pilav', 'Bulgur pilaf', 'Плов из булгура'), protein: 3.3, carbs: 19, fat: 2.4, kcal: 110 },
}

export const legumeLessons: Lesson[] = [beans, prebranac, lentils, hummus, bulgur]
