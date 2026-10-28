import { l, type Lesson } from '../types'

// Grade 3 · Module 2 · The chef's sauces. Grade 1 taught the mother sauces; here the sauces that finish a
// restaurant plate: a reduced demi-glace, a layered jus, sabayon, a bright green oil, and the last minute
// of any sauce, where butter, salt and acid decide whether it shines.

const demiGlace: Lesson = {
  id: '3.2.1',
  title: l('Demi-glace', 'Demi-glace', 'Деми-глас'),
  goal: l(
    'Redukuješ tamni fond u demi-glace koji sjaji, oblaže kašiku i u frižideru se stegne kao žele.',
    'You reduce a brown stock into a demi-glace that shines, coats a spoon and sets like jelly in the fridge.',
    'Ты уариваешь тёмный бульон в деми-глас, который блестит, обволакивает ложку и в холодильнике застывает как желе.',
  ),
  minutes: 8,
  key: { value: l('4 : 1', '4 : 1', '4 : 1'), label: l('redukcija fonda', 'stock reduction', 'уварка бульона') },
  need: [
    { item: l('Tamni goveđi ili teleći fond (8.2)', 'Brown beef or veal stock (8.2)', 'Тёмный говяжий или телячий бульон (8.2)'), qty: l('4 L', '4 L', '4 л') },
    { item: l('Crveno vino', 'Red wine', 'Красное вино'), qty: l('300 ml', '300 ml', '300 мл') },
    { item: l('Šalota', 'Shallots', 'Лук-шалот'), qty: l('2', '2', '2') },
    { item: l('Fino sito i gaza', 'Fine sieve and muslin', 'Мелкое сито и марля'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Demi-glace je osnova većine tamnih sosova u restoranu. Kad ga imaš u frižideru, sos za meso napraviš za tri minuta.',
    'Demi-glace is the base of most brown sauces in a restaurant. With it in the fridge, a meat sauce takes three minutes.',
    'Деми-глас — основа большинства тёмных соусов в ресторане. Когда он есть в холодильнике, соус к мясу готов за три минуты.',
  ),
  steps: [
    {
      text: l('Procedi fond kroz gazu i skini masnoću sa površine.', 'Strain the stock through muslin and lift the fat off the top.', 'Процеди бульон через марлю и сними жир с поверхности.'),
      params: [l('4 L', '4 L', '4 л')],
      done: l('Fond je bistar, bez masnih okaca.', 'The stock is clear, with no rings of fat.', 'Бульон прозрачный, без жирных кружков.'),
      why: l('Sve što je u fondu, redukcija pojača četiri puta. I masnoću i mutež.', 'Whatever is in the stock, reduction makes four times stronger. Fat and cloudiness included.', 'Всё, что есть в бульоне, уварка усиливает вчетверо. И жир, и муть тоже.'),
      drawing: 'clothStrain',
    },
    {
      text: l('Redukuj vino sa seckanom šalotom dok ne postane sirup.', 'Reduce the wine with chopped shallot until it is syrupy.', 'Уварь вино с нарезанным шалотом до сиропа.'),
      params: [l('300 ml → oko 75 ml', '300 ml → about 75 ml', '300 мл → около 75 мл')],
      done: l('Na dnu je tamna, gusta tečnost koja ne miriše na alkohol.', 'There is a dark, thick liquid at the bottom that no longer smells of alcohol.', 'На дне тёмная густая жидкость, которая не пахнет спиртом.'),
      why: l('Vino daje kiselinu i boju, ali sirov alkohol bi se osećao u celom sosu.', 'Wine adds acid and colour, but raw alcohol would come through in the whole sauce.', 'Вино даёт кислоту и цвет, но сырой спирт чувствовался бы во всём соусе.'),
      drawing: 'reduction',
    },
    {
      text: l('Dodaj fond i krčkaj lagano, skidajući penu.', 'Add the stock and simmer gently, skimming the foam.', 'Добавь бульон и томи на слабом огне, снимая пену.'),
      params: [l('krčkanje, ne ključanje', 'a simmer, not a boil', 'томление, а не кипение')],
      done: l('Na površini nema pene, a mehurići su sitni i retki.', 'There is no foam on top and the bubbles are small and few.', 'Пены нет, пузырьки мелкие и редкие.'),
      why: l('Ključanje meša masnoću i proteine nazad u sos i zamuti ga.', 'A rolling boil churns fat and proteins back into the sauce and clouds it.', 'Кипение вмешивает жир и белки обратно в соус и мутит его.'),
      drawing: 'skim',
    },
    {
      text: l('Redukuj dok ne ostane četvrtina.', 'Reduce until a quarter remains.', 'Уваривай, пока не останется четверть.'),
      params: [l('4 L → 1 L', '4 L → 1 L', '4 л → 1 л'), l('2–3 h', '2–3 h', '2–3 ч')],
      done: l('Sos oblaže kašiku, a trag prstom ostaje čist.', 'The sauce coats the spoon and a line drawn with a finger stays clean.', 'Соус обволакивает ложку, а след пальцем остаётся чистым.'),
      why: l('Pred kraj sos se brzo zgušnjava. Poslednjih 20 minuta ne odlazi od šporeta.', 'Near the end the sauce thickens fast. Do not leave the stove for the last 20 minutes.', 'Под конец соус густеет быстро. Последние 20 минут не отходи от плиты.'),
      drawing: 'coatSpoon',
    },
    {
      text: l('Procedi kroz fino sito, ohladi i porcioniši u kalupe za led.', 'Strain through a fine sieve, cool and portion into ice-cube trays.', 'Процеди через мелкое сито, охлади и разлей по формам для льда.'),
      params: [l('frižider 3 dana, zamrzivač 3 meseca', 'fridge 3 days, freezer 3 months', 'холодильник 3 дня, морозилка 3 месяца')],
      done: l('Hladan demi-glace je čvrst kao žele.', 'Cold demi-glace is as firm as jelly.', 'Холодный деми-глас плотный, как желе.'),
      why: l('Jedna kocka je sos za dve porcije. Ono što se stegne je kolagen iz kostiju, i on daje sjaj i telo.', 'One cube is sauce for two portions. What sets is collagen from the bones, and it gives gloss and body.', 'Один кубик — соус на две порции. Застывает коллаген из костей, он даёт блеск и тело.'),
      drawing: 'iceTray',
    },
  ],
  mistake: {
    title: l('Zgušnjavanje brašnom ili skrobom da bude brže.', 'Thickening with flour or starch to save time.', 'Загущение мукой или крахмалом, чтобы было быстрее.'),
    fix: l(
      'Dobije se gust, ali mutan i lepljiv sos bez dubine. Telo demi-glacea dolazi od kolagena. Ako fond nema kolagena, nema prečice: fondu trebaju kosti sa zglobovima.',
      'You get a thick but cloudy, sticky sauce with no depth. Demi-glace gets its body from collagen. If the stock has none, there is no shortcut: the stock needs bones with joints.',
      'Получается густой, но мутный и липкий соус без глубины. Тело деми-гласа — из коллагена. Если в бульоне его нет, короткого пути нет: бульону нужны кости с суставами.',
    ),
  },
  think: {
    question: l('Zašto se hladan demi-glace stegne kao žele?', 'Why does cold demi-glace set like jelly?', 'Почему холодный деми-глас застывает как желе?'),
    options: [
      l('Kolagen iz kostiju postaje želatin', 'Collagen from the bones turns into gelatine', 'Коллаген из костей превращается в желатин'),
      l('Zbog brašna u sosu', 'Because of flour in the sauce', 'Из-за муки в соусе'),
      l('Zbog soli', 'Because of the salt', 'Из-за соли'),
    ],
    answer: 0,
    explain: l(
      'Dugo kuvanje kostiju pretvara kolagen u želatin. Redukcija ga koncentriše, pa se sos hladan stegne, a topao oblaže hranu i sjaji.',
      'Long cooking turns the collagen in bones into gelatine. Reduction concentrates it, so the sauce sets when cold and coats and shines when hot.',
      'Долгая варка превращает коллаген костей в желатин. Уварка концентрирует его, поэтому холодный соус застывает, а горячий обволакивает и блестит.',
    ),
  },
}

const jus: Lesson = {
  id: '3.2.2',
  title: l('Jus od piletine', 'Chicken jus', 'Куриный жю'),
  goal: l(
    'Napraviš tamni, sjajni pileći jus građenjem ukusa u slojevima.',
    'You make a dark, glossy chicken jus by building flavour in layers.',
    'Ты готовишь тёмный блестящий куриный жю, выстраивая вкус слоями.',
  ),
  minutes: 7,
  key: { value: l('1,5 L → 300 ml', '1.5 L → 300 ml', '1,5 л → 300 мл'), label: l('fond u jus', 'stock into jus', 'бульон в жю') },
  need: [
    { item: l('Pileća krilca', 'Chicken wings', 'Куриные крылышки'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Pileći fond (8.1)', 'Chicken stock (8.1)', 'Куриный бульон (8.1)'), qty: l('1,5 L', '1.5 L', '1,5 л') },
    { item: l('Šalota, beli luk, timijan', 'Shallot, garlic, thyme', 'Шалот, чеснок, тимьян'), qty: l('2 + 3 čena + 3 grančice', '2 + 3 cloves + 3 sprigs', '2 + 3 зубчика + 3 веточки') },
  ],
  why: l(
    'Jus je ukus pečenog pileta u tečnom obliku. Lakši je od demi-glacea i ide uz piletinu, živinu i povrće.',
    'Jus is the taste of roast chicken in liquid form. It is lighter than demi-glace and goes with chicken, poultry and vegetables.',
    'Жю — вкус жареной курицы в жидком виде. Он легче деми-гласа и подходит к курице, птице и овощам.',
  ),
  steps: [
    {
      text: l('Ispeci isečena krilca u širokoj šerpi do tamnozlatne boje.', 'Brown the chopped wings in a wide pan until deep golden.', 'Обжарь рубленые крылышки в широкой кастрюле до тёмно-золотистого цвета.'),
      params: [l('srednje jaka vatra', 'medium-high heat', 'огонь выше среднего'), l('15–20 min', '15–20 min', '15–20 мин')],
      done: l('Krilca su tamnozlatna, a na dnu je smeđi talog.', 'The wings are deep golden and there is a brown crust on the bottom.', 'Крылышки тёмно-золотистые, на дне коричневый налёт.'),
      why: l('Boja je ukus (4.6). Bleda krilca daju bledi jus.', 'Colour is flavour (4.6). Pale wings make a pale jus.', 'Цвет — это вкус (4.6). Бледные крылышки дают бледный жю.'),
      drawing: 'roastBones',
    },
    {
      text: l('Dodaj šalotu i beli luk, prži 2 minuta, pa ocedi višak masti.', 'Add the shallot and garlic, fry 2 minutes, then pour off the excess fat.', 'Добавь шалот и чеснок, жарь 2 минуты, затем слей лишний жир.'),
      done: l('U šerpi ostaje samo kašika masti.', 'Only a spoonful of fat remains in the pan.', 'В кастрюле остаётся лишь ложка жира.'),
      why: l('Mast koja ostane izađe na površinu sosa i ne može da se sjedini.', 'Fat left behind rises to the top of the sauce and will not come together.', 'Оставшийся жир поднимется на поверхность соуса и не соединится.'),
      drawing: 'fatPour',
    },
    {
      text: l('Deglaziraj sa malo fonda i ostruži dno.', 'Deglaze with a little stock and scrape the bottom.', 'Деглазируй небольшим количеством бульона и соскреби дно.'),
      params: [l('100 ml', '100 ml', '100 мл')],
      done: l('Dno je čisto, a tečnost je smeđa.', 'The bottom is clean and the liquid is brown.', 'Дно чистое, жидкость коричневая.'),
      why: l('Talog sa dna je najkoncentrovaniji ukus u celom jelu (9.8).', 'The crust on the bottom is the most concentrated flavour in the dish (9.8).', 'Налёт со дна — самый концентрированный вкус всего блюда (9.8).'),
      drawing: 'deglaze',
    },
    {
      text: l('Ostatak fonda dodaj u tri navrata i svaki put redukuj skoro do glazure.', 'Add the rest of the stock in three goes, reducing almost to a glaze each time.', 'Добавь остальной бульон в три приёма, каждый раз уваривая почти до глазури.'),
      params: [l('3 × 450 ml', '3 × 450 ml', '3 × 450 мл')],
      done: l('Posle trećeg puta ostaje oko 300 ml tamne, sjajne tečnosti.', 'After the third time about 300 ml of dark, glossy liquid remains.', 'После третьего раза остаётся около 300 мл тёмной блестящей жидкости.'),
      why: l('Svaka redukcija do glazure karamelizuje novi sloj. Tri sloja daju dubinu koju jedna duga redukcija ne daje.', 'Each reduction to a glaze caramelises a new layer. Three layers give a depth one long reduction cannot.', 'Каждая уварка до глазури карамелизует новый слой. Три слоя дают глубину, которой не даст одна долгая уварка.'),
    },
    {
      text: l('Procedi, ubaci timijan na 5 minuta, pa procedi ponovo.', 'Strain, steep the thyme in it for 5 minutes, then strain again.', 'Процеди, положи тимьян на 5 минут, затем процеди снова.'),
      params: [l('5 min', '5 min', '5 мин')],
      done: l('Jus je tamnosmeđ, sjajan i jako miriše na pečeno pile.', 'The jus is dark brown, glossy and smells strongly of roast chicken.', 'Жю тёмно-коричневый, блестящий и сильно пахнет жареной курицей.'),
      why: l('Bilje kuvano sat vremena postane gorko. Pet minuta na kraju daje svež miris.', 'Herbs cooked for an hour turn bitter. Five minutes at the end gives a fresh aroma.', 'Зелень, варившаяся час, горчит. Пять минут в конце дают свежий аромат.'),
    },
  ],
  mistake: {
    title: l('Bleda krilca jer je šerpa prepuna.', 'Pale wings because the pan is overcrowded.', 'Бледные крылышки, потому что кастрюля переполнена.'),
    fix: l(
      'Prepuna šerpa pušta paru i krilca se kuvaju umesto da se peku. Peci u dve ture, u jednom sloju, i ne mešaj prvih pet minuta.',
      'An overcrowded pan steams, and the wings stew instead of browning. Brown them in two batches, in one layer, and do not stir for the first five minutes.',
      'В переполненной кастрюле идёт пар, и крылышки тушатся вместо обжаривания. Жарь в два приёма, в один слой, и не мешай первые пять минут.',
    ),
  },
  think: {
    question: l('Zašto se fond dodaje u tri navrata, a ne odjednom?', 'Why is the stock added in three goes rather than all at once?', 'Почему бульон добавляют в три приёма, а не сразу?'),
    options: [
      l('Svaka glazura dodaje sloj ukusa', 'Each glaze adds a layer of flavour', 'Каждая глазурь добавляет слой вкуса'),
      l('Da ne prekipi', 'So it does not boil over', 'Чтобы не убежало'),
      l('Tako je brže', 'It is quicker', 'Так быстрее'),
    ],
    answer: 0,
    explain: l(
      'Kad tečnost ispari do glazure, šećeri i proteini na dnu karamelizuju. Svaki novi deo fonda to rastvori i doda novi sloj.',
      'When the liquid cooks down to a glaze, the sugars and proteins on the bottom caramelise. Each new pour of stock dissolves that and adds another layer.',
      'Когда жидкость уваривается до глазури, сахара и белки на дне карамелизуются. Каждая новая порция бульона растворяет это и добавляет слой.',
    ),
  },
}

const sabayon: Lesson = {
  id: '3.2.3',
  title: l('Sabayon', 'Sabayon', 'Сабайон'),
  goal: l(
    'Umutiš žumanca i vino nad parom u laganu, toplu penu, slanu za ribu ili slatku za voće.',
    'You whisk yolks and wine over steam into a light, warm foam, savoury for fish or sweet for fruit.',
    'Ты взбиваешь желтки с вином над паром в лёгкую тёплую пену, солёную к рыбе или сладкую к фруктам.',
  ),
  minutes: 6,
  key: { value: l('70–75°C', '70–75°C', '70–75°C'), label: l('ne preko 80°C', 'never above 80°C', 'не выше 80°C') },
  need: [
    { item: l('Žumanca', 'Egg yolks', 'Желтки'), qty: l('4', '4', '4') },
    { item: l('Belo vino (slatki: 60 g šećera i marsala)', 'White wine (sweet: 60 g sugar and Marsala)', 'Белое вино (сладкий: 60 г сахара и марсала)'), qty: l('80 ml', '80 ml', '80 мл') },
    { item: l('Metalna posuda, šerpa sa vodom, mutilica', 'Metal bowl, pan of water, whisk', 'Металлическая миска, кастрюля с водой, венчик'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Sabayon je sos od vazduha. Pokrije ribu i za minut pod grilom dobije zlatnu koru, ili prelije voće kao topla krema.',
    'Sabayon is a sauce made of air. It covers fish and turns golden under the grill in a minute, or goes over fruit as a warm cream.',
    'Сабайон — соус из воздуха. Он покрывает рыбу и за минуту под грилем становится золотистым или поливает фрукты как тёплый крем.',
  ),
  steps: [
    {
      text: l('Zagrej vodu da jedva krčka, a posuda iznad ne sme da je dodiruje.', 'Heat the water to a bare simmer; the bowl above must not touch it.', 'Нагрей воду до лёгкого томления; миска сверху не должна её касаться.'),
      done: l('Iz šerpe izlazi para, ali voda ne ključa.', 'Steam rises from the pan, but the water is not boiling.', 'Из кастрюли идёт пар, но вода не кипит.'),
      why: l('Žumance se zgruša na 80°C. Para greje lagano i ravnomerno, ključala voda ne.', 'Yolk curdles at 80°C. Steam heats gently and evenly; boiling water does not.', 'Желток сворачивается при 80°C. Пар греет мягко и равномерно, кипящая вода — нет.'),
      drawing: 'bainMarie',
    },
    {
      text: l('Van vatre umuti žumanca i vino u posudi.', 'Off the heat, whisk the yolks and wine together in the bowl.', 'Вне огня взбей желтки с вином в миске.'),
      params: [l('4 žumanca', '4 yolks', '4 желтка'), l('80 ml', '80 ml', '80 мл')],
      done: l('Smesa je glatka i ujednačene boje.', 'The mixture is smooth and even in colour.', 'Смесь гладкая и однородная по цвету.'),
      why: l('Ako žumance stoji samo nad parom, ivice se zgrušaju pre nego što počneš da mutiš.', 'If yolk sits alone over steam, the edges set before you start whisking.', 'Если желток стоит над паром один, края схватятся раньше, чем начнёшь взбивать.'),
    },
    {
      text: l('Mutite nad parom bez prestanka, u osmicama.', 'Whisk over the steam without stopping, in figures of eight.', 'Взбивай над паром без остановки, восьмёрками.'),
      params: [l('4–6 min', '4–6 min', '4–6 мин')],
      done: l('Masa se utrostruči, svetla je i penasta.', 'The mixture triples in volume and is pale and foamy.', 'Масса увеличивается втрое, светлая и пенная.'),
      why: l('Osmice dohvataju i dno i ivice, gde se žumance prvo steže.', 'Figures of eight reach the bottom and the edges, where yolk sets first.', 'Восьмёрки захватывают дно и края, где желток схватывается первым.'),
    },
    {
      text: l('Mutite do trake: podignuta mutilica ostavlja trag koji stoji 3 sekunde.', 'Whisk to the ribbon: the lifted whisk leaves a trail that holds for 3 seconds.', 'Взбивай до ленты: поднятый венчик оставляет след, держащийся 3 секунды.'),
      params: [l('70–75°C', '70–75°C', '70–75°C')],
      done: l('Trag na površini ostaje, pa polako nestaje.', 'The trail stays on the surface, then slowly sinks.', 'След остаётся на поверхности, затем медленно исчезает.'),
      why: l('Na ovoj temperaturi žumance drži vazduh i stabilno je. Ispod nje sabayon padne za minut.', 'At this temperature the yolk holds the air and is stable. Below it, the sabayon collapses within a minute.', 'При этой температуре желток держит воздух и стабилен. Ниже — сабайон оседает за минуту.'),
      drawing: 'ribbon',
    },
    {
      text: l('Skloni sa pare. Slani: so i kap limuna. Služi odmah ili gratiniraj.', 'Take it off the steam. Savoury: salt and a drop of lemon. Serve at once or glaze.', 'Сними с пара. Солёный: соль и капля лимона. Подавай сразу или гратинируй.'),
      params: [l('pod grilom 1–2 min', 'under the grill 1–2 min', 'под грилем 1–2 мин')],
      done: l('Površina je zlatna sa tamnijim mrljama, a ispod je pena.', 'The top is golden with darker patches, and there is foam underneath.', 'Поверхность золотистая с тёмными пятнами, под ней пена.'),
      why: l('Sabayon ne čeka. Napravi ga poslednji, kad je sve ostalo na tanjiru.', 'Sabayon does not wait. Make it last, when everything else is on the plate.', 'Сабайон не ждёт. Делай его последним, когда всё остальное на тарелке.'),
    },
  ],
  mistake: {
    title: l('Voda ključa i žumanca postanu kajgana.', 'The water boils and the yolks turn into scrambled egg.', 'Вода кипит, и желтки превращаются в омлет.'),
    fix: l(
      'Voda jedva krčka, posuda je ne dodiruje, a čim ivice počnu da se zgušnjavaju, podigni posudu sa pare na nekoliko sekundi i mutite dalje.',
      'Keep the water at a bare simmer with the bowl clear of it, and as soon as the edges start to thicken, lift the bowl off the steam for a few seconds and keep whisking.',
      'Вода едва томится, миска её не касается, а как только края начинают густеть, подними миску с пара на несколько секунд и продолжай взбивать.',
    ),
  },
  think: {
    question: l('Kako znaš da je sabayon gotov?', 'How do you know the sabayon is done?', 'Как понять, что сабайон готов?'),
    options: [
      l('Trag mutilice stoji nekoliko sekundi', 'The whisk trail holds for a few seconds', 'След венчика держится несколько секунд'),
      l('Počne da ključa', 'It starts to boil', 'Он начинает кипеть'),
      l('Postane tamnožut', 'It turns deep yellow', 'Он становится тёмно-жёлтым'),
    ],
    answer: 0,
    explain: l(
      'Traka znači da je žumance zagrejano dovoljno da drži vazduh. Ključanje znači da je kasno, a tamna boja da ima premalo vazduha.',
      'The ribbon means the yolk is hot enough to hold the air. Boiling means it is too late, and a deep colour means too little air.',
      'Лента означает, что желток прогрет достаточно, чтобы держать воздух. Кипение — что поздно, а тёмный цвет — что воздуха мало.',
    ),
  },
}

const greenOil: Lesson = {
  id: '3.2.4',
  title: l('Zeleno ulje od bilja', 'Green herb oil', 'Зелёное масло из зелени'),
  goal: l(
    'Napraviš bistro, jarko zeleno ulje od peršuna koje drži boju danima.',
    'You make a clear, bright green parsley oil that keeps its colour for days.',
    'Ты делаешь прозрачное ярко-зелёное масло из петрушки, которое держит цвет несколько дней.',
  ),
  minutes: 6,
  key: { value: l('1 : 2', '1 : 2', '1 : 2'), label: l('bilje i ulje', 'herbs to oil', 'зелень и масло') },
  need: [
    { item: l('Peršun, listovi', 'Parsley leaves', 'Листья петрушки'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Neutralno ulje (suncokret)', 'Neutral oil (sunflower)', 'Нейтральное масло (подсолнечное)'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Blender, led, filter za kafu', 'Blender, ice, coffee filter', 'Блендер, лёд, кофейный фильтр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Nekoliko kapi zelenog ulja na sosu ili supi daju boju, svežinu i izgled restorana, a košta skoro ništa.',
    'A few drops of green oil on a sauce or soup add colour, freshness and a restaurant look, and cost almost nothing.',
    'Несколько капель зелёного масла на соусе или супе дают цвет, свежесть и ресторанный вид почти бесплатно.',
  ),
  steps: [
    {
      text: l('Blanširaj listove peršuna 10 sekundi u ključaloj slanoj vodi.', 'Blanch the parsley leaves for 10 seconds in boiling salted water.', 'Бланшируй листья петрушки 10 секунд в кипящей подсоленной воде.'),
      params: [l('100 g', '100 g', '100 г'), l('10 s', '10 s', '10 с')],
      done: l('Listovi su postali jarko zeleni.', 'The leaves have turned bright green.', 'Листья стали ярко-зелёными.'),
      why: l('Kratko kuvanje gasi enzime koji bi ulje posle dva dana obojili u maslinasto.', 'Brief cooking kills the enzymes that would turn the oil olive-brown in two days.', 'Короткая варка гасит ферменты, которые через два дня окрасили бы масло в оливковый.'),
    },
    {
      text: l('Odmah u ledenu vodu, pa iscedi u krpi do kraja.', 'Straight into ice water, then wring dry in a cloth.', 'Сразу в ледяную воду, затем отожми в полотенце досуха.'),
      done: l('Listovi su hladni i skoro suvi.', 'The leaves are cold and almost dry.', 'Листья холодные и почти сухие.'),
      why: l('Voda koja ostane pravi mutno ulje i skraćuje mu vek.', 'Any water left makes the oil cloudy and shortens its life.', 'Оставшаяся вода делает масло мутным и сокращает срок хранения.'),
      drawing: 'iceBath',
    },
    {
      text: l('Blenduj sa uljem na najjačoj brzini dok se masa ne zagreje.', 'Blend with the oil at top speed until the mixture warms up.', 'Взбей с маслом на максимальной скорости, пока масса не нагреется.'),
      params: [l('200 ml', '200 ml', '200 мл'), l('3–4 min', '3–4 min', '3–4 мин'), l('do 60°C', 'up to 60°C', 'до 60°C')],
      done: l('Masa je topla na dodir i tamnozelena.', 'The mixture is warm to the touch and dark green.', 'Масса тёплая на ощупь и тёмно-зелёная.'),
      why: l('Toplota od trenja izvlači hlorofil u ulje. Preko 70°C boja počinje da tamni.', 'Heat from the friction draws the chlorophyll into the oil. Above 70°C the colour starts to dull.', 'Тепло от трения вытягивает хлорофилл в масло. Выше 70°C цвет начинает тускнеть.'),
    },
    {
      text: l('Izruči masu u posudu na ledu i ohladi odmah.', 'Pour the mixture into a bowl set on ice and chill it straight away.', 'Вылей массу в миску на льду и сразу охлади.'),
      done: l('Masa je hladna za nekoliko minuta.', 'The mixture is cold within a few minutes.', 'Масса холодная через несколько минут.'),
      why: l('Toplo ulje nastavlja da kuva bilje i boja bledi.', 'Warm oil keeps cooking the herbs and the colour fades.', 'Тёплое масло продолжает варить зелень, и цвет блёкнет.'),
    },
    {
      text: l('Procedi kroz filter za kafu u frižideru preko noći, bez ceđenja.', 'Strain through a coffee filter in the fridge overnight, without squeezing.', 'Процеди через кофейный фильтр в холодильнике всю ночь, не отжимая.'),
      params: [l('frižider, do 3 dana', 'fridge, up to 3 days', 'холодильник, до 3 дней')],
      done: l('Ulje je bistro i jarko zeleno.', 'The oil is clear and bright green.', 'Масло прозрачное и ярко-зелёное.'),
      why: l('Sveže bilje u ulju na sobnoj temperaturi nosi rizik od botulizma. Ovo ulje živi samo u frižideru.', 'Fresh herbs in oil at room temperature carry a botulism risk. This oil lives in the fridge only.', 'Свежая зелень в масле при комнатной температуре несёт риск ботулизма. Это масло хранится только в холодильнике.'),
      drawing: 'clothStrain',
    },
  ],
  mistake: {
    title: l('Ceđenje filtera da ide brže.', 'Squeezing the filter to speed it up.', 'Отжимание фильтра, чтобы шло быстрее.'),
    fix: l(
      'Ceđenje gura sitne delove bilja kroz filter i ulje postane mutno. Pusti da curi samo, preko noći. Ono što ostane u filteru ide u pesto ili dresing.',
      'Squeezing pushes fine bits of herb through and the oil turns cloudy. Let it drip on its own overnight. What stays in the filter goes into pesto or a dressing.',
      'Отжим проталкивает мелкие частицы зелени, и масло мутнеет. Пусть стекает само всю ночь. То, что осталось в фильтре, — в песто или заправку.',
    ),
  },
  think: {
    question: l('Zašto se peršun blanšira pre blendanja?', 'Why is the parsley blanched before blending?', 'Зачем бланшировать петрушку перед взбиванием?'),
    options: [
      l('Da ulje zadrži jarko zelenu boju', 'So the oil keeps a bright green colour', 'Чтобы масло сохранило ярко-зелёный цвет'),
      l('Da omekša za blender', 'To soften it for the blender', 'Чтобы смягчить для блендера'),
      l('Da bude slanije', 'To make it saltier', 'Чтобы было солонее'),
    ],
    answer: 0,
    explain: l(
      'Enzimi u sirovom bilju razgrađuju hlorofil i ulje posmeđi. Deset sekundi u ključaloj vodi ih ugasi, a led zaustavi kuvanje.',
      'Enzymes in raw herbs break down chlorophyll and the oil turns brown. Ten seconds in boiling water kills them, and the ice stops the cooking.',
      'Ферменты сырой зелени разрушают хлорофилл, и масло буреет. Десять секунд в кипятке их гасят, а лёд останавливает варку.',
    ),
  },
}

const finish: Lesson = {
  id: '3.2.5',
  title: l('Balans i sjaj sosa', 'Balance and gloss', 'Баланс и блеск соуса'),
  goal: l(
    'Završiš svaki sos u poslednjem minutu: gustina, puter, so i kiselina, dok ne zasija.',
    'You finish any sauce in its last minute: consistency, butter, salt and acid, until it shines.',
    'Ты доводишь любой соус в последнюю минуту: густота, масло, соль и кислота, пока он не заблестит.',
  ),
  minutes: 6,
  key: { value: l('20–30 g', '20–30 g', '20–30 г'), label: l('putera na 250 ml', 'butter per 250 ml', 'масла на 250 мл') },
  need: [
    { item: l('Demi-glace ili jus (3.2.1, 3.2.2)', 'Demi-glace or jus (3.2.1, 3.2.2)', 'Деми-глас или жю (3.2.1, 3.2.2)'), qty: l('250 ml', '250 ml', '250 мл') },
    { item: l('Hladan puter u kockama', 'Cold butter, cubed', 'Холодное масло кубиками'), qty: l('30 g', '30 g', '30 г') },
    { item: l('Limun ili vinsko sirće, so', 'Lemon or wine vinegar, salt', 'Лимон или винный уксус, соль'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Dobar sos postane odličan u poslednjem minutu. Puter daje sjaj i oblost, a so i kiselina ga bude.',
    'A good sauce becomes a great one in its last minute. Butter gives gloss and roundness, and salt and acid wake it up.',
    'Хороший соус становится отличным в последнюю минуту. Масло даёт блеск и округлость, а соль и кислота его пробуждают.',
  ),
  steps: [
    {
      text: l('Zagrej sos do krčkanja i proveri ga na kašici.', 'Bring the sauce to a simmer and check it on a spoon.', 'Доведи соус до томления и проверь на ложке.'),
      done: l('Sos oblaže kašiku, a trag prstom ostaje čist.', 'The sauce coats the spoon and a finger line stays clean.', 'Соус обволакивает ложку, а след пальцем остаётся чистым.'),
      why: l('Ovo je nappe, gustina na kojoj sos drži hranu, a ne curi sa nje.', 'This is nappe, the consistency at which sauce clings to food rather than running off it.', 'Это «нап», густота, при которой соус держится на еде, а не стекает.'),
      drawing: 'coatSpoon',
    },
    {
      text: l('Ako je redak, redukuj. Ako je gust, razredi fondom, ne vodom.', 'If it is thin, reduce. If it is thick, loosen with stock, not water.', 'Если жидкий — уварь. Если густой — разбавь бульоном, а не водой.'),
      done: l('Gustina je tačna, a ukus nije razblažen.', 'The consistency is right and the flavour is not diluted.', 'Густота правильная, а вкус не разбавлен.'),
      why: l('Voda razređuje i ukus. Fond razređuje samo gustinu.', 'Water thins the flavour too. Stock thins only the consistency.', 'Вода разбавляет и вкус. Бульон — только густоту.'),
    },
    {
      text: l('Skloni sa vatre i umuti hladan puter, kocku po kocku.', 'Take it off the heat and whisk in the cold butter, cube by cube.', 'Сними с огня и вмешай холодное масло, кубик за кубиком.'),
      params: [l('20–30 g na 250 ml', '20–30 g per 250 ml', '20–30 г на 250 мл'), l('van vatre', 'off the heat', 'вне огня')],
      done: l('Sos sjaji i deluje gušće i punije.', 'The sauce shines and looks thicker and fuller.', 'Соус блестит и выглядит гуще и полнее.'),
      why: l('Hladan puter se emulguje u sos. Na vatri bi se otopio u masne kapi.', 'Cold butter emulsifies into the sauce. On the heat it would melt into drops of fat.', 'Холодное масло эмульгируется в соус. На огне оно растаяло бы в жирные капли.'),
      drawing: 'butterCubes',
    },
    {
      text: l('Posoli, pa dodaj nekoliko kapi kiseline.', 'Salt it, then add a few drops of acid.', 'Посоли, затем добавь несколько капель кислоты.'),
      params: [l('limun ili vinsko sirće', 'lemon or wine vinegar', 'лимон или винный уксус')],
      done: l('Sos više nije težak, a ukus se oseti jasnije.', 'The sauce no longer feels heavy and the flavour comes through more clearly.', 'Соус больше не тяжёлый, а вкус чувствуется яснее.'),
      why: l('Kiselina seče težinu putera i redukcije (5.2). Kiselinu ne bi trebalo da osetiš, samo da sos bude svežiji.', 'Acid cuts through the weight of butter and reduction (5.2). You should not taste the acid, only a fresher sauce.', 'Кислота прорезает тяжесть масла и уварки (5.2). Кислоту чувствовать не должен, только свежесть соуса.'),
      drawing: 'lemonDrops',
    },
    {
      text: l('Probaj sos na komadu hrane, ne samo sa kašike.', 'Taste the sauce on a piece of the food, not just from the spoon.', 'Пробуй соус на кусочке еды, а не только с ложки.'),
      done: l('Sos i jelo zajedno imaju balans.', 'Sauce and food together are balanced.', 'Соус и блюдо вместе сбалансированы.'),
      why: l('Sa kašike sos deluje jače. Na mesu se razblaži, pa treba da bude malo izraženiji nego što misliš.', 'From the spoon, sauce tastes stronger. On meat it is diluted, so it should be a little bolder than you think.', 'С ложки соус кажется сильнее. На мясе он разбавляется, поэтому должен быть чуть ярче, чем кажется.'),
    },
  ],
  mistake: {
    title: l('Sos sa puterom vraćen na jaku vatru.', 'A buttered sauce put back on high heat.', 'Соус с маслом возвращён на сильный огонь.'),
    fix: l(
      'Ključanje razbije emulziju i puter ispliva u masnim kapima. Posle putera sos se samo drži topao. Ako se razdvoji, dodaj kašiku hladnog fonda i snažno umuti.',
      'Boiling breaks the emulsion and the butter floats up in greasy drops. Once buttered, a sauce is only kept warm. If it splits, add a spoonful of cold stock and whisk hard.',
      'Кипение разбивает эмульсию, и масло всплывает жирными каплями. После масла соус только держат тёплым. Если расслоился, добавь ложку холодного бульона и энергично взбей.',
    ),
  },
  think: {
    question: l('Kad se dodaje puter u sos?', 'When does the butter go into the sauce?', 'Когда добавляют масло в соус?'),
    options: [
      l('Na kraju, van vatre', 'At the end, off the heat', 'В конце, вне огня'),
      l('Na početku, sa fondom', 'At the start, with the stock', 'В начале, с бульоном'),
      l('Dok sos ključa', 'While the sauce boils', 'Пока соус кипит'),
    ],
    answer: 0,
    explain: l(
      'Puter je poslednji korak. Na kraju i van vatre ostaje emulzija koja daje sjaj. Kuvan ili dodat na početku, samo ispliva kao mast.',
      'Butter is the last step. Added at the end and off the heat, it stays an emulsion that gives gloss. Boiled or added early, it just floats up as fat.',
      'Масло — последний шаг. В конце и вне огня оно остаётся эмульсией, дающей блеск. Если варить или добавить в начале, оно просто всплывёт жиром.',
    ),
  },
}

export const chefSauceLessons: Lesson[] = [demiGlace, jus, sabayon, greenOil, finish]
