import { l, type Lesson } from '../types'

// Grade 2 · Module 8 · Preserving. Jars are the one place in home cooking where a mistake can be deadly:
// botulism grows without air in low-acid food. Every method here relies on acid, salt, sugar, cold or
// drying, and a water bath; low-acid vegetables are never jarred plain at home.

const sterile: Lesson = {
  id: '2.8.1',
  title: l('Sterilizacija tegli', 'Sterilising jars', 'Стерилизация банок'),
  goal: l(
    'Sterilišeš tegle, napuniš ih i pasterizuješ u vodenom kupatilu tako da se poklopac uvuče.',
    'You sterilise jars, fill them and process them in a water bath so the lid pulls down.',
    'Ты стерилизуешь банки, наполняешь их и пастеризуешь на водяной бане так, чтобы крышка втянулась.',
  ),
  minutes: 7,
  key: { value: l('1 cm', '1 cm', '1 см'), label: l('prostor ispod poklopca', 'headspace', 'зазор под крышкой') },
  need: [
    { item: l('Staklene tegle bez pukotina', 'Glass jars without cracks', 'Стеклянные банки без трещин'), qty: l('6 × 370 ml', '6 × 370 ml', '6 × 370 мл') },
    { item: l('Novi poklopci', 'New lids', 'Новые крышки'), qty: l('6', '6', '6') },
    { item: l('Visok lonac sa krpom ili rešetkom na dnu', 'Tall pot with a cloth or rack on the base', 'Высокая кастрюля с полотенцем или решёткой на дне'), qty: l('1', '1', '1') },
    { item: l('Hvataljka za tegle, čista krpa', 'Jar tongs, clean cloth', 'Щипцы для банок, чистое полотенце'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Zimnica je jedino mesto u kućnoj kuhinji gde greška može da bude smrtonosna. Botulizam raste bez vazduha u hrani koja nije kisela. Sterilna tegla, kiselina i vodeno kupatilo su tri brave na vratima.',
    'Preserving is the one place in home cooking where a mistake can kill. Botulism grows without air in food that is not acidic. A sterile jar, acid and a water bath are three locks on the door.',
    'Заготовки — единственное место в домашней кухне, где ошибка может быть смертельной. Ботулизм растёт без воздуха в некислой еде. Стерильная банка, кислота и водяная баня — три замка на двери.',
  ),
  steps: [
    {
      text: l('Operi tegle vrelom vodom sa deterdžentom i dobro isperi.', 'Wash the jars in hot soapy water and rinse well.', 'Вымой банки горячей водой с моющим средством и хорошо ополосни.'),
      done: l('Tegle su čiste, bez ostataka i bez pukotina na grlu.', 'The jars are clean, with no residue and no chips at the neck.', 'Банки чистые, без остатков и без сколов на горлышке.'),
      why: l('Okrnjeno grlo ne zatvara hermetički. Takvu teglu baci.', 'A chipped neck will not seal. Throw that jar away.', 'Горлышко со сколом не закроется герметично. Такую банку выбрось.'),
    },
    {
      text: l('Stavi tegle u rernu, a poklopce kuvaj u vodi.', 'Put the jars in the oven and boil the lids in water.', 'Поставь банки в духовку, а крышки прокипяти в воде.'),
      params: [l('tegle 120°C, 20 min', 'jars 120°C, 20 min', 'банки 120°C, 20 мин'), l('poklopci 5 min', 'lids 5 min', 'крышки 5 мин')],
      done: l('Tegle su vrele i suve kad ih vadiš.', 'The jars are hot and dry when you take them out.', 'Банки горячие и сухие, когда вынимаешь.'),
      why: l('Poklopci ne idu u rernu: guma ispod njih se osuši i ne zaptiva.', 'Lids do not go in the oven: the rubber seal dries out and will not seal.', 'Крышки не ставят в духовку: резинка пересыхает и не держит.'),
      drawing: 'jarsOven',
    },
    {
      text: l('Napuni vrele tegle vrelom zimnicom, do 1 cm ispod vrha.', 'Fill the hot jars with the hot preserve, to 1 cm below the top.', 'Наполни горячие банки горячей заготовкой, до 1 см от края.'),
      params: [l('vrelo u vrelo', 'hot into hot', 'горячее в горячее'), l('1 cm', '1 cm', '1 см')],
      done: l('Nivo je ujednačen u svim teglama, a ivice su čiste.', 'The level is even in every jar and the rims are clean.', 'Уровень одинаковый во всех банках, края чистые.'),
      why: l('Hladna tegla pukne od vrele zimnice. Prljava ivica ne zaptiva, pa je obriši čistom krpom.', 'A cold jar cracks under hot food. A dirty rim will not seal, so wipe it with a clean cloth.', 'Холодная банка лопнет от горячей заготовки. Грязный край не загерметизируется, протри его чистым полотенцем.'),
      drawing: 'headspace',
    },
    {
      text: l('Zatvori i pasterizuj u loncu, voda 2 cm iznad poklopca.', 'Close and process in the pot, with water 2 cm above the lids.', 'Закрой и пастеризуй в кастрюле, вода на 2 см выше крышек.'),
      params: [l('krčkanje', 'simmering', 'томление'), l('po receptu: 10–30 min', 'per recipe: 10–30 min', 'по рецепту: 10–30 мин')],
      done: l('Tegle su potopljene i ne dodiruju dno lonca.', 'The jars are submerged and do not touch the bottom of the pot.', 'Банки погружены и не касаются дна кастрюли.'),
      why: l('Vodeno kupatilo ubija ono što je ušlo pri punjenju i istera vazduh ispod poklopca.', 'The water bath kills whatever got in during filling and drives the air out from under the lid.', 'Водяная баня убивает то, что попало при наполнении, и выгоняет воздух из-под крышки.'),
      drawing: 'waterBath',
    },
    {
      text: l('Izvadi tegle, ostavi ih 24 h, pa proveri poklopce.', 'Lift out the jars, leave them 24 h, then check the lids.', 'Вынь банки, оставь на 24 ч и проверь крышки.'),
      params: [l('24 h na krpi', '24 h on a cloth', '24 ч на полотенце')],
      done: l('Sredina svakog poklopca je uvučena i ne pucketa kad pritisneš.', 'The centre of every lid is pulled down and does not click when pressed.', 'Центр каждой крышки втянут и не щёлкает при нажатии.'),
      why: l('Poklopac koji pucketa nije zaptiven. Ta tegla ide u frižider i jede se u roku od nedelje.', 'A lid that clicks has not sealed. That jar goes in the fridge and is eaten within a week.', 'Щёлкающая крышка не загерметизирована. Эту банку в холодильник и съесть в течение недели.'),
    },
  ],
  mistake: {
    title: l('Obično povrće u tegli, bez sirćeta, "kao kod bake".', 'Plain vegetables in a jar, without vinegar, "like grandma did".', 'Обычные овощи в банке без уксуса, «как у бабушки».'),
    fix: l(
      'Pasulj, boranija, grašak i paprika bez kiseline su idealni za botulizam, a vodeno kupatilo ga ne ubija. Kod kuće u tegle ide samo kiselo: voće, džem, kiseljeno povrće i zimnica sa sirćetom. Naduven poklopac ili pena: baci bez probanja.',
      'Beans, green beans, peas and peppers without acid are ideal for botulism, and a water bath does not kill it. At home, only acidic food goes into jars: fruit, jam, pickled vegetables and preserves with vinegar. A bulging lid or foam: throw it out without tasting.',
      'Фасоль, стручковая фасоль, горошек и перец без кислоты идеальны для ботулизма, а водяная баня его не убивает. Дома в банки идёт только кислое: фрукты, джем, маринованные овощи и заготовки с уксусом. Вздутая крышка или пена — выбросить, не пробуя.',
    ),
  },
  think: {
    question: l('Poklopac tegle iz ostave je naduven. Šta radiš?', 'A jar lid from the pantry is bulging. What do you do?', 'Крышка банки из кладовой вздулась. Что делаешь?'),
    options: [
      l('Baciš teglu zatvorenu, bez otvaranja i probanja', 'Throw the jar away unopened, without tasting', 'Выбрасываешь банку закрытой, не открывая и не пробуя'),
      l('Otvoriš i pomirišeš', 'Open it and smell it', 'Открываешь и нюхаешь'),
      l('Prokuvaš sadržaj i pojedeš', 'Boil the contents and eat them', 'Кипятишь содержимое и ешь'),
    ],
    answer: 0,
    explain: l(
      'Naduven poklopac znači gas, a gas znači da nešto raste. Botulinski toksin se ne vidi, ne miriše i nema ukus. Nijedna tegla nije vredna rizika.',
      'A bulging lid means gas, and gas means something is growing. Botulinum toxin cannot be seen, smelled or tasted. No jar is worth the risk.',
      'Вздутая крышка — газ, а газ — значит, что-то растёт. Ботулотоксин не видно, у него нет запаха и вкуса. Ни одна банка не стоит риска.',
    ),
  },
}

const quickPickles: Lesson = {
  id: '2.8.2',
  title: l('Brzo kiseljenje', 'Quick pickles', 'Быстрое маринование'),
  goal: l(
    'Ukiseliš povrće u frižideru za 24 sata, hrskavo i izbalansirano.',
    'You pickle vegetables in the fridge in 24 hours, crisp and balanced.',
    'Ты маринуешь овощи в холодильнике за 24 часа, хрустящими и сбалансированными.',
  ),
  minutes: 5,
  key: { value: l('2 : 1', '2 : 1', '2 : 1'), label: l('voda : sirće 9%', 'water : 9% vinegar', 'вода : уксус 9%') },
  need: [
    { item: l('Krastavci, crveni luk, šargarepa, karfiol', 'Cucumbers, red onion, carrot, cauliflower', 'Огурцы, красный лук, морковь, цветная капуста'), qty: l('600 g', '600 g', '600 г') },
    { item: l('Voda i alkoholno sirće 9%', 'Water and 9% spirit vinegar', 'Вода и спиртовой уксус 9%'), qty: l('500 + 250 ml', '500 + 250 ml', '500 + 250 мл') },
    { item: l('So, šećer', 'Salt, sugar', 'Соль, сахар'), qty: l('20 g + 40 g', '20 g + 40 g', '20 г + 40 г') },
    { item: l('Beli luk, biber, slačica, lovor, mirođija', 'Garlic, peppercorns, mustard seed, bay, dill', 'Чеснок, перец, горчичное семя, лавр, укроп'), qty: l('po malo', 'a little of each', 'понемногу') },
  ],
  why: l(
    'Brzo kiseljenje ne traži sterilizaciju jer živi u frižideru. Kiselina daje oštrinu koja seče masno meso: kiseli krastavac uz roštilj nije slučajno.',
    'Quick pickles need no sterilising because they live in the fridge. The acid gives a sharpness that cuts rich meat: a pickle next to the grill is no accident.',
    'Быстрые маринады не требуют стерилизации, потому что живут в холодильнике. Кислота даёт остроту, которая режет жирное мясо: огурец к грилю — не случайность.',
  ),
  steps: [
    {
      text: l('Iseci povrće na jednake komade.', 'Cut the vegetables into even pieces.', 'Нарежь овощи одинаковыми кусками.'),
      params: [l('krastavac: kolutovi 5 mm', 'cucumber: 5 mm rounds', 'огурец: кружки 5 мм'), l('karfiol: cvetići 2 cm', 'cauliflower: 2 cm florets', 'капуста: соцветия 2 см')],
      done: l('Komadi su iste debljine i stanu u teglu.', 'The pieces are the same thickness and fit the jar.', 'Куски одной толщины и помещаются в банку.'),
      why: l('Isto pravilo kao u 2.3: debljina određuje koliko brzo kiselina uđe do sredine.', 'The same rule as in 2.3: thickness decides how fast the acid reaches the centre.', 'То же правило, что в 2.3: толщина определяет, как быстро кислота дойдёт до центра.'),
    },
    {
      text: l('Zagrej vodu, sirće, so, šećer i začine do ključanja.', 'Bring water, vinegar, salt, sugar and spices to the boil.', 'Доведи воду, уксус, соль, сахар и специи до кипения.'),
      params: [l('500 + 250 ml', '500 + 250 ml', '500 + 250 мл'), l('20 g soli, 40 g šećera', '20 g salt, 40 g sugar', '20 г соли, 40 г сахара')],
      done: l('So i šećer su se otopili, a rasol miriše na začine.', 'The salt and sugar have dissolved and the brine smells of spices.', 'Соль и сахар растворились, рассол пахнет специями.'),
      why: l('Šećer ne zaslađuje mnogo, nego smiruje oštrinu sirćeta, kao u 5.3.', 'The sugar barely sweetens; it calms the vinegar\'s sharpness, as in 5.3.', 'Сахар почти не подслащивает, а смягчает резкость уксуса, как в 5.3.'),
    },
    {
      text: l('Slaži povrće u teglu čvrsto, sa belim lukom i mirođijom.', 'Pack the vegetables tightly into the jar with garlic and dill.', 'Плотно уложи овощи в банку с чесноком и укропом.'),
      done: l('Tegla je puna do ramena, bez praznog prostora.', 'The jar is full to the shoulder with no empty space.', 'Банка заполнена до плечиков, без пустот.'),
      drawing: 'pickleJar',
    },
    {
      text: l('Prelij vrelim rasolom do vrha i zatvori.', 'Pour the hot brine over to the top and close.', 'Залей горячим рассолом доверху и закрой.'),
      done: l('Sve povrće je ispod rasola.', 'All the vegetables are under the brine.', 'Все овощи под рассолом.'),
      why: l('Vreo rasol malo omekša spoljni sloj da kiselina brže uđe, a sredina ostane hrskava.', 'Hot brine softens the outer layer slightly so the acid gets in faster, while the centre stays crisp.', 'Горячий рассол слегка размягчает внешний слой, чтобы кислота проникла быстрее, а середина осталась хрустящей.'),
    },
    {
      text: l('Ohladi, pa drži u frižideru.', 'Cool, then keep in the fridge.', 'Остуди и держи в холодильнике.'),
      params: [l('spremno za 24 h', 'ready in 24 h', 'готово через 24 ч'), l('traje 4 nedelje', 'keeps 4 weeks', 'хранится 4 недели')],
      done: l('Posle dan povrće je kiselo do sredine i i dalje krcka.', 'After a day the vegetables are sour to the centre and still crunch.', 'Через день овощи кислые до центра и всё ещё хрустят.'),
      why: l('Ovo je zimnica iz frižidera, ne iz ostave. Bez vodenog kupatila (2.8.1) ne stoji na sobnoj temperaturi.', 'These are fridge pickles, not pantry pickles. Without a water bath (2.8.1) they do not keep at room temperature.', 'Это маринад для холодильника, а не для кладовой. Без водяной бани (2.8.1) он не хранится при комнатной температуре.'),
    },
  ],
  mistake: {
    title: l('Jabukovo sirće 5% umesto alkoholnog 9%, u istoj razmeri.', '5% cider vinegar instead of 9% spirit vinegar, at the same ratio.', 'Яблочный уксус 5% вместо спиртового 9% в той же пропорции.'),
    fix: l(
      'Rasol je skoro duplo slabiji i povrće omekša bez prave kiselosti. Sa sirćetom od 5% idi 1 : 1 vode i sirćeta. Uvek pogledaj procenat na flaši.',
      'The brine is almost half as strong and the vegetables go soft without real sourness. With 5% vinegar use water and vinegar 1 : 1. Always read the percentage on the bottle.',
      'Рассол почти вдвое слабее, и овощи размягчаются без настоящей кислоты. С уксусом 5% бери воду и уксус 1 : 1. Всегда смотри процент на бутылке.',
    ),
  },
  think: {
    question: l('Zašto su kiseli krastavci dobri uz ćevape (14.3)?', 'Why do pickles go so well with ćevapi (14.3)?', 'Почему маринованные огурцы хороши к чевапи (14.3)?'),
    options: [
      l('Kiselina seče masnoću mesa i osveži zalogaj', 'The acid cuts the fat of the meat and refreshes the bite', 'Кислота режет жирность мяса и освежает'),
      l('Imaju mnogo proteina', 'They have a lot of protein', 'В них много белка'),
      l('Hlade meso', 'They cool the meat', 'Они охлаждают мясо'),
    ],
    answer: 0,
    explain: l(
      'Ravnoteža iz modula 5: masno traži kiselo. Zato uz pečenje ide kiseli kupus, a uz ćevape luk i kisela salata.',
      'The balance from module 5: rich needs sour. That is why sauerkraut goes with roasts and onion and pickled salad with ćevapi.',
      'Баланс из модуля 5: жирное требует кислого. Поэтому к жаркому квашеная капуста, а к чевапи лук и маринованный салат.',
    ),
  },
}

const sauerkraut: Lesson = {
  id: '2.8.3',
  title: l('Kiseli kupus i fermentacija', 'Sauerkraut and fermentation', 'Квашеная капуста и ферментация'),
  goal: l(
    'Ukiseliš sečeni kupus u tegli samo solju, za 2–4 nedelje.',
    'You ferment shredded cabbage in a jar with nothing but salt, in 2–4 weeks.',
    'Ты квасишь шинкованную капусту в банке одной солью за 2–4 недели.',
  ),
  minutes: 6,
  key: { value: l('2%', '2%', '2%'), label: l('soli na kupus', 'salt to cabbage', 'соли к капусте') },
  need: [
    { item: l('Glavica belog kupusa', 'White cabbage head', 'Кочан белокочанной капусты'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('So bez joda', 'Non-iodised salt', 'Нейодированная соль'), qty: l('20 g', '20 g', '20 г') },
    { item: l('Tegla 1 l, manja tegla ili kesa sa vodom za težinu', '1 l jar, small jar or water bag as a weight', 'Банка 1 л, баночка или пакет с водой как груз'), qty: l('1 + 1', '1 + 1', '1 + 1') },
    { item: l('Vaga, velika činija', 'Scale, large bowl', 'Весы, большая миска'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Fermentacija je najstariji način čuvanja: dobre bakterije pojedu šećer iz kupusa i naprave kiselinu koja čuva povrće. Bez sirćeta, bez kuvanja, samo so i vreme.',
    'Fermentation is the oldest way of preserving: good bacteria eat the cabbage\'s sugar and make the acid that keeps it. No vinegar, no cooking, only salt and time.',
    'Ферментация — древнейший способ хранения: полезные бактерии съедают сахар капусты и образуют кислоту, которая её сохраняет. Без уксуса и варки, только соль и время.',
  ),
  steps: [
    {
      text: l('Iseci kupus na tanke trake i izmeri ga.', 'Shred the cabbage finely and weigh it.', 'Тонко нашинкуй капусту и взвесь.'),
      params: [l('2–3 mm', '2–3 mm', '2–3 мм'), l('so = 2% težine', 'salt = 2% of weight', 'соль = 2% веса')],
      done: l('Znaš tačnu težinu kupusa i soli.', 'You know the exact weight of cabbage and salt.', 'Знаешь точный вес капусты и соли.'),
      why: l('Manje od 1.5% soli i kupus se pokvari. Više od 3% i bakterije ne rade. So se meri, ne sipa od oka.', 'Under 1.5% salt the cabbage spoils. Over 3% the bacteria stop working. Salt is weighed, not guessed.', 'Меньше 1,5% соли — капуста испортится. Больше 3% — бактерии не работают. Соль взвешивают, а не сыплют на глаз.'),
    },
    {
      text: l('Posoli i gnječi kupus rukama dok ne pusti sok.', 'Salt and massage the cabbage with your hands until it releases its juice.', 'Посоли и мни капусту руками, пока не пустит сок.'),
      params: [l('5–10 min', '5–10 min', '5–10 мин')],
      done: l('Na dnu činije je sok, a kupus je mekan i sjajan.', 'There is juice in the bottom of the bowl and the cabbage is soft and glossy.', 'На дне миски сок, капуста мягкая и блестящая.'),
      why: l('So izvlači vodu iz kupusa. Taj sok je rasol, ne treba dodavati vodu.', 'Salt draws water out of the cabbage. That juice is the brine; no water needs adding.', 'Соль вытягивает воду из капусты. Этот сок — рассол, воду добавлять не нужно.'),
      drawing: 'cabbageMassage',
    },
    {
      text: l('Nabij kupus u teglu dok sok ne izađe iznad njega.', 'Pack the cabbage into the jar until the juice rises above it.', 'Плотно утрамбуй капусту в банку, пока сок не поднимется над ней.'),
      params: [l('3 cm prazno do vrha', '3 cm space at the top', '3 см свободно сверху')],
      done: l('Kupus je potpuno ispod svog soka.', 'The cabbage is completely under its own juice.', 'Капуста полностью под своим соком.'),
    },
    {
      text: l('Pritisni ga tegom i ostavi na sobnoj temperaturi.', 'Weigh it down and leave it at room temperature.', 'Придави грузом и оставь при комнатной температуре.'),
      params: [l('18–22°C', '18–22°C', '18–22°C'), l('poklopac labavo', 'lid loose', 'крышка неплотно')],
      done: l('Posle 2–3 dana pojave se mehurići i miris je kiselkast.', 'After 2–3 days bubbles appear and the smell is sour.', 'Через 2–3 дня появляются пузырьки и кисловатый запах.'),
      why: l('Sve što je iznad soka je na vazduhu i može da se ubuđa. Ispod soka rade samo dobre bakterije.', 'Anything above the juice is in the air and can go mouldy. Below the juice only the good bacteria work.', 'Всё, что над соком, на воздухе и может заплесневеть. Под соком работают только полезные бактерии.'),
      drawing: 'krautWeight',
    },
    {
      text: l('Probaj posle 2 nedelje, pa prebaci u frižider.', 'Taste after 2 weeks, then move it to the fridge.', 'Попробуй через 2 недели и перенеси в холодильник.'),
      params: [l('2–4 nedelje', '2–4 weeks', '2–4 недели')],
      done: l('Kupus je prijatno kiseo, svetao i hrskav.', 'The cabbage is pleasantly sour, pale and crunchy.', 'Капуста приятно кислая, светлая и хрустящая.'),
      why: l('Frižider uspori fermentaciju. Kupus tada traje mesecima.', 'The fridge slows fermentation. The cabbage then keeps for months.', 'Холодильник замедляет ферментацию. Капуста тогда хранится месяцами.'),
    },
  ],
  mistake: {
    title: l('Kupus izbacio pa ostao iznad rasola nedelju dana.', 'Cabbage pushed up and left above the brine for a week.', 'Капуста поднялась и неделю простояла над рассолом.'),
    fix: l(
      'Gornji sloj se ubuđa. Tanak beo sloj kvasca na površini se skine kašikom. Ali čupava, zelena, crna ili ružičasta buđ znači: baci sve. Teg svaki dan proveri.',
      'The top layer goes mouldy. A thin white film of yeast on the surface can be skimmed off. But fuzzy green, black or pink mould means throw it all away. Check the weight every day.',
      'Верхний слой плесневеет. Тонкую белую плёнку дрожжей на поверхности снимают ложкой. Но пушистая зелёная, чёрная или розовая плесень — выбросить всё. Проверяй груз каждый день.',
    ),
  },
  think: {
    question: l('Zašto so bez joda?', 'Why non-iodised salt?', 'Почему нейодированная соль?'),
    options: [
      l('Jod i dodaci protiv grudvanja usporavaju bakterije i zamute rasol', 'Iodine and anti-caking agents slow the bacteria and cloud the brine', 'Йод и добавки против слёживания замедляют бактерии и мутят рассол'),
      l('Jodirana so je slanija', 'Iodised salt is saltier', 'Йодированная соль солонее'),
      l('Jod menja boju kupusa u plavo', 'Iodine turns the cabbage blue', 'Йод окрашивает капусту в синий'),
    ],
    answer: 0,
    explain: l(
      'Fermentacija živi od bakterija, pa sve što ih koči usporava kiseljenje. Krupna morska ili kamena so bez dodataka je najbolja.',
      'Fermentation lives on bacteria, so anything that holds them back slows the souring. Coarse sea or rock salt with no additives is best.',
      'Ферментация живёт бактериями, поэтому всё, что их тормозит, замедляет закисание. Лучше всего крупная морская или каменная соль без добавок.',
    ),
  },
}

const ajvar: Lesson = {
  id: '2.8.4',
  title: l('Ajvar', 'Ajvar', 'Айвар'),
  goal: l(
    'Ispečeš, oljuštiš i ukuvaš paprike u gust ajvar, i sačuvaš ga bezbedno.',
    'You roast, peel and cook down peppers into a thick ajvar, and store it safely.',
    'Ты запекаешь, чистишь и увариваешь перец в густой айвар и сохраняешь его безопасно.',
  ),
  minutes: 8,
  key: { value: l('2 h', '2 h', '2 ч'), label: l('ukuvavanje', 'cooking down', 'уваривание') },
  need: [
    { item: l('Crvene paprike roge ili babure', 'Red long or bell peppers', 'Красный перец рога или болгарский'), qty: l('5 kg', '5 kg', '5 кг') },
    { item: l('Plavi patlidžan (po želji)', 'Aubergine (optional)', 'Баклажан (по желанию)'), qty: l('1 kg', '1 kg', '1 кг') },
    { item: l('Suncokretovo ulje', 'Sunflower oil', 'Подсолнечное масло'), qty: l('250–300 ml', '250–300 ml', '250–300 мл') },
    { item: l('Alkoholno sirće 9%, so, beli luk', '9% spirit vinegar, salt, garlic', 'Спиртовой уксус 9%, соль, чеснок'), qty: l('50 ml + 30 g', '50 ml + 30 g', '50 мл + 30 г') },
    { item: l('Širok lonac debelog dna, varjača', 'Wide heavy-based pot, wooden spoon', 'Широкая кастрюля с толстым дном, деревянная ложка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Ajvar je kraljica naše zimnice: od 5 kg paprike ostane oko 1.5 kg ajvara. Dugo ukuvavanje daje slatkoću, a sirće i vodeno kupatilo ga čine bezbednim za ostavu.',
    'Ajvar is the queen of our preserves: 5 kg of peppers leaves about 1.5 kg of ajvar. Long cooking brings the sweetness, and vinegar and a water bath make it safe for the pantry.',
    'Айвар — королева наших заготовок: из 5 кг перца остаётся около 1,5 кг айвара. Долгое уваривание даёт сладость, а уксус и водяная баня делают его безопасным для кладовой.',
  ),
  steps: [
    {
      text: l('Ispeci paprike na žaru ili u rerni dok koža ne pocrni.', 'Roast the peppers over coals or in the oven until the skin blackens.', 'Запеки перец на углях или в духовке, пока кожица не почернеет.'),
      params: [l('rerna 250°C, 20–25 min', 'oven 250°C, 20–25 min', 'духовка 250°C, 20–25 мин'), l('okreni jednom', 'turn once', 'переверни раз')],
      done: l('Koža je naduvana i crna, a meso mekano.', 'The skin is blistered and black and the flesh soft.', 'Кожица вздута и чёрная, мякоть мягкая.'),
      why: l('Isto kao u 14.5. Pečenje, a ne kuvanje, daje ajvaru dimljen, dubok ukus.', 'The same as in 14.5. Roasting, not boiling, gives ajvar its deep, smoky taste.', 'Как в 14.5. Именно запекание, а не варка, даёт айвару глубокий дымный вкус.'),
      drawing: 'blisterPepper',
    },
    {
      text: l('Zatvori paprike u posudu, oljušti ih i očisti od semenki.', 'Seal the peppers in a container, then peel and deseed them.', 'Закрой перец в посуде, затем очисти от кожицы и семян.'),
      params: [l('ocedi preko noći', 'drain overnight', 'стечь за ночь')],
      done: l('Meso je čisto, bez crnih tačkica i semenki, i ocedilo se.', 'The flesh is clean, free of black flecks and seeds, and well drained.', 'Мякоть чистая, без чёрных точек и семян, и стекла.'),
      why: l('Oceđena paprika se ukuva za sat brže. Voda iz paprike je ono što ukuvavanjem isparava.', 'Drained peppers cook down an hour faster. The water in them is what the cooking has to evaporate.', 'Стёкший перец уваривается на час быстрее. Вода из перца — то, что приходится выпаривать.'),
      drawing: 'peelPepper',
    },
    {
      text: l('Sameli paprike i kuvaj na tihoj vatri, dolivajući ulje postepeno.', 'Mince the peppers and cook on low heat, adding the oil gradually.', 'Измельчи перец и вари на слабом огне, постепенно подливая масло.'),
      params: [l('1.5–2 h', '1.5–2 h', '1,5–2 ч'), l('mešaj stalno, do dna', 'stir constantly, to the bottom', 'мешай постоянно, до дна')],
      done: l('Ajvar je gust, varjača ostavlja trag na dnu, a ulje izlazi na površinu.', 'The ajvar is thick, the spoon leaves a track on the bottom and oil rises to the surface.', 'Айвар густой, ложка оставляет след на дне, масло выходит на поверхность.'),
      why: l('Isti znak kao kod paradajz sosa (9.5): ulje na površini znači da je voda isparila. Gust ajvar pljuje, pa koristi dugu varjaču.', 'The same sign as with tomato sauce (9.5): oil on top means the water has gone. Thick ajvar spits, so use a long spoon.', 'Тот же признак, что у томатного соуса (9.5): масло сверху значит, что вода выпарилась. Густой айвар брызгает, бери длинную ложку.'),
      drawing: 'ajvarPot',
    },
    {
      text: l('Dodaj so, sirće i beli luk, i kuvaj još 10 minuta.', 'Add salt, vinegar and garlic and cook 10 minutes more.', 'Добавь соль, уксус и чеснок и вари ещё 10 минут.'),
      params: [l('50 ml sirćeta 9% na ~1.5 kg', '50 ml 9% vinegar per ~1.5 kg', '50 мл уксуса 9% на ~1,5 кг')],
      done: l('Ajvar je slan, sladak i blago kiseo.', 'The ajvar is salty, sweet and gently sour.', 'Айвар солёный, сладкий и слегка кислый.'),
      why: l('Paprika sama po sebi nije dovoljno kisela za ostavu. Sirće je ovde bezbednost, a ne samo ukus.', 'Peppers on their own are not acidic enough for the pantry. The vinegar here is safety, not just flavour.', 'Перец сам по себе недостаточно кислый для кладовой. Уксус здесь — безопасность, а не только вкус.'),
    },
    {
      text: l('Vreo ajvar sipaj u vrele tegle i pasterizuj.', 'Pour the hot ajvar into hot jars and process them.', 'Разлей горячий айвар по горячим банкам и пастеризуй.'),
      params: [l('vodeno kupatilo 30 min', 'water bath 30 min', 'водяная баня 30 мин'), l('kašika ulja na vrh', 'a spoon of oil on top', 'ложка масла сверху')],
      done: l('Svi poklopci su se uvukli posle 24 h.', 'Every lid has pulled down after 24 h.', 'Все крышки втянулись через 24 ч.'),
      why: l('Postupak iz 2.8.1. Ako nisi siguran u kiselost ili zaptivanje, drži ajvar u frižideru i pojedi ga za mesec, ili ga zamrzni.', 'The method from 2.8.1. If you are unsure of the acidity or the seal, keep the ajvar in the fridge and eat it within a month, or freeze it.', 'Способ из 2.8.1. Если не уверен в кислотности или герметичности, держи айвар в холодильнике и съешь за месяц или заморозь.'),
      drawing: 'waterBath',
    },
  ],
  mistake: {
    title: l('Ajvar ukuvavan na jakoj vatri da bude brže.', 'Ajvar cooked down on high heat to save time.', 'Айвар уваривают на сильном огне, чтобы быстрее.'),
    fix: l(
      'Dno zagori za minut i ceo lonac dobije gorak ukus koji se ne popravlja. Tiha vatra, širok lonac i varjača koja ide do dna. Ajvar se kuva strpljenjem.',
      'The bottom catches within a minute and the whole pot takes on a bitter taste that cannot be fixed. Low heat, a wide pot and a spoon that reaches the bottom. Ajvar is cooked with patience.',
      'Дно пригорает за минуту, и вся кастрюля приобретает горечь, которую не исправить. Слабый огонь, широкая кастрюля и ложка до дна. Айвар варят терпением.',
    ),
  },
  think: {
    question: l('Zašto sirće u ajvaru, ako ga ne osetiš jako?', 'Why vinegar in ajvar if you barely taste it?', 'Зачем уксус в айваре, если его почти не чувствуешь?'),
    options: [
      l('Spušta kiselost ispod granice gde raste botulizam', 'It brings the acidity below the point where botulism grows', 'Он снижает pH ниже границы роста ботулизма'),
      l('Daje boju', 'It adds colour', 'Даёт цвет'),
      l('Zgušnjava ajvar', 'It thickens the ajvar', 'Загущает айвар'),
    ],
    answer: 0,
    explain: l(
      'Paprika i patlidžan su povrće niske kiselosti. Bez sirćeta, zatvoren ajvar je isti rizik kao povrće u tegli iz 2.8.1. Malo sirćeta, velika razlika.',
      'Peppers and aubergine are low-acid vegetables. Without vinegar, sealed ajvar carries the same risk as the plain jarred vegetables in 2.8.1. A little vinegar, a big difference.',
      'Перец и баклажан — низкокислотные овощи. Без уксуса закрытый айвар несёт тот же риск, что овощи в банке из 2.8.1. Немного уксуса — большая разница.',
    ),
  },
  recipe: { name: l('Ajvar', 'Ajvar', 'Айвар'), protein: 1.5, carbs: 9, fat: 14, kcal: 170 },
}

const jam: Lesson = {
  id: '2.8.5',
  title: l('Džem i slatko', 'Jam and fruit preserve', 'Джем и варенье'),
  goal: l(
    'Skuvaš džem koji se stegne i sačuva ukus voća, sa upola manje šećera nego kod bake.',
    'You cook a jam that sets and keeps the taste of the fruit, with half the sugar grandma used.',
    'Ты варишь джем, который застывает и сохраняет вкус фруктов, с вдвое меньшим количеством сахара, чем у бабушки.',
  ),
  minutes: 6,
  key: { value: l('105°C', '105°C', '105°C'), label: l('tačka stezanja', 'setting point', 'точка застывания') },
  need: [
    { item: l('Kajsije, šljive ili jagode', 'Apricots, plums or strawberries', 'Абрикосы, сливы или клубника'), qty: l('1 kg očišćeno', '1 kg prepared', '1 кг очищенных') },
    { item: l('Šećer', 'Sugar', 'Сахар'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Limun', 'Lemon', 'Лимон'), qty: l('1 kom', '1', '1 шт') },
    { item: l('Tanjirić u zamrzivaču, termometar', 'A saucer in the freezer, thermometer', 'Блюдце в морозилке, термометр'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Džem drže tri stvari: šećer, kiselina i pektin iz voća. Kad ih razumeš, kuvaš sa manje šećera i kraće, pa voće ostane voće, a ne slatka kaša.',
    'Jam is held together by three things: sugar, acid and the fruit\'s pectin. Understand them and you cook with less sugar and for less time, so the fruit stays fruit, not sweet mush.',
    'Джем держат три вещи: сахар, кислота и пектин фруктов. Поняв их, варишь с меньшим количеством сахара и меньше по времени, и фрукты остаются фруктами, а не сладкой кашей.',
  ),
  steps: [
    {
      text: l('Iseci voće, pospi šećerom i limunovim sokom i ostavi.', 'Cut the fruit, sprinkle with sugar and lemon juice and leave it.', 'Нарежь фрукты, посыпь сахаром, сбрызни лимоном и оставь.'),
      params: [l('2 : 1 voće : šećer', '2 : 1 fruit : sugar', '2 : 1 фрукты : сахар'), l('2 h ili preko noći', '2 h or overnight', '2 ч или на ночь')],
      done: l('Voće je pustilo sok i šećer se skoro otopio.', 'The fruit has released its juice and the sugar has nearly dissolved.', 'Фрукты пустили сок, сахар почти растворился.'),
      why: l('Šećer izvuče sok bez kuvanja, pa voće kraće ključa i zadrži boju i ukus.', 'The sugar draws out the juice without cooking, so the fruit boils for less time and keeps its colour and flavour.', 'Сахар вытягивает сок без варки, поэтому фрукты кипят меньше и сохраняют цвет и вкус.'),
    },
    {
      text: l('Kuvaj na jakoj vatri, mešajući i skidajući penu.', 'Boil hard, stirring and skimming the foam.', 'Вари на сильном огне, помешивая и снимая пену.'),
      params: [l('jaka vatra', 'high heat', 'сильный огонь'), l('15–25 min', '15–25 min', '15–25 мин')],
      done: l('Mehurići postaju sitni i spori, a džem sija.', 'The bubbles turn small and slow and the jam shines.', 'Пузыри становятся мелкими и медленными, джем блестит.'),
      drawing: 'skim',
    },
    {
      text: l('Proveri: termometar ili kap na hladnom tanjiriću.', 'Test: thermometer or a drop on the cold saucer.', 'Проверь: термометром или каплей на холодном блюдце.'),
      params: [l('104–105°C', '104–105°C', '104–105°C')],
      done: l('Kap na tanjiriću se nabora kad je gurneš prstom.', 'The drop on the saucer wrinkles when you push it with a finger.', 'Капля на блюдце морщится, если толкнуть её пальцем.'),
      why: l('Na 105°C dovoljno vode je isparilo da pektin i šećer stegnu džem. Preko toga postaje bombona.', 'At 105°C enough water has gone for the pectin and sugar to set the jam. Beyond that it turns to toffee.', 'При 105°C выпарилось достаточно воды, чтобы пектин и сахар загустили джем. Выше — превращается в ириску.'),
      drawing: 'jamWrinkle',
    },
    {
      text: l('Sipaj vreo džem u vrele tegle i pasterizuj.', 'Pour the hot jam into hot jars and process them.', 'Разлей горячий джем по горячим банкам и пастеризуй.'),
      params: [l('vodeno kupatilo 10 min', 'water bath 10 min', 'водяная баня 10 мин')],
      done: l('Poklopci su se uvukli.', 'The lids have pulled down.', 'Крышки втянулись.'),
      why: l('Džem sa manje šećera ne čuva sam sebe kao bakin. Vodeno kupatilo (2.8.1) to nadoknađuje.', 'A lower-sugar jam does not preserve itself like grandma\'s did. The water bath (2.8.1) makes up for it.', 'Джем с меньшим количеством сахара не сохраняет себя сам, как бабушкин. Водяная баня (2.8.1) это компенсирует.'),
      drawing: 'waterBath',
    },
    {
      text: l('Otvorenu teglu drži u frižideru.', 'Keep an opened jar in the fridge.', 'Открытую банку держи в холодильнике.'),
      params: [l('3–4 nedelje', '3–4 weeks', '3–4 недели')],
      done: l('Na džemu se ne pojavljuje buđ.', 'No mould appears on the jam.', 'На джеме не появляется плесень.'),
      why: l('Uvek uzimaj čistom kašikom. Mrvica hleba ili putera je početak buđi.', 'Always use a clean spoon. A crumb of bread or butter is where mould starts.', 'Всегда бери чистой ложкой. Крошка хлеба или масла — начало плесени.'),
    },
  ],
  mistake: {
    title: l('Džem kuvan sat vremena "da se dobro zgusne".', 'Jam boiled for an hour "to thicken it properly".', 'Джем варят час, «чтобы хорошо загустел».'),
    fix: l(
      'Voće potamni, izgubi miris i dobije ukus karamela. Džem se steže kad se ohladi, ne u šerpi. Na 105°C ili kad se kap nabora, gotov je, iako deluje redak.',
      'The fruit darkens, loses its aroma and tastes of caramel. Jam sets as it cools, not in the pan. At 105°C, or when the drop wrinkles, it is done, even if it looks runny.',
      'Фрукты темнеют, теряют аромат и приобретают вкус карамели. Джем застывает при остывании, а не в кастрюле. При 105°C или когда капля морщится — готов, даже если кажется жидким.',
    ),
  },
  think: {
    question: l('Jagode se slabo stežu. Zašto limun pomaže?', 'Strawberries barely set. Why does lemon help?', 'Клубника плохо застывает. Почему помогает лимон?'),
    options: [
      l('Kiselina pomaže pektinu da napravi mrežu', 'Acid helps the pectin form its net', 'Кислота помогает пектину образовать сетку'),
      l('Limun ima puno šećera', 'Lemon is full of sugar', 'В лимоне много сахара'),
      l('Limun hladi džem', 'Lemon cools the jam', 'Лимон охлаждает джем'),
    ],
    answer: 0,
    explain: l(
      'Pektin se stegne samo u kiseloj sredini. Jagode imaju malo pektina i kiseline, pa limun nadoknađuje oba. Kora limuna ima još pektina.',
      'Pectin only sets in an acidic environment. Strawberries are low in pectin and acid, so lemon makes up for both. Lemon peel adds even more pectin.',
      'Пектин застывает только в кислой среде. В клубнике мало пектина и кислоты, лимон компенсирует и то, и другое. В лимонной корке ещё больше пектина.',
    ),
  },
  recipe: { name: l('Džem od kajsija', 'Apricot jam', 'Абрикосовый джем'), protein: 0.6, carbs: 52, fat: 0.1, kcal: 210 },
}

const drySmoke: Lesson = {
  id: '2.8.6',
  title: l('Sušenje i dimljenje kod kuće', 'Drying and smoking at home', 'Сушка и копчение дома'),
  goal: l(
    'Osušiš paradajz i bilje u rerni i toplo zadimiš ribu u loncu na šporetu.',
    'You dry tomatoes and herbs in the oven and hot-smoke fish in a pot on the stove.',
    'Ты сушишь помидоры и травы в духовке и горячим способом коптишь рыбу в кастрюле на плите.',
  ),
  minutes: 7,
  key: { value: l('90°C', '90°C', '90°C'), label: l('rerna za sušenje', 'oven for drying', 'духовка для сушки') },
  need: [
    { item: l('Čeri paradajz', 'Cherry tomatoes', 'Помидоры черри'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Sveže bilje: origano, majčina dušica', 'Fresh herbs: oregano, thyme', 'Свежие травы: орегано, тимьян'), qty: l('2 vezice', '2 bunches', '2 пучка') },
    { item: l('File pastrmke ili lososa', 'Trout or salmon fillet', 'Филе форели или лосося'), qty: l('2 × 150 g', '2 × 150 g', '2 × 150 г') },
    { item: l('Strugotina voćke (jabuka, trešnja)', 'Fruitwood chips (apple, cherry)', 'Щепа плодовых деревьев (яблоня, вишня)'), qty: l('2 šake', '2 handfuls', '2 горсти') },
    { item: l('Stari lonac, folija, rešetka koja staje u lonac', 'An old pot, foil, a rack that fits inside', 'Старая кастрюля, фольга, решётка по размеру'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Sušenje uzme vodu, a bez vode bakterije ne rastu. Dim dodaje ukus i blago konzervira. Oba su stara koliko i kuhinja, a rerna i lonac ih donose u stan.',
    'Drying takes away water, and without water bacteria cannot grow. Smoke adds flavour and mildly preserves. Both are as old as cooking, and an oven and a pot bring them into a flat.',
    'Сушка забирает воду, а без воды бактерии не растут. Дым добавляет вкус и слегка консервирует. Оба способа стары, как сама кухня, а духовка и кастрюля приносят их в квартиру.',
  ),
  steps: [
    {
      text: l('Prepolovi paradajz, posoli i suši u rerni na niskoj temperaturi.', 'Halve the tomatoes, salt them and dry them in a low oven.', 'Разрежь помидоры пополам, посоли и суши в духовке при низкой температуре.'),
      params: [l('90°C', '90°C', '90°C'), l('3–4 h', '3–4 h', '3–4 ч'), l('vrata odškrinuta', 'door ajar', 'дверца приоткрыта')],
      done: l('Paradajz je smežuran, kožast i bez vlage, ali još savitljiv.', 'The tomatoes are shrivelled, leathery and dry, but still pliable.', 'Помидоры сморщенные, кожистые и сухие, но ещё гибкие.'),
      why: l('Odškrinuta vrata puštaju vlagu napolje. Zatvorena rerna bi paradajz kuvala u pari.', 'A door left ajar lets the moisture out. A closed oven would steam the tomatoes.', 'Приоткрытая дверца выпускает влагу. В закрытой духовке помидоры бы тушились.'),
      drawing: 'dryTray',
    },
    {
      text: l('Osušen paradajz čuvaj u frižideru, potopljen u ulje.', 'Keep the dried tomatoes in the fridge, covered in oil.', 'Храни сушёные помидоры в холодильнике, залитыми маслом.'),
      params: [l('frižider, max 2 nedelje', 'fridge, 2 weeks max', 'холодильник, макс. 2 недели')],
      done: l('Tegla je u frižideru, a paradajz je ispod ulja.', 'The jar is in the fridge and the tomatoes are under oil.', 'Банка в холодильнике, помидоры под маслом.'),
      why: l('Povrće u ulju bez kiseline na sobnoj temperaturi je rizik od botulizma, isto kao u 2.8.1. Samo frižider.', 'Vegetables in oil without acid at room temperature are a botulism risk, just as in 2.8.1. Fridge only.', 'Овощи в масле без кислоты при комнатной температуре — риск ботулизма, как в 2.8.1. Только холодильник.'),
    },
    {
      text: l('Bilje veži u snopove i osuši naopako, na suvom i tamnom mestu.', 'Tie the herbs in bunches and hang them upside down in a dry, dark place.', 'Свяжи травы пучками и подвесь вверх ногами в сухом тёмном месте.'),
      params: [l('7–10 dana', '7–10 days', '7–10 дней')],
      done: l('Listovi se mrve među prstima.', 'The leaves crumble between your fingers.', 'Листья крошатся между пальцами.'),
      why: l('Tvrdo bilje se suši dobro. Meko (bosiljak, peršun) bolje je zamrznuti u ulju (15.4).', 'Hard herbs dry well. Soft ones (basil, parsley) are better frozen in oil (15.4).', 'Жёсткие травы хорошо сушатся. Мягкие (базилик, петрушка) лучше заморозить в масле (15.4).'),
    },
    {
      text: l('Za dimljenje: strugotinu na dno lonca obloženog folijom, rešetka iznad.', 'For smoking: wood chips on the foil-lined base of the pot, rack above.', 'Для копчения: щепа на дно кастрюли, выложенное фольгой, решётка сверху.'),
      params: [l('posoljena riba 30 min ranije', 'fish salted 30 min ahead', 'рыба посолена за 30 мин'), l('aspirator i otvoren prozor', 'extractor on and window open', 'вытяжка и открытое окно')],
      done: l('Riba leži na rešetki 5 cm iznad strugotine.', 'The fish sits on the rack 5 cm above the chips.', 'Рыба лежит на решётке в 5 см над щепой.'),
      drawing: 'smokePot',
    },
    {
      text: l('Zagrej dok se ne pojavi dim, poklopi i dimi na srednjoj vatri.', 'Heat until smoke appears, cover and smoke over medium heat.', 'Нагрей до появления дыма, накрой и копти на среднем огне.'),
      params: [l('10–15 min', '10–15 min', '10–15 мин'), l('riba 60°C u sredini', 'fish 60°C at the centre', 'рыба 60°C в центре')],
      done: l('Riba je zlatnobraon spolja, neprozirna i lista se.', 'The fish is golden brown outside, opaque and flakes.', 'Рыба золотисто-коричневая снаружи, непрозрачная и расслаивается.'),
      why: l('Ovo je toplo dimljenje: riba se i dimi i peče. Hladno dimljenje traje danima ispod 30°C i nije za kućnu kuhinju.', 'This is hot smoking: the fish is smoked and cooked at once. Cold smoking takes days below 30°C and is not for a home kitchen.', 'Это горячее копчение: рыба одновременно коптится и готовится. Холодное копчение длится днями ниже 30°C и не для домашней кухни.'),
    },
  ],
  mistake: {
    title: l('Beli luk ili paradajz u ulju na polici u kuhinji.', 'Garlic or tomatoes in oil on a kitchen shelf.', 'Чеснок или помидоры в масле на кухонной полке.'),
    fix: l(
      'Ulje zatvori vazduh, a beli luk i povrće nisu kiseli: savršeni uslovi za botulizam, bez mirisa i promene izgleda. Povrće u ulju uvek u frižideru, najviše dve nedelje.',
      'The oil shuts out air, and garlic and vegetables are not acidic: perfect conditions for botulism, with no smell and no change in appearance. Vegetables in oil always go in the fridge, two weeks at most.',
      'Масло перекрывает воздух, а чеснок и овощи не кислые: идеальные условия для ботулизма, без запаха и изменения вида. Овощи в масле — всегда в холодильнике, не больше двух недель.',
    ),
  },
  think: {
    question: l('Zašto se paradajz suši na 90°C, a ne na 200°C?', 'Why are tomatoes dried at 90°C and not 200°C?', 'Почему помидоры сушат при 90°C, а не при 200°C?'),
    options: [
      l('Na 200°C se ispeku i izgore spolja pre nego što se osuše', 'At 200°C they roast and burn outside before they dry', 'При 200°C они запекаются и подгорают снаружи раньше, чем высохнут'),
      l('Na 90°C su slađi jer ima više šećera', 'At 90°C they are sweeter because there is more sugar', 'При 90°C они слаще, потому что больше сахара'),
      l('Da se uštedi struja', 'To save electricity', 'Чтобы сэкономить электричество'),
    ],
    answer: 0,
    explain: l(
      'Sušenje je spor odlazak vode, a ne pečenje. Ista razlika kao prezla i krutoni u 15.2: niska temperatura suši, visoka boji.',
      'Drying is water leaving slowly, not roasting. The same difference as breadcrumbs and croutons in 15.2: low heat dries, high heat colours.',
      'Сушка — медленный уход воды, а не запекание. Та же разница, что между сухарями и крутонами в 15.2: низкая температура сушит, высокая — румянит.',
    ),
  },
}

export const preserveLessons: Lesson[] = [sterile, quickPickles, sauerkraut, ajvar, jam, drySmoke]
