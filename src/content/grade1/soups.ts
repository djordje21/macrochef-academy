import { l, type Lesson } from '../types'

// Module 8 · Soups, after the chicken stock in 8.1: the brown stock, the two quick stocks,
// a clear beef soup and the Serbian čorba. Every one of them simmers, none of them boils.

const brownStock: Lesson = {
  id: '8.2',
  title: l('Tamni goveđi fond', 'Brown beef stock', 'Тёмный говяжий бульон'),
  goal: l(
    'Skuvaš taman, bistar goveđi fond koji se ohlađen želira.',
    'You make a dark, clear beef stock that sets to a jelly when cold.',
    'Ты варишь тёмный прозрачный говяжий бульон, который застывает в желе.',
  ),
  minutes: 8,
  key: { value: l('6 h', '6 h', '6 ч'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Goveđe kosti sa zglobovima', 'Beef bones with joints', 'Говяжьи кости с суставами'), qty: l('2 kg', '2 kg', '2 кг') },
    { item: l('Luk, šargarepa, celer', 'Onion, carrot, celery', 'Лук, морковь, сельдерей'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Paradajz pire', 'Tomato paste', 'Томатная паста'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('Hladna voda', 'Cold water', 'Холодная вода'), qty: l('4 l', '4 l', '4 л') },
    { item: l('Pleh i lonac', 'Roasting tray and pot', 'Противень и кастрюля'), qty: l('6 l', '6 l', '6 л') },
  ],
  why: l(
    'Boja i dubina ukusa dolaze iz pečenja kostiju, ne iz kuvanja. Bez ovog fonda nema pravog smeđeg sosa (9.4).',
    'The colour and depth come from roasting the bones, not from boiling them. Without this stock there is no real brown sauce (9.4).',
    'Цвет и глубина вкуса приходят от обжаривания костей, а не от варки. Без этого бульона нет настоящего коричневого соуса (9.4).',
  ),
  steps: [
    {
      text: l('Peci kosti u rerni dok ne potamne.', 'Roast the bones in the oven until deep brown.', 'Запекай кости в духовке до тёмного цвета.'),
      params: [l('220°C', '220°C', '220°C'), l('45–60 min', '45–60 min', '45–60 мин'), l('okreni jednom', 'turn once', 'переверни раз')],
      done: l('Kosti su tamnobraon sa svih strana, nigde crne.', 'The bones are dark brown all over, nowhere black.', 'Кости тёмно-коричневые со всех сторон, нигде не чёрные.'),
      why: l('Ista zlatna korica kao u 4.6, samo na kostima. Crno je gorko i ide u fond.', 'The same golden crust as in 4.6, only on bones. Black is bitter and goes into the stock.', 'Та же корочка, что в 4.6, только на костях. Чёрное горчит и уходит в бульон.'),
      drawing: 'roastBones',
    },
    {
      text: l('Dodaj povrće i namaži pire na kosti, pa peci još.', 'Add the vegetables, brush the paste on the bones and roast on.', 'Добавь овощи, смажь кости пастой и запекай дальше.'),
      params: [l('20 min', '20 min', '20 мин')],
      done: l('Pire je promenio boju iz crvene u ciglastu.', 'The paste has turned from red to brick.', 'Паста сменила цвет с красного на кирпичный.'),
      why: l('Pečen paradajz gubi kiselost i daje boju i umami.', 'Roasted tomato loses its sharpness and adds colour and umami.', 'Запечённый томат теряет кислоту и даёт цвет и умами.'),
    },
    {
      text: l('Prebaci sve u lonac. Pleh razlij vodom i sastruži.', 'Move it all to the pot. Pour water into the tray and scrape it.', 'Переложи всё в кастрюлю. Влей воду на противень и соскреби.'),
      params: [l('200 ml', '200 ml', '200 мл')],
      done: l('Na plehu nema zalepljenih braon tragova.', 'No brown residue is left stuck to the tray.', 'На противне не осталось пригоревших следов.'),
      why: l('Taj braon sloj je najjači ukus u celom procesu. Isto kao deglaziranje u 9.8.', 'That brown layer is the strongest flavour in the whole process. Same as deglazing in 9.8.', 'Этот коричневый слой — самый сильный вкус во всём процессе. Как деглазирование в 9.8.'),
      drawing: 'deglaze',
    },
    {
      text: l('Prelij hladnom vodom i skidaj penu do krčkanja.', 'Cover with cold water and skim until it simmers.', 'Залей холодной водой и снимай пену до томления.'),
      params: [l('4 l', '4 l', '4 л'), l('85–95°C', '85–95°C', '85–95°C')],
      done: l('Površina je mirna, sa po kojim mehurićem, bez pene.', 'The surface is calm with the odd bubble and no foam.', 'Поверхность спокойная, редкие пузырьки, без пены.'),
      why: l('Isto kao 8.1: hladan start i skidanje pene daju bistar fond.', 'Same as 8.1: a cold start and skimming give a clear stock.', 'Как в 8.1: холодный старт и снятие пены дают прозрачный бульон.'),
      drawing: 'skim',
    },
    {
      text: l('Krčkaj bez poklopca, procedi i ohladi brzo.', 'Simmer uncovered, then strain and cool fast.', 'Томи без крышки, процеди и быстро охлади.'),
      params: [l('6–8 h', '6–8 h', '6–8 ч'), l('ostane ~2 l', 'leaves ~2 l', 'остаётся ~2 л')],
      done: l('Ohlađen fond je čvrst žele, a mast je gore u ploči.', 'Cold, the stock is a firm jelly with a lid of fat on top.', 'Остывший бульон — плотное желе, сверху пласт жира.'),
      why: l('Goveđim kostima treba više vremena da puste kolagen nego pilećim. Mast skineš u komadu kad se stegne.', 'Beef bones need longer than chicken bones to release their collagen. Lift the fat off in one piece once it sets.', 'Говяжьим костям нужно больше времени, чем куриным, чтобы отдать коллаген. Жир снимешь пластом, когда застынет.'),
    },
  ],
  mistake: {
    title: l('Kosti ubačene direktno u vodu, bez pečenja.', 'Bones put straight into the water, unroasted.', 'Кости сразу в воду, без запекания.'),
    fix: l(
      'Dobiješ svetao fond, koristan, ali to nije tamni fond. Boja se ne može dodati kasnije bez veštačkog ukusa. Ako žuriš, kosti peci makar 30 min na 230°C.',
      'You get a pale stock, useful, but not a brown one. Colour cannot be added later without a fake taste. If short of time, roast the bones at least 30 min at 230°C.',
      'Получится светлый бульон, полезный, но не тёмный. Цвет потом не добавишь без искусственного вкуса. Если спешишь, запекай кости хотя бы 30 мин при 230°C.',
    ),
  },
  think: {
    question: l('Fond se posle 6 sati ohladio, ali se nije želirao. Šta je uzrok?', 'After 6 hours the stock is cold but has not set. What is the cause?', 'Через 6 часов бульон остыл, но не застыл. В чём причина?'),
    options: [
      l('Previše vode za količinu kostiju', 'Too much water for the amount of bones', 'Слишком много воды на это количество костей'),
      l('Premalo soli', 'Too little salt', 'Мало соли'),
      l('Kosti su bile previše pečene', 'The bones were roasted too long', 'Кости слишком долго запекали'),
    ],
    answer: 0,
    explain: l(
      'Žele je kolagen razređen vodom. Ako je vode previše, kolagena po litru je premalo. Sledeći put voda samo 3–4 cm iznad kostiju, a ovaj fond ukuvaj za trećinu.',
      'The jelly is collagen diluted by water. Too much water and there is too little collagen per litre. Next time water only 3–4 cm above the bones; reduce this stock by a third.',
      'Желе — коллаген, разбавленный водой. Слишком много воды — мало коллагена на литр. В следующий раз вода лишь на 3–4 см выше костей, а этот бульон уварь на треть.',
    ),
  },
}

const quickStocks: Lesson = {
  id: '8.3',
  title: l('Povrtni i riblji fond', 'Vegetable and fish stock', 'Овощной и рыбный бульон'),
  goal: l(
    'Skuvaš povrtni fond za 45 minuta i riblji za 20, a da nijedan ne bude gorak.',
    'You make a vegetable stock in 45 minutes and a fish stock in 20, neither of them bitter.',
    'Ты варишь овощной бульон за 45 минут и рыбный за 20, и ни один не горчит.',
  ),
  minutes: 7,
  key: { value: l('20 min', '20 min', '20 мин'), label: l('riblji fond', 'fish stock', 'рыбный бульон') },
  need: [
    { item: l('Kosti i glave bele ribe', 'White fish bones and heads', 'Кости и головы белой рыбы'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Luk, praziluk, celer, komorač', 'Onion, leek, celery, fennel', 'Лук, порей, сельдерей, фенхель'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Peršun, lovor, biber u zrnu', 'Parsley stalks, bay, peppercorns', 'Стебли петрушки, лавр, перец горошком'), qty: l('po malo', 'a little of each', 'понемногу') },
    { item: l('Hladna voda', 'Cold water', 'Холодная вода'), qty: l('2 l', '2 l', '2 л') },
  ],
  why: l(
    'Povrće i riblje kosti puste ukus brzo, a posle toga samo gorčinu. Ovde vreme nije što duže, nego tačno.',
    'Vegetables and fish bones give up their flavour quickly, and after that only bitterness. Here time is not "as long as possible", it is exact.',
    'Овощи и рыбьи кости быстро отдают вкус, а дальше — только горечь. Здесь время не «чем дольше», а точное.',
  ),
  steps: [
    {
      text: l('Iseci povrće sitno, na listiće.', 'Slice the vegetables thinly.', 'Нарежь овощи тонко, пластинками.'),
      params: [l('5 mm', '5 mm', '5 мм')],
      done: l('Sve je tanko i iste debljine.', 'Everything is thin and even.', 'Всё тонкое и одинаковое.'),
      why: l('Za kratko kuvanje treba velika površina. Krupni komadi iz 8.1 bi ostali puni ukusa.', 'A short cook needs a large surface. The big pieces from 8.1 would keep their flavour to themselves.', 'Короткой варке нужна большая поверхность. Крупные куски из 8.1 оставили бы вкус себе.'),
    },
    {
      text: l('Za riblji fond, isperi kosti i izvadi škrge i krv.', 'For fish stock, rinse the bones and remove gills and blood.', 'Для рыбного бульона промой кости, удали жабры и кровь.'),
      params: [l('hladna voda, 10 min', 'cold water, 10 min', 'холодная вода, 10 мин')],
      done: l('Voda oko kostiju je bistra, nema crvenih tragova.', 'The water around the bones is clear with no red traces.', 'Вода вокруг костей прозрачная, без красных следов.'),
      why: l('Škrge i krv daju gorak, sivi fond. Masna riba (losos, skuša) nije za fond.', 'Gills and blood make a bitter, grey stock. Oily fish (salmon, mackerel) is not for stock.', 'Жабры и кровь дают горький серый бульон. Жирная рыба (лосось, скумбрия) для бульона не годится.'),
      drawing: 'fishRinse',
    },
    {
      text: l('Dinstaj povrće na malo ulja, bez boje.', 'Sweat the vegetables in a little oil, without colour.', 'Потоми овощи на капле масла, без цвета.'),
      params: [l('srednja vatra', 'medium heat', 'средний огонь'), l('5 min', '5 min', '5 мин')],
      done: l('Povrće je omekšalo i providno, nigde zlatno.', 'The vegetables are soft and translucent, nowhere golden.', 'Овощи мягкие и прозрачные, нигде не золотые.'),
      why: l('Svetao fond ostaje svetao. Boja bi prekrila nežan ukus ribe.', 'A light stock stays light. Colour would drown the delicate fish.', 'Светлый бульон остаётся светлым. Цвет заглушил бы нежную рыбу.'),
      drawing: 'sweatVeg',
    },
    {
      text: l('Dodaj kosti i hladnu vodu tek da ih pokrije.', 'Add the bones and cold water just to cover.', 'Добавь кости и холодную воду, чтобы только покрыла.'),
      params: [l('riba: 20 min', 'fish: 20 min', 'рыба: 20 мин'), l('samo povrće: 45 min', 'vegetable only: 45 min', 'только овощи: 45 мин')],
      done: l('Krčka jedva, a ti si postavio tajmer.', 'It barely simmers and your timer is set.', 'Едва томится, а таймер поставлен.'),
      why: l('Posle 20–30 minuta riblje kosti puštaju kreč i gorčinu, a ukus se više ne pojačava.', 'After 20–30 minutes fish bones release chalkiness and bitterness, and the flavour does not grow.', 'Через 20–30 минут рыбьи кости отдают меловой привкус и горечь, а вкус уже не растёт.'),
    },
    {
      text: l('Procedi odmah, bez pritiskanja kostiju.', 'Strain at once, without pressing the bones.', 'Процеди сразу, не отжимая кости.'),
      params: [l('fina cediljka', 'fine sieve', 'мелкое сито')],
      done: l('Fond je bistar, miriše na more ili baštu, ne na kuvano.', 'The stock is clear and smells of the sea or the garden, not of overcooking.', 'Бульон прозрачный, пахнет морем или огородом, а не переваренным.'),
      why: l('Pritisak gura mutnoću kroz sito.', 'Pressing pushes cloudiness through the sieve.', 'Давление продавливает муть сквозь сито.'),
    },
  ],
  mistake: {
    title: l('Krompir, kupus ili brokoli u povrtnom fondu.', 'Potato, cabbage or broccoli in vegetable stock.', 'Картофель, капуста или брокколи в овощном бульоне.'),
    fix: l(
      'Krompir zamuti fond skrobom, a kupus i brokoli daju sumporni miris. Fond pravi od luka, praziluka, šargarepe, celera, komorača, peršuna i pečuraka.',
      'Potato clouds the stock with starch, and cabbage and broccoli give a sulphur smell. Build stock on onion, leek, carrot, celery, fennel, parsley and mushrooms.',
      'Картофель мутит бульон крахмалом, а капуста и брокколи дают серный запах. Делай бульон из лука, порея, моркови, сельдерея, фенхеля, петрушки и грибов.',
    ),
  },
  think: {
    question: l('Zašto riblji fond ne krčka 3 sata kao pileći?', 'Why does fish stock not simmer 3 hours like chicken stock?', 'Почему рыбный бульон не томят 3 часа, как куриный?'),
    options: [
      l('Riblje kosti su tanke i posle 20–30 min daju gorčinu', 'Fish bones are thin and turn bitter after 20–30 min', 'Рыбьи кости тонкие и после 20–30 мин горчат'),
      l('Riba se raspadne pa nema šta da se procedi', 'The fish falls apart so there is nothing to strain', 'Рыба развалится, и нечего будет процеживать'),
      l('Može, samo je šteta struje', 'It could, it just wastes energy', 'Можно, просто жалко энергии'),
    ],
    answer: 0,
    explain: l(
      'Tanke kosti i malo kolagena: sve što je dobro izađe brzo. Dalje kuvanje izvlači samo ono što ne želiš.',
      'Thin bones and little collagen: everything good comes out fast. Cooking longer only pulls out what you do not want.',
      'Тонкие кости и мало коллагена: всё хорошее выходит быстро. Дальше варка вытягивает только ненужное.',
    ),
  },
}

const beefSoup: Lesson = {
  id: '8.4',
  title: l('Bistra goveđa supa', 'Clear beef soup', 'Прозрачный говяжий суп'),
  goal: l(
    'Skuvaš bistru, zlatnu goveđu supu i meso koje se seče viljuškom.',
    'You make a clear, golden beef soup and meat you can cut with a fork.',
    'Ты варишь прозрачный золотистый говяжий суп и мясо, которое режется вилкой.',
  ),
  minutes: 8,
  key: { value: l('3 h', '3 h', '3 ч'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Goveđa rebra ili kolenica sa kosti', 'Beef short rib or shank, bone in', 'Говяжьи рёбра или голяшка на кости'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Šargarepa, peršun koren, celer', 'Carrot, parsley root, celeriac', 'Морковь, корень петрушки, сельдерей'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Crni luk sa ljuskom', 'Onion, skin on', 'Лук в шелухе'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Hladna voda', 'Cold water', 'Холодная вода'), qty: l('3 l', '3 l', '3 л') },
    { item: l('So, biber u zrnu', 'Salt, peppercorns', 'Соль, перец горошком'), qty: l('—', '—', '—') },
    { item: l('Tanki rezanci', 'Fine soup noodles', 'Тонкая вермишель'), qty: l('100 g', '100 g', '100 г') },
  ],
  why: l(
    'Nedeljna supa je prvi test svakog kuvara kod nas. Bistra je samo ako je toplota tačna od prvog do poslednjeg minuta.',
    'The Sunday soup is the first test of every cook here. It is clear only if the heat is right from the first minute to the last.',
    'Воскресный суп — первый экзамен любого повара у нас. Он прозрачный, только если огонь точный с первой до последней минуты.',
  ),
  steps: [
    {
      text: l('Meso stavi u hladnu vodu i polako zagrej, skidaj penu.', 'Put the meat in cold water, heat slowly and skim.', 'Положи мясо в холодную воду, нагревай медленно, снимай пену.'),
      params: [l('3 l', '3 l', '3 л'), l('30 min do krčkanja', '30 min to a simmer', '30 мин до томления')],
      done: l('Pena je skinuta, površina je bistra.', 'The foam is off and the surface is clear.', 'Пена снята, поверхность прозрачная.'),
      why: l('Isti hladan start kao u 8.1. Ovde je još važniji jer supa ide u tanjir bez ceđenja kroz krpu.', 'The same cold start as 8.1. It matters more here, as the soup goes to the bowl.', 'Тот же холодный старт, что в 8.1. Здесь он ещё важнее: суп идёт прямо в тарелку.'),
      drawing: 'coldStart',
    },
    {
      text: l('Prepolovljen luk ispeci na suvom tiganju, sečenom stranom.', 'Char the halved onion on a dry pan, cut side down.', 'Обжарь половинки лука на сухой сковороде срезом вниз.'),
      params: [l('bez ulja', 'no oil', 'без масла'), l('5 min', '5 min', '5 мин')],
      done: l('Presek je tamnobraon, skoro crn.', 'The cut face is dark brown, almost black.', 'Срез тёмно-коричневый, почти чёрный.'),
      why: l('Pečen luk i ljuska daju supi zlatnu boju i slatkoću, bez ijedne kocke za supu.', 'The charred onion and its skin give the soup golden colour and sweetness, no stock cube needed.', 'Обожжённый лук и шелуха дают супу золотой цвет и сладость без бульонного кубика.'),
      drawing: 'charOnion',
    },
    {
      text: l('Krčkaj tako da se površina samo mrda.', 'Simmer so the surface only trembles.', 'Томи так, чтобы поверхность лишь подрагивала.'),
      params: [l('85–90°C', '85–90°C', '85–90°C'), l('2 h', '2 h', '2 ч')],
      done: l('Po koji mehurić izađe sa strane, sredina miruje.', 'The odd bubble rises at the edge, the middle stays still.', 'Редкий пузырёк у края, центр неподвижен.'),
      why: l('Mehurići koji se kotrljaju razbiju mast u kapljice koje zamute supu zauvek.', 'Rolling bubbles break the fat into droplets that cloud the soup for good.', 'Бурлящие пузыри разбивают жир на капли, которые мутят суп навсегда.'),
      drawing: 'simmer',
    },
    {
      text: l('Dodaj luk, korenasto povrće u komadima i biber.', 'Add the onion, root vegetables in large pieces and peppercorns.', 'Добавь лук, крупные куски корнеплодов и перец.'),
      params: [l('poslednjih 60 min', 'last 60 min', 'последние 60 мин'), l('so: 8 g/l', 'salt: 8 g/l', 'соль: 8 г/л')],
      done: l('Povrće je mekano, ali celo, a meso se odvaja od kosti.', 'The vegetables are soft but whole, and the meat comes off the bone.', 'Овощи мягкие, но целые, мясо отходит от кости.'),
      why: l('Za razliku od fonda, supa se soli: ide pravo u tanjir. Proveri ukus pa koriguj kao u 5.5.', 'Unlike stock, soup is salted: it goes straight to the bowl. Taste and adjust as in 5.5.', 'В отличие от бульона, суп солят: он идёт прямо в тарелку. Попробуй и поправь, как в 5.5.'),
    },
    {
      text: l('Procedi kroz krpu, a rezance skuvaj posebno.', 'Strain through a cloth, and cook the noodles separately.', 'Процеди через ткань, а вермишель свари отдельно.'),
      params: [l('rezanci: posebna voda', 'noodles: separate water', 'вермишель: отдельная вода')],
      done: l('Kroz supu u tanjiru vidiš dno.', 'You can see the bottom of the bowl through the soup.', 'Сквозь суп в тарелке видно дно.'),
      why: l('Rezanci kuvani u supi puste skrob i zamute je za minut.', 'Noodles cooked in the soup release starch and cloud it in a minute.', 'Вермишель, сваренная в супе, выпускает крахмал и мутит его за минуту.'),
      drawing: 'clothStrain',
    },
  ],
  mistake: {
    title: l('Supa koja ključa "da bude brže".', 'Soup boiled "to be quicker".', 'Суп кипит, «чтобы быстрее».'),
    fix: l(
      'Ne bude brže: meso se steže i ostane tvrdo, a supa postane mutna i masna. Kad je zamućena, ne vraća se. Smanji vatru čim proključa, i ne pokrivaj lonac do kraja.',
      'It is not quicker: the meat tightens and stays tough, and the soup goes cloudy and greasy. Once cloudy, it does not come back. Turn down as soon as it boils, and do not fully cover the pot.',
      'Быстрее не будет: мясо сжимается и остаётся жёстким, а суп мутнеет и становится жирным. Мутность не уходит. Убавь огонь, как только закипит, и не закрывай кастрюлю полностью.',
    ),
  },
  think: {
    question: l('Zašto supu soliš, a fond iz 8.1 ne?', 'Why do you salt the soup but not the stock from 8.1?', 'Почему суп солят, а бульон из 8.1 — нет?'),
    options: [
      l('Supa se jede takva, a fond se još ukuvava u sosovima', 'Soup is eaten as it is, while stock is reduced further in sauces', 'Суп едят как есть, а бульон ещё уваривают в соусах'),
      l('So čini supu bistrijom', 'Salt makes the soup clearer', 'Соль делает суп прозрачнее'),
      l('Goveđe meso traži više soli od pilećeg', 'Beef needs more salt than chicken', 'Говядине нужно больше соли, чем курице'),
    ],
    answer: 0,
    explain: l(
      'Kad fond ukuvaš na pola, so se udvostruči. Supa je kraj puta, pa se soli do ukusa.',
      'When stock is reduced by half, the salt doubles. Soup is the end of the road, so it is salted to taste.',
      'Когда бульон уваривают вдвое, соли становится вдвое больше. Суп — конец пути, его солят по вкусу.',
    ),
  },
  recipe: { name: l('Goveđa supa sa rezancima', 'Beef soup with noodles', 'Говяжий суп с вермишелью'), protein: 3.5, carbs: 3, fat: 1.9, kcal: 43 },
}

const corba: Lesson = {
  id: '8.5',
  title: l('Čorba', 'Thick soup (čorba)', 'Чорба'),
  goal: l(
    'Skuvaš pileću čorbu, gustu od zaprške i zakiseljenu žumancetom i pavlakom.',
    'You make a chicken čorba, thickened with a roux and finished with egg yolk and sour cream.',
    'Ты варишь куриную чорбу, загущённую ру и заправленную желтком и сметаной.',
  ),
  minutes: 8,
  key: { value: l('30 g/l', '30 g/l', '30 г/л'), label: l('brašno', 'flour', 'мука') },
  need: [
    { item: l('Pileći bataci bez kosti', 'Boneless chicken thighs', 'Куриные бёдра без кости'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Luk, šargarepa, peršun koren, celer', 'Onion, carrot, parsley root, celeriac', 'Лук, морковь, корень петрушки, сельдерей'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Pileći fond (8.1)', 'Chicken stock (8.1)', 'Куриный бульон (8.1)'), qty: l('1.5 l', '1.5 l', '1,5 л') },
    { item: l('Puter i brašno', 'Butter and flour', 'Сливочное масло и мука'), qty: l('po 45 g', '45 g each', 'по 45 г') },
    { item: l('Žumance i kisela pavlaka', 'Egg yolk and sour cream', 'Желток и сметана'), qty: l('1 + 100 g', '1 + 100 g', '1 + 100 г') },
    { item: l('Limun, peršun', 'Lemon, parsley', 'Лимон, петрушка'), qty: l('½ + 1 vezica', '½ + 1 bunch', '½ + 1 пучок') },
  ],
  why: l(
    'Supa je bistra, čorba je gusta i kisela. To je naša najvažnija supa i škola tri tehnike odjednom: dinstanje, zaprška i legiranje.',
    'Soup is clear, čorba is thick and tangy. It is our most important soup and a lesson in three techniques at once: sweating, roux and liaison.',
    'Суп прозрачный, чорба густая и кисловатая. Это наш главный суп и урок трёх техник сразу: томление, ру и льезон.',
  ),
  steps: [
    {
      text: l('Povrće i meso iseci na kockice iste veličine.', 'Cut the vegetables and meat into even dice.', 'Нарежь овощи и мясо одинаковыми кубиками.'),
      params: [l('1 cm', '1 cm', '1 см')],
      done: l('Svaka kocka staje na kašiku zajedno sa supom.', 'Every cube fits on a spoon together with the soup.', 'Каждый кубик помещается в ложку вместе с супом.'),
      why: l('U čorbi se sve jede kašikom, pa veličina diktira i zalogaj i vreme kuvanja (2.4).', 'In čorba everything is eaten with a spoon, so size sets both the bite and the cooking time (2.4).', 'Чорбу едят ложкой, так что размер задаёт и кусок, и время варки (2.4).'),
    },
    {
      text: l('Dinstaj povrće i meso na puteru, bez boje.', 'Sweat the vegetables and meat in butter, without colour.', 'Томи овощи и мясо на сливочном масле, без цвета.'),
      params: [l('srednja vatra', 'medium heat', 'средний огонь'), l('8 min', '8 min', '8 мин')],
      done: l('Luk je providan, meso je belo spolja.', 'The onion is translucent and the meat is white outside.', 'Лук прозрачный, мясо снаружи белое.'),
      drawing: 'sweatVeg',
    },
    {
      text: l('Pospi brašnom i mešaj, pa dolivaj topao fond postepeno.', 'Dust with flour and stir, then add the hot stock gradually.', 'Посыпь мукой, перемешай и постепенно вливай горячий бульон.'),
      params: [l('2 min na vatri', '2 min on the heat', '2 мин на огне'), l('fond u 3 dela', 'stock in 3 parts', 'бульон в 3 приёма')],
      done: l('Nema grudvica, a čorba prekriva kašiku tankim slojem.', 'No lumps, and the čorba coats the spoon thinly.', 'Нет комков, чорба покрывает ложку тонким слоем.'),
      why: l('Brašno mora da se prži 2 minuta da ne bi imalo ukus sirovog testa. Topla tečnost u malim delovima ne pravi grudve.', 'The flour needs 2 minutes of cooking or it tastes of raw dough. Hot liquid added in parts does not make lumps.', 'Муку нужно прогреть 2 минуты, иначе будет вкус сырого теста. Горячая жидкость понемногу не даёт комков.'),
      drawing: 'roux',
    },
    {
      text: l('Krčkaj dok meso i povrće ne omekšaju.', 'Simmer until the meat and vegetables are tender.', 'Томи, пока мясо и овощи не станут мягкими.'),
      params: [l('30 min', '30 min', '30 мин')],
      done: l('Šargarepa se gnječi kašikom o ivicu lonca.', 'The carrot squashes with a spoon against the side of the pot.', 'Морковь раздавливается ложкой о стенку кастрюли.'),
    },
    {
      text: l('Umuti žumance i pavlaku, razredi ih vrućom čorbom, pa vrati u lonac.', 'Whisk yolk and sour cream, thin with hot čorba, then stir back into the pot.', 'Взбей желток со сметаной, разбавь горячей чорбой и верни в кастрюлю.'),
      params: [l('2 kutlače', '2 ladles', '2 половника'), l('van vatre', 'off the heat', 'вне огня'), l('limun na kraju', 'lemon at the end', 'лимон в конце')],
      done: l('Čorba je svilena, bez ijedne bele grudvice.', 'The čorba is silky with not a single white fleck.', 'Чорба шелковистая, без единой белой крупинки.'),
      why: l('Vruća čorba polako zagreje žumance. Hladno žumance u vrelom loncu se odmah zgruša kao kajgana.', 'Hot čorba warms the yolk gradually. A cold yolk in a boiling pot sets at once like scrambled egg.', 'Горячая чорба постепенно прогревает желток. Холодный желток в кипящей кастрюле сразу свернётся, как омлет.'),
      drawing: 'temperLiaison',
    },
  ],
  mistake: {
    title: l('Čorba vraćena da proključa posle legiranja.', 'Čorba brought back to the boil after the liaison.', 'Чорбу снова довели до кипения после льезона.'),
    fix: l(
      'Žumance se zgruša na 70°C i čorba se iseče na pahuljice. Posle legiranja čorba se samo greje, nikad ne ključa. Podgrevaš je na tihoj vatri, uz mešanje.',
      'The yolk sets at 70°C and the čorba splits into flakes. After the liaison the čorba is only warmed, never boiled. Reheat it on low heat, stirring.',
      'Желток сворачивается при 70°C, и чорба расслаивается хлопьями. После льезона чорбу только греют, никогда не кипятят. Подогревай на слабом огне, помешивая.',
    ),
  },
  think: {
    question: l('Čorba je gotova, ali je ukus ravan. Šta prvo dodaješ?', 'The čorba is done but tastes flat. What do you add first?', 'Чорба готова, но вкус плоский. Что добавляешь первым?'),
    options: [
      l('So, pa limun, pa probaš opet', 'Salt, then lemon, then taste again', 'Соль, потом лимон, потом пробуешь снова'),
      l('Još pavlake', 'More sour cream', 'Ещё сметаны'),
      l('Kocku za supu', 'A stock cube', 'Бульонный кубик'),
    ],
    answer: 0,
    explain: l(
      'Redosled iz 5.5: so otvori ukus, kiselina ga podigne. Čorba bez kiseline nije čorba, to je gusta supa.',
      'The order from 5.5: salt opens the flavour, acid lifts it. A čorba with no acid is not a čorba, it is a thick soup.',
      'Порядок из 5.5: соль раскрывает вкус, кислота поднимает его. Чорба без кислоты — не чорба, а густой суп.',
    ),
  },
  recipe: { name: l('Pileća čorba', 'Chicken čorba', 'Куриная чорба'), protein: 4.5, carbs: 2.8, fat: 4, kcal: 65 },
}

export const soupLessons = { brownStock, quickStocks, beefSoup, corba }
