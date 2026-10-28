import { l, type Lesson } from '../types'

// Grade 3 · Module 8 · Building a menu. A menu is a plan for the kitchen, a promise to the guest and a
// business document at once: its shape, the rhythm of a tasting menu, words that sell honestly, the
// matrix that shows which dishes earn, and how a menu changes with the season.

const structure: Lesson = {
  id: '3.8.1',
  title: l('Struktura menija', 'Menu structure', 'Структура меню'),
  goal: l(
    'Sastaviš meni sa pravim brojem jela, ravnomerno raspoređenim proteinima, tehnikama i stanicama.',
    'You put together a menu with the right number of dishes and an even spread of proteins, techniques and stations.',
    'Ты составляешь меню с правильным числом блюд и равномерным распределением белков, техник и станций.',
  ),
  minutes: 6,
  key: { value: l('4 · 6 · 3', '4 · 6 · 3', '4 · 6 · 3'), label: l('predjela · glavna · deserti', 'starters · mains · desserts', 'закуски · основные · десерты') },
  need: [
    { item: l('Lista jela koja želiš da služiš', 'A list of dishes you want to serve', 'Список блюд, которые хочешь подавать'), qty: l('20–30', '20–30', '20–30') },
    { item: l('Raspored stanica u kuhinji', 'The kitchen\'s station layout', 'Схема станций кухни'), qty: l('1', '1', '1') },
    { item: l('Tabela: jelo, protein, tehnika, stanica', 'A table: dish, protein, technique, station', 'Таблица: блюдо, белок, техника, станция'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kratak meni znači svežiju robu, brži servis i manje otpada. Dugačak meni deluje bogato, a u kuhinji znači pola robe koja stoji i čeka.',
    'A short menu means fresher stock, faster service and less waste. A long menu looks generous, but in the kitchen it means half the stock sitting and waiting.',
    'Короткое меню — это свежие продукты, быстрый сервис и меньше отходов. Длинное выглядит щедро, а на кухне означает, что половина продуктов лежит и ждёт.',
  ),
  steps: [
    {
      text: l('Odredi kategorije i broj jela u svakoj.', 'Set the categories and the number of dishes in each.', 'Определи категории и число блюд в каждой.'),
      params: [l('predjela 4–6', 'starters 4–6', 'закуски 4–6'), l('glavna 5–7', 'mains 5–7', 'основные 5–7'), l('deserti 3–4', 'desserts 3–4', 'десерты 3–4')],
      done: l('Meni ima jasan oblik i broj jela koji kuhinja može da drži sveže.', 'The menu has a clear shape and a number of dishes the kitchen can keep fresh.', 'У меню ясная форма и столько блюд, сколько кухня может держать свежими.'),
      why: l('Svako jelo na meniju je roba u frižideru i mise en place na stanici. Manje jela, bolje svako od njih.', 'Every dish on the menu is stock in the fridge and mise en place on a station. Fewer dishes, each one better.', 'Каждое блюдо в меню — продукты в холодильнике и мизанплас на станции. Меньше блюд — каждое лучше.'),
    },
    {
      text: l('Rasporedi proteine: ne dva jela sa istim.', 'Spread the proteins: no two dishes with the same one.', 'Распредели белки: не два блюда с одним и тем же.'),
      params: [l('riba · živina · govedina · svinjetina · povrće', 'fish · poultry · beef · pork · vegetables', 'рыба · птица · говядина · свинина · овощи')],
      done: l('U svakoj kategoriji svaki protein se javlja jednom.', 'In each category every protein appears once.', 'В каждой категории каждый белок встречается один раз.'),
      why: l('Gost bira među različitim stvarima. Dva pileća jela znače da je jedno višak.', 'Guests choose between different things. Two chicken dishes mean one of them is redundant.', 'Гость выбирает между разными вещами. Два куриных блюда — одно лишнее.'),
    },
    {
      text: l('Rasporedi jela po stanicama da nijedna ne bude zatrpana.', 'Spread the dishes across the stations so none gets buried.', 'Распредели блюда по станциям, чтобы ни одна не была перегружена.'),
      done: l('Svaka stanica ima otprilike isti broj jela na meniju.', 'Each station has roughly the same number of dishes on the menu.', 'У каждой станции примерно одинаковое число блюд в меню.'),
      why: l('Ako je pet od sedam glavnih jela sa roštilja, roštilj se zaguši na prvom talasu bonova, a ostali čekaju.', 'If five of seven mains come off the grill, the grill chokes on the first wave of tickets while the others wait.', 'Если пять из семи основных блюд с гриля, гриль задохнётся на первой волне заказов, а остальные будут ждать.'),
      drawing: 'stations',
    },
    {
      text: l('U svakoj kategoriji neka bude bar jedno jelo bez mesa.', 'Put at least one meat-free dish in every category.', 'В каждой категории должно быть хотя бы одно блюдо без мяса.'),
      done: l('Gost koji ne jede meso ima izbor u svakom delu menija.', 'A guest who does not eat meat has a choice in every part of the menu.', 'Гость, который не ест мясо, имеет выбор в каждой части меню.'),
      why: l('Za stolom od šest ljudi skoro uvek je neko ko ne jede meso. Ako nema šta da naruči, ceo sto ide drugde.', 'At a table of six there is almost always someone who does not eat meat. If there is nothing for them, the whole table goes elsewhere.', 'За столом из шести почти всегда есть кто-то, кто не ест мясо. Если ему нечего заказать, весь стол уходит в другое место.'),
    },
    {
      text: l('Proveri da se svaki sastojak koristi u bar dva jela.', 'Check that every ingredient is used in at least two dishes.', 'Проверь, что каждый продукт используется хотя бы в двух блюдах.'),
      done: l('Nema sastojka koji se kupuje samo za jedno jelo.', 'There is no ingredient bought for one dish only.', 'Нет продукта, который покупается только для одного блюда.'),
      why: l('Sastojak u jednom jelu se baca kad to jelo ne ide. U dva jela se troši (3.10.5).', 'An ingredient in one dish gets thrown out when that dish does not sell. In two dishes it gets used (3.10.5).', 'Продукт в одном блюде выбрасывается, если блюдо не продаётся. В двух — расходуется (3.10.5).'),
    },
  ],
  mistake: {
    title: l('Meni od 40 jela „da svako nađe nešto“.', 'A 40-dish menu "so everyone finds something".', 'Меню из 40 блюд, «чтобы каждый нашёл что-то».'),
    fix: l(
      'Gost se izgubi u izboru, a kuhinja drži robu za jela koja retko idu. Kraći meni sa jasnim izborom prodaje više, jer gost brže odluči i više veruje kuhinji.',
      'Guests get lost in the choice, and the kitchen holds stock for dishes that rarely sell. A shorter menu with a clear choice sells more, because guests decide faster and trust the kitchen more.',
      'Гость теряется в выборе, а кухня держит продукты для редко продающихся блюд. Короткое меню с понятным выбором продаёт больше: гость решает быстрее и больше доверяет кухне.',
    ),
  },
  think: {
    question: l('Pet od sedam glavnih jela ide sa roštilja. Šta će se desiti?', 'Five of seven mains come off the grill. What will happen?', 'Пять из семи основных блюд с гриля. Что произойдёт?'),
    options: [
      l('Roštilj se zaguši, a druge stanice čekaju', 'The grill chokes while the other stations wait', 'Гриль задохнётся, а другие станции будут ждать'),
      l('Servis će biti brži', 'Service will be faster', 'Сервис будет быстрее'),
      l('Ništa posebno', 'Nothing in particular', 'Ничего особенного'),
    ],
    answer: 0,
    explain: l(
      'Kuhinja je brza koliko njena najopterećenija stanica. Meni mora da rasporedi posao, ne samo ukuse.',
      'A kitchen is as fast as its busiest station. A menu has to spread the work, not just the flavours.',
      'Кухня так быстра, как её самая загруженная станция. Меню должно распределять работу, а не только вкусы.',
    ),
  },
}

const rhythm: Lesson = {
  id: '3.8.2',
  title: l('Ritam degustacionog menija', 'The rhythm of a tasting menu', 'Ритм дегустационного меню'),
  goal: l(
    'Poređaš pet jela tako da gost ide od laganog ka bogatom, sa osveženjem pre deserta, i ustane sit, a ne pretrpan.',
    'You order five courses so the guest moves from light to rich, with a refresher before dessert, and leaves satisfied, not stuffed.',
    'Ты выстраиваешь пять блюд так, чтобы гость шёл от лёгкого к насыщенному, с освежением перед десертом, и уходил сытым, а не переевшим.',
  ),
  minutes: 6,
  key: { value: l('5', '5', '5'), label: l('jela, od laganog ka težem', 'courses, light to rich', 'блюд, от лёгкого к тяжёлому') },
  need: [
    { item: l('Pet jela iz tvog menija', 'Five dishes from your menu', 'Пять блюд из твоего меню'), qty: l('5', '5', '5') },
    { item: l('Vaga za porcije', 'A scale for portions', 'Весы для порций'), qty: l('1', '1', '1') },
    { item: l('Radni plan unazad (2.1.2)', 'A backward work plan (2.1.2)', 'Рабочий план от конца (2.1.2)'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Degustacioni meni je priča, a ne pet nezavisnih jela. Isti tanjiri u pogrešnom redu ostave gosta umornog već posle trećeg.',
    'A tasting menu is a story, not five separate dishes. The same plates in the wrong order leave the guest tired by the third.',
    'Дегустационное меню — история, а не пять отдельных блюд. Те же тарелки в неправильном порядке утомляют гостя уже к третьей.',
  ),
  steps: [
    {
      text: l('Poređaj jela od laganog ka težem.', 'Order the courses from light to rich.', 'Расставь блюда от лёгкого к насыщенному.'),
      params: [l('hladno · riba · meso · osveženje · desert', 'cold · fish · meat · refresher · dessert', 'холодное · рыба · мясо · освежение · десерт')],
      done: l('Svako jelo je malo bogatije od prethodnog, do mesa.', 'Each course is a little richer than the one before, up to the meat.', 'Каждое блюдо чуть насыщеннее предыдущего, вплоть до мяса.'),
      why: l('Posle bogatog jela lagano deluje prazno. Obrnut red čuva ukus svakog jela.', 'After a rich course, a light one tastes empty. The reverse order protects the taste of every course.', 'После насыщенного блюда лёгкое кажется пустым. Обратный порядок бережёт вкус каждого.'),
    },
    {
      text: l('Smanji porcije: degustacija nije pet glavnih jela.', 'Shrink the portions: a tasting menu is not five main courses.', 'Уменьши порции: дегустация — это не пять основных блюд.'),
      params: [l('protein 40–60 g po jelu', 'protein 40–60 g per course', 'белок 40–60 г на блюдо')],
      done: l('Svaka porcija je izmerena i ista za sve goste.', 'Every portion is weighed and the same for every guest.', 'Каждая порция взвешена и одинакова для всех гостей.'),
      why: l('Pet punih porcija je obrok za dva dana. Gost treba da ima mesta i za desert.', 'Five full portions is two days\' food. The guest needs room for dessert.', 'Пять полных порций — еда на два дня. У гостя должно остаться место для десерта.'),
      drawing: 'portionScale',
    },
    {
      text: l('Smenjuj kontraste od jela do jela.', 'Alternate the contrasts from course to course.', 'Чередуй контрасты от блюда к блюду.'),
      params: [l('toplo/hladno · kiselo/bogato · meko/hrskavo', 'warm/cold · sour/rich · soft/crisp', 'тёплое/холодное · кислое/насыщенное · мягкое/хрустящее')],
      done: l('Dva uzastopna jela nisu ista po temperaturi ni teksturi.', 'No two courses in a row share the same temperature or texture.', 'Два блюда подряд не совпадают ни по температуре, ни по текстуре.'),
      why: l('Isto što važi za jedan tanjir (3.7.3) važi i za ceo meni: kontrast drži pažnju.', 'What holds for one plate (3.7.3) holds for the whole menu: contrast holds attention.', 'То, что верно для одной тарелки (3.7.3), верно и для всего меню: контраст держит внимание.'),
    },
    {
      text: l('Pre deserta ubaci osveženje: sorbe ili granitu.', 'Before dessert, add a refresher: sorbet or granita.', 'Перед десертом вставь освежение: сорбет или граниту.'),
      params: [l('2–3 kašike', '2–3 spoonfuls', '2–3 ложки')],
      done: l('Između mesa i deserta je mala, kisela i hladna pauza.', 'Between the meat and the dessert there is a small, sour, cold pause.', 'Между мясом и десертом — маленькая, кислая и холодная пауза.'),
      why: l('Posle mesa usta su puna masti i soli. Kiselo i hladno ih očisti, pa se desert oseti ceo.', 'After the meat the mouth is full of fat and salt. Sour and cold clears it, so the dessert tastes whole.', 'После мяса рот полон жира и соли. Кислое и холодное очищает, и десерт чувствуется целиком.'),
      drawing: 'quenelle',
    },
    {
      text: l('Odredi tempo i napravi plan kuhinje po vremenu.', 'Set the pace and build the kitchen\'s plan around the clock.', 'Задай темп и составь план кухни по времени.'),
      params: [l('15–20 min između jela', '15–20 min between courses', '15–20 мин между блюдами'), l('2–2,5 h ukupno', '2–2.5 h in total', '2–2,5 ч всего')],
      done: l('Svaka stanica zna u kom minutu ide njeno jelo za svaki sto.', 'Every station knows which minute its course goes for each table.', 'Каждая станция знает, в какую минуту идёт её блюдо для каждого стола.'),
      why: l('Prebrzo i gost se oseća poteranim, presporo i dosadi mu. Plan unazad od poslednjeg jela je iz 2.1.2.', 'Too fast and the guest feels rushed, too slow and they get bored. The backward plan from the last course is from 2.1.2.', 'Слишком быстро — гость чувствует спешку, слишком медленно — скучает. План от последнего блюда — из 2.1.2.'),
      drawing: 'backwardsPlan',
    },
  ],
  mistake: {
    title: l('Najjače jelo stavljeno prvo, „da gost bude oduševljen odmah“.', 'The strongest dish placed first, "so the guest is wowed at once".', 'Самое сильное блюдо первым, «чтобы гость сразу пришёл в восторг».'),
    fix: l(
      'Posle njega sve ostalo deluje slabije, a gost je sit pre ribe. Meni raste prema glavnom jelu, a vrhunac dolazi pred kraj.',
      'After it everything else feels weaker, and the guest is full before the fish. The menu builds towards the main course, and the peak comes near the end.',
      'После него всё остальное кажется слабее, а гость сыт ещё до рыбы. Меню нарастает к основному блюду, а кульминация ближе к концу.',
    ),
  },
  think: {
    question: l('Zašto se pre deserta služi sorbe?', 'Why is a sorbet served before dessert?', 'Зачем перед десертом подают сорбет?'),
    options: [
      l('Da očisti usta od masti i soli posle mesa', 'To clear fat and salt from the mouth after the meat', 'Чтобы очистить рот от жира и соли после мяса'),
      l('Jer je jeftin', 'Because it is cheap', 'Потому что он дешёвый'),
      l('Da gost čeka kraće', 'So the guest waits less', 'Чтобы гость ждал меньше'),
    ],
    answer: 0,
    explain: l(
      'Kiselina i hladnoća resetuju usta. Bez toga prvi zalogaj deserta se meša sa ukusom mesa.',
      'Acid and cold reset the mouth. Without that, the first bite of dessert mixes with the taste of the meat.',
      'Кислота и холод «перезагружают» рот. Без этого первый кусок десерта смешивается со вкусом мяса.',
    ),
  },
}

const describe: Lesson = {
  id: '3.8.3',
  title: l('Opis jela na meniju', 'Writing the dish description', 'Описание блюда в меню'),
  goal: l(
    'Napišeš opis jela u 8–12 reči koji je tačan, jasan i budi apetit, bez praznih prideva.',
    'You write a dish description in 8–12 words that is accurate, clear and appetising, with no empty adjectives.',
    'Ты пишешь описание блюда в 8–12 слов — точное, ясное и аппетитное, без пустых прилагательных.',
  ),
  minutes: 5,
  key: { value: l('8–12', '8–12', '8–12'), label: l('reči po opisu', 'words per description', 'слов на описание') },
  need: [
    { item: l('Recept-kartica jela (3.7.5)', 'The dish\'s recipe card (3.7.5)', 'Техкарта блюда (3.7.5)'), qty: l('1', '1', '1') },
    { item: l('Lista alergena (3.9.2)', 'The allergen list (3.9.2)', 'Список аллергенов (3.9.2)'), qty: l('1', '1', '1') },
    { item: l('Papir i olovka', 'Paper and pencil', 'Бумага и карандаш'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Gost bira jelo za nekoliko sekundi, po nekoliko reči. Opis je jedini deo jela koji gost „okusi“ pre nego što ga naruči.',
    'Guests choose a dish in seconds, from a few words. The description is the only part of the dish they "taste" before ordering.',
    'Гость выбирает блюдо за секунды по нескольким словам. Описание — единственная часть блюда, которую он «пробует» до заказа.',
  ),
  steps: [
    {
      text: l('Glavni sastojak napiši prvi.', 'Write the main ingredient first.', 'Главный продукт пиши первым.'),
      params: [l('„Brancin, …“', '"Sea bass, …"', '«Сибас, …»')],
      done: l('Prva reč kaže gostu šta jede.', 'The first word tells the guest what they are eating.', 'Первое слово говорит гостю, что он ест.'),
      why: l('Gost čita meni očima koje skeniraju. Prva reč je jedina koju sigurno pročita.', 'Guests read a menu with scanning eyes. The first word is the only one they are sure to read.', 'Гость читает меню бегло. Первое слово — единственное, которое он точно прочтёт.'),
    },
    {
      text: l('Dodaj najviše tri sastojka koje gost oseti.', 'Add at most three ingredients the guest will taste.', 'Добавь максимум три продукта, которые гость почувствует.'),
      params: [l('„Brancin, pečeni komorač, beurre blanc, kapar“', '"Sea bass, roast fennel, beurre blanc, capers"', '«Сибас, запечённый фенхель, бёр блан, каперсы»')],
      done: l('Opis ima glavni sastojak i do tri partnera.', 'The description has the main ingredient and up to three partners.', 'В описании главный продукт и до трёх партнёров.'),
      why: l('Puter, so i luk su u svakom jelu. Pišeš ono što jelo čini drugačijim.', 'Butter, salt and onion are in every dish. Write what makes this one different.', 'Масло, соль и лук есть в каждом блюде. Пиши то, что делает это блюдо особым.'),
    },
    {
      text: l('Tehniku pomeni samo kad nešto znači gostu.', 'Mention the technique only when it means something to the guest.', 'Упоминай технику, только если она что-то значит для гостя.'),
      params: [l('„braziran 6 sati“, „sa žara“', '"braised 6 hours", "from the coals"', '«томлёный 6 часов», «с углей»')],
      done: l('Tehnika u opisu govori o ukusu ili teksturi.', 'The technique in the description says something about taste or texture.', 'Техника в описании говорит о вкусе или текстуре.'),
      why: l('„Braziran 6 sati“ kaže „mekano“. „Sotiran“ ne kaže ništa gostu koji nije kuvar.', '"Braised 6 hours" says "tender". "Sautéed" says nothing to a guest who is not a cook.', '«Томлёный 6 часов» говорит «нежный». «Соте» ничего не говорит гостю, который не повар.'),
    },
    {
      text: l('Izbaci prazne prideve.', 'Cut the empty adjectives.', 'Убери пустые прилагательные.'),
      params: [l('„ukusan“, „sočan“, „savršen“', '"delicious", "juicy", "perfect"', '«вкусный», «сочный», «идеальный»')],
      done: l('U opisu nema reči koja bi mogla da stoji uz bilo koje jelo.', 'There is no word in the description that could sit next to any dish.', 'В описании нет слова, которое подошло бы к любому блюду.'),
      why: l('Svako jelo na meniju bi trebalo da je ukusno. Konkretne reči prodaju, prazne smetaju.', 'Every dish on a menu should be delicious. Specific words sell; empty ones get in the way.', 'Каждое блюдо в меню должно быть вкусным. Конкретные слова продают, пустые мешают.'),
    },
    {
      text: l('Proveri da je sve tačno i označi alergene.', 'Check that everything is true and mark the allergens.', 'Проверь, что всё правда, и отметь аллергены.'),
      params: [l('alergeni brojevima 1–14', 'allergens as numbers 1–14', 'аллергены цифрами 1–14')],
      done: l('Svaka reč odgovara tanjiru, a alergeni su označeni.', 'Every word matches the plate and the allergens are marked.', 'Каждое слово соответствует тарелке, аллергены отмечены.'),
      why: l('„Domaći“ i „sveže“ moraju biti istina. Informacija o alergenima je zakonska obaveza u EU, i u Srbiji po istom modelu.', '"Homemade" and "fresh" must be true. Allergen information is a legal requirement in the EU, and in Serbia on the same model.', '«Домашний» и «свежий» должны быть правдой. Информация об аллергенах — требование закона в ЕС, и в Сербии по той же модели.'),
    },
  ],
  mistake: {
    title: l('Opis kao roman: deset sastojaka i tri tehnike.', 'A description like a novel: ten ingredients and three techniques.', 'Описание как роман: десять продуктов и три техники.'),
    fix: l(
      'Gost odustane od čitanja i naruči nešto drugo. Opis je mamac, ne recept: glavni sastojak, tri partnera, i stop.',
      'The guest gives up reading and orders something else. A description is a hook, not a recipe: the main ingredient, three partners, and stop.',
      'Гость бросает читать и заказывает другое. Описание — приманка, а не рецепт: главный продукт, три партнёра — и всё.',
    ),
  },
  think: {
    question: l('Šta je bolji opis?', 'Which is the better description?', 'Какое описание лучше?'),
    options: [
      l('„Juneći obraz, braziran 6 sati, pire od celera, crveni luk“', '"Beef cheek, braised 6 hours, celeriac purée, red onion"', '«Говяжьи щёки, томлёные 6 часов, пюре из сельдерея, красный лук»'),
      l('„Savršeno sočan i ukusan juneći obraz po našem receptu“', '"Perfectly juicy and delicious beef cheek, our own recipe"', '«Идеально сочные и вкусные говяжьи щёки по нашему рецепту»'),
      l('„Obraz“', '"Cheek"', '«Щёки»'),
    ],
    answer: 0,
    explain: l(
      'Prvi opis kaže šta je, kakvo je i sa čim ide. Drugi je dug i ne kaže ništa konkretno, a treći je prekratak da bi prodao.',
      'The first says what it is, what it is like and what comes with it. The second is long and says nothing specific, and the third is too short to sell.',
      'Первое говорит, что это, какое и с чем. Второе длинное и ничего конкретного не говорит, а третье слишком короткое, чтобы продавать.',
    ),
  },
}

const engineering: Lesson = {
  id: '3.8.4',
  title: l('Menu engineering', 'Menu engineering', 'Меню-инжиниринг'),
  goal: l(
    'Svrstaš svako jelo u jednu od četiri grupe po prodaji i zaradi, i znaš šta da uradiš sa svakom.',
    'You sort every dish into one of four groups by sales and earnings, and know what to do with each.',
    'Ты распределяешь каждое блюдо по одной из четырёх групп по продажам и доходу и знаешь, что делать с каждой.',
  ),
  minutes: 8,
  key: { value: l('4', '4', '4'), label: l('grupe jela', 'groups of dishes', 'группы блюд') },
  need: [
    { item: l('Prodaja po jelu za mesec, iz kase', 'Sales per dish for a month, from the till', 'Продажи по блюдам за месяц из кассы'), qty: l('1', '1', '1') },
    { item: l('Food cost svakog jela (3.10.2)', 'The food cost of every dish (3.10.2)', 'Фудкост каждого блюда (3.10.2)'), qty: l('1', '1', '1') },
    { item: l('Tabela ili papir sa četiri polja', 'A spreadsheet or paper with four boxes', 'Таблица или бумага с четырьмя полями'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Jelo koje se najviše prodaje nije uvek ono koje najviše zarađuje. Matrica pokazuje koja jela nose restoran, a koja samo zauzimaju mesto na meniju.',
    'The best-selling dish is not always the one that earns the most. The matrix shows which dishes carry the restaurant and which just take up space on the menu.',
    'Самое продаваемое блюдо не всегда самое прибыльное. Матрица показывает, какие блюда держат ресторан, а какие просто занимают место в меню.',
  ),
  steps: [
    {
      text: l('Za svako jelo izračunaj maržu: cena bez PDV-a minus food cost.', 'For every dish, work out the margin: price without VAT minus food cost.', 'Для каждого блюда посчитай маржу: цена без НДС минус фудкост.'),
      params: [l('npr. 1.500 − 450 = 1.050 din', 'e.g. 1,500 − 450 = 1,050 RSD', 'например 1500 − 450 = 1050 динаров')],
      done: l('Pored svakog jela stoji marža u dinarima.', 'Every dish has its margin in dinars beside it.', 'Рядом с каждым блюдом указана маржа в динарах.'),
      why: l('Procenat food costa ne plaća račune. Dinari marže ih plaćaju.', 'A food cost percentage does not pay the bills. Margin in money does.', 'Процент фудкоста не оплачивает счета. Их оплачивает маржа в деньгах.'),
    },
    {
      text: l('Iz kase izvuci koliko se svako jelo prodalo za mesec.', 'Pull from the till how many of each dish sold in a month.', 'Возьми из кассы, сколько каждого блюда продано за месяц.'),
      done: l('Pored marže stoji broj prodatih porcija.', 'Beside the margin is the number of portions sold.', 'Рядом с маржой — число проданных порций.'),
      why: l('Mesec je dovoljno dug da izravna jedan loš vikend ili jednu veliku grupu.', 'A month is long enough to even out one bad weekend or one big group.', 'Месяц достаточно долог, чтобы сгладить один плохой уикенд или одну большую группу.'),
    },
    {
      text: l('Izračunaj dve granice: prosečnu maržu i granicu popularnosti.', 'Work out two lines: the average margin and the popularity line.', 'Посчитай две границы: среднюю маржу и границу популярности.'),
      params: [l('popularnost: 70% proseka prodaje', 'popularity: 70% of average sales', 'популярность: 70% средних продаж')],
      done: l('Imaš dva broja koji dele meni na četiri polja.', 'You have two numbers that split the menu into four boxes.', 'У тебя два числа, делящие меню на четыре поля.'),
      why: l('Granica od 70% je standard metode. Jelo iznad nje se prodaje dovoljno, čak i ako nije prvo.', 'The 70% line is the method\'s standard. A dish above it sells well enough, even if it is not the top seller.', 'Граница 70% — стандарт метода. Блюдо выше неё продаётся достаточно, даже если оно не лидер.'),
    },
    {
      text: l('Svrstaj svako jelo u jedno od četiri polja.', 'Put every dish in one of the four boxes.', 'Помести каждое блюдо в одно из четырёх полей.'),
      params: [l('zvezda · konj · zagonetka · pas', 'star · plowhorse · puzzle · dog', 'звезда · рабочая лошадка · загадка · собака')],
      done: l('Svako jelo ima svoju grupu.', 'Every dish has its group.', 'У каждого блюда своя группа.'),
      why: l('Zvezda: prodaje se i zarađuje. Konj: prodaje se, malo zarađuje. Zagonetka: zarađuje, retko se prodaje. Pas: ni jedno ni drugo.', 'Star: sells and earns. Plowhorse: sells, earns little. Puzzle: earns, rarely sells. Dog: neither.', 'Звезда: продаётся и приносит доход. Лошадка: продаётся, мало приносит. Загадка: приносит, редко продаётся. Собака: ни то, ни другое.'),
      drawing: 'menuMatrix',
    },
    {
      text: l('Za svaku grupu donesi odluku.', 'Make a decision for each group.', 'Прими решение по каждой группе.'),
      params: [l('zvezda ostaje', 'star stays', 'звезда остаётся'), l('konj: niži trošak', 'plowhorse: lower cost', 'лошадка: ниже себестоимость'), l('zagonetka: bolje mesto', 'puzzle: a better spot', 'загадка: лучшее место'), l('pas: napolje', 'dog: off', 'собака: убрать')],
      done: l('Za svako jelo je zapisano: ostaje, menja se ili ide sa menija.', 'Each dish has a note: stays, changes or comes off the menu.', 'Для каждого блюда записано: остаётся, меняется или уходит из меню.'),
      why: l('Konju smanji porciju skupog dela ili promeni prilog. Zagonetku pomeri na vrh liste i bolje je opiši (3.8.3).', 'For a plowhorse, trim the costly component or change the side. Move a puzzle to the top of its list and describe it better (3.8.3).', 'Лошадке уменьши порцию дорогой части или замени гарнир. Загадку подними в начало списка и опиши лучше (3.8.3).'),
    },
  ],
  mistake: {
    title: l('Izbačeno jelo koje se najmanje prodaje, bez gledanja marže.', 'Cutting the slowest seller without looking at its margin.', 'Убрано наименее продаваемое блюдо без взгляда на маржу.'),
    fix: l(
      'Možda je to bila zagonetka sa najvećom zaradom po porciji, koju je trebalo samo bolje prodati. Odluka se donosi po oba broja, nikad samo po jednom.',
      'It may have been a puzzle with the highest earnings per plate, which only needed selling better. Decide by both numbers, never by one.',
      'Возможно, это была загадка с самым высоким доходом на порцию, которую нужно было лишь лучше продавать. Решение принимают по обоим числам, никогда по одному.',
    ),
  },
  think: {
    question: l('Jelo se odlično prodaje, ali ima malu maržu. Šta radiš?', 'A dish sells brilliantly but has a low margin. What do you do?', 'Блюдо отлично продаётся, но маржа низкая. Что делаешь?'),
    options: [
      l('Smanjiš trošak jela ili blago podigneš cenu', 'Cut the dish\'s cost or nudge up the price', 'Снижаешь себестоимость или немного поднимаешь цену'),
      l('Izbaciš ga sa menija', 'Take it off the menu', 'Убираешь из меню'),
      l('Ništa, prodaje se', 'Nothing, it sells', 'Ничего, оно продаётся'),
    ],
    answer: 0,
    explain: l(
      'To je konj: gosti ga vole i zbog njega dolaze. Ne diraš jelo, nego trošak: manja porcija skupog dela, jeftiniji prilog ili mala korekcija cene.',
      'That is a plowhorse: guests love it and come for it. You do not touch the dish, only the cost: a smaller portion of the costly part, a cheaper side, or a small price change.',
      'Это рабочая лошадка: гости её любят и приходят ради неё. Не трогаешь блюдо, только себестоимость: меньше дорогой части, дешевле гарнир или небольшая коррекция цены.',
    ),
  },
}

const seasons: Lesson = {
  id: '3.8.5',
  title: l('Promena menija po sezoni', 'Changing the menu with the season', 'Смена меню по сезону'),
  goal: l(
    'Isplaniraš promenu menija: šta izlazi, šta ulazi, kako se novo jelo testira i kako se sala priprema.',
    'You plan a menu change: what goes, what comes in, how a new dish is tested and how the floor team is prepared.',
    'Ты планируешь смену меню: что уходит, что приходит, как тестируется новое блюдо и как готовится зал.',
  ),
  minutes: 6,
  key: { value: l('4', '4', '4'), label: l('velike promene godišnje', 'major changes a year', 'больших смены в год') },
  need: [
    { item: l('Matrica menija (3.8.4)', 'The menu matrix (3.8.4)', 'Матрица меню (3.8.4)'), qty: l('1', '1', '1') },
    { item: l('Kalendar sezone za tvoj kraj', 'A seasonal calendar for your region', 'Сезонный календарь твоего региона'), qty: l('1', '1', '1') },
    { item: l('Recept-kartice novih jela (3.7.5)', 'Recipe cards for the new dishes (3.7.5)', 'Техкарты новых блюд (3.7.5)'), qty: l('3–5', '3–5', '3–5') },
  ],
  why: l(
    'Meni koji se ne menja dosadi i gostima i kuvarima. Meni koji se menja bez plana ruši servis. Plan drži oba.',
    'A menu that never changes bores guests and cooks alike. A menu that changes without a plan wrecks service. A plan keeps both in check.',
    'Неизменное меню надоедает и гостям, и поварам. Меню, меняющееся без плана, рушит сервис. План держит и то, и другое.',
  ),
  steps: [
    {
      text: l('Planiraj četiri velike promene godišnje, po sezoni.', 'Plan four major changes a year, one per season.', 'Планируй четыре большие смены в год, по сезону.'),
      params: [l('mart · jun · septembar · novembar', 'March · June · September · November', 'март · июнь · сентябрь · ноябрь')],
      done: l('Datumi promena su u kalendaru kuhinje.', 'The change dates are in the kitchen calendar.', 'Даты смен в календаре кухни.'),
      why: l('Sezona ne čeka. Meni sa šparglom mora biti spreman pre nego što špargla stigne na pijacu.', 'The season does not wait. An asparagus menu must be ready before asparagus reaches the market.', 'Сезон не ждёт. Меню со спаржей должно быть готово до того, как спаржа появится на рынке.'),
    },
    {
      text: l('Novo jelo prvo ponudi kao specijal, dve nedelje.', 'Offer a new dish as a special first, for two weeks.', 'Новое блюдо сначала предложи как спецпредложение на две недели.'),
      params: [l('2 nedelje', '2 weeks', '2 недели')],
      done: l('Znaš koliko se prodalo i šta su gosti rekli.', 'You know how many sold and what guests said.', 'Ты знаешь, сколько продано и что сказали гости.'),
      why: l('Specijal je jeftin test. Jelo koje ne prođe kao specijal ne bi prošlo ni na meniju.', 'A special is a cheap test. A dish that fails as a special would fail on the menu too.', 'Спецпредложение — дешёвый тест. Блюдо, не прошедшее как спец, не прошло бы и в меню.'),
    },
    {
      text: l('Menjaj po matrici: psi izlaze prvi.', 'Change by the matrix: the dogs go first.', 'Меняй по матрице: собаки уходят первыми.'),
      done: l('Lista izlaska je napravljena po brojevima, ne po osećaju.', 'The list of what leaves is made by the numbers, not by feel.', 'Список уходящих блюд составлен по цифрам, а не по ощущениям.'),
      why: l('Kuvar se veže za svoja jela. Brojevi nisu vezani ni za jedno (3.8.4).', 'Cooks grow attached to their dishes. The numbers are attached to none (3.8.4).', 'Повар привязывается к своим блюдам. Цифры не привязаны ни к одному (3.8.4).'),
    },
    {
      text: l('Za svako novo jelo pripremi: karticu, cenu, alergene i obuku kuvara.', 'For every new dish prepare: the card, the price, the allergens and cook training.', 'Для каждого нового блюда подготовь: карту, цену, аллергены и обучение поваров.'),
      done: l('Svaki kuvar na stanici je napravio novo jelo bar jednom pre prvog dana.', 'Every cook on the station has made the new dish at least once before day one.', 'Каждый повар на станции хотя бы раз приготовил новое блюдо до первого дня.'),
      why: l('Prvi servis sa novim menijem ne sme da bude i prva proba za kuvara.', 'The first service with a new menu must not also be the cook\'s first attempt.', 'Первый сервис с новым меню не должен быть и первой пробой повара.'),
    },
    {
      text: l('Napravi degustaciju za salu pre prvog dana.', 'Hold a tasting for the floor team before day one.', 'Проведи дегустацию для зала до первого дня.'),
      done: l('Svaki konobar je probao svako novo jelo i zna da ga opiše.', 'Every server has tasted every new dish and can describe it.', 'Каждый официант попробовал каждое новое блюдо и умеет его описать.'),
      why: l('Konobar prodaje ono što je probao. Jelo koje nije probao, ne preporučuje.', 'Servers sell what they have tasted. A dish they have not tasted, they do not recommend.', 'Официант продаёт то, что пробовал. Блюдо, которое не пробовал, не рекомендует.'),
    },
  ],
  mistake: {
    title: l('Ceo meni promenjen preko noći.', 'The whole menu changed overnight.', 'Всё меню сменено за одну ночь.'),
    fix: l(
      'Kuhinja uči deset jela odjednom, servis kasni, a gosti gube omiljena jela. Menjaj trećinu menija odjednom, a zvezde ostavi.',
      'The kitchen learns ten dishes at once, service runs late and guests lose their favourites. Change a third of the menu at a time and keep the stars.',
      'Кухня учит десять блюд сразу, сервис опаздывает, а гости теряют любимые блюда. Меняй треть меню за раз, а звёзды оставляй.',
    ),
  },
  think: {
    question: l('Kako se testira novo jelo pre nego što uđe na meni?', 'How is a new dish tested before it goes on the menu?', 'Как тестируют новое блюдо до включения в меню?'),
    options: [
      l('Kao specijal, nekoliko nedelja', 'As a special, for a few weeks', 'Как спецпредложение несколько недель'),
      l('Proba šef i to je dovoljno', 'The chef tastes it and that is enough', 'Шеф пробует, и этого достаточно'),
      l('Odmah ide na meni', 'It goes straight on the menu', 'Сразу в меню'),
    ],
    answer: 0,
    explain: l(
      'Specijal daje prave podatke: koliko gosti naručuju, šta kažu i kako kuhinja stiže. Šefov ukus je početak, a ne kraj testa.',
      'A special gives real data: how often guests order it, what they say and how the kitchen copes. The chef\'s palate is the start of the test, not the end.',
      'Спецпредложение даёт реальные данные: как часто заказывают, что говорят и как справляется кухня. Вкус шефа — начало теста, а не конец.',
    ),
  },
}

export const menuLessons: Lesson[] = [structure, rhythm, describe, engineering, seasons]
