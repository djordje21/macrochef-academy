import { l, type Lesson } from '../types'

// Grade 2 · Module 12 · World kitchens: the Mediterranean. Olive oil, lemon, herbs and fire. Simple food
// where every ingredient shows, so the craft is in choosing well and doing little, precisely.

const oliveOil: Lesson = {
  id: '2.12.1',
  title: l('Maslinovo ulje: sirovo i za kuvanje', 'Olive oil: raw and for cooking', 'Оливковое масло: сырое и для готовки'),
  goal: l(
    'Izabereš, probaš i koristiš maslinovo ulje kao začin, a ne samo kao masnoću.',
    'You choose, taste and use olive oil as a seasoning, not just as fat.',
    'Ты выбираешь, пробуешь и используешь оливковое масло как приправу, а не просто как жир.',
  ),
  minutes: 5,
  key: { value: l('2', '2', '2'), label: l('ulja u kuhinji', 'oils in the kitchen', 'масла на кухне') },
  need: [
    { item: l('Ekstra devičansko maslinovo ulje', 'Extra virgin olive oil', 'Оливковое масло extra virgin'), qty: l('1 flaša', '1 bottle', '1 бутылка') },
    { item: l('Rafinisano maslinovo ili suncokretovo ulje', 'Refined olive or sunflower oil', 'Рафинированное оливковое или подсолнечное масло'), qty: l('1 flaša', '1 bottle', '1 бутылка') },
    { item: l('Zreo paradajz, hleb, krupna so', 'Ripe tomato, bread, flaky salt', 'Спелый помидор, хлеб, крупная соль'), qty: l('2 + 4 šnite', '2 + 4 slices', '2 + 4 ломтя') },
    { item: l('Kašičica za probu', 'A tasting spoon', 'Ложечка для пробы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Na Mediteranu je maslinovo ulje sastojak kao so: dodaje se na kraju, sirovo, i nosi ukus jela. Dobro ulje se oseti u grlu.',
    'In the Mediterranean, olive oil is an ingredient like salt: it is added at the end, raw, and carries the flavour of the dish. Good oil catches the back of your throat.',
    'В Средиземноморье оливковое масло — ингредиент, как соль: его добавляют в конце, сырым, и оно несёт вкус блюда. Хорошее масло чувствуется в горле.',
  ),
  steps: [
    {
      text: l('Pročitaj etiketu: ekstra devičansko, datum berbe, tamna flaša.', 'Read the label: extra virgin, harvest date, dark bottle.', 'Прочитай этикетку: extra virgin, дата сбора, тёмная бутылка.'),
      params: [l('berba ove ili prošle godine', 'this or last year\'s harvest', 'урожай этого или прошлого года')],
      done: l('Znaš kad su masline ubrane i kako je ulje čuvano.', 'You know when the olives were picked and how the oil was kept.', 'Ты знаешь, когда собрали оливки и как хранилось масло.'),
      why: l('Maslinovo ulje nije vino: ne postaje bolje sa godinama. Svetlo i toplota ga kvare.', 'Olive oil is not wine: it does not improve with age. Light and heat spoil it.', 'Оливковое масло — не вино: с годами лучше не становится. Свет и тепло его портят.'),
    },
    {
      text: l('Probaj ulje sa kašičice, pa uvuci vazduh.', 'Taste the oil from a spoon, then draw in air.', 'Попробуй масло с ложечки и втяни воздух.'),
      params: [l('voćno', 'fruity', 'фруктовое'), l('gorko', 'bitter', 'горькое'), l('ljuto u grlu', 'peppery in the throat', 'жгучее в горле')],
      done: l('Ulje miriše na travu ili paradajz i štipa u grlu.', 'The oil smells of grass or tomato and catches your throat.', 'Масло пахнет травой или томатом и щиплет в горле.'),
      why: l('Gorčina i ljutina su znak svežeg ulja i polifenola. Ulje bez ukusa ili koje miriše na buđ je staro.', 'Bitterness and pepperiness are signs of fresh oil and polyphenols. Oil with no taste, or that smells musty, is old.', 'Горечь и жгучесть — признаки свежего масла и полифенолов. Масло без вкуса или с затхлым запахом — старое.'),
      drawing: 'oilTaste',
    },
    {
      text: l('Za prženje na jakoj vatri koristi rafinisano ulje.', 'For frying over high heat, use refined oil.', 'Для жарки на сильном огне используй рафинированное масло.'),
      params: [l('jako prženje: rafinisano', 'hard frying: refined', 'сильная жарка: рафинированное'), l('dinstanje: ekstra devičansko', 'gentle cooking: extra virgin', 'мягкая готовка: extra virgin')],
      done: l('Skupo ulje ne gori u tiganju za biftek.', 'The expensive oil is not burning in the steak pan.', 'Дорогое масло не горит на сковороде для стейка.'),
      why: l('Ekstra devičansko podnosi dinstanje i blago prženje, ali na jakoj vatri izgubi baš ono zbog čega ga plaćaš: miris.', 'Extra virgin handles gentle cooking and light frying, but on high heat it loses exactly what you paid for: the aroma.', 'Extra virgin выдерживает тушение и лёгкую жарку, но на сильном огне теряет то, за что ты платишь, — аромат.'),
    },
    {
      text: l('Protrljaj paradajz preko prepečenog hleba, pa prelij uljem i posoli.', 'Rub the tomato over toasted bread, then drizzle with oil and salt.', 'Натри помидор на поджаренный хлеб, полей маслом и посоли.'),
      params: [l('pan con tomate', 'pan con tomate', 'пан кон томате')],
      done: l('Hleb je crven od paradajza i sjaji se od ulja.', 'The bread is red with tomato and shining with oil.', 'Хлеб красный от томата и блестит от масла.'),
      why: l('Tri sastojka i ništa ne skriva ukus ulja. Ovo je najbolji test da li je ulje dobro.', 'Three ingredients and nothing hides the taste of the oil. This is the best test of whether the oil is good.', 'Три ингредиента, и ничто не скрывает вкус масла. Это лучшая проверка, хорошее ли масло.'),
    },
    {
      text: l('Čuvaj ulje u tamnom ormanu, daleko od šporeta.', 'Keep the oil in a dark cupboard, away from the stove.', 'Храни масло в тёмном шкафу, подальше от плиты.'),
      params: [l('potroši za 2–3 meseca od otvaranja', 'use within 2–3 months of opening', 'израсходуй за 2–3 месяца после открытия')],
      done: l('Flaša je zatvorena, u mraku i na hladnom.', 'The bottle is closed, in the dark and cool.', 'Бутылка закрыта, в темноте и прохладе.'),
    },
  ],
  mistake: {
    title: l('Flaša maslinovog ulja pored šporeta, na svetlu.', 'The olive oil bottle by the stove, in the light.', 'Бутылка оливкового масла у плиты, на свету.'),
    fix: l(
      'Toplota i svetlo užegnu ulje za par nedelja: ukus postane kao stari orah. Pored šporeta drži malu flašu za svakodnevno, a veliku u mraku.',
      'Heat and light turn the oil rancid in a few weeks: it starts to taste of stale walnuts. Keep a small bottle by the stove for daily use and the big one in the dark.',
      'Тепло и свет делают масло прогорклым за несколько недель: вкус как у старого ореха. У плиты держи маленькую бутылку на каждый день, а большую — в темноте.',
    ),
  },
  think: {
    question: l('Kad dodaješ najbolje maslinovo ulje u čorbu od pasulja?', 'When do you add your best olive oil to a bean soup?', 'Когда добавляешь лучшее оливковое масло в фасолевый суп?'),
    options: [
      l('Na kraju, u tanjiru, sirovo', 'At the end, in the bowl, raw', 'В конце, в тарелке, сырым'),
      l('Na početku, za dinstanje luka', 'At the start, to sweat the onion', 'В начале, для пассеровки лука'),
      l('Sa pasuljem, da se kuva', 'With the beans, to cook', 'С фасолью, чтобы варилось'),
    ],
    answer: 0,
    explain: l(
      'Miris maslinovog ulja ispari u kuvanju. Kao bosiljak u 9.5: najfiniji ukusi idu na kraju.',
      'The aroma of olive oil evaporates as it cooks. Like basil in 9.5: the most delicate flavours go in last.',
      'Аромат оливкового масла испаряется при варке. Как базилик в 9.5: самые тонкие вкусы — в конце.',
    ),
  },
}

const herbSauces: Lesson = {
  id: '2.12.2',
  title: l('Limun, beli luk i bilje: gremolata i salsa verde', 'Lemon, garlic and herbs: gremolata and salsa verde', 'Лимон, чеснок и травы: гремолата и сальса верде'),
  goal: l(
    'Napraviš gremolatu i salsa verde nožem, za 10 minuta, i probudiš njima svako jelo.',
    'You make gremolata and salsa verde with a knife in 10 minutes, and use them to wake up any dish.',
    'Ты делаешь гремолату и сальса верде ножом за 10 минут и оживляешь ими любое блюдо.',
  ),
  minutes: 6,
  key: { value: l('nož', 'knife', 'нож'), label: l('ne blender', 'not a blender', 'не блендер') },
  need: [
    { item: l('Peršun, bosiljak, nana', 'Parsley, basil, mint', 'Петрушка, базилик, мята'), qty: l('po vezica', 'a bunch each', 'по пучку') },
    { item: l('Limun, beli luk', 'Lemon, garlic', 'Лимон, чеснок'), qty: l('1 + 2 čena', '1 + 2 cloves', '1 + 2 зубчика') },
    { item: l('Kapar, inćuni, senf', 'Capers, anchovies, mustard', 'Каперсы, анчоусы, горчица'), qty: l('1 kašika + 2 + 1 kašičica', '1 tbsp + 2 + 1 tsp', '1 ст. л. + 2 + 1 ч. л.') },
    { item: l('Maslinovo ulje, sirće od crnog vina', 'Olive oil, red wine vinegar', 'Оливковое масло, красный винный уксус'), qty: l('100 ml + 1 kašika', '100 ml + 1 tbsp', '100 мл + 1 ст. л.') },
  ],
  why: l(
    'Teška jela, kao braziranje (12) i pečenje (13), traže nešto sveže i oštro na kraju. Gremolata i salsa verde su to: kiselina, bilje i beli luk u jednoj kašici.',
    'Heavy dishes, like braises (12) and roasts (13), need something fresh and sharp at the end. Gremolata and salsa verde are exactly that: acid, herbs and garlic in one spoonful.',
    'Тяжёлым блюдам, вроде тушёного (12) и запечённого (13), нужно что-то свежее и острое в конце. Гремолата и сальса верде — именно это: кислота, травы и чеснок в одной ложке.',
  ),
  steps: [
    {
      text: l('Za gremolatu izrendaj koru limuna i iseckaj beli luk i peršun zajedno.', 'For gremolata, zest the lemon and chop the garlic and parsley together.', 'Для гремолаты натри цедру лимона и мелко поруби чеснок с петрушкой.'),
      params: [l('1 limun + 1 čen + šaka peršuna', '1 lemon + 1 clove + a handful of parsley', '1 лимон + 1 зубчик + горсть петрушки')],
      done: l('Mešavina je sitna, zelena i miriše na limun.', 'The mixture is fine, green and smells of lemon.', 'Смесь мелкая, зелёная и пахнет лимоном.'),
      why: l('Gremolata ide preko gulaša, ossobuca, ribe. Tri sastojka, bez ulja, bez kuvanja.', 'Gremolata goes over goulash, osso buco, fish. Three ingredients, no oil, no cooking.', 'Гремолату кладут на гуляш, оссобуко, рыбу. Три ингредиента, без масла и без готовки.'),
      drawing: 'zestLemon',
    },
    {
      text: l('Za salsa verde iseckaj bilje oštrim nožem, ne mikserom.', 'For salsa verde, chop the herbs with a sharp knife, not a blender.', 'Для сальса верде поруби травы острым ножом, а не блендером.'),
      params: [l('komadi 2–3 mm', '2–3 mm pieces', 'кусочки 2–3 мм')],
      done: l('Bilje je sitno iseckano, zeleno, bez tamne kaše na dasci.', 'The herbs are finely chopped and green, with no dark mush on the board.', 'Травы мелко порублены, зелёные, без тёмной кашицы на доске.'),
      why: l('Blender zagreje i zgnječi listove pa potamne. Oštar nož ih seče čisto (2.5).', 'A blender heats and bruises the leaves so they darken. A sharp knife cuts them cleanly (2.5).', 'Блендер нагревает и мнёт листья, и они темнеют. Острый нож режет их чисто (2.5).'),
      drawing: 'herbChop',
    },
    {
      text: l('Iseckaj kapar, inćune i beli luk i dodaj ih bilju.', 'Chop the capers, anchovies and garlic and add them to the herbs.', 'Поруби каперсы, анчоусы и чеснок и добавь к травам.'),
      done: l('Sve je iste sitnoće i ravnomerno raspoređeno.', 'Everything is equally fine and evenly mixed.', 'Всё одинаково мелкое и равномерно перемешано.'),
      why: l('Inćuni ne daju ukus ribe, nego slanost i umami (5.4). Ko ne voli inćune, neće ih prepoznati.', 'Anchovies do not taste of fish here; they add salt and umami (5.4). People who dislike anchovies will not recognise them.', 'Анчоусы дают не рыбный вкус, а солёность и умами (5.4). Кто не любит анчоусы, их не узнает.'),
    },
    {
      text: l('Umešaj senf, sirće i maslinovo ulje.', 'Stir in the mustard, vinegar and olive oil.', 'Вмешай горчицу, уксус и оливковое масло.'),
      params: [l('100 ml ulja', '100 ml oil', '100 мл масла')],
      done: l('Salsa je gusta, zelena i sjajna, sa vidljivim komadićima.', 'The salsa is thick, green and glossy, with visible pieces.', 'Сальса густая, зелёная и блестящая, с видимыми кусочками.'),
    },
    {
      text: l('Probaj i koriguj: so, kiselina, ulje.', 'Taste and adjust: salt, acid, oil.', 'Попробуй и поправь: соль, кислота, масло.'),
      done: l('Ukus je oštar, svež i slan u ravnoteži.', 'The taste is sharp, fresh and salty in balance.', 'Вкус острый, свежий и солёный в балансе.'),
      why: l('Redosled iz 5.5. Salsa drži 2 dana u frižideru, ali je najlepša istog dana.', 'The order from 5.5. Salsa keeps 2 days in the fridge but is best on the day.', 'Порядок из 5.5. Сальса хранится 2 дня в холодильнике, но лучше всего в тот же день.'),
    },
  ],
  mistake: {
    title: l('Salsa verde napravljena ujutru za večeru, sa limunom.', 'Salsa verde made in the morning for dinner, with lemon.', 'Сальса верде сделана утром к ужину, с лимоном.'),
    fix: l(
      'Kiselina za par sati pretvori zeleno bilje u maslinasto-sivo. Seckaj bilje unapred, ali kiselinu dodaj tek pred serviranje.',
      'Within a few hours acid turns green herbs olive-grey. Chop the herbs ahead, but add the acid only just before serving.',
      'За несколько часов кислота превращает зелёные травы в оливково-серые. Руби травы заранее, но кислоту добавляй только перед подачей.',
    ),
  },
  think: {
    question: l('Uz šta salsa verde pristaje najbolje?', 'What does salsa verde go with best?', 'К чему сальса верде подходит лучше всего?'),
    options: [
      l('Uz kuvano ili pečeno meso i ribu sa žara', 'Boiled or roast meat and grilled fish', 'К варёному или запечённому мясу и рыбе с гриля'),
      l('Uz panakotu', 'Panna cotta', 'К панакоте'),
      l('Uz voćni tart', 'Fruit tart', 'К фруктовому тарту'),
    ],
    answer: 0,
    explain: l(
      'Masno i bogato traži kiselo i sveže. Govedina iz supe (8.4) sa salsa verde je klasika severne Italije.',
      'Rich and fatty wants sour and fresh. Beef from the soup pot (8.4) with salsa verde is a northern Italian classic.',
      'Жирное и насыщенное требует кислого и свежего. Говядина из супа (8.4) с сальса верде — классика северной Италии.',
    ),
  },
}

const grilledFish: Lesson = {
  id: '2.12.3',
  title: l('Cela riba na žaru', 'Whole fish on the grill', 'Целая рыба на гриле'),
  goal: l(
    'Ispečeš celu ribu na žaru sa hrskavom kožom koja se ne lepi za rešetku.',
    'You grill a whole fish with crisp skin that does not stick to the grate.',
    'Ты запекаешь целую рыбу на гриле с хрустящей кожей, которая не прилипает к решётке.',
  ),
  minutes: 7,
  key: { value: l('55°C', '55°C', '55°C'), label: l('uz kičmu', 'at the spine', 'у хребта') },
  need: [
    { item: l('Cela riba, očišćena (2.4.1): orada, brancin, skuša', 'Whole cleaned fish (2.4.1): bream, sea bass, mackerel', 'Целая очищенная рыба (2.4.1): дорадо, сибас, скумбрия'), qty: l('2 × 500 g', '2 × 500 g', '2 × 500 г') },
    { item: l('Limun, beli luk, ruzmarin', 'Lemon, garlic, rosemary', 'Лимон, чеснок, розмарин'), qty: l('1 + 2 + 2', '1 + 2 + 2', '1 + 2 + 2') },
    { item: l('Maslinovo ulje, krupna so', 'Olive oil, coarse salt', 'Оливковое масло, крупная соль'), qty: l('—', '—', '—') },
    { item: l('Roštilj sa žarom (14.1), dve lopatice', 'Charcoal grill (14.1), two spatulas', 'Гриль с углями (14.1), две лопатки'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Riba na žaru sa maslinovim uljem i limunom je jelo celog Mediterana, od Dalmacije do Grčke. Cela riba ostaje sočnija od fileta, jer je kosti i koža čuvaju.',
    'Grilled fish with olive oil and lemon is the dish of the whole Mediterranean, from Dalmatia to Greece. A whole fish stays juicier than fillets because the bones and skin protect it.',
    'Рыба на гриле с оливковым маслом и лимоном — блюдо всего Средиземноморья, от Далмации до Греции. Целая рыба сочнее филе, потому что её защищают кости и кожа.',
  ),
  steps: [
    {
      text: l('Napravi tri koso zareza sa obe strane ribe, do kosti.', 'Make three diagonal cuts on each side of the fish, down to the bone.', 'Сделай по три косых надреза с каждой стороны рыбы до кости.'),
      params: [l('3 zareza', '3 cuts', '3 надреза')],
      done: l('Zarezi su jednako udaljeni i dosežu kičmu.', 'The cuts are evenly spaced and reach the spine.', 'Надрезы на равном расстоянии и доходят до хребта.'),
      why: l('Najdeblji deo ribe dobija toplotu kroz zareze, pa glava i rep ne pregore dok se sredina peče.', 'The thickest part gets heat through the cuts, so the head and tail do not overcook while the middle cooks.', 'Самая толстая часть получает тепло через надрезы, и голова с хвостом не пережариваются, пока готовится середина.'),
      drawing: 'scoreFish',
    },
    {
      text: l('Napuni stomak limunom i biljem, posoli i premaži kožu uljem.', 'Fill the belly with lemon and herbs, salt it and oil the skin.', 'Наполни брюшко лимоном и травами, посоли и смажь кожу маслом.'),
      done: l('Koža je sjajna i suva ispod ulja, ne mokra.', 'The skin is glossy and dry under the oil, not wet.', 'Кожа блестит и сухая под маслом, а не мокрая.'),
      why: l('Ulje na ribi, a ne na rešetki: kao meso na grill tiganju (14.2).', 'Oil on the fish, not on the grate: like meat on the grill pan (14.2).', 'Масло на рыбе, а не на решётке: как мясо на сковороде-гриль (14.2).'),
    },
    {
      text: l('Stavi ribu na čistu, vrelu rešetku i ne pomeraj je.', 'Lay the fish on a clean, hot grate and do not move it.', 'Положи рыбу на чистую раскалённую решётку и не двигай.'),
      params: [l('srednje jak žar', 'medium-high heat', 'жар выше среднего'), l('5–6 min', '5–6 min', '5–6 мин')],
      done: l('Riba se sama odvaja kad je gurneš lopaticom.', 'The fish releases by itself when nudged with a spatula.', 'Рыба сама отходит, если подтолкнуть лопаткой.'),
      why: l('Koža se lepi dok ne postane hrskava. Kad je gotova, pusti sama, kao meso u 4.6.', 'The skin sticks until it is crisp. When it is done, it lets go by itself, like meat in 4.6.', 'Кожа липнет, пока не станет хрустящей. Когда готова, отпускает сама, как мясо в 4.6.'),
    },
    {
      text: l('Okreni ribu jednom, sa dve lopatice, i peci drugu stranu.', 'Turn the fish once, with two spatulas, and cook the other side.', 'Переверни рыбу один раз двумя лопатками и жарь другую сторону.'),
      params: [l('4–5 min', '4–5 min', '4–5 мин')],
      done: l('Riba je okrenuta u jednom komadu, koža cela.', 'The fish is turned in one piece with the skin intact.', 'Рыба перевёрнута целиком, кожа цела.'),
    },
    {
      text: l('Proveri uz kičmu: meso se odvaja i neprozirno je.', 'Check at the spine: the flesh comes away and is opaque.', 'Проверь у хребта: мясо отходит и непрозрачное.'),
      params: [l('55°C', '55°C', '55°C'), l('maslinovo ulje i limun na tanjiru', 'olive oil and lemon on the plate', 'оливковое масло и лимон на тарелке')],
      done: l('Meso u najdubljem zarezu se lista i odvaja od kosti.', 'The flesh in the deepest cut flakes and leaves the bone.', 'Мясо в самом глубоком надрезе расслаивается и отходит от кости.'),
      why: l('Prelij ribu sirovim maslinovim uljem sa limunom i peršunom. To je ceo sos (2.12.1).', 'Dress the fish with raw olive oil, lemon and parsley. That is the whole sauce (2.12.1).', 'Полей рыбу сырым оливковым маслом с лимоном и петрушкой. Это и есть весь соус (2.12.1).'),
    },
  ],
  mistake: {
    title: l('Riba okretana tri puta "da se ne zalepi".', 'Fish turned three times "so it does not stick".', 'Рыбу переворачивали три раза, «чтобы не прилипла».'),
    fix: l(
      'Svaki okret pre vremena ostavi kožu na rešetki, a riba se raspadne. Čista, vrela, nauljena rešetka i jedan okret posle 5 minuta.',
      'Every early turn leaves skin on the grate and the fish falls apart. A clean, hot, oiled grate and one turn after 5 minutes.',
      'Каждый ранний переворот оставляет кожу на решётке, и рыба разваливается. Чистая, горячая, смазанная решётка и один переворот через 5 минут.',
    ),
  },
  think: {
    question: l('Zašto se riba na žaru služi sa sirovim maslinovim uljem, a ne sa sosom?', 'Why is grilled fish served with raw olive oil rather than a sauce?', 'Почему рыбу с гриля подают с сырым оливковым маслом, а не с соусом?'),
    options: [
      l('Sveža riba i dim imaju dovoljno ukusa, a ulje i limun ga samo podignu', 'Fresh fish and smoke have enough flavour, and oil and lemon only lift it', 'У свежей рыбы и дыма достаточно вкуса, масло и лимон его лишь поднимают'),
      l('Sos bi se zalepio za rešetku', 'A sauce would stick to the grate', 'Соус прилипнет к решётке'),
      l('Ulje hladi ribu', 'The oil cools the fish', 'Масло охлаждает рыбу'),
    ],
    answer: 0,
    explain: l(
      'Mediteranska kuhinja je o tome šta ne dodaješ. Masnoća i kiselina iz modula 5, ništa više.',
      'Mediterranean cooking is about what you leave out. Fat and acid from module 5, nothing more.',
      'Средиземноморская кухня — о том, чего не добавлять. Жир и кислота из модуля 5, ничего больше.',
    ),
  },
  recipe: { name: l('Orada na žaru', 'Grilled sea bream', 'Дорадо на гриле'), protein: 20, carbs: 0, fat: 7, kcal: 145 },
}

const meze: Lesson = {
  id: '2.12.4',
  title: l('Meze: cacik, baba ganuš, humus', 'Meze: tzatziki, baba ganoush, hummus', 'Мезе: цацики, баба гануш, хумус'),
  goal: l(
    'Napraviš tri mezea i složiš ih na tanjir za deljenje.',
    'You make three meze and arrange them on a sharing plate.',
    'Ты готовишь три вида мезе и выкладываешь их на тарелку для всех.',
  ),
  minutes: 7,
  key: { value: l('3', '3', '3'), label: l('meza', 'meze', 'мезе') },
  need: [
    { item: l('Krastavac, grčki jogurt', 'Cucumber, Greek yoghurt', 'Огурец, греческий йогурт'), qty: l('1 + 400 g', '1 + 400 g', '1 + 400 г') },
    { item: l('Plavi patlidžan, tahini', 'Aubergine, tahini', 'Баклажан, тахини'), qty: l('2 + 2 kašike', '2 + 2 tbsp', '2 + 2 ст. л.') },
    { item: l('Humus (11.4)', 'Hummus (11.4)', 'Хумус (11.4)'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Beli luk, limun, mirođija, maslinovo ulje, aleva paprika', 'Garlic, lemon, dill, olive oil, paprika', 'Чеснок, лимон, укроп, оливковое масло, паприка'), qty: l('—', '—', '—') },
    { item: l('Lepinje ili pita hleb', 'Flatbread or pitta', 'Лепёшки или пита'), qty: l('4', '4', '4') },
  ],
  why: l(
    'Meze je mediteranski način da se jede zajedno: više malih jela umesto jednog velikog. Sva tri se prave unapred, pa su savršeno predjelo za meni.',
    'Meze is the Mediterranean way of eating together: several small dishes instead of one big one. All three are made ahead, so they are a perfect starter for a menu.',
    'Мезе — средиземноморский способ есть вместе: несколько маленьких блюд вместо одного большого. Все три делают заранее, поэтому это идеальная закуска для меню.',
  ),
  steps: [
    {
      text: l('Izrendaj krastavac, posoli ga i ostavi 10 minuta, pa iscedi.', 'Grate the cucumber, salt it, leave 10 minutes, then squeeze it out.', 'Натри огурец, посоли, оставь на 10 минут и отожми.'),
      params: [l('prstohvat soli', 'a pinch of salt', 'щепотка соли'), l('iscedi u krpi', 'squeeze in a cloth', 'отожми в полотенце')],
      done: l('Krastavac je suv, a u činiji je pola šolje vode.', 'The cucumber is dry and there is half a cup of water in the bowl.', 'Огурец сухой, а в миске полстакана воды.'),
      why: l('Ista so kao kod kupusa (2.8.3): izvuče vodu. Bez toga cacik za sat postane supa.', 'The same salt as with cabbage (2.8.3): it draws out the water. Without it, tzatziki turns into soup within an hour.', 'Та же соль, что с капустой (2.8.3): вытягивает воду. Без этого цацики за час превратится в суп.'),
    },
    {
      text: l('Umešaj krastavac sa jogurtom, belim lukom, mirođijom i uljem.', 'Mix the cucumber with the yoghurt, garlic, dill and oil.', 'Смешай огурец с йогуртом, чесноком, укропом и маслом.'),
      params: [l('1 sat u frižideru', '1 hour in the fridge', '1 час в холодильнике')],
      done: l('Cacik je gust, beo i pun zelenih tačkica.', 'The tzatziki is thick, white and full of green flecks.', 'Цацики густой, белый, с зелёными крапинками.'),
    },
    {
      text: l('Ispeci patlidžane cele na plamenu ili žaru dok se ne spuste.', 'Char the aubergines whole over a flame or coals until they collapse.', 'Запеки баклажаны целиком на огне или углях, пока не опадут.'),
      params: [l('20–30 min', '20–30 min', '20–30 мин'), l('okreći', 'turn them', 'переворачивай')],
      done: l('Koža je crna i ispucala, a patlidžan je mekan kao jastuk.', 'The skin is black and split and the aubergine soft as a pillow.', 'Кожица чёрная и потрескавшаяся, баклажан мягкий, как подушка.'),
      why: l('Isto kao paprika u 14.5: koža izgori, meso dobije dimni ukus. To je ceo smisao baba ganuša.', 'The same as peppers in 14.5: the skin burns and the flesh takes on a smoky taste. That is the whole point of baba ganoush.', 'Как перец в 14.5: кожица сгорает, мякоть получает дымный вкус. В этом весь смысл баба гануша.'),
      drawing: 'charAubergine',
    },
    {
      text: l('Izvadi meso, ocedi ga i izgnječi sa tahinijem, limunom i belim lukom.', 'Scoop out the flesh, drain it and mash with tahini, lemon and garlic.', 'Выбери мякоть, дай стечь и разомни с тахини, лимоном и чесноком.'),
      params: [l('ocedi 10 min', 'drain 10 min', 'стечь 10 мин')],
      done: l('Baba ganuš je kremast, sa vlaknima patlidžana, i miriše na dim.', 'The baba ganoush is creamy with strands of aubergine and smells of smoke.', 'Баба гануш кремовый, с волокнами баклажана, и пахнет дымом.'),
    },
    {
      text: l('Rasporedi sva tri meza na tanjir i napravi udubljenje kašikom.', 'Spread all three meze on the plate and make a hollow with the back of a spoon.', 'Разложи все три мезе на тарелке и сделай ложкой углубление.'),
      params: [l('ulje u udubljenje', 'oil in the hollow', 'масло в углубление'), l('paprika, nana', 'paprika, mint', 'паприка, мята')],
      done: l('Svaki meze ima zlatnu baru ulja i boju na vrhu.', 'Each meze has a golden pool of oil and colour on top.', 'У каждого мезе золотая лужица масла и цвет сверху.'),
      why: l('Ulje u udubljenju nije ukras: svaki zalogaj hleba pokupi malo ulja. Mediteranska kuhinja (2.12.1).', 'The oil in the hollow is not decoration: every scoop of bread picks up a little oil. Mediterranean cooking (2.12.1).', 'Масло в углублении — не украшение: каждый кусок хлеба захватывает немного масла. Средиземноморская кухня (2.12.1).'),
      drawing: 'mezePlate',
    },
  ],
  mistake: {
    title: l('Patlidžan za baba ganuš pečen u rerni, u foliji.', 'Aubergine for baba ganoush baked in foil in the oven.', 'Баклажан для баба гануша запечён в духовке в фольге.'),
    fix: l(
      'Dobiješ mekan patlidžan, ali bez dima, i baba ganuš ima ukus kuvanog povrća. Plamen gasnog šporeta, žar ili grill rerne na najjače, bez folije.',
      'You get soft aubergine but no smoke, and the baba ganoush tastes of boiled vegetables. A gas flame, coals or the oven grill on full, no foil.',
      'Получается мягкий баклажан, но без дыма, и баба гануш на вкус как варёные овощи. Пламя газовой плиты, угли или гриль духовки на максимум, без фольги.',
    ),
  },
  think: {
    question: l('Za meni od tri jela, kad praviš meze?', 'For a three-course menu, when do you make the meze?', 'Для меню из трёх блюд когда готовишь мезе?'),
    options: [
      l('Dan ranije ili ujutru, a izlažeš ih pred dolazak gostiju', 'The day before or in the morning, plating them just before the guests arrive', 'Накануне или утром, а выкладываешь перед приходом гостей'),
      l('Kad gosti sednu', 'When the guests sit down', 'Когда гости сядут'),
      l('Posle glavnog jela', 'After the main course', 'После основного блюда'),
    ],
    answer: 0,
    explain: l(
      'Hladno predjelo koje se pravi unapred oslobađa šporet za glavno jelo. Isti plan kao u 2.1.4.',
      'A cold starter made ahead frees the stove for the main course. The same plan as in 2.1.4.',
      'Холодная закуска, сделанная заранее, освобождает плиту для основного блюда. Тот же план, что в 2.1.4.',
    ),
  },
  recipe: { name: l('Cacik', 'Tzatziki', 'Цацики'), protein: 5, carbs: 4, fat: 6, kcal: 90 },
}

const paella: Lesson = {
  id: '2.12.5',
  title: l('Paella', 'Paella', 'Паэлья'),
  goal: l(
    'Skuvaš paellu sa piletinom i škampima, zrno po zrno, sa hrskavim dnom.',
    'You cook a chicken and prawn paella, every grain separate, with a crisp base.',
    'Ты готовишь паэлью с курицей и креветками, зёрнышко к зёрнышку, с хрустящим дном.',
  ),
  minutes: 8,
  key: { value: l('ne mešaj', 'do not stir', 'не мешать'), label: l('posle fonda', 'after the stock', 'после бульона') },
  need: [
    { item: l('Pirinač bomba ili okrugli', 'Bomba or round rice', 'Рис бомба или круглый'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Pileći bataci bez kosti, škampi', 'Boneless chicken thighs, prawns', 'Куриные бёдра без кости, креветки'), qty: l('400 g + 300 g', '400 g + 300 g', '400 г + 300 г') },
    { item: l('Fond od ljuski škampa ili pileći, vreo', 'Prawn-shell or chicken stock, hot', 'Бульон из панцирей креветок или куриный, горячий'), qty: l('900 ml', '900 ml', '900 мл') },
    { item: l('Šafran, dimljena paprika, paradajz, beli luk', 'Saffron, smoked paprika, tomato, garlic', 'Шафран, копчёная паприка, помидор, чеснок'), qty: l('0.2 g + 1 kašičica + 1 + 3', '0.2 g + 1 tsp + 1 + 3', '0,2 г + 1 ч. л. + 1 + 3') },
    { item: l('Širok, plitak tiganj', 'Wide, shallow pan', 'Широкая мелкая сковорода'), qty: l('34–38 cm', '34–38 cm', '34–38 см') },
  ],
  why: l(
    'Paella je suprotnost rizotu (2.11.7): pirinač se ne meša, nego ostaje u tankom sloju i upija ukus. Najbolji deo je "socarrat", zapečeno dno koje pucketa.',
    'Paella is the opposite of risotto (2.11.7): the rice is not stirred but stays in a thin layer and soaks up flavour. The best part is the socarrat, the toasted base that crackles.',
    'Паэлья — противоположность ризотто (2.11.7): рис не мешают, он лежит тонким слоем и впитывает вкус. Лучшая часть — сокаррат, поджаристое дно, которое потрескивает.',
  ),
  steps: [
    {
      text: l('Zapeci piletinu u tiganju, pa skloni na ivicu.', 'Brown the chicken in the pan, then push it to the edge.', 'Обжарь курицу на сковороде и отодвинь к краю.'),
      params: [l('8 min', '8 min', '8 мин')],
      done: l('Piletina je zlatna sa svih strana.', 'The chicken is golden on all sides.', 'Курица золотистая со всех сторон.'),
      drawing: 'searRelease',
    },
    {
      text: l('U sredini napravi sofrito: beli luk, paradajz i papriku.', 'In the middle make the sofrito: garlic, tomato and paprika.', 'В центре сделай софрито: чеснок, помидор и паприку.'),
      params: [l('5 min', '5 min', '5 мин')],
      done: l('Paradajz se raspao u tamnu, gustu pastu.', 'The tomato has broken down into a dark, thick paste.', 'Помидор распался в тёмную густую пасту.'),
      why: l('Sofrito je osnova ukusa, kao soffritto u Italiji (2.11.5), samo sa paradajzom i paprikom.', 'Sofrito is the flavour base, like soffritto in Italy (2.11.5), only with tomato and paprika.', 'Софрито — основа вкуса, как соффритто в Италии (2.11.5), только с помидором и паприкой.'),
    },
    {
      text: l('Dodaj pirinač, promešaj sa sofritom, pa nalij vreo fond sa šafranom.', 'Add the rice, stir it into the sofrito, then pour in the hot saffron stock.', 'Добавь рис, перемешай с софрито и влей горячий бульон с шафраном.'),
      params: [l('3 : 1 fond : pirinač', '3 : 1 stock : rice', '3 : 1 бульон : рис'), l('ovo je poslednje mešanje', 'this is the last stir', 'это последнее перемешивание')],
      done: l('Pirinač je ravnomerno raspoređen po celom tiganju.', 'The rice is spread evenly across the whole pan.', 'Рис равномерно распределён по всей сковороде.'),
      why: l('Mešanje pušta skrob i pirinač postane kremast kao rizoto. Paella mora da bude rastresita.', 'Stirring releases starch and the rice turns creamy like risotto. Paella has to be loose.', 'Помешивание выпускает крахмал, и рис становится кремовым, как ризотто. Паэлья должна быть рассыпчатой.'),
      drawing: 'saffron',
    },
    {
      text: l('Kuvaj bez mešanja, a škampe utisni u pirinač pred kraj.', 'Cook without stirring, and press the prawns into the rice near the end.', 'Вари без помешивания, а креветки вдави в рис ближе к концу.'),
      params: [l('18–20 min', '18–20 min', '18–20 мин'), l('škampi poslednjih 5 min', 'prawns in the last 5 min', 'креветки в последние 5 мин')],
      done: l('Tečnost je upijena, a na površini se vide rupice.', 'The liquid is absorbed and small holes show on the surface.', 'Жидкость впиталась, на поверхности видны дырочки.'),
      why: l('Škampi su gotovi za 3–4 minuta (2.4.5). Ranije ubačeni postanu gumeni.', 'Prawns are done in 3–4 minutes (2.4.5). Added earlier, they turn rubbery.', 'Креветки готовы за 3–4 минуты (2.4.5). Добавленные раньше становятся резиновыми.'),
      drawing: 'paellaPan',
    },
    {
      text: l('Pojačaj vatru 1–2 minuta za socarrat, pa pokrij krpom i odmori.', 'Turn up the heat for 1–2 minutes for the socarrat, then cover with a cloth and rest.', 'Прибавь огонь на 1–2 минуты для сокаррата, затем накрой полотенцем и дай отдохнуть.'),
      params: [l('pucketanje', 'crackling', 'потрескивание'), l('5 min odmor', '5 min rest', '5 мин отдыха')],
      done: l('Dno pucketa i miriše na tost, ali ne na izgorelo.', 'The base crackles and smells of toast, but not burnt.', 'Дно потрескивает и пахнет тостом, но не гарью.'),
      why: l('Socarrat je kao korica pirinča u loncu: najukusniji deo, ali na ivici od zagorelog. Slušaj, ne gledaj.', 'Socarrat is like the crust of rice in a pot: the tastiest part, but on the edge of burnt. Listen, do not look.', 'Сокаррат — как корочка риса в кастрюле: самая вкусная часть, но на грани пригорания. Слушай, а не смотри.'),
    },
  ],
  mistake: {
    title: l('Paella mešana kao rizoto.', 'Paella stirred like risotto.', 'Паэлью мешают, как ризотто.'),
    fix: l(
      'Mešanje pušta skrob i dobiješ lepljiv narandžasti rizoto bez socarrata. Posle fonda, tiganj se samo okreće na vatri da se peče ravnomerno. Varjača odlazi u stranu.',
      'Stirring releases the starch and you get a sticky orange risotto with no socarrat. After the stock goes in, the pan is only turned over the heat so it cooks evenly. The spoon goes to one side.',
      'Помешивание выпускает крахмал, и получается липкое оранжевое ризотто без сокаррата. После бульона сковороду только поворачивают на огне для равномерности. Ложку откладывают в сторону.',
    ),
  },
  think: {
    question: l('Zašto je tiganj za paellu širok i plitak?', 'Why is a paella pan wide and shallow?', 'Почему сковорода для паэльи широкая и мелкая?'),
    options: [
      l('Tanak sloj pirinča upija ukus ravnomerno i pravi više socarrata', 'A thin layer of rice absorbs flavour evenly and makes more socarrat', 'Тонкий слой риса равномерно впитывает вкус и даёт больше сокаррата'),
      l('Lakše se pere', 'It is easier to wash', 'Её легче мыть'),
      l('Brže se ohladi', 'It cools faster', 'Она быстрее остывает'),
    ],
    answer: 0,
    explain: l(
      'Dubok lonac pravi mokar pirinač gore i zagoreo dole. Sloj od 1–2 cm se kuva isto od vrha do dna, kao pleh za povrće (13.4).',
      'A deep pot makes rice wet on top and burnt underneath. A 1–2 cm layer cooks the same top to bottom, like the vegetable tray (13.4).',
      'В глубокой кастрюле рис сверху мокрый, а снизу пригорает. Слой 1–2 см готовится одинаково сверху донизу, как противень с овощами (13.4).',
    ),
  },
  recipe: { name: l('Paella sa piletinom i škampima', 'Chicken and prawn paella', 'Паэлья с курицей и креветками'), protein: 11, carbs: 20, fat: 4.5, kcal: 165 },
}

export const mediterraneanLessons: Lesson[] = [oliveOil, herbSauces, grilledFish, meze, paella]
