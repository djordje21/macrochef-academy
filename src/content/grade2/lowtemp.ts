import { l, type Lesson } from '../types'

// Grade 2 · Module 9 · Low temperature. The oven or water sits close to the target number, so the meat
// cannot overshoot it: no grey band, no dry edge. Time is long, but the margin for error is wide.
// Food safety still applies: nothing sits below 54°C for more than a few hours.

const why: Lesson = {
  id: '2.9.1',
  title: l('Zašto niska temperatura', 'Why low temperature', 'Зачем низкая температура'),
  goal: l(
    'Ispečeš losos na 120°C i vidiš razliku: isti od ivice do sredine, bez belih kapi proteina.',
    'You bake salmon at 120°C and see the difference: the same from edge to centre, with no white beads of protein.',
    'Ты запекаешь лосося при 120°C и видишь разницу: одинаковый от края до центра, без белых капель белка.',
  ),
  minutes: 6,
  key: { value: l('120°C', '120°C', '120°C'), label: l('rerna', 'oven', 'духовка') },
  need: [
    { item: l('File lososa bez kože', 'Skinless salmon fillet', 'Филе лосося без кожи'), qty: l('2 × 150 g', '2 × 150 g', '2 × 150 г') },
    { item: l('So, maslinovo ulje, limun', 'Salt, olive oil, lemon', 'Соль, оливковое масло, лимон'), qty: l('—', '—', '—') },
    { item: l('Pleh, termometar', 'Tray, thermometer', 'Противень, термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Na jakoj toploti spoljni sloj se prepeče dok sredina stigne do cilja: to je sivi prsten. Na niskoj toploti razlika između ivice i sredine skoro nestane.',
    'On high heat the outer layer overcooks while the centre reaches its target: that is the grey band. On low heat the difference between edge and centre almost disappears.',
    'На сильном жаре внешний слой пережаривается, пока центр доходит до цели: это серое кольцо. На слабом жаре разница между краем и центром почти исчезает.',
  ),
  steps: [
    {
      text: l('Posoli losos 15 minuta ranije i osuši ga.', 'Salt the salmon 15 minutes ahead and pat it dry.', 'Посоли лосося за 15 минут и обсуши.'),
      params: [l('1% soli', '1% salt', '1% соли')],
      done: l('Površina je suva i blago sjajna.', 'The surface is dry and slightly glossy.', 'Поверхность сухая и слегка блестящая.'),
    },
    {
      text: l('Premaži uljem i stavi u rernu zagrejanu na 120°C.', 'Brush with oil and put in an oven heated to 120°C.', 'Смажь маслом и поставь в духовку, разогретую до 120°C.'),
      params: [l('120°C', '120°C', '120°C'), l('15–25 min', '15–25 min', '15–25 мин')],
      done: l('Losos je u rerni, a termometar je u najdebljem delu.', 'The salmon is in the oven with a probe in the thickest part.', 'Лосось в духовке, термометр в самой толстой части.'),
      why: l('Rerna od 120°C je samo 70 stepeni iznad cilja, a ne 150. Zato ivica ne stigne da se prepeče.', 'A 120°C oven is only 70 degrees above the target, not 150. So the edge has no time to overcook.', 'Духовка 120°C всего на 70 градусов выше цели, а не на 150. Поэтому край не успевает пережариться.'),
      drawing: 'greyBand',
    },
    {
      text: l('Izvadi losos na 50°C u sredini.', 'Take the salmon out at 50°C at the centre.', 'Вынь лосося при 50°C в центре.'),
      params: [l('50°C', '50°C', '50°C')],
      done: l('Losos je sjajan i narandžast, i lista se pod viljuškom.', 'The salmon is glossy and orange and flakes under a fork.', 'Лосось блестящий, оранжевый и расслаивается под вилкой.'),
      why: l('Na niskoj temperaturi skoro nema rasta posle rerne. Zato se skida bliže cilju nego u 7.9.', 'At low heat there is almost no carry-over after the oven. So it comes out closer to the target than in 7.9.', 'При низкой температуре почти нет роста после духовки. Поэтому снимают ближе к цели, чем в 7.9.'),
    },
    {
      text: l('Preseci i uporedi sa lososom iz tiganja.', 'Cut it open and compare with pan-cooked salmon.', 'Разрежь и сравни с лососем со сковороды.'),
      done: l('Presek je iste boje od ivice do sredine.', 'The cut face is one colour from edge to centre.', 'Срез одного цвета от края до центра.'),
      why: l('Bele kapi na površini su protein koji iscuri kad se riba steže brzo. Na 120°C ih nema.', 'The white beads on the surface are protein squeezed out when fish tightens fast. At 120°C there are none.', 'Белые капли на поверхности — белок, выдавленный при быстром сжатии рыбы. При 120°C их нет.'),
    },
    {
      text: l('Dovrši sa limunom, uljem i krupnom solju.', 'Finish with lemon, oil and flaky salt.', 'Заверши лимоном, маслом и крупной солью.'),
      done: l('Ukus je čist i blag, a tekstura kao puter.', 'The taste is clean and gentle and the texture like butter.', 'Вкус чистый и мягкий, текстура как масло.'),
    },
  ],
  mistake: {
    title: l('Niska temperatura i dugo vreme za svaku namirnicu.', 'Low temperature and long time for everything.', 'Низкая температура и долгое время для всего.'),
    fix: l(
      'Ispod 54°C bakterije i dalje rastu. Riba i meso mogu na nižim brojevima samo kratko, do 2 sata. Dugo kuvanje traži 55°C i više.',
      'Below 54°C bacteria still grow. Fish and meat can go lower only briefly, up to 2 hours. Long cooking needs 55°C and above.',
      'Ниже 54°C бактерии продолжают расти. Рыба и мясо могут готовиться ниже только недолго, до 2 часов. Долгая готовка требует 55°C и выше.',
    ),
  },
  think: {
    question: l('Šta je "sivi prsten" na bifteku?', 'What is the "grey band" on a steak?', 'Что такое «серое кольцо» на стейке?'),
    options: [
      l('Sloj ispod korice koji je prepečen dok je sredina stizala', 'The layer under the crust that overcooked while the centre caught up', 'Слой под корочкой, пережаренный, пока доходил центр'),
      l('Masnoća', 'Fat', 'Жир'),
      l('Znak da meso nije sveže', 'A sign the meat is not fresh', 'Признак несвежего мяса'),
    ],
    answer: 0,
    explain: l(
      'Što je veća razlika između izvora toplote i cilja, to je prsten deblji. Niska temperatura, sous vide i obrnuti biftek (2.9.4) ga skoro brišu.',
      'The bigger the gap between the heat source and the target, the thicker the band. Low temperature, sous vide and reverse sear (2.9.4) all but erase it.',
      'Чем больше разница между источником тепла и целью, тем толще кольцо. Низкая температура, су-вид и обратная обжарка (2.9.4) почти стирают его.',
    ),
  },
  recipe: { name: l('Losos na niskoj temperaturi', 'Slow-baked salmon', 'Лосось при низкой температуре'), protein: 21, carbs: 0, fat: 14, kcal: 210 },
}

const confit: Lesson = {
  id: '2.9.2',
  title: l('Konfi', 'Confit', 'Конфи'),
  goal: l(
    'Napraviš konfi od pačjih bataka koji se odvajaju od kosti, sa hrskavom kožom.',
    'You make duck leg confit that falls from the bone, with crisp skin.',
    'Ты готовишь конфи из утиных ножек, мясо которых отходит от кости, с хрустящей кожей.',
  ),
  minutes: 7,
  key: { value: l('3 h', '3 h', '3 ч'), label: l('u masti', 'in fat', 'в жиру') },
  need: [
    { item: l('Pačji bataci', 'Duck legs', 'Утиные ножки'), qty: l('4 kom', '4', '4 шт') },
    { item: l('So, beli luk, majčina dušica, lovor', 'Salt, garlic, thyme, bay', 'Соль, чеснок, тимьян, лавр'), qty: l('so 2%', 'salt 2%', 'соль 2%') },
    { item: l('Pačja ili svinjska mast', 'Duck or pork fat', 'Утиный или свиной жир'), qty: l('~1 l', '~1 l', '~1 л') },
    { item: l('Uska posuda za rernu', 'Narrow ovenproof dish', 'Узкая форма для духовки'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Konfi je kuvanje u masti na niskoj temperaturi. Mast ne prodire u meso, ali drži toplotu ravnomernu i meso se ne suši. Isti princip kao braziranje (12.1), samo u masti umesto u vodi.',
    'Confit is cooking in fat at low temperature. The fat does not soak in, but it keeps the heat even and the meat cannot dry out. The same principle as braising (12.1), in fat instead of water.',
    'Конфи — готовка в жиру при низкой температуре. Жир не впитывается, но держит ровное тепло, и мясо не сохнет. Тот же принцип, что брезирование (12.1), только в жиру вместо воды.',
  ),
  steps: [
    {
      text: l('Natrljaj batake solju i začinima i ostavi preko noći.', 'Rub the legs with salt and aromatics and leave overnight.', 'Натри ножки солью и пряностями и оставь на ночь.'),
      params: [l('so 2%', 'salt 2%', 'соль 2%'), l('12–24 h', '12–24 h', '12–24 ч')],
      done: l('Meso je čvršće i tamnije, a koža suva.', 'The meat is firmer and darker and the skin dry.', 'Мясо плотнее и темнее, кожа сухая.'),
      why: l('So začini do kosti i izvuče vodu. Bez ovog koraka konfi je bljutav.', 'The salt seasons to the bone and draws out water. Without this step confit is bland.', 'Соль просаливает до кости и вытягивает воду. Без этого шага конфи пресное.'),
    },
    {
      text: l('Obriši so, osuši batake i složi ih u usku posudu.', 'Wipe off the salt, pat the legs dry and pack them into a narrow dish.', 'Сотри соль, обсуши ножки и плотно уложи в узкую форму.'),
      done: l('Bataci leže tesno, jedan uz drugi.', 'The legs lie snugly side by side.', 'Ножки лежат плотно друг к другу.'),
      why: l('Uska posuda znači manje masti da se pokriju. Široka bi tražila dva litra.', 'A narrow dish means less fat to cover them. A wide one would need two litres.', 'Узкая форма — меньше жира, чтобы покрыть. Широкой понадобилось бы два литра.'),
    },
    {
      text: l('Prelij otopljenom mašću dok potpuno ne pokrije meso.', 'Pour over melted fat until the meat is completely covered.', 'Залей растопленным жиром, пока мясо полностью не покроется.'),
      done: l('Nijedan deo bataka ne viri iz masti.', 'No part of any leg sticks out of the fat.', 'Ни одна часть ножек не выступает из жира.'),
      drawing: 'confitPot',
    },
    {
      text: l('Peci u rerni dok kost ne počne da se okreće u mesu.', 'Cook in the oven until the bone twists freely in the meat.', 'Томи в духовке, пока кость не начнёт свободно поворачиваться в мясе.'),
      params: [l('130°C', '130°C', '130°C'), l('2.5–3 h', '2.5–3 h', '2,5–3 ч'), l('mast ne ključa', 'the fat never bubbles', 'жир не кипит')],
      done: l('Kost se okreće prstima, a meso se odvaja.', 'The bone turns between your fingers and the meat comes away.', 'Кость поворачивается пальцами, мясо отходит.'),
      why: l('Mast oko 90°C, ne vruća za prženje. Mehurići znače da se meso prži, a to je sasvim drugo jelo.', 'The fat sits around 90°C, not frying hot. Bubbles mean the meat is frying, which is a different dish.', 'Жир около 90°C, а не для жарки. Пузыри значат, что мясо жарится, а это совсем другое блюдо.'),
      drawing: 'forkTender',
    },
    {
      text: l('Pred služenje ispeci batake kožom nadole do hrskavog.', 'Before serving, crisp the legs skin side down.', 'Перед подачей обжарь ножки кожей вниз до хруста.'),
      params: [l('tiganj ili rerna 220°C', 'pan or oven at 220°C', 'сковорода или духовка 220°C'), l('8–10 min', '8–10 min', '8–10 мин')],
      done: l('Koža je staklasto hrskava, a meso vrelo i mekano.', 'The skin is glass-crisp and the meat hot and tender.', 'Кожа хрустящая, как стекло, мясо горячее и мягкое.'),
      why: l('Konfi pokriven mašću drži 2 nedelje u frižideru. Mast se koristi ponovo, za krompir.', 'Confit covered in fat keeps 2 weeks in the fridge. The fat is used again, for potatoes.', 'Конфи под жиром хранится 2 недели в холодильнике. Жир используют снова, для картофеля.'),
    },
  ],
  mistake: {
    title: l('Konfi koji krčka u masti na šporetu.', 'Confit simmering in fat on the stove.', 'Конфи кипит в жиру на плите.'),
    fix: l(
      'Mast na ključanju je preko 150°C i meso se prži: spolja suvo, iznutra žilavo. Rerna na 130°C drži mast tiho ispod 100°C tri sata bez nadzora.',
      'Fat at a bubble is over 150°C and the meat fries: dry outside, stringy inside. A 130°C oven keeps the fat quietly below 100°C for three hours unattended.',
      'Кипящий жир — это больше 150°C, и мясо жарится: сухое снаружи, жёсткое внутри. Духовка на 130°C держит жир ниже 100°C три часа без присмотра.',
    ),
  },
  think: {
    question: l('Zašto konfi nije mastan iako se kuva u masti?', 'Why is confit not greasy even though it cooks in fat?', 'Почему конфи не жирное, хотя готовится в жиру?'),
    options: [
      l('Mast ne ulazi u meso, a pačja mast iz kože izlazi napolje', 'Fat does not soak in, and the duck\'s own fat renders out', 'Жир не впитывается, а собственный утиный жир вытапливается'),
      l('Mast ispari u rerni', 'The fat evaporates in the oven', 'Жир испаряется в духовке'),
      l('So upija mast', 'The salt absorbs the fat', 'Соль впитывает жир'),
    ],
    answer: 0,
    explain: l(
      'Meso je puno vode, a voda i mast se ne mešaju. Mast je samo topla kupka. Pačji batak posle konfija čak ima manje masti nego pre.',
      'Meat is full of water, and water and fat do not mix. The fat is just a warm bath. A duck leg after confit even has less fat than before.',
      'Мясо полно воды, а вода и жир не смешиваются. Жир — просто тёплая ванна. Утиная ножка после конфи даже менее жирная, чем до.',
    ),
  },
  recipe: { name: l('Pačji konfi', 'Duck confit', 'Утиное конфи'), protein: 25, carbs: 0, fat: 18, kcal: 265 },
}

const sousVide: Lesson = {
  id: '2.9.3',
  title: l('Sous vide bez skupe opreme', 'Sous vide without expensive kit', 'Су-вид без дорогого оборудования'),
  goal: l(
    'Skuvaš pileća prsa u vodi na tačnoj temperaturi, samo sa loncem, kesom i termometrom.',
    'You cook chicken breast in water at an exact temperature with only a pot, a bag and a thermometer.',
    'Ты готовишь куриную грудку в воде при точной температуре, имея лишь кастрюлю, пакет и термометр.',
  ),
  minutes: 7,
  key: { value: l('±1°C', '±1°C', '±1°C'), label: l('voda', 'water', 'вода') },
  need: [
    { item: l('Pileća prsa, 3 cm debljine', 'Chicken breast, 3 cm thick', 'Куриная грудка толщиной 3 см'), qty: l('2 × 200 g', '2 × 200 g', '2 × 200 г') },
    { item: l('Kesa za zamrzivač sa zatvaračem', 'Zip-lock freezer bag', 'Пакет для заморозки с застёжкой'), qty: l('1', '1', '1') },
    { item: l('Veliki lonac sa najmanje 5 l vode', 'Large pot with at least 5 l of water', 'Большая кастрюля, минимум 5 л воды'), qty: l('1', '1', '1') },
    { item: l('Termometar, štipaljka', 'Thermometer, clip', 'Термометр, прищепка'), qty: l('1', '1', '1') },
    { item: l('So, limun, majčina dušica', 'Salt, lemon, thyme', 'Соль, лимон, тимьян'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Sous vide znači "pod vakuumom": meso u kesi, u vodi koja je tačno na ciljnoj temperaturi. Meso ne može da pređe cilj, pa su pileća prsa sočna iz prvog pokušaja.',
    'Sous vide means "under vacuum": meat in a bag, in water held exactly at the target temperature. The meat cannot overshoot, so chicken breast is juicy first time.',
    'Су-вид значит «под вакуумом»: мясо в пакете, в воде точно целевой температуры. Мясо не может перегреться, и куриная грудка сочная с первого раза.',
  ),
  steps: [
    {
      text: l('Posoli prsa, stavi ih u kesu sa limunom i biljem.', 'Salt the breasts and put them in the bag with lemon and herbs.', 'Посоли грудки и положи в пакет с лимоном и травами.'),
      params: [l('1% soli', '1% salt', '1% соли')],
      done: l('Prsa leže ravno, jedna pored drugih.', 'The breasts lie flat, side by side.', 'Грудки лежат ровно, рядом друг с другом.'),
    },
    {
      text: l('Polako spuštaj otvorenu kesu u vodu dok voda ne istera vazduh, pa zatvori.', 'Lower the open bag slowly into water until the water pushes out the air, then seal.', 'Медленно опускай открытый пакет в воду, пока вода не вытеснит воздух, затем закрой.'),
      done: l('Kesa se priljubila uz meso, bez mehura.', 'The bag clings to the meat with no bubbles.', 'Пакет прилегает к мясу без пузырей.'),
      why: l('Vazduh izoluje, pa delovi mesa sa mehurom kasne. Ovako dobiješ vakuum bez mašine.', 'Air insulates, so meat under a bubble lags behind. This gives you a vacuum without a machine.', 'Воздух изолирует, и мясо под пузырём отстаёт. Так получается вакуум без машины.'),
      drawing: 'zipBag',
    },
    {
      text: l('Zagrej vodu u velikom loncu na tačnu temperaturu.', 'Heat the water in the large pot to the exact temperature.', 'Нагрей воду в большой кастрюле до точной температуры.'),
      params: [l('piletina 63°C', 'chicken 63°C', 'курица 63°C'), l('biftek 54°C', 'steak 54°C', 'стейк 54°C')],
      done: l('Termometar u vodi pokazuje 63°C dva minuta zaredom.', 'The probe in the water reads 63°C for two minutes running.', 'Термометр в воде показывает 63°C две минуты подряд.'),
      why: l('Veliki lonac drži temperaturu stabilno. Što više vode, to sporije menja temperaturu kad ubaciš meso.', 'A large pot holds the temperature steady. The more water, the slower it changes when the meat goes in.', 'Большая кастрюля держит температуру стабильно. Чем больше воды, тем медленнее она меняется, когда кладёшь мясо.'),
      drawing: 'sousVidePot',
    },
    {
      text: l('Uroni kesu i drži vodu na cilju, podešavajući vatru.', 'Submerge the bag and hold the water on target, adjusting the heat.', 'Погрузи пакет и держи воду на цели, регулируя огонь.'),
      params: [l('1.5 h', '1.5 h', '1,5 ч'), l('provera na 10 min', 'check every 10 min', 'проверка каждые 10 мин'), l('±1°C', '±1°C', '±1°C')],
      done: l('Voda je celo vreme bila između 62 i 64°C.', 'The water stayed between 62 and 64°C the whole time.', 'Вода всё время была между 62 и 64°C.'),
      why: l('Na 63°C piletina je bezbedna posle dovoljno vremena, ne odmah. Zato 1.5 sat za prsa od 3 cm, a ne manje.', 'At 63°C chicken becomes safe after enough time, not instantly. Hence 1.5 hours for a 3 cm breast, not less.', 'При 63°C курица становится безопасной после достаточного времени, а не сразу. Поэтому 1,5 часа для грудки 3 см, не меньше.'),
    },
    {
      text: l('Izvadi, osuši i zapeci kratko na vrelom tiganju.', 'Take out, pat dry and sear briefly in a very hot pan.', 'Вынь, обсуши и коротко обжарь на раскалённой сковороде.'),
      params: [l('45 s po strani', '45 s per side', '45 с на сторону')],
      done: l('Spolja zlatna korica, iznutra sočno i belo od ivice do ivice.', 'A golden crust outside, juicy and white edge to edge inside.', 'Снаружи золотистая корочка, внутри сочно и бело от края до края.'),
      why: l('Meso je već gotovo. Tiganj samo pravi koricu (4.6), pa je kratak i jak.', 'The meat is already cooked. The pan only makes the crust (4.6), so it is short and hot.', 'Мясо уже готово. Сковорода только делает корочку (4.6), поэтому коротко и сильно.'),
      drawing: 'searRelease',
    },
  ],
  mistake: {
    title: l('Sous vide piletine na 55°C "da bude sočnija".', 'Sous vide chicken at 55°C "to make it juicier".', 'Су-вид курицы при 55°C, «чтобы сочнее».'),
    fix: l(
      'Na 55°C piletina treba satima da postane bezbedna, a i tada je gumena. Drži se brojeva iz lekcije: piletina 63°C, junetina 54°C, i dovoljno vremena.',
      'At 55°C chicken needs hours to become safe and is rubbery even then. Stick to the lesson\'s numbers: chicken 63°C, beef 54°C, and enough time.',
      'При 55°C курице нужны часы, чтобы стать безопасной, и даже тогда она резиновая. Держись цифр урока: курица 63°C, говядина 54°C и достаточно времени.',
    ),
  },
  think: {
    question: l('Voda je pala na 58°C dok nisi gledao. Šta radiš?', 'The water dropped to 58°C while you were not looking. What do you do?', 'Вода опустилась до 58°C, пока ты не смотрел. Что делаешь?'),
    options: [
      l('Vratiš je na 63°C i produžiš vreme za koliko je bila ispod', 'Bring it back to 63°C and extend the time by however long it was below', 'Возвращаешь к 63°C и продлеваешь время на столько, сколько было ниже'),
      l('Pojačaš na 80°C da nadoknadiš', 'Turn it up to 80°C to make up for it', 'Поднимаешь до 80°C, чтобы наверстать'),
      l('Ništa, izvadiš na vreme', 'Nothing, take it out on time', 'Ничего, вынимаешь вовремя'),
    ],
    answer: 0,
    explain: l(
      'Sigurnost zavisi od vremena na pravoj temperaturi. Vreme ispod cilja se ne računa. Vrela voda bi prepekla spoljni sloj i izgubio bi se smisao sous videa.',
      'Safety depends on time at the right temperature. Time below the target does not count. Hot water would overcook the outside and defeat the point of sous vide.',
      'Безопасность зависит от времени при правильной температуре. Время ниже цели не считается. Горячая вода пережарит внешний слой, и смысл су-вида потеряется.',
    ),
  },
  recipe: { name: l('Pileća prsa sous vide', 'Sous vide chicken breast', 'Куриная грудка су-вид'), protein: 29, carbs: 0, fat: 4, kcal: 150 },
}

const reverseSear: Lesson = {
  id: '2.9.4',
  title: l('Biftek obrnutim redom', 'Reverse-seared steak', 'Стейк обратной обжаркой'),
  goal: l(
    'Ispečeš debeo biftek prvo u rerni, pa u tiganju, ružičast od ivice do ivice.',
    'You cook a thick steak first in the oven, then in the pan, pink from edge to edge.',
    'Ты готовишь толстый стейк сначала в духовке, потом на сковороде, розовым от края до края.',
  ),
  minutes: 7,
  key: { value: l('49°C', '49°C', '49°C'), label: l('iz rerne', 'out of the oven', 'из духовки') },
  need: [
    { item: l('Rozbratna ili T-bone, 4–5 cm', 'Rib-eye or T-bone, 4–5 cm', 'Рибай или ти-бон, 4–5 см'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('So, krupno mleveni biber', 'Salt, coarse black pepper', 'Соль, крупный чёрный перец'), qty: l('so 1%', 'salt 1%', 'соль 1%') },
    { item: l('Pleh sa rešetkom, liveni tiganj', 'Tray with rack, cast-iron pan', 'Противень с решёткой, чугунная сковорода'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Puter, beli luk, ruzmarin, termometar', 'Butter, garlic, rosemary, thermometer', 'Масло, чеснок, розмарин, термометр'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Debeo odrezak u tiganju dobije sivi prsten od centimetra pre nego što sredina stigne. Obrnuto, prvo nežno u rerni, pa vrela korica na kraju, i prstena skoro nema.',
    'A thick steak in a pan gets a centimetre-wide grey band before the centre arrives. The other way round, gently in the oven first and a hot crust at the end, the band almost vanishes.',
    'Толстый стейк на сковороде получает серое кольцо в сантиметр, пока дойдёт центр. Наоборот — сначала мягко в духовке, а в конце горячая корочка — и кольца почти нет.',
  ),
  steps: [
    {
      text: l('Posoli odrezak dan ranije i ostavi ga otkriveno u frižideru.', 'Salt the steak a day ahead and leave it uncovered in the fridge.', 'Посоли стейк за день и оставь без укрытия в холодильнике.'),
      params: [l('1% soli', '1% salt', '1% соли'), l('12–24 h', '12–24 h', '12–24 ч')],
      done: l('Površina je suva i tamnocrvena.', 'The surface is dry and dark red.', 'Поверхность сухая и тёмно-красная.'),
      why: l('Suva površina je preduslov za koricu u 30 sekundi, kao kod pileta u 13.1.', 'A dry surface is what lets the crust form in 30 seconds, as with the chicken in 13.1.', 'Сухая поверхность — условие корочки за 30 секунд, как с курицей в 13.1.'),
      drawing: 'dryBrine',
    },
    {
      text: l('Peci na rešetki u niskoj rerni do 49°C u sredini.', 'Roast on a rack in a low oven to 49°C at the centre.', 'Запекай на решётке в слабой духовке до 49°C в центре.'),
      params: [l('110°C', '110°C', '110°C'), l('45–70 min', '45–70 min', '45–70 мин')],
      done: l('Termometar pokazuje 49°C, a odrezak je spolja siv i suv.', 'The probe reads 49°C and the steak is grey and dry outside.', 'Термометр показывает 49°C, стейк снаружи серый и сухой.'),
      why: l('Siva i suva površina je dobra: rerna je osušila spoljni sloj pa korica nastaje odmah.', 'A grey, dry surface is good: the oven has dried the outside, so the crust forms at once.', 'Серая сухая поверхность — это хорошо: духовка подсушила внешний слой, и корочка образуется сразу.'),
      drawing: 'reverseSear',
    },
    {
      text: l('Zagrej tiganj dok ne počne da se dimi.', 'Heat the pan until it starts to smoke.', 'Разогрей сковороду до лёгкого дыма.'),
      params: [l('najjača vatra', 'highest heat', 'максимальный огонь'), l('ulje visoke tačke dimljenja', 'high smoke-point oil', 'масло с высокой точкой дымления')],
      done: l('Ulje treperi i počinje da se dimi.', 'The oil shimmers and begins to smoke.', 'Масло дрожит и начинает дымить.'),
    },
    {
      text: l('Zapeci odrezak sa svih strana, sa puterom na kraju.', 'Sear the steak on every side, with butter at the end.', 'Обжарь стейк со всех сторон, в конце с маслом.'),
      params: [l('1 min po strani', '1 min per side', '1 мин на сторону'), l('ivice 20 s', 'edges 20 s', 'края 20 с')],
      done: l('Korica je tamnobraon svuda, a termometar pokazuje 52–53°C.', 'The crust is dark brown all over and the probe reads 52–53°C.', 'Корочка тёмно-коричневая везде, термометр показывает 52–53°C.'),
      drawing: 'searRelease',
    },
    {
      text: l('Odmori kratko i seci poprečno.', 'Rest briefly and slice across the grain.', 'Дай коротко отдохнуть и нарежь поперёк волокон.'),
      params: [l('3–5 min', '3–5 min', '3–5 мин'), l('54°C', '54°C', '54°C')],
      done: l('Presek je ružičast do same korice, bez sivog sloja.', 'The cut face is pink right up to the crust, with no grey layer.', 'Срез розовый до самой корочки, без серого слоя.'),
      why: l('Posle rerne meso je već odmorno, pa je ovde odmor kraći nego u 2.3.6.', 'After the oven the meat is already relaxed, so the rest here is shorter than in 2.3.6.', 'После духовки мясо уже расслаблено, поэтому отдых короче, чем в 2.3.6.'),
      drawing: 'doneness',
    },
  ],
  mistake: {
    title: l('Obrnuti postupak za tanak odrezak od 2 cm.', 'Reverse sear on a thin 2 cm steak.', 'Обратная обжарка тонкого стейка 2 см.'),
    fix: l(
      'Tanak odrezak u rerni pređe cilj pre nego što stigneš do tiganja, pa se korica peče na već gotovom mesu. Ispod 3,5 cm idi direktno u tiganj kao u 2.3.6.',
      'A thin steak passes its target in the oven before you reach the pan, so the crust cooks on meat that is already done. Under 3.5 cm go straight to the pan as in 2.3.6.',
      'Тонкий стейк в духовке проскочит цель раньше, чем ты дойдёшь до сковороды, и корочка будет жариться на готовом мясе. Тоньше 3,5 см — сразу на сковороду, как в 2.3.6.',
    ),
  },
  think: {
    question: l('Zašto se odrezak vadi iz rerne na 49°C, a ne na 54°C?', 'Why does the steak leave the oven at 49°C, not 54°C?', 'Почему стейк вынимают из духовки при 49°C, а не при 54°C?'),
    options: [
      l('Tiganj i odmor dodaju još 4–5 stepeni', 'The pan and the rest add another 4–5 degrees', 'Сковорода и отдых добавят ещё 4–5 градусов'),
      l('Na 49°C je bezbedno', 'It is safe at 49°C', 'При 49°C безопасно'),
      l('Da se uštedi vreme', 'To save time', 'Чтобы сэкономить время'),
    ],
    answer: 0,
    explain: l(
      'Korica na vrelom tiganju unese toplotu u meso. Plan unazad, kao u 2.1.2: od cilja se oduzme ono što dolazi posle.',
      'The crust on a hot pan drives heat into the meat. Plan backwards, as in 2.1.2: subtract from the target whatever comes after.',
      'Корочка на раскалённой сковороде гонит тепло в мясо. Планируй назад, как в 2.1.2: от цели отнимают то, что будет потом.',
    ),
  },
  recipe: { name: l('Biftek obrnutim redom', 'Reverse-seared rib-eye', 'Рибай обратной обжаркой'), protein: 24, carbs: 0, fat: 21, kcal: 285 },
}

const lambShoulder: Lesson = {
  id: '2.9.5',
  title: l('Sporo pečena jagnjeća plećka', 'Slow-roasted lamb shoulder', 'Медленно запечённая баранья лопатка'),
  goal: l(
    'Ispečeš jagnjeću plećku za 4 sata dok se meso ne odvaja kašikom od kosti.',
    'You roast a lamb shoulder for 4 hours until the meat comes off the bone with a spoon.',
    'Ты запекаешь баранью лопатку 4 часа, пока мясо не будет отходить от кости ложкой.',
  ),
  minutes: 6,
  key: { value: l('4 h', '4 h', '4 ч'), label: l('na 150°C', 'at 150°C', 'при 150°C') },
  need: [
    { item: l('Jagnjeća plećka sa kosti', 'Bone-in lamb shoulder', 'Баранья лопатка на кости'), qty: l('2 kg', '2 kg', '2 кг') },
    { item: l('Beli luk, ruzmarin, limun', 'Garlic, rosemary, lemon', 'Чеснок, розмарин, лимон'), qty: l('1 glavica + 4 grančice + 1', '1 bulb + 4 sprigs + 1', '1 головка + 4 веточки + 1') },
    { item: l('Krompir i crni luk', 'Potatoes and onions', 'Картофель и лук'), qty: l('1.5 kg', '1.5 kg', '1,5 кг') },
    { item: l('Belo vino ili voda, folija', 'White wine or water, foil', 'Белое вино или вода, фольга'), qty: l('300 ml', '300 ml', '300 мл') },
  ],
  why: l(
    'Plećka je najukusniji deo jagnjeta, pun kolagena. Na niskoj temperaturi 4 sata, ona se pretvori u nedeljni ručak koji se ne seče nego kida.',
    'The shoulder is the tastiest cut of lamb, full of collagen. Four hours at low heat turn it into a Sunday lunch that is not carved but pulled apart.',
    'Лопатка — самая вкусная часть ягнёнка, полная коллагена. Четыре часа на слабом огне превращают её в воскресный обед, который не режут, а разбирают.',
  ),
  steps: [
    {
      text: l('Zaseci plećku i utisni beli luk i ruzmarin u rezove.', 'Make small cuts in the shoulder and push garlic and rosemary into them.', 'Сделай надрезы в лопатке и вложи в них чеснок и розмарин.'),
      params: [l('rezovi 2 cm dubine', 'cuts 2 cm deep', 'надрезы глубиной 2 см'), l('so 1%', 'salt 1%', 'соль 1%')],
      done: l('Plećka je izbodena i puna belog luka.', 'The shoulder is studded all over with garlic.', 'Лопатка нашпигована чесноком.'),
    },
    {
      text: l('Složi krompir i luk u pleh, plećku na njih, i dolij vino.', 'Lay potatoes and onions in the tray, the shoulder on top, and add the wine.', 'Выложи картофель и лук в противень, лопатку сверху, влей вино.'),
      params: [l('300 ml', '300 ml', '300 мл')],
      done: l('Plećka leži na povrću, a tečnost je na dnu pleha.', 'The shoulder sits on the vegetables with liquid in the bottom of the tray.', 'Лопатка лежит на овощах, жидкость на дне противня.'),
      why: l('Krompir upija sok i mast iz plećke četiri sata. To je prilog koji se pravi sam.', 'The potatoes soak up the juice and fat from the shoulder for four hours. A side dish that makes itself.', 'Картофель четыре часа впитывает сок и жир из лопатки. Гарнир, который готовит себя сам.'),
    },
    {
      text: l('Pokrij folijom i peci polako.', 'Cover with foil and roast slowly.', 'Накрой фольгой и запекай медленно.'),
      params: [l('150°C', '150°C', '150°C'), l('3.5 h', '3.5 h', '3,5 ч')],
      done: l('Meso se lako odvaja od kosti kad ga gurneš viljuškom.', 'The meat comes away from the bone easily when pushed with a fork.', 'Мясо легко отходит от кости, если толкнуть вилкой.'),
      why: l('Folija zadržava paru, pa je ovo braziranje u rerni (12.1). Kolagen se topi tek posle sati.', 'The foil traps the steam, so this is braising in the oven (12.1). Collagen melts only after hours.', 'Фольга удерживает пар, так что это брезирование в духовке (12.1). Коллаген тает только через часы.'),
      drawing: 'lambTray',
    },
    {
      text: l('Skini foliju, pojačaj rernu i zapeci koricu.', 'Remove the foil, turn up the oven and brown the crust.', 'Сними фольгу, прибавь духовку и подрумянь корочку.'),
      params: [l('200°C', '200°C', '200°C'), l('25–30 min', '25–30 min', '25–30 мин')],
      done: l('Plećka je tamnobraon i krcka, a krompir je zlatan.', 'The shoulder is dark brown and crackling, and the potatoes golden.', 'Лопатка тёмно-коричневая и хрустит, картофель золотистый.'),
      why: l('Korica na kraju, kao kod svinjskog pečenja (13.3): tako ne izgori dok meso omekšava.', 'The crust at the end, as with roast pork (13.3): that way it does not burn while the meat softens.', 'Корочка в конце, как у свиного жаркого (13.3): так она не сгорит, пока мясо размягчается.'),
    },
    {
      text: l('Odmori 15 minuta i služi kidajući meso kašikom.', 'Rest 15 minutes and serve by pulling the meat apart with a spoon.', 'Дай отдохнуть 15 минут и подавай, разбирая мясо ложкой.'),
      params: [l('15 min', '15 min', '15 мин')],
      done: l('Kost izlazi čista, a meso je sočno i u nitima.', 'The bone comes out clean and the meat is juicy and in strands.', 'Кость выходит чистой, мясо сочное и волокнистое.'),
      why: l('Ovde nema ružičastog. Plećka je radni mišić (2.3.2) i mekana je tek kad je dobro pečena.', 'No pink here. The shoulder is a working muscle (2.3.2) and only tender when well cooked.', 'Здесь нет розового. Лопатка — рабочая мышца (2.3.2) и мягкая только хорошо приготовленной.'),
    },
  ],
  mistake: {
    title: l('Plećka pečena kao but, ružičasta.', 'Shoulder roasted like a leg, to pink.', 'Лопатку запекают как ногу, до розового.'),
    fix: l(
      'Ružičasta plećka je žilava i puna tvrdih vezivnih traka. Ona traži vreme, ne broj. Ružičasta se peče samo but ili kare.',
      'A pink shoulder is chewy and full of tough connective strips. It needs time, not a number. Only the leg or the rack is roasted pink.',
      'Розовая лопатка жёсткая и полна плотных соединительных прожилок. Ей нужно время, а не цифра. Розовыми запекают только ногу или каре.',
    ),
  },
  think: {
    question: l('Gosti stižu sat ranije. Možeš li da ubrzaš plećku na 220°C?', 'The guests arrive an hour early. Can you speed the shoulder up at 220°C?', 'Гости приходят на час раньше. Можно ускорить лопатку при 220°C?'),
    options: [
      l('Ne, kolagenu treba vreme, a jaka toplota suši spoljni deo', 'No, collagen needs time, and high heat dries the outside', 'Нет, коллагену нужно время, а сильный жар сушит внешнюю часть'),
      l('Da, temperatura zamenjuje vreme', 'Yes, temperature replaces time', 'Да, температура заменяет время'),
      l('Da, ako dodaš više vina', 'Yes, if you add more wine', 'Да, если добавить больше вина'),
    ],
    answer: 0,
    explain: l(
      'Kod radnih rezova vreme se ne skraćuje. Zato se plan pravi unazad (2.1.2), a plećka može i dan ranije: odmara u soku i podgreva se pokrivena.',
      'With working cuts the time cannot be cut short. That is why you plan backwards (2.1.2), and the shoulder can even be made the day before: it rests in its juices and reheats covered.',
      'У рабочих отрубов время не сократить. Поэтому план строят назад (2.1.2), а лопатку можно приготовить и накануне: она отдыхает в соке и разогревается под крышкой.',
    ),
  },
  recipe: { name: l('Sporo pečena jagnjeća plećka', 'Slow-roasted lamb shoulder', 'Медленно запечённая баранья лопатка'), protein: 22, carbs: 0, fat: 20, kcal: 270 },
}

export const lowTempLessons: Lesson[] = [why, confit, sousVide, reverseSear, lambShoulder]
