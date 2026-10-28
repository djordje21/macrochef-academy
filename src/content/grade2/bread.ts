import { l, type Lesson } from '../types'

// Grade 2 · Module 6 · Bread. Every recipe is written in baker's percentages: flour is 100%, and water,
// salt and yeast are a share of the flour. Time and dough temperature matter as much as the recipe.

const basics: Lesson = {
  id: '2.6.1',
  title: l('Brašno, voda, kvasac, so', 'Flour, water, yeast, salt', 'Мука, вода, дрожжи, соль'),
  goal: l(
    'Napišeš i izmeriš recept za hleb u pekarskim procentima, za bilo koju količinu.',
    'You write and weigh a bread recipe in baker\'s percentages, for any quantity.',
    'Ты записываешь и взвешиваешь рецепт хлеба в пекарских процентах, на любое количество.',
  ),
  minutes: 6,
  key: { value: l('65%', '65%', '65%'), label: l('vode na brašno', 'water to flour', 'воды к муке') },
  need: [
    { item: l('Brašno T-500', 'Strong bread flour (T-500)', 'Хлебопекарная мука (T-500)'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Mlaka voda', 'Lukewarm water', 'Тёплая вода'), qty: l('325 ml', '325 ml', '325 мл') },
    { item: l('Suvi kvasac', 'Dry yeast', 'Сухие дрожжи'), qty: l('5 g', '5 g', '5 г') },
    { item: l('So', 'Salt', 'Соль'), qty: l('10 g', '10 g', '10 г') },
    { item: l('Vaga sa tačnošću 1 g', 'Scale accurate to 1 g', 'Весы с точностью 1 г'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Hleb ima samo četiri sastojka, pa svaka greška od 10 grama menja hleb. Pekarski procenti ti daju recept koji radi i za jednu veknu i za deset.',
    'Bread has only four ingredients, so every 10-gram mistake changes the loaf. Baker\'s percentages give you a recipe that works for one loaf or ten.',
    'В хлебе всего четыре ингредиента, и каждая ошибка в 10 граммов меняет хлеб. Пекарские проценты дают рецепт, который работает и для одной буханки, и для десяти.',
  ),
  steps: [
    {
      text: l('Brašno je uvek 100%. Sve ostalo je procenat brašna.', 'Flour is always 100%. Everything else is a share of the flour.', 'Мука всегда 100%. Всё остальное — доля от муки.'),
      params: [l('voda 65%', 'water 65%', 'вода 65%'), l('so 2%', 'salt 2%', 'соль 2%'), l('suvi kvasac 1%', 'dry yeast 1%', 'сухие дрожжи 1%')],
      done: l('Za 500 g brašna: 325 g vode, 10 g soli, 5 g kvasca.', 'For 500 g flour: 325 g water, 10 g salt, 5 g yeast.', 'На 500 г муки: 325 г воды, 10 г соли, 5 г дрожжей.'),
      why: l('Sveži kvasac je tri puta slabiji od suvog: 3% umesto 1%.', 'Fresh yeast is three times weaker than dry: 3% instead of 1%.', 'Свежие дрожжи втрое слабее сухих: 3% вместо 1%.'),
      drawing: 'bakersPct',
    },
    {
      text: l('Izaberi brašno sa dovoljno proteina.', 'Choose a flour with enough protein.', 'Выбери муку с достаточным количеством белка.'),
      params: [l('T-500, 11–13% proteina', 'T-500, 11–13% protein', 'T-500, 11–13% белка')],
      done: l('Na pakovanju piše bar 11 g proteina na 100 g.', 'The pack says at least 11 g protein per 100 g.', 'На упаковке указано не меньше 11 г белка на 100 г.'),
      why: l('Protein iz brašna postaje gluten, mreža koja drži gas. T-400 je za kolače, premeko je za hleb.', 'The protein in flour becomes gluten, the net that holds the gas. T-400 is for cakes and too soft for bread.', 'Белок муки становится глютеном — сеткой, которая держит газ. T-400 для выпечки, для хлеба она слишком мягкая.'),
    },
    {
      text: l('Izmeri vodu na vagi, ne u čaši.', 'Weigh the water on the scale, not in a jug.', 'Взвешивай воду на весах, а не в мерном стакане.'),
      params: [l('1 ml = 1 g', '1 ml = 1 g', '1 мл = 1 г'), l('26–28°C', '26–28°C', '26–28°C')],
      done: l('Voda je mlaka na zglobu ruke, ne topla.', 'The water feels lukewarm on your wrist, not warm.', 'Вода тёплая на запястье, но не горячая.'),
      why: l('Kvasac radi najbolje oko 26°C, a umire preko 50°C. Topla voda iz česme može da bude preko toga.', 'Yeast works best around 26°C and dies above 50°C. Hot tap water can be above that.', 'Дрожжи лучше всего работают около 26°C и гибнут выше 50°C. Горячая вода из-под крана может быть горячее.'),
    },
    {
      text: l('So i kvasac stavi na suprotne strane činije.', 'Put the salt and yeast on opposite sides of the bowl.', 'Положи соль и дрожжи в разные стороны миски.'),
      done: l('So i kvasac se ne dodiruju dok ne dodaš vodu.', 'The salt and yeast do not touch until the water goes in.', 'Соль и дрожжи не соприкасаются, пока не добавишь воду.'),
      why: l('Direktan dodir koncentrovane soli usporava kvasac. Kad se rastvore u testu, slažu se dobro.', 'Direct contact with concentrated salt slows the yeast. Once dissolved in the dough, they get on fine.', 'Прямой контакт с концентрированной солью замедляет дрожжи. Растворившись в тесте, они ладят.'),
    },
    {
      text: l('Zapiši recept u procentima i u gramima.', 'Write the recipe in percentages and in grams.', 'Запиши рецепт в процентах и в граммах.'),
      done: l('Za 750 g brašna znaš količine bez računara.', 'For 750 g flour you know the amounts without a calculator.', 'Для 750 г муки знаешь количества без калькулятора.'),
      why: l('Pekari ne pamte recepte u gramima nego u procentima. Tako uvećaš ili smanjiš recept za sekund.', 'Bakers do not remember recipes in grams but in percentages. That way they scale a recipe up or down in a second.', 'Пекари помнят рецепты не в граммах, а в процентах. Так рецепт увеличивают или уменьшают за секунду.'),
    },
  ],
  mistake: {
    title: l('Brašno merenom šoljom, a voda "od oka".', 'Flour by the cup and water by eye.', 'Мука стаканом, а вода на глаз.'),
    fix: l(
      'Šolja brašna može da bude 120 ili 160 grama, zavisno koliko je sabijeno. To je razlika između lepljivog i suvog testa. Hleb se meri na vagi, sve.',
      'A cup of flour can weigh 120 or 160 grams depending on how it is packed. That is the difference between sticky and dry dough. Bread is weighed, all of it.',
      'Стакан муки может весить 120 или 160 граммов в зависимости от утрамбовки. Это разница между липким и сухим тестом. Для хлеба всё взвешивается.',
    ),
  },
  think: {
    question: l('Imaš 800 g brašna. Koliko vode za 65%?', 'You have 800 g of flour. How much water at 65%?', 'У тебя 800 г муки. Сколько воды при 65%?'),
    options: [l('520 g', '520 g', '520 г'), l('650 g', '650 g', '650 г'), l('480 g', '480 g', '480 г')],
    answer: 0,
    explain: l(
      '800 × 0.65 = 520 g. So je 2% = 16 g, a suvi kvasac 1% = 8 g.',
      '800 × 0.65 = 520 g. Salt is 2% = 16 g and dry yeast 1% = 8 g.',
      '800 × 0,65 = 520 г. Соль 2% = 16 г, сухие дрожжи 1% = 8 г.',
    ),
  },
}

const kneading: Lesson = {
  id: '2.6.2',
  title: l('Mešenje i gluten', 'Kneading and gluten', 'Замес и глютен'),
  goal: l(
    'Umesiš testo dok ne razvije gluten i proveriš ga testom prozora.',
    'You knead dough until the gluten develops and check it with the windowpane test.',
    'Ты вымешиваешь тесто до развития глютена и проверяешь его тестом «окно».',
  ),
  minutes: 6,
  key: { value: l('10 min', '10 min', '10 мин'), label: l('rukom', 'by hand', 'руками') },
  need: [
    { item: l('Sastojci iz 2.6.1', 'The ingredients from 2.6.1', 'Ингредиенты из 2.6.1'), qty: l('—', '—', '—') },
    { item: l('Čista radna površina', 'A clean work surface', 'Чистая рабочая поверхность'), qty: l('1', '1', '1') },
    { item: l('Strugač za testo', 'Dough scraper', 'Скребок для теста'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Mešenje pretvara lepljivu masu u elastično testo. Gluten je mreža koja hvata gas kvasca, pa bez njega hleb ostane nizak i zbijen.',
    'Kneading turns a sticky mass into an elastic dough. Gluten is the net that traps the yeast\'s gas; without it, bread stays low and dense.',
    'Замес превращает липкую массу в эластичное тесто. Глютен — сетка, которая ловит газ дрожжей; без неё хлеб остаётся низким и плотным.',
  ),
  steps: [
    {
      text: l('Spoji sve sastojke u čupavu masu i ostavi je.', 'Bring all the ingredients into a shaggy mass and leave it.', 'Соедини все ингредиенты в лохматую массу и оставь.'),
      params: [l('15 min', '15 min', '15 мин')],
      done: l('Nema suvog brašna, testo je grubo i lepljivo.', 'No dry flour is left; the dough is rough and sticky.', 'Сухой муки не осталось, тесто грубое и липкое.'),
      why: l('Za 15 minuta brašno upije vodu i gluten počne da se pravi sam. Mešenje posle traje kraće.', 'In 15 minutes the flour absorbs the water and gluten starts forming by itself. The kneading afterwards is shorter.', 'За 15 минут мука впитывает воду, и глютен начинает образовываться сам. Потом месить нужно меньше.'),
    },
    {
      text: l('Mesi gurajući testo od sebe donjim delom dlana, pa ga vrati.', 'Knead by pushing the dough away with the heel of your hand, then folding it back.', 'Меси, отталкивая тесто основанием ладони и складывая обратно.'),
      params: [l('10 min rukom', '10 min by hand', '10 мин руками'), l('6–8 min mikserom', '6–8 min in a mixer', '6–8 мин миксером')],
      done: l('Testo prestaje da se lepi i postaje glatko.', 'The dough stops sticking and turns smooth.', 'Тесто перестаёт липнуть и становится гладким.'),
      why: l('Ne dodaj brašno kad se lepi. Lepljivost prođe sama posle par minuta mešenja.', 'Do not add flour when it sticks. The stickiness goes by itself after a few minutes of kneading.', 'Не добавляй муку, когда липнет. Липкость проходит сама через несколько минут замеса.'),
      drawing: 'kneadDough',
    },
    {
      text: l('Uradi test prozora: razvuci komad testa prstima.', 'Do the windowpane test: stretch a piece of dough between your fingers.', 'Сделай тест «окно»: растяни кусочек теста пальцами.'),
      done: l('Testo se razvuče tanko da kroz njega prolazi svetlo, bez cepanja.', 'The dough stretches thin enough to let light through without tearing.', 'Тесто растягивается так тонко, что пропускает свет, не разрываясь.'),
      why: l('Ako se cepa, gluten nije gotov. Mesi još 2 minuta i probaj ponovo.', 'If it tears, the gluten is not ready. Knead 2 more minutes and test again.', 'Если рвётся, глютен не готов. Меси ещё 2 минуты и проверь снова.'),
      drawing: 'windowpane',
    },
    {
      text: l('Izmeri temperaturu testa.', 'Measure the temperature of the dough.', 'Измерь температуру теста.'),
      params: [l('24–26°C', '24–26°C', '24–26°C')],
      done: l('Termometar u sredini testa pokazuje 24–26°C.', 'The probe in the middle of the dough reads 24–26°C.', 'Термометр в середине теста показывает 24–26°C.'),
      why: l('Temperatura testa određuje koliko traje fermentacija. Na 20°C traje duplo duže nego na 26°C.', 'Dough temperature decides how long fermentation takes. At 20°C it takes twice as long as at 26°C.', 'Температура теста определяет длительность брожения. При 20°C оно вдвое дольше, чем при 26°C.'),
    },
    {
      text: l('Oblikuj loptu i stavi u nauljenu činiju, pokrivenu.', 'Shape into a ball and put it in an oiled, covered bowl.', 'Сформируй шар и положи в смазанную маслом миску под крышку.'),
      done: l('Testo je glatka lopta zategnute površine.', 'The dough is a smooth ball with a taut surface.', 'Тесто — гладкий шар с натянутой поверхностью.'),
    },
  ],
  mistake: {
    title: l('Dosipanje brašna dok testo ne prestane da se lepi.', 'Adding flour until the dough stops sticking.', 'Подсыпать муку, пока тесто не перестанет липнуть.'),
    fix: l(
      'Svaka šaka brašna menja recept: 65% vode postane 55% i hleb je suv i zbijen. Lepljivo testo se mesi, ne posipa. Pomažu strugač i mokre ruke.',
      'Every handful of flour changes the recipe: 65% water becomes 55% and the bread is dry and dense. Sticky dough is kneaded, not floured. A scraper and wet hands help.',
      'Каждая горсть муки меняет рецепт: 65% воды превращаются в 55%, и хлеб сухой и плотный. Липкое тесто месят, а не подсыпают. Помогают скребок и мокрые руки.',
    ),
  },
  think: {
    question: l('Testo se cepa na testu prozora posle 10 minuta. Šta radiš?', 'The dough tears in the windowpane test after 10 minutes. What do you do?', 'Тесто рвётся на тесте «окно» после 10 минут. Что делаешь?'),
    options: [
      l('Mesiš još 2–3 minuta i proveriš ponovo', 'Knead 2–3 more minutes and test again', 'Месишь ещё 2–3 минуты и проверяешь снова'),
      l('Dodaš brašna', 'Add flour', 'Добавляешь муку'),
      l('Ostaviš ga da naraste takvo', 'Leave it to rise as it is', 'Оставляешь подходить как есть'),
    ],
    answer: 0,
    explain: l(
      'Vreme mešenja u receptu je procena. Prozor je dokaz. Brašno bi samo osušilo testo, a gluten se ne bi popravio.',
      'The kneading time in a recipe is an estimate. The windowpane is the proof. Flour would only dry the dough without fixing the gluten.',
      'Время замеса в рецепте — оценка. «Окно» — доказательство. Мука только подсушит тесто, не исправив глютен.',
    ),
  },
}

const proving: Lesson = {
  id: '2.6.3',
  title: l('Fermentacija i oblikovanje', 'Proving and shaping', 'Расстойка и формовка'),
  goal: l(
    'Pustiš testo da naraste, oblikuješ veknu sa zategnutom površinom i ispečeš je do 96°C u sredini.',
    'You let the dough rise, shape a loaf with a taut surface and bake it to 96°C at the centre.',
    'Ты даёшь тесту подойти, формуешь буханку с натянутой поверхностью и выпекаешь до 96°C в центре.',
  ),
  minutes: 8,
  key: { value: l('2 ×', '2 ×', '2 ×'), label: l('zapremina', 'volume', 'объём') },
  need: [
    { item: l('Umešeno testo (2.6.2)', 'Kneaded dough (2.6.2)', 'Вымешанное тесто (2.6.2)'), qty: l('1', '1', '1') },
    { item: l('Činija sa poklopcem, pleh, papir', 'Covered bowl, tray, baking paper', 'Миска с крышкой, противень, пергамент'), qty: l('—', '—', '—') },
    { item: l('Posuda sa vrelom vodom za paru', 'A tray of hot water for steam', 'Противень с горячей водой для пара'), qty: l('1', '1', '1') },
    { item: l('Žilet ili oštar nož, termometar', 'Razor or sharp knife, thermometer', 'Лезвие или острый нож, термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kvasac pravi gas i ukus, ali mu treba vreme. Oblikovanje zateže površinu da hleb raste uvis, a ne u širinu.',
    'Yeast makes gas and flavour, but it needs time. Shaping tightens the surface so the loaf rises up, not out.',
    'Дрожжи дают газ и вкус, но им нужно время. Формовка натягивает поверхность, чтобы хлеб рос вверх, а не вширь.',
  ),
  steps: [
    {
      text: l('Pusti testo da naraste do duple zapremine.', 'Let the dough rise to double its volume.', 'Дай тесту подойти до удвоения объёма.'),
      params: [l('1–1.5 h na 24°C', '1–1.5 h at 24°C', '1–1,5 ч при 24°C')],
      done: l('Testo je duplo veće, kupolasto i puno mehurića sa strane.', 'The dough has doubled, is domed and full of bubbles at the side.', 'Тесто увеличилось вдвое, куполообразное, с пузырьками по бокам.'),
      why: l('Prati zapreminu, ne sat. Zimi u hladnoj kuhinji može da traje i 3 sata.', 'Watch the volume, not the clock. In a cold winter kitchen it can take 3 hours.', 'Следи за объёмом, а не за часами. Зимой в холодной кухне может занять 3 часа.'),
      drawing: 'doughRise',
    },
    {
      text: l('Izruči testo i nežno ga oblikuj u labavu loptu.', 'Turn out the dough and gently pre-shape a loose ball.', 'Выложи тесто и аккуратно сформируй свободный шар.'),
      params: [l('odmor 15 min', 'rest 15 min', 'отдых 15 мин')],
      done: l('Testo se opustilo i malo raširilo.', 'The dough has relaxed and spread a little.', 'Тесто расслабилось и немного растеклось.'),
      why: l('Gluten se zategne pri oblikovanju. Posle 15 minuta odmora može da se oblikuje konačno bez cepanja.', 'Gluten tightens when shaped. After 15 minutes of rest it can take the final shape without tearing.', 'Глютен натягивается при формовке. После 15 минут отдыха тесто можно окончательно сформовать без разрывов.'),
    },
    {
      text: l('Konačno oblikuj veknu, zatežući površinu ka dnu.', 'Shape the final loaf, pulling the surface tight towards the base.', 'Окончательно сформуй буханку, натягивая поверхность к низу.'),
      done: l('Površina je glatka i zategnuta kao balon.', 'The surface is smooth and taut like a balloon.', 'Поверхность гладкая и натянутая, как шарик.'),
      why: l('Zategnuta koža drži gas i usmerava hleb uvis. Šav ide dole, na pleh.', 'A taut skin holds the gas and directs the loaf upwards. The seam goes down, on the tray.', 'Натянутая корка держит газ и направляет хлеб вверх. Шов — вниз, на противень.'),
      drawing: 'shapeLoaf',
    },
    {
      text: l('Pusti da naraste još jednom, pa uradi test prstom.', 'Let it rise once more, then do the finger test.', 'Дай подойти ещё раз и сделай тест пальцем.'),
      params: [l('40–60 min', '40–60 min', '40–60 мин')],
      done: l('Udubljenje od prsta se vraća polako i ostane mala rupica.', 'A finger dent springs back slowly and leaves a small hollow.', 'Вмятина от пальца возвращается медленно, остаётся небольшая ямка.'),
      why: l('Vrati se odmah: treba još. Ne vrati se uopšte: prenaraslo je i spustiće se u rerni.', 'Springs back at once: needs longer. Does not spring back: over-proved and will collapse in the oven.', 'Возвращается сразу — нужно ещё. Не возвращается — перестояло и опадёт в духовке.'),
      drawing: 'pokeTest',
    },
    {
      text: l('Zaseci vrh i peci sa parom do 96°C u sredini.', 'Score the top and bake with steam to 96°C at the centre.', 'Надрежь верх и выпекай с паром до 96°C в центре.'),
      params: [l('230°C', '230°C', '230°C'), l('para prvih 15 min', 'steam for the first 15 min', 'пар первые 15 мин'), l('35–40 min', '35–40 min', '35–40 мин')],
      done: l('Kora je tamnozlatna, a hleb zvuči šuplje kad kucneš dno.', 'The crust is deep golden and the loaf sounds hollow when you tap the base.', 'Корка тёмно-золотистая, хлеб звучит пусто, если постучать по дну.'),
      why: l('Para drži koru mekom prvih 15 minuta da hleb može da se digne. Ohladi ga na rešetki sat vremena pre sečenja.', 'Steam keeps the crust soft for the first 15 minutes so the loaf can rise. Cool it on a rack for an hour before slicing.', 'Пар сохраняет корку мягкой первые 15 минут, чтобы хлеб поднялся. Остуди на решётке час перед нарезкой.'),
      drawing: 'scoreLoaf',
    },
  ],
  mistake: {
    title: l('Sečenje vrelog hleba odmah iz rerne.', 'Slicing hot bread straight from the oven.', 'Резать горячий хлеб сразу из духовки.'),
    fix: l(
      'Sredina hleba se još peče parom i lepljiva je kao testo. Sečen vreo, hleb se zgnječi i osuši brže. Ostavi ga na rešetki bar sat vremena.',
      'The crumb is still cooking in its steam and is gummy like dough. Cut hot, the loaf squashes and dries faster. Leave it on a rack for at least an hour.',
      'Мякиш ещё допекается паром и липкий, как тесто. Разрезанный горячим, хлеб сминается и быстрее черствеет. Оставь его на решётке хотя бы на час.',
    ),
  },
  think: {
    question: l('Hleb je u rerni pukao sa strane, a ne po zarezu. Zašto?', 'The loaf burst at the side in the oven, not along the score. Why?', 'Хлеб в духовке лопнул сбоку, а не по надрезу. Почему?'),
    options: [
      l('Zarez je bio preplitak ili je hleb premalo narastao', 'The score was too shallow or the loaf was under-proved', 'Надрез был слишком мелким или хлеб недостоял'),
      l('Previše soli', 'Too much salt', 'Слишком много соли'),
      l('Rerna je bila prehladna', 'The oven was too cold', 'Духовка была слишком холодной'),
    ],
    answer: 0,
    explain: l(
      'Zarez je ventil: pokazuje hlebu gde da se otvori. Ako je plitak ili je testo još jako, gas nađe najslabije mesto sam, obično sa strane.',
      'The score is a vent: it tells the loaf where to open. If it is shallow or the dough is still too strong, the gas finds the weakest spot itself, usually at the side.',
      'Надрез — клапан: он показывает хлебу, где раскрыться. Если он мелкий или тесто ещё слишком тугое, газ сам находит слабое место, обычно сбоку.',
    ),
  },
  recipe: { name: l('Beli hleb', 'White loaf', 'Белый хлеб'), protein: 9, carbs: 51, fat: 1.2, kcal: 250 },
}

const flatbreads: Lesson = {
  id: '2.6.4',
  title: l('Pogača i fokača', 'Pogača and focaccia', 'Погача и фокачча'),
  goal: l(
    'Napraviš mekanu pogaču i fokaču sa hrskavim dnom i velikim rupama.',
    'You make a soft pogača and a focaccia with a crisp base and big holes.',
    'Ты печёшь мягкую погачу и фокаччу с хрустящим дном и крупными дырочками.',
  ),
  minutes: 7,
  key: { value: l('80%', '80%', '80%'), label: l('vode u fokači', 'water in focaccia', 'воды в фокачче') },
  need: [
    { item: l('Brašno T-500', 'Bread flour (T-500)', 'Хлебопекарная мука (T-500)'), qty: l('2 × 500 g', '2 × 500 g', '2 × 500 г') },
    { item: l('Mleko i jaje (pogača)', 'Milk and egg (pogača)', 'Молоко и яйцо (погача)'), qty: l('300 ml + 1', '300 ml + 1', '300 мл + 1') },
    { item: l('Voda i maslinovo ulje (fokača)', 'Water and olive oil (focaccia)', 'Вода и оливковое масло (фокачча)'), qty: l('400 ml + 60 ml', '400 ml + 60 ml', '400 мл + 60 мл') },
    { item: l('Suvi kvasac, so, ruzmarin, krupna so', 'Dry yeast, salt, rosemary, flaky salt', 'Сухие дрожжи, соль, розмарин, крупная соль'), qty: l('—', '—', '—') },
    { item: l('Pleh 30 × 40 cm', '30 × 40 cm tray', 'Противень 30 × 40 см'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Isti princip, dva hleba. Pogača je obogaćena mlekom i jajetom pa je mekana, a fokača je vlažna i masna pa je hrskava i šupljikava.',
    'The same principle, two breads. Pogača is enriched with milk and egg so it is soft; focaccia is wet and oily so it is crisp and open.',
    'Один принцип, два хлеба. Погача обогащена молоком и яйцом, поэтому мягкая; фокачча влажная и масляная, поэтому хрустящая и пористая.',
  ),
  steps: [
    {
      text: l('Za pogaču umesi testo sa mlekom i jajetom.', 'For pogača knead a dough with milk and egg.', 'Для погачи замеси тесто на молоке с яйцом.'),
      params: [l('mleko 60%', 'milk 60%', 'молоко 60%'), l('so 2%, kvasac 1%', 'salt 2%, yeast 1%', 'соль 2%, дрожжи 1%')],
      done: l('Testo je glatko, mekano i ne lepi se.', 'The dough is smooth, soft and not sticky.', 'Тесто гладкое, мягкое и не липнет.'),
      why: l('Mast iz mleka i jajeta omekša gluten. Zato je pogača mekana, a ne žvakava.', 'The fat in milk and egg softens the gluten. That is why pogača is tender, not chewy.', 'Жир из молока и яйца смягчает глютен. Поэтому погача мягкая, а не тянучая.'),
    },
    {
      text: l('Oblikuj pogaču, premaži jajetom i peci.', 'Shape the pogača, brush with egg and bake.', 'Сформуй погачу, смажь яйцом и выпекай.'),
      params: [l('200°C', '200°C', '200°C'), l('25–30 min', '25–30 min', '25–30 мин')],
      done: l('Vrh je sjajan i zlatan, a hleb je mek kad ga stisneš.', 'The top is glossy and golden and the bread is soft when pressed.', 'Верх блестящий и золотистый, хлеб мягкий при нажатии.'),
      why: l('Niža temperatura nego za beli hleb, jer šećer iz mleka brže potamni.', 'A lower temperature than white bread, because the sugar in milk browns faster.', 'Температура ниже, чем для белого хлеба: сахар молока быстрее темнеет.'),
    },
    {
      text: l('Za fokaču izmešaj vlažno testo, bez mešenja.', 'For focaccia mix a wet dough, without kneading.', 'Для фокаччи смешай влажное тесто, не вымешивая.'),
      params: [l('voda 80%', 'water 80%', 'вода 80%'), l('ulje 4%', 'oil 4%', 'масло 4%')],
      done: l('Testo je lepljivo kao gusto testo za palačinke.', 'The dough is as sticky as thick pancake batter.', 'Тесто липкое, как густое тесто для оладий.'),
      why: l('Tako vlažno testo se ne mesi nego presavija (2.6.6). Voda pravi velike rupe.', 'Such a wet dough is not kneaded but folded (2.6.6). The water makes the big holes.', 'Такое влажное тесто не месят, а складывают (2.6.6). Вода даёт крупные дырочки.'),
    },
    {
      text: l('Presavij testo 4 puta na 30 minuta, pa ga izruči u nauljen pleh.', 'Fold the dough 4 times, 30 minutes apart, then tip it into an oiled tray.', 'Сложи тесто 4 раза с интервалом 30 минут и выложи в смазанный противень.'),
      params: [l('2 h ukupno', '2 h in total', '2 ч всего'), l('3 kašike ulja u pleh', '3 tbsp oil in the tray', '3 ст. л. масла в противень')],
      done: l('Testo se samo razlilo do ivica pleha i puno je mehura.', 'The dough has spread to the corners on its own and is full of bubbles.', 'Тесто само растеклось до углов и полно пузырей.'),
    },
    {
      text: l('Prstima napravi rupice, prelij uljem, pospi solju i ruzmarinom, pa peci.', 'Dimple with your fingers, drizzle with oil, sprinkle salt and rosemary, then bake.', 'Сделай пальцами ямки, полей маслом, посыпь солью и розмарином и выпекай.'),
      params: [l('220°C', '220°C', '220°C'), l('20–25 min', '20–25 min', '20–25 мин')],
      done: l('Dno je hrskavo i zlatno, vrh talasast, a sredina puna rupa.', 'The base is crisp and golden, the top undulating and the crumb full of holes.', 'Низ хрустящий и золотистый, верх волнистый, мякиш в дырочках.'),
      why: l('Ulje u rupicama se prži u rerni. Zato je fokača hrskava i odozgo i odozdo.', 'The oil in the dimples fries in the oven. That is why focaccia is crisp both on top and underneath.', 'Масло в ямках жарится в духовке. Поэтому фокачча хрустящая и сверху, и снизу.'),
      drawing: 'focaccia',
    },
  ],
  mistake: {
    title: l('Fokača mešena kao beli hleb, uz dosipanje brašna.', 'Focaccia kneaded like white bread, with extra flour.', 'Фокаччу месят как белый хлеб, подсыпая муку.'),
    fix: l(
      'Kad joj dodaš brašno, fokača postane obična pogača: zbijena, bez rupa. Vlažno testo se presavija mokrim rukama, a ne mesi i ne posipa.',
      'Add flour and focaccia becomes ordinary bread: dense, with no holes. A wet dough is folded with wet hands, not kneaded or floured.',
      'Добавишь муки — фокачча станет обычным хлебом: плотным, без дырочек. Влажное тесто складывают мокрыми руками, а не месят и не подсыпают.',
    ),
  },
  think: {
    question: l('Zašto je pogača mekša od belog hleba?', 'Why is pogača softer than white bread?', 'Почему погача мягче белого хлеба?'),
    options: [
      l('Mast iz mleka i jajeta omekšava gluten', 'The fat in milk and egg softens the gluten', 'Жир из молока и яйца смягчает глютен'),
      l('Peče se duže', 'It bakes longer', 'Её дольше пекут'),
      l('Ima više kvasca', 'It has more yeast', 'В ней больше дрожжей'),
    ],
    answer: 0,
    explain: l(
      'Mast obloži niti glutena i ne da im da se spoje u jaku mrežu. Isto kao puter u prhkom testu (2.5.3), samo u manjoj meri.',
      'Fat coats the gluten strands and keeps them from linking into a strong net. The same as butter in shortcrust (2.5.3), only to a lesser degree.',
      'Жир обволакивает нити глютена и не даёт им связаться в прочную сетку. Как масло в песочном тесте (2.5.3), только в меньшей степени.',
    ),
  },
  recipe: { name: l('Fokača sa ruzmarinom', 'Rosemary focaccia', 'Фокачча с розмарином'), protein: 7.5, carbs: 44, fat: 7, kcal: 270 },
}

const starter: Lesson = {
  id: '2.6.5',
  title: l('Kiselo testo: starter', 'Sourdough: the starter', 'Закваска: стартер'),
  goal: l(
    'Napraviš starter od brašna i vode za 7–10 dana i održavaš ga živim.',
    'You grow a starter from flour and water in 7–10 days and keep it alive.',
    'Ты выращиваешь закваску из муки и воды за 7–10 дней и поддерживаешь её живой.',
  ),
  minutes: 6,
  key: { value: l('1 : 1 : 1', '1 : 1 : 1', '1 : 1 : 1'), label: l('starter : brašno : voda', 'starter : flour : water', 'закваска : мука : вода') },
  need: [
    { item: l('Integralno ili raženo brašno', 'Wholemeal or rye flour', 'Цельнозерновая или ржаная мука'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Voda bez hlora (odstajala)', 'Unchlorinated water (left to stand)', 'Вода без хлора (отстоянная)'), qty: l('—', '—', '—') },
    { item: l('Staklena tegla sa poklopcem', 'Glass jar with a lid', 'Стеклянная банка с крышкой'), qty: l('1 l', '1 l', '1 л') },
    { item: l('Gumica za obeležavanje', 'A rubber band to mark the level', 'Резинка для отметки уровня'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Starter je divlji kvasac i bakterije iz brašna i vazduha. Daje hlebu kiselkast ukus, bolju koru i duže trajanje. Jednom napravljen, živi godinama.',
    'A starter is wild yeast and bacteria from the flour and the air. It gives bread a tangy taste, a better crust and a longer life. Once made, it lives for years.',
    'Закваска — дикие дрожжи и бактерии из муки и воздуха. Она даёт хлебу кисловатый вкус, лучшую корку и долгую свежесть. Сделанная раз, живёт годами.',
  ),
  steps: [
    {
      text: l('Dan 1: umešaj brašno i vodu u tegli.', 'Day 1: mix flour and water in the jar.', 'День 1: смешай муку и воду в банке.'),
      params: [l('50 g + 50 g', '50 g + 50 g', '50 г + 50 г'), l('24–26°C', '24–26°C', '24–26°C')],
      done: l('Gusta pasta, poklopac stavljen labavo.', 'A thick paste, lid resting loosely.', 'Густая паста, крышка прикрыта неплотно.'),
      why: l('Integralno i raženo brašno imaju više divljeg kvasca od belog. Hlor iz česme usporava početak.', 'Wholemeal and rye flour carry more wild yeast than white. Chlorine from the tap slows the start.', 'В цельнозерновой и ржаной муке больше диких дрожжей, чем в белой. Хлор из крана замедляет старт.'),
      drawing: 'starterJar',
    },
    {
      text: l('Svaki dan baci pola i nahrani svežim brašnom i vodom.', 'Every day discard half and feed with fresh flour and water.', 'Каждый день выбрасывай половину и подкармливай свежей мукой и водой.'),
      params: [l('50 g starter + 50 g brašno + 50 g voda', '50 g starter + 50 g flour + 50 g water', '50 г закваски + 50 г муки + 50 г воды')],
      done: l('Starter ima isti obim posle svakog hranjenja.', 'The starter is the same size after every feed.', 'После каждой подкормки объём закваски одинаковый.'),
      why: l('Bez bacanja, za nedelju dana imaš kantu startera. Odbačeno može u palačinke (2.5.1).', 'Without discarding, in a week you have a bucket of starter. The discard can go into crêpes (2.5.1).', 'Без выбрасывания через неделю у тебя ведро закваски. Отброшенное можно пустить в блины (2.5.1).'),
    },
    {
      text: l('Obeleži nivo gumicom posle hranjenja.', 'Mark the level with the rubber band after feeding.', 'Отметь уровень резинкой после подкормки.'),
      done: l('Vidiš koliko je starter narastao od hranjenja.', 'You can see how much the starter has risen since feeding.', 'Видно, насколько закваска поднялась после подкормки.'),
    },
    {
      text: l('Starter je spreman kad se duplira za 4–8 sati posle hranjenja.', 'The starter is ready when it doubles within 4–8 hours of feeding.', 'Закваска готова, когда удваивается за 4–8 часов после подкормки.'),
      params: [l('7–10 dana', '7–10 days', '7–10 дней'), l('2 × za 4–8 h', '2 × in 4–8 h', '2 × за 4–8 ч')],
      done: l('Starter je pun mehurova, kupolast i miriše kiselkasto, kao jogurt.', 'The starter is full of bubbles, domed, and smells tangy, like yoghurt.', 'Закваска в пузырях, с куполом и пахнет кисловато, как йогурт.'),
      why: l('Prvih dana može da naraste brzo pa da utihne. To su bakterije, ne kvasac. Nastavi da hraniš.', 'In the first days it may rise fast and then go quiet. That is bacteria, not yeast. Keep feeding.', 'В первые дни она может быстро подняться и затихнуть. Это бактерии, а не дрожжи. Продолжай кормить.'),
    },
    {
      text: l('Čuvaj starter u frižideru i hrani ga jednom nedeljno.', 'Keep the starter in the fridge and feed it once a week.', 'Храни закваску в холодильнике и корми раз в неделю.'),
      params: [l('frižider', 'fridge', 'холодильник'), l('dan pre pečenja: 2 hranjenja na sobnoj', 'day before baking: 2 feeds at room temperature', 'накануне выпечки: 2 подкормки при комнатной температуре')],
      done: l('Starter se posle dva hranjenja na sobnoj temperaturi ponovo duplira.', 'After two feeds at room temperature the starter doubles again.', 'После двух подкормок при комнатной температуре закваска снова удваивается.'),
      why: l('Hladnoća uspori kvasac, pa starter ne traži dnevno hranjenje. Siva tečnost na vrhu znači samo glad.', 'Cold slows the yeast, so the starter does not need daily feeding. Grey liquid on top just means it is hungry.', 'Холод замедляет дрожжи, и закваске не нужна ежедневная подкормка. Серая жидкость сверху значит только голод.'),
    },
  ],
  mistake: {
    title: l('Starter bačen posle 3 dana jer "ne radi".', 'Starter thrown out after 3 days because it "does not work".', 'Закваску выбросили через 3 дня, потому что «не работает».'),
    fix: l(
      'Starter treba 7–10 dana, a u hladnoj kuhinji i dve nedelje. Tišina posle prvog skoka je normalna. Baci ga samo ako se pojavi ružičasta ili narandžasta buđ.',
      'A starter takes 7–10 days, and up to two weeks in a cold kitchen. Going quiet after the first surge is normal. Throw it out only if pink or orange mould appears.',
      'Закваске нужно 7–10 дней, а в холодной кухне и две недели. Затишье после первого подъёма — норма. Выбрасывай, только если появилась розовая или оранжевая плесень.',
    ),
  },
  think: {
    question: l('Starter iz frižidera se nije podigao posle jednog hranjenja. Šta radiš?', 'The starter from the fridge did not rise after one feed. What do you do?', 'Закваска из холодильника не поднялась после одной подкормки. Что делаешь?'),
    options: [
      l('Nahraniš ga još 1–2 puta na sobnoj temperaturi', 'Feed it 1–2 more times at room temperature', 'Подкармливаешь ещё 1–2 раза при комнатной температуре'),
      l('Pečeš hleb odmah', 'Bake the bread straight away', 'Сразу печёшь хлеб'),
      l('Dodaš suvi kvasac u starter', 'Add dry yeast to the starter', 'Добавляешь сухие дрожжи в закваску'),
    ],
    answer: 0,
    explain: l(
      'Hladan starter je pospan, ne mrtav. Dva hranjenja na toplom ga probude. Hleb od pospanog startera ne naraste.',
      'A cold starter is sleepy, not dead. Two feeds in the warm wake it up. Bread from a sleepy starter does not rise.',
      'Холодная закваска сонная, а не мёртвая. Две подкормки в тепле её разбудят. Хлеб на сонной закваске не поднимется.',
    ),
  },
}

const sourdough: Lesson = {
  id: '2.6.6',
  title: l('Hleb od kiselog testa', 'A sourdough loaf', 'Хлеб на закваске'),
  goal: l(
    'Ispečeš hleb od kiselog testa sa tamnom korom, rupičastom sredinom i "uhom" na zarezu.',
    'You bake a sourdough loaf with a dark crust, an open crumb and an "ear" along the score.',
    'Ты выпекаешь хлеб на закваске с тёмной коркой, пористым мякишем и «ушком» на надрезе.',
  ),
  minutes: 9,
  key: { value: l('250°C', '250°C', '250°C'), label: l('rerna sa poklopcem', 'covered pot', 'с крышкой') },
  need: [
    { item: l('Aktivan starter (2.6.5)', 'Active starter (2.6.5)', 'Активная закваска (2.6.5)'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Brašno T-500', 'Bread flour (T-500)', 'Хлебопекарная мука (T-500)'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Voda', 'Water', 'Вода'), qty: l('350 g', '350 g', '350 г') },
    { item: l('So', 'Salt', 'Соль'), qty: l('10 g', '10 g', '10 г') },
    { item: l('Liveni lonac sa poklopcem, korpa za dizanje', 'Cast-iron pot with lid, proving basket', 'Чугунная кастрюля с крышкой, корзинка для расстойки'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Kiselo testo je najsporiji hleb i zato najukusniji. Dva dana posla, ali ruke rade 20 minuta. Ostalo je vreme.',
    'Sourdough is the slowest bread and therefore the tastiest. Two days of work, but your hands work 20 minutes. The rest is time.',
    'Хлеб на закваске — самый медленный и поэтому самый вкусный. Два дня работы, но руки трудятся 20 минут. Остальное — время.',
  ),
  steps: [
    {
      text: l('Izmešaj brašno i vodu i ostavi, pa dodaj starter i so.', 'Mix the flour and water and leave it, then add starter and salt.', 'Смешай муку и воду и оставь, затем добавь закваску и соль.'),
      params: [l('autoliza 45 min', 'autolyse 45 min', 'автолиз 45 мин'), l('voda 70%, starter 20%, so 2%', 'water 70%, starter 20%, salt 2%', 'вода 70%, закваска 20%, соль 2%')],
      done: l('Testo je glatko i elastično, bez mešenja.', 'The dough is smooth and elastic without kneading.', 'Тесто гладкое и эластичное без замеса.'),
      why: l('Autoliza: brašno i voda sami prave gluten dok miruju. Zato kiselo testo skoro da ne treba mesiti.', 'Autolyse: flour and water build gluten on their own while resting. That is why sourdough barely needs kneading.', 'Автолиз: мука и вода сами образуют глютен в покое. Поэтому тесто на закваске почти не нужно месить.'),
    },
    {
      text: l('Presavij testo 4 puta na pola sata, pa ga ostavi da naraste.', 'Stretch and fold the dough 4 times, half an hour apart, then leave it to rise.', 'Растяни и сложи тесто 4 раза с интервалом полчаса и оставь подходить.'),
      params: [l('4–6 h na 24°C', '4–6 h at 24°C', '4–6 ч при 24°C'), l('+50% zapremine', '+50% volume', '+50% объёма')],
      done: l('Testo je naraslo za polovinu, kupolasto i drhti kad pomeriš činiju.', 'The dough has grown by half, is domed and jiggles when you move the bowl.', 'Тесто выросло наполовину, с куполом, и дрожит, если сдвинуть миску.'),
      why: l('Presavijanje zamenjuje mešenje. Divlji kvasac je sporiji od kupljenog, pa sve traje 3–4 puta duže.', 'Folding replaces kneading. Wild yeast is slower than shop yeast, so everything takes 3–4 times longer.', 'Складывание заменяет замес. Дикие дрожжи медленнее магазинных, поэтому всё длится в 3–4 раза дольше.'),
      drawing: 'stretchFold',
    },
    {
      text: l('Oblikuj veknu i stavi je u pobrašnjenu korpu, šavom nagore.', 'Shape the loaf and set it in a floured basket, seam up.', 'Сформуй буханку и положи в посыпанную мукой корзинку швом вверх.'),
      done: l('Vekna je zategnuta i drži oblik u korpi.', 'The loaf is taut and holds its shape in the basket.', 'Буханка натянута и держит форму в корзинке.'),
      drawing: 'shapeLoaf',
    },
    {
      text: l('Pokrij i ostavi u frižideru preko noći.', 'Cover and leave in the fridge overnight.', 'Накрой и оставь в холодильнике на ночь.'),
      params: [l('12–16 h', '12–16 h', '12–16 ч'), l('4°C', '4°C', '4°C')],
      done: l('Ujutru je testo čvrsto i malo naraslo.', 'In the morning the dough is firm and has risen a little.', 'Утром тесто плотное и немного подросло.'),
      why: l('Hladna noć produbljuje kiseo ukus i čvrsto testo se lakše zaseca.', 'A cold night deepens the sour flavour, and firm dough is easier to score.', 'Холодная ночь углубляет кислый вкус, а плотное тесто легче надрезать.'),
    },
    {
      text: l('Zagrej lonac u rerni, prevrni veknu u njega, zaseci i peci.', 'Heat the pot in the oven, turn the loaf into it, score and bake.', 'Разогрей кастрюлю в духовке, переверни в неё буханку, надрежь и выпекай.'),
      params: [l('250°C sa poklopcem 20 min', '250°C lid on 20 min', '250°C под крышкой 20 мин'), l('230°C bez poklopca 20–25 min', '230°C lid off 20–25 min', '230°C без крышки 20–25 мин')],
      done: l('Kora je tamna, skoro braon-crna na ivicama, a zarez je otvoren u "uho".', 'The crust is dark, almost brown-black at the edges, and the score has opened into an ear.', 'Корка тёмная, почти коричнево-чёрная по краям, надрез раскрылся «ушком».'),
      why: l('Poklopac zadrži paru iz testa kao profesionalna pekarska peć. Tamna kora nije zagorela: tu je ukus.', 'The lid traps the dough\'s own steam like a professional bread oven. A dark crust is not burnt: that is where the flavour is.', 'Крышка удерживает пар из теста, как профессиональная хлебная печь. Тёмная корка не подгорела: в ней вкус.'),
      drawing: 'dutchOven',
    },
  ],
  mistake: {
    title: l('Testo pečeno posle 2 sata dizanja, kao hleb sa kvascem.', 'Dough baked after a 2-hour rise, like yeasted bread.', 'Тесто выпечено после 2 часов подъёма, как дрожжевой хлеб.'),
    fix: l(
      'Divlji kvasac nije stigao da napravi gas, pa hleb izađe nizak, zbijen i gumast. Prati testo, ne sat: +50% zapremine i mehurići sa strane.',
      'The wild yeast has not had time to make gas, so the loaf comes out low, dense and gummy. Watch the dough, not the clock: +50% volume and bubbles at the side.',
      'Дикие дрожжи не успели образовать газ, и хлеб выходит низким, плотным и клёклым. Следи за тестом, а не за часами: +50% объёма и пузыри по бокам.',
    ),
  },
  think: {
    question: l('Zašto se hleb peče u lončetu sa poklopcem?', 'Why is the loaf baked in a lidded pot?', 'Почему хлеб выпекают в кастрюле с крышкой?'),
    options: [
      l('Para iz testa ostaje oko hleba i kora se kasnije stegne, pa hleb više naraste', 'The dough\'s steam stays around the loaf and the crust sets later, so it rises more', 'Пар из теста остаётся вокруг хлеба, корка схватывается позже, и хлеб поднимается выше'),
      l('Da se ne zaprlja rerna', 'To keep the oven clean', 'Чтобы не пачкать духовку'),
      l('Da hleb bude mekši', 'To make the bread softer', 'Чтобы хлеб был мягче'),
    ],
    answer: 0,
    explain: l(
      'Isti razlog kao para u 2.6.3, samo bolje: kućna rerna gubi paru kroz ventilaciju, a lonac je zatvoren. Poslednjih 20 minuta bez poklopca daju koru.',
      'The same reason as the steam in 2.6.3, only better: a home oven loses steam through its vent, while the pot is sealed. The last 20 minutes uncovered build the crust.',
      'Та же причина, что с паром в 2.6.3, только лучше: домашняя духовка теряет пар через вентиляцию, а кастрюля закрыта. Последние 20 минут без крышки дают корку.',
    ),
  },
  recipe: { name: l('Hleb od kiselog testa', 'Sourdough bread', 'Хлеб на закваске'), protein: 9, carbs: 50, fat: 1.2, kcal: 245 },
}

export const breadLessons: Lesson[] = [basics, kneading, proving, flatbreads, starter, sourdough]
