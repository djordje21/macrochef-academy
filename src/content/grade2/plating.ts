import { l, type Lesson } from '../types'

// Grade 2 · Module 13 · Plating. A plate is read before it is tasted. The rules are few: space, height,
// sauce in the right place, one contrast of texture, and nothing on the plate that is not food.

const plate: Lesson = {
  id: '2.13.1',
  title: l('Tanjir, boja i visina', 'The plate, colour and height', 'Тарелка, цвет и высота'),
  goal: l(
    'Složiš glavno jelo na tanjir tako da izgleda uredno, visoko i sa dovoljno praznog prostora.',
    'You plate a main course so it looks neat and tall, with enough empty space.',
    'Ты выкладываешь основное блюдо так, чтобы оно выглядело аккуратным, высоким и с достаточным пустым пространством.',
  ),
  minutes: 6,
  key: { value: l('60%', '60%', '60%'), label: l('tanjira pokriveno', 'of the plate covered', 'тарелки занято') },
  need: [
    { item: l('Beo, ravan tanjir sa obodom', 'A white, flat plate with a rim', 'Белая плоская тарелка с бортиком'), qty: l('27 cm', '27 cm', '27 см') },
    { item: l('Jelo sa tri dela: protein, prilog, povrće', 'A dish in three parts: protein, side, vegetables', 'Блюдо из трёх частей: белок, гарнир, овощи'), qty: l('1 porcija', '1 portion', '1 порция') },
    { item: l('Kašika, pinceta, čista krpa', 'Spoon, tweezers, clean cloth', 'Ложка, пинцет, чистое полотенце'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Isto jelo na dva tanjira može da izgleda kao kantina ili kao restoran. Razlika nije u hrani, nego u rasporedu, visini i praznom prostoru.',
    'The same food on two plates can look like a canteen or a restaurant. The difference is not the food but the layout, height and empty space.',
    'Одна и та же еда на двух тарелках может выглядеть как столовая или как ресторан. Разница не в еде, а в раскладке, высоте и пустом пространстве.',
  ),
  steps: [
    {
      text: l('Izaberi beo tanjir dovoljno velik za porciju.', 'Choose a white plate big enough for the portion.', 'Выбери белую тарелку, достаточно большую для порции.'),
      params: [l('glavno: 27 cm', 'main: 27 cm', 'основное: 27 см'), l('predjelo: 22–24 cm', 'starter: 22–24 cm', 'закуска: 22–24 см')],
      done: l('Hrana pokriva oko 60% tanjira, a obod je prazan.', 'The food covers about 60% of the plate and the rim is clear.', 'Еда занимает около 60% тарелки, бортик свободен.'),
      why: l('Beo tanjir pokazuje boje hrane, a prazan obod je okvir, kao paspartu oko slike.', 'A white plate shows off the food\'s colours, and an empty rim is a frame, like a mount around a picture.', 'Белая тарелка показывает цвета еды, а пустой бортик — рамка, как паспарту вокруг картины.'),
    },
    {
      text: l('Zamisli tanjir kao sat: prilog na 10, povrće na 2, protein ispred na 6.', 'Imagine the plate as a clock: side at 10, vegetables at 2, protein in front at 6.', 'Представь тарелку как циферблат: гарнир на 10, овощи на 2, белок впереди на 6.'),
      done: l('Svaki deo ima svoje mesto, a protein je najbliže gostu.', 'Each part has its place and the protein is closest to the guest.', 'Каждая часть на своём месте, белок ближе всего к гостю.'),
      why: l('Protein je razlog jela, pa ide napred. Ovo je klasičan raspored, a jednom kad ga savladaš, možeš da ga menjaš.', 'The protein is why the dish exists, so it goes in front. This is the classic layout; once you master it, you can break it.', 'Белок — причина блюда, поэтому он впереди. Это классическая раскладка; освоив её, можно её менять.'),
      drawing: 'plateClock',
    },
    {
      text: l('Napravi visinu: prilog dole, protein naslonjen ili preko njega.', 'Build height: side underneath, protein leaning on or across it.', 'Создай высоту: гарнир снизу, белок прислонён или поверх.'),
      params: [l('5–8 cm', '5–8 cm', '5–8 см')],
      done: l('Jelo ima vrh kad ga gledaš sa strane.', 'The dish has a peak when you look at it from the side.', 'У блюда есть вершина, если смотреть сбоку.'),
      why: l('Ravno raspoređena hrana izgleda kao da je pala na tanjir. Visina daje oblik.', 'Food spread flat looks as if it fell onto the plate. Height gives it shape.', 'Плоско разложенная еда выглядит, будто упала на тарелку. Высота придаёт форму.'),
      drawing: 'plateHeight',
    },
    {
      text: l('Koristi neparan broj komada: 3 ili 5.', 'Use an odd number of pieces: 3 or 5.', 'Используй нечётное число кусочков: 3 или 5.'),
      done: l('Šargarepice, šnite ili kuglice su u grupi od tri ili pet.', 'Carrots, slices or balls come in groups of three or five.', 'Морковки, ломтики или шарики — группами по три или пять.'),
      why: l('Oko traži centar. Paran broj se deli na pola i deluje kruto, neparan deluje prirodno.', 'The eye looks for a centre. An even number splits in half and feels stiff; an odd number feels natural.', 'Глаз ищет центр. Чётное число делится пополам и выглядит жёстко, нечётное — естественно.'),
    },
    {
      text: l('Obriši obod tanjira krpom pre nego što ga nosiš.', 'Wipe the plate rim with the cloth before it goes out.', 'Протри бортик тарелки полотенцем, прежде чем нести.'),
      done: l('Na obodu nema kapi ni otisaka prstiju.', 'There are no drips or fingerprints on the rim.', 'На бортике нет капель и отпечатков пальцев.'),
      why: l('Mrlja na obodu je prva stvar koju gost vidi (2.1.5). Treba ti 5 sekundi.', 'A smear on the rim is the first thing a guest sees (2.1.5). It takes 5 seconds.', 'Пятно на бортике — первое, что видит гость (2.1.5). Это 5 секунд.'),
    },
  ],
  mistake: {
    title: l('Tanjir napunjen do oboda "da gost bude sit".', 'A plate filled to the rim "so the guest is full".', 'Тарелка заполнена до краёв, «чтобы гость наелся».'),
    fix: l(
      'Pun tanjir izgleda kao menza, a hrana se meša i hladi. Ista količina na većem tanjiru izgleda kao restoran. Ako treba više, služi drugu porciju.',
      'A full plate looks like a canteen, and the food runs together and cools. The same amount on a larger plate looks like a restaurant. If more is needed, serve seconds.',
      'Полная тарелка выглядит как столовая, а еда смешивается и остывает. То же количество на большей тарелке выглядит как ресторан. Нужно больше — подай добавку.',
    ),
  },
  think: {
    question: l('Gde stoji protein na tanjiru, gledano od gosta?', 'Where does the protein sit on the plate, seen from the guest?', 'Где на тарелке лежит белок, если смотреть со стороны гостя?'),
    options: [
      l('Napred, na 6 sati', 'In front, at 6 o\'clock', 'Впереди, на 6 часов'),
      l('Pozadi, na 12', 'At the back, at 12', 'Сзади, на 12'),
      l('Svejedno', 'It does not matter', 'Неважно'),
    ],
    answer: 0,
    explain: l(
      'Gost prvo vidi i seče ono što je najbliže. Glavni deo jela ide tamo, a prilog i povrće prave pozadinu i visinu.',
      'The guest sees and cuts first what is nearest. The main part of the dish goes there, while the side and vegetables make the background and height.',
      'Гость сначала видит и режет то, что ближе. Главная часть блюда идёт туда, а гарнир и овощи создают фон и высоту.',
    ),
  },
}

const sauce: Lesson = {
  id: '2.13.2',
  title: l('Sos na tanjiru', 'Sauce on the plate', 'Соус на тарелке'),
  goal: l(
    'Staviš sos na tanjir na četiri načina i znaš kad koji ide.',
    'You put sauce on a plate four ways and know when each one fits.',
    'Ты кладёшь соус на тарелку четырьмя способами и знаешь, когда какой подходит.',
  ),
  minutes: 6,
  key: { value: l('2–3 kašike', '2–3 tbsp', '2–3 ст. л.'), label: l('sosa po tanjiru', 'of sauce per plate', 'соуса на тарелку') },
  need: [
    { item: l('Gust sos ili pire', 'A thick sauce or purée', 'Густой соус или пюре'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Kašika, flašica za špricanje', 'Spoon, squeeze bottle', 'Ложка, бутылочка-дозатор'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Topli tanjiri (2.1.5)', 'Warm plates (2.1.5)', 'Тёплые тарелки (2.1.5)'), qty: l('4', '4', '4') },
  ],
  why: l(
    'Sos je ukus, ali i deo slike. Pogrešno mesto ga pretvara u baru koja razmekša sve oko sebe. Pravo mesto drži hrskavo hrskavim.',
    'Sauce is flavour, but also part of the picture. In the wrong place it becomes a puddle that softens everything around it. In the right place it keeps the crisp things crisp.',
    'Соус — это вкус, но и часть картины. Не на своём месте он становится лужей, размягчающей всё вокруг. На своём — сохраняет хрустящее хрустящим.',
  ),
  steps: [
    {
      text: l('Sos ispod, ne preko hrskavog.', 'Sauce underneath, not over anything crisp.', 'Соус под, а не поверх хрустящего.'),
      params: [l('koža ribe, korica mesa', 'fish skin, meat crust', 'кожа рыбы, корочка мяса')],
      done: l('Hrskava koža je gore, suva, a sos je ispod nje.', 'The crisp skin is on top and dry, with the sauce beneath.', 'Хрустящая кожа сверху и сухая, соус под ней.'),
      why: l('Koža koju si 5 minuta pekao (2.2.4) razmekša za 30 sekundi pod sosom.', 'Skin you spent 5 minutes crisping (2.2.4) goes soft under sauce in 30 seconds.', 'Кожа, которую ты 5 минут зажаривал (2.2.4), размякнет под соусом за 30 секунд.'),
    },
    {
      text: l('Za potez kašikom: kašika sosa, pa povuci leđima kašike u luk.', 'For a swoosh: a spoonful of sauce, then drag it with the back of the spoon in an arc.', 'Для мазка: ложка соуса, затем протяни её спинкой ложки дугой.'),
      done: l('Na tanjiru je jedan čist potez koji se sužava na kraju.', 'There is one clean stroke on the plate that tapers at the end.', 'На тарелке один чистый мазок, сужающийся к концу.'),
      why: l('Jedan potez, odlučno. Drugi pokušaj preko prvog uvek izgleda prljavo.', 'One stroke, decisively. A second attempt over the first always looks messy.', 'Один мазок, решительно. Вторая попытка поверх первой всегда выглядит грязно.'),
      drawing: 'sauceSwoosh',
    },
    {
      text: l('Za tačke: flašicom napravi 3 ili 5 tačaka različite veličine.', 'For dots: use the bottle to make 3 or 5 dots of different sizes.', 'Для точек: бутылочкой сделай 3 или 5 точек разного размера.'),
      done: l('Tačke su okrugle, sjajne i ne razlivaju se.', 'The dots are round and glossy and do not spread.', 'Точки круглые, блестящие и не растекаются.'),
      why: l('Za tačke sos mora da bude gust kao pire. Redak se razlije u mrlju.', 'For dots the sauce must be as thick as purée. A thin one spreads into a smear.', 'Для точек соус должен быть густым, как пюре. Жидкий расплывётся пятном.'),
      drawing: 'sauceDots',
    },
    {
      text: l('Za sos u činiji ili za stolom: sipaj ga pred gostom.', 'For sauce in a bowl or at the table: pour it in front of the guest.', 'Для соуса в тарелке или за столом: налей его при госте.'),
      params: [l('supe, sos iz pleha', 'soups, pan gravy', 'супы, соус из противня')],
      done: l('Sos je vreo i sjajan kad stigne do gosta.', 'The sauce is hot and glossy when it reaches the guest.', 'Соус горячий и блестящий, когда доходит до гостя.'),
      why: l('Sos sipan za stolom nema vremena da se stegne ili razmekša hranu. I to je mali šou.', 'Sauce poured at the table has no time to set or soften the food. It is also a small show.', 'Соус, налитый за столом, не успевает схватиться или размягчить еду. Это ещё и маленькое шоу.'),
    },
    {
      text: l('Proveri količinu: dovoljno za svaki zalogaj, ne bara.', 'Check the amount: enough for every bite, not a puddle.', 'Проверь количество: достаточно на каждый кусок, но не лужа.'),
      params: [l('glavno: 2–3 kašike', 'main: 2–3 tbsp', 'основное: 2–3 ст. л.')],
      done: l('Poslednji zalogaj i dalje ima malo sosa.', 'The last bite still has a little sauce.', 'Последний кусок всё ещё с соусом.'),
      why: l('Više sosa stavi u bokal na sto. Gost uzme koliko hoće.', 'Put extra sauce in a jug on the table. Guests take as much as they like.', 'Лишний соус — в соусник на стол. Гость возьмёт сколько хочет.'),
    },
  ],
  mistake: {
    title: l('Sos preliven preko celog tanjira, i preko mesa.', 'Sauce poured over the whole plate and the meat.', 'Соус налит на всю тарелку и на мясо.'),
    fix: l(
      'Korica razmekša, prilog pliva, a tanjir izgleda kao gulaš. Sos ide ispod ili pored proteina, a meso ostaje vidljivo i hrskavo.',
      'The crust softens, the side swims and the plate looks like a stew. Sauce goes under or beside the protein, and the meat stays visible and crisp.',
      'Корочка размякает, гарнир плавает, тарелка похожа на рагу. Соус кладут под белок или рядом, а мясо остаётся видимым и хрустящим.',
    ),
  },
  think: {
    question: l('Za pačja prsa sa hrskavom kožom (2.2.5), gde ide sos?', 'For duck breast with crisp skin (2.2.5), where does the sauce go?', 'Для утиной грудки с хрустящей кожей (2.2.5) куда идёт соус?'),
    options: [
      l('Ispod šnita ili pored njih', 'Under or beside the slices', 'Под ломтики или рядом'),
      l('Preko kože', 'Over the skin', 'На кожу'),
      l('Pomešan sa pačjim mesom', 'Mixed into the duck', 'Перемешан с мясом'),
    ],
    answer: 0,
    explain: l(
      'Koža je ono što si topio 12 minuta. Sos ispod, šnite gore kožom nagore, i gost dobija oba: sos i hrskavost.',
      'The skin is what you rendered for 12 minutes. Sauce underneath, slices on top skin side up, and the guest gets both: sauce and crunch.',
      'Кожа — то, что ты вытапливал 12 минут. Соус снизу, ломтики сверху кожей вверх, и гость получает и соус, и хруст.',
    ),
  },
}

const texture: Lesson = {
  id: '2.13.3',
  title: l('Kontrast tekstura', 'Contrasting textures', 'Контраст текстур'),
  goal: l(
    'Dodaš svakom jelu jedan hrskav element koji ga podigne.',
    'You add one crisp element to every dish to lift it.',
    'Ты добавляешь каждому блюду один хрустящий элемент, который его поднимает.',
  ),
  minutes: 5,
  key: { value: l('1', '1', '1'), label: l('hrskav element', 'crisp element', 'хрустящий элемент') },
  need: [
    { item: l('Kremasto jelo: pire, supa, rizoto, panakota', 'A creamy dish: purée, soup, risotto, panna cotta', 'Кремовое блюдо: пюре, суп, ризотто, панакота'), qty: l('1', '1', '1') },
    { item: l('Hrskavo: krutoni, prženi luk, orasi, mrvice, čips od kore', 'Something crisp: croutons, fried onion, nuts, crumbs, peel crisps', 'Хрустящее: крутоны, жареный лук, орехи, крошка, чипсы из кожуры'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Jelo koje je celo meko postane dosadno posle tri zalogaja. Jedan hrskav element budi usta svaki put. To je najjednostavniji trik profesionalne kuhinje.',
    'A dish that is soft all through gets boring after three bites. One crisp element wakes the mouth every time. It is the simplest trick in a professional kitchen.',
    'Блюдо, мягкое целиком, надоедает после трёх ложек. Один хрустящий элемент каждый раз будит рот. Это самый простой трюк профессиональной кухни.',
  ),
  steps: [
    {
      text: l('Pogledaj jelo i pitaj: šta je ovde hrskavo?', 'Look at the dish and ask: what here is crisp?', 'Посмотри на блюдо и спроси: что здесь хрустящее?'),
      done: l('Znaš da li jelu fali hrskavost.', 'You know whether the dish lacks crunch.', 'Знаешь, не хватает ли блюду хруста.'),
      why: l('Krem supa, pire, rizoto, panakota: sva su meka. Svakom fali isti dodatak.', 'Cream soup, mash, risotto, panna cotta: all soft. Each is missing the same thing.', 'Крем-суп, пюре, ризотто, панакота: все мягкие. Каждому не хватает одного и того же.'),
    },
    {
      text: l('Izaberi hrskav dodatak koji pripada jelu.', 'Choose a crisp addition that belongs to the dish.', 'Выбери хрустящую добавку, которая подходит блюду.'),
      params: [l('krem supa: krutoni (15.2)', 'cream soup: croutons (15.2)', 'крем-суп: крутоны (15.2)'), l('pire: prženi luk', 'mash: fried onion', 'пюре: жареный лук'), l('panakota: mrvice', 'panna cotta: crumble', 'панакота: крошка')],
      done: l('Dodatak ima ukus koji se slaže sa jelom.', 'The addition has a flavour that suits the dish.', 'У добавки вкус, который сочетается с блюдом.'),
      drawing: 'textureContrast',
    },
    {
      text: l('Dodaj hrskavo tek pred serviranje, gore.', 'Add the crisp element only just before serving, on top.', 'Добавляй хрустящее только перед подачей, сверху.'),
      done: l('Hrskavo je suvo i krcka kad gost počne da jede.', 'The crisp element is dry and crunches when the guest starts eating.', 'Хрустящее сухое и хрустит, когда гость начинает есть.'),
      why: l('Krutoni u supi omekšaju za dva minuta. Isto pravilo kao sos ispod kože (2.13.2).', 'Croutons in soup go soft in two minutes. The same rule as sauce under the skin (2.13.2).', 'Крутоны в супе размякают за две минуты. То же правило, что соус под кожей (2.13.2).'),
    },
    {
      text: l('Dodaj i kontrast temperature ili ukusa, ako jelo dozvoljava.', 'Add a contrast of temperature or flavour too, if the dish allows.', 'Добавь также контраст температуры или вкуса, если блюдо позволяет.'),
      params: [l('topla pita + hladna pavlaka', 'warm pie + cold cream', 'тёплый пирог + холодные сливки'), l('masno + kiselo', 'rich + sour', 'жирное + кислое')],
      done: l('Jelo ima bar jednu suprotnost: tekstura, temperatura ili ukus.', 'The dish has at least one contrast: texture, temperature or taste.', 'В блюде есть хотя бы один контраст: текстура, температура или вкус.'),
      why: l('Isti princip kao ravnoteža ukusa u modulu 5, samo za usta, ne za jezik.', 'The same principle as balancing taste in module 5, only for the mouth, not the tongue.', 'Тот же принцип, что баланс вкуса в модуле 5, только для рта, а не для языка.'),
    },
    {
      text: l('Probaj ceo zalogaj sa svim delovima.', 'Taste a whole bite with every element.', 'Попробуй целый кусок со всеми элементами.'),
      done: l('Zalogaj je i mek i hrskav, i nijedan deo ne dominira.', 'The bite is both soft and crisp, and no part dominates.', 'Кусок и мягкий, и хрустящий, и ни одна часть не доминирует.'),
    },
  ],
  mistake: {
    title: l('Hrskav dodatak koji nema veze sa jelom.', 'A crisp element that has nothing to do with the dish.', 'Хрустящая добавка, не связанная с блюдом.'),
    fix: l(
      'Čips na rizotu od pečuraka je hrskavo, ali je čudno. Hrskavo mora da ima smisla: pržene pečurke na rizotu, pržena kora od krompira na supi od krompira.',
      'Crisps on a mushroom risotto are crunchy but odd. The crunch has to make sense: fried mushrooms on the risotto, fried potato peel on potato soup.',
      'Чипсы на грибном ризотто хрустят, но странно. Хруст должен иметь смысл: жареные грибы на ризотто, жареная картофельная кожура на картофельном супе.',
    ),
  },
  think: {
    question: l('Šta je najbolji hrskav dodatak krem supi od šargarepe (8.6)?', 'What is the best crisp addition to a carrot cream soup (8.6)?', 'Какая лучшая хрустящая добавка к морковному крем-супу (8.6)?'),
    options: [
      l('Pečene semenke bundeve ili krutoni', 'Toasted pumpkin seeds or croutons', 'Обжаренные тыквенные семечки или крутоны'),
      l('Bombone', 'Sweets', 'Конфеты'),
      l('Sirova šargarepa u kolutovima', 'Raw carrot in rounds', 'Сырая морковь кружками'),
    ],
    answer: 0,
    explain: l(
      'Semenke i krutoni krckaju, imaju orašast ukus i ne smetaju šargarepi. Sirova šargarepa je hrskava, ali bi se borila sa supom.',
      'Seeds and croutons crunch, taste nutty and do not clash with the carrot. Raw carrot is crisp but would compete with the soup.',
      'Семечки и крутоны хрустят, имеют ореховый вкус и не спорят с морковью. Сырая морковь хрустит, но будет соперничать с супом.',
    ),
  },
}

const garnish: Lesson = {
  id: '2.13.4',
  title: l('Garnir koji ima smisla', 'A garnish that makes sense', 'Гарнир со смыслом'),
  goal: l(
    'Završiš tanjir ukrasom koji se jede i dodaje ukus, a ne grančicom peršuna sa strane.',
    'You finish a plate with a garnish that is eaten and adds flavour, not a sprig of parsley on the side.',
    'Ты завершаешь тарелку украшением, которое едят и которое добавляет вкус, а не веточкой петрушки сбоку.',
  ),
  minutes: 5,
  key: { value: l('jestivo', 'edible', 'съедобно'), label: l('i deo jela', 'and part of the dish', 'и часть блюда') },
  need: [
    { item: l('Bilje koje je već u jelu', 'Herbs already in the dish', 'Травы, уже входящие в блюдо'), qty: l('—', '—', '—') },
    { item: l('Krupna so, maslinovo ulje, limunova kora', 'Flaky salt, olive oil, lemon zest', 'Крупная соль, оливковое масло, цедра лимона'), qty: l('—', '—', '—') },
    { item: l('Pinceta', 'Tweezers', 'Пинцет'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Grančica peršuna sa strane je ukras iz sedamdesetih: niko je ne jede, a samo zauzima mesto. Pravi garnir je poslednji sloj ukusa.',
    'A sprig of parsley on the side is a 1970s decoration: nobody eats it and it only takes up space. A real garnish is the last layer of flavour.',
    'Веточка петрушки сбоку — украшение из семидесятых: её никто не ест, она только занимает место. Настоящий гарнир — последний слой вкуса.',
  ),
  steps: [
    {
      text: l('Uzmi bilje koje je već u jelu, sitno iseckano ili listići.', 'Take a herb that is already in the dish, finely chopped or as small leaves.', 'Возьми траву, которая уже есть в блюде, мелко порубленную или листиками.'),
      params: [l('majčina dušica u sosu → listići gore', 'thyme in the sauce → leaves on top', 'тимьян в соусе → листики сверху')],
      done: l('Garnir je isti ukus kao jelo, samo svež.', 'The garnish tastes the same as the dish, only fresh.', 'Гарнир того же вкуса, что и блюдо, только свежий.'),
      why: l('Bilje kuvano u sosu izgubi miris. Sveži listići na kraju ga vrate.', 'Herbs cooked in the sauce lose their aroma. Fresh leaves at the end bring it back.', 'Травы, варившиеся в соусе, теряют аромат. Свежие листики в конце его возвращают.'),
      drawing: 'garnishEdible',
    },
    {
      text: l('Dodaj prstohvat krupne soli na protein.', 'Add a pinch of flaky salt to the protein.', 'Добавь щепотку крупной соли на белок.'),
      done: l('Kristali soli se vide i krckaju.', 'The salt crystals are visible and crunch.', 'Кристаллы соли видны и хрустят.'),
      why: l('Krupna so na kraju je ukus i tekstura u jednom. Isto meso, ali svaki zalogaj ima malu eksploziju.', 'Flaky salt at the end is flavour and texture in one. The same meat, but every bite has a small burst.', 'Крупная соль в конце — вкус и текстура в одном. То же мясо, но в каждом куске маленький взрыв.'),
    },
    {
      text: l('Završi kapima dobrog ulja ili limunovom korom.', 'Finish with drops of good oil or lemon zest.', 'Заверши каплями хорошего масла или цедрой лимона.'),
      params: [l('3–5 kapi', '3–5 drops', '3–5 капель')],
      done: l('Tanjir sija i miriše kad stigne na sto.', 'The plate shines and smells fragrant when it reaches the table.', 'Тарелка блестит и благоухает, когда приходит на стол.'),
      why: l('Miris je prvi ukus. Sirovo ulje i kora (2.12.1) daju ga u sekundi kad tanjir stigne.', 'Aroma is the first taste. Raw oil and zest (2.12.1) give it the second the plate arrives.', 'Аромат — первый вкус. Сырое масло и цедра (2.12.1) дают его в ту секунду, когда тарелка приходит.'),
      drawing: 'lemonDrops',
    },
    {
      text: l('Postavi garnir pincetom, na jedno mesto, ne svuda.', 'Place the garnish with tweezers, in one spot, not everywhere.', 'Положи гарнир пинцетом в одно место, а не везде.'),
      done: l('Oko ima jednu tačku na kojoj stane.', 'The eye has one point to rest on.', 'Глаз находит одну точку, на которой останавливается.'),
      why: l('Garnir rasut po celom tanjiru izgleda kao da je pao. Jedno mesto, jedan akcenat.', 'Garnish scattered all over the plate looks like it fell. One spot, one accent.', 'Гарнир, рассыпанный по всей тарелке, выглядит упавшим. Одно место — один акцент.'),
    },
    {
      text: l('Pitaj se za svaki deo tanjira: da li se ovo jede?', 'Ask of every element on the plate: is this eaten?', 'Спроси себя о каждом элементе тарелки: это едят?'),
      done: l('Sve na tanjiru je hrana koju gost treba da pojede.', 'Everything on the plate is food the guest is meant to eat.', 'Всё на тарелке — еда, которую гость должен съесть.'),
      why: l('Ako odgovor nije da, skloni ga. Lovorov list, kost od ukrasa, cvet koji se ne jede: ne idu na tanjir.', 'If the answer is not yes, remove it. A bay leaf, a decorative bone, an inedible flower: they do not go on the plate.', 'Если ответ не «да», убери это. Лавровый лист, кость для украшения, несъедобный цветок — не для тарелки.'),
    },
  ],
  mistake: {
    title: l('Grančica peršuna i kriška limuna "da lepše izgleda".', 'A sprig of parsley and a lemon wedge "to make it look nicer".', 'Веточка петрушки и долька лимона, «чтобы было красивее».'),
    fix: l(
      'Gost ih skloni na ivicu i tanjir se vrati sa ukrasom. Ako jelu treba limun, iscedi ga u sos. Ako treba peršun, iseckaj ga preko. Ukras je ukus.',
      'The guest pushes them to the side and the plate comes back with the decoration. If the dish needs lemon, squeeze it into the sauce. If it needs parsley, chop it over the top. Garnish is flavour.',
      'Гость отодвигает их к краю, и тарелка возвращается с украшением. Если блюду нужен лимон, выжми его в соус. Нужна петрушка — поруби её сверху. Украшение — это вкус.',
    ),
  },
  think: {
    question: l('Koji garnir ima smisla na gulašu (12.2)?', 'Which garnish makes sense on goulash (12.2)?', 'Какой гарнир имеет смысл на гуляше (12.2)?'),
    options: [
      l('Gremolata (2.12.2)', 'Gremolata (2.12.2)', 'Гремолата (2.12.2)'),
      l('Cela grančica ruzmarina', 'A whole sprig of rosemary', 'Целая веточка розмарина'),
      l('Jestivi cvetovi', 'Edible flowers', 'Съедобные цветы'),
    ],
    answer: 0,
    explain: l(
      'Gulaš je težak i braon. Gremolata daje boju, svežinu i kiselinu koja seče masnoću. To je garnir koji radi posao, ne samo ukras.',
      'Goulash is heavy and brown. Gremolata adds colour, freshness and acid to cut the fat. A garnish that does a job, not just decoration.',
      'Гуляш тяжёлый и коричневый. Гремолата даёт цвет, свежесть и кислоту, которая режет жир. Гарнир, который работает, а не просто украшает.',
    ),
  },
}

const photo: Lesson = {
  id: '2.13.5',
  title: l('Fotografija jela', 'Photographing a dish', 'Фотография блюда'),
  goal: l(
    'Fotografišeš jelo telefonom tako da izgleda kao što je i bilo: sveže, sjajno i ukusno.',
    'You photograph a dish on your phone so it looks as it really was: fresh, glossy and delicious.',
    'Ты фотографируешь блюдо телефоном так, чтобы оно выглядело как на самом деле: свежим, блестящим и вкусным.',
  ),
  minutes: 5,
  key: { value: l('45°', '45°', '45°'), label: l('ugao za visoka jela', 'angle for tall dishes', 'угол для высоких блюд') },
  need: [
    { item: l('Telefon', 'Phone', 'Телефон'), qty: l('1', '1', '1') },
    { item: l('Prozor sa dnevnim svetlom', 'A window with daylight', 'Окно с дневным светом'), qty: l('1', '1', '1') },
    { item: l('Mirna pozadina: drvo, kamen, platno', 'A calm background: wood, stone, linen', 'Спокойный фон: дерево, камень, лён'), qty: l('1', '1', '1') },
    { item: l('Beo papir ili karton', 'White paper or card', 'Белая бумага или картон'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Fotografija je kako jelo putuje dalje: do prijatelja, na društvene mreže, u MacroChef. Dobra fotografija ne laže, nego pokazuje jelo u najboljem trenutku.',
    'A photo is how a dish travels on: to friends, to social media, into MacroChef. A good photo does not lie; it shows the dish at its best moment.',
    'Фотография — то, как блюдо путешествует дальше: к друзьям, в соцсети, в MacroChef. Хорошее фото не врёт, а показывает блюдо в лучший момент.',
  ),
  steps: [
    {
      text: l('Postavi tanjir pored prozora, svetlo sa strane ili od pozadi.', 'Set the plate by a window, light from the side or behind.', 'Поставь тарелку у окна, свет сбоку или сзади.'),
      params: [l('bez blica', 'no flash', 'без вспышки'), l('ugasi kuhinjsko svetlo', 'turn off the kitchen light', 'выключи кухонный свет')],
      done: l('Jelo ima meke senke na jednoj strani.', 'The dish has soft shadows on one side.', 'У блюда мягкие тени с одной стороны.'),
      why: l('Blic spljošti jelo i napravi masne odsjaje. Kuhinjsko svetlo je žuto i meša se sa dnevnim.', 'Flash flattens the food and makes greasy highlights. Kitchen light is yellow and mixes badly with daylight.', 'Вспышка сплющивает еду и даёт жирные блики. Кухонный свет жёлтый и плохо смешивается с дневным.'),
      drawing: 'photoLight',
    },
    {
      text: l('Belim papirom sa suprotne strane posvetli senke.', 'Use the white paper on the opposite side to lift the shadows.', 'Белой бумагой с противоположной стороны осветли тени.'),
      done: l('Senke su mekše, a jelo se vidi sa obe strane.', 'The shadows are softer and the dish shows on both sides.', 'Тени мягче, блюдо видно с обеих сторон.'),
      why: l('Papir odbija svetlo nazad na jelo. To je reflektor koji košta nula dinara.', 'The paper bounces light back onto the food. It is a reflector that costs nothing.', 'Бумага отражает свет обратно на блюдо. Это отражатель, который ничего не стоит.'),
    },
    {
      text: l('Izaberi ugao po jelu: 45° za visoka, odozgo za ravna.', 'Choose the angle by the dish: 45° for tall ones, overhead for flat ones.', 'Выбирай угол по блюду: 45° для высоких, сверху для плоских.'),
      params: [l('burger, kolač: 45°', 'burger, cake: 45°', 'бургер, торт: 45°'), l('pica, meze, salata: odozgo', 'pizza, meze, salad: overhead', 'пицца, мезе, салат: сверху')],
      done: l('Fotografija pokazuje ono najvažnije: visinu ili raspored.', 'The photo shows what matters most: height or arrangement.', 'Фото показывает главное: высоту или раскладку.'),
      drawing: 'photoAngle',
    },
    {
      text: l('Fokusiraj na glavni deo jela i snimi brzo.', 'Focus on the main element and shoot quickly.', 'Сфокусируйся на главном элементе и снимай быстро.'),
      params: [l('prvih 60 s', 'the first 60 s', 'первые 60 с')],
      done: l('Sos još sija, a para se diže.', 'The sauce still shines and steam is rising.', 'Соус ещё блестит, пар поднимается.'),
      why: l('Posle minuta sos se stegne i izgubi sjaj, a bilje uvene. Jelo na fotografiji se ohladi brže nego u stvarnosti.', 'After a minute the sauce sets and loses its shine and the herbs wilt. Food on camera goes cold faster than in real life.', 'Через минуту соус схватывается и теряет блеск, травы вянут. Еда на фото остывает быстрее, чем в жизни.'),
    },
    {
      text: l('Ne koristi filtere koji menjaju boju hrane.', 'Do not use filters that change the colour of the food.', 'Не используй фильтры, которые меняют цвет еды.'),
      params: [l('samo svetlina i oštrina', 'only brightness and sharpness', 'только яркость и резкость')],
      done: l('Boje na fotografiji su iste kao na tanjiru.', 'The colours in the photo match the plate.', 'Цвета на фото такие же, как на тарелке.'),
      why: l('Plavi biftek ili narandžasta salata ne izgledaju ukusno. Hrana mora da izgleda kao hrana.', 'A blue steak or an orange salad does not look appetising. Food has to look like food.', 'Синий стейк или оранжевый салат не выглядят аппетитно. Еда должна выглядеть как еда.'),
    },
  ],
  mistake: {
    title: l('Fotografisanje uveče, pod kuhinjskom lampom, sa blicem.', 'Shooting at night, under the kitchen lamp, with flash.', 'Съёмка вечером под кухонной лампой со вспышкой.'),
    fix: l(
      'Jelo izgleda žuto, masno i ravno. Ako nemaš dnevno svetlo, koristi jednu belu lampu sa strane i ugasi ostala svetla. Nikad blic.',
      'The food looks yellow, greasy and flat. Without daylight, use a single white lamp from the side and turn off the other lights. Never flash.',
      'Еда выглядит жёлтой, жирной и плоской. Если нет дневного света, используй одну белую лампу сбоку и выключи остальной свет. Никогда — вспышку.',
    ),
  },
  think: {
    question: l('Koji ugao za tanjir mezea (2.12.4)?', 'Which angle for a plate of meze (2.12.4)?', 'Какой угол для тарелки мезе (2.12.4)?'),
    options: [
      l('Odozgo, da se vide sva tri', 'Overhead, so all three show', 'Сверху, чтобы были видны все три'),
      l('Sa strane, u nivou stola', 'From the side, at table level', 'Сбоку, на уровне стола'),
      l('45°', '45°', '45°'),
    ],
    answer: 0,
    explain: l(
      'Meze je ravno jelo koje priča kroz raspored i boje. Odozgo se vidi celo. Za burger ili kolač, gde je visina poenta, 45°.',
      'Meze is a flat dish that tells its story through arrangement and colour. From above you see it all. For a burger or a cake, where height is the point, 45°.',
      'Мезе — плоское блюдо, которое рассказывает раскладкой и цветом. Сверху видно всё. Для бургера или торта, где важна высота, — 45°.',
    ),
  },
}

export const platingLessons: Lesson[] = [plate, sauce, texture, garnish, photo]
