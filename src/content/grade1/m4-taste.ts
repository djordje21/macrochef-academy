import { l, type Lesson } from '../types'

// Module 4 · Taste. Every lesson is a side-by-side tasting: the cook changes one thing and tastes
// the difference, so the rules come from their own tongue, not from the text.

const salt: Lesson = {
  id: '4.1',
  title: l('So: kada i koliko', 'Salt: when and how much', 'Соль: когда и сколько'),
  goal: l(
    'Posoliš jelo u pravom trenutku i u pravoj količini.',
    'You salt food at the right moment and in the right amount.',
    'Ты солишь блюдо в нужный момент и в нужном количестве.',
  ),
  minutes: 7,
  key: { value: l('1%', '1%', '1%'), label: l('od težine', 'of the weight', 'от веса') },
  need: [
    { item: l('Krupna so u činiji', 'Coarse salt in a bowl', 'Крупная соль в миске'), qty: l('1', '1', '1') },
    { item: l('Paradajz', 'Tomato', 'Помидор'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Kuhinjska vaga', 'Kitchen scale', 'Кухонные весы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'So ne čini jelo slanim, nego ukusnijim. Bez nje sve ostalo zvuči tiše.',
    'Salt does not make food salty, it makes it taste more of itself. Without it everything else is quieter.',
    'Соль делает блюдо не солёным, а вкуснее. Без неё всё остальное звучит тише.',
  ),
  steps: [
    {
      text: l('Uzimaj so prstima iz činije, ne iz slanika.', 'Take salt with your fingers from a bowl, not from a shaker.', 'Бери соль пальцами из миски, а не из солонки.'),
      params: [l('prstohvat ≈ 0,5 g', 'pinch ≈ 0.5 g', 'щепотка ≈ 0,5 г')],
      done: l(
        'Vidiš koliko soli uzimaš i gde pada.',
        'You see how much salt you take and where it falls.',
        'Ты видишь, сколько соли берёшь и куда она падает.',
      ),
      why: l(
        'Prsti pamte količinu. Slanik ti ne kaže ništa.',
        'Fingers learn the amount. A shaker tells you nothing.',
        'Пальцы запоминают количество. Солонка ничего не подскажет.',
      ),
    },
    {
      text: l('Soli sa visine, iznad cele površine.', 'Salt from a height, over the whole surface.', 'Соли с высоты, над всей поверхностью.'),
      params: [l('20–30 cm', '20–30 cm', '20–30 см')],
      done: l(
        'So pada ravnomerno, kao sneg, bez gomilica.',
        'The salt falls evenly, like snow, with no little piles.',
        'Соль падает равномерно, как снег, без горок.',
      ),
      why: l(
        'Iz blizine sva so padne na jedno mesto. Jedan zalogaj je preslan, ostali bljutavi.',
        'From close up all the salt lands in one spot. One bite is too salty, the rest bland.',
        'С близкого расстояния соль падает в одно место. Один кусок пересолен, остальные пресные.',
      ),
      drawing: 'saltRain',
    },
    {
      text: l(
        'Preseci paradajz, posoli jednu polovinu i sačekaj.',
        'Halve the tomato, salt one half and wait.',
        'Разрежь помидор, посоли одну половинку и подожди.',
      ),
      params: [l('5 min', '5 min', '5 мин')],
      done: l(
        'Posoljena polovina je sočnija i ima jači ukus paradajza.',
        'The salted half is juicier and tastes more of tomato.',
        'Посоленная половинка сочнее, и вкус помидора ярче.',
      ),
      why: l(
        'So izvlači sok i pojačava ukus koji je namirnica već imala.',
        'Salt draws out juice and amplifies the taste the food already had.',
        'Соль вытягивает сок и усиливает вкус, который у продукта уже был.',
      ),
      drawing: 'tomatoHalves',
    },
    {
      text: l(
        'Za meso i čorbe kreni od 1% soli na težinu.',
        'For meat and stews start from 1% salt by weight.',
        'Для мяса и рагу начинай с 1% соли от веса.',
      ),
      params: [l('10 g na 1 kg', '10 g per 1 kg', '10 г на 1 кг')],
      done: l(
        'Za 500 g mesa izmeriš 5 g soli.',
        'For 500 g of meat you weigh 5 g of salt.',
        'Для 500 г мяса ты отвешиваешь 5 г соли.',
      ),
      why: l(
        'To je polazna tačka, ne pravilo. Posle uvek probaš.',
        'This is a starting point, not a rule. You always taste after.',
        'Это отправная точка, а не правило. Потом всегда пробуешь.',
      ),
    },
    {
      text: l('Soli tokom kuvanja, po malo, a ne sve na kraju.', 'Salt during cooking, a little at a time, not all at the end.', 'Соли по ходу готовки, понемногу, а не всё в конце.'),
      done: l(
        'Probao si posle svakog dodavanja.',
        'You tasted after each addition.',
        'Ты пробовал после каждого добавления.',
      ),
      why: l(
        'So dodata rano uđe u namirnicu. Dodata na kraju ostane na površini.',
        'Salt added early gets into the food. Added at the end it stays on the surface.',
        'Соль, добавленная рано, проникает внутрь. Добавленная в конце остаётся на поверхности.',
      ),
    },
  ],
  mistake: {
    title: l('Sva so na kraju, u tanjiru.', 'All the salt at the end, on the plate.', 'Вся соль в конце, в тарелке.'),
    fix: l(
      'Spolja je slano, a iznutra bljutavo, pa dodaješ još. Soli u slojevima: namirnicu, pa jelo, pa probaj.',
      'The outside is salty and the inside bland, so you add more. Salt in layers: the ingredient, then the dish, then taste.',
      'Снаружи солоно, внутри пресно, и ты добавляешь ещё. Соли слоями: продукт, потом блюдо, потом пробуй.',
    ),
  },
  think: {
    question: l('Čorba je preslana. Šta radiš?', 'The stew is too salty. What do you do?', 'Суп пересолен. Что делаешь?'),
    options: [
      l('Ubaciš krompir da upije so', 'Add a potato to absorb the salt', 'Кладёшь картофелину, чтобы впитала соль'),
      l('Dodaš vodu ili fond i još povrća', 'Add water or stock and more vegetables', 'Добавляешь воду или бульон и ещё овощей'),
      l('Dodaš šećer', 'Add sugar', 'Добавляешь сахар'),
    ],
    answer: 1,
    explain: l(
      'Krompir upije tečnost zajedno sa solju u istom odnosu, pa skoro ne pomaže. Jedino pravo rešenje je razblažiti.',
      'A potato soaks up liquid together with the salt in the same ratio, so it barely helps. The only real fix is to dilute.',
      'Картофель впитывает жидкость вместе с солью в той же пропорции и почти не помогает. Единственное решение — разбавить.',
    ),
  },
}

const acid: Lesson = {
  id: '4.2',
  title: l('Kiselina', 'Acid', 'Кислота'),
  goal: l(
    'Oživiš „ravno“ jelo sa nekoliko kapi limuna ili sirćeta.',
    'You bring a flat dish to life with a few drops of lemon or vinegar.',
    'Ты оживляешь «плоское» блюдо несколькими каплями лимона или уксуса.',
  ),
  minutes: 5,
  key: { value: l('½ kašičice', '½ tsp', '½ ч. л.'), label: l('na 100 ml', 'per 100 ml', 'на 100 мл') },
  need: [
    { item: l('Čorba ili paradajz sos', 'Soup or tomato sauce', 'Суп или томатный соус'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Limun', 'Lemon', 'Лимон'), qty: l('½', '½', '½') },
    { item: l('Dve šolje', 'Two cups', 'Две чашки'), qty: l('2', '2', '2') },
  ],
  why: l(
    'Kad je jelo dovoljno slano, a i dalje mu nešto fali, skoro uvek mu fali kiselina.',
    'When a dish is salted enough and still missing something, it is almost always missing acid.',
    'Когда блюдо посолено достаточно, но чего-то не хватает, почти всегда не хватает кислоты.',
  ),
  steps: [
    {
      text: l('Sipaj istu čorbu u dve šolje.', 'Pour the same soup into two cups.', 'Разлей один и тот же суп в две чашки.'),
      params: [l('2 × 100 ml', '2 × 100 ml', '2 × 100 мл')],
      done: l('Obe šolje imaju isti ukus.', 'Both cups taste the same.', 'В обеих чашках одинаковый вкус.'),
      drawing: 'twoCups',
    },
    {
      text: l('U jednu šolju iscedi malo limuna.', 'Squeeze a little lemon into one cup.', 'Выжми немного лимона в одну чашку.'),
      params: [l('½ kašičice', '½ tsp', '½ ч. л.')],
      done: l('Promešao si i limun se rasporedio.', 'You stirred and the lemon is mixed in.', 'Ты перемешал, и лимон распределился.'),
      drawing: 'lemonDrops',
    },
    {
      text: l('Probaj prvo šolju bez limuna, pa onu sa njim.', 'Taste the cup without lemon first, then the one with it.', 'Сначала попробуй чашку без лимона, потом с ним.'),
      done: l(
        'Šolja sa limunom deluje svežije i punije, a ne kiselo.',
        'The cup with lemon tastes fresher and fuller, not sour.',
        'Чашка с лимоном кажется свежее и насыщеннее, а не кислой.',
      ),
      why: l(
        'Kiselina „podigne“ ukus kao što svetlo podigne boje u sobi.',
        'Acid lifts flavour the way light lifts the colours in a room.',
        'Кислота «поднимает» вкус, как свет поднимает цвета в комнате.',
      ),
    },
    {
      text: l(
        'Ako je kiselo, dodaj prstohvat šećera ili malo maslaca.',
        'If it is sour, add a pinch of sugar or a little butter.',
        'Если кисло, добавь щепотку сахара или немного сливочного масла.',
      ),
      params: [l('prstohvat', 'a pinch', 'щепотка')],
      done: l('Kiselost se povuče u pozadinu.', 'The sourness steps into the background.', 'Кислинка уходит на задний план.'),
      why: l(
        'Slatko i masno ublažavaju kiselo. Tako se ispravlja svaka preterana korekcija.',
        'Sweet and fat soften sour. That is how you undo any overcorrection.',
        'Сладкое и жирное смягчают кислое. Так исправляется любой перебор.',
      ),
    },
    {
      text: l(
        'Zapamti izvore kiseline koje imaš u kuhinji.',
        'Learn the sources of acid you have in the kitchen.',
        'Запомни источники кислоты, которые есть на кухне.',
      ),
      params: [l('limun, sirće, vino, paradajz, jogurt', 'lemon, vinegar, wine, tomato, yogurt', 'лимон, уксус, вино, помидор, йогурт')],
      done: l('U kuhinji imaš bar dva od njih.', 'You have at least two of them in the kitchen.', 'На кухне есть хотя бы два из них.'),
      drawing: 'acidsRow',
    },
  ],
  mistake: {
    title: l('Limun na početku dugog kuvanja.', 'Lemon at the start of a long cook.', 'Лимон в начале долгой готовки.'),
    fix: l(
      'Za sat krčkanja sveža kiselost nestane, a ostane samo gorčina kore. Limun i sirće dodaj na kraju, posle probe.',
      'After an hour of simmering the fresh sharpness is gone and only bitterness remains. Add lemon and vinegar at the end, after tasting.',
      'За час томления свежая кислинка исчезает, остаётся лишь горечь. Лимон и уксус добавляй в конце, после пробы.',
    ),
  },
  think: {
    question: l(
      'Jelo je dovoljno slano, a i dalje je „ravno“. Šta prvo probaš?',
      'The dish is salted enough and still tastes flat. What do you try first?',
      'Блюдо посолено, но всё ещё «плоское». Что попробуешь сначала?',
    ),
    options: [
      l('Još soli', 'More salt', 'Ещё соли'),
      l('Nekoliko kapi kiseline', 'A few drops of acid', 'Несколько капель кислоты'),
      l('Više začina', 'More spices', 'Больше специй'),
    ],
    answer: 1,
    explain: l(
      'Ako je soli dosta, još soli samo pravi slano jelo. Kiselina radi drugi posao: daje kontrast, pa ukus deluje jasnije.',
      'If there is enough salt, more only makes it salty. Acid does a different job: it adds contrast, so the flavour reads clearer.',
      'Если соли хватает, ещё соль сделает блюдо просто солёным. Кислота работает иначе: даёт контраст, и вкус становится чётче.',
    ),
  },
}

const fatSweet: Lesson = {
  id: '4.3',
  title: l('Masnoća i slatko', 'Fat and sweetness', 'Жир и сладость'),
  goal: l(
    'Koristiš masnoću da nosi ukus, a slatko da smiri kiselo.',
    'You use fat to carry flavour and sweetness to calm acidity.',
    'Ты используешь жир, чтобы он нёс вкус, а сладость — чтобы смягчить кислоту.',
  ),
  minutes: 6,
  key: { value: l('10 g', '10 g', '10 г'), label: l('putera', 'butter', 'масла') },
  need: [
    { item: l('Paradajz sos', 'Tomato sauce', 'Томатный соус'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('10 g', '10 g', '10 г') },
    { item: l('Šećer', 'Sugar', 'Сахар'), qty: l('1 g', '1 g', '1 г') },
    { item: l('Aleva paprika', 'Paprika', 'Молотая паприка'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
  ],
  why: l(
    'Mnogi ukusi i mirisi se rastvaraju u masti, a ne u vodi. Bez masnoće ostanu zarobljeni u začinu.',
    'Many flavours and aromas dissolve in fat, not in water. Without fat they stay locked in the spice.',
    'Многие вкусы и ароматы растворяются в жире, а не в воде. Без жира они остаются запертыми в специях.',
  ),
  steps: [
    {
      text: l('Zagrej sos i probaj ga čist.', 'Warm the sauce and taste it plain.', 'Подогрей соус и попробуй его без добавок.'),
      done: l('Sos je oštar i kiseo na jeziku.', 'The sauce tastes sharp and sour.', 'Соус резкий и кислый на языке.'),
    },
    {
      text: l('U pola sosa umešaj puter.', 'Stir butter into half of the sauce.', 'В половину соуса вмешай сливочное масло.'),
      params: [l('10 g', '10 g', '10 г')],
      done: l('Sos je sjajan i ukus je okrugliji.', 'The sauce is glossy and tastes rounder.', 'Соус блестит, вкус стал мягче и полнее.'),
      why: l(
        'Masnoća obloži jezik, pa ukus traje duže i oštre ivice se izgube.',
        'Fat coats the tongue, so flavour lasts longer and the sharp edges disappear.',
        'Жир обволакивает язык, вкус держится дольше, а острые углы сглаживаются.',
      ),
      drawing: 'butterSauce',
    },
    {
      text: l('U drugu polovinu dodaj prstohvat šećera.', 'Add a pinch of sugar to the other half.', 'В другую половину добавь щепотку сахара.'),
      params: [l('1 g', '1 g', '1 г')],
      done: l(
        'Kiselina je mekša, a sos nije sladak.',
        'The acidity is softer and the sauce is not sweet.',
        'Кислота мягче, а соус не сладкий.',
      ),
      why: l(
        'Malo slatkog balansira kiselo. Ako osetiš šećer, prešao si.',
        'A little sweetness balances acidity. If you can taste the sugar, you went too far.',
        'Немного сладости уравновешивает кислоту. Если чувствуешь сахар — перебор.',
      ),
    },
    {
      text: l('Probaj obe polovine jednu za drugom.', 'Taste both halves one after the other.', 'Попробуй обе половины одну за другой.'),
      done: l(
        'Znaš koja ti se više sviđa i možeš da kažeš zašto.',
        'You know which you like more and can say why.',
        'Ты знаешь, какая нравится больше, и можешь объяснить почему.',
      ),
    },
    {
      text: l(
        'Alevu papriku prži kratko u masnoći, sklonjeno sa vatre.',
        'Bloom paprika briefly in fat, off the heat.',
        'Обжарь паприку в жире коротко, сняв с огня.',
      ),
      params: [l('20–30 s', '20–30 s', '20–30 с')],
      done: l(
        'Masnoća postane crvena i zamiriše, a paprika ne potamni.',
        'The fat turns red and fragrant, and the paprika does not darken.',
        'Жир становится красным и ароматным, а паприка не темнеет.',
      ),
      why: l(
        'Boja i miris paprike se rastvaraju u masti. Na vreloj vatri zagori za par sekundi i zagorči.',
        'Paprika’s colour and aroma dissolve in fat. Over high heat it burns in seconds and turns bitter.',
        'Цвет и аромат паприки растворяются в жире. На сильном огне она сгорает за секунды и горчит.',
      ),
      drawing: 'bloomSpice',
    },
  ],
  mistake: {
    title: l('Aleva paprika u vrelo ulje na vatri.', 'Paprika into hot oil on the heat.', 'Паприка в горячее масло на огне.'),
    fix: l(
      'Za par sekundi pocrni i ceo gulaš bude gorak. Skloni šerpu sa vatre, dodaj papriku, pa odmah tečnost.',
      'In seconds it goes black and the whole goulash turns bitter. Take the pot off the heat, add the paprika, then the liquid right away.',
      'За пару секунд она чернеет, и весь гуляш горчит. Сними кастрюлю с огня, добавь паприку и сразу жидкость.',
    ),
  },
  think: {
    question: l('Zašto ljutinu gasi mleko, a ne voda?', 'Why does milk calm chilli heat and water does not?', 'Почему остроту гасит молоко, а не вода?'),
    options: [
      l('Ljutina se rastvara u masti, a ne u vodi', 'Chilli heat dissolves in fat, not in water', 'Острота растворяется в жире, а не в воде'),
      l('Mleko je hladnije', 'Milk is colder', 'Молоко холоднее'),
      l('Voda pojačava ljutinu', 'Water makes it hotter', 'Вода усиливает остроту'),
    ],
    answer: 0,
    explain: l(
      'Kapsaicin, materija koja peče, rastvara se u masti. Voda ga samo raznese po ustima, a mast iz mleka ga odnese.',
      'Capsaicin, the compound that burns, dissolves in fat. Water just spreads it around your mouth; the fat in milk carries it away.',
      'Капсаицин, вещество, которое жжёт, растворяется в жире. Вода лишь разносит его по рту, а жир молока уносит.',
    ),
  },
}

const heatUmami: Lesson = {
  id: '4.4',
  title: l('Ljuto i umami', 'Heat and umami', 'Острота и умами'),
  goal: l(
    'Dodaješ ljuto postepeno i prepoznaješ umami u namirnicama koje već imaš.',
    'You add chilli gradually and recognise umami in ingredients you already have.',
    'Ты добавляешь остроту постепенно и узнаёшь умами в продуктах, которые уже есть.',
  ),
  minutes: 6,
  key: { value: l('¼ kašičice', '¼ tsp', '¼ ч. л.'), label: l('po koraku', 'per step', 'за раз') },
  need: [
    { item: l('Čili pahuljice', 'Chilli flakes', 'Хлопья чили'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
    { item: l('Parmezan', 'Parmesan', 'Пармезан'), qty: l('20 g', '20 g', '20 г') },
    { item: l('Soja sos', 'Soy sauce', 'Соевый соус'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
    { item: l('Čorba', 'Soup', 'Суп'), qty: l('500 ml', '500 ml', '500 мл') },
  ],
  why: l(
    'Ljuto se ne može izvaditi kad jednom uđe. Umami je ukus koji jelu daje dubinu, i koji početnici najčešće ne znaju da imenuju.',
    'Heat cannot be taken out once it is in. Umami is the taste that gives a dish depth, and the one beginners most often cannot name.',
    'Остроту нельзя убрать, если она уже в блюде. Умами — вкус, который даёт блюду глубину, и новички чаще всего не могут его назвать.',
  ),
  steps: [
    {
      text: l('Dodaj ljuto u četvrtinama i čekaj.', 'Add chilli in quarters and wait.', 'Добавляй острое по четверти и жди.'),
      params: [l('¼ kašičice', '¼ tsp', '¼ ч. л.'), l('čekaj 1 min', 'wait 1 min', 'жди 1 мин')],
      done: l(
        'Probao si posle svake četvrtine i jednog minuta.',
        'You tasted after each quarter and a minute.',
        'Ты пробовал после каждой четверти и минуты ожидания.',
      ),
      why: l(
        'Ljutina se razvija u jelu i raste u ustima. Ono što je sada taman, za minut je previše.',
        'Heat develops in the dish and builds in the mouth. What is right now is too much a minute later.',
        'Острота раскрывается в блюде и нарастает во рту. То, что сейчас в самый раз, через минуту будет слишком.',
      ),
      drawing: 'chiliQuarter',
    },
    {
      text: l('Probaj komadić parmezana, polako.', 'Taste a piece of parmesan, slowly.', 'Медленно попробуй кусочек пармезана.'),
      params: [l('5 g', '5 g', '5 г')],
      done: l(
        'Posle slanog osetiš pun, „mesnat“ ukus koji dugo traje.',
        'After the saltiness you notice a full, "meaty" taste that lingers.',
        'После солёного чувствуешь полный, «мясной» вкус, который долго держится.',
      ),
      why: l('To je umami, peti ukus.', 'That is umami, the fifth taste.', 'Это умами, пятый вкус.'),
    },
    {
      text: l('Dodaj kap soja sosa u čorbu i probaj.', 'Add a dash of soy sauce to the soup and taste.', 'Добавь немного соевого соуса в суп и попробуй.'),
      params: [l('1 kašičica na 500 ml', '1 tsp per 500 ml', '1 ч. л. на 500 мл')],
      done: l(
        'Čorba deluje punije, a soja se ne oseti.',
        'The soup tastes fuller and you cannot taste the soy.',
        'Суп стал насыщеннее, а соевого соуса не чувствуется.',
      ),
      why: l(
        'Malo umamija pojača sve ostalo, a sam se ne primeti.',
        'A little umami boosts everything else without being noticed itself.',
        'Немного умами усиливает всё остальное, оставаясь незаметным.',
      ),
    },
    {
      text: l('Zapamti izvore umamija.', 'Learn the sources of umami.', 'Запомни источники умами.'),
      params: [l('parmezan, paradajz pire, pečurke, soja sos, inćuni', 'parmesan, tomato paste, mushrooms, soy sauce, anchovies', 'пармезан, томатная паста, грибы, соевый соус, анчоусы')],
      done: l('U kuhinji imaš bar jedan.', 'You have at least one in the kitchen.', 'На кухне есть хотя бы один.'),
      drawing: 'umamiRow',
    },
    {
      text: l(
        'Ako je preljuto, dodaj masnoću, slatko ili jogurt, a ne vodu.',
        'If it is too hot, add fat, sweetness or yogurt, not water.',
        'Если слишком остро, добавь жир, сладость или йогурт, но не воду.',
      ),
      done: l('Ljutina se smiri, a jelo ostane gusto.', 'The heat calms down and the dish stays thick.', 'Острота успокаивается, а блюдо остаётся густым.'),
      why: l('Vidi 4.3: ljutina se rastvara u masti.', 'See 4.3: chilli heat dissolves in fat.', 'См. 4.3: острота растворяется в жире.'),
    },
  ],
  mistake: {
    title: l('Cela kašičica ljutog odjednom.', 'A whole teaspoon of chilli at once.', 'Целая ложка острого за раз.'),
    fix: l(
      'Prvo deluje taman, a za minut je jelo nejestivo. Četvrtina, minut, proba. Ponavljaj.',
      'At first it seems right, a minute later the dish is inedible. A quarter, a minute, a taste. Repeat.',
      'Сначала кажется в самый раз, через минуту есть невозможно. Четверть, минута, проба. Повторяй.',
    ),
  },
  think: {
    question: l('Šta je umami?', 'What is umami?', 'Что такое умами?'),
    options: [
      l('Peti ukus, pun i „mesnat“', 'The fifth taste, full and "meaty"', 'Пятый вкус, полный и «мясной»'),
      l('Vrsta ljutine', 'A kind of chilli heat', 'Разновидность остроты'),
      l('Japanski začin', 'A Japanese spice', 'Японская приправа'),
    ],
    answer: 0,
    explain: l(
      'Pored slanog, kiselog, slatkog i gorkog, jezik oseća i umami. Ima ga u zrelom siru, paradajzu, pečurkama i dugo kuvanom mesu.',
      'Besides salty, sour, sweet and bitter, the tongue senses umami. It is in aged cheese, tomatoes, mushrooms and long-cooked meat.',
      'Кроме солёного, кислого, сладкого и горького, язык чувствует умами. Он есть в выдержанном сыре, помидорах, грибах и долго тушёном мясе.',
    ),
  },
}

const tasteAdjust: Lesson = {
  id: '4.5',
  title: l('Probaj i koriguj', 'Taste and adjust', 'Попробуй и поправь'),
  goal: l(
    'Probaš jelo i znaš redom šta da proveriš i kako da ispraviš.',
    'You taste a dish and know, in order, what to check and how to fix it.',
    'Ты пробуешь блюдо и знаешь, что проверять и как исправлять, по порядку.',
  ),
  minutes: 8,
  key: { value: l('4', '4', '4'), label: l('pitanja', 'questions', 'вопроса') },
  need: [
    { item: l('Jelo koje kuvaš', 'A dish you are cooking', 'Блюдо, которое готовишь'), qty: l('1', '1', '1') },
    { item: l('Čiste kašičice', 'Clean teaspoons', 'Чистые чайные ложки'), qty: l('5', '5', '5') },
    { item: l('So, limun, puter, šećer', 'Salt, lemon, butter, sugar', 'Соль, лимон, масло, сахар'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Kuvar ne pogađa ukus, nego ga proverava. Ova četiri pitanja su ceo modul u jednoj navici.',
    'A cook does not guess flavour, they check it. These four questions are the whole module in one habit.',
    'Повар не угадывает вкус, а проверяет его. Эти четыре вопроса — весь модуль в одной привычке.',
  ),
  steps: [
    {
      text: l('Probaj čistom kašičicom, svaki put novom.', 'Taste with a clean spoon, a fresh one each time.', 'Пробуй чистой ложкой, каждый раз новой.'),
      done: l('Kašičica posle probe ne ide nazad u šerpu.', 'A spoon never goes back into the pot after tasting.', 'Ложка после пробы не возвращается в кастрюлю.'),
      why: l('Higijena, i pošten ukus bez ostatka prethodne probe.', 'Hygiene, and an honest taste with nothing left from the last one.', 'Гигиена и честный вкус без остатков прошлой пробы.'),
      drawing: 'cleanSpoon',
    },
    {
      text: l('Prvo pitanje: ima li dovoljno soli?', 'First question: is there enough salt?', 'Первый вопрос: достаточно ли соли?'),
      done: l('Jelo nije bljutavo.', 'The dish is not bland.', 'Блюдо не пресное.'),
      why: l('So je prva, jer bez nje ostale korekcije ne rade.', 'Salt comes first, because without it the other fixes do not work.', 'Соль первая, потому что без неё остальные поправки не работают.'),
    },
    {
      text: l('Drugo: je li „ravno“? Dodaj kap kiseline.', 'Second: is it flat? Add a drop of acid.', 'Второй: «плоское» ли? Добавь каплю кислоты.'),
      done: l('Ukus je jasan i svež.', 'The flavour is clear and fresh.', 'Вкус ясный и свежий.'),
    },
    {
      text: l(
        'Treće: je li oštro ili kiselo? Dodaj masnoću ili prstohvat šećera.',
        'Third: is it harsh or sour? Add fat or a pinch of sugar.',
        'Третий: резко или кисло? Добавь жир или щепотку сахара.',
      ),
      done: l('Ukus je okrugao, bez oštrih ivica.', 'The flavour is round, with no sharp edges.', 'Вкус округлый, без резких углов.'),
    },
    {
      text: l(
        'Sačekaj minut, probaj ponovo, pa tek onda koriguj dalje.',
        'Wait a minute, taste again, and only then adjust further.',
        'Подожди минуту, попробуй снова и только потом поправляй дальше.',
      ),
      params: [l('1 min', '1 min', '1 мин')],
      done: l(
        'Svaka korekcija je bila mala i probana.',
        'Every adjustment was small and tasted.',
        'Каждая поправка была маленькой и проверенной.',
      ),
      why: l('Ukusu treba vreme da se rasporedi kroz jelo.', 'Flavour needs time to spread through the dish.', 'Вкусу нужно время, чтобы распределиться по блюду.'),
      drawing: 'tasteSteps',
    },
  ],
  mistake: {
    title: l('Sve korekcije odjednom.', 'All the fixes at once.', 'Все поправки разом.'),
    fix: l(
      'So, limun i šećer zajedno, pa ne znaš šta je pomoglo, a šta pokvarilo. Jedna korekcija, pa proba.',
      'Salt, lemon and sugar together, and you cannot tell what helped and what hurt. One fix, then taste.',
      'Соль, лимон и сахар вместе — и непонятно, что помогло, а что испортило. Одна поправка, затем проба.',
    ),
  },
  think: {
    question: l('Jelo je i preslano i preljuto. Šta radiš prvo?', 'The dish is both too salty and too hot. What do you do first?', 'Блюдо и пересолено, и слишком острое. Что делаешь сначала?'),
    options: [
      l('Dodaš još osnove: tečnost, povrće, pirinač', 'Add more of the base: liquid, vegetables, rice', 'Добавляешь основу: жидкость, овощи, рис'),
      l('Dodaš kiselinu', 'Add acid', 'Добавляешь кислоту'),
      l('Dodaš šećer', 'Add sugar', 'Добавляешь сахар'),
    ],
    answer: 0,
    explain: l(
      'Kad je nečega previše, jedino rešenje je da ima više svega ostalog. Razblaživanje popravi oba problema odjednom.',
      'When there is too much of something, the only fix is more of everything else. Diluting fixes both problems at once.',
      'Когда чего-то слишком много, единственный выход — больше всего остального. Разбавление решает обе проблемы сразу.',
    ),
  },
}

export const tasteLessons: Lesson[] = [salt, acid, fatSweet, heatUmami, tasteAdjust]
