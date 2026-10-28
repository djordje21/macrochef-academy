import { l, type Lesson } from '../types'

// Grade 3 · Module 7 · How a dish is made. Creating is a method, not a mood: start from one ingredient at
// its best, pair by rules, build texture and temperature on purpose, taste and change one thing at a time,
// then write it down so another cook makes the same plate.

const idea: Lesson = {
  id: '3.7.1',
  title: l('Od sastojka do ideje', 'From ingredient to idea', 'От продукта к идее'),
  goal: l(
    'Od jednog sastojka u sezoni napraviš ideju jela, opisanu jednom rečenicom i skiciranu na papiru.',
    'From one ingredient in season you build a dish idea, described in one sentence and sketched on paper.',
    'Из одного сезонного продукта ты создаёшь идею блюда, описанную одним предложением и нарисованную на бумаге.',
  ),
  minutes: 6,
  key: { value: l('1', '1', '1'), label: l('glavni ukus po jelu', 'main flavour per dish', 'главный вкус на блюдо') },
  need: [
    { item: l('Sezonski sastojak, npr. bundeva u oktobru', 'An ingredient in season, e.g. squash in October', 'Сезонный продукт, например тыква в октябре'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Sveska i olovka', 'Notebook and pencil', 'Тетрадь и карандаш'), qty: l('1', '1', '1') },
    { item: l('Rerna, tiganj, nož', 'Oven, pan, knife', 'Духовка, сковорода, нож'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Dobra jela retko nastaju od praznog papira. Nastaju od jednog sastojka koji je baš sada najbolji, i od pitanja kako da se to pokaže.',
    'Good dishes rarely start from a blank page. They start from one ingredient that is at its best right now, and the question of how to show that.',
    'Хорошие блюда редко рождаются с чистого листа. Они начинаются с одного продукта, который сейчас лучше всего, и с вопроса, как это показать.',
  ),
  steps: [
    {
      text: l('Izaberi jedan sastojak na vrhuncu sezone.', 'Pick one ingredient at the peak of its season.', 'Выбери один продукт на пике сезона.'),
      params: [l('sa pijace, ne iz kataloga', 'from the market, not a catalogue', 'с рынка, а не из каталога')],
      done: l('Sastojak je na tvojoj dasci, svež i u punom ukusu.', 'The ingredient is on your board, fresh and full of flavour.', 'Продукт на твоей доске, свежий и вкусный.'),
      why: l('Na vrhuncu sezone sastojak je najukusniji i najjeftiniji. Pola posla je urađeno pre noža.', 'At the peak of its season an ingredient is tastiest and cheapest. Half the work is done before the knife.', 'На пике сезона продукт вкуснее и дешевле всего. Половина работы сделана до ножа.'),
    },
    {
      text: l('Probaj ga na tri načina: sirov, kuvan i pečen.', 'Taste it three ways: raw, boiled and roasted.', 'Попробуй его тремя способами: сырым, варёным и запечённым.'),
      done: l('U svesci su tri kratka opisa ukusa i teksture.', 'Your notebook has three short notes on taste and texture.', 'В тетради три короткие заметки о вкусе и текстуре.'),
      why: l('Pečena bundeva je slatka i duboka, kuvana blaga, a sirova orašasta i hrskava. Svaki način je drugo jelo.', 'Roast squash is sweet and deep, boiled is mild, and raw is nutty and crisp. Each way is a different dish.', 'Запечённая тыква сладкая и глубокая, варёная мягкая, а сырая ореховая и хрустящая. Каждый способ — другое блюдо.'),
    },
    {
      text: l('Odluči koji ukus želiš da pokažeš i zapiši ga jednom rečenicom.', 'Decide which flavour you want to show and write it in one sentence.', 'Реши, какой вкус хочешь показать, и запиши одним предложением.'),
      done: l('Imaš rečenicu, na primer: „slatkoća pečene bundeve“.', 'You have a sentence, for example: "the sweetness of roast squash".', 'У тебя есть фраза, например: «сладость запечённой тыквы».'),
      why: l('Rečenica je kompas. Svaki sledeći sastojak mora da joj služi, ili ne ide na tanjir.', 'The sentence is a compass. Every next ingredient must serve it, or it stays off the plate.', 'Фраза — компас. Каждый следующий продукт должен ей служить, иначе не идёт на тарелку.'),
    },
    {
      text: l('Dodaj ono što taj ukus podiže: so, kiselinu, mast i kontrast.', 'Add what lifts that flavour: salt, acid, fat and contrast.', 'Добавь то, что этот вкус поднимает: соль, кислоту, жир и контраст.'),
      params: [l('3–4 sastojka', '3–4 ingredients', '3–4 продукта')],
      done: l('Uz glavni sastojak stoji kratka lista, svaki sa razlogom.', 'Beside the main ingredient is a short list, each with a reason.', 'Рядом с главным продуктом короткий список, у каждого своя причина.'),
      why: l('Slatku bundevu podiže kiselo i slano: kozji sir, kiselo povrće, prženo seme. Ovo su lekcije 5.1–5.4 u praksi.', 'Sweet squash is lifted by sour and salty: goat\'s cheese, pickles, toasted seeds. This is lessons 5.1–5.4 in practice.', 'Сладкую тыкву поднимают кислое и солёное: козий сыр, пикули, обжаренные семечки. Это уроки 5.1–5.4 на практике.'),
      drawing: 'acidsRow',
    },
    {
      text: l('Skiciraj tanjir: komponente i raspored.', 'Sketch the plate: components and layout.', 'Нарисуй тарелку: компоненты и раскладку.'),
      done: l('Na papiru je krug tanjira sa svakom komponentom na svom mestu.', 'On paper is a circle of plate with every component in its place.', 'На бумаге круг тарелки, каждый компонент на своём месте.'),
      why: l('Skica otkriva greške pre kuvanja: previše stvari, nema visine, sve iste boje (2.13.1).', 'A sketch shows mistakes before you cook: too many things, no height, everything one colour (2.13.1).', 'Эскиз выявляет ошибки до готовки: слишком много всего, нет высоты, всё одного цвета (2.13.1).'),
      drawing: 'plateClock',
    },
  ],
  mistake: {
    title: l('Previše ideja na jednom tanjiru.', 'Too many ideas on one plate.', 'Слишком много идей на одной тарелке.'),
    fix: l(
      'Kad je sve važno, ništa se ne oseti. Jedan glavni ukus i najviše tri-četiri komponente. Ako jelo ne možeš da opišeš jednom rečenicom, previše je.',
      'When everything matters, nothing comes through. One main flavour and three or four components at most. If you cannot describe the dish in one sentence, it is too much.',
      'Когда важно всё, ничего не чувствуется. Один главный вкус и максимум три-четыре компонента. Если не можешь описать блюдо одним предложением — это слишком.',
    ),
  },
  think: {
    question: l('Koliko glavnih ukusa treba da ima jedno jelo?', 'How many main flavours should one dish have?', 'Сколько главных вкусов должно быть у одного блюда?'),
    options: [
      l('Jedan, a ostalo ga podiže', 'One, with the rest lifting it', 'Один, а остальное его поднимает'),
      l('Tri, ravnopravna', 'Three, equal', 'Три, равноправных'),
      l('Koliko ima sastojaka', 'As many as there are ingredients', 'Сколько продуктов'),
    ],
    answer: 0,
    explain: l(
      'Gost pamti jedno jelo po jednom utisku. Sve ostalo na tanjiru je tu da taj utisak bude jači: kiselina, so, hrskavo.',
      'A guest remembers a dish by one impression. Everything else on the plate is there to make that impression stronger: acid, salt, crunch.',
      'Гость запоминает блюдо по одному впечатлению. Всё остальное на тарелке нужно, чтобы усилить его: кислота, соль, хруст.',
    ),
  },
}

const pairing: Lesson = {
  id: '3.7.2',
  title: l('Uparivanje ukusa', 'Pairing flavours', 'Сочетание вкусов'),
  goal: l(
    'Upariš sastojke po četiri pravila i proveriš svaki par na kašici pre nego što ga staviš u jelo.',
    'You pair ingredients by four rules and test every pair on a spoon before it goes into a dish.',
    'Ты сочетаешь продукты по четырём правилам и проверяешь каждую пару на ложке, прежде чем ввести в блюдо.',
  ),
  minutes: 6,
  key: { value: l('1 kašika', '1 spoon', '1 ложка'), label: l('test para pre jela', 'pair test before the dish', 'проверка пары до блюда') },
  need: [
    { item: l('Glavni sastojak iz 3.7.1', 'The main ingredient from 3.7.1', 'Главный продукт из 3.7.1'), qty: l('200 g', '200 g', '200 г') },
    { item: l('4–6 mogućih partnera', '4–6 possible partners', '4–6 возможных партнёров'), qty: l('po malo', 'a little of each', 'понемногу') },
    { item: l('Čiste kašičice, sveska', 'Clean spoons, notebook', 'Чистые ложки, тетрадь'), qty: l('10 + 1', '10 + 1', '10 + 1') },
  ],
  why: l(
    'Uparivanje nije dar, nego nekoliko pravila i mnogo proba. Kuvar koji zna pravila ne pogađa, nego bira.',
    'Pairing is not a gift but a few rules and a lot of tasting. A cook who knows the rules does not guess; they choose.',
    'Сочетание — не дар, а несколько правил и много проб. Повар, знающий правила, не угадывает, а выбирает.',
  ),
  steps: [
    {
      text: l('Počni od klasičnih parova koji rade.', 'Start from classic pairs that work.', 'Начни с классических пар, которые работают.'),
      params: [l('paradajz i bosiljak', 'tomato and basil', 'томат и базилик'), l('jagnjetina i ruzmarin', 'lamb and rosemary', 'ягнятина и розмарин')],
      done: l('Za glavni sastojak imaš bar dva provereno dobra para.', 'You have at least two proven pairs for the main ingredient.', 'Для главного продукта у тебя есть минимум две проверенные пары.'),
      why: l('Klasici su klasici jer su ih generacije probale. Oni su sigurna osnova za nešto novo.', 'Classics are classics because generations have tested them. They are a safe base for something new.', 'Классика — классика, потому что её проверили поколения. Это надёжная основа для нового.'),
    },
    {
      text: l('Šta raste zajedno u istoj sezoni i kraju, uglavnom ide i zajedno.', 'What grows together in the same season and region usually goes together.', 'То, что растёт вместе в один сезон и в одном краю, обычно и сочетается.'),
      params: [l('jesen: bundeva, kesten, žalfija', 'autumn: squash, chestnut, sage', 'осень: тыква, каштан, шалфей')],
      done: l('Lista je dopunjena sastojcima iz iste sezone.', 'The list now includes ingredients from the same season.', 'Список дополнен продуктами того же сезона.'),
      why: l('Kuhinje sveta su nastale tako: od onoga što je bilo u isto vreme na istom mestu.', 'The world\'s cuisines were built that way: from what was there at the same time in the same place.', 'Кухни мира так и возникли: из того, что было в одно время в одном месте.'),
    },
    {
      text: l('Nađi most: treći sastojak koji ima nešto od oba.', 'Find a bridge: a third ingredient that has something of both.', 'Найди мост: третий продукт, в котором есть что-то от обоих.'),
      params: [l('med između plavog sira i kruške', 'honey between blue cheese and pear', 'мёд между голубым сыром и грушей')],
      done: l('Dva sastojka koji se nisu slagala sada se spajaju.', 'Two ingredients that clashed now come together.', 'Два продукта, которые не ладили, теперь соединяются.'),
      why: l('Most deli slatkoću sa jednim, a aromu sa drugim, i povezuje ih u ustima.', 'The bridge shares sweetness with one and aroma with the other, and ties them together in the mouth.', 'Мост делит сладость с одним, аромат с другим и связывает их во рту.'),
    },
    {
      text: l('Dodaj kontrast: masno traži kiselo, slatko traži slano.', 'Add contrast: fatty wants sour, sweet wants salty.', 'Добавь контраст: жирное просит кислого, сладкое — солёного.'),
      done: l('Uz svaki bogat sastojak stoji nešto što ga seče.', 'Next to every rich ingredient is something that cuts it.', 'Рядом с каждым насыщенным продуктом есть то, что его прорезает.'),
      why: l('Kontrast drži jelo živim do poslednjeg zalogaja. Bez njega i odličan ukus dosadi posle tri zalogaja.', 'Contrast keeps a dish alive to the last bite. Without it, even a great taste gets dull after three bites.', 'Контраст держит блюдо живым до последнего кусочка. Без него даже отличный вкус надоедает после трёх.'),
      drawing: 'umamiRow',
    },
    {
      text: l('Testiraj svaki par na jednoj kašici, pre jela.', 'Test every pair on a single spoon, before the dish.', 'Проверь каждую пару на одной ложке до блюда.'),
      done: l('U svesci je ocena za svaki par: radi, ne radi, možda.', 'Your notebook has a verdict for each pair: works, does not, maybe.', 'В тетради оценка каждой пары: работает, не работает, возможно.'),
      why: l('Kašika košta sekund. Ceo tanjir koji ne radi košta sat i sastojke.', 'A spoon costs a second. A whole plate that does not work costs an hour and the ingredients.', 'Ложка стоит секунду. Целая неудачная тарелка — час и продукты.'),
      drawing: 'cleanSpoon',
    },
  ],
  mistake: {
    title: l('„Kreativan“ par stavljen na meni bez probe.', 'A "creative" pair put on the menu without tasting.', '«Креативная» пара в меню без пробы.'),
    fix: l(
      'Ono što zvuči zanimljivo na papiru često se u ustima ne slaže. Svaki novi par prvo na kašici, pa u probnom jelu, pa tek onda na meni.',
      'What sounds interesting on paper often does not work in the mouth. Every new pair goes on a spoon first, then into a test dish, and only then onto the menu.',
      'То, что интересно звучит на бумаге, часто не работает во рту. Каждая новая пара — сначала на ложке, потом в пробном блюде и только потом в меню.',
    ),
  },
  think: {
    question: l('Masno jelo deluje teško. Šta mu dodaješ?', 'A rich dish feels heavy. What do you add?', 'Жирное блюдо кажется тяжёлым. Что добавишь?'),
    options: [
      l('Nešto kiselo', 'Something sour', 'Что-то кислое'),
      l('Još masti', 'More fat', 'Ещё жира'),
      l('Nešto slatko', 'Something sweet', 'Что-то сладкое'),
    ],
    answer: 0,
    explain: l(
      'Kiselina seče mast i osvežava usta između zalogaja. Zato uz masnu svinjetinu ide kiseli kupus, a uz pačja prsa višnja.',
      'Acid cuts fat and refreshes the mouth between bites. That is why fatty pork comes with sauerkraut and duck breast with sour cherry.',
      'Кислота прорезает жир и освежает рот между кусками. Поэтому к жирной свинине — квашеная капуста, а к утиной грудке — вишня.',
    ),
  },
}

const texture: Lesson = {
  id: '3.7.3',
  title: l('Tekstura i temperatura', 'Texture and temperature', 'Текстура и температура'),
  goal: l(
    'Isplaniraš teksture i temperature na tanjiru tako da svaki zalogaj ima kontrast.',
    'You plan the textures and temperatures on a plate so every bite has contrast.',
    'Ты планируешь текстуры и температуры на тарелке так, чтобы в каждом куске был контраст.',
  ),
  minutes: 5,
  key: { value: l('3', '3', '3'), label: l('teksture na tanjiru', 'textures on the plate', 'текстуры на тарелке') },
  need: [
    { item: l('Skica jela iz 3.7.1', 'The dish sketch from 3.7.1', 'Эскиз блюда из 3.7.1'), qty: l('1', '1', '1') },
    { item: l('Komponente jela', 'The dish components', 'Компоненты блюда'), qty: l('1 porcija', '1 portion', '1 порция') },
    { item: l('Tanjir i kašika', 'Plate and spoon', 'Тарелка и ложка'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Usta se brzo naviknu. Jelo koje je celo isto mekano dosadi posle par zalogaja, čak i kad je ukusno.',
    'The mouth gets used to things fast. A dish that is soft all the way through gets dull after a few bites, even when it tastes good.',
    'Рот быстро привыкает. Блюдо, мягкое целиком, надоедает после нескольких кусков, даже если вкусное.',
  ),
  steps: [
    {
      text: l('Zapiši teksturu svake komponente.', 'Write down the texture of every component.', 'Запиши текстуру каждого компонента.'),
      params: [l('meko · kremasto · hrskavo · sočno', 'soft · creamy · crisp · juicy', 'мягкое · кремовое · хрустящее · сочное')],
      done: l('Na tanjiru postoje bar tri različite teksture.', 'There are at least three different textures on the plate.', 'На тарелке минимум три разные текстуры.'),
      why: l('Kad su dve komponente iste teksture, jedna je višak ili treba da se promeni.', 'When two components share a texture, one is redundant or needs to change.', 'Если у двух компонентов одна текстура, один лишний или его нужно изменить.'),
      drawing: 'textureContrast',
    },
    {
      text: l('Ako fali hrskavo, dodaj ga.', 'If crunch is missing, add it.', 'Если не хватает хруста, добавь его.'),
      params: [l('tuile, čips, prženo seme, mrvice', 'tuile, crisps, toasted seeds, crumbs', 'тюиль, чипсы, обжаренные семечки, крошка')],
      done: l('Na tanjiru je bar jedan element koji se čuje kad ga zagrizeš.', 'There is at least one element on the plate you can hear when you bite it.', 'На тарелке есть хотя бы один элемент, который слышно при укусе.'),
      why: l('Hrskavo je najčešće ono što fali. Tehnike su u 3.3.4.', 'Crunch is what is missing most often. The techniques are in 3.3.4.', 'Чаще всего не хватает именно хруста. Техники — в 3.3.4.'),
    },
    {
      text: l('Odluči temperature: topao glavni deo i jedan hladan kontrast.', 'Decide the temperatures: a warm main part and one cold contrast.', 'Определи температуры: тёплая основная часть и один холодный контраст.'),
      params: [l('krem fraiche, kiselo povrće, sorbe', 'crème fraîche, pickles, sorbet', 'крем-фреш, пикули, сорбет')],
      done: l('Na skici je označeno šta je toplo, a šta hladno.', 'The sketch marks what is warm and what is cold.', 'На эскизе отмечено, что тёплое, а что холодное.'),
      why: l('Hladno uz toplo budi usta isto kao kiselo uz masno.', 'Cold next to warm wakes up the mouth, just like sour next to fatty.', 'Холодное рядом с тёплым будит рот так же, как кислое рядом с жирным.'),
    },
    {
      text: l('Hladne i hrskave elemente stavi na tanjir poslednje.', 'Put the cold and crisp elements on the plate last.', 'Холодные и хрустящие элементы клади на тарелку последними.'),
      done: l('Između hladnog elementa i stola prođe manje od minuta.', 'Less than a minute passes between the cold element and the table.', 'Между холодным элементом и столом проходит меньше минуты.'),
      why: l('Toplo jelo greje hladno, a para omekša hrskavo. Kontrast traje samo ako stigne do gosta.', 'Warm food warms the cold element and steam softens the crisp one. Contrast only counts if it reaches the guest.', 'Тёплое блюдо греет холодное, а пар размягчает хрустящее. Контраст важен, только если доходит до гостя.'),
    },
    {
      text: l('Probaj jedan zalogaj sa svim komponentama na kašici.', 'Taste one bite with every component on the spoon.', 'Попробуй один кусок со всеми компонентами на ложке.'),
      done: l('Zalogaj ima i kontrast i celinu.', 'The bite has both contrast and unity.', 'В куске есть и контраст, и целостность.'),
      why: l('Gost jede zalogaje, ne komponente. Ako zajedno ne rade, nije važno koliko je svaka dobra sama.', 'Guests eat bites, not components. If they do not work together, it does not matter how good each is alone.', 'Гость ест куски, а не компоненты. Если вместе не работают, неважно, насколько хорош каждый.'),
    },
  ],
  mistake: {
    title: l('Ceo tanjir mekan: pire, sos, riba.', 'The whole plate soft: purée, sauce, fish.', 'Вся тарелка мягкая: пюре, соус, рыба.'),
    fix: l(
      'Svaka komponenta je dobra, ali jelo deluje ravno. Dodaj jedan hrskav element i jedan hladan ili kiseo, i isti tanjir postane živ.',
      'Each component is good, but the dish feels flat. Add one crisp element and one cold or sour one, and the same plate comes alive.',
      'Каждый компонент хорош, но блюдо кажется плоским. Добавь один хрустящий элемент и один холодный или кислый, и та же тарелка оживёт.',
    ),
  },
  think: {
    question: l('Šta najčešće fali tanjiru koji deluje ravno?', 'What is most often missing from a plate that feels flat?', 'Чего чаще всего не хватает «плоской» тарелке?'),
    options: [
      l('Hrskav element', 'A crisp element', 'Хрустящего элемента'),
      l('Još sosa', 'More sauce', 'Ещё соуса'),
      l('Veći tanjir', 'A bigger plate', 'Большей тарелки'),
    ],
    answer: 0,
    explain: l(
      'Većina jela u restoranu je meka: pire, sos, kuvano meso. Jedna hrskava stvar menja ceo doživljaj, jer usta dobiju nešto novo u svakom zalogaju.',
      'Most restaurant food is soft: purée, sauce, cooked meat. One crisp thing changes the whole experience, because the mouth gets something new in every bite.',
      'Большинство ресторанной еды мягкое: пюре, соус, тушёное мясо. Один хрустящий элемент меняет всё впечатление: рот получает что-то новое в каждом куске.',
    ),
  },
}

const tasting: Lesson = {
  id: '3.7.4',
  title: l('Proba i ispravka', 'Tasting and correcting', 'Дегустация и исправление'),
  goal: l(
    'Probaš jelo kao gost, menjaš jednu stvar po probi i zapisuješ svaku promenu dok jelo ne bude gotovo.',
    'You taste a dish like a guest, change one thing per tasting and write down every change until the dish is finished.',
    'Ты пробуешь блюдо как гость, меняешь одну вещь за пробу и записываешь каждое изменение, пока блюдо не будет готово.',
  ),
  minutes: 6,
  key: { value: l('1', '1', '1'), label: l('promena po probi', 'change per tasting', 'изменение за пробу') },
  need: [
    { item: l('Probno jelo, cela porcija', 'The test dish, a full portion', 'Пробное блюдо, полная порция'), qty: l('2–3', '2–3', '2–3') },
    { item: l('Sveska za probe', 'A tasting notebook', 'Тетрадь проб'), qty: l('1', '1', '1') },
    { item: l('Drugi kuvar ili gost za probu', 'Another cook or a guest to taste', 'Другой повар или гость для пробы'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Jelo se ne izmišlja, nego dorađuje. Prva verzija je skoro uvek preslana, preteška ili previše komplikovana. Posao je naći šta tačno.',
    'A dish is not invented but refined. The first version is almost always too salty, too heavy or too complicated. The job is to find out exactly which.',
    'Блюдо не изобретают, а доводят. Первая версия почти всегда пересолена, тяжела или слишком сложна. Задача — найти, что именно.',
  ),
  steps: [
    {
      text: l('Napravi jelo celo i složi ga kao za gosta.', 'Make the whole dish and plate it as for a guest.', 'Приготовь блюдо целиком и подай как гостю.'),
      done: l('Ispred tebe je pravi tanjir, a ne komponente po posudama.', 'In front of you is a real plate, not components in containers.', 'Перед тобой настоящая тарелка, а не компоненты в ёмкостях.'),
      why: l('Komponente probane odvojeno lažu. Tek zajedno vidiš balans.', 'Components tasted separately lie. Only together do you see the balance.', 'Компоненты, пробованные по отдельности, обманывают. Только вместе виден баланс.'),
    },
    {
      text: l('Probaj ceo zalogaj i uporedi ga sa rečenicom iz 3.7.1.', 'Taste a full bite and compare it with your sentence from 3.7.1.', 'Попробуй целый кусок и сравни с фразой из 3.7.1.'),
      done: l('Znaš šta fali ili šta smeta, jednom rečju.', 'You know what is missing or in the way, in one word.', 'Ты знаешь, чего не хватает или что мешает, одним словом.'),
      why: l('„Nešto fali“ nije ocena. „Fali kiselina“ jeste.', '"Something is missing" is not a verdict. "It needs acid" is.', '«Чего-то не хватает» — не оценка. «Не хватает кислоты» — оценка.'),
      drawing: 'tasteSteps',
    },
    {
      text: l('Menjaj samo jednu stvar odjednom.', 'Change only one thing at a time.', 'Меняй только одну вещь за раз.'),
      done: l('Sledeći tanjir se razlikuje od prethodnog u tačno jednoj stvari.', 'The next plate differs from the last in exactly one thing.', 'Следующая тарелка отличается от предыдущей ровно одной вещью.'),
      why: l('Ako promeniš so i sos zajedno, ne znaš šta je pomoglo, a šta pokvarilo.', 'Change the salt and the sauce together and you do not know what helped and what hurt.', 'Если изменить соль и соус сразу, не узнаешь, что помогло, а что испортило.'),
    },
    {
      text: l('Svaku promenu zapiši: šta, koliko i kakav je rezultat.', 'Write down every change: what, how much and the result.', 'Записывай каждое изменение: что, сколько и какой результат.'),
      params: [l('npr. „+3 g soli u pireu: bolje“', 'e.g. "+3 g salt in purée: better"', 'например «+3 г соли в пюре: лучше»')],
      done: l('Sveska ima istoriju jela od prve do poslednje verzije.', 'The notebook holds the history of the dish from first version to last.', 'В тетради история блюда от первой до последней версии.'),
      why: l('Za mesec dana nećeš se sećati zašto je u sosu 5 g, a ne 10 g šećera. Sveska hoće.', 'In a month you will not remember why the sauce has 5 g of sugar, not 10. The notebook will.', 'Через месяц не вспомнишь, почему в соусе 5 г сахара, а не 10. Тетрадь вспомнит.'),
    },
    {
      text: l('Daj drugom da proba, bez objašnjenja, i slušaj.', 'Let someone else taste it without explanation, and listen.', 'Дай попробовать другому без объяснений и слушай.'),
      done: l('Njegov opis jela se poklapa sa tvojom rečenicom.', 'Their description of the dish matches your sentence.', 'Его описание блюда совпадает с твоей фразой.'),
      why: l('Ti znaš šta si hteo, pa to i osetiš. Gost oseti samo ono što je na tanjiru.', 'You know what you intended, so you taste it. A guest tastes only what is on the plate.', 'Ты знаешь, что задумал, и поэтому это чувствуешь. Гость чувствует только то, что на тарелке.'),
    },
  ],
  mistake: {
    title: l('Pet promena odjednom „da se uštedi vreme“.', 'Five changes at once "to save time".', 'Пять изменений сразу, «чтобы сэкономить время».'),
    fix: l(
      'Jelo je možda bolje, ali ne znaš zašto, i ne možeš da ga ponoviš. Jedna promena po probi je sporija danas, a brža svaki sledeći put.',
      'The dish may be better, but you do not know why and cannot repeat it. One change per tasting is slower today and faster every time after.',
      'Блюдо, может, и лучше, но ты не знаешь почему и не сможешь повторить. Одно изменение за пробу — медленнее сегодня и быстрее каждый следующий раз.',
    ),
  },
  think: {
    question: l('Zašto se menja samo jedna stvar po probi?', 'Why change only one thing per tasting?', 'Почему меняют только одну вещь за пробу?'),
    options: [
      l('Da znaš šta je tačno promenilo ukus', 'So you know exactly what changed the taste', 'Чтобы знать, что именно изменило вкус'),
      l('Da se ne potroši previše sastojaka', 'To avoid wasting ingredients', 'Чтобы не тратить много продуктов'),
      l('Tako je pravilo', 'Because that is the rule', 'Таково правило'),
    ],
    answer: 0,
    explain: l(
      'Proba je eksperiment. Ako promeniš dve stvari, rezultat ne govori ništa o nijednoj od njih.',
      'A tasting is an experiment. Change two things and the result tells you nothing about either.',
      'Проба — это эксперимент. Изменишь две вещи — и результат ничего не скажет ни об одной.',
    ),
  },
}

const card: Lesson = {
  id: '3.7.5',
  title: l('Recept-kartica', 'The recipe card', 'Техкарта'),
  goal: l(
    'Zapišeš jelo na recept-karticu tako da ga drugi kuvar napravi isto, bez pitanja.',
    'You write a dish on a recipe card so another cook makes it the same, without asking.',
    'Ты записываешь блюдо в техкарту так, чтобы другой повар приготовил его так же, без вопросов.',
  ),
  minutes: 7,
  key: { value: l('g', 'g', 'г'), label: l('sve u gramima', 'everything in grams', 'всё в граммах') },
  need: [
    { item: l('Konačna verzija jela iz sveske (3.7.4)', 'The final version of the dish from the notebook (3.7.4)', 'Финальная версия блюда из тетради (3.7.4)'), qty: l('1', '1', '1') },
    { item: l('Šablon recept-kartice', 'A recipe card template', 'Шаблон техкарты'), qty: l('1', '1', '1') },
    { item: l('Telefon za fotografiju tanjira', 'A phone to photograph the plate', 'Телефон для фото тарелки'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Jelo koje postoji samo u tvojoj glavi nestaje kad nisi na smeni. Recept-kartica je jelo koje radi i bez tebe.',
    'A dish that exists only in your head disappears when you are not on shift. A recipe card is a dish that works without you.',
    'Блюдо, которое существует только в твоей голове, исчезает, когда тебя нет на смене. Техкарта — это блюдо, которое работает и без тебя.',
  ),
  steps: [
    {
      text: l('Napiši zaglavlje: naziv, broj porcija i težinu jedne porcije.', 'Write the header: name, number of portions and weight of one portion.', 'Напиши шапку: название, число порций и вес одной порции.'),
      params: [l('npr. 10 porcija × 180 g', 'e.g. 10 portions × 180 g', 'например 10 порций × 180 г')],
      done: l('Iz zaglavlja se vidi koliko jela daje recept.', 'The header shows how much the recipe yields.', 'Из шапки видно, сколько блюда даёт рецепт.'),
      why: l('Bez prinosa kuvar ne zna da li pravi za deset ili za četrdeset gostiju.', 'Without the yield, a cook does not know if they are making it for ten guests or forty.', 'Без выхода повар не знает, готовит он на десять гостей или на сорок.'),
    },
    {
      text: l('Sastojke napiši u gramima, grupisane po komponentama.', 'List the ingredients in grams, grouped by component.', 'Запиши ингредиенты в граммах, сгруппировав по компонентам.'),
      done: l('Nigde ne piše „kašika“, „prstohvat“ ni „po ukusu“.', 'Nowhere does it say "a spoon", "a pinch" or "to taste".', 'Нигде нет «ложки», «щепотки» или «по вкусу».'),
      why: l('„Kašika“ je različita u svakoj kuhinji. Gram je isti svuda (1.5).', '"A spoon" differs in every kitchen. A gram is the same everywhere (1.5).', '«Ложка» разная на каждой кухне. Грамм везде одинаков (1.5).'),
      drawing: 'scaleTare',
    },
    {
      text: l('Postupak napiši kao korake: radnja, mera i znak da je gotovo.', 'Write the method as steps: action, measure and the sign that it is done.', 'Запиши процесс шагами: действие, мера и признак готовности.'),
      done: l('Svaki korak ima temperaturu, vreme ili znak koji se vidi.', 'Every step has a temperature, a time or a visible sign.', 'У каждого шага есть температура, время или видимый признак.'),
      why: l('Isti format kao lekcije u ovoj aplikaciji, jer radi: kuvar zna šta, koliko i kada je gotovo.', 'The same format as the lessons in this app, because it works: the cook knows what, how much and when it is done.', 'Тот же формат, что и уроки в этом приложении, потому что он работает: повар знает, что, сколько и когда готово.'),
    },
    {
      text: l('Dodaj alergene i fotografiju gotovog tanjira.', 'Add the allergens and a photo of the finished plate.', 'Добавь аллергены и фото готовой тарелки.'),
      done: l('Na kartici su alergeni (3.9.2) i slika tačnog izgleda.', 'The card shows the allergens (3.9.2) and a picture of the exact look.', 'В карте указаны аллергены (3.9.2) и фото точного вида.'),
      why: l('Fotografija kaže više od opisa rasporeda. Kuvar je kači pored stanice i slaže po njoj.', 'A photo says more than a description of the layout. The cook pins it by the station and plates to it.', 'Фото говорит больше описания раскладки. Повар вешает его у станции и собирает по нему.'),
      drawing: 'photoAngle',
    },
    {
      text: l('Testiraj: drugi kuvar spremi jelo samo po kartici.', 'Test it: another cook makes the dish from the card alone.', 'Проверь: другой повар готовит блюдо только по карте.'),
      done: l('Njegov tanjir izgleda i ima ukus kao tvoj.', 'Their plate looks and tastes like yours.', 'Его тарелка выглядит и на вкус как твоя.'),
      why: l('Svako pitanje koje postavi je rupa u kartici. Dopiši odgovor u karticu, ne u razgovor.', 'Every question they ask is a hole in the card. Write the answer into the card, not into a conversation.', 'Каждый его вопрос — дыра в карте. Записывай ответ в карту, а не в разговор.'),
    },
  ],
  mistake: {
    title: l('Recept „u glavi“, jer „ja ga uvek pravim“.', 'The recipe "in my head", because "I always make it".', 'Рецепт «в голове», потому что «я всегда его готовлю».'),
    fix: l(
      'Kad si na odmoru ili bolestan, jelo se menja ili nestaje sa menija. Recept-kartica je deo jela, kao i sos.',
      'When you are on holiday or ill, the dish changes or drops off the menu. The recipe card is part of the dish, just like the sauce.',
      'Когда ты в отпуске или болеешь, блюдо меняется или исчезает из меню. Техкарта — часть блюда, как и соус.',
    ),
  },
  think: {
    question: l('Kako znaš da je recept-kartica dobra?', 'How do you know a recipe card is good?', 'Как понять, что техкарта хорошая?'),
    options: [
      l('Drugi kuvar po njoj napravi isto jelo', 'Another cook makes the same dish from it', 'Другой повар готовит по ней то же блюдо'),
      l('Ima mnogo detalja', 'It has lots of detail', 'В ней много деталей'),
      l('Lepo je napisana', 'It is nicely written', 'Она красиво написана'),
    ],
    answer: 0,
    explain: l(
      'Kartica postoji da bi jelo bilo isto bez tebe. Jedini pravi test je kuvar koji je nikad nije pravio.',
      'The card exists so the dish is the same without you. The only real test is a cook who has never made it.',
      'Карта нужна, чтобы блюдо было тем же без тебя. Единственный настоящий тест — повар, который никогда его не готовил.',
    ),
  },
}

export const creatingLessons: Lesson[] = [idea, pairing, texture, tasting, card]
