import { l, type Lesson } from '../types'

// Grade 2 · Module 11 · World kitchens: Italy. Few ingredients, each one exact: fresh pasta by hand,
// gnocchi, a slow ragù, and the emulsions of Roman pasta, where starch and fat become the sauce.

const eggPasta: Lesson = {
  id: '2.11.1',
  title: l('Sveža pasta od jaja', 'Fresh egg pasta', 'Свежая яичная паста'),
  goal: l(
    'Umesiš glatko, elastično testo za pastu od brašna i jaja, rukama.',
    'You knead a smooth, elastic pasta dough from flour and eggs, by hand.',
    'Ты вымешиваешь гладкое эластичное тесто для пасты из муки и яиц руками.',
  ),
  minutes: 7,
  key: { value: l('100 g : 1', '100 g : 1', '100 г : 1'), label: l('brašno : jaje', 'flour : egg', 'мука : яйцо') },
  need: [
    { item: l('Brašno tipo 00 ili T-400', 'Tipo 00 or plain flour', 'Мука типо 00 или пшеничная'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Jaja, sobne temperature', 'Eggs, room temperature', 'Яйца комнатной температуры'), qty: l('4 kom', '4', '4 шт') },
    { item: l('Griz za posipanje', 'Semolina for dusting', 'Манка для подпыла'), qty: l('50 g', '50 g', '50 г') },
    { item: l('Viljuška, strugač, folija', 'Fork, scraper, film', 'Вилка, скребок, плёнка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Sveža pasta je stara koliko i Italija: brašno i jaje, ništa više. Kuva se za 2 minuta i upija sos bolje od suve. Pravilo je jedno jaje na 100 g brašna.',
    'Fresh pasta is as old as Italy: flour and egg, nothing more. It cooks in 2 minutes and takes up sauce better than dried. The rule is one egg per 100 g of flour.',
    'Свежая паста стара, как Италия: мука и яйцо, ничего больше. Варится 2 минуты и впитывает соус лучше сухой. Правило — одно яйцо на 100 г муки.',
  ),
  steps: [
    {
      text: l('Napravi krug od brašna na stolu sa udubljenjem u sredini.', 'Make a mound of flour on the table with a well in the middle.', 'Сделай на столе горку муки с углублением в центре.'),
      params: [l('400 g', '400 g', '400 г')],
      done: l('Zidovi kruga su dovoljno visoki da drže jaja.', 'The walls of the well are high enough to hold the eggs.', 'Стенки достаточно высокие, чтобы удержать яйца.'),
      drawing: 'flourWell',
    },
    {
      text: l('Razbij jaja u sredinu i viljuškom uvlači brašno sa unutrašnje ivice.', 'Crack the eggs into the middle and draw in flour from the inner wall with a fork.', 'Разбей яйца в центр и вилкой подтягивай муку с внутренней стенки.'),
      done: l('U sredini je gusta pasta, a spoljni zid i dalje stoji.', 'There is a thick paste in the middle and the outer wall still stands.', 'В центре густая масса, внешняя стенка ещё держится.'),
      why: l('Brašno ulazi postepeno, kao mleko u bešamel (9.1). Ako zid pukne, jaje pobegne po stolu.', 'The flour goes in gradually, like milk into béchamel (9.1). If the wall breaks, the egg runs across the table.', 'Мука входит постепенно, как молоко в бешамель (9.1). Если стенка прорвётся, яйцо убежит по столу.'),
    },
    {
      text: l('Strugačem spoji ostatak brašna i mesi.', 'Bring the rest of the flour together with the scraper and knead.', 'Скребком собери остаток муки и меси.'),
      params: [l('8–10 min', '8–10 min', '8–10 мин')],
      done: l('Testo je glatko, svilenkasto i vraća se kad ga pritisneš.', 'The dough is smooth, silky and springs back when pressed.', 'Тесто гладкое, шелковистое и пружинит при нажатии.'),
      why: l('Testo od jaja je tvrđe od hlebnog. Na početku deluje suvo i ispucalo, a mešenje ga spoji. Ne dodaj vodu prerano.', 'Egg dough is stiffer than bread dough. At first it looks dry and cracked, and kneading brings it together. Do not add water too soon.', 'Яичное тесто плотнее хлебного. Сначала оно кажется сухим и трескается, а замес его соединяет. Не добавляй воду раньше времени.'),
      drawing: 'kneadDough',
    },
    {
      text: l('Ako je i posle 5 minuta suvo, dodaj kašičicu vode.', 'If it is still dry after 5 minutes, add a teaspoon of water.', 'Если через 5 минут тесто всё ещё сухое, добавь чайную ложку воды.'),
      done: l('Nema suvih mrvica, testo je jednolično žuto.', 'No dry crumbs remain and the dough is evenly yellow.', 'Сухих крошек нет, тесто равномерно жёлтое.'),
      why: l('Jaja nisu iste veličine. Brašno se ne dodaje pa voda, nego obrnuto, kašičicu po kašičicu.', 'Eggs are not all the same size. You do not add flour then water; you add water a teaspoon at a time.', 'Яйца разного размера. Не добавляют муку, а потом воду — добавляют воду по чайной ложке.'),
    },
    {
      text: l('Umotaj u foliju i ostavi da odmori.', 'Wrap in film and let it rest.', 'Заверни в плёнку и дай отдохнуть.'),
      params: [l('30 min, sobna temperatura', '30 min, room temperature', '30 мин, комнатная температура')],
      done: l('Testo je mekše i lakše se razvlači.', 'The dough is softer and rolls out more easily.', 'Тесто мягче и легче раскатывается.'),
      why: l('Gluten se opusti, kao kod palačinki (2.5.1). Neodmorno testo se vraća pod oklagijom.', 'The gluten relaxes, as with crêpes (2.5.1). Unrested dough springs back under the rolling pin.', 'Глютен расслабляется, как в блинах (2.5.1). Неотдохнувшее тесто сжимается под скалкой.'),
    },
  ],
  mistake: {
    title: l('Testo od jaja mešeno 2 minuta.', 'Egg dough kneaded for 2 minutes.', 'Яичное тесто месили 2 минуты.'),
    fix: l(
      'Gluten se ne razvije i pasta se u vodi kida i raspada. Mešenje je 8–10 minuta, dok testo ne postane svilenkasto i elastično. Test prozora iz 2.6.2 važi i ovde.',
      'The gluten does not develop and the pasta tears and falls apart in the water. Kneading takes 8–10 minutes, until the dough is silky and elastic. The windowpane test from 2.6.2 applies here too.',
      'Глютен не развивается, и паста рвётся и разваливается в воде. Замес — 8–10 минут, пока тесто не станет шелковистым и эластичным. Тест «окно» из 2.6.2 работает и здесь.',
    ),
  },
  think: {
    question: l('Imaš 250 g brašna. Koliko jaja?', 'You have 250 g of flour. How many eggs?', 'У тебя 250 г муки. Сколько яиц?'),
    options: [
      l('2 cela i jedno žumance', '2 whole eggs and one yolk', '2 целых и один желток'),
      l('5 jaja', '5 eggs', '5 яиц'),
      l('1 jaje', '1 egg', '1 яйцо'),
    ],
    answer: 0,
    explain: l(
      'Pravilo je 100 g na jaje, pa za 250 g treba dva i po. Pola jajeta je u praksi žumance: daje boju i ukus.',
      'The rule is 100 g per egg, so 250 g needs two and a half. Half an egg in practice is a yolk: it adds colour and flavour.',
      'Правило — 100 г на яйцо, значит на 250 г нужно два с половиной. Половина яйца на практике — желток: он даёт цвет и вкус.',
    ),
  },
}

const ribbons: Lesson = {
  id: '2.11.2',
  title: l('Tagliatelle i pappardelle', 'Tagliatelle and pappardelle', 'Тальятелле и паппарделле'),
  goal: l(
    'Razvučeš testo na 1 mm i iseceš trake jednake širine koje se kuvaju za 2 minuta.',
    'You roll the dough to 1 mm and cut even ribbons that cook in 2 minutes.',
    'Ты раскатываешь тесто до 1 мм и нарезаешь ровные ленты, которые варятся 2 минуты.',
  ),
  minutes: 7,
  key: { value: l('1 mm', '1 mm', '1 мм'), label: l('debljina', 'thickness', 'толщина') },
  need: [
    { item: l('Testo od jaja (2.11.1)', 'Egg dough (2.11.1)', 'Яичное тесто (2.11.1)'), qty: l('400 g brašna', '400 g flour', '400 г муки') },
    { item: l('Mašina za pastu ili duga oklagija', 'Pasta machine or a long rolling pin', 'Паста-машина или длинная скалка'), qty: l('1', '1', '1') },
    { item: l('Griz za posipanje, oštar nož', 'Semolina for dusting, sharp knife', 'Манка для подпыла, острый нож'), qty: l('—', '—', '—') },
    { item: l('Veliki lonac, so', 'Large pot, salt', 'Большая кастрюля, соль'), qty: l('10 g/l', '10 g/l', '10 г/л') },
  ],
  why: l(
    'Debljina je cela tajna sveže paste. Predebela je žilava i ne upija sos, pretanka se raspada. Na 1 mm vidiš senku ruke kroz testo.',
    'Thickness is the whole secret of fresh pasta. Too thick, it is chewy and does not take up sauce; too thin, it falls apart. At 1 mm you can see the shadow of your hand through the dough.',
    'Толщина — весь секрет свежей пасты. Слишком толстая — жёсткая и не впитывает соус, слишком тонкая — разваливается. При 1 мм сквозь тесто видна тень руки.',
  ),
  steps: [
    {
      text: l('Podeli testo na četiri dela i propusti prvi kroz najširi otvor.', 'Divide the dough into four and pass the first piece through the widest setting.', 'Раздели тесто на четыре части и пропусти первую через самое широкое деление.'),
      params: [l('preklopi na tri i ponovi 2 puta', 'fold in three and repeat twice', 'сложи втрое и повтори 2 раза')],
      done: l('Traka testa je glatka i ravnih ivica.', 'The sheet is smooth with straight edges.', 'Пласт теста гладкий, с ровными краями.'),
      why: l('Preklapanje na najširem otvoru dovrši mešenje i ispravi ivice, kao kod lisnatog (2.5.4).', 'Folding at the widest setting finishes the kneading and squares the edges, as with puff (2.5.4).', 'Складывание на широком делении завершает замес и выравнивает края, как у слоёного (2.5.4).'),
      drawing: 'pastaMachine',
    },
    {
      text: l('Stanjuj testo korak po korak, bez preskakanja.', 'Thin the dough one setting at a time, without skipping.', 'Утончай тесто деление за делением, не пропуская.'),
      params: [l('do 1 mm', 'to 1 mm', 'до 1 мм')],
      done: l('Kroz traku vidiš senku svoje ruke.', 'You can see the shadow of your hand through the sheet.', 'Сквозь пласт видна тень твоей руки.'),
      why: l('Preskakanje cepa testo. Ako se lepi, pospi ga grizom, ne brašnom.', 'Skipping settings tears the dough. If it sticks, dust it with semolina, not flour.', 'Пропуск делений рвёт тесто. Если липнет, посыпь манкой, а не мукой.'),
    },
    {
      text: l('Pospi traku grizom, labavo urolaj i iseci nožem.', 'Dust the sheet with semolina, roll it loosely and cut with a knife.', 'Посыпь пласт манкой, свободно сверни и нарежь ножом.'),
      params: [l('tagliatelle 6–8 mm', 'tagliatelle 6–8 mm', 'тальятелле 6–8 мм'), l('pappardelle 2–3 cm', 'pappardelle 2–3 cm', 'паппарделле 2–3 см')],
      done: l('Sve trake su iste širine.', 'All the ribbons are the same width.', 'Все ленты одной ширины.'),
      drawing: 'cutRibbons',
    },
    {
      text: l('Odmah rastresi trake i složi ih u gnezda.', 'Shake the ribbons apart straight away and form them into nests.', 'Сразу разбери ленты и сложи их гнёздами.'),
      done: l('Trake se ne lepe jedna za drugu.', 'The ribbons do not stick to one another.', 'Ленты не слипаются.'),
      why: l('Gnezda možeš da osušiš sat vremena ili zamrzneš. Sveža traju dan u frižideru.', 'Nests can dry for an hour or be frozen. Fresh ones keep a day in the fridge.', 'Гнёзда можно подсушить час или заморозить. Свежие хранятся день в холодильнике.'),
    },
    {
      text: l('Kuvaj u posoljenoj vodi kratko i završi u sosu.', 'Cook briefly in salted water and finish in the sauce.', 'Вари коротко в подсоленной воде и доведи в соусе.'),
      params: [l('2–3 min', '2–3 min', '2–3 мин'), l('10 g soli na litar', '10 g salt per litre', '10 г соли на литр')],
      done: l('Pasta je mekana sa blagim otporom i sjaji se od sosa.', 'The pasta is tender with slight bite and glossy with sauce.', 'Паста мягкая, с лёгкой упругостью, блестит от соуса.'),
      why: l('Sveža pasta je gotova za trećinu vremena suve. Završi je u sosu sa kutlačom vode od kuvanja (10.2).', 'Fresh pasta is done in a third of the time of dried. Finish it in the sauce with a ladle of the cooking water (10.2).', 'Свежая паста готова втрое быстрее сухой. Доведи её в соусе с половником воды от варки (10.2).'),
      drawing: 'pastaWater',
    },
  ],
  mistake: {
    title: l('Testo razvijeno na 3 mm "da ne pukne".', 'Dough rolled to 3 mm "so it does not tear".', 'Тесто раскатано до 3 мм, «чтобы не порвалось».'),
    fix: l(
      'Debela sveža pasta posle kuvanja je gumena i teška, a sos klizi sa nje. Idi do 1 mm, polako, korak po korak. Pukotina se popravi preklapanjem i ponovnim provlačenjem.',
      'Thick fresh pasta turns rubbery and heavy when cooked, and the sauce slides off. Go down to 1 mm, slowly, setting by setting. A tear is fixed by folding and rolling through again.',
      'Толстая свежая паста после варки резиновая и тяжёлая, соус с неё соскальзывает. Раскатывай до 1 мм медленно, деление за делением. Разрыв исправляют, сложив и прокатав снова.',
    ),
  },
  think: {
    question: l('Zašto se sveža pasta posipa grizom, a ne brašnom?', 'Why is fresh pasta dusted with semolina rather than flour?', 'Почему свежую пасту посыпают манкой, а не мукой?'),
    options: [
      l('Griz je krupan, ne upija se u testo i ne zamuti vodu', 'Semolina is coarse, does not soak into the dough and does not cloud the water', 'Манка крупная, не впитывается в тесто и не мутит воду'),
      l('Griz je slaniji', 'Semolina is saltier', 'Манка солонее'),
      l('Griz daje žutu boju', 'Semolina makes it yellow', 'Манка даёт жёлтый цвет'),
    ],
    answer: 0,
    explain: l(
      'Fino brašno se zalepi za vlažno testo i postane lepak. Krupni griz ostane zrnast, drži trake razdvojene i u vodi samo otpadne.',
      'Fine flour sticks to moist dough and turns to glue. Coarse semolina stays grainy, keeps the ribbons apart and simply falls off in the water.',
      'Мелкая мука прилипает к влажному тесту и превращается в клей. Крупная манка остаётся зернистой, держит ленты раздельно и в воде просто отпадает.',
    ),
  },
  recipe: { name: l('Tagliatelle sa puterom i parmezanom', 'Tagliatelle with butter and Parmesan', 'Тальятелле с маслом и пармезаном'), protein: 9, carbs: 30, fat: 9, kcal: 235 },
}

const ravioli: Lesson = {
  id: '2.11.3',
  title: l('Ravioli', 'Ravioli', 'Равиоли'),
  goal: l(
    'Napraviš raviole sa rikotom i spanaćem koji se u vodi ne otvore.',
    'You make ricotta and spinach ravioli that do not burst open in the water.',
    'Ты лепишь равиоли с рикоттой и шпинатом, которые не раскрываются в воде.',
  ),
  minutes: 8,
  key: { value: l('0', '0', '0'), label: l('vazduha u ravioli', 'air in the ravioli', 'воздуха в равиоли') },
  need: [
    { item: l('Testo od jaja (2.11.1)', 'Egg dough (2.11.1)', 'Яичное тесто (2.11.1)'), qty: l('300 g brašna', '300 g flour', '300 г муки') },
    { item: l('Rikota, dobro oceđena', 'Ricotta, well drained', 'Рикотта, хорошо отжатая'), qty: l('250 g', '250 g', '250 г') },
    { item: l('Spanać, blanširan i isceđen', 'Spinach, blanched and squeezed', 'Шпинат, бланшированный и отжатый'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Parmezan, žumance, muskatni oraščić', 'Parmesan, egg yolk, nutmeg', 'Пармезан, желток, мускатный орех'), qty: l('50 g + 1', '50 g + 1', '50 г + 1') },
    { item: l('Puter i žalfija za sos', 'Butter and sage for the sauce', 'Масло и шалфей для соуса'), qty: l('60 g + 8 listova', '60 g + 8 leaves', '60 г + 8 листьев') },
  ],
  why: l(
    'Ravioli su pasta i fil u jednom zalogaju. Dve greške ih uništavaju: vlažan fil i vazduh oko fila. Obe se rešavaju pre kuvanja.',
    'Ravioli are pasta and filling in one bite. Two mistakes ruin them: a wet filling and air around the filling. Both are solved before cooking.',
    'Равиоли — паста и начинка в одном кусочке. Их губят две ошибки: влажная начинка и воздух вокруг неё. Обе решаются до варки.',
  ),
  steps: [
    {
      text: l('Iscedi spanać u krpi i umešaj ga sa rikotom, sirom i žumancetom.', 'Squeeze the spinach dry in a cloth and mix it with the ricotta, cheese and yolk.', 'Отожми шпинат в полотенце и смешай с рикоттой, сыром и желтком.'),
      done: l('Fil je gust i drži oblik na kašici.', 'The filling is thick and holds its shape on a spoon.', 'Начинка густая и держит форму на ложке.'),
      why: l('Vlažan fil omekša testo iznutra i ravioli se otvore. Spanać isceđuj dok ne prestane da kaplje.', 'A wet filling softens the dough from inside and the ravioli burst. Squeeze the spinach until it stops dripping.', 'Влажная начинка размягчает тесто изнутри, и равиоли раскрываются. Отжимай шпинат, пока не перестанет капать.'),
    },
    {
      text: l('Razvij testo na 0.8 mm i stavi kašičice fila u red.', 'Roll the dough to 0.8 mm and spoon the filling in a row.', 'Раскатай тесто до 0,8 мм и разложи начинку по чайной ложке в ряд.'),
      params: [l('razmak 4 cm', '4 cm apart', 'через 4 см'), l('1 kašičica', '1 teaspoon', '1 чайная ложка')],
      done: l('Gomilice fila su na jednakom razmaku, sredinom trake.', 'The mounds of filling are evenly spaced down the middle of the sheet.', 'Горки начинки на равном расстоянии посередине пласта.'),
      why: l('Tanje nego tagliatelle, jer su na ivicama dva sloja testa.', 'Thinner than tagliatelle, because the edges are two layers of dough.', 'Тоньше, чем тальятелле, ведь по краям два слоя теста.'),
      drawing: 'ravioliSheet',
    },
    {
      text: l('Premaži testo oko fila vodom i pokrij drugom trakom.', 'Brush the dough around the filling with water and cover with a second sheet.', 'Смажь тесто вокруг начинки водой и накрой вторым пластом.'),
      done: l('Gornja traka leži preko fila bez zatezanja.', 'The top sheet lies over the filling without stretching.', 'Верхний пласт лежит на начинке без натяжения.'),
    },
    {
      text: l('Prstima istisni vazduh oko svakog fila, od sredine ka ivici.', 'Press the air out around each mound with your fingers, from the centre outwards.', 'Пальцами вытесни воздух вокруг каждой горки от центра к краю.'),
      done: l('Testo se priljubilo uz fil, bez mehurića.', 'The dough hugs the filling with no bubbles.', 'Тесто плотно облегает начинку, без пузырьков.'),
      why: l('Vazduh u vreloj vodi se širi i rascepi raviolu iznutra. Ovo je najvažniji korak.', 'Air expands in boiling water and splits the ravioli from inside. This is the most important step.', 'Воздух в кипятке расширяется и разрывает равиоли изнутри. Это самый важный шаг.'),
    },
    {
      text: l('Iseci raviole i kuvaj ih dok ne isplivaju, pa još minut.', 'Cut the ravioli and cook until they float, then a minute more.', 'Нарежь равиоли и вари, пока не всплывут, и ещё минуту.'),
      params: [l('3–4 min', '3–4 min', '3–4 мин'), l('tiho ključanje', 'gentle boil', 'слабое кипение'), l('puter i žalfija', 'butter and sage', 'масло и шалфей')],
      done: l('Ravioli su celi, a ivice mekane.', 'The ravioli are whole and the edges tender.', 'Равиоли целые, края мягкие.'),
      why: l('Burno ključanje ih udara jedan o drugi. Prelij ih braon puterom sa žalfijom (2.10.1).', 'A rolling boil knocks them against each other. Dress them with brown butter and sage (2.10.1).', 'Бурное кипение бьёт их друг о друга. Полей коричневым маслом с шалфеем (2.10.1).'),
      drawing: 'noisette',
    },
  ],
  mistake: {
    title: l('Previše fila "da budu puni".', 'Too much filling "to make them generous".', 'Слишком много начинки, «чтобы были полные».'),
    fix: l(
      'Fil izađe na ivice, testo se ne zalepi i ravioli se otvore u vodi. Kašičica fila i 1 cm čistog testa oko njega. Pun ravioli je onaj koji ostane zatvoren.',
      'The filling spreads to the edges, the dough will not seal and the ravioli open in the water. A teaspoon of filling and 1 cm of clean dough around it. A full ravioli is one that stays closed.',
      'Начинка выходит к краям, тесто не склеивается, и равиоли раскрываются в воде. Чайная ложка начинки и 1 см чистого теста вокруг. Полная равиоли — та, что осталась закрытой.',
    ),
  },
  think: {
    question: l('Ravioli se otvaraju u vodi. Najverovatniji uzrok?', 'The ravioli burst in the water. The likeliest cause?', 'Равиоли раскрываются в воде. Самая вероятная причина?'),
    options: [
      l('Vazduh oko fila ili vlažan fil', 'Air around the filling or a wet filling', 'Воздух вокруг начинки или влажная начинка'),
      l('Premalo soli u vodi', 'Too little salt in the water', 'Мало соли в воде'),
      l('Testo je pretanko', 'The dough is too thin', 'Тесто слишком тонкое'),
    ],
    answer: 0,
    explain: l(
      'Oba stvaraju paru unutar ravioli dok se kuvaju. Isceđen fil i istisnut vazduh rešavaju 90% problema.',
      'Both make steam inside the ravioli as they cook. A squeezed filling and pressed-out air solve 90% of the problem.',
      'Оба создают пар внутри равиоли во время варки. Отжатая начинка и вытесненный воздух решают 90% проблемы.',
    ),
  },
  recipe: { name: l('Ravioli sa rikotom i spanaćem', 'Ricotta and spinach ravioli', 'Равиоли с рикоттой и шпинатом'), protein: 10, carbs: 22, fat: 12, kcal: 235 },
}

const gnocchi: Lesson = {
  id: '2.11.4',
  title: l('Njoke od krompira', 'Potato gnocchi', 'Картофельные ньокки'),
  goal: l(
    'Napraviš lagane njoke od krompira koje se tope u ustima, a ne lepe za zube.',
    'You make light potato gnocchi that melt in the mouth rather than sticking to your teeth.',
    'Ты готовишь лёгкие картофельные ньокки, которые тают во рту, а не липнут к зубам.',
  ),
  minutes: 7,
  key: { value: l('25%', '25%', '25%'), label: l('brašna na krompir', 'flour to potato', 'муки к картофелю') },
  need: [
    { item: l('Brašnjav krompir', 'Floury potatoes', 'Рассыпчатый картофель'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Brašno', 'Flour', 'Мука'), qty: l('~250 g', '~250 g', '~250 г') },
    { item: l('Žumance, so, muskatni oraščić', 'Egg yolk, salt, nutmeg', 'Желток, соль, мускатный орех'), qty: l('1 + 8 g', '1 + 8 g', '1 + 8 г') },
    { item: l('Presa za krompir ili sito', 'Potato ricer or sieve', 'Пресс для картофеля или сито'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Njoke su krompir sa što manje brašna. Svaki gram brašna više znači teže njoke. Cela veština je u suvom krompiru i laganoj ruci.',
    'Gnocchi are potato with as little flour as possible. Every extra gram of flour makes them heavier. The whole skill is dry potatoes and a light hand.',
    'Ньокки — это картофель с минимумом муки. Каждый лишний грамм муки делает их тяжелее. Всё мастерство — в сухом картофеле и лёгкой руке.',
  ),
  steps: [
    {
      text: l('Ispeci krompir u ljusci u rerni, ne kuvaj ga u vodi.', 'Bake the potatoes in their skins in the oven; do not boil them.', 'Запеки картофель в мундире в духовке, а не вари в воде.'),
      params: [l('200°C', '200°C', '200°C'), l('50–60 min', '50–60 min', '50–60 мин')],
      done: l('Nož ulazi u krompir bez otpora.', 'A knife slides into the potato without resistance.', 'Нож входит в картофель без сопротивления.'),
      why: l('Pečen krompir je suv. Kuvan upije vodu, pa traži više brašna, a njoke postanu teške.', 'Baked potato is dry. Boiled potato soaks up water and needs more flour, making the gnocchi heavy.', 'Запечённый картофель сухой. Варёный впитывает воду и требует больше муки, и ньокки тяжелеют.'),
    },
    {
      text: l('Oljušti ga vrelog i propusti kroz presu, pa raširi da ispari.', 'Peel it hot, pass it through the ricer, then spread it out to steam off.', 'Очисти горячим, пропусти через пресс и распредели, чтобы испарилась влага.'),
      params: [l('5 min', '5 min', '5 мин')],
      done: l('Krompir je rastresit kao sneg i više se ne puši jako.', 'The potato is as loose as snow and no longer steams heavily.', 'Картофель рассыпчатый, как снег, и уже не сильно парит.'),
      why: l('Para je voda koja odlazi. Isto kao kod pirea (10.3): suv krompir, bolji rezultat.', 'The steam is water leaving. The same as with mash (10.3): dry potato, better result.', 'Пар — это уходящая вода. Как с пюре (10.3): сухой картофель — лучший результат.'),
      drawing: 'steamDry',
    },
    {
      text: l('Dodaj žumance, so i brašno i spoji testo što kraće.', 'Add the yolk, salt and flour and bring the dough together as briefly as possible.', 'Добавь желток, соль и муку и собери тесто как можно быстрее.'),
      params: [l('brašno 25% krompira', 'flour 25% of the potato', 'мука 25% от картофеля'), l('30 s mešanja', '30 s of mixing', '30 с замешивания')],
      done: l('Testo je mekano, malo lepljivo i drži se zajedno.', 'The dough is soft, slightly tacky and holds together.', 'Тесто мягкое, чуть липкое и держится вместе.'),
      why: l('Ovo nije hleb. Mešenje razvija gluten, a njoke postanu gumene.', 'This is not bread. Kneading develops gluten and the gnocchi turn rubbery.', 'Это не хлеб. Замес развивает глютен, и ньокки становятся резиновыми.'),
    },
    {
      text: l('Razvaljaj rolne debljine prsta i iseci jastučiće.', 'Roll ropes as thick as a finger and cut into pillows.', 'Раскатай жгуты толщиной с палец и нарежь подушечки.'),
      params: [l('2 cm', '2 cm', '2 см'), l('viljuškom brazde, po želji', 'fork ridges, optional', 'бороздки вилкой, по желанию')],
      done: l('Njoke su iste veličine i ne lepe se.', 'The gnocchi are all the same size and do not stick.', 'Ньокки одного размера и не слипаются.'),
      why: l('Brazde od viljuške drže sos, kao kanal.', 'Fork ridges hold the sauce, like gutters.', 'Бороздки от вилки держат соус, как канавки.'),
      drawing: 'gnocchiFork',
    },
    {
      text: l('Probaj jednu njoku pre ostalih, pa kuvaj dok ne isplivaju.', 'Test one gnocchi before the rest, then cook until they float.', 'Сначала проверь одну ньокку, затем вари, пока не всплывут.'),
      params: [l('+30 s posle isplivavanja', '+30 s after floating', '+30 с после всплытия')],
      done: l('Njoka je cela, mekana i laka.', 'The gnocchi is whole, soft and light.', 'Ньокка целая, мягкая и лёгкая.'),
      why: l('Ako se raspadne, umešaj još kašiku brašna. Ako je gumena, sledeći put manje brašna i mešanja.', 'If it falls apart, work in another spoonful of flour. If it is rubbery, next time less flour and less mixing.', 'Если разваливается, добавь ещё ложку муки. Если резиновая, в следующий раз меньше муки и меньше замеса.'),
    },
  ],
  mistake: {
    title: l('Brašno dodavano dok testo ne prestane da se lepi.', 'Flour added until the dough stops sticking.', 'Муку добавляют, пока тесто не перестанет липнуть.'),
    fix: l(
      'Testo za njoke je uvek malo lepljivo. Kad prestane, ima previše brašna i njoke su kao olovo. Probna njoka u vodi kaže kad je dosta, ne prsti.',
      'Gnocchi dough is always a little tacky. When it stops being so, it has too much flour and the gnocchi are like lead. A test gnocchi in the water tells you when it is enough, not your fingers.',
      'Тесто для ньокки всегда немного липкое. Перестало — значит, муки слишком много, и ньокки как свинец. Пробная ньокка в воде скажет, когда хватит, а не пальцы.',
    ),
  },
  think: {
    question: l('Zašto se krompir za njoke peče, a ne kuva?', 'Why are potatoes for gnocchi baked rather than boiled?', 'Почему картофель для ньокки запекают, а не варят?'),
    options: [
      l('Ostaje suv, pa traži manje brašna', 'It stays dry, so it needs less flour', 'Он остаётся сухим и требует меньше муки'),
      l('Brže je', 'It is faster', 'Так быстрее'),
      l('Pečen je slađi', 'Baked is sweeter', 'Запечённый слаще'),
    ],
    answer: 0,
    explain: l(
      'Svaka kap vode u krompiru traži brašno da je veže. Manje vode, manje brašna, lakše njoke. To je ceo recept u jednoj rečenici.',
      'Every drop of water in the potato needs flour to bind it. Less water, less flour, lighter gnocchi. That is the whole recipe in one sentence.',
      'Каждая капля воды в картофеле требует муки, чтобы её связать. Меньше воды — меньше муки — легче ньокки. Это весь рецепт в одном предложении.',
    ),
  },
  recipe: { name: l('Njoke od krompira', 'Potato gnocchi', 'Картофельные ньокки'), protein: 3.5, carbs: 30, fat: 1, kcal: 145 },
}

const ragu: Lesson = {
  id: '2.11.5',
  title: l('Ragù alla bolognese', 'Ragù alla bolognese', 'Рагу болоньезе'),
  goal: l(
    'Skuvaš bolonjez kao u Bolonji: sporo, sa mlekom i vinom, gust od mesa, a ne od paradajza.',
    'You cook bolognese the Bologna way: slowly, with milk and wine, thick with meat, not tomato.',
    'Ты готовишь болоньезе, как в Болонье: медленно, с молоком и вином, густое от мяса, а не от томатов.',
  ),
  minutes: 7,
  key: { value: l('3 h', '3 h', '3 ч'), label: l('krčkanje', 'simmer', 'томление') },
  need: [
    { item: l('Mleveno: junetina i svinjetina', 'Mince: beef and pork', 'Фарш: говядина и свинина'), qty: l('500 + 200 g', '500 + 200 g', '500 + 200 г') },
    { item: l('Luk, šargarepa, celer, sitno', 'Onion, carrot, celery, finely diced', 'Лук, морковь, сельдерей, мелко'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Suvo belo vino i mleko', 'Dry white wine and milk', 'Сухое белое вино и молоко'), qty: l('150 + 150 ml', '150 + 150 ml', '150 + 150 мл') },
    { item: l('Pasirani paradajz i pire', 'Passata and tomato paste', 'Томатное пюре и паста'), qty: l('300 g + 1 kašika', '300 g + 1 tbsp', '300 г + 1 ст. л.') },
    { item: l('Puter i maslinovo ulje, so', 'Butter and olive oil, salt', 'Масло сливочное и оливковое, соль'), qty: l('30 g + 2 kašike', '30 g + 2 tbsp', '30 г + 2 ст. л.') },
  ],
  why: l(
    'Pravi bolonjez je ragu od mesa sa malo paradajza, ne paradajz sos sa mesom. Tri sata krčkanja pretvore mleveno meso u mekan, sladak sos koji se lepi za tagliatelle.',
    'A true bolognese is a meat ragù with a little tomato, not tomato sauce with meat. Three hours of simmering turn the mince into a soft, sweet sauce that clings to tagliatelle.',
    'Настоящее болоньезе — мясное рагу с небольшим количеством томатов, а не томатный соус с мясом. Три часа томления превращают фарш в мягкий сладкий соус, который липнет к тальятелле.',
  ),
  steps: [
    {
      text: l('Dinstaj sitno povrće (soffritto) na puteru i ulju.', 'Sweat the finely diced vegetables (soffritto) in butter and oil.', 'Потоми мелко нарезанные овощи (соффритто) на сливочном и оливковом масле.'),
      params: [l('3 mm', '3 mm', '3 мм'), l('10 min', '10 min', '10 мин')],
      done: l('Povrće je mekano, providno i slatko.', 'The vegetables are soft, translucent and sweet.', 'Овощи мягкие, прозрачные и сладкие.'),
      why: l('Soffritto je italijanski mirepoix (2.10.1), samo sitniji, jer se istopi u sosu.', 'Soffritto is the Italian mirepoix (2.10.1), only finer, because it melts into the sauce.', 'Соффритто — итальянское мирпуа (2.10.1), только мельче, потому что растворяется в соусе.'),
      drawing: 'sweatVeg',
    },
    {
      text: l('Dodaj meso i prži ga dok ne izgubi vodu i počne da cvrči.', 'Add the meat and fry until its water has gone and it starts to sizzle.', 'Добавь мясо и жарь, пока не уйдёт вода и не начнёт шкворчать.'),
      params: [l('10–15 min', '10–15 min', '10–15 мин')],
      done: l('Meso je rastresito, braon i pucketa.', 'The meat is loose, brown and crackling.', 'Мясо рассыпчатое, коричневое и потрескивает.'),
      why: l('Meso prvo pusti vodu i kuva se u njoj. Kad voda ispari, počne da se peče i dobija ukus.', 'The meat first releases water and stews in it. Once the water is gone, it starts to brown and take on flavour.', 'Мясо сначала пускает воду и тушится в ней. Когда вода испарится, начинает жариться и набирать вкус.'),
    },
    {
      text: l('Dolij vino i ukuvaj, pa mleko i ukuvaj.', 'Pour in the wine and reduce, then the milk and reduce.', 'Влей вино и уварь, затем молоко и уварь.'),
      params: [l('vino do suvog', 'wine until dry', 'вино досуха'), l('mleko do suvog', 'milk until dry', 'молоко досуха')],
      done: l('U loncu nema slobodne tečnosti.', 'There is no free liquid left in the pot.', 'В кастрюле не осталось свободной жидкости.'),
      why: l('Mleko omekša meso i zaobli kiselost paradajza. To je ono što bolonjez razlikuje od svakog drugog ragua.', 'Milk tenderises the meat and rounds off the tomato\'s acidity. That is what sets bolognese apart from every other ragù.', 'Молоко смягчает мясо и скругляет кислотность томатов. Это отличает болоньезе от любого другого рагу.'),
    },
    {
      text: l('Dodaj paradajz i krčkaj na najtišoj vatri, poluotklopljeno.', 'Add the tomato and simmer on the lowest heat, half-covered.', 'Добавь томаты и томи на самом слабом огне под полуоткрытой крышкой.'),
      params: [l('3 h', '3 h', '3 ч'), l('kašika vode po potrebi', 'a spoon of water if needed', 'ложку воды при необходимости')],
      done: l('Sos je gust, tamnocrven, a masnoća izlazi na ivice.', 'The sauce is thick and dark red, with fat rising at the edges.', 'Соус густой, тёмно-красный, по краям выступает жир.'),
      why: l('Isti znak kao u 9.5: ulje na ivicama znači da je sos gotov.', 'The same sign as in 9.5: oil at the edges means the sauce is done.', 'Тот же признак, что в 9.5: масло по краям значит, что соус готов.'),
      drawing: 'tomatoSimmer',
    },
    {
      text: l('Spoji sa tagliatelle i kutlačom vode od kuvanja.', 'Toss with tagliatelle and a ladle of the cooking water.', 'Соедини с тальятелле и половником воды от варки.'),
      params: [l('ne špagete', 'not spaghetti', 'не спагетти')],
      done: l('Sos se drži svake trake, a ne leži na dnu tanjira.', 'The sauce clings to every ribbon instead of pooling on the plate.', 'Соус держится на каждой ленте, а не лежит на дне тарелки.'),
      why: l('Široke, hrapave trake sveže paste (2.11.2) drže gust ragu. Sa glatkih špageta sklizne.', 'Wide, rough ribbons of fresh pasta (2.11.2) hold a thick ragù. It slides off smooth spaghetti.', 'Широкие шероховатые ленты свежей пасты (2.11.2) держат густое рагу. С гладких спагетти оно соскальзывает.'),
    },
  ],
  mistake: {
    title: l('Bolonjez kuvan 30 minuta sa litrom paradajza.', 'Bolognese cooked 30 minutes with a litre of tomato.', 'Болоньезе варили 30 минут с литром томатов.'),
    fix: l(
      'Dobiješ paradajz sos u kome plivaju zrna mesa. Pravi ragu ima malo paradajza i puno vremena. Ako žuriš, skuvaj nešto drugo, a ragu napravi za vikend i zamrzni (15.4).',
      'You get tomato sauce with grains of meat floating in it. A real ragù has little tomato and plenty of time. If you are in a hurry, cook something else, and make ragù at the weekend and freeze it (15.4).',
      'Получается томатный соус, в котором плавают крупинки мяса. Настоящее рагу — мало томатов и много времени. Спешишь — приготовь что-то другое, а рагу сделай на выходных и заморозь (15.4).',
    ),
  },
  think: {
    question: l('Zašto mleko u ragu?', 'Why milk in a ragù?', 'Зачем молоко в рагу?'),
    options: [
      l('Omekšava meso i zaobli kiselost', 'It tenderises the meat and rounds off the acidity', 'Смягчает мясо и скругляет кислотность'),
      l('Da sos bude beo', 'To make the sauce white', 'Чтобы соус был белым'),
      l('Da se zgusne kao bešamel', 'To thicken it like béchamel', 'Чтобы загустить, как бешамель'),
    ],
    answer: 0,
    explain: l(
      'Mlečni proteini i masnoća obgrle meso i ublaže paradajz. Isti princip kao masnoća koja smiruje kiselinu u 5.3.',
      'Milk proteins and fat coat the meat and soften the tomato. The same principle as fat calming acid in 5.3.',
      'Молочные белки и жир обволакивают мясо и смягчают томаты. Тот же принцип, что жир, смягчающий кислоту, в 5.3.',
    ),
  },
  recipe: { name: l('Tagliatelle al ragù', 'Tagliatelle al ragù', 'Тальятелле с рагу'), protein: 11, carbs: 18, fat: 8, kcal: 190 },
}

const roman: Lesson = {
  id: '2.11.6',
  title: l('Cacio e pepe i carbonara', 'Cacio e pepe and carbonara', 'Качо э пепе и карбонара'),
  goal: l(
    'Napraviš kremast sos samo od sira, vode od testenine i jaja, bez pavlake i bez grudvica.',
    'You make a creamy sauce from just cheese, pasta water and egg, with no cream and no lumps.',
    'Ты делаешь кремовый соус только из сыра, воды от пасты и яиц, без сливок и без комков.',
  ),
  minutes: 7,
  key: { value: l('ispod 70°C', 'below 70°C', 'ниже 70°C'), label: l('kad ide sir', 'when the cheese goes in', 'когда добавляют сыр') },
  need: [
    { item: l('Špagete ili tonnarelli', 'Spaghetti or tonnarelli', 'Спагетти или тоннарелли'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Pekorino romano, sitno rendan', 'Pecorino romano, finely grated', 'Пекорино романо, мелко натёртый'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Crni biber u zrnu', 'Black peppercorns', 'Чёрный перец горошком'), qty: l('2 kašičice', '2 tsp', '2 ч. л.') },
    { item: l('Za karbonaru: guančale, jaja, žumanca', 'For carbonara: guanciale, eggs, yolks', 'Для карбонары: гуанчале, яйца, желтки'), qty: l('100 g + 1 + 2', '100 g + 1 + 2', '100 г + 1 + 2') },
  ],
  why: l(
    'Rimske paste nemaju pavlaku. Sos je emulzija: skrob iz vode spaja masnoću iz sira i jaja u kremu. Ista nauka kao majonez (3.2), samo topla.',
    'Roman pastas have no cream. The sauce is an emulsion: starch from the water binds the fat of the cheese and egg into a cream. The same science as mayonnaise (3.2), only warm.',
    'В римской пасте нет сливок. Соус — эмульсия: крахмал из воды связывает жир сыра и яиц в крем. Та же наука, что майонез (3.2), только тёплая.',
  ),
  steps: [
    {
      text: l('Kuvaj pastu u manje vode nego obično, a biber prži na suvom tiganju.', 'Cook the pasta in less water than usual, and toast the pepper in a dry pan.', 'Вари пасту в меньшем, чем обычно, количестве воды, а перец обжарь на сухой сковороде.'),
      params: [l('1.5 l vode na 200 g', '1.5 l water for 200 g', '1,5 л воды на 200 г'), l('so 8 g/l', 'salt 8 g/l', 'соль 8 г/л')],
      done: l('Voda je mutna od skroba, a biber miriše.', 'The water is cloudy with starch and the pepper is fragrant.', 'Вода мутная от крахмала, перец благоухает.'),
      why: l('Manje vode znači više skroba po litru. Ta voda je vezivo sosa. Manje soli, jer je pekorino jako slan.', 'Less water means more starch per litre. That water is what binds the sauce. Less salt, because pecorino is very salty.', 'Меньше воды — больше крахмала на литр. Эта вода — связующее соуса. Меньше соли, потому что пекорино очень солёный.'),
      drawing: 'pastaWater',
    },
    {
      text: l('Za cacio e pepe: izmešaj sir sa malo mlake vode od paste u pastu.', 'For cacio e pepe: mix the cheese with a little warm pasta water into a paste.', 'Для качо э пепе: смешай сыр с небольшим количеством тёплой воды от пасты в пасту.'),
      params: [l('voda ~60°C', 'water ~60°C', 'вода ~60°C')],
      done: l('Sir je gusta, glatka krema bez grudvica.', 'The cheese is a thick, smooth cream with no lumps.', 'Сыр — густой гладкий крем без комков.'),
      why: l('Vrela voda bi skuvala sir u gumene niti. Mlaka ga otopi u kremu.', 'Boiling water would cook the cheese into rubbery strings. Warm water melts it into a cream.', 'Кипяток сварил бы сыр в резиновые нити. Тёплая вода растапливает его в крем.'),
    },
    {
      text: l('Za karbonaru: istopi guančale, a jaja umuti sa sirom.', 'For carbonara: render the guanciale and whisk the eggs with the cheese.', 'Для карбонары: вытопи гуанчале, а яйца взбей с сыром.'),
      params: [l('1 jaje + 2 žumanca + 60 g sira', '1 egg + 2 yolks + 60 g cheese', '1 яйцо + 2 желтка + 60 г сыра')],
      done: l('Guančale je hrskav, a smesa jaja gusta i žuta.', 'The guanciale is crisp and the egg mixture thick and yellow.', 'Гуанчале хрустящий, яичная смесь густая и жёлтая.'),
    },
    {
      text: l('Prebaci pastu u tiganj, skloni sa vatre, pa dodaj sir ili jaja i mešaj brzo.', 'Move the pasta into the pan, take it off the heat, then add the cheese or eggs and toss fast.', 'Переложи пасту в сковороду, сними с огня, добавь сыр или яйца и быстро перемешивай.'),
      params: [l('van vatre', 'off the heat', 'вне огня'), l('kašika po kašika vode', 'water a spoonful at a time', 'воду по ложке')],
      done: l('Sos je kremast i sjajan i prekriva svaku nit.', 'The sauce is creamy and glossy and coats every strand.', 'Соус кремовый, блестящий и обволакивает каждую нить.'),
      why: l('Iznad 70°C sir se zgruda, a jaja postanu kajgana. Toplota paste je dovoljna. Isto kao legiranje u 8.5.', 'Above 70°C the cheese clumps and the eggs scramble. The heat of the pasta is enough. The same as the liaison in 8.5.', 'Выше 70°C сыр сбивается в комки, а яйца превращаются в омлет. Тепла пасты достаточно. Как льезон в 8.5.'),
      drawing: 'emulsionToss',
    },
    {
      text: l('Dodaj biber ili guančale, proveri gustinu i služi odmah.', 'Add the pepper or guanciale, check the texture and serve at once.', 'Добавь перец или гуанчале, проверь густоту и сразу подавай.'),
      done: l('Sos teče sporo, kao gusta pavlaka.', 'The sauce flows slowly, like thick cream.', 'Соус течёт медленно, как густые сливки.'),
      why: l('Emulzija se steže kako se hladi. Na tanjiru za 2 minuta je gušća nego u tiganju.', 'The emulsion tightens as it cools. On the plate after 2 minutes it is thicker than in the pan.', 'Эмульсия густеет при остывании. На тарелке через 2 минуты она гуще, чем на сковороде.'),
    },
  ],
  mistake: {
    title: l('Karbonara sa pavlakom "da se ne zgruša".', 'Carbonara with cream "so it does not curdle".', 'Карбонара со сливками, «чтобы не свернулась».'),
    fix: l(
      'Pavlaka prekrije ukus jaja i sira i dobiješ teški sos. Zgrušavanje se rešava temperaturom, ne pavlakom: tiganj van vatre, jaja i kašika vode, brzo mešanje.',
      'Cream smothers the taste of egg and cheese and you get a heavy sauce. Curdling is solved with temperature, not cream: pan off the heat, eggs and a spoon of water, fast tossing.',
      'Сливки забивают вкус яиц и сыра, и получается тяжёлый соус. Свёртывание решают температурой, а не сливками: сковорода вне огня, яйца и ложка воды, быстрое перемешивание.',
    ),
  },
  think: {
    question: l('Sir se zgrudvao u lepljive niti. Šta se desilo?', 'The cheese clumped into sticky strings. What happened?', 'Сыр сбился в липкие нити. Что произошло?'),
    options: [
      l('Bilo je prevruće: tiganj na vatri ili vrela voda', 'It was too hot: pan on the heat or boiling water', 'Было слишком горячо: сковорода на огне или кипяток'),
      l('Premalo sira', 'Too little cheese', 'Мало сыра'),
      l('Pasta je bila al dente', 'The pasta was al dente', 'Паста была аль денте'),
    ],
    answer: 0,
    explain: l(
      'Proteini sira se stežu na toploti, kao jaja. Sve što smanji toplotu, pomaže: tiganj van vatre, mlaka voda, sir ranije pomešan sa vodom.',
      'Cheese proteins tighten with heat, like eggs. Anything that lowers the heat helps: pan off the stove, warm water, cheese mixed with water beforehand.',
      'Белки сыра сжимаются от жара, как яйца. Помогает всё, что снижает температуру: сковорода вне огня, тёплая вода, сыр, заранее смешанный с водой.',
    ),
  },
  recipe: { name: l('Karbonara', 'Carbonara', 'Карбонара'), protein: 13, carbs: 25, fat: 14, kcal: 285 },
}

const milanese: Lesson = {
  id: '2.11.7',
  title: l('Rizoto alla milanese', 'Risotto alla milanese', 'Ризотто по-милански'),
  goal: l(
    'Skuvaš zlatni rizoto sa šafranom koji teče kao talas, "all\'onda".',
    'You cook a golden saffron risotto that flows like a wave, "all\'onda".',
    'Ты готовишь золотое ризотто с шафраном, которое течёт волной, «all\'onda».',
  ),
  minutes: 7,
  key: { value: l('18 min', '18 min', '18 мин'), label: l('od pirinča do tanjira', 'from rice to plate', 'от риса до тарелки') },
  need: [
    { item: l('Pirinač karnaroli ili arborio', 'Carnaroli or arborio rice', 'Рис карнароли или арборио'), qty: l('320 g', '320 g', '320 г') },
    { item: l('Pileći fond, vreo (8.1)', 'Chicken stock, hot (8.1)', 'Куриный бульон, горячий (8.1)'), qty: l('1.2 l', '1.2 l', '1,2 л') },
    { item: l('Šafran u nitima', 'Saffron threads', 'Шафран в нитях'), qty: l('0.2 g', '0.2 g', '0,2 г') },
    { item: l('Crni luk, belo vino', 'Onion, white wine', 'Лук, белое вино'), qty: l('1 + 100 ml', '1 + 100 ml', '1 + 100 мл') },
    { item: l('Hladan puter, parmezan', 'Cold butter, Parmesan', 'Холодное масло, пармезан'), qty: l('50 g + 60 g', '50 g + 60 g', '50 г + 60 г') },
  ],
  why: l(
    'Ovo je nadogradnja rizota iz 10.5. Šafran daje boju i miris, a "mantecatura" na kraju, puter i sir umešani van vatre, pretvara pirinač u svilu.',
    'This builds on the risotto from 10.5. Saffron gives colour and aroma, and the mantecatura at the end, butter and cheese beaten in off the heat, turns rice into silk.',
    'Это развитие ризотто из 10.5. Шафран даёт цвет и аромат, а мантекатура в конце — масло и сыр, вмешанные вне огня, — превращает рис в шёлк.',
  ),
  steps: [
    {
      text: l('Potopi šafran u kutlaču toplog fonda.', 'Steep the saffron in a ladle of warm stock.', 'Замочи шафран в половнике тёплого бульона.'),
      params: [l('20 min', '20 min', '20 мин')],
      done: l('Fond je zlatnonarandžast i miriše na med i seno.', 'The stock is golden orange and smells of honey and hay.', 'Бульон золотисто-оранжевый и пахнет мёдом и сеном.'),
      why: l('Šafran pušta boju u tečnosti, ne u masnoći. Ubačen suv na kraju, ostane u nitima.', 'Saffron releases its colour into liquid, not fat. Thrown in dry at the end, it stays in threads.', 'Шафран отдаёт цвет в жидкость, а не в жир. Брошенный сухим в конце, остаётся нитями.'),
      drawing: 'saffron',
    },
    {
      text: l('Dinstaj sitan luk, dodaj pirinač i prži ga dok ne postane providan na ivicama.', 'Sweat the finely chopped onion, add the rice and toast it until translucent at the edges.', 'Потоми мелкий лук, добавь рис и обжарь, пока края не станут прозрачными.'),
      params: [l('2 min', '2 min', '2 мин')],
      done: l('Zrna su sjajna, a sredina im je bela tačka.', 'The grains are glossy, each with a white dot at the centre.', 'Зёрна блестящие, в центре каждого белая точка.'),
      drawing: 'riceToast',
    },
    {
      text: l('Dolij vino i ukuvaj, pa dodaj vreo fond kutlaču po kutlaču.', 'Add the wine and reduce, then add the hot stock a ladle at a time.', 'Влей вино и уварь, затем добавляй горячий бульон по половнику.'),
      params: [l('16–18 min', '16–18 min', '16–18 мин'), l('šafran na pola vremena', 'saffron halfway through', 'шафран на середине')],
      done: l('Pirinač je mekan sa malim otporom u sredini i zlatan.', 'The rice is tender with a little bite at the centre and golden.', 'Рис мягкий с лёгкой упругостью в центре и золотистый.'),
      why: l('Postupak iz 10.5. Šafran na pola vremena: dovoljno da oboji, a ne da izgubi miris.', 'The method from 10.5. Saffron halfway through: long enough to colour, not so long it loses its aroma.', 'Способ из 10.5. Шафран на середине: достаточно, чтобы окрасить, и не так долго, чтобы потерять аромат.'),
      drawing: 'ladleStock',
    },
    {
      text: l('Skloni sa vatre i snažno umešaj hladan puter i parmezan.', 'Take off the heat and beat in the cold butter and Parmesan vigorously.', 'Сними с огня и энергично вмешай холодное масло и пармезан.'),
      params: [l('50 g + 60 g', '50 g + 60 g', '50 г + 60 г'), l('1 min mešanja', '1 min of beating', '1 мин перемешивания')],
      done: l('Rizoto je sjajan i kremast, bez masnih kapi.', 'The risotto is glossy and creamy, with no beads of fat.', 'Ризотто блестящее и кремовое, без капель жира.'),
      why: l('Mantecatura je emulzija: skrob iz pirinča spaja puter i sir. Na vatri bi se puter samo otopio u masnoću.', 'Mantecatura is an emulsion: starch from the rice binds the butter and cheese. On the heat the butter would just melt into grease.', 'Мантекатура — эмульсия: крахмал риса связывает масло и сыр. На огне масло просто растаяло бы в жир.'),
    },
    {
      text: l('Odmori minut i serviraj na ravan tanjir.', 'Rest a minute and serve on a flat plate.', 'Дай отдохнуть минуту и подай на плоской тарелке.'),
      params: [l('1 min', '1 min', '1 мин')],
      done: l('Kad kucneš tanjir odozdo, rizoto se razlije u talas.', 'When you tap the plate from below, the risotto spreads in a wave.', 'Если постучать по тарелке снизу, ризотто растекается волной.'),
      why: l('"All\'onda" znači talasast. Rizoto koji stoji kao brdo je prekuvan ili prestajao.', '"All\'onda" means wave-like. A risotto that stands in a mound is overcooked or has sat too long.', '«All\'onda» значит волной. Ризотто, стоящее горкой, переварено или долго стояло.'),
      drawing: 'onda',
    },
  ],
  mistake: {
    title: l('Rizoto napravljen unapred i podgrejan.', 'Risotto made ahead and reheated.', 'Ризотто приготовили заранее и разогрели.'),
    fix: l(
      'Skrob se stegne i rizoto postane lepljiva masa. Restorani ga kuvaju do pola, rašire na pleh i ohlade, pa ga za stolom dovrše za 6 minuta. Kod kuće: kuvaj ga poslednjeg.',
      'The starch sets and the risotto turns into a sticky mass. Restaurants cook it halfway, spread it on a tray and chill it, then finish it in 6 minutes to order. At home: cook it last.',
      'Крахмал схватывается, и ризотто становится липкой массой. Рестораны варят его наполовину, раскладывают на противень и охлаждают, а потом доводят за 6 минут под заказ. Дома — готовь его последним.',
    ),
  },
  think: {
    question: l('Zašto se puter za mantecaturu dodaje hladan?', 'Why does the butter for the mantecatura go in cold?', 'Почему масло для мантекатуры добавляют холодным?'),
    options: [
      l('Topi se polako i ulazi u emulziju, a ohladi rizoto da stane', 'It melts slowly into the emulsion and cools the risotto so it stops cooking', 'Тает медленно, входит в эмульсию и охлаждает ризотто, останавливая варку'),
      l('Hladan puter je slaniji', 'Cold butter is saltier', 'Холодное масло солонее'),
      l('Lakše se meri', 'It is easier to measure', 'Его легче отмерить'),
    ],
    answer: 0,
    explain: l(
      'Isto kao beurre blanc (9.9) i sos iz pleha (13.5): hladan puter u toplom, van vatre. Tako se puter veže, a ne razliva u masnoću.',
      'The same as beurre blanc (9.9) and pan gravy (13.5): cold butter into warm, off the heat. That way the butter binds instead of spreading into grease.',
      'Как бёр блан (9.9) и соус из противня (13.5): холодное масло в тёплое, вне огня. Так масло связывается, а не растекается жиром.',
    ),
  },
  recipe: { name: l('Rizoto alla milanese', 'Risotto alla milanese', 'Ризотто по-милански'), protein: 4.5, carbs: 23, fat: 6.5, kcal: 170 },
}

export const italianLessons: Lesson[] = [eggPasta, ribbons, ravioli, gnocchi, ragu, roman, milanese]
