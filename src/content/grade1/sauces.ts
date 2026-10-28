import { l, type Lesson } from '../types'

// Stock, cream soup, deglazing, béchamel and the two emulsions. Split across modules 3, 8 and 9.

const stock: Lesson = {
  id: '8.1',
  title: l('Pileći fond', 'Chicken stock', 'Куриный бульон'),
  goal: l(
    'Skuvaš bistar pileći fond koji je osnova za supe i sosove.',
    'You make a clear chicken stock that is the base for soups and sauces.',
    'Ты варишь прозрачный куриный бульон — основу для супов и соусов.',
  ),
  minutes: 8,
  key: { value: l('3 h', '3 h', '3 ч'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Pileća krila, leđa ili kosti', 'Chicken wings, backs or bones', 'Куриные крылья, спинки или кости'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Hladna voda', 'Cold water', 'Холодная вода'), qty: l('3 l', '3 l', '3 л') },
    { item: l('Luk, šargarepa, celer', 'Onion, carrot, celery', 'Лук, морковь, сельдерей'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Lonac i cediljka', 'Pot and sieve', 'Кастрюля и сито'), qty: l('5 l', '5 l', '5 л') },
  ],
  why: l(
    'Fond je ono po čemu se restoranska supa razlikuje od kućne. A pravi se od delova koji bi inače bili bačeni.',
    'Stock is what separates a restaurant soup from a home one. And it is made from parts that would otherwise be thrown away.',
    'Бульон — то, чем ресторанный суп отличается от домашнего. А делают его из того, что иначе выбросили бы.',
  ),
  steps: [
    {
      text: l('Stavi kosti u lonac i prelij hladnom vodom.', 'Put the bones in the pot and cover with cold water.', 'Положи кости в кастрюлю и залей холодной водой.'),
      params: [l('1 kg + 3 l', '1 kg + 3 l', '1 кг + 3 л')],
      done: l('Voda prekriva kosti 3–4 cm.', 'The water covers the bones by 3–4 cm.', 'Вода покрывает кости на 3–4 см.'),
      why: l('Iz hladne vode protein izlazi polako i skuplja se u penu koju lako skineš.', 'From cold water the protein comes out slowly and gathers into a foam you can skim off.', 'Из холодной воды белок выходит медленно и собирается в пену, которую легко снять.'),
      drawing: 'coldStart',
    },
    {
      text: l('Zagrej do krčkanja i skidaj penu.', 'Bring to a simmer and skim off the foam.', 'Доведи до томления и снимай пену.'),
      params: [l('85–95°C', '85–95°C', '85–95°C'), l('prvih 20 min', 'first 20 min', 'первые 20 мин')],
      done: l('Na površini više nema sive pene.', 'There is no grey foam left on the surface.', 'На поверхности больше нет серой пены.'),
      why: l('Pena je zgrušan protein. Ako ostane i proključa, fond postane mutan.', 'The foam is set protein. If it stays and boils in, the stock turns cloudy.', 'Пена — свернувшийся белок. Если её оставить и дать прокипеть, бульон помутнеет.'),
      drawing: 'skim',
    },
    {
      text: l('Dodaj krupno isečeno povrće.', 'Add roughly chopped vegetables.', 'Добавь крупно нарезанные овощи.'),
      params: [l('komadi od 4–5 cm', '4–5 cm pieces', 'куски 4–5 см')],
      done: l('Povrće je potopljeno, a voda i dalje samo krčka.', 'The vegetables are submerged and the water still only simmers.', 'Овощи под водой, а вода всё так же лишь томится.'),
      why: l('Krupni komadi daju ukus 3 sata, a ne raspadnu se i ne zamute fond.', 'Large pieces give flavour for 3 hours without falling apart and clouding the stock.', 'Крупные куски отдают вкус 3 часа, не разваливаясь и не мутя бульон.'),
    },
    {
      text: l('Krčkaj fond bez mešanja i bez soli.', 'Simmer the stock without stirring and without salt.', 'Томи бульон, не помешивая и без соли.'),
      params: [l('3 h', '3 h', '3 ч')],
      done: l('Fond je zlatan i bistar, a meso se odvaja od kostiju.', 'The stock is golden and clear, and the meat falls off the bones.', 'Бульон золотистый и прозрачный, мясо отходит от костей.'),
      why: l('Bez soli, jer će se fond kasnije ukuvavati u sosovima. So bi se ukuvala sa njim.', 'No salt, because the stock will be reduced later in sauces. The salt would concentrate with it.', 'Без соли, потому что потом бульон будут уваривать в соусах, и соль сконцентрируется вместе с ним.'),
    },
    {
      text: l('Procedi fond i ohladi ga brzo.', 'Strain the stock and cool it quickly.', 'Процеди бульон и быстро охлади.'),
      params: [l('u plitkim posudama', 'in shallow containers', 'в плоских контейнерах'), l('do 2 sata u frižider', 'into the fridge within 2 hours', 'в холодильник в течение 2 часов')],
      done: l('Ohlađen fond se blago želira.', 'Once cold, the stock sets into a light jelly.', 'Остывший бульон слегка застывает желе.'),
      why: l('Žele je kolagen iz kostiju. To daje telo sosovima. Pravilo hlađenja je iz 1.4.', 'The jelly is collagen from the bones; it gives sauces body. The cooling rule is from 1.4.', 'Желе — коллаген из костей, он даёт соусам тело. Правило охлаждения — из 1.4.'),
    },
  ],
  mistake: {
    title: l('Fond koji ključa.', 'Stock that boils.', 'Бульон, который кипит.'),
    fix: l(
      'Ključanje umeša mast i penu u tečnost i fond postane mutan i mastan. Isto pravilo kao u 4.2: krčka se, ne ključa.',
      'Boiling churns fat and foam into the liquid and the stock goes cloudy and greasy. Same rule as 4.2: simmer, do not boil.',
      'Кипение вмешивает жир и пену в жидкость, и бульон становится мутным и жирным. То же правило, что в 4.2: томить, а не кипятить.',
    ),
  },
  think: {
    question: l('Zašto fond kreće iz hladne vode?', 'Why does stock start in cold water?', 'Почему бульон начинают с холодной воды?'),
    options: [
      l('Protein izlazi polako i skuplja se u penu na površini', 'The protein comes out slowly and collects as foam on top', 'Белок выходит медленно и собирается пеной на поверхности'),
      l('Brže proključa', 'It boils faster', 'Быстрее закипает'),
      l('Kosti postanu mekše', 'The bones get softer', 'Кости становятся мягче'),
    ],
    answer: 0,
    explain: l(
      'U vreloj vodi protein se zgruša odmah, sitno, i ostane rasut po fondu. Iz hladne vode se skupi gore i skineš ga kašikom.',
      'In hot water the protein sets at once into tiny bits that stay scattered in the stock. From cold water it gathers on top and you lift it off with a ladle.',
      'В горячей воде белок сразу сворачивается мелкими частицами и остаётся по всему бульону. Из холодной он собирается наверху, и его снимают ложкой.',
    ),
  },
}

const creamSoup: Lesson = {
  id: '8.6',
  title: l('Potaž: krem supa od povrća', 'Potage: vegetable cream soup', 'Потаж: овощной крем-суп'),
  goal: l(
    'Skuvaš glatku krem supu od šargarepe, bez pavlake i brašna.',
    'You make a smooth carrot cream soup, with no cream or flour.',
    'Ты варишь гладкий крем-суп из моркови без сливок и муки.',
  ),
  minutes: 7,
  key: { value: l('20 min', '20 min', '20 мин'), label: l('kuvanje', 'cooking', 'варка') },
  need: [
    { item: l('Šargarepa', 'Carrots', 'Морковь'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Crni luk', 'Onion', 'Репчатый лук'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('20 g', '20 g', '20 г') },
    { item: l('Pileći fond ili voda', 'Chicken stock or water', 'Куриный бульон или вода'), qty: l('800 ml', '800 ml', '800 мл') },
    { item: l('Štapni blender', 'Stick blender', 'Погружной блендер'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kremastost ne dolazi od pavlake, nego od samog povrća. Isti postupak radi za tikvu, karfiol, grašak ili brokoli.',
    'The creaminess comes from the vegetable itself, not from cream. The same method works for squash, cauliflower, peas or broccoli.',
    'Кремовость даёт сам овощ, а не сливки. Тот же способ работает с тыквой, цветной капустой, горошком или брокколи.',
  ),
  steps: [
    {
      text: l('Dinstaj luk na puteru, bez boje.', 'Sweat the onion in butter, without colour.', 'Потоми лук на сливочном масле, не давая зарумяниться.'),
      params: [l('tiha vatra', 'low heat', 'слабый огонь'), l('5–7 min', '5–7 min', '5–7 мин')],
      done: l('Luk je mekan i providan, a ne zlatan.', 'The onion is soft and translucent, not golden.', 'Лук мягкий и прозрачный, а не золотистый.'),
      why: l('Zlatni luk bi zamutio boju i dodao gorčinu. Ovde hoćemo samo slatkoću.', 'Golden onion would muddy the colour and add bitterness. Here we only want sweetness.', 'Золотистый лук испортил бы цвет и добавил горечи. Здесь нужна только сладость.'),
    },
    {
      text: l('Dodaj šargarepu u kolutovima i prstohvat soli.', 'Add sliced carrots and a pinch of salt.', 'Добавь морковь кружками и щепотку соли.'),
      params: [l('kolutovi 1 cm', '1 cm rounds', 'кружки 1 см'), l('3 min', '3 min', '3 мин')],
      done: l('Šargarepa je sjajna od putera.', 'The carrots are glossy with butter.', 'Морковь блестит от масла.'),
    },
    {
      text: l('Prelij fondom da prekrije povrće i kuvaj.', 'Pour in stock to cover the vegetables and cook.', 'Залей бульоном так, чтобы покрыл овощи, и вари.'),
      params: [l('1 cm iznad povrća', '1 cm above the vegetables', 'на 1 см выше овощей'), l('20 min', '20 min', '20 мин')],
      done: l('Šargarepa se lako zgnječi kašikom o ivicu šerpe.', 'A carrot crushes easily with a spoon against the side of the pan.', 'Морковь легко раздавить ложкой о стенку.'),
      why: l('Ostatak fonda čuvaj. Njime ćeš podesiti gustinu.', 'Keep the rest of the stock. You will adjust the thickness with it.', 'Остаток бульона сохрани — им отрегулируешь густоту.'),
    },
    {
      text: l('Izblendaj supu dok ne bude potpuno glatka.', 'Blend the soup until completely smooth.', 'Пробей суп блендером до полной гладкости.'),
      params: [l('2 min', '2 min', '2 мин')],
      done: l('Kad prevučeš kašikom, nema nijednog komadića.', 'Drawn over the back of a spoon, it shows no bits at all.', 'На ложке не видно ни одного кусочка.'),
      drawing: 'blend',
    },
    {
      text: l('Podesi gustinu fondom, pa so i kap limuna.', 'Adjust the thickness with stock, then salt and a squeeze of lemon.', 'Отрегулируй густоту бульоном, затем соль и капля лимона.'),
      done: l('Supa sporo curi sa kašike i ukus je jasan.', 'The soup runs slowly off a spoon and the flavour is clear.', 'Суп медленно стекает с ложки, вкус ясный.'),
      why: l('Redosled iz 5.5: prvo so, pa kiselina.', 'The order from 5.5: salt first, then acid.', 'Порядок из 5.5: сначала соль, потом кислота.'),
    },
  ],
  mistake: {
    title: l('Sav fond odjednom.', 'All the stock at once.', 'Весь бульон сразу.'),
    fix: l(
      'Supa ispadne retka kao čaj, a vode ne možeš da izvadiš. Sipaj taman da prekrije povrće, a ostatak dodaj posle blendanja.',
      'The soup ends up thin as tea and you cannot take water out. Pour just enough to cover, and add the rest after blending.',
      'Суп выходит жидким, как чай, а воду обратно не уберёшь. Налей ровно, чтобы покрыть овощи, остальное добавь после блендера.',
    ),
  },
  think: {
    question: l('Odakle krem supi kremastost bez pavlake?', 'Where does a cream soup get its creaminess without cream?', 'Откуда у крем-супа кремовость без сливок?'),
    options: [
      l('Od skroba i vlakana povrća koja blender usitni', 'From the vegetable’s starch and fibre, broken down by the blender', 'Из крахмала и клетчатки овоща, измельчённых блендером'),
      l('Od putera sa početka', 'From the butter at the start', 'Из масла в начале'),
      l('Od dugog kuvanja', 'From long cooking', 'От долгой варки'),
    ],
    answer: 0,
    explain: l(
      'Blender razbije ćelije povrća u sitne čestice koje zgusnu tečnost. Što je povrće skrobnije, to je supa gušća.',
      'The blender breaks the vegetable cells into tiny particles that thicken the liquid. The starchier the vegetable, the thicker the soup.',
      'Блендер разбивает клетки овощей на мелкие частицы, которые загущают жидкость. Чем крахмалистее овощ, тем гуще суп.',
    ),
  },
}

const deglaze: Lesson = {
  id: '9.8',
  title: l('Deglaziranje', 'Deglazing', 'Деглазирование'),
  goal: l(
    'Posle pečenja mesa napraviš sos u istom tiganju, za 3 minuta.',
    'After cooking meat you make a sauce in the same pan, in 3 minutes.',
    'После жарки мяса ты делаешь соус в той же сковороде за 3 минуты.',
  ),
  minutes: 6,
  key: { value: l('½', '½', '½'), label: l('ukuvavanje', 'reduction', 'уваривание') },
  need: [
    { item: l('Tiganj u kom je pečeno meso', 'The pan the meat was cooked in', 'Сковорода, где жарилось мясо'), qty: l('1', '1', '1') },
    { item: l('Fond, vino ili voda', 'Stock, wine or water', 'Бульон, вино или вода'), qty: l('150 ml', '150 ml', '150 мл') },
    { item: l('Hladan puter', 'Cold butter', 'Холодное сливочное масло'), qty: l('20 g', '20 g', '20 г') },
    { item: l('Drvena varjača', 'Wooden spoon', 'Деревянная ложка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Smeđi sloj na dnu tiganja je najkoncentrovaniji ukus u celom jelu. Deglaziranje ga pretvori u sos.',
    'The brown layer on the bottom of the pan is the most concentrated flavour in the whole dish. Deglazing turns it into sauce.',
    'Коричневый слой на дне сковороды — самый концентрированный вкус всего блюда. Деглазирование превращает его в соус.',
  ),
  steps: [
    {
      text: l('Izvadi meso da odmara i odlij višak masti.', 'Take the meat out to rest and pour off excess fat.', 'Выложи мясо отдыхать и слей лишний жир.'),
      params: [l('ostavi 1 kašiku', 'leave 1 tbsp', 'оставь 1 ст. л.')],
      done: l('Na dnu je smeđi sloj i samo tanak film masti.', 'The bottom has a brown layer and only a thin film of fat.', 'На дне коричневый слой и лишь тонкая плёнка жира.'),
    },
    {
      text: l('Sipaj tečnost u vreo tiganj i stružeš dno.', 'Pour the liquid into the hot pan and scrape the bottom.', 'Влей жидкость в горячую сковороду и соскреби дно.'),
      params: [l('150 ml', '150 ml', '150 мл')],
      done: l('Smeđi sloj se rastvorio i dno tiganja je čisto.', 'The brown layer has dissolved and the pan bottom is clean.', 'Коричневый слой растворился, дно сковороды чистое.'),
      why: l('Vrela tečnost odlepi ono što se zalepilo. To je ukus mesa, ne zagorelo.', 'Hot liquid lifts what has stuck. That is meat flavour, not burnt bits.', 'Горячая жидкость отделяет прилипшее. Это вкус мяса, а не пригар.'),
      drawing: 'deglaze',
    },
    {
      text: l('Ukuvaj tečnost na pola.', 'Reduce the liquid by half.', 'Уварь жидкость наполовину.'),
      params: [l('150 → 75 ml', '150 → 75 ml', '150 → 75 мл'), l('2 min', '2 min', '2 мин')],
      done: l('Mehurići su sitniji i sporiji, a sos sjajniji.', 'The bubbles are smaller and slower, and the sauce glossier.', 'Пузыри мельче и медленнее, соус блестит.'),
      why: l('Voda isparava, a ukus ostaje. Isto kao poklopac u 4.1, samo naopako.', 'The water evaporates and the flavour stays. Like the lid in 4.1, in reverse.', 'Вода испаряется, вкус остаётся. Как крышка в 4.1, только наоборот.'),
    },
    {
      text: l('Skloni tiganj i umešaj hladan puter, kocku po kocku.', 'Take the pan off the heat and swirl in cold butter, a cube at a time.', 'Сними сковороду с огня и вмешай холодное масло по кубику.'),
      params: [l('20 g', '20 g', '20 г'), l('van vatre', 'off the heat', 'вне огня')],
      done: l('Sos je gust, sjajan i ne odvaja mast.', 'The sauce is thick, glossy and does not split.', 'Соус густой, блестящий и не расслаивается.'),
      why: l('Hladan puter van vatre se veže sa tečnošću. Na vatri bi se samo otopio u masnu baricu.', 'Cold butter off the heat binds with the liquid. On the heat it would just melt into a greasy pool.', 'Холодное масло вне огня связывается с жидкостью. На огне оно просто растаяло бы в жирную лужу.'),
    },
    {
      text: l('Proveri da li sos prekriva kašiku.', 'Check that the sauce coats a spoon.', 'Проверь, обволакивает ли соус ложку.'),
      done: l('Kad prevučeš prstom preko kašike, trag ostaje čist.', 'When you run a finger across the spoon, the line stays clean.', 'Если провести пальцем по ложке, след остаётся чистым.'),
      why: l('To je gustina sosa u svakoj kuhinji na svetu.', 'That is sauce thickness in every kitchen in the world.', 'Это густота соуса на любой кухне мира.'),
      drawing: 'coatSpoon',
    },
  ],
  mistake: {
    title: l('Zagoreo tiganj zamenjen za fond.', 'Burnt pan mistaken for fond.', 'Пригоревшая сковорода вместо поджарки.'),
    fix: l(
      'Smeđe je ukus, crno je gorko. Ako je dno crno, sos će biti gorak. Operi tiganj i sos napravi posebno.',
      'Brown is flavour, black is bitter. If the bottom is black the sauce will be bitter. Wash the pan and make the sauce separately.',
      'Коричневое — это вкус, чёрное — горечь. Если дно чёрное, соус будет горьким. Помой сковороду и сделай соус отдельно.',
    ),
  },
  think: {
    question: l('Zašto se puter dodaje hladan i van vatre?', 'Why is the butter added cold and off the heat?', 'Почему масло добавляют холодным и вне огня?'),
    options: [
      l('Polako se topi i veže sa tečnošću u gust sos', 'It melts slowly and binds with the liquid into a thick sauce', 'Оно тает медленно и связывается с жидкостью в густой соус'),
      l('Da ne zagori', 'So it does not burn', 'Чтобы не сгорело'),
      l('Tako je manje masno', 'It is less greasy that way', 'Так менее жирно'),
    ],
    answer: 0,
    explain: l(
      'Puter je mast, voda i proteini. Kad se topi polako, proteini drže kapljice masti u vodi. Na vatri se raspadne pre nego što se veže.',
      'Butter is fat, water and proteins. Melting slowly, the proteins hold the fat droplets in the water. On the heat it splits before it can bind.',
      'Масло — это жир, вода и белки. При медленном таянии белки удерживают капли жира в воде. На огне оно расслаивается раньше, чем свяжется.',
    ),
  },
}

const bechamel: Lesson = {
  id: '9.1',
  title: l('Bešamel', 'Béchamel', 'Бешамель'),
  goal: l(
    'Napraviš glatak bešamel bez grudvica.',
    'You make a smooth béchamel with no lumps.',
    'Ты готовишь гладкий бешамель без комочков.',
  ),
  minutes: 7,
  key: { value: l('1 : 1 : 16', '1 : 1 : 16', '1 : 1 : 16'), label: l('puter : brašno : mleko', 'butter : flour : milk', 'масло : мука : молоко') },
  need: [
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('30 g', '30 g', '30 г') },
    { item: l('Brašno T-400', 'Plain flour', 'Мука пшеничная'), qty: l('30 g', '30 g', '30 г') },
    { item: l('Mleko, toplo', 'Milk, warm', 'Молоко, тёплое'), qty: l('500 ml', '500 ml', '500 мл') },
    { item: l('Žica za mućenje', 'Whisk', 'Венчик'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Bešamel je osnova za musaku, lazanje i sve gratinirano. Isti postupak sa fondom umesto mleka daje sos za meso.',
    'Béchamel is the base for moussaka, lasagne and anything gratinéed. The same method with stock instead of milk makes a sauce for meat.',
    'Бешамель — основа мусаки, лазаньи и всего запечённого. Тот же способ с бульоном вместо молока даёт соус к мясу.',
  ),
  steps: [
    {
      text: l('Otopi puter i umešaj brašno.', 'Melt the butter and stir in the flour.', 'Растопи масло и вмешай муку.'),
      params: [l('30 g + 30 g', '30 g + 30 g', '30 г + 30 г')],
      done: l('Dobiješ glatku pastu bez suvog brašna.', 'You get a smooth paste with no dry flour.', 'Получается гладкая паста без сухой муки.'),
      why: l('Svaka čestica brašna je obavijena masnoćom, pa se kasnije ne lepi u grudve.', 'Every grain of flour gets coated in fat, so later it does not clump.', 'Каждая частица муки покрывается жиром и потом не слипается в комки.'),
      drawing: 'roux',
    },
    {
      text: l('Prži pastu, mešajući, bez boje.', 'Cook the paste, stirring, without colour.', 'Обжаривай пасту, помешивая, не давая цвета.'),
      params: [l('tiha vatra', 'low heat', 'слабый огонь'), l('2 min', '2 min', '2 мин')],
      done: l('Pasta miriše na keks i blago peni, a i dalje je svetla.', 'The paste smells like biscuits and bubbles gently, still pale.', 'Паста пахнет печеньем и слегка пузырится, оставаясь светлой.'),
      why: l('Tako nestane ukus sirovog brašna.', 'This cooks out the raw flour taste.', 'Так уходит вкус сырой муки.'),
    },
    {
      text: l('Dodaj toplo mleko u tri dela, mućenjem.', 'Add the warm milk in three parts, whisking.', 'Добавь тёплое молоко в три приёма, взбивая.'),
      params: [l('3 × ~170 ml', '3 × ~170 ml', '3 × ~170 мл')],
      done: l('Posle svakog dela smesa je glatka pre nego što dodaš sledeći.', 'After each part the mixture is smooth before you add the next.', 'После каждой порции смесь гладкая, прежде чем добавить следующую.'),
      why: l('Malo tečnosti napravi gustu pastu koju lako razmutiš. Sve odjednom pravi grudve.', 'A little liquid makes a thick paste that is easy to smooth. All at once makes lumps.', 'Немного жидкости даёт густую пасту, которую легко разбить. Всё сразу — комки.'),
      drawing: 'whiskMilk',
    },
    {
      text: l('Krčkaj sos uz mešanje.', 'Simmer the sauce, stirring.', 'Томи соус, помешивая.'),
      params: [l('5–8 min', '5–8 min', '5–8 мин')],
      done: l('Sos prekriva kašiku i trag prsta ostaje čist.', 'The sauce coats a spoon and a finger line stays clean.', 'Соус обволакивает ложку, след пальца остаётся чистым.'),
      why: l('Brašno zgušnjava tek kad proključa. Pre toga sos deluje retko.', 'Flour only thickens once it simmers. Before that the sauce looks thin.', 'Мука загущает только после закипания. До этого соус кажется жидким.'),
    },
    {
      text: l('Posoli i dodaj malo muskatnog oraščića.', 'Season with salt and a little nutmeg.', 'Посоли и добавь немного мускатного ореха.'),
      params: [l('prstohvat', 'a pinch', 'щепотка')],
      done: l('Ukus je pun i blag, bez ukusa brašna.', 'The flavour is full and mild, with no taste of flour.', 'Вкус полный и мягкий, без привкуса муки.'),
    },
  ],
  mistake: {
    title: l('Hladno mleko sve odjednom.', 'All the cold milk at once.', 'Всё холодное молоко сразу.'),
    fix: l(
      'Pasta se stegne u grudve koje plivaju u mleku. Mleko zagrej i dodaj ga u delovima. Ako se ipak pojave grudve, procedi sos.',
      'The paste seizes into lumps floating in milk. Warm the milk and add it in parts. If lumps still appear, strain the sauce.',
      'Паста схватывается комками, которые плавают в молоке. Подогрей молоко и добавляй частями. Если комки всё же появились — процеди соус.',
    ),
  },
  think: {
    question: l('Bešamel je posle 1 minuta i dalje redak. Šta radiš?', 'After 1 minute the béchamel is still thin. What do you do?', 'Через минуту бешамель всё ещё жидкий. Что делаешь?'),
    options: [
      l('Krčkaš još, brašno zgušnjava tek posle ključanja', 'Keep simmering; flour only thickens after it boils', 'Томишь дальше: мука загущает только после кипения'),
      l('Dodaš još brašna', 'Add more flour', 'Добавляешь муки'),
      l('Dodaš još putera', 'Add more butter', 'Добавляешь масла'),
    ],
    answer: 0,
    explain: l(
      'Skrob iz brašna mora da proključa da bi nabubrio, kao pirinač u 4.1. Strpljenje pre korekcije, isto kao u 5.5.',
      'The starch in flour has to come to a simmer to swell, like the rice in 4.1. Patience before adjusting, as in 5.5.',
      'Крахмалу муки нужно закипеть, чтобы набухнуть, как рису в 4.1. Терпение до поправок, как в 5.5.',
    ),
  },
}

const emulsions: Lesson = {
  id: '3.2',
  title: l('Vinegret i majonez', 'Vinaigrette and mayonnaise', 'Винегрет и майонез'),
  goal: l(
    'Napraviš vinegret i domaći majonez i razumeš zašto se ulje i voda spoje.',
    'You make a vinaigrette and homemade mayonnaise and understand why oil and water come together.',
    'Ты готовишь заправку винегрет и домашний майонез и понимаешь, почему масло и вода соединяются.',
  ),
  minutes: 8,
  key: { value: l('1 : 3', '1 : 3', '1 : 3'), label: l('sirće : ulje', 'vinegar : oil', 'уксус : масло') },
  need: [
    { item: l('Sirće', 'Vinegar', 'Уксус'), qty: l('20 ml', '20 ml', '20 мл') },
    { item: l('Ulje, neutralno', 'Neutral oil', 'Нейтральное масло'), qty: l('260 ml', '260 ml', '260 мл') },
    { item: l('Senf', 'Mustard', 'Горчица'), qty: l('2 kašičice', '2 tsp', '2 ч. л.') },
    { item: l('Žumance, sveže', 'Egg yolk, fresh', 'Желток, свежий'), qty: l('1', '1', '1') },
    { item: l('Tegla sa poklopcem i činija', 'Jar with lid and a bowl', 'Банка с крышкой и миска'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Ulje i voda se ne mešaju sami. Senf i žumance ih drže zajedno. To je emulzija, isto što drži puter u sosu iz 9.8.',
    'Oil and water do not mix on their own. Mustard and yolk hold them together. That is an emulsion, the same thing that holds the butter in the 9.8 sauce.',
    'Масло и вода сами не смешиваются. Горчица и желток удерживают их вместе. Это эмульсия — то же, что держит масло в соусе из 9.8.',
  ),
  steps: [
    {
      text: l('U teglu stavi sirće, senf i prstohvat soli.', 'Put vinegar, mustard and a pinch of salt in the jar.', 'Положи в банку уксус, горчицу и щепотку соли.'),
      params: [l('20 ml + 1 kašičica', '20 ml + 1 tsp', '20 мл + 1 ч. л.')],
      done: l('So se rastvorila u sirćetu.', 'The salt has dissolved in the vinegar.', 'Соль растворилась в уксусе.'),
      why: l('So se rastvara u sirćetu, a u ulju ne.', 'Salt dissolves in vinegar but not in oil.', 'Соль растворяется в уксусе, а в масле — нет.'),
    },
    {
      text: l('Dodaj ulje, zatvori teglu i protresi.', 'Add the oil, close the jar and shake.', 'Добавь масло, закрой банку и встряхни.'),
      params: [l('60 ml ulja', '60 ml oil', '60 мл масла'), l('1 : 3', '1 : 3', '1 : 3'), l('15 s', '15 s', '15 с')],
      done: l('Vinegret je mutan i jednoličan, bez sloja ulja na vrhu.', 'The vinaigrette is cloudy and even, with no layer of oil on top.', 'Заправка мутная и однородная, без слоя масла сверху.'),
      why: l('Senf drži kapljice ulja u sirćetu. Bez njega se razdvoje za minut.', 'Mustard holds the oil droplets in the vinegar. Without it they separate within a minute.', 'Горчица удерживает капли масла в уксусе. Без неё они разделятся за минуту.'),
      drawing: 'jarRatio',
    },
    {
      text: l('Za majonez umuti žumance sa senfom u činiji.', 'For mayonnaise, whisk the yolk with mustard in a bowl.', 'Для майонеза взбей желток с горчицей в миске.'),
      params: [l('1 žumance + 1 kašičica', '1 yolk + 1 tsp', '1 желток + 1 ч. л.')],
      done: l('Smesa je glatka i svetlija.', 'The mixture is smooth and slightly paler.', 'Смесь гладкая и немного светлее.'),
      why: l('Žumance je najjači prirodni emulgator u kuhinji.', 'Egg yolk is the strongest natural emulsifier in the kitchen.', 'Желток — самый сильный природный эмульгатор на кухне.'),
    },
    {
      text: l('Dodaj ulje kap po kap, stalno mućenjem.', 'Add the oil drop by drop, whisking all the time.', 'Добавляй масло по капле, всё время взбивая.'),
      params: [l('prvih 50 ml kap po kap', 'first 50 ml drop by drop', 'первые 50 мл по капле'), l('ostatak u tankom mlazu', 'the rest in a thin stream', 'остальное тонкой струйкой')],
      done: l('Smesa se zgusne i postane neprozirna pre nego što pređeš na mlaz.', 'The mixture thickens and turns opaque before you switch to a stream.', 'Смесь густеет и становится непрозрачной, прежде чем перейти на струйку.'),
      why: l('Na početku žumance može da primi samo malo ulja odjednom. Kad se emulzija napravi, prima brže.', 'At first the yolk can take only a little oil at a time. Once the emulsion forms, it takes it faster.', 'Сначала желток принимает лишь немного масла за раз. Когда эмульсия образовалась, он принимает быстрее.'),
      drawing: 'emulsion',
    },
    {
      text: l('Završi kašičicom limuna i solju.', 'Finish with a teaspoon of lemon and salt.', 'Заверши ложечкой лимона и солью.'),
      params: [l('200 ml ulja ukupno', '200 ml oil in total', 'всего 200 мл масла')],
      done: l('Majonez stoji na kašici kad je okreneš.', 'The mayonnaise stays on the spoon when you turn it over.', 'Майонез держится на перевёрнутой ложке.'),
      why: l('Domaći majonez sa sirovim žumancetom čuvaj u frižideru i potroši za 2 dana.', 'Homemade mayonnaise with raw yolk goes in the fridge and must be used within 2 days.', 'Домашний майонез с сырым желтком храни в холодильнике и используй в течение 2 дней.'),
    },
  ],
  mistake: {
    title: l('Ulje prebrzo na početku.', 'Oil too fast at the start.', 'Масло слишком быстро в начале.'),
    fix: l(
      'Majonez se „preseče“ i postane retka, masna tečnost. Spas: novo žumance u čistoj činiji, pa u njega kap po kap preseceni majonez.',
      'The mayonnaise splits into a thin, greasy liquid. The rescue: a new yolk in a clean bowl, then whisk the split mayonnaise into it drop by drop.',
      'Майонез расслаивается в жидкую жирную массу. Спасение: новый желток в чистой миске и по капле вмешать в него расслоившийся майонез.',
    ),
  },
  think: {
    question: l('Šta tačno radi senf u vinegretu?', 'What exactly does mustard do in a vinaigrette?', 'Что именно делает горчица в заправке?'),
    options: [
      l('Drži kapljice ulja raspoređene u sirćetu', 'It keeps the oil droplets spread through the vinegar', 'Удерживает капли масла распределёнными в уксусе'),
      l('Samo daje ukus', 'It only adds flavour', 'Только даёт вкус'),
      l('Čini vinegret kiselijim', 'It makes it more sour', 'Делает заправку кислее'),
    ],
    answer: 0,
    explain: l(
      'Jedna strana molekula iz senfa voli vodu, druga ulje. Oni se postave između kapljica i ne daju im da se spoje. To je emulzija.',
      'One end of the molecules in mustard likes water, the other likes oil. They sit between the droplets and stop them joining up. That is an emulsion.',
      'Один конец молекул горчицы любит воду, другой — масло. Они встают между каплями и не дают им слиться. Это и есть эмульсия.',
    ),
  },
}

// Written before the course was split into soups and sauces; the lessons now live in three modules.
export const soupBaseLessons: Lesson[] = [stock, creamSoup]
export const sauceBaseLessons: Lesson[] = [bechamel, deglaze]
export const dressingBaseLesson: Lesson = emulsions
