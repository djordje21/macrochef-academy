import { l, type Lesson } from '../types'

// Grade 3 · Module 10 · Food cost and purchasing. A kitchen earns or loses money in grams: the real price of
// a cleaned fillet, the cost of every portion, the price on the menu, the goods at the back door and the
// stocktake that shows where the difference went. Prices in the examples are illustrative.

const yieldTest: Lesson = {
  id: '3.10.1',
  title: l('Yield test', 'The yield test', 'Тест выхода'),
  goal: l(
    'Izmeriš koliko upotrebljivog mesa ili ribe ostane posle čišćenja i izračunaš njegovu stvarnu cenu po kilogramu.',
    'You measure how much usable meat or fish is left after trimming and work out its real price per kilo.',
    'Ты измеряешь, сколько пригодного мяса или рыбы остаётся после зачистки, и считаешь его реальную цену за килограмм.',
  ),
  minutes: 7,
  key: { value: l('45%', '45%', '45%'), label: l('fileta iz celog brancina', 'fillet from a whole sea bass', 'филе из целого сибаса') },
  need: [
    { item: l('Cela riba ili komad mesa sa kostima', 'A whole fish or a cut on the bone', 'Целая рыба или кусок мяса на кости'), qty: l('2 kg', '2 kg', '2 кг') },
    { item: l('Vaga i posude za delove', 'Scale and containers for each part', 'Весы и ёмкости для частей'), qty: l('1 + 3', '1 + 3', '1 + 3') },
    { item: l('Faktura sa cenom po kg', 'The invoice with the price per kg', 'Счёт с ценой за кг'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Kilogram celog brancina nije kilogram fileta. Ko računa jelo po ceni iz fakture, misli da zarađuje duplo više nego što zaista zarađuje.',
    'A kilo of whole sea bass is not a kilo of fillet. Whoever costs a dish at the invoice price thinks they earn twice what they really do.',
    'Килограмм целого сибаса — не килограмм филе. Кто считает блюдо по цене из счёта, думает, что зарабатывает вдвое больше, чем на самом деле.',
  ),
  steps: [
    {
      text: l('Izmeri sirovinu onako kako je stigla.', 'Weigh the product exactly as it arrived.', 'Взвесь продукт таким, каким он пришёл.'),
      params: [l('npr. brancin 2,0 kg', 'e.g. sea bass 2.0 kg', 'например сибас 2,0 кг'), l('1.600 din/kg', '1,600 RSD/kg', '1600 дин/кг')],
      done: l('Sirova težina i cena su zapisane.', 'The raw weight and price are written down.', 'Сырой вес и цена записаны.'),
      why: l('Faktura kaže koliko si platio. Yield test kaže šta si zapravo dobio.', 'The invoice says what you paid. The yield test says what you actually got.', 'Счёт говорит, сколько заплачено. Тест выхода — что на самом деле получено.'),
      drawing: 'portionScale',
    },
    {
      text: l('Očisti i porcioniši kao za servis, pa izmeri upotrebljiv deo.', 'Clean and portion as for service, then weigh the usable part.', 'Почисти и порционируй как для сервиса, затем взвесь пригодную часть.'),
      params: [l('npr. 0,9 kg fileta', 'e.g. 0.9 kg of fillet', 'например 0,9 кг филе')],
      done: l('Znaš tačnu težinu onoga što ide na tanjir.', 'You know the exact weight of what goes on the plate.', 'Ты знаешь точный вес того, что идёт на тарелку.'),
      why: l('Čisti tako kao na smeni, ne pažljivije. Test mora da pokaže stvarni rad kuhinje.', 'Clean it as you would on shift, not more carefully. The test must show how the kitchen really works.', 'Чисти так, как на смене, не аккуратнее. Тест должен показать реальную работу кухни.'),
      drawing: 'filletRound',
    },
    {
      text: l('Izmeri i zapiši ostatke koji se koriste.', 'Weigh and note the trim that gets used.', 'Взвесь и запиши обрезки, которые используются.'),
      params: [l('kosti i glava za fond', 'bones and head for stock', 'кости и голова для бульона')],
      done: l('Upotrebljivi ostaci su odvojeni od otpada.', 'Usable trim is separated from waste.', 'Пригодные обрезки отделены от отходов.'),
      why: l('Kosti koje odu u fond nisu otpad. One smanjuju trošak fonda (15.1).', 'Bones that go into stock are not waste. They lower the cost of the stock (15.1).', 'Кости, ушедшие в бульон, — не отходы. Они снижают стоимость бульона (15.1).'),
    },
    {
      text: l('Izračunaj yield: upotrebljivo podeljeno sa sirovim.', 'Work out the yield: usable divided by raw.', 'Посчитай выход: пригодное, делённое на сырое.'),
      params: [l('0,9 / 2,0 = 45%', '0.9 / 2.0 = 45%', '0,9 / 2,0 = 45%')],
      done: l('Imaš procenat iskorišćenja za ovu sirovinu.', 'You have a yield percentage for this product.', 'У тебя есть процент выхода для этого продукта.'),
      why: l('Zapiši yield u tabelu. Sledeći put ne meriš, nego računaš.', 'Write the yield into a table. Next time you do not weigh, you calculate.', 'Запиши выход в таблицу. В следующий раз не взвешиваешь, а считаешь.'),
    },
    {
      text: l('Izračunaj stvarnu cenu: cena podeljena sa yieldom.', 'Work out the real price: price divided by yield.', 'Посчитай реальную цену: цена, делённая на выход.'),
      params: [l('1.600 / 0,45 = 3.556 din/kg', '1,600 / 0.45 = 3,556 RSD/kg', '1600 / 0,45 = 3556 дин/кг')],
      done: l('Znaš koliko zaista košta kilogram fileta.', 'You know what a kilo of fillet really costs.', 'Ты знаешь, сколько на самом деле стоит килограмм филе.'),
      why: l('Ova cena ide u recept-karticu (3.10.2). Cena iz fakture tamo nema šta da traži.', 'This price goes on the recipe card (3.10.2). The invoice price has no place there.', 'Эта цена идёт в техкарту (3.10.2). Цене из счёта там не место.'),
    },
  ],
  mistake: {
    title: l('Jelo računato po ceni cele ribe iz fakture.', 'A dish costed at the whole-fish invoice price.', 'Блюдо посчитано по цене целой рыбы из счёта.'),
    fix: l(
      'Food cost izgleda kao 15%, a stvarno je 33%. Svaka sirovina sa otpadom ide kroz yield test, a u karticu ulazi stvarna cena očišćenog dela.',
      'The food cost looks like 15% but is really 33%. Every product with trim goes through a yield test, and the real price of the cleaned part goes on the card.',
      'Фудкост выглядит как 15%, а на деле 33%. Каждый продукт с отходами проходит тест выхода, а в карту идёт реальная цена очищенной части.',
    ),
  },
  think: {
    question: l('Brancin košta 1.600 din/kg, a yield je 50%. Koliko košta kilogram fileta?', 'Sea bass costs 1,600 RSD/kg and the yield is 50%. What does a kilo of fillet cost?', 'Сибас стоит 1600 дин/кг, выход 50%. Сколько стоит килограмм филе?'),
    options: [
      l('3.200 din', '3,200 RSD', '3200 дин'),
      l('1.600 din', '1,600 RSD', '1600 дин'),
      l('800 din', '800 RSD', '800 дин'),
    ],
    answer: 0,
    explain: l(
      'Za kilogram fileta treba ti dva kilograma cele ribe. Cena po kilogramu fileta je zato duplo veća: 1.600 / 0,5.',
      'For a kilo of fillet you need two kilos of whole fish. So the price per kilo of fillet doubles: 1,600 / 0.5.',
      'Для килограмма филе нужно два килограмма целой рыбы. Поэтому цена филе вдвое выше: 1600 / 0,5.',
    ),
  },
}

const costedCard: Lesson = {
  id: '3.10.2',
  title: l('Recept-kartica sa cenom', 'The costed recipe card', 'Техкарта с себестоимостью'),
  goal: l(
    'Dopuniš recept-karticu cenama i izračunaš tačan trošak jedne porcije.',
    'You add prices to the recipe card and work out the exact cost of one portion.',
    'Ты дополняешь техкарту ценами и считаешь точную себестоимость одной порции.',
  ),
  minutes: 7,
  key: { value: l('din', 'RSD', 'дин'), label: l('trošak po porciji', 'cost per portion', 'себестоимость порции') },
  need: [
    { item: l('Recept-kartica (3.7.5)', 'Recipe card (3.7.5)', 'Техкарта (3.7.5)'), qty: l('1', '1', '1') },
    { item: l('Poslednje fakture dobavljača', 'The latest supplier invoices', 'Последние счета поставщиков'), qty: l('sve', 'all', 'все') },
    { item: l('Tabela yieldova (3.10.1)', 'The yield table (3.10.1)', 'Таблица выходов (3.10.1)'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Bez troška porcije cena na meniju je nagađanje. Sa njim je odluka.',
    'Without the portion cost, the menu price is a guess. With it, it is a decision.',
    'Без себестоимости порции цена в меню — догадка. С ней — решение.',
  ),
  steps: [
    {
      text: l('Uz svaki sastojak upiši nabavnu cenu po kilogramu ili litru.', 'Next to each ingredient, write the purchase price per kilo or litre.', 'Рядом с каждым продуктом запиши закупочную цену за килограмм или литр.'),
      done: l('Svaki red kartice ima cenu iz poslednje fakture.', 'Every line of the card has a price from the latest invoice.', 'В каждой строке карты есть цена из последнего счёта.'),
      why: l('Cene se menjaju. Kartica sa cenama od pre godinu dana laže.', 'Prices change. A card with last year\'s prices lies.', 'Цены меняются. Карта с прошлогодними ценами врёт.'),
    },
    {
      text: l('Za sastojke sa otpadom koristi stvarnu cenu iz yield testa.', 'For ingredients with trim, use the real price from the yield test.', 'Для продуктов с отходами используй реальную цену из теста выхода.'),
      params: [l('file brancina: 3.556 din/kg', 'sea bass fillet: 3,556 RSD/kg', 'филе сибаса: 3556 дин/кг')],
      done: l('Meso, riba i povrće sa ljuskom imaju cenu očišćenog dela.', 'Meat, fish and vegetables with peel carry the price of the cleaned part.', 'Мясо, рыба и овощи с кожурой имеют цену очищенной части.'),
      why: l('Ovo je najčešća rupa u recept-karticama, i najskuplja.', 'This is the most common hole in recipe cards, and the most expensive.', 'Это самая частая дыра в техкартах и самая дорогая.'),
    },
    {
      text: l('Izračunaj trošak svakog reda: grami puta cena po gramu.', 'Work out each line\'s cost: grams times the price per gram.', 'Посчитай стоимость каждой строки: граммы, умноженные на цену за грамм.'),
      params: [l('180 g × 3,556 din/g = 640 din', '180 g × 3.556 RSD/g = 640 RSD', '180 г × 3,556 дин/г = 640 дин')],
      done: l('Svaki red ima svoj trošak u dinarima.', 'Each line has its cost in dinars.', 'У каждой строки своя стоимость в динарах.'),
      why: l('Tabela to radi sama kad je jednom napraviš. Bitno je da su grami i cene tačni.', 'A spreadsheet does this on its own once set up. What matters is that the grams and prices are right.', 'Таблица делает это сама, если её один раз настроить. Важно, чтобы граммы и цены были точными.'),
    },
    {
      text: l('Saberi redove i dodaj 5% za sitnice.', 'Add up the lines and add 5% for the small things.', 'Сложи строки и добавь 5% на мелочи.'),
      params: [l('+5%: so, ulje, bilje, garnir', '+5%: salt, oil, herbs, garnish', '+5%: соль, масло, зелень, гарнир')],
      done: l('Imaš ukupni trošak recepta.', 'You have the total cost of the recipe.', 'У тебя есть общая стоимость рецепта.'),
      why: l('So i ulje se retko mere po jelu, ali se troše. Pet procenata ih pokriva bez merenja svakog grama.', 'Salt and oil are rarely measured per dish, but they get used. Five per cent covers them without weighing every gram.', 'Соль и масло редко меряют на блюдо, но они расходуются. Пять процентов покрывают их без взвешивания каждого грамма.'),
    },
    {
      text: l('Podeli ukupan trošak brojem porcija.', 'Divide the total cost by the number of portions.', 'Раздели общую стоимость на число порций.'),
      done: l('Na vrhu kartice stoji trošak jedne porcije.', 'The cost of one portion sits at the top of the card.', 'Вверху карты указана себестоимость одной порции.'),
      why: l('Ovaj broj ide u cenu (3.10.3) i u matricu menija (3.8.4).', 'This number goes into the price (3.10.3) and the menu matrix (3.8.4).', 'Это число идёт в цену (3.10.3) и в матрицу меню (3.8.4).'),
    },
  ],
  mistake: {
    title: l('Kartica napravljena jednom i nikad ažurirana.', 'A card made once and never updated.', 'Карта сделана однажды и ни разу не обновлялась.'),
    fix: l(
      'Puter poskupi 30%, a cena jela ostane ista godinu dana. Cene u kartici proveravaj bar jednom mesečno, a skupe sirovine pri svakoj promeni fakture.',
      'Butter goes up 30% and the dish price stays the same for a year. Check card prices at least monthly, and the expensive items whenever the invoice changes.',
      'Масло дорожает на 30%, а цена блюда год остаётся прежней. Проверяй цены в карте минимум раз в месяц, а дорогие позиции — при каждом изменении счёта.',
    ),
  },
  think: {
    question: l('Koja cena ribe ide u recept-karticu?', 'Which fish price goes on the recipe card?', 'Какая цена рыбы идёт в техкарту?'),
    options: [
      l('Cena očišćenog fileta iz yield testa', 'The cleaned fillet price from the yield test', 'Цена очищенного филе из теста выхода'),
      l('Cena cele ribe iz fakture', 'The whole-fish price from the invoice', 'Цена целой рыбы из счёта'),
      l('Prosečna cena na tržištu', 'The average market price', 'Средняя рыночная цена'),
    ],
    answer: 0,
    explain: l(
      'Na tanjir ide file, a ne cela riba. Kartica mora da računa ono što gost stvarno dobija.',
      'The fillet goes on the plate, not the whole fish. The card must cost what the guest actually gets.',
      'На тарелку идёт филе, а не целая рыба. Карта должна считать то, что гость реально получает.',
    ),
  },
}

const pricing: Lesson = {
  id: '3.10.3',
  title: l('Food cost i prodajna cena', 'Food cost and the menu price', 'Фудкост и цена в меню'),
  goal: l(
    'Iz troška porcije i ciljnog food costa izračunaš prodajnu cenu jela i proveriš je na tržištu.',
    'From the portion cost and a target food cost you work out a dish\'s menu price and check it against the market.',
    'Из себестоимости порции и целевого фудкоста ты считаешь цену блюда в меню и сверяешь её с рынком.',
  ),
  minutes: 6,
  key: { value: l('30%', '30%', '30%'), label: l('ciljni food cost', 'target food cost', 'целевой фудкост') },
  need: [
    { item: l('Trošak porcije (3.10.2)', 'The portion cost (3.10.2)', 'Себестоимость порции (3.10.2)'), qty: l('1', '1', '1') },
    { item: l('Cene sličnih jela u gradu', 'Prices of similar dishes in town', 'Цены похожих блюд в городе'), qty: l('3–5', '3–5', '3–5') },
    { item: l('Kalkulator', 'Calculator', 'Калькулятор'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Food cost je udeo hrane u ceni jela. Ostatak plaća ljude, kiriju, struju i, na kraju, zaradu.',
    'Food cost is the share of the dish price that goes on food. The rest pays for people, rent, power and, in the end, profit.',
    'Фудкост — доля продуктов в цене блюда. Остальное оплачивает людей, аренду, электричество и, в итоге, прибыль.',
  ),
  steps: [
    {
      text: l('Odredi ciljni food cost za kategoriju.', 'Set the target food cost for the category.', 'Определи целевой фудкост для категории.'),
      params: [l('25–35%', '25–35%', '25–35%')],
      done: l('Za svaku kategoriju menija znaš ciljni procenat.', 'You know the target percentage for each menu category.', 'Для каждой категории меню ты знаешь целевой процент.'),
      why: l('Deserti i testenine mogu niže, skupi proteini više. Prosek menija je ono što se računa.', 'Desserts and pasta can run lower, expensive proteins higher. The menu average is what counts.', 'Десерты и паста могут быть ниже, дорогие белки выше. Важен средний показатель меню.'),
    },
    {
      text: l('Cena bez PDV-a: trošak podeljen ciljnim procentom.', 'Price before VAT: cost divided by the target percentage.', 'Цена без НДС: себестоимость, делённая на целевой процент.'),
      params: [l('450 / 0,30 = 1.500 din', '450 / 0.30 = 1,500 RSD', '450 / 0,30 = 1500 дин')],
      done: l('Imaš cenu koja pokriva ciljni food cost.', 'You have a price that hits the target food cost.', 'У тебя цена, соответствующая целевому фудкосту.'),
      why: l('Deli se, ne množi. Trošak puta tri izgleda isto, ali tek posle PDV-a vidiš razliku.', 'You divide, not multiply. Cost times three looks the same, but the difference shows after VAT.', 'Делят, а не умножают. Себестоимость ×3 выглядит так же, но разница видна после НДС.'),
    },
    {
      text: l('Dodaj PDV.', 'Add VAT.', 'Добавь НДС.'),
      params: [l('+20%', '+20%', '+20%'), l('1.500 → 1.800 din', '1,500 → 1,800 RSD', '1500 → 1800 дин')],
      done: l('Imaš cenu koju gost plaća.', 'You have the price the guest pays.', 'У тебя цена, которую платит гость.'),
      why: l('PDV nije zarada restorana. Food cost se uvek računa na cenu bez PDV-a.', 'VAT is not the restaurant\'s money. Food cost is always worked out on the price before VAT.', 'НДС — не доход ресторана. Фудкост всегда считают от цены без НДС.'),
    },
    {
      text: l('Uporedi sa tržištem i zaokruži.', 'Compare with the market and round off.', 'Сравни с рынком и округли.'),
      params: [l('3–5 sličnih jela', '3–5 similar dishes', '3–5 похожих блюд')],
      done: l('Cena je u rasponu koji gost očekuje za takvo jelo i takav restoran.', 'The price sits in the range guests expect for such a dish and restaurant.', 'Цена в диапазоне, который гость ожидает для такого блюда и ресторана.'),
      why: l('Ako je cena mnogo iznad tržišta, problem je trošak jela, a ne cena. Vrati se na karticu.', 'If the price is far above the market, the problem is the dish cost, not the price. Go back to the card.', 'Если цена сильно выше рынка, проблема в себестоимости, а не в цене. Вернись к карте.'),
    },
    {
      text: l('Proveri maržu u dinarima, ne samo procenat.', 'Check the margin in dinars, not just the percentage.', 'Проверь маржу в динарах, а не только процент.'),
      params: [l('1.500 − 450 = 1.050 din', '1,500 − 450 = 1,050 RSD', '1500 − 450 = 1050 дин')],
      done: l('Znaš koliko jelo donosi po prodatoj porciji.', 'You know what the dish brings in per portion sold.', 'Ты знаешь, сколько блюдо приносит с каждой проданной порции.'),
      why: l('Odrezak sa 40% food costa može doneti više dinara od testenine sa 20%. Računi se plaćaju dinarima (3.8.4).', 'A steak at 40% food cost can bring in more dinars than pasta at 20%. Bills are paid in dinars (3.8.4).', 'Стейк с фудкостом 40% может принести больше динаров, чем паста с 20%. Счета оплачиваются динарами (3.8.4).'),
    },
  ],
  mistake: {
    title: l('Cena određena „kao kod konkurencije“, bez troška.', 'A price set "like the competition", without the cost.', 'Цена назначена «как у конкурентов», без расчёта себестоимости.'),
    fix: l(
      'Konkurencija ima druge dobavljače, porcije i kiriju. Ista cena kod tebe može da znači gubitak. Prvo trošak i ciljni procenat, pa tek onda poređenje sa tržištem.',
      'The competition has different suppliers, portions and rent. The same price at your place can mean a loss. First the cost and target percentage, then the market comparison.',
      'У конкурентов другие поставщики, порции и аренда. Та же цена у тебя может означать убыток. Сначала себестоимость и целевой процент, потом сравнение с рынком.',
    ),
  },
  think: {
    question: l('Trošak porcije je 600 din, ciljni food cost 30%. Kolika je cena bez PDV-a?', 'Portion cost is 600 RSD, target food cost 30%. What is the price before VAT?', 'Себестоимость порции 600 дин, целевой фудкост 30%. Какова цена без НДС?'),
    options: [
      l('2.000 din', '2,000 RSD', '2000 дин'),
      l('1.800 din', '1,800 RSD', '1800 дин'),
      l('780 din', '780 RSD', '780 дин'),
    ],
    answer: 0,
    explain: l(
      '600 / 0,30 = 2.000. Ako bi pomnožio sa tri (1.800), food cost bi bio 33%, a ne 30%.',
      '600 / 0.30 = 2,000. Multiplying by three (1,800) would give a 33% food cost, not 30%.',
      '600 / 0,30 = 2000. Если умножить на три (1800), фудкост будет 33%, а не 30%.',
    ),
  },
}

const receiving: Lesson = {
  id: '3.10.4',
  title: l('Prijem robe i dobavljači', 'Receiving goods and suppliers', 'Приёмка товара и поставщики'),
  goal: l(
    'Primiš robu na vratima kuhinje: temperatura, težina, kvalitet i rok, i vratiš ono što ne valja.',
    'You receive goods at the kitchen door: temperature, weight, quality and date, and send back what is not right.',
    'Ты принимаешь товар у дверей кухни: температура, вес, качество и срок — и возвращаешь то, что не годится.',
  ),
  minutes: 6,
  key: { value: l('5°C', '5°C', '5°C'), label: l('najviše za ohlađenu robu', 'the maximum for chilled goods', 'максимум для охлаждённого товара') },
  need: [
    { item: l('Termometar sa ubodnom sondom', 'A probe thermometer', 'Термометр со щупом'), qty: l('1', '1', '1') },
    { item: l('Vaga i otpremnica', 'Scale and the delivery note', 'Весы и накладная'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Lista za prijem robe', 'A goods-in log', 'Журнал приёмки'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Šta prođe kroz vrata, plaćeno je i ulazi u hranu. Greška na prijemu se kasnije plaća dva puta: u novcu i u kvalitetu jela.',
    'Whatever comes through the door is paid for and goes into the food. A mistake at the door is paid for twice later: in money and in the quality of the dish.',
    'Всё, что прошло через дверь, оплачено и идёт в еду. Ошибка при приёмке потом оплачивается дважды: деньгами и качеством блюда.',
  ),
  steps: [
    {
      text: l('Izmeri temperaturu ohlađene i smrznute robe.', 'Take the temperature of chilled and frozen goods.', 'Измерь температуру охлаждённого и замороженного товара.'),
      params: [l('ohlađeno do 5°C', 'chilled up to 5°C', 'охлаждённое до 5°C'), l('smrznuto −18°C ili niže', 'frozen −18°C or colder', 'замороженное −18°C и ниже')],
      done: l('Temperatura je upisana u listu za svaku isporuku.', 'The temperature is logged for every delivery.', 'Температура записана в журнал для каждой поставки.'),
      why: l('Ako je meso stiglo na 9°C, sat je već odbrojavao u kamionu. Ti to ne možeš da vratiš.', 'If meat arrives at 9°C, the clock was already running in the van. You cannot undo that.', 'Если мясо пришло при 9°C, время уже шло в машине. Это не вернуть.'),
      drawing: 'fridgeTemp',
    },
    {
      text: l('Izmeri robu i uporedi sa otpremnicom.', 'Weigh the goods and compare with the delivery note.', 'Взвесь товар и сверь с накладной.'),
      done: l('Težina odgovara otpremnici, ili je razlika zapisana.', 'The weight matches the delivery note, or the difference is recorded.', 'Вес совпадает с накладной, или разница записана.'),
      why: l('Pola kilograma manje u svakoj isporuci mesa je, za godinu dana, mnogo novca.', 'Half a kilo short on every meat delivery adds up to a lot of money over a year.', 'Полкило недовеса в каждой поставке мяса за год — большие деньги.'),
      drawing: 'portionScale',
    },
    {
      text: l('Proveri izgled, miris i rok trajanja.', 'Check the look, smell and use-by date.', 'Проверь вид, запах и срок годности.'),
      params: [l('riba: bistre oči, crvene škrge', 'fish: clear eyes, red gills', 'рыба: ясные глаза, красные жабры')],
      done: l('Sve je sveže i sa dovoljno dugim rokom.', 'Everything is fresh and has a long enough date.', 'Всё свежее и с достаточно долгим сроком.'),
      why: l('Roba sa rokom za dva dana, a planirana za kraj nedelje, je otpad koji si platio (2.4.1).', 'Goods with two days left but planned for the end of the week are waste you have paid for (2.4.1).', 'Товар со сроком на два дня, запланированный на конец недели, — оплаченные отходы (2.4.1).'),
      drawing: 'fishFresh',
    },
    {
      text: l('Ono što ne valja vrati odmah, uz zapisnik.', 'Send back what is not right at once, with a written note.', 'То, что не годится, возвращай сразу, с актом.'),
      done: l('Vozač nosi nazad lošu robu, a ti imaš kopiju zapisnika.', 'The driver takes the bad goods back and you keep a copy of the note.', 'Водитель забирает плохой товар, а у тебя копия акта.'),
      why: l('Posle potpisa otpremnice roba je tvoja. Prigovor sutra telefonom retko vrati novac.', 'Once the delivery note is signed, the goods are yours. A complaint by phone tomorrow rarely gets the money back.', 'После подписи накладной товар твой. Жалоба по телефону завтра редко возвращает деньги.'),
    },
    {
      text: l('Hladnu robu skloni u frižider prvu, odmah.', 'Put the cold goods away first, straight away.', 'Холодный товар убирай в холодильник первым и сразу.'),
      params: [l('do 15 min', 'within 15 min', 'в течение 15 мин')],
      done: l('Ohlađena i smrznuta roba je na svom mestu za četvrt sata.', 'Chilled and frozen goods are in their place within a quarter of an hour.', 'Охлаждённый и замороженный товар на своём месте за четверть часа.'),
      why: l('Kutija ostavljena na pultu pola sata gubi ono što je hladan lanac čuvao. Nova roba ide iza stare (3.1.3).', 'A box left on the counter for half an hour loses what the cold chain protected. New stock goes behind old (3.1.3).', 'Коробка, оставленная на столе на полчаса, теряет то, что берегла холодовая цепь. Новое ставят за старое (3.1.3).'),
    },
  ],
  mistake: {
    title: l('Otpremnica potpisana bez provere, „jer žurimo“.', 'The delivery note signed without checking, "because we are busy".', 'Накладная подписана без проверки, «потому что спешим».'),
    fix: l(
      'Dobavljač brzo nauči ko proverava, a ko ne. Pet minuta na vratima, svaki put, i loša roba prestaje da stiže.',
      'Suppliers quickly learn who checks and who does not. Five minutes at the door, every time, and bad goods stop arriving.',
      'Поставщики быстро понимают, кто проверяет, а кто нет. Пять минут у двери каждый раз — и плохой товар перестаёт приходить.',
    ),
  },
  think: {
    question: l('Piletina stiže na 9°C. Šta radiš?', 'Chicken arrives at 9°C. What do you do?', 'Курица прибыла при 9°C. Что делаешь?'),
    options: [
      l('Vraćaš je uz zapisnik', 'Send it back with a written note', 'Возвращаешь с актом'),
      l('Brzo je staviš u frižider', 'Get it into the fridge fast', 'Быстро убираешь в холодильник'),
      l('Iskoristiš je danas', 'Use it today', 'Используешь сегодня'),
    ],
    answer: 0,
    explain: l(
      'Ne znaš koliko je dugo bila u opasnoj zoni. Frižider ne poništava vreme koje je već prošlo. Roba se vraća, a dobavljač dobija zapisnik.',
      'You do not know how long it spent in the danger zone. The fridge does not undo time already passed. It goes back, and the supplier gets a written note.',
      'Неизвестно, сколько она пробыла в опасной зоне. Холодильник не отменяет прошедшее время. Товар возвращается, поставщик получает акт.',
    ),
  },
}

const stocktake: Lesson = {
  id: '3.10.5',
  title: l('Inventura i otpad', 'Stocktake and waste', 'Инвентаризация и отходы'),
  goal: l(
    'Uradiš mesečnu inventuru, izračunaš stvarni food cost i nađeš gde je razlika od teorijskog.',
    'You do a monthly stocktake, work out the actual food cost and find where it differs from the theoretical.',
    'Ты проводишь ежемесячную инвентаризацию, считаешь фактический фудкост и находишь, где он расходится с теоретическим.',
  ),
  minutes: 7,
  key: { value: l('1×', '1×', '1×'), label: l('mesečno, istog dana', 'a month, on the same day', 'в месяц, в один и тот же день') },
  need: [
    { item: l('Lista zaliha po magacinu i frižiderima', 'A stock list by store and fridge', 'Список запасов по складу и холодильникам'), qty: l('1', '1', '1') },
    { item: l('Fakture za mesec i prihod od hrane', 'The month\'s invoices and food revenue', 'Счета за месяц и выручка от еды'), qty: l('1', '1', '1') },
    { item: l('Lista otpada (3.1.3)', 'The waste log (3.1.3)', 'Журнал отходов (3.1.3)'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Recept-kartice kažu koliko bi hrana trebalo da košta. Inventura kaže koliko je stvarno koštala. Razlika je novac koji je negde nestao.',
    'Recipe cards say what the food should have cost. The stocktake says what it really cost. The difference is money that went somewhere.',
    'Техкарты говорят, сколько еда должна была стоить. Инвентаризация — сколько она стоила на самом деле. Разница — деньги, которые куда-то ушли.',
  ),
  steps: [
    {
      text: l('Poslednjeg dana u mesecu prebroj sve zalihe, uvek istim redom.', 'On the last day of the month, count all the stock, always in the same order.', 'В последний день месяца пересчитай все запасы, всегда в одном порядке.'),
      params: [l('količina × nabavna cena', 'quantity × purchase price', 'количество × закупочная цена')],
      done: l('Imaš vrednost zaliha u dinarima.', 'You have the value of the stock in dinars.', 'У тебя есть стоимость запасов в динарах.'),
      why: l('Isti red, isti dan, ista osoba ako može. Tako se brojevi mogu porediti mesec za mesecom.', 'Same order, same day, same person if possible. That way the numbers compare month to month.', 'Тот же порядок, тот же день, по возможности тот же человек. Так цифры сравнимы месяц к месяцу.'),
    },
    {
      text: l('Izračunaj potrošnju: početno stanje plus nabavka minus krajnje stanje.', 'Work out consumption: opening stock plus purchases minus closing stock.', 'Посчитай расход: начальный остаток плюс закупки минус конечный остаток.'),
      params: [l('npr. 300.000 + 850.000 − 250.000 = 900.000 din', 'e.g. 300,000 + 850,000 − 250,000 = 900,000 RSD', 'например 300 000 + 850 000 − 250 000 = 900 000 дин')],
      done: l('Znaš koliko je hrane potrošeno za mesec.', 'You know how much food was used in the month.', 'Ты знаешь, сколько еды израсходовано за месяц.'),
      why: l('Fakture same lažu: roba kupljena 30. se troši sledećeg meseca. Inventura to ispravlja.', 'Invoices alone lie: goods bought on the 30th are used next month. The stocktake corrects that.', 'Одни счета врут: товар, купленный 30-го, расходуется в следующем месяце. Инвентаризация это исправляет.'),
    },
    {
      text: l('Stvarni food cost: potrošnja podeljena prihodom od hrane.', 'Actual food cost: consumption divided by food revenue.', 'Фактический фудкост: расход, делённый на выручку от еды.'),
      params: [l('900.000 / 2.800.000 = 32%', '900,000 / 2,800,000 = 32%', '900 000 / 2 800 000 = 32%')],
      done: l('Imaš jedan broj za ceo mesec.', 'You have one number for the whole month.', 'У тебя одно число на весь месяц.'),
      why: l('Prihod bez PDV-a i bez pića. Mešanje pića i hrane krije probleme oba.', 'Revenue before VAT and without drinks. Mixing drinks and food hides the problems in both.', 'Выручка без НДС и без напитков. Смешивание напитков и еды скрывает проблемы обоих.'),
    },
    {
      text: l('Uporedi sa teorijskim food costom iz kartica i prodaje.', 'Compare with the theoretical food cost from the cards and sales.', 'Сравни с теоретическим фудкостом из карт и продаж.'),
      params: [l('npr. teorijski 29%, stvarni 32%', 'e.g. theoretical 29%, actual 32%', 'например теоретический 29%, фактический 32%')],
      done: l('Znaš koliko procenata fali i koliko je to dinara.', 'You know how many points are missing and how many dinars that is.', 'Ты знаешь, сколько процентов не хватает и сколько это в динарах.'),
      why: l('Razlika je otpad, prevelike porcije, krađa ili greška na prijemu. Sva četiri se mogu popraviti.', 'The difference is waste, oversized portions, theft or mistakes at the door. All four can be fixed.', 'Разница — это отходы, завышенные порции, кражи или ошибки при приёмке. Все четыре можно исправить.'),
    },
    {
      text: l('Pregledaj listu otpada i promeni jednu stvar sledećeg meseca.', 'Review the waste log and change one thing next month.', 'Просмотри журнал отходов и измени одну вещь в следующем месяце.'),
      done: l('Postoji jedna konkretna mera: manji par, druga porcija, novi dobavljač.', 'There is one concrete action: a lower par, a different portion, a new supplier.', 'Есть одна конкретная мера: ниже пар, другая порция, новый поставщик.'),
      why: l('Jedna promena mesečno je dvanaest godišnje, i svaka se vidi u sledećoj inventuri.', 'One change a month is twelve a year, and each shows in the next stocktake.', 'Одно изменение в месяц — двенадцать в год, и каждое видно в следующей инвентаризации.'),
    },
  ],
  mistake: {
    title: l('Inventura „od oka“, jednom u tri meseca.', 'An "eyeballed" stocktake, once every three months.', 'Инвентаризация «на глаз», раз в три месяца.'),
    fix: l(
      'Problem koji počne u januaru vidiš u aprilu, posle tri meseca gubitka. Inventura je mesečna, brojanjem, istog dana u mesecu.',
      'A problem that starts in January shows up in April, after three months of losses. The stocktake is monthly, by counting, on the same day of the month.',
      'Проблема, начавшаяся в январе, видна в апреле, после трёх месяцев потерь. Инвентаризация — ежемесячно, пересчётом, в один и тот же день.',
    ),
  },
  think: {
    question: l('Teorijski food cost je 29%, a stvarni 34%. Šta to znači?', 'Theoretical food cost is 29% and actual is 34%. What does that mean?', 'Теоретический фудкост 29%, фактический 34%. Что это значит?'),
    options: [
      l('Hrana se gubi negde između nabavke i tanjira', 'Food is being lost somewhere between purchase and plate', 'Еда теряется где-то между закупкой и тарелкой'),
      l('Cene na meniju su previsoke', 'Menu prices are too high', 'Цены в меню слишком высокие'),
      l('Sve je u redu', 'Everything is fine', 'Всё в порядке'),
    ],
    answer: 0,
    explain: l(
      'Kartice kažu da bi trebalo 29%. Pet procenata razlike je hrana koja je kupljena, ali nije prodata: otpad, porcije, krađa ili prijem.',
      'The cards say it should be 29%. The five-point gap is food that was bought but not sold: waste, portions, theft or receiving.',
      'Карты говорят 29%. Разница в пять пунктов — еда, которую купили, но не продали: отходы, порции, кражи или приёмка.',
    ),
  },
}

export const foodCostLessons: Lesson[] = [yieldTest, costedCard, pricing, receiving, stocktake]
