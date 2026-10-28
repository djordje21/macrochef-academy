import { l, type Lesson } from '../types'

// Module 13 · Whole chicken and oven roasting. The oven does the work; the cook's job is a dry
// surface, a measured centre, a rest, and the juices left in the tray.

const wholeChicken: Lesson = {
  id: '13.1',
  title: l('Celo pile', 'Whole roast chicken', 'Целая курица'),
  goal: l(
    'Ispečeš celo pile sa hrskavom kožom, sočnim belim mesom i gotovim batacima.',
    'You roast a whole chicken with crisp skin, juicy breast and fully cooked legs.',
    'Ты запекаешь целую курицу с хрустящей кожей, сочной грудкой и пропечёнными ножками.',
  ),
  minutes: 8,
  key: { value: l('80°C', '80°C', '80°C'), label: l('u batku', 'in the thigh', 'в бедре') },
  need: [
    { item: l('Celo pile', 'Whole chicken', 'Целая курица'), qty: l('1.6–1.8 kg', '1.6–1.8 kg', '1,6–1,8 кг') },
    { item: l('So', 'Salt', 'Соль'), qty: l('1% težine, ~17 g', '1% of weight, ~17 g', '1% веса, ~17 г') },
    { item: l('Limun, beli luk, majčina dušica', 'Lemon, garlic, thyme', 'Лимон, чеснок, тимьян'), qty: l('½ + 4 čena + 4 grančice', '½ + 4 cloves + 4 sprigs', '½ + 4 зубчика + 4 веточки') },
    { item: l('Kanap', 'Kitchen string', 'Кулинарная нить'), qty: l('50 cm', '50 cm', '50 см') },
    { item: l('Pleh sa rešetkom, termometar', 'Tray with rack, thermometer', 'Противень с решёткой, термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Celo pile je ispit iz toplote: belo meso je gotovo na 74°C, a bataci tek na 80°C. Cela veština je da oba stignu u isto vreme.',
    'A whole chicken is a heat exam: the breast is done at 74°C, the legs only at 80°C. The whole skill is getting both there at the same time.',
    'Целая курица — экзамен по теплу: грудка готова при 74°C, ножки только при 80°C. Всё мастерство — довести их одновременно.',
  ),
  steps: [
    {
      text: l('Uveče posoli pile spolja i iznutra i ostavi ga otkriveno u frižideru.', 'The evening before, salt the chicken inside and out and leave it uncovered in the fridge.', 'Накануне вечером посоли курицу снаружи и внутри и оставь без укрытия в холодильнике.'),
      params: [l('1% soli', '1% salt', '1% соли'), l('12–24 h', '12–24 h', '12–24 ч')],
      done: l('Koža je suva i zategnuta kao pergament.', 'The skin is dry and taut like parchment.', 'Кожа сухая и натянутая, как пергамент.'),
      why: l('So uđe duboko u meso, a vazduh frižidera osuši kožu. Suva koža postane hrskava, mokra se kuva.', 'The salt goes deep into the meat and the fridge air dries the skin. Dry skin crisps; wet skin steams.', 'Соль проникает глубоко в мясо, а воздух холодильника сушит кожу. Сухая кожа хрустит, мокрая — парится.'),
      drawing: 'dryBrine',
    },
    {
      text: l('U stomak stavi limun, beli luk i bilje, pa veži batake.', 'Put lemon, garlic and herbs in the cavity, then tie the legs.', 'Положи внутрь лимон, чеснок и травы, затем свяжи ножки.'),
      done: l('Bataci su priljubljeni uz telo, pile je kompaktno.', 'The legs sit tight against the body; the bird is compact.', 'Ножки прижаты к телу, курица компактная.'),
      why: l('Kompaktno pile se peče ravnomerno. Raširene noge se presuše na vrhovima.', 'A compact bird cooks evenly. Splayed legs dry out at the tips.', 'Компактная курица пропекается равномерно. Раскинутые ножки пересыхают на концах.'),
      drawing: 'trussChicken',
    },
    {
      text: l('Peci na rešetki, prvo jako, pa smanji.', 'Roast on a rack, first hot, then lower the heat.', 'Запекай на решётке, сначала сильно, потом убавь.'),
      params: [l('220°C · 20 min', '220°C · 20 min', '220°C · 20 мин'), l('190°C · 40–50 min', '190°C · 40–50 min', '190°C · 40–50 мин')],
      done: l('Koža je zlatna i hrskava, a sok u plehu cvrči.', 'The skin is golden and crisp and the juices sizzle in the tray.', 'Кожа золотистая и хрустящая, сок в противне шкворчит.'),
      why: l('Rešetka pušta vreo vazduh i ispod pileta, pa dno ne kuva u soku. Rerna iz 4.4.', 'The rack lets hot air under the bird so the bottom does not stew in the juices. The oven from 4.4.', 'Решётка пускает горячий воздух и снизу, и низ не тушится в соке. Духовка из 4.4.'),
    },
    {
      text: l('Izmeri batak u najdebljem delu, pored kosti, ne na njoj.', 'Measure the thigh at its thickest, beside the bone, not on it.', 'Измерь бедро в самой толстой части, рядом с костью, не касаясь её.'),
      params: [l('batak 80°C', 'thigh 80°C', 'бедро 80°C'), l('belo ≥ 70°C', 'breast ≥ 70°C', 'грудка ≥ 70°C')],
      done: l('Batak pokazuje 80°C, a sok iz njega je bistar.', 'The thigh reads 80°C and its juices run clear.', 'Бедро показывает 80°C, сок из него прозрачный.'),
      why: l('Belo se tokom odmaranja podigne za još 3–5°C i stigne do 74°C, a da se ne presuši.', 'The breast rises another 3–5°C while resting and reaches 74°C without drying out.', 'Грудка за время отдыха поднимется ещё на 3–5°C и дойдёт до 74°C, не пересохнув.'),
      drawing: 'chickenProbe',
    },
    {
      text: l('Odmori pile pre sečenja.', 'Rest the chicken before carving.', 'Дай курице отдохнуть перед разделкой.'),
      params: [l('15 min', '15 min', '15 мин'), l('bez folije', 'no foil', 'без фольги')],
      done: l('Kad zasečeš batak, sok ostaje u mesu, ne na dasci.', 'When you cut the thigh, the juices stay in the meat, not on the board.', 'При надрезе бедра сок остаётся в мясе, а не на доске.'),
      why: l('Odmaranje kao u 7.6. Folija bi zadržala paru i omekšala kožu.', 'Resting as in 7.6. Foil would trap steam and soften the skin.', 'Отдых, как в 7.6. Фольга удержала бы пар и размягчила кожу.'),
    },
  ],
  mistake: {
    title: l('Pile pravo iz kese u rernu.', 'Chicken straight from the bag into the oven.', 'Курица прямо из пакета в духовку.'),
    fix: l(
      'Mokra koža se prvih 20 minuta samo kuva i ostane bleda i gumena. Ako nemaš noć, osuši pile ubrusom i ostavi ga 1 sat otkriveno u frižideru.',
      'Wet skin just steams for the first 20 minutes and stays pale and rubbery. If you do not have a night, pat the bird dry and leave it uncovered in the fridge for 1 hour.',
      'Мокрая кожа первые 20 минут просто варится и остаётся бледной и резиновой. Если нет ночи — обсуши курицу и оставь на 1 час без укрытия в холодильнике.',
    ),
  },
  think: {
    question: l('Belo meso je 74°C, a batak 72°C. Šta radiš?', 'The breast reads 74°C but the thigh 72°C. What do you do?', 'Грудка 74°C, а бедро 72°C. Что делаешь?'),
    options: [
      l('Odsečeš batake i vratiš samo njih u rernu', 'Cut off the legs and return only them to the oven', 'Отрезаешь ножки и возвращаешь в духовку только их'),
      l('Vratiš celo pile na još 30 min', 'Put the whole bird back for 30 min', 'Возвращаешь всю курицу ещё на 30 мин'),
      l('Služiš, 72°C je dovoljno', 'Serve it, 72°C is enough', 'Подаёшь, 72°C достаточно'),
    ],
    answer: 0,
    explain: l(
      'Batak mora do bezbednih 74°C, a za mekoću i više. Belo je već gotovo i daljim pečenjem bi se presušilo. Odvoji ono što nije gotovo, a gotovo odmori.',
      'The leg must reach a safe 74°C, and more for tenderness. The breast is already done and more time would dry it out. Separate what is not done and rest what is.',
      'Бедро должно дойти до безопасных 74°C, а для мягкости и выше. Грудка уже готова и пересохнет. Отдели неготовое, а готовому дай отдохнуть.',
    ),
  },
  recipe: { name: l('Pečeno pile', 'Roast chicken', 'Запечённая курица'), protein: 25, carbs: 0, fat: 12, kcal: 215 },
}

const carving: Lesson = {
  id: '13.2',
  title: l('Rasecanje pečenog pileta', 'Carving a roast chicken', 'Разделка запечённой курицы'),
  goal: l(
    'Rasečeš pečeno pile na 8 komada, bez kidanja i bez mesa ostavljenog na kostima.',
    'You carve a roast chicken into 8 pieces, without tearing and without leaving meat on the bones.',
    'Ты разделываешь запечённую курицу на 8 частей без рваных краёв и без мяса на костях.',
  ),
  minutes: 7,
  key: { value: l('8', '8', '8'), label: l('komada', 'pieces', 'частей') },
  need: [
    { item: l('Pečeno, odmoreno pile (13.1)', 'Roast, rested chicken (13.1)', 'Запечённая отдохнувшая курица (13.1)'), qty: l('1', '1', '1') },
    { item: l('Kuvarski nož', 'Chef\'s knife', 'Поварской нож'), qty: l('1', '1', '1') },
    { item: l('Velika daska sa žlebom', 'Large board with a groove', 'Большая доска с желобком'), qty: l('1', '1', '1') },
    { item: l('Viljuška ili hvataljka', 'Carving fork or tongs', 'Вилка или щипцы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Pile se ne seče nožem kroz kost, nego se razdvaja po zglobovima. Nož samo prati put koji je pile već nacrtalo.',
    'A chicken is not cut through the bone; it is separated at the joints. The knife only follows the path the bird has already drawn.',
    'Курицу не режут через кость — её разделяют по суставам. Нож лишь следует пути, который курица уже начертила.',
  ),
  steps: [
    {
      text: l('Zaseci kožu između batka i tela, pa povuci batak ka spolja.', 'Cut the skin between leg and body, then pull the leg outwards.', 'Надрежь кожу между ножкой и телом и отведи ножку наружу.'),
      done: l('Zglob kuka iskoči i vidi se okrugla glava kosti.', 'The hip joint pops and you see the round head of the bone.', 'Тазобедренный сустав выскакивает, видна круглая головка кости.'),
      why: l('Zglob se otvori sam ako je pile odmoreno. Nož ne treba da seče kost.', 'The joint opens by itself if the bird has rested. The knife never has to cut bone.', 'Сустав откроется сам, если курица отдохнула. Ножу не нужно резать кость.'),
      drawing: 'carveLeg',
    },
    {
      text: l('Preseci kroz otvoren zglob i odvoji ceo batak sa karabatakom.', 'Cut through the open joint and take off the whole leg.', 'Перережь открытый сустав и отдели ножку целиком.'),
      params: [l('2 komada', '2 pieces', '2 части')],
      done: l('Batak je odvojen, a na telu je ostala samo koža.', 'The leg is off, with only skin left on the body.', 'Ножка отделена, на тушке осталась только кожа.'),
      why: l('Uz leđa je okrugli komad mesa, "oyster". Zahvati ga nožem zajedno sa batkom. To je najbolji zalogaj.', 'Against the back is a round nugget, the "oyster". Scoop it out with the leg. It is the best bite.', 'У спинки есть круглый кусочек, «устрица». Захвати его вместе с ножкой — лучший кусок.'),
    },
    {
      text: l('Razdvoji batak i karabatak po liniji masnoće.', 'Split thigh and drumstick along the line of fat.', 'Раздели бедро и голень по жировой линии.'),
      params: [l('4 komada', '4 pieces', '4 части')],
      done: l('Nož je prošao kroz zglob bez otpora.', 'The knife went through the joint without resistance.', 'Нож прошёл через сустав без сопротивления.'),
      why: l('Bela linija masnoće na koži pokazuje gde je zglob. Ako nož udari u kost, pomeri ga milimetar.', 'The white line of fat on the skin shows where the joint is. If the knife hits bone, move it a millimetre.', 'Белая жировая линия на коже показывает сустав. Если нож упёрся в кость — сдвинь на миллиметр.'),
    },
    {
      text: l('Seci uz grudnu kost, pa prati rebra i skini celo belo.', 'Cut along the breastbone, then follow the ribs and lift off the whole breast.', 'Режь вдоль грудной кости, затем веди по рёбрам и сними грудку целиком.'),
      params: [l('nož uz kost', 'knife on the bone', 'нож вплотную к кости')],
      done: l('Belo je skinuto u jednom komadu, a rebra su čista.', 'The breast comes off in one piece and the ribs are clean.', 'Грудка снята одним куском, рёбра чистые.'),
      drawing: 'carveBreast',
    },
    {
      text: l('Belo iseci poprečno na šnite, a krila odvoji na zglobu.', 'Slice the breast crosswise, and take off the wings at the joint.', 'Нарежь грудку поперёк ломтями, а крылья отдели по суставу.'),
      params: [l('šnite 1.5 cm', 'slices 1.5 cm', 'ломти 1,5 см'), l('8 komada', '8 pieces', '8 частей')],
      done: l('Svaka šnita ima kožu na vrhu, a krila su cela.', 'Every slice has skin on top and the wings are whole.', 'У каждого ломтя кожа сверху, крылья целые.'),
      why: l('Poprečno na vlakna, kao u 7.3. Kosti i kožu ne bacaj, idu u fond (8.1).', 'Across the fibres, as in 7.3. Keep the bones and skin for stock (8.1).', 'Поперёк волокон, как в 7.3. Кости и кожу не выбрасывай — в бульон (8.1).'),
      drawing: 'acrossGrain',
    },
  ],
  mistake: {
    title: l('Sečenje pileta odmah iz rerne.', 'Carving the chicken straight from the oven.', 'Разделка курицы сразу из духовки.'),
    fix: l(
      'Sok iscuri na dasku, belo se presuši, a vreli zglobovi su čvrsti pa ih kidaš. Odmori pile 15 minuta: zglobovi se opuste, a sok vrati u meso.',
      'The juices run onto the board, the breast dries and the hot joints are tight, so you tear them. Rest the bird 15 minutes: the joints relax and the juices settle back.',
      'Сок вытекает на доску, грудка сохнет, а горячие суставы тугие, и ты их рвёшь. Дай курице 15 минут: суставы расслабятся, сок вернётся в мясо.',
    ),
  },
  think: {
    question: l('Nož je udario u kost i ne prolazi. Šta radiš?', 'The knife hits bone and will not go through. What do you do?', 'Нож упёрся в кость и не проходит. Что делаешь?'),
    options: [
      l('Pomeriš ga i tražiš zglob', 'Move it and look for the joint', 'Сдвигаешь и ищешь сустав'),
      l('Pritisneš jače', 'Press harder', 'Давишь сильнее'),
      l('Uzmeš sataru', 'Get a cleaver', 'Берёшь тесак'),
    ],
    answer: 0,
    explain: l(
      'Ako nož mora da se gura, nisi na zglobu. Savij deo rukom: zglob se pokaže tamo gde se kost savija.',
      'If the knife has to be forced, you are not on the joint. Bend the piece by hand: the joint shows where the bone bends.',
      'Если нож приходится давить, ты не на суставе. Согни часть рукой: сустав там, где кость сгибается.',
    ),
  },
}

const porkRoast: Lesson = {
  id: '13.3',
  title: l('Svinjsko pečenje', 'Roast pork', 'Свиное жаркое'),
  goal: l(
    'Ispečeš svinjski vrat koji je sočan, ružičast u sredini i ima tamnu koricu.',
    'You roast a pork neck that is juicy, faintly pink at the centre, with a dark crust.',
    'Ты запекаешь свиную шею — сочную, слегка розовую в центре, с тёмной корочкой.',
  ),
  minutes: 7,
  key: { value: l('70°C', '70°C', '70°C'), label: l('skidaš', 'take out at', 'вынимаешь при') },
  need: [
    { item: l('Svinjski vrat u komadu', 'Pork neck, in one piece', 'Свиная шея куском'), qty: l('1.5 kg', '1.5 kg', '1,5 кг') },
    { item: l('So', 'Salt', 'Соль'), qty: l('15 g', '15 g', '15 г') },
    { item: l('Beli luk, ruzmarin, biber', 'Garlic, rosemary, pepper', 'Чеснок, розмарин, перец'), qty: l('4 čena + 2 grančice', '4 cloves + 2 sprigs', '4 зубчика + 2 веточки') },
    { item: l('Luk i šargarepa za podlogu', 'Onion and carrot for the bed', 'Лук и морковь для подложки'), qty: l('2 + 2', '2 + 2', '2 + 2') },
    { item: l('Kanap, termometar', 'String, thermometer', 'Нить, термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Vrat ima taman toliko masnoće da ostane sočan na 70°C. Sporo pečenje pa jaka vatra na kraju: ravnomerno ružičasto iznutra, kora spolja.',
    'Neck has just enough fat to stay juicy at 70°C. Slow roasting, then a blast of heat at the end: evenly pink inside, a crust outside.',
    'В шее ровно столько жира, чтобы остаться сочной при 70°C. Медленное запекание, потом сильный жар в конце: равномерно розовая внутри, корочка снаружи.',
  ),
  steps: [
    {
      text: l('Posoli meso dan ranije i veži ga kanapom.', 'Salt the meat a day ahead and tie it with string.', 'Посоли мясо за день и перевяжи нитью.'),
      params: [l('1% soli', '1% salt', '1% соли'), l('kanap na 3 cm', 'string every 3 cm', 'нить через 3 см')],
      done: l('Komad je okrugao i iste debljine celom dužinom.', 'The piece is round and the same thickness all along.', 'Кусок круглый и одной толщины по всей длине.'),
      why: l('Isti presek, isto vreme pečenja, kao u 7.2. So preko noći pečenje začini do sredine.', 'Same thickness, same cooking time, as in 7.2. Salt overnight seasons it to the centre.', 'Одинаковое сечение — одинаковое время, как в 7.2. Соль за ночь просаливает до центра.'),
      drawing: 'tiedRoast',
    },
    {
      text: l('Natrljaj beli luk i ruzmarin i stavi na podlogu od povrća.', 'Rub with garlic and rosemary and set on a bed of vegetables.', 'Натри чесноком и розмарином и положи на подложку из овощей.'),
      params: [l('200 ml vode u pleh', '200 ml water in the tray', '200 мл воды в противень')],
      done: l('Meso stoji na povrću, ne dodiruje pleh.', 'The meat sits on the vegetables, not touching the tray.', 'Мясо лежит на овощах и не касается противня.'),
      why: l('Povrće je rešetka koja se jede. Voda sprečava da sok u plehu zagori.', 'The vegetables are a rack you can eat. The water stops the juices in the tray from burning.', 'Овощи — съедобная решётка. Вода не даёт соку в противне пригореть.'),
    },
    {
      text: l('Peci polako do 65°C u sredini.', 'Roast slowly to 65°C at the centre.', 'Запекай медленно до 65°C в центре.'),
      params: [l('160°C', '160°C', '160°C'), l('~1.5 h', '~1.5 h', '~1,5 ч')],
      done: l('Termometar u sredini pokazuje 65°C.', 'The probe at the centre reads 65°C.', 'Щуп в центре показывает 65°C.'),
      why: l('Niska temperatura greje ceo komad ravnomerno, pa nema sivog prstena ispod kore.', 'Low heat warms the whole piece evenly, so there is no grey ring under the crust.', 'Низкая температура прогревает весь кусок равномерно, и под корочкой нет серого кольца.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Pojačaj rernu i peci dok kora ne potamni.', 'Turn the oven up and roast until the crust darkens.', 'Прибавь духовку и запекай, пока корочка не потемнеет.'),
      params: [l('230°C', '230°C', '230°C'), l('10–15 min', '10–15 min', '10–15 мин'), l('skidaš na 70°C', 'out at 70°C', 'вынимаешь при 70°C')],
      done: l('Kora je tamnobraon i krcka pod nožem.', 'The crust is dark brown and crackles under the knife.', 'Корочка тёмно-коричневая и хрустит под ножом.'),
      why: l('Kora na kraju, a ne na početku: tako ne stigne da izgori dok se sredina peče.', 'The crust comes at the end, not the start: that way it cannot burn while the centre cooks.', 'Корочка — в конце, а не в начале: так она не сгорит, пока пропекается центр.'),
    },
    {
      text: l('Odmori meso, pa seci poprečno.', 'Rest the meat, then slice across the grain.', 'Дай мясу отдохнуть и нарежь поперёк.'),
      params: [l('20 min', '20 min', '20 мин'), l('šnite 1 cm', 'slices 1 cm', 'ломти 1 см')],
      done: l('Sredina je 72–73°C, blago ružičasta, a sok ne curi.', 'The centre is 72–73°C, faintly pink, and no juice runs.', 'Центр 72–73°C, слегка розовый, сок не течёт.'),
      why: l('Svinjetina je bezbedna od 63°C. Blago ružičasta na 72°C je ispravna, ne sirova.', 'Pork is safe from 63°C. Faintly pink at 72°C is correct, not raw.', 'Свинина безопасна от 63°C. Слегка розовая при 72°C — это правильно, а не сыро.'),
      drawing: 'restTent',
    },
  ],
  mistake: {
    title: l('Pečenje "dok ne bude sivo do kraja".', 'Roasting "until it is grey all the way through".', 'Запекать, «пока не станет серым насквозь».'),
    fix: l(
      'Siva svinjetina je preko 80°C i suva. To je navika iz vremena trihinele. Meso iz prodavnice je veterinarski pregledano, a domaće klanje se nosi na pregled. Meri, skini na 70°C, odmori.',
      'Grey pork is above 80°C and dry. It is a habit from the days of trichinella. Shop pork is veterinary inspected, and home-slaughtered pork must be tested. Measure, take it out at 70°C, rest.',
      'Серая свинина — выше 80°C и сухая. Это привычка со времён трихинеллы. Магазинная свинина проходит ветеринарный контроль, а домашний забой нужно проверять. Измеряй, вынимай при 70°C, давай отдохнуть.',
    ),
  },
  think: {
    question: l('Zašto prvo niska, pa visoka temperatura, a ne obrnuto?', 'Why low heat first and high heat last, not the other way round?', 'Почему сначала низкая, потом высокая температура, а не наоборот?'),
    options: [
      l('Sredina se peče ravnomerno, a kora ne izgori', 'The centre cooks evenly and the crust cannot burn', 'Центр пропекается равномерно, а корочка не сгорает'),
      l('Brže je', 'It is faster', 'Так быстрее'),
      l('Meso pusti manje masnoće', 'The meat releases less fat', 'Мясо выделяет меньше жира'),
    ],
    answer: 0,
    explain: l(
      'Kad počneš jako, spoljni slojevi se prepeku dok sredina stigne. Ovako je ceo presek iste boje, a kora se napravi za 10 minuta.',
      'Start hot and the outer layers overcook before the centre arrives. This way the whole slice is one colour and the crust forms in 10 minutes.',
      'Начнёшь с сильного жара — внешние слои пережарятся, пока дойдёт центр. Так весь срез одного цвета, а корочка образуется за 10 минут.',
    ),
  },
  recipe: { name: l('Pečeni svinjski vrat', 'Roast pork neck', 'Запечённая свиная шея'), protein: 24, carbs: 0, fat: 17, kcal: 250 },
}

const roastVeg: Lesson = {
  id: '13.4',
  title: l('Krompir i povrće uz pečenje', 'Potatoes and vegetables with the roast', 'Картофель и овощи к жаркому'),
  goal: l(
    'Uz pečenje ispečeš povrće tako da sve bude gotovo u isti minut.',
    'You roast vegetables alongside the meat so everything is done the same minute.',
    'Ты запекаешь овощи к мясу так, чтобы всё было готово в одну минуту.',
  ),
  minutes: 6,
  key: { value: l('3', '3', '3'), label: l('grupe povrća', 'vegetable groups', 'группы овощей') },
  need: [
    { item: l('Krompir', 'Potatoes', 'Картофель'), qty: l('800 g', '800 g', '800 г') },
    { item: l('Šargarepa, cvekla, paštrnak', 'Carrot, beetroot, parsnip', 'Морковь, свёкла, пастернак'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Luk, paprika, bundeva', 'Onion, pepper, squash', 'Лук, перец, тыква'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Tikvica, paradajz, pečurke', 'Courgette, tomatoes, mushrooms', 'Кабачок, помидоры, грибы'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Mast iz pečenja ili ulje', 'Fat from the roast or oil', 'Жир от жаркого или масло'), qty: l('4 kašike', '4 tbsp', '4 ст. л.') },
  ],
  why: l(
    'Povrće nije ukras, ono je pola tanjira. A svako povrće ima svoje vreme: ako sve ubaciš odjednom, krompir je tvrd, a tikvica kaša.',
    'Vegetables are not a garnish, they are half the plate. And every vegetable has its time: put them all in at once and the potato is hard while the courgette is mush.',
    'Овощи — не украшение, а половина тарелки. И у каждого своё время: положишь всё сразу — картофель твёрдый, кабачок каша.',
  ),
  steps: [
    {
      text: l('Podeli povrće u tri grupe po tvrdoći.', 'Sort the vegetables into three groups by hardness.', 'Раздели овощи на три группы по твёрдости.'),
      params: [l('tvrdo 45 min', 'hard 45 min', 'твёрдые 45 мин'), l('srednje 30 min', 'medium 30 min', 'средние 30 мин'), l('meko 15 min', 'soft 15 min', 'мягкие 15 мин')],
      done: l('Imaš tri činije: korenje, luk i paprika, sočno povrće.', 'You have three bowls: roots, onion and pepper, watery vegetables.', 'У тебя три миски: корнеплоды, лук с перцем, сочные овощи.'),
      why: l('Tvrdoća određuje vreme. Ovo je raspored rerne, kao mise en place u 1.2.', 'Hardness sets the time. This is the oven\'s schedule, like the mise en place in 1.2.', 'Твёрдость задаёт время. Это расписание духовки, как мизанплас в 1.2.'),
      drawing: 'vegGroups',
    },
    {
      text: l('Sve iseci na komade iste veličine.', 'Cut everything into pieces of the same size.', 'Нарежь всё кусками одного размера.'),
      params: [l('4 cm', '4 cm', '4 см')],
      done: l('Komadi iz svih grupa su veličine oraha.', 'Pieces from every group are walnut-sized.', 'Куски из всех групп размером с грецкий орех.'),
    },
    {
      text: l('Krompir prokuvaj, ocedi i protresi u šerpi.', 'Parboil the potatoes, drain and shake them in the pan.', 'Отвари картофель до полуготовности, слей и встряхни в кастрюле.'),
      params: [l('8 min', '8 min', '8 мин'), l('2 min na pari', '2 min to steam dry', '2 мин подсушить')],
      done: l('Ivice krompira su hrapave i brašnjave.', 'The potato edges are rough and floury.', 'Края картофеля шероховатые и рассыпчатые.'),
      why: l('Isti postupak kao 10.4. Hrapave ivice postanu hrskave.', 'The same method as 10.4. Rough edges turn crisp.', 'Тот же способ, что в 10.4. Шероховатые края становятся хрустящими.'),
      drawing: 'roughEdges',
    },
    {
      text: l('Tvrdo povrće sa masnoćom u pleh, u jednom sloju.', 'Toss the hard vegetables with fat into a tray, in one layer.', 'Твёрдые овощи с жиром в противень, в один слой.'),
      params: [l('200–220°C', '200–220°C', '200–220°C'), l('razmak 1 cm', '1 cm gaps', 'промежутки 1 см')],
      done: l('Nijedan komad ne leži na drugom.', 'No piece lies on another.', 'Ни один кусок не лежит на другом.'),
      why: l('Natrpan pleh pušta paru i povrće se kuva umesto da se peče (4.4).', 'A crowded tray steams and the vegetables boil instead of roasting (4.4).', 'В переполненном противне овощи парятся вместо того, чтобы запекаться (4.4).'),
      drawing: 'traySpacing',
    },
    {
      text: l('Dodaj srednju grupu posle 15 min, a meku posle 30.', 'Add the medium group after 15 min and the soft one after 30.', 'Добавь среднюю группу через 15 мин, а мягкую через 30.'),
      params: [l('ukupno 45 min', '45 min total', 'всего 45 мин'), l('okreni jednom', 'turn once', 'переверни раз')],
      done: l('Sve povrće je zlatno na ivicama i mekano iznutra.', 'All the vegetables are golden at the edges and tender inside.', 'Все овощи золотистые по краям и мягкие внутри.'),
      why: l('Odbrojavaj unazad od trenutka kad meso izlazi. Povrće peci dok se meso odmara.', 'Count backwards from when the meat comes out. Roast the vegetables while the meat rests.', 'Считай назад от момента, когда вынимаешь мясо. Овощи допекай, пока мясо отдыхает.'),
    },
  ],
  mistake: {
    title: l('Povrće ispod pečenja ceo sat.', 'Vegetables under the roast for the whole hour.', 'Овощи под жарким весь час.'),
    fix: l(
      'Ispod mesa povrće se kuva u soku i ne dobije boju. Podloga je za ukus soka (13.5), a povrće za tanjir peci u posebnom plehu, raširenom.',
      'Under the meat the vegetables stew in the juices and never colour. The bed is for flavouring the juices (13.5); roast the vegetables for the plate in a separate, spread-out tray.',
      'Под мясом овощи тушатся в соке и не румянятся. Подложка — для вкуса сока (13.5), а овощи для тарелки запекай отдельно, в один слой.',
    ),
  },
  think: {
    question: l('U koju grupu ide bundeva?', 'Which group does squash go in?', 'В какую группу идёт тыква?'),
    options: [
      l('Srednja, 30 min', 'Medium, 30 min', 'Средняя, 30 мин'),
      l('Tvrda, 45 min', 'Hard, 45 min', 'Твёрдая, 45 мин'),
      l('Meka, 15 min', 'Soft, 15 min', 'Мягкая, 15 мин'),
    ],
    answer: 0,
    explain: l(
      'Bundeva je čvršća od tikvice, a mekša od krompira. Ako nisi siguran, probaj sirov komad viljuškom: što teže ulazi, to ranije ide u rernu.',
      'Squash is firmer than courgette and softer than potato. When unsure, push a fork into a raw piece: the harder it goes in, the earlier it goes in the oven.',
      'Тыква плотнее кабачка, но мягче картофеля. Не уверен — проткни сырой кусок вилкой: чем труднее входит, тем раньше в духовку.',
    ),
  },
}

const panJus: Lesson = {
  id: '13.5',
  title: l('Sos od soka pečenja', 'Pan gravy from the roast', 'Соус из сока жаркого'),
  goal: l(
    'Od braon tragova i soka u plehu napraviš sos za 5 minuta.',
    'You turn the brown bits and juices in the tray into a sauce in 5 minutes.',
    'Ты превращаешь пригар и сок в противне в соус за 5 минут.',
  ),
  minutes: 5,
  key: { value: l('5 min', '5 min', '5 мин'), label: l('sos', 'sauce', 'соус') },
  need: [
    { item: l('Pleh posle pečenja (13.1 ili 13.3)', 'The tray after roasting (13.1 or 13.3)', 'Противень после запекания (13.1 или 13.3)'), qty: l('1', '1', '1') },
    { item: l('Fond (8.1 ili 8.2) ili belo vino', 'Stock (8.1 or 8.2) or white wine', 'Бульон (8.1 или 8.2) или белое вино'), qty: l('250 ml', '250 ml', '250 мл') },
    { item: l('Hladan puter', 'Cold butter', 'Холодное масло'), qty: l('20 g', '20 g', '20 г') },
    { item: l('Kukuruzni skrob (po potrebi)', 'Cornflour (if needed)', 'Кукурузный крахмал (при необходимости)'), qty: l('1 kašičica', '1 tsp', '1 ч. л.') },
    { item: l('Sito, varjača', 'Sieve, wooden spoon', 'Сито, деревянная ложка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Najjači ukus pečenja nije u mesu, nego zalepljen za pleh. Ko opere pleh, baci sos.',
    'The strongest flavour of the roast is not in the meat; it is stuck to the tray. Wash the tray and you throw the sauce away.',
    'Самый сильный вкус жаркого не в мясе, а прилип к противню. Кто моет противень, тот выбрасывает соус.',
  ),
  steps: [
    {
      text: l('Odlij masnoću iz pleha, ostavi kašiku.', 'Pour off the fat from the tray, leaving a spoonful.', 'Слей жир из противня, оставь ложку.'),
      params: [l('ostavi 1 kašiku', 'leave 1 tbsp', 'оставь 1 ст. л.')],
      done: l('U plehu su braon tragovi, sok i malo masnoće.', 'Brown bits, juices and a little fat remain.', 'В противне пригар, сок и немного жира.'),
      why: l('Masnoća pliva gore i čini sos masnim. Tamni sok ispod nje je ono što čuvaš.', 'The fat floats on top and makes the sauce greasy. The dark juice beneath it is what you keep.', 'Жир всплывает и делает соус жирным. Тёмный сок под ним — то, что ты сохраняешь.'),
      drawing: 'fatPour',
    },
    {
      text: l('Stavi pleh na ringlu, dolij fond i sastruži dno.', 'Put the tray on the hob, add the stock and scrape the bottom.', 'Поставь противень на плиту, влей бульон и соскреби дно.'),
      params: [l('250 ml', '250 ml', '250 мл'), l('srednje jaka vatra', 'medium-high heat', 'огонь выше среднего')],
      done: l('Dno pleha je čisto, a tečnost je tamna.', 'The bottom of the tray is clean and the liquid is dark.', 'Дно противня чистое, жидкость тёмная.'),
      why: l('Deglaziranje kao u 9.8, samo u plehu umesto tiganja.', 'Deglazing as in 9.8, only in a tray instead of a pan.', 'Деглазирование, как в 9.8, только в противне вместо сковороды.'),
      drawing: 'deglaze',
    },
    {
      text: l('Procedi u šerpicu i ukuvaj.', 'Strain into a small pan and reduce.', 'Процеди в кастрюльку и уварь.'),
      params: [l('na pola', 'by half', 'вдвое'), l('3 min', '3 min', '3 мин')],
      done: l('Sos je sjajan i malo gušći od vode.', 'The sauce is glossy and a little thicker than water.', 'Соус блестящий и чуть гуще воды.'),
      drawing: 'reduction',
    },
    {
      text: l('Dodaj sok koji je iscureo dok se meso odmaralo.', 'Add the juices that ran out while the meat rested.', 'Добавь сок, который вытек, пока мясо отдыхало.'),
      done: l('Na dasci i tanjiru nema više soka.', 'There is no juice left on the board or plate.', 'На доске и тарелке не осталось сока.'),
      why: l('Taj sok je čist ukus mesa. Svaka kap ide u sos.', 'That juice is pure meat flavour. Every drop goes into the sauce.', 'Этот сок — чистый вкус мяса. Каждая капля — в соус.'),
    },
    {
      text: l('Van vatre umešaj hladan puter, probaj i posoli.', 'Off the heat, swirl in the cold butter, taste and salt.', 'Вне огня вмешай холодное масло, попробуй и посоли.'),
      params: [l('20 g', '20 g', '20 г')],
      done: l('Sos sija i blago prekriva kašiku.', 'The sauce shines and lightly coats a spoon.', 'Соус блестит и слегка обволакивает ложку.'),
      why: l('Ako je i dalje redak, kašičicu skroba razmuti u kašici hladne vode i umešaj u sos koji krčka.', 'If still thin, mix a teaspoon of cornflour into a spoon of cold water and stir it into the simmering sauce.', 'Если всё ещё жидкий — разведи ложку крахмала в ложке холодной воды и вмешай в томящийся соус.'),
      drawing: 'coatSpoon',
    },
  ],
  mistake: {
    title: l('Izgoreli tragovi u plehu idu u sos.', 'Burnt bits from the tray going into the sauce.', 'Сгоревший пригар идёт в соус.'),
    fix: l(
      'Braon je ukus, crno je gorčina. Ako je dno crno, ne deglaziraj, nego napravi sos od fonda posebno. Sledeći put dolij malo vode u pleh tokom pečenja.',
      'Brown is flavour, black is bitterness. If the bottom is black, do not deglaze; make the sauce from stock separately. Next time add a little water to the tray during roasting.',
      'Коричневое — вкус, чёрное — горечь. Если дно чёрное, не деглазируй, а сделай соус отдельно из бульона. В следующий раз подливай в противень немного воды во время запекания.',
    ),
  },
  think: {
    question: l('Zašto puter ide van vatre, na kraju?', 'Why does the butter go in off the heat, at the end?', 'Почему масло добавляют вне огня, в конце?'),
    options: [
      l('Hladan puter vezuje sos i daje sjaj. Na ključanju se samo otopi u masnoću.', 'Cold butter binds the sauce and gives shine. At a boil it just melts into grease.', 'Холодное масло связывает соус и даёт блеск. При кипении оно просто растапливается в жир.'),
      l('Da sos bude slaniji', 'To make the sauce saltier', 'Чтобы соус был солонее'),
      l('Da se brže ohladi', 'So it cools faster', 'Чтобы быстрее остыл'),
    ],
    answer: 0,
    explain: l(
      'Ista emulzija kao beurre blanc u 9.9, samo u malom. Puter i sok se vežu samo dok sos ne ključa.',
      'The same emulsion as beurre blanc in 9.9, on a small scale. Butter and juices bind only while the sauce is not boiling.',
      'Та же эмульсия, что бёр блан в 9.9, только в миниатюре. Масло и сок связываются, только пока соус не кипит.',
    ),
  },
}

export const roastLessons: Lesson[] = [wholeChicken, carving, porkRoast, roastVeg, panJus]
