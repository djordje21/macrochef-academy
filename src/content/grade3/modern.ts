import { l, type Lesson } from '../types'

// Grade 3 · Module 4 · Modern techniques. Grade 2 opened sous vide, fermentation and drying at home; here they
// are run like a restaurant runs them: by the table, by weight and by pH, so the result is the same every time.

const pasteurise: Lesson = {
  id: '3.4.1',
  title: l('Sous vide: pasterizacija po tablici', 'Sous vide: pasteurising by the table', 'Су-вид: пастеризация по таблице'),
  goal: l(
    'Odrediš vreme za sous vide po debljini i temperaturi, tako da je meso i sočno i bezbedno.',
    'You set the sous vide time by thickness and temperature, so the meat is both juicy and safe.',
    'Ты определяешь время су-вид по толщине и температуре, чтобы мясо было и сочным, и безопасным.',
  ),
  minutes: 7,
  key: { value: l('60°C · 2 h', '60°C · 2 h', '60°C · 2 ч'), label: l('pileća prsa, 25 mm', 'chicken breast, 25 mm', 'куриная грудка, 25 мм') },
  need: [
    { item: l('Pileća prsa', 'Chicken breasts', 'Куриные грудки'), qty: l('2', '2', '2') },
    { item: l('Lenjir i termometar', 'Ruler and thermometer', 'Линейка и термометр'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Sous vide uređaj ili lonac sa termometrom (2.9.3)', 'Sous vide circulator or a pot with a thermometer (2.9.3)', 'Су-вид или кастрюля с термометром (2.9.3)'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Na 74°C piletina je bezbedna za sekund, ali suva. Na 60°C je sočna, a bezbedna postaje tek posle određenog vremena. To vreme piše u tablici, ne u osećaju.',
    'At 74°C chicken is safe in a second, but dry. At 60°C it is juicy, and it becomes safe only after a set time. That time is in the table, not in your gut.',
    'При 74°C курица безопасна за секунду, но суха. При 60°C она сочная, а безопасной становится только через определённое время. Это время — в таблице, а не в ощущениях.',
  ),
  steps: [
    {
      text: l('Izmeri debljinu mesa na najdebljem delu.', 'Measure the thickness of the meat at its thickest point.', 'Измерь толщину мяса в самом толстом месте.'),
      params: [l('u milimetrima', 'in millimetres', 'в миллиметрах')],
      done: l('Znaš debljinu, na primer 25 mm.', 'You know the thickness, for example 25 mm.', 'Ты знаешь толщину, например 25 мм.'),
      why: l('Vreme zavisi od debljine, ne od težine. Dugačko tanko prse se ugreje brže od kratkog debelog.', 'Time depends on thickness, not weight. A long thin breast heats faster than a short thick one.', 'Время зависит от толщины, а не от веса. Длинная тонкая грудка прогревается быстрее короткой толстой.'),
    },
    {
      text: l('U tablici pronađi vreme za svoju temperaturu i debljinu.', 'Find the time for your temperature and thickness in the table.', 'Найди в таблице время для своей температуры и толщины.'),
      params: [l('piletina 60°C, 25 mm: oko 2 h', 'chicken 60°C, 25 mm: about 2 h', 'курица 60°C, 25 мм: около 2 ч')],
      done: l('Imaš vreme koje uključuje zagrevanje do sredine i držanje.', 'You have a time that covers heating to the centre and the hold.', 'У тебя есть время, включающее прогрев до центра и выдержку.'),
      why: l('Duplo deblji komad treba oko četiri puta duže do sredine. Zato se ne pogađa.', 'A piece twice as thick needs about four times as long to reach the centre. That is why you do not guess.', 'Кусок вдвое толще прогревается до центра примерно вчетверо дольше. Поэтому не угадывают.'),
    },
    {
      text: l('Vakumiraj meso, pa ga stavi u vodu tek kad dostigne temperaturu.', 'Vacuum-seal the meat, then put it in only once the water is at temperature.', 'Завакуумируй мясо и опусти в воду только когда она нагреется.'),
      done: l('Kesa je pod vodom, bez vazduha oko mesa.', 'The bag is under water with no air around the meat.', 'Пакет под водой, без воздуха вокруг мяса.'),
      why: l('Vazduh izoluje i kesa pluta. Deo mesa iznad vode ne dobija temperaturu iz tablice.', 'Air insulates and makes the bag float. Any part above the water does not get the table temperature.', 'Воздух изолирует, и пакет всплывает. Часть мяса над водой не получает температуру из таблицы.'),
      drawing: 'zipBag',
    },
    {
      text: l('Drži celo vreme iz tablice, uz proveru temperature vode.', 'Hold for the full table time, checking the water temperature.', 'Держи всё время по таблице, проверяя температуру воды.'),
      params: [l('± 0,5°C', '± 0.5°C', '± 0,5°C')],
      done: l('Termometar u vodi celo vreme pokazuje zadatu temperaturu.', 'The thermometer in the water shows the set temperature the whole time.', 'Термометр в воде всё время показывает заданную температуру.'),
      why: l('Pad od dva stepena na sat vremena menja tablicu. Uređaj to drži sam, lonac na šporetu ne.', 'A two-degree drop for an hour changes the table. A circulator holds it on its own; a pot on the hob does not.', 'Падение на два градуса на час меняет таблицу. Прибор держит сам, кастрюля на плите — нет.'),
      drawing: 'sousVidePot',
    },
    {
      text: l('Služi odmah ili ohladi u ledenoj vodi i čuvaj u frižideru.', 'Serve at once, or chill in ice water and keep in the fridge.', 'Подавай сразу или охлади в ледяной воде и храни в холодильнике.'),
      params: [l('led i voda 30 min', 'ice and water 30 min', 'лёд с водой 30 мин'), l('frižider do 3 dana', 'fridge up to 3 days', 'холодильник до 3 дней')],
      done: l('Kesa je hladna do sredine pre nego što ode u frižider.', 'The bag is cold to the centre before it goes in the fridge.', 'Пакет холодный до центра, прежде чем уйти в холодильник.'),
      why: l('Pasterizacija ubija bakterije, ali ne i spore. Brzo hlađenje ih ne pušta da se probude.', 'Pasteurising kills bacteria, but not spores. Fast chilling keeps them from waking up.', 'Пастеризация убивает бактерии, но не споры. Быстрое охлаждение не даёт им проснуться.'),
    },
  ],
  mistake: {
    title: l('Meso izvađeno čim sredina dostigne 60°C.', 'Meat taken out as soon as the centre reaches 60°C.', 'Мясо вынуто, как только центр достиг 60°C.'),
    fix: l(
      'Na niskoj temperaturi bezbednost dolazi od vremena, ne od broja na termometru. Piletina na 60°C bez držanja nije pasterizovana. Drži celo vreme iz tablice.',
      'At low temperature, safety comes from time, not from the number on the thermometer. Chicken at 60°C without the hold is not pasteurised. Hold for the full table time.',
      'При низкой температуре безопасность даёт время, а не цифра на термометре. Курица при 60°C без выдержки не пастеризована. Держи всё время по таблице.',
    ),
  },
  think: {
    question: l('Komad je duplo deblji. Koliko duže treba do sredine?', 'The piece is twice as thick. How much longer to reach the centre?', 'Кусок вдвое толще. Насколько дольше прогрев до центра?'),
    options: [
      l('Oko četiri puta duže', 'About four times as long', 'Примерно вчетверо дольше'),
      l('Duplo duže', 'Twice as long', 'Вдвое дольше'),
      l('Isto', 'The same', 'Столько же'),
    ],
    answer: 0,
    explain: l(
      'Toplota putuje kroz meso sporo, a vreme raste sa kvadratom debljine. Zato tablica ima kolonu za debljinu, a ne za težinu.',
      'Heat travels slowly through meat, and the time grows with the square of the thickness. That is why the table has a column for thickness, not weight.',
      'Тепло медленно идёт через мясо, а время растёт пропорционально квадрату толщины. Поэтому в таблице колонка для толщины, а не для веса.',
    ),
  },
}

const ferment: Lesson = {
  id: '3.4.2',
  title: l('Laktofermentacija u salamuri', 'Lacto-fermentation in brine', 'Лактоферментация в рассоле'),
  goal: l(
    'Fermentišeš povrće u salamuri po težini i proveriš kiselost trakicom, a ne nagađanjem.',
    'You ferment vegetables in brine by weight and check the acidity with a strip, not by guessing.',
    'Ты ферментируешь овощи в рассоле по весу и проверяешь кислотность полоской, а не на глаз.',
  ),
  minutes: 7,
  key: { value: l('2%', '2%', '2%'), label: l('soli na ukupnu težinu', 'salt on the total weight', 'соли на общий вес') },
  need: [
    { item: l('Povrće: šargarepa, karfiol, ljuta paprika', 'Vegetables: carrot, cauliflower, chilli', 'Овощи: морковь, цветная капуста, острый перец'), qty: l('600 g', '600 g', '600 г') },
    { item: l('Voda i so bez joda', 'Water and non-iodised salt', 'Вода и нейодированная соль'), qty: l('400 ml + 20 g', '400 ml + 20 g', '400 мл + 20 г') },
    { item: l('Tegla, teg, pH trakice', 'Jar, weight, pH strips', 'Банка, груз, pH-полоски'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Fermentisano povrće daje kiselinu i dubinu koju sirće ne može. Kad se meri po težini i pH, ista tegla ispadne isto svaki put.',
    'Fermented vegetables give an acidity and depth that vinegar cannot. Measured by weight and pH, the same jar comes out the same every time.',
    'Ферментированные овощи дают кислотность и глубину, которых не даст уксус. Если мерить по весу и pH, банка получается одинаковой каждый раз.',
  ),
  steps: [
    {
      text: l('Izmeri povrće i vodu zajedno.', 'Weigh the vegetables and the water together.', 'Взвесь овощи и воду вместе.'),
      params: [l('600 g + 400 g = 1 kg', '600 g + 400 g = 1 kg', '600 г + 400 г = 1 кг')],
      done: l('Znaš ukupnu težinu tegle bez stakla.', 'You know the total weight of the jar\'s contents.', 'Ты знаешь общий вес содержимого банки.'),
      why: l('So se posle nekoliko dana izjednači u povrću i vodi. Zato se računa na oba.', 'After a few days the salt evens out between the vegetables and the water. That is why it is counted on both.', 'Через несколько дней соль выравнивается между овощами и водой. Поэтому её считают на оба.'),
      drawing: 'scaleTare',
    },
    {
      text: l('Dodaj so: 2% ukupne težine.', 'Add salt: 2% of the total weight.', 'Добавь соль: 2% общего веса.'),
      params: [l('1 kg → 20 g', '1 kg → 20 g', '1 кг → 20 г')],
      done: l('So je potpuno rastvorena u vodi.', 'The salt is completely dissolved in the water.', 'Соль полностью растворена в воде.'),
      why: l('Manje soli pušta pogrešne mikrobe i povrće omekša. Više soli usporava bakterije mlečne kiseline.', 'Less salt lets the wrong microbes in and the vegetables go soft. More salt slows the lactic acid bacteria.', 'Меньше соли — пускает чужие микробы, овощи мягчеют. Больше соли — тормозит молочнокислые бактерии.'),
    },
    {
      text: l('Povrće potopi u salamuru i pritisni tegom.', 'Submerge the vegetables in the brine and press them down with a weight.', 'Погрузи овощи в рассол и прижми грузом.'),
      done: l('Ništa ne viri iz salamure.', 'Nothing pokes out of the brine.', 'Ничего не торчит из рассола.'),
      why: l('Ispod salamure nema kiseonika i plesan ne može da raste. Ono što viri, buđa.', 'Under the brine there is no oxygen and mould cannot grow. Whatever pokes out goes mouldy.', 'Под рассолом нет кислорода, и плесень не растёт. Что торчит — плесневеет.'),
      drawing: 'krautWeight',
    },
    {
      text: l('Drži na sobnoj temperaturi i svaki dan ispusti gas.', 'Keep at room temperature and let the gas out every day.', 'Держи при комнатной температуре и каждый день выпускай газ.'),
      params: [l('18–22°C', '18–22°C', '18–22°C'), l('5–14 dana', '5–14 days', '5–14 дней')],
      done: l('Salamura je mutna i sitni mehurići se dižu kad pomeriš teglu.', 'The brine is cloudy and small bubbles rise when you move the jar.', 'Рассол мутный, и мелкие пузырьки поднимаются, если сдвинуть банку.'),
      why: l('Mutnoća i mehurići su znak da bakterije rade. Bistra salamura posle tri dana znači da nešto nije u redu.', 'Cloudiness and bubbles mean the bacteria are working. Clear brine after three days means something is wrong.', 'Муть и пузырьки — признак работы бактерий. Прозрачный рассол через три дня — что-то не так.'),
    },
    {
      text: l('Proveri kiselost trakicom i ukusom, pa prebaci u frižider.', 'Check the acidity with a strip and by taste, then move it to the fridge.', 'Проверь кислотность полоской и на вкус, затем перенеси в холодильник.'),
      params: [l('pH 4,6 ili niže', 'pH 4.6 or lower', 'pH 4,6 или ниже')],
      done: l('Trakica pokazuje 4,6 ili manje, a povrće je kiselo i hrskavo.', 'The strip reads 4.6 or below and the vegetables are sour and crunchy.', 'Полоска показывает 4,6 или ниже, овощи кислые и хрустящие.'),
      why: l('Ispod pH 4,6 bakterija botulizma ne može da raste. To je granica bezbednosti, ne ukusa.', 'Below pH 4.6 the botulism bacterium cannot grow. It is a safety line, not a matter of taste.', 'Ниже pH 4,6 бактерия ботулизма не может расти. Это граница безопасности, а не вкуса.'),
    },
  ],
  mistake: {
    title: l('Ceo sadržaj bačen zbog belog sloja na površini.', 'The whole jar thrown out because of a white film on top.', 'Вся банка выброшена из-за белой плёнки сверху.'),
    fix: l(
      'Ravan beli sloj je obično kvasac, nije opasan. Skini ga i proveri da je povrće pod salamurom. Ali dlakava plesan u boji, zelena, crna ili ružičasta, znači da se baca cela tegla.',
      'A flat white film is usually yeast and is harmless. Skim it off and check the vegetables are under the brine. But fuzzy, coloured mould, green, black or pink, means the whole jar goes.',
      'Ровная белая плёнка — обычно дрожжи, она безвредна. Сними её и проверь, что овощи под рассолом. Но пушистая цветная плесень — зелёная, чёрная или розовая — значит, выбрасывается вся банка.',
    ),
  },
  think: {
    question: l('Zašto se so računa na povrće i vodu zajedno?', 'Why is the salt counted on the vegetables and water together?', 'Почему соль считают на овощи и воду вместе?'),
    options: [
      l('Posle nekoliko dana je ista u celoj tegli', 'After a few days it is the same throughout the jar', 'Через несколько дней она одинакова во всей банке'),
      l('Povrće ne upija so', 'The vegetables do not absorb salt', 'Овощи не впитывают соль'),
      l('Tako je slanije', 'It makes it saltier', 'Так солонее'),
    ],
    answer: 0,
    explain: l(
      'So prelazi iz vode u povrće dok se ne izjednači. Ako bi se računala samo na vodu, povrće bi na kraju imalo mnogo manje soli nego što misliš.',
      'Salt moves from the water into the vegetables until it evens out. Counted on the water alone, the vegetables would end up far less salty than you think.',
      'Соль переходит из воды в овощи, пока не выровняется. Если считать только на воду, овощи в итоге будут гораздо менее солёными, чем кажется.',
    ),
  },
}

const powders: Lesson = {
  id: '3.4.3',
  title: l('Prahovi i so od bilja', 'Powders and herb salt', 'Порошки и травяная соль'),
  goal: l(
    'Osušiš povrće ili bilje na niskoj temperaturi i samelješ ga u prah jake boje i ukusa.',
    'You dry vegetables or herbs at a low temperature and grind them into a powder with strong colour and flavour.',
    'Ты сушишь овощи или зелень при низкой температуре и мелешь в порошок яркого цвета и вкуса.',
  ),
  minutes: 6,
  key: { value: l('60°C', '60°C', '60°C'), label: l('sušenje bez gubitka boje', 'drying without losing colour', 'сушка без потери цвета') },
  need: [
    { item: l('Cvekla, ljuske crnog luka ili bilje', 'Beetroot, onion skins or herbs', 'Свёкла, луковая шелуха или зелень'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Za so od bilja: krupna so', 'For herb salt: coarse salt', 'Для травяной соли: крупная соль'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Mlin za začine, sito, tegla, silika gel', 'Spice grinder, sieve, jar, silica gel', 'Кофемолка, сито, банка, силикагель'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Prah je ukus koji stane u prstohvat. Prašina od cvekle preko bele ribe ili so od bilja preko mesa daje boju i ukus bez tečnosti, a koristi i ono što bi bacio.',
    'A powder is flavour that fits in a pinch. Beetroot dust over white fish or herb salt over meat adds colour and taste with no liquid, and uses what you would throw away.',
    'Порошок — это вкус, умещающийся в щепотку. Свекольная пыль на белой рыбе или травяная соль на мясе дают цвет и вкус без жидкости и используют то, что выбросил бы.',
  ),
  steps: [
    {
      text: l('Izrendaj ili iseci povrće tanko i rasporedi u jedan sloj.', 'Grate or thinly slice the vegetable and spread it in one layer.', 'Натри или тонко нарежь овощ и разложи в один слой.'),
      params: [l('so od bilja: bilje i so 1 : 2, izblendovano', 'herb salt: herbs and salt 1 : 2, blended', 'травяная соль: зелень и соль 1 : 2, взбить')],
      done: l('Ništa se ne preklapa na plehu.', 'Nothing overlaps on the tray.', 'На противне ничего не перекрывается.'),
      why: l('Gde se preklapa, ostane vlažno, i ceo prah posle buđa u tegli.', 'Wherever it overlaps it stays damp, and later the whole powder goes mouldy in the jar.', 'Где перекрывается, остаётся влажным, и потом весь порошок плесневеет в банке.'),
    },
    {
      text: l('Suši u rerni sa odškrinutim vratima.', 'Dry in the oven with the door ajar.', 'Суши в духовке с приоткрытой дверцей.'),
      params: [l('60°C', '60°C', '60°C'), l('3–6 h', '3–6 h', '3–6 ч')],
      done: l('Komadi se lome kao staklo, ne savijaju se.', 'The pieces snap like glass and do not bend.', 'Кусочки ломаются, как стекло, а не гнутся.'),
      why: l('Odškrinuta vrata puštaju paru napolje. Iznad 70°C boja tamni, a šećer u cvekli karamelizuje.', 'The open door lets the steam out. Above 70°C the colour darkens and the sugar in beetroot caramelises.', 'Приоткрытая дверца выпускает пар. Выше 70°C цвет темнеет, а сахар свёклы карамелизуется.'),
      drawing: 'dryTray',
    },
    {
      text: l('Ohladi potpuno, pa samelji u mlinu za začine.', 'Cool completely, then grind in a spice grinder.', 'Полностью остуди, затем смели в кофемолке.'),
      done: l('Prah je fin i rastresit.', 'The powder is fine and loose.', 'Порошок мелкий и рассыпчатый.'),
      why: l('Topli komadi puštaju vlagu u mlinu i prah se zgrudva.', 'Warm pieces release moisture in the grinder and the powder clumps.', 'Тёплые кусочки отдают влагу в кофемолке, и порошок комкуется.'),
    },
    {
      text: l('Prosej prah kroz fino sito.', 'Sift the powder through a fine sieve.', 'Просей порошок через мелкое сито.'),
      done: l('U situ ostaju samo krupni komadi, koje meljes ponovo.', 'Only the coarse bits stay in the sieve, and you grind those again.', 'В сите остаются только крупные кусочки — их мелешь снова.'),
      why: l('Krupna zrnca na tanjiru izgledaju kao prljavština, a ne kao začin.', 'Coarse grains on a plate look like dirt, not seasoning.', 'Крупные крупинки на тарелке выглядят как грязь, а не приправа.'),
    },
    {
      text: l('Čuvaj u zatvorenoj tegli sa kesicom silika gela.', 'Store in a sealed jar with a silica gel sachet.', 'Храни в закрытой банке с пакетиком силикагеля.'),
      params: [l('do mesec dana', 'up to a month', 'до месяца')],
      done: l('Prah ostaje rastresit, bez grudvi.', 'The powder stays loose, with no lumps.', 'Порошок остаётся рассыпчатым, без комков.'),
      why: l('Suv prah upija vlagu iz vazduha. Silika gel je upija pre njega.', 'A dry powder pulls moisture from the air. Silica gel takes it first.', 'Сухой порошок тянет влагу из воздуха. Силикагель забирает её первым.'),
    },
  ],
  mistake: {
    title: l('Rerna na 100°C da bude brže.', 'The oven at 100°C to go faster.', 'Духовка на 100°C, чтобы было быстрее.'),
    fix: l(
      'Povrće se peče umesto da se suši: boja posmeđi, a ukus postane gorak. Sušenje je sporo po prirodi. Niska temperatura i otvorena vrata, pa strpljenje.',
      'The vegetable bakes instead of drying: the colour turns brown and the taste goes bitter. Drying is slow by nature. A low temperature and an open door, then patience.',
      'Овощ печётся вместо сушки: цвет буреет, вкус становится горьким. Сушка медленная по природе. Низкая температура, открытая дверца и терпение.',
    ),
  },
  think: {
    question: l('Kako znaš da je dovoljno suvo za mlevenje?', 'How do you know it is dry enough to grind?', 'Как понять, что достаточно сухо для помола?'),
    options: [
      l('Lomi se kao staklo', 'It snaps like glass', 'Ломается, как стекло'),
      l('Savija se', 'It bends', 'Гнётся'),
      l('Potamnelo je', 'It has darkened', 'Потемнело'),
    ],
    answer: 0,
    explain: l(
      'Ako se savija, u njemu još ima vode, i prah će se zgrudvati ili ubuđati. Ako je potamnelo, temperatura je bila previsoka.',
      'If it bends, there is still water inside, and the powder will clump or go mouldy. If it has darkened, the temperature was too high.',
      'Если гнётся, внутри ещё есть вода, и порошок слипнется или заплесневеет. Если потемнело — температура была слишком высокой.',
    ),
  },
}

const dryBrine: Lesson = {
  id: '3.4.4',
  title: l('Suvo soljenje i suva koža', 'Dry brining and dry skin', 'Сухой посол и сухая кожа'),
  goal: l(
    'Posoliš pile ili patku dan-dva ranije i ostaviš ih nepokrivene, da meso bude sočno, a koža hrskava.',
    'You salt a chicken or duck a day or two ahead and leave it uncovered, so the meat is juicy and the skin crisp.',
    'Ты солишь курицу или утку за день-два и оставляешь непокрытой, чтобы мясо было сочным, а кожа хрустящей.',
  ),
  minutes: 5,
  key: { value: l('1%', '1%', '1%'), label: l('soli na težinu mesa', 'salt to the weight of the meat', 'соли на вес мяса') },
  need: [
    { item: l('Celo pile ili pačja prsa', 'A whole chicken or duck breasts', 'Целая курица или утиные грудки'), qty: l('1,5 kg', '1.5 kg', '1,5 кг') },
    { item: l('Krupna so', 'Coarse salt', 'Крупная соль'), qty: l('15 g', '15 g', '15 г') },
    { item: l('Rešetka i pleh', 'Rack and tray', 'Решётка и противень'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'So dan ranije prodre u meso i zadrži sok pri pečenju. Hladan vazduh frižidera u isto vreme isuši kožu. Dobiješ dve stvari jednim potezom.',
    'Salt a day ahead travels into the meat and holds the juice during roasting. Meanwhile the cold fridge air dries the skin. One move, two results.',
    'Соль за день проникает в мясо и удерживает сок при запекании. Холодный воздух холодильника в это время сушит кожу. Один ход — два результата.',
  ),
  steps: [
    {
      text: l('Izmeri meso i odmeri so: 1% težine.', 'Weigh the meat and measure the salt: 1% of the weight.', 'Взвесь мясо и отмерь соль: 1% веса.'),
      params: [l('1,5 kg → 15 g', '1.5 kg → 15 g', '1,5 кг → 15 г')],
      done: l('So je izmerena na vagi, ne kašikom.', 'The salt is weighed on the scale, not by the spoon.', 'Соль взвешена на весах, а не ложкой.'),
      why: l('Kašika krupne i kašika sitne soli razlikuju se skoro duplo. Vaga se ne razlikuje.', 'A spoonful of coarse salt and a spoonful of fine salt differ by almost double. A scale does not.', 'Ложка крупной и ложка мелкой соли отличаются почти вдвое. Весы — нет.'),
    },
    {
      text: l('Posoli ravnomerno, sa visine, i ispod kože gde možeš.', 'Salt evenly, from a height, and under the skin where you can.', 'Посоли равномерно, с высоты, и под кожу, где получится.'),
      done: l('So je raspoređena po celom komadu, bez gomilica.', 'The salt is spread over the whole piece, with no little heaps.', 'Соль распределена по всему куску, без горок.'),
      why: l('So sa visine pada kao kiša i pokrije ravnomerno (5.1).', 'Salt from a height falls like rain and covers evenly (5.1).', 'Соль с высоты падает как дождь и ложится равномерно (5.1).'),
      drawing: 'saltRain',
    },
    {
      text: l('Stavi meso na rešetku, nepokriveno, na najnižu policu frižidera.', 'Set the meat on a rack, uncovered, on the bottom shelf of the fridge.', 'Положи мясо на решётку, непокрытым, на нижнюю полку холодильника.'),
      params: [l('24–48 h', '24–48 h', '24–48 ч')],
      done: l('Vazduh struji oko celog komada, i odozdo.', 'Air moves around the whole piece, underneath too.', 'Воздух обтекает весь кусок, и снизу тоже.'),
      why: l('Najniža polica jer je meso sirovo i ne sme da kaplje na drugu hranu (1.4).', 'The bottom shelf, because the meat is raw and must not drip onto other food (1.4).', 'Нижняя полка, потому что мясо сырое и не должно капать на другую еду (1.4).'),
      drawing: 'dryBrine',
    },
    {
      text: l('Posle dan-dva proveri kožu.', 'After a day or two, check the skin.', 'Через день-два проверь кожу.'),
      done: l('Koža je suva, zategnuta i skoro providna.', 'The skin is dry, taut and almost translucent.', 'Кожа сухая, натянутая и почти прозрачная.'),
      why: l('Suva koža odmah kreće da se peče. Vlažna prvo mora da ispari vodu, i dotle se meso ispod prepeče.', 'Dry skin starts crisping at once. Wet skin must first lose its water, and by then the meat underneath overcooks.', 'Сухая кожа сразу начинает румяниться. Влажная сначала должна испарить воду, а мясо под ней тем временем пересыхает.'),
    },
    {
      text: l('Peci bez dodatne soli.', 'Roast without adding more salt.', 'Запекай без дополнительной соли.'),
      done: l('Koža je hrskava i zlatna, a meso sočno i posoljeno do sredine.', 'The skin is crisp and golden, and the meat juicy and seasoned to the centre.', 'Кожа хрустящая и золотистая, мясо сочное и посолено до центра.'),
      why: l('So je već u mesu. Još soli preko kože bi bilo previše.', 'The salt is already in the meat. More salt on the skin would be too much.', 'Соль уже в мясе. Ещё соль на кожу — будет слишком.'),
    },
  ],
  mistake: {
    title: l('Meso pokriveno folijom u frižideru.', 'The meat covered with cling film in the fridge.', 'Мясо накрыто плёнкой в холодильнике.'),
    fix: l(
      'Ispod folije koža ostaje vlažna, i pola efekta propadne. Meso posebno na najnižu policu, nepokriveno, da vazduh suši kožu.',
      'Under film the skin stays damp and half the effect is lost. Put the meat alone on the bottom shelf, uncovered, so the air dries the skin.',
      'Под плёнкой кожа остаётся влажной, и половина эффекта теряется. Мясо — отдельно на нижнюю полку, непокрытым, чтобы воздух сушил кожу.',
    ),
  },
  think: {
    question: l('Zašto je meso posoljeno dan ranije sočnije?', 'Why is meat salted a day ahead juicier?', 'Почему мясо, посоленное накануне, сочнее?'),
    options: [
      l('So menja proteine i oni zadrže sok', 'Salt changes the proteins so they hold the juice', 'Соль меняет белки, и они удерживают сок'),
      l('So dodaje vodu u meso', 'Salt adds water to the meat', 'Соль добавляет в мясо воду'),
      l('Meso se omekša od hladnoće', 'The cold tenderises the meat', 'Мясо размягчается от холода'),
    ],
    answer: 0,
    explain: l(
      'So za dan-dva prodre u meso i delimično rastvori proteine. Takvi proteini se pri pečenju manje skupljaju i ne istiskuju sok.',
      'Over a day or two the salt moves into the meat and partly dissolves the proteins. Those proteins shrink less in the heat and do not squeeze the juice out.',
      'За день-два соль проникает в мясо и частично растворяет белки. Такие белки меньше сжимаются при нагреве и не выдавливают сок.',
    ),
  },
}

const infuse: Lesson = {
  id: '3.4.5',
  title: l('Infuzije: mleko, pavlaka, ulje', 'Infusions: milk, cream, oil', 'Настои: молоко, сливки, масло'),
  goal: l(
    'Preneseš ukus začina ili bilja u mleko, pavlaku ili ulje, toplo ili hladno, bez gorčine.',
    'You carry the flavour of a spice or herb into milk, cream or oil, hot or cold, without bitterness.',
    'Ты переносишь вкус пряности или зелени в молоко, сливки или масло, горячим или холодным способом, без горечи.',
  ),
  minutes: 5,
  key: { value: l('80°C · 20 min', '80°C · 20 min', '80°C · 20 мин'), label: l('topla infuzija', 'hot infusion', 'горячий настой') },
  need: [
    { item: l('Mleko ili slatka pavlaka', 'Milk or cream', 'Молоко или сливки'), qty: l('500 ml', '500 ml', '500 мл') },
    { item: l('Aroma: lovor, zrna kafe, vanila, bosiljak', 'Aroma: bay, coffee beans, vanilla, basil', 'Аромат: лавр, кофейные зёрна, ваниль, базилик'), qty: l('po izboru', 'your choice', 'на выбор') },
    { item: l('Poklopac, sito, gaza', 'Lid, sieve, muslin', 'Крышка, сито, марля'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Infuzija daje ukus bez komadića. Pire na mleku sa lovorom ili krem na pavlaci sa kafom ima ukus koji gost oseti, a ne vidi odakle dolazi.',
    'An infusion gives flavour without bits. A purée made with bay-infused milk or a cream with coffee-infused cream has a taste the guest notices without seeing where it comes from.',
    'Настой даёт вкус без кусочков. Пюре на молоке с лавром или крем на сливках с кофе имеет вкус, который гость чувствует, не видя, откуда он.',
  ),
  steps: [
    {
      text: l('Izaberi nosač: mleko i pavlaka za pirea i kremove, ulje za sosove i dresinge.', 'Choose the carrier: milk and cream for purées and creams, oil for sauces and dressings.', 'Выбери основу: молоко и сливки для пюре и кремов, масло для соусов и заправок.'),
      params: [l('ulje sa svežim biljem: frižider, do 3 dana', 'oil with fresh herbs: fridge, up to 3 days', 'масло со свежей зеленью: холодильник, до 3 дней')],
      done: l('Znaš šta infuziraš i za koje jelo.', 'You know what you are infusing and for which dish.', 'Ты знаешь, что настаиваешь и для какого блюда.'),
      why: l('Mast nosi aromu bolje od vode. Zato pavlaka sa vanilom miriše jače od vode sa vanilom.', 'Fat carries aroma better than water. That is why cream with vanilla smells stronger than water with vanilla.', 'Жир несёт аромат лучше воды. Поэтому сливки с ванилью пахнут сильнее, чем вода с ванилью.'),
    },
    {
      text: l('Toplo: zagrej do 80°C, skloni sa vatre, dodaj aromu i poklopi.', 'Hot: heat to 80°C, take off the heat, add the aroma and cover.', 'Горячий способ: нагрей до 80°C, сними с огня, добавь аромат и накрой.'),
      params: [l('80°C', '80°C', '80°C'), l('20–30 min', '20–30 min', '20–30 мин')],
      done: l('Mleko jasno miriše na aromu kad podigneš poklopac.', 'The milk clearly smells of the aroma when you lift the lid.', 'Молоко явно пахнет ароматом, когда поднимаешь крышку.'),
      why: l('Toplota otvara aromu, a poklopac je zadrži. Ključanje izvlači i gorke materije.', 'Heat opens the aroma and the lid keeps it in. Boiling pulls out the bitter compounds too.', 'Тепло раскрывает аромат, а крышка его удерживает. Кипение вытягивает и горькие вещества.'),
      drawing: 'lidOn',
    },
    {
      text: l('Hladno: nežno bilje potopi u hladnu pavlaku i ostavi preko noći.', 'Cold: steep delicate herbs in cold cream and leave overnight.', 'Холодный способ: залей нежную зелень холодными сливками на ночь.'),
      params: [l('12 h', '12 h', '12 ч'), l('0–5°C', '0–5°C', '0–5°C')],
      done: l('Pavlaka ima ukus svežeg bilja i blago je zelenkasta.', 'The cream tastes of fresh herbs and is faintly green.', 'Сливки имеют вкус свежей зелени и слегка зеленоватые.'),
      why: l('Bosiljak i menta u toplom dobiju ukus kuvanog povrća. Hladno zadrže svežinu.', 'Basil and mint taste of cooked greens when heated. Cold, they stay fresh.', 'Базилик и мята в тепле приобретают вкус варёной зелени. В холоде остаются свежими.'),
    },
    {
      text: l('Procedi kroz sito i gazu.', 'Strain through a sieve and muslin.', 'Процеди через сито и марлю.'),
      done: l('Tečnost je bez ijednog komadića.', 'The liquid has not a single bit in it.', 'В жидкости нет ни одного кусочка.'),
      why: l('Vanilu i lovor posle isperi i osuši. Mogu još jednom.', 'Rinse and dry the vanilla and bay afterwards. They can go round once more.', 'Ваниль и лавр потом промой и высуши. Их можно использовать ещё раз.'),
      drawing: 'clothStrain',
    },
    {
      text: l('Probaj i upotrebi kao običan sastojak.', 'Taste it and use it as an ordinary ingredient.', 'Попробуй и используй как обычный ингредиент.'),
      params: [l('pire, krem, sos, sladoled', 'purée, cream, sauce, ice cream', 'пюре, крем, соус, мороженое')],
      done: l('Ukus je jasan, ali ne dominira jelom.', 'The flavour is clear but does not dominate the dish.', 'Вкус ясный, но не доминирует в блюде.'),
      why: l('Ako je preslabo, infuziraj još. Ako je prejako, razblaži običnim mlekom. Lakše je dodati nego oduzeti.', 'If it is too weak, infuse longer. If it is too strong, dilute with plain milk. It is easier to add than to take away.', 'Если слабо — настаивай дольше. Если слишком сильно — разбавь простым молоком. Добавить легче, чем убрать.'),
    },
  ],
  mistake: {
    title: l('Aroma kuvana u mleku dok ključa.', 'The aroma boiled in the milk.', 'Аромат варится в кипящем молоке.'),
    fix: l(
      'Ključanje izvlači tanine i gorčinu: lovor postane kao čaj, a kafa kao zagoreli espreso. Infuzija je toplota bez ključanja, poklopljena, van vatre.',
      'Boiling extracts tannins and bitterness: bay turns to tea and coffee to a burnt espresso. An infusion is heat without boiling, covered and off the stove.',
      'Кипение вытягивает танины и горечь: лавр становится как чай, а кофе — как подгоревший эспрессо. Настой — это тепло без кипения, под крышкой, вне огня.',
    ),
  },
  think: {
    question: l('Zašto se bosiljak infuzira hladno?', 'Why is basil infused cold?', 'Почему базилик настаивают холодным способом?'),
    options: [
      l('Toplota mu da ukus kuvanog lišća', 'Heat makes it taste of cooked leaves', 'Тепло даёт ему вкус варёных листьев'),
      l('Hladno je brže', 'Cold is faster', 'Холодный способ быстрее'),
      l('Bosiljak se topi', 'Basil melts', 'Базилик тает'),
    ],
    answer: 0,
    explain: l(
      'Arome nežnog bilja su krhke i menjaju se na toploti. Hladna infuzija traje duže, ali zadrži miris svežeg lista.',
      'The aromas of delicate herbs are fragile and change with heat. A cold infusion takes longer but keeps the smell of the fresh leaf.',
      'Ароматы нежной зелени хрупкие и меняются от тепла. Холодный настой дольше, но сохраняет запах свежего листа.',
    ),
  },
}

export const modernLessons: Lesson[] = [pasteurise, ferment, powders, dryBrine, infuse]
