import { l, type Lesson } from '../types'

// Grade 3 · Module 6 · Pastry. Pastry is chemistry you can taste: crystals in chocolate, an emulsion in
// ganache, sugar that decides how hard a sorbet freezes. Every lesson here is a temperature or a ratio.

const temper: Lesson = {
  id: '3.6.1',
  title: l('Temperiranje čokolade', 'Tempering chocolate', 'Темперирование шоколада'),
  goal: l(
    'Temperiraš crnu čokoladu metodom dodavanja, da bude sjajna, čvrsta i da pukne kad je lomiš.',
    'You temper dark chocolate by the seeding method so it is glossy, firm and snaps when broken.',
    'Ты темперируешь тёмный шоколад методом затравки, чтобы он был блестящим, твёрдым и ломался с хрустом.',
  ),
  minutes: 7,
  key: { value: l('31–32°C', '31–32°C', '31–32°C'), label: l('radna temperatura, crna', 'working temperature, dark', 'рабочая температура, тёмный') },
  need: [
    { item: l('Crna čokolada, 55–70%', 'Dark chocolate, 55–70%', 'Тёмный шоколад, 55–70%'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Digitalni termometar', 'Digital thermometer', 'Цифровой термометр'), qty: l('1', '1', '1') },
    { item: l('Suva posuda, lopatica, papir za pečenje', 'Dry bowl, spatula, baking paper', 'Сухая миска, лопатка, пергамент'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Netemperirana čokolada se stegne mat, sa belim prugama, i topi se u ruci. Temperirana ima sjaj, pucne kad je lomiš i drži oblik.',
    'Untempered chocolate sets dull, with white streaks, and melts in the hand. Tempered chocolate shines, snaps when broken and holds its shape.',
    'Нетемперированный шоколад застывает матовым, с белыми разводами, и тает в руке. Темперированный блестит, ломается с хрустом и держит форму.',
  ),
  steps: [
    {
      text: l('Iseci čokoladu sitno i odvoji trećinu.', 'Chop the chocolate finely and set a third aside.', 'Мелко наруби шоколад и отложи треть.'),
      params: [l('200 g + 100 g', '200 g + 100 g', '200 г + 100 г')],
      done: l('Trećina je u posebnoj činiji, u komadićima veličine zrna graška.', 'A third is in a separate bowl, in pieces the size of peas.', 'Треть в отдельной миске, кусочками размером с горошину.'),
      why: l('Ta trećina je seme. Ona donosi prave kristale u otopljenu čokoladu.', 'That third is the seed. It brings the right crystals into the melted chocolate.', 'Эта треть — затравка. Она приносит правильные кристаллы в растопленный шоколад.'),
    },
    {
      text: l('Otopi dve trećine nad parom.', 'Melt two thirds over steam.', 'Растопи две трети над паром.'),
      params: [l('45–50°C', '45–50°C', '45–50°C')],
      done: l('Čokolada je potpuno tečna i glatka.', 'The chocolate is fully liquid and smooth.', 'Шоколад полностью жидкий и гладкий.'),
      why: l('Na ovoj temperaturi se tope svi kristali. Krećeš od nule, bez loših kristala.', 'At this temperature all the crystals melt. You start from zero, with no bad crystals.', 'При этой температуре плавятся все кристаллы. Начинаешь с нуля, без плохих кристаллов.'),
      drawing: 'bainMarie',
    },
    {
      text: l('Skloni sa pare, dodaj sitnu trećinu i mešaj dok ne padne na radnu temperaturu.', 'Take it off the steam, add the chopped third and stir until it drops to working temperature.', 'Сними с пара, добавь отложенную треть и мешай, пока не опустится до рабочей температуры.'),
      params: [l('crna 31–32°C', 'dark 31–32°C', 'тёмный 31–32°C'), l('mlečna 29–30°C', 'milk 29–30°C', 'молочный 29–30°C')],
      done: l('Termometar pokazuje radnu temperaturu, a komadići su se otopili.', 'The thermometer shows working temperature and the pieces have melted.', 'Термометр показывает рабочую температуру, кусочки растаяли.'),
      why: l('Hlađenje uz seme gradi samo stabilne kristale. Oni daju sjaj i pucanje.', 'Cooling with the seed builds only stable crystals. They give the gloss and the snap.', 'Охлаждение с затравкой строит только стабильные кристаллы. Они дают блеск и хруст.'),
      drawing: 'chocTemper',
    },
    {
      text: l('Testiraj: umoči vrh noža i ostavi ga na sobnoj temperaturi.', 'Test it: dip the tip of a knife and leave it at room temperature.', 'Проверь: обмакни кончик ножа и оставь при комнатной температуре.'),
      params: [l('5 min', '5 min', '5 мин'), l('18–20°C', '18–20°C', '18–20°C')],
      done: l('Čokolada na nožu je stegnuta, sjajna i bez belih pruga.', 'The chocolate on the knife has set, glossy and with no white streaks.', 'Шоколад на ноже застыл, блестящий и без белых разводов.'),
      why: l('Test od pet minuta štedi ceo pleh bombona koji bi posivio.', 'A five-minute test saves a whole tray of bonbons from turning grey.', 'Пятиминутный тест спасает целый противень конфет от поседения.'),
    },
    {
      text: l('Radi na radnoj temperaturi i podgrevaj kratko kad padne.', 'Work at working temperature and warm briefly when it drops.', 'Работай при рабочей температуре и коротко подогревай, когда она падает.'),
      params: [l('po 5 sekundi nad parom', '5 seconds at a time over steam', 'по 5 секунд над паром')],
      done: l('Čokolada ostaje tečna i drži 31–32°C.', 'The chocolate stays fluid and holds 31–32°C.', 'Шоколад остаётся жидким и держит 31–32°C.'),
      why: l('Iznad 32°C se tope dobri kristali i temperiranje se gubi. Grej malo, mešaj mnogo.', 'Above 32°C the good crystals melt and the temper is lost. Heat a little, stir a lot.', 'Выше 32°C хорошие кристаллы плавятся, и темперирование теряется. Грей немного, мешай много.'),
    },
  ],
  mistake: {
    title: l('Kap vode ili pare u čokoladi.', 'A drop of water or steam in the chocolate.', 'Капля воды или пара в шоколаде.'),
    fix: l(
      'Čokolada se odjednom zgusne u zrnastu masu i ne može da se temperira. Posuda i lopatica moraju biti suve, a posuda šira od šerpe, da para ne uđe sa strane.',
      'The chocolate suddenly seizes into a grainy mass and cannot be tempered. The bowl and spatula must be dry, and the bowl wider than the pan so steam cannot creep in at the sides.',
      'Шоколад внезапно схватывается в зернистую массу и не темперируется. Миска и лопатка должны быть сухими, а миска шире кастрюли, чтобы пар не попадал сбоку.',
    ),
  },
  think: {
    question: l('Zašto se u otopljenu čokoladu dodaje sitna, neotopljena čokolada?', 'Why is chopped, unmelted chocolate added to the melted chocolate?', 'Зачем в растопленный шоколад добавляют нерастопленный рубленый?'),
    options: [
      l('Donosi prave kristale i hladi masu', 'It brings the right crystals and cools the mass', 'Он приносит правильные кристаллы и охлаждает массу'),
      l('Da bude više čokolade', 'To have more chocolate', 'Чтобы было больше шоколада'),
      l('Da bude slađa', 'To make it sweeter', 'Чтобы было слаще'),
    ],
    answer: 0,
    explain: l(
      'Kupljena čokolada je već temperirana. Njeni kristali su šablon po kome se otopljena čokolada slaže dok se hladi.',
      'Bought chocolate is already tempered. Its crystals are the template the melted chocolate follows as it cools.',
      'Покупной шоколад уже темперирован. Его кристаллы — шаблон, по которому выстраивается растопленный шоколад при охлаждении.',
    ),
  },
}

const ganache: Lesson = {
  id: '3.6.2',
  title: l('Ganache', 'Ganache', 'Ганаш'),
  goal: l(
    'Napraviš glatku, sjajnu ganache u odnosu koji odgovara upotrebi: za tart, glazuru ili tartufe.',
    'You make a smooth, glossy ganache in the ratio that fits its use: for a tart, a glaze or truffles.',
    'Ты готовишь гладкий блестящий ганаш в пропорции под задачу: для тарта, глазури или трюфелей.',
  ),
  minutes: 5,
  key: { value: l('1 : 1', '1 : 1', '1 : 1'), label: l('pavlaka i crna čokolada', 'cream to dark chocolate', 'сливки и тёмный шоколад') },
  need: [
    { item: l('Crna čokolada, 60–70%', 'Dark chocolate, 60–70%', 'Тёмный шоколад, 60–70%'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Slatka pavlaka, 35% masti', 'Cream, 35% fat', 'Сливки 35%'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Lopatica, štapni mikser', 'Spatula, stick blender', 'Лопатка, погружной блендер'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Ganache je emulzija masti iz čokolade i vode iz pavlake. Odnos odlučuje sve: isti sastojci daju glazuru koja teče ili tartuf koji se seče.',
    'Ganache is an emulsion of the fat in chocolate and the water in cream. The ratio decides everything: the same ingredients make a glaze that flows or a truffle you can cut.',
    'Ганаш — эмульсия жира из шоколада и воды из сливок. Пропорция решает всё: те же продукты дают текучую глазурь или трюфель, который режется.',
  ),
  steps: [
    {
      text: l('Odaberi odnos prema upotrebi.', 'Pick the ratio for the job.', 'Выбери пропорцию под задачу.'),
      params: [l('1 : 1 tart i glazura', '1 : 1 tart and glaze', '1 : 1 тарт и глазурь'), l('1 : 2 tartufi', '1 : 2 truffles', '1 : 2 трюфели')],
      done: l('Pavlaka i čokolada su izmerene na vagi.', 'The cream and chocolate are weighed on the scale.', 'Сливки и шоколад взвешены на весах.'),
      why: l('Više čokolade, čvršća ganache. Za mlečnu i belu čokoladu treba još više čokolade, jer imaju manje kakao maslaca.', 'More chocolate, firmer ganache. Milk and white chocolate need even more, as they have less cocoa butter.', 'Больше шоколада — плотнее ганаш. Молочному и белому шоколаду нужно ещё больше, в них меньше какао-масла.'),
    },
    {
      text: l('Zagrej pavlaku do prvog ključanja.', 'Heat the cream to the first boil.', 'Нагрей сливки до первого закипания.'),
      done: l('Na ivici pavlake se pojave mehurići.', 'Bubbles appear at the edge of the cream.', 'У края сливок появляются пузырьки.'),
      why: l('Dovoljno topla da otopi čokoladu, a ne toliko da je pregreje.', 'Hot enough to melt the chocolate, not so hot it overheats it.', 'Достаточно горячие, чтобы растопить шоколад, но не перегреть его.'),
      drawing: 'creamBoil',
    },
    {
      text: l('Prelij pavlaku preko sitno seckane čokolade i ostavi minut.', 'Pour the cream over the finely chopped chocolate and leave for a minute.', 'Залей сливками мелко рубленный шоколад и оставь на минуту.'),
      params: [l('1 min', '1 min', '1 мин')],
      done: l('Čokolada je mekana ispod pavlake.', 'The chocolate is soft beneath the cream.', 'Шоколад под сливками размяк.'),
      why: l('Minut mirovanja otopi čokoladu ravnomerno. Odmah mešanje ohladi pavlaku pre nego što je posao gotov.', 'A minute of rest melts the chocolate evenly. Stirring at once cools the cream before the job is done.', 'Минута покоя равномерно плавит шоколад. Если сразу мешать, сливки остынут раньше, чем закончат работу.'),
    },
    {
      text: l('Mešaj od sredine ka ivici, malim krugovima.', 'Stir from the centre outwards in small circles.', 'Мешай от центра к краю маленькими кругами.'),
      done: l('U sredini se pojavi sjajna, glatka masa koja se širi do ivice.', 'A glossy, smooth mass appears in the centre and spreads to the edge.', 'В центре появляется блестящая гладкая масса и расходится к краю.'),
      why: l('Emulzija se gradi od sredine, kao majonez. Mutilica uvlači vazduh i daje mehuriće.', 'The emulsion builds from the centre, like mayonnaise. A whisk pulls in air and leaves bubbles.', 'Эмульсия строится от центра, как майонез. Венчик затягивает воздух и даёт пузыри.'),
    },
    {
      text: l('Upotrebi odmah ili pokrij folijom koja dodiruje površinu.', 'Use at once or cover with film touching the surface.', 'Используй сразу или накрой плёнкой в контакт с поверхностью.'),
      params: [l('tart: sipaj odmah', 'tart: pour at once', 'тарт: заливай сразу'), l('tartufi: frižider 2 h', 'truffles: fridge 2 h', 'трюфели: холодильник 2 ч')],
      done: l('Ganache ostaje sjajna, bez kore.', 'The ganache stays glossy, with no skin.', 'Ганаш остаётся блестящим, без корки.'),
      why: l('Folija na površini ne pušta vazduh da napravi koru, koja bi posle bila grudvice.', 'Film on the surface keeps air from forming a skin that would later become lumps.', 'Плёнка на поверхности не даёт воздуху образовать корку, которая потом станет комками.'),
    },
  ],
  mistake: {
    title: l('Ganache se razdvojila: masna i zrnasta.', 'The ganache has split: greasy and grainy.', 'Ганаш расслоился: жирный и зернистый.'),
    fix: l(
      'Emulzija je pukla, najčešće od pregrevanja. Dodaj kašiku tople pavlake ili mleka i izblenduj štapnim mikserom ispod površine. Emulzija se vraća za pola minuta.',
      'The emulsion has broken, usually from overheating. Add a spoonful of warm cream or milk and blend with a stick blender below the surface. The emulsion comes back in half a minute.',
      'Эмульсия разрушилась, чаще всего от перегрева. Добавь ложку тёплых сливок или молока и пробей погружным блендером под поверхностью. Эмульсия вернётся за полминуты.',
    ),
  },
  think: {
    question: l('Ganache je previše meka za tartufe. Šta menjaš?', 'The ganache is too soft for truffles. What do you change?', 'Ганаш слишком мягкий для трюфелей. Что меняешь?'),
    options: [
      l('Više čokolade u odnosu', 'More chocolate in the ratio', 'Больше шоколада в пропорции'),
      l('Duže mešanje', 'Stir longer', 'Мешать дольше'),
      l('Topliju pavlaku', 'Hotter cream', 'Сливки погорячее'),
    ],
    answer: 0,
    explain: l(
      'Čvrstinu određuje odnos čokolade i pavlake. Za tartufe ide dvaput više čokolade nego pavlake, i ganache se seče posle frižidera.',
      'Firmness comes from the ratio of chocolate to cream. Truffles take twice as much chocolate as cream, and the ganache cuts after chilling.',
      'Плотность определяет соотношение шоколада и сливок. Для трюфелей шоколада вдвое больше сливок, и ганаш режется после холодильника.',
    ),
  },
}

const sorbet: Lesson = {
  id: '3.6.3',
  title: l('Sorbe bez mašine', 'Sorbet without a machine', 'Сорбет без машины'),
  goal: l(
    'Napraviš glatki voćni sorbe u zamrzivaču, sa tačnom količinom šećera da se ne stegne u kamen.',
    'You make a smooth fruit sorbet in the freezer, with exactly enough sugar that it does not set like stone.',
    'Ты готовишь гладкий фруктовый сорбет в морозилке с точным количеством сахара, чтобы он не застыл камнем.',
  ),
  minutes: 6,
  key: { value: l('25–30%', '25–30%', '25–30%'), label: l('šećera u smesi', 'sugar in the mix', 'сахара в смеси') },
  need: [
    { item: l('Pire od voća: malina, mango, kruška', 'Fruit purée: raspberry, mango, pear', 'Фруктовое пюре: малина, манго, груша'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Šećer i voda za sirup', 'Sugar and water for syrup', 'Сахар и вода для сиропа'), qty: l('150 g + 150 ml', '150 g + 150 ml', '150 г + 150 мл') },
    { item: l('Limun, plitka posuda, viljuška', 'Lemon, shallow container, fork', 'Лимон, плоская ёмкость, вилка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Šećer u sorbeu nije samo slatkoća. On ne da vodi da se smrzne u jedan blok, pa je sorbe mekan i može da se vadi kašikom.',
    'Sugar in a sorbet is not just sweetness. It stops the water freezing into one block, so the sorbet stays soft enough to scoop.',
    'Сахар в сорбете — не только сладость. Он не даёт воде замёрзнуть одним блоком, и сорбет остаётся мягким, его можно брать ложкой.',
  ),
  steps: [
    {
      text: l('Prokuvaj šećer i vodu u sirup, pa ohladi.', 'Boil the sugar and water into a syrup, then cool it.', 'Свари сироп из сахара и воды и остуди.'),
      params: [l('1 : 1', '1 : 1', '1 : 1')],
      done: l('Sirup je bistar i hladan.', 'The syrup is clear and cold.', 'Сироп прозрачный и холодный.'),
      why: l('Rastvoren šećer se meša ravnomerno. Šećer bačen direktno u pire ostane zrnast.', 'Dissolved sugar mixes evenly. Sugar thrown straight into purée stays grainy.', 'Растворённый сахар распределяется равномерно. Сахар прямо в пюре остаётся зернистым.'),
    },
    {
      text: l('Pomešaj pire, sirup i sok limuna.', 'Mix the purée, syrup and lemon juice.', 'Смешай пюре, сироп и лимонный сок.'),
      params: [l('500 g + 250 ml', '500 g + 250 ml', '500 г + 250 мл'), l('1/2 limuna', '1/2 lemon', '1/2 лимона')],
      done: l('Smesa je slađa nego što bi htela da bude sorbe.', 'The mix tastes sweeter than you want the sorbet to be.', 'Смесь слаще, чем ты хочешь видеть сорбет.'),
      why: l('Hladnoća otupljuje slatkoću. Ono što je toplo pravo, smrznuto deluje bledo.', 'Cold dulls sweetness. What tastes right warm tastes flat frozen.', 'Холод притупляет сладость. Что тёплым в самый раз, замороженным кажется пресным.'),
    },
    {
      text: l('Proveri šećer jajetom: oprano jaje u ljusci pusti u smesu.', 'Check the sugar with an egg: drop a washed egg in its shell into the mix.', 'Проверь сахар яйцом: опусти вымытое яйцо в скорлупе в смесь.'),
      done: l('Jaje pluta, a iz smese viri krug veličine novčića.', 'The egg floats with a coin-sized circle showing above the mix.', 'Яйцо плавает, над смесью виден круг размером с монету.'),
      why: l('Stari trik poslastičara. Ako jaje potone, dodaj sirup. Ako viri mnogo, dodaj pire ili vodu.', 'An old pastry trick. If the egg sinks, add syrup. If a lot shows, add purée or water.', 'Старый кондитерский приём. Утонуло — добавь сироп. Торчит много — добавь пюре или воду.'),
    },
    {
      text: l('Zamrzni u plitkoj posudi i mešaj viljuškom svakih pola sata.', 'Freeze in a shallow container and stir with a fork every half hour.', 'Заморозь в плоской ёмкости и перемешивай вилкой каждые полчаса.'),
      params: [l('−18°C', '−18°C', '−18°C'), l('4 × 30 min', '4 × 30 min', '4 × 30 мин')],
      done: l('Sorbe je ravnomerno smrznut, bez ledene kore uz ivice.', 'The sorbet is evenly frozen, with no icy crust at the edges.', 'Сорбет замёрз равномерно, без ледяной корки по краям.'),
      why: l('Mešanje razbija kristale leda dok su mali. Mašina radi isto, samo bez prestanka.', 'Stirring breaks the ice crystals while they are small. A machine does the same, just without stopping.', 'Перемешивание разбивает кристаллы льда, пока они маленькие. Машина делает то же, только без остановки.'),
    },
    {
      text: l('Pre služenja ga kratko izblenduj i oblikuj quenelle.', 'Before serving, blend briefly and shape quenelles.', 'Перед подачей коротко взбей и сформируй кнели.'),
      params: [l('10–15 s', '10–15 s', '10–15 с')],
      done: l('Sorbe je gladak i sjajan, i drži oblik na tanjiru.', 'The sorbet is smooth and glossy and holds its shape on the plate.', 'Сорбет гладкий, блестящий и держит форму на тарелке.'),
      why: l('Kratko blendanje vrati glatkoću sorbeu koji je stajao u zamrzivaču. Quenelle je iz 3.3.5.', 'A quick blend restores the smoothness of a sorbet that has sat in the freezer. The quenelle is from 3.3.5.', 'Короткое взбивание возвращает гладкость сорбету из морозилки. Кнель — из 3.3.5.'),
      drawing: 'quenelle',
    },
  ],
  mistake: {
    title: l('Manje šećera, „da bude zdravije“.', 'Less sugar, "to make it healthier".', 'Меньше сахара, «чтобы было полезнее».'),
    fix: l(
      'Sorbe se stegne u kamen koji se ne može vaditi. Šećer ovde gradi teksturu. Ako je preslatko, dodaj više limuna, a ne manje šećera.',
      'The sorbet sets into a rock you cannot scoop. Here sugar builds the texture. If it is too sweet, add more lemon, not less sugar.',
      'Сорбет застывает камнем, который не взять ложкой. Сахар здесь создаёт текстуру. Слишком сладко — добавь лимона, а не убавляй сахар.',
    ),
  },
  think: {
    question: l('Šta šećer radi u sorbeu, osim slatkoće?', 'What does sugar do in a sorbet, besides sweetness?', 'Что делает сахар в сорбете, кроме сладости?'),
    options: [
      l('Ne da vodi da se smrzne u blok', 'It stops the water freezing into a block', 'Не даёт воде замёрзнуть блоком'),
      l('Daje boju', 'It adds colour', 'Даёт цвет'),
      l('Čuva voće od kvarenja', 'It keeps the fruit from spoiling', 'Защищает фрукты от порчи'),
    ],
    answer: 0,
    explain: l(
      'Šećer spušta tačku smrzavanja vode. Deo vode ostane tečan i na −18°C, i zato je sorbe mekan.',
      'Sugar lowers the freezing point of water. Some of the water stays liquid even at −18°C, and that is why sorbet is soft.',
      'Сахар понижает точку замерзания воды. Часть воды остаётся жидкой даже при −18°C, поэтому сорбет мягкий.',
    ),
  },
}

const financiers: Lesson = {
  id: '3.6.4',
  title: l('Madlene i financijeri', 'Madeleines and financiers', 'Мадлен и финансье'),
  goal: l(
    'Ispečeš financijere sa braon puterom i bademom: hrskave ivice i vlažna sredina, za kafu posle večere.',
    'You bake financiers with brown butter and almond: crisp edges and a moist centre, for coffee after dinner.',
    'Ты выпекаешь финансье с коричневым маслом и миндалём: хрустящие края и влажная середина, к кофе после ужина.',
  ),
  minutes: 6,
  key: { value: l('200°C · 9 min', '200°C · 9 min', '200°C · 9 мин'), label: l('pečenje', 'baking', 'выпечка') },
  need: [
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Mleveni bademi, šećer u prahu, brašno', 'Ground almonds, icing sugar, flour', 'Молотый миндаль, сахарная пудра, мука'), qty: l('100 + 150 + 40 g', '100 + 150 + 40 g', '100 + 150 + 40 г') },
    { item: l('Belanca', 'Egg whites', 'Белки'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Kalupi za financijere ili madlene', 'Financier or madeleine moulds', 'Формы для финансье или мадлен'), qty: l('12', '12', '12') },
  ],
  why: l(
    'Petits fours su poslednji utisak večere. Mali su, ali gost ih pamti, jer stižu kad je sve ostalo već pojedeno.',
    'Petits fours are the last impression of a dinner. They are small, but guests remember them, because they arrive when everything else has been eaten.',
    'Пти-фуры — последнее впечатление от ужина. Они маленькие, но гости их помнят, ведь их подают, когда всё остальное съедено.',
  ),
  steps: [
    {
      text: l('Napravi braon puter i ohladi ga do mlakog.', 'Make brown butter and cool it to lukewarm.', 'Сделай коричневое масло и остуди до тёплого.'),
      params: [l('100 g', '100 g', '100 г')],
      done: l('Puter je zlatnosmeđ i miriše na lešnik.', 'The butter is golden brown and smells of hazelnut.', 'Масло золотисто-коричневое и пахнет фундуком.'),
      why: l('Braon puter je ukus financijera (2.10.1). Vreo bi skuvao belanca.', 'Brown butter is the flavour of a financier (2.10.1). Hot, it would cook the egg whites.', 'Коричневое масло — вкус финансье (2.10.1). Горячее сварило бы белки.'),
      drawing: 'noisette',
    },
    {
      text: l('Pomešaj suve sastojke, umešaj belanca, pa puter.', 'Mix the dry ingredients, stir in the whites, then the butter.', 'Смешай сухие ингредиенты, вмешай белки, затем масло.'),
      done: l('Testo je glatko i sjajno, kao gusta krema.', 'The batter is smooth and glossy, like a thick cream.', 'Тесто гладкое и блестящее, как густой крем.'),
      why: l('Belanca se ne mute. Financijer je gust i vlažan, ne vazdušast.', 'The whites are not whipped. A financier is dense and moist, not airy.', 'Белки не взбивают. Финансье плотный и влажный, а не воздушный.'),
    },
    {
      text: l('Odmori testo u frižideru.', 'Rest the batter in the fridge.', 'Дай тесту отдохнуть в холодильнике.'),
      params: [l('najmanje 1 h', 'at least 1 h', 'не менее 1 ч'), l('madlene: preko noći', 'madeleines: overnight', 'мадлен: на ночь')],
      done: l('Testo je hladno i gušće.', 'The batter is cold and thicker.', 'Тесто холодное и гуще.'),
      why: l('Hladno testo u vreloj rerni naglo se diže u sredini. Tako madlena dobija svoju grbu.', 'Cold batter in a hot oven rises sharply in the middle. That is how a madeleine gets its hump.', 'Холодное тесто в горячей духовке резко поднимается в центре. Так мадлен получает свой горбик.'),
    },
    {
      text: l('Napuni namazane kalupe do tri četvrtine i peci.', 'Fill the buttered moulds three-quarters full and bake.', 'Заполни смазанные формы на три четверти и выпекай.'),
      params: [l('200°C', '200°C', '200°C'), l('8–10 min', '8–10 min', '8–10 мин')],
      done: l('Ivice su tamnozlatne, a sredina se vraća kad je pritisneš.', 'The edges are deep golden and the centre springs back when pressed.', 'Края тёмно-золотистые, середина пружинит при нажатии.'),
      why: l('Puna rerna i jaka temperatura daju hrskave ivice, dok sredina ostaje vlažna.', 'A hot oven gives crisp edges while the middle stays moist.', 'Горячая духовка даёт хрустящие края, а середина остаётся влажной.'),
    },
    {
      text: l('Izvadi iz kalupa odmah i služi mlako.', 'Unmould at once and serve warm.', 'Сразу выними из форм и подавай тёплыми.'),
      done: l('Financijeri izlaze čisti, sa hrskavim ivicama.', 'The financiers come out clean, with crisp edges.', 'Финансье выходят чисто, с хрустящими краями.'),
      why: l('U kalupu se para vraća u koru i omekša je. Najbolji su u prvih sat vremena.', 'In the mould, steam goes back into the crust and softens it. They are best in the first hour.', 'В форме пар возвращается в корочку и размягчает её. Лучше всего они в первый час.'),
    },
  ],
  mistake: {
    title: l('Testo pečeno odmah, bez odmora.', 'The batter baked straight away, without resting.', 'Тесто выпечено сразу, без отдыха.'),
    fix: l(
      'Madlene ispadnu ravne, a financijeri suvi i grubi. Odmor pušta brašnu da upije tečnost i hladi testo za nagli rast u rerni.',
      'The madeleines come out flat and the financiers dry and coarse. Resting lets the flour absorb the liquid and chills the batter for a sharp rise in the oven.',
      'Мадлен получаются плоскими, а финансье сухими и грубыми. Отдых даёт муке впитать жидкость и охлаждает тесто для резкого подъёма в духовке.',
    ),
  },
  think: {
    question: l('Zašto madlene dobiju grbu?', 'Why do madeleines get their hump?', 'Почему у мадлен появляется горбик?'),
    options: [
      l('Hladno testo u vreloj rerni', 'Cold batter in a hot oven', 'Холодное тесто в горячей духовке'),
      l('Mnogo praška za pecivo', 'Lots of baking powder', 'Много разрыхлителя'),
      l('Umućena belanca', 'Whipped egg whites', 'Взбитые белки'),
    ],
    answer: 0,
    explain: l(
      'Ivice se zapeku i stegnu prve, a hladna sredina se diže kasnije i nema kuda nego gore. Razlika u temperaturi pravi grbu.',
      'The edges bake and set first, and the cold centre rises later with nowhere to go but up. The temperature difference makes the hump.',
      'Края пропекаются и схватываются первыми, а холодная середина поднимается позже, и ей некуда идти, кроме как вверх. Разница температур даёт горбик.',
    ),
  },
  recipe: { name: l('Financijer sa braon puterom', 'Brown butter financier', 'Финансье с коричневым маслом'), protein: 7, carbs: 45, fat: 25, kcal: 430 },
}

const mirror: Lesson = {
  id: '3.6.5',
  title: l('Ogledalna glazura', 'Mirror glaze', 'Зеркальная глазурь'),
  goal: l(
    'Napraviš glazuru bez mehurića i preliješ je preko smrznutog kolača tako da ostane ogledalo.',
    'You make a glaze without bubbles and pour it over a frozen cake so it stays a mirror.',
    'Ты готовишь глазурь без пузырей и заливаешь замороженный торт так, чтобы осталось зеркало.',
  ),
  minutes: 7,
  key: { value: l('32–35°C', '32–35°C', '32–35°C'), label: l('temperatura prelivanja', 'pouring temperature', 'температура заливки') },
  need: [
    { item: l('Želatin i hladna voda', 'Gelatine and cold water', 'Желатин и холодная вода'), qty: l('10 g + 60 ml', '10 g + 60 ml', '10 г + 60 мл') },
    { item: l('Šećer, glukozni sirup, voda', 'Sugar, glucose syrup, water', 'Сахар, глюкозный сироп, вода'), qty: l('150 + 150 + 75 g', '150 + 150 + 75 g', '150 + 150 + 75 г') },
    { item: l('Bela čokolada, kondenzovano mleko', 'White chocolate, condensed milk', 'Белый шоколад, сгущённое молоко'), qty: l('150 + 100 g', '150 + 100 g', '150 + 100 г') },
    { item: l('Smrznut mus-kolač na rešetki', 'A frozen mousse cake on a rack', 'Замороженный муссовый торт на решётке'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Ogledalna glazura pokriva kolač savršeno glatkim, sjajnim slojem. Ona je razlika između domaće torte i torte iz izloga.',
    'A mirror glaze covers a cake in a perfectly smooth, glossy layer. It is the difference between a homemade cake and one from a shop window.',
    'Зеркальная глазурь покрывает торт идеально гладким блестящим слоем. Это разница между домашним тортом и тортом с витрины.',
  ),
  steps: [
    {
      text: l('Natopi želatin u hladnoj vodi.', 'Bloom the gelatine in cold water.', 'Замочи желатин в холодной воде.'),
      params: [l('10 g + 60 ml', '10 g + 60 ml', '10 г + 60 мл'), l('10 min', '10 min', '10 мин')],
      done: l('Želatin je nabubreo i upio svu vodu.', 'The gelatine has swollen and absorbed all the water.', 'Желатин набух и впитал всю воду.'),
      why: l('Nenatopljen želatin pravi grudvice u glazuri (2.7.3).', 'Unbloomed gelatine leaves lumps in the glaze (2.7.3).', 'Незамоченный желатин даёт комки в глазури (2.7.3).'),
      drawing: 'gelatinBloom',
    },
    {
      text: l('Skuvaj šećer, glukozu i vodu.', 'Cook the sugar, glucose and water.', 'Свари сахар, глюкозу и воду.'),
      params: [l('103°C', '103°C', '103°C')],
      done: l('Sirup je bistar i termometar pokazuje 103°C.', 'The syrup is clear and the thermometer reads 103°C.', 'Сироп прозрачный, термометр показывает 103°C.'),
      why: l('Glukoza ne da šećeru da kristališe. Bez nje glazura postane mutna.', 'Glucose stops the sugar from crystallising. Without it the glaze turns cloudy.', 'Глюкоза не даёт сахару кристаллизоваться. Без неё глазурь мутнеет.'),
    },
    {
      text: l('Prelij sirup preko čokolade, kondenzovanog mleka i želatina.', 'Pour the syrup over the chocolate, condensed milk and gelatine.', 'Залей сиропом шоколад, сгущённое молоко и желатин.'),
      params: [l('boja po želji: nekoliko kapi', 'colour if you like: a few drops', 'краситель по желанию: несколько капель')],
      done: l('Čokolada i želatin su se otopili.', 'The chocolate and gelatine have melted.', 'Шоколад и желатин растаяли.'),
      why: l('Sirup od 103°C je dovoljno vreo da otopi sve, a nije toliko vreo da spali čokoladu.', 'Syrup at 103°C is hot enough to melt everything but not so hot it scorches the chocolate.', 'Сироп 103°C достаточно горячий, чтобы всё расплавить, но не обжечь шоколад.'),
    },
    {
      text: l('Izblenduj štapnim mikserom ispod površine, pa procedi.', 'Blend with a stick blender below the surface, then strain.', 'Пробей погружным блендером под поверхностью, затем процеди.'),
      done: l('Glazura je glatka i na površini nema nijednog mehurića.', 'The glaze is smooth with not a single bubble on the surface.', 'Глазурь гладкая, на поверхности ни одного пузыря.'),
      why: l('Svaki mehurić posle se vidi na ogledalu. Mikser drži nagnut, glavu skroz u glazuri.', 'Every bubble shows up later on the mirror. Hold the blender tilted, its head fully in the glaze.', 'Каждый пузырь потом виден на зеркале. Держи блендер наклонно, головку полностью в глазури.'),
    },
    {
      text: l('Ohladi glazuru do temperature prelivanja i prelij smrznut kolač jednim potezom.', 'Cool the glaze to pouring temperature and pour it over the frozen cake in one go.', 'Остуди глазурь до температуры заливки и залей замороженный торт за один раз.'),
      params: [l('32–35°C', '32–35°C', '32–35°C'), l('kolač −18°C', 'cake −18°C', 'торт −18°C')],
      done: l('Glazura klizi preko kolača i ostaje glatka i sjajna.', 'The glaze slides over the cake and stays smooth and glossy.', 'Глазурь стекает по торту и остаётся гладкой и блестящей.'),
      why: l('Smrznut kolač stegne glazuru za par sekundi. Ne popravljaj je posle: svaki dodir ostavi trag.', 'The frozen cake sets the glaze within seconds. Do not touch it up afterwards: every touch leaves a mark.', 'Замороженный торт схватывает глазурь за секунды. Не поправляй потом: каждое касание оставляет след.'),
      drawing: 'glazePour',
    },
  ],
  mistake: {
    title: l('Glazura prelivena prevruća ili prehladna.', 'Glaze poured too hot or too cold.', 'Глазурь залита слишком горячей или холодной.'),
    fix: l(
      'Prevruća sklizne sa kolača i ostavi providan sloj. Prehladna se zgusne u debelu, neravnu koru. Termometar u glazuri i preliva se tek na 32–35°C.',
      'Too hot, it slides off the cake and leaves a see-through layer. Too cold, it thickens into a heavy, uneven coat. Keep a thermometer in the glaze and pour only at 32–35°C.',
      'Слишком горячая стекает с торта и оставляет прозрачный слой. Слишком холодная густеет в толстую неровную корку. Термометр в глазурь, и заливай только при 32–35°C.',
    ),
  },
  think: {
    question: l('Zašto kolač mora biti smrznut?', 'Why must the cake be frozen?', 'Почему торт должен быть замороженным?'),
    options: [
      l('Glazura se stegne čim ga dodirne', 'The glaze sets the moment it touches it', 'Глазурь схватывается в момент касания'),
      l('Da se lakše seče', 'So it slices more easily', 'Чтобы легче резался'),
      l('Da duže traje', 'So it keeps longer', 'Чтобы дольше хранился'),
    ],
    answer: 0,
    explain: l(
      'Želatin u glazuri se steže na hladnom. Na smrznutoj površini to se desi za par sekundi, i sloj ostane tanak, ravan i sjajan.',
      'The gelatine in the glaze sets in the cold. On a frozen surface that happens in seconds, so the layer stays thin, even and glossy.',
      'Желатин в глазури схватывается на холоде. На замороженной поверхности это происходит за секунды, и слой остаётся тонким, ровным и блестящим.',
    ),
  },
}

export const pastryLessons: Lesson[] = [temper, ganache, sorbet, financiers, mirror]
