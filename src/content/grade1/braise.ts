import { l, type Lesson } from '../types'

// Module 12 · Stewing and braising. Tough, cheap cuts plus low heat plus time: collagen melts into
// gelatine between about 70°C and 90°C, so the liquid never boils and the test is a fork, not a clock.

const braising: Lesson = {
  id: '12.1',
  title: l('Šta je braziranje', 'What braising is', 'Что такое брезирование'),
  goal: l(
    'Razumeš braziranje i izbraziraš svinjski vrat koji se raspada pod viljuškom.',
    'You understand braising and braise pork neck until it falls apart under a fork.',
    'Ты понимаешь брезирование и тушишь свиную шею, пока она не будет распадаться под вилкой.',
  ),
  minutes: 7,
  key: { value: l('160°C', '160°C', '160°C'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('Svinjski vrat bez kosti', 'Boneless pork neck', 'Свиная шея без кости'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Luk, šargarepa, beli luk', 'Onion, carrot, garlic', 'Лук, морковь, чеснок'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Belo vino ili pivo', 'White wine or beer', 'Белое вино или пиво'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Fond (8.1) ili voda', 'Stock (8.1) or water', 'Бульон (8.1) или вода'), qty: l('~500 ml', '~500 ml', '~500 мл') },
    { item: l('Lonac sa poklopcem za rernu', 'Ovenproof pot with lid', 'Кастрюля с крышкой для духовки'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Najjeftinije meso ima najviše ukusa i najviše vezivnog tkiva. Brzo pečeno je žilavo, braziranjem postaje meko kao puter.',
    'The cheapest cuts have the most flavour and the most connective tissue. Cooked fast they are tough; braised they turn soft as butter.',
    'Самое дешёвое мясо самое вкусное и с наибольшим количеством соединительной ткани. Быстро приготовленное — жёсткое, тушёное — мягкое, как масло.',
  ),
  steps: [
    {
      text: l('Iseci meso na velike komade, osuši i posoli.', 'Cut the meat into large pieces, pat dry and salt.', 'Нарежь мясо крупными кусками, обсуши и посоли.'),
      params: [l('5 cm', '5 cm', '5 см'), l('so 1%', 'salt 1%', 'соль 1%')],
      done: l('Komadi su suvi spolja i iste veličine.', 'The pieces are dry outside and the same size.', 'Куски сухие снаружи и одного размера.'),
      why: l('Veliki komadi duže ostanu sočni. Mali se raspadnu u niti.', 'Large pieces stay juicy longer. Small ones fall apart into threads.', 'Крупные куски дольше остаются сочными. Мелкие распадаются на волокна.'),
      drawing: 'patDry',
    },
    {
      text: l('Zapeci meso sa svih strana, u dve ture.', 'Brown the meat on all sides, in two batches.', 'Обжарь мясо со всех сторон, в два захода.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь'), l('2–3 min po strani', '2–3 min per side', '2–3 мин на сторону')],
      done: l('Svaki komad ima tamnu koricu, a na dnu je braon sloj.', 'Every piece has a dark crust and there is a brown layer on the bottom.', 'У каждого куска тёмная корочка, а на дне коричневый слой.'),
      why: l('Prepun lonac pušta paru i meso se kuva umesto da se peče (4.6).', 'An overcrowded pot steams and the meat boils instead of browning (4.6).', 'В переполненной кастрюле мясо парится вместо того, чтобы жариться (4.6).'),
      drawing: 'searRelease',
    },
    {
      text: l('Izvadi meso, zapeci povrće pa razlij vinom i sastruži dno.', 'Take out the meat, brown the vegetables, then pour in the wine and scrape.', 'Выложи мясо, обжарь овощи, влей вино и соскреби дно.'),
      params: [l('200 ml', '200 ml', '200 мл'), l('ukuvaj na pola', 'reduce by half', 'уварить вдвое')],
      done: l('Dno je čisto, a vino miriše blago, bez oštrine alkohola.', 'The bottom is clean and the wine smells mellow, without the sting of alcohol.', 'Дно чистое, вино пахнет мягко, без резкости спирта.'),
      drawing: 'deglaze',
    },
    {
      text: l('Vrati meso i dolij tečnost do pola visine mesa.', 'Return the meat and add liquid halfway up the meat.', 'Верни мясо и долей жидкость до половины высоты мяса.'),
      params: [l('½ – ⅔ mesa', '½ – ⅔ of the meat', '½ – ⅔ высоты мяса')],
      done: l('Vrh mesa viri iz tečnosti.', 'The tops of the meat stick out of the liquid.', 'Верх мяса выступает из жидкости.'),
      why: l('Ovo je razlika: braziranje nije kuvanje. Deo mesa se kuva u tečnosti, a deo peče u pari ispod poklopca.', 'This is the difference: braising is not boiling. Part of the meat cooks in liquid, part roasts in steam under the lid.', 'Вот разница: брезирование — не варка. Часть мяса готовится в жидкости, часть — в пару под крышкой.'),
      drawing: 'braiseLevel',
    },
    {
      text: l('Poklopi i stavi u rernu dok viljuška ne klizne kroz meso.', 'Cover and put in the oven until a fork slides through the meat.', 'Накрой и поставь в духовку, пока вилка не будет входить в мясо свободно.'),
      params: [l('160°C', '160°C', '160°C'), l('2–2.5 h', '2–2.5 h', '2–2,5 ч')],
      done: l('Viljuška uđe i izađe bez otpora, a komad se ne podiže sa njom.', 'The fork goes in and out with no resistance, and the piece does not lift with it.', 'Вилка входит и выходит без сопротивления, кусок не поднимается вместе с ней.'),
      why: l('Kolagen se topi u želatin tek posle sat-dva na 70–90°C. Rerna drži tu temperaturu bez ključanja.', 'Collagen melts into gelatine only after an hour or two at 70–90°C. The oven holds that without boiling.', 'Коллаген превращается в желатин только после часа-двух при 70–90°C. Духовка держит эту температуру без кипения.'),
      drawing: 'forkTender',
    },
  ],
  mistake: {
    title: l('Fileti i šnicle za braziranje.', 'Lean fillets and escalopes for braising.', 'Филе и шницели для тушения.'),
    fix: l(
      'Meso bez vezivnog tkiva (file, šnicla, pileće belo) posle dva sata postane suvo i vlaknasto. Za braziranje biraj vrat, plećku, obraz, kolenicu, batake.',
      'Meat without connective tissue (tenderloin, escalopes, chicken breast) turns dry and stringy after two hours. For braising choose neck, shoulder, cheek, shank, thighs.',
      'Мясо без соединительной ткани (вырезка, шницель, куриная грудка) через два часа становится сухим и волокнистым. Для тушения выбирай шею, лопатку, щёки, голяшку, бёдра.',
    ),
  },
  think: {
    question: l('Posle 2 sata meso je i dalje tvrdo. Šta radiš?', 'After 2 hours the meat is still tough. What do you do?', 'Через 2 часа мясо всё ещё жёсткое. Что делаешь?'),
    options: [
      l('Vratiš ga u rernu i proveravaš na 30 min', 'Put it back and check every 30 min', 'Возвращаешь в духовку и проверяешь каждые 30 мин'),
      l('Pojačaš rernu na 220°C', 'Turn the oven up to 220°C', 'Прибавляешь духовку до 220°C'),
      l('Izvadiš ga, gotovo je, takvo je meso', 'Take it out, it is done, that is the meat', 'Вынимаешь — готово, такое мясо'),
    ],
    answer: 0,
    explain: l(
      'Tvrdo braziranje skoro uvek znači da je kratko trajalo, ne predugo. Kolagen se još nije istopio. Vreme je u receptu procena, viljuška je presuda.',
      'Tough braised meat almost always means too short, not too long. The collagen has not melted yet. The recipe time is a guess; the fork is the verdict.',
      'Жёсткое тушёное мясо почти всегда значит, что тушили мало, а не много. Коллаген ещё не растаял. Время в рецепте — оценка, вилка — приговор.',
    ),
  },
}

const goulash: Lesson = {
  id: '12.2',
  title: l('Gulaš', 'Goulash', 'Гуляш'),
  goal: l(
    'Skuvaš goveđi gulaš u kome je sos gust od luka, bez brašna.',
    'You make a beef goulash whose sauce is thickened by onion alone, with no flour.',
    'Ты готовишь говяжий гуляш, соус которого густой от лука, без муки.',
  ),
  minutes: 8,
  key: { value: l('2 : 1', '2 : 1', '2 : 1'), label: l('meso : luk', 'meat : onion', 'мясо : лук') },
  need: [
    { item: l('Juneća plećka ili but', 'Beef shoulder or shin', 'Говяжья лопатка или голяшка'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Crni luk', 'Onions', 'Репчатый лук'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Mast ili ulje', 'Lard or oil', 'Смалец или масло'), qty: l('50 g', '50 g', '50 г') },
    { item: l('Slatka aleva paprika', 'Sweet paprika', 'Сладкая паприка'), qty: l('2 kašike', '2 tbsp', '2 ст. л.') },
    { item: l('Paradajz pire, beli luk, kim, majoran', 'Tomato paste, garlic, caraway, marjoram', 'Томатная паста, чеснок, тмин, майоран'), qty: l('po malo', 'a little of each', 'понемногу') },
  ],
  why: l(
    'Gulaš je braziranje u kome luk radi sav posao: daje slatkoću, boju i gustinu. Kad ga savladaš, imaš ključ za pola balkanske kuhinje.',
    'Goulash is a braise where the onion does all the work: sweetness, colour and body. Master it and you hold the key to half of Balkan cooking.',
    'Гуляш — брезирование, где всю работу делает лук: сладость, цвет и густоту. Освоишь его — получишь ключ к половине балканской кухни.',
  ),
  steps: [
    {
      text: l('Luk iseci sitno i dinstaj na masti dok ne postane zlatan.', 'Chop the onion finely and cook it in the fat until golden.', 'Мелко нарежь лук и томи на жиру до золотистого цвета.'),
      params: [l('srednje tiha vatra', 'medium-low heat', 'огонь ниже среднего'), l('20 min', '20 min', '20 мин')],
      done: l('Luk je zlatan, mekan i sladak.', 'The onion is golden, soft and sweet.', 'Лук золотистый, мягкий и сладкий.'),
      why: l('Sitno iseckan luk se tokom kuvanja potpuno otopi i postane sos.', 'Finely chopped onion melts completely during cooking and becomes the sauce.', 'Мелко нарезанный лук полностью растворяется и становится соусом.'),
      drawing: 'sweatVeg',
    },
    {
      text: l('Skloni lonac sa vatre i umešaj papriku.', 'Take the pot off the heat and stir in the paprika.', 'Сними кастрюлю с огня и вмешай паприку.'),
      params: [l('2 kašike', '2 tbsp', '2 ст. л.'), l('van vatre', 'off the heat', 'вне огня')],
      done: l('Luk je crven i miriše slatko, ne gorko.', 'The onion is red and smells sweet, not bitter.', 'Лук красный и пахнет сладко, не горько.'),
      drawing: 'bloomSpice',
    },
    {
      text: l('Dodaj meso na kocke, so, beli luk i kim, pa vrati na vatru.', 'Add the cubed meat, salt, garlic and caraway, and return to the heat.', 'Добавь мясо кубиками, соль, чеснок и тмин и верни на огонь.'),
      params: [l('kocke 4 cm', '4 cm cubes', 'кубики 4 см'), l('so 1%', 'salt 1%', 'соль 1%')],
      done: l('Meso je pustilo sok i krčka u njemu.', 'The meat has released its juices and is simmering in them.', 'Мясо пустило сок и томится в нём.'),
      why: l('Tradicionalni gulaš se ne zapeče. Meso se kuva u sopstvenom soku i luku, pa je sos čistijeg ukusa.', 'Traditional goulash is not browned. The meat cooks in its own juice and the onion, for a cleaner-tasting sauce.', 'Традиционный гуляш не обжаривают. Мясо готовится в собственном соку и луке, и соус чище на вкус.'),
    },
    {
      text: l('Poklopi i krčkaj, podlivajući malo vode kad tečnost spadne.', 'Cover and simmer, adding a little water when the liquid drops.', 'Накрой и томи, подливая немного воды, когда жидкость уходит.'),
      params: [l('2–2.5 h', '2–2.5 h', '2–2,5 ч'), l('po 100 ml', '100 ml at a time', 'по 100 мл')],
      done: l('Meso je uvek tek u malo tečnosti, nikad ne pliva.', 'The meat always sits in a little liquid, never swims.', 'Мясо всегда в небольшом количестве жидкости, никогда не плавает.'),
      why: l('Podlivanje je srpska reč za braziranje u delovima. Malo tečnosti znači koncentrisan ukus.', 'Podlivanje, topping up bit by bit, is braising in instalments. Little liquid means concentrated flavour.', 'Подливание — это брезирование по частям. Мало жидкости — концентрированный вкус.'),
      drawing: 'braiseLevel',
    },
    {
      text: l('Dodaj pire i majoran, pa krčkaj otklopljeno.', 'Add the tomato paste and marjoram, then simmer uncovered.', 'Добавь томатную пасту и майоран и томи без крышки.'),
      params: [l('1 kašika pirea', '1 tbsp paste', '1 ст. л. пасты'), l('15 min', '15 min', '15 мин')],
      done: l('Meso se kida viljuškom, a sos je gust i sjajan.', 'The meat pulls apart with a fork and the sauce is thick and glossy.', 'Мясо разделяется вилкой, соус густой и блестящий.'),
      why: l('Pire na kraju, jer kiselina od početka usporava omekšavanje.', 'The paste goes in at the end because acid from the start slows the softening.', 'Пасту — в конце, потому что кислота с самого начала замедляет размягчение.'),
      drawing: 'forkTender',
    },
  ],
  mistake: {
    title: l('Gulaš zgusnut brašnom jer je redak.', 'Goulash thickened with flour because it is thin.', 'Гуляш загущают мукой, потому что жидкий.'),
    fix: l(
      'Redak gulaš znači previše vode ili premalo luka. Brašno ga zgusne, ali ukus ostane razvodnjen. Otklopi ga i ukuvaj 15–20 min, a sledeći put podlivaj manje.',
      'A thin goulash means too much water or too little onion. Flour thickens it, but the taste stays watery. Uncover and reduce 15–20 min, and next time top up less.',
      'Жидкий гуляш — значит много воды или мало лука. Мука загустит, но вкус останется водянистым. Сними крышку и уварь 15–20 мин, а в следующий раз подливай меньше.',
    ),
  },
  think: {
    question: l('Zašto se gulaš ne pravi od junećeg fileta?', 'Why is goulash not made from beef tenderloin?', 'Почему гуляш не делают из говяжьей вырезки?'),
    options: [
      l('Nema kolagena, pa posle 2 sata bude suv', 'It has no collagen, so after 2 hours it is dry', 'В ней нет коллагена, и через 2 часа она сухая'),
      l('Previše je mastan', 'It is too fatty', 'Она слишком жирная'),
      l('Može, samo je skup', 'You can, it is just expensive', 'Можно, просто дорого'),
    ],
    answer: 0,
    explain: l(
      'Gustina i sočnost gulaša dolaze iz želatina iz plećke i buta. File nema šta da otopi, samo se steže.',
      'The body and juiciness of goulash come from the gelatine in shoulder and shin. Tenderloin has nothing to melt; it only tightens.',
      'Густота и сочность гуляша — от желатина лопатки и голяшки. Вырезке нечего растапливать, она только сжимается.',
    ),
  },
  recipe: { name: l('Goveđi gulaš', 'Beef goulash', 'Говяжий гуляш'), protein: 15, carbs: 4, fat: 9, kcal: 160 },
}

const paprikash: Lesson = {
  id: '12.3',
  title: l('Pileći paprikaš', 'Chicken paprikash', 'Куриный паприкаш'),
  goal: l(
    'Skuvaš pileći paprikaš za sat vremena, sa mekim batacima i kremastim sosom.',
    'You make chicken paprikash in an hour, with tender thighs and a creamy sauce.',
    'Ты готовишь куриный паприкаш за час, с мягкими бёдрами и кремовым соусом.',
  ),
  minutes: 7,
  key: { value: l('40 min', '40 min', '40 мин'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Pileći bataci i karabataci sa kosti', 'Chicken thighs and drumsticks, bone in', 'Куриные бёдра и голени на кости'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Crni luk', 'Onions', 'Репчатый лук'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Paprika babura i paradajz', 'Bell pepper and tomato', 'Сладкий перец и помидор'), qty: l('2 + 1', '2 + 1', '2 + 1') },
    { item: l('Slatka aleva paprika', 'Sweet paprika', 'Сладкая паприка'), qty: l('2 kašike', '2 tbsp', '2 ст. л.') },
    { item: l('Kisela pavlaka i brašno', 'Sour cream and flour', 'Сметана и мука'), qty: l('150 g + 1 kašika', '150 g + 1 tbsp', '150 г + 1 ст. л.') },
  ],
  why: l(
    'Isti princip kao gulaš, ali piletina se brazira za 40 minuta umesto 2 sata. Brzo braziranje za radni dan.',
    'The same principle as goulash, but chicken braises in 40 minutes instead of 2 hours. A quick weekday braise.',
    'Тот же принцип, что у гуляша, но курица тушится 40 минут вместо 2 часов. Быстрое брезирование для будней.',
  ),
  steps: [
    {
      text: l('Osuši piletinu i zapeci je na koži, pa izvadi.', 'Pat the chicken dry, brown it skin side down, then take it out.', 'Обсуши курицу, обжарь кожей вниз и выложи.'),
      params: [l('5 min', '5 min', '5 мин'), l('samo koža', 'skin side only', 'только кожа')],
      done: l('Koža je zlatna, a u loncu je pileća mast.', 'The skin is golden and there is chicken fat in the pot.', 'Кожа золотистая, в кастрюле куриный жир.'),
      why: l('Pileća mast je masnoća za luk. Ukus ostaje u loncu.', 'The chicken fat is the fat for the onion. The flavour stays in the pot.', 'Куриный жир — жир для лука. Вкус остаётся в кастрюле.'),
      drawing: 'searRelease',
    },
    {
      text: l('U istoj masti dinstaj luk dok ne omekša, pa dodaj papriku i paradajz.', 'In the same fat soften the onion, then add the pepper and tomato.', 'В том же жиру смягчи лук, потом добавь перец и помидор.'),
      params: [l('15 min', '15 min', '15 мин'), l('paprika van vatre', 'paprika off the heat', 'паприка вне огня')],
      done: l('Povrće je mekano, a sve je crveno od paprike.', 'The vegetables are soft and everything is red from the paprika.', 'Овощи мягкие, всё красное от паприки.'),
      drawing: 'bloomSpice',
    },
    {
      text: l('Vrati piletinu kožom nagore i dolij vode do pola.', 'Return the chicken skin side up and add water halfway.', 'Верни курицу кожей вверх и долей воды до половины.'),
      params: [l('~300 ml', '~300 ml', '~300 мл'), l('poklopac', 'lid on', 'под крышкой')],
      done: l('Koža je iznad tečnosti.', 'The skin sits above the liquid.', 'Кожа над жидкостью.'),
      drawing: 'braiseLevel',
    },
    {
      text: l('Krčkaj dok meso ne počne da se odvaja od kosti.', 'Simmer until the meat starts to come away from the bone.', 'Томи, пока мясо не начнёт отходить от кости.'),
      params: [l('40 min', '40 min', '40 мин'), l('80–85°C u batku', '80–85°C in the thigh', '80–85°C в бедре')],
      done: l('Batak se lako okreće oko kosti.', 'The thigh twists easily around the bone.', 'Бедро легко прокручивается вокруг кости.'),
      why: l('Bataci su bezbedni na 74°C, ali tek na 80–85°C se vezivno tkivo opusti i meso postane meko.', 'Thighs are safe at 74°C, but only at 80–85°C does the connective tissue relax and the meat turn tender.', 'Бёдра безопасны при 74°C, но только при 80–85°C соединительная ткань расслабляется и мясо становится мягким.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Pavlaku umuti sa brašnom, razredi sosom i vrati u lonac.', 'Whisk the sour cream with flour, thin with sauce and stir back in.', 'Взбей сметану с мукой, разбавь соусом и верни в кастрюлю.'),
      params: [l('150 g + 1 kašika', '150 g + 1 tbsp', '150 г + 1 ст. л.'), l('krčkaj 3 min', 'simmer 3 min', 'томи 3 мин')],
      done: l('Sos je kremast, narandžast i bez grudvica.', 'The sauce is creamy, orange and smooth.', 'Соус кремовый, оранжевый и без комков.'),
      why: l('Brašno štiti pavlaku da se ne zgruša na krčkanju. Postupak razređivanja je kao u 8.5.', 'The flour stops the sour cream curdling at a simmer. The tempering is the same as in 8.5.', 'Мука не даёт сметане свернуться при томлении. Разбавление — как в 8.5.'),
      drawing: 'temperLiaison',
    },
  ],
  mistake: {
    title: l('Pileće belo umesto bataka.', 'Chicken breast instead of thighs.', 'Куриная грудка вместо бёдер.'),
    fix: l(
      'Belo je gotovo na 74°C i posle 40 minuta krčkanja je suvo kao karton. Ako baš mora belo, dodaj ga u poslednjih 12–15 minuta, na komade.',
      'Breast is done at 74°C and after 40 minutes of simmering it is dry as cardboard. If it must be breast, add it in pieces for the last 12–15 minutes.',
      'Грудка готова при 74°C, а после 40 минут томления сухая, как картон. Если очень нужно — добавь её кусками на последние 12–15 минут.',
    ),
  },
  think: {
    question: l('Zašto koža ostaje iznad tečnosti?', 'Why does the skin stay above the liquid?', 'Почему кожа остаётся над жидкостью?'),
    options: [
      l('Da ostane zapečena, a ne gumena', 'So it stays browned instead of rubbery', 'Чтобы осталась поджаристой, а не резиновой'),
      l('Da se meso brže skuva', 'So the meat cooks faster', 'Чтобы мясо быстрее сварилось'),
      l('Da sos bude ređi', 'So the sauce is thinner', 'Чтобы соус был жиже'),
    ],
    answer: 0,
    explain: l(
      'Koža potopljena 40 minuta postane mlitava i gumena. Iznad tečnosti se peče u pari i zadrži deo korice.',
      'Skin submerged for 40 minutes turns limp and rubbery. Above the liquid it roasts in the steam and keeps some of its crust.',
      'Кожа, 40 минут под жидкостью, становится вялой и резиновой. Над жидкостью она запекается в пару и сохраняет часть корочки.',
    ),
  },
  recipe: { name: l('Pileći paprikaš', 'Chicken paprikash', 'Куриный паприкаш'), protein: 14, carbs: 4.5, fat: 10, kcal: 165 },
}

const sarma: Lesson = {
  id: '12.4',
  title: l('Sarma', 'Sarma', 'Сарма'),
  goal: l(
    'Urolaš čvrste sarme koje se ne raspadnu i skuvaš ih da kupus bude mek kao maslac.',
    'You roll tight sarma that do not come apart, and cook them until the cabbage is butter-soft.',
    'Ты сворачиваешь плотные голубцы-сарму, которые не разваливаются, и варишь, пока капуста не станет мягкой, как масло.',
  ),
  minutes: 9,
  key: { value: l('3 h', '3 h', '3 ч'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Kiseli kupus, glavica', 'Whole soured cabbage head', 'Квашеная капуста целым кочаном'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Mleveno meso, junetina i svinjetina', 'Minced beef and pork', 'Фарш говядина и свинина'), qty: l('600 g', '600 g', '600 г') },
    { item: l('Pirinač', 'Rice', 'Рис'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Crni luk, aleva paprika, biber', 'Onion, paprika, pepper', 'Лук, паприка, перец'), qty: l('1 + 1 kašika', '1 + 1 tbsp', '1 + 1 ст. л.') },
    { item: l('Suva rebra ili slanina', 'Smoked ribs or bacon', 'Копчёные рёбра или бекон'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Veliki lonac i tanjir', 'Large pot and a plate', 'Большая кастрюля и тарелка'), qty: l('6 l', '6 l', '6 л') },
  ],
  why: l(
    'Sarma je test strpljenja. Tehnika je jednostavna, ali tri sata krčkanja ne opraštaju labavo zarolane listove.',
    'Sarma is a test of patience. The technique is simple, but three hours of simmering do not forgive loosely rolled leaves.',
    'Сарма — проверка терпения. Техника простая, но три часа томления не прощают рыхло свёрнутых листьев.',
  ),
  steps: [
    {
      text: l('Odvoji listove i probaj jedan. Ako je preslan, potopi ih.', 'Separate the leaves and taste one. If too salty, soak them.', 'Раздели листья и попробуй один. Если пересолен — вымочи.'),
      params: [l('hladna voda 30–60 min', 'cold water 30–60 min', 'холодная вода 30–60 мин')],
      done: l('List je kiselkast i slan, ali prijatan za jelo.', 'The leaf is sour and salty, but pleasant to eat.', 'Лист кисловатый и солёный, но приятный на вкус.'),
      why: l('So iz kupusa ulazi u nadev i u sos. Proba lista ti kaže koliko soli ide u meso.', 'Salt from the cabbage goes into the filling and sauce. Tasting the leaf tells you how much salt the meat needs.', 'Соль из капусты уходит в начинку и соус. Попробовав лист, ты поймёшь, сколько соли класть в мясо.'),
    },
    {
      text: l('Izmešaj meso, sirov pirinač, izdinstan luk i začine.', 'Mix the meat, raw rice, softened onion and spices.', 'Смешай мясо, сырой рис, обжаренный лук и специи.'),
      params: [l('so 0.5–1%', 'salt 0.5–1%', 'соль 0,5–1%'), l('pirinač ~15%', 'rice ~15%', 'рис ~15%')],
      done: l('Nadev se drži u loptu i nije lepljiv.', 'The filling holds in a ball and is not sticky.', 'Начинка держится шариком и не липнет.'),
      why: l('Pirinač ide sirov i upija sok dok se kuva. Previše pirinča i sarma pukne.', 'The rice goes in raw and soaks up juice as it cooks. Too much rice and the sarma bursts.', 'Рис кладут сырым, он впитывает сок при варке. Слишком много риса — и сарма лопнет.'),
    },
    {
      text: l('Zaseci debelu žilu lista u ravni sa listom.', 'Shave the thick rib of the leaf level with the leaf.', 'Срежь толстую жилку листа вровень с листом.'),
      done: l('List je svuda iste debljine i savija se bez pucanja.', 'The leaf is the same thickness throughout and folds without cracking.', 'Лист везде одной толщины и сгибается, не ломаясь.'),
      drawing: 'leafRib',
    },
    {
      text: l('Stavi nadev kod žile, podvij strane i čvrsto urolaj.', 'Put the filling at the rib end, fold in the sides and roll tightly.', 'Положи начинку у жилки, подверни края и плотно сверни.'),
      params: [l('~1.5 kašika nadeva', '~1.5 tbsp filling', '~1,5 ст. л. начинки'), l('kraj prstom utisni', 'tuck the end in with a finger', 'конец заправь пальцем')],
      done: l('Sarma je čvrsta i ne otvara se kad je okreneš.', 'The roll is firm and does not open when you turn it over.', 'Сарма плотная и не раскрывается, если её перевернуть.'),
      why: l('Nadev nabubri za trećinu. Labava sarma se otvori, a čvrsta ostane cela.', 'The filling swells by a third. A loose roll opens; a tight one stays whole.', 'Начинка набухает на треть. Рыхлая сарма раскроется, плотная останется целой.'),
      drawing: 'rollSarma',
    },
    {
      text: l('Slaži u lonac na seckan kupus, sa rebrima, prekrij listom i tanjirom, dolij vode.', 'Pack into the pot on chopped cabbage with the ribs, cover with a leaf and a plate, add water.', 'Уложи в кастрюлю на рубленую капусту с рёбрами, накрой листом и тарелкой, долей воды.'),
      params: [l('voda do vrha sarmi', 'water to the top of the rolls', 'вода вровень с сармой'), l('3 h tiho', '3 h, low', '3 ч на слабом огне')],
      done: l('Viljuška ulazi u sarmu bez otpora, a kupus je providan.', 'A fork goes into a roll with no resistance and the cabbage is translucent.', 'Вилка входит в сарму без сопротивления, капуста прозрачная.'),
      why: l('Tanjir drži sarme na mestu da se ne okreću i ne otvaraju. Lonac se ne meša, samo se protrese.', 'The plate holds the rolls in place so they do not turn and open. Never stir the pot, only shake it.', 'Тарелка держит сарму на месте, чтобы она не вертелась и не раскрывалась. Кастрюлю не мешают, только встряхивают.'),
      drawing: 'sarmaPot',
    },
  ],
  mistake: {
    title: l('Mešanje sarme varjačom.', 'Stirring the sarma with a spoon.', 'Мешать сарму ложкой.'),
    fix: l(
      'Varjača otvori sarme i nadev ispadne u sos. Sarme slažeš čvrsto, pritisneš tanjirom i lonac samo protreseš za ručke, svakih sat vremena.',
      'A spoon opens the rolls and the filling falls into the sauce. Pack the rolls tightly, weigh them down with a plate and only shake the pot by its handles, once an hour.',
      'Ложка раскрывает сарму, начинка выпадает в соус. Укладывай плотно, придави тарелкой и только встряхивай кастрюлю за ручки раз в час.',
    ),
  },
  think: {
    question: l('Kupus je jako slan. Šta menjaš u nadevu?', 'The cabbage is very salty. What do you change in the filling?', 'Капуста очень солёная. Что меняешь в начинке?'),
    options: [
      l('Manje ili nimalo soli u mesu', 'Less or no salt in the meat', 'Меньше или совсем без соли в мясе'),
      l('Više pirinča', 'More rice', 'Больше риса'),
      l('Ništa, so se izgubi u kuvanju', 'Nothing, the salt cooks away', 'Ничего, соль уйдёт при варке'),
    ],
    answer: 0,
    explain: l(
      'So ne isparava. Za tri sata kupus i nadev izjednače so. Ako je list preslan, potopi ga i soli meso manje.',
      'Salt does not evaporate. Over three hours cabbage and filling even out their salt. If the leaf is very salty, soak it and salt the meat less.',
      'Соль не испаряется. За три часа капуста и начинка выравнивают соль. Если лист пересолен, вымочи его и меньше соли мясо.',
    ),
  },
  recipe: { name: l('Sarma', 'Sarma', 'Сарма'), protein: 9, carbs: 6, fat: 10, kcal: 155 },
}

const cheeks: Lesson = {
  id: '12.5',
  title: l('Braziran juneći obraz', 'Braised beef cheeks', 'Тушёные говяжьи щёчки'),
  goal: l(
    'Izbraziraš juneće obraze u crnom vinu i ukuvaš sos do sjaja.',
    'You braise beef cheeks in red wine and reduce the sauce to a glaze.',
    'Ты тушишь говяжьи щёчки в красном вине и увариваешь соус до блеска.',
  ),
  minutes: 9,
  key: { value: l('150°C · 3 h', '150°C · 3 h', '150°C · 3 ч'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('Juneći obrazi', 'Beef cheeks', 'Говяжьи щёчки'), qty: l('4 kom, ~1.2 kg', '4, ~1.2 kg', '4 шт, ~1,2 кг') },
    { item: l('Luk, šargarepa, celer', 'Onion, carrot, celery', 'Лук, морковь, сельдерей'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Paradajz pire', 'Tomato paste', 'Томатная паста'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('Crno vino', 'Red wine', 'Красное вино'), qty: l('500 ml', '500 ml', '500 мл') },
    { item: l('Tamni fond (8.2)', 'Brown stock (8.2)', 'Тёмный бульон (8.2)'), qty: l('~700 ml', '~700 ml', '~700 мл') },
    { item: l('Lovor, majčina dušica', 'Bay, thyme', 'Лавр, тимьян'), qty: l('2 + 4 grančice', '2 + 4 sprigs', '2 + 4 веточки') },
  ],
  why: l(
    'Obraz je mišić koji radi ceo život i pun je kolagena. Spolja tvrd i jeftin, posle tri sata ga sečeš kašikom. Restoransko jelo iz kućnog lonca.',
    'The cheek is a muscle that works all its life and is full of collagen. Tough and cheap raw, after three hours you cut it with a spoon. A restaurant dish from a home pot.',
    'Щёчка — мышца, работающая всю жизнь, полная коллагена. Сырая жёсткая и дешёвая, через три часа режется ложкой. Ресторанное блюдо из домашней кастрюли.',
  ),
  steps: [
    {
      text: l('Očisti obraze od opne i spoljne masnoće.', 'Trim the silver skin and outer fat from the cheeks.', 'Очисти щёчки от плёнки и внешнего жира.'),
      done: l('Ostao je tamnocrven mišić bez srebrnog sloja.', 'Dark red muscle is left with no silver layer.', 'Осталась тёмно-красная мышца без серебристого слоя.'),
      why: l('Opna se ni posle 3 sata ne istopi. Tehnika iz 7.2.', 'Silver skin does not melt even after 3 hours. The technique from 7.2.', 'Плёнка не растапливается даже за 3 часа. Техника из 7.2.'),
      drawing: 'silverSkin',
    },
    {
      text: l('Posoli, zapeci jako sa obe strane, pa izvadi.', 'Salt, brown hard on both sides, then take out.', 'Посоли, сильно обжарь с двух сторон и выложи.'),
      params: [l('3–4 min po strani', '3–4 min per side', '3–4 мин на сторону')],
      done: l('Obe strane imaju tamnu, ravnomernu koricu.', 'Both sides have a dark, even crust.', 'С обеих сторон тёмная ровная корочка.'),
      drawing: 'searRelease',
    },
    {
      text: l('Zapeci povrće i pire, razlij vinom i ukuvaj na pola.', 'Brown the vegetables and paste, add the wine and reduce by half.', 'Обжарь овощи и пасту, влей вино и уварь вдвое.'),
      params: [l('500 → 250 ml', '500 → 250 ml', '500 → 250 мл'), l('~10 min', '~10 min', '~10 мин')],
      done: l('Vino je gusto, a oštar miris alkohola je nestao.', 'The wine is syrupy and the sharp smell of alcohol is gone.', 'Вино густое, резкий запах спирта ушёл.'),
      why: l('Neukuvano vino ostaje kiselo i oporo u gotovom sosu.', 'Unreduced wine stays sour and harsh in the finished sauce.', 'Неуваренное вино остаётся кислым и терпким в готовом соусе.'),
      drawing: 'reduction',
    },
    {
      text: l('Vrati obraze, dolij fond do tri četvrtine, poklopi i u rernu.', 'Return the cheeks, add stock three-quarters up, cover and into the oven.', 'Верни щёчки, долей бульон на три четверти, накрой и в духовку.'),
      params: [l('150°C', '150°C', '150°C'), l('3–3.5 h', '3–3.5 h', '3–3,5 ч')],
      done: l('Kašika prolazi kroz obraz, a on i dalje drži oblik.', 'A spoon cuts through the cheek, yet it still holds its shape.', 'Ложка проходит сквозь щёчку, а она всё ещё держит форму.'),
      why: l('Niža temperatura od 12.1 jer je obraz gušći. Odmaraj ih u tečnosti 20 min, upiju sos.', 'Lower than 12.1 because the cheek is denser. Rest them in the liquid 20 min and they drink the sauce back.', 'Ниже, чем в 12.1, потому что щёчка плотнее. Дай им 20 мин отдохнуть в жидкости — впитают соус.'),
      drawing: 'braiseLevel',
    },
    {
      text: l('Izvadi obraze, procedi tečnost i ukuvaj je do sjaja.', 'Lift out the cheeks, strain the liquid and reduce it to a glaze.', 'Вынь щёчки, процеди жидкость и уварь до блеска.'),
      params: [l('~1/3 zapremine', 'to ~1/3', 'до ~1/3 объёма'), l('skidaj masnoću', 'skim the fat', 'снимай жир')],
      done: l('Sos prekriva kašiku i trag prsta ostaje čist.', 'The sauce coats a spoon and a finger line stays clean.', 'Соус обволакивает ложку, след пальца остаётся чистым.'),
      why: l('Želatin iz obraza i fonda zgusne sos bez brašna. Na kraju probaj so, tek tada.', 'Gelatine from the cheek and stock thickens the sauce with no flour. Taste for salt only now, at the end.', 'Желатин из щёчек и бульона загущает соус без муки. Соль пробуй только сейчас, в конце.'),
      drawing: 'coatSpoon',
    },
  ],
  mistake: {
    title: l('Sos posoljen pre ukuvavanja.', 'Sauce salted before reducing.', 'Соус посолили до уваривания.'),
    fix: l(
      'Kad tečnost spadne na trećinu, so se utrostruči. Meso posoli na početku, a sos tek kada je ukuvan. Ako je preslan, razredi ga fondom bez soli.',
      'When the liquid drops to a third, the salt triples. Salt the meat at the start and the sauce only once it is reduced. If too salty, thin it with unsalted stock.',
      'Когда жидкость уходит до трети, соли становится втрое больше. Мясо соли в начале, а соус — только уваренный. Если пересолен, разбавь несолёным бульоном.',
    ),
  },
  think: {
    question: l('Obrazi su gotovi u 17h, a gosti dolaze u 20h. Šta radiš?', 'The cheeks are done at 5 pm and the guests arrive at 8 pm. What do you do?', 'Щёчки готовы в 17:00, а гости приходят в 20:00. Что делаешь?'),
    options: [
      l('Ostaviš ih u tečnosti i podgreješ polako', 'Leave them in the liquid and reheat gently', 'Оставляешь в жидкости и медленно разогреваешь'),
      l('Izvadiš ih na tanjir da se ohlade', 'Take them out onto a plate to cool', 'Выкладываешь на тарелку остывать'),
      l('Držiš ih u rerni na 150°C do 20h', 'Keep them in the oven at 150°C until 8 pm', 'Держишь в духовке при 150°C до 20:00'),
    ],
    answer: 0,
    explain: l(
      'Braziranje je najbolje jelo za goste jer se pravi unapred. U tečnosti meso ostaje sočno i čak bolje upije ukus. Na vazduhu se suši, a u rerni se prekuva.',
      'Braises are the best dish for guests because they are made ahead. In the liquid the meat stays juicy and soaks up even more flavour. In air it dries; in the oven it overcooks.',
      'Тушёное — лучшее блюдо для гостей: его готовят заранее. В жидкости мясо остаётся сочным и даже лучше пропитывается. На воздухе оно сохнет, в духовке переваривается.',
    ),
  },
}

export const braiseLessons: Lesson[] = [braising, goulash, paprikash, sarma, cheeks]
