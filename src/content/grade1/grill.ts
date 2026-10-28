import { l, type Lesson } from '../types'

// Module 14 · Charcoal and grill pan. Direct heat from below: the cook controls it with zones,
// distance and time, and the meat still gets measured.

const fire: Lesson = {
  id: '14.1',
  title: l('Roštilj: žar i zone vatre', 'Charcoal: embers and heat zones', 'Гриль: жар и зоны огня'),
  goal: l(
    'Naložiš roštilj sa dve zone i proceniš jačinu žara rukom.',
    'You light a two-zone charcoal grill and judge the heat with your hand.',
    'Ты разжигаешь гриль с двумя зонами и оцениваешь жар рукой.',
  ),
  minutes: 7,
  key: { value: l('2', '2', '2'), label: l('zone', 'zones', 'зоны') },
  need: [
    { item: l('Drveni ugalj ili briketi', 'Lump charcoal or briquettes', 'Древесный уголь или брикеты'), qty: l('2 kg', '2 kg', '2 кг') },
    { item: l('Kamin za paljenje (dimnjak)', 'Chimney starter', 'Стартер-труба для розжига'), qty: l('1', '1', '1') },
    { item: l('Novine ili kocke za paljenje', 'Newspaper or firelighters', 'Газета или кубики для розжига'), qty: l('2–3', '2–3', '2–3') },
    { item: l('Četka za rešetku, ubrus, ulje', 'Grate brush, paper towel, oil', 'Щётка для решётки, бумажное полотенце, масло'), qty: l('1', '1', '1') },
    { item: l('Duga hvataljka', 'Long tongs', 'Длинные щипцы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Na roštilju se ne kuva na plamenu, nego na žaru. Ko peče na plamenu, dobije čađ spolja i sirovo iznutra.',
    'You do not cook over flames on a grill but over embers. Cook over flames and you get soot outside and raw meat inside.',
    'На гриле готовят не на пламени, а на углях. Кто жарит на пламени, получает сажу снаружи и сырое внутри.',
  ),
  steps: [
    {
      text: l('Napuni kamin ugljem i zapali papir ispod.', 'Fill the chimney with charcoal and light the paper underneath.', 'Наполни трубу углём и подожги бумагу снизу.'),
      params: [l('bez tečnosti za paljenje', 'no lighter fluid', 'без жидкости для розжига')],
      done: l('Iz vrha kamina izlazi plamen.', 'Flames come out of the top of the chimney.', 'Из верха трубы выходит пламя.'),
      why: l('Tečnost za paljenje ostavlja miris petroleja u mesu. Kamin pali ugalj samo vazduhom.', 'Lighter fluid leaves a petrol taste in the meat. A chimney lights charcoal with nothing but air.', 'Жидкость для розжига оставляет в мясе запах керосина. Труба разжигает уголь одним воздухом.'),
      drawing: 'chimney',
    },
    {
      text: l('Sačekaj da se ugalj prekrije sivim pepelom.', 'Wait until the coals are covered in grey ash.', 'Дождись, пока угли покроются серым пеплом.'),
      params: [l('20–30 min', '20–30 min', '20–30 мин')],
      done: l('Ugalj je beličast spolja i crveno svetli kad duneš.', 'The coals are whitish outside and glow red when you blow on them.', 'Угли белёсые снаружи и светятся красным, если подуть.'),
      why: l('Crn ugalj gori i dimi. Siv ugalj daje stabilnu toplotu sat vremena.', 'Black charcoal flames and smokes. Grey coals give steady heat for an hour.', 'Чёрный уголь горит и дымит. Серые угли дают ровный жар целый час.'),
    },
    {
      text: l('Istresi ugalj na jednu polovinu roštilja.', 'Tip the coals onto one half of the grill.', 'Высыпь угли на одну половину гриля.'),
      params: [l('direktna zona', 'direct zone', 'прямая зона'), l('indirektna zona', 'indirect zone', 'непрямая зона')],
      done: l('Jedna strana je puna žara, druga je prazna.', 'One side is full of embers, the other is empty.', 'Одна сторона полна углей, другая пустая.'),
      why: l('Direktna zona peče koricu, indirektna dopeče sredinu. Ako nešto plane, skloniš ga na praznu stranu.', 'The direct zone sears, the indirect zone finishes the centre. If something flares, move it to the empty side.', 'Прямая зона даёт корочку, непрямая допекает центр. Если что-то вспыхнуло — переложи на пустую сторону.'),
      drawing: 'twoZone',
    },
    {
      text: l('Stavi rešetku, zagrej je, očisti četkom i namaži uljem.', 'Put on the grate, heat it, brush it clean and oil it.', 'Поставь решётку, прогрей, очисти щёткой и смажь маслом.'),
      params: [l('10 min', '10 min', '10 мин'), l('ubrus u hvataljci', 'paper towel in tongs', 'полотенце в щипцах')],
      done: l('Rešetka je čista i sjajna.', 'The grate is clean and shiny.', 'Решётка чистая и блестящая.'),
      why: l('Vruća rešetka se čisti lako, a meso se ne lepi za čist i nauljen metal. Isto kao tiganj u 4.5.', 'A hot grate cleans easily, and meat does not stick to clean, oiled metal. Same as the pan in 4.5.', 'Горячая решётка легко чистится, а мясо не липнет к чистому смазанному металлу. Как сковорода в 4.5.'),
    },
    {
      text: l('Proveri žar rukom, 10 cm iznad rešetke.', 'Test the heat with your hand, 10 cm above the grate.', 'Проверь жар рукой в 10 см над решёткой.'),
      params: [l('2 s = jako', '2 s = high', '2 с = сильный'), l('4–5 s = srednje', '4–5 s = medium', '4–5 с = средний'), l('7–8 s = tiho', '7–8 s = low', '7–8 с = слабый')],
      done: l('Znaš koliko sekundi izdržiš iznad svake zone.', 'You know how many seconds you can hold over each zone.', 'Ты знаешь, сколько секунд выдерживаешь над каждой зоной.'),
      why: l('Roštilj nema dugme. Ruka je tvoj termometar za vatru.', 'A grill has no dial. Your hand is the thermometer for the fire.', 'У гриля нет ручки. Рука — твой термометр для огня.'),
      drawing: 'handTest',
    },
  ],
  mistake: {
    title: l('Meso na roštilj čim ugalj počne da gori.', 'Meat on the grill as soon as the coals catch.', 'Мясо на гриль, как только загорелся уголь.'),
    fix: l(
      'Plamen čađavi meso spolja, a vatra nije stabilna. Strpljenje: tek kad je ugalj siv i bez plamena. U međuvremenu spremi mise en place (1.2).',
      'The flames soot the meat and the heat is unstable. Patience: only once the coals are grey and flameless. Meanwhile set up your mise en place (1.2).',
      'Пламя покрывает мясо сажей, жар нестабилен. Терпение: только когда угли серые и без пламени. А пока подготовь мизанплас (1.2).',
    ),
  },
  think: {
    question: l('Mast sa mesa je kapnula i planula. Šta radiš?', 'Fat dripped from the meat and flared up. What do you do?', 'Жир с мяса капнул и вспыхнул. Что делаешь?'),
    options: [
      l('Skloniš meso u indirektnu zonu dok plamen ne padne', 'Move the meat to the indirect zone until the flare dies', 'Перекладываешь мясо в непрямую зону, пока пламя не спадёт'),
      l('Poliješ žar vodom', 'Pour water on the coals', 'Заливаешь угли водой'),
      l('Pustiš, plamen daje ukus', 'Leave it, flames add flavour', 'Оставляешь — пламя даёт вкус'),
    ],
    answer: 0,
    explain: l(
      'Zato postoje dve zone. Voda diže pepeo na meso i gasi žar koji ti treba. Plamen od masti daje gorku čađ, ne ukus.',
      'That is why there are two zones. Water throws ash onto the meat and kills the embers you need. Fat flames give bitter soot, not flavour.',
      'Для этого и нужны две зоны. Вода поднимает пепел на мясо и гасит нужный жар. Пламя от жира даёт горькую сажу, а не вкус.',
    ),
  },
}

const grillPan: Lesson = {
  id: '14.2',
  title: l('Grill tiganj u stanu', 'Grill pan indoors', 'Сковорода-гриль дома'),
  goal: l(
    'Ispečeš šniclu na grill tiganju sa jasnim rešetkastim tragovima, bez dima u celom stanu.',
    'You cook a steak on a grill pan with clean crosshatch marks, without smoking out the flat.',
    'Ты жаришь стейк на сковороде-гриль с чёткой решёткой, не задымив всю квартиру.',
  ),
  minutes: 6,
  key: { value: l('5 min', '5 min', '5 мин'), label: l('zagrevanje', 'preheat', 'прогрев') },
  need: [
    { item: l('Liveni grill tiganj', 'Cast-iron grill pan', 'Чугунная сковорода-гриль'), qty: l('1', '1', '1') },
    { item: l('Svinjski vrat ili juneći biftek, 2 cm', 'Pork neck or beef steak, 2 cm', 'Свиная шея или говяжий стейк, 2 см'), qty: l('2 kom', '2', '2 шт') },
    { item: l('Ulje visoke tačke dimljenja', 'High smoke-point oil', 'Масло с высокой точкой дымления'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('So, termometar', 'Salt, thermometer', 'Соль, термометр'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Grill tiganj daje tragove i ukus roštilja bez dvorišta. Ali rebra tiganja dodiruju meso samo u linijama, pa tiganj mora da bude vreliji nego običan.',
    'A grill pan gives the marks and taste of a grill without a garden. But its ridges touch the meat only in lines, so the pan must be hotter than a flat one.',
    'Сковорода-гриль даёт полоски и вкус гриля без двора. Но рёбра касаются мяса только линиями, поэтому она должна быть горячее обычной.',
  ),
  steps: [
    {
      text: l('Uključi aspirator i otvori prozor.', 'Turn on the extractor fan and open a window.', 'Включи вытяжку и открой окно.'),
      done: l('Vazduh struji iznad šporeta.', 'Air is moving over the stove.', 'Над плитой движется воздух.'),
      why: l('Pečenje na rebrima uvek dimi malo. Bez promaje, alarm za dim radi umesto tebe.', 'Grilling on ridges always smokes a little. Without a draught, the smoke alarm does the talking.', 'Жарка на рёбрах всегда немного дымит. Без сквозняка заговорит пожарная сигнализация.'),
    },
    {
      text: l('Zagrej suv tiganj na srednje jakoj vatri.', 'Heat the dry pan over medium-high heat.', 'Разогрей сухую сковороду на огне выше среднего.'),
      params: [l('5 min', '5 min', '5 мин'), l('bez ulja', 'no oil', 'без масла')],
      done: l('Kap vode na rebrima odskače i nestane za sekund.', 'A drop of water skitters on the ridges and vanishes in a second.', 'Капля воды прыгает по рёбрам и исчезает за секунду.'),
      why: l('Liveno gvožđe se greje sporo, ali drži toplotu. Ulje u praznom tiganju bi gorelo 5 minuta.', 'Cast iron heats slowly but holds the heat. Oil in an empty pan would burn for 5 minutes.', 'Чугун греется медленно, но держит тепло. Масло на пустой сковороде горело бы 5 минут.'),
      drawing: 'waterDrop',
    },
    {
      text: l('Naulji meso, ne tiganj, i posoli ga.', 'Oil the meat, not the pan, and salt it.', 'Смажь маслом мясо, а не сковороду, и посоли.'),
      params: [l('tanak sloj', 'a thin film', 'тонкий слой')],
      done: l('Meso sija, a na dasci nema bare od ulja.', 'The meat shines with no pool of oil on the board.', 'Мясо блестит, на доске нет лужи масла.'),
      why: l('Ulje u žlebovima tiganja gori i dimi. Na mesu ide tačno tamo gde treba.', 'Oil in the pan\'s grooves burns and smokes. On the meat it goes exactly where it is needed.', 'Масло в желобках сковороды горит и дымит. На мясе оно ровно там, где нужно.'),
      drawing: 'patDry',
    },
    {
      text: l('Stavi meso pod uglom i ne diraj, pa okreni za 45°.', 'Lay the meat at an angle and leave it, then turn it 45°.', 'Положи мясо под углом и не трогай, потом поверни на 45°.'),
      params: [l('2 min', '2 min', '2 мин'), l('okret 45°', 'turn 45°', 'поворот 45°'), l('još 2 min', '2 min more', 'ещё 2 мин')],
      done: l('Donja strana ima tamne kocke od tragova.', 'The underside has a dark diamond pattern.', 'Нижняя сторона в тёмных ромбах.'),
      why: l('Meso se samo odlepi kad se korica napravi (4.6). Ako se drži, nije spremno.', 'The meat releases by itself once the crust has formed (4.6). If it sticks, it is not ready.', 'Мясо само отходит, когда образовалась корочка (4.6). Если липнет — не готово.'),
      drawing: 'grillMarks',
    },
    {
      text: l('Okreni i peci do ciljne temperature, pa odmori.', 'Flip and cook to the target temperature, then rest.', 'Переверни, доведи до нужной температуры и дай отдохнуть.'),
      params: [l('svinjetina: skini na 60°C', 'pork: off at 60°C', 'свинина: снять при 60°C'), l('junetina: 52–54°C', 'beef: 52–54°C', 'говядина: 52–54°C'), l('5 min odmor', '5 min rest', '5 мин отдыха')],
      done: l('Posle odmaranja termometar pokazuje cilj iz 7.5.', 'After resting the thermometer shows the target from 7.5.', 'После отдыха термометр показывает цель из 7.5.'),
      drawing: 'probeCenter',
    },
  ],
  mistake: {
    title: l('Pomeranje mesa svakih 30 sekundi.', 'Moving the meat every 30 seconds.', 'Двигать мясо каждые 30 секунд.'),
    fix: l(
      'Svako pomeranje razmaže tragove i ohladi tiganj. Meso spusti jednom i ne diraj ga 2 minuta. Rešetka se crta mirnom rukom.',
      'Every move smears the marks and cools the pan. Lay the meat down once and leave it for 2 minutes. Crosshatch is drawn with a still hand.',
      'Каждое движение размазывает полоски и охлаждает сковороду. Положи мясо один раз и не трогай 2 минуты. Решётку рисует неподвижная рука.',
    ),
  },
  think: {
    question: l('Zašto tiganj ostaje suv, a ulje ide na meso?', 'Why does the pan stay dry while the oil goes on the meat?', 'Почему сковорода сухая, а масло — на мясе?'),
    options: [
      l('Ulje u žlebovima gori i dimi, a meso ga ne dodiruje', 'Oil in the grooves burns and smokes, and the meat never touches it', 'Масло в желобках горит и дымит, а мясо его не касается'),
      l('Meso tako upije više ulja', 'The meat absorbs more oil that way', 'Мясо так впитывает больше масла'),
      l('Tiganj se tako brže ohladi', 'The pan cools faster that way', 'Сковорода так быстрее остывает'),
    ],
    answer: 0,
    explain: l(
      'Meso dodiruje samo vrhove rebara. Ulje koje se slije u žlebove ne radi ništa osim dima.',
      'The meat touches only the tops of the ridges. Oil that runs into the grooves does nothing but smoke.',
      'Мясо касается только верхушек рёбер. Масло, стёкшее в желобки, только дымит.',
    ),
  },
}

const minced: Lesson = {
  id: '14.3',
  title: l('Pljeskavica i ćevapi', 'Pljeskavica and ćevapi', 'Плескавица и чевапи'),
  goal: l(
    'Napraviš sočne ćevape i pljeskavicu koji se ne raspadaju na roštilju.',
    'You make juicy ćevapi and pljeskavica that do not fall apart on the grill.',
    'Ты готовишь сочные чевапи и плескавицу, которые не разваливаются на гриле.',
  ),
  minutes: 8,
  key: { value: l('71°C', '71°C', '71°C'), label: l('u sredini', 'at the centre', 'в центре') },
  need: [
    { item: l('Mleveno: junetina i svinjetina, 20–25% masti', 'Mince: beef and pork, 20–25% fat', 'Фарш: говядина и свинина, 20–25% жира'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('So', 'Salt', 'Соль'), qty: l('15 g', '15 g', '15 г') },
    { item: l('Mleveni biber, beli luk', 'Ground pepper, garlic', 'Молотый перец, чеснок'), qty: l('2 g + 2 čena', '2 g + 2 cloves', '2 г + 2 зубчика') },
    { item: l('Hladna gazirana voda', 'Cold sparkling water', 'Холодная газированная вода'), qty: l('80 ml', '80 ml', '80 мл') },
    { item: l('Crni luk za služenje', 'Onion to serve', 'Лук к подаче'), qty: l('1 kom', '1', '1 шт') },
  ],
  why: l(
    'Ćevap nije kobasica bez creva. Sočan je zbog masti i vode, a drži se zbog soli i mešenja. Sve četiri stvari moraju da budu tu.',
    'A ćevap is not a sausage without a casing. It is juicy thanks to fat and water, and holds together thanks to salt and kneading. All four must be there.',
    'Чевап — не колбаса без оболочки. Он сочный благодаря жиру и воде, а держит форму благодаря соли и вымешиванию. Нужны все четыре.',
  ),
  steps: [
    {
      text: l('Meso, so, biber i beli luk mesi rukama, dodajući vodu.', 'Knead the meat, salt, pepper and garlic by hand, adding the water.', 'Вымешивай руками мясо, соль, перец и чеснок, добавляя воду.'),
      params: [l('5 min', '5 min', '5 мин'), l('so 1.5%', 'salt 1.5%', 'соль 1,5%')],
      done: l('Smesa je lepljiva i rasteže se u niti kad je razvučeš.', 'The mixture is sticky and stretches into threads when pulled.', 'Масса липкая и тянется нитями, если её растянуть.'),
      why: l('So izvlači protein iz mesa koji posle mešenja postane lepak. Bez toga se ćevap mrvi.', 'Salt draws out protein that turns into glue with kneading. Without it the ćevap crumbles.', 'Соль вытягивает белок, который после вымешивания становится клеем. Без этого чевап крошится.'),
      drawing: 'kneadMince',
    },
    {
      text: l('Pokrij smesu i ostavi preko noći u frižideru.', 'Cover the mixture and leave it overnight in the fridge.', 'Накрой массу и оставь на ночь в холодильнике.'),
      params: [l('12 h', '12 h', '12 ч'), l('0–4°C', '0–4°C', '0–4°C')],
      done: l('Smesa je čvrsta i ne lepi se za mokre ruke.', 'The mixture is firm and does not stick to wet hands.', 'Масса плотная и не липнет к мокрым рукам.'),
      why: l('So za noć poveže meso i začini ga do kraja. Ćevapi se prave dan unapred.', 'Overnight the salt binds the meat and seasons it through. Ćevapi are made a day ahead.', 'За ночь соль связывает мясо и просаливает насквозь. Чевапи делают за день.'),
    },
    {
      text: l('Mokrim rukama oblikuj ćevape i pljeskavice.', 'With wet hands, shape the ćevapi and pljeskavice.', 'Мокрыми руками сформируй чевапи и плескавицы.'),
      params: [l('ćevap 25 g, 8 cm', 'ćevap 25 g, 8 cm', 'чевап 25 г, 8 см'), l('pljeskavica 150 g, 1.5 cm', 'pljeskavica 150 g, 1.5 cm', 'плескавица 150 г, 1,5 см')],
      done: l('Svi komadi su iste veličine, a pljeskavica ima udubljenje u sredini.', 'All pieces are the same size and each pljeskavica has a dimple in the middle.', 'Все куски одного размера, у плескавицы ямка в центре.'),
      why: l('Pljeskavica se na vatri skuplja i nadima u sredini. Udubljenje je ostavlja ravnom.', 'A patty shrinks and domes in the middle over heat. The dimple keeps it flat.', 'Плескавица на огне сжимается и вздувается в центре. Ямка оставляет её плоской.'),
      drawing: 'pattyDimple',
    },
    {
      text: l('Peci na direktnoj zoni, okreći jednom.', 'Grill over the direct zone, turning once.', 'Жарь над прямой зоной, переворачивая один раз.'),
      params: [l('jak žar', 'high heat', 'сильный жар'), l('ćevapi 3+3 min', 'ćevapi 3+3 min', 'чевапи 3+3 мин'), l('pljeskavica 4+4 min', 'pljeskavica 4+4 min', 'плескавица 4+4 мин')],
      done: l('Obe strane imaju tamnu koricu sa tragovima rešetke.', 'Both sides have a dark crust with grate marks.', 'С обеих сторон тёмная корочка с полосками.'),
      why: l('Ne pritiskaj lopaticom. Pritisak istera sok na žar, a meso ostane suvo.', 'Do not press with a spatula. Pressing squeezes the juice onto the coals and leaves the meat dry.', 'Не дави лопаткой. Давление выжимает сок на угли, и мясо сохнет.'),
      drawing: 'twoZone',
    },
    {
      text: l('Izmeri sredinu najdebljeg komada.', 'Measure the centre of the thickest piece.', 'Измерь центр самого толстого куска.'),
      params: [l('71°C', '71°C', '71°C')],
      done: l('Termometar pokazuje 71°C, a sok je bistar.', 'The probe reads 71°C and the juices run clear.', 'Термометр показывает 71°C, сок прозрачный.'),
      why: l('Mleveno meso ima bakterije i u sredini, ne samo spolja. Zato se uvek peče do kraja, za razliku od bifteka.', 'Mince carries bacteria in the middle, not just on the surface. That is why it is always cooked through, unlike steak.', 'В фарше бактерии есть и в центре, а не только снаружи. Поэтому его всегда прожаривают, в отличие от стейка.'),
      drawing: 'probeCenter',
    },
  ],
  mistake: {
    title: l('Posno meso za ćevape "da bude zdravije".', 'Lean meat for ćevapi "to be healthier".', 'Постный фарш для чевапи, «чтобы полезнее».'),
    fix: l(
      'Bez 20% masti ćevap je suv i mrvi se. Ako pratiš makroe, pojedi 4 ćevapa umesto 10, ali od pravog mesa. MacroChef broji porciju, ne posno meso.',
      'Without 20% fat a ćevap is dry and crumbly. If you track macros, eat 4 ćevapi instead of 10, made of proper meat. MacroChef counts the portion, not lean mince.',
      'Без 20% жира чевап сухой и крошится. Если считаешь макросы, съешь 4 чевапа вместо 10, но из нормального мяса. MacroChef считает порцию, а не постный фарш.',
    ),
  },
  think: {
    question: l('Zašto biftek može da bude roze u sredini, a pljeskavica ne?', 'Why can a steak be pink inside but a pljeskavica cannot?', 'Почему стейк может быть розовым внутри, а плескавица — нет?'),
    options: [
      l('Mlevenjem površina mesa završi i u sredini', 'Mincing puts the meat\'s surface into the middle too', 'При измельчении поверхность мяса попадает и в середину'),
      l('Pljeskavica je od svinjetine', 'Pljeskavica is made from pork', 'Плескавица из свинины'),
      l('Biftek je skuplji', 'Steak is more expensive', 'Стейк дороже'),
    ],
    answer: 0,
    explain: l(
      'Bakterije žive na površini. Kod bifteka korica ih uništi, a sredina je čista. Mlevenjem se spoljni deo izmeša sa unutrašnjim, pa sredina mora do 71°C.',
      'Bacteria live on the surface. On a steak the crust kills them and the centre is clean. Mincing mixes outside into inside, so the centre must reach 71°C.',
      'Бактерии живут на поверхности. У стейка корочка их убивает, а центр чистый. При измельчении внешнее смешивается с внутренним, и центр должен дойти до 71°C.',
    ),
  },
  recipe: { name: l('Ćevapi', 'Ćevapi', 'Чевапи'), protein: 18, carbs: 0.5, fat: 20, kcal: 255 },
}

const marinades: Lesson = {
  id: '14.4',
  title: l('Marinade i ražnjići', 'Marinades and skewers', 'Маринады и шашлычки'),
  goal: l(
    'Mariniraš meso pravo vreme i ispečeš ražnjiće koji su gotovi ravnomerno.',
    'You marinate meat for the right time and grill skewers that cook evenly.',
    'Ты маринуешь мясо нужное время и жаришь шашлычки, которые пропекаются равномерно.',
  ),
  minutes: 7,
  key: { value: l('3 cm', '3 cm', '3 см'), label: l('kocke', 'cubes', 'кубики') },
  need: [
    { item: l('Pileći bataci bez kosti', 'Boneless chicken thighs', 'Куриные бёдра без кости'), qty: l('800 g', '800 g', '800 г') },
    { item: l('Grčki jogurt', 'Greek yoghurt', 'Греческий йогурт'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Limun, beli luk, aleva paprika, kim', 'Lemon, garlic, paprika, cumin', 'Лимон, чеснок, паприка, зира'), qty: l('½ + 3 čena + 1 kašičica', '½ + 3 cloves + 1 tsp', '½ + 3 зубчика + 1 ч. л.') },
    { item: l('So, ulje', 'Salt, oil', 'Соль, масло'), qty: l('10 g + 2 kašike', '10 g + 2 tbsp', '10 г + 2 ст. л.') },
    { item: l('Drveni štapići, crveni luk, paprika', 'Wooden skewers, red onion, pepper', 'Деревянные шпажки, красный лук, перец'), qty: l('8', '8', '8') },
  ],
  why: l(
    'Marinada daje ukus površini, a so ide dublje. Kiselina meso ne omekšava, nego ga posle par sati pretvori u kašu spolja.',
    'A marinade flavours the surface while the salt goes deeper. Acid does not tenderise meat; after a few hours it turns the outside mushy.',
    'Маринад даёт вкус поверхности, а соль проникает глубже. Кислота не размягчает мясо, а через несколько часов превращает его снаружи в кашу.',
  ),
  steps: [
    {
      text: l('Iseci meso na kocke iste veličine.', 'Cut the meat into even cubes.', 'Нарежь мясо одинаковыми кубиками.'),
      params: [l('3 cm', '3 cm', '3 см')],
      done: l('Sve kocke su iste, bez tankih repova.', 'All the cubes match, no thin tails.', 'Все кубики одинаковые, без тонких хвостиков.'),
      why: l('Na štapiću su svi komadi na istoj vatri isto vreme. Ista veličina, isto pečenje, kao u 7.3.', 'On a skewer every piece gets the same fire for the same time. Same size, same cooking, as in 7.3.', 'На шпажке все куски на одном огне одно время. Одинаковый размер — одинаковая прожарка, как в 7.3.'),
    },
    {
      text: l('Umešaj marinadu i obloži meso.', 'Mix the marinade and coat the meat.', 'Смешай маринад и обмажь мясо.'),
      params: [l('ulje + kiselina + začini + so', 'oil + acid + spices + salt', 'масло + кислота + специи + соль')],
      done: l('Svaka kocka je pokrivena tankim slojem.', 'Every cube has a thin coating.', 'Каждый кубик покрыт тонким слоем.'),
      why: l('Jogurt je blaga kiselina i nosi začine. Ulje rastvara ukuse paprike i kima.', 'Yoghurt is a gentle acid that carries the spices. Oil dissolves the flavours of paprika and cumin.', 'Йогурт — мягкая кислота и носитель специй. Масло растворяет вкус паприки и зиры.'),
    },
    {
      text: l('Mariniraj u frižideru, ne duže od preporučenog.', 'Marinate in the fridge, no longer than recommended.', 'Маринуй в холодильнике, не дольше рекомендованного.'),
      params: [l('piletina 2–12 h', 'chicken 2–12 h', 'курица 2–12 ч'), l('svinjetina 4–12 h', 'pork 4–12 h', 'свинина 4–12 ч'), l('riba 15–30 min', 'fish 15–30 min', 'рыба 15–30 мин')],
      done: l('Meso je čvrsto, a ne mekano i kašasto spolja.', 'The meat is firm, not soft and mushy outside.', 'Мясо упругое, а не мягкое и кашеобразное снаружи.'),
      why: l('Riba je nežna i kiselina je "skuva" za sat vremena, kao u sevićeu.', 'Fish is delicate and acid "cooks" it within an hour, as in ceviche.', 'Рыба нежная, и кислота «варит» её за час, как в севиче.'),
    },
    {
      text: l('Nabodi meso i povrće naizmenično, sa malim razmakom.', 'Thread meat and vegetables alternately, with small gaps.', 'Нанизывай мясо и овощи по очереди, с небольшими промежутками.'),
      params: [l('štapići potopljeni 30 min', 'skewers soaked 30 min', 'шпажки замочены 30 мин'), l('razmak 2–3 mm', '2–3 mm gaps', 'промежутки 2–3 мм')],
      done: l('Komadi se ne dodiruju čvrsto, a štapić je pun.', 'The pieces do not press tight against each other and the skewer is full.', 'Куски не прижаты плотно, шпажка заполнена.'),
      why: l('Zbijeni komadi se peku samo spolja. Mokar štapić ne gori.', 'Packed pieces only cook on the outside. A wet skewer does not burn.', 'Плотно прижатые куски пропекаются только снаружи. Мокрая шпажка не горит.'),
      drawing: 'skewers',
    },
    {
      text: l('Obriši višak marinade i peci, okrećući na 2–3 min.', 'Wipe off excess marinade and grill, turning every 2–3 min.', 'Сними лишний маринад и жарь, переворачивая каждые 2–3 мин.'),
      params: [l('srednji žar', 'medium heat', 'средний жар'), l('10–12 min', '10–12 min', '10–12 мин'), l('74°C', '74°C', '74°C')],
      done: l('Sve strane su zapečene, a sredina najveće kocke ima 74°C.', 'All sides are charred and the centre of the biggest cube reads 74°C.', 'Все стороны поджарены, в центре самого крупного кубика 74°C.'),
      why: l('Višak ulja kaplje i pravi plamen (14.1). Jogurt gori brzo, zato srednji, ne jak žar.', 'Excess oil drips and flares (14.1). Yoghurt burns fast, so medium, not high heat.', 'Лишнее масло капает и вспыхивает (14.1). Йогурт быстро горит, поэтому средний, а не сильный жар.'),
      drawing: 'probeCenter',
    },
  ],
  mistake: {
    title: l('Meso u limunu preko noći "da omekša".', 'Meat in lemon juice overnight "to tenderise it".', 'Мясо в лимоне на ночь, «чтобы размягчилось».'),
    fix: l(
      'Kiselina ne ulazi duboko. Spolja meso postane brašnjavo i sivo, a unutra je isto. Mekoća dolazi od pravog komada i temperature, a marinada daje ukus.',
      'Acid does not go deep. Outside, the meat turns mealy and grey; inside it is unchanged. Tenderness comes from the right cut and the right temperature; the marinade gives flavour.',
      'Кислота не проникает глубоко. Снаружи мясо становится мучнистым и серым, а внутри не меняется. Мягкость — от правильного куска и температуры, маринад даёт вкус.',
    ),
  },
  think: {
    question: l('Na istom štapiću su piletina i tikvica. Šta će se desiti?', 'Chicken and courgette share a skewer. What will happen?', 'На одной шпажке курица и кабачок. Что произойдёт?'),
    options: [
      l('Tikvica se raspadne dok piletina stigne do 74°C', 'The courgette collapses before the chicken reaches 74°C', 'Кабачок развалится, пока курица дойдёт до 74°C'),
      l('Oba budu gotova u isto vreme', 'Both will be done at the same time', 'Оба будут готовы одновременно'),
      l('Piletina se presuši', 'The chicken dries out', 'Курица пересохнет'),
    ],
    answer: 0,
    explain: l(
      'Isto pravilo kao povrće u 13.4: tvrdo i meko ne idu zajedno. Mekano povrće stavi na poseban štapić i peci ga kraće.',
      'The same rule as the vegetables in 13.4: hard and soft do not go together. Put soft vegetables on their own skewer and grill them for less time.',
      'То же правило, что с овощами в 13.4: твёрдое и мягкое не сочетаются. Мягкие овощи — на отдельную шпажку и жарь меньше.',
    ),
  },
  recipe: { name: l('Pileći ražnjići u jogurtu', 'Yoghurt chicken skewers', 'Куриные шашлычки в йогурте'), protein: 22, carbs: 3, fat: 8, kcal: 170 },
}

const grillVeg: Lesson = {
  id: '14.5',
  title: l('Povrće na roštilju', 'Grilled vegetables', 'Овощи на гриле'),
  goal: l(
    'Ispečeš papriku da se ljušti u jednom komadu i tikvicu i plavi patlidžan da su mekani, a ne mokri.',
    'You grill peppers so the skin peels in one piece, and courgette and aubergine so they are tender, not soggy.',
    'Ты запекаешь перец так, что кожица снимается целиком, а кабачок и баклажан — мягкие, а не мокрые.',
  ),
  minutes: 6,
  key: { value: l('1 cm', '1 cm', '1 см'), label: l('šnite', 'slices', 'ломти') },
  need: [
    { item: l('Paprika babura ili roga', 'Bell or long peppers', 'Сладкий перец'), qty: l('6 kom', '6', '6 шт') },
    { item: l('Tikvica i plavi patlidžan', 'Courgette and aubergine', 'Кабачок и баклажан'), qty: l('po 1', '1 each', 'по 1') },
    { item: l('Maslinovo ulje, so', 'Olive oil, salt', 'Оливковое масло, соль'), qty: l('—', '—', '—') },
    { item: l('Sirće, beli luk, peršun', 'Vinegar, garlic, parsley', 'Уксус, чеснок, петрушка'), qty: l('2 kašike + 2 čena + vezica', '2 tbsp + 2 cloves + a bunch', '2 ст. л. + 2 зубчика + пучок') },
    { item: l('Činija sa poklopcem ili kesa', 'Bowl with a lid, or a bag', 'Миска с крышкой или пакет'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Pečena paprika je osnova pola naše zimnice i meze. A tikvica sa roštilja je savršen prilog uz sve iz ovog modula.',
    'Roast peppers are the base of half our preserves and meze. And grilled courgette is the perfect side to everything in this module.',
    'Печёный перец — основа половины наших заготовок и закусок. А кабачок с гриля — идеальный гарнир ко всему в этом модуле.',
  ),
  steps: [
    {
      text: l('Celu papriku peci direktno na žaru, okrećući.', 'Grill whole peppers directly over the coals, turning.', 'Пеки целый перец прямо над углями, переворачивая.'),
      params: [l('jak žar', 'high heat', 'сильный жар'), l('10–12 min', '10–12 min', '10–12 мин')],
      done: l('Koža je crna i napuhana sa svih strana.', 'The skin is black and blistered all over.', 'Кожица чёрная и вздутая со всех сторон.'),
      why: l('Ovde je crno dobro: gori samo koža, koja se baca. Meso ispod se peče u sopstvenoj pari.', 'Here black is good: only the skin burns, and it gets thrown away. The flesh underneath steams in its own juice.', 'Здесь чёрное — хорошо: горит только кожица, которую выбрасывают. Мякоть под ней томится в собственном пару.'),
      drawing: 'blisterPepper',
    },
    {
      text: l('Vruće paprike zatvori u činiju ili kesu.', 'Seal the hot peppers in a bowl or bag.', 'Закрой горячий перец в миске или пакете.'),
      params: [l('10 min', '10 min', '10 мин')],
      done: l('Paprike su omekšale, a koža se nabrala.', 'The peppers have softened and the skin has wrinkled.', 'Перец размяк, кожица сморщилась.'),
      why: l('Para odvoji kožu od mesa. Bez ovog koraka ljuštiš je noktima komad po komad.', 'The steam lifts the skin off the flesh. Skip this and you peel it bit by bit with your nails.', 'Пар отделяет кожицу от мякоти. Без этого шага снимаешь её ногтями по кусочку.'),
    },
    {
      text: l('Oljušti paprike prstima, bez pranja pod vodom.', 'Peel the peppers with your fingers, without rinsing.', 'Очисти перец пальцами, не промывая под водой.'),
      done: l('Koža je skinuta, a meso je celo i sjajno.', 'The skin is off and the flesh is whole and glossy.', 'Кожица снята, мякоть целая и блестящая.'),
      why: l('Voda spere dimni ukus i sok. Crne mrvice obriši ubrusom.', 'Water rinses away the smoky flavour and juice. Wipe off black flecks with a paper towel.', 'Вода смывает копчёный вкус и сок. Чёрные крошки сотри бумажным полотенцем.'),
      drawing: 'peelPepper',
    },
    {
      text: l('Tikvicu i patlidžan iseci po dužini i premaži uljem.', 'Slice the courgette and aubergine lengthwise and brush with oil.', 'Нарежь кабачок и баклажан вдоль и смажь маслом.'),
      params: [l('1 cm', '1 cm', '1 см'), l('so tek posle', 'salt only after', 'соль только потом')],
      done: l('Šnite su iste debljine i tanko nauljene.', 'The slices are even and lightly oiled.', 'Ломти одинаковые и слегка смазаны.'),
      why: l('So pre pečenja izvuče vodu i povrće se kuva umesto da se peče.', 'Salt before grilling draws out water and the vegetables steam instead of grilling.', 'Соль до жарки вытягивает воду, и овощи тушатся вместо того, чтобы жариться.'),
    },
    {
      text: l('Peci na srednjem žaru, pa preli preliv dok su tople.', 'Grill over medium heat, then dress them while warm.', 'Жарь на среднем жаре и полей заправкой, пока тёплые.'),
      params: [l('3–4 min po strani', '3–4 min per side', '3–4 мин на сторону'), l('ulje + sirće + beli luk', 'oil + vinegar + garlic', 'масло + уксус + чеснок')],
      done: l('Povrće je mekano do sredine, sa tamnim tragovima.', 'The vegetables are tender through, with dark marks.', 'Овощи мягкие насквозь, с тёмными полосками.'),
      why: l('Toplo povrće upija preliv kao sunđer. Dresinzi iz 3.3 rade isto i ovde.', 'Warm vegetables soak up dressing like a sponge. The dressings from 3.3 work here too.', 'Тёплые овощи впитывают заправку, как губка. Заправки из 3.3 работают и здесь.'),
    },
  ],
  mistake: {
    title: l('Patlidžan izvađen dok je još beo i gumen.', 'Aubergine taken off while still white and spongy.', 'Баклажан сняли, пока он белый и резиновый.'),
    fix: l(
      'Patlidžan mora da se ispeče do kraja, inače je gorak i gumen. Proveri vrhom noža: mora da uđe kao u puter, a meso da bude providno.',
      'Aubergine must be cooked through or it is bitter and rubbery. Test with the tip of a knife: it must slide in like butter and the flesh should be translucent.',
      'Баклажан нужно допечь, иначе он горький и резиновый. Проверь кончиком ножа: должен входить, как в масло, мякоть — прозрачная.',
    ),
  },
  think: {
    question: l('Zašto se paprika peče do crnog, a tikvica ne?', 'Why are peppers charred black but courgettes not?', 'Почему перец пекут до черноты, а кабачок — нет?'),
    options: [
      l('Paprika se ljušti, a tikvica se jede sa korom', 'Peppers are peeled, courgettes are eaten with their skin', 'Перец очищают, а кабачок едят с кожурой'),
      l('Paprika je tvrđa', 'Peppers are harder', 'Перец твёрже'),
      l('Tikvica ima više vode', 'Courgettes have more water', 'В кабачке больше воды'),
    ],
    answer: 0,
    explain: l(
      'Koža paprike je zaštita koja se baca, pa sme da izgori. Kora tikvice je deo zalogaja i crna bi bila gorka.',
      'The pepper skin is a shield that gets thrown away, so it may burn. The courgette skin is part of the bite, and black would be bitter.',
      'Кожица перца — защита, которую выбрасывают, ей можно сгореть. Кожура кабачка — часть куска, и чёрная будет горчить.',
    ),
  },
}

export const grillLessons: Lesson[] = [fire, grillPan, minced, marinades, grillVeg]
