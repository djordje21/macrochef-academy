import { l, type Lesson } from '../types'

// Grade 2 · Module 14 · World kitchens: Asia (bonus). Four techniques that cross over to everything else:
// cooking over fierce heat, balancing four tastes, pan-steaming, and building a bowl in layers.

const wok: Lesson = {
  id: '2.14.1',
  title: l('Vok i ukus vatre', 'The wok and the taste of fire', 'Вок и вкус огня'),
  goal: l(
    'Ispržiš piletinu sa povrćem u voku za 5 minuta, sa sjajnim sosom i povrćem koje krcka.',
    'You stir-fry chicken and vegetables in a wok in 5 minutes, with a glossy sauce and vegetables that still crunch.',
    'Ты обжариваешь курицу с овощами в воке за 5 минут, с блестящим соусом и хрустящими овощами.',
  ),
  minutes: 7,
  key: { value: l('200 g', '200 g', '200 г'), label: l('po turi', 'per batch', 'за раз') },
  need: [
    { item: l('Pileći bataci bez kosti, trake', 'Boneless chicken thighs, in strips', 'Куриные бёдра без кости, полосками'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Gustin, belance, soja sos', 'Cornflour, egg white, soy sauce', 'Крахмал, белок, соевый соус'), qty: l('1 kašika + 1 + 1 kašika', '1 tbsp + 1 + 1 tbsp', '1 ст. л. + 1 + 1 ст. л.') },
    { item: l('Brokoli, paprika, mladi luk', 'Broccoli, pepper, spring onion', 'Брокколи, перец, зелёный лук'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Beli luk, đumbir', 'Garlic, ginger', 'Чеснок, имбирь'), qty: l('3 čena + 3 cm', '3 cloves + 3 cm', '3 зубчика + 3 см') },
    { item: l('Sos: soja, oyster sos, šećer, gustin, voda', 'Sauce: soy, oyster sauce, sugar, cornflour, water', 'Соус: соевый, устричный, сахар, крахмал, вода'), qty: l('2 + 1 kašika + 1 kašičica + 1 kašičica + 60 ml', '2 + 1 tbsp + 1 tsp + 1 tsp + 60 ml', '2 + 1 ст. л. + 1 ч. л. + 1 ч. л. + 60 мл') },
    { item: l('Čelični vok, ulje visoke tačke dimljenja', 'Carbon-steel wok, high smoke-point oil', 'Стальной вок, масло с высокой точкой дымления'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Vok je tiganj za najjaču vatru u kuhinji. Hrana se peče za minut i dobija "wok hei", dim i karamel ivica. Ali kućni šporet je slab, pa je cela tehnika u malim turama.',
    'The wok is the pan for the fiercest heat in the kitchen. Food cooks in a minute and gets "wok hei": smoke and caramelised edges. But a home stove is weak, so the whole technique is small batches.',
    'Вок — сковорода для самого сильного огня на кухне. Еда готовится за минуту и получает «wok hei»: дымок и карамелизованные края. Но домашняя плита слабая, поэтому вся техника — в маленьких порциях.',
  ),
  steps: [
    {
      text: l('Izmešaj piletinu sa gustinom, belancetom i sojom i ostavi.', 'Toss the chicken with cornflour, egg white and soy and leave it.', 'Перемешай курицу с крахмалом, белком и соей и оставь.'),
      params: [l('15 min', '15 min', '15 мин')],
      done: l('Piletina je obložena tankim, sjajnim slojem.', 'The chicken is coated in a thin, glossy layer.', 'Курица покрыта тонким блестящим слоем.'),
      why: l('Ovo je "velveting": tanak sloj štiti meso od jake vatre i ostane sočno, kao brašno kod ribe (2.10.2).', 'This is velveting: a thin coating shields the meat from fierce heat so it stays juicy, like flour on fish (2.10.2).', 'Это «вельветинг»: тонкий слой защищает мясо от сильного огня, и оно остаётся сочным, как мука на рыбе (2.10.2).'),
    },
    {
      text: l('Iseci sve i pripremi sos pre paljenja vatre.', 'Cut everything and mix the sauce before you light the stove.', 'Нарежь всё и смешай соус до включения огня.'),
      params: [l('mise en place 100%', 'mise en place 100%', 'мизанплас 100%')],
      done: l('Sve činije su poređane po redu kojim idu u vok.', 'All the bowls are lined up in the order they go into the wok.', 'Все миски выстроены в порядке закладки в вок.'),
      why: l('Prženje traje 5 minuta. Nema vremena da se secka dok vok gori. Mise en place iz 1.2, u najstrožoj verziji.', 'The frying takes 5 minutes. There is no time to chop while the wok is blazing. The mise en place from 1.2 in its strictest form.', 'Жарка длится 5 минут. Нет времени резать, пока вок раскалён. Мизанплас из 1.2 в самом строгом виде.'),
      drawing: 'bowlsInOrder',
    },
    {
      text: l('Zagrej vok dok ne zadimi, pa prži piletinu u turama i izvadi.', 'Heat the wok until it smokes, then fry the chicken in batches and lift it out.', 'Разогрей вок до дыма, обжарь курицу партиями и выложи.'),
      params: [l('najjača vatra', 'highest heat', 'максимальный огонь'), l('200 g po turi', '200 g per batch', '200 г за раз'), l('1–2 min', '1–2 min', '1–2 мин')],
      done: l('Piletina je zlatna na ivicama i gotovo pečena.', 'The chicken is golden at the edges and almost cooked.', 'Курица золотистая по краям и почти готова.'),
      why: l('Pun vok se ohladi i hrana se kuva u sopstvenom soku. Isto pravilo kao 4.6, samo jače.', 'An overloaded wok cools down and the food stews in its own juices. The same rule as 4.6, only stricter.', 'Переполненный вок остывает, и еда тушится в своём соку. То же правило, что в 4.6, только строже.'),
      drawing: 'wokToss',
    },
    {
      text: l('Prži beli luk i đumbir 15 sekundi, pa povrće od tvrđeg ka mekšem.', 'Fry the garlic and ginger 15 seconds, then the vegetables from hardest to softest.', 'Обжарь чеснок и имбирь 15 секунд, затем овощи от твёрдых к мягким.'),
      params: [l('brokoli 2 min', 'broccoli 2 min', 'брокколи 2 мин'), l('paprika 1 min', 'pepper 1 min', 'перец 1 мин'), l('luk 30 s', 'onion 30 s', 'лук 30 с')],
      done: l('Povrće je jarko i i dalje krcka.', 'The vegetables are bright and still crunch.', 'Овощи яркие и всё ещё хрустят.'),
      why: l('Redosled po tvrdoći, kao povrće u rerni (13.4), samo u minutima umesto u četvrt sata.', 'Order by hardness, like oven vegetables (13.4), only in minutes rather than quarter-hours.', 'Порядок по твёрдости, как овощи в духовке (13.4), только в минутах, а не в четвертях часа.'),
    },
    {
      text: l('Vrati piletinu, dodaj sos i prevrći 30 sekundi.', 'Return the chicken, add the sauce and toss for 30 seconds.', 'Верни курицу, добавь соус и перемешивай 30 секунд.'),
      params: [l('30 s', '30 s', '30 с')],
      done: l('Sos se zgusnuo u sjaj koji prekriva svaki komad.', 'The sauce has thickened into a glaze coating every piece.', 'Соус загустел в глазурь, покрывающую каждый кусок.'),
      why: l('Gustin u sosu se zgusne za sekunde na ključanju. Ako je pregust, kašika vode.', 'The cornflour in the sauce thickens in seconds at the boil. If too thick, a spoon of water.', 'Крахмал в соусе загущается за секунды при кипении. Слишком густо — ложку воды.'),
    },
  ],
  mistake: {
    title: l('Ceo kilogram mesa i povrća u vok odjednom.', 'A whole kilo of meat and vegetables into the wok at once.', 'Целый килограмм мяса и овощей в вок сразу.'),
    fix: l(
      'Kućni šporet nema snagu restoranskog. Vok se ohladi, pusti vodu i dobiješ kuvano sivo povrće u bari. Male ture, vok vreo pre svake, i strpljenje.',
      'A home stove does not have the power of a restaurant burner. The wok cools, water pools, and you get boiled grey vegetables in a puddle. Small batches, the wok hot before each one, and patience.',
      'У домашней плиты нет мощности ресторанной горелки. Вок остывает, выделяется вода, и получаются варёные серые овощи в луже. Маленькие партии, вок горячий перед каждой, и терпение.',
    ),
  },
  think: {
    question: l('Zašto se piletina prži prva, vadi, pa vraća na kraju?', 'Why is the chicken fried first, taken out and returned at the end?', 'Почему курицу жарят первой, вынимают и возвращают в конце?'),
    options: [
      l('Da se ne prepeče dok se povrće prži', 'So it does not overcook while the vegetables fry', 'Чтобы не пережарилась, пока жарятся овощи'),
      l('Da se ohladi', 'To cool it', 'Чтобы остыла'),
      l('Da upije sos kasnije', 'So it absorbs the sauce later', 'Чтобы позже впитала соус'),
    ],
    answer: 0,
    explain: l(
      'Svaki sastojak dobija tačno svoje vreme na vatri, a sve se spoji u poslednjih 30 sekundi. Isti princip kao garnir u coq au vin (2.10.3).',
      'Every ingredient gets exactly its own time on the heat, and everything comes together in the last 30 seconds. The same principle as the garnish in coq au vin (2.10.3).',
      'Каждый ингредиент получает ровно своё время на огне, а всё соединяется в последние 30 секунд. Тот же принцип, что гарнир в петухе в вине (2.10.3).',
    ),
  },
  recipe: { name: l('Piletina iz voka sa povrćem', 'Chicken and vegetable stir-fry', 'Курица с овощами в воке'), protein: 13, carbs: 6, fat: 5, kcal: 125 },
}

const curry: Lesson = {
  id: '2.14.2',
  title: l('Tajlandski kari', 'Thai curry', 'Тайское карри'),
  goal: l(
    'Skuvaš zeleni kari sa piletinom i izbalansiraš slano, slatko, kiselo i ljuto.',
    'You cook a green chicken curry and balance salty, sweet, sour and hot.',
    'Ты готовишь зелёное карри с курицей и балансируешь солёное, сладкое, кислое и острое.',
  ),
  minutes: 7,
  key: { value: l('4', '4', '4'), label: l('ukusa u ravnoteži', 'tastes in balance', 'вкуса в балансе') },
  need: [
    { item: l('Zelena kari pasta', 'Green curry paste', 'Зелёная паста карри'), qty: l('2–3 kašike', '2–3 tbsp', '2–3 ст. л.') },
    { item: l('Kokosovo mleko, punomasno', 'Full-fat coconut milk', 'Кокосовое молоко жирное'), qty: l('400 ml', '400 ml', '400 мл') },
    { item: l('Pileći bataci bez kosti', 'Boneless chicken thighs', 'Куриные бёдра без кости'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Riblji sos, šećer, limeta', 'Fish sauce, sugar, lime', 'Рыбный соус, сахар, лайм'), qty: l('2 kašike + 1 kašika + 1', '2 tbsp + 1 tbsp + 1', '2 ст. л. + 1 ст. л. + 1') },
    { item: l('Patlidžan, mahune, bosiljak', 'Aubergine, green beans, basil', 'Баклажан, стручковая фасоль, базилик'), qty: l('300 g + šaka', '300 g + a handful', '300 г + горсть') },
  ],
  why: l(
    'Tajlandska kuhinja je ravnoteža iz modula 5 dovedena do kraja: svako jelo je istovremeno slano, slatko, kiselo i ljuto. Kari je najbolja vežba za to.',
    'Thai cooking takes the balance from module 5 all the way: every dish is salty, sweet, sour and hot at once. Curry is the best exercise for it.',
    'Тайская кухня доводит баланс из модуля 5 до конца: каждое блюдо одновременно солёное, сладкое, кислое и острое. Карри — лучшее упражнение для этого.',
  ),
  steps: [
    {
      text: l('Zagrej gornji, gusti deo kokosovog mleka dok ne pusti ulje.', 'Heat the thick top layer of the coconut milk until it splits and releases oil.', 'Нагрей густой верхний слой кокосового молока, пока он не отделит масло.'),
      params: [l('5 kašika', '5 tbsp', '5 ст. л.'), l('3–4 min', '3–4 min', '3–4 мин')],
      done: l('Na površini su kapljice bistrog ulja.', 'Beads of clear oil appear on the surface.', 'На поверхности появились капли прозрачного масла.'),
      why: l('Pasta se prži u tom ulju, a ne kuva u mleku. Tako začini otvore pun miris, kao paprika na masnoći (11.1).', 'The paste fries in that oil rather than boiling in the milk. That is how the spices open fully, like paprika in fat (11.1).', 'Паста жарится в этом масле, а не варится в молоке. Так специи раскрываются полностью, как паприка в жиру (11.1).'),
      drawing: 'curryCrack',
    },
    {
      text: l('Prži kari pastu u tom ulju dok ne zamiriše.', 'Fry the curry paste in that oil until fragrant.', 'Обжарь пасту карри в этом масле до аромата.'),
      params: [l('2 min', '2 min', '2 мин')],
      done: l('Kuhinja miriše na limunsku travu i čili.', 'The kitchen smells of lemongrass and chilli.', 'Кухня пахнет лемонграссом и чили.'),
    },
    {
      text: l('Dodaj piletinu, pa ostatak kokosovog mleka i povrće.', 'Add the chicken, then the rest of the coconut milk and the vegetables.', 'Добавь курицу, затем остальное кокосовое молоко и овощи.'),
      params: [l('krčkanje 10–12 min', 'simmer 10–12 min', 'томить 10–12 мин')],
      done: l('Piletina je gotova, a povrće mekano.', 'The chicken is cooked and the vegetables tender.', 'Курица готова, овощи мягкие.'),
      drawing: 'simmer',
    },
    {
      text: l('Začini ribljim sosom i šećerom, pa probaj.', 'Season with fish sauce and sugar, then taste.', 'Приправь рыбным соусом и сахаром и попробуй.'),
      params: [l('slano: riblji sos', 'salt: fish sauce', 'соль: рыбный соус'), l('slatko: šećer', 'sweet: sugar', 'сладость: сахар')],
      done: l('Kari je slan i blago sladak, ali još nije svetao.', 'The curry is salty and gently sweet, but not yet bright.', 'Карри солёное и слегка сладкое, но ещё не яркое.'),
      why: l('Riblji sos je so tajlandske kuhinje. Ne miriše na ribu u jelu, nego daje dubinu i umami (5.4).', 'Fish sauce is the salt of Thai cooking. It does not taste fishy in the dish; it adds depth and umami (5.4).', 'Рыбный соус — соль тайской кухни. В блюде он не пахнет рыбой, а даёт глубину и умами (5.4).'),
    },
    {
      text: l('Van vatre dodaj sok limete i bosiljak, i probaj ponovo.', 'Off the heat add lime juice and basil, and taste again.', 'Вне огня добавь сок лайма и базилик и снова попробуй.'),
      done: l('Svi četiri ukusa su tu, a nijedan ne viče.', 'All four tastes are there and none of them shouts.', 'Все четыре вкуса на месте, и ни один не кричит.'),
      why: l('Kiselina i bilje na kraju, kao u 5.5. Ako je preljuto, malo šećera i kokosovog mleka ga smiri.', 'Acid and herbs at the end, as in 5.5. If it is too hot, a little sugar and coconut milk calms it.', 'Кислота и травы в конце, как в 5.5. Если слишком остро, немного сахара и кокосового молока смягчат.'),
      drawing: 'lemonDrops',
    },
  ],
  mistake: {
    title: l('Kari pasta ubačena direktno u kokosovo mleko.', 'Curry paste stirred straight into the coconut milk.', 'Паста карри сразу в кокосовое молоко.'),
    fix: l(
      'Začini se kuvaju umesto da se prže i kari ima ukus prašine. Pasta uvek prvo u masnoću, 2 minuta, dok ne zamiriše. Tek onda tečnost.',
      'The spices boil instead of frying and the curry tastes of dust. The paste always goes into fat first, for 2 minutes until fragrant. Only then the liquid.',
      'Специи варятся вместо того, чтобы жариться, и карри отдаёт пылью. Паста всегда сначала в жир, 2 минуты до аромата. Только потом жидкость.',
    ),
  },
  think: {
    question: l('Kari je preslan. Šta dodaješ?', 'The curry is too salty. What do you add?', 'Карри пересолено. Что добавляешь?'),
    options: [
      l('Kokosovo mleko, malo šećera i limete', 'Coconut milk, a little sugar and lime', 'Кокосовое молоко, немного сахара и лайма'),
      l('Još ribljeg sosa', 'More fish sauce', 'Ещё рыбного соуса'),
      l('Vodu', 'Water', 'Воду'),
    ],
    answer: 0,
    explain: l(
      'Slano se ne skida, ali se balansira: masnoća, slatko i kiselo ga prekriju. Voda bi samo razvodnila sve ostale ukuse.',
      'Salt cannot be taken out, but it can be balanced: fat, sweet and sour cover it. Water would only dilute all the other flavours.',
      'Соль не убрать, но её можно сбалансировать: жир, сладость и кислота её перекрывают. Вода только разбавит все остальные вкусы.',
    ),
  },
  recipe: { name: l('Zeleni kari sa piletinom', 'Green chicken curry', 'Зелёное карри с курицей'), protein: 10, carbs: 5, fat: 13, kcal: 175 },
}

const gyoza: Lesson = {
  id: '2.14.3',
  title: l('Gjoze', 'Gyoza', 'Гёдза'),
  goal: l(
    'Napraviš gjoze sa hrskavim dnom i sočnim filom, tehnikom prži, pari, prži.',
    'You make gyoza with crisp bottoms and a juicy filling using fry, steam, fry.',
    'Ты готовишь гёдза с хрустящим дном и сочной начинкой техникой «жарить, парить, жарить».',
  ),
  minutes: 8,
  key: { value: l('2 + 4 + 2', '2 + 4 + 2', '2 + 4 + 2'), label: l('min: prži, pari, prži', 'min: fry, steam, fry', 'мин: жарить, парить, жарить') },
  need: [
    { item: l('Mleveno svinjsko meso', 'Minced pork', 'Свиной фарш'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Kupus, posoljen i isceđen', 'Cabbage, salted and squeezed', 'Капуста, посоленная и отжатая'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Beli luk, đumbir, mladi luk, soja, susamovo ulje', 'Garlic, ginger, spring onion, soy, sesame oil', 'Чеснок, имбирь, зелёный лук, соя, кунжутное масло'), qty: l('—', '—', '—') },
    { item: l('Kupljene kore za gjoze', 'Shop-bought gyoza wrappers', 'Готовые листы для гёдза'), qty: l('30 kom', '30', '30 шт') },
    { item: l('Tiganj sa poklopcem, ulje, voda', 'Pan with a lid, oil, water', 'Сковорода с крышкой, масло, вода'), qty: l('80 ml vode', '80 ml water', '80 мл воды') },
  ],
  why: l(
    'Gjoze su dve tehnike u jednom tiganju: prženje za hrskavo dno i para za mekan vrh i kuvan fil. Ista ideja kao kod pilećeg suprema (2.2.4), samo obrnutim redom.',
    'Gyoza are two techniques in one pan: frying for a crisp base and steam for a soft top and cooked filling. The same idea as the chicken suprême (2.2.4), in reverse.',
    'Гёдза — две техники в одной сковороде: жарка для хрустящего дна и пар для мягкого верха и готовой начинки. Та же идея, что с куриным супремом (2.2.4), только наоборот.',
  ),
  steps: [
    {
      text: l('Izmešaj meso, kupus i začine dok fil ne postane lepljiv.', 'Mix the meat, cabbage and seasonings until the filling turns sticky.', 'Перемешай мясо, капусту и специи, пока начинка не станет липкой.'),
      params: [l('2 min', '2 min', '2 мин')],
      done: l('Fil se drži u loptu i rasteže se.', 'The filling holds in a ball and stretches.', 'Начинка держится шариком и тянется.'),
      why: l('Isto kao ćevapi (14.3): mešanje sa solju pravi lepak od proteina, pa fil ostane sočan i u komadu.', 'The same as ćevapi (14.3): mixing with salt makes a protein glue, so the filling stays juicy and in one piece.', 'Как чевапи (14.3): перемешивание с солью делает белковый клей, и начинка остаётся сочной и цельной.'),
    },
    {
      text: l('Stavi kašičicu fila na koru, navlaži ivicu i nabori jednu stranu.', 'Put a teaspoon of filling on a wrapper, wet the edge and pleat one side.', 'Положи чайную ложку начинки на лист, смочи край и защипни одну сторону складками.'),
      params: [l('5–6 nabora', '5–6 pleats', '5–6 складок')],
      done: l('Gjoza ima ravno dno i polumesec od nabora, zatvorena bez vazduha.', 'The gyoza has a flat base and a crescent of pleats, sealed with no air.', 'У гёдза плоское дно и полумесяц складок, закрыта без воздуха.'),
      why: l('Ravno dno sedi na tiganju i postaje hrskavo. Vazduh unutra pravi pucanje, kao kod ravioli (2.11.3).', 'The flat base sits on the pan and turns crisp. Air inside makes them burst, as with ravioli (2.11.3).', 'Плоское дно стоит на сковороде и становится хрустящим. Воздух внутри разрывает их, как равиоли (2.11.3).'),
      drawing: 'gyozaPleat',
    },
    {
      text: l('Prži gjoze na ulju, dnom nadole, dok dno ne porumeni.', 'Fry the gyoza in oil, flat side down, until the bottoms are golden.', 'Обжарь гёдза на масле дном вниз до золотистого цвета.'),
      params: [l('srednje jaka vatra', 'medium-high heat', 'огонь выше среднего'), l('2 min', '2 min', '2 мин')],
      done: l('Dno je zlatno, a gjoze se ne pomeraju.', 'The bottoms are golden and the gyoza do not shift.', 'Дно золотистое, гёдза не сдвигаются.'),
    },
    {
      text: l('Dolij vodu i odmah poklopi.', 'Pour in the water and cover at once.', 'Влей воду и сразу накрой крышкой.'),
      params: [l('80 ml', '80 ml', '80 мл'), l('4–5 min', '4–5 min', '4–5 мин')],
      done: l('Voda je skoro isparila, a kore su providne.', 'The water has almost evaporated and the wrappers are translucent.', 'Вода почти испарилась, листы стали прозрачными.'),
      why: l('Para skuva fil i omekša gornji deo kore. Fil od mlevenog mesa mora do 71°C (14.3).', 'The steam cooks the filling and softens the top of the wrapper. Minced-meat filling must reach 71°C (14.3).', 'Пар готовит начинку и смягчает верх листа. Начинка из фарша должна дойти до 71°C (14.3).'),
      drawing: 'lidOn',
    },
    {
      text: l('Otklopi i prži dok voda potpuno ne ispari i dno ponovo ne zakrcka.', 'Uncover and fry until the water is completely gone and the bottoms crisp again.', 'Сними крышку и жарь, пока вода полностью не испарится и дно снова не захрустит.'),
      params: [l('1–2 min', '1–2 min', '1–2 мин'), l('soja + pirinčano sirće 1 : 1', 'soy + rice vinegar 1 : 1', 'соя + рисовый уксус 1 : 1')],
      done: l('Gjoze cvrče, a dno je tamnozlatno i krcka.', 'The gyoza sizzle and the bottoms are deep golden and crisp.', 'Гёдза шкворчат, дно тёмно-золотистое и хрустит.'),
      why: l('Kad voda ispari, ulje ponovo prži dno. Zvuk se promeni iz šuštanja u cvrčanje: to je znak.', 'Once the water is gone, the oil fries the bottoms again. The sound changes from hissing to sizzling: that is your cue.', 'Когда вода испарится, масло снова жарит дно. Звук меняется с шипения на шкворчание — это сигнал.'),
      drawing: 'gyozaPan',
    },
  ],
  mistake: {
    title: l('Gjoze izvađene čim je voda nestala.', 'Gyoza taken out as soon as the water is gone.', 'Гёдза снимают, как только ушла вода.'),
    fix: l(
      'Dno je mekano od pare i lepi se za tanjir. Posle pare uvek još minut-dva prženja, dok dno ne zakrcka ponovo. To je treći korak koji svi preskoče.',
      'The bottoms are soft from the steam and stick to the plate. After the steam, always another minute or two of frying until they crisp again. That is the third step everyone skips.',
      'Дно мягкое от пара и липнет к тарелке. После пара всегда ещё минута-две жарки, пока дно снова не захрустит. Это третий шаг, который все пропускают.',
    ),
  },
  think: {
    question: l('Zašto se kupus soli i cedi pre mešanja u fil?', 'Why is the cabbage salted and squeezed before it goes into the filling?', 'Почему капусту солят и отжимают перед добавлением в начинку?'),
    options: [
      l('Da ne pusti vodu u gjozi i ne raskvasi koru', 'So it does not release water inside the gyoza and soak the wrapper', 'Чтобы не выделила воду внутри гёдза и не размочила лист'),
      l('Da bude slaniji', 'To make it saltier', 'Чтобы была солонее'),
      l('Da promeni boju', 'To change its colour', 'Чтобы сменить цвет'),
    ],
    answer: 0,
    explain: l(
      'Ista tehnika kao krastavac za cacik (2.12.4). So izvuče vodu pre kuvanja, a ne u tiganju, gde bi probila koru.',
      'The same technique as the cucumber for tzatziki (2.12.4). Salt draws the water out before cooking, not in the pan, where it would burst the wrapper.',
      'Та же техника, что с огурцом для цацики (2.12.4). Соль вытягивает воду до готовки, а не на сковороде, где она прорвала бы лист.',
    ),
  },
  recipe: { name: l('Gjoze sa svinjetinom', 'Pork gyoza', 'Гёдза со свининой'), protein: 11, carbs: 22, fat: 9, kcal: 215 },
}

const ramen: Lesson = {
  id: '2.14.4',
  title: l('Ramen čorba', 'Ramen broth', 'Бульон для рамена'),
  goal: l(
    'Složiš činiju šoju ramena od fonda, tare, rezanaca i marinisanog jajeta.',
    'You build a bowl of shoyu ramen from stock, tare, noodles and a marinated egg.',
    'Ты собираешь миску сёю-рамена из бульона, таре, лапши и маринованного яйца.',
  ),
  minutes: 8,
  key: { value: l('6:30 min', '6:30 min', '6:30 мин'), label: l('jaje', 'egg', 'яйцо') },
  need: [
    { item: l('Pileći fond (8.1), vreo', 'Chicken stock (8.1), hot', 'Куриный бульон (8.1), горячий'), qty: l('1.4 l', '1.4 l', '1,4 л') },
    { item: l('Tare: soja sos, mirin, sake ili voda', 'Tare: soy sauce, mirin, sake or water', 'Таре: соевый соус, мирин, саке или вода'), qty: l('100 + 50 + 50 ml', '100 + 50 + 50 ml', '100 + 50 + 50 мл') },
    { item: l('Jaja', 'Eggs', 'Яйца'), qty: l('4 kom', '4', '4 шт') },
    { item: l('Ramen rezanci', 'Ramen noodles', 'Лапша для рамена'), qty: l('4 × 100 g', '4 × 100 g', '4 × 100 г') },
    { item: l('Mladi luk, susamovo ulje, pileće meso ili svinjski vrat', 'Spring onion, sesame oil, chicken or pork neck', 'Зелёный лук, кунжутное масло, курица или свиная шея'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Ramen je lekcija iz slojeva: fond daje telo, tare daje so i ukus, ulje miris, a dodaci teksturu. Svaki sloj se pravi posebno i spaja u činiji, za minut.',
    'Ramen is a lesson in layers: the stock gives body, the tare salt and flavour, the oil aroma, and the toppings texture. Each layer is made separately and they meet in the bowl in a minute.',
    'Рамен — урок слоёв: бульон даёт тело, таре — соль и вкус, масло — аромат, а добавки — текстуру. Каждый слой делают отдельно, и они соединяются в миске за минуту.',
  ),
  steps: [
    {
      text: l('Dan ranije skuvaj jaja tačno 6 i po minuta, pa u ledenu vodu.', 'The day before, boil the eggs for exactly 6 and a half minutes, then into ice water.', 'Накануне свари яйца ровно 6,5 минут и опусти в ледяную воду.'),
      params: [l('6:30 min', '6:30 min', '6:30 мин'), l('ledena voda 5 min', 'ice water 5 min', 'ледяная вода 5 мин')],
      done: l('Belance je čvrsto, a žumance gusto i tečno u sredini.', 'The white is set and the yolk thick and jammy in the middle.', 'Белок плотный, желток густой и жидкий в середине.'),
      why: l('Tačno vreme iz 6.1. Ledena voda zaustavi kuvanje u sekundi, kao kod povrća (4.2).', 'Exact timing from 6.1. Ice water stops the cooking in a second, as with vegetables (4.2).', 'Точное время из 6.1. Ледяная вода мгновенно останавливает варку, как с овощами (4.2).'),
    },
    {
      text: l('Oljuštena jaja potopi u tare razblažen vodom preko noći.', 'Soak the peeled eggs in tare diluted with water overnight.', 'Замочи очищенные яйца в таре, разбавленном водой, на ночь.'),
      params: [l('soja : mirin : voda = 2 : 1 : 2', 'soy : mirin : water = 2 : 1 : 2', 'соя : мирин : вода = 2 : 1 : 2'), l('8–12 h', '8–12 h', '8–12 ч')],
      done: l('Jaja su smeđa spolja, a žumance zlatno.', 'The eggs are brown outside and the yolks golden.', 'Яйца коричневые снаружи, желток золотой.'),
      drawing: 'ajitama',
    },
    {
      text: l('Napravi tare: zagrej soju, mirin i sake da ispari alkohol.', 'Make the tare: warm the soy, mirin and sake to cook off the alcohol.', 'Сделай таре: прогрей сою, мирин и саке, чтобы испарился спирт.'),
      params: [l('2 min krčkanja', '2 min simmer', '2 мин томления')],
      done: l('Tare je tamno, slano i sladak na kraju.', 'The tare is dark, salty and sweet on the finish.', 'Таре тёмный, солёный и сладкий в послевкусии.'),
      why: l('Fond se ne soli (8.1). So u ramenu dolazi iz tare, odmerene u svaku činiju posebno.', 'Stock is not salted (8.1). The salt in ramen comes from the tare, measured into each bowl separately.', 'Бульон не солят (8.1). Соль в рамене приходит из таре, отмеренного в каждую миску отдельно.'),
    },
    {
      text: l('Skuvaj rezance posebno, kratko.', 'Cook the noodles separately and briefly.', 'Свари лапшу отдельно и коротко.'),
      params: [l('po pakovanju −30 s', 'pack time −30 s', 'время с упаковки −30 с')],
      done: l('Rezanci su elastični i ne lepe se.', 'The noodles are springy and not sticky.', 'Лапша упругая и не слипается.'),
      why: l('U vreloj supi nastave da se kuvaju. Kuvani u fondu bi ga zamutili, kao kod goveđe supe (8.4).', 'They keep cooking in the hot broth. Cooked in the stock, they would cloud it, as with the beef soup (8.4).', 'Она доваривается в горячем бульоне. Сваренная в бульоне, замутила бы его, как говяжий суп (8.4).'),
      drawing: 'pastaWater',
    },
    {
      text: l('U toplu činiju: tare, vreo fond, rezanci, pa dodaci.', 'Into a warm bowl: tare, hot stock, noodles, then toppings.', 'В тёплую миску: таре, горячий бульон, лапша, затем добавки.'),
      params: [l('30 ml tare + 350 ml fonda', '30 ml tare + 350 ml stock', '30 мл таре + 350 мл бульона'), l('pola jajeta, luk, meso, kap ulja', 'half an egg, onion, meat, a drop of oil', 'половина яйца, лук, мясо, капля масла')],
      done: l('Supa je vrela, slana taman koliko treba, a jaje je na vrhu.', 'The broth is piping hot, salted just right, with the egg on top.', 'Бульон горячий, посолен в меру, яйцо сверху.'),
      why: l('Redosled je važan: tare na dno da se pomeša sa fondom, rezanci posle da se ne lepe, dodaci gore da se vide.', 'The order matters: tare at the bottom to mix with the stock, noodles next so they do not stick, toppings on top to be seen.', 'Порядок важен: таре на дно, чтобы смешалось с бульоном, лапша потом, чтобы не слиплась, добавки сверху, чтобы было видно.'),
      drawing: 'ramenBowl',
    },
  ],
  mistake: {
    title: l('Fond posoljen u loncu, pa tare preko.', 'The stock salted in the pot, then tare on top.', 'Бульон посолен в кастрюле, а сверху ещё таре.'),
    fix: l(
      'Ramen postane preslan i ne može da se popravi. So dolazi samo iz tare, 30 ml po činiji. Probaj prvu činiju i koriguj tare, ne fond.',
      'The ramen turns too salty and cannot be fixed. Salt comes only from the tare, 30 ml per bowl. Taste the first bowl and adjust the tare, not the stock.',
      'Рамен становится пересоленным, и исправить нельзя. Соль только из таре, 30 мл на миску. Попробуй первую миску и поправь таре, а не бульон.',
    ),
  },
  think: {
    question: l('Zašto se tare drži odvojeno od fonda?', 'Why is the tare kept separate from the stock?', 'Почему таре держат отдельно от бульона?'),
    options: [
      l('Svaka činija dobije tačnu so, a fond ostane za druga jela', 'Each bowl gets exact seasoning and the stock stays usable for other dishes', 'Каждая миска получает точную соль, а бульон остаётся для других блюд'),
      l('Tare se kvari u fondu', 'Tare spoils in stock', 'Таре портится в бульоне'),
      l('Da fond bude bistriji', 'To keep the stock clearer', 'Чтобы бульон был прозрачнее'),
    ],
    answer: 0,
    explain: l(
      'Isti princip kao fond bez soli iz 8.1. Neslan fond ide u rizoto, sos ili ramen, a so se dodaje tek u jelu koje se služi.',
      'The same principle as the unsalted stock in 8.1. Unsalted stock can go into risotto, sauce or ramen, and salt is added only in the dish being served.',
      'Тот же принцип, что несолёный бульон из 8.1. Несолёный бульон идёт в ризотто, соус или рамен, а соль добавляют только в подаваемое блюдо.',
    ),
  },
  recipe: { name: l('Šoju ramen sa jajetom', 'Shoyu ramen with egg', 'Сёю-рамен с яйцом'), protein: 7, carbs: 13, fat: 3, kcal: 105 },
}

export const asiaLessons: Lesson[] = [wok, curry, gyoza, ramen]
