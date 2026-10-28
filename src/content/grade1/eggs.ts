import { l, type Lesson } from '../types'

// Module 6 · Eggs and vegetables. Eggs are the cheapest way to practise heat control: proteins set
// at known temperatures, and every mistake shows on the plate within a minute.

const boiled: Lesson = {
  id: '6.1',
  title: l('Kuvana jaja', 'Boiled eggs', 'Варёные яйца'),
  goal: l(
    'Skuvaš jaje tačno onako kako hoćeš: tečno, kremasto ili tvrdo žumance.',
    'You boil an egg exactly how you want it: runny, jammy or hard yolk.',
    'Ты варишь яйцо именно так, как хочешь: жидкий, кремовый или твёрдый желток.',
  ),
  minutes: 6,
  key: { value: l('6 · 7 · 10 min', '6 · 7 · 10 min', '6 · 7 · 10 мин'), label: l('žumance', 'yolk', 'желток') },
  need: [
    { item: l('Jaja iz frižidera, veličina M–L', 'Eggs from the fridge, size M–L', 'Яйца из холодильника, размер M–L'), qty: l('3', '3', '3') },
    { item: l('Šerpa', 'Saucepan', 'Сотейник'), qty: l('2 l', '2 l', '2 л') },
    { item: l('Činija vode sa ledom', 'Bowl of ice water', 'Миска воды со льдом'), qty: l('1', '1', '1') },
    { item: l('Tajmer', 'Timer', 'Таймер'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kad jaje ide u vodu koja već ključa, vreme je uvek isto. To je jedini način da ponoviš isto jaje svaki dan.',
    'When the egg goes into water that is already boiling, the timing is always the same. It is the only way to repeat the same egg every day.',
    'Когда яйцо опускают в уже кипящую воду, время всегда одинаковое. Только так можно каждый день повторять одно и то же яйцо.',
  ),
  steps: [
    {
      text: l('Proključaj vodu, toliko da prekrije jaja.', 'Bring water to the boil, enough to cover the eggs.', 'Доведи до кипения воду, чтобы она покрывала яйца.'),
      params: [l('2 cm iznad jaja', '2 cm above the eggs', 'на 2 см выше яиц')],
      done: l('Voda burno ključa.', 'The water is at a rolling boil.', 'Вода бурно кипит.'),
    },
    {
      text: l('Spusti jaja kašikom i smanji na krčkanje.', 'Lower the eggs in with a spoon and turn down to a simmer.', 'Опусти яйца ложкой и убавь до слабого кипения.'),
      done: l('Jaja leže na dnu i ne udaraju jedno o drugo.', 'The eggs lie on the bottom and do not knock together.', 'Яйца лежат на дне и не стучат друг о друга.'),
      why: l('Burno ključanje ih lupa o dno i ljuska pukne.', 'A rolling boil knocks them against the pan and the shells crack.', 'Бурное кипение бьёт их о дно, и скорлупа трескается.'),
    },
    {
      text: l('Uključi tajmer čim jaja uđu u vodu.', 'Start the timer as soon as the eggs go in.', 'Включи таймер, как только яйца окажутся в воде.'),
      params: [l('6 min tečno', '6 min runny', '6 мин жидкий'), l('7 min kremasto', '7 min jammy', '7 мин кремовый'), l('10 min tvrdo', '10 min hard', '10 мин твёрдый')],
      done: l('Znaš koje žumance hoćeš pre nego što tajmer krene.', 'You know which yolk you want before the timer starts.', 'Ты знаешь, какой желток хочешь, до того как запустить таймер.'),
      drawing: 'yolkStages',
    },
    {
      text: l('Prebaci jaja odmah u vodu sa ledom.', 'Move the eggs straight into ice water.', 'Сразу переложи яйца в ледяную воду.'),
      params: [l('3 min', '3 min', '3 мин')],
      done: l('Jaje je hladno kad ga držiš u ruci.', 'The egg feels cold in your hand.', 'Яйцо холодное в руке.'),
      why: l(
        'Led zaustavi kuvanje na tačnom minutu i nema sivo-zelenog prstena oko žumanca.',
        'Ice stops the cooking on the exact minute and there is no grey-green ring around the yolk.',
        'Лёд останавливает варку точно в срок, и вокруг желтка не появляется серо-зелёное кольцо.',
      ),
    },
    {
      text: l('Oljušti jaje pod mlazom vode, od tupog kraja.', 'Peel the egg under running water, from the blunt end.', 'Очисти яйцо под струёй воды, начиная с тупого конца.'),
      done: l('Ljuska se skida u većim komadima.', 'The shell comes off in large pieces.', 'Скорлупа снимается крупными кусками.'),
      why: l('Na tupom kraju je vazdušni džep, odatle je najlakše da počneš.', 'The air pocket is at the blunt end, so it is the easiest place to start.', 'В тупом конце воздушный карман, оттуда легче всего начать.'),
      drawing: 'eggPeel',
    },
  ],
  mistake: {
    title: l('Jaja u hladnu vodu, „pa kad proključa“.', 'Eggs into cold water, "until it boils".', 'Яйца в холодную воду, «а там как закипит».'),
    fix: l(
      'Vreme zavisi od šporeta i šerpe, pa je svako jaje drugačije. Uvek u vodu koja već ključa, pa tajmer.',
      'The time depends on the stove and the pan, so every egg comes out different. Always into water that is already boiling, then the timer.',
      'Время зависит от плиты и кастрюли, и каждое яйцо выходит по-разному. Всегда в уже кипящую воду, затем таймер.',
    ),
  },
  think: {
    question: l('Šta znači sivo-zeleni prsten oko žumanca?', 'What does a grey-green ring around the yolk mean?', 'Что значит серо-зелёное кольцо вокруг желтка?'),
    options: [
      l('Jaje je prekuvano', 'The egg is overcooked', 'Яйцо переварено'),
      l('Jaje je staro', 'The egg is old', 'Яйцо старое'),
      l('Voda je bila preslana', 'The water was too salty', 'Вода была пересолена'),
    ],
    answer: 0,
    explain: l(
      'Kad se jaje kuva predugo, gvožđe iz žumanca i sumpor iz belanca se spoje u sivi sloj. Nije opasno, ali je znak da je prošlo vreme.',
      'When an egg cooks too long, iron from the yolk and sulphur from the white combine into a grey layer. It is harmless, but it means time ran over.',
      'Если яйцо варить слишком долго, железо из желтка и сера из белка образуют серый слой. Это безвредно, но значит, что время упущено.',
    ),
  },
}

const scrambled: Lesson = {
  id: '6.2',
  title: l('Kajgana', 'Scrambled eggs', 'Скрэмбл'),
  goal: l(
    'Napraviš kremastu kajganu sa mekanim, krupnim grudvicama.',
    'You make creamy scrambled eggs with soft, large curds.',
    'Ты готовишь кремовый скрэмбл с мягкими крупными хлопьями.',
  ),
  minutes: 6,
  key: { value: l('tiha vatra', 'low heat', 'слабый огонь'), label: l('ceo put', 'all the way', 'всё время') },
  need: [
    { item: l('Jaja', 'Eggs', 'Яйца'), qty: l('3', '3', '3') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('10 g', '10 g', '10 г') },
    { item: l('Tiganj, najbolje neprijanjajući', 'Pan, ideally non-stick', 'Сковорода, лучше антипригарная'), qty: l('20–24 cm', '20–24 cm', '20–24 см') },
    { item: l('Silikonska lopatica', 'Silicone spatula', 'Силиконовая лопатка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kajgana je test kontrole toplote. Ko napravi dobru kajganu, razume i meso i ribu.',
    'Scrambled eggs are a test of heat control. If you can make good ones, you understand meat and fish too.',
    'Скрэмбл — проверка контроля над огнём. Кто делает хороший скрэмбл, тот понимает и мясо, и рыбу.',
  ),
  steps: [
    {
      text: l('Umuti jaja viljuškom sa prstohvatom soli.', 'Beat the eggs with a fork and a pinch of salt.', 'Взбей яйца вилкой со щепоткой соли.'),
      params: [l('3 jaja', '3 eggs', '3 яйца'), l('30 s', '30 s', '30 с')],
      done: l('Nema tragova providnog belanca.', 'No streaks of clear egg white are left.', 'Не осталось прожилок прозрачного белка.'),
    },
    {
      text: l('Otopi puter na tihoj vatri.', 'Melt the butter over low heat.', 'Растопи масло на слабом огне.'),
      params: [l('10 g', '10 g', '10 г')],
      done: l('Puter je otopljen, blago peni i ne menja boju.', 'The butter has melted, foams gently and does not change colour.', 'Масло растаяло, слегка пенится и не меняет цвет.'),
      why: l('Ako puter posmeđi, tiganj je prevruć za jaja.', 'If the butter browns, the pan is too hot for eggs.', 'Если масло темнеет, сковорода слишком горячая для яиц.'),
    },
    {
      text: l('Sipaj jaja i mešaj stalno lopaticom.', 'Pour in the eggs and stir constantly with the spatula.', 'Влей яйца и постоянно мешай лопаткой.'),
      params: [l('od ivice ka sredini', 'from the edge to the centre', 'от края к центру')],
      done: l('Prave se mekane, krupne grudvice.', 'Soft, large curds are forming.', 'Образуются мягкие крупные хлопья.'),
      drawing: 'scramble',
    },
    {
      text: l('Skloni tiganj dok su jaja još sjajna i vlažna.', 'Take the pan off while the eggs are still glossy and wet.', 'Сними сковороду, пока яйца ещё блестящие и влажные.'),
      params: [l('oko 80% gotovo', 'about 80% done', 'примерно на 80%')],
      done: l('Jaja izgledaju malo nedovršeno.', 'The eggs look slightly unfinished.', 'Яйца выглядят чуть недоготовленными.'),
      why: l('Toplota tiganja i jaja ih dokuva u sledećih 30 sekundi.', 'The heat in the pan and the eggs finishes them in the next 30 seconds.', 'Тепло сковороды и самих яиц доводит их за следующие 30 секунд.'),
    },
    {
      text: l('Prebaci kajganu odmah na tanjir.', 'Move the eggs to a plate straight away.', 'Сразу переложи яйца на тарелку.'),
      done: l('Kajgana je kremasta, a ne suva i ne pušta vodu.', 'The eggs are creamy, not dry, and release no water.', 'Яйца кремовые, не сухие и не пускают воду.'),
    },
  ],
  mistake: {
    title: l('Jaka vatra da bude brže.', 'High heat to be quicker.', 'Сильный огонь, чтобы быстрее.'),
    fix: l(
      'Proteini se stegnu naglo i istisnu vodu: kajgana je gumena, a na tanjiru ostane bara. Tiha vatra, od početka do kraja.',
      'The proteins tighten suddenly and squeeze out water: rubbery eggs and a puddle on the plate. Low heat, start to finish.',
      'Белки резко сжимаются и выдавливают воду: яйца резиновые, на тарелке лужа. Слабый огонь от начала до конца.',
    ),
  },
  think: {
    question: l('Zašto je kajgana na tihoj vatri kremasta, a na jakoj gumena?', 'Why are eggs creamy over low heat and rubbery over high heat?', 'Почему на слабом огне скрэмбл кремовый, а на сильном — резиновый?'),
    options: [
      l('Na jakoj vatri proteini se stegnu previše i istisnu vodu', 'On high heat the proteins tighten too much and squeeze out water', 'На сильном огне белки сжимаются слишком сильно и выдавливают воду'),
      l('Na tihoj vatri ispari manje soli', 'Less salt evaporates on low heat', 'На слабом огне испаряется меньше соли'),
      l('Puter se bolje upije na jakoj vatri', 'Butter absorbs better on high heat', 'Масло лучше впитывается на сильном огне'),
    ],
    answer: 0,
    explain: l(
      'Isto kao u 4.1: proteini se stežu pod toplotom. Što brže i jače, to više vode istisnu. Tiha vatra ih steže taman toliko.',
      'Same as 4.1: heat makes proteins tighten. The faster and hotter, the more water they squeeze out. Low heat tightens them just enough.',
      'Как в 4.1: при нагреве белки сжимаются. Чем быстрее и сильнее, тем больше воды выдавливают. Слабый огонь сжимает их ровно настолько, насколько нужно.',
    ),
  },
}

const omelette: Lesson = {
  id: '6.3',
  title: l('Omlet', 'Omelette', 'Омлет'),
  goal: l(
    'Napraviš omlet koji je spolja glatak i žut, a iznutra mekan.',
    'You make an omelette that is smooth and yellow outside and soft inside.',
    'Ты готовишь омлет, гладкий и жёлтый снаружи и мягкий внутри.',
  ),
  minutes: 7,
  key: { value: l('20 cm', '20 cm', '20 см'), label: l('tiganj za 3 jaja', 'pan for 3 eggs', 'сковорода на 3 яйца') },
  need: [
    { item: l('Jaja', 'Eggs', 'Яйца'), qty: l('3', '3', '3') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('10 g', '10 g', '10 г') },
    { item: l('Tiganj', 'Frying pan', 'Сковорода'), qty: l('20 cm', '20 cm', '20 см') },
    { item: l('Lopatica', 'Spatula', 'Лопатка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Omlet traje dva minuta i sve se vidi: vatra, tajming i ruka. Zato ga kuvari kuvaju na probnom radu.',
    'An omelette takes two minutes and shows everything: heat, timing and hand. That is why cooks make one at a trial shift.',
    'Омлет готовится две минуты и показывает всё: огонь, тайминг и руку. Поэтому его готовят на пробной смене.',
  ),
  steps: [
    {
      text: l('Umuti jaja sa prstohvatom soli.', 'Beat the eggs with a pinch of salt.', 'Взбей яйца со щепоткой соли.'),
      params: [l('3 jaja', '3 eggs', '3 яйца')],
      done: l('Smesa je jednolično žuta.', 'The mixture is evenly yellow.', 'Смесь однородно-жёлтая.'),
    },
    {
      text: l('Zagrej tiganj sa puterom na srednjoj vatri.', 'Heat the pan with the butter over medium heat.', 'Разогрей сковороду с маслом на среднем огне.'),
      params: [l('10 g', '10 g', '10 г'), l('srednja vatra', 'medium heat', 'средний огонь')],
      done: l('Puter se zapeni, pa pena splasne.', 'The butter foams, then the foam subsides.', 'Масло пенится, затем пена оседает.'),
      why: l('Kad pena splasne, voda iz putera je isparila i tiganj je spreman.', 'When the foam subsides, the water in the butter has gone and the pan is ready.', 'Когда пена оседает, вода из масла испарилась и сковорода готова.'),
    },
    {
      text: l('Sipaj jaja i mešaj, tresući tiganj.', 'Pour in the eggs and stir while shaking the pan.', 'Влей яйца и мешай, встряхивая сковороду.'),
      params: [l('20 s', '20 s', '20 с')],
      done: l('Ima sitnih grudvica, a još dosta tečnog.', 'There are small curds and still plenty of liquid.', 'Есть мелкие хлопья и ещё много жидкого.'),
    },
    {
      text: l('Poravnaj jaja i pusti da se stegnu.', 'Smooth the eggs and let them set.', 'Разровняй яйца и дай им схватиться.'),
      params: [l('30–60 s', '30–60 s', '30–60 с')],
      done: l('Ivice su čvrste, a vrh je još vlažan.', 'The edges are firm and the top is still moist.', 'Края плотные, а верх ещё влажный.'),
    },
    {
      text: l('Preklopi omlet na pola i spusti ga na tanjir.', 'Fold the omelette in half and slide it onto a plate.', 'Сложи омлет пополам и переложи на тарелку.'),
      done: l('Spolja je žut, bez smeđih mrlja, a iznutra mekan.', 'It is yellow outside with no brown patches, and soft inside.', 'Снаружи жёлтый, без коричневых пятен, внутри мягкий.'),
      why: l('Smeđa boja znači da je tiganj bio prevruć.', 'Brown patches mean the pan was too hot.', 'Коричневые пятна значат, что сковорода была слишком горячей.'),
      drawing: 'omeletteFold',
    },
  ],
  mistake: {
    title: l('Prevelik tiganj.', 'A pan that is too big.', 'Слишком большая сковорода.'),
    fix: l(
      'Tri jaja u tiganju od 28 cm daju tanku palačinku koja se osuši pre nego što je preklopiš. Za 3 jaja tiganj od 20 cm.',
      'Three eggs in a 28 cm pan make a thin crêpe that dries out before you can fold it. For 3 eggs, a 20 cm pan.',
      'Три яйца на сковороде 28 см дают тонкий блин, который пересыхает до того, как его сложишь. Для 3 яиц — сковорода 20 см.',
    ),
  },
  think: {
    question: l('Zašto je veličina tiganja toliko bitna za omlet?', 'Why does the pan size matter so much for an omelette?', 'Почему размер сковороды так важен для омлета?'),
    options: [
      l('Debljina sloja određuje koliko brzo se jaja stegnu', 'The thickness of the layer decides how fast the eggs set', 'Толщина слоя определяет, как быстро яйца схватятся'),
      l('Veći tiganj se brže greje', 'A bigger pan heats faster', 'Большая сковорода быстрее греется'),
      l('Zbog izgleda na tanjiru', 'For the look on the plate', 'Ради вида на тарелке'),
    ],
    answer: 0,
    explain: l(
      'Tanak sloj se stegne ceo odjednom, a debeo ostane mekan u sredini. Tiganj biraš prema količini, ne prema tome koji ti je pri ruci.',
      'A thin layer sets all at once, a thick one stays soft in the middle. Choose the pan by the quantity, not by whichever is closest.',
      'Тонкий слой схватывается сразу целиком, а толстый остаётся мягким в середине. Сковороду выбирают по количеству, а не по тому, какая под рукой.',
    ),
  },
}

const poached: Lesson = {
  id: '6.4',
  title: l('Poširano jaje', 'Poached egg', 'Яйцо пашот'),
  goal: l(
    'Poširaš jaje sa čvrstim belancem i tečnim žumancetom, bez pramenova u vodi.',
    'You poach an egg with a firm white and a runny yolk, with no wisps in the water.',
    'Ты готовишь пашот с плотным белком и жидким желтком, без лохмотьев в воде.',
  ),
  minutes: 7,
  key: { value: l('80–85°C', '80–85°C', '80–85°C'), label: l('voda', 'water', 'вода') },
  need: [
    { item: l('Sveže jaje', 'Fresh egg', 'Свежее яйцо'), qty: l('1', '1', '1') },
    { item: l('Šerpa', 'Saucepan', 'Сотейник'), qty: l('8 cm vode', '8 cm of water', '8 см воды') },
    { item: l('Sitna cediljka i šolja', 'Fine sieve and a cup', 'Мелкое сито и чашка'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Rešetkasta kašika', 'Slotted spoon', 'Шумовка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Poširanje je kuvanje u vodi ispod ključanja. Isto znanje treba za ribu i piletinu u 7. i 8. modulu.',
    'Poaching is cooking in water below the boil. You need the same skill for fish and chicken later.',
    'Пашот — это варка в воде ниже точки кипения. Тот же навык понадобится для рыбы и курицы.',
  ),
  steps: [
    {
      text: l('Zagrej vodu do krčkanja bez mehurića na površini.', 'Heat the water to a bare simmer with no bubbles on the surface.', 'Нагрей воду до едва заметного кипения, без пузырей на поверхности.'),
      params: [l('80–85°C', '80–85°C', '80–85°C')],
      done: l('Na dnu su sitni mehurići, a površina je mirna.', 'Small bubbles sit on the bottom and the surface is still.', 'На дне мелкие пузырьки, поверхность спокойна.'),
      why: l('Mehurići bi razbili jaje pre nego što se stegne.', 'Bubbles would break the egg apart before it sets.', 'Пузыри разорвали бы яйцо до того, как оно схватится.'),
    },
    {
      text: l('Razbij jaje u cediljku iznad šolje i ocedi ga.', 'Crack the egg into the sieve over a cup and let it drain.', 'Разбей яйцо в сито над чашкой и дай стечь.'),
      params: [l('30 s', '30 s', '30 с')],
      done: l('Retko belance je iscurelo, a čvrsto je ostalo oko žumanca.', 'The thin white has dripped away and the firm white stays around the yolk.', 'Жидкий белок стёк, а плотный остался вокруг желтка.'),
      why: l('Retko belance pravi pramenove u vodi.', 'The thin white is what makes the wisps in the water.', 'Именно жидкий белок даёт лохмотья в воде.'),
      drawing: 'eggSieve',
    },
    {
      text: l('Prebaci jaje u šolju i lagano ga spusti u vodu.', 'Tip the egg into the cup and lower it gently into the water.', 'Переложи яйцо в чашку и аккуратно опусти в воду.'),
      done: l('Jaje potone, a belance obavije žumance.', 'The egg sinks and the white wraps around the yolk.', 'Яйцо тонет, белок обволакивает желток.'),
      drawing: 'poach',
    },
    {
      text: l('Kuvaj jaje, a vodu drži mirnom.', 'Cook the egg, keeping the water still.', 'Вари яйцо, держа воду спокойной.'),
      params: [l('3 min', '3 min', '3 мин')],
      done: l('Belance je čvrsto, a žumance se ljulja kad podigneš jaje.', 'The white is firm and the yolk wobbles when you lift the egg.', 'Белок плотный, а желток колышется, если поднять яйцо.'),
    },
    {
      text: l('Izvadi jaje rešetkastom kašikom i ocedi ga na ubrusu.', 'Lift the egg out with the slotted spoon and drain it on paper towel.', 'Достань яйцо шумовкой и обсуши на бумажном полотенце.'),
      done: l('Na tanjiru nema vode.', 'There is no water on the plate.', 'На тарелке нет воды.'),
    },
  ],
  mistake: {
    title: l('Staro jaje.', 'An old egg.', 'Несвежее яйцо.'),
    fix: l(
      'Belance starog jajeta je retko i raspadne se u vodi, ma koliko pažljivo radio. Za poširanje uzmi najsvežije jaje koje imaš.',
      'An old egg has a thin white that falls apart in the water however careful you are. For poaching use the freshest egg you have.',
      'У несвежего яйца жидкий белок, и он расползается в воде, как ни старайся. Для пашота бери самое свежее яйцо.',
    ),
  },
  think: {
    question: l('Zašto je za poširanje bitno sveže jaje?', 'Why does a poached egg need a fresh egg?', 'Почему для пашота нужно свежее яйцо?'),
    options: [
      l('Belance je gušće i drži oblik', 'The white is thicker and holds its shape', 'Белок гуще и держит форму'),
      l('Ukusnije je', 'It tastes better', 'Оно вкуснее'),
      l('Žumance je veće', 'The yolk is bigger', 'Желток больше'),
    ],
    answer: 0,
    explain: l(
      'Kako jaje stari, belance postaje sve ređe. Cediljka pomaže, ali sveže jaje je pola uspeha.',
      'As an egg ages, the white gets thinner. The sieve helps, but a fresh egg is half the success.',
      'С возрастом белок становится всё жиже. Сито помогает, но свежее яйцо — половина успеха.',
    ),
  },
}

const greenPan: Lesson = {
  id: '6.5',
  title: l('Povrće u tiganju', 'Pan-fried vegetables', 'Овощи на сковороде'),
  goal: l(
    'Ispržiš tikvice da budu zlatne spolja i čvrste iznutra, sa belim lukom koji ne zagori.',
    'You pan-fry courgettes golden outside and firm inside, with garlic that does not burn.',
    'Ты обжариваешь кабачки до золотистой корочки снаружи и упругости внутри, с чесноком, который не подгорает.',
  ),
  minutes: 7,
  key: { value: l('1 cm', '1 cm', '1 см'), label: l('debljina', 'thickness', 'толщина') },
  need: [
    { item: l('Tikvice', 'Courgettes', 'Кабачки'), qty: l('2 kom', '2', '2 шт') },
    { item: l('Beli luk', 'Garlic', 'Чеснок'), qty: l('2 čena', '2 cloves', '2 зубчика') },
    { item: l('Ulje', 'Oil', 'Масло'), qty: l('1 kašika', '1 tbsp', '1 ст. л.') },
    { item: l('Limun', 'Lemon', 'Лимон'), qty: l('¼', '¼', '¼') },
  ],
  why: l(
    'Ova lekcija spaja tri modula: rez iz M2, tiganj iz M4 i korekciju ukusa iz M5.',
    'This lesson ties three modules together: the cut from M2, the pan from M4 and the seasoning from M5.',
    'Этот урок объединяет три модуля: нарезку из М2, сковороду из М4 и вкус из М5.',
  ),
  steps: [
    {
      text: l('Iseci tikvice na polukrugove.', 'Cut the courgettes into half-moons.', 'Нарежь кабачки полукругами.'),
      params: [l('1 cm', '1 cm', '1 см')],
      done: l('Svi komadi su iste debljine.', 'All pieces are the same thickness.', 'Все куски одной толщины.'),
    },
    {
      text: l('Zagrej tiganj i ulje do treperenja.', 'Heat the pan and oil until the oil shimmers.', 'Разогрей сковороду с маслом, пока масло не задрожит.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь')],
      done: l('Ulje treperi i lako se razliva.', 'The oil shimmers and flows easily.', 'Масло дрожит и легко растекается.'),
    },
    {
      text: l('Rasporedi tikvice u jednom sloju i ne mešaj ih.', 'Lay the courgettes in one layer and do not stir.', 'Разложи кабачки в один слой и не мешай.'),
      params: [l('3 min', '3 min', '3 мин')],
      done: l('Donja strana je zlatna.', 'The underside is golden.', 'Нижняя сторона золотистая.'),
      why: l('Pravilo iz 4.5: korica se pravi dok namirnica leži.', 'The rule from 4.5: the crust forms while the food lies still.', 'Правило из 4.5: корочка образуется, пока продукт лежит.'),
      drawing: 'zucchiniPan',
    },
    {
      text: l('Okreni tikvice i dodaj beli luk na kraju.', 'Turn the courgettes and add the garlic at the end.', 'Переверни кабачки и добавь чеснок в конце.'),
      params: [l('beli luk 30–60 s', 'garlic 30–60 s', 'чеснок 30–60 с')],
      done: l('Beli luk zamiriše i jedva požuti.', 'The garlic smells fragrant and is barely golden.', 'Чеснок ароматный и едва золотистый.'),
      why: l('Beli luk zagori za minut. Ako ide na početku, do kraja je gorak.', 'Garlic burns within a minute. Added at the start, it is bitter by the end.', 'Чеснок сгорает за минуту. Если положить в начале, к концу он горчит.'),
    },
    {
      text: l('Skloni sa vatre, posoli i dodaj kap limuna.', 'Take off the heat, salt and add a squeeze of lemon.', 'Сними с огня, посоли и добавь немного лимона.'),
      done: l('Tikvice su zlatne, čvrste i ukus je jasan.', 'The courgettes are golden and firm, and the flavour is clear.', 'Кабачки золотистые, упругие, вкус ясный.'),
      why: l('So na kraju, da ne izvuče vodu. Kiselina iz 5.2 da ukus ne bude ravan.', 'Salt at the end so it does not draw out water. Acid from 5.2 so the taste is not flat.', 'Соль в конце, чтобы не вытянула воду. Кислота из 5.2 — чтобы вкус не был плоским.'),
    },
  ],
  mistake: {
    title: l('Beli luk na početku.', 'Garlic at the start.', 'Чеснок в начале.'),
    fix: l(
      'Dok se tikvice zapeku, beli luk pocrni i zagorči celo jelo. Beli luk ide u poslednjem minutu.',
      'By the time the courgettes colour, the garlic has gone black and made the whole dish bitter. Garlic goes in during the last minute.',
      'Пока кабачки зарумянятся, чеснок почернеет и сделает всё блюдо горьким. Чеснок — в последнюю минуту.',
    ),
  },
  think: {
    question: l('Zašto tikvice soliš tek na kraju?', 'Why do you salt the courgettes only at the end?', 'Почему кабачки солят только в конце?'),
    options: [
      l('So izvlači vodu i tikvice bi se kuvale u njoj', 'Salt draws out water and the courgettes would stew in it', 'Соль вытягивает воду, и кабачки тушились бы в ней'),
      l('So zagori u tiganju', 'Salt burns in the pan', 'Соль сгорает на сковороде'),
      l('Tikvice ne upijaju so', 'Courgettes do not absorb salt', 'Кабачки не впитывают соль'),
    ],
    answer: 0,
    explain: l(
      'Tikvice su skoro sve voda, kao pečurke iz 4.5. So na početku je izvuče napolje i umesto prženja dobiješ kuvanje.',
      'Courgettes are almost all water, like the mushrooms in 4.5. Salt at the start pulls it out, and instead of frying you get stewing.',
      'Кабачки почти целиком из воды, как грибы в 4.5. Соль в начале вытягивает её, и вместо жарки получается тушение.',
    ),
  },
}

export const eggLessons: Lesson[] = [boiled, scrambled, omelette, poached, greenPan]
