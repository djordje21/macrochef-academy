import { l, type Lesson } from '../types'

// Grade 2 · Module 2 · Poultry butchery. Raw birds are cut at the joints, like the cooked bird in 1·13.2,
// on the raw-meat board, and every bone left over goes to stock (1·8.1).

const eight: Lesson = {
  id: '2.2.1',
  title: l('Sirovo pile na 8 delova', 'A raw chicken into 8 pieces', 'Сырая курица на 8 частей'),
  goal: l(
    'Rasečeš sirovo pile na 8 delova po zglobovima, a leđa sačuvaš za fond.',
    'You cut a raw chicken into 8 pieces at the joints and keep the back for stock.',
    'Ты разделываешь сырую курицу на 8 частей по суставам, а спинку оставляешь на бульон.',
  ),
  minutes: 8,
  key: { value: l('8', '8', '8'), label: l('delova', 'pieces', 'частей') },
  need: [
    { item: l('Celo pile', 'Whole chicken', 'Целая курица'), qty: l('1.6–1.8 kg', '1.6–1.8 kg', '1,6–1,8 кг') },
    { item: l('Kuvarski nož', 'Chef\'s knife', 'Поварской нож'), qty: l('1', '1', '1') },
    { item: l('Makaze za živinu', 'Poultry shears', 'Ножницы для птицы'), qty: l('1', '1', '1') },
    { item: l('Daska za sirovo meso, ubrus', 'Raw-meat board, paper towel', 'Доска для сырого мяса, бумажное полотенце'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Celo pile je za trećinu jeftinije od istih delova u pakovanju, a dobiješ i leđa za fond. Ista tehnika kao 13.2, samo na sirovom mesu, gde je zglob teže naći.',
    'A whole chicken is a third cheaper than the same pieces in a pack, and you get the back for stock. The same technique as 13.2, only on raw meat, where the joint is harder to find.',
    'Целая курица на треть дешевле тех же частей в упаковке, а спинка идёт на бульон. Та же техника, что в 13.2, только на сыром мясе, где сустав найти сложнее.',
  ),
  steps: [
    {
      text: l('Osuši pile i stavi ga na leđa, batacima ka sebi.', 'Pat the chicken dry and lay it on its back, legs towards you.', 'Обсуши курицу и положи на спинку, ножками к себе.'),
      done: l('Pile leži mirno i ne kliza po dasci.', 'The bird lies still and does not slide on the board.', 'Курица лежит неподвижно и не скользит.'),
      why: l('Sirova koža je klizava. Suvo pile i ruka koja ne kliza su pola bezbednosti noža.', 'Raw skin is slippery. A dry bird and a steady hand are half of knife safety.', 'Сырая кожа скользкая. Сухая курица и твёрдая рука — половина безопасности с ножом.'),
    },
    {
      text: l('Zaseci kožu između batka i grudi, savij batak dok zglob ne iskoči, pa preseci.', 'Cut the skin between leg and breast, bend the leg until the joint pops, then cut through.', 'Надрежь кожу между ножкой и грудкой, отогни ножку до щелчка сустава и перережь.'),
      params: [l('2 batka', '2 legs', '2 ножки')],
      done: l('Ceo batak je odvojen, sa okruglim komadićem mesa sa leđa.', 'The whole leg is off, with the round nugget from the back.', 'Ножка отделена целиком, с круглым кусочком со спинки.'),
      why: l('Na sirovom piletu zglob ne popušta sam kao na pečenom. Savij odlučno, zglob se čuje.', 'On a raw bird the joint does not give by itself as it does on a roast one. Bend firmly; you will hear it.', 'У сырой курицы сустав не поддаётся сам, как у запечённой. Отгибай решительно — сустав щёлкнет.'),
      drawing: 'carveLeg',
    },
    {
      text: l('Svaki batak preseci na zglobu, po beloj liniji masnoće.', 'Cut each leg at the joint, along the white line of fat.', 'Разрежь каждую ножку по суставу, по белой жировой линии.'),
      params: [l('2 karabataka + 2 batka', '2 drumsticks + 2 thighs', '2 голени + 2 бедра')],
      done: l('Nož je prošao bez otpora, a kost nije usitnjena.', 'The knife went through without resistance and the bone is not splintered.', 'Нож прошёл без сопротивления, кость не раздроблена.'),
    },
    {
      text: l('Odseci krila na ramenom zglobu, pa makazama skini leđa.', 'Cut off the wings at the shoulder, then remove the back with shears.', 'Отрежь крылья по плечевому суставу, затем ножницами удали спинку.'),
      params: [l('makaze sa obe strane kičme', 'shears down both sides of the spine', 'ножницы с обеих сторон хребта')],
      done: l('Ostala su prsa na kosti, a leđa idu u kesu za fond.', 'The breast is left on the bone, and the back goes in the stock bag.', 'Осталась грудка на кости, а спинка идёт в пакет для бульона.'),
      why: l('Makaze sigurnije seku rebra od noža. Leđa i vrhovi krila su najbolji fond (8.1).', 'Shears cut ribs more safely than a knife. Back and wing tips make the best stock (8.1).', 'Ножницы режут рёбра безопаснее ножа. Спинка и кончики крыльев — лучший бульон (8.1).'),
      drawing: 'shears',
    },
    {
      text: l('Prsa preseci po sredini grudne kosti na dve polovine.', 'Split the breast down the middle of the breastbone into two halves.', 'Разрежь грудку посередине грудной кости на две половины.'),
      params: [l('8 delova', '8 pieces', '8 частей')],
      done: l('Imaš 2 karabataka, 2 batka, 2 krila i 2 polovine prsa.', 'You have 2 drumsticks, 2 thighs, 2 wings and 2 breast halves.', 'У тебя 2 голени, 2 бедра, 2 крыла и 2 половинки грудки.'),
      why: l('Posle rada operi ruke, dasku i nož, kao u 1.3. Sok sirove piletine ne sme da dodirne ništa drugo.', 'Afterwards wash hands, board and knife, as in 1.3. Raw chicken juice must touch nothing else.', 'После работы вымой руки, доску и нож, как в 1.3. Сок сырой курицы не должен касаться ничего другого.'),
      drawing: 'chickenEight',
    },
  ],
  mistake: {
    title: l('Pranje sirovog pileta pod mlazom vode.', 'Rinsing raw chicken under the tap.', 'Мыть сырую курицу под краном.'),
    fix: l(
      'Voda ne skida bakterije, nego ih prska po sudoperi i pultu do pola metra okolo. Pile samo osuši ubrusom, a ubrus baci. Kuvanje do 74°C ubija sve.',
      'Water does not remove bacteria; it splashes them over the sink and counter up to half a metre around. Just pat the bird dry with paper and throw the paper away. Cooking to 74°C kills everything.',
      'Вода не смывает бактерии, а разбрызгивает их по раковине и столу на полметра вокруг. Просто обсуши курицу бумагой и выброси её. Готовка до 74°C убивает всё.',
    ),
  },
  think: {
    question: l('Zašto se prsa peku kraće od bataka iz istog pileta?', 'Why does the breast cook shorter than the thigh from the same bird?', 'Почему грудка готовится быстрее бедра той же курицы?'),
    options: [
      l('Belo meso je gotovo na 74°C, a batak je mekan tek na 80°C', 'White meat is done at 74°C, while the thigh is only tender at 80°C', 'Белое мясо готово при 74°C, а бедро мягкое только при 80°C'),
      l('Prsa su uvek tanja', 'The breast is always thinner', 'Грудка всегда тоньше'),
      l('Batak ima više vode', 'The thigh has more water', 'В бедре больше воды'),
    ],
    answer: 0,
    explain: l(
      'Zato je pile na delovima lakše od celog: svaki deo ide u tiganj ili rernu kad mu treba, i izlazi kad je on gotov (13.1).',
      'That is why a jointed chicken is easier than a whole one: each piece goes in when it needs to and comes out when it is done (13.1).',
      'Поэтому курица по частям проще целой: каждая часть идёт в работу, когда нужно, и выходит, когда готова (13.1).',
    ),
  },
}

const spatchcock: Lesson = {
  id: '2.2.2',
  title: l('Pile na leptir', 'Spatchcocked chicken', 'Курица бабочкой'),
  goal: l(
    'Otvoriš pile na leptir i ispečeš ga za 45 minuta, ravnomerno i sa hrskavom kožom.',
    'You spatchcock a chicken and roast it in 45 minutes, evenly and with crisp skin.',
    'Ты раскрываешь курицу бабочкой и запекаешь за 45 минут, равномерно и с хрустящей кожей.',
  ),
  minutes: 6,
  key: { value: l('45 min', '45 min', '45 мин'), label: l('pečenje', 'roasting', 'запекание') },
  need: [
    { item: l('Celo pile', 'Whole chicken', 'Целая курица'), qty: l('1.6 kg', '1.6 kg', '1,6 кг') },
    { item: l('Makaze za živinu', 'Poultry shears', 'Ножницы для птицы'), qty: l('1', '1', '1') },
    { item: l('So, ulje, limun, bilje', 'Salt, oil, lemon, herbs', 'Соль, масло, лимон, травы'), qty: l('so 1%', 'salt 1%', 'соль 1%') },
    { item: l('Pleh sa rešetkom, termometar', 'Tray with rack, thermometer', 'Противень с решёткой, термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Ravno pile je iste debljine svuda. Bataci su bliže toploti, prsa dalje, pa oba stignu u isti minut. Upola kraće od celog pileta (13.1).',
    'A flat chicken is the same thickness everywhere. The legs sit closer to the heat and the breast further away, so both arrive in the same minute. Half the time of a whole bird (13.1).',
    'Плоская курица везде одной толщины. Ножки ближе к жару, грудка дальше, и обе готовы в одну минуту. Вдвое быстрее целой (13.1).',
  ),
  steps: [
    {
      text: l('Okreni pile na grudi i makazama iseci kičmu sa obe strane.', 'Turn the bird breast down and cut out the backbone with shears.', 'Переверни курицу грудкой вниз и вырежи ножницами хребет с обеих сторон.'),
      params: [l('širina kičme ~3 cm', 'spine strip ~3 cm', 'полоса хребта ~3 см')],
      done: l('Kičma je izvađena u jednoj traci.', 'The backbone comes out in one strip.', 'Хребет вынут одной полосой.'),
      drawing: 'shears',
    },
    {
      text: l('Okreni pile i pritisni grudnu kost dlanom dok ne pukne.', 'Turn it over and press the breastbone with your palm until it cracks.', 'Переверни и надави ладонью на грудную кость до хруста.'),
      done: l('Pile leži potpuno ravno, kao otvorena knjiga.', 'The bird lies completely flat, like an open book.', 'Курица лежит совершенно плоско, как раскрытая книга.'),
      drawing: 'spatchcock',
    },
    {
      text: l('Osuši kožu i posoli sa obe strane.', 'Dry the skin and salt both sides.', 'Обсуши кожу и посоли с обеих сторон.'),
      params: [l('1% soli', '1% salt', '1% соли'), l('najbolje 12 h ranije', 'ideally 12 h ahead', 'лучше за 12 ч')],
      done: l('Koža je suva i zategnuta.', 'The skin is dry and taut.', 'Кожа сухая и натянутая.'),
      why: l('Isto kao celo pile: suva koža je hrskava koža.', 'Same as the whole bird: dry skin is crisp skin.', 'Как с целой курицей: сухая кожа — хрустящая кожа.'),
      drawing: 'dryBrine',
    },
    {
      text: l('Peci na rešetki, kožom nagore, sa batacima ka zadnjem delu rerne.', 'Roast on a rack, skin up, with the legs towards the back of the oven.', 'Запекай на решётке, кожей вверх, ножками к задней стенке духовки.'),
      params: [l('220°C', '220°C', '220°C'), l('40–50 min', '40–50 min', '40–50 мин')],
      done: l('Koža je zlatna, a sok u plehu cvrči.', 'The skin is golden and the juices sizzle in the tray.', 'Кожа золотистая, сок в противне шкворчит.'),
      why: l('Zadnji deo rerne je skoro uvek topliji. Tamo idu bataci, kojima treba više toplote.', 'The back of the oven is almost always hotter. That is where the legs go, as they need more heat.', 'Задняя часть духовки почти всегда горячее. Туда идут ножки, им нужно больше тепла.'),
    },
    {
      text: l('Izmeri batak i prsa, pa odmori.', 'Measure the thigh and breast, then rest.', 'Измерь бедро и грудку, затем дай отдохнуть.'),
      params: [l('batak 80°C', 'thigh 80°C', 'бедро 80°C'), l('prsa ≥ 70°C', 'breast ≥ 70°C', 'грудка ≥ 70°C'), l('10 min odmor', '10 min rest', '10 мин отдыха')],
      done: l('Oba broja su tačna u istom trenutku.', 'Both numbers are right at the same moment.', 'Обе цифры верны в один момент.'),
      drawing: 'chickenProbe',
    },
  ],
  mistake: {
    title: l('Lomljenje kičme nožem i čekićem.', 'Breaking the backbone with a knife and mallet.', 'Ломать хребет ножом и молотком.'),
    fix: l(
      'Nož klizne preko oble kosti i ode u ruku. Makaze za živinu su napravljene za ovo: seku rebra jedno po jedno, a ruka ostaje daleko od sečiva.',
      'A knife skids on the round bone and goes into your hand. Poultry shears are made for this: they cut the ribs one by one and your hand stays away from the blade.',
      'Нож соскальзывает с круглой кости и попадает в руку. Ножницы для птицы созданы для этого: режут рёбра по одному, а рука далеко от лезвия.',
    ),
  },
  think: {
    question: l('Zašto se pile na leptir peče kraće od celog?', 'Why does a spatchcocked bird roast faster than a whole one?', 'Почему курица бабочкой запекается быстрее целой?'),
    options: [
      l('Najdeblji deo je tanji, a vruć vazduh je svuda oko mesa', 'The thickest part is thinner and hot air reaches all of it', 'Самая толстая часть тоньше, и горячий воздух со всех сторон'),
      l('Kičma usporava pečenje', 'The backbone slows cooking', 'Хребет замедляет запекание'),
      l('Rerna mora da bude toplija', 'The oven has to be hotter', 'Духовка должна быть горячее'),
    ],
    answer: 0,
    explain: l(
      'Isti princip kao debljina u 7.3: vreme zavisi od puta do sredine. Celo pile ima šupljinu i debeo presek, ravno nema ni jedno ni drugo.',
      'The same principle as thickness in 7.3: time depends on the path to the centre. A whole bird has a cavity and a thick cross-section; a flat one has neither.',
      'Тот же принцип, что с толщиной в 7.3: время зависит от пути до центра. У целой курицы есть полость и толстое сечение, у плоской — ни того, ни другого.',
    ),
  },
  recipe: { name: l('Pile na leptir sa limunom', 'Lemon spatchcock chicken', 'Курица бабочкой с лимоном'), protein: 25, carbs: 0.5, fat: 13, kcal: 220 },
}

const thigh: Lesson = {
  id: '2.2.3',
  title: l('Otkoštavanje batka', 'Boning a thigh', 'Обвалка бедра'),
  goal: l(
    'Izvadiš kost iz batka bez kidanja mesa i dobiješ ravan komad iste debljine.',
    'You take the bone out of a thigh without tearing the meat and get a flat, even piece.',
    'Ты вынимаешь кость из бедра, не разрывая мясо, и получаешь плоский кусок одной толщины.',
  ),
  minutes: 6,
  key: { value: l('2 min', '2 min', '2 мин'), label: l('po batku', 'per thigh', 'на бедро') },
  need: [
    { item: l('Pileći bataci sa kosti i kožom', 'Bone-in, skin-on chicken thighs', 'Куриные бёдра на кости с кожей'), qty: l('4 kom', '4', '4 шт') },
    { item: l('Mali, oštar nož', 'Small, sharp knife', 'Маленький острый нож'), qty: l('1', '1', '1') },
    { item: l('Daska za sirovo meso', 'Raw-meat board', 'Доска для сырого мяса'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Batak bez kosti je najsočnije meso u piletu i peče se za 10 minuta. Kupljen otkoštan košta duplo. Kost ide u fond.',
    'A boneless thigh is the juiciest meat on the bird and cooks in 10 minutes. Bought boned it costs twice as much. The bone goes into stock.',
    'Бедро без кости — самое сочное мясо курицы и готовится за 10 минут. Купленное без кости стоит вдвое дороже. Кость идёт в бульон.',
  ),
  steps: [
    {
      text: l('Stavi batak kožom nadole i napipaj kost.', 'Lay the thigh skin side down and feel for the bone.', 'Положи бедро кожей вниз и нащупай кость.'),
      done: l('Vidiš liniju gde kost leži ispod mesa.', 'You see the line where the bone lies under the meat.', 'Видна линия, где под мясом лежит кость.'),
    },
    {
      text: l('Zaseci duž kosti, celom dužinom, do kosti.', 'Cut along the bone, its full length, down to the bone.', 'Надрежь вдоль кости по всей длине до кости.'),
      params: [l('vrh noža uz kost', 'knife tip against the bone', 'кончик ножа вдоль кости')],
      done: l('Kost je otkrivena odozgo.', 'The top of the bone is exposed.', 'Кость открыта сверху.'),
      drawing: 'boneThigh',
    },
    {
      text: l('Malim potezima odvoji meso sa obe strane kosti.', 'With small strokes free the meat from both sides of the bone.', 'Мелкими движениями отдели мясо с обеих сторон кости.'),
      done: l('Kost je slobodna sa strana, drži se samo na krajevima.', 'The bone is free at the sides, held only at the ends.', 'Кость свободна по бокам, держится только на концах.'),
      why: l('Nož ostaje uz kost, sečivo blago ka njoj. Tako meso ostaje na mesu, ne na kosti.', 'The knife stays against the bone, the edge angled slightly towards it. That way the meat stays with the meat, not on the bone.', 'Нож вплотную к кости, лезвие чуть к ней. Так мясо остаётся на мясе, а не на кости.'),
    },
    {
      text: l('Podvuci nož ispod kosti i preseci krajeve.', 'Slide the knife under the bone and cut the ends free.', 'Подведи нож под кость и перережь концы.'),
      done: l('Kost je izvađena, bez komada mesa na njoj.', 'The bone is out, with no meat left on it.', 'Кость вынута, без мяса на ней.'),
    },
    {
      text: l('Odseci hrskavicu i žile, pa poravnaj debljinu.', 'Trim the cartilage and sinew, then even out the thickness.', 'Срежь хрящ и жилы, затем выровняй толщину.'),
      params: [l('~1.5 cm', '~1.5 cm', '~1,5 см')],
      done: l('Batak je ravan komad, svuda iste debljine.', 'The thigh is a flat piece, the same thickness everywhere.', 'Бедро — плоский кусок одной толщины.'),
      why: l('Najdeblji deo zaseci po debljini i otvori ga kao knjigu. Ravno meso se peče ravnomerno (7.3).', 'Cut into the thickest part and open it like a book. Flat meat cooks evenly (7.3).', 'Надрежь самую толстую часть и раскрой как книгу. Плоское мясо готовится равномерно (7.3).'),
    },
  ],
  mistake: {
    title: l('Sečenje sa strane mesa, ne sa strane kosti.', 'Cutting from the meat side, not along the bone.', 'Резать со стороны мяса, а не вдоль кости.'),
    fix: l(
      'Nož ode u meso i batak se raspadne na tri komada. Uvek prvo nađi kost, pa nož drži uz nju celo vreme. Ruka vodi, nož prati kost.',
      'The knife wanders into the meat and the thigh falls into three pieces. Always find the bone first, then keep the knife against it the whole time. The hand guides, the knife follows the bone.',
      'Нож уходит в мясо, и бедро распадается на три куска. Сначала найди кость и всё время держи нож вдоль неё. Рука ведёт, нож следует за костью.',
    ),
  },
  think: {
    question: l('Otkoštan batak u tiganju, kožom nadole. Do koje temperature?', 'A boned thigh in the pan, skin down. To what temperature?', 'Бедро без кости на сковороде кожей вниз. До какой температуры?'),
    options: [
      l('80°C, da bude mekan', '80°C, so it is tender', '80°C, чтобы было мягким'),
      l('65°C, kao svinjetina', '65°C, like pork', '65°C, как свинина'),
      l('74°C, i odmah iz tiganja', '74°C, then straight out of the pan', '74°C и сразу со сковороды'),
    ],
    answer: 0,
    explain: l(
      'Batak je bezbedan na 74°C, a mekan tek na 80°C. Ima dovoljno masnoće da se ne presuši, zato mu je teže pogrešiti nego belom mesu.',
      'Thigh is safe at 74°C but tender only at 80°C. It has enough fat not to dry out, which makes it more forgiving than breast.',
      'Бедро безопасно при 74°C, но мягкое только при 80°C. Жира достаточно, чтобы не пересохло, поэтому оно прощает больше, чем грудка.',
    ),
  },
}

const supreme: Lesson = {
  id: '2.2.4',
  title: l('Suprem: prsa sa kožom i koskom krila', 'Suprême: breast with skin and wing bone', 'Супрем: грудка с кожей и косточкой крыла'),
  goal: l(
    'Isečeš suprem i ispečeš ga sa hrskavom kožom i sočnim mesom.',
    'You cut a suprême and cook it with crisp skin and juicy meat.',
    'Ты вырезаешь супрем и готовишь его с хрустящей кожей и сочным мясом.',
  ),
  minutes: 7,
  key: { value: l('70°C', '70°C', '70°C'), label: l('skidaš', 'take out at', 'снимаешь при') },
  need: [
    { item: l('Celo pile ili prsa sa krilima', 'Whole chicken, or breasts with wings', 'Целая курица или грудки с крыльями'), qty: l('1', '1', '1') },
    { item: l('Mali nož, kuvarski nož', 'Small knife, chef\'s knife', 'Маленький нож, поварской нож'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Tiganj za rernu', 'Ovenproof pan', 'Сковорода для духовки'), qty: l('1', '1', '1') },
    { item: l('Puter, majčina dušica, beli luk', 'Butter, thyme, garlic', 'Сливочное масло, тимьян, чеснок'), qty: l('30 g + 2 + 2', '30 g + 2 + 2', '30 г + 2 + 2') },
  ],
  why: l(
    'Suprem je restoranska porcija piletine. Koska krila drži oblik i daje ukus, a koža štiti belo meso od presušivanja.',
    'The suprême is the restaurant portion of chicken. The wing bone holds the shape and adds flavour, and the skin shields the white meat from drying out.',
    'Супрем — ресторанная порция курицы. Косточка крыла держит форму и даёт вкус, а кожа защищает белое мясо от пересыхания.',
  ),
  steps: [
    {
      text: l('Odseci krilo na drugom zglobu, a prvu kost ostavi na prsima.', 'Cut the wing at the second joint, leaving the first bone on the breast.', 'Отрежь крыло по второму суставу, первую косточку оставь на грудке.'),
      done: l('Na prsima je ostala jedna kratka koska krila.', 'One short wing bone is left on the breast.', 'На грудке осталась одна короткая косточка крыла.'),
    },
    {
      text: l('Očisti kosku nožem do kraja.', 'Scrape the bone clean with the knife.', 'Очисти косточку ножом начисто.'),
      params: [l('3–4 cm čiste kosti', '3–4 cm of clean bone', '3–4 см чистой кости')],
      done: l('Koska je bela i bez mesa, kao drška.', 'The bone is white and bare, like a handle.', 'Косточка белая и чистая, как ручка.'),
      why: l('Očišćena kost ne gori i ne crni u rerni. Ovo se zove "francuski rez".', 'A cleaned bone does not burn or blacken in the oven. This is called a French trim.', 'Очищенная кость не горит и не чернеет в духовке. Это называется «французская зачистка».'),
    },
    {
      text: l('Seci uz grudnu kost i prati rebra, a zglob krila preseci uz telo.', 'Cut along the breastbone, follow the ribs and cut through the wing joint at the body.', 'Режь вдоль грудной кости, веди по рёбрам и перережь сустав крыла у тушки.'),
      done: l('Prsa su skinuta u jednom komadu, sa kožom i koskom krila.', 'The breast is off in one piece with skin and wing bone.', 'Грудка снята одним куском, с кожей и косточкой крыла.'),
      drawing: 'supreme',
    },
    {
      text: l('Peci kožom nadole u tiganju, pa okreni i stavi u rernu.', 'Sear skin side down in the pan, then turn and finish in the oven.', 'Обжарь кожей вниз на сковороде, переверни и поставь в духовку.'),
      params: [l('koža 5–6 min', 'skin 5–6 min', 'кожа 5–6 мин'), l('180°C, 8–10 min', '180°C, 8–10 min', '180°C, 8–10 мин')],
      done: l('Koža je zlatna i hrskava, a termometar u najdebljem delu pokazuje 70°C.', 'The skin is golden and crisp and the thickest part reads 70°C.', 'Кожа золотистая и хрустящая, в самой толстой части 70°C.'),
      why: l('Prsa sa koskom podignu se za još 3–4°C dok odmaraju i dostignu 74°C, kao u 13.1.', 'A bone-in breast climbs another 3–4°C as it rests and reaches 74°C, as in 13.1.', 'Грудка на кости поднимется ещё на 3–4°C во время отдыха и дойдёт до 74°C, как в 13.1.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Dodaj puter, beli luk i bilje i prelivaj prsa 1 minut.', 'Add butter, garlic and herbs and baste the breast for 1 minute.', 'Добавь масло, чеснок и травы и поливай грудку 1 минуту.'),
      params: [l('30 g', '30 g', '30 г'), l('5 min odmor', '5 min rest', '5 мин отдыха')],
      done: l('Prsa su sjajna i mirišu na puter i majčinu dušicu.', 'The breast is glossy and smells of butter and thyme.', 'Грудка блестит и пахнет маслом и тимьяном.'),
      why: l('Penušavi puter nosi ukus bilja na meso. Kašika ga stalno vraća preko vrha.', 'Foaming butter carries the herbs onto the meat. The spoon keeps returning it over the top.', 'Пенящееся масло переносит вкус трав на мясо. Ложка постоянно возвращает его сверху.'),
    },
  ],
  mistake: {
    title: l('Suprem okretan stalno u tiganju.', 'Turning the suprême over and over in the pan.', 'Постоянно переворачивать супрем на сковороде.'),
    fix: l(
      'Koža se ne zapeče i ostane gumena, a meso se peče sa obe strane podjednako i presuši. Koža dole, ne diraj 5 minuta, okreni jednom.',
      'The skin never crisps and stays rubbery, and the meat cooks from both sides and dries. Skin down, leave it 5 minutes, turn once.',
      'Кожа не схватывается и остаётся резиновой, а мясо жарится с двух сторон и пересыхает. Кожей вниз, не трогай 5 минут, переверни один раз.',
    ),
  },
  think: {
    question: l('Zašto se suprem skida na 70°C, a ne na 74°C?', 'Why is the suprême taken off at 70°C, not 74°C?', 'Почему супрем снимают при 70°C, а не при 74°C?'),
    options: [
      l('Temperatura raste još par stepeni dok odmara', 'The temperature rises a few more degrees while it rests', 'Температура поднимается ещё на несколько градусов во время отдыха'),
      l('70°C je dovoljno za piletinu', '70°C is enough for chicken', '70°C достаточно для курицы'),
      l('Koža bi izgorela na 74°C', 'The skin would burn at 74°C', 'Кожа сгорит при 74°C'),
    ],
    answer: 0,
    explain: l(
      'Toplota iz spoljnih slojeva ide ka sredini posle tiganja, kao u 7.5. Cilj je 74°C posle odmora, a ne u rerni.',
      'Heat from the outer layers keeps moving to the centre after the pan, as in 7.5. The target is 74°C after resting, not in the oven.',
      'Тепло из внешних слоёв продолжает идти к центру после сковороды, как в 7.5. Цель — 74°C после отдыха, а не в духовке.',
    ),
  },
  recipe: { name: l('Pileći suprem sa puterom i majčinom dušicom', 'Chicken suprême with butter and thyme', 'Куриный супрем с маслом и тимьяном'), protein: 27, carbs: 0, fat: 11, kcal: 210 },
}

const duck: Lesson = {
  id: '2.2.5',
  title: l('Pačja prsa i topljenje masti', 'Duck breast and rendering the fat', 'Утиная грудка и вытапливание жира'),
  goal: l(
    'Ispečeš pačja prsa sa tankom, hrskavom kožom i ružičastim mesom, i sačuvaš pačju mast.',
    'You cook a duck breast with thin, crisp skin and pink meat, and keep the duck fat.',
    'Ты готовишь утиную грудку с тонкой хрустящей кожей и розовым мясом и сохраняешь утиный жир.',
  ),
  minutes: 7,
  key: { value: l('57°C', '57°C', '57°C'), label: l('ružičasto', 'pink', 'розовое') },
  need: [
    { item: l('Pačja prsa sa kožom', 'Duck breasts, skin on', 'Утиные грудки с кожей'), qty: l('2 kom', '2', '2 шт') },
    { item: l('Oštar nož', 'Sharp knife', 'Острый нож'), qty: l('1', '1', '1') },
    { item: l('Hladan tiganj', 'A cold pan', 'Холодная сковорода'), qty: l('1', '1', '1') },
    { item: l('Tegla za mast', 'A jar for the fat', 'Банка для жира'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Pačja prsa imaju debeo sloj masti ispod kože. Ako se ne istopi, jede se mlitava mast. Ako se istopi, koža je hrskava kao čips, a mast je zlato za krompir.',
    'A duck breast has a thick layer of fat under the skin. If it does not render, you eat soft fat. If it does, the skin crisps like a crisp and the fat is gold for potatoes.',
    'У утиной грудки толстый слой жира под кожей. Не вытопится — ешь мягкий жир. Вытопится — кожа хрустит, как чипсы, а жир — золото для картофеля.',
  ),
  steps: [
    {
      text: l('Zaseci kožu u rešetku, do mesa ali ne u meso.', 'Score the skin in a crosshatch, down to the meat but not into it.', 'Надрежь кожу сеточкой до мяса, но не задевая его.'),
      params: [l('razmak 5 mm', '5 mm apart', 'шаг 5 мм')],
      done: l('Mast se vidi u rezovima, a meso nije zasečeno.', 'The fat shows in the cuts and the meat is untouched.', 'В надрезах виден жир, мясо не задето.'),
      why: l('Zasecanje otvori put masti da iscuri. Zasečeno meso bi pustilo sok.', 'Scoring opens a path for the fat to run out. Cut meat would lose its juice.', 'Надрезы открывают путь жиру. Надрезанное мясо потеряло бы сок.'),
      drawing: 'scoreDuck',
    },
    {
      text: l('Posoli i stavi prsa kožom nadole u hladan tiganj.', 'Salt and lay the breasts skin down in a cold pan.', 'Посоли и положи грудки кожей вниз на холодную сковороду.'),
      params: [l('bez ulja', 'no oil', 'без масла'), l('hladan tiganj', 'cold pan', 'холодная сковорода')],
      done: l('Prsa leže ravno, cela koža dodiruje tiganj.', 'The breasts lie flat, all the skin touching the pan.', 'Грудки лежат ровно, вся кожа касается сковороды.'),
      why: l('Hladan start, kao za fond (8.1): mast se topi polako pre nego što koža zagori.', 'A cold start, as for stock (8.1): the fat melts slowly before the skin can burn.', 'Холодный старт, как для бульона (8.1): жир тает медленно, раньше, чем кожа подгорит.'),
    },
    {
      text: l('Uključi srednje tihu vatru i topi mast.', 'Turn on medium-low heat and render the fat.', 'Включи огонь ниже среднего и вытапливай жир.'),
      params: [l('10–12 min', '10–12 min', '10–12 мин'), l('odlij mast 2–3 puta', 'pour off the fat 2–3 times', 'сливай жир 2–3 раза')],
      done: l('Koža je tanka, tamnozlatna i tvrda kad je kucneš.', 'The skin is thin, deep golden and hard when tapped.', 'Кожа тонкая, тёмно-золотистая и твёрдая на стук.'),
      why: l('Mast koja ostane u tiganju prži kožu umesto da je topi. Odlivena ide u teglu.', 'Fat left in the pan fries the skin instead of rendering it. Poured off, it goes into the jar.', 'Жир, оставшийся на сковороде, жарит кожу вместо вытапливания. Слитый — идёт в банку.'),
      drawing: 'renderFat',
    },
    {
      text: l('Okreni i peci mesnu stranu kratko.', 'Turn and cook the meat side briefly.', 'Переверни и коротко обжарь мясную сторону.'),
      params: [l('1–2 min', '1–2 min', '1–2 мин'), l('skidaš na 54°C', 'off at 54°C', 'снимаешь при 54°C')],
      done: l('Termometar u sredini pokazuje 54°C.', 'The probe at the centre reads 54°C.', 'Термометр в центре показывает 54°C.'),
      why: l('Pačja prsa se služe ružičasta, kao biftek. Pečena do kraja postanu tvrda i jetrena.', 'Duck breast is served pink, like steak. Cooked through it turns tough and livery.', 'Утиную грудку подают розовой, как стейк. Прожаренная становится жёсткой и с печёночным привкусом.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Odmori kožom nagore, pa seci poprečno.', 'Rest skin side up, then slice across.', 'Дай отдохнуть кожей вверх, затем нарежь поперёк.'),
      params: [l('5–8 min', '5–8 min', '5–8 мин'), l('57°C posle odmora', '57°C after resting', '57°C после отдыха'), l('šnite 1 cm', 'slices 1 cm', 'ломти 1 см')],
      done: l('Presek je ravnomerno ružičast, a koža krcka pod nožem.', 'The cut face is evenly pink and the skin crackles under the knife.', 'Срез равномерно розовый, кожа хрустит под ножом.'),
      why: l('Kožom nagore, da para ne omekša koricu. Mast iz tegle čuvaj za krompir i konfi (2.9.2).', 'Skin up, so steam does not soften the crust. Keep the jarred fat for potatoes and confit (2.9.2).', 'Кожей вверх, чтобы пар не размягчил корочку. Жир из банки — для картофеля и конфи (2.9.2).'),
    },
  ],
  mistake: {
    title: l('Pačja prsa u vreo tiganj, kao biftek.', 'Duck breast into a hot pan, like a steak.', 'Утиная грудка на раскалённую сковороду, как стейк.'),
    fix: l(
      'Koža izgori spolja za tri minuta, a debeo sloj masti ispod nje ostane netaknut. Uvek hladan tiganj, srednje tiha vatra i strpljenje.',
      'The skin burns on the outside in three minutes while the thick fat beneath stays untouched. Always a cold pan, medium-low heat and patience.',
      'Кожа сгорает снаружи за три минуты, а толстый слой жира под ней остаётся нетронутым. Всегда холодная сковорода, огонь ниже среднего и терпение.',
    ),
  },
  think: {
    question: l('Zašto pačja prsa mogu da budu ružičasta, a pileća ne?', 'Why can duck breast be pink but chicken breast cannot?', 'Почему утиная грудка может быть розовой, а куриная — нет?'),
    options: [
      l('Pačje meso se tretira kao crveno meso celog mišića, a piletina nosi više rizika od salmonele', 'Duck breast is treated like whole-muscle red meat, while chicken carries more salmonella risk', 'Утиная грудка считается цельным красным мясом, а курица несёт больший риск сальмонеллы'),
      l('Patka je uvek zamrznuta', 'Duck is always frozen', 'Утка всегда заморожена'),
      l('Pačja koža štiti meso od bakterija', 'Duck skin protects the meat from bacteria', 'Утиная кожа защищает мясо от бактерий'),
    ],
    answer: 0,
    explain: l(
      'Ružičasta pačja prsa su standard u restoranima. Ali celu patku, batake i mleveno pačje meso pečeš do kraja, kao i svu piletinu.',
      'Pink duck breast is a restaurant standard. But whole duck, legs and minced duck are cooked through, like all chicken.',
      'Розовая утиная грудка — ресторанный стандарт. Но целую утку, ножки и утиный фарш прожаривают полностью, как и всю курицу.',
    ),
  },
  recipe: { name: l('Pačja prsa', 'Duck breast', 'Утиная грудка'), protein: 24, carbs: 0, fat: 15, kcal: 235 },
}

export const poultryLessons: Lesson[] = [eight, spatchcock, thigh, supreme, duck]
