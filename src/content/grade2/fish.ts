import { l, type Lesson } from '../types'

// Grade 2 · Module 4 · Fish and seafood. Freshness first, then the knife follows the bones, as with meat.
// Fish is done at 55°C at the centre, the number from 7.9; seafood is either very fast or very slow.

const wholeFish: Lesson = {
  id: '2.4.1',
  title: l('Cela riba: krljušt, utroba, škrge', 'Whole fish: scales, guts, gills', 'Целая рыба: чешуя, потроха, жабры'),
  goal: l(
    'Prepoznaš svežu ribu i očistiš je za pečenje: bez krljušti, utrobe, škrga i krvi.',
    'You recognise a fresh fish and clean it for cooking: no scales, guts, gills or blood.',
    'Ты узнаёшь свежую рыбу и чистишь её для готовки: без чешуи, потрохов, жабр и крови.',
  ),
  minutes: 7,
  key: { value: l('4', '4', '4'), label: l('znaka svežine', 'signs of freshness', 'признака свежести') },
  need: [
    { item: l('Cela riba: brancin, orada ili pastrmka', 'Whole fish: sea bass, bream or trout', 'Целая рыба: сибас, дорадо или форель'), qty: l('2 × 400–600 g', '2 × 400–600 g', '2 × 400–600 г') },
    { item: l('Strugač za krljušt ili leđa noža', 'Fish scaler or the back of a knife', 'Рыбочистка или обух ножа'), qty: l('1', '1', '1') },
    { item: l('Kuhinjske makaze, mali nož', 'Kitchen scissors, small knife', 'Кухонные ножницы, маленький нож'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Velika kesa ili sudopera', 'A large bag or the sink', 'Большой пакет или раковина'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Riba se kvari brže od mesa, a kupljena cela je jedina riba kojoj vidiš oči i škrge. Čišćenje je pet minuta posla i riba je duplo jeftinija od fileta.',
    'Fish spoils faster than meat, and a whole fish is the only one whose eyes and gills you can see. Cleaning takes five minutes and the fish costs half the price of fillets.',
    'Рыба портится быстрее мяса, и только у целой видно глаза и жабры. Чистка занимает пять минут, а рыба вдвое дешевле филе.',
  ),
  steps: [
    {
      text: l('Proveri svežinu pre kupovine.', 'Check freshness before you buy.', 'Проверь свежесть до покупки.'),
      params: [l('oči bistre i ispupčene', 'eyes clear and bulging', 'глаза прозрачные и выпуклые'), l('škrge crvene', 'gills red', 'жабры красные'), l('meso se vraća pod prstom', 'flesh springs back', 'мясо пружинит'), l('miriše na more', 'smells of the sea', 'пахнет морем')],
      done: l('Sva četiri znaka su tu.', 'All four signs are there.', 'Все четыре признака на месте.'),
      why: l('Mutne, upale oči i braon škrge znače ribu od pre nekoliko dana. Miris "na ribu" je već miris kvarenja.', 'Cloudy, sunken eyes and brown gills mean a fish several days old. A "fishy" smell is already the smell of spoiling.', 'Мутные впалые глаза и коричневые жабры — рыба нескольких дней. Запах «рыбы» — это уже запах порчи.'),
      drawing: 'fishFresh',
    },
    {
      text: l('Skini krljušt od repa ka glavi, u kesi ili pod vodom.', 'Scale from tail to head, inside a bag or under water.', 'Сними чешую от хвоста к голове, в пакете или под водой.'),
      params: [l('kratki potezi', 'short strokes', 'короткие движения')],
      done: l('Koža je glatka pod prstom u oba pravca.', 'The skin is smooth under your finger in both directions.', 'Кожа гладкая под пальцем в обоих направлениях.'),
      why: l('Krljušt leti po celoj kuhinji. Kesa ili voda je drže na jednom mestu.', 'Scales fly all over the kitchen. A bag or water keeps them in one place.', 'Чешуя летит по всей кухне. Пакет или вода удерживают её в одном месте.'),
      drawing: 'scaleFish',
    },
    {
      text: l('Raseci stomak od analnog otvora do glave i izvadi utrobu.', 'Slit the belly from the vent to the head and pull out the guts.', 'Разрежь брюшко от анального отверстия до головы и вынь потроха.'),
      params: [l('vrh noža plitko', 'knife tip shallow', 'кончик ножа неглубоко')],
      done: l('Stomak je prazan, a žuč nije pukla.', 'The belly is empty and the gall bladder has not burst.', 'Брюшко пустое, желчь не лопнула.'),
      why: l('Plitak rez ne buši creva i žuč. Pukla žuč čini meso gorkim.', 'A shallow cut does not pierce the guts or the gall bladder. A burst gall bladder makes the flesh bitter.', 'Неглубокий разрез не протыкает кишки и желчь. Лопнувшая желчь делает мясо горьким.'),
    },
    {
      text: l('Makazama iseci škrge na oba kraja i izvadi ih.', 'Snip the gills at both ends with scissors and pull them out.', 'Ножницами отрежь жабры с обоих концов и вынь.'),
      done: l('Ispod poklopca glave nema više crvenih škrga.', 'No red gills are left under the gill covers.', 'Под жаберными крышками нет красных жабр.'),
      why: l('Škrge filtriraju vodu i prve se kvare. Ostavljene, daju gorak ukus ribi i fondu (8.3).', 'Gills filter the water and spoil first. Left in, they make the fish and the stock (8.3) bitter.', 'Жабры фильтруют воду и портятся первыми. Оставленные, дают горечь рыбе и бульону (8.3).'),
    },
    {
      text: l('Palcem izgrebi tamnu krv uz kičmu, isperi i osuši.', 'Scrape the dark blood line along the spine with your thumb, rinse and dry.', 'Большим пальцем выскреби тёмную кровь вдоль хребта, промой и обсуши.'),
      done: l('Unutrašnjost je bela i čista, a koža suva.', 'The inside is white and clean and the skin dry.', 'Внутри чисто и бело, кожа сухая.'),
      why: l('Ovde je ispiranje u redu, za razliku od piletine (2.2.1): uklanja krv, a ne bakterije sa površine.', 'Rinsing is fine here, unlike chicken (2.2.1): it removes blood, not surface bacteria.', 'Здесь промывать можно, в отличие от курицы (2.2.1): так удаляют кровь, а не бактерии.'),
    },
  ],
  mistake: {
    title: l('Riba čuvana u kesi na polici frižidera dva dana.', 'Fish kept in a bag on a fridge shelf for two days.', 'Рыба хранится в пакете на полке холодильника два дня.'),
    fix: l(
      'Riba se kupuje isti dan kad se sprema. Ako mora da čeka, očisti je, stavi na tanjir preko leda, pokrij i drži u najhladnijem delu frižidera, najviše dan.',
      'Fish is bought the day it is cooked. If it must wait, clean it, set it on a plate over ice, cover it and keep it in the coldest part of the fridge, one day at most.',
      'Рыбу покупают в день готовки. Если нужно подождать, почисти её, положи на тарелку со льдом, накрой и держи в самой холодной части холодильника, не больше суток.',
    ),
  },
  think: {
    question: l('Riba ima bistre oči, ali braon škrge. Kupuješ li je?', 'The fish has clear eyes but brown gills. Do you buy it?', 'У рыбы прозрачные глаза, но коричневые жабры. Покупаешь?'),
    options: [
      l('Ne, škrge pokazuju svežinu pouzdanije', 'No, the gills show freshness more reliably', 'Нет, жабры точнее показывают свежесть'),
      l('Da, oči su dovoljne', 'Yes, the eyes are enough', 'Да, глаз достаточно'),
      l('Da, ako je jeftina', 'Yes, if it is cheap', 'Да, если дешёвая'),
    ],
    answer: 0,
    explain: l(
      'Oči mogu da se održe na ledu, a škrge ne lažu. Sva četiri znaka moraju da budu tu, ne tri od četiri.',
      'Eyes can be kept bright on ice, but gills do not lie. All four signs must be there, not three out of four.',
      'Глаза на льду могут выглядеть свежими, а жабры не врут. Нужны все четыре признака, а не три из четырёх.',
    ),
  },
}

const roundFillet: Lesson = {
  id: '2.4.2',
  title: l('Filetiranje okrugle ribe', 'Filleting a round fish', 'Филетирование круглой рыбы'),
  goal: l(
    'Izvadiš dva cela fileta iz brancina, a na kičmi ne ostane meso.',
    'You take two whole fillets off a sea bass, leaving no flesh on the spine.',
    'Ты снимаешь два целых филе с сибаса, не оставляя мяса на хребте.',
  ),
  minutes: 7,
  key: { value: l('2', '2', '2'), label: l('fileta', 'fillets', 'филе') },
  need: [
    { item: l('Očišćen brancin (2.4.1)', 'Cleaned sea bass (2.4.1)', 'Очищенный сибас (2.4.1)'), qty: l('600 g', '600 g', '600 г') },
    { item: l('Tanak, savitljiv nož za filetiranje', 'Thin, flexible filleting knife', 'Тонкий гибкий филейный нож'), qty: l('1', '1', '1') },
    { item: l('Pinceta za koščice', 'Fish-bone tweezers', 'Пинцет для косточек'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Svež file od ribe koju si sam očistio je bolji i jeftiniji od svakog kupljenog. A glava i kičma idu u fond.',
    'A fillet from a fish you cleaned yourself is fresher and cheaper than any you can buy. And the head and spine go into stock.',
    'Филе рыбы, которую ты сам почистил, свежее и дешевле любого купленного. А голова и хребет идут в бульон.',
  ),
  steps: [
    {
      text: l('Zaseci iza glave i peraja, koso, do kičme.', 'Cut behind the head and fin, at an angle, down to the spine.', 'Надрежь за головой и плавником, наискосок, до хребта.'),
      done: l('Nož je stao na kičmi, glava nije odsečena.', 'The knife has stopped at the spine; the head is not cut off.', 'Нож остановился на хребте, голова не отрезана.'),
      drawing: 'filletRound',
    },
    {
      text: l('Okreni nož ravno i vodi ga po kičmi ka repu.', 'Turn the knife flat and run it along the spine to the tail.', 'Поверни нож плашмя и веди по хребту к хвосту.'),
      params: [l('jedan dug potez', 'one long stroke', 'одно длинное движение'), l('sečivo blago ka kostima', 'edge angled slightly to the bones', 'лезвие чуть к костям')],
      done: l('Gornji file se odvaja u jednom komadu.', 'The top fillet comes away in one piece.', 'Верхнее филе отходит одним куском.'),
      why: l('Isto pravilo kao kod mesa: nož prati kost. Čuješ ga kako kliza preko kostiju, kao preko češlja.', 'The same rule as with meat: the knife follows the bone. You hear it slide over the bones, like over a comb.', 'То же правило, что с мясом: нож идёт за костью. Слышно, как он скользит по костям, как по гребню.'),
    },
    {
      text: l('Okreni ribu i ponovi sa druge strane.', 'Turn the fish over and repeat on the other side.', 'Переверни рыбу и повтори с другой стороны.'),
      done: l('Imaš dva fileta i čist skelet sa glavom.', 'You have two fillets and a clean skeleton with the head.', 'У тебя два филе и чистый скелет с головой.'),
    },
    {
      text: l('Odseci tanke stomačne kosti sa svakog fileta.', 'Trim the thin belly bones off each fillet.', 'Срежь тонкие брюшные кости с каждого филе.'),
      params: [l('tanak sloj', 'a thin slice', 'тонким слоем')],
      done: l('Ivica stomaka je čista, bez kostiju.', 'The belly edge is clean, with no bones.', 'Край брюшка чистый, без костей.'),
      drawing: 'pinBones',
    },
    {
      text: l('Izvadi koščice pincetom, kao u 7.4.', 'Pull the pin bones with tweezers, as in 7.4.', 'Удали косточки пинцетом, как в 7.4.'),
      params: [l('ka glavi, pod uglom', 'towards the head, at an angle', 'к голове, под углом')],
      done: l('Prst prelazi preko fileta bez ijedne koščice.', 'A finger runs along the fillet without meeting a single bone.', 'Палец проходит по филе, не встречая ни одной косточки.'),
      why: l('Glava i kičma bez škrga su riblji fond od 20 minuta (8.3).', 'Head and spine without gills make a 20-minute fish stock (8.3).', 'Голова и хребет без жабр — рыбный бульон за 20 минут (8.3).'),
    },
  ],
  mistake: {
    title: l('Testerisanje fileta kratkim potezima.', 'Sawing the fillet off with short strokes.', 'Пилить филе короткими движениями.'),
    fix: l(
      'File postane stepenast i iskidan, a meso ostane na kostima. Jedan dug, miran potez celom dužinom sečiva, uz kosti. Nož mora da bude oštar (2.2).',
      'The fillet ends up ragged and stepped, and flesh stays on the bones. One long, steady stroke with the full length of the blade, along the bones. The knife must be sharp (2.2).',
      'Филе получается рваным и ступенчатым, а мясо остаётся на костях. Одно длинное ровное движение всей длиной лезвия вдоль костей. Нож должен быть острым (2.2).',
    ),
  },
  think: {
    question: l('Zašto je nož za filetiranje tanak i savitljiv?', 'Why is a filleting knife thin and flexible?', 'Почему филейный нож тонкий и гибкий?'),
    options: [
      l('Savija se uz kosti i prati njihov oblik', 'It bends against the bones and follows their shape', 'Он изгибается вдоль костей и следует их форме'),
      l('Lakše se oštri', 'It is easier to sharpen', 'Его легче точить'),
      l('Seče kroz kosti', 'It cuts through bones', 'Он режет кости'),
    ],
    answer: 0,
    explain: l(
      'Riblji skelet nije ravan. Savitljivo sečivo naleže na kosti i skida meso do poslednjeg grama, a kroz kost ne seče.',
      'A fish skeleton is not flat. A flexible blade lies against the bones and takes the flesh to the last gram, without cutting through bone.',
      'Рыбий скелет не плоский. Гибкое лезвие прилегает к костям и снимает мясо до последнего грамма, не разрезая кость.',
    ),
  },
}

const flatFish: Lesson = {
  id: '2.4.3',
  title: l('Pljosnata riba', 'Flat fish', 'Плоская рыба'),
  goal: l(
    'Iz pljosnate ribe izvadiš četiri fileta i skineš im kožu.',
    'You take four fillets from a flat fish and skin them.',
    'Ты снимаешь с плоской рыбы четыре филе и снимаешь с них кожу.',
  ),
  minutes: 6,
  key: { value: l('4', '4', '4'), label: l('fileta', 'fillets', 'филе') },
  need: [
    { item: l('List ili iverak', 'Sole or plaice', 'Морской язык или камбала'), qty: l('500–700 g', '500–700 g', '500–700 г') },
    { item: l('Nož za filetiranje', 'Filleting knife', 'Филейный нож'), qty: l('1', '1', '1') },
    { item: l('Kuhinjske makaze', 'Kitchen scissors', 'Кухонные ножницы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Pljosnata riba nema kičmu na leđima nego u sredini, pa daje četiri tanka fileta umesto dva. Njeno meso je najnežnije u moru.',
    'A flat fish has its spine down the middle rather than along the back, so it gives four thin fillets instead of two. Its flesh is the most delicate in the sea.',
    'У плоской рыбы хребет посередине, а не по спине, поэтому она даёт четыре тонких филе вместо двух. Её мясо самое нежное в море.',
  ),
  steps: [
    {
      text: l('Makazama odseci peraje oko ivica.', 'Trim the fins around the edges with scissors.', 'Ножницами обрежь плавники по краям.'),
      done: l('Ivice ribe su čiste i ravne.', 'The edges of the fish are clean and straight.', 'Края рыбы чистые и ровные.'),
    },
    {
      text: l('Zaseci po sredini, duž kičme, od glave do repa.', 'Cut down the centre line, along the spine, from head to tail.', 'Надрежь по центральной линии вдоль хребта от головы до хвоста.'),
      params: [l('do kosti', 'down to the bone', 'до кости')],
      done: l('Linija kičme je otvorena celom dužinom.', 'The spine line is open its full length.', 'Линия хребта открыта по всей длине.'),
      drawing: 'filletFlat',
    },
    {
      text: l('Nož položi ravno i vodi ga od sredine ka ivici, preko kostiju.', 'Lay the knife flat and work from the centre out to the edge, over the bones.', 'Положи нож плашмя и веди от центра к краю по костям.'),
      params: [l('2 fileta gore', '2 fillets on top', '2 филе сверху')],
      done: l('Dva gornja fileta su skinuta, kosti su čiste.', 'The two top fillets are off and the bones are clean.', 'Два верхних филе сняты, кости чистые.'),
      why: l('Kod pljosnate ribe kosti su ravna ploča. Nož leži na njoj kao na stolu.', 'In a flat fish the bones form a flat plate. The knife lies on it as on a table.', 'У плоской рыбы кости образуют плоскую пластину. Нож лежит на ней, как на столе.'),
    },
    {
      text: l('Okreni ribu i skini dva donja fileta.', 'Turn the fish over and take off the two bottom fillets.', 'Переверни рыбу и сними два нижних филе.'),
      done: l('Imaš četiri fileta i čist kostur.', 'You have four fillets and a clean frame.', 'У тебя четыре филе и чистый скелет.'),
    },
    {
      text: l('Skini kožu sa svakog fileta, kao u 7.4.', 'Skin each fillet, as in 7.4.', 'Сними кожу с каждого филе, как в 7.4.'),
      params: [l('nož skoro položen', 'knife almost flat', 'нож почти плашмя'), l('pomeraš kožu', 'move the skin', 'двигаешь кожу')],
      done: l('Fileti su beli i bez kože, a koža je cela.', 'The fillets are white and skinless, and the skin is in one piece.', 'Филе белые и без кожи, кожа целая.'),
      drawing: 'skinFish',
    },
  ],
  mistake: {
    title: l('Filetiranje pljosnate ribe kao brancina, sa leđa.', 'Filleting a flat fish like a sea bass, from the back.', 'Филетировать плоскую рыбу как сибаса, со спины.'),
    fix: l(
      'Pljosnata riba nema "leđa" kao okrugla. Uvek kreni od sredine, od kičme, i idi ka ivici. Tako dobiješ četiri cela fileta umesto iskidanih komada.',
      'A flat fish has no back like a round one. Always start in the middle, at the spine, and work out to the edge. That gives four whole fillets instead of torn pieces.',
      'У плоской рыбы нет «спины», как у круглой. Всегда начинай от середины, от хребта, и веди к краю. Так получаются четыре целых филе, а не рваные куски.',
    ),
  },
  think: {
    question: l('Kako se peku tanki fileti lista?', 'How are thin sole fillets cooked?', 'Как готовят тонкие филе морского языка?'),
    options: [
      l('Kratko, 1–2 minuta po strani, ili u sosu kao meunière (2.10.2)', 'Briefly, 1–2 minutes a side, or in sauce as meunière (2.10.2)', 'Коротко, 1–2 минуты на сторону, или в соусе, как мёньер (2.10.2)'),
      l('Na roštilju 10 minuta', 'On the grill for 10 minutes', 'На гриле 10 минут'),
      l('Braziraju se sat vremena', 'Braised for an hour', 'Тушат час'),
    ],
    answer: 0,
    explain: l(
      'File od 5 mm stigne do 55°C za minut. Sve duže od toga ga raspada. Pljosnata riba je za brz tiganj, ne za žar.',
      'A 5 mm fillet reaches 55°C in a minute. Anything longer breaks it apart. Flat fish is for a quick pan, not the grill.',
      'Филе толщиной 5 мм доходит до 55°C за минуту. Дольше — и оно распадается. Плоская рыба — для быстрой сковороды, а не для гриля.',
    ),
  },
}

const squid: Lesson = {
  id: '2.4.4',
  title: l('Lignje i hobotnica', 'Squid and octopus', 'Кальмары и осьминог'),
  goal: l(
    'Očistiš lignje i ispečeš ih mekane, a hobotnicu skuvaš da se seče kašikom.',
    'You clean squid and cook it tender, and cook octopus until a spoon cuts it.',
    'Ты чистишь кальмаров и готовишь их мягкими, а осьминога варишь, пока его не режет ложка.',
  ),
  minutes: 7,
  key: { value: l('2 min ili 45 min', '2 min or 45 min', '2 мин или 45 мин'), label: l('ništa između', 'nothing in between', 'ничего между') },
  need: [
    { item: l('Sveže lignje', 'Fresh squid', 'Свежие кальмары'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Hobotnica, prethodno zamrznuta', 'Octopus, frozen beforehand', 'Осьминог, предварительно замороженный'), qty: l('1–1.5 kg', '1–1.5 kg', '1–1,5 кг') },
    { item: l('Lovor, biber u zrnu, limun', 'Bay, peppercorns, lemon', 'Лавр, перец горошком, лимон'), qty: l('—', '—', '—') },
    { item: l('Veliki lonac, tiganj', 'Large pot, pan', 'Большая кастрюля, сковорода'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Lignja i hobotnica su ili mekane ili gumene. Protein se steže posle dva minuta, a opusti tek posle 40. Ko peče "malo duže", dobija gumu.',
    'Squid and octopus are either tender or rubbery. The protein tightens after two minutes and relaxes only after 40. Cook "a bit longer" and you get rubber.',
    'Кальмар и осьминог либо мягкие, либо резиновые. Белок сжимается через две минуты и расслабляется только через 40. Готовишь «чуть дольше» — получаешь резину.',
  ),
  steps: [
    {
      text: l('Izvuci glavu iz tela lignje i izvadi prozirnu kost.', 'Pull the head out of the squid body and remove the clear quill.', 'Вытяни голову из тушки кальмара и удали прозрачную хорду.'),
      done: l('Telo je prazna cev, a kost je cela.', 'The body is an empty tube and the quill is whole.', 'Тушка — пустая трубка, хорда целая.'),
      drawing: 'squidClean',
    },
    {
      text: l('Oljušti tamnu kožicu i odseci krake ispod očiju.', 'Peel off the dark skin and cut the tentacles off below the eyes.', 'Сними тёмную плёнку и отрежь щупальца ниже глаз.'),
      params: [l('izvadi kljun iz sredine krakova', 'pop out the beak from the centre of the tentacles', 'удали клюв из центра щупалец')],
      done: l('Telo je belo, a kraci su u jednom komadu bez kljuna.', 'The body is white and the tentacles are in one piece without the beak.', 'Тушка белая, щупальца одним куском без клюва.'),
    },
    {
      text: l('Lignje peci kratko na jakoj vatri.', 'Cook the squid briefly over high heat.', 'Жарь кальмаров коротко на сильном огне.'),
      params: [l('kolutovi 1 cm', '1 cm rings', 'кольца 1 см'), l('60–90 s', '60–90 s', '60–90 с')],
      done: l('Lignje su postale bele i neprozirne, i odmah izlaze iz tiganja.', 'The squid has turned white and opaque and comes straight out of the pan.', 'Кальмары стали белыми и непрозрачными и сразу снимаются со сковороды.'),
      why: l('Osuši ih pre tiganja, kao meso u 4.6. Mokre lignje se kuvaju u svojoj vodi i postanu gumene.', 'Dry them before the pan, like meat in 4.6. Wet squid stews in its own water and turns rubbery.', 'Обсуши перед сковородой, как мясо в 4.6. Мокрые кальмары тушатся в своей воде и становятся резиновыми.'),
    },
    {
      text: l('Hobotnicu potopi u ključalu vodu tri puta, pa krčkaj.', 'Dip the octopus into boiling water three times, then simmer.', 'Опусти осьминога в кипяток три раза, затем томи.'),
      params: [l('45–60 min na 1 kg', '45–60 min per kg', '45–60 мин на 1 кг'), l('bez soli', 'no salt', 'без соли')],
      done: l('Nož ulazi u najdeblji deo kraka kao u puter.', 'A knife slides into the thickest part of a tentacle like butter.', 'Нож входит в самую толстую часть щупальца, как в масло.'),
      why: l('Zamrzavanje unapred kida vlakna i hobotnica brže omekša. Potapanje uvija krake, pa lepše izgledaju.', 'Freezing beforehand breaks the fibres so the octopus softens faster. Dipping curls the tentacles so they look better.', 'Предварительная заморозка рвёт волокна, и осьминог быстрее размягчается. Окунание закручивает щупальца, они красивее.'),
      drawing: 'simmer',
    },
    {
      text: l('Ostavi hobotnicu da se ohladi u vodi, pa je zapeci.', 'Let the octopus cool in its water, then sear it.', 'Дай осьминогу остыть в воде, затем обжарь.'),
      params: [l('30 min u vodi', '30 min in the water', '30 мин в воде'), l('roštilj 2–3 min', 'grill 2–3 min', 'гриль 2–3 мин')],
      done: l('Kraci su sjajni, zapečeni spolja i mekani iznutra.', 'The tentacles are glossy, charred outside and tender inside.', 'Щупальца блестящие, поджаренные снаружи и мягкие внутри.'),
      why: l('U toploj vodi koža ostaje na mestu. Izvađena odmah, koža se ljušti i hobotnica se suši.', 'In the warm water the skin stays in place. Taken out at once, it peels and the octopus dries.', 'В тёплой воде кожа остаётся на месте. Вынутый сразу, осьминог облезает и сохнет.'),
    },
  ],
  mistake: {
    title: l('Lignje pečene 8 minuta "da budu sigurno gotove".', 'Squid cooked 8 minutes "to be sure it is done".', 'Кальмаров жарят 8 минут, «чтобы наверняка».'),
    fix: l(
      'Posle 2 minuta lignja je gotova, a posle 8 je guma. Ili 90 sekundi na jakoj vatri, ili 40+ minuta u sosu. Sve između je pogrešno.',
      'After 2 minutes squid is done; after 8 it is rubber. Either 90 seconds on high heat or 40+ minutes in a sauce. Everything in between is wrong.',
      'Через 2 минуты кальмар готов, через 8 — резина. Либо 90 секунд на сильном огне, либо 40+ минут в соусе. Всё между — ошибка.',
    ),
  },
  think: {
    question: l('Lignje su posle 5 minuta gumene. Kako da ih spaseš?', 'The squid is rubbery after 5 minutes. How do you save it?', 'Кальмары через 5 минут стали резиновыми. Как спасти?'),
    options: [
      l('Nastavi da ih kuvaš u sosu još 40 minuta', 'Keep cooking them in sauce for another 40 minutes', 'Продолжить тушить в соусе ещё 40 минут'),
      l('Skloni ih odmah sa vatre', 'Take them off the heat at once', 'Сразу снять с огня'),
      l('Posoli ih jače', 'Salt them more', 'Посолить сильнее'),
    ],
    answer: 0,
    explain: l(
      'Kad je protein već stegnut, jedini put nazad je dugo, tiho kuvanje dok se ne opusti. Lignje u paradajz sosu (9.5) posle 40 minuta su ponovo mekane.',
      'Once the protein has tightened, the only way back is long, gentle cooking until it relaxes. Squid in tomato sauce (9.5) is tender again after 40 minutes.',
      'Когда белок уже сжался, путь назад — только долгое мягкое тушение, пока он не расслабится. Кальмары в томатном соусе (9.5) через 40 минут снова мягкие.',
    ),
  },
  recipe: { name: l('Lignje na žaru sa limunom', 'Grilled squid with lemon', 'Кальмары на гриле с лимоном'), protein: 16, carbs: 3, fat: 5, kcal: 120 },
}

const shellfish: Lesson = {
  id: '2.4.5',
  title: l('Školjke i škampi', 'Mussels and prawns', 'Мидии и креветки'),
  goal: l(
    'Očistiš i skuvaš dagnje za 5 minuta i očistiš škampe tako da ostanu sočni.',
    'You clean and cook mussels in 5 minutes and prepare prawns so they stay juicy.',
    'Ты чистишь и готовишь мидии за 5 минут и разделываешь креветки так, чтобы они остались сочными.',
  ),
  minutes: 7,
  key: { value: l('4–5 min', '4–5 min', '4–5 мин'), label: l('dagnje', 'mussels', 'мидии') },
  need: [
    { item: l('Žive dagnje', 'Live mussels', 'Живые мидии'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Sirovi škampi u ljusci', 'Raw prawns in shell', 'Сырые креветки в панцире'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Belo vino, beli luk, peršun, puter', 'White wine, garlic, parsley, butter', 'Белое вино, чеснок, петрушка, сливочное масло'), qty: l('150 ml + 3 čena', '150 ml + 3 cloves', '150 мл + 3 зубчика') },
    { item: l('Lonac sa poklopcem', 'Pot with a lid', 'Кастрюля с крышкой'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Dagnje i škampi su najbrže jelo iz mora. Ali školjka se kupuje živa, a škamp se peče do tačnog oblika. Dve sekunde odluke, kao kod lignje.',
    'Mussels and prawns are the fastest dish from the sea. But mussels are bought alive, and prawns are cooked to an exact shape. A two-second decision, like squid.',
    'Мидии и креветки — самое быстрое морское блюдо. Но мидии покупают живыми, а креветки готовят до точной формы. Решение на две секунды, как с кальмаром.',
  ),
  steps: [
    {
      text: l('Proveri dagnje: zatvorene, ili se zatvore kad kucneš.', 'Check the mussels: closed, or they close when tapped.', 'Проверь мидии: закрыты или закрываются при постукивании.'),
      params: [l('napukle: baci', 'cracked: discard', 'треснувшие: выбросить')],
      done: l('U činiji su samo žive, zatvorene dagnje.', 'Only live, closed mussels are left in the bowl.', 'В миске только живые закрытые мидии.'),
      why: l('Mrtva školjka se kvari brzo i ne vidi se po mirisu dok se ne skuva. Otvorena i nepomična je mrtva.', 'A dead mussel spoils fast and you cannot smell it until it is cooked. Open and unresponsive means dead.', 'Мёртвая мидия быстро портится, и до готовки по запаху этого не понять. Открытая и не реагирует — мёртвая.'),
      drawing: 'musselTap',
    },
    {
      text: l('Izvuci "bradu" ka zadnjem delu školjke i isperi.', 'Pull the beard towards the hinge and rinse.', 'Вырви «бородку» к шарниру и промой.'),
      done: l('Školjke su čiste, bez niti sa strane.', 'The shells are clean, with no threads at the side.', 'Раковины чистые, без нитей сбоку.'),
    },
    {
      text: l('Dinstaj beli luk, dodaj vino i dagnje, poklopi.', 'Sweat the garlic, add the wine and mussels, cover.', 'Потоми чеснок, добавь вино и мидии, накрой.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь'), l('4–5 min, protresi jednom', '4–5 min, shake once', '4–5 мин, встряхни раз')],
      done: l('Školjke su se otvorile, a meso je narandžasto i puno.', 'The shells have opened and the meat is orange and plump.', 'Раковины раскрылись, мясо оранжевое и пухлое.'),
      why: l('Para ih skuva, a sok iz školjki postane sos. Dodaj puter i peršun na kraju. One koje se ne otvore, ne jedi.', 'The steam cooks them and the juice from the shells becomes the sauce. Add butter and parsley at the end. Do not eat any that stay shut.', 'Пар готовит их, а сок из раковин становится соусом. В конце добавь масло и петрушку. Не раскрывшиеся не ешь.'),
      drawing: 'lidOn',
    },
    {
      text: l('Škampima skini oklop, a ljuske sačuvaj.', 'Shell the prawns and keep the shells.', 'Очисти креветки от панциря, панцири сохрани.'),
      params: [l('rep po želji ostaje', 'tail on if you like', 'хвост можно оставить')],
      done: l('Meso je čisto, a ljuske su u kesi za fond.', 'The meat is clean and the shells are in the stock bag.', 'Мясо чистое, панцири в пакете для бульона.'),
      why: l('Ljuske škampa daju najjači fond od svih plodova mora, za rizoto i paellu (2.12.5).', 'Prawn shells make the strongest stock of all seafood, for risotto and paella (2.12.5).', 'Панцири креветок дают самый сильный бульон из всех морепродуктов, для ризотто и паэльи (2.12.5).'),
    },
    {
      text: l('Zaseci leđa i izvadi tamnu nit, pa peci kratko.', 'Cut along the back, remove the dark vein, then cook briefly.', 'Надрежь спинку, удали тёмную жилку и обжарь коротко.'),
      params: [l('1–2 min po strani', '1–2 min per side', '1–2 мин на сторону'), l('oblik slova C', 'a C shape', 'форма буквы C')],
      done: l('Škamp je roze, neproziran i savijen u C.', 'The prawn is pink, opaque and curled into a C.', 'Креветка розовая, непрозрачная и согнута в C.'),
      why: l('C znači "cooked", O znači "overcooked". Škamp savijen u krug je suv i gumen.', 'C means cooked, O means overcooked. A prawn curled into a ring is dry and rubbery.', 'C — готово, O — пережарено. Креветка, свернувшаяся в кольцо, сухая и резиновая.'),
      drawing: 'prawnC',
    },
  ],
  mistake: {
    title: l('Dagnje kupljene dan ranije i ostavljene u vodi.', 'Mussels bought the day before and left in water.', 'Мидии куплены накануне и оставлены в воде.'),
    fix: l(
      'Slatka voda ubija školjke iz mora. Dagnje drži u frižideru u činiji, pokrivene vlažnom krpom, ne u vodi, i kuvaj ih isti ili sledeći dan.',
      'Fresh water kills sea shellfish. Keep mussels in the fridge in a bowl covered with a damp cloth, not in water, and cook them the same or next day.',
      'Пресная вода убивает морских моллюсков. Держи мидии в холодильнике в миске под влажным полотенцем, а не в воде, и готовь в тот же или на следующий день.',
    ),
  },
  think: {
    question: l('Posle kuvanja, tri dagnje su ostale zatvorene. Šta radiš?', 'After cooking, three mussels stay closed. What do you do?', 'После варки три мидии остались закрытыми. Что делаешь?'),
    options: [
      l('Baciš ih', 'Throw them away', 'Выбрасываешь'),
      l('Otvoriš ih nožem i pojedeš', 'Prise them open and eat them', 'Открываешь ножом и ешь'),
      l('Vratiš ih da se kuvaju još 10 minuta', 'Cook them another 10 minutes', 'Варишь ещё 10 минут'),
    ],
    answer: 0,
    explain: l(
      'Možda su samo tvrdoglave, a možda su bile mrtve pre kuvanja. Tri školjke nisu vredne rizika. Kuhinja bira sigurno.',
      'They may just be stubborn, or they may have been dead before cooking. Three mussels are not worth the risk. A kitchen chooses safe.',
      'Может, они просто упрямые, а может, были мёртвыми до варки. Три мидии не стоят риска. Кухня выбирает безопасность.',
    ),
  },
  recipe: { name: l('Dagnje na buzaru', 'Mussels in white wine (buzara)', 'Мидии бузара'), protein: 12, carbs: 4, fat: 4, kcal: 105 },
}

const saltPaper: Lesson = {
  id: '2.4.6',
  title: l('Riba u soli i u papiru', 'Fish in salt and in paper', 'Рыба в соли и в пергаменте'),
  goal: l(
    'Ispečeš celu ribu u soli i file u papiru, oba sočna i tačno gotova.',
    'You bake a whole fish in salt and a fillet in paper, both juicy and exactly done.',
    'Ты запекаешь целую рыбу в соли и филе в пергаменте, оба сочные и точно готовые.',
  ),
  minutes: 7,
  key: { value: l('55°C', '55°C', '55°C'), label: l('u sredini', 'at the centre', 'в центре') },
  need: [
    { item: l('Cela riba očišćena, sa krljušti', 'Whole gutted fish, scales on', 'Целая рыба без потрохов, с чешуёй'), qty: l('600–800 g', '600–800 g', '600–800 г') },
    { item: l('Krupna so i belanca', 'Coarse salt and egg whites', 'Крупная соль и белки'), qty: l('1.5 kg + 2', '1.5 kg + 2', '1,5 кг + 2') },
    { item: l('Riblji fileti', 'Fish fillets', 'Рыбное филе'), qty: l('2 × 150 g', '2 × 150 g', '2 × 150 г') },
    { item: l('Papir za pečenje, limun, bilje, puter', 'Baking paper, lemon, herbs, butter', 'Пергамент, лимон, травы, масло'), qty: l('—', '—', '—') },
  ],
  why: l(
    'So i papir su zatvorena rerna oko ribe. Riba se peče u sopstvenoj pari, ne može da se presuši, a ukus ostaje unutra.',
    'Salt and paper are a sealed oven around the fish. It cooks in its own steam, cannot dry out, and the flavour stays inside.',
    'Соль и пергамент — закрытая духовка вокруг рыбы. Она готовится в собственном пару, не пересыхает, а вкус остаётся внутри.',
  ),
  steps: [
    {
      text: l('Umešaj so sa belancima dok ne bude kao vlažan pesak.', 'Mix the salt with the egg whites until it feels like damp sand.', 'Смешай соль с белками до консистенции влажного песка.'),
      params: [l('1.5 kg + 2 belanca', '1.5 kg + 2 whites', '1,5 кг + 2 белка')],
      done: l('So se lepi u grudvu kad je stisneš.', 'The salt clumps when you squeeze it.', 'Соль слипается в комок, если сжать.'),
    },
    {
      text: l('Napuni ribu limunom i biljem i potpuno je pokrij solju.', 'Fill the fish with lemon and herbs and cover it completely in salt.', 'Наполни рыбу лимоном и травами и полностью покрой солью.'),
      params: [l('sloj 1 cm', '1 cm layer', 'слой 1 см'), l('krljušt ostaje', 'scales stay on', 'чешую не снимают')],
      done: l('Riba je zatvorena u solnu koru bez rupa.', 'The fish is sealed in a salt crust with no gaps.', 'Рыба запечатана в соляную корку без щелей.'),
      why: l('Krljušt štiti meso od soli, pa riba ne bude preslana.', 'The scales shield the flesh from the salt, so the fish does not get too salty.', 'Чешуя защищает мясо от соли, и рыба не пересаливается.'),
      drawing: 'saltCrust',
    },
    {
      text: l('Peci, pa izmeri kroz koru do sredine ribe.', 'Bake, then probe through the crust to the centre of the fish.', 'Запекай, затем измерь сквозь корку до центра рыбы.'),
      params: [l('200°C', '200°C', '200°C'), l('20–25 min za 700 g', '20–25 min for 700 g', '20–25 мин на 700 г'), l('55°C', '55°C', '55°C')],
      done: l('Kora je zlatna i tvrda, a termometar pokazuje 55°C.', 'The crust is golden and hard and the probe reads 55°C.', 'Корка золотистая и твёрдая, термометр показывает 55°C.'),
      why: l('Isti broj kao za file u 7.9. Riba se raspada u listiće, a još je sočna.', 'The same number as the fillet in 7.9. The fish flakes and is still juicy.', 'Та же цифра, что для филе в 7.9. Рыба расслаивается и всё ещё сочная.'),
    },
    {
      text: l('Za papir: file na papir, dodaj povrće, limun, bilje i puter, pa zatvori.', 'For paper: fillet on the paper with vegetables, lemon, herbs and butter, then seal.', 'Для пергамента: филе на бумагу, овощи, лимон, травы и масло, затем запечатай.'),
      params: [l('ivice preklopi gusto', 'fold the edges tightly', 'плотно загни края'), l('povrće tanko', 'vegetables thin', 'овощи тонко')],
      done: l('Paket je zatvoren sa svih strana, bez otvora.', 'The parcel is sealed on every side, with no openings.', 'Конверт запечатан со всех сторон, без щелей.'),
      why: l('Povrće mora da bude tanko jer ima isto vreme kao riba: 12 minuta.', 'The vegetables must be thin because they get the same time as the fish: 12 minutes.', 'Овощи должны быть тонкими: у них то же время, что у рыбы, — 12 минут.'),
      drawing: 'papillote',
    },
    {
      text: l('Peci dok se paket ne naduva, pa ga otvori za stolom.', 'Bake until the parcel puffs, then open it at the table.', 'Запекай, пока конверт не раздуется, и открой его за столом.'),
      params: [l('200°C', '200°C', '200°C'), l('12–15 min', '12–15 min', '12–15 мин')],
      done: l('Paket je naduvan, a kad se otvori izlazi para koja miriše na limun.', 'The parcel is puffed, and opening it releases steam that smells of lemon.', 'Конверт раздулся, при открытии выходит пар с запахом лимона.'),
      why: l('Naduvan paket znači da para kuva ribu. Otvaranje za stolom je deo jela.', 'A puffed parcel means steam is cooking the fish. Opening it at the table is part of the dish.', 'Раздутый конверт значит, что пар готовит рыбу. Открытие за столом — часть блюда.'),
    },
  ],
  mistake: {
    title: l('Riba za so očišćena od krljušti i nasoljena.', 'Fish for the salt crust scaled and salted.', 'Рыбу для соляной корки чистят от чешуи и солят.'),
    fix: l(
      'Bez krljušti so ulazi direktno u meso i riba postane neukusno slana. Za koru od soli riba ostaje u krljušti i ne soli se dodatno. Koža se skida za stolom.',
      'Without scales the salt goes straight into the flesh and the fish turns unpleasantly salty. For a salt crust the fish keeps its scales and gets no extra salt. The skin comes off at the table.',
      'Без чешуи соль проникает прямо в мясо, и рыба становится неприятно солёной. Для соляной корки рыбу оставляют в чешуе и не солят дополнительно. Кожу снимают за столом.',
    ),
  },
  think: {
    question: l('Zašto se riba u soli ne presuši ni kad je rerna 200°C?', 'Why does fish in salt not dry out even at 200°C?', 'Почему рыба в соли не пересыхает даже при 200°C?'),
    options: [
      l('Kora zadržava paru, pa se riba kuva u svom soku', 'The crust traps the steam, so the fish cooks in its own juice', 'Корка удерживает пар, и рыба готовится в своём соку'),
      l('So hladi ribu', 'Salt cools the fish', 'Соль охлаждает рыбу'),
      l('Belance ulazi u meso', 'The egg white soaks into the flesh', 'Белок пропитывает мясо'),
    ],
    answer: 0,
    explain: l(
      'Rerna greje koru, a kora greje ribu sporo i ravnomerno, u zatvorenom prostoru. Isti princip kao papir, samo sa debljim zidom.',
      'The oven heats the crust, and the crust heats the fish slowly and evenly, in a sealed space. The same principle as paper, only with a thicker wall.',
      'Духовка греет корку, а корка греет рыбу медленно и равномерно в закрытом пространстве. Тот же принцип, что с пергаментом, только стенка толще.',
    ),
  },
  recipe: { name: l('Brancin u soli', 'Sea bass baked in salt', 'Сибас в соли'), protein: 20, carbs: 0, fat: 3, kcal: 110 },
}

export const fishLessons: Lesson[] = [wholeFish, roundFillet, flatFish, squid, shellfish, saltPaper]
