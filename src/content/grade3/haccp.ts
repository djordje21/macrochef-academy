import { l, type Lesson } from '../types'

// Grade 3 · Module 11 · HACCP in practice. Food safety as a system the chef runs every shift, not a folder
// on a shelf: the seven principles, cooling and reheating, temperature logs, allergens and cleaning.
// Limits follow common EU and US guidance; the kitchen's own HACCP plan and local law always come first.

const principles: Lesson = {
  id: '3.11.1',
  title: l('Sedam principa HACCP-a', 'The seven HACCP principles', 'Семь принципов ХАССП'),
  goal: l(
    'Napraviš HACCP tok za jedno jelo: opasnosti, kritične tačke, granice, praćenje i zapise.',
    'You build a HACCP flow for one dish: hazards, critical points, limits, monitoring and records.',
    'Ты строишь схему ХАССП для одного блюда: опасности, критические точки, пределы, контроль и записи.',
  ),
  minutes: 8,
  key: { value: l('7', '7', '7'), label: l('principa', 'principles', 'принципов') },
  need: [
    { item: l('Recept-kartica jednog jela', 'The recipe card of one dish', 'Техкарта одного блюда'), qty: l('1', '1', '1') },
    { item: l('Papir za dijagram toka', 'Paper for a flow diagram', 'Бумага для схемы процесса'), qty: l('1', '1', '1') },
    { item: l('Termometar i liste (3.11.3)', 'Thermometer and logs (3.11.3)', 'Термометр и журналы (3.11.3)'), qty: l('1', '1', '1') },
  ],
  why: l(
    'HACCP je zakonska obaveza za svaku kuhinju u Srbiji i EU. Ali pre toga je zdrav razum zapisan na papiru: gde hrana može da postane opasna i kako to sprečavaš.',
    'HACCP is a legal requirement for every kitchen in Serbia and the EU. But before that it is common sense written down: where food can become dangerous and how you prevent it.',
    'ХАССП — требование закона для каждой кухни в Сербии и ЕС. Но прежде всего это записанный здравый смысл: где еда может стать опасной и как это предотвратить.',
  ),
  steps: [
    {
      text: l('Nacrtaj put jela od prijema robe do tanjira.', 'Draw the dish\'s path from receiving the goods to the plate.', 'Нарисуй путь блюда от приёмки товара до тарелки.'),
      params: [l('prijem · čuvanje · priprema · kuvanje · hlađenje · podgrevanje · služenje', 'receiving · storage · prep · cooking · cooling · reheating · serving', 'приёмка · хранение · подготовка · готовка · охлаждение · разогрев · подача')],
      done: l('Na papiru je svaki korak kroz koji jelo prolazi.', 'Every step the dish goes through is on paper.', 'На бумаге каждый шаг, через который проходит блюдо.'),
      why: l('Opasnost se ne vidi u celom jelu, nego u jednom koraku. Zato se prvo crta tok.', 'A hazard is not visible in the whole dish, only in one step. That is why you draw the flow first.', 'Опасность видна не во всём блюде, а в одном шаге. Поэтому сначала рисуют процесс.'),
      drawing: 'prepTimeline',
    },
    {
      text: l('Za svaki korak zapiši opasnosti.', 'For each step, write down the hazards.', 'Для каждого шага запиши опасности.'),
      params: [l('biološke · hemijske · fizičke · alergeni', 'biological · chemical · physical · allergens', 'биологические · химические · физические · аллергены')],
      done: l('Uz svaki korak stoji šta tu može da pođe naopako.', 'Next to each step is what can go wrong there.', 'Рядом с каждым шагом указано, что там может пойти не так.'),
      why: l('Bakterije na sirovoj piletini, ostaci deterdženta, komadić stakla, kikiriki u pogrešnom sosu. To je princip 1: analiza opasnosti.', 'Bacteria on raw chicken, detergent residue, a shard of glass, peanuts in the wrong sauce. That is principle 1: hazard analysis.', 'Бактерии на сырой курице, остатки моющего средства, осколок стекла, арахис не в том соусе. Это принцип 1: анализ опасностей.'),
    },
    {
      text: l('Odredi kritične tačke i za svaku granicu koja se meri.', 'Identify the critical points and give each a measurable limit.', 'Определи критические точки и для каждой — измеримый предел.'),
      params: [l('kuvanje piletine: 74°C u sredini', 'cooking chicken: 74°C at the centre', 'приготовление курицы: 74°C в центре'), l('hlađenje: 60→21°C za 2 h', 'cooling: 60→21°C in 2 h', 'охлаждение: 60→21°C за 2 ч')],
      done: l('Svaka kritična tačka ima broj, ne opis.', 'Every critical point has a number, not a description.', 'У каждой критической точки число, а не описание.'),
      why: l('Kritična tačka je korak gde opasnost uklanjaš i posle nje nema druge provere. Principi 2 i 3: tačke i granice.', 'A critical point is a step where you remove the hazard and there is no later check. Principles 2 and 3: points and limits.', 'Критическая точка — шаг, где опасность устраняют, и после него проверки нет. Принципы 2 и 3: точки и пределы.'),
      drawing: 'probeCenter',
    },
    {
      text: l('Za svaku tačku odredi ko meri, kako, koliko često i šta radi kad granica nije ispunjena.', 'For each point, decide who measures, how, how often, and what happens when the limit is missed.', 'Для каждой точки определи, кто измеряет, как, как часто и что делать, если предел не выполнен.'),
      params: [l('npr. ispod 74°C: kuvaj dalje i izmeri ponovo', 'e.g. below 74°C: keep cooking and measure again', 'например ниже 74°C: готовить дальше и измерить снова')],
      done: l('Svaki kuvar zna svoju tačku i svoju korektivnu meru.', 'Every cook knows their point and their corrective action.', 'Каждый повар знает свою точку и своё корректирующее действие.'),
      why: l('Merenje bez odluke šta dalje je samo broj. Principi 4 i 5: praćenje i korektivne mere.', 'A measurement with no decision about what next is just a number. Principles 4 and 5: monitoring and corrective action.', 'Измерение без решения, что делать дальше, — просто число. Принципы 4 и 5: контроль и корректирующие действия.'),
    },
    {
      text: l('Zapisuj sve i jednom mesečno proveri da sistem radi.', 'Record everything and check once a month that the system works.', 'Записывай всё и раз в месяц проверяй, что система работает.'),
      params: [l('liste · potpisi · mesečna provera', 'logs · signatures · monthly review', 'журналы · подписи · ежемесячная проверка')],
      done: l('Za svaki dan postoje popunjene liste sa potpisima.', 'There are completed, signed logs for every day.', 'Для каждого дня есть заполненные и подписанные журналы.'),
      why: l('Ono što nije zapisano, za inspektora nije urađeno. Principi 6 i 7: verifikacija i dokumentacija.', 'What is not written down, to an inspector, was not done. Principles 6 and 7: verification and records.', 'Что не записано, для инспектора не сделано. Принципы 6 и 7: верификация и документация.'),
    },
  ],
  mistake: {
    title: l('HACCP plan u fascikli koju niko ne otvara.', 'A HACCP plan in a folder nobody opens.', 'План ХАССП в папке, которую никто не открывает.'),
    fix: l(
      'Plan koji kuvari ne znaju ne štiti nikoga. Kritične tačke i granice stoje na zidu kod stanice, a liste se pune na smeni, ne na kraju meseca.',
      'A plan the cooks do not know protects nobody. The critical points and limits hang on the wall by the station, and the logs are filled in on shift, not at the end of the month.',
      'План, которого не знают повара, никого не защищает. Критические точки и пределы висят на стене у станции, а журналы заполняются на смене, а не в конце месяца.',
    ),
  },
  think: {
    question: l('Šta je kritična kontrolna tačka?', 'What is a critical control point?', 'Что такое критическая контрольная точка?'),
    options: [
      l('Korak gde se opasnost uklanja i nema kasnije provere', 'A step where the hazard is removed and there is no later check', 'Шаг, где опасность устраняется и нет последующей проверки'),
      l('Svaki korak u pripremi', 'Every step in the prep', 'Каждый шаг подготовки'),
      l('Mesto gde stoji termometar', 'Where the thermometer is kept', 'Место, где лежит термометр'),
    ],
    answer: 0,
    explain: l(
      'Kuvanje piletine na 74°C je kritična tačka: posle nje bakterije više ne uklanja ništa. Pranje ruku je važno, ali je deo osnovne higijene, ne kritična tačka.',
      'Cooking chicken to 74°C is a critical point: after it, nothing else removes the bacteria. Washing hands matters, but it is basic hygiene, not a critical point.',
      'Приготовление курицы до 74°C — критическая точка: после неё ничто не устраняет бактерии. Мытьё рук важно, но это базовая гигиена, а не критическая точка.',
    ),
  },
}

const coolReheat: Lesson = {
  id: '3.11.2',
  title: l('Hlađenje i podgrevanje', 'Cooling and reheating', 'Охлаждение и разогрев'),
  goal: l(
    'Ohladiš veliku količinu kuvane hrane brzo i bezbedno, i podgreješ je samo jednom, do prave temperature.',
    'You cool a large batch of cooked food quickly and safely, and reheat it only once, to the right temperature.',
    'Ты быстро и безопасно охлаждаешь большую партию готовой еды и разогреваешь её только один раз, до нужной температуры.',
  ),
  minutes: 6,
  key: { value: l('2 h + 4 h', '2 h + 4 h', '2 ч + 4 ч'), label: l('hlađenje do 5°C', 'cooling to 5°C', 'охлаждение до 5°C') },
  need: [
    { item: l('Kuvano jelo: gulaš, fond, pirinač', 'A cooked batch: goulash, stock, rice', 'Готовая партия: гуляш, бульон, рис'), qty: l('10 L', '10 L', '10 л') },
    { item: l('Plitke posude i led', 'Shallow containers and ice', 'Плоские ёмкости и лёд'), qty: l('4 + 5 kg', '4 + 5 kg', '4 + 5 кг') },
    { item: l('Termometar i lista hlađenja', 'Thermometer and cooling log', 'Термометр и журнал охлаждения'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Najviše trovanja hranom u restoranima dolazi od jela koja su skuvana kako treba, a onda sporo ohlađena ili loše podgrejana.',
    'Most restaurant food poisoning comes from dishes that were cooked properly and then cooled too slowly or reheated badly.',
    'Большинство ресторанных отравлений происходит от блюд, приготовленных правильно, но затем медленно охлаждённых или плохо разогретых.',
  ),
  steps: [
    {
      text: l('Podeli veliku količinu u plitke posude.', 'Split the large batch into shallow containers.', 'Раздели большую партию по плоским ёмкостям.'),
      params: [l('sloj do 5 cm', 'layer up to 5 cm', 'слой до 5 см')],
      done: l('Nijedna posuda nema deblji sloj od 5 cm.', 'No container holds a layer deeper than 5 cm.', 'Ни в одной ёмкости слой не толще 5 см.'),
      why: l('Sredina lonca od 10 litara ostane topla satima. Tanak sloj se ohladi za minute.', 'The middle of a 10-litre pot stays warm for hours. A thin layer cools in minutes.', 'Середина 10-литровой кастрюли остаётся тёплой часами. Тонкий слой остывает за минуты.'),
    },
    {
      text: l('Posude stavi u led sa vodom i mešaj.', 'Set the containers in ice and water and stir.', 'Поставь ёмкости в лёд с водой и помешивай.'),
      done: l('Hrana se vidno hladi, a led se topi.', 'The food is visibly cooling and the ice is melting.', 'Еда заметно остывает, а лёд тает.'),
      why: l('Voda sa ledom izvlači toplotu mnogo brže od vazduha u frižideru. Frižider nije uređaj za hlađenje toplog.', 'Iced water draws heat out far faster than the air in a fridge. A fridge is not a machine for cooling hot food.', 'Ледяная вода забирает тепло гораздо быстрее, чем воздух холодильника. Холодильник — не прибор для охлаждения горячего.'),
    },
    {
      text: l('Prati dve granice i upiši vreme i temperaturu.', 'Track the two limits and log the time and temperature.', 'Следи за двумя пределами и записывай время и температуру.'),
      params: [l('60 → 21°C za 2 h', '60 → 21°C in 2 h', '60 → 21°C за 2 ч'), l('21 → 5°C za još 4 h', '21 → 5°C in another 4 h', '21 → 5°C ещё за 4 ч')],
      done: l('U listi hlađenja su obe granice ispunjene.', 'Both limits are met in the cooling log.', 'В журнале охлаждения оба предела выполнены.'),
      why: l('Bakterije se najbrže množe između 21 i 52°C. Zato prva dva sata moraju biti najbrža.', 'Bacteria multiply fastest between 21 and 52°C. That is why the first two hours must be the fastest.', 'Бактерии размножаются быстрее всего между 21 и 52°C. Поэтому первые два часа должны быть самыми быстрыми.'),
    },
    {
      text: l('Podgrej brzo do 75°C u sredini, samo jednom.', 'Reheat quickly to 75°C at the centre, once only.', 'Разогревай быстро до 75°C в центре, только один раз.'),
      params: [l('75°C', '75°C', '75°C'), l('najviše jednom', 'once at most', 'не более одного раза')],
      done: l('Termometar u sredini pokazuje 75°C.', 'The thermometer at the centre reads 75°C.', 'Термометр в центре показывает 75°C.'),
      why: l('Svako hlađenje i podgrevanje je novi krug kroz opasnu zonu. Podgrej samo koliko ide na servis.', 'Every cooling and reheating is another trip through the danger zone. Reheat only what is going out on service.', 'Каждое охлаждение и разогрев — новый круг через опасную зону. Разогревай только то, что идёт на сервис.'),
    },
    {
      text: l('Drži toplo iznad 63°C, ili baci posle 2 sata.', 'Hold hot above 63°C, or throw it out after 2 hours.', 'Держи горячим выше 63°C или выброси через 2 часа.'),
      params: [l('iznad 63°C', 'above 63°C', 'выше 63°C')],
      done: l('Bain-marie drži temperaturu, i ona je upisana.', 'The bain-marie holds the temperature, and it is logged.', 'Мармит держит температуру, и она записана.'),
      why: l('Hrana koja padne ispod 63°C više nije „topla“, nego u opasnoj zoni (1.4).', 'Food that drops below 63°C is no longer "hot" but in the danger zone (1.4).', 'Еда, опустившаяся ниже 63°C, уже не «горячая», а в опасной зоне (1.4).'),
    },
  ],
  mistake: {
    title: l('Pun lonac gulaša stavljen u frižider da se ohladi preko noći.', 'A full pot of goulash put in the fridge to cool overnight.', 'Полная кастрюля гуляша поставлена в холодильник остывать на ночь.'),
    fix: l(
      'Sredina lonca ostane u opasnoj zoni satima, a lonac greje i svu hranu oko sebe. Plitke posude, led i voda, i tek hladno u frižider.',
      'The middle of the pot stays in the danger zone for hours, and the pot warms all the food around it. Shallow containers, ice and water, and only cold food goes in the fridge.',
      'Середина кастрюли часами остаётся в опасной зоне, а кастрюля греет всю еду вокруг. Плоские ёмкости, лёд с водой, и в холодильник — только холодное.',
    ),
  },
  think: {
    question: l('Zašto se hrana podgreva samo jednom?', 'Why is food reheated only once?', 'Почему еду разогревают только один раз?'),
    options: [
      l('Svaki krug hlađenja i grejanja je novo vreme u opasnoj zoni', 'Each cycle of cooling and heating is more time in the danger zone', 'Каждый цикл охлаждения и нагрева — новое время в опасной зоне'),
      l('Gubi ukus', 'It loses flavour', 'Теряет вкус'),
      l('Tako piše u receptu', 'The recipe says so', 'Так написано в рецепте'),
    ],
    answer: 0,
    explain: l(
      'Svaki put kad hrana prolazi kroz 5–63°C, bakterije dobijaju vreme. Neke ostave i toksine koje ni ponovno kuvanje ne uništava.',
      'Each time food passes through 5–63°C, bacteria get time. Some leave toxins that even recooking does not destroy.',
      'Каждый раз, когда еда проходит через 5–63°C, бактерии получают время. Некоторые оставляют токсины, которые не разрушает даже повторная готовка.',
    ),
  },
}

const logs: Lesson = {
  id: '3.11.3',
  title: l('Temperaturne liste', 'Temperature logs', 'Температурные журналы'),
  goal: l(
    'Kalibrišeš termometar i vodiš liste za frižidere, kuvanje i hlađenje, sa merom kad je nešto van granice.',
    'You calibrate a thermometer and keep logs for fridges, cooking and cooling, with an action when something is out of range.',
    'Ты калибруешь термометр и ведёшь журналы холодильников, готовки и охлаждения, с действием при выходе за пределы.',
  ),
  minutes: 6,
  key: { value: l('2×', '2×', '2×'), label: l('dnevno za svaki frižider', 'a day for every fridge', 'в день для каждого холодильника') },
  need: [
    { item: l('Digitalni termometar sa sondom', 'Digital probe thermometer', 'Цифровой термометр со щупом'), qty: l('1', '1', '1') },
    { item: l('Čaša leda sa vodom', 'A glass of iced water', 'Стакан воды со льдом'), qty: l('1', '1', '1') },
    { item: l('Liste: frižideri, kuvanje, hlađenje', 'Logs: fridges, cooking, cooling', 'Журналы: холодильники, готовка, охлаждение'), qty: l('3', '3', '3') },
  ],
  why: l(
    'Lista je dokaz da je hrana bila bezbedna. Bez nje, i kad je sve bilo u redu, ne možeš to da pokažeš ni inspektoru ni sebi.',
    'A log is the proof that food was safe. Without it, even when everything was fine, you cannot show it, to an inspector or to yourself.',
    'Журнал — доказательство того, что еда была безопасной. Без него, даже если всё было в порядке, этого не доказать ни инспектору, ни себе.',
  ),
  steps: [
    {
      text: l('Kalibriši termometar u čaši leda sa vodom.', 'Calibrate the thermometer in a glass of iced water.', 'Откалибруй термометр в стакане воды со льдом.'),
      params: [l('0°C ± 1°C', '0°C ± 1°C', '0°C ± 1°C'), l('jednom nedeljno', 'once a week', 'раз в неделю')],
      done: l('Termometar u ledenoj vodi pokazuje između −1 i 1°C.', 'The thermometer in iced water reads between −1 and 1°C.', 'Термометр в ледяной воде показывает от −1 до 1°C.'),
      why: l('Termometar koji greši za tri stepena čini sve liste lažnim.', 'A thermometer three degrees out makes every log a lie.', 'Термометр с ошибкой в три градуса делает все журналы ложными.'),
      drawing: 'iceTest',
    },
    {
      text: l('Izmeri svaki frižider i zamrzivač ujutru i uveče.', 'Check every fridge and freezer morning and evening.', 'Измеряй каждый холодильник и морозилку утром и вечером.'),
      params: [l('frižider 0–5°C', 'fridge 0–5°C', 'холодильник 0–5°C'), l('zamrzivač −18°C ili niže', 'freezer −18°C or colder', 'морозилка −18°C и ниже')],
      done: l('Lista ima dva upisa dnevno za svaki uređaj.', 'The log has two entries a day for every unit.', 'В журнале по две записи в день для каждого прибора.'),
      why: l('Frižider koji se pokvari posle zatvaranja, ujutru pokaže svoj problem. Bez jutarnjeg merenja, ta hrana ide na servis.', 'A fridge that fails after closing shows it in the morning. Without the morning check, that food goes out on service.', 'Холодильник, сломавшийся после закрытия, утром покажет проблему. Без утреннего замера эта еда уйдёт на сервис.'),
      drawing: 'fridgeTemp',
    },
    {
      text: l('Upiši temperaturu svake ture kuvanja i hlađenja.', 'Log the temperature of every cooking and cooling batch.', 'Записывай температуру каждой партии готовки и охлаждения.'),
      params: [l('piletina 74°C', 'chicken 74°C', 'курица 74°C'), l('hlađenje 2 h + 4 h', 'cooling 2 h + 4 h', 'охлаждение 2 ч + 4 ч')],
      done: l('Svaka tura sa kritične tačke ima svoj broj u listi.', 'Every batch from a critical point has its number in the log.', 'У каждой партии с критической точки есть своё число в журнале.'),
      why: l('Ovo su kritične tačke iz plana (3.11.1). Lista pokazuje da su granice bile ispunjene svaki put.', 'These are the critical points from the plan (3.11.1). The log shows the limits were met every time.', 'Это критические точки из плана (3.11.1). Журнал показывает, что пределы выполнялись каждый раз.'),
    },
    {
      text: l('Svaki upis ima vreme, temperaturu i inicijale.', 'Every entry has the time, temperature and initials.', 'В каждой записи время, температура и инициалы.'),
      done: l('Za svaki broj se zna kad je izmeren i ko ga je izmerio.', 'For every number you know when it was taken and by whom.', 'Для каждого числа известно, когда и кем оно измерено.'),
      why: l('Lista popunjena istom olovkom za ceo mesec, odjednom, svaki inspektor prepozna.', 'A month\'s log filled in all at once with the same pen, every inspector recognises.', 'Журнал за месяц, заполненный разом одной ручкой, распознает любой инспектор.'),
    },
    {
      text: l('Kad je nešto van granice, upiši i šta si uradio.', 'When something is out of range, also write down what you did.', 'Когда что-то за пределами, запиши и что сделал.'),
      params: [l('npr. frižider 8°C: roba premeštena, servis pozvan', 'e.g. fridge 8°C: stock moved, engineer called', 'например холодильник 8°C: товар перенесён, вызван мастер')],
      done: l('Uz svaki broj van granice stoji korektivna mera.', 'Every out-of-range number has a corrective action next to it.', 'Рядом с каждым числом за пределами — корректирующее действие.'),
      why: l('Broj van granice bez mere znači da je neko video problem i ništa nije uradio.', 'An out-of-range number with no action means someone saw the problem and did nothing.', 'Число за пределами без действия значит, что кто-то увидел проблему и ничего не сделал.'),
    },
  ],
  mistake: {
    title: l('Liste popunjene na kraju meseca, „po sećanju“.', 'Logs filled in at the end of the month, "from memory".', 'Журналы заполнены в конце месяца, «по памяти».'),
    fix: l(
      'To nije zapis, nego falsifikat, i ne štiti ni gosta ni tebe. Lista visi kod frižidera i popunjava se u trenutku merenja.',
      'That is not a record but a forgery, and it protects neither the guest nor you. The log hangs by the fridge and is filled in at the moment of measuring.',
      'Это не запись, а подделка, и она не защищает ни гостя, ни тебя. Журнал висит у холодильника и заполняется в момент замера.',
    ),
  },
  think: {
    question: l('Termometar u ledenoj vodi pokazuje 3°C. Šta to znači?', 'The thermometer in iced water reads 3°C. What does that mean?', 'Термометр в ледяной воде показывает 3°C. Что это значит?'),
    options: [
      l('Greši za 3 stepena i treba ga podesiti ili zameniti', 'It is 3 degrees out and must be adjusted or replaced', 'Он ошибается на 3 градуса, его нужно настроить или заменить'),
      l('Voda nije dovoljno hladna', 'The water is not cold enough', 'Вода недостаточно холодная'),
      l('Sve je u redu', 'Everything is fine', 'Всё в порядке'),
    ],
    answer: 0,
    explain: l(
      'Led sa vodom je uvek 0°C. Termometar koji pokazuje 3°C pokazaće i 71°C kad je piletina na 68°C, i to je opasno.',
      'Ice and water is always 0°C. A thermometer reading 3°C will also read 71°C when the chicken is at 68°C, and that is dangerous.',
      'Лёд с водой — всегда 0°C. Термометр, показывающий 3°C, покажет 71°C, когда курица на 68°C, а это опасно.',
    ),
  },
}

const allergenKitchen: Lesson = {
  id: '3.11.4',
  title: l('Alergeni u kuhinji', 'Allergens in the kitchen', 'Аллергены на кухне'),
  goal: l(
    'Pripremiš jelo za gosta sa alergijom od bona do stola, bez unakrsne kontaminacije.',
    'You prepare a dish for a guest with an allergy from ticket to table, with no cross-contamination.',
    'Ты готовишь блюдо для гостя с аллергией от заказа до стола, без перекрёстного загрязнения.',
  ),
  minutes: 6,
  key: { value: l('1', '1', '1'), label: l('kuvar odgovoran za to jelo', 'cook responsible for that dish', 'повар, отвечающий за это блюдо') },
  need: [
    { item: l('Oprema posebne boje: daska, nož, kašike', 'Colour-coded kit: board, knife, spoons', 'Инвентарь особого цвета: доска, нож, ложки'), qty: l('1 set', '1 set', '1 набор') },
    { item: l('Tabela alergena (3.9.2)', 'The allergen table (3.9.2)', 'Таблица аллергенов (3.9.2)'), qty: l('1', '1', '1') },
    { item: l('Oznaka za tanjir', 'A plate marker', 'Маркер для тарелки'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Tabela alergena kaže šta je u jelu. Ova lekcija se bavi onim što u jelo može da upadne usput: sa daske, kašike ili ruku.',
    'The allergen table says what is in the dish. This lesson is about what can get into it along the way: from a board, a spoon or hands.',
    'Таблица аллергенов говорит, что в блюде. Этот урок о том, что может попасть в него по пути: с доски, ложки или рук.',
  ),
  steps: [
    {
      text: l('Za alergije koristi opremu posebne boje.', 'Use colour-coded equipment for allergies.', 'Для аллергий используй инвентарь особого цвета.'),
      params: [l('npr. ljubičasta', 'e.g. purple', 'например фиолетовый')],
      done: l('Ljubičasta oprema stoji odvojeno i koristi se samo za to.', 'The purple kit is kept apart and used only for this.', 'Фиолетовый инвентарь хранится отдельно и используется только для этого.'),
      why: l('Boja se vidi u sekundi, i na najgušćem servisu.', 'A colour is seen in a second, even on the busiest service.', 'Цвет виден за секунду, даже на самом загруженном сервисе.'),
      drawing: 'twoBoards',
    },
    {
      text: l('Alergene sastojke čuvaj zatvorene, označene, na posebnoj polici.', 'Keep allergen ingredients sealed, labelled and on a separate shelf.', 'Храни аллергенные продукты закрытыми, промаркированными, на отдельной полке.'),
      params: [l('ispod ostale hrane', 'below other food', 'ниже остальной еды')],
      done: l('Orašasti plodovi, susam i brašno ne stoje iznad ničega otvorenog.', 'Nuts, sesame and flour do not sit above anything open.', 'Орехи, кунжут и мука не стоят над чем-то открытым.'),
      why: l('Prašina od brašna i mrvice orašastih plodova padaju nadole. Polica ispod ne može da kontaminira ono iznad.', 'Flour dust and nut crumbs fall downwards. A lower shelf cannot contaminate what is above it.', 'Мучная пыль и ореховые крошки падают вниз. Нижняя полка не может загрязнить то, что выше.'),
    },
    {
      text: l('Bon sa alergijom šef pročita naglas, a kuvar potvrdi.', 'The chef reads an allergy ticket aloud, and the cook confirms.', 'Шеф читает заказ с аллергией вслух, повар подтверждает.'),
      params: [l('„Sto 7, alergija na orašaste“ · „Čujem, sto 7“', '"Table 7, nut allergy" · "Heard, table 7"', '«Стол 7, аллергия на орехи» · «Слышу, стол 7»')],
      done: l('Jedan kuvar je preuzeo odgovornost za to jelo.', 'One cook has taken responsibility for that dish.', 'Один повар взял ответственность за это блюдо.'),
      why: l('Kad su svi odgovorni, niko nije. Jedno ime uz jedno jelo (3.12.4).', 'When everyone is responsible, nobody is. One name for one dish (3.12.4).', 'Когда отвечают все, не отвечает никто. Одно имя на одно блюдо (3.12.4).'),
    },
    {
      text: l('Operi ruke, očisti površinu i pripremi to jelo prvo.', 'Wash your hands, clean the surface and make that dish first.', 'Вымой руки, очисти поверхность и приготовь это блюдо первым.'),
      done: l('Jelo je napravljeno na čistom, sa posebnom opremom i svežim sastojcima.', 'The dish is made on a clean surface, with separate kit and fresh ingredients.', 'Блюдо приготовлено на чистом, отдельным инвентарём и из свежих продуктов.'),
      why: l('Prvo jelo na čistoj stanici je najbezbednije. Posle deset tanjira, sve oko tebe je dodirnulo nešto.', 'The first dish on a clean station is the safest. After ten plates, everything around you has touched something.', 'Первое блюдо на чистой станции — самое безопасное. После десяти тарелок всё вокруг чего-то касалось.'),
    },
    {
      text: l('Tanjir označi i nosi posebno, direktno gostu.', 'Mark the plate and carry it separately, straight to the guest.', 'Отметь тарелку и неси отдельно, прямо гостю.'),
      done: l('Tanjir sa oznakom stiže tačno do gosta sa alergijom.', 'The marked plate reaches exactly the guest with the allergy.', 'Отмеченная тарелка доходит именно до гостя с аллергией.'),
      why: l('Dva ista jela na istom poslužavniku lako zamene mesta. Oznaka i posebna ruka to sprečavaju.', 'Two identical dishes on one tray easily swap places. A marker and a separate hand prevent that.', 'Два одинаковых блюда на одном подносе легко перепутать. Отметка и отдельная подача это предотвращают.'),
    },
  ],
  mistake: {
    title: l('„Samo sklonim orahe sa tanjira.“', '"I\'ll just pick the walnuts off the plate."', '«Просто уберу орехи с тарелки».'),
    fix: l(
      'Tragovi ostaju na hrani i tanjiru, a za ozbiljnu alergiju i trag je dovoljan. Jelo se pravi ispočetka, na čistoj stanici, sa čistom opremom.',
      'Traces stay on the food and the plate, and for a serious allergy a trace is enough. The dish is made again from scratch, on a clean station with clean kit.',
      'Следы остаются на еде и тарелке, а при серьёзной аллергии достаточно и следа. Блюдо готовится заново, на чистой станции, чистым инвентарём.',
    ),
  },
  think: {
    question: l('Gde se čuvaju alergeni sastojci kao što su orašasti plodovi?', 'Where are allergen ingredients like nuts stored?', 'Где хранят аллергенные продукты, например орехи?'),
    options: [
      l('Zatvoreni, ispod ostale hrane', 'Sealed, below other food', 'Закрытыми, ниже остальной еды'),
      l('Na gornjoj polici, da se vide', 'On the top shelf, so they are seen', 'На верхней полке, чтобы было видно'),
      l('Svejedno, ako su u kesi', 'Anywhere, if bagged', 'Неважно, если в пакете'),
    ],
    answer: 0,
    explain: l(
      'Sve što pada, pada nadole. Alergen ispod ostale hrane ne može da je kontaminira, čak i ako se kesa pocepa.',
      'Everything that falls, falls down. An allergen below other food cannot contaminate it, even if the bag tears.',
      'Всё, что падает, падает вниз. Аллерген ниже остальной еды не может её загрязнить, даже если пакет порвётся.',
    ),
  },
}

const cleaning: Lesson = {
  id: '3.11.5',
  title: l('Plan čišćenja i inspekcija', 'Cleaning plan and inspection', 'План уборки и проверка'),
  goal: l(
    'Napraviš plan čišćenja sa zadacima, učestalošću i potpisima, i držiš kuhinju spremnom za inspekciju svakog dana.',
    'You draw up a cleaning plan with tasks, frequency and signatures, and keep the kitchen ready for inspection every day.',
    'Ты составляешь план уборки с задачами, частотой и подписями и держишь кухню готовой к проверке каждый день.',
  ),
  minutes: 6,
  key: { value: l('2', '2', '2'), label: l('koraka: čišćenje, pa dezinfekcija', 'steps: clean, then disinfect', 'шага: мойка, затем дезинфекция') },
  need: [
    { item: l('Tabela: šta, koliko često, čime, ko', 'A table: what, how often, with what, who', 'Таблица: что, как часто, чем, кто'), qty: l('1', '1', '1') },
    { item: l('Deterdžent i dezinfekciono sredstvo', 'Detergent and disinfectant', 'Моющее и дезинфицирующее средство'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Fascikla za inspekciju', 'An inspection folder', 'Папка для проверки'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Čista kuhinja nije ona koja se očisti pred inspekciju, nego ona koja se čisti po planu svaki dan. Inspektor to prepozna za pet minuta.',
    'A clean kitchen is not one cleaned before an inspection, but one cleaned to a plan every day. An inspector can tell in five minutes.',
    'Чистая кухня — не та, что убрана перед проверкой, а та, что убирается по плану каждый день. Инспектор это видит за пять минут.',
  ),
  steps: [
    {
      text: l('Napravi tabelu: šta se čisti, koliko često, čime i ko.', 'Make a table: what gets cleaned, how often, with what and by whom.', 'Составь таблицу: что убирается, как часто, чем и кем.'),
      done: l('Svaka površina i uređaj u kuhinji ima svoj red u tabeli.', 'Every surface and appliance in the kitchen has its line in the table.', 'У каждой поверхности и прибора на кухне своя строка в таблице.'),
      why: l('Ono što nije ni u čijem zadatku, ne čisti niko. Najčešće ispod i iza uređaja.', 'What is nobody\'s task gets cleaned by nobody. Usually under and behind the appliances.', 'То, что не входит ни в чью задачу, не убирает никто. Чаще всего под и за оборудованием.'),
    },
    {
      text: l('Čišćenje i dezinfekcija su dva koraka: prvo deterdžent, pa sredstvo.', 'Cleaning and disinfecting are two steps: detergent first, then disinfectant.', 'Мойка и дезинфекция — два шага: сначала моющее, затем дезсредство.'),
      params: [l('vreme delovanja po uputstvu', 'contact time per the label', 'время действия по инструкции')],
      done: l('Površina je prvo vidno čista, a onda dezinfikovana.', 'The surface is first visibly clean, then disinfected.', 'Поверхность сначала видимо чистая, затем продезинфицирована.'),
      why: l('Prljavština štiti bakterije od dezinfekcionog sredstva. Sredstvo na masnoj površini ne radi.', 'Dirt shields bacteria from the disinfectant. Disinfectant on a greasy surface does not work.', 'Грязь защищает бактерии от дезсредства. На жирной поверхности средство не работает.'),
    },
    {
      text: l('Rasporedi zadatke po učestalosti.', 'Spread the tasks by frequency.', 'Распредели задачи по частоте.'),
      params: [l('posle svake upotrebe: daske, noževi', 'after each use: boards, knives', 'после каждого использования: доски, ножи'), l('dnevno: površine, podovi', 'daily: surfaces, floors', 'ежедневно: поверхности, полы'), l('nedeljno: frižideri iznutra', 'weekly: fridge interiors', 'еженедельно: холодильники внутри')],
      done: l('Svaki dan zna šta mora da bude urađeno.', 'Every day knows what must be done.', 'Для каждого дня известно, что нужно сделать.'),
      why: l('Mesečni zadaci, kao filteri aspiratora, se zaborave ako nisu u planu. A masni filter je rizik od požara.', 'Monthly tasks, like extractor filters, get forgotten unless they are in the plan. And a greasy filter is a fire risk.', 'Ежемесячные задачи, вроде фильтров вытяжки, забываются, если их нет в плане. А жирный фильтр — риск пожара.'),
    },
    {
      text: l('Posle svakog zadatka stavi potpis.', 'Sign after every task.', 'После каждой задачи ставь подпись.'),
      done: l('Za svaki zadatak se zna ko ga je uradio i kada.', 'For every task you know who did it and when.', 'Для каждой задачи известно, кто и когда её выполнил.'),
      why: l('Potpis menja „neko će“ u „ja sam“. Ljudi drugačije čiste kad stavljaju svoje ime.', 'A signature turns "someone will" into "I did". People clean differently when they put their name to it.', 'Подпись превращает «кто-нибудь сделает» в «я сделал». Люди убирают иначе, когда ставят своё имя.'),
    },
    {
      text: l('Drži kuhinju spremnom za inspekciju svakog dana.', 'Keep the kitchen ready for inspection every day.', 'Держи кухню готовой к проверке каждый день.'),
      params: [l('liste · etikete · temperature · zaštita od štetočina', 'logs · labels · temperatures · pest control', 'журналы · этикетки · температуры · защита от вредителей')],
      done: l('Fascikla sa planom, listama i ugovorom o zaštiti od štetočina je na mestu i ažurna.', 'The folder with the plan, the logs and the pest control contract is in place and up to date.', 'Папка с планом, журналами и договором о защите от вредителей на месте и актуальна.'),
      why: l('Inspekcija ne najavljuje dolazak. Kuhinja koja je spremna svaki dan ne mora da se sprema nikad.', 'Inspections do not announce themselves. A kitchen that is ready every day never has to get ready.', 'Проверки не объявляют о приходе. Кухня, готовая каждый день, никогда не готовится специально.'),
    },
  ],
  mistake: {
    title: l('Dezinfekciono sredstvo poprskano preko prljave daske.', 'Disinfectant sprayed over a dirty board.', 'Дезсредство распылено на грязную доску.'),
    fix: l(
      'Ostaci hrane štite bakterije i sredstvo ne deluje. Prvo deterdžent i voda dok površina ne bude vidno čista, pa sredstvo, i pusti ga da deluje koliko piše na etiketi.',
      'Food residue shields the bacteria and the disinfectant does nothing. First detergent and water until the surface is visibly clean, then disinfectant, left for the time on the label.',
      'Остатки еды защищают бактерии, и средство не действует. Сначала моющее и вода до видимой чистоты, затем дезсредство, выдержанное столько, сколько указано на этикетке.',
    ),
  },
  think: {
    question: l('Zašto se površina prvo čisti deterdžentom, pa tek onda dezinfikuje?', 'Why is a surface cleaned with detergent before it is disinfected?', 'Почему поверхность сначала моют, а потом дезинфицируют?'),
    options: [
      l('Prljavština štiti bakterije od dezinfekcije', 'Dirt shields bacteria from the disinfectant', 'Грязь защищает бактерии от дезинфекции'),
      l('Da lepše miriše', 'So it smells nicer', 'Чтобы лучше пахло'),
      l('Da se uštedi sredstvo', 'To save disinfectant', 'Чтобы сэкономить средство'),
    ],
    answer: 0,
    explain: l(
      'Dezinfekciono sredstvo mora da dodirne bakteriju. Sloj masti ili hrane mu to ne dozvoljava. Čista površina je uslov da dezinfekcija radi.',
      'Disinfectant has to touch the bacteria. A layer of grease or food stops it. A clean surface is the condition for disinfection to work.',
      'Дезсредство должно коснуться бактерии. Слой жира или еды этого не даёт. Чистая поверхность — условие работы дезинфекции.',
    ),
  },
}

export const haccpLessons: Lesson[] = [principles, coolReheat, logs, allergenKitchen, cleaning]
