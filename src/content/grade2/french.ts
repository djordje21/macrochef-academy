import { l, type Lesson } from '../types'

// Grade 2 · Module 10 · World kitchens: France. The base of professional cooking: aromatics, butter,
// wine and slow heat. Each dish repeats a technique from grade 1 and adds the French way of finishing it.

const basics: Lesson = {
  id: '2.10.1',
  title: l('Mirepoix, bouquet garni i braon puter', 'Mirepoix, bouquet garni and brown butter', 'Мирпуа, букет гарни и коричневое масло'),
  goal: l(
    'Napraviš tri osnove francuske kuhinje: mirepoix, bouquet garni i braon puter.',
    'You make three foundations of French cooking: mirepoix, bouquet garni and brown butter.',
    'Ты делаешь три основы французской кухни: мирпуа, букет гарни и коричневое масло.',
  ),
  minutes: 6,
  key: { value: l('2 : 1 : 1', '2 : 1 : 1', '2 : 1 : 1'), label: l('luk : šargarepa : celer', 'onion : carrot : celery', 'лук : морковь : сельдерей') },
  need: [
    { item: l('Crni luk, šargarepa, celer', 'Onion, carrot, celery', 'Лук, морковь, сельдерей'), qty: l('200 + 100 + 100 g', '200 + 100 + 100 g', '200 + 100 + 100 г') },
    { item: l('Peteljke peršuna, majčina dušica, lovor, zeleni deo praziluka', 'Parsley stalks, thyme, bay, leek green', 'Стебли петрушки, тимьян, лавр, зелень порея'), qty: l('—', '—', '—') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Kanap, šerpica svetlog dna', 'String, light-bottomed small pan', 'Нить, сотейник со светлым дном'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Svako francusko jelo počinje istim aromatima i završava se puterom. Kad ova tri savladaš, polovina sledećih lekcija ide sama.',
    'Every French dish starts with the same aromatics and ends with butter. Master these three and half of the next lessons follow by themselves.',
    'Каждое французское блюдо начинается с одних и тех же ароматов и заканчивается маслом. Освоишь эти три — половина следующих уроков пойдёт сама.',
  ),
  steps: [
    {
      text: l('Iseci mirepoix u odnosu 2 : 1 : 1.', 'Cut the mirepoix in a 2 : 1 : 1 ratio.', 'Нарежь мирпуа в соотношении 2 : 1 : 1.'),
      params: [l('fond: 4 cm', 'stock: 4 cm', 'бульон: 4 см'), l('sos: 1 cm', 'sauce: 1 cm', 'соус: 1 см')],
      done: l('Dva dela luka, po jedan šargarepe i celera, iste veličine.', 'Two parts onion, one each of carrot and celery, all the same size.', 'Две части лука, по одной моркови и сельдерея, одинакового размера.'),
      why: l('Veličina prati vreme kuvanja: krupno za fond od 3 sata (8.1), sitno za sos od 30 minuta.', 'Size follows cooking time: large for a 3-hour stock (8.1), small for a 30-minute sauce.', 'Размер следует за временем: крупно для 3-часового бульона (8.1), мелко для 30-минутного соуса.'),
      drawing: 'mirepoix',
    },
    {
      text: l('Uvij bilje u zeleni list praziluka i čvrsto veži.', 'Wrap the herbs in a leek leaf and tie it tightly.', 'Заверни травы в зелёный лист порея и крепко перевяжи.'),
      params: [l('ostavi dug kraj kanapa', 'leave a long tail of string', 'оставь длинный конец нити')],
      done: l('Bouquet garni je čvrst snopić koji se ne raspada.', 'The bouquet garni is a firm bundle that does not fall apart.', 'Букет гарни — плотный пучок, который не разваливается.'),
      why: l('Dug kanap se veže za dršku lonca. Snopić izvadiš u jednom potezu, bez traženja listića lovora.', 'The long string ties to the pot handle. You lift the bundle out in one go, without hunting for bay leaves.', 'Длинная нить привязывается к ручке кастрюли. Пучок вынимаешь одним движением, не выискивая листья лавра.'),
      drawing: 'bouquetGarni',
    },
    {
      text: l('Otopi puter u šerpici na srednjoj vatri i pusti da se zapeni.', 'Melt the butter in the small pan over medium heat and let it foam.', 'Растопи масло в сотейнике на среднем огне и дай вспениться.'),
      params: [l('100 g', '100 g', '100 г')],
      done: l('Puter peni i pucketa dok voda isparava.', 'The butter foams and crackles as the water evaporates.', 'Масло пенится и потрескивает, пока испаряется вода.'),
    },
    {
      text: l('Vrti šerpicu dok talog na dnu ne postane braon i zamiriše na lešnik.', 'Swirl the pan until the solids on the bottom turn brown and smell of hazelnuts.', 'Покачивай сотейник, пока осадок на дне не станет коричневым и не запахнет фундуком.'),
      params: [l('3–4 min', '3–4 min', '3–4 мин')],
      done: l('Pena se smirila, puter je zlatan, a tačkice na dnu boje lešnika.', 'The foam has settled, the butter is golden and the specks on the bottom are hazelnut brown.', 'Пена улеглась, масло золотистое, точки на дне цвета фундука.'),
      why: l('Braon tačkice su mlečni proteini koji se prže, kao korica na mesu (4.6). Od braon do crnog prođe 20 sekundi.', 'The brown specks are milk proteins browning, like a crust on meat (4.6). From brown to black takes 20 seconds.', 'Коричневые точки — обжаренные молочные белки, как корочка на мясе (4.6). От коричневого до чёрного — 20 секунд.'),
      drawing: 'noisette',
    },
    {
      text: l('Odmah prespi u hladnu činiju ili dodaj kapi limuna.', 'Pour at once into a cold bowl or add a few drops of lemon.', 'Сразу перелей в холодную миску или добавь капли лимона.'),
      done: l('Puter je prestao da tamni.', 'The butter has stopped darkening.', 'Масло перестало темнеть.'),
      why: l('Vrela šerpica nastavi da peče puter i posle vatre. Beurre noisette je sos za ribu (2.10.2), testeninu i povrće.', 'The hot pan keeps browning the butter even off the heat. Beurre noisette is a sauce for fish (2.10.2), pasta and vegetables.', 'Горячий сотейник продолжает жарить масло и вне огня. Beurre noisette — соус к рыбе (2.10.2), пасте и овощам.'),
    },
  ],
  mistake: {
    title: l('Braon puter u tamnoj šerpi od livenog gvožđa.', 'Brown butter in a dark cast-iron pan.', 'Коричневое масло в тёмной чугунной сковороде.'),
    fix: l(
      'Na tamnom dnu ne vidiš boju tačkica i puter izgori pre nego što primetiš. Za puter, karamel (2.7.5) i sve što se meri bojom, uvek svetla šerpa od čelika.',
      'On a dark base you cannot see the specks and the butter burns before you notice. For butter, caramel (2.7.5) and anything judged by colour, always a light steel pan.',
      'На тёмном дне не видно цвета точек, и масло сгорает раньше, чем заметишь. Для масла, карамели (2.7.5) и всего, что оценивают по цвету, — всегда светлая стальная посуда.',
    ),
  },
  think: {
    question: l('Za fond od 3 sata, kako sečeš mirepoix?', 'For a 3-hour stock, how do you cut the mirepoix?', 'Для 3-часового бульона как нарезаешь мирпуа?'),
    options: [
      l('Krupno, 4–5 cm', 'Large, 4–5 cm', 'Крупно, 4–5 см'),
      l('Sitno, brunoise', 'Fine, brunoise', 'Мелко, брюнуаз'),
      l('Rendano', 'Grated', 'Натёртым'),
    ],
    answer: 0,
    explain: l(
      'Sitno povrće se za 3 sata raspadne i zamuti fond. Krupni komadi daju ukus polako i izađu celi. Isto pravilo kao u 8.1.',
      'Fine vegetables fall apart in 3 hours and cloud the stock. Large pieces give flavour slowly and come out whole. The same rule as in 8.1.',
      'Мелкие овощи за 3 часа развалятся и замутят бульон. Крупные куски отдают вкус медленно и выходят целыми. То же правило, что в 8.1.',
    ),
  },
}

const meuniere: Lesson = {
  id: '2.10.2',
  title: l('Riba meunière', 'Fish meunière', 'Рыба мёньер'),
  goal: l(
    'Ispečeš file ribe uvaljan u brašno i preliješ ga braon puterom sa limunom i kaprom.',
    'You pan-fry a flour-dusted fish fillet and finish it with brown butter, lemon and capers.',
    'Ты жаришь филе рыбы в муке и поливаешь коричневым маслом с лимоном и каперсами.',
  ),
  minutes: 6,
  key: { value: l('3 + 1 min', '3 + 1 min', '3 + 1 мин'), label: l('po strani', 'per side', 'на сторону') },
  need: [
    { item: l('Fileti lista, pastrmke ili brancina (2.4)', 'Sole, trout or sea bass fillets (2.4)', 'Филе морского языка, форели или сибаса (2.4)'), qty: l('4 × 120 g', '4 × 120 g', '4 × 120 г') },
    { item: l('Brašno', 'Flour', 'Мука'), qty: l('3 kašike', '3 tbsp', '3 ст. л.') },
    { item: l('Ulje i puter', 'Oil and butter', 'Масло растительное и сливочное'), qty: l('1 kašika + 60 g', '1 tbsp + 60 g', '1 ст. л. + 60 г') },
    { item: l('Limun, kapar, peršun', 'Lemon, capers, parsley', 'Лимон, каперсы, петрушка'), qty: l('1 + 1 kašika + šaka', '1 + 1 tbsp + a handful', '1 + 1 ст. л. + горсть') },
  ],
  why: l(
    '"Meunière" znači "na mlinarev način": riba u brašnu. Tanak sloj brašna pravi zlatnu koricu i štiti nežno meso od vrelog tiganja.',
    '"Meunière" means "the miller\'s wife\'s way": fish in flour. A thin coat of flour makes a golden crust and shields the delicate flesh from the hot pan.',
    '«Мёньер» значит «по-мельничьи»: рыба в муке. Тонкий слой муки даёт золотистую корочку и защищает нежное мясо от горячей сковороды.',
  ),
  steps: [
    {
      text: l('Osuši filete, posoli ih i uvaljaj u brašno, pa otresi višak.', 'Pat the fillets dry, salt them, dust in flour and shake off the excess.', 'Обсуши филе, посоли, обваляй в муке и стряхни лишнее.'),
      params: [l('tanak sloj', 'a thin coat', 'тонкий слой'), l('tek pred tiganj', 'only just before the pan', 'только перед сковородой')],
      done: l('Ribu prekriva tanak, ravnomeran beli sloj.', 'A thin, even white coat covers the fish.', 'Рыбу покрывает тонкий ровный белый слой.'),
      why: l('Brašno ostavljeno 10 minuta upije vlagu iz ribe i postane lepljivo. Uvaljaj i odmah u tiganj.', 'Flour left 10 minutes soaks up the fish\'s moisture and turns gummy. Dust and go straight into the pan.', 'Мука, оставленная на 10 минут, впитывает влагу рыбы и становится клейкой. Обвалял — и сразу на сковороду.'),
      drawing: 'dredge',
    },
    {
      text: l('Zagrej ulje i malo putera, pa spusti filete lepom stranom nadole.', 'Heat the oil and a little butter, then lay the fillets presentation side down.', 'Разогрей масло с кусочком сливочного и положи филе лицевой стороной вниз.'),
      params: [l('srednje jaka vatra', 'medium-high heat', 'огонь выше среднего'), l('3 min', '3 min', '3 мин')],
      done: l('Ivice fileta su zlatne i neprozirne do pola debljine.', 'The fillet edges are golden and opaque halfway up.', 'Края филе золотистые и непрозрачные до половины толщины.'),
      why: l('Ulje podnosi jaču toplotu od putera, a puter daje ukus. Zajedno se ne pale tako brzo.', 'Oil takes more heat than butter, and butter brings flavour. Together they do not burn so fast.', 'Растительное масло выдерживает больший жар, сливочное даёт вкус. Вместе они горят не так быстро.'),
      drawing: 'fishPress',
    },
    {
      text: l('Okreni pažljivo i peci još minut, pa prebaci na topao tanjir.', 'Turn carefully, cook one minute more, then move to a warm plate.', 'Аккуратно переверни, жарь ещё минуту и переложи на тёплую тарелку.'),
      params: [l('1 min', '1 min', '1 мин'), l('55°C', '55°C', '55°C')],
      done: l('Riba se lista u sredini, a korica je hrskava.', 'The fish flakes in the middle and the crust is crisp.', 'Рыба расслаивается в середине, корочка хрустит.'),
    },
    {
      text: l('Obriši tiganj, otopi puter do braon i dodaj limun i kapar.', 'Wipe the pan, brown the butter and add lemon and capers.', 'Протри сковороду, доведи масло до коричневого и добавь лимон и каперсы.'),
      params: [l('60 g', '60 g', '60 г'), l('2.10.1', '2.10.1', '2.10.1')],
      done: l('Sos peni i miriše na lešnik i limun.', 'The sauce foams and smells of hazelnut and lemon.', 'Соус пенится и пахнет фундуком и лимоном.'),
      why: l('Izgorelo brašno iz prvog prženja bi pocrnelo puter. Zato se tiganj briše.', 'Burnt flour from the first fry would blacken the butter. That is why the pan is wiped.', 'Пригоревшая мука от первой жарки зачернит масло. Поэтому сковороду протирают.'),
      drawing: 'noisette',
    },
    {
      text: l('Dodaj peršun i odmah prelij ribu.', 'Add the parsley and pour over the fish at once.', 'Добавь петрушку и сразу полей рыбу.'),
      done: l('Sos cvrči na ribi, a korica ostaje hrskava.', 'The sauce sizzles on the fish and the crust stays crisp.', 'Соус шипит на рыбе, корочка остаётся хрустящей.'),
      why: l('Peršun ide na kraju, da ostane zelen i svež (9.5).', 'The parsley goes in last, so it stays green and fresh (9.5).', 'Петрушка идёт в конце, чтобы оставаться зелёной и свежей (9.5).'),
    },
  ],
  mistake: {
    title: l('Riba debelo uvaljana u brašno i ostavljena da čeka.', 'Fish heavily floured and left waiting.', 'Рыба густо обвалена в муке и ждёт.'),
    fix: l(
      'Debeo sloj postane testo umesto korice, a sos ga raskvasi. Tanko, otreseno, i odmah u tiganj. Brašno je zaštita, ne pohovanje.',
      'A thick coat turns into dough instead of a crust, and the sauce makes it soggy. Thin, shaken, and straight into the pan. The flour is a shield, not a batter.',
      'Толстый слой становится тестом вместо корочки, и соус его размачивает. Тонко, стряхнуть и сразу на сковороду. Мука — защита, а не панировка.',
    ),
  },
  think: {
    question: l('Zašto se riba peče duže na prvoj strani nego na drugoj?', 'Why is the fish cooked longer on the first side than the second?', 'Почему рыбу жарят дольше на первой стороне, чем на второй?'),
    options: [
      l('Prva strana pravi koricu, a druga samo dovrši sredinu', 'The first side builds the crust; the second only finishes the centre', 'Первая сторона даёт корочку, вторая лишь доводит центр'),
      l('Druga strana je tanja', 'The second side is thinner', 'Вторая сторона тоньше'),
      l('Tiganj se ohladi', 'The pan cools down', 'Сковорода остывает'),
    ],
    answer: 0,
    explain: l(
      'Nežna riba trpi jedan okret. Lepa strana dobije koricu i boju, a kratka druga strana je tu da sredina stigne do 55°C bez raspadanja.',
      'Delicate fish takes one turn. The presentation side gets the crust and colour, and the short second side just brings the centre to 55°C without breaking it.',
      'Нежная рыба выдерживает один переворот. Лицевая сторона получает корочку и цвет, а короткая вторая лишь доводит центр до 55°C, не разрушая рыбу.',
    ),
  },
  recipe: { name: l('Pastrmka meunière', 'Trout meunière', 'Форель мёньер'), protein: 19, carbs: 4, fat: 13, kcal: 210 },
}

const coqAuVin: Lesson = {
  id: '2.10.3',
  title: l('Coq au vin', 'Coq au vin', 'Петух в вине'),
  goal: l(
    'Izbraziraš piletinu u crnom vinu sa slaninom, pečurkama i lukom, i ukuvaš sos do sjaja.',
    'You braise chicken in red wine with bacon, mushrooms and onions, and reduce the sauce to a shine.',
    'Ты тушишь курицу в красном вине с беконом, грибами и луком и увариваешь соус до блеска.',
  ),
  minutes: 8,
  key: { value: l('1 boca', '1 bottle', '1 бутылка'), label: l('crnog vina', 'of red wine', 'красного вина') },
  need: [
    { item: l('Pileći bataci i karabataci', 'Chicken thighs and drumsticks', 'Куриные бёдра и голени'), qty: l('1.5 kg', '1.5 kg', '1,5 кг') },
    { item: l('Crno vino, suvo', 'Dry red wine', 'Сухое красное вино'), qty: l('750 ml', '750 ml', '750 мл') },
    { item: l('Slanina na kockice', 'Diced bacon', 'Бекон кубиками'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Mirepoix, bouquet garni (2.10.1)', 'Mirepoix, bouquet garni (2.10.1)', 'Мирпуа, букет гарни (2.10.1)'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Šampinjoni, arpadžik, brašno, fond', 'Mushrooms, pearl onions, flour, stock', 'Шампиньоны, лук-шалот, мука, бульон'), qty: l('250 g + 200 g + 1 kašika + 300 ml', '250 g + 200 g + 1 tbsp + 300 ml', '250 г + 200 г + 1 ст. л. + 300 мл') },
  ],
  why: l(
    'Coq au vin je francuski paprikaš (12.3): isto braziranje, ali vino daje kiselost i boju, a garnir od pečuraka i luka se pravi posebno da ostane ceo.',
    'Coq au vin is the French paprikash (12.3): the same braise, but wine brings acidity and colour, and the mushroom and onion garnish is cooked separately so it stays whole.',
    'Петух в вине — французский паприкаш (12.3): то же брезирование, но вино даёт кислотность и цвет, а гарнир из грибов и лука готовят отдельно, чтобы он остался целым.',
  ),
  steps: [
    {
      text: l('Istopi slaninu na srednjoj vatri, pa je izvadi.', 'Render the bacon over medium heat, then lift it out.', 'Вытопи бекон на среднем огне и выложи.'),
      done: l('Slanina je hrskava, a u loncu je njena mast.', 'The bacon is crisp and its fat is in the pot.', 'Бекон хрустящий, в кастрюле его жир.'),
    },
    {
      text: l('Na toj masti zapeci osušenu piletinu sa svih strana.', 'Brown the dried chicken on all sides in that fat.', 'На этом жиру обжарь обсушенную курицу со всех сторон.'),
      params: [l('u dve ture', 'in two batches', 'в два захода')],
      done: l('Koža je zlatnobraon, a na dnu je braon sloj.', 'The skin is golden brown and there is a brown layer on the bottom.', 'Кожа золотисто-коричневая, на дне коричневый слой.'),
      drawing: 'searRelease',
    },
    {
      text: l('Dinstaj mirepoix, pospi brašnom, pa dolij vino i ukuvaj na trećinu.', 'Sweat the mirepoix, dust with flour, then pour in the wine and reduce by a third.', 'Потоми мирпуа, посыпь мукой, влей вино и уварь на треть.'),
      params: [l('750 → 500 ml', '750 → 500 ml', '750 → 500 мл')],
      done: l('Vino je gušće i više ne miriše oštro na alkohol.', 'The wine is thicker and no longer smells sharply of alcohol.', 'Вино загустело и больше не пахнет резко спиртом.'),
      why: l('Isto kao u 12.5: neukuvano vino ostaje kiselo i oporo u sosu.', 'Same as 12.5: unreduced wine stays sour and harsh in the sauce.', 'Как в 12.5: неуваренное вино остаётся кислым и терпким в соусе.'),
      drawing: 'reduction',
    },
    {
      text: l('Vrati piletinu, dodaj fond i bouquet garni, poklopi i u rernu.', 'Return the chicken, add stock and bouquet garni, cover and into the oven.', 'Верни курицу, добавь бульон и букет гарни, накрой и в духовку.'),
      params: [l('160°C', '160°C', '160°C'), l('1–1.5 h', '1–1.5 h', '1–1,5 ч'), l('batak 85°C+', 'thigh 85°C+', 'бедро 85°C+')],
      done: l('Meso se odvaja od kosti.', 'The meat comes away from the bone.', 'Мясо отходит от кости.'),
      drawing: 'braiseLevel',
    },
    {
      text: l('Posebno zapeci pečurke i arpadžik, pa ih dodaj sa slaninom na kraju.', 'Brown the mushrooms and pearl onions separately, then add them with the bacon at the end.', 'Отдельно обжарь грибы и лук и добавь их с беконом в конце.'),
      params: [l('sos ukuvaj do sjaja', 'reduce the sauce to a shine', 'уварь соус до блеска')],
      done: l('Pečurke su zlatne i cele, a sos prekriva kašiku.', 'The mushrooms are golden and whole and the sauce coats a spoon.', 'Грибы золотистые и целые, соус обволакивает ложку.'),
      why: l('Pečurke kuvane sat i po u sosu postanu sive i gumene. Ovako ostanu zapečene i sa ukusom.', 'Mushrooms simmered for an hour and a half go grey and rubbery. This way they stay browned and full of flavour.', 'Грибы, полтора часа тушившиеся в соусе, становятся серыми и резиновыми. Так они остаются обжаренными и вкусными.'),
      drawing: 'coatSpoon',
    },
  ],
  mistake: {
    title: l('Jeftino, kiselo vino "jer se ionako kuva".', 'Cheap, sour wine "because it gets cooked anyway".', 'Дешёвое кислое вино, «всё равно же варится».'),
    fix: l(
      'Ukuvavanje koncentriše sve, pa i kiselost i gorčinu lošeg vina. Ne treba skupo, ali vino mora da bude ono koje bi popio uz večeru.',
      'Reducing concentrates everything, including the sourness and bitterness of bad wine. It need not be expensive, but it must be a wine you would drink with dinner.',
      'Уваривание концентрирует всё, включая кислоту и горечь плохого вина. Дорогое не нужно, но это должно быть вино, которое ты бы выпил за ужином.',
    ),
  },
  think: {
    question: l('Zašto se slanina vadi posle topljenja, a vraća na kraju?', 'Why is the bacon lifted out after rendering and returned at the end?', 'Почему бекон вынимают после вытапливания и возвращают в конце?'),
    options: [
      l('Da ostane hrskava, a njena mast već radi u loncu', 'To stay crisp, while its fat is already working in the pot', 'Чтобы остаться хрустящим, а его жир уже работает в кастрюле'),
      l('Da se ne presoli sos', 'So the sauce does not get too salty', 'Чтобы соус не пересолился'),
      l('Da se ohladi', 'To cool it down', 'Чтобы остыл'),
    ],
    answer: 0,
    explain: l(
      'Ukus slanine je već u masti na kojoj se peče piletina. Hrskavi komadi vraćeni na kraju daju teksturu koju bi sat i po u sosu uništio.',
      'The bacon\'s flavour is already in the fat the chicken browned in. Crisp pieces returned at the end bring a texture that an hour and a half in the sauce would destroy.',
      'Вкус бекона уже в жиру, на котором жарилась курица. Хрустящие кусочки, возвращённые в конце, дают текстуру, которую полтора часа в соусе уничтожили бы.',
    ),
  },
  recipe: { name: l('Coq au vin', 'Coq au vin', 'Петух в вине'), protein: 17, carbs: 4, fat: 11, kcal: 185 },
}

const bourguignon: Lesson = {
  id: '2.10.4',
  title: l('Bœuf bourguignon', 'Bœuf bourguignon', 'Говядина по-бургундски'),
  goal: l(
    'Skuvaš junetinu u burgundskom vinu koja se seče kašikom, sa sjajnim, tamnim sosom.',
    'You cook beef in Burgundy wine until a spoon cuts it, with a glossy dark sauce.',
    'Ты готовишь говядину в бургундском вине, пока её не будет резать ложка, с блестящим тёмным соусом.',
  ),
  minutes: 7,
  key: { value: l('150°C · 3 h', '150°C · 3 h', '150°C · 3 ч'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('Juneća plećka ili obraz, kocke 5 cm', 'Beef shoulder or cheek, 5 cm cubes', 'Говяжья лопатка или щёки, кубики 5 см'), qty: l('1.5 kg', '1.5 kg', '1,5 кг') },
    { item: l('Crno vino (pinot noir)', 'Red wine (pinot noir)', 'Красное вино (пино нуар)'), qty: l('750 ml', '750 ml', '750 мл') },
    { item: l('Slanina, mirepoix, bouquet garni', 'Bacon, mirepoix, bouquet garni', 'Бекон, мирпуа, букет гарни'), qty: l('150 g + 300 g', '150 g + 300 g', '150 г + 300 г') },
    { item: l('Tamni fond (8.2), paradajz pire, brašno', 'Brown stock (8.2), tomato paste, flour', 'Тёмный бульон (8.2), томатная паста, мука'), qty: l('500 ml + 1 + 2 kašike', '500 ml + 1 + 2 tbsp', '500 мл + 1 + 2 ст. л.') },
    { item: l('Šampinjoni, arpadžik', 'Mushrooms, pearl onions', 'Шампиньоны, лук-шалот'), qty: l('300 g + 200 g', '300 g + 200 g', '300 г + 200 г') },
  ],
  why: l(
    'Bourguignon je gulaš (12.2) francuske kuhinje: isti radni rez i isto sporo kuvanje, ali u vinu i fondu. Bolji je sutradan, pa je savršen za meni.',
    'Bourguignon is French cooking\'s goulash (12.2): the same working cut and the same slow cooking, but in wine and stock. It is better the next day, which makes it perfect for a menu.',
    'Бургиньон — гуляш французской кухни (12.2): тот же рабочий отруб и та же медленная готовка, но в вине и бульоне. На следующий день он лучше, поэтому идеален для меню.',
  ),
  steps: [
    {
      text: l('Osuši meso i zapeci ga u malim turama do tamne korice.', 'Dry the meat and brown it in small batches to a dark crust.', 'Обсуши мясо и обжарь небольшими партиями до тёмной корочки.'),
      params: [l('3–4 ture', '3–4 batches', '3–4 захода')],
      done: l('Svaka kocka je tamnobraon sa bar dve strane.', 'Every cube is dark brown on at least two sides.', 'Каждый кубик тёмно-коричневый минимум с двух сторон.'),
      why: l('Ovo je najduži i najvažniji korak. Ukus sosa dolazi iz braon tragova na dnu lonca.', 'This is the longest and most important step. The sauce\'s flavour comes from the brown residue on the bottom of the pot.', 'Это самый долгий и важный шаг. Вкус соуса берётся из коричневого налёта на дне кастрюли.'),
      drawing: 'searRelease',
    },
    {
      text: l('Zapeci mirepoix i pire, pospi brašnom, pa dolij vino i sastruži dno.', 'Brown the mirepoix and paste, dust with flour, then add the wine and scrape the bottom.', 'Обжарь мирпуа и пасту, посыпь мукой, влей вино и соскреби дно.'),
      done: l('Dno je čisto, a tečnost je tamna i gusta.', 'The bottom is clean and the liquid dark and thick.', 'Дно чистое, жидкость тёмная и густая.'),
      drawing: 'deglaze',
    },
    {
      text: l('Vrati meso, dodaj fond i bouquet garni do visine mesa, poklopi.', 'Return the meat, add stock and bouquet garni level with the meat, cover.', 'Верни мясо, добавь бульон и букет гарни вровень с мясом, накрой.'),
      params: [l('150°C', '150°C', '150°C'), l('3 h', '3 h', '3 ч')],
      done: l('Kocke se raspadaju pod kašikom, a i dalje drže oblik.', 'The cubes give way under a spoon yet still hold their shape.', 'Кубики поддаются ложке, но держат форму.'),
      why: l('Isto kao 12.5: rerna drži tečnost ispod ključanja tri sata bez nadzora.', 'The same as 12.5: the oven keeps the liquid below a boil for three hours unattended.', 'Как в 12.5: духовка держит жидкость ниже кипения три часа без присмотра.'),
      drawing: 'braiseLevel',
    },
    {
      text: l('Ukuvaj sos do sjaja i posebno zapeci pečurke i luk.', 'Reduce the sauce to a shine and brown the mushrooms and onions separately.', 'Уварь соус до блеска и отдельно обжарь грибы и лук.'),
      done: l('Sos prekriva kašiku, a garnir je zlatan.', 'The sauce coats a spoon and the garnish is golden.', 'Соус обволакивает ложку, гарнир золотистый.'),
      drawing: 'coatSpoon',
    },
    {
      text: l('Ohladi preko noći i podgrej sutradan sa garnirom.', 'Cool overnight and reheat the next day with the garnish.', 'Остуди на ночь и разогрей на следующий день с гарниром.'),
      params: [l('skini stegnutu mast', 'lift off the set fat', 'сними застывший жир')],
      done: l('Ukus je dublji, a sos je bez masnih kapi.', 'The flavour is deeper and the sauce has no fat beading on top.', 'Вкус глубже, на соусе нет капель жира.'),
      why: l('Ohlađena mast se stegne na vrhu i skine u komadu. Ukusi se preko noći povežu.', 'Cold fat sets on top and lifts off in one piece. The flavours knit together overnight.', 'Остывший жир застывает сверху и снимается пластом. Вкусы за ночь соединяются.'),
    },
  ],
  mistake: {
    title: l('Celo meso ubačeno u lonac odjednom da se zapeče.', 'All the meat thrown into the pot at once to brown.', 'Всё мясо сразу в кастрюлю, чтобы обжарить.'),
    fix: l(
      'Lonac se ohladi, meso pusti sok i kuva se u njemu sivo. Nema braon tragova, nema ukusa. Male ture, razmak između kocki, strpljenje (4.6).',
      'The pot cools, the meat releases its juice and stews grey in it. No brown residue, no flavour. Small batches, space between the cubes, patience (4.6).',
      'Кастрюля остывает, мясо пускает сок и тушится в нём серым. Нет коричневого налёта — нет вкуса. Маленькие партии, расстояние между кубиками, терпение (4.6).',
    ),
  },
  think: {
    question: l('Zašto se za bourguignon bira pinot noir, a ne jako tanično vino?', 'Why is pinot noir chosen for bourguignon rather than a very tannic wine?', 'Почему для бургиньона выбирают пино нуар, а не очень танинное вино?'),
    options: [
      l('Tanini se ukuvavanjem koncentrišu i sos postane opor', 'Tannins concentrate as the wine reduces and the sauce turns harsh', 'Танины при уваривании концентрируются, и соус становится терпким'),
      l('Pinot noir je jeftiniji', 'Pinot noir is cheaper', 'Пино нуар дешевле'),
      l('Jako vino ne menja boju', 'Strong wine does not change colour', 'Крепкое вино не меняет цвет'),
    ],
    answer: 0,
    explain: l(
      'Sve što je u vinu, ukuvavanje pojača. Mekano, voćno vino daje mekan sos. Zato se kaže da se kuva samo vinom koje bi popio.',
      'Whatever is in the wine, reducing amplifies it. A soft, fruity wine makes a soft sauce. That is why you cook only with wine you would drink.',
      'Всё, что есть в вине, уваривание усиливает. Мягкое фруктовое вино даёт мягкий соус. Поэтому и говорят: готовь только с вином, которое выпил бы.',
    ),
  },
  recipe: { name: l('Bœuf bourguignon', 'Bœuf bourguignon', 'Говядина по-бургундски'), protein: 17, carbs: 4, fat: 9, kcal: 175 },
}

const gratin: Lesson = {
  id: '2.10.5',
  title: l('Gratin dauphinois', 'Gratin dauphinois', 'Гратен дофинуа'),
  goal: l(
    'Ispečeš krompir u pavlaci koji je kremast iznutra, zlatan odozgo i seče se u čiste kocke.',
    'You bake potatoes in cream that are creamy inside, golden on top and cut into clean squares.',
    'Ты запекаешь картофель в сливках: кремовый внутри, золотистый сверху, режется ровными кусками.',
  ),
  minutes: 6,
  key: { value: l('3 mm', '3 mm', '3 мм'), label: l('kolutovi', 'slices', 'ломтики') },
  need: [
    { item: l('Krompir', 'Potatoes', 'Картофель'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Slatka pavlaka i mleko', 'Cream and milk', 'Сливки и молоко'), qty: l('300 + 300 ml', '300 + 300 ml', '300 + 300 мл') },
    { item: l('Beli luk, muskatni oraščić, so', 'Garlic, nutmeg, salt', 'Чеснок, мускатный орех, соль'), qty: l('2 čena + prstohvat + 10 g', '2 cloves + a pinch + 10 g', '2 зубчика + щепотка + 10 г') },
    { item: l('Puter za posudu', 'Butter for the dish', 'Масло для формы'), qty: l('20 g', '20 g', '20 г') },
  ],
  why: l(
    'Pravi gratin dauphinois nema sir, samo krompir, pavlaku i vreme. Skrob iz krompira zgusne pavlaku u kremu. To je najbolji prilog uz meso iz rerne.',
    'A true gratin dauphinois has no cheese: only potatoes, cream and time. The starch from the potatoes thickens the cream into a custard. It is the best side for any roast.',
    'Настоящий гратен дофинуа без сыра: только картофель, сливки и время. Крахмал картофеля загущает сливки в крем. Это лучший гарнир к мясу из духовки.',
  ),
  steps: [
    {
      text: l('Oljušti krompir i iseci ga na tanke kolutove, bez pranja posle sečenja.', 'Peel the potatoes and slice them thinly, without rinsing after slicing.', 'Очисти картофель и тонко нарежь, не промывая после нарезки.'),
      params: [l('3 mm', '3 mm', '3 мм')],
      done: l('Svi kolutovi su iste debljine i lepe se jedan za drugi.', 'All the slices are the same thickness and cling together.', 'Все ломтики одной толщины и слипаются.'),
      why: l('Za razliku od pirinča (10.1), ovde skrob ostaje. On je ono što zgušnjava pavlaku.', 'Unlike rice (10.1), the starch stays here. It is what thickens the cream.', 'В отличие от риса (10.1), здесь крахмал остаётся. Именно он загущает сливки.'),
    },
    {
      text: l('Krčkaj kolutove u pavlaci, mleku, belom luku i začinima.', 'Simmer the slices in the cream, milk, garlic and seasoning.', 'Протоми ломтики в сливках, молоке, чесноке и специях.'),
      params: [l('10 min', '10 min', '10 мин'), l('mešaj nežno', 'stir gently', 'мешай аккуратно')],
      done: l('Tečnost se zgusnula, a krompir je počeo da omekšava.', 'The liquid has thickened and the potatoes have started to soften.', 'Жидкость загустела, картофель начал размягчаться.'),
      why: l('Krčkanje unapred skraćuje pečenje i sprečava da se pavlaka razdvoji u rerni.', 'Simmering first shortens the baking and stops the cream from splitting in the oven.', 'Предварительное томление сокращает запекание и не даёт сливкам расслоиться в духовке.'),
    },
    {
      text: l('Premaži posudu puterom i belim lukom i slaži kolutove u slojeve.', 'Rub the dish with butter and garlic and layer the slices.', 'Натри форму маслом и чесноком и выложи ломтики слоями.'),
      done: l('Slojevi su ravni, a tečnost ih jedva pokriva.', 'The layers are level and the liquid barely covers them.', 'Слои ровные, жидкость едва их покрывает.'),
      drawing: 'gratinLayers',
    },
    {
      text: l('Peci polako dok nož ne prolazi bez otpora i vrh ne porumeni.', 'Bake slowly until a knife slides through and the top is golden.', 'Запекай медленно, пока нож не пройдёт без сопротивления и верх не подрумянится.'),
      params: [l('160°C', '160°C', '160°C'), l('60–75 min', '60–75 min', '60–75 мин')],
      done: l('Nož ulazi kao u puter, ivice mehure, vrh je zlatan.', 'A knife goes in like butter, the edges bubble and the top is golden.', 'Нож входит как в масло, края пузырятся, верх золотистый.'),
    },
    {
      text: l('Ostavi 15 minuta pre sečenja.', 'Let it stand 15 minutes before cutting.', 'Дай постоять 15 минут перед нарезкой.'),
      params: [l('15 min', '15 min', '15 мин')],
      done: l('Gratin se seče u kocke koje drže slojeve.', 'The gratin cuts into squares that keep their layers.', 'Гратен режется кусками, которые держат слои.'),
      why: l('Vreo gratin je tečan. Odmaranjem se krema stegne, kao kod pečenja (7.6).', 'A hot gratin is runny. Resting lets the cream set, just like a roast (7.6).', 'Горячий гратен жидкий. Отдых даёт крему схватиться, как с жарким (7.6).'),
    },
  ],
  mistake: {
    title: l('Isprani kolutovi krompira i hladna pavlaka direktno u rernu.', 'Rinsed potato slices and cold cream straight into the oven.', 'Промытый картофель и холодные сливки сразу в духовку.'),
    fix: l(
      'Bez skroba pavlaka ostane tečna, a na jakoj vatri se razdvoji u masnoću. Ne ispiraj, prokrčkaj u pavlaci i peci na 160°C.',
      'Without starch the cream stays runny, and on high heat it splits into fat. Do not rinse, simmer in the cream first and bake at 160°C.',
      'Без крахмала сливки остаются жидкими, а на сильном жару расслаиваются на жир. Не промывай, протоми в сливках и запекай при 160°C.',
    ),
  },
  think: {
    question: l('Zašto se pravi gratin dauphinois ne posipa sirom?', 'Why is a true gratin dauphinois not topped with cheese?', 'Почему настоящий гратен дофинуа не посыпают сыром?'),
    options: [
      l('Zlatnu koricu daje sama pavlaka sa skrobom', 'The cream and starch make the golden crust on their own', 'Золотистую корочку дают сами сливки с крахмалом'),
      l('Sir je skup', 'Cheese is expensive', 'Сыр дорогой'),
      l('Sir ne trpi 160°C', 'Cheese cannot take 160°C', 'Сыр не выдерживает 160°C'),
    ],
    answer: 0,
    explain: l(
      'Mlečni šećer i proteini iz pavlake porumene sami. Sa sirom je to gratin savoyard, drugo jelo, isto dobro.',
      'The milk sugars and proteins in the cream brown by themselves. With cheese it becomes gratin savoyard, a different dish, just as good.',
      'Молочный сахар и белки сливок румянятся сами. С сыром это гратен савояр — другое блюдо, не хуже.',
    ),
  },
  recipe: { name: l('Gratin dauphinois', 'Gratin dauphinois', 'Гратен дофинуа'), protein: 2.5, carbs: 13, fat: 10, kcal: 150 },
}

const ratatouille: Lesson = {
  id: '2.10.6',
  title: l('Ratatouille', 'Ratatouille', 'Рататуй'),
  goal: l(
    'Skuvaš ratatouille u kome svako povrće ima svoj ukus i oblik, a ne kašu.',
    'You cook a ratatouille where every vegetable keeps its own taste and shape, not a mush.',
    'Ты готовишь рататуй, в котором каждый овощ сохраняет свой вкус и форму, а не кашу.',
  ),
  minutes: 6,
  key: { value: l('2 cm', '2 cm', '2 см'), label: l('kocke', 'dice', 'кубики') },
  need: [
    { item: l('Plavi patlidžan, tikvica', 'Aubergine, courgette', 'Баклажан, кабачок'), qty: l('po 400 g', '400 g each', 'по 400 г') },
    { item: l('Crvena i žuta paprika, crni luk', 'Red and yellow pepper, onion', 'Красный и жёлтый перец, лук'), qty: l('2 + 1', '2 + 1', '2 + 1') },
    { item: l('Paradajz, beli luk', 'Tomatoes, garlic', 'Помидоры, чеснок'), qty: l('500 g + 3 čena', '500 g + 3 cloves', '500 г + 3 зубчика') },
    { item: l('Maslinovo ulje, majčina dušica, bosiljak', 'Olive oil, thyme, basil', 'Оливковое масло, тимьян, базилик'), qty: l('100 ml', '100 ml', '100 мл') },
  ],
  why: l(
    'Ratatouille je lekcija iz strpljenja: svako povrće se peče posebno, jer svako ima svoje vreme (13.4). Tek na kraju se spoje u jedno.',
    'Ratatouille is a lesson in patience: each vegetable is cooked separately because each has its own time (13.4). Only at the end do they come together.',
    'Рататуй — урок терпения: каждый овощ готовят отдельно, потому что у каждого своё время (13.4). Только в конце их соединяют.',
  ),
  steps: [
    {
      text: l('Iseci sve povrće na kocke iste veličine.', 'Dice all the vegetables to the same size.', 'Нарежь все овощи кубиками одного размера.'),
      params: [l('2 cm', '2 cm', '2 см')],
      done: l('Pet gomila iste veličine kocki.', 'Five piles of same-sized dice.', 'Пять горок одинаковых кубиков.'),
      drawing: 'ratatouillePans',
    },
    {
      text: l('Prži patlidžan posebno na ulju dok ne porumeni.', 'Fry the aubergine on its own in oil until golden.', 'Обжарь баклажан отдельно на масле до золотистого цвета.'),
      params: [l('8–10 min', '8–10 min', '8–10 мин')],
      done: l('Patlidžan je zlatan i mekan, ne sunđerast.', 'The aubergine is golden and soft, not spongy.', 'Баклажан золотистый и мягкий, не губчатый.'),
      why: l('Patlidžan upija ulje kao sunđer, pa ga pusti kad omekša. Sirov patlidžan je gorak i gumen (14.5).', 'Aubergine soaks up oil like a sponge, then releases it once soft. Raw aubergine is bitter and rubbery (14.5).', 'Баклажан впитывает масло, как губка, и отдаёт его, когда размягчится. Сырой баклажан горький и резиновый (14.5).'),
    },
    {
      text: l('Isto uradi sa tikvicom, pa sa paprikom i lukom.', 'Do the same with the courgette, then the peppers and onion.', 'То же сделай с кабачком, затем с перцем и луком.'),
      params: [l('tikvica 5 min', 'courgette 5 min', 'кабачок 5 мин'), l('paprika i luk 8 min', 'peppers and onion 8 min', 'перец и лук 8 мин')],
      done: l('Svako povrće je zapečeno i ima svoju boju.', 'Each vegetable is browned and keeps its colour.', 'Каждый овощ обжарен и сохраняет свой цвет.'),
      why: l('Tikvica je gotova za upola manje vremena od patlidžana. Zajedno bi jedno bilo sirovo, a drugo kaša.', 'Courgette is done in half the time of aubergine. Together, one would be raw and the other mush.', 'Кабачок готов вдвое быстрее баклажана. Вместе один был бы сырым, а другой — кашей.'),
    },
    {
      text: l('Napravi sos od paradajza, belog luka i majčine dušice.', 'Make a sauce of tomato, garlic and thyme.', 'Сделай соус из помидоров, чеснока и тимьяна.'),
      params: [l('15 min', '15 min', '15 мин')],
      done: l('Sos je gust i sladak.', 'The sauce is thick and sweet.', 'Соус густой и сладкий.'),
      drawing: 'tomatoSimmer',
    },
    {
      text: l('Spoji sve povrće sa sosom i krčkaj kratko, pa dodaj bosiljak.', 'Combine all the vegetables with the sauce, simmer briefly, then add basil.', 'Соедини все овощи с соусом, коротко протоми и добавь базилик.'),
      params: [l('15–20 min', '15–20 min', '15–20 мин')],
      done: l('Ukusi su se spojili, a svaka kocka je i dalje cela.', 'The flavours have married and every cube is still whole.', 'Вкусы соединились, а каждый кубик остался целым.'),
      why: l('Kao i bourguignon, ratatouille je bolji sutradan, i topao i hladan.', 'Like bourguignon, ratatouille is better the next day, warm or cold.', 'Как и бургиньон, рататуй лучше на следующий день, тёплым или холодным.'),
    },
  ],
  mistake: {
    title: l('Sve povrće u jedan lonac odjednom.', 'All the vegetables into one pot at once.', 'Все овощи в одну кастрюлю сразу.'),
    fix: l(
      'Povrće pusti vodu i kuva se umesto da se peče, a tikvica se raspadne pre nego što patlidžan omekša. Posebni tiganji, ili isti tiganj u turama, pa spajanje na kraju.',
      'The vegetables release water and stew instead of browning, and the courgette collapses before the aubergine softens. Separate pans, or one pan in batches, and combine at the end.',
      'Овощи пускают воду и тушатся вместо жарки, а кабачок разваливается раньше, чем размягчится баклажан. Отдельные сковороды или одна сковорода партиями, и соединение в конце.',
    ),
  },
  think: {
    question: l('Šta ratatouille i povrće uz pečenje (13.4) imaju zajedničko?', 'What do ratatouille and the roast vegetables (13.4) have in common?', 'Что общего у рататуя и овощей к жаркому (13.4)?'),
    options: [
      l('Svako povrće dobija svoje vreme, pa sve stigne zajedno', 'Each vegetable gets its own time so everything arrives together', 'Каждый овощ получает своё время, и всё приходит вместе'),
      l('Oba se peku u rerni', 'Both are cooked in the oven', 'Оба готовят в духовке'),
      l('Oba traže paradajz', 'Both need tomatoes', 'Оба требуют помидоров'),
    ],
    answer: 0,
    explain: l(
      'Isti princip, druga tehnika. U rerni povrće ulazi u različito vreme, u tiganju se peče odvojeno. Cilj je isti: nijedno povrće prepečeno, nijedno sirovo.',
      'The same principle, a different technique. In the oven vegetables go in at different times; in the pan they cook separately. The goal is the same: nothing overcooked, nothing raw.',
      'Тот же принцип, другая техника. В духовку овощи кладут в разное время, на сковороде жарят отдельно. Цель одна: ничего не пережарено и ничего не сыро.',
    ),
  },
  recipe: { name: l('Ratatouille', 'Ratatouille', 'Рататуй'), protein: 1.5, carbs: 7, fat: 6, kcal: 85 },
}

const quiche: Lesson = {
  id: '2.10.7',
  title: l('Quiche lorraine', 'Quiche lorraine', 'Киш лорен'),
  goal: l(
    'Ispečeš kiš sa hrskavom korom i kremom koji drhti u sredini, a ne curi.',
    'You bake a quiche with a crisp crust and a custard that trembles in the middle without running.',
    'Ты выпекаешь киш с хрустящей основой и кремом, который дрожит в середине, но не течёт.',
  ),
  minutes: 7,
  key: { value: l('160°C', '160°C', '160°C'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('Pečena korpa od prhkog testa, bez šećera (2.5.3)', 'Blind-baked shortcrust case, no sugar (2.5.3)', 'Выпеченная песочная корзинка без сахара (2.5.3)'), qty: l('24 cm', '24 cm', '24 см') },
    { item: l('Slanina na kockice', 'Diced bacon', 'Бекон кубиками'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Jaja i žumanca', 'Eggs and yolks', 'Яйца и желтки'), qty: l('3 + 2', '3 + 2', '3 + 2') },
    { item: l('Slatka pavlaka i mleko', 'Cream and milk', 'Сливки и молоко'), qty: l('300 + 100 ml', '300 + 100 ml', '300 + 100 мл') },
    { item: l('Grijer (po želji), muskatni oraščić, biber', 'Gruyère (optional), nutmeg, pepper', 'Грюйер (по желанию), мускатный орех, перец'), qty: l('80 g', '80 g', '80 г') },
  ],
  why: l(
    'Kiš je krem od jaja u prhkoj korpi: spaja testo (2.5.3) i kontrolu jaja na toploti (2.7.2). Isto pravilo kao engleski krem, samo u rerni.',
    'A quiche is egg custard in a shortcrust case: it brings together pastry (2.5.3) and controlling eggs over heat (2.7.2). The same rule as crème anglaise, only in the oven.',
    'Киш — яичный крем в песочной корзинке: он соединяет тесто (2.5.3) и контроль яиц на огне (2.7.2). То же правило, что с английским кремом, только в духовке.',
  ),
  steps: [
    {
      text: l('Proprži slaninu i ocedi je na ubrusu.', 'Fry the bacon and drain it on paper.', 'Обжарь бекон и обсуши на бумаге.'),
      done: l('Slanina je zlatna, a višak masti je na ubrusu.', 'The bacon is golden and the excess fat is on the paper.', 'Бекон золотистый, лишний жир на бумаге.'),
    },
    {
      text: l('Umuti jaja, žumanca, pavlaku, mleko i začine, bez pene.', 'Whisk eggs, yolks, cream, milk and seasoning, without making foam.', 'Смешай яйца, желтки, сливки, молоко и специи, не взбивая в пену.'),
      params: [l('so ~4 g', 'salt ~4 g', 'соль ~4 г')],
      done: l('Smesa je glatka i jednolična.', 'The mixture is smooth and even.', 'Смесь гладкая и однородная.'),
      why: l('Mehurići se u rerni dignu i krem bude šupljikav. Mešaj, ne muti.', 'Bubbles rise in the oven and the custard turns holey. Stir, do not whip.', 'Пузырьки поднимаются в духовке, и крем получается дырявым. Мешай, а не взбивай.'),
    },
    {
      text: l('Rasporedi slaninu i sir u korpu, prelij kremom.', 'Spread the bacon and cheese in the case and pour over the custard.', 'Распредели бекон и сыр в корзинке и залей кремом.'),
      params: [l('do 5 mm ispod ivice', 'to 5 mm below the rim', 'до 5 мм ниже края')],
      done: l('Krem pokriva fil i ne preliva se preko ivice.', 'The custard covers the filling without spilling over the rim.', 'Крем покрывает начинку и не переливается через край.'),
      why: l('Pleh izvuci do pola, pa krem sipaj u rerni. Pun kiš teško se nosi bez prosipanja.', 'Pull the oven rack halfway out and pour the custard in place. A full quiche is hard to carry without spilling.', 'Выдвини решётку наполовину и заливай крем прямо в духовке. Полный киш трудно нести, не расплескав.'),
    },
    {
      text: l('Peci na niskoj temperaturi dok ivice ne očvrsnu, a sredina ne drhti.', 'Bake low until the edges are set and the centre wobbles.', 'Выпекай при низкой температуре, пока края не схватятся, а центр не будет дрожать.'),
      params: [l('160°C', '160°C', '160°C'), l('30–35 min', '30–35 min', '30–35 мин'), l('sredina ~75°C', 'centre ~75°C', 'центр ~75°C')],
      done: l('Kad protreseš pleh, sredina drhti kao želatin, a ne talasa se.', 'When you shake the tin, the centre jiggles like jelly rather than sloshing.', 'Если встряхнуть форму, центр дрожит, как желе, а не плещется.'),
      why: l('Jaja se zgrušaju iznad 80°C. Na 200°C krem se naduva i iseče. Niska rerna, kao engleski krem.', 'Eggs curdle above 80°C. At 200°C the custard puffs up and splits. A low oven, like crème anglaise.', 'Яйца сворачиваются выше 80°C. При 200°C крем вздувается и расслаивается. Слабая духовка, как с английским кремом.'),
      drawing: 'quicheWobble',
    },
    {
      text: l('Ostavi 15 minuta pre sečenja.', 'Let it stand 15 minutes before cutting.', 'Дай постоять 15 минут перед нарезкой.'),
      done: l('Kiš se seče čisto, krem drži oblik.', 'The quiche cuts cleanly and the custard holds its shape.', 'Киш режется ровно, крем держит форму.'),
      why: l('Toplota dovrši sredinu tokom odmora. Kiš se jede mlak, ne vreo.', 'The heat finishes the centre as it rests. Quiche is eaten warm, not hot.', 'Тепло доводит центр во время отдыха. Киш едят тёплым, а не горячим.'),
    },
  ],
  mistake: {
    title: l('Kiš pečen dok sredina ne bude potpuno čvrsta.', 'Quiche baked until the centre is completely firm.', 'Киш выпекают, пока центр не станет совсем твёрдым.'),
    fix: l(
      'Kad je sredina čvrsta u rerni, ivice su već zgrušane i krem pušta vodu na tanjiru. Izvadi ga dok sredina drhti, odmor ga dovrši.',
      'When the centre is firm in the oven, the edges have already curdled and the custard weeps on the plate. Take it out while the centre trembles; resting finishes it.',
      'Когда центр твёрдый в духовке, края уже свернулись, и крем отдаёт воду на тарелке. Вынимай, пока центр дрожит, — отдых доведёт.',
    ),
  },
  think: {
    question: l('Zašto korpa mora da bude unapred pečena?', 'Why must the case be baked beforehand?', 'Почему корзинку нужно выпечь заранее?'),
    options: [
      l('Na 160°C sirovo testo ne stigne da se ispeče ispod vlažnog krema', 'At 160°C raw pastry cannot bake through under a wet custard', 'При 160°C сырое тесто не успеет пропечься под влажным кремом'),
      l('Da bude slanija', 'To make it saltier', 'Чтобы было солонее'),
      l('Da se ne zalepi za kalup', 'So it does not stick to the tin', 'Чтобы не прилипло к форме'),
    ],
    answer: 0,
    explain: l(
      'Krem traži nisku temperaturu, a testo visoku. Zato se testo peče prvo samo (2.5.3), a krem posle, svako na svojoj temperaturi.',
      'The custard wants a low temperature and the pastry a high one. So the pastry is baked first on its own (2.5.3) and the custard afterwards, each at its own temperature.',
      'Крему нужна низкая температура, а тесту — высокая. Поэтому тесто выпекают сначала отдельно (2.5.3), а крем потом, каждый при своей температуре.',
    ),
  },
  recipe: { name: l('Quiche lorraine', 'Quiche lorraine', 'Киш лорен'), protein: 9, carbs: 14, fat: 24, kcal: 310 },
}

export const frenchLessons: Lesson[] = [basics, meuniere, coqAuVin, bourguignon, gratin, ratatouille, quiche]
