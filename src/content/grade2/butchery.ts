import { l, type Lesson } from '../types'

// Grade 2 · Module 3 · Meat butchery. One rule runs through the module: a muscle that worked hard is
// tough and tasty and wants slow, wet heat; one that barely moved is tender and wants fast, dry heat.

const beefCuts: Lesson = {
  id: '2.3.1',
  title: l('Rezovi junetine i šta je za šta', 'Beef cuts and what each is for', 'Отрубы говядины и для чего каждый'),
  goal: l(
    'Kod mesara izabereš pravi rez junetine za jelo koje kuvaš.',
    'At the butcher you choose the right beef cut for the dish you are cooking.',
    'У мясника ты выбираешь правильный отруб говядины для своего блюда.',
  ),
  minutes: 7,
  key: { value: l('2', '2', '2'), label: l('grupe rezova', 'groups of cuts', 'группы отрубов') },
  need: [
    { item: l('Ova lekcija na telefonu', 'This lesson on your phone', 'Этот урок в телефоне'), qty: l('1', '1', '1') },
    { item: l('Mesara sa vitrinom', 'A butcher with a counter', 'Мясная лавка с витриной'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Najskuplji rez nije najbolji za svako jelo. Biftek u gulašu je suv, a plećka na roštilju je đon. Pravi rez je pola jela.',
    'The dearest cut is not best for every dish. Tenderloin in goulash is dry, and shoulder on the grill is shoe leather. The right cut is half the dish.',
    'Самый дорогой отруб не лучший для любого блюда. Вырезка в гуляше сухая, а лопатка на гриле — подошва. Правильный отруб — половина блюда.',
  ),
  steps: [
    {
      text: l('Podeli rezove u dve grupe: mišići koji su radili i oni koji nisu.', 'Sort cuts into two groups: muscles that worked and muscles that did not.', 'Раздели отрубы на две группы: мышцы, которые работали, и которые нет.'),
      params: [l('radni: plećka, but, vrat, grudi, kolenica, obraz', 'working: shoulder, round, neck, brisket, shank, cheek', 'рабочие: лопатка, огузок, шея, грудинка, голяшка, щёки'), l('mirni: biftek, ramstek, rozbratna', 'resting: tenderloin, sirloin, rib-eye', 'спокойные: вырезка, филе, рибай')],
      done: l('Za svaki rez znaš u koju grupu ide.', 'You know which group every cut belongs to.', 'Для каждого отруба знаешь его группу.'),
      why: l('Noge i vrat nose životinju ceo život i puni su vezivnog tkiva. Leđa skoro ne rade, pa su mekana.', 'Legs and neck carry the animal all its life and are full of connective tissue. The back barely works, so it is tender.', 'Ноги и шея всю жизнь носят животное и полны соединительной ткани. Спина почти не работает, поэтому мягкая.'),
      drawing: 'cutsMap',
    },
    {
      text: l('Radne rezove kuvaj sporo i vlažno, mirne brzo i suvo.', 'Cook working cuts slowly and wet, resting cuts fast and dry.', 'Рабочие отрубы готовь медленно и влажно, спокойные — быстро и сухо.'),
      params: [l('radni: braziranje 12.1', 'working: braising 12.1', 'рабочие: тушение 12.1'), l('mirni: tiganj, roštilj', 'resting: pan, grill', 'спокойные: сковорода, гриль')],
      done: l('Uz svaki rez imaš tehniku.', 'Every cut has a technique next to it.', 'Каждому отрубу соответствует техника.'),
      why: l('Kolagen se topi tek posle sati na 70–90°C (12.1). Mirni rez nema šta da topi, pa se samo presuši.', 'Collagen melts only after hours at 70–90°C (12.1). A resting cut has nothing to melt and just dries out.', 'Коллаген тает только после часов при 70–90°C (12.1). Спокойному отрубу нечего растапливать, он только сохнет.'),
    },
    {
      text: l('Pogledaj mramoriranost: bele niti masti kroz meso.', 'Look at the marbling: white threads of fat through the meat.', 'Посмотри на мраморность: белые прожилки жира в мясе.'),
      done: l('Biraš komad sa sitnim, ravnomernim nitima.', 'You pick the piece with fine, even threads.', 'Выбираешь кусок с тонкими равномерными прожилками.'),
      why: l('Mast između vlakana se topi i podmazuje meso iznutra. Rozbratna je zato sočnija od bifteka.', 'Fat between the fibres melts and bastes the meat from inside. That is why rib-eye is juicier than tenderloin.', 'Жир между волокнами тает и смазывает мясо изнутри. Поэтому рибай сочнее вырезки.'),
      drawing: 'marbling',
    },
    {
      text: l('Pogledaj boju i miris.', 'Check the colour and smell.', 'Проверь цвет и запах.'),
      params: [l('tamnocrveno', 'deep red', 'тёмно-красное'), l('masnoća bela do krem', 'fat white to cream', 'жир белый или кремовый')],
      done: l('Meso je suvo na površini i miriše čisto, kao na metal.', 'The meat is dry on the surface and smells clean, slightly metallic.', 'Мясо сухое на поверхности и пахнет чисто, слегка металлом.'),
      why: l('Zrelo meso je tamnije i ukusnije od svetlocrvenog. Siva, lepljiva površina i kiseo miris znače da nije za kupovinu.', 'Aged beef is darker and tastier than bright red. A grey, sticky surface and a sour smell mean do not buy.', 'Выдержанное мясо темнее и вкуснее ярко-красного. Серая липкая поверхность и кислый запах — не покупать.'),
    },
    {
      text: l('Traži od mesara rez po imenu i debljini.', 'Ask the butcher for the cut by name and thickness.', 'Проси у мясника отруб по названию и толщине.'),
      params: [l('npr. rozbratna, 3 cm', 'e.g. rib-eye, 3 cm', 'напр. рибай, 3 см')],
      done: l('Dobiješ tačno ono što ti treba, ne ono što je na vrhu vitrine.', 'You get exactly what you need, not what sits on top of the counter.', 'Получаешь именно то, что нужно, а не то, что лежит сверху.'),
      why: l('Dobar mesar je tvoj saveznik. Pitaj ga koliko je meso zrelo i šta mu je danas najbolje.', 'A good butcher is your ally. Ask how long the beef is aged and what is best today.', 'Хороший мясник — твой союзник. Спроси, сколько выдержано мясо и что сегодня лучшее.'),
    },
  ],
  mistake: {
    title: l('Biftek za gulaš "da bude mekše".', 'Tenderloin for goulash "to make it softer".', 'Вырезка для гуляша, «чтобы было мягче».'),
    fix: l(
      'Biftek nema kolagena i posle dva sata je suv i vlaknast. Za gulaš uzmi plećku ili but: jeftinije su, a sos je gust od želatina.',
      'Tenderloin has no collagen and after two hours it is dry and stringy. For goulash take shoulder or shin: they are cheaper, and the gelatine makes the sauce rich.',
      'В вырезке нет коллагена, через два часа она сухая и волокнистая. Для гуляша бери лопатку или голяшку: они дешевле, а соус густой от желатина.',
    ),
  },
  think: {
    question: l('Koji rez ide na roštilj za 8 minuta?', 'Which cut goes on the grill for 8 minutes?', 'Какой отруб идёт на гриль на 8 минут?'),
    options: [
      l('Rozbratna', 'Rib-eye', 'Рибай'),
      l('Goveđi obraz', 'Beef cheek', 'Говяжьи щёчки'),
      l('Kolenica', 'Shank', 'Голяшка'),
    ],
    answer: 0,
    explain: l(
      'Rozbratna je mirni mišić sa puno mramora: brzo i jako. Obraz i kolenica su najradniji mišići u kravi i traže sate braziranja.',
      'Rib-eye is a resting muscle with plenty of marbling: fast and hot. Cheek and shank are the hardest-working muscles in the animal and need hours of braising.',
      'Рибай — спокойная мышца с мраморностью: быстро и на сильном огне. Щёки и голяшка — самые рабочие мышцы и требуют часов тушения.',
    ),
  },
}

const porkLamb: Lesson = {
  id: '2.3.2',
  title: l('Svinjski i jagnjeći rezovi', 'Pork and lamb cuts', 'Отрубы свинины и баранины'),
  goal: l(
    'Znaš svaki svinjski i jagnjeći rez i kako se kuva.',
    'You know every pork and lamb cut and how to cook it.',
    'Ты знаешь все отрубы свинины и баранины и как их готовить.',
  ),
  minutes: 6,
  key: { value: l('8', '8', '8'), label: l('rezova', 'cuts', 'отрубов') },
  need: [
    { item: l('Ova lekcija na telefonu', 'This lesson on your phone', 'Этот урок в телефоне'), qty: l('1', '1', '1') },
    { item: l('Mesara', 'A butcher', 'Мясная лавка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Svinjetina i jagnjetina su naše meso: roštilj, pečenje, ražanj. Isto pravilo kao kod junetine, ali su životinje manje, pa su vremena kraća.',
    'Pork and lamb are our meats: grill, roast, spit. The same rule as beef, but the animals are smaller, so the times are shorter.',
    'Свинина и баранина — наше мясо: гриль, жаркое, вертел. То же правило, что с говядиной, но животные меньше, и время короче.',
  ),
  steps: [
    {
      text: l('Svinjski mirni rezovi: file i kare, za tiganj i roštilj.', 'Pork resting cuts: tenderloin and loin, for pan and grill.', 'Спокойные отрубы свинины: вырезка и корейка, для сковороды и гриля.'),
      params: [l('file: 60°C → 63°C', 'tenderloin: 60°C → 63°C', 'вырезка: 60°C → 63°C')],
      done: l('Znaš da su posni i da se presuše preko 65°C.', 'You know they are lean and dry out above 65°C.', 'Знаешь, что они постные и пересыхают выше 65°C.'),
      why: l('Svinjski file je posniji od pilećih prsa. Termometar je obavezan (7.5).', 'Pork tenderloin is leaner than chicken breast. The thermometer is a must (7.5).', 'Свиная вырезка постнее куриной грудки. Термометр обязателен (7.5).'),
    },
    {
      text: l('Svinjski radni rezovi: vrat, plećka, potrbušina, rebra, kolenica.', 'Pork working cuts: neck, shoulder, belly, ribs, hock.', 'Рабочие отрубы свинины: шея, лопатка, грудинка, рёбра, рулька.'),
      params: [l('vrat: pečenje 13.3 ili roštilj', 'neck: roast 13.3 or grill', 'шея: жаркое 13.3 или гриль'), l('potrbušina, kolenica: sporo', 'belly, hock: slow', 'грудинка, рулька: медленно')],
      done: l('Za svaki znaš da li ide sporo ili može i brzo.', 'For each you know whether it goes slow or can go fast.', 'Для каждого знаешь, медленно его готовить или можно быстро.'),
      why: l('Vrat je izuzetak: radni mišić, ali sa toliko masti da trpi i roštilj. Zato je naš omiljeni rez.', 'Neck is the exception: a working muscle with so much fat it takes the grill too. That is why it is our favourite cut.', 'Шея — исключение: рабочая мышца, но с таким количеством жира, что выдерживает и гриль. Поэтому она наш любимый отруб.'),
    },
    {
      text: l('Jagnjeći mirni rezovi: kare i kotleti, za tiganj i rernu.', 'Lamb resting cuts: rack and chops, for pan and oven.', 'Спокойные отрубы баранины: каре и котлеты, для сковороды и духовки.'),
      params: [l('ružičasto: 57–60°C', 'pink: 57–60°C', 'розовое: 57–60°C')],
      done: l('Znaš da se jagnjeći kare služi ružičast.', 'You know a rack of lamb is served pink.', 'Знаешь, что каре ягнёнка подают розовым.'),
      why: l('Kao junetina, jagnjetina celog mišića sme ružičasta. Pečena do kraja gubi nežnost.', 'Like beef, whole-muscle lamb may be pink. Cooked through it loses its tenderness.', 'Как говядина, цельная баранина может быть розовой. Прожаренная теряет нежность.'),
    },
    {
      text: l('Jagnjeći radni rezovi: plećka, but, vrat, kolenica.', 'Lamb working cuts: shoulder, leg, neck, shank.', 'Рабочие отрубы баранины: лопатка, нога, шея, голяшка.'),
      params: [l('plećka: 2.9.5', 'shoulder: 2.9.5', 'лопатка: 2.9.5'), l('but: pečen ružičast ili sporo', 'leg: roast pink or slow', 'нога: розовая или медленно')],
      done: l('Znaš da but može oba načina, a plećka samo sporo.', 'You know leg can go either way, shoulder only slow.', 'Знаешь, что ногу можно двумя способами, а лопатку — только медленно.'),
    },
    {
      text: l('Proveri masnoću: bela i čvrsta, ne žuta.', 'Check the fat: white and firm, not yellow.', 'Проверь жир: белый и плотный, не жёлтый.'),
      done: l('Masnoća se ne maže pod prstom.', 'The fat does not smear under your finger.', 'Жир не размазывается под пальцем.'),
      why: l('Žuta i meka mast kod jagnjetine znači staru životinju i jak miris. Kod svinjetine, loše hranjenu.', 'Yellow, soft fat on lamb means an older animal and a strong smell. On pork, poor feeding.', 'Жёлтый мягкий жир у баранины — старое животное и сильный запах. У свинины — плохое кормление.'),
    },
  ],
  mistake: {
    title: l('Svinjski file pečen kao vrat, sat vremena.', 'Pork tenderloin roasted like neck, for an hour.', 'Свиная вырезка запекается как шея, час.'),
    fix: l(
      'File nema masti ni kolagena i za sat vremena postane suv kao hleb. File se peče 15–20 minuta do 60°C, a vrat sat i po do 70°C (13.3).',
      'Tenderloin has neither fat nor collagen and in an hour turns dry as bread. Tenderloin roasts 15–20 minutes to 60°C; neck an hour and a half to 70°C (13.3).',
      'В вырезке нет ни жира, ни коллагена, за час она сухая, как хлеб. Вырезку запекают 15–20 минут до 60°C, шею — полтора часа до 70°C (13.3).',
    ),
  },
  think: {
    question: l('Za ražnjiće na roštilju (14.4), koji svinjski rez?', 'For pork skewers on the grill (14.4), which cut?', 'Для свиных шашлычков на гриле (14.4) какой отруб?'),
    options: [
      l('Vrat', 'Neck', 'Шея'),
      l('Kolenica', 'Hock', 'Рулька'),
      l('Potrbušina', 'Belly', 'Грудинка'),
    ],
    answer: 0,
    explain: l(
      'Vrat ima dovoljno masti da ostane sočan na jakoj vatri za 12 minuta. Kolenica je tvrda bez sati kuvanja, a potrbušina plane od masti na žaru.',
      'Neck has enough fat to stay juicy over high heat for 12 minutes. Hock is tough without hours of cooking, and belly flares up on the coals from its fat.',
      'В шее достаточно жира, чтобы остаться сочной на сильном огне 12 минут. Рулька жёсткая без часов варки, а грудинка вспыхивает на углях от жира.',
    ),
  },
}

const shoulder: Lesson = {
  id: '2.3.3',
  title: l('Otkoštavanje plećke', 'Boning a shoulder', 'Обвалка лопатки'),
  goal: l(
    'Izvadiš kosti iz svinjske plećke i otvoriš je u ravan komad iste debljine.',
    'You take the bones out of a pork shoulder and open it into a flat piece of even thickness.',
    'Ты вынимаешь кости из свиной лопатки и раскрываешь её в плоский кусок одной толщины.',
  ),
  minutes: 8,
  key: { value: l('3–4 cm', '3–4 cm', '3–4 см'), label: l('debljina', 'thickness', 'толщина') },
  need: [
    { item: l('Svinjska plećka sa kosti', 'Bone-in pork shoulder', 'Свиная лопатка на кости'), qty: l('2–2.5 kg', '2–2.5 kg', '2–2,5 кг') },
    { item: l('Nož za otkoštavanje ili mali kruti nož', 'Boning knife or small stiff knife', 'Обвалочный или маленький жёсткий нож'), qty: l('1', '1', '1') },
    { item: l('Velika daska za sirovo meso', 'Large raw-meat board', 'Большая доска для сырого мяса'), qty: l('1', '1', '1') },
    { item: l('Kuhinjska krpa ispod daske', 'Kitchen cloth under the board', 'Полотенце под доской'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Otkoštana plećka se puni, uvija i peče ravnomerno, a kosti idu u fond. Kod mesara košta duplo, a ti učiš da nož uvek prati kost.',
    'A boned shoulder can be stuffed, rolled and roasted evenly, and the bones go to stock. At the butcher it costs double, and you learn that the knife always follows the bone.',
    'Лопатку без кости можно начинить, свернуть и равномерно запечь, а кости — в бульон. У мясника вдвое дороже, а ты учишься, что нож всегда идёт за костью.',
  ),
  steps: [
    {
      text: l('Stavi plećku kožom nadole i napipaj pljosnatu kost lopatice.', 'Lay the shoulder skin side down and feel for the flat blade bone.', 'Положи лопатку кожей вниз и нащупай плоскую лопаточную кость.'),
      done: l('Znaš gde je ivica lopatice i kuda ide zglob.', 'You know where the blade edge is and where the joint runs.', 'Знаешь, где край лопатки и где проходит сустав.'),
      why: l('Krpa ispod daske da se ne pomera. Veliko sirovo meso i klizava daska su opasan par.', 'A cloth under the board so it does not move. A big piece of raw meat and a sliding board are a dangerous pair.', 'Полотенце под доской, чтобы не скользила. Большой кусок сырого мяса и скользкая доска — опасная пара.'),
    },
    {
      text: l('Zaseci duž ivice lopatice i odvoji meso sa gornje strane kosti.', 'Cut along the edge of the blade and free the meat from the top face.', 'Надрежь вдоль края лопатки и отдели мясо с верхней стороны кости.'),
      params: [l('sečivo uz kost', 'blade against the bone', 'лезвие вплотную к кости')],
      done: l('Gornja strana lopatice je čista i vidi se.', 'The top face of the blade is clean and visible.', 'Верхняя сторона лопатки чистая и видна.'),
      drawing: 'boneBlade',
    },
    {
      text: l('Isto uradi sa donje strane, pa preseci zglob.', 'Do the same underneath, then cut through the joint.', 'То же сделай снизу, затем перережь сустав.'),
      done: l('Lopatica izlazi cela, sa malo mesa na njoj.', 'The blade comes out whole, with little meat on it.', 'Лопатка выходит целиком, почти без мяса.'),
      why: l('Zglob se ne seče kroz kost. Nađi belu hrskavicu između kostiju i nož ide kroz nju.', 'The joint is not cut through bone. Find the white cartilage between the bones and the knife goes through it.', 'Сустав не режут через кость. Найди белый хрящ между костями — нож пройдёт через него.'),
    },
    {
      text: l('Zaseci duž okrugle kosti ruke i izvadi je.', 'Cut along the round arm bone and remove it.', 'Надрежь вдоль круглой плечевой кости и вынь её.'),
      done: l('U plećki nema više kostiju, samo meso i mast.', 'No bones are left in the shoulder, only meat and fat.', 'В лопатке не осталось костей, только мясо и жир.'),
      why: l('Ista tehnika kao batak u 2.2.3, samo veća: nađi kost, nož uz nju, pa ispod.', 'The same technique as the thigh in 2.2.3, only bigger: find the bone, knife against it, then underneath.', 'Та же техника, что с бедром в 2.2.3, только крупнее: найди кость, нож вдоль неё, потом под ней.'),
    },
    {
      text: l('Otvori debele delove po debljini, kao knjigu.', 'Open the thick parts through their thickness, like a book.', 'Раскрой толстые части по толщине, как книгу.'),
      params: [l('3–4 cm svuda', '3–4 cm all over', '3–4 см везде')],
      done: l('Plećka je jedan ravan komad iste debljine.', 'The shoulder is one flat piece of even thickness.', 'Лопатка — один плоский кусок одной толщины.'),
      why: l('Ista debljina, isto pečenje (7.3). Sada je spremna za roladnu (2.3.4).', 'Same thickness, same cooking (7.3). Now it is ready to roll (2.3.4).', 'Одинаковая толщина — одинаковое приготовление (7.3). Теперь готова для рулета (2.3.4).'),
      drawing: 'butterflyRoast',
    },
  ],
  mistake: {
    title: l('Sečenje mesa umesto praćenja kosti.', 'Cutting the meat instead of following the bone.', 'Резать мясо вместо того, чтобы идти за костью.'),
    fix: l(
      'Na kostima ostane pola kilograma mesa, a plećka je iscepana. Nož je uvek na kosti, kratki potezi, i stalno proveravaj prstom gde je kost.',
      'Half a kilo of meat stays on the bones and the shoulder is torn to pieces. The knife is always on the bone, short strokes, and keep checking with a finger where the bone is.',
      'Полкило мяса остаётся на костях, а лопатка изрезана. Нож всегда на кости, короткие движения, постоянно проверяй пальцем, где кость.',
    ),
  },
  think: {
    question: l('Šta radiš sa kostima plećke?', 'What do you do with the shoulder bones?', 'Что делать с костями лопатки?'),
    options: [
      l('Pečeš ih za tamni fond ili kuvaš u pasulju', 'Roast them for brown stock or cook them in beans', 'Запекаешь для тёмного бульона или варишь в фасоли'),
      l('Baciš ih, nema mesa na njima', 'Throw them away, there is no meat on them', 'Выбрасываешь, на них нет мяса'),
      l('Pečeš ih uz plećku za ukras', 'Roast them alongside for show', 'Запекаешь рядом для красоты'),
    ],
    answer: 0,
    explain: l(
      'Kosti su pun ukusa i kolagena. Tamni fond iz 8.2 može i od svinjskih kostiju, a kost u pasulju (11.1) daje čorbi telo.',
      'Bones are full of flavour and collagen. The brown stock from 8.2 works with pork bones too, and a bone in beans (11.1) gives the broth body.',
      'Кости полны вкуса и коллагена. Тёмный бульон из 8.2 получается и из свиных костей, а кость в фасоли (11.1) даёт бульону тело.',
    ),
  },
}

const rolling: Lesson = {
  id: '2.3.4',
  title: l('Roladna i vezivanje', 'Rolling and tying a roast', 'Рулет и перевязка'),
  goal: l(
    'Urolaš i vežeš pečenje mesarskim čvorom, čvrsto i ravnomerno.',
    'You roll and tie a roast with a butcher\'s knot, firm and even.',
    'Ты сворачиваешь и перевязываешь жаркое мясницким узлом, плотно и равномерно.',
  ),
  minutes: 7,
  key: { value: l('2.5 cm', '2.5 cm', '2,5 см'), label: l('razmak kanapa', 'string spacing', 'шаг нити') },
  need: [
    { item: l('Otkoštana plećka (2.3.3)', 'Boned shoulder (2.3.3)', 'Лопатка без кости (2.3.3)'), qty: l('~2 kg', '~2 kg', '~2 кг') },
    { item: l('Kuhinjski kanap od pamuka', 'Cotton kitchen string', 'Хлопковая кулинарная нить'), qty: l('3 m', '3 m', '3 м') },
    { item: l('Beli luk, ruzmarin, so, biber', 'Garlic, rosemary, salt, pepper', 'Чеснок, розмарин, соль, перец'), qty: l('so 1%', 'salt 1%', 'соль 1%') },
  ],
  why: l(
    'Rolovana plećka je okrugla i iste debljine celom dužinom, pa se peče ravnomerno i lepo seče. Kanap drži oblik dok se meso skuplja na toploti.',
    'A rolled shoulder is round and the same thickness all along, so it roasts evenly and slices neatly. The string holds the shape while the meat shrinks in the heat.',
    'Свёрнутая лопатка круглая и одной толщины по всей длине, поэтому равномерно запекается и красиво режется. Нить держит форму, пока мясо сжимается от жара.',
  ),
  steps: [
    {
      text: l('Začini unutrašnju stranu mesa.', 'Season the inside of the meat.', 'Приправь внутреннюю сторону мяса.'),
      params: [l('so 1%, beli luk, ruzmarin', 'salt 1%, garlic, rosemary', 'соль 1%, чеснок, розмарин')],
      done: l('Unutrašnjost je ravnomerno posuta.', 'The inside is evenly seasoned.', 'Внутренняя сторона равномерно приправлена.'),
      why: l('Unutrašnjost posle rolanja više nije dostupna. Ovo je jedina prilika da se začini sredina.', 'Once rolled, the inside is out of reach. This is the only chance to season the middle.', 'После сворачивания внутренность недоступна. Это единственный шанс приправить середину.'),
    },
    {
      text: l('Urolaj meso čvrsto, po dužini, sa vlaknima.', 'Roll the meat tightly, lengthwise, along the grain.', 'Плотно сверни мясо вдоль, по волокнам.'),
      done: l('Roladna je okrugla, bez šupljina u sredini.', 'The roll is round with no gaps in the middle.', 'Рулет круглый, без пустот в середине.'),
      why: l('Vlakna po dužini roladne znače da će šnite biti poprečno na vlakna, kao u 7.3.', 'Fibres running along the roll mean every slice will be across the grain, as in 7.3.', 'Волокна вдоль рулета значат, что каждый ломоть будет поперёк волокон, как в 7.3.'),
    },
    {
      text: l('Prvi kanap veži u sredini, mesarskim čvorom.', 'Tie the first string in the middle, with a butcher\'s knot.', 'Первую нить завяжи посередине мясницким узлом.'),
      params: [l('čvrsto, ne zadavljeno', 'firm, not strangled', 'плотно, но не перетянуто')],
      done: l('Kanap drži roladnu, a meso ne izbija sa strane.', 'The string holds the roll and the meat does not bulge out the sides.', 'Нить держит рулет, мясо не выпирает по бокам.'),
      why: l('Mesarski čvor: duplo prebaci, zategni, pa zaključaj običnim čvorom. Može da se zateže, a ne popušta.', 'Butcher\'s knot: wrap twice, pull tight, then lock with a plain knot. It can be tightened and does not slip.', 'Мясницкий узел: два оборота, затяни, затем закрепи простым узлом. Затягивается и не ослабевает.'),
      drawing: 'butcherKnot',
    },
    {
      text: l('Veži krajeve, pa popuni razmake.', 'Tie the ends, then fill the gaps.', 'Завяжи концы, затем заполни промежутки.'),
      params: [l('svakih 2.5 cm', 'every 2.5 cm', 'каждые 2,5 см')],
      done: l('Kanapi su na jednakom razmaku i jednako zategnuti.', 'The strings are evenly spaced and equally tight.', 'Нити на равном расстоянии и одинаково натянуты.'),
      why: l('Od sredine ka krajevima, kao kad se zateže točak. Tako roladna ostaje prava, a ne savijena.', 'From the middle out, like tightening a wheel. That keeps the roll straight, not bent.', 'От середины к краям, как затягивают колесо. Так рулет остаётся ровным, а не изогнутым.'),
      drawing: 'tiedRoast',
    },
    {
      text: l('Posoli spolja i ostavi u frižideru preko noći.', 'Salt the outside and leave it in the fridge overnight.', 'Посоли снаружи и оставь в холодильнике на ночь.'),
      params: [l('12 h, otkriveno', '12 h, uncovered', '12 ч, без укрытия')],
      done: l('Površina je suva i spremna za pečenje kao u 13.3.', 'The surface is dry and ready to roast as in 13.3.', 'Поверхность сухая и готова к запеканию, как в 13.3.'),
    },
  ],
  mistake: {
    title: l('Kanap zategnut iz sve snage.', 'String pulled with all your strength.', 'Нить затянута изо всех сил.'),
    fix: l(
      'Meso se steže na toploti, a prezategnut kanap ga seče i istiskuje sok. Zategni toliko da roladna drži oblik i da prst još može ispod kanapa.',
      'Meat tightens in the heat, and over-tight string cuts into it and squeezes out the juice. Tie just tight enough to hold the shape, with room for a finger under the string.',
      'Мясо сжимается от жара, а перетянутая нить врезается и выжимает сок. Затягивай так, чтобы рулет держал форму, а палец ещё проходил под нить.',
    ),
  },
  think: {
    question: l('Zašto se roladna veže od sredine, a ne od jednog kraja?', 'Why is the roll tied from the middle, not from one end?', 'Почему рулет перевязывают от середины, а не от одного края?'),
    options: [
      l('Napetost se deli ravnomerno, pa roladna ostaje prava', 'The tension spreads evenly so the roll stays straight', 'Натяжение распределяется равномерно, и рулет остаётся ровным'),
      l('Brže je', 'It is faster', 'Так быстрее'),
      l('Manje kanapa', 'It uses less string', 'Меньше нити'),
    ],
    answer: 0,
    explain: l(
      'Kad vežeš od kraja, meso se gura ka drugom kraju i roladna se iskrivi. Od sredine, svaka polovina se veže pod istom napetošću.',
      'Tie from one end and the meat is pushed towards the other, bending the roll. From the middle, each half is tied under the same tension.',
      'Начнёшь с края — мясо сдвигается к другому краю, и рулет изгибается. От середины каждая половина завязывается с одинаковым натяжением.',
    ),
  },
}

const mince: Lesson = {
  id: '2.3.5',
  title: l('Svoje mleveno meso', 'Grinding your own mince', 'Собственный фарш'),
  goal: l(
    'Sameljaš mleveno meso sa tačno 20% masti, hladno i rastresito.',
    'You grind mince with exactly 20% fat, cold and loose.',
    'Ты делаешь фарш ровно с 20% жира, холодный и рассыпчатый.',
  ),
  minutes: 6,
  key: { value: l('20%', '20%', '20%'), label: l('masti', 'fat', 'жира') },
  need: [
    { item: l('Juneća plećka', 'Beef shoulder', 'Говяжья лопатка'), qty: l('800 g', '800 g', '800 г') },
    { item: l('Svinjska slanina bez kože ili masniji vrat', 'Pork back fat or fatty neck', 'Свиной шпик или жирная шея'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Mašina za mlevenje ili dodatak za mikser', 'Meat grinder or mixer attachment', 'Мясорубка или насадка для миксера'), qty: l('1', '1', '1') },
    { item: l('Činija na ledu', 'A bowl set over ice', 'Миска на льду'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kupljeno mleveno meso ne znaš od čega je ni kada je samleveno. Svoje znaš do grama: rez, mast i vreme. I meso je rastresito, ne pasta.',
    'Shop mince does not tell you what it is made of or when it was ground. Your own you know to the gram: cut, fat and time. And it is loose, not a paste.',
    'Магазинный фарш не говорит, из чего он и когда смолот. Свой ты знаешь до грамма: отруб, жир и время. И он рассыпчатый, а не паста.',
  ),
  steps: [
    {
      text: l('Iseci meso i mast na kocke i izmeri odnos.', 'Cut the meat and fat into cubes and weigh the ratio.', 'Нарежь мясо и жир кубиками и взвесь соотношение.'),
      params: [l('kocke 3 cm', '3 cm cubes', 'кубики 3 см'), l('800 g + 200 g', '800 g + 200 g', '800 г + 200 г')],
      done: l('Imaš tačno 1 kg sa 20% masti.', 'You have exactly 1 kg at 20% fat.', 'У тебя ровно 1 кг с 20% жира.'),
      why: l('20% je mera za ćevape i pljeskavicu (14.3). Za ćufte u sosu može 15%.', '20% is the measure for ćevapi and burgers (14.3). Meatballs in sauce can go to 15%.', '20% — мера для чевапи и плескавицы (14.3). Для тефтелей в соусе можно 15%.'),
    },
    {
      text: l('Kocke i delove mašine stavi u zamrzivač.', 'Put the cubes and the grinder parts in the freezer.', 'Положи кубики и детали мясорубки в морозилку.'),
      params: [l('20–30 min', '20–30 min', '20–30 мин')],
      done: l('Ivice kocki su tvrde, a sredina meka.', 'The cube edges are hard and the centres soft.', 'Края кубиков твёрдые, середина мягкая.'),
      why: l('Topla mast se razmaže u pastu i začepi mašinu. Hladna se seče u zrnca.', 'Warm fat smears into paste and clogs the grinder. Cold fat cuts into grains.', 'Тёплый жир размазывается в пасту и забивает мясорубку. Холодный режется на крупинки.'),
    },
    {
      text: l('Sameli krupno, u činiju na ledu.', 'Grind coarse into the bowl over ice.', 'Смели крупно в миску на льду.'),
      params: [l('ploča 8 mm', '8 mm plate', 'решётка 8 мм')],
      done: l('Meso izlazi u odvojenim nitima, bela i crvena zrnca se vide.', 'The meat comes out in separate strands, with white and red grains visible.', 'Мясо выходит отдельными нитями, видны белые и красные крупинки.'),
      drawing: 'grinder',
    },
    {
      text: l('Za ćevape i pljeskavicu sameli još jednom, sitnije.', 'For ćevapi and burgers grind once more, finer.', 'Для чевапи и плескавицы смели ещё раз, мельче.'),
      params: [l('ploča 4–5 mm', '4–5 mm plate', 'решётка 4–5 мм')],
      done: l('Meso je ujednačeno, a i dalje hladno na dodir.', 'The meat is even and still cold to the touch.', 'Мясо однородное и всё ещё холодное на ощупь.'),
      why: l('Ako se meso ugrejalo, vrati ga u zamrzivač na 10 minuta pre drugog mlevenja.', 'If the meat has warmed up, put it back in the freezer for 10 minutes before the second grind.', 'Если мясо нагрелось, верни его в морозилку на 10 минут перед вторым помолом.'),
    },
    {
      text: l('Koristi ga isti dan ili ga zamrzni u ravnim kesama.', 'Use it the same day or freeze it in flat bags.', 'Используй в тот же день или заморозь в плоских пакетах.'),
      params: [l('frižider max 1 dan', 'fridge 1 day max', 'холодильник макс. 1 день'), l('zamrzivač 3 meseca', 'freezer 3 months', 'морозилка 3 месяца')],
      done: l('Mleveno meso ne stoji u frižideru duže od dana.', 'The mince never sits in the fridge longer than a day.', 'Фарш не лежит в холодильнике дольше дня.'),
      why: l('Mlevenjem površina mesa ode u sredinu (14.3), pa se kvari najbrže od svega. Pakovanje kao u 15.4.', 'Grinding moves the surface into the middle (14.3), so it spoils faster than anything else. Pack it as in 15.4.', 'При измельчении поверхность попадает внутрь (14.3), поэтому фарш портится быстрее всего. Упаковка как в 15.4.'),
      drawing: 'flatBags',
    },
  ],
  mistake: {
    title: l('Mlevenje toplog mesa sobne temperature.', 'Grinding meat at room temperature.', 'Молоть мясо комнатной температуры.'),
    fix: l(
      'Mast se otopi i razmaže, pa mleveno izgleda kao siva pasta i posle se peče suvo. Sve mora da bude ledeno hladno: meso, mast, mašina i činija.',
      'The fat melts and smears, the mince looks like grey paste and cooks up dry. Everything must be ice cold: meat, fat, grinder and bowl.',
      'Жир тает и размазывается, фарш похож на серую пасту и потом жарится сухим. Всё должно быть ледяным: мясо, жир, мясорубка и миска.',
    ),
  },
  think: {
    question: l('Imaš 600 g posne junetine. Koliko slanine dodaješ za 20% masti?', 'You have 600 g of lean beef. How much back fat for 20% fat?', 'У тебя 600 г постной говядины. Сколько шпика добавить для 20% жира?'),
    options: [l('150 g', '150 g', '150 г'), l('120 g', '120 g', '120 г'), l('200 g', '200 g', '200 г')],
    answer: 0,
    explain: l(
      'Mast je 20% od ukupnog, ne od mesa. 600 g je 80%, pa je ukupno 750 g, a mast 150 g.',
      'Fat is 20% of the total, not of the meat. 600 g is 80%, so the total is 750 g and the fat 150 g.',
      'Жир — 20% от общего веса, а не от мяса. 600 г — это 80%, значит всего 750 г, а жира 150 г.',
    ),
  },
}

const steak: Lesson = {
  id: '2.3.6',
  title: l('Biftek: odresci i stepen pečenja', 'Steak: cuts and doneness', 'Стейк: отрубы и прожарка'),
  goal: l(
    'Ispečeš odrezak od 3 cm do tačnog stepena, sa tamnom koricom i ružičastom sredinom.',
    'You cook a 3 cm steak to an exact doneness, with a dark crust and a pink centre.',
    'Ты жаришь стейк толщиной 3 см до точной прожарки, с тёмной корочкой и розовой серединой.',
  ),
  minutes: 7,
  key: { value: l('54°C', '54°C', '54°C'), label: l('medium rare', 'medium rare', 'медиум рэр') },
  need: [
    { item: l('Rozbratna ili ramstek, 3 cm', 'Rib-eye or sirloin, 3 cm', 'Рибай или стриплойн, 3 см'), qty: l('2 kom', '2', '2 шт') },
    { item: l('Liveni ili čelični tiganj', 'Cast-iron or carbon-steel pan', 'Чугунная или стальная сковорода'), qty: l('1', '1', '1') },
    { item: l('Ulje, puter, beli luk, majčina dušica', 'Oil, butter, garlic, thyme', 'Масло, сливочное масло, чеснок, тимьян'), qty: l('—', '—', '—') },
    { item: l('So, termometar', 'Salt, thermometer', 'Соль, термометр'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Biftek je najskuplja greška u kuhinji: minut previše i nema popravke. Sa termometrom nema pogađanja.',
    'Steak is the most expensive mistake in the kitchen: one minute too many and there is no fixing it. With a thermometer there is no guessing.',
    'Стейк — самая дорогая ошибка на кухне: лишняя минута, и уже не исправить. С термометром гадать не нужно.',
  ),
  steps: [
    {
      text: l('Posoli odreske 40 minuta pre pečenja ili tek u tiganju.', 'Salt the steaks 40 minutes before cooking, or right in the pan.', 'Посоли стейки за 40 минут до жарки или прямо на сковороде.'),
      params: [l('1% soli', '1% salt', '1% соли'), l('ne 10 min', 'not 10 min', 'не за 10 мин')],
      done: l('Površina je suva, bez kapljica.', 'The surface is dry, with no droplets.', 'Поверхность сухая, без капель.'),
      why: l('So posle 10 minuta izvuče vodu na površinu, a posle 40 je meso upije nazad. Između je površina mokra i neće korica.', 'After 10 minutes salt draws water to the surface; after 40 the meat reabsorbs it. In between the surface is wet and will not crust.', 'Через 10 минут соль вытягивает воду на поверхность, через 40 мясо впитывает её обратно. Между ними поверхность мокрая и корочки не будет.'),
      drawing: 'patDry',
    },
    {
      text: l('Zagrej tiganj dok ulje ne zatreperi, pa spusti odreske.', 'Heat the pan until the oil shimmers, then lay in the steaks.', 'Разогрей сковороду, пока масло не задрожит, и положи стейки.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь'), l('2 min po strani', '2 min per side', '2 мин на сторону')],
      done: l('Meso cvrči glasno od prve sekunde.', 'The meat sizzles loudly from the first second.', 'Мясо громко шипит с первой секунды.'),
      drawing: 'searRelease',
    },
    {
      text: l('Okreći na svaki minut dok ne dobiješ tamnu koricu.', 'Turn every minute until you have a dark crust.', 'Переворачивай каждую минуту до тёмной корочки.'),
      params: [l('ukupno 6–8 min za 3 cm', '6–8 min total for 3 cm', 'всего 6–8 мин на 3 см')],
      done: l('Obe strane su tamnobraon, a ivice zapečene.', 'Both sides are dark brown and the edges seared.', 'Обе стороны тёмно-коричневые, края обжарены.'),
      why: l('Česti okret greje odrezak sa obe strane ravnomerno, pa je sivi sloj ispod korice tanji.', 'Frequent turning heats the steak evenly from both sides, so the grey band under the crust is thinner.', 'Частый переворот прогревает стейк с двух сторон равномерно, и серый слой под корочкой тоньше.'),
    },
    {
      text: l('Dodaj puter, beli luk i bilje i prelivaj poslednji minut.', 'Add butter, garlic and herbs and baste for the last minute.', 'Добавь масло, чеснок и травы и поливай последнюю минуту.'),
      params: [l('skidaš 3°C pre cilja', 'off 3°C before target', 'снимаешь за 3°C до цели')],
      done: l('Termometar pokazuje 51°C za medium rare.', 'The probe reads 51°C for medium rare.', 'Термометр показывает 51°C для медиум рэр.'),
      why: l('Rare 50°C · medium rare 54°C · medium 60°C · medium well 65°C · dobro pečeno 70°C, posle odmora.', 'Rare 50°C · medium rare 54°C · medium 60°C · medium well 65°C · well done 70°C, after resting.', 'Рэр 50°C · медиум рэр 54°C · медиум 60°C · медиум вэл 65°C · вэлл дан 70°C, после отдыха.'),
      drawing: 'doneness',
    },
    {
      text: l('Odmori odreske, pa seci poprečno.', 'Rest the steaks, then slice across the grain.', 'Дай стейкам отдохнуть и нарежь поперёк волокон.'),
      params: [l('5 min', '5 min', '5 мин'), l('54°C posle odmora', '54°C after resting', '54°C после отдыха')],
      done: l('Presek je ružičast od ivice do ivice, a na dasci nema bare.', 'The cut face is pink edge to edge, with no puddle on the board.', 'Срез розовый от края до края, на доске нет лужи.'),
      drawing: 'restTent',
    },
  ],
  mistake: {
    title: l('Provera bifteka zasecanjem u sredini.', 'Checking the steak by cutting into the middle.', 'Проверять стейк надрезом в середине.'),
    fix: l(
      'Sok iscuri, a boja u tiganju vara: biftek izgleda sirovije nego što jeste, pa ga prepečeš. Termometar sa strane, u sredinu, za tri sekunde (7.5).',
      'The juice runs out, and the colour in the pan deceives: the steak looks rawer than it is, so you overcook it. Thermometer in from the side, to the centre, three seconds (7.5).',
      'Сок вытекает, а цвет на сковороде обманывает: стейк кажется сырее, чем есть, и ты его пережариваешь. Термометр сбоку, в центр, три секунды (7.5).',
    ),
  },
  think: {
    question: l('Gost hoće medium. Na koliko skidaš biftek sa vatre?', 'A guest wants medium. At what temperature do you take the steak off?', 'Гость хочет медиум. При какой температуре снимаешь стейк?'),
    options: [l('57°C', '57°C', '57°C'), l('60°C', '60°C', '60°C'), l('54°C', '54°C', '54°C')],
    answer: 0,
    explain: l(
      'Medium je 60°C posle odmora. Odrezak od 3 cm se podigne za oko 3°C dok odmara, pa skidaš na 57°C.',
      'Medium is 60°C after resting. A 3 cm steak climbs about 3°C as it rests, so you take it off at 57°C.',
      'Медиум — 60°C после отдыха. Стейк толщиной 3 см поднимается примерно на 3°C, поэтому снимаешь при 57°C.',
    ),
  },
  recipe: { name: l('Rozbratna sa puterom i majčinom dušicom', 'Rib-eye with butter and thyme', 'Рибай с маслом и тимьяном'), protein: 24, carbs: 0, fat: 22, kcal: 295 },
}

export const butcheryLessons: Lesson[] = [beefCuts, porkLamb, shoulder, rolling, mince, steak]
