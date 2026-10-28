import { l, type Lesson } from '../types'

// Module 9 · Sauces, after béchamel in 9.1: the other mother sauces and the derivatives a beginner
// meets first. Roux ratios follow 9.1; butter sauces are held by temperature, so every one names it.

const mornay: Lesson = {
  id: '9.2',
  title: l('Mornej: bešamel sa sirom', 'Mornay: béchamel with cheese', 'Морне: бешамель с сыром'),
  goal: l(
    'Od bešamela napraviš glatak sos od sira koji se ne zrni.',
    'You turn béchamel into a smooth cheese sauce that does not go grainy.',
    'Ты превращаешь бешамель в гладкий сырный соус без крупинок.',
  ),
  minutes: 5,
  key: { value: l('10%', '10%', '10%'), label: l('sir na sos', 'cheese to sauce', 'сыра к соусу') },
  need: [
    { item: l('Bešamel (9.1)', 'Béchamel (9.1)', 'Бешамель (9.1)'), qty: l('500 ml', '500 ml', '500 мл') },
    { item: l('Rendani tvrdi sir (grijer, parmezan, kačkavalj)', 'Grated hard cheese (Gruyère, Parmesan, Cheddar)', 'Тёртый твёрдый сыр (грюйер, пармезан, качкавал)'), qty: l('50 g', '50 g', '50 г') },
    { item: l('Senf', 'Mustard', 'Горчица'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
  ],
  why: l(
    'Prvi derivat: jedan osnovni sos, jedan dodatak, novo jelo. Tako radi cela klasična kuhinja sosova.',
    'Your first derivative: one mother sauce, one addition, a new dish. That is how the whole classic sauce system works.',
    'Первый производный соус: одна основа, одна добавка — новое блюдо. Так устроена вся классическая система соусов.',
  ),
  steps: [
    {
      text: l('Zagrej bešamel do krčkanja, pa skloni sa vatre.', 'Bring the béchamel to a simmer, then take it off the heat.', 'Доведи бешамель до томления и сними с огня.'),
      done: l('Sos je vruć, a na površini više nema mehurića.', 'The sauce is hot and has stopped bubbling.', 'Соус горячий, пузыри на поверхности исчезли.'),
      why: l('Sir se topi na oko 70°C. Na ključanju mu se protein steže i pušta masnoću.', 'Cheese melts at about 70°C. At a boil its protein tightens and lets go of the fat.', 'Сыр плавится примерно при 70°C. При кипении его белок сжимается и отдаёт жир.'),
    },
    {
      text: l('Umešaj sir u tri dela.', 'Stir in the cheese in three parts.', 'Вмешай сыр в три приёма.'),
      params: [l('3 × ~17 g', '3 × ~17 g', '3 × ~17 г'), l('van vatre', 'off the heat', 'вне огня')],
      done: l('Svaki deo je potpuno otopljen pre sledećeg.', 'Each part is fully melted before the next.', 'Каждая порция полностью расплавилась перед следующей.'),
      drawing: 'cheeseIn',
    },
    {
      text: l('Dodaj senf i probaj pre soli.', 'Add the mustard and taste before salting.', 'Добавь горчицу и попробуй перед солью.'),
      params: [l('1 kašičica', '1 tsp', '1 ч. л.')],
      done: l('Sos je slan taman koliko treba, ili mu fali malo.', 'The sauce is salty enough, or needs only a little.', 'Соус в меру солёный или требует совсем немного соли.'),
      why: l('Sir je već slan. Senf i kiselina sprečavaju da sos bude težak.', 'The cheese is already salty. Mustard\'s acidity keeps the sauce from feeling heavy.', 'Сыр уже солёный. Горчица и кислота не дают соусу быть тяжёлым.'),
    },
    {
      text: l('Preko povrća ili testenine, pa pod grejač rerne.', 'Pour over vegetables or pasta and put under the grill.', 'Полей овощи или пасту и поставь под гриль.'),
      params: [l('grill 250°C', 'grill 250°C', 'гриль 250°C'), l('3–5 min', '3–5 min', '3–5 мин')],
      done: l('Površina ima zlatne i tamne pege.', 'The top has golden and dark spots.', 'Поверхность в золотистых и тёмных пятнах.'),
      why: l('To je gratiniranje. Rerna iz 4.4, samo gornji grejač.', 'That is gratinating. The oven from 4.4, top element only.', 'Это гратинирование. Духовка из 4.4, только верхний нагрев.'),
    },
  ],
  mistake: {
    title: l('Sos od sira koji ključa na ringli.', 'Cheese sauce boiling on the stove.', 'Сырный соус кипит на плите.'),
    fix: l(
      'Sir se zrni i pušta žuto ulje. Kad se to desi, skloni sos, dodaj kašiku hladnog mleka i jako izmuti. Sledeći put sir ide uvek van vatre.',
      'The cheese goes grainy and releases yellow oil. When that happens, take it off, add a spoonful of cold milk and whisk hard. Next time the cheese always goes in off the heat.',
      'Сыр становится зернистым и выпускает жёлтое масло. Тогда сними соус, добавь ложку холодного молока и энергично взбей. В следующий раз сыр — только вне огня.',
    ),
  },
  think: {
    question: l('Koji sir ne valja za mornej?', 'Which cheese is wrong for Mornay?', 'Какой сыр не подходит для морне?'),
    options: [
      l('Mladi sir u kriškama koji se ne renda i ne topi', 'Fresh cheese that does not grate or melt', 'Свежий сыр, который не трётся и не плавится'),
      l('Grijer', 'Gruyère', 'Грюйер'),
      l('Parmezan', 'Parmesan', 'Пармезан'),
    ],
    answer: 0,
    explain: l(
      'Za sos treba sir koji se topi u niti, a ima ukusa: zreo i tvrd. Mladi sir ostane u grudvicama.',
      'A sauce needs a cheese that melts and has flavour: aged and hard. Fresh cheese stays in curds.',
      'Для соуса нужен плавкий и вкусный сыр: выдержанный и твёрдый. Свежий сыр остаётся комочками.',
    ),
  },
}

const veloute: Lesson = {
  id: '9.3',
  title: l('Velute i suprem', 'Velouté and suprême', 'Велюте и сюпрем'),
  goal: l(
    'Napraviš velute od pilećeg fonda i od njega suprem sos za piletinu.',
    'You make a velouté from chicken stock and turn it into suprême sauce for chicken.',
    'Ты готовишь велюте на курином бульоне и превращаешь его в соус сюпрем к курице.',
  ),
  minutes: 7,
  key: { value: l('1 : 1 : 16', '1 : 1 : 16', '1 : 1 : 16'), label: l('puter : brašno : fond', 'butter : flour : stock', 'масло : мука : бульон') },
  need: [
    { item: l('Puter i brašno', 'Butter and flour', 'Сливочное масло и мука'), qty: l('po 30 g', '30 g each', 'по 30 г') },
    { item: l('Pileći fond (8.1), topao', 'Chicken stock (8.1), hot', 'Куриный бульон (8.1), горячий'), qty: l('500 ml', '500 ml', '500 мл') },
    { item: l('Slatka pavlaka', 'Cream', 'Сливки'), qty: l('100 ml', '100 ml', '100 мл') },
    { item: l('Hladan puter, limun', 'Cold butter, lemon', 'Холодное масло, лимон'), qty: l('20 g + par kapi', '20 g + a few drops', '20 г + пара капель') },
  ],
  why: l(
    'Isti postupak kao bešamel, samo fond umesto mleka. Ako znaš 9.1, već znaš 80% ovog sosa.',
    'The same method as béchamel, with stock instead of milk. If you know 9.1, you already know 80% of this sauce.',
    'Тот же способ, что у бешамеля, только бульон вместо молока. Знаешь 9.1 — знаешь 80% этого соуса.',
  ),
  steps: [
    {
      text: l('Napravi zapršku i prži je do boje slame.', 'Make a roux and cook it to straw colour.', 'Сделай ру и обжарь до соломенного цвета.'),
      params: [l('30 g + 30 g', '30 g + 30 g', '30 г + 30 г'), l('3–4 min', '3–4 min', '3–4 мин')],
      done: l('Zaprška je svetlo zlatna i miriše na pečen orah.', 'The roux is pale gold and smells of toasted nuts.', 'Ру светло-золотистый и пахнет жареным орехом.'),
      why: l('Za bešamel je bela, za velute plava (svetla). Malo više prženja daje dublji ukus fondu.', 'For béchamel it stays white, for velouté it goes blond. A little more cooking deepens the stock flavour.', 'Для бешамеля — белый, для велюте — светлый. Чуть дольше обжарка даёт бульону глубину.'),
      drawing: 'roux',
    },
    {
      text: l('Dodaj topao fond u tri dela, mućenjem.', 'Add the hot stock in three parts, whisking.', 'Добавь горячий бульон в три приёма, взбивая.'),
      params: [l('3 × ~170 ml', '3 × ~170 ml', '3 × ~170 мл')],
      done: l('Bez grudvica, posle svakog dela.', 'No lumps, after every part.', 'Без комков после каждой порции.'),
      drawing: 'whiskMilk',
    },
    {
      text: l('Krčkaj i skidaj kožicu sa površine.', 'Simmer and skim the skin off the surface.', 'Томи и снимай плёнку с поверхности.'),
      params: [l('20 min', '20 min', '20 мин'), l('tiha vatra', 'low heat', 'слабый огонь')],
      done: l('Sos je sjajan i prekriva kašiku. To je velute.', 'The sauce is glossy and coats a spoon. That is velouté.', 'Соус блестящий и обволакивает ложку. Это велюте.'),
      why: l('Duže krčkanje od bešamela: fond pušta nečistoće koje izlaze gore i skidaju se.', 'A longer simmer than béchamel: the stock throws up impurities that you skim off.', 'Томится дольше бешамеля: бульон выбрасывает примеси, которые снимают сверху.'),
      drawing: 'skim',
    },
    {
      text: l('Za suprem: dodaj pavlaku i ukuvaj.', 'For suprême: add the cream and reduce.', 'Для сюпрема: добавь сливки и уварь.'),
      params: [l('100 ml', '100 ml', '100 мл'), l('5 min', '5 min', '5 мин')],
      done: l('Sos opet prekriva kašiku, sada svetliji i bogatiji.', 'The sauce coats the spoon again, now paler and richer.', 'Соус снова обволакивает ложку, теперь светлее и богаче.'),
      drawing: 'coatSpoon',
    },
    {
      text: l('Van vatre umešaj hladan puter i kapi limuna, pa posoli.', 'Off the heat, swirl in cold butter and drops of lemon, then salt.', 'Вне огня вмешай холодное масло и капли лимона, посоли.'),
      params: [l('20 g', '20 g', '20 г'), l('3–4 kapi', '3–4 drops', '3–4 капли')],
      done: l('Sos sija, a ukus je čist i blago kiseo na kraju.', 'The sauce shines and the taste is clean, lightly tart at the end.', 'Соус блестит, вкус чистый, с лёгкой кислинкой в конце.'),
      why: l('Hladan puter daje sjaj i telo. Limun seče pavlaku, kao u 5.2.', 'Cold butter gives shine and body. Lemon cuts the cream, as in 5.2.', 'Холодное масло даёт блеск и тело. Лимон «режет» сливки, как в 5.2.'),
    },
  ],
  mistake: {
    title: l('Hladan fond u vruću zapršku, ili vruć u vruću bez mućenja.', 'Cold stock into hot roux, or hot into hot without whisking.', 'Холодный бульон в горячий ру или горячий без взбивания.'),
    fix: l(
      'Oba puta dobiješ grudve. Pravilo: jedno toplo, drugo ne vrelo, i mućenje od prve kapi. Grudve procedi kroz sito, sos se spasi.',
      'Both give lumps. The rule: one warm, the other not scorching, and whisk from the first drop. Strain the lumps through a sieve and the sauce is saved.',
      'Оба раза получаются комки. Правило: одно тёплое, другое не обжигающее, и взбивать с первой капли. Комки процеди — соус спасён.',
    ),
  },
  think: {
    question: l('Velute je preslan. Fond je bio posoljen. Šta naučiš?', 'The velouté is too salty. The stock was salted. What is the lesson?', 'Велюте пересолен. Бульон был солёный. Какой вывод?'),
    options: [
      l('Fond se ne soli, jer se ukuvava', 'Stock is not salted, because it gets reduced', 'Бульон не солят: его уваривают'),
      l('Velute uvek traži manje brašna', 'Velouté always needs less flour', 'Велюте всегда нужно меньше муки'),
      l('Pavlaka uvek popravi so', 'Cream always fixes salt', 'Сливки всегда исправят соль'),
    ],
    answer: 0,
    explain: l(
      'Pravilo iz 8.1 sada naplaćuje: 20 minuta krčkanja i ukuvavanje sa pavlakom koncentrišu so. Soli se sos, na kraju.',
      'The rule from 8.1 comes due: 20 minutes of simmering and reducing with cream concentrate the salt. You salt the sauce, at the end.',
      'Правило из 8.1 даёт о себе знать: 20 минут томления и уваривание со сливками концентрируют соль. Солят соус — в конце.',
    ),
  },
}

const brownSauce: Lesson = {
  id: '9.4',
  title: l('Smeđi sos', 'Brown sauce', 'Коричневый соус'),
  goal: l(
    'Od tamnog fonda napraviš smeđi sos koji sija i prekriva kašiku.',
    'You make a glossy brown sauce from brown stock that coats a spoon.',
    'Ты готовишь из тёмного бульона блестящий коричневый соус, обволакивающий ложку.',
  ),
  minutes: 7,
  key: { value: l('1 : 1 : 11', '1 : 1 : 11', '1 : 1 : 11'), label: l('mast : brašno : fond', 'fat : flour : stock', 'жир : мука : бульон') },
  need: [
    { item: l('Tamni goveđi fond (8.2)', 'Brown beef stock (8.2)', 'Тёмный говяжий бульон (8.2)'), qty: l('1 l', '1 l', '1 л') },
    { item: l('Ulje ili puter i brašno', 'Oil or butter and flour', 'Масло и мука'), qty: l('po 90 g', '90 g each', 'по 90 г') },
    { item: l('Luk, šargarepa, celer, sitno', 'Onion, carrot, celery, finely diced', 'Лук, морковь, сельдерей, мелко'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Paradajz pire', 'Tomato paste', 'Томатная паста'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('Lovor, majčina dušica', 'Bay, thyme', 'Лавр, тимьян'), qty: l('1 + 2 grančice', '1 + 2 sprigs', '1 + 2 веточки') },
  ],
  why: l(
    'Smeđi sos (španjol) je osnova za sve tamne sosove uz pečenje, biftek i divljač. Ukuvan sa još fonda postaje demi-glas.',
    'Brown sauce (espagnole) is the base for every dark sauce served with roasts, steak and game. Reduced with more stock it becomes demi-glace.',
    'Коричневый соус (эспаньоль) — основа всех тёмных соусов к жаркому, стейку и дичи. Уваренный с бульоном, он становится демигласом.',
  ),
  steps: [
    {
      text: l('Povrće prži na masnoći do braon boje.', 'Fry the vegetables in the fat until brown.', 'Обжарь овощи на жиру до коричневого цвета.'),
      params: [l('srednje jaka vatra', 'medium-high heat', 'огонь выше среднего'), l('8–10 min', '8–10 min', '8–10 мин')],
      done: l('Ivice povrća su tamne, a luk sladak na ukus.', 'The edges of the vegetables are dark and the onion tastes sweet.', 'Края овощей тёмные, лук сладкий на вкус.'),
      why: l('Braon povrće je prvi sloj boje. Svetlo povrće daje bled sos.', 'Browned vegetables are the first layer of colour. Pale vegetables give a pale sauce.', 'Обжаренные овощи — первый слой цвета. Бледные дают бледный соус.'),
    },
    {
      text: l('Dodaj brašno i prži ga do boje lešnika.', 'Add the flour and cook it to hazelnut brown.', 'Добавь муку и обжарь до цвета лесного ореха.'),
      params: [l('tiha vatra', 'low heat', 'слабый огонь'), l('8–10 min', '8–10 min', '8–10 мин')],
      done: l('Zaprška je braon kao kakao, miriše na pečen hleb, nigde crna.', 'The roux is cocoa brown, smells of toast, and is nowhere black.', 'Ру цвета какао, пахнет поджаренным хлебом, нигде не чёрный.'),
      why: l('Tamna zaprška manje zgušnjava od bele, ali daje ukus. Zato ide više brašna nego za bešamel.', 'A dark roux thickens less than a white one but gives flavour. That is why there is more flour than for béchamel.', 'Тёмный ру загущает слабее белого, зато даёт вкус. Поэтому муки больше, чем для бешамеля.'),
      drawing: 'brownRoux',
    },
    {
      text: l('Umešaj pire, pa dolivaj topao fond u delovima.', 'Stir in the paste, then add the hot stock in parts.', 'Вмешай пасту, потом вливай горячий бульон частями.'),
      params: [l('fond u 4 dela', 'stock in 4 parts', 'бульон в 4 приёма')],
      done: l('Sos je gladak, bez grudvica, boje mlečne čokolade.', 'The sauce is smooth, lump-free, the colour of milk chocolate.', 'Соус гладкий, без комков, цвета молочного шоколада.'),
      drawing: 'whiskMilk',
    },
    {
      text: l('Dodaj začinsko bilje i krčkaj, skidajući masnoću.', 'Add the herbs and simmer, skimming off the fat.', 'Добавь травы и томи, снимая жир.'),
      params: [l('45–60 min', '45–60 min', '45–60 мин'), l('ostane ~700 ml', 'leaves ~700 ml', 'остаётся ~700 мл')],
      done: l('Sos sija i prekriva kašiku, trag prsta ostaje čist.', 'The sauce shines and coats the spoon; a finger line stays clean.', 'Соус блестит, обволакивает ложку, след пальца остаётся чистым.'),
      drawing: 'coatSpoon',
    },
    {
      text: l('Procedi kroz sito, pritiskajući povrće.', 'Strain through a sieve, pressing the vegetables.', 'Процеди через сито, отжимая овощи.'),
      done: l('Sos je bez komadića, gust i taman.', 'The sauce is free of bits, thick and dark.', 'Соус без кусочков, густой и тёмный.'),
      why: l('Ovaj sos ide u frižider 5 dana ili u zamrzivač 3 meseca, u porcijama za tiganj.', 'This sauce keeps 5 days in the fridge or 3 months frozen, in pan-sized portions.', 'Этот соус хранится 5 дней в холодильнике или 3 месяца в морозилке, порциями под сковороду.'),
    },
  ],
  mistake: {
    title: l('Zaprška izgorela "samo malo".', 'A roux burnt "just a little".', 'Ру подгорел «чуть-чуть».'),
    fix: l(
      'Crne tačkice nose gorčinu kroz ceo litar sosa i ne mogu da se procede. Baci zapršku i počni ponovo: 2 minuta posla protiv litra fonda.',
      'Black specks carry bitterness through a whole litre and cannot be strained out. Throw the roux away and start again: 2 minutes of work against a litre of stock.',
      'Чёрные точки несут горечь через весь литр и не процеживаются. Выброси ру и начни заново: 2 минуты работы против литра бульона.',
    ),
  },
  think: {
    question: l('Zašto za smeđi sos ide 90 g brašna na litar, a za bešamel 60 g?', 'Why 90 g of flour per litre for brown sauce, but 60 g for béchamel?', 'Почему для коричневого соуса 90 г муки на литр, а для бешамеля 60 г?'),
    options: [
      l('Prženo brašno slabije zgušnjava', 'Browned flour thickens less', 'Обжаренная мука хуже загущает'),
      l('Fond je ređi od mleka', 'Stock is thinner than milk', 'Бульон жиже молока'),
      l('Da bi sos bio slaniji', 'To make the sauce saltier', 'Чтобы соус был солонее'),
    ],
    answer: 0,
    explain: l(
      'Toplota menja skrob u brašnu. Što je zaprška tamnija, to više ukusa, a manje gustine po gramu. Zato tamna zaprška ide u većoj količini.',
      'Heat changes the starch in flour. The darker the roux, the more flavour and the less thickening per gram. So a dark roux goes in a larger amount.',
      'Жар меняет крахмал муки. Чем темнее ру, тем больше вкуса и меньше густоты на грамм. Поэтому тёмного ру кладут больше.',
    ),
  },
}

const tomatoSauce: Lesson = {
  id: '9.5',
  title: l('Paradajz sos', 'Tomato sauce', 'Томатный соус'),
  goal: l(
    'Skuvaš gust, sladak paradajz sos od konzerve za 30 minuta.',
    'You make a thick, sweet tomato sauce from a tin in 30 minutes.',
    'Ты варишь густой сладкий томатный соус из консервы за 30 минут.',
  ),
  minutes: 5,
  key: { value: l('30 min', '30 min', '30 мин'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Pelat paradajz, ceo', 'Whole peeled tomatoes, tinned', 'Очищенные томаты целые, консервы'), qty: l('2 × 400 g', '2 × 400 g', '2 × 400 г') },
    { item: l('Maslinovo ulje', 'Olive oil', 'Оливковое масло'), qty: l('40 ml', '40 ml', '40 мл') },
    { item: l('Crni luk, sitno', 'Onion, finely diced', 'Лук, мелко'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Beli luk, listići', 'Garlic, sliced', 'Чеснок, пластинками'), qty: l('3 čena', '3 cloves', '3 зубчика') },
    { item: l('Bosiljak, so', 'Basil, salt', 'Базилик, соль'), qty: l('nekoliko listova', 'a few leaves', 'несколько листьев') },
  ],
  why: l(
    'Paradajz iz konzerve je zreliji od svežeg koji kupiš zimi. Dobar sos od konzerve je osnova za testeninu, picu, ćufte i šakšuku.',
    'Tinned tomatoes are riper than the fresh ones you buy in winter. A good tinned tomato sauce is the base for pasta, pizza, meatballs and shakshuka.',
    'Томаты из банки спелее свежих, которые покупаешь зимой. Хороший соус из консервы — основа для пасты, пиццы, тефтелей и шакшуки.',
  ),
  steps: [
    {
      text: l('Dinstaj luk na ulju dok ne omekša, bez boje.', 'Sweat the onion in the oil until soft, without colour.', 'Томи лук на масле до мягкости, без цвета.'),
      params: [l('srednja vatra', 'medium heat', 'средний огонь'), l('8 min', '8 min', '8 мин')],
      done: l('Luk je providan i sladak.', 'The onion is translucent and sweet.', 'Лук прозрачный и сладкий.'),
      drawing: 'sweatVeg',
    },
    {
      text: l('Dodaj beli luk tek na kraju, na minut.', 'Add the garlic only at the end, for a minute.', 'Добавь чеснок в самом конце, на минуту.'),
      params: [l('1 min', '1 min', '1 мин')],
      done: l('Beli luk miriše, a nije potamneo.', 'The garlic smells fragrant and has not darkened.', 'Чеснок пахнет, но не потемнел.'),
      why: l('Beli luk gori za sekunde i postaje gorak. Luk mu je štit.', 'Garlic burns in seconds and turns bitter. The onion protects it.', 'Чеснок горит за секунды и горчит. Лук его защищает.'),
    },
    {
      text: l('Paradajz zgnječi rukom i dodaj sa sokom.', 'Crush the tomatoes by hand and add them with their juice.', 'Раздави томаты руками и добавь вместе с соком.'),
      params: [l('800 g', '800 g', '800 г')],
      done: l('Komadi su veličine palca, bez celih plodova.', 'The pieces are thumb-sized, no whole tomatoes left.', 'Куски размером с палец, целых плодов нет.'),
      why: l('Blender razbije semenke i doda gorčinu. Ruka ostavi teksturu.', 'A blender breaks the seeds and adds bitterness. Your hand leaves texture.', 'Блендер дробит семена и добавляет горечь. Руки оставляют текстуру.'),
    },
    {
      text: l('Krčkaj otklopljeno, uz povremeno mešanje.', 'Simmer uncovered, stirring now and then.', 'Томи без крышки, иногда помешивая.'),
      params: [l('25–30 min', '25–30 min', '25–30 мин')],
      done: l('Ulje izlazi na ivice, a varjača ostavlja trag na dnu.', 'The oil rises at the edges and a spoon leaves a track on the bottom.', 'Масло выходит по краям, ложка оставляет след на дне.'),
      why: l('Voda isparava i ukus se koncentriše. Ulje na ivicama znači da je vode malo.', 'Water evaporates and the flavour concentrates. Oil at the edges means little water is left.', 'Вода испаряется, вкус концентрируется. Масло по краям значит, что воды осталось мало.'),
      drawing: 'tomatoSimmer',
    },
    {
      text: l('Posoli, probaj, i na kraju ubaci bosiljak.', 'Salt, taste, and add the basil at the end.', 'Посоли, попробуй и в конце добавь базилик.'),
      params: [l('~8 g soli', '~8 g salt', '~8 г соли')],
      done: l('Sos je sladak, kiseo i slan u ravnoteži.', 'The sauce is sweet, sharp and salty in balance.', 'Соус сладкий, кислый и солёный в балансе.'),
      why: l('Ako je i dalje oštro kiseo, kašičica putera ili prstohvat šećera ga smiri (5.3).', 'If it is still too sharp, a teaspoon of butter or a pinch of sugar calms it (5.3).', 'Если всё ещё слишком кисло, ложка масла или щепотка сахара смягчат (5.3).'),
    },
  ],
  mistake: {
    title: l('Sos kuvan 10 minuta, pa vodenast na testenini.', 'A sauce cooked 10 minutes, then watery on the pasta.', 'Соус варили 10 минут, и он водянистый на пасте.'),
    fix: l(
      'Konzerva je pola sok. Taj sok mora da ispari da bi se ukus skupio. Kriterijum nije vreme nego trag varjače na dnu i ulje na ivicama.',
      'A tin is half juice. That juice must evaporate for the flavour to concentrate. The test is not time but the spoon track on the bottom and oil at the edges.',
      'Банка — наполовину сок. Он должен испариться, чтобы вкус собрался. Критерий не время, а след ложки на дне и масло по краям.',
    ),
  },
  think: {
    question: l('Zašto se bosiljak dodaje na kraju, a ne na početku?', 'Why does basil go in at the end, not at the start?', 'Почему базилик добавляют в конце, а не в начале?'),
    options: [
      l('Njegov miris nestaje u toploti za par minuta', 'Its aroma disappears in the heat within minutes', 'Его аромат исчезает от жара за пару минут'),
      l('Da ne bi zgusnuo sos', 'So it does not thicken the sauce', 'Чтобы не загустил соус'),
      l('Jer je gorak dok se kuva', 'Because it is bitter while cooking', 'Потому что горчит при варке'),
    ],
    answer: 0,
    explain: l(
      'Meko lišće (bosiljak, peršun, vlašac) nosi miris u lako isparljivim uljima. Tvrdo bilje (lovor, majčina dušica) može dugo da se kuva.',
      'Soft herbs (basil, parsley, chives) carry their aroma in volatile oils. Hard herbs (bay, thyme) can cook for a long time.',
      'Нежная зелень (базилик, петрушка, лук-резанец) хранит аромат в летучих маслах. Жёсткие травы (лавр, тимьян) можно долго варить.',
    ),
  },
  recipe: { name: l('Paradajz sos', 'Tomato sauce', 'Томатный соус'), protein: 1.1, carbs: 5.3, fat: 4.9, kcal: 70 },
}

const hollandaise: Lesson = {
  id: '9.6',
  title: l('Holandez', 'Hollandaise', 'Голландский соус'),
  goal: l(
    'Napraviš holandez na pari, gust i sjajan, i znaš da ga spasiš ako se razdvoji.',
    'You make hollandaise over steam, thick and glossy, and you know how to save it if it splits.',
    'Ты готовишь голландский соус на пару, густой и блестящий, и знаешь, как спасти его, если он расслоится.',
  ),
  minutes: 8,
  key: { value: l('65°C', '65°C', '65°C'), label: l('sos', 'sauce', 'соус') },
  need: [
    { item: l('Žumanca', 'Egg yolks', 'Желтки'), qty: l('3 kom', '3', '3 шт') },
    { item: l('Puter, otopljen i topao', 'Butter, melted and warm', 'Сливочное масло, растопленное, тёплое'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Voda i limunov sok', 'Water and lemon juice', 'Вода и лимонный сок'), qty: l('po 1 kašika', '1 tbsp each', 'по 1 ст. л.') },
    { item: l('Metalna činija, šerpica, žica', 'Metal bowl, small pan, whisk', 'Металлическая миска, кастрюлька, венчик'), qty: l('1', '1', '1') },
    { item: l('So, malo kajenskog bibera', 'Salt, a little cayenne', 'Соль, немного кайенского перца'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Holandez je emulzija kao majonez iz 3.2, samo topla. Žumance drži puter u kapljicama, a toplota je jedina stvar koja može da pokvari sve.',
    'Hollandaise is an emulsion like the mayonnaise in 3.2, only warm. The yolk holds the butter in droplets, and heat is the one thing that can ruin it all.',
    'Голландский соус — эмульсия, как майонез из 3.2, только тёплая. Желток держит масло каплями, и только температура может всё испортить.',
  ),
  steps: [
    {
      text: l('Postavi činiju iznad šerpe sa vodom koja jedva krčka.', 'Set the bowl over a pan of barely simmering water.', 'Поставь миску над кастрюлей с едва томящейся водой.'),
      params: [l('dno ne dodiruje vodu', 'bottom not touching water', 'дно не касается воды')],
      done: l('Ispod činije je para, ne ključala voda.', 'There is steam under the bowl, not boiling water.', 'Под миской пар, а не кипящая вода.'),
      why: l('Para greje nežno i ravnomerno. Direktna vatra skuva žumance za sekundu.', 'Steam heats gently and evenly. Direct heat cooks a yolk in a second.', 'Пар греет мягко и равномерно. Прямой огонь сварит желток за секунду.'),
      drawing: 'bainMarie',
    },
    {
      text: l('Muti žumanca sa vodom i limunom do gustog.', 'Whisk the yolks with water and lemon until thick.', 'Взбивай желтки с водой и лимоном до густоты.'),
      params: [l('3–4 min', '3–4 min', '3–4 мин'), l('60–65°C', '60–65°C', '60–65°C')],
      done: l('Žica ostavlja tragove, a smesa pada u traku koja se zadrži sekund.', 'The whisk leaves tracks and the mix falls in a ribbon that holds for a second.', 'Венчик оставляет следы, масса падает лентой, которая держится секунду.'),
      why: l('Žumance se zgusne od toplote, ali se ne zgruša ispod 70°C. Ako se činija ugreje previše, skloni je na trenutak.', 'Yolk thickens with heat but does not set below 70°C. If the bowl gets too hot, lift it off for a moment.', 'Желток густеет от тепла, но не сворачивается ниже 70°C. Если миска перегрелась — сними её на мгновение.'),
      drawing: 'ribbon',
    },
    {
      text: l('Skloni činiju i dodaj topao puter u tankom mlazu, mućenjem.', 'Lift the bowl off and pour in the warm butter in a thin stream, whisking.', 'Сними миску и вливай тёплое масло тонкой струйкой, взбивая.'),
      params: [l('puter ~60°C', 'butter ~60°C', 'масло ~60°C'), l('prvih 50 g kap po kap', 'first 50 g drop by drop', 'первые 50 г по капле')],
      done: l('Sos je gust kao majonez, a na površini nema masnoće.', 'The sauce is as thick as mayonnaise with no fat on the surface.', 'Соус густой, как майонез, без жира на поверхности.'),
      why: l('Isto pravilo kao u 3.2: emulzija prvo mora da se uhvati, pa onda prima brže.', 'The same rule as 3.2: the emulsion has to catch first, then it takes more faster.', 'То же правило, что в 3.2: эмульсия сначала должна схватиться, потом принимает быстрее.'),
      drawing: 'butterStream',
    },
    {
      text: l('Posoli, dodaj kajenski biber i limun po ukusu.', 'Season with salt, cayenne and lemon to taste.', 'Приправь солью, кайенским перцем и лимоном по вкусу.'),
      done: l('Ukus je pun puter, a na kraju čist i kiseo.', 'It tastes of rich butter with a clean, tart finish.', 'Вкус насыщенно сливочный с чистой кислинкой в конце.'),
      why: l('Ako je pregust, kašika tople vode ga razredi.', 'If too thick, a spoon of warm water loosens it.', 'Если слишком густой, ложка тёплой воды его разбавит.'),
    },
    {
      text: l('Drži sos toplim, ne vrelim, i služi u roku od sat vremena.', 'Keep the sauce warm, not hot, and serve within an hour.', 'Держи соус тёплым, не горячим, и подай в течение часа.'),
      params: [l('60–65°C', '60–65°C', '60–65°C'), l('max 1 h', 'max 1 h', 'макс. 1 ч')],
      done: l('Posle 15 minuta sos je i dalje gladak i sjajan.', 'After 15 minutes the sauce is still smooth and glossy.', 'Через 15 минут соус всё ещё гладкий и блестящий.'),
      why: l('Topao sos sa jajetom je idealan za bakterije. Ne čuva se i ne podgreva.', 'A warm egg sauce is ideal for bacteria. It is not stored or reheated.', 'Тёплый соус с яйцом — идеальная среда для бактерий. Его не хранят и не подогревают.'),
    },
  ],
  mistake: {
    title: l('Sos se razdvojio: žute grudvice plivaju u masnoći.', 'The sauce split: yellow curds floating in fat.', 'Соус расслоился: жёлтые крупинки плавают в жире.'),
    fix: l(
      'U čistoj činiji umuti novo žumance sa kašikom tople vode, pa u njega dodaj razdvojeni sos kap po kap, kao da je puter. Emulzija se vrati.',
      'In a clean bowl whisk a fresh yolk with a spoon of warm water, then add the split sauce drop by drop, as if it were butter. The emulsion comes back.',
      'В чистой миске взбей новый желток с ложкой тёплой воды и добавляй к нему расслоившийся соус по капле, как масло. Эмульсия вернётся.',
    ),
  },
  think: {
    question: l('Činija je vrela, a žumanca su počela da se zrne na ivicama. Šta prvo?', 'The bowl is hot and the yolks are starting to curdle at the edges. What first?', 'Миска горячая, желтки начали сворачиваться по краям. Что сначала?'),
    options: [
      l('Skloniš činiju sa pare i dodaš kašiku hladne vode', 'Lift the bowl off the steam and add a spoon of cold water', 'Снимаешь миску с пара и добавляешь ложку холодной воды'),
      l('Pojačaš mućenje i ostaviš na pari', 'Whisk harder and leave it on the steam', 'Взбиваешь сильнее и оставляешь на пару'),
      l('Odmah dodaš sav puter', 'Add all the butter at once', 'Сразу добавляешь всё масло'),
    ],
    answer: 0,
    explain: l(
      'Problem je toplota, pa je rešenje hlađenje. Hladna voda spusti temperaturu za par stepeni i zaustavi zgrušavanje.',
      'The problem is heat, so the fix is cooling. Cold water drops the temperature a few degrees and stops the curdling.',
      'Проблема в жаре, значит решение — охлаждение. Холодная вода снижает температуру на пару градусов и останавливает свёртывание.',
    ),
  },
}

const bearnaise: Lesson = {
  id: '9.7',
  title: l('Bearnez', 'Béarnaise', 'Беарнский соус'),
  goal: l(
    'Napraviš bearnez: holandez sa redukcijom sirćeta, ljutike i estragona, za biftek.',
    'You make béarnaise: hollandaise built on a reduction of vinegar, shallot and tarragon, for steak.',
    'Ты готовишь беарнез: голландский соус на редукции уксуса, шалота и эстрагона — к стейку.',
  ),
  minutes: 7,
  key: { value: l('2 kašike', '2 tbsp', '2 ст. л.'), label: l('redukcija', 'reduction', 'редукция') },
  need: [
    { item: l('Belo vinsko sirće i belo vino', 'White wine vinegar and white wine', 'Белый винный уксус и белое вино'), qty: l('po 50 ml', '50 ml each', 'по 50 мл') },
    { item: l('Ljutika, sitno', 'Shallot, finely chopped', 'Шалот, мелко'), qty: l('2 kom', '2', '2 шт') },
    { item: l('Estragon, peteljke i listovi', 'Tarragon, stalks and leaves', 'Эстрагон, стебли и листья'), qty: l('1 vezica', '1 bunch', '1 пучок') },
    { item: l('Biber u zrnu, zgnječen', 'Peppercorns, crushed', 'Перец горошком, раздавленный'), qty: l('6 zrna', '6', '6 шт') },
    { item: l('Sve za holandez (9.6)', 'Everything for hollandaise (9.6)', 'Всё для голландского соуса (9.6)'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Jedan postupak, drugi ukus. Redukcija zameni limun, a estragon pretvori puterni sos u najbolji par za crveno meso.',
    'One method, another taste. The reduction replaces the lemon, and tarragon turns a butter sauce into the best partner for red meat.',
    'Тот же способ — другой вкус. Редукция заменяет лимон, а эстрагон превращает масляный соус в лучшую пару к красному мясу.',
  ),
  steps: [
    {
      text: l('Stavi sirće, vino, ljutiku, peteljke estragona i biber u šerpicu.', 'Put the vinegar, wine, shallot, tarragon stalks and pepper in a small pan.', 'Положи уксус, вино, шалот, стебли эстрагона и перец в кастрюльку.'),
      params: [l('100 ml ukupno', '100 ml total', '100 мл всего')],
      done: l('Sve je u šerpici, a listovi estragona su ostali sa strane.', 'All in the pan, with the tarragon leaves kept aside.', 'Всё в кастрюльке, а листья эстрагона отложены.'),
      why: l('Peteljke daju ukus u kuvanju, listovi daju miris na kraju.', 'The stalks give flavour in the cooking, the leaves give aroma at the end.', 'Стебли дают вкус при варке, листья — аромат в конце.'),
    },
    {
      text: l('Ukuvaj na srednjoj vatri.', 'Reduce over medium heat.', 'Уварь на среднем огне.'),
      params: [l('100 ml → 30 ml', '100 ml → 30 ml', '100 мл → 30 мл'), l('~5 min', '~5 min', '~5 мин')],
      done: l('Ostalo je oko dve kašike tečnosti.', 'About two tablespoons of liquid remain.', 'Осталось около двух ложек жидкости.'),
      why: l('Ukuvavanje skuplja kiselinu i ukus u malu zapreminu, a ne razvodni sos.', 'Reducing packs acid and flavour into a small volume that does not water the sauce down.', 'Уваривание собирает кислоту и вкус в малый объём, который не разбавит соус.'),
      drawing: 'reduction',
    },
    {
      text: l('Procedi redukciju i ohladi je malo.', 'Strain the reduction and let it cool a little.', 'Процеди редукцию и слегка остуди.'),
      params: [l('ispod 40°C', 'below 40°C', 'ниже 40°C')],
      done: l('Redukcija je mlaka i bistra.', 'The reduction is lukewarm and clear.', 'Редукция тёплая и прозрачная.'),
      why: l('Vrela redukcija bi skuvala žumanca čim ih dodaš.', 'A hot reduction would cook the yolks the moment you add them.', 'Горячая редукция сварит желтки, как только их добавишь.'),
    },
    {
      text: l('Napravi holandez kao u 9.6, sa redukcijom umesto vode i limuna.', 'Make hollandaise as in 9.6, with the reduction instead of water and lemon.', 'Сделай голландский соус, как в 9.6, с редукцией вместо воды и лимона.'),
      params: [l('3 žumanca + 200 g putera', '3 yolks + 200 g butter', '3 желтка + 200 г масла'), l('60–65°C', '60–65°C', '60–65°C')],
      done: l('Sos je gust i sjajan, sa nežnom kiselošću.', 'The sauce is thick and glossy with a gentle sharpness.', 'Соус густой, блестящий, с мягкой кислинкой.'),
      drawing: 'butterStream',
    },
    {
      text: l('Umešaj sitno seckane listove estragona.', 'Stir in the finely chopped tarragon leaves.', 'Вмешай мелко нарезанные листья эстрагона.'),
      params: [l('1 kašika', '1 tbsp', '1 ст. л.')],
      done: l('Sos je pegav od zelenog i miriše na anis.', 'The sauce is flecked green and smells of anise.', 'Соус с зелёными крапинками и пахнет анисом.'),
      why: l('Trakice lista seci kao u 2.5, oštrim nožem, da list ne pocrni.', 'Cut the leaves as in 2.5 with a sharp knife, so they do not blacken.', 'Режь листья, как в 2.5, острым ножом, чтобы не почернели.'),
    },
  ],
  mistake: {
    title: l('Redukcija ukuvana do suvog.', 'The reduction cooked down to dry.', 'Редукцию уварили досуха.'),
    fix: l(
      'Ljutika zagori i sos dobije gorak, prepečen ukus. Ako ostane manje od kašike, dodaj kašiku vode i skloni sa vatre. Gledaj šerpicu poslednji minut.',
      'The shallot catches and the sauce tastes bitter and burnt. If less than a spoonful is left, add a spoon of water and take it off. Watch the pan in the last minute.',
      'Шалот пригорает, и соус получает горький пригоревший вкус. Если осталось меньше ложки, добавь ложку воды и сними с огня. Последнюю минуту следи за кастрюлькой.',
    ),
  },
  think: {
    question: l('Šta bearnez razlikuje od holandeza?', 'What sets béarnaise apart from hollandaise?', 'Чем беарнез отличается от голландского соуса?'),
    options: [
      l('Kiselina dolazi iz redukcije sa ljutikom i estragonom', 'The acid comes from a reduction with shallot and tarragon', 'Кислота приходит из редукции с шалотом и эстрагоном'),
      l('Pravi se bez žumanaca', 'It is made without yolks', 'Его делают без желтков'),
      l('Kuva se na direktnoj vatri', 'It is cooked over direct heat', 'Его готовят на прямом огне'),
    ],
    answer: 0,
    explain: l(
      'Struktura je ista: žumance, toplota, puter. Promeni se samo kiselina i bilje. Tako iz jednog osnovnog sosa dobiješ deset.',
      'The structure is the same: yolk, heat, butter. Only the acid and herbs change. That is how one mother sauce gives you ten.',
      'Структура та же: желток, тепло, масло. Меняются только кислота и травы. Так из одного базового соуса получается десять.',
    ),
  },
}

const beurreBlanc: Lesson = {
  id: '9.9',
  title: l('Beurre blanc', 'Beurre blanc', 'Бёр блан'),
  goal: l(
    'Napraviš beurre blanc, sos od putera bez jaja, za ribu.',
    'You make beurre blanc, a butter sauce with no eggs, for fish.',
    'Ты готовишь бёр блан — масляный соус без яиц — к рыбе.',
  ),
  minutes: 6,
  key: { value: l('55–60°C', '55–60°C', '55–60°C'), label: l('sos', 'sauce', 'соус') },
  need: [
    { item: l('Belo vino i belo vinsko sirće', 'White wine and white wine vinegar', 'Белое вино и белый винный уксус'), qty: l('po 50 ml', '50 ml each', 'по 50 мл') },
    { item: l('Ljutika, sitno', 'Shallot, finely chopped', 'Шалот, мелко'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Hladan puter, kockice', 'Cold butter, diced', 'Холодное масло, кубиками'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Slatka pavlaka', 'Cream', 'Сливки'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
  ],
  why: l(
    'Bez jaja, bez brašna. Samo kiselina i puter, a drži ih zajedno jedino tvoja kontrola toplote. Najčistiji test ruke.',
    'No egg, no flour. Just acid and butter, held together only by your control of the heat. The purest test of your hand.',
    'Без яиц и без муки. Только кислота и масло, которые держит вместе лишь твой контроль температуры. Самая чистая проверка руки.',
  ),
  steps: [
    {
      text: l('Ukuvaj vino, sirće i ljutiku.', 'Reduce the wine, vinegar and shallot.', 'Уварь вино, уксус и шалот.'),
      params: [l('100 ml → 30 ml', '100 ml → 30 ml', '100 мл → 30 мл')],
      done: l('Ostale su dve kašike tečnosti sa ljutikom.', 'Two tablespoons of liquid are left with the shallot.', 'Осталось две ложки жидкости с шалотом.'),
      drawing: 'reduction',
    },
    {
      text: l('Dodaj pavlaku i ukuvaj još pola minuta.', 'Add the cream and reduce for another half minute.', 'Добавь сливки и уварь ещё полминуты.'),
      params: [l('30 s', '30 s', '30 с')],
      done: l('Tečnost je blago gusta i bela.', 'The liquid is lightly thick and white.', 'Жидкость слегка густая и белая.'),
      why: l('Pavlaka nosi emulgatore iz mleka i čini sos otpornijim. Tako rade i restorani.', 'Cream carries milk emulsifiers and makes the sauce more forgiving. Restaurants do the same.', 'Сливки несут молочные эмульгаторы и делают соус устойчивее. Так делают и в ресторанах.'),
    },
    {
      text: l('Na tihoj vatri umućuj puter kocku po kocku.', 'On low heat whisk in the butter one cube at a time.', 'На слабом огне вмешивай масло по кубику.'),
      params: [l('kocke ~15 g', 'cubes ~15 g', 'кубики ~15 г'), l('nova kad se stara otopi', 'next when the last has melted', 'следующий, когда растаял прежний')],
      done: l('Sos je bled, kremast i neproziran.', 'The sauce is pale, creamy and opaque.', 'Соус бледный, кремовый и непрозрачный.'),
      why: l('Hladan puter se topi polako i ulazi u emulziju. Otopljen puter bi samo plivao.', 'Cold butter melts slowly and joins the emulsion. Melted butter would just float.', 'Холодное масло тает медленно и входит в эмульсию. Растопленное просто всплывёт.'),
      drawing: 'butterCubes',
    },
    {
      text: l('Ako je šerpica prevruća da je držiš rukom, skloni je.', 'If the pan is too hot to hold by its side, take it off the heat.', 'Если кастрюлька слишком горячая, чтобы держать её за бок, сними с огня.'),
      params: [l('nikad ne krčka', 'never simmers', 'никогда не томится')],
      done: l('Sos je topao, nikad ne mehuri.', 'The sauce is warm and never bubbles.', 'Соус тёплый и никогда не пузырится.'),
      why: l('Iznad 65°C emulzija puca i puter se odvaja u žuto ulje.', 'Above 65°C the emulsion breaks and the butter separates into yellow oil.', 'Выше 65°C эмульсия рвётся, и масло отделяется жёлтым жиром.'),
    },
    {
      text: l('Posoli, procedi ako želiš glatko, i drži toplo.', 'Salt, strain if you want it smooth, and keep warm.', 'Посоли, процеди, если хочешь гладкий, и держи тёплым.'),
      params: [l('55–60°C', '55–60°C', '55–60°C'), l('termos ili topla voda', 'flask or warm water bath', 'термос или тёплая водяная баня')],
      done: l('Sos sija i prekriva kašiku tankim slojem.', 'The sauce shines and coats a spoon thinly.', 'Соус блестит и тонко покрывает ложку.'),
    },
  ],
  mistake: {
    title: l('Sos se ohladio i stegao, pa je vraćen na jaku vatru.', 'The sauce cooled and set, then went back on high heat.', 'Соус остыл и загустел, его вернули на сильный огонь.'),
    fix: l(
      'Ispod 50°C puter se stegne, a na jakoj vatri se razdvoji. Hladan sos greješ nad parom i mutiš. Razdvojen sos spašavaš kašikom tople pavlake, dodajući ga u nju polako.',
      'Below 50°C the butter firms up, and on high heat it splits. Warm a cold sauce over steam while whisking. Save a split sauce by whisking it slowly into a spoon of warm cream.',
      'Ниже 50°C масло застывает, а на сильном огне соус расслаивается. Холодный соус грей над паром, взбивая. Расслоившийся спасай, вливая его понемногу в ложку тёплых сливок.',
    ),
  },
  think: {
    question: l('Zašto beurre blanc traži hladan puter, a holandez topao?', 'Why does beurre blanc want cold butter and hollandaise warm?', 'Почему для бёр блан нужно холодное масло, а для голландского — тёплое?'),
    options: [
      l('Kod beurre blanca puter je i emulgator i hladi sos dok ulazi', 'In beurre blanc the butter is the emulsifier and cools the sauce as it goes in', 'В бёр блан масло — и эмульгатор, и охлаждает соус, входя в него'),
      l('Hladan puter je slaniji', 'Cold butter is saltier', 'Холодное масло солонее'),
      l('Nema razlike, to je navika', 'No difference, it is habit', 'Разницы нет, это привычка'),
    ],
    answer: 0,
    explain: l(
      'Bez žumanca, sos drže proteini i lecitin iz samog putera. Hladna kocka se topi polako, pa sos ostaje u uskom opsegu toplote. Kod holandeza žumance drži emulziju, a topao puter je lakše sipati u mlazu.',
      'With no yolk, the sauce is held by the proteins and lecithin in the butter itself. A cold cube melts slowly and keeps the sauce in its narrow heat window. In hollandaise the yolk holds the emulsion and warm butter pours in a stream.',
      'Без желтка соус держат белки и лецитин самого масла. Холодный кубик тает медленно и держит соус в узком диапазоне температуры. В голландском эмульсию держит желток, а тёплое масло легко вливать струйкой.',
    ),
  },
}

export const motherSauceLessons = { mornay, veloute, brownSauce, tomatoSauce, hollandaise, bearnaise, beurreBlanc }
