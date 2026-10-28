import { l, type Lesson } from '../types'

// Grade 2 · Module 5 · Doughs. Five doughs, five ratios. Pastry is weighed, never eyeballed, and its
// enemy is warmth: butter that melts before the oven is a dough that will not flake or crumble.

const crepes: Lesson = {
  id: '2.5.1',
  title: l('Palačinke i krep', 'Pancakes and crêpes', 'Блины и крепы'),
  goal: l(
    'Ispečeš tanke palačinke iste debljine, bez kidanja, od prve do poslednje.',
    'You cook thin crêpes of even thickness that do not tear, from the first to the last.',
    'Ты печёшь тонкие блины одной толщины, без разрывов, от первого до последнего.',
  ),
  minutes: 6,
  key: { value: l('50 ml', '50 ml', '50 мл'), label: l('po palačinci', 'per crêpe', 'на блин') },
  need: [
    { item: l('Brašno T-400', 'Plain flour', 'Мука пшеничная'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Jaja', 'Eggs', 'Яйца'), qty: l('3 kom', '3', '3 шт') },
    { item: l('Mleko i kisela voda', 'Milk and sparkling water', 'Молоко и газированная вода'), qty: l('400 + 100 ml', '400 + 100 ml', '400 + 100 мл') },
    { item: l('Ulje, so', 'Oil, salt', 'Масло, соль'), qty: l('2 kašike + prstohvat', '2 tbsp + a pinch', '2 ст. л. + щепотка') },
    { item: l('Tiganj za palačinke 24 cm, kutlača', '24 cm crêpe pan, ladle', 'Блинная сковорода 24 см, половник'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Palačinka je test kontrole toplote i tečnosti u jednom minutu. I predjelo i desert: sa šunkom i sirom, ili sa džemom.',
    'A crêpe tests heat and batter control in a single minute. It is both starter and dessert: ham and cheese, or jam.',
    'Блин — проверка контроля жара и теста за одну минуту. И закуска, и десерт: с ветчиной и сыром или с джемом.',
  ),
  steps: [
    {
      text: l('Umuti jaja i pola mleka sa brašnom u glatku pastu, pa dodaj ostalo.', 'Whisk eggs and half the milk into the flour to a smooth paste, then add the rest.', 'Взбей яйца и половину молока с мукой в гладкую массу, затем добавь остальное.'),
      done: l('Testo je glatko i gusto kao tečna pavlaka.', 'The batter is smooth and as thick as single cream.', 'Тесто гладкое и густое, как жидкие сливки.'),
      why: l('Gusta pasta se umuti bez grudvica. Sva tečnost odjednom pravi grudve, kao kod bešamela (9.1).', 'A thick paste whisks smooth. All the liquid at once makes lumps, as with béchamel (9.1).', 'Густая масса взбивается без комков. Вся жидкость сразу даёт комки, как с бешамелем (9.1).'),
    },
    {
      text: l('Ostavi testo da odmori.', 'Let the batter rest.', 'Дай тесту отдохнуть.'),
      params: [l('30 min', '30 min', '30 мин')],
      done: l('Mehurići su nestali, a testo je malo gušće.', 'The bubbles are gone and the batter is a little thicker.', 'Пузырьки исчезли, тесто чуть гуще.'),
      why: l('Brašno upije tečnost i gluten se opusti. Odmorne palačinke se ne kidaju.', 'The flour absorbs the liquid and the gluten relaxes. Rested batter makes crêpes that do not tear.', 'Мука впитывает жидкость, глютен расслабляется. Блины из отдохнувшего теста не рвутся.'),
    },
    {
      text: l('Zagrej tiganj i premaži ga tankim slojem ulja.', 'Heat the pan and wipe it with a thin film of oil.', 'Разогрей сковороду и смажь тонким слоем масла.'),
      params: [l('srednje jaka vatra', 'medium-high heat', 'огонь выше среднего')],
      done: l('Kap testa se odmah stegne i ne širi se.', 'A drop of batter sets at once and does not spread.', 'Капля теста сразу схватывается и не растекается.'),
      why: l('Prva palačinka je proba za tiganj, ne greška. Po njoj podesiš vatru.', 'The first crêpe is a test for the pan, not a failure. Adjust the heat by it.', 'Первый блин — проба сковороды, а не неудача. По нему настраиваешь огонь.'),
    },
    {
      text: l('Sipaj testo i odmah zarotiraj tiganj.', 'Pour in the batter and swirl the pan at once.', 'Влей тесто и сразу поверни сковороду по кругу.'),
      params: [l('50 ml', '50 ml', '50 мл')],
      done: l('Testo je pokrilo celo dno tankim slojem.', 'The batter covers the whole base in a thin layer.', 'Тесто покрыло всё дно тонким слоем.'),
      drawing: 'crepeSwirl',
    },
    {
      text: l('Okreni kad se ivice podignu i dno zazlati.', 'Flip when the edges lift and the underside is golden.', 'Переверни, когда края приподнимутся, а низ подрумянится.'),
      params: [l('~1 min', '~1 min', '~1 мин'), l('druga strana 30 s', 'second side 30 s', 'вторая сторона 30 с')],
      done: l('Palačinka je zlatna sa pegama i savija se bez pucanja.', 'The crêpe is golden and speckled and folds without cracking.', 'Блин золотистый, в пятнышках, и складывается не ломаясь.'),
      why: l('Slaži ih jednu na drugu na tanjiru. Para ih održava mekanim.', 'Stack them on a plate. The steam keeps them soft.', 'Складывай стопкой на тарелку. Пар сохраняет их мягкими.'),
    },
  ],
  mistake: {
    title: l('Palačinke debele kao pita.', 'Crêpes as thick as a pie.', 'Блины толщиной с пирог.'),
    fix: l(
      'Previše testa ili pregusto testo. Meri kutlačom od 50 ml i rotiraj odmah. Ako se testo ne razliva, razredi ga sa malo kisele vode.',
      'Too much batter or batter too thick. Measure with a 50 ml ladle and swirl at once. If the batter will not spread, thin it with a little sparkling water.',
      'Слишком много теста или оно слишком густое. Отмеряй половником на 50 мл и сразу поворачивай. Если тесто не растекается, разбавь газированной водой.',
    ),
  },
  think: {
    question: l('Palačinke se lepe za tiganj i kidaju kad ih okrećeš. Uzrok?', 'The crêpes stick and tear when flipped. The cause?', 'Блины прилипают и рвутся при перевороте. Причина?'),
    options: [
      l('Tiganj nije dovoljno topao ili si prerano okrenuo', 'The pan is not hot enough or you flipped too soon', 'Сковорода недостаточно горячая или перевернул слишком рано'),
      l('Previše jaja', 'Too many eggs', 'Слишком много яиц'),
      l('Premalo šećera', 'Too little sugar', 'Мало сахара'),
    ],
    answer: 0,
    explain: l(
      'Kao meso u 4.6: palačinka se sama odvoji kad se dno stegne. Ako se lepi, nije spremna ili tiganj nije dovoljno vruć.',
      'Like meat in 4.6: the crêpe releases by itself once the base has set. If it sticks, it is not ready or the pan is not hot enough.',
      'Как мясо в 4.6: блин сам отходит, когда низ схватился. Прилипает — значит не готов или сковорода не горячая.',
    ),
  },
  recipe: { name: l('Palačinke', 'Crêpes', 'Блины'), protein: 7, carbs: 26, fat: 6, kcal: 185 },
}

const pita: Lesson = {
  id: '2.5.2',
  title: l('Kore i pita', 'Filo and pita', 'Тесто фило и пита'),
  goal: l(
    'Napraviš gibanicu od kupljenih kora koja je hrskava gore i sočna u sredini.',
    'You make a gibanica from shop-bought filo that is crisp on top and moist inside.',
    'Ты делаешь гибаницу из готового теста фило, хрустящую сверху и сочную внутри.',
  ),
  minutes: 7,
  key: { value: l('200°C', '200°C', '200°C'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('Kore za pitu', 'Filo sheets', 'Листы фило'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Mladi sir', 'Fresh cheese', 'Молодой сыр'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Jaja', 'Eggs', 'Яйца'), qty: l('4 kom', '4', '4 шт') },
    { item: l('Kisela voda i ulje', 'Sparkling water and oil', 'Газированная вода и масло'), qty: l('300 + 100 ml', '300 + 100 ml', '300 + 100 мл') },
    { item: l('Pleh 30 × 25 cm, vlažna krpa', '30 × 25 cm tin, damp cloth', 'Форма 30 × 25 см, влажное полотенце'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kore su tanje od papira i suše se za minut na vazduhu. Cela tehnika je u brzini, vlazi i masnoći između listova.',
    'Filo is thinner than paper and dries in a minute in the air. The whole technique is speed, moisture and fat between the sheets.',
    'Фило тоньше бумаги и сохнет на воздухе за минуту. Вся техника — в скорости, влаге и жире между листами.',
  ),
  steps: [
    {
      text: l('Kore odmrzni u frižideru i drži ih pod vlažnom krpom.', 'Thaw the filo in the fridge and keep it under a damp cloth.', 'Разморозь фило в холодильнике и держи под влажным полотенцем.'),
      params: [l('12 h u frižideru', '12 h in the fridge', '12 ч в холодильнике')],
      done: l('Listovi se odvajaju bez pucanja.', 'The sheets separate without cracking.', 'Листы отделяются не ломаясь.'),
      why: l('Brzo odmrznute kore se lepe i lome. Krpa ih štiti od sušenja dok radiš.', 'Quick-thawed filo sticks and cracks. The cloth protects it from drying while you work.', 'Быстро размороженное фило слипается и ломается. Полотенце защищает от высыхания во время работы.'),
      drawing: 'filoCloth',
    },
    {
      text: l('Umešaj sir, jaja, kiselu vodu i pola ulja.', 'Mix the cheese, eggs, sparkling water and half the oil.', 'Смешай сыр, яйца, газированную воду и половину масла.'),
      done: l('Fil je retko kremast, sa komadićima sira.', 'The filling is loose and creamy, with pieces of cheese.', 'Начинка жидковато-кремовая, с кусочками сыра.'),
      why: l('Proveri sir pre soli. Mladi sir je često već slan dovoljno.', 'Taste the cheese before salting. Fresh cheese is often salty enough already.', 'Попробуй сыр перед тем, как солить. Молодой сыр часто уже достаточно солёный.'),
    },
    {
      text: l('Dve kore na dno, premaži uljem.', 'Lay two sheets on the base and brush with oil.', 'Положи два листа на дно и смажь маслом.'),
      done: l('Dno je pokriveno, a ivice kora vise preko ivice pleha.', 'The base is covered and the sheet edges hang over the tin.', 'Дно покрыто, края листов свисают за края формы.'),
    },
    {
      text: l('Svaku sledeću koru umoči u fil, nabori je i slaži u pleh.', 'Dip each next sheet in the filling, crumple it and pack it into the tin.', 'Каждый следующий лист окуни в начинку, присобери и укладывай в форму.'),
      params: [l('naborano, ne ravno', 'crumpled, not flat', 'присобранно, не плоско')],
      done: l('Pleh je pun talasastih kora, ravnomerno natopljenih.', 'The tin is full of wavy, evenly soaked sheets.', 'Форма полна волнистых, равномерно пропитанных листов.'),
      why: l('Nabori prave vazduh između listova. Tako je gibanica rastresita, a ne zbijena kao lazanja.', 'The folds trap air between the sheets. That makes the gibanica light, not dense like lasagne.', 'Складки удерживают воздух между листами. Так гибаница пышная, а не плотная, как лазанья.'),
    },
    {
      text: l('Preklopi ivice, prelij ostatkom fila i ulja i peci.', 'Fold the edges over, pour on the rest of the filling and oil, and bake.', 'Загни края, полей остатком начинки и масла и запекай.'),
      params: [l('200°C', '200°C', '200°C'), l('35–40 min', '35–40 min', '35–40 мин'), l('15 min odmora', '15 min rest', '15 мин отдыха')],
      done: l('Vrh je tamnozlatan i krcka, a nož u sredini izlazi vlažan, bez tečnog jajeta.', 'The top is deep golden and crisp, and a knife in the middle comes out moist, with no liquid egg.', 'Верх тёмно-золотистый и хрустит, нож в середине выходит влажным, без жидкого яйца.'),
      drawing: 'pitaTray',
    },
  ],
  mistake: {
    title: l('Kore ostavljene otkrivene na stolu dok se pravi fil.', 'Filo left uncovered on the counter while the filling is made.', 'Фило лежит открытым на столе, пока готовится начинка.'),
    fix: l(
      'Za par minuta ivice se osuše i lome kao staklo. Fil napravi prvo, a kore otvori tek kad si spreman da slažeš, i drži ih pod vlažnom krpom.',
      'In a few minutes the edges dry and shatter like glass. Make the filling first, open the filo only when you are ready to layer, and keep it under a damp cloth.',
      'За пару минут края высыхают и ломаются, как стекло. Сначала сделай начинку, фило открывай, только когда готов укладывать, и держи под влажным полотенцем.',
    ),
  },
  think: {
    question: l('Zašto kisela voda u filu, a ne obična?', 'Why sparkling water in the filling rather than still?', 'Почему в начинке газированная вода, а не обычная?'),
    options: [
      l('Mehurići dižu fil i pita je laganija', 'The bubbles lift the filling and the pie is lighter', 'Пузырьки поднимают начинку, и пирог легче'),
      l('Kisela voda je slanija', 'Sparkling water is saltier', 'Газированная вода солонее'),
      l('Da kore budu hrskavije', 'To make the filo crisper', 'Чтобы фило было хрустящим'),
    ],
    answer: 0,
    explain: l(
      'Ugljen-dioksid se širi u rerni i podigne fil sa jajima, kao blagi prašak za pecivo. Isti razlog kao kod palačinki (2.5.1).',
      'The carbon dioxide expands in the oven and lifts the egg filling, like a gentle raising agent. The same reason as in the crêpes (2.5.1).',
      'Углекислый газ расширяется в духовке и поднимает яичную начинку, как мягкий разрыхлитель. По той же причине, что в блинах (2.5.1).',
    ),
  },
  recipe: { name: l('Gibanica', 'Gibanica', 'Гибаница'), protein: 11, carbs: 22, fat: 14, kcal: 255 },
}

const shortcrust: Lesson = {
  id: '2.5.3',
  title: l('Prhko testo', 'Shortcrust pastry', 'Песочное тесто'),
  goal: l(
    'Umesiš prhko testo i ispečeš korpu za tart koja se ne skuplja i ne razmekša.',
    'You make shortcrust and bake a tart case that neither shrinks nor goes soggy.',
    'Ты замешиваешь песочное тесто и выпекаешь корзинку для тарта, которая не садится и не размокает.',
  ),
  minutes: 7,
  key: { value: l('2 : 1', '2 : 1', '2 : 1'), label: l('brašno : puter', 'flour : butter', 'мука : масло') },
  need: [
    { item: l('Brašno T-400', 'Plain flour', 'Мука пшеничная'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Hladan puter, kockice', 'Cold butter, diced', 'Холодное масло, кубиками'), qty: l('125 g', '125 g', '125 г') },
    { item: l('Šećer u prahu (za slatko)', 'Icing sugar (for sweet)', 'Сахарная пудра (для сладкого)'), qty: l('60 g', '60 g', '60 г') },
    { item: l('Jaje, so', 'Egg, salt', 'Яйцо, соль'), qty: l('1 + prstohvat', '1 + a pinch', '1 + щепотка') },
    { item: l('Kalup za tart 24 cm, papir, pasulj za težinu', '24 cm tart tin, paper, beans for weight', 'Форма для тарта 24 см, бумага, фасоль для груза'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Prhko testo je osnova za tart, pitu sa jabukama i kiš (2.10.7). "Prhko" znači da se mrvi, a ne rasteže, i to zavisi od jedne stvari: hladnog putera.',
    'Shortcrust is the base for tarts, apple pies and quiche (2.10.7). "Short" means it crumbles rather than stretches, and that depends on one thing: cold butter.',
    'Песочное тесто — основа тарта, яблочного пирога и киша (2.10.7). «Песочное» значит рассыпается, а не тянется, и это зависит от одного: холодного масла.',
  ),
  steps: [
    {
      text: l('Utrljaj hladan puter u brašno prstima dok ne bude kao pesak.', 'Rub the cold butter into the flour with your fingertips until it looks like sand.', 'Вотри холодное масло в муку кончиками пальцев до состояния песка.'),
      params: [l('vrhovi prstiju', 'fingertips only', 'только кончики пальцев'), l('2–3 min', '2–3 min', '2–3 мин')],
      done: l('Nema komada putera većih od zrna graška.', 'No lumps of butter bigger than a pea remain.', 'Нет кусочков масла крупнее горошины.'),
      why: l('Puter obloži brašno i spreči gluten da se razvije. Bez glutena testo se mrvi umesto da se rasteže.', 'Butter coats the flour and stops gluten from developing. Without gluten the pastry crumbles instead of stretching.', 'Масло обволакивает муку и не даёт развиться глютену. Без глютена тесто рассыпается, а не тянется.'),
      drawing: 'rubButter',
    },
    {
      text: l('Dodaj šećer i jaje i spoji testo za par sekundi.', 'Add the sugar and egg and bring the dough together in a few seconds.', 'Добавь сахар и яйцо и за несколько секунд собери тесто.'),
      params: [l('ne mesi', 'do not knead', 'не вымешивай')],
      done: l('Testo se drži u grudvi, a i dalje se vide tačkice putera.', 'The dough holds in a ball and specks of butter still show.', 'Тесто держится комом, и всё ещё видны точки масла.'),
      why: l('Mesenje razvija gluten. Prhko testo se spaja, ne mesi.', 'Kneading develops gluten. Shortcrust is brought together, never kneaded.', 'Вымешивание развивает глютен. Песочное тесто собирают, а не месят.'),
    },
    {
      text: l('Spljošti u disk, umotaj i ohladi.', 'Flatten into a disc, wrap and chill.', 'Расплющи в диск, заверни и охлади.'),
      params: [l('30 min u frižideru', '30 min in the fridge', '30 мин в холодильнике')],
      done: l('Testo je čvrsto kao hladan puter.', 'The dough is firm like cold butter.', 'Тесто плотное, как холодное масло.'),
    },
    {
      text: l('Razvij na 3 mm, obloži kalup i probodi dno viljuškom.', 'Roll to 3 mm, line the tin and prick the base with a fork.', 'Раскатай на 3 мм, выложи в форму и наколи дно вилкой.'),
      params: [l('3 mm', '3 mm', '3 мм'), l('15 min u zamrzivač', '15 min in the freezer', '15 мин в морозилку')],
      done: l('Testo prati ivice kalupa bez rastezanja.', 'The pastry follows the tin edges without stretching.', 'Тесто прилегает к краям формы без растягивания.'),
      why: l('Rastegnuto testo se u rerni vrati nazad i korpa se skupi. Spusti ga u ivice, ne vuci.', 'Stretched pastry springs back in the oven and the case shrinks. Ease it into the edges, do not pull.', 'Растянутое тесто в духовке сжимается обратно, и корзинка садится. Опускай его в края, а не тяни.'),
    },
    {
      text: l('Peci na slepo sa papirom i pasuljem, pa bez njih.', 'Blind-bake with paper and beans, then without.', 'Выпекай вслепую с бумагой и фасолью, затем без них.'),
      params: [l('180°C', '180°C', '180°C'), l('15 min sa težinom', '15 min weighted', '15 мин с грузом'), l('10 min bez', '10 min without', '10 мин без')],
      done: l('Dno je zlatno i suvo, ivice ravne.', 'The base is golden and dry and the sides straight.', 'Дно золотистое и сухое, края ровные.'),
      why: l('Pasulj drži dno da se ne naduva, a ivice da ne skliznu. Pečena korpa se ne razmekša od fila.', 'The beans hold the base from puffing and the sides from slumping. A pre-baked case does not go soggy under the filling.', 'Фасоль не даёт дну вздуться, а краям сползти. Пропечённая корзинка не размокает от начинки.'),
      drawing: 'blindBake',
    },
  ],
  mistake: {
    title: l('Testo mešeno mikserom dok ne postane glatko.', 'Dough mixed in a mixer until smooth.', 'Тесто вымешано миксером до гладкости.'),
    fix: l(
      'Mikser zagreje puter i razvije gluten: testo postane žilavo i u rerni se skupi za trećinu. Prsti, brzo, hladno, i čim se spoji stani.',
      'The mixer warms the butter and develops gluten: the pastry turns tough and shrinks by a third in the oven. Fingertips, quick, cold, and stop as soon as it comes together.',
      'Миксер нагревает масло и развивает глютен: тесто становится жёстким и в духовке садится на треть. Пальцы, быстро, холодно, и остановись, как только собралось.',
    ),
  },
  think: {
    question: l('Za slani kiš, šta menjaš u testu?', 'For a savoury quiche, what do you change in the dough?', 'Для солёного киша что меняешь в тесте?'),
    options: [
      l('Izbaciš šećer, a odnos 2 : 1 ostaje', 'Leave out the sugar; the 2 : 1 ratio stays', 'Убираешь сахар, соотношение 2 : 1 остаётся'),
      l('Duplo više putera', 'Double the butter', 'Вдвое больше масла'),
      l('Dodaš kvasac', 'Add yeast', 'Добавляешь дрожжи'),
    ],
    answer: 0,
    explain: l(
      'Struktura prhkog testa je brašno i puter 2 : 1. Šećer je ukus, ne struktura. Isti postupak, samo bez šećera i sa malo više soli.',
      'The structure of shortcrust is flour and butter 2 : 1. Sugar is flavour, not structure. Same method, no sugar and a little more salt.',
      'Структура песочного теста — мука и масло 2 : 1. Сахар — вкус, а не структура. Тот же способ, без сахара и с чуть большим количеством соли.',
    ),
  },
}

const roughPuff: Lesson = {
  id: '2.5.4',
  title: l('Brzo lisnato testo', 'Rough puff pastry', 'Быстрое слоёное тесто'),
  goal: l(
    'Napraviš lisnato testo za sat vremena koje se u rerni digne u slojeve.',
    'You make a puff pastry in an hour that rises into layers in the oven.',
    'Ты делаешь слоёное тесто за час, которое поднимается в духовке слоями.',
  ),
  minutes: 8,
  key: { value: l('4', '4', '4'), label: l('preklopa', 'folds', 'сложения') },
  need: [
    { item: l('Brašno T-400', 'Plain flour', 'Мука пшеничная'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Ledeno hladan puter, kocke 2 cm', 'Ice-cold butter, 2 cm cubes', 'Ледяное масло, кубики 2 см'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Ledena voda', 'Ice water', 'Ледяная вода'), qty: l('120–130 ml', '120–130 ml', '120–130 мл') },
    { item: l('So', 'Salt', 'Соль'), qty: l('5 g', '5 g', '5 г') },
    { item: l('Oklagija, brašno za posipanje', 'Rolling pin, flour for dusting', 'Скалка, мука для подпыла'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Lisnato testo su stotine slojeva testa i putera. U rerni voda iz putera postane para i podigne svaki sloj. Ovo je brza verzija, ista ideja za sat umesto za dan.',
    'Puff pastry is hundreds of layers of dough and butter. In the oven the water in the butter turns to steam and lifts every layer. This is the quick version, the same idea in an hour instead of a day.',
    'Слоёное тесто — сотни слоёв теста и масла. В духовке вода из масла превращается в пар и поднимает каждый слой. Это быстрая версия: та же идея за час, а не за день.',
  ),
  steps: [
    {
      text: l('Izmešaj brašno, so i kocke putera, pa dodaj vodu.', 'Toss flour, salt and butter cubes together, then add the water.', 'Перемешай муку, соль и кубики масла, затем добавь воду.'),
      params: [l('komadi putera ostaju celi', 'butter pieces stay whole', 'кусочки масла остаются целыми')],
      done: l('Testo je grubo i čupavo, sa vidljivim komadima putera.', 'The dough is rough and shaggy, with visible lumps of butter.', 'Тесто грубое и лохматое, с видимыми кусками масла.'),
      why: l('Za razliku od prhkog testa, ovde puter ne sme da nestane u brašnu. Komadi postaju slojevi.', 'Unlike shortcrust, here the butter must not disappear into the flour. The lumps become the layers.', 'В отличие от песочного теста, здесь масло не должно исчезнуть в муке. Куски станут слоями.'),
    },
    {
      text: l('Razvij u pravougaonik i preklopi na tri, kao pismo.', 'Roll into a rectangle and fold in three, like a letter.', 'Раскатай прямоугольник и сложи втрое, как письмо.'),
      params: [l('3 × duže nego šire', '3 × longer than wide', 'в 3 раза длиннее ширины')],
      done: l('Testo je četvrtast blok u tri sloja.', 'The dough is a square block in three layers.', 'Тесто — квадратный блок в три слоя.'),
      drawing: 'letterFold',
    },
    {
      text: l('Okreni za 90° i ponovi razvijanje i preklapanje.', 'Turn it 90° and repeat the rolling and folding.', 'Поверни на 90° и повтори раскатку и сложение.'),
      params: [l('2 preklopa, pa 20 min u frižider', '2 folds, then 20 min in the fridge', '2 сложения, затем 20 мин в холодильник')],
      done: l('Testo postaje glađe, a puter se vidi u trakama.', 'The dough is getting smoother and the butter shows in streaks.', 'Тесто становится глаже, масло видно полосами.'),
      why: l('Puter mora da ostane hladan i čvrst. Ako se omekša, slojevi se spoje i testo se ne digne.', 'The butter must stay cold and firm. If it softens, the layers merge and the pastry will not rise.', 'Масло должно оставаться холодным и твёрдым. Если размякнет, слои сольются, и тесто не поднимется.'),
    },
    {
      text: l('Uradi još 2 preklopa i ohladi ponovo.', 'Do 2 more folds and chill again.', 'Сделай ещё 2 сложения и снова охлади.'),
      params: [l('ukupno 4', '4 in total', 'всего 4'), l('30 min', '30 min', '30 мин')],
      done: l('Testo je glatko, hladno i spremno za sečenje.', 'The dough is smooth, cold and ready to cut.', 'Тесто гладкое, холодное и готово к нарезке.'),
      why: l('Četiri preklopa na tri daju 81 sloj putera. Dovoljno za lisnate kiflice i pite.', 'Four folds in three give 81 layers of butter. Enough for pastries and pies.', 'Четыре сложения втрое дают 81 слой масла. Достаточно для слоек и пирогов.'),
    },
    {
      text: l('Iseci oštrim nožem i peci u vreloj rerni.', 'Cut with a sharp knife and bake in a hot oven.', 'Нарежь острым ножом и выпекай в горячей духовке.'),
      params: [l('210°C', '210°C', '210°C'), l('15–20 min', '15–20 min', '15–20 мин')],
      done: l('Testo se diglo 4–5 puta u vidljivim slojevima i zlatno je.', 'The pastry has risen 4–5 times in visible layers and is golden.', 'Тесто поднялось в 4–5 раз видимыми слоями и золотистое.'),
      why: l('Tup nož zalepi slojeve na ivici i ona se ne digne. Vrela rerna pretvori vodu u paru pre nego što se puter otopi.', 'A blunt knife seals the layers at the edge so it will not rise. A hot oven turns the water to steam before the butter melts away.', 'Тупой нож склеивает слои по краю, и он не поднимается. Горячая духовка превращает воду в пар раньше, чем масло растечётся.'),
    },
  ],
  mistake: {
    title: l('Rad sa testom u toploj kuhinji bez hlađenja.', 'Working the dough in a warm kitchen without chilling.', 'Работать с тестом в тёплой кухне без охлаждения.'),
    fix: l(
      'Puter se otopi u testo i dobiješ prhko umesto lisnato. Ako puter počne da probija kroz testo ili se lepi, odmah ga vrati u frižider na 20 minuta.',
      'The butter melts into the dough and you get shortcrust instead of puff. If butter starts breaking through or sticking, put it straight back in the fridge for 20 minutes.',
      'Масло растапливается в тесте, и получается песочное вместо слоёного. Если масло начинает прорываться или липнуть, сразу верни тесто в холодильник на 20 минут.',
    ),
  },
  think: {
    question: l('Šta diže lisnato testo u rerni?', 'What makes puff pastry rise in the oven?', 'Что поднимает слоёное тесто в духовке?'),
    options: [
      l('Para iz vode u puteru', 'Steam from the water in the butter', 'Пар из воды в масле'),
      l('Kvasac', 'Yeast', 'Дрожжи'),
      l('Prašak za pecivo', 'Baking powder', 'Разрыхлитель'),
    ],
    answer: 0,
    explain: l(
      'Puter je oko 16% vode. Između slojeva ta voda proključa i gura slojeve gore. Nema kvasca ni praška, samo para i hladan puter.',
      'Butter is about 16% water. Between the layers that water boils and pushes the layers up. No yeast or powder, only steam and cold butter.',
      'Масло примерно на 16% состоит из воды. Между слоями эта вода закипает и толкает слои вверх. Ни дрожжей, ни разрыхлителя — только пар и холодное масло.',
    ),
  },
}

const choux: Lesson = {
  id: '2.5.5',
  title: l('Testo za ekler', 'Choux pastry', 'Заварное тесто'),
  goal: l(
    'Napraviš testo za ekler i ispečeš šuplje, hrskave kuglice koje se ne spuste.',
    'You make choux and bake hollow, crisp puffs that do not collapse.',
    'Ты делаешь заварное тесто и выпекаешь полые хрустящие шарики, которые не опадают.',
  ),
  minutes: 8,
  key: { value: l('V', 'V', 'V'), label: l('oblik testa', 'dough shape', 'форма теста') },
  need: [
    { item: l('Voda i mleko', 'Water and milk', 'Вода и молоко'), qty: l('125 + 125 ml', '125 + 125 ml', '125 + 125 мл') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Brašno T-400', 'Plain flour', 'Мука пшеничная'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Jaja', 'Eggs', 'Яйца'), qty: l('4 kom, ~200 g', '4, ~200 g', '4 шт, ~200 г') },
    { item: l('So, šećer, kesa za špricanje', 'Salt, sugar, piping bag', 'Соль, сахар, кондитерский мешок'), qty: l('prstohvat', 'a pinch', 'щепотка') },
  ],
  why: l(
    'Choux je testo koje se kuva pre pečenja. Postaje šuplje jer se voda u njemu pretvori u paru. Od njega su ekleri, profiterole i gužere sa sirom.',
    'Choux is a dough that is cooked before it is baked. It turns hollow because the water inside it becomes steam. Éclairs, profiteroles and cheese gougères are made from it.',
    'Заварное тесто варят перед выпечкой. Оно становится полым, потому что вода в нём превращается в пар. Из него делают эклеры, профитроли и сырные гужеры.',
  ),
  steps: [
    {
      text: l('Zagrej vodu, mleko, puter i so do ključanja.', 'Bring water, milk, butter and salt to the boil.', 'Доведи воду, молоко, масло и соль до кипения.'),
      done: l('Puter je potpuno otopljen kad tečnost proključa.', 'The butter is fully melted when the liquid boils.', 'Масло полностью растаяло к закипанию жидкости.'),
    },
    {
      text: l('Dodaj sve brašno odjednom i mešaj na vatri.', 'Add all the flour at once and stir over the heat.', 'Всыпь всю муку сразу и мешай на огне.'),
      params: [l('2 min', '2 min', '2 мин')],
      done: l('Testo se odvaja od zidova u loptu, a na dnu je tanka kožica.', 'The dough pulls away from the sides into a ball, with a thin film on the base.', 'Тесто отходит от стенок комом, на дне тонкая плёнка.'),
      why: l('Kuvanje skuva skrob i ispari višak vode. Kožica na dnu znači da je testo dovoljno suvo.', 'Cooking gelatinises the starch and drives off excess water. The film on the base means the dough is dry enough.', 'Варка заваривает крахмал и выпаривает лишнюю воду. Плёнка на дне значит, что тесто достаточно сухое.'),
      drawing: 'chouxBall',
    },
    {
      text: l('Ohladi testo 5 minuta, pa umućuj jaja jedno po jedno.', 'Cool the dough 5 minutes, then beat in the eggs one at a time.', 'Остуди тесто 5 минут, затем вбивай яйца по одному.'),
      params: [l('ispod 60°C', 'below 60°C', 'ниже 60°C')],
      done: l('Posle svakog jajeta testo je ponovo glatko i sjajno.', 'After each egg the dough is smooth and glossy again.', 'После каждого яйца тесто снова гладкое и блестящее.'),
      why: l('U vrelom testu jaje se skuva u komadiće umesto da se umeša.', 'In hot dough the egg cooks into bits instead of blending in.', 'В горячем тесте яйцо сварится кусочками, а не вмешается.'),
    },
    {
      text: l('Proveri gustinu: testo pada sa varjače u obliku slova V.', 'Check the texture: the dough falls from the spoon in a V shape.', 'Проверь густоту: тесто падает с ложки в форме буквы V.'),
      params: [l('poslednje jaje možda samo pola', 'the last egg perhaps only half', 'последнее яйцо, может, только половина')],
      done: l('Testo visi sa varjače kao trougao i polako pada.', 'The dough hangs from the spoon like a triangle and drops slowly.', 'Тесто свисает с ложки треугольником и медленно падает.'),
      why: l('Jaja nisu iste veličine, a brašno ne upija isto. V je pravi test, ne broj jaja.', 'Eggs differ in size and flour absorbs differently. The V is the real test, not the number of eggs.', 'Яйца разного размера, мука впитывает по-разному. Настоящая проверка — буква V, а не число яиц.'),
      drawing: 'chouxV',
    },
    {
      text: l('Šprcaj kuglice i peci bez otvaranja rerne.', 'Pipe the puffs and bake without opening the oven.', 'Отсади шарики и выпекай, не открывая духовку.'),
      params: [l('3 cm', '3 cm', '3 см'), l('200°C 10 min, pa 180°C 20 min', '200°C 10 min, then 180°C 20 min', '200°C 10 мин, затем 180°C 20 мин')],
      done: l('Kuglice su tamnozlatne, lagane i šuplje kad kucneš odozdo.', 'The puffs are deep golden, light and sound hollow when tapped underneath.', 'Шарики тёмно-золотистые, лёгкие и звучат пусто, если постучать снизу.'),
      why: l('Otvorena rerna pusti paru i kuglice se spuste. Na kraju ih probuši, da izađe para iznutra.', 'An opened oven lets out the steam and the puffs collapse. At the end pierce them to let the steam out from inside.', 'Открытая духовка выпускает пар, и шарики опадают. В конце проколи их, чтобы вышел пар изнутри.'),
    },
  ],
  mistake: {
    title: l('Kuglice izvađene čim su porumenele.', 'Puffs taken out as soon as they brown.', 'Шарики вынуты, как только подрумянились.'),
    fix: l(
      'Spolja izgledaju gotovo, a unutra su vlažne i spuste se za minut. Peci ih dok ne budu tamnozlatne i lagane kao papir. Bolje minut duže nego minut kraće.',
      'They look done outside but are wet inside and collapse within a minute. Bake until deep golden and as light as paper. Better a minute too long than a minute too short.',
      'Снаружи выглядят готовыми, а внутри влажные и опадают за минуту. Выпекай до тёмно-золотистого цвета и бумажной лёгкости. Лучше минутой дольше, чем минутой меньше.',
    ),
  },
  think: {
    question: l('Testo je pregusto posle 4 jaja i ne pravi V. Šta radiš?', 'After 4 eggs the dough is too stiff and makes no V. What do you do?', 'После 4 яиц тесто слишком густое и не даёт V. Что делаешь?'),
    options: [
      l('Umutiš još pola jajeta, malo po malo', 'Beat in another half egg, a little at a time', 'Вбиваешь ещё половину яйца понемногу'),
      l('Dodaš vodu', 'Add water', 'Добавляешь воду'),
      l('Pečeš tako', 'Bake it as it is', 'Выпекаешь так'),
    ],
    answer: 0,
    explain: l(
      'Jaje daje i tečnost i protein koji drži zidove. Voda bi razredila testo bez strukture. Dodaj umućeno jaje kašiku po kašiku dok ne dobiješ V.',
      'Egg gives both liquid and the protein that holds the walls. Water would thin the dough with no structure. Add beaten egg a spoonful at a time until you get the V.',
      'Яйцо даёт и жидкость, и белок, держащий стенки. Вода разбавила бы тесто без структуры. Добавляй взбитое яйцо по ложке, пока не получится V.',
    ),
  },
}

export const doughLessons: Lesson[] = [crepes, pita, shortcrust, roughPuff, choux]
