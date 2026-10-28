import { l, type Lesson } from '../types'

// Module 10 · Rice, pasta, potatoes. Starch from lesson 4.1 in practice: how much water it takes,
// when it is done, and how not to turn it into glue.

const rice: Lesson = {
  id: '10.1',
  title: l('Pirinač', 'Rice', 'Рис'),
  goal: l(
    'Skuvaš pirinač čija su zrna mekana i odvojena, a ne lepljiva.',
    'You cook rice with soft, separate grains, not a sticky mass.',
    'Ты варишь рис с мягкими, отдельными зёрнами, а не липкую массу.',
  ),
  minutes: 6,
  key: { value: l('1 : 1,5', '1 : 1.5', '1 : 1,5'), label: l('pirinač : voda', 'rice : water', 'рис : вода') },
  need: [
    { item: l('Dugozrni pirinač', 'Long-grain rice', 'Длиннозёрный рис'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Voda', 'Water', 'Вода'), qty: l('300 ml', '300 ml', '300 мл') },
    { item: l('Šerpa sa poklopcem koji dobro naleže', 'Saucepan with a tight-fitting lid', 'Сотейник с плотной крышкой'), qty: l('2 l', '2 l', '2 л') },
    { item: l('Cediljka', 'Sieve', 'Сито'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kad je odnos vode tačan, pirinač upije svu vodu i nema ceđenja ni pogađanja.',
    'When the water ratio is right, the rice absorbs all of it, with no draining and no guessing.',
    'Когда соотношение воды верное, рис впитывает её всю, без слива и угадывания.',
  ),
  steps: [
    {
      text: l('Ispiraj pirinač u cediljci dok voda ne bude bistra.', 'Rinse the rice in a sieve until the water runs clear.', 'Промывай рис в сите, пока вода не станет прозрачной.'),
      params: [l('3–4 puta', '3–4 times', '3–4 раза')],
      done: l('Voda ispod cediljke je skoro providna.', 'The water under the sieve is almost clear.', 'Вода под ситом почти прозрачная.'),
      why: l('Mutna voda je skrob sa površine zrna. On lepi zrna jedno za drugo.', 'The cloudy water is starch from the grain surface. It glues the grains together.', 'Мутная вода — крахмал с поверхности зёрен. Он склеивает их друг с другом.'),
      drawing: 'rinseRice',
    },
    {
      text: l('Stavi pirinač, vodu i so u šerpu i proključaj.', 'Put rice, water and salt in the pan and bring to the boil.', 'Положи рис, воду и соль в сотейник и доведи до кипения.'),
      params: [l('200 g + 300 ml', '200 g + 300 ml', '200 г + 300 мл'), l('3 g soli', '3 g salt', '3 г соли')],
      done: l('Voda ključa preko cele površine.', 'The water boils across the whole surface.', 'Вода кипит по всей поверхности.'),
    },
    {
      text: l('Poklopi, smanji na najtišu vatru i ne otvaraj.', 'Cover, turn to the lowest heat and do not open.', 'Накрой крышкой, убавь до минимума и не открывай.'),
      params: [l('15 min', '15 min', '15 мин')],
      done: l('Prošlo je 15 minuta, a poklopac nijednom nije podignut.', '15 minutes have passed without lifting the lid once.', 'Прошло 15 минут, а крышку ни разу не подняли.'),
      why: l('Pirinač se kuva u pari pod poklopcem. Svako otvaranje je pušta, kao u 4.3.', 'The rice cooks in the steam under the lid. Every peek lets it out, as in 4.3.', 'Рис доходит в пару под крышкой. Каждое открытие выпускает пар, как в 4.3.'),
      drawing: 'lidOn',
    },
    {
      text: l('Skloni sa vatre i ostavi poklopljeno.', 'Take off the heat and leave covered.', 'Сними с огня и оставь под крышкой.'),
      params: [l('10 min', '10 min', '10 мин')],
      done: l('Na dnu nema vode, a površina ima male rupice.', 'There is no water at the bottom and the surface has small holes.', 'На дне нет воды, а на поверхности маленькие отверстия.'),
      why: l('Vlaga se izjednači, pa zrna na dnu nisu mokra, a gornja nisu tvrda.', 'The moisture evens out, so the bottom grains are not wet and the top ones not hard.', 'Влага выравнивается: нижние зёрна не мокрые, верхние не твёрдые.'),
    },
    {
      text: l('Rastresi pirinač viljuškom.', 'Fluff the rice with a fork.', 'Разрыхли рис вилкой.'),
      done: l('Zrna su odvojena i mekana.', 'The grains are separate and soft.', 'Зёрна отдельные и мягкие.'),
    },
  ],
  mistake: {
    title: l('Mešanje pirinča dok se kuva.', 'Stirring the rice while it cooks.', 'Помешивать рис во время варки.'),
    fix: l(
      'Mešanje oslobodi skrob iz zrna i pirinač postane lepljiv. Mešanje je za rizoto (10.5), ne za prilog.',
      'Stirring releases starch from the grains and the rice turns sticky. Stirring is for risotto (10.5), not for a side.',
      'Помешивание освобождает крахмал, и рис становится липким. Мешают ризотто (10.5), а не гарнир.',
    ),
  },
  think: {
    question: l('Zašto se pirinač za prilog ispira, a za rizoto ne?', 'Why is rice rinsed for a side dish but not for risotto?', 'Почему рис для гарнира промывают, а для ризотто нет?'),
    options: [
      l('Rizotu treba skrob sa površine da bude kremast', 'Risotto needs the surface starch to be creamy', 'Ризотто нужен поверхностный крахмал для кремовости'),
      l('Pirinač za rizoto je čistiji', 'Risotto rice is cleaner', 'Рис для ризотто чище'),
      l('Ispiranje skraćuje kuvanje', 'Rinsing shortens the cooking', 'Промывка сокращает варку'),
    ],
    answer: 0,
    explain: l(
      'Isti skrob koji prilog čini lepljivim, rizotu daje kremastost. Isti sastojak, dva cilja, dve tehnike.',
      'The same starch that makes a side dish sticky gives risotto its creaminess. Same ingredient, two goals, two techniques.',
      'Тот же крахмал, что делает гарнир липким, даёт ризотто кремовость. Один продукт, две цели, две техники.',
    ),
  },
}

const pasta: Lesson = {
  id: '10.2',
  title: l('Testenina al dente', 'Pasta al dente', 'Паста аль денте'),
  goal: l(
    'Skuvaš testeninu al dente i povežeš je sa sosom vodom od kuvanja.',
    'You cook pasta al dente and bind it to the sauce with its cooking water.',
    'Ты варишь пасту аль денте и связываешь её с соусом водой от варки.',
  ),
  minutes: 6,
  key: { value: l('1 l', '1 l', '1 л'), label: l('vode na 100 g', 'water per 100 g', 'воды на 100 г') },
  need: [
    { item: l('Suva testenina', 'Dried pasta', 'Сухая паста'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Voda', 'Water', 'Вода'), qty: l('2 l', '2 l', '2 л') },
    { item: l('So', 'Salt', 'Соль'), qty: l('20 g', '20 g', '20 г') },
    { item: l('Šolja', 'A cup', 'Чашка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Testenina je najjednostavnije jelo na svetu, a najčešće se pokvari na istim mestima: premalo vode, premalo soli i predugo kuvanje.',
    'Pasta is the simplest dish in the world, yet it goes wrong in the same places: too little water, too little salt, too long in the pot.',
    'Паста — простейшее блюдо в мире, но ошибаются в ней всегда одинаково: мало воды, мало соли, слишком долго варят.',
  ),
  steps: [
    {
      text: l('Proključaj vodu i posoli je.', 'Bring the water to the boil and salt it.', 'Доведи воду до кипения и посоли.'),
      params: [l('1 l na 100 g', '1 l per 100 g', '1 л на 100 г'), l('10 g soli na 1 l', '10 g salt per 1 l', '10 г соли на 1 л')],
      done: l('Voda je slana kao blaga supa.', 'The water tastes like a lightly salted broth.', 'Вода солёная, как слабый бульон.'),
      why: l('Ovo je jedina prilika da so uđe u testeninu.', 'This is the only chance for salt to get into the pasta.', 'Это единственный шанс соли попасть внутрь пасты.'),
    },
    {
      text: l('Ubaci testeninu i mešaj prvi minut.', 'Add the pasta and stir for the first minute.', 'Опусти пасту и помешивай первую минуту.'),
      params: [l('1 min', '1 min', '1 мин')],
      done: l('Nijedan komad nije zalepljen za drugi ni za dno.', 'No piece is stuck to another or to the bottom.', 'Ни один кусок не прилип к другому или ко дну.'),
      why: l('U prvom minutu skrob sa površine je lepljiv. Posle se stegne.', 'In the first minute the surface starch is sticky. After that it sets.', 'В первую минуту поверхностный крахмал липкий. Потом он схватывается.'),
    },
    {
      text: l('Kuvaj minut kraće nego što piše na pakovanju.', 'Cook one minute less than the packet says.', 'Вари на минуту меньше, чем указано на упаковке.'),
      params: [l('vreme sa pakovanja − 1 min', 'packet time − 1 min', 'время с упаковки − 1 мин')],
      done: l('Kad zagrizeš, u sredini osetiš tanku belu nit otpora.', 'When you bite, you feel a thin white thread of resistance in the centre.', 'При надкусывании в центре чувствуется тонкая белая нить сопротивления.'),
      why: l('Testenina se dokuva u sosu. „Al dente“ znači „za zub“.', 'The pasta finishes cooking in the sauce. "Al dente" means "to the tooth".', 'Паста доходит в соусе. «Аль денте» значит «на зуб».'),
      drawing: 'alDente',
    },
    {
      text: l('Pre ceđenja sačuvaj šolju vode od kuvanja.', 'Before draining, save a cup of the cooking water.', 'Перед тем как слить, сохрани чашку воды от варки.'),
      params: [l('150 ml', '150 ml', '150 мл')],
      done: l('Šolja mutne, slane vode stoji pored šporeta.', 'A cup of cloudy, salty water sits by the stove.', 'Чашка мутной солёной воды стоит у плиты.'),
      drawing: 'pastaWater',
    },
    {
      text: l('Prebaci testeninu u sos i dodaj vode od kuvanja.', 'Toss the pasta into the sauce and add the cooking water.', 'Переложи пасту в соус и добавь воду от варки.'),
      params: [l('po 2–3 kašike', '2–3 tbsp at a time', 'по 2–3 ст. л.'), l('1 min na vatri', '1 min on the heat', '1 мин на огне')],
      done: l('Sos je sjajan i drži se za testeninu, ne ostaje na dnu.', 'The sauce is glossy and clings to the pasta instead of pooling at the bottom.', 'Соус блестит и держится на пасте, а не стекает на дно.'),
      why: l('Skrob iz vode veže sos i testeninu u jedno. Opet emulzija, kao u 3.2.', 'The starch in the water binds sauce and pasta together. An emulsion again, as in 3.2.', 'Крахмал из воды связывает соус и пасту. Снова эмульсия, как в 3.2.'),
    },
  ],
  mistake: {
    title: l('Ispiranje testenine hladnom vodom.', 'Rinsing pasta under cold water.', 'Промывать пасту холодной водой.'),
    fix: l(
      'Voda spere skrob koji drži sos, pa sos klizi i ostaje na dnu tanjira. Testenina ide pravo iz šerpe u sos.',
      'The water washes off the starch that holds the sauce, so the sauce slides off and stays on the plate. Pasta goes straight from the pot into the sauce.',
      'Вода смывает крахмал, который держит соус, и соус соскальзывает на дно тарелки. Паста идёт прямо из кастрюли в соус.',
    ),
  },
  think: {
    question: l('Zašto se u vodu za testeninu ne dodaje ulje?', 'Why is oil not added to pasta water?', 'Почему в воду для пасты не добавляют масло?'),
    options: [
      l('Obavije testeninu i sos se posle ne drži', 'It coats the pasta and the sauce will not cling later', 'Оно обволакивает пасту, и соус потом не держится'),
      l('Ulje zagori u vodi', 'Oil burns in water', 'Масло сгорает в воде'),
      l('Voda sporije proključa', 'The water boils more slowly', 'Вода медленнее закипает'),
    ],
    answer: 0,
    explain: l(
      'Protiv lepljenja pomaže mešanje u prvom minutu i dovoljno vode. Ulje pluta na vrhu, a na kraju samo napravi klizavu testeninu.',
      'What stops sticking is stirring in the first minute and plenty of water. Oil floats on top and in the end just makes the pasta slippery.',
      'От слипания помогают помешивание в первую минуту и достаточно воды. Масло плавает сверху и в итоге лишь делает пасту скользкой.',
    ),
  },
}

const mash: Lesson = {
  id: '10.3',
  title: l('Pire krompir', 'Mashed potatoes', 'Картофельное пюре'),
  goal: l(
    'Napraviš glatak, vazdušast pire, a ne lepak.',
    'You make smooth, fluffy mash, not glue.',
    'Ты готовишь гладкое воздушное пюре, а не клейстер.',
  ),
  minutes: 7,
  key: { value: l('20 min', '20 min', '20 мин'), label: l('kuvanje', 'cooking', 'варка') },
  need: [
    { item: l('Brašnjav krompir (za pire)', 'Floury potatoes (for mash)', 'Рассыпчатый картофель (для пюре)'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Mleko, toplo', 'Milk, warm', 'Молоко, тёплое'), qty: l('200 ml', '200 ml', '200 мл') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('60 g', '60 g', '60 г') },
    { item: l('Gnječilica ili presa', 'Masher or ricer', 'Толкушка или пресс'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Krompir je pun skroba. Ako ga gnječiš nežno, pire je vazdušast. Ako ga udaraš, postane lepak.',
    'Potatoes are full of starch. Handle them gently and the mash is fluffy. Work them hard and they turn to glue.',
    'Картофель полон крахмала. Если мять бережно, пюре воздушное. Если взбивать, получится клейстер.',
  ),
  steps: [
    {
      text: l('Oljušti krompir i iseci ga na iste komade.', 'Peel the potatoes and cut them into equal pieces.', 'Очисти картофель и нарежь одинаковыми кусками.'),
      params: [l('4–5 cm', '4–5 cm', '4–5 см')],
      done: l('Svi komadi su iste veličine.', 'All pieces are the same size.', 'Все куски одного размера.'),
    },
    {
      text: l('Stavi krompir u hladnu, slanu vodu i kuvaj.', 'Put the potatoes in cold salted water and cook.', 'Залей картофель холодной солёной водой и вари.'),
      params: [l('10 g soli na 1 l', '10 g salt per 1 l', '10 г соли на 1 л'), l('krčkanje 20 min', 'simmer 20 min', 'томить 20 мин')],
      done: l('Nož ulazi i izlazi bez ikakvog otpora.', 'A knife slides in and out with no resistance at all.', 'Нож входит и выходит без малейшего сопротивления.'),
      why: l('Iz hladne vode krompir se skuva ravnomerno. U vreloj se spolja raspadne, a unutra je tvrd.', 'Starting cold, potatoes cook evenly. In boiling water the outside falls apart while the inside is still hard.', 'С холодной воды картофель варится равномерно. В кипятке он разваливается снаружи, а внутри твёрдый.'),
      drawing: 'potatoKnife',
    },
    {
      text: l('Ocedi krompir i vrati ga u šerpu na vatru.', 'Drain the potatoes and return them to the pan on the heat.', 'Слей воду и верни картофель в кастрюлю на огонь.'),
      params: [l('1–2 min', '1–2 min', '1–2 мин')],
      done: l('Prestala je da izlazi para i krompir je suv na površini.', 'The steam has stopped and the potatoes look dry on the surface.', 'Пар перестал идти, поверхность картофеля сухая.'),
      why: l('Višak vode razređuje pire. Suv krompir upije mleko i puter.', 'Extra water thins the mash. Dry potatoes soak up milk and butter.', 'Лишняя вода разжижает пюре. Сухой картофель впитывает молоко и масло.'),
      drawing: 'steamDry',
    },
    {
      text: l('Izgnječi krompir gnječilicom ili presom.', 'Mash the potatoes with a masher or ricer.', 'Разомни картофель толкушкой или прессом.'),
      done: l('Nema grudvica, a krompir je i dalje rastresit.', 'There are no lumps and the potato is still loose and fluffy.', 'Нет комочков, а картофель всё ещё рыхлый.'),
      why: l('Mikser i blender kidaju ćelije krompira i oslobode skrob. To je lepak.', 'A mixer or blender tears the potato cells and releases the starch. That is glue.', 'Миксер и блендер рвут клетки картофеля и освобождают крахмал. Это клейстер.'),
    },
    {
      text: l('Umešaj puter, pa toplo mleko u delovima.', 'Stir in the butter, then the warm milk in parts.', 'Вмешай масло, затем тёплое молоко частями.'),
      params: [l('60 g + 200 ml', '60 g + 200 ml', '60 г + 200 мл')],
      done: l('Pire je glatak, sjajan i drži oblik na kašiki.', 'The mash is smooth, glossy and holds its shape on a spoon.', 'Пюре гладкое, блестящее и держит форму на ложке.'),
      why: l('Prvo puter, da obavije skrob. Onda mleko, toplo, da se pire ne ohladi.', 'Butter first, to coat the starch. Then the milk, warm, so the mash does not cool down.', 'Сначала масло, чтобы обволокло крахмал. Потом молоко, тёплое, чтобы пюре не остыло.'),
    },
  ],
  mistake: {
    title: l('Pire u blenderu.', 'Mash in a blender.', 'Пюре в блендере.'),
    fix: l(
      'Za par sekundi krompir postane lepljiv i gumast, i to se ne može popraviti. Pire se gnječi, ne melje.',
      'In seconds the potato turns sticky and gummy, and it cannot be fixed. Mash is mashed, not blended.',
      'За секунды картофель становится липким и резиновым, и это уже не исправить. Пюре мнут, а не перемалывают.',
    ),
  },
  think: {
    question: l('Zašto je pire od voskastog krompira (za salatu) lepljiv?', 'Why does mash from waxy (salad) potatoes turn sticky?', 'Почему пюре из восковидного (салатного) картофеля липкое?'),
    options: [
      l('Ima drugačiji skrob koji se ne raspada u pahulje', 'It has a different starch that does not break into fluffy flakes', 'У него другой крахмал, который не распадается на хлопья'),
      l('Kuvan je prekratko', 'It was cooked too briefly', 'Его варили слишком мало'),
      l('Ima manje vode', 'It has less water', 'В нём меньше воды'),
    ],
    answer: 0,
    explain: l(
      'Brašnjav krompir se pri kuvanju raspadne u pahulje i upije puter. Voskast drži oblik, što je odlično za salatu, a loše za pire.',
      'Floury potatoes break into flakes when cooked and absorb butter. Waxy ones hold their shape, great for salad and bad for mash.',
      'Рассыпчатый картофель при варке распадается на хлопья и впитывает масло. Восковидный держит форму — отлично для салата, плохо для пюре.',
    ),
  },
}

const roast: Lesson = {
  id: '10.4',
  title: l('Pečeni krompir', 'Roast potatoes', 'Печёный картофель'),
  goal: l(
    'Ispečeš krompir hrskav spolja i mekan kao pire iznutra.',
    'You roast potatoes crisp outside and soft as mash inside.',
    'Ты запекаешь картофель хрустящим снаружи и мягким, как пюре, внутри.',
  ),
  minutes: 7,
  key: { value: l('220°C', '220°C', '220°C'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('Brašnjav krompir', 'Floury potatoes', 'Рассыпчатый картофель'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('4 kašike', '4 tbsp', '4 ст. л.') },
    { item: l('So', 'Salt', 'Соль'), qty: l('8 g', '8 g', '8 г') },
    { item: l('Pleh', 'Roasting tray', 'Противень'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Hrskava korica nastaje od skroba na površini. Trik je da ga napraviš više pre nego što krompir uđe u rernu.',
    'The crisp crust comes from starch on the surface. The trick is to make more of it before the potatoes go into the oven.',
    'Хрустящая корочка получается из крахмала на поверхности. Секрет — сделать его больше до того, как картофель попадёт в духовку.',
  ),
  steps: [
    {
      text: l('Zagrej rernu sa uljem u plehu.', 'Preheat the oven with the oil in the tray.', 'Разогрей духовку вместе с маслом на противне.'),
      params: [l('220°C', '220°C', '220°C'), l('15 min', '15 min', '15 мин')],
      done: l('Ulje u plehu treperi.', 'The oil in the tray shimmers.', 'Масло на противне дрожит.'),
      why: l('Krompir koji padne u vrelo ulje odmah počne da pravi koricu.', 'Potatoes that hit hot oil start forming a crust at once.', 'Картофель, попав в горячее масло, сразу начинает покрываться корочкой.'),
    },
    {
      text: l('Iseci krompir i kuvaj ga u slanoj vodi kratko.', 'Cut the potatoes and parboil them in salted water.', 'Нарежь картофель и недолго отвари в солёной воде.'),
      params: [l('komadi 5 cm', '5 cm pieces', 'куски 5 см'), l('8–10 min', '8–10 min', '8–10 мин')],
      done: l('Ivice su mekane, a sredina još tvrda.', 'The edges are soft and the centre is still firm.', 'Края мягкие, а середина ещё твёрдая.'),
    },
    {
      text: l('Ocedi krompir i protresi ga u cediljci.', 'Drain the potatoes and shake them in the colander.', 'Слей воду и встряхни картофель в дуршлаге.'),
      params: [l('3–4 puta', '3–4 times', '3–4 раза')],
      done: l('Ivice su hrapave i izgledaju kao da su posute brašnom.', 'The edges are rough and look dusted with flour.', 'Края шершавые, будто присыпаны мукой.'),
      why: l('Hrapava ivica je mekan skrob. U rerni se pretvori u hrskavu koricu.', 'The rough edge is soft starch. In the oven it turns into a crisp crust.', 'Шершавый край — это мягкий крахмал. В духовке он становится хрустящей корочкой.'),
      drawing: 'roughEdges',
    },
    {
      text: l('Spusti krompir u vrelo ulje i okreni da se obloži.', 'Tip the potatoes into the hot oil and turn to coat.', 'Выложи картофель в горячее масло и переверни, чтобы покрылся.'),
      done: l('Krompir zacvrči kad dodirne ulje i svaki komad je sjajan.', 'The potatoes sizzle as they hit the oil and every piece is glossy.', 'Картофель шипит, касаясь масла, и каждый кусок блестит.'),
      why: l('Bez cvrčanja ulje nije dovoljno vrelo. Vrati pleh u rernu na još 5 minuta.', 'No sizzle means the oil is not hot enough. Put the tray back for another 5 minutes.', 'Нет шипения — масло недостаточно горячее. Верни противень ещё на 5 минут.'),
    },
    {
      text: l('Peci, okrećući na svakih 15 minuta, pa posoli.', 'Roast, turning every 15 minutes, then salt.', 'Запекай, переворачивая каждые 15 минут, затем посоли.'),
      params: [l('40–45 min', '40–45 min', '40–45 мин')],
      done: l('Krompir je zlatan, krcka kad ga kucneš viljuškom, a iznutra je mekan.', 'The potatoes are golden, crackle when tapped with a fork and are soft inside.', 'Картофель золотистый, хрустит при постукивании вилкой, внутри мягкий.'),
    },
  ],
  mistake: {
    title: l('Sirov krompir pravo u hladan pleh.', 'Raw potatoes straight into a cold tray.', 'Сырой картофель прямо на холодный противень.'),
    fix: l(
      'Krompir se zalepi, upije ulje i ispadne mastan, a ne hrskav. Kratko kuvanje, protresanje i vrelo ulje su tri koraka koji prave razliku.',
      'The potatoes stick, soak up oil and come out greasy rather than crisp. Parboiling, shaking and hot oil are the three steps that make the difference.',
      'Картофель прилипает, впитывает масло и получается жирным, а не хрустящим. Отваривание, встряхивание и горячее масло — три шага, которые всё решают.',
    ),
  },
  think: {
    question: l('Zašto se krompir protresa u cediljci?', 'Why are the potatoes shaken in the colander?', 'Зачем встряхивать картофель в дуршлаге?'),
    options: [
      l('Hrapava površina ima više skroba koji postane hrskav', 'A rough surface has more starch to turn crisp', 'На шершавой поверхности больше крахмала, который станет хрустящим'),
      l('Da se brže ohladi', 'So it cools faster', 'Чтобы быстрее остыл'),
      l('Da ispadne višak soli', 'To shake off excess salt', 'Чтобы стряхнуть лишнюю соль'),
    ],
    answer: 0,
    explain: l(
      'Glatka površina daje glatku, tanku koricu. Hrapava ima stotine malih ivica, i svaka postane hrskava.',
      'A smooth surface gives a thin, smooth crust. A rough one has hundreds of tiny edges, and each turns crisp.',
      'Гладкая поверхность даёт тонкую гладкую корочку. Шершавая — сотни мелких краёв, и каждый становится хрустящим.',
    ),
  },
}

const risotto: Lesson = {
  id: '10.5',
  title: l('Jednostavan rizoto', 'Simple risotto', 'Простое ризотто'),
  goal: l(
    'Skuvaš rizoto koji je kremast, a zrno ima jezgro, bez pavlake.',
    'You cook a risotto that is creamy while each grain keeps a core, with no cream.',
    'Ты готовишь кремовое ризотто, где у каждого зерна есть сердцевина, без сливок.',
  ),
  minutes: 9,
  key: { value: l('18 min', '18 min', '18 мин'), label: l('kuvanje', 'cooking', 'варка') },
  need: [
    { item: l('Pirinač za rizoto (arborio)', 'Risotto rice (arborio)', 'Рис для ризотто (арборио)'), qty: l('160 g', '160 g', '160 г') },
    { item: l('Pileći fond, vreo', 'Chicken stock, hot', 'Куриный бульон, горячий'), qty: l('800 ml', '800 ml', '800 мл') },
    { item: l('Crni luk, sitno seckan', 'Onion, finely diced', 'Лук, мелко нарезанный'), qty: l('½', '½', '½') },
    { item: l('Puter i parmezan', 'Butter and parmesan', 'Масло и пармезан'), qty: l('30 g + 30 g', '30 g + 30 g', '30 г + 30 г') },
  ],
  why: l(
    'Rizoto spaja ceo prvi razred: brunoise iz 2.4, fond iz 8.1, skrob iz 4.1 i emulziju iz 3.2. Ako ga skuvaš, spreman si za ispit.',
    'Risotto brings the whole first grade together: brunoise from 2.4, stock from 8.1, starch from 4.1 and emulsion from 3.2. If you can cook it, you are ready for the exam.',
    'Ризотто объединяет весь первый класс: брюнуаз из 2.4, бульон из 8.1, крахмал из 4.1 и эмульсию из 3.2. Если оно получилось, ты готов к экзамену.',
  ),
  steps: [
    {
      text: l('Dinstaj luk na pola putera, bez boje.', 'Sweat the onion in half the butter, without colour.', 'Потоми лук на половине масла, не давая зарумяниться.'),
      params: [l('15 g', '15 g', '15 г'), l('5 min', '5 min', '5 мин')],
      done: l('Luk je mekan i providan.', 'The onion is soft and translucent.', 'Лук мягкий и прозрачный.'),
    },
    {
      text: l('Dodaj pirinač i prži ga, mešajući.', 'Add the rice and toast it, stirring.', 'Добавь рис и обжаривай, помешивая.'),
      params: [l('1–2 min', '1–2 min', '1–2 мин')],
      done: l('Ivice zrna su providne, a sredina bela.', 'The edges of the grains are translucent and the centre white.', 'Края зёрен прозрачные, середина белая.'),
      why: l('Prženje zatvori površinu zrna, pa se pirinač ne raspadne dok kuva.', 'Toasting seals the grain surface so the rice does not fall apart while it cooks.', 'Обжаривание запечатывает поверхность зерна, и рис не разваливается при варке.'),
      drawing: 'riceToast',
    },
    {
      text: l('Dodaj vreo fond kutlaču po kutlaču, uz mešanje.', 'Add the hot stock a ladle at a time, stirring.', 'Добавляй горячий бульон по половнику, помешивая.'),
      params: [l('kutlača ≈ 120 ml', 'ladle ≈ 120 ml', 'половник ≈ 120 мл'), l('16–18 min', '16–18 min', '16–18 мин')],
      done: l('Sledeću kutlaču dodaješ kad varjača ostavi trag na dnu.', 'You add the next ladle when the spoon leaves a trail on the bottom.', 'Следующий половник добавляешь, когда ложка оставляет след на дне.'),
      why: l('Mešanje trlja zrna jedno o drugo i oslobađa skrob. To je kremastost bez pavlake.', 'Stirring rubs the grains together and releases starch. That is creaminess without cream.', 'Помешивание трёт зёрна друг о друга и освобождает крахмал. Это кремовость без сливок.'),
      drawing: 'ladleStock',
    },
    {
      text: l('Probaj zrno posle 16 minuta.', 'Taste a grain after 16 minutes.', 'Попробуй зерно через 16 минут.'),
      done: l('Zrno je mekano, ali ima tanko jezgro kad ga zagrizeš.', 'The grain is soft but has a thin core when you bite it.', 'Зерно мягкое, но с тонкой сердцевиной на зуб.'),
      why: l('Isto „al dente“ kao kod testenine u 10.2.', 'The same "al dente" as the pasta in 10.2.', 'То же «аль денте», что у пасты в 10.2.'),
    },
    {
      text: l('Skloni sa vatre, umešaj hladan puter i parmezan.', 'Take off the heat and beat in cold butter and parmesan.', 'Сними с огня и энергично вмешай холодное масло и пармезан.'),
      params: [l('15 g + 30 g', '15 g + 30 g', '15 г + 30 г'), l('odmori 1 min', 'rest 1 min', 'отдых 1 мин')],
      done: l('Rizoto se razlije po tanjiru u talasu, a ne stoji u gomili.', 'The risotto spreads across the plate in a wave instead of sitting in a heap.', 'Ризотто растекается по тарелке волной, а не стоит горкой.'),
      why: l('Hladan puter van vatre, kao u 9.8. Italijani to zovu „all’onda“, na talasu.', 'Cold butter off the heat, as in 9.8. Italians call it "all’onda", like a wave.', 'Холодное масло вне огня, как в 9.8. Итальянцы называют это «all’onda» — волной.'),
    },
  ],
  mistake: {
    title: l('Hladan fond u vreo pirinač.', 'Cold stock into hot rice.', 'Холодный бульон в горячий рис.'),
    fix: l(
      'Svaka kutlača ohladi šerpu, kuvanje stane i rizoto se kuva duplo duže i neravnomerno. Fond drži da krčka u drugoj šerpi pored.',
      'Every ladle cools the pan, the cooking stops and the risotto takes twice as long and cooks unevenly. Keep the stock simmering in a second pan alongside.',
      'Каждый половник остужает кастрюлю, варка останавливается, и ризотто готовится вдвое дольше и неравномерно. Держи бульон на слабом огне в соседней кастрюле.',
    ),
  },
  think: {
    question: l('Odakle rizotu kremastost ako nema pavlake?', 'Where does risotto get its creaminess without cream?', 'Откуда у ризотто кремовость без сливок?'),
    options: [
      l('Od skroba iz pirinča, oslobođenog mešanjem, i putera na kraju', 'From the rice starch released by stirring, plus butter at the end', 'Из крахмала риса, высвобожденного помешиванием, и масла в конце'),
      l('Od parmezana', 'From the parmesan', 'Из пармезана'),
      l('Od dugog kuvanja', 'From long cooking', 'От долгой варки'),
    ],
    answer: 0,
    explain: l(
      'To je odgovor na pitanje iz 10.1. Skrob koji tamo ispiraš, ovde čuvaš i oslobađaš. Ista namirnica, suprotan cilj.',
      'That answers the question from 10.1. The starch you rinse off there, you keep and release here. Same ingredient, opposite goal.',
      'Это ответ на вопрос из 10.1. Крахмал, который там смывают, здесь сохраняют и высвобождают. Тот же продукт, противоположная цель.',
    ),
  },
}

export const starchLessons: Lesson[] = [rice, pasta, mash, roast, risotto]
