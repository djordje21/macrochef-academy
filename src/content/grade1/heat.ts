import { l, type Lesson } from '../types'

// Module 4 · Heat. The module where the course teaches thinking: every lesson ties what the cook
// sees in the pan to what heat does to proteins, starch and water.

const basics: Lesson = {
  id: '4.1',
  title: l('Šta toplota radi hrani', 'What heat does to food', 'Что огонь делает с едой'),
  goal: l(
    'Vidiš svojim očima tri stvari koje toplota radi: proteini se stežu, skrob bubri, voda isparava.',
    'You see with your own eyes the three things heat does: proteins set, starch swells, water evaporates.',
    'Ты своими глазами видишь три вещи, которые делает нагрев: белки сворачиваются, крахмал набухает, вода испаряется.',
  ),
  minutes: 6,
  key: { value: l('100°C', '100°C', '100°C'), label: l('granica vode', 'water’s limit', 'предел воды') },
  need: [
    { item: l('Jaje', 'Egg', 'Яйцо'), qty: l('1', '1', '1') },
    { item: l('Pirinač', 'Rice', 'Рис'), qty: l('50 g', '50 g', '50 г') },
    { item: l('Kriška hleba', 'Slice of bread', 'Ломтик хлеба'), qty: l('1', '1', '1') },
    { item: l('Tiganj i šerpa', 'Pan and saucepan', 'Сковорода и сотейник'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Svaki recept na svetu je kombinacija ove tri stvari. Kad ih vidiš, recepti prestaju da budu magija.',
    'Every recipe in the world is a mix of these three things. Once you see them, recipes stop being magic.',
    'Любой рецепт в мире — сочетание этих трёх вещей. Когда ты их видишь, рецепты перестают быть магией.',
  ),
  steps: [
    {
      text: l(
        'Razbij jaje u tiganj na tihoj vatri i gledaj belance.',
        'Crack an egg into a pan over low heat and watch the white.',
        'Разбей яйцо на сковороду на слабом огне и смотри на белок.',
      ),
      params: [l('tiha vatra', 'low heat', 'слабый огонь'), l('3–4 min', '3–4 min', '3–4 мин')],
      done: l(
        'Providno belance postane belo i čvrsto, od ivice ka žumancetu.',
        'The clear white turns white and firm, from the edge towards the yolk.',
        'Прозрачный белок становится белым и плотным, от края к желтку.',
      ),
      why: l(
        'Proteini se pod toplotom stežu i istiskuju vodu. Isto se dešava mesu i ribi.',
        'Heat makes proteins tighten and squeeze out water. The same happens to meat and fish.',
        'При нагреве белки сжимаются и выдавливают воду. То же происходит с мясом и рыбой.',
      ),
      drawing: 'eggSet',
    },
    {
      text: l(
        'Skuvaj pirinač u vodi i uporedi jedno zrno sa sirovim.',
        'Boil the rice in water and compare one grain with a raw one.',
        'Свари рис в воде и сравни одно зерно с сырым.',
      ),
      params: [l('15 min', '15 min', '15 мин')],
      done: l(
        'Kuvano zrno je duplo veće i mekano.',
        'The cooked grain is twice the size and soft.',
        'Сваренное зерно вдвое больше и мягкое.',
      ),
      why: l(
        'Skrob u toploj vodi upija vodu i bubri. Zato se pirinač, testenina i krompir kuvaju u vodi.',
        'In hot water starch soaks up water and swells. That is why rice, pasta and potatoes are cooked in water.',
        'В горячей воде крахмал впитывает воду и набухает. Поэтому рис, пасту и картофель варят в воде.',
      ),
      drawing: 'grainSwell',
    },
    {
      text: l(
        'Podigni poklopac sa šerpe u kojoj ključa voda.',
        'Lift the lid off a saucepan of boiling water.',
        'Подними крышку с сотейника с кипящей водой.',
      ),
      done: l(
        'Na poklopcu su kapi vode.',
        'There are drops of water on the lid.',
        'На крышке капли воды.',
      ),
      why: l(
        'Voda isparava i nosi toplotu sa sobom. Bez poklopca jelo se ukuvava i postaje gušće.',
        'Water evaporates and carries heat away. Without a lid a dish reduces and thickens.',
        'Вода испаряется и уносит тепло. Без крышки блюдо уваривается и густеет.',
      ),
      drawing: 'lidDrops',
    },
    {
      text: l(
        'Stavi krišku hleba u suv, vreo tiganj.',
        'Put a slice of bread in a dry, hot pan.',
        'Положи ломтик хлеба на сухую горячую сковороду.',
      ),
      params: [l('jaka vatra', 'high heat', 'сильный огонь'), l('1 min po strani', '1 min per side', '1 мин с каждой стороны')],
      done: l(
        'Hleb je smeđ i miriše na tost.',
        'The bread is brown and smells of toast.',
        'Хлеб коричневый и пахнет тостом.',
      ),
      why: l(
        'Smeđa boja i miris nastaju tek iznad 140°C, kad na površini više nema vode.',
        'Browning and that smell only happen above 140°C, once the surface has no water left.',
        'Цвет и аромат появляются только выше 140°C, когда на поверхности не осталось воды.',
      ),
      drawing: 'toast',
    },
    {
      text: l(
        'Zapamti: voda staje na 100°C, a tiganj ide preko 200°C.',
        'Remember: water stops at 100°C, a pan goes past 200°C.',
        'Запомни: вода останавливается на 100°C, а сковорода идёт выше 200°C.',
      ),
      params: [l('voda 100°C', 'water 100°C', 'вода 100°C'), l('tiganj 200°C+', 'pan 200°C+', 'сковорода 200°C+')],
      done: l(
        'Znaš zašto kuvano meso nikad nema koricu, a pečeno ima.',
        'You know why boiled meat never has a crust and seared meat does.',
        'Ты знаешь, почему у варёного мяса нет корочки, а у жареного есть.',
      ),
      drawing: 'waterVsPan',
    },
  ],
  mistake: {
    title: l('Jača vatra da bude brže.', 'Higher heat to make it faster.', 'Огонь посильнее, чтобы быстрее.'),
    fix: l(
      'Spolja zagori, unutra ostane sirovo. Toplota putuje kroz hranu svojom brzinom, vatra je ne ubrzava.',
      'The outside burns and the inside stays raw. Heat travels through food at its own pace; a bigger flame does not speed it up.',
      'Снаружи подгорает, внутри остаётся сырым. Тепло идёт внутрь продукта со своей скоростью, и сильный огонь её не ускорит.',
    ),
  },
  think: {
    question: l(
      'Zašto kuvano meso nikad nema zlatnu koricu?',
      'Why does boiled meat never get a golden crust?',
      'Почему у варёного мяса никогда не бывает золотистой корочки?',
    ),
    options: [
      l('Voda ne prelazi 100°C', 'Water never goes above 100°C', 'Вода не нагревается выше 100°C'),
      l('Meso upije previše vode', 'The meat soaks up too much water', 'Мясо впитывает слишком много воды'),
      l('So se rastvori u vodi', 'The salt dissolves in the water', 'Соль растворяется в воде'),
    ],
    answer: 0,
    explain: l(
      'Korici treba više od 140°C. U vodi meso nikad ne pređe 100°C, pa može biti kuvano do kraja, ali nikad zlatno.',
      'A crust needs more than 140°C. In water meat never goes above 100°C, so it can be cooked through but never golden.',
      'Корочке нужно больше 140°C. В воде мясо не нагревается выше 100°C, поэтому оно может свариться, но не станет золотистым.',
    ),
  },
}

const boiling: Lesson = {
  id: '4.2',
  title: l('Kuvanje, krčkanje, blanširanje', 'Boiling, simmering, blanching', 'Варка, томление, бланширование'),
  goal: l(
    'Razlikuješ ključanje i krčkanje po mehurićima i blanširaš boraniju tako da ostane zelena.',
    'You tell boiling from simmering by the bubbles and blanch green beans so they stay green.',
    'Ты отличаешь кипение от томления по пузырькам и бланшируешь стручковую фасоль так, чтобы она осталась зелёной.',
  ),
  minutes: 8,
  key: { value: l('85–95°C', '85–95°C', '85–95°C'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Lonac', 'Pot', 'Кастрюля'), qty: l('5 l', '5 l', '5 л') },
    { item: l('Boranija', 'Green beans', 'Стручковая фасоль'), qty: l('200 g', '200 g', '200 г') },
    { item: l('So', 'Salt', 'Соль'), qty: l('30 g', '30 g', '30 г') },
    { item: l('Činija vode sa ledom', 'Bowl of ice water', 'Миска воды со льдом'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Ista voda, dve temperature, dva sasvim različita rezultata. Ko zna razliku, ne kuva supu koja je mutna.',
    'The same water, two temperatures, two completely different results. If you know the difference, your soup is never cloudy.',
    'Та же вода, две температуры, два совершенно разных результата. Кто знает разницу, у того суп не бывает мутным.',
  ),
  steps: [
    {
      text: l('Zagrej lonac vode do ključanja.', 'Bring a pot of water to the boil.', 'Доведи кастрюлю воды до кипения.'),
      params: [l('3 l', '3 l', '3 л'), l('100°C', '100°C', '100°C')],
      done: l(
        'Krupni mehurići pokrivaju celu površinu i ne nestaju kad promešaš.',
        'Big bubbles cover the whole surface and do not stop when you stir.',
        'Крупные пузыри покрывают всю поверхность и не исчезают, если помешать.',
      ),
      why: l(
        'Ključanje je za testeninu i blanširanje: brzo i burno.',
        'A boil is for pasta and blanching: fast and rough.',
        'Кипение — для пасты и бланширования: быстро и бурно.',
      ),
      drawing: 'boil',
    },
    {
      text: l('Smanji vatru do krčkanja.', 'Turn the heat down to a simmer.', 'Убавь огонь до томления.'),
      params: [l('85–95°C', '85–95°C', '85–95°C')],
      done: l(
        'Sitni mehurići se dižu sa dna, tu i tamo, površina se samo mreška.',
        'Small bubbles rise from the bottom here and there; the surface only shivers.',
        'Мелкие пузырьки поднимаются со дна то тут, то там, поверхность лишь подрагивает.',
      ),
      why: l(
        'Supe, fondovi i meso se krčkaju. Ključanje ih zamuti, a meso steže i suši.',
        'Soups, stocks and meat are simmered. Boiling clouds them and tightens and dries the meat.',
        'Супы, бульоны и мясо томят. Кипение делает их мутными, а мясо сжимает и сушит.',
      ),
      drawing: 'simmer',
    },
    {
      text: l(
        'Vrati na jaku vatru i posoli vodu koja ključa.',
        'Turn the heat back up and salt the boiling water.',
        'Верни сильный огонь и посоли кипящую воду.',
      ),
      params: [l('10 g na 1 l', '10 g per 1 l', '10 г на 1 л')],
      done: l(
        'Voda je blago slana kad je probaš.',
        'The water tastes lightly salted.',
        'Вода на вкус слегка солёная.',
      ),
      why: l(
        'Povrće upije so iz vode. Kasnije je ne možeš ubaciti unutra.',
        'The vegetables take salt from the water. You cannot get it inside later.',
        'Овощи впитывают соль из воды. Потом её внутрь уже не добавишь.',
      ),
    },
    {
      text: l('Ubaci boraniju u vodu koja ključa.', 'Drop the green beans into the boiling water.', 'Опусти фасоль в кипящую воду.'),
      params: [l('2–3 min', '2–3 min', '2–3 мин')],
      done: l(
        'Boranija je jarko zelena i još krcka kad zagrizeš.',
        'The beans are bright green and still crunch when you bite.',
        'Фасоль ярко-зелёная и ещё хрустит на зубах.',
      ),
    },
    {
      text: l(
        'Prebaci boraniju odmah u vodu sa ledom.',
        'Move the beans straight into the ice water.',
        'Сразу переложи фасоль в ледяную воду.',
      ),
      params: [l('1–2 min', '1–2 min', '1–2 мин')],
      done: l(
        'Boranija je hladna do sredine i ostaje zelena.',
        'The beans are cold to the centre and stay green.',
        'Фасоль холодная до середины и остаётся зелёной.',
      ),
      why: l(
        'Led zaustavlja kuvanje. Bez njega boranija se dokuva sama i posivi.',
        'The ice stops the cooking. Without it the beans keep cooking and turn grey.',
        'Лёд останавливает варку. Без него фасоль доходит сама и сереет.',
      ),
      drawing: 'iceBath',
    },
  ],
  mistake: {
    title: l('Supa koja ključa satima.', 'Soup that boils for hours.', 'Суп, который кипит часами.'),
    fix: l(
      'Mast i sitni delići se izmešaju sa vodom, supa postane mutna, a meso suvo. Supa se krčka, ne kuva.',
      'Fat and small particles mix into the water, the soup turns cloudy and the meat goes dry. Soup is simmered, not boiled.',
      'Жир и мелкие частицы смешиваются с водой, суп мутнеет, а мясо сохнет. Суп томят, а не кипятят.',
    ),
  },
  think: {
    question: l(
      'Zašto se testenina kuva u vodi koja ključa, a supa krčka?',
      'Why is pasta boiled while soup is simmered?',
      'Почему пасту варят в кипящей воде, а суп томят?',
    ),
    options: [
      l('Testenina mora brzo i da se ne lepi, supa mora da ostane bistra', 'Pasta needs speed and movement so it does not stick; soup needs to stay clear', 'Пасте нужна скорость и движение, чтобы не слипалась, супу — прозрачность'),
      l('Supa bi iskipela', 'The soup would boil over', 'Суп бы убежал'),
      l('Nema razlike', 'There is no difference', 'Разницы нет'),
    ],
    answer: 0,
    explain: l(
      'Biraj temperaturu prema cilju. Testenini treba pokret vode da se ne slepi. Supi treba mir da ostane bistra, a mesu da ostane sočno.',
      'Choose the temperature by the goal. Pasta needs moving water so it does not stick. Soup needs calm to stay clear and keep the meat juicy.',
      'Выбирай температуру по цели. Пасте нужно движение воды, чтобы не слипалась. Супу нужен покой, чтобы остался прозрачным, а мясо сочным.',
    ),
  },
}

const steam: Lesson = {
  id: '4.3',
  title: l('Para', 'Steam', 'Пар'),
  goal: l(
    'Skuvaš brokoli na pari tako da ostane jarko zelen i čvrst.',
    'You steam broccoli so it stays bright green and firm.',
    'Ты готовишь брокколи на пару так, чтобы она осталась ярко-зелёной и упругой.',
  ),
  minutes: 5,
  key: { value: l('5–6 min', '5–6 min', '5–6 мин'), label: l('brokoli', 'broccoli', 'брокколи') },
  need: [
    { item: l('Šerpa sa poklopcem', 'Saucepan with lid', 'Сотейник с крышкой'), qty: l('1', '1', '1') },
    { item: l('Cediljka ili korpa za paru', 'Colander or steamer basket', 'Дуршлаг или корзинка для пара'), qty: l('1', '1', '1') },
    { item: l('Brokoli', 'Broccoli', 'Брокколи'), qty: l('300 g', '300 g', '300 г') },
  ],
  why: l(
    'Para kuva brzo i nežno, a povrće ne leži u vodi, pa ne gubi ukus ni boju.',
    'Steam cooks quickly and gently, and the vegetables do not sit in water, so they keep their taste and colour.',
    'Пар готовит быстро и бережно, а овощи не лежат в воде и не теряют вкус и цвет.',
  ),
  steps: [
    {
      text: l('Sipaj vodu u šerpu, ispod cediljke.', 'Pour water into the saucepan, below the colander.', 'Налей воду в сотейник, ниже дуршлага.'),
      params: [l('2–3 cm', '2–3 cm', '2–3 см')],
      done: l(
        'Voda ne dodiruje dno cediljke.',
        'The water does not touch the bottom of the colander.',
        'Вода не касается дна дуршлага.',
      ),
      why: l(
        'Povrće koje dodiruje vodu se kuva, ne pari.',
        'Vegetables touching the water are boiled, not steamed.',
        'Овощи, которые касаются воды, варятся, а не готовятся на пару.',
      ),
      drawing: 'steamer',
    },
    {
      text: l(
        'Kad voda proključa, stavi brokoli u jednom sloju.',
        'Once the water boils, add the broccoli in a single layer.',
        'Когда вода закипит, выложи брокколи в один слой.',
      ),
      params: [l('cvetovi od 4 cm', '4 cm florets', 'соцветия по 4 см')],
      done: l(
        'Između cvetova ima prostora.',
        'There is space between the florets.',
        'Между соцветиями есть место.',
      ),
      why: l(
        'Para mora da dopre do svakog komada.',
        'Steam has to reach every piece.',
        'Пар должен доходить до каждого кусочка.',
      ),
    },
    {
      text: l('Poklopi i ne podiži poklopac.', 'Cover and leave the lid on.', 'Накрой крышкой и не поднимай её.'),
      params: [l('5–6 min', '5–6 min', '5–6 мин')],
      done: l(
        'Iz šerpe ravnomerno izlazi para ispod poklopca.',
        'Steam escapes evenly from under the lid.',
        'Из-под крышки равномерно выходит пар.',
      ),
      why: l(
        'Svako otvaranje pusti paru i produži kuvanje za minut.',
        'Every peek lets the steam out and adds a minute.',
        'Каждое открытие выпускает пар и добавляет минуту.',
      ),
    },
    {
      text: l('Proveri stabljiku vrhom noža.', 'Test a stem with the tip of a knife.', 'Проверь стебель кончиком ножа.'),
      done: l(
        'Nož ulazi uz lagan otpor, kao u hladan puter.',
        'The knife goes in with slight resistance, like cold butter.',
        'Нож входит с лёгким сопротивлением, как в холодное масло.',
      ),
    },
    {
      text: l('Izvadi brokoli i posoli ga odmah.', 'Take the broccoli out and salt it straight away.', 'Достань брокколи и сразу посоли.'),
      params: [l('prstohvat soli', 'a pinch of salt', 'щепотка соли')],
      done: l(
        'Brokoli je jarko zelen i sjajan.',
        'The broccoli is bright green and glossy.',
        'Брокколи ярко-зелёная и блестящая.',
      ),
      why: l(
        'Na toplom povrću so se odmah zalepi i rastopi.',
        'On hot vegetables salt sticks and melts right away.',
        'На горячих овощах соль сразу прилипает и тает.',
      ),
    },
  ],
  mistake: {
    title: l('Gomila povrća u cediljki.', 'A heap of vegetables in the colander.', 'Гора овощей в дуршлаге.'),
    fix: l(
      'Donji sloj se prekuva, gornji ostane sirov. Kuvaj u jednom sloju ili u dve ture.',
      'The bottom layer overcooks and the top stays raw. Cook in one layer or in two batches.',
      'Нижний слой переваривается, верхний остаётся сырым. Готовь в один слой или в два захода.',
    ),
  },
  think: {
    question: l(
      'Para i vazduh u rerni imaju istih 100°C. Zašto para kuva mnogo brže?',
      'Steam and oven air are both at 100°C. Why does steam cook much faster?',
      'У пара и воздуха в духовке одинаковые 100°C. Почему пар готовит гораздо быстрее?',
    ),
    options: [
      l('Para je zapravo toplija', 'Steam is actually hotter', 'Пар на самом деле горячее'),
      l('Para se na hrani pretvara u vodu i predaje joj mnogo toplote', 'Steam turns back into water on the food and hands over a lot of heat', 'Пар на продукте снова превращается в воду и отдаёт много тепла'),
      l('Rerna gubi toplotu kroz vrata', 'The oven loses heat through the door', 'Духовка теряет тепло через дверцу'),
    ],
    answer: 1,
    explain: l(
      'Kad se para na hladnom brokoliju pretvori nazad u kapljicu, oslobodi svu toplotu koju je uzela da ispari. Vazduh to ne može.',
      'When steam turns back into a droplet on the cold broccoli, it releases all the heat it took to evaporate. Air cannot do that.',
      'Когда пар на холодной брокколи снова становится каплей, он отдаёт всё тепло, которое ушло на испарение. Воздух так не умеет.',
    ),
  },
}

const oven: Lesson = {
  id: '4.4',
  title: l('Rerna', 'Oven', 'Духовка'),
  goal: l(
    'Ispečeš povrće sa zlatnim ivicama, mekano iznutra.',
    'You roast vegetables with golden edges, soft inside.',
    'Ты запекаешь овощи с золотистыми краями и мягкие внутри.',
  ),
  minutes: 7,
  key: { value: l('220°C', '220°C', '220°C'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('Krompir, šargarepa, tikvica', 'Potato, carrot, courgette', 'Картофель, морковь, кабачок'), qty: l('600 g', '600 g', '600 г') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('2 kašike', '2 tbsp', '2 ст. л.') },
    { item: l('So', 'Salt', 'Соль'), qty: l('5 g', '5 g', '5 г') },
    { item: l('Pleh sa papirom za pečenje', 'Tray with baking paper', 'Противень с пекарской бумагой'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Rerna je tiganj koji greje sa svih strana. Pravila za koricu su ista: suvo, vruće i sa razmakom.',
    'An oven is a pan that heats from every side. The rules for a crust are the same: dry, hot and with space.',
    'Духовка — это сковорода, которая греет со всех сторон. Правила корочки те же: сухо, горячо и с промежутками.',
  ),
  steps: [
    {
      text: l('Zagrej rernu pre nego što uđe povrće.', 'Preheat the oven before the vegetables go in.', 'Разогрей духовку до того, как поставишь овощи.'),
      params: [l('220°C', '220°C', '220°C'), l('15 min', '15 min', '15 мин')],
      done: l(
        'Lampica termostata se ugasila.',
        'The thermostat light has gone off.',
        'Лампочка термостата погасла.',
      ),
      why: l(
        'U hladnoj rerni povrće pusti vodu pre nego što počne da se peče.',
        'In a cold oven the vegetables release water before they start to roast.',
        'В холодной духовке овощи пускают сок раньше, чем начинают запекаться.',
      ),
    },
    {
      text: l('Iseci povrće na iste komade.', 'Cut the vegetables into equal pieces.', 'Нарежь овощи одинаковыми кусками.'),
      params: [l('3 cm', '3 cm', '3 см')],
      done: l(
        'Svi komadi su iste veličine, bez obzira na vrstu.',
        'All pieces are the same size, whatever the vegetable.',
        'Все куски одного размера, независимо от овоща.',
      ),
      why: l('Isti komadi, isto vreme. Lekcija 2.3, samo krupnije.', 'Same pieces, same time. Lesson 2.3, just bigger.', 'Одинаковые куски — одинаковое время. Урок 2.3, только крупнее.'),
    },
    {
      text: l('Prelij povrće uljem, posoli i promešaj rukama.', 'Toss the vegetables with oil and salt using your hands.', 'Полей овощи маслом, посоли и перемешай руками.'),
      params: [l('2 kašike ulja', '2 tbsp oil', '2 ст. л. масла'), l('5 g soli', '5 g salt', '5 г соли')],
      done: l(
        'Svaki komad je sjajan sa svih strana.',
        'Every piece is glossy on all sides.',
        'Каждый кусок блестит со всех сторон.',
      ),
      why: l(
        'Ulje prenosi toplotu sa pleha na povrće i pravi koricu.',
        'Oil carries heat from the tray into the vegetables and makes the crust.',
        'Масло передаёт тепло от противня к овощам и создаёт корочку.',
      ),
    },
    {
      text: l('Rasporedi povrće u jednom sloju, sa razmakom.', 'Spread the vegetables in one layer, with gaps.', 'Разложи овощи в один слой, с промежутками.'),
      params: [l('razmak 1 cm', '1 cm apart', 'промежуток 1 см')],
      done: l(
        'Komadi se ne dodiruju.',
        'The pieces do not touch.',
        'Куски не касаются друг друга.',
      ),
      why: l(
        'Para mora da ima kuda da ode. Zbijeno povrće se kuva u sopstvenoj pari.',
        'Steam needs somewhere to go. Crowded vegetables cook in their own steam.',
        'Пару нужно куда-то уходить. Плотно лежащие овощи тушатся в собственном пару.',
      ),
      drawing: 'traySpacing',
    },
    {
      text: l('Peci i okreni jednom, na pola vremena.', 'Roast and turn once, halfway through.', 'Запекай и переверни один раз, на середине.'),
      params: [l('25–30 min', '25–30 min', '25–30 мин')],
      done: l(
        'Ivice su zlatne, a viljuška ulazi lako.',
        'The edges are golden and a fork goes in easily.',
        'Края золотистые, вилка входит легко.',
      ),
    },
  ],
  mistake: {
    title: l('Pretrpan pleh.', 'An overcrowded tray.', 'Переполненный противень.'),
    fix: l(
      'Povrće pusti vodu, pleh se napuni tečnošću i sve se dinsta umesto da se peče. Uzmi dva pleha.',
      'The vegetables release water, the tray fills with liquid and everything stews instead of roasting. Use two trays.',
      'Овощи пускают сок, противень заполняется жидкостью, и всё тушится вместо запекания. Возьми два противня.',
    ),
  },
  think: {
    question: l(
      'Isto povrće pečeš na 160°C i na 220°C. Šta je razlika?',
      'You roast the same vegetables at 160°C and at 220°C. What is the difference?',
      'Ты запекаешь одни и те же овощи при 160°C и при 220°C. В чём разница?',
    ),
    options: [
      l('Samo vreme pečenja', 'Only the cooking time', 'Только время'),
      l('Na 160°C se dinsta u svom soku, na 220°C dobije koricu', 'At 160°C it stews in its juices, at 220°C it gets a crust', 'При 160°C тушится в своём соку, при 220°C покрывается корочкой'),
      l('Nema razlike', 'There is no difference', 'Разницы нет'),
    ],
    answer: 1,
    explain: l(
      'Na 220°C voda sa površine ispari brzo i površina pređe 140°C. Na 160°C voda izlazi brže nego što isparava.',
      'At 220°C surface water evaporates fast and the surface passes 140°C. At 160°C water comes out faster than it evaporates.',
      'При 220°C вода с поверхности быстро испаряется, и поверхность нагревается выше 140°C. При 160°C влага выходит быстрее, чем испаряется.',
    ),
  },
}

const saute: Lesson = {
  id: '4.5',
  title: l('Tiganj i sotiranje', 'Pan and sautéing', 'Сковорода и соте'),
  goal: l(
    'Sotiraš pečurke tako da budu zlatne i suve, ne sive i vodnjikave.',
    'You sauté mushrooms so they come out golden and dry, not grey and watery.',
    'Ты обжариваешь грибы так, что они получаются золотистыми и сухими, а не серыми и водянистыми.',
  ),
  minutes: 8,
  key: { value: l('250 g', '250 g', '250 г'), label: l('na tiganj 28 cm', 'per 28 cm pan', 'на сковороду 28 см') },
  need: [
    { item: l('Šampinjoni', 'Button mushrooms', 'Шампиньоны'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Tiganj', 'Frying pan', 'Сковорода'), qty: l('28 cm', '28 cm', '28 см') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('So', 'Salt', 'Соль'), qty: l('prstohvat', 'a pinch', 'щепотка') },
  ],
  why: l(
    'Pečurke su 90% voda. Ako ih sotiraš kako treba, sve ostalo u tiganju ti ide lako.',
    'Mushrooms are 90% water. If you can sauté them properly, everything else in a pan is easy.',
    'Грибы на 90% состоят из воды. Если ты умеешь правильно их обжарить, всё остальное на сковороде даётся легко.',
  ),
  steps: [
    {
      text: l('Zagrej suv tiganj.', 'Heat the dry pan.', 'Разогрей сухую сковороду.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь'), l('2 min', '2 min', '2 мин')],
      done: l(
        'Kap vode cvrči i ispari za 1–2 sekunde.',
        'A drop of water sizzles and is gone in 1–2 seconds.',
        'Капля воды шипит и испаряется за 1–2 секунды.',
      ),
      why: l(
        'Hrana u hladnom tiganju se lepi i kuva umesto da se prži.',
        'Food in a cold pan sticks and stews instead of frying.',
        'В холодной сковороде еда прилипает и тушится вместо жарки.',
      ),
      drawing: 'waterDrop',
    },
    {
      text: l('Dodaj ulje i razlij ga po dnu.', 'Add the oil and swirl it over the base.', 'Добавь масло и распредели по дну.'),
      params: [l('1 kašika', '1 tbsp', '1 ст. л.')],
      done: l(
        'Ulje se lako razlije i površina mu zatreperi.',
        'The oil flows easily and its surface starts to shimmer.',
        'Масло легко растекается, и его поверхность начинает дрожать.',
      ),
      why: l(
        'Treperenje znači da je ulje vruće, a dim da je prevruće.',
        'Shimmer means the oil is hot; smoke means too hot.',
        'Дрожание значит, что масло горячее, а дым — что слишком горячее.',
      ),
    },
    {
      text: l('Ubaci pečurke u jednom sloju.', 'Add the mushrooms in a single layer.', 'Выложи грибы в один слой.'),
      params: [l('250 g', '250 g', '250 г'), l('presečene na pola', 'halved', 'разрезанные пополам')],
      done: l(
        'Između pečuraka se vidi dno tiganja.',
        'You can see the pan between the mushrooms.',
        'Между грибами видно дно сковороды.',
      ),
      why: l(
        'Puno pečuraka odjednom ohladi tiganj i on se ne vrati na temperaturu.',
        'Too many mushrooms at once cool the pan and it never gets its heat back.',
        'Слишком много грибов сразу охлаждают сковороду, и она не восстанавливает температуру.',
      ),
      drawing: 'panSpacing',
    },
    {
      text: l('Ne mešaj ih prva tri minuta.', 'Do not stir for the first three minutes.', 'Не мешай первые три минуты.'),
      params: [l('3 min', '3 min', '3 мин')],
      done: l(
        'Kad podigneš jednu, donja strana je zlatna.',
        'When you lift one, the underside is golden.',
        'Если поднять один гриб, нижняя сторона золотистая.',
      ),
      why: l(
        'Korica se pravi samo dok namirnica mirno leži na vrelom dnu.',
        'A crust only forms while the food lies still on the hot base.',
        'Корочка образуется, только пока продукт спокойно лежит на горячем дне.',
      ),
    },
    {
      text: l('Protresi tiganj, peci još malo, pa posoli.', 'Toss the pan, cook a little more, then salt.', 'Встряхни сковороду, пожарь ещё немного, затем посоли.'),
      params: [l('2–3 min', '2–3 min', '2–3 мин')],
      done: l(
        'Pečurke su zlatne, suve i ne puštaju vodu.',
        'The mushrooms are golden, dry and release no water.',
        'Грибы золотистые, сухие и не пускают сок.',
      ),
      why: l(
        'So izvlači vodu. Na početku bi pečurke pustile sok i kuvale se u njemu.',
        'Salt draws out water. Added at the start, it would make the mushrooms release juice and stew in it.',
        'Соль вытягивает воду. В начале грибы пустили бы сок и тушились бы в нём.',
      ),
    },
  ],
  mistake: {
    title: l('Stalno mešanje.', 'Constant stirring.', 'Постоянное помешивание.'),
    fix: l(
      'Svaki put kad ih pomeriš, pečurke krenu ispočetka i nikad ne dobiju boju. Pusti ih da leže.',
      'Every time you move them the mushrooms start over and never take colour. Let them lie.',
      'Каждый раз, когда их двигаешь, грибы начинают заново и не румянятся. Дай им полежать.',
    ),
  },
  think: {
    question: l(
      'Pečurke su pustile vodu i kuvaju se u njoj. Šta je uzrok?',
      'The mushrooms released water and are stewing in it. What caused it?',
      'Грибы пустили сок и тушатся в нём. В чём причина?',
    ),
    options: [
      l('Previše pečuraka ili slaba vatra', 'Too many mushrooms or too little heat', 'Слишком много грибов или слабый огонь'),
      l('Premalo ulja', 'Too little oil', 'Слишком мало масла'),
      l('Loše pečurke', 'Bad mushrooms', 'Плохие грибы'),
    ],
    answer: 0,
    explain: l(
      'Voda izlazi iz pečuraka uvek. Pitanje je da li tiganj ima dovoljno toplote da je ispari odmah. Manje pečuraka ili jača vatra.',
      'Mushrooms always release water. The question is whether the pan has enough heat to evaporate it at once. Fewer mushrooms or more heat.',
      'Грибы всегда отдают воду. Вопрос в том, хватит ли сковороде тепла сразу её испарить. Меньше грибов или сильнее огонь.',
    ),
  },
}

const crust: Lesson = {
  id: '4.6',
  title: l('Zlatna korica', 'The golden crust', 'Золотистая корочка'),
  goal: l(
    'Napraviš tamnozlatnu koricu na komadu mesa i znaš zašto je nastala.',
    'You put a deep golden crust on a piece of meat and know why it formed.',
    'Ты делаешь насыщенную золотистую корочку на куске мяса и знаешь, почему она появилась.',
  ),
  minutes: 7,
  key: { value: l('140°C+', '140°C+', '140°C+'), label: l('površina', 'surface', 'поверхность') },
  need: [
    { item: l('Svinjski kotlet ili pileći file', 'Pork chop or chicken breast', 'Свиная отбивная или куриное филе'), qty: l('2 cm debljine', '2 cm thick', 'толщиной 2 см') },
    { item: l('Papirni ubrus', 'Paper towel', 'Бумажное полотенце'), qty: l('2', '2', '2') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('Termometar', 'Thermometer', 'Термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Korica je ukus. Hemijska reakcija na površini (Maillard) pravi stotine novih ukusa koje kuvano meso nikad nema.',
    'The crust is flavour. A chemical reaction on the surface (Maillard) creates hundreds of new flavours boiled meat never has.',
    'Корочка — это вкус. Химическая реакция на поверхности (Майяра) создаёт сотни новых вкусов, которых нет у варёного мяса.',
  ),
  steps: [
    {
      text: l('Osuši meso papirnim ubrusom.', 'Pat the meat dry with paper towel.', 'Промокни мясо бумажным полотенцем.'),
      done: l(
        'Ubrus ostaje suv kad dodirneš meso.',
        'A fresh towel stays dry when you touch the meat.',
        'Чистое полотенце остаётся сухим, если прикоснуться к мясу.',
      ),
      why: l(
        'Dok na površini ima vode, ona ne prelazi 100°C i korica ne može da počne.',
        'While there is water on the surface it stays at 100°C and the crust cannot start.',
        'Пока на поверхности есть вода, она не нагревается выше 100°C, и корочка не начинается.',
      ),
      drawing: 'patDry',
    },
    {
      text: l('Posoli meso neposredno pre tiganja.', 'Salt the meat right before it goes in the pan.', 'Посоли мясо прямо перед сковородой.'),
      params: [l('1 g na 100 g mesa', '1 g per 100 g of meat', '1 г на 100 г мяса')],
      done: l(
        'So je ravnomerno po obe strane.',
        'The salt is even on both sides.',
        'Соль равномерно лежит с обеих сторон.',
      ),
      why: l(
        'So posle desetak minuta izvuče vodu na površinu. Ili soli odmah pre tiganja, ili bar 40 minuta ranije.',
        'After about ten minutes salt pulls water to the surface. Salt right before the pan, or at least 40 minutes ahead.',
        'Минут через десять соль вытягивает воду на поверхность. Соли прямо перед жаркой или минимум за 40 минут.',
      ),
    },
    {
      text: l('Zagrej tiganj i ulje dok ulje ne zatreperi.', 'Heat the pan and oil until the oil shimmers.', 'Разогрей сковороду с маслом, пока масло не задрожит.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь')],
      done: l(
        'Ulje treperi i pojavi se prvi tanak dim.',
        'The oil shimmers and the first wisp of smoke appears.',
        'Масло дрожит, и появляется первый тонкий дымок.',
      ),
    },
    {
      text: l('Spusti meso od sebe i ne pomeraj ga.', 'Lay the meat down away from you and do not move it.', 'Положи мясо от себя и не двигай его.'),
      params: [l('3 min', '3 min', '3 мин')],
      done: l(
        'Meso se samo odlepi od tiganja kad ga povučeš hvataljkom.',
        'The meat releases from the pan by itself when you nudge it with tongs.',
        'Мясо само отходит от сковороды, если потянуть щипцами.',
      ),
      why: l(
        'Meso se lepi dok korica nije gotova. Kad se odlepi samo, spremno je za okretanje.',
        'Meat sticks until the crust is done. When it lets go on its own, it is ready to turn.',
        'Мясо прилипает, пока корочка не готова. Когда отходит само — пора переворачивать.',
      ),
      drawing: 'searRelease',
    },
    {
      text: l('Okreni jednom i peci do temperature.', 'Turn once and cook to temperature.', 'Переверни один раз и жарь до нужной температуры.'),
      params: [l('svinjetina 63°C', 'pork 63°C', 'свинина 63°C'), l('piletina 74°C', 'chicken 74°C', 'курица 74°C')],
      done: l(
        'Obe strane su tamnozlatne, ne crne, a termometar pokaže cilj.',
        'Both sides are deep golden, not black, and the thermometer shows the target.',
        'Обе стороны насыщенно-золотистые, не чёрные, а термометр показывает нужную цифру.',
      ),
      why: l('Sve temperature su u delu „Mere i temperature“.', 'All temperatures are in “Measures and temperatures”.', 'Все температуры есть в разделе «Меры и температуры».'),
    },
  ],
  mistake: {
    title: l('Mokro meso pravo iz frižidera u tiganj.', 'Wet meat straight from the fridge into the pan.', 'Мокрое мясо прямо из холодильника на сковороду.'),
    fix: l(
      'Voda sa površine ohladi tiganj i meso bude sivo, kuvano u pari. Osuši ga ubrusom, i to je pola posla.',
      'The surface water cools the pan and the meat turns grey, steamed. Pat it dry and half the job is done.',
      'Вода с поверхности охлаждает сковороду, и мясо получается серым, будто сваренным на пару. Промокни его — и половина дела сделана.',
    ),
  },
  think: {
    question: l(
      'Zašto se meso „samo odlepi“ kad je korica gotova?',
      'Why does the meat "let go" by itself once the crust is done?',
      'Почему мясо «само отходит», когда корочка готова?',
    ),
    options: [
      l('Proteini na površini se stegnu i otpuste dno', 'The surface proteins tighten and release the pan', 'Белки на поверхности сжимаются и отпускают дно'),
      l('Ulje proključa', 'The oil boils', 'Масло закипает'),
      l('Meso se skupi', 'The meat shrinks', 'Мясо уменьшается'),
    ],
    answer: 0,
    explain: l(
      'Sirovi proteini se lepe za vrelo dno. Kad se stegnu i osuše u koricu, više nemaju čime da se drže. Tiganj ti sam kaže kad je vreme.',
      'Raw proteins stick to a hot base. Once they tighten and dry into a crust, they have nothing left to hold on with. The pan tells you when it is time.',
      'Сырые белки прилипают к горячему дну. Когда они сжимаются и подсыхают в корочку, им больше нечем держаться. Сковорода сама подскажет, когда пора.',
    ),
  },
}

export const heatLessons: Lesson[] = [basics, boiling, steam, oven, saute, crust]
