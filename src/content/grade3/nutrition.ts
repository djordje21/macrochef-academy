import { l, type Lesson } from '../types'

// Grade 3 · Module 9 · Nutrition by design, with MacroChef. A chef designs what is on the plate, including
// what it does for the body: balance by weight, the 14 allergens, safe swaps, lighter classics that keep
// their flavour, and the dish entered in MacroChef so the numbers travel with the recipe.

const balance: Lesson = {
  id: '3.9.1',
  title: l('Makro-balans tanjira', 'Macro balance on the plate', 'Баланс макросов на тарелке'),
  goal: l(
    'Složiš glavno jelo po težini: pola povrće, četvrtina protein, četvrtina skrob, a mast izmerena.',
    'You build a main course by weight: half vegetables, a quarter protein, a quarter starch, with the fat measured.',
    'Ты собираешь основное блюдо по весу: половина овощи, четверть белок, четверть крахмал, а жир отмерен.',
  ),
  minutes: 6,
  key: { value: l('½ · ¼ · ¼', '½ · ¼ · ¼', '½ · ¼ · ¼'), label: l('povrće · protein · skrob', 'vegetables · protein · starch', 'овощи · белок · крахмал') },
  need: [
    { item: l('Kuvan protein, skrob i povrće', 'Cooked protein, starch and vegetables', 'Готовые белок, крахмал и овощи'), qty: l('1 porcija', '1 portion', '1 порция') },
    { item: l('Vaga i kašika za ulje', 'Scale and a spoon for oil', 'Весы и ложка для масла'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('MacroChef', 'MacroChef', 'MacroChef'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Gost koji pazi šta jede ne želi dijetalni tanjir, nego normalno jelo u dobroj ravnoteži. To se postiže težinom i rasporedom, ne odricanjem od ukusa.',
    'A guest who watches what they eat does not want a diet plate, but a normal dish in good balance. That comes from weight and layout, not from giving up flavour.',
    'Гость, следящий за питанием, хочет не диетическую тарелку, а обычное блюдо в хорошем балансе. Это достигается весом и раскладкой, а не отказом от вкуса.',
  ),
  steps: [
    {
      text: l('Izmeri porciju proteina.', 'Weigh the protein portion.', 'Взвесь порцию белка.'),
      params: [l('120–150 g kuvanog mesa', '120–150 g cooked meat', '120–150 г готового мяса'), l('≈ 30–40 g proteina', '≈ 30–40 g protein', '≈ 30–40 г белка')],
      done: l('Protein je izmeren, ne procenjen.', 'The protein is weighed, not estimated.', 'Белок взвешен, а не на глаз.'),
      why: l('Oko greši i do 50%, naročito kod mesa sa kostima i sosom.', 'The eye can be off by as much as 50%, especially with meat on the bone or in sauce.', 'Глаз ошибается до 50%, особенно с мясом на кости и в соусе.'),
      drawing: 'portionScale',
    },
    {
      text: l('Izmeri skrob: četvrtina tanjira.', 'Weigh the starch: a quarter of the plate.', 'Взвесь крахмал: четверть тарелки.'),
      params: [l('150 g kuvanog', '150 g cooked', '150 г готового')],
      done: l('Skrob zauzima četvrtinu tanjira, ne pola.', 'The starch takes a quarter of the plate, not half.', 'Крахмал занимает четверть тарелки, а не половину.'),
      why: l('Pirinač i krompir su jeftini, pa ih restorani daju mnogo. To podigne kalorije više nego bilo šta drugo.', 'Rice and potatoes are cheap, so restaurants serve a lot. That pushes up the calories more than anything else.', 'Рис и картофель дешёвые, и рестораны кладут их много. Это поднимает калорийность сильнее всего.'),
    },
    {
      text: l('Povrće neka zauzme pola tanjira.', 'Let vegetables take half the plate.', 'Пусть овощи займут половину тарелки.'),
      params: [l('200 g', '200 g', '200 г')],
      done: l('Pola tanjira je povrće, pripremljeno sa istom pažnjom kao meso.', 'Half the plate is vegetables, cooked with the same care as the meat.', 'Половина тарелки — овощи, приготовленные с тем же вниманием, что и мясо.'),
      why: l('Povrće na pola tanjira daje volumen i sitost uz malo kalorija, ali samo ako je ukusno (6.5).', 'Vegetables on half the plate give volume and fullness for few calories, but only if they taste good (6.5).', 'Овощи на половине тарелки дают объём и сытость при малой калорийности, но только если вкусные (6.5).'),
      drawing: 'plateClock',
    },
    {
      text: l('Mast meri kašikom, ne iz flaše.', 'Measure fat with a spoon, not straight from the bottle.', 'Отмеряй жир ложкой, а не из бутылки.'),
      params: [l('1 kašika ulja ≈ 13 g ≈ 120 kcal', '1 tbsp oil ≈ 13 g ≈ 120 kcal', '1 ст. л. масла ≈ 13 г ≈ 120 ккал')],
      done: l('Znaš tačno koliko ulja i putera je u jelu.', 'You know exactly how much oil and butter is in the dish.', 'Ты точно знаешь, сколько масла в блюде.'),
      why: l('Mast je ukus, ali i najgušće kalorije. Nevidljiva kašika viška ulja je 120 kcal koje niko ne broji.', 'Fat is flavour, but also the densest calories. An invisible extra spoonful of oil is 120 kcal nobody counts.', 'Жир — это вкус, но и самые плотные калории. Незаметная лишняя ложка масла — 120 ккал, которые никто не считает.'),
    },
    {
      text: l('Unesi porciju u MacroChef i proveri raspodelu.', 'Enter the portion in MacroChef and check the split.', 'Внеси порцию в MacroChef и проверь распределение.'),
      done: l('Vidiš proteine, ugljene hidrate, masti i kalorije po porciji.', 'You can see protein, carbs, fat and calories per portion.', 'Ты видишь белки, углеводы, жиры и калории на порцию.'),
      why: l('Broj potvrdi ili opovrgne oko. Posle nekoliko jela oko nauči, ali se i dalje proverava.', 'The number confirms or contradicts the eye. After a few dishes the eye learns, but you keep checking.', 'Цифра подтверждает или опровергает глаз. После нескольких блюд глаз учится, но проверять продолжают.'),
    },
  ],
  mistake: {
    title: l('„Zdravo jelo“ sa pola tanjira pirinča i salatom natopljenom uljem.', 'A "healthy dish" with half a plate of rice and a salad drowned in oil.', '«Здоровое блюдо» с половиной тарелки риса и салатом, залитым маслом.'),
    fix: l(
      'Zvuči lagano, a ima više kalorija od bifteka sa povrćem. Balans se meri vagom: pola povrće, četvrtina protein, četvrtina skrob, ulje kašikom.',
      'It sounds light but has more calories than a steak with vegetables. Balance is measured on the scale: half vegetables, a quarter protein, a quarter starch, oil by the spoon.',
      'Звучит легко, а калорий больше, чем в стейке с овощами. Баланс меряют весами: половина овощи, четверть белок, четверть крахмал, масло ложкой.',
    ),
  },
  think: {
    question: l('Šta najviše podiže kalorije tanjira, a najmanje se primeti?', 'What raises a plate\'s calories most while being noticed least?', 'Что сильнее всего повышает калорийность тарелки и меньше всего заметно?'),
    options: [
      l('Ulje i puter bez merenja', 'Unmeasured oil and butter', 'Неотмеренное масло'),
      l('Povrće', 'Vegetables', 'Овощи'),
      l('Začini', 'Spices', 'Специи'),
    ],
    answer: 0,
    explain: l(
      'Mast ima više od dvostruko više kalorija po gramu od proteina i ugljenih hidrata, a ne vidi se na tanjiru. Zato se meri kašikom.',
      'Fat has more than twice the calories per gram of protein or carbohydrate, and it does not show on the plate. That is why it is measured by the spoon.',
      'В жире более чем вдвое больше калорий на грамм, чем в белках и углеводах, и его не видно на тарелке. Поэтому его отмеряют ложкой.',
    ),
  },
}

const allergens: Lesson = {
  id: '3.9.2',
  title: l('14 alergena', 'The 14 allergens', '14 аллергенов'),
  goal: l(
    'Za svako jelo na meniju znaš koje od 14 alergena sadrži, uključujući one skrivene u sosovima i fondovima.',
    'For every dish on the menu you know which of the 14 allergens it contains, including those hidden in sauces and stocks.',
    'Для каждого блюда в меню ты знаешь, какие из 14 аллергенов оно содержит, включая скрытые в соусах и бульонах.',
  ),
  minutes: 7,
  key: { value: l('14', '14', '14'), label: l('alergena po EU propisu', 'allergens under EU law', 'аллергенов по закону ЕС') },
  need: [
    { item: l('Recept-kartice svih jela (3.7.5)', 'Recipe cards for every dish (3.7.5)', 'Техкарты всех блюд (3.7.5)'), qty: l('sve', 'all', 'все') },
    { item: l('Deklaracije gotovih proizvoda', 'Labels of bought-in products', 'Этикетки готовых продуктов'), qty: l('sve', 'all', 'все') },
    { item: l('Tabela alergena', 'An allergen table', 'Таблица аллергенов'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Za većinu gostiju alergen je neprijatnost. Za nekoga je život. Kuhinja mora da zna tačno, a ne „mislim da nema“.',
    'For most guests an allergen is an inconvenience. For some it is their life. The kitchen must know exactly, not "I don\'t think there is any".',
    'Для большинства гостей аллерген — неудобство. Для кого-то — вопрос жизни. Кухня должна знать точно, а не «думаю, нет».',
  ),
  steps: [
    {
      text: l('Nauči listu 14 alergena.', 'Learn the list of 14 allergens.', 'Выучи список 14 аллергенов.'),
      params: [
        l('gluten · rakovi · jaja · riba · kikiriki · soja · mleko', 'gluten · crustaceans · eggs · fish · peanuts · soy · milk', 'глютен · ракообразные · яйца · рыба · арахис · соя · молоко'),
        l('orašasti plodovi · celer · slačica · susam · sulfiti · lupina · mekušci', 'tree nuts · celery · mustard · sesame · sulphites · lupin · molluscs', 'орехи · сельдерей · горчица · кунжут · сульфиты · люпин · моллюски'),
      ],
      done: l('Možeš da nabrojiš svih 14 bez gledanja.', 'You can list all 14 without looking.', 'Ты можешь перечислить все 14, не подглядывая.'),
      why: l('Ovo je lista iz EU propisa 1169/2011. Srbija je preuzela isti spisak.', 'This is the list from EU Regulation 1169/2011. Serbia has adopted the same list.', 'Это список из регламента ЕС 1169/2011. Сербия приняла тот же список.'),
    },
    {
      text: l('Prođi svaku recept-karticu, red po red, i sosove i fondove.', 'Go through every recipe card line by line, sauces and stocks included.', 'Пройди каждую техкарту построчно, включая соусы и бульоны.'),
      done: l('Za svako jelo imaš listu alergena iz svih komponenti.', 'For every dish you have a list of allergens from all its components.', 'Для каждого блюда есть список аллергенов из всех компонентов.'),
      why: l('Skriveni su najopasniji: vustersir sadrži ribu, pesto orašaste plodove, a demi-glace sa vinom sulfite.', 'The hidden ones are the most dangerous: Worcestershire sauce contains fish, pesto contains nuts, and demi-glace made with wine contains sulphites.', 'Скрытые — самые опасные: вустерский соус содержит рыбу, песто — орехи, а деми-глас на вине — сульфиты.'),
    },
    {
      text: l('Proveri deklaraciju svakog kupljenog proizvoda.', 'Check the label of every bought-in product.', 'Проверь этикетку каждого покупного продукта.'),
      params: [l('„može sadržati tragove…“', '"may contain traces of…"', '«может содержать следы…»')],
      done: l('Alergeni iz kupljenih proizvoda su u tabeli.', 'The allergens from bought-in products are in the table.', 'Аллергены из покупных продуктов внесены в таблицу.'),
      why: l('Začinska mešavina ili kocka za supu može da sadrži celer, gluten i slačicu, a da to nigde ne piše na tvojoj kartici.', 'A spice blend or stock cube can contain celery, gluten and mustard without your card saying so anywhere.', 'Смесь специй или бульонный кубик может содержать сельдерей, глютен и горчицу, хотя в твоей карте этого нет.'),
    },
    {
      text: l('Upiši alergene na karticu i na meni, brojevima.', 'Write the allergens on the card and on the menu, as numbers.', 'Внеси аллергены в карту и в меню цифрами.'),
      done: l('Uz svako jelo na meniju stoje brojevi alergena.', 'Every dish on the menu has its allergen numbers.', 'У каждого блюда в меню стоят номера аллергенов.'),
      why: l('Gost sa alergijom čita meni drugačije od ostalih. Brojevi mu štede pitanja i grešku.', 'A guest with an allergy reads the menu differently from everyone else. The numbers save them questions and mistakes.', 'Гость с аллергией читает меню иначе. Цифры избавляют его от вопросов и ошибок.'),
    },
    {
      text: l('Kad se sastojak promeni, ažuriraj karticu i meni istog dana.', 'When an ingredient changes, update the card and the menu the same day.', 'Когда меняется продукт, обнови карту и меню в тот же день.'),
      done: l('Tabela alergena odgovara onome što je danas u kuhinji.', 'The allergen table matches what is in the kitchen today.', 'Таблица аллергенов соответствует тому, что сегодня на кухне.'),
      why: l('Novi dobavljač, novi hleb, nova mešavina. Stara tabela je opasnija od nikakve, jer joj se veruje.', 'A new supplier, new bread, a new blend. An old table is more dangerous than none, because people trust it.', 'Новый поставщик, новый хлеб, новая смесь. Старая таблица опаснее отсутствия: ей доверяют.'),
    },
  ],
  mistake: {
    title: l('„Nema orašastih plodova“, a pesto u sosu ima indijski orah.', '"No nuts", but the pesto in the sauce has cashews.', '«Орехов нет», а в песто в соусе кешью.'),
    fix: l(
      'Alergen je u komponenti koju niko nije proverio. Pitanje gosta ide kuvaru koji zna recept, a odgovor se daje po kartici, nikad napamet.',
      'The allergen is in a component nobody checked. A guest\'s question goes to the cook who knows the recipe, and the answer comes from the card, never from memory.',
      'Аллерген в компоненте, который никто не проверил. Вопрос гостя идёт повару, знающему рецепт, а ответ дают по карте, никогда по памяти.',
    ),
  },
  think: {
    question: l('Gde se alergeni najčešće kriju?', 'Where do allergens hide most often?', 'Где чаще всего скрываются аллергены?'),
    options: [
      l('U sosovima, fondovima i kupljenim mešavinama', 'In sauces, stocks and bought-in blends', 'В соусах, бульонах и покупных смесях'),
      l('U glavnom sastojku', 'In the main ingredient', 'В главном продукте'),
      l('U povrću', 'In vegetables', 'В овощах'),
    ],
    answer: 0,
    explain: l(
      'Glavni sastojak vidi svako. Celer u fondu, riba u vustersiru i gluten u kocki za supu ne vide se, i tu nastaju greške.',
      'Everyone sees the main ingredient. Celery in the stock, fish in the Worcestershire and gluten in the stock cube are invisible, and that is where mistakes happen.',
      'Главный продукт видят все. Сельдерей в бульоне, рыбу в вустерском соусе и глютен в кубике не видно — там и случаются ошибки.',
    ),
  },
}

const freeFrom: Lesson = {
  id: '3.9.3',
  title: l('Bez glutena i bez laktoze', 'Gluten-free and lactose-free', 'Без глютена и без лактозы'),
  goal: l(
    'Prilagodiš jelo za gosta bez glutena ili bez laktoze, sa pravim zamenama i bez unakrsne kontaminacije.',
    'You adapt a dish for a gluten-free or lactose-free guest with the right swaps and no cross-contamination.',
    'Ты адаптируешь блюдо для гостя без глютена или без лактозы с правильными заменами и без перекрёстного загрязнения.',
  ),
  minutes: 7,
  key: { value: l('20 mg/kg', '20 mg/kg', '20 мг/кг'), label: l('granica „bez glutena“', 'the "gluten-free" limit', 'граница «без глютена»') },
  need: [
    { item: l('Kukuruzni skrob, pirinčano brašno', 'Cornflour, rice flour', 'Кукурузный крахмал, рисовая мука'), qty: l('po 100 g', '100 g each', 'по 100 г') },
    { item: l('Maslinovo ulje, kokosovo mleko', 'Olive oil, coconut milk', 'Оливковое масло, кокосовое молоко'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Posebna daska, šerpa i kašika', 'A separate board, pan and spoon', 'Отдельные доска, кастрюля и ложка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Gost bez glutena ili laktoze najčešće dobije salatu. Kuhinja koja zna zamene daje mu pravo jelo, a on se vraća i dovodi društvo.',
    'A gluten-free or lactose-free guest usually ends up with a salad. A kitchen that knows the swaps gives them a real dish, and they come back with friends.',
    'Гость без глютена или лактозы обычно получает салат. Кухня, знающая замены, даёт ему настоящее блюдо, и он возвращается с друзьями.',
  ),
  steps: [
    {
      text: l('Pitaj i razlikuj: celijakija, alergija ili intolerancija.', 'Ask and tell apart: coeliac disease, allergy or intolerance.', 'Спроси и различи: целиакия, аллергия или непереносимость.'),
      done: l('Znaš da li gostu smetaju i tragovi ili samo veća količina.', 'You know whether traces matter to the guest or only larger amounts.', 'Ты знаешь, вредят ли гостю следы или только большое количество.'),
      why: l('Kod celijakije škode i mrvice. Intolerancija na laktozu nije alergija na mleko: zreo parmezan može prvom, ali ne i drugom.', 'With coeliac disease even crumbs do harm. Lactose intolerance is not a milk allergy: aged Parmesan may be fine for the first but not the second.', 'При целиакии вредят даже крошки. Непереносимость лактозы — не аллергия на молоко: выдержанный пармезан допустим при первой, но не при второй.'),
    },
    {
      text: l('Sos zgusni skrobom umesto brašnom.', 'Thicken the sauce with starch instead of flour.', 'Загусти соус крахмалом вместо муки.'),
      params: [l('kukuruzni skrob: 1 kašika na 250 ml', 'cornflour: 1 tbsp per 250 ml', 'кукурузный крахмал: 1 ст. л. на 250 мл'), l('rastvoren u hladnoj vodi', 'slaked in cold water', 'разведённый в холодной воде')],
      done: l('Sos je gust i sjajan, bez zaprške.', 'The sauce is thick and glossy, with no roux.', 'Соус густой и блестящий, без ру.'),
      why: l('Skrob zgušnjava na ključanju za minut. Ne kuvaj ga dugo, jer se posle razredi.', 'Starch thickens at the boil within a minute. Do not cook it long, or it thins again.', 'Крахмал загущает при кипении за минуту. Не вари долго, иначе соус снова разжижится.'),
    },
    {
      text: l('Zameni proizvode sa glutenom sertifikovanim zamenama.', 'Swap gluten products for certified alternatives.', 'Замени продукты с глютеном сертифицированными аналогами.'),
      params: [l('soja sos → tamari bez glutena', 'soy sauce → gluten-free tamari', 'соевый соус → тамари без глютена'), l('mrvice → sertifikovane', 'crumbs → certified', 'панировка → сертифицированная')],
      done: l('Svaki proizvod u jelu ima oznaku „bez glutena“.', 'Every product in the dish carries a "gluten-free" label.', 'У каждого продукта в блюде есть маркировка «без глютена».'),
      why: l('„Bez glutena“ po EU pravilu znači najviše 20 mg/kg. Obična soja sos sadrži pšenicu.', '"Gluten-free" under EU rules means at most 20 mg/kg. Ordinary soy sauce contains wheat.', '«Без глютена» по правилам ЕС — не более 20 мг/кг. Обычный соевый соус содержит пшеницу.'),
    },
    {
      text: l('Za laktozu zameni puter i pavlaku.', 'For lactose, swap the butter and cream.', 'Для лактозы замени сливочное масло и сливки.'),
      params: [l('puter → maslinovo ulje', 'butter → olive oil', 'масло → оливковое масло'), l('pavlaka → kokosovo mleko', 'cream → coconut milk', 'сливки → кокосовое молоко')],
      done: l('Jelo ima kremastost i bogatstvo bez mlečnih proizvoda.', 'The dish has creaminess and richness without dairy.', 'У блюда есть кремовость и насыщенность без молочных продуктов.'),
      why: l('Kokosovo mleko nosi i svoj ukus. Gde ne paše, kremastost daje pire od povrća (3.3.1).', 'Coconut milk brings its own flavour. Where it does not fit, a vegetable purée gives the creaminess (3.3.1).', 'Кокосовое молоко несёт свой вкус. Где не подходит, кремовость даст овощное пюре (3.3.1).'),
    },
    {
      text: l('Pripremi posebno: čista daska, šerpa, kašika i sveže ulje.', 'Prepare it separately: a clean board, pan, spoon and fresh oil.', 'Готовь отдельно: чистая доска, кастрюля, ложка и свежее масло.'),
      done: l('Jelo nije dodirnulo ništa što je bilo u kontaktu sa glutenom.', 'The dish has touched nothing that was in contact with gluten.', 'Блюдо не касалось ничего, что контактировало с глютеном.'),
      why: l('Pomfrit iz friteze u kojoj se prže pohovane šnicle nije bez glutena, iako krompir jeste (3.11.4).', 'Fries from a fryer that also cooks breaded schnitzels are not gluten-free, even though potatoes are (3.11.4).', 'Картофель фри из фритюра, где жарят панированные шницели, не без глютена, хотя картофель — да (3.11.4).'),
    },
  ],
  mistake: {
    title: l('Jelo bez glutena prženo u istoj fritezi.', 'A gluten-free dish fried in the shared fryer.', 'Блюдо без глютена, обжаренное в общем фритюре.'),
    fix: l(
      'Ulje nosi mrvice brašna od svega što je prženo pre. Za gosta sa celijakijom to je isto kao da je dobio hleb. Posebno ulje i posebna posuda, ili jelo ne ide.',
      'The oil carries flour crumbs from everything fried before. For a coeliac guest that is the same as being served bread. Separate oil and a separate pan, or the dish does not go out.',
      'Масло несёт мучные крошки от всего, что жарили раньше. Для гостя с целиакией это то же, что подать хлеб. Отдельное масло и отдельная посуда, иначе блюдо не подаётся.',
    ),
  },
  think: {
    question: l('Gost ima intoleranciju na laktozu. Da li sme zreo parmezan?', 'A guest is lactose intolerant. Can they have aged Parmesan?', 'У гостя непереносимость лактозы. Можно ли ему выдержанный пармезан?'),
    options: [
      l('Obično da, zreli sirevi imaju skoro nimalo laktoze', 'Usually yes, aged cheeses have almost no lactose', 'Обычно да, в выдержанных сырах почти нет лактозы'),
      l('Ne, nikakav mlečni proizvod', 'No, no dairy at all', 'Нет, никаких молочных продуктов'),
      l('Samo ako je kuvan', 'Only if it is cooked', 'Только если приготовлен'),
    ],
    answer: 0,
    explain: l(
      'Laktoza se tokom zrenja razgradi. Ali alergija na mlečne proteine je druga stvar: tu je i parmezan zabranjen. Zato se prvo pita.',
      'Lactose breaks down as cheese ages. But a milk protein allergy is another matter: there even Parmesan is off-limits. That is why you ask first.',
      'Лактоза расщепляется при созревании сыра. Но аллергия на молочный белок — другое дело: там запрещён и пармезан. Поэтому сначала спрашивают.',
    ),
  },
}

const lighter: Lesson = {
  id: '3.9.4',
  title: l('Lakša verzija klasika', 'A lighter classic', 'Облегчённая классика'),
  goal: l(
    'Napraviš lakšu krem supu bez pavlake, sa istim osećajem kremastosti, i izmeriš razliku u MacroChefu.',
    'You make a lighter cream soup without cream, with the same creamy feel, and measure the difference in MacroChef.',
    'Ты готовишь облегчённый крем-суп без сливок с тем же ощущением кремовости и измеряешь разницу в MacroChef.',
  ),
  minutes: 6,
  key: { value: l('2', '2', '2'), label: l('merenja: pre i posle', 'measurements: before and after', 'замера: до и после') },
  need: [
    { item: l('Recept krem supe (8.6)', 'A cream soup recipe (8.6)', 'Рецепт крем-супа (8.6)'), qty: l('1', '1', '1') },
    { item: l('Krompir ili karfiol za kremastost', 'Potato or cauliflower for creaminess', 'Картофель или цветная капуста для кремовости'), qty: l('150 g', '150 g', '150 г') },
    { item: l('Grčki jogurt, limun, bilje', 'Greek yogurt, lemon, herbs', 'Греческий йогурт, лимон, зелень'), qty: l('100 g + 1 + 1', '100 g + 1 + 1', '100 г + 1 + 1') },
  ],
  why: l(
    'Lakše jelo ne sme da bude kazna. Gost treba da oseti isto zadovoljstvo, a razliku vidi samo u brojevima.',
    'A lighter dish must not feel like a punishment. The guest should feel the same pleasure and see the difference only in the numbers.',
    'Облегчённое блюдо не должно быть наказанием. Гость должен получить то же удовольствие, а разницу увидеть только в цифрах.',
  ),
  steps: [
    {
      text: l('Unesi originalni recept u MacroChef i zapiši makroe po porciji.', 'Enter the original recipe in MacroChef and note the macros per portion.', 'Внеси исходный рецепт в MacroChef и запиши макросы на порцию.'),
      done: l('Imaš brojeve „pre“.', 'You have the "before" numbers.', 'У тебя есть цифры «до».'),
      why: l('Bez merenja pre, „lakše“ je samo osećaj.', 'Without a measurement before, "lighter" is only a feeling.', 'Без замера «до» «легче» — лишь ощущение.'),
    },
    {
      text: l('Pavlaku zameni krompirom ili karfiolom kuvanim u supi.', 'Replace the cream with potato or cauliflower cooked in the soup.', 'Замени сливки картофелем или цветной капустой, сваренными в супе.'),
      params: [l('150 g na 1 L', '150 g per 1 L', '150 г на 1 л')],
      done: l('Izblendovana supa je gusta i kremasta bez pavlake.', 'The blended soup is thick and creamy without cream.', 'Пюрированный суп густой и кремовый без сливок.'),
      why: l('Skrob iz krompira i vlakna iz karfiola daju telo koje se oseća kao pavlaka.', 'The starch from potato and the fibre from cauliflower give a body that feels like cream.', 'Крахмал картофеля и волокна капусты дают тело, которое ощущается как сливки.'),
    },
    {
      text: l('Na kraju umešaj jogurt, van vatre.', 'At the end, stir in yogurt off the heat.', 'В конце вмешай йогурт вне огня.'),
      params: [l('100 g', '100 g', '100 г'), l('van vatre', 'off the heat', 'вне огня')],
      done: l('Supa je kremasta i blago kisela, bez zgrušavanja.', 'The soup is creamy and slightly tangy, with no curdling.', 'Суп кремовый и слегка кисловатый, без створаживания.'),
      why: l('Jogurt na ključanju se zgruša u bele mrvice. Van vatre daje kremu i svežinu.', 'Yogurt at the boil curdles into white flecks. Off the heat it gives creaminess and freshness.', 'Йогурт при кипении сворачивается белыми хлопьями. Вне огня даёт кремовость и свежесть.'),
    },
    {
      text: l('Izgubljenu bogatost vrati kiselinom, biljem i umamijem.', 'Bring back the lost richness with acid, herbs and umami.', 'Верни потерянную насыщенность кислотой, зеленью и умами.'),
      params: [l('kap limuna, vlasac, parmezan', 'a drop of lemon, chives, Parmesan', 'капля лимона, шнитт-лук, пармезан')],
      done: l('Supa ima dubinu i ne deluje „dijetalno“.', 'The soup has depth and does not taste "diet".', 'У супа есть глубина, и он не кажется «диетическим».'),
      why: l('Mast nosi ukus. Kad je skineš, ukus mora da dođe odnekud drugde (5.2, 5.4).', 'Fat carries flavour. When you take it out, flavour has to come from somewhere else (5.2, 5.4).', 'Жир несёт вкус. Убрав его, вкус нужно взять из другого источника (5.2, 5.4).'),
      drawing: 'umamiRow',
    },
    {
      text: l('Unesi novu verziju u MacroChef i uporedi.', 'Enter the new version in MacroChef and compare.', 'Внеси новую версию в MacroChef и сравни.'),
      done: l('Vidiš razliku u kalorijama i mastima po porciji.', 'You can see the difference in calories and fat per portion.', 'Ты видишь разницу в калориях и жирах на порцию.'),
      why: l('Broj je dokaz za tebe i za gosta. Na meniju možeš da napišeš kalorije, jer ih znaš.', 'The number is proof for you and for the guest. You can put calories on the menu because you know them.', 'Цифра — доказательство для тебя и гостя. Калории можно указать в меню, потому что ты их знаешь.'),
    },
  ],
  mistake: {
    title: l('Pavlaka samo izbačena, bez zamene.', 'The cream simply left out, with nothing in its place.', 'Сливки просто убраны, без замены.'),
    fix: l(
      'Supa postane retka i prazna, i gost oseti da mu je nešto uzeto. Svaka uklonjena stvar mora da se zameni: telo povrćem, a ukus kiselinom i umamijem.',
      'The soup turns thin and empty, and the guest feels something has been taken away. Everything removed must be replaced: body with vegetables, flavour with acid and umami.',
      'Суп становится жидким и пустым, и гость чувствует, что у него что-то отняли. Всё убранное нужно заменить: тело — овощами, вкус — кислотой и умами.',
    ),
  },
  think: {
    question: l('Šta daje kremastost supi bez pavlake?', 'What gives a soup creaminess without cream?', 'Что даёт супу кремовость без сливок?'),
    options: [
      l('Krompir ili karfiol izblendovan u supi', 'Potato or cauliflower blended into the soup', 'Картофель или цветная капуста, пюрированные в супе'),
      l('Više vode', 'More water', 'Больше воды'),
      l('Više soli', 'More salt', 'Больше соли'),
    ],
    answer: 0,
    explain: l(
      'Skrob i vlakna izblendovanog povrća zgusnu supu i daju joj glatkoću koju jezik oseća kao kremu.',
      'The starch and fibre of blended vegetables thicken the soup and give it a smoothness the tongue reads as cream.',
      'Крахмал и волокна пюрированных овощей загущают суп и дают гладкость, которую язык воспринимает как сливки.',
    ),
  },
}

const inMacroChef: Lesson = {
  id: '3.9.5',
  title: l('Jelo u MacroChefu', 'The dish in MacroChef', 'Блюдо в MacroChef'),
  goal: l(
    'Uneseš jelo sa recept-kartice u MacroChef tako da makroi po porciji i po 100 g budu tačni.',
    'You enter a dish from its recipe card into MacroChef so the macros per portion and per 100 g are accurate.',
    'Ты вносишь блюдо из техкарты в MacroChef так, чтобы макросы на порцию и на 100 г были точными.',
  ),
  minutes: 6,
  key: { value: l('sirovo', 'raw', 'сырое'), label: l('sastojci se unose sirovi', 'ingredients go in raw', 'продукты вносятся сырыми') },
  need: [
    { item: l('Recept-kartica jela (3.7.5)', 'The dish\'s recipe card (3.7.5)', 'Техкарта блюда (3.7.5)'), qty: l('1', '1', '1') },
    { item: l('Vaga i posuda poznate težine', 'Scale and a container of known weight', 'Весы и ёмкость известного веса'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('MacroChef', 'MacroChef', 'MacroChef'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Jelo sa tačnim makroima možeš da ponudiš sportistima, ljudima na dijeti i svakome ko broji. To je usluga koju većina restorana nema.',
    'A dish with accurate macros can be offered to athletes, people on a diet and anyone who counts. It is a service most restaurants do not have.',
    'Блюдо с точными макросами можно предложить спортсменам, людям на диете и всем, кто считает. Это услуга, которой нет у большинства ресторанов.',
  ),
  steps: [
    {
      text: l('Unesi sve sastojke u sirovim gramima, sa uljem i puterom.', 'Enter every ingredient in raw grams, oil and butter included.', 'Внеси все продукты в сыром весе, включая масло.'),
      done: l('Lista u MacroChefu odgovara kartici red po red.', 'The list in MacroChef matches the card line by line.', 'Список в MacroChef совпадает с картой построчно.'),
      why: l('Tabele hranljivih vrednosti daju sirove vrednosti. Pečeno meso izgubi vodu, pa bi težina bila pogrešna.', 'Nutrition tables give raw values. Cooked meat loses water, so its weight would be wrong.', 'Таблицы пищевой ценности дают значения для сырого. Готовое мясо теряет воду, и вес был бы неверным.'),
    },
    {
      text: l('Izmeri gotovo jelo i unesi njegovu težinu.', 'Weigh the finished dish and enter its weight.', 'Взвесь готовое блюдо и внеси его вес.'),
      params: [l('bez težine posude', 'without the container', 'без веса ёмкости')],
      done: l('MacroChef zna koliko je jelo izgubilo vode.', 'MacroChef knows how much water the dish has lost.', 'MacroChef знает, сколько воды потеряло блюдо.'),
      why: l('Gulaš od 2 kg sirovog posle kuvanja ima možda 1,6 kg. Makroi po 100 g zavise od te razlike.', 'A 2 kg raw goulash may weigh 1.6 kg once cooked. The macros per 100 g depend on that difference.', 'Гуляш из 2 кг сырых продуктов после варки весит, может, 1,6 кг. Макросы на 100 г зависят от этой разницы.'),
      drawing: 'scaleTare',
    },
    {
      text: l('Unesi broj porcija.', 'Enter the number of portions.', 'Внеси число порций.'),
      done: l('Vidiš makroe za jednu porciju.', 'You can see the macros for one portion.', 'Ты видишь макросы одной порции.'),
      why: l('Porcija sa kartice i porcija na tanjiru moraju biti iste. Inače su brojevi tačni, a jelo nije.', 'The portion on the card and the portion on the plate must match. Otherwise the numbers are right and the dish is not.', 'Порция в карте и на тарелке должны совпадать. Иначе цифры верны, а блюдо нет.'),
    },
    {
      text: l('Proveri makroe po porciji i po 100 g, da li imaju smisla.', 'Check the macros per portion and per 100 g for sense.', 'Проверь макросы на порцию и на 100 г на здравый смысл.'),
      done: l('Nijedan broj ne iskače: nema 50 g masti u salati.', 'No number jumps out: there is no 50 g of fat in a salad.', 'Ни одна цифра не выбивается: нет 50 г жира в салате.'),
      why: l('Najčešća greška je pogrešna jedinica: 100 umesto 10 g ulja. Zdrav razum hvata ono što softver ne vidi.', 'The commonest mistake is the wrong unit: 100 g of oil instead of 10. Common sense catches what the software cannot.', 'Самая частая ошибка — не та единица: 100 г масла вместо 10. Здравый смысл ловит то, чего не видит программа.'),
    },
    {
      text: l('Označi alergene i sačuvaj jelo uz recept-karticu.', 'Mark the allergens and save the dish alongside its recipe card.', 'Отметь аллергены и сохрани блюдо вместе с техкартой.'),
      done: l('Kartica i MacroChef imaju iste podatke.', 'The card and MacroChef hold the same data.', 'В карте и в MacroChef одинаковые данные.'),
      why: l('Kad se recept promeni, menjaš oba istog dana. Dva izvora koja se ne slažu su gora od jednog.', 'When the recipe changes, change both the same day. Two sources that disagree are worse than one.', 'Когда рецепт меняется, меняй оба в тот же день. Два несогласованных источника хуже одного.'),
    },
  ],
  mistake: {
    title: l('Uneto pečeno meso umesto sirovog.', 'Cooked meat entered instead of raw.', 'Внесено жареное мясо вместо сырого.'),
    fix: l(
      'Pečeno meso ima manje vode i više proteina po gramu. Ako ga uneseš kao sirovo, makroi su pogrešni za četvrtinu. Sve se unosi sirovo, a gotovo jelo se meri na kraju.',
      'Cooked meat has less water and more protein per gram. Entered as raw, the macros are off by a quarter. Everything goes in raw, and the finished dish is weighed at the end.',
      'В жареном мясе меньше воды и больше белка на грамм. Если внести его как сырое, макросы ошибутся на четверть. Всё вносится сырым, а готовое блюдо взвешивается в конце.',
    ),
  },
  think: {
    question: l('Zašto se gotovo jelo meri posle kuvanja?', 'Why is the finished dish weighed after cooking?', 'Зачем взвешивать готовое блюдо после готовки?'),
    options: [
      l('Kuvanje menja težinu, pa i makroe po 100 g', 'Cooking changes the weight, and so the macros per 100 g', 'Готовка меняет вес, а значит и макросы на 100 г'),
      l('Da se proveri vaga', 'To check the scale', 'Чтобы проверить весы'),
      l('Zbog cene', 'Because of the price', 'Из-за цены'),
    ],
    answer: 0,
    explain: l(
      'Voda ispari, a proteini, masti i ugljeni hidrati ostaju. Isto jelo je posle kuvanja gušće, pa 100 g ima više svega.',
      'Water evaporates, while the protein, fat and carbohydrate stay. The same dish is denser after cooking, so 100 g contains more of everything.',
      'Вода испаряется, а белки, жиры и углеводы остаются. После готовки то же блюдо плотнее, и в 100 г всего больше.',
    ),
  },
}

export const nutritionLessons: Lesson[] = [balance, allergens, freeFrom, lighter, inMacroChef]
