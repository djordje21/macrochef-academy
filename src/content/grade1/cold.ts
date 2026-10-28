import { l, type Lesson } from '../types'

// Module 3 · The cold station. Nothing here is cooked, so cleanliness and cold do the work that
// heat does elsewhere. Lesson 3.2 (vinaigrette and mayonnaise) lives in sauces.ts.

const washing: Lesson = {
  id: '3.1',
  title: l('Pranje i sušenje salate', 'Washing and drying salad', 'Мытьё и сушка салата'),
  goal: l(
    'Opereš i osušiš zelenu salatu tako da bude čista i hrskava, a dresing se drži za list.',
    'You wash and dry salad leaves so they are clean and crisp and the dressing clings to them.',
    'Ты моешь и сушишь салат так, чтобы он был чистым и хрустящим, а заправка держалась на листьях.',
  ),
  minutes: 6,
  key: { value: l('10 min', '10 min', '10 мин'), label: l('ledena voda', 'ice water', 'ледяная вода') },
  need: [
    { item: l('Zelena salata', 'Lettuce', 'Салат-латук'), qty: l('1 glavica', '1 head', '1 кочан') },
    { item: l('Velika činija vode sa ledom', 'Large bowl of ice water', 'Большая миска воды со льдом'), qty: l('1', '1', '1') },
    { item: l('Centrifuga za salatu ili čista krpa', 'Salad spinner or a clean cloth', 'Сушилка для салата или чистое полотенце'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Salata se ne kuva, pa je pranje jedino čišćenje koje dobija. A suv list je razlika između salate i bare na tanjiru.',
    'Salad is never cooked, so washing is the only cleaning it gets. And a dry leaf is the difference between a salad and a puddle on the plate.',
    'Салат не готовят, поэтому мытьё — единственная его очистка. А сухой лист — разница между салатом и лужей на тарелке.',
  ),
  steps: [
    {
      text: l('Odvoji listove i baci oštećene spoljne.', 'Separate the leaves and discard damaged outer ones.', 'Отдели листья и выброси повреждённые внешние.'),
      done: l('Na listovima nema smeđih ivica ni sluzavih delova.', 'No leaf has brown edges or slimy patches.', 'На листьях нет бурых краёв и слизистых участков.'),
    },
    {
      text: l('Potopi listove u hladnu vodu sa ledom.', 'Submerge the leaves in cold water with ice.', 'Опусти листья в холодную воду со льдом.'),
      params: [l('10 min', '10 min', '10 мин')],
      done: l('Listovi su čvrsti i krckaju kad ih saviješ.', 'The leaves are firm and snap when you bend them.', 'Листья упругие и хрустят при сгибании.'),
      why: l(
        'Hladna voda vraća vodu u ćelije lista, a zemlja i pesak padaju na dno.',
        'Cold water refills the leaf cells, and soil and grit sink to the bottom.',
        'Холодная вода возвращает влагу в клетки листа, а земля и песок оседают на дно.',
      ),
      drawing: 'saladBath',
    },
    {
      text: l('Izvadi listove rukama, odozgo.', 'Lift the leaves out by hand, from the top.', 'Вынимай листья руками, сверху.'),
      done: l('Na dnu činije ostaje voda sa peskom.', 'Water with grit is left at the bottom of the bowl.', 'На дне миски остаётся вода с песком.'),
      why: l(
        'Ako prosipaš vodu kroz cediljku, pesak se vraća na list.',
        'If you pour the water through a colander, the grit goes back onto the leaves.',
        'Если слить воду через дуршлаг, песок снова окажется на листьях.',
      ),
    },
    {
      text: l('Osuši listove u centrifugi, u dve ture.', 'Spin the leaves dry, in two batches.', 'Высуши листья в сушилке, в два захода.'),
      params: [l('2 ture', '2 batches', '2 захода')],
      done: l('Kad zavrtiš ponovo, na dnu se više ne skuplja voda.', 'When you spin again, no more water collects at the bottom.', 'При повторном вращении вода на дне больше не собирается.'),
      why: l(
        'Dresing je ulje, a ulje klizi niz mokar list. Na suvom listu se drži.',
        'Dressing is oil, and oil slides off a wet leaf. On a dry one it clings.',
        'Заправка — это масло, а масло соскальзывает с мокрого листа. На сухом оно держится.',
      ),
      drawing: 'spinner',
    },
    {
      text: l('Čuvaj list u kutiji sa papirnim ubrusom, u frižideru.', 'Store the leaves in a box lined with paper towel, in the fridge.', 'Храни листья в контейнере с бумажным полотенцем, в холодильнике.'),
      params: [l('do 3 dana', 'up to 3 days', 'до 3 дней')],
      done: l('Sutradan je list i dalje hrskav.', 'The next day the leaves are still crisp.', 'На следующий день листья всё ещё хрустят.'),
      why: l('Ubrus upija vlagu koja bi list razmekšala.', 'The towel absorbs the moisture that would make the leaves go limp.', 'Полотенце впитывает влагу, от которой лист вянет.'),
    },
  ],
  mistake: {
    title: l('Pranje pod mlazom pa odmah dresing.', 'Rinsing under the tap, then dressing at once.', 'Промыть под краном и сразу заправить.'),
    fix: l(
      'Salata ostane mokra, dresing sklizne na dno činije, a u zalogaju je pesak. Potapanje, pa sušenje, pa dresing.',
      'The salad stays wet, the dressing slides to the bottom of the bowl and there is grit in every bite. Soak, then dry, then dress.',
      'Салат остаётся мокрым, заправка стекает на дно, а на зубах скрипит песок. Замочить, высушить, потом заправить.',
    ),
  },
  think: {
    question: l('Zašto dresing klizi sa mokrog lista?', 'Why does dressing slide off a wet leaf?', 'Почему заправка соскальзывает с мокрого листа?'),
    options: [
      l('Ulje i voda se ne mešaju', 'Oil and water do not mix', 'Масло и вода не смешиваются'),
      l('So se rastvori u vodi', 'The salt dissolves in the water', 'Соль растворяется в воде'),
      l('Hladan list ne prima dresing', 'A cold leaf does not take dressing', 'Холодный лист не принимает заправку'),
    ],
    answer: 0,
    explain: l(
      'Voda na listu napravi sloj između lista i ulja. Ulje ne može kroz vodu, pa klizi. Isto pravilo kao kod emulzije u 3.2.',
      'Water on the leaf forms a layer between leaf and oil. Oil cannot pass through water, so it slides off. The same rule as the emulsion in 3.2.',
      'Вода на листе образует слой между листом и маслом. Масло не проходит сквозь воду и соскальзывает. То же правило, что с эмульсией в 3.2.',
    ),
  },
}

const dressings: Lesson = {
  id: '3.3',
  title: l('Dresinzi: vrste i varijante', 'Dressings: types and variations', 'Заправки: виды и варианты'),
  goal: l(
    'Iz jedne osnove napraviš četiri dresinga i znaš koji ide uz koju salatu.',
    'From one base you make four dressings and know which goes with which salad.',
    'Из одной основы ты делаешь четыре заправки и знаешь, какая к какому салату.',
  ),
  minutes: 8,
  key: { value: l('1 : 3', '1 : 3', '1 : 3'), label: l('kiselina : ulje', 'acid : oil', 'кислота : масло') },
  need: [
    { item: l('Sirće i limun', 'Vinegar and lemon', 'Уксус и лимон'), qty: l('—', '—', '—') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Senf i med', 'Mustard and honey', 'Горчица и мёд'), qty: l('—', '—', '—') },
    { item: l('Jogurt', 'Yogurt', 'Йогурт'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Majonez iz 3.2', 'Mayonnaise from 3.2', 'Майонез из 3.2'), qty: l('2 kašike', '2 tbsp', '2 ст. л.') },
  ],
  why: l(
    'Kad znaš osnovu, ne treba ti recept za dresing. Menjaš kiselinu, slatko i gustinu prema listu.',
    'Once you know the base, you need no dressing recipe. You change the acid, the sweetness and the thickness to suit the leaf.',
    'Когда знаешь основу, рецепт заправки не нужен. Меняешь кислоту, сладость и густоту под лист.',
  ),
  steps: [
    {
      text: l('Napravi osnovni vinegret kao u 3.2.', 'Make the basic vinaigrette as in 3.2.', 'Сделай базовый винегрет, как в 3.2.'),
      params: [l('1 : 3', '1 : 3', '1 : 3'), l('1 kašičica senfa', '1 tsp mustard', '1 ч. л. горчицы')],
      done: l('Dresing je mutan i ne odvaja se.', 'The dressing is cloudy and does not separate.', 'Заправка мутная и не расслаивается.'),
      drawing: 'dressingJars',
    },
    {
      text: l('Za gorke listove dodaj med.', 'For bitter leaves, add honey.', 'Для горьких листьев добавь мёд.'),
      params: [l('1 kašičica', '1 tsp', '1 ч. л.')],
      done: l('Dresing je blago sladak, a i dalje kiseo.', 'The dressing is slightly sweet and still sharp.', 'Заправка слегка сладкая и всё ещё кислая.'),
      why: l('Slatko smiri gorčinu rukole i radiča, kao u 5.3.', 'Sweetness calms the bitterness of rocket and radicchio, as in 5.3.', 'Сладость смягчает горечь руколы и радиккьо, как в 5.3.'),
    },
    {
      text: l('Za ribu i mahunarke zameni sirće limunom i dodaj bilje.', 'For fish and pulses, swap the vinegar for lemon and add herbs.', 'Для рыбы и бобовых замени уксус лимоном и добавь зелень.'),
      params: [l('1 : 3', '1 : 3', '1 : 3'), l('peršun, 1 kašika', 'parsley, 1 tbsp', 'петрушка, 1 ст. л.')],
      done: l('Dresing miriše sveže, na limun i peršun.', 'The dressing smells fresh, of lemon and parsley.', 'Заправка пахнет свежо, лимоном и петрушкой.'),
    },
    {
      text: l('Za kremasti dresing umešaj jogurt, majonez i beli luk.', 'For a creamy dressing, mix yogurt, mayonnaise and garlic.', 'Для сливочной заправки смешай йогурт, майонез и чеснок.'),
      params: [l('100 g + 2 kašike', '100 g + 2 tbsp', '100 г + 2 ст. л.'), l('½ čena', '½ clove', '½ зубчика')],
      done: l('Dresing je gust i prekriva kašiku.', 'The dressing is thick and coats a spoon.', 'Заправка густая и обволакивает ложку.'),
      why: l('Gust dresing se drži za čvrst list: kupus, zelenu salatu, rimsku salatu.', 'A thick dressing clings to a firm leaf: cabbage, lettuce, romaine.', 'Густая заправка держится на плотном листе: капуста, латук, ромэн.'),
    },
    {
      text: l('Upari dresing sa listom: lagan uz nežan, gust uz čvrst.', 'Match dressing to leaf: light with tender, thick with firm.', 'Подбирай заправку к листу: лёгкую к нежному, густую к плотному.'),
      done: l('Za tri salate koje voliš znaš koji dresing ide.', 'For three salads you like, you know which dressing goes.', 'Для трёх любимых салатов ты знаешь, какая заправка подходит.'),
      why: l('Gust dresing zgnječi nežan list, a lagan sklizne sa čvrstog.', 'A thick dressing crushes a tender leaf, and a light one slides off a firm one.', 'Густая заправка придавит нежный лист, а лёгкая соскользнёт с плотного.'),
    },
  ],
  mistake: {
    title: l('Salata prelivena unapred.', 'Salad dressed ahead of time.', 'Салат, заправленный заранее.'),
    fix: l(
      'Kiselina i so izvuku vodu iz lista i za 10 minuta salata uvene. Dresing ide neposredno pred služenje.',
      'Acid and salt draw water out of the leaves and in 10 minutes the salad wilts. Dress it just before serving.',
      'Кислота и соль вытягивают воду из листьев, и через 10 минут салат вянет. Заправляй прямо перед подачей.',
    ),
  },
  think: {
    question: l('Rukola je gorka. Koji dresing biraš?', 'Rocket is bitter. Which dressing do you choose?', 'Рукола горчит. Какую заправку выберешь?'),
    options: [
      l('Vinegret sa medom i senfom', 'Honey and mustard vinaigrette', 'Винегрет с мёдом и горчицей'),
      l('Samo ulje', 'Just oil', 'Только масло'),
      l('Gust kremasti dresing', 'A thick creamy dressing', 'Густую сливочную заправку'),
    ],
    answer: 0,
    explain: l(
      'Med smiri gorčinu, a lagan vinegret ne zgnječi nežan list rukole.',
      'Honey calms the bitterness, and a light vinaigrette does not crush the tender rocket.',
      'Мёд смягчает горечь, а лёгкий винегрет не придавит нежную руколу.',
    ),
  },
}

const building: Lesson = {
  id: '3.4',
  title: l('Sastavljanje salate', 'Building a salad', 'Как собрать салат'),
  goal: l(
    'Složiš salatu koja je obrok: list, hrskavo, kiselo, masno i protein.',
    'You build a salad that is a meal: leaves, crunch, acid, fat and protein.',
    'Ты собираешь салат, который становится полноценной едой: лист, хруст, кислота, жир и белок.',
  ),
  minutes: 7,
  key: { value: l('5', '5', '5'), label: l('elemenata', 'elements', 'элементов') },
  need: [
    { item: l('Osušena salata iz 3.1', 'Dried leaves from 3.1', 'Высушенный салат из 3.1'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Krastavac, paradajz', 'Cucumber, tomato', 'Огурец, помидор'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Kuvano jaje ili piletina', 'Boiled egg or chicken', 'Варёное яйцо или курица'), qty: l('100–150 g', '100–150 g', '100–150 г') },
    { item: l('Feta ili semenke', 'Feta or seeds', 'Фета или семечки'), qty: l('30 g', '30 g', '30 г') },
    { item: l('Dresing iz 3.3', 'Dressing from 3.3', 'Заправка из 3.3'), qty: l('2 kašike', '2 tbsp', '2 ст. л.') },
  ],
  why: l(
    'Salata koja zasiti ima isti raspored svaki put. Kad ga znaš, napraviš je od onoga što imaš u frižideru.',
    'A salad that fills you up follows the same pattern every time. Once you know it, you make one from whatever is in the fridge.',
    'Сытный салат каждый раз строится по одной схеме. Зная её, ты соберёшь салат из того, что есть в холодильнике.',
  ),
  steps: [
    {
      text: l('Osnova: suv list u široku činiju.', 'Base: dry leaves in a wide bowl.', 'Основа: сухие листья в широкую миску.'),
      params: [l('80–100 g po osobi', '80–100 g per person', '80–100 г на человека')],
      done: l('List je suv i ima mesta da se promeša.', 'The leaves are dry and there is room to toss.', 'Листья сухие, и есть место, чтобы перемешать.'),
      drawing: 'saladLayers',
    },
    {
      text: l('Dodaj nešto hrskavo.', 'Add something crunchy.', 'Добавь что-то хрустящее.'),
      params: [l('krastavac, rotkvica, semenke', 'cucumber, radish, seeds', 'огурец, редис, семечки')],
      done: l('U svakom zalogaju nešto krcka.', 'Every bite has something that crunches.', 'В каждом кусочке что-то хрустит.'),
    },
    {
      text: l('Dodaj nešto kiselo ili slatko.', 'Add something sour or sweet.', 'Добавь что-то кислое или сладкое.'),
      params: [l('paradajz, kisela paprika, jabuka', 'tomato, pickled pepper, apple', 'помидор, маринованный перец, яблоко')],
      done: l('Ukus nije ravan ni kad probaš samo list i dodatak.', 'The taste is not flat, even with just a leaf and one addition.', 'Вкус не плоский, даже если попробовать лист с одной добавкой.'),
    },
    {
      text: l('Dodaj protein i nešto masno.', 'Add protein and something rich.', 'Добавь белок и что-то жирное.'),
      params: [l('100–150 g proteina', '100–150 g protein', '100–150 г белка'), l('feta, avokado, jaje', 'feta, avocado, egg', 'фета, авокадо, яйцо')],
      done: l('Salata izgleda kao obrok, ne kao prilog.', 'The salad looks like a meal, not a side.', 'Салат выглядит как основное блюдо, а не гарнир.'),
      why: l('Protein i masnoća zasite. Bez njih si gladan za sat vremena.', 'Protein and fat fill you up. Without them you are hungry again in an hour.', 'Белок и жир насыщают. Без них через час снова голоден.'),
    },
    {
      text: l('Prelij dresing i promešaj rukama, tek pred služenje.', 'Add the dressing and toss by hand, just before serving.', 'Полей заправкой и перемешай руками прямо перед подачей.'),
      params: [l('2 kašike po porciji', '2 tbsp per portion', '2 ст. л. на порцию')],
      done: l('Svaki list je sjajan, a na dnu činije nema bare.', 'Every leaf is glossy and there is no puddle in the bowl.', 'Каждый лист блестит, а на дне миски нет лужи.'),
      why: l('Ruke mešaju nežno i ravnomerno, a ne lome list kao kašika.', 'Hands toss gently and evenly, and do not break the leaves like a spoon does.', 'Руки перемешивают бережно и равномерно и не ломают лист, как ложка.'),
    },
  ],
  mistake: {
    title: l('Previše dresinga.', 'Too much dressing.', 'Слишком много заправки.'),
    fix: l(
      'Salata pliva i list uvene. Kreni sa manje, promešaj i dodaj samo ako je neki list ostao suv.',
      'The salad swims and the leaves wilt. Start with less, toss, and add more only if a leaf is still dry.',
      'Салат плавает, листья вянут. Начни с меньшего, перемешай и добавь, только если какой-то лист остался сухим.',
    ),
  },
  think: {
    question: l('Šta salati najčešće fali da bi bila obrok?', 'What does a salad most often lack to be a meal?', 'Чего чаще всего не хватает салату, чтобы стать едой?'),
    options: [
      l('Protein i masnoća', 'Protein and fat', 'Белка и жира'),
      l('Više lista', 'More leaves', 'Больше листьев'),
      l('Više soli', 'More salt', 'Больше соли'),
    ],
    answer: 0,
    explain: l(
      'List ima malo kalorija i ne zasiti. Jaje, piletina, sir ili mahunarke pretvore salatu u ručak. Koliko tačno, vidiš u MacroChefu.',
      'Leaves have few calories and do not fill you. Egg, chicken, cheese or pulses turn a salad into lunch. MacroChef shows you exactly how much.',
      'В листьях мало калорий, они не насыщают. Яйцо, курица, сыр или бобовые превращают салат в обед. Сколько именно — покажет MacroChef.',
    ),
  },
}

const station: Lesson = {
  id: '3.5',
  title: l('Organizacija hladne partije', 'Organising the cold station', 'Организация холодного цеха'),
  goal: l(
    'Postaviš hladnu partiju tako da salate praviš brzo, čisto i bezbedno.',
    'You set up the cold station so you make salads quickly, cleanly and safely.',
    'Ты организуешь холодный цех так, чтобы готовить салаты быстро, чисто и безопасно.',
  ),
  minutes: 6,
  key: { value: l('ispod 5°C', 'below 5°C', 'ниже 5°C'), label: l('sastojci', 'ingredients', 'продукты') },
  need: [
    { item: l('Kutije sa poklopcem', 'Lidded containers', 'Контейнеры с крышками'), qty: l('6–8', '6–8', '6–8') },
    { item: l('Flomaster i traka', 'Marker and tape', 'Маркер и скотч'), qty: l('1', '1', '1') },
    { item: l('Pleh ili posuda sa ledom', 'Tray or tub of ice', 'Противень или ёмкость со льдом'), qty: l('1', '1', '1') },
    { item: l('Daska samo za povrće', 'A board just for vegetables', 'Доска только для овощей'), qty: l('1', '1', '1') },
  ],
  why: l(
    'U hladnoj kuhinji ništa se ne kuva, pa nema toplote koja bi ubila bakterije. Hladnoća i čistoća rade taj posao.',
    'Nothing is cooked at the cold station, so there is no heat to kill bacteria. Cold and cleanliness do that job.',
    'В холодном цехе ничего не готовят, и нет жара, который убил бы бактерии. Эту работу делают холод и чистота.',
  ),
  steps: [
    {
      text: l('Pripremi sve sastojke unapred, svaki u svojoj kutiji.', 'Prepare every ingredient in advance, each in its own box.', 'Подготовь все продукты заранее, каждый в своём контейнере.'),
      done: l('Na stolu nema rasutih sastojaka, samo zatvorene kutije.', 'Nothing lies loose on the counter, only closed boxes.', 'На столе ничего не лежит россыпью, только закрытые контейнеры.'),
      why: l('To je mise en place iz 1.2, primenjen na celu partiju.', 'This is the mise en place from 1.2, applied to a whole station.', 'Это мизанплас из 1.2 для целого цеха.'),
    },
    {
      text: l('Obeleži svaku kutiju nazivom i datumom.', 'Label every box with its name and date.', 'Подпиши каждый контейнер названием и датой.'),
      params: [l('seckano povrće do 2 dana', 'cut vegetables up to 2 days', 'нарезанные овощи до 2 дней')],
      done: l('Na svakoj kutiji piše šta je i od kada.', 'Every box says what it is and since when.', 'На каждом контейнере написано, что в нём и с какого дня.'),
    },
    {
      text: l('Poređaj kutije redom sastavljanja salate.', 'Line up the boxes in the order a salad is built.', 'Расставь контейнеры в порядке сборки салата.'),
      params: [l('list → hrskavo → kiselo → protein → dresing', 'leaf → crunch → acid → protein → dressing', 'лист → хруст → кислое → белок → заправка')],
      done: l('Ruka ide sleva nadesno, bez traženja.', 'Your hand moves left to right without searching.', 'Рука движется слева направо, ничего не ищет.'),
      drawing: 'coldStation',
    },
    {
      text: l('Drži kutije na ledu dok radiš.', 'Keep the boxes on ice while you work.', 'Держи контейнеры на льду, пока работаешь.'),
      params: [l('ispod 5°C', 'below 5°C', 'ниже 5°C'), l('ili nazad u frižider na 30 min', 'or back in the fridge every 30 min', 'или обратно в холодильник каждые 30 мин')],
      done: l('Sastojci su hladni na dodir i posle sat vremena rada.', 'The ingredients feel cold even after an hour of work.', 'Продукты холодные на ощупь и через час работы.'),
      why: l('Opasna zona iz 1.4 počinje na 5°C, a sobna temperatura je duboko u njoj.', 'The danger zone from 1.4 starts at 5°C, and room temperature is deep inside it.', 'Опасная зона из 1.4 начинается с 5°C, а комнатная температура глубоко в ней.'),
    },
    {
      text: l('Koristi posebnu dasku i nož samo za salatu.', 'Use a separate board and knife only for salad.', 'Используй отдельные доску и нож только для салата.'),
      done: l('Daska za salatu nikad ne dodiruje sirovo meso.', 'The salad board never touches raw meat.', 'Доска для салата никогда не касается сырого мяса.'),
      why: l('Pravilo iz 1.3: ono što se ne kuva, ne sme na dasku od sirovog mesa.', 'The rule from 1.3: what will not be cooked must never touch the raw-meat board.', 'Правило из 1.3: то, что не готовят, нельзя класть на доску от сырого мяса.'),
    },
  ],
  mistake: {
    title: l('Seckano povrće ceo dan na stolu.', 'Cut vegetables on the counter all day.', 'Нарезанные овощи весь день на столе.'),
    fix: l(
      'Povrće omekša i satima je u opasnoj zoni. Na stolu je samo ono što ti treba za sledećih 30 minuta, ostalo u frižideru.',
      'The vegetables go soft and sit in the danger zone for hours. Keep on the counter only what you need for the next 30 minutes; the rest goes in the fridge.',
      'Овощи размякают и часами находятся в опасной зоне. На столе только то, что нужно в ближайшие 30 минут, остальное — в холодильнике.',
    ),
  },
  think: {
    question: l('Zašto je hladna kuhinja osetljivija od tople?', 'Why is the cold station more sensitive than the hot one?', 'Почему холодный цех требовательнее горячего?'),
    options: [
      l('Ništa se ne kuva, pa ništa ne ubija bakterije', 'Nothing is cooked, so nothing kills bacteria', 'Ничего не готовят, и бактерии ничто не убивает'),
      l('Hrana se brže kvari', 'Food spoils faster', 'Еда быстрее портится'),
      l('Sastojci su skuplji', 'The ingredients cost more', 'Продукты дороже'),
    ],
    answer: 0,
    explain: l(
      'U toploj kuhinji 74°C ubije ono što je promaklo. U hladnoj ne postoji takav drugi šans, pa čistoća i hladnoća moraju biti savršeni od početka.',
      'In the hot kitchen 74°C kills whatever slipped through. The cold station has no such second chance, so cleanliness and cold must be right from the start.',
      'На горячей кухне 74°C убивает то, что проскочило. В холодном цехе второго шанса нет, поэтому чистота и холод должны быть безупречны с самого начала.',
    ),
  },
}

export const coldLessons = { washing, dressings, building, station }
