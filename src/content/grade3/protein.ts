import { l, type Lesson } from '../types'

// Grade 3 · Module 5 · Protein at chef level. Expensive cuts that forgive nothing: a basted rib-eye, raw fish
// made safe, a rack of lamb, lean venison and scallops. Each one is about a few degrees and a few seconds.

const ribeye: Lesson = {
  id: '3.5.1',
  title: l('Rib-eye i podlivanje puterom', 'Rib-eye and butter basting', 'Рибай и поливка маслом'),
  goal: l(
    'Ispečeš debeo rib-eye sa tamnom koricom, podliješ ga puterom i skineš na tačnoj temperaturi.',
    'You cook a thick rib-eye with a dark crust, baste it with butter and pull it at the exact temperature.',
    'Ты жаришь толстый рибай с тёмной корочкой, поливаешь маслом и снимаешь при точной температуре.',
  ),
  minutes: 7,
  key: { value: l('52°C', '52°C', '52°C'), label: l('skidanje za medium rare', 'pull for medium rare', 'снимать для слабой прожарки') },
  need: [
    { item: l('Rib-eye, debljine 3–4 cm', 'Rib-eye, 3–4 cm thick', 'Рибай толщиной 3–4 см'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Puter, timijan, beli luk', 'Butter, thyme, garlic', 'Масло, тимьян, чеснок'), qty: l('40 g + 4 grančice + 3 čena', '40 g + 4 sprigs + 3 cloves', '40 г + 4 веточки + 3 зубчика') },
    { item: l('Liveni tiganj, termometar', 'Cast-iron pan, thermometer', 'Чугунная сковорода, термометр'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Skup komad mesa oprašta najmanje. Razlika između savršenog i prepečenog rib-eye-a je tri stepena i jedan minut.',
    'An expensive cut forgives the least. The difference between a perfect and an overcooked rib-eye is three degrees and one minute.',
    'Дорогой кусок прощает меньше всего. Разница между идеальным и пережаренным рибаем — три градуса и одна минута.',
  ),
  steps: [
    {
      text: l('Izvadi meso pola sata ranije, osuši ga papirom i posoli.', 'Take the meat out half an hour ahead, pat it dry and salt it.', 'Достань мясо за полчаса, обсуши бумагой и посоли.'),
      params: [l('30 min', '30 min', '30 мин')],
      done: l('Površina je suva na dodir.', 'The surface is dry to the touch.', 'Поверхность сухая на ощупь.'),
      why: l('Mokra površina se kuva pre nego što počne da se peče (4.6).', 'A wet surface steams before it starts to brown (4.6).', 'Влажная поверхность сначала варится, а потом жарится (4.6).'),
      drawing: 'patDry',
    },
    {
      text: l('Zagrej tiganj dok ulje ne zadimi i spusti odrezak od sebe.', 'Heat the pan until the oil smokes and lay the steak down away from you.', 'Разогрей сковороду, пока масло не задымит, и положи стейк от себя.'),
      params: [l('ulje visoke tačke dimljenja', 'high smoke point oil', 'масло с высокой точкой дымления')],
      done: l('Meso zacvrči glasno čim dodirne tiganj.', 'The meat sizzles loudly the moment it touches the pan.', 'Мясо громко шипит, едва коснувшись сковороды.'),
      why: l('Ako ne cvrči, tiganj nije dovoljno vruć i korice neće biti.', 'If it does not sizzle, the pan is not hot enough and there will be no crust.', 'Если не шипит, сковорода недостаточно горячая, и корочки не будет.'),
      drawing: 'searRelease',
    },
    {
      text: l('Okreći svakog minuta dok korica ne bude tamna sa obe strane.', 'Turn every minute until the crust is dark on both sides.', 'Переворачивай каждую минуту, пока корочка не станет тёмной с обеих сторон.'),
      params: [l('5–6 min ukupno', '5–6 min in total', '5–6 мин всего')],
      done: l('Obe strane imaju ravnomernu, tamnosmeđu koricu.', 'Both sides have an even, dark brown crust.', 'Обе стороны с ровной тёмно-коричневой корочкой.'),
      why: l('Česti okretaji greju meso sa obe strane naizmenično, pa je siva traka ispod korice tanja.', 'Frequent turning heats both sides in turn, so the grey band under the crust is thinner.', 'Частые повороты прогревают обе стороны по очереди, и серая полоса под корочкой тоньше.'),
      drawing: 'greyBand',
    },
    {
      text: l('Smanji vatru, dodaj puter, timijan i beli luk, pa podlivaj kašikom.', 'Lower the heat, add the butter, thyme and garlic, and baste with a spoon.', 'Убавь огонь, добавь масло, тимьян и чеснок и поливай ложкой.'),
      params: [l('40 g', '40 g', '40 г'), l('1–2 min', '1–2 min', '1–2 мин')],
      done: l('Puter se peni, miriše na lešnik, a meso sjaji.', 'The butter foams and smells of hazelnut, and the meat glistens.', 'Масло пенится, пахнет фундуком, мясо блестит.'),
      why: l('Nagni tiganj da se puter skupi uz ivicu. Penasti puter nosi ukus bilja i peče meso i odozgo.', 'Tilt the pan so the butter pools at the edge. Foaming butter carries the herbs and cooks the top of the meat too.', 'Наклони сковороду, чтобы масло собралось у края. Пенящееся масло несёт аромат зелени и жарит мясо сверху.'),
      drawing: 'baste',
    },
    {
      text: l('Skini meso kad sredina pokaže 52°C i odmori ga.', 'Pull the meat when the centre reads 52°C and rest it.', 'Сними мясо, когда в центре 52°C, и дай отдохнуть.'),
      params: [l('52°C → 55°C', '52°C → 55°C', '52°C → 55°C'), l('6–8 min', '6–8 min', '6–8 мин')],
      done: l('Posle odmora sredina je 55°C i ružičasta od ivice do ivice.', 'After resting the centre is at 55°C and pink edge to edge.', 'После отдыха в центре 55°C, и мясо розовое от края до края.'),
      why: l('Temperatura raste još 2–3 stepena posle skidanja (7.6). Ko čeka 55°C u tiganju, dobije 58°C na tanjiru.', 'The temperature climbs another 2–3 degrees after the pan (7.6). Wait for 55°C in the pan and you get 58°C on the plate.', 'Температура растёт ещё на 2–3 градуса после снятия (7.6). Кто ждёт 55°C на сковороде, получит 58°C на тарелке.'),
      drawing: 'probeCenter',
    },
  ],
  mistake: {
    title: l('Puter stavljen na početku, na jaku vatru.', 'Butter added at the start, over high heat.', 'Масло положено в начале, на сильный огонь.'),
    fix: l(
      'Mlečni delovi u puteru zagore za minut i korica dobije gorak ukus. Ulje je za jaku vatru, a puter na kraju, na srednjoj, samo za podlivanje.',
      'The milk solids in butter burn within a minute and the crust turns bitter. Oil is for high heat; butter goes in at the end, on medium, just for basting.',
      'Молочные частицы в масле сгорают за минуту, и корочка горчит. Растительное масло — для сильного огня, сливочное — в конце, на среднем, только для поливки.',
    ),
  },
  think: {
    question: l('Zašto se rib-eye skida na 52°C, a ne na 55°C?', 'Why is the rib-eye pulled at 52°C, not 55°C?', 'Почему рибай снимают при 52°C, а не 55°C?'),
    options: [
      l('Temperatura raste i posle tiganja', 'The temperature keeps rising after the pan', 'Температура растёт и после сковороды'),
      l('Na 52°C je bezbedno', 'At 52°C it is safe', 'При 52°C безопасно'),
      l('Da korica ne zagori', 'So the crust does not burn', 'Чтобы корочка не сгорела'),
    ],
    answer: 0,
    explain: l(
      'Spoljni sloj je mnogo topliji od sredine i nastavlja da je greje dok meso odmara. Zato se skida nekoliko stepeni pre cilja.',
      'The outer layer is much hotter than the centre and keeps warming it while the meat rests. That is why you pull a few degrees before the target.',
      'Внешний слой гораздо горячее центра и продолжает его греть, пока мясо отдыхает. Поэтому снимают за несколько градусов до цели.',
    ),
  },
  recipe: { name: l('Rib-eye sa puterom od timijana', 'Rib-eye with thyme butter', 'Рибай с тимьяновым маслом'), protein: 24, carbs: 0, fat: 21, kcal: 290 },
}

const crudo: Lesson = {
  id: '3.5.2',
  title: l('Crudo i tartar od ribe', 'Fish crudo and tartare', 'Крудо и тартар из рыбы'),
  goal: l(
    'Pripremiš sirovu ribu bezbedno i isečeš je u tanke šnite ili kockice, začinjene tik pred služenje.',
    'You prepare raw fish safely and cut it into thin slices or dice, seasoned just before serving.',
    'Ты безопасно готовишь сырую рыбу и режешь её тонкими ломтиками или кубиками, заправляя прямо перед подачей.',
  ),
  minutes: 6,
  key: { value: l('−20°C · 24 h', '−20°C · 24 h', '−20°C · 24 ч'), label: l('zamrzavanje protiv parazita', 'freezing against parasites', 'заморозка против паразитов') },
  need: [
    { item: l('File brancina ili lososa, bez kože', 'Sea bass or salmon fillet, skinless', 'Филе сибаса или лосося без кожи'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Maslinovo ulje, limun, krupna so', 'Olive oil, lemon, flaky salt', 'Оливковое масло, лимон, крупная соль'), qty: l('1', '1', '1') },
    { item: l('Dugačak, oštar nož i ohlađeni tanjiri', 'A long, sharp knife and chilled plates', 'Длинный острый нож и охлаждённые тарелки'), qty: l('1 + 4', '1 + 4', '1 + 4') },
  ],
  why: l(
    'Sirova riba je čist ukus mora, ali i rizik. U divljoj ribi mogu da budu paraziti koje ubija samo zamrzavanje ili kuvanje.',
    'Raw fish is the pure taste of the sea, but also a risk. Wild fish can carry parasites that only freezing or cooking will kill.',
    'Сырая рыба — чистый вкус моря, но и риск. В дикой рыбе могут быть паразиты, которых убивает только заморозка или готовка.',
  ),
  steps: [
    {
      text: l('Kupi ribu označenu za sirovo jedenje ili je zamrzni.', 'Buy fish labelled for eating raw, or freeze it.', 'Купи рыбу с пометкой «для сырого употребления» или заморозь её.'),
      params: [l('−20°C, najmanje 24 h', '−20°C, at least 24 h', '−20°C, не менее 24 ч')],
      done: l('Znaš da je riba ili označena ili zamrznuta po pravilu.', 'You know the fish is either labelled or frozen by the rule.', 'Ты знаешь, что рыба либо с пометкой, либо заморожена по правилу.'),
      why: l('Ovo je EU pravilo za ribu koja se služi sirova. Kućni zamrzivač ne dostiže uvek −20°C, pa proveri termometrom.', 'This is the EU rule for fish served raw. A home freezer does not always reach −20°C, so check with a thermometer.', 'Это правило ЕС для рыбы, подаваемой сырой. Домашняя морозилка не всегда достигает −20°C, проверь термометром.'),
    },
    {
      text: l('Odmrzni ribu u frižideru preko noći i osuši je papirom.', 'Thaw the fish in the fridge overnight and pat it dry.', 'Разморозь рыбу в холодильнике за ночь и обсуши бумагой.'),
      params: [l('0–5°C', '0–5°C', '0–5°C')],
      done: l('Riba je hladna, čvrsta i suva.', 'The fish is cold, firm and dry.', 'Рыба холодная, упругая и сухая.'),
      why: l('Riba koja se odmrzava na pultu se greje spolja dok je sredina još led (7.1).', 'Fish thawed on the counter warms on the outside while the middle is still ice (7.1).', 'Рыба, размороженная на столе, греется снаружи, пока середина ещё лёд (7.1).'),
      drawing: 'thawPlate',
    },
    {
      text: l('Seci dugim nožem, jednim potezom, bez testerisanja.', 'Slice with a long knife, in one stroke, without sawing.', 'Режь длинным ножом одним движением, не пилой.'),
      params: [l('crudo: šnite 3–4 mm', 'crudo: 3–4 mm slices', 'крудо: ломтики 3–4 мм'), l('tartar: kockice 5 mm', 'tartare: 5 mm dice', 'тартар: кубики 5 мм')],
      done: l('Šnite imaju glatku, sjajnu površinu.', 'The slices have a smooth, glossy face.', 'У ломтиков гладкий блестящий срез.'),
      why: l('Testerisanje kida vlakna i riba izgleda razvučeno. Jedan dug potez seče čisto.', 'Sawing tears the fibres and the fish looks ragged. One long stroke cuts clean.', 'Пиление рвёт волокна, и рыба выглядит рваной. Одно длинное движение режет чисто.'),
      drawing: 'slabs',
    },
    {
      text: l('Rasporedi ribu na ohlađen tanjir i vrati u frižider.', 'Lay the fish on a chilled plate and put it back in the fridge.', 'Разложи рыбу на охлаждённую тарелку и верни в холодильник.'),
      params: [l('do 5°C', 'up to 5°C', 'до 5°C')],
      done: l('Riba je hladna sve do trenutka služenja.', 'The fish stays cold right up to serving.', 'Рыба остаётся холодной до самой подачи.'),
      why: l('Sirova riba ne podnosi opasnu zonu. Topli tanjir je greje za par minuta.', 'Raw fish cannot take the danger zone. A warm plate heats it within minutes.', 'Сырая рыба не выносит опасной зоны. Тёплая тарелка греет её за пару минут.'),
    },
    {
      text: l('Začini tik pred služenje: so, ulje, pa kiselina.', 'Season just before serving: salt, oil, then acid.', 'Заправь прямо перед подачей: соль, масло, затем кислота.'),
      done: l('Riba je sjajna, a boja i dalje sveža i providna.', 'The fish glistens, and its colour is still fresh and translucent.', 'Рыба блестит, а цвет по-прежнему свежий и прозрачный.'),
      why: l('Kiselina za nekoliko minuta skuva površinu ribe, kao u cevicheu. Za crudo ide poslednja.', 'Acid cooks the surface of the fish within minutes, as in ceviche. For crudo it goes on last.', 'Кислота за несколько минут «варит» поверхность рыбы, как в севиче. Для крудо её добавляют последней.'),
    },
  ],
  mistake: {
    title: l('Limun stavljen 20 minuta pre služenja.', 'Lemon added 20 minutes before serving.', 'Лимон добавлен за 20 минут до подачи.'),
    fix: l(
      'Riba posivi i postane gumena, jer je kiselina skuvala. To je ceviche, ne crudo. Za crudo kiselina ide u poslednjih 30 sekundi.',
      'The fish turns grey and rubbery because the acid has cooked it. That is ceviche, not crudo. For crudo the acid goes on in the last 30 seconds.',
      'Рыба сереет и становится резиновой: кислота её «сварила». Это севиче, а не крудо. Для крудо кислота — в последние 30 секунд.',
    ),
  },
  think: {
    question: l('Zašto se divlja riba za sirovo zamrzava?', 'Why is wild fish frozen before serving it raw?', 'Зачем замораживать дикую рыбу перед подачей в сыром виде?'),
    options: [
      l('Zamrzavanje ubija parazite', 'Freezing kills parasites', 'Заморозка убивает паразитов'),
      l('Lakše se seče', 'It is easier to slice', 'Её легче резать'),
      l('Duže traje', 'It keeps longer', 'Она дольше хранится'),
    ],
    answer: 0,
    explain: l(
      'Paraziti kao anisakis žive u mišiću ribe. Ne vidiš ih i ne osećaš. Ubija ih kuvanje ili zamrzavanje na −20°C najmanje 24 sata.',
      'Parasites such as anisakis live in the fish\'s muscle. You cannot see or taste them. Cooking kills them, or freezing at −20°C for at least 24 hours.',
      'Паразиты вроде анизакиса живут в мышцах рыбы. Их не видно и не чувствуется. Их убивает готовка или заморозка при −20°C не менее 24 часов.',
    ),
  },
  recipe: { name: l('Crudo od brancina', 'Sea bass crudo', 'Крудо из сибаса'), protein: 20, carbs: 1, fat: 8, kcal: 155 },
}

const lambRack: Lesson = {
  id: '3.5.3',
  title: l('Jagnjeći kare', 'Rack of lamb', 'Каре ягнёнка'),
  goal: l(
    'Očistiš kosti, zasečeš masnoću, ispečeš kare do ružičaste sredine i isečeš ga na kotlete.',
    'You clean the bones, score the fat, roast the rack to a pink centre and cut it into cutlets.',
    'Ты зачищаешь кости, надрезаешь жир, запекаешь каре до розового центра и режешь на котлеты.',
  ),
  minutes: 8,
  key: { value: l('54°C', '54°C', '54°C'), label: l('sredina, ružičasto', 'centre, pink', 'центр, розовый') },
  need: [
    { item: l('Jagnjeći kare sa 8 rebara', 'A rack of lamb with 8 ribs', 'Каре ягнёнка на 8 рёбер'), qty: l('800 g', '800 g', '800 г') },
    { item: l('Mali nož i krpa', 'Small knife and a cloth', 'Маленький нож и полотенце'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Tiganj za rernu, termometar', 'Ovenproof pan, thermometer', 'Сковорода для духовки, термометр'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Kare je jelo koje se pamti: čiste kosti, zlatna masnoća i ružičasto meso. Sve tri stvari su tehnika, ne sreća.',
    'A rack of lamb is a dish people remember: clean bones, golden fat and pink meat. All three come from technique, not luck.',
    'Каре запоминается: чистые кости, золотистый жир и розовое мясо. Все три — техника, а не удача.',
  ),
  steps: [
    {
      text: l('Zaseci uz kosti 3 cm od vrha i ostruži meso i opnu do čiste kosti.', 'Cut along the bones 3 cm from the tips and scrape off the meat and membrane to clean bone.', 'Надрежь вдоль костей в 3 см от концов и соскобли мясо и плёнку до чистой кости.'),
      params: [l('3 cm', '3 cm', '3 см')],
      done: l('Vrhovi kostiju su beli i čisti.', 'The bone tips are white and clean.', 'Концы костей белые и чистые.'),
      why: l('Meso na vrhovima kostiju zagori u rerni i izgleda prljavo. Obrezci idu u jus (3.2.2).', 'Meat left on the bone tips burns in the oven and looks dirty. The trim goes into a jus (3.2.2).', 'Мясо на концах костей подгорает в духовке и выглядит грязно. Обрезки — в жю (3.2.2).'),
      drawing: 'frenchRack',
    },
    {
      text: l('Zaseci masnoću u mrežu, ne dirajući meso.', 'Score the fat in a crosshatch without cutting into the meat.', 'Надрежь жир сеточкой, не задевая мясо.'),
      params: [l('razmak 1 cm', '1 cm apart', 'шаг 1 см')],
      done: l('Masnoća ima pravilnu mrežu, a meso je netaknuto.', 'The fat has an even crosshatch and the meat is untouched.', 'На жире ровная сетка, мясо не задето.'),
      why: l('Zarezi puštaju mast da se istopi i masnoća porumeni ravnomerno, bez skupljanja.', 'The cuts let the fat render and brown evenly without curling.', 'Надрезы дают жиру вытопиться и подрумяниться равномерно, без стягивания.'),
      drawing: 'scoreDuck',
    },
    {
      text: l('Ispeci masnu stranu u tiganju dok ne porumeni.', 'Brown the fat side in the pan until golden.', 'Обжарь жирную сторону на сковороде до золотистого цвета.'),
      params: [l('srednja vatra', 'medium heat', 'средний огонь'), l('5–6 min', '5–6 min', '5–6 мин')],
      done: l('Masnoća je zlatna, a u tiganju je istopljena mast.', 'The fat is golden and there is rendered fat in the pan.', 'Жир золотистый, в сковороде вытопленный жир.'),
      why: l('Srednja vatra topi mast pre nego što zagori. Na jakoj spolja zagori, a unutra ostane gumena.', 'Medium heat renders the fat before it burns. On high it burns outside and stays rubbery inside.', 'Средний огонь вытапливает жир раньше, чем он подгорит. На сильном снаружи горит, внутри остаётся резиновым.'),
      drawing: 'renderFat',
    },
    {
      text: l('Završi u rerni do 54°C u sredini.', 'Finish in the oven to 54°C in the centre.', 'Доведи в духовке до 54°C в центре.'),
      params: [l('200°C', '200°C', '200°C'), l('10–15 min', '10–15 min', '10–15 мин')],
      done: l('Termometar u najdebljem delu pokazuje 54°C.', 'The thermometer in the thickest part reads 54°C.', 'Термометр в самой толстой части показывает 54°C.'),
      why: l('Jagnjetina na 54–56°C je ružičasta i sočna. Iznad 60°C postaje siva i oseti se jači ukus ovčetine.', 'Lamb at 54–56°C is pink and juicy. Above 60°C it turns grey and the muttony flavour gets stronger.', 'Ягнятина при 54–56°C розовая и сочная. Выше 60°C сереет, и бараний привкус усиливается.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Odmori kare, pa seci između kostiju.', 'Rest the rack, then cut between the bones.', 'Дай каре отдохнуть, затем режь между костями.'),
      params: [l('8 min', '8 min', '8 мин')],
      done: l('Kotleti su ružičasti od ivice do ivice i ne puštaju sok na dasku.', 'The cutlets are pink edge to edge and do not leak juice onto the board.', 'Котлеты розовые от края до края и не пускают сок на доску.'),
      why: l('Bez odmora sok iscuri na dasku umesto da ostane u mesu (7.6).', 'Without resting, the juice runs onto the board instead of staying in the meat (7.6).', 'Без отдыха сок вытекает на доску, а не остаётся в мясе (7.6).'),
      drawing: 'restTent',
    },
  ],
  mistake: {
    title: l('Kare isečen čim izađe iz rerne.', 'The rack cut as soon as it leaves the oven.', 'Каре разрезано сразу после духовки.'),
    fix: l(
      'Daska je puna soka, a meso sivlje nego što treba. Osam minuta odmora, pod labavo prebačenom folijom, i tek onda nož.',
      'The board fills with juice and the meat is greyer than it should be. Eight minutes of rest under loosely tented foil, and only then the knife.',
      'Доска в соку, а мясо серее, чем нужно. Восемь минут отдыха под неплотно накинутой фольгой, и только потом нож.',
    ),
  },
  think: {
    question: l('Zašto se masnoća na kareu zaseca?', 'Why is the fat on the rack scored?', 'Зачем надрезают жир на каре?'),
    options: [
      l('Da se istopi i porumeni ravnomerno', 'So it renders and browns evenly', 'Чтобы вытопился и подрумянился равномерно'),
      l('Da meso brže upije so', 'So the meat takes salt faster', 'Чтобы мясо быстрее впитало соль'),
      l('Samo zbog izgleda', 'Only for looks', 'Только ради вида'),
    ],
    answer: 0,
    explain: l(
      'Ceo sloj masnoće se skuplja i ne topi se do sredine. Zarezi otvore put toploti i masti, pa sloj postane tanak, zlatan i hrskav.',
      'A whole layer of fat shrinks and does not render through. The cuts open a path for heat and fat, so the layer turns thin, golden and crisp.',
      'Цельный слой жира стягивается и не вытапливается насквозь. Надрезы открывают путь теплу и жиру, и слой становится тонким, золотистым и хрустящим.',
    ),
  },
  recipe: { name: l('Jagnjeći kare sa jusom', 'Rack of lamb with jus', 'Каре ягнёнка с жю'), protein: 24, carbs: 1, fat: 21, kcal: 290 },
}

const venison: Lesson = {
  id: '3.5.4',
  title: l('Srneći file', 'Venison loin', 'Филе косули'),
  goal: l(
    'Ispečeš posni srneći file kratko i precizno, da ostane sočan i ružičast.',
    'You cook a lean venison loin briefly and precisely so it stays juicy and pink.',
    'Ты коротко и точно жаришь постное филе косули, чтобы оно осталось сочным и розовым.',
  ),
  minutes: 6,
  key: { value: l('52–54°C', '52–54°C', '52–54°C'), label: l('sredina, nikad više', 'centre, never more', 'центр, не выше') },
  need: [
    { item: l('Srneći file, očišćen', 'Venison loin, trimmed', 'Филе косули, зачищенное'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Kleka i biber, mleveni', 'Juniper and pepper, ground', 'Можжевельник и перец, молотые'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
    { item: l('Puter i timijan', 'Butter and thyme', 'Масло и тимьян'), qty: l('30 g + 3 grančice', '30 g + 3 sprigs', '30 г + 3 веточки') },
  ],
  why: l(
    'Srnetina skoro da nema masti. Ono što svinjetinu i junetinu drži sočnom ovde ne postoji, pa svaki stepen preko cilja ide pravo u suvo meso.',
    'Venison has almost no fat. What keeps pork and beef juicy is missing here, so every degree past the target goes straight into dry meat.',
    'В косуле почти нет жира. То, что держит сочными свинину и говядину, здесь отсутствует, и каждый градус сверх цели — прямо в сухое мясо.',
  ),
  steps: [
    {
      text: l('Skini svu srebrnu opnu sa filea.', 'Remove all the silver skin from the loin.', 'Сними всю серебристую плёнку с филе.'),
      done: l('File je tamnocrven i gladak, bez sjajnih traka.', 'The loin is dark red and smooth, with no shiny strips.', 'Филе тёмно-красное и гладкое, без блестящих полос.'),
      why: l('Opna se skuplja na toploti, savija file i ostaje žilava (7.2).', 'The skin tightens in the heat, bends the loin and stays tough (7.2).', 'Плёнка стягивается от тепла, гнёт филе и остаётся жёсткой (7.2).'),
      drawing: 'silverSkin',
    },
    {
      text: l('Posoli i pospi mlevenom klekom i biberom.', 'Salt it and dust with ground juniper and pepper.', 'Посоли и посыпь молотым можжевельником и перцем.'),
      done: l('Začin je ravnomerno raspoređen po celom fileu.', 'The seasoning is spread evenly over the whole loin.', 'Приправа ровно распределена по всему филе.'),
      why: l('Kleka je klasičan par divljači. Smolasta je i podiže ukus mesa bez maskiranja.', 'Juniper is the classic partner of game. It is resinous and lifts the meat without masking it.', 'Можжевельник — классическая пара дичи. Он смолистый и подчёркивает вкус мяса, не маскируя его.'),
    },
    {
      text: l('Ispeci sa svih strana na jakoj vatri, kratko.', 'Sear on all sides over high heat, briefly.', 'Обжарь со всех сторон на сильном огне, коротко.'),
      params: [l('4–5 min ukupno', '4–5 min in total', '4–5 мин всего')],
      done: l('File ima tamnu koricu sa svih strana.', 'The loin has a dark crust all round.', 'У филе тёмная корочка со всех сторон.'),
      why: l('Posno meso brzo pređe iz sirovog u pečeno. Korica mora brzo, pre nego što se sredina zagreje.', 'Lean meat goes from raw to done quickly. The crust must come fast, before the centre heats up.', 'Постное мясо быстро переходит от сырого к готовому. Корочка должна появиться быстро, пока центр не прогрелся.'),
      drawing: 'searRelease',
    },
    {
      text: l('Dodaj puter i timijan, podlij, pa završi u rerni.', 'Add the butter and thyme, baste, then finish in the oven.', 'Добавь масло и тимьян, полей, затем доведи в духовке.'),
      params: [l('180°C', '180°C', '180°C'), l('do 52°C', 'to 52°C', 'до 52°C'), l('5–8 min', '5–8 min', '5–8 мин')],
      done: l('Termometar u sredini pokazuje 52°C.', 'The thermometer in the centre reads 52°C.', 'Термометр в центре показывает 52°C.'),
      why: l('Puter daje mast koju meso nema. Rerna završava sredinu ravnomerno, bez dodatne korice.', 'Butter brings the fat the meat lacks. The oven finishes the centre evenly without more crust.', 'Масло даёт жир, которого нет в мясе. Духовка ровно доводит центр без лишней корочки.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Odmori 5 minuta i seci popreko na deblje šnite.', 'Rest 5 minutes and slice across the grain into thick slices.', 'Дай отдохнуть 5 минут и нарежь поперёк волокон толстыми ломтиками.'),
      params: [l('5 min', '5 min', '5 мин'), l('2 cm', '2 cm', '2 см')],
      done: l('Šnite su ružičaste, sjajne i sočne.', 'The slices are pink, glossy and juicy.', 'Ломтики розовые, блестящие и сочные.'),
      why: l('Seči popreko skraćuje vlakna, pa i posno meso deluje mekano (7.3).', 'Cutting across the grain shortens the fibres, so even lean meat feels tender (7.3).', 'Нарезка поперёк укорачивает волокна, и даже постное мясо кажется нежным (7.3).'),
      drawing: 'acrossGrain',
    },
  ],
  mistake: {
    title: l('Srnetina pečena do kraja, kao svinjetina.', 'Venison cooked through like pork.', 'Косуля прожарена полностью, как свинина.'),
    fix: l(
      'Posno meso postane suvo i dobije ukus jetre. Srneći file se služi ružičast. Izuzetak je divlja svinja: ona se uvek peče do 71°C, zbog trihinele.',
      'Lean meat dries out and tastes of liver. Venison loin is served pink. The exception is wild boar: it is always cooked to 71°C because of trichinella.',
      'Постное мясо пересыхает и отдаёт печенью. Филе косули подают розовым. Исключение — дикий кабан: его всегда готовят до 71°C из-за трихинеллы.',
    ),
  },
  think: {
    question: l('Zašto srneći file ne sme preko 54°C?', 'Why must venison loin not go above 54°C?', 'Почему филе косули нельзя доводить выше 54°C?'),
    options: [
      l('Nema masti da ga zadrži sočnim', 'It has no fat to keep it juicy', 'В нём нет жира, чтобы держать сочность'),
      l('Postaje opasno', 'It becomes dangerous', 'Оно становится опасным'),
      l('Kleka zagori', 'The juniper burns', 'Можжевельник подгорает'),
    ],
    answer: 0,
    explain: l(
      'Mast u mesu se topi i podmazuje vlakna dok žvaćeš. Srnetina je nema, pa sočnost zavisi samo od soka, a sok nestaje sa svakim stepenom.',
      'Fat in meat melts and lubricates the fibres as you chew. Venison has none, so juiciness depends on its juice alone, and that juice goes with every degree.',
      'Жир в мясе тает и смазывает волокна при жевании. В косуле его нет, поэтому сочность зависит только от сока, а сок уходит с каждым градусом.',
    ),
  },
  recipe: { name: l('Srneći file sa sosom od brusnice', 'Venison loin with cranberry sauce', 'Филе косули с клюквенным соусом'), protein: 26, carbs: 4, fat: 4, kcal: 155 },
}

const scallops: Lesson = {
  id: '3.5.5',
  title: l('Jakobove kapice', 'Scallops', 'Морские гребешки'),
  goal: l(
    'Ispečeš kapice sa tamnozlatnom koricom i providnom, slatkom sredinom.',
    'You sear scallops with a deep golden crust and a translucent, sweet centre.',
    'Ты обжариваешь гребешки с тёмно-золотистой корочкой и прозрачной сладкой серединой.',
  ),
  minutes: 5,
  key: { value: l('90 s', '90 s', '90 с'), label: l('prva strana, bez pomeranja', 'first side, without moving', 'первая сторона, не двигая') },
  need: [
    { item: l('Kapice bez ljušture, suve (bez fosfata)', 'Shelled scallops, dry (no phosphates)', 'Гребешки без раковины, сухие (без фосфатов)'), qty: l('8', '8', '8') },
    { item: l('Ulje, puter, so', 'Oil, butter, salt', 'Масло, сливочное масло, соль'), qty: l('1 kašika + 20 g', '1 tbsp + 20 g', '1 ст. л. + 20 г') },
    { item: l('Tiganj bez obloge, papirni ubrusi', 'An uncoated pan, paper towels', 'Сковорода без покрытия, бумажные полотенца'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kapica je spremna za tri minuta, a pokvarena za četiri. Ovo je lekcija o tajmingu više nego o receptu.',
    'A scallop is done in three minutes and ruined in four. This is a lesson in timing more than in a recipe.',
    'Гребешок готов за три минуты и испорчен за четыре. Это урок тайминга больше, чем рецепта.',
  ),
  steps: [
    {
      text: l('Skini mali bočni mišić i osuši kapice papirom.', 'Remove the small side muscle and pat the scallops dry.', 'Удали маленький боковой мускул и обсуши гребешки бумагой.'),
      done: l('Kapice su suve na dodir, bez ijedne kapi.', 'The scallops are dry to the touch, without a drop.', 'Гребешки сухие на ощупь, без единой капли.'),
      why: l('Bočni mišić je žilav. Vlaga na površini pravi paru umesto korice.', 'The side muscle is tough. Moisture on the surface makes steam instead of a crust.', 'Боковой мускул жёсткий. Влага на поверхности даёт пар вместо корочки.'),
    },
    {
      text: l('Posoli tek kad je tiganj vruć.', 'Salt only once the pan is hot.', 'Соли только когда сковорода горячая.'),
      done: l('So je na kapicama manje od minut pre tiganja.', 'The salt is on the scallops less than a minute before the pan.', 'Соль на гребешках меньше минуты до сковороды.'),
      why: l('So izvlači vodu na površinu, i suva kapica za par minuta postane mokra.', 'Salt draws water to the surface, and a dry scallop turns wet within minutes.', 'Соль вытягивает воду на поверхность, и сухой гребешок за пару минут становится мокрым.'),
    },
    {
      text: l('U vrelo ulje poređaj kapice u krug, kao kazaljke sata.', 'Lay the scallops in hot oil in a circle, like the hours on a clock.', 'Выложи гребешки в горячее масло по кругу, как часы на циферблате.'),
      params: [l('razmak 2 cm', '2 cm apart', 'расстояние 2 см')],
      done: l('Svaka kapica cvrči, a nijedna ne dodiruje drugu.', 'Each scallop sizzles and none touches another.', 'Каждый гребешок шипит, ни один не касается другого.'),
      why: l('Krug pamti redosled. Prva spuštena je prva za okretanje.', 'The circle remembers the order. The first one down is the first to turn.', 'Круг запоминает порядок. Первый положенный — первый к переворачиванию.'),
      drawing: 'panSpacing',
    },
    {
      text: l('Peci bez pomeranja, pa okreni istim redom.', 'Sear without moving, then turn them in the same order.', 'Жарь не двигая, затем переверни в том же порядке.'),
      params: [l('90 s + 45 s', '90 s + 45 s', '90 с + 45 с')],
      done: l('Donja strana ima tamnozlatnu koricu preko cele površine.', 'The underside has a deep golden crust across the whole face.', 'Нижняя сторона с тёмно-золотистой корочкой по всей поверхности.'),
      why: l('Svako pomeranje prekida koricu. Kapica se sama odvoji od tiganja kad je korica gotova.', 'Every nudge breaks the crust. A scallop releases from the pan by itself when the crust is ready.', 'Каждое движение прерывает корочку. Гребешок сам отходит от сковороды, когда корочка готова.'),
    },
    {
      text: l('Dodaj kocku putera, podlij i služi odmah.', 'Add a knob of butter, baste and serve at once.', 'Добавь кусочек масла, полей и подавай сразу.'),
      params: [l('20 g', '20 g', '20 г')],
      done: l('Sa strane se vidi providna, sjajna sredina.', 'From the side you can see a translucent, glossy centre.', 'Сбоку видна прозрачная блестящая середина.'),
      why: l('Kapica pečena do kraja postane gumena i izgubi slatkoću. Providna sredina je cilj, ne greška.', 'A scallop cooked through turns rubbery and loses its sweetness. A translucent centre is the goal, not a mistake.', 'Прожаренный гребешок становится резиновым и теряет сладость. Прозрачная середина — цель, а не ошибка.'),
    },
  ],
  mistake: {
    title: l('Mokre kapice koje u tiganju puste vodu.', 'Wet scallops that release water in the pan.', 'Мокрые гребешки, пускающие воду на сковороде.'),
    fix: l(
      'Kapice natopljene fosfatima puštaju vodu i kuvaju se umesto da se peku. Kupuj kapice označene kao suve, bez dodataka, i osuši ih pre tiganja.',
      'Scallops soaked in phosphates release water and stew instead of searing. Buy scallops labelled dry, with no additives, and pat them dry before the pan.',
      'Гребешки, вымоченные в фосфатах, отдают воду и тушатся вместо обжарки. Покупай гребешки с пометкой «сухие», без добавок, и обсушивай перед сковородой.',
    ),
  },
  think: {
    question: l('Zašto se kapice okreću istim redom kojim su stavljene?', 'Why are the scallops turned in the order they went in?', 'Почему гребешки переворачивают в том порядке, в каком их выкладывали?'),
    options: [
      l('Da svaka bude pečena isto vreme', 'So each cooks for the same time', 'Чтобы каждый жарился одинаковое время'),
      l('Da tiganj ostane vruć', 'So the pan stays hot', 'Чтобы сковорода не остыла'),
      l('Zbog izgleda na tanjiru', 'For how they look on the plate', 'Ради вида на тарелке'),
    ],
    answer: 0,
    explain: l(
      'Između prve i poslednje kapice prođe i 20 sekundi. Kod kapice od tri minuta to je razlika između providne i pečene sredine.',
      'As much as 20 seconds pass between the first and the last scallop. In a three-minute scallop that is the difference between a translucent and a cooked-through centre.',
      'Между первым и последним гребешком проходит до 20 секунд. Для гребешка на три минуты это разница между прозрачной и прожаренной серединой.',
    ),
  },
  recipe: { name: l('Kapice na puteru', 'Butter-seared scallops', 'Гребешки на масле'), protein: 18, carbs: 5, fat: 6, kcal: 150 },
}

export const proteinLessons: Lesson[] = [ribeye, crudo, lambRack, venison, scallops]
