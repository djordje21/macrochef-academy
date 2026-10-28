import { l, type Lesson } from '../types'

// Grade 2 · Module 7 · Desserts: the basics. Pastry is chemistry with a thermometer: eggs thicken at one
// number and curdle at the next, sugar changes at every ten degrees. No raw eggs in any recipe here.

const pastryCream: Lesson = {
  id: '2.7.1',
  title: l('Krem za kolače', 'Pastry cream', 'Заварной крем'),
  goal: l(
    'Skuvaš gust, svilenkast krem od vanile koji se ne zgruša i nema ukus brašna.',
    'You cook a thick, silky vanilla cream that neither curdles nor tastes of starch.',
    'Ты варишь густой шелковистый ванильный крем, который не сворачивается и не отдаёт крахмалом.',
  ),
  minutes: 7,
  key: { value: l('1 min', '1 min', '1 мин'), label: l('ključanja', 'at the boil', 'кипения') },
  need: [
    { item: l('Mleko', 'Milk', 'Молоко'), qty: l('500 ml', '500 ml', '500 мл') },
    { item: l('Žumanca', 'Egg yolks', 'Желтки'), qty: l('5 kom, ~100 g', '5, ~100 g', '5 шт, ~100 г') },
    { item: l('Šećer', 'Sugar', 'Сахар'), qty: l('100 g', '100 g', '100 г') },
    { item: l('Gustin (kukuruzni skrob)', 'Cornflour', 'Кукурузный крахмал'), qty: l('40 g', '40 g', '40 г') },
    { item: l('Vanila, puter', 'Vanilla, butter', 'Ваниль, сливочное масло'), qty: l('1 mahuna + 30 g', '1 pod + 30 g', '1 стручок + 30 г') },
  ],
  why: l(
    'Krem za kolače je osnova polovine poslastičarnice: tart, ekler, krempita. Skrob ga čini otpornim, pa sme da proključa, za razliku od engleskog krema.',
    'Pastry cream is the base of half of all pastry: tarts, éclairs, cream slices. Starch makes it robust, so unlike crème anglaise it may boil.',
    'Заварной крем — основа половины кондитерки: тарты, эклеры, кремпита. Крахмал делает его стойким, поэтому, в отличие от английского крема, ему можно кипеть.',
  ),
  steps: [
    {
      text: l('Zagrej mleko sa vanilom do ključanja.', 'Heat the milk with the vanilla to the boil.', 'Нагрей молоко с ванилью до кипения.'),
      done: l('Mleko počinje da se diže ivicama.', 'The milk starts to rise at the edges.', 'Молоко начинает подниматься по краям.'),
    },
    {
      text: l('Umuti žumanca, šećer i gustin dok ne posvetle.', 'Whisk the yolks, sugar and cornflour until pale.', 'Взбей желтки, сахар и крахмал до посветления.'),
      params: [l('1 min', '1 min', '1 мин')],
      done: l('Smesa je svetložuta i glatka, bez grudvica skroba.', 'The mixture is pale yellow and smooth, with no lumps of starch.', 'Смесь светло-жёлтая и гладкая, без комочков крахмала.'),
      why: l('Šećer koji dugo stoji na žumancima ih "skuva" u zrnca. Mešaj odmah čim ih spojiš.', 'Sugar left sitting on yolks "cooks" them into grains. Whisk as soon as they meet.', 'Сахар, долго лежащий на желтках, «сваривает» их в крупинки. Взбивай сразу, как соединишь.'),
    },
    {
      text: l('Sipaj trećinu vrelog mleka u žumanca, mućenjem, pa vrati sve u šerpu.', 'Pour a third of the hot milk onto the yolks, whisking, then return everything to the pan.', 'Влей треть горячего молока в желтки, взбивая, затем верни всё в кастрюлю.'),
      done: l('Smesa je jednolična, bez komadića jajeta.', 'The mixture is uniform, with no bits of cooked egg.', 'Смесь однородная, без кусочков яйца.'),
      why: l('Isto razređivanje kao u čorbi (8.5): žumanca se zagreju postepeno i ne zgrušaju.', 'The same tempering as in čorba (8.5): the yolks warm gradually and do not curdle.', 'То же разведение, что в чорбе (8.5): желтки нагреваются постепенно и не сворачиваются.'),
      drawing: 'temperLiaison',
    },
    {
      text: l('Kuvaj uz stalno mućenje dok ne proključa, pa još minut.', 'Cook, whisking constantly, until it boils, then one minute more.', 'Вари, постоянно взбивая, до кипения и ещё минуту.'),
      params: [l('1 min ključanja', '1 min at the boil', '1 мин кипения')],
      done: l('Krem je gust, sjajan, i mehur pukne na površini.', 'The cream is thick and glossy, with bubbles bursting on the surface.', 'Крем густой, блестящий, на поверхности лопаются пузыри.'),
      why: l('Skrob zgušnjava tek na ključanju. Bez tog minuta krem ima ukus brašna i posle se razvodni.', 'Starch only thickens at the boil. Without that minute the cream tastes floury and later turns runny.', 'Крахмал загущает только при кипении. Без этой минуты крем отдаёт мукой и потом разжижается.'),
      drawing: 'creamBoil',
    },
    {
      text: l('Van vatre umešaj puter, prekrij folijom do površine i ohladi.', 'Off the heat, stir in the butter, press film onto the surface and chill.', 'Вне огня вмешай масло, накрой плёнкой в контакт и охлади.'),
      params: [l('30 g', '30 g', '30 г'), l('folija dodiruje krem', 'film touching the cream', 'плёнка касается крема'), l('2 h u frižideru', '2 h in the fridge', '2 ч в холодильнике')],
      done: l('Ohlađen krem je čvrst i nema kožicu.', 'The chilled cream is firm and has no skin.', 'Охлаждённый крем плотный и без плёнки.'),
      why: l('Folija na površini sprečava kožicu. Krem drži do 3 dana u frižideru.', 'Film on the surface prevents a skin. The cream keeps up to 3 days in the fridge.', 'Плёнка на поверхности не даёт образоваться корке. Крем хранится до 3 дней в холодильнике.'),
    },
  ],
  mistake: {
    title: l('Krem sklonjen sa vatre čim se zgusnuo.', 'Cream taken off the heat as soon as it thickens.', 'Крем сняли с огня, как только загустел.'),
    fix: l(
      'Žumanca imaju enzim koji razgrađuje skrob. Ako krem ne proključa minut, enzim preživi i sutradan je krem redak. Uvek do ključanja, pa minut uz mućenje.',
      'Yolks contain an enzyme that breaks down starch. If the cream does not boil for a minute, the enzyme survives and the next day the cream is runny. Always to the boil, then a minute, whisking.',
      'В желтках есть фермент, расщепляющий крахмал. Если крем не прокипит минуту, фермент выживет, и назавтра крем станет жидким. Всегда до кипения и ещё минуту, взбивая.',
    ),
  },
  think: {
    question: l('Zašto krem za kolače sme da proključa, a engleski krem ne?', 'Why may pastry cream boil while crème anglaise may not?', 'Почему заварному крему можно кипеть, а английскому — нет?'),
    options: [
      l('Skrob štiti žumanca od zgrušavanja', 'The starch protects the yolks from curdling', 'Крахмал защищает желтки от свёртывания'),
      l('Ima više šećera', 'It has more sugar', 'В нём больше сахара'),
      l('Mleko je gušće od pavlake', 'Milk is thicker than cream', 'Молоко гуще сливок'),
    ],
    answer: 0,
    explain: l(
      'Zrnca skroba stanu između proteina žumanca i ne daju im da se spoje u grudvice. Bez skroba, žumanca se zgrušaju na 85°C.',
      'Starch granules sit between the yolk proteins and stop them joining into curds. Without starch, yolks curdle at 85°C.',
      'Крахмальные зёрна встают между белками желтка и не дают им слипнуться в хлопья. Без крахмала желтки сворачиваются при 85°C.',
    ),
  },
  recipe: { name: l('Krem od vanile', 'Vanilla pastry cream', 'Ванильный заварной крем'), protein: 4, carbs: 21, fat: 9, kcal: 180 },
}

const anglaise: Lesson = {
  id: '2.7.2',
  title: l('Engleski krem', 'Crème anglaise', 'Английский крем'),
  goal: l(
    'Skuvaš engleski krem do tačno 82°C, gust da prekrije kašiku, bez zgrušavanja.',
    'You cook crème anglaise to exactly 82°C, thick enough to coat a spoon, without curdling.',
    'Ты варишь английский крем ровно до 82°C, густой настолько, чтобы покрыть ложку, без свёртывания.',
  ),
  minutes: 6,
  key: { value: l('82°C', '82°C', '82°C'), label: l('ne više', 'no higher', 'не выше') },
  need: [
    { item: l('Mleko i slatka pavlaka', 'Milk and cream', 'Молоко и сливки'), qty: l('250 + 250 ml', '250 + 250 ml', '250 + 250 мл') },
    { item: l('Žumanca', 'Egg yolks', 'Желтки'), qty: l('5 kom', '5', '5 шт') },
    { item: l('Šećer, vanila', 'Sugar, vanilla', 'Сахар, ваниль'), qty: l('80 g + 1 mahuna', '80 g + 1 pod', '80 г + 1 стручок') },
    { item: l('Termometar, sito, hladna činija', 'Thermometer, sieve, cold bowl', 'Термометр, сито, холодная миска'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Engleski krem je sos uz deserte i osnova za sladoled. Drže ga samo žumanca, bez skroba, pa je cela razlika između svile i kajgane dva stepena.',
    'Crème anglaise is the sauce for desserts and the base for ice cream. Only yolks hold it, with no starch, so the whole difference between silk and scrambled egg is two degrees.',
    'Английский крем — соус к десертам и основа мороженого. Его держат только желтки, без крахмала, поэтому разница между шёлком и омлетом — два градуса.',
  ),
  steps: [
    {
      text: l('Zagrej mleko, pavlaku i vanilu do ključanja.', 'Heat the milk, cream and vanilla until just boiling.', 'Нагрей молоко, сливки и ваниль почти до кипения.'),
      done: l('Ivice počinju da mehure.', 'The edges start to bubble.', 'По краям начинают появляться пузырьки.'),
    },
    {
      text: l('Umuti žumanca sa šećerom i razredi ih vrelim mlekom.', 'Whisk the yolks with the sugar and temper them with the hot milk.', 'Взбей желтки с сахаром и разведи горячим молоком.'),
      done: l('Smesa je glatka i topla.', 'The mixture is smooth and warm.', 'Смесь гладкая и тёплая.'),
      drawing: 'temperLiaison',
    },
    {
      text: l('Kuvaj na tihoj vatri, mešajući varjačom u osmicu.', 'Cook over low heat, stirring with a spatula in a figure of eight.', 'Вари на слабом огне, мешая лопаткой восьмёркой.'),
      params: [l('tiha vatra', 'low heat', 'слабый огонь'), l('5–8 min', '5–8 min', '5–8 мин')],
      done: l('Krem se polako zgušnjava, a para se diže sa površine.', 'The cream slowly thickens and steam rises from the surface.', 'Крем медленно густеет, с поверхности поднимается пар.'),
      why: l('Osmica prolazi i preko dna i preko ugla šerpe, gde se krem prvi zgruša.', 'A figure of eight covers both the base and the corner of the pan, where the cream curdles first.', 'Восьмёрка проходит и по дну, и по углу кастрюли, где крем сворачивается первым.'),
    },
    {
      text: l('Skloni sa vatre na 82°C ili kad prekrije kašiku.', 'Take it off at 82°C or when it coats the spoon.', 'Сними с огня при 82°C или когда покрывает ложку.'),
      params: [l('82°C', '82°C', '82°C'), l('trag prsta ostaje čist', 'a finger line stays clean', 'след пальца остаётся чистым')],
      done: l('Trag prsta preko varjače se ne zatvara.', 'A finger drawn across the spatula leaves a clean line.', 'След пальца на лопатке не затягивается.'),
      why: l('Na 82°C žumanca zgusnu krem. Na 85°C se zgrušaju u kajganu. Termometar je ovde obavezan.', 'At 82°C the yolks thicken the cream. At 85°C they curdle into scrambled egg. The thermometer is a must here.', 'При 82°C желтки загущают крем. При 85°C сворачиваются в омлет. Термометр здесь обязателен.'),
      drawing: 'coatSpoon',
    },
    {
      text: l('Odmah procedi u hladnu činiju i mešaj dok se ne prohladi.', 'Strain at once into a cold bowl and stir until it cools.', 'Сразу процеди в холодную миску и мешай, пока не остынет.'),
      params: [l('činija na ledu', 'bowl over ice', 'миска на льду')],
      done: l('Krem je glatak i hladan, bez ijedne grudvice.', 'The cream is smooth and cold, without a single lump.', 'Крем гладкий и холодный, без единого комочка.'),
      why: l('Vrela šerpa nastavi da kuva krem i posle vatre. Hladna činija ga zaustavi na 82°C.', 'The hot pan keeps cooking the cream even off the heat. A cold bowl stops it at 82°C.', 'Горячая кастрюля продолжает варить крем и вне огня. Холодная миска останавливает его на 82°C.'),
    },
  ],
  mistake: {
    title: l('Engleski krem doveden do ključanja "da se zgusne".', 'Crème anglaise brought to the boil "to thicken it".', 'Английский крем довели до кипения, «чтобы загустел».'),
    fix: l(
      'Na ključanju se žumanca zgrušaju i krem se iseče. Ako se tek počeo zrniti, odmah ga izmiksaj štapnim mikserom u hladnoj činiji, pa procedi. Spasiš ga skoro uvek.',
      'At the boil the yolks curdle and the cream splits. If it has only just turned grainy, blitz it straight away with a stick blender in a cold bowl, then strain. It can almost always be saved.',
      'При кипении желтки сворачиваются, и крем расслаивается. Если он только начал зернить, сразу взбей погружным блендером в холодной миске и процеди. Спасти почти всегда можно.',
    ),
  },
  think: {
    question: l('Termometar pokazuje 80°C, a krem je već gust i prekriva kašiku. Šta radiš?', 'The thermometer reads 80°C, but the cream is already thick and coats the spoon. What do you do?', 'Термометр показывает 80°C, а крем уже густой и покрывает ложку. Что делаешь?'),
    options: [
      l('Skloniš ga i procediš, krem je gotov', 'Take it off and strain it; it is done', 'Снимаешь и процеживаешь — крем готов'),
      l('Čekaš tačno 82°C', 'Wait for exactly 82°C', 'Ждёшь ровно 82°C'),
      l('Pojačaš vatru', 'Turn up the heat', 'Прибавляешь огонь'),
    ],
    answer: 0,
    explain: l(
      'Broj je vodič, a kašika je dokaz. Termometri greše za stepen-dva, a krem već pokazuje da je gotov. Kao u 7.5: proveri termometar, pa veruj očima.',
      'The number is a guide, the spoon is the proof. Thermometers can be off by a degree or two, and the cream is already showing it is done. As in 7.5: check your thermometer, then trust your eyes.',
      'Число — ориентир, ложка — доказательство. Термометры ошибаются на градус-два, а крем уже показывает готовность. Как в 7.5: проверь термометр, а затем доверяй глазам.',
    ),
  },
}

const pannaCotta: Lesson = {
  id: '2.7.3',
  title: l('Panakota i želatin', 'Panna cotta and gelatine', 'Панакота и желатин'),
  goal: l(
    'Napraviš panakotu koja drži oblik na tanjiru, a drhti kad je pomeriš.',
    'You make a panna cotta that holds its shape on the plate but wobbles when moved.',
    'Ты готовишь панакоту, которая держит форму на тарелке, но дрожит, если её сдвинуть.',
  ),
  minutes: 6,
  key: { value: l('6 g', '6 g', '6 г'), label: l('želatina na 500 ml', 'gelatine per 500 ml', 'желатина на 500 мл') },
  need: [
    { item: l('Slatka pavlaka', 'Cream', 'Сливки'), qty: l('400 ml', '400 ml', '400 мл') },
    { item: l('Mleko', 'Milk', 'Молоко'), qty: l('100 ml', '100 ml', '100 мл') },
    { item: l('Želatin u listićima', 'Gelatine leaves', 'Листовой желатин'), qty: l('6 g (3 listića)', '6 g (3 leaves)', '6 г (3 листа)') },
    { item: l('Šećer, vanila', 'Sugar, vanilla', 'Сахар, ваниль'), qty: l('60 g + 1 mahuna', '60 g + 1 pod', '60 г + 1 стручок') },
    { item: l('Kalupi ili čaše', 'Moulds or glasses', 'Формочки или стаканы'), qty: l('4 × 125 ml', '4 × 125 ml', '4 × 125 мл') },
  ],
  why: l(
    'Panakota je desert koji se pravi dan ranije i servira za minut: savršen za meni (2.1.4). Cela tajna je u količini želatina.',
    'Panna cotta is made the day before and served in a minute: perfect for a menu (2.1.4). The whole secret is the amount of gelatine.',
    'Панакоту готовят накануне и подают за минуту: идеально для меню (2.1.4). Весь секрет — в количестве желатина.',
  ),
  steps: [
    {
      text: l('Potopi listiće želatina u hladnu vodu.', 'Soak the gelatine leaves in cold water.', 'Замочи листы желатина в холодной воде.'),
      params: [l('5–10 min', '5–10 min', '5–10 мин'), l('ledena voda', 'ice-cold water', 'ледяная вода')],
      done: l('Listići su mekani i providni kao meduza.', 'The leaves are soft and translucent like a jellyfish.', 'Листы мягкие и прозрачные, как медуза.'),
      drawing: 'gelatinBloom',
    },
    {
      text: l('Zagrej pavlaku, mleko, šećer i vanilu, ali ne do ključanja.', 'Warm the cream, milk, sugar and vanilla, but do not boil.', 'Нагрей сливки, молоко, сахар и ваниль, но не доводи до кипения.'),
      params: [l('60–70°C', '60–70°C', '60–70°C')],
      done: l('Šećer se otopio, a para se tek diže.', 'The sugar has dissolved and steam is just rising.', 'Сахар растворился, пар только начинает подниматься.'),
      why: l('Želatin gubi snagu na ključanju. Dovoljno je toplo da se otopi.', 'Gelatine loses strength at the boil. Warm enough to melt it is all you need.', 'Желатин теряет силу при кипении. Достаточно тепла, чтобы он растворился.'),
    },
    {
      text: l('Iscedi želatin i umešaj ga u toplu pavlaku.', 'Squeeze out the gelatine and stir it into the warm cream.', 'Отожми желатин и вмешай его в тёплые сливки.'),
      done: l('Želatin je potpuno nestao, nema niti na varjači.', 'The gelatine has fully disappeared, with no strands on the spatula.', 'Желатин полностью растворился, на лопатке нет нитей.'),
    },
    {
      text: l('Procedi, sipaj u kalupe i ostavi u frižideru.', 'Strain, pour into the moulds and leave in the fridge.', 'Процеди, разлей по формочкам и поставь в холодильник.'),
      params: [l('6 h ili preko noći', '6 h or overnight', '6 ч или на ночь')],
      done: l('Panakota je stegnuta, a sredina drhti kad pomeriš kalup.', 'The panna cotta is set and the centre wobbles when you move the mould.', 'Панакота застыла, середина дрожит, если сдвинуть формочку.'),
      why: l('Želatin se steže polako. Posle 2 sata je samo spolja čvrst.', 'Gelatine sets slowly. After 2 hours it is only firm on the outside.', 'Желатин застывает медленно. Через 2 часа он твёрдый только снаружи.'),
    },
    {
      text: l('Uroni kalup u toplu vodu 5 sekundi i izruči na tanjir.', 'Dip the mould in warm water for 5 seconds and turn it out onto the plate.', 'Опусти формочку в тёплую воду на 5 секунд и переверни на тарелку.'),
      params: [l('5 s', '5 s', '5 с')],
      done: l('Panakota stoji cela na tanjiru, glatkih ivica, i drhti.', 'The panna cotta stands whole on the plate, smooth-sided and wobbling.', 'Панакота стоит целой на тарелке, с гладкими краями, и дрожит.'),
      why: l('Topla voda otopi tanak spoljni sloj i panakota sklizne. Duže od 10 sekundi i počinje da se topi.', 'Warm water melts a thin outer layer and the panna cotta slides out. Longer than 10 seconds and it starts to melt.', 'Тёплая вода растапливает тонкий внешний слой, и панакота выскальзывает. Дольше 10 секунд — начнёт таять.'),
      drawing: 'unmould',
    },
  ],
  mistake: {
    title: l('Duplo više želatina "da se sigurno stegne".', 'Double the gelatine "to be sure it sets".', 'Вдвое больше желатина, «чтобы точно застыла».'),
    fix: l(
      'Panakota postane gumena i ima ukus želea, a ne pavlake. Prava panakota jedva stoji. Ako hoćeš sigurnost, služi je u čaši sa 5 g želatina, bez izručivanja.',
      'The panna cotta turns rubbery and tastes of jelly, not cream. A real one barely stands. If you want safety, serve it in a glass with 5 g gelatine, without turning it out.',
      'Панакота становится резиновой и отдаёт желе, а не сливками. Настоящая едва держится. Хочешь надёжности — подавай в стакане с 5 г желатина, не переворачивая.',
    ),
  },
  think: {
    question: l('Imaš želatin u prahu umesto listića. Šta menjaš?', 'You have powdered gelatine instead of leaves. What changes?', 'У тебя порошковый желатин вместо листового. Что меняешь?'),
    options: [
      l('Istu težinu potopiš u 5 puta više hladne vode', 'Bloom the same weight in five times as much cold water', 'Тот же вес замачиваешь в 5 раз большем количестве холодной воды'),
      l('Sipaš prah direktno u vrelu pavlaku', 'Tip the powder straight into the hot cream', 'Сыплешь порошок прямо в горячие сливки'),
      l('Treba ti duplo više praha', 'You need twice as much powder', 'Порошка нужно вдвое больше'),
    ],
    answer: 0,
    explain: l(
      'Snaga je ista po gramu. Prah mora prvo da nabubri u hladnoj vodi, inače napravi grudvice koje se ne otope.',
      'The strength per gram is the same. Powder must first bloom in cold water, or it forms lumps that never dissolve.',
      'Сила на грамм одинаковая. Порошок сначала должен набухнуть в холодной воде, иначе образует нерастворимые комочки.',
    ),
  },
  recipe: { name: l('Panakota od vanile', 'Vanilla panna cotta', 'Ванильная панакота'), protein: 3, carbs: 14, fat: 25, kcal: 295 },
}

const mousse: Lesson = {
  id: '2.7.4',
  title: l('Čokoladni mus', 'Chocolate mousse', 'Шоколадный мусс'),
  goal: l(
    'Napraviš vazdušast čokoladni mus bez sirovih jaja, koji se ne spusti.',
    'You make an airy chocolate mousse with no raw eggs that does not collapse.',
    'Ты готовишь воздушный шоколадный мусс без сырых яиц, который не оседает.',
  ),
  minutes: 6,
  key: { value: l('35°C', '35°C', '35°C'), label: l('ganaš pre mešanja', 'ganache before folding', 'ганаш перед смешиванием') },
  need: [
    { item: l('Tamna čokolada 60–70%', 'Dark chocolate 60–70%', 'Тёмный шоколад 60–70%'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Slatka pavlaka, vrela', 'Cream, hot', 'Сливки, горячие'), qty: l('100 ml', '100 ml', '100 мл') },
    { item: l('Slatka pavlaka, hladna', 'Cream, cold', 'Сливки, холодные'), qty: l('300 ml', '300 ml', '300 мл') },
    { item: l('Prstohvat soli', 'A pinch of salt', 'Щепотка соли'), qty: l('—', '—', '—') },
  ],
  why: l(
    'Klasičan mus traži sirova jaja, a to ne radimo. Ovaj se pravi od ganaša i umućene pavlake: isti vazduh, bez rizika.',
    'Classic mousse calls for raw eggs, and we do not use them. This one is made from ganache and whipped cream: the same air, no risk.',
    'Классический мусс требует сырых яиц, а мы их не используем. Этот делают из ганаша и взбитых сливок: тот же воздух, без риска.',
  ),
  steps: [
    {
      text: l('Prelij sitno iseckanu čokoladu vrelom pavlakom i ostavi minut.', 'Pour the hot cream over finely chopped chocolate and leave it a minute.', 'Залей мелко порубленный шоколад горячими сливками и оставь на минуту.'),
      params: [l('200 g + 100 ml', '200 g + 100 ml', '200 г + 100 мл'), l('1 min', '1 min', '1 мин')],
      done: l('Čokolada se topi odozdo.', 'The chocolate is melting from below.', 'Шоколад тает снизу.'),
    },
    {
      text: l('Mešaj od sredine ka ivici dok ganaš ne postane sjajan.', 'Stir from the centre outwards until the ganache turns glossy.', 'Мешай от центра к краю, пока ганаш не станет блестящим.'),
      done: l('Ganaš je gladak i sjajan kao ogledalo.', 'The ganache is smooth and shines like a mirror.', 'Ганаш гладкий и блестит, как зеркало.'),
      why: l('Ganaš je emulzija, kao majonez (3.2). Mešanje od sredine je spaja postepeno.', 'Ganache is an emulsion, like mayonnaise (3.2). Stirring from the centre brings it together gradually.', 'Ганаш — эмульсия, как майонез (3.2). Мешание от центра соединяет её постепенно.'),
    },
    {
      text: l('Ohladi ganaš do mlakog.', 'Cool the ganache until just warm.', 'Охлади ганаш до тёплого.'),
      params: [l('35°C', '35°C', '35°C')],
      done: l('Ganaš je mlak na usni i i dalje tečan.', 'The ganache feels lukewarm on your lip and is still fluid.', 'Ганаш тёплый на губе и всё ещё жидкий.'),
      why: l('Topliji otopi umućenu pavlaku. Hladniji se stegne u grudvice kad dodaš pavlaku.', 'Warmer, it melts the whipped cream. Colder, it seizes into lumps when the cream goes in.', 'Теплее — растопит взбитые сливки. Холоднее — схватится комочками при добавлении сливок.'),
    },
    {
      text: l('Umuti hladnu pavlaku do mekih vrhova.', 'Whip the cold cream to soft peaks.', 'Взбей холодные сливки до мягких пиков.'),
      params: [l('meki vrhovi', 'soft peaks', 'мягкие пики')],
      done: l('Pavlaka drži vrh koji se savije na kraju.', 'The cream holds a peak that bends over at the tip.', 'Сливки держат пик, который загибается на кончике.'),
      why: l('Pretučena pavlaka je zrnasta i daje tvrd mus. Meki vrhovi se lakše umešaju.', 'Overwhipped cream is grainy and makes a stiff mousse. Soft peaks fold in more easily.', 'Перебитые сливки зернистые и дают плотный мусс. Мягкие пики легче вмешиваются.'),
    },
    {
      text: l('Umešaj pavlaku u ganaš u tri dela, lopatom odozdo nagore.', 'Fold the cream into the ganache in three parts, with a spatula from bottom to top.', 'Вмешай сливки в ганаш в три приёма лопаткой снизу вверх.'),
      params: [l('3 dela', '3 parts', '3 приёма'), l('2 h u frižideru', '2 h in the fridge', '2 ч в холодильнике')],
      done: l('Mus je jednolično braon, bez belih traka, i i dalje pun vazduha.', 'The mousse is evenly brown, with no white streaks, and still full of air.', 'Мусс равномерно коричневый, без белых полос и всё ещё воздушный.'),
      why: l('Prvi deo razredi ganaš, ostala dva ulaze nežno. Mešanje u krug istera vazduh.', 'The first part loosens the ganache; the other two go in gently. Stirring round and round knocks out the air.', 'Первая часть разбавляет ганаш, остальные две входят мягко. Круговое мешание выгоняет воздух.'),
      drawing: 'foldMousse',
    },
  ],
  mistake: {
    title: l('Pavlaka umešana u vreo ganaš.', 'Cream folded into hot ganache.', 'Сливки вмешаны в горячий ганаш.'),
    fix: l(
      'Vreo ganaš otopi mehuriće pavlake i mus postane tečna čokoladna krema. Sačekaj 35°C. Ako je ganaš preladio i stegnuo se, zagrej ga par sekundi nad parom.',
      'Hot ganache melts the cream\'s bubbles and the mousse turns into runny chocolate cream. Wait for 35°C. If the ganache has cooled and set, warm it a few seconds over steam.',
      'Горячий ганаш растапливает пузырьки сливок, и мусс превращается в жидкий шоколадный крем. Дождись 35°C. Если ганаш остыл и схватился, подогрей несколько секунд над паром.',
    ),
  },
  think: {
    question: l('Zašto ovde nema sirovih jaja, kao u klasičnom musu?', 'Why are there no raw eggs here, as in the classic mousse?', 'Почему здесь нет сырых яиц, как в классическом муссе?'),
    options: [
      l('Sirova jaja nose rizik od salmonele, a umućena pavlaka daje isti vazduh', 'Raw eggs carry a salmonella risk, and whipped cream gives the same air', 'Сырые яйца несут риск сальмонеллы, а взбитые сливки дают тот же воздух'),
      l('Jaja menjaju boju čokolade', 'Eggs change the colour of the chocolate', 'Яйца меняют цвет шоколада'),
      l('Sa jajima mus je preslatak', 'With eggs the mousse is too sweet', 'С яйцами мусс слишком сладкий'),
    ],
    answer: 0,
    explain: l(
      'Desert za goste se pravi tako da je bezbedan za svakoga, i za trudnice i za decu. Pavlaka nosi vazduh, a ganaš strukturu.',
      'A dessert for guests is made safe for everyone, including pregnant guests and children. The cream carries the air and the ganache the structure.',
      'Десерт для гостей делают безопасным для всех, включая беременных и детей. Сливки несут воздух, а ганаш — структуру.',
    ),
  },
  recipe: { name: l('Čokoladni mus', 'Chocolate mousse', 'Шоколадный мусс'), protein: 4, carbs: 17, fat: 37, kcal: 415 },
}

const caramel: Lesson = {
  id: '2.7.5',
  title: l('Karamel', 'Caramel', 'Карамель'),
  goal: l(
    'Skuvaš karamel do boje ćilibara i napraviš od njega slani karamel sos.',
    'You cook sugar to amber caramel and turn it into a salted caramel sauce.',
    'Ты варишь карамель до янтарного цвета и делаешь из неё солёный карамельный соус.',
  ),
  minutes: 6,
  key: { value: l('175°C', '175°C', '175°C'), label: l('ćilibar', 'amber', 'янтарь') },
  need: [
    { item: l('Šećer', 'Sugar', 'Сахар'), qty: l('200 g', '200 g', '200 г') },
    { item: l('Voda', 'Water', 'Вода'), qty: l('60 ml', '60 ml', '60 мл') },
    { item: l('Slatka pavlaka, topla', 'Cream, warm', 'Сливки, тёплые'), qty: l('150 ml', '150 ml', '150 мл') },
    { item: l('Puter, so', 'Butter, salt', 'Сливочное масло, соль'), qty: l('30 g + 2 g', '30 g + 2 g', '30 г + 2 г') },
    { item: l('Šerpa svetlog dna, mokra četkica', 'Light-bottomed pan, wet pastry brush', 'Кастрюля со светлым дном, мокрая кисточка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Karamel je šećer koji se menja na svakih deset stepeni: od slatkog do gorkog. Ovo je najvrelija stvar u kuhinji, 175°C, i lepi se za kožu.',
    'Caramel is sugar that changes every ten degrees: from sweet to bitter. It is the hottest thing in the kitchen, 175°C, and it sticks to skin.',
    'Карамель — сахар, который меняется каждые десять градусов: от сладкого до горького. Это самое горячее на кухне, 175°C, и она липнет к коже.',
  ),
  steps: [
    {
      text: l('Stavi šećer i vodu u šerpu i zagrej bez mešanja.', 'Put the sugar and water in the pan and heat without stirring.', 'Положи сахар и воду в кастрюлю и нагревай, не мешая.'),
      params: [l('srednja vatra', 'medium heat', 'средний огонь')],
      done: l('Šećer se otopio i sirup ključa bistar.', 'The sugar has dissolved and the syrup boils clear.', 'Сахар растворился, сироп кипит прозрачным.'),
      why: l('Mešanje pravi kristale i karamel se pretvori u šećerni pesak. Ako moraš, zavrti šerpu.', 'Stirring seeds crystals and the caramel turns to sugar sand. If you must, swirl the pan.', 'Помешивание образует кристаллы, и карамель превращается в сахарный песок. Если нужно, покачай кастрюлю.'),
    },
    {
      text: l('Mokrom četkicom spiraj kristale sa zidova šerpe.', 'Wash crystals off the sides with a wet brush.', 'Смывай кристаллы со стенок мокрой кисточкой.'),
      done: l('Zidovi šerpe su čisti, bez belih zrnaca.', 'The sides of the pan are clean, with no white grains.', 'Стенки кастрюли чистые, без белых крупинок.'),
      why: l('Jedan kristal koji padne u sirup može da kristališe ceo karamel.', 'One crystal falling into the syrup can crystallise the whole caramel.', 'Один кристалл, упавший в сироп, может закристаллизовать всю карамель.'),
    },
    {
      text: l('Kuvaj dok sirup ne dobije boju ćilibara.', 'Cook until the syrup turns amber.', 'Вари, пока сироп не станет янтарным.'),
      params: [l('170–180°C', '170–180°C', '170–180°C'), l('8–12 min', '8–12 min', '8–12 мин')],
      done: l('Karamel je boje meda do ćilibara i miriše na lešnik.', 'The caramel is honey to amber in colour and smells of hazelnuts.', 'Карамель цвета мёда или янтаря и пахнет фундуком.'),
      why: l('Svetlo dno šerpe pokazuje pravu boju. Od ćilibara do gorkog crnog prođe 30 sekundi.', 'A light-coloured pan shows the true colour. From amber to bitter black takes 30 seconds.', 'Светлое дно кастрюли показывает истинный цвет. От янтаря до горького чёрного — 30 секунд.'),
      drawing: 'caramelColor',
    },
    {
      text: l('Skloni sa vatre i polako dodaj toplu pavlaku, mešajući.', 'Take off the heat and slowly add the warm cream, stirring.', 'Сними с огня и медленно влей тёплые сливки, помешивая.'),
      params: [l('ruka u rukavici', 'gloved hand', 'рука в перчатке'), l('lice dalje od šerpe', 'face away from the pan', 'лицо подальше от кастрюли')],
      done: l('Karamel je prestao da ključa i postao gladak sos.', 'The caramel has stopped bubbling and turned into a smooth sauce.', 'Карамель перестала бурлить и стала гладким соусом.'),
      why: l('Pavlaka u karamel ključa naglo i diže vrelu paru. Topla pavlaka ključa manje od hladne.', 'Cream hitting caramel boils violently and throws up scalding steam. Warm cream boils up less than cold.', 'Сливки в карамели бурно вскипают и выбрасывают обжигающий пар. Тёплые сливки бурлят меньше холодных.'),
    },
    {
      text: l('Umešaj puter i so i ostavi da se prohladi.', 'Stir in the butter and salt and let it cool.', 'Вмешай масло и соль и дай остыть.'),
      params: [l('30 g + 2 g', '30 g + 2 g', '30 г + 2 г')],
      done: l('Sos je sjajan i gust kad se ohladi, kao med.', 'The sauce is glossy and, once cool, as thick as honey.', 'Соус блестящий и, остыв, густой, как мёд.'),
      why: l('So otvara ukus karamela, kao u 5.1. Sos drži dve nedelje u frižideru.', 'Salt opens up the caramel flavour, as in 5.1. The sauce keeps two weeks in the fridge.', 'Соль раскрывает вкус карамели, как в 5.1. Соус хранится две недели в холодильнике.'),
    },
  ],
  mistake: {
    title: l('Proba karamela prstom ili kašikom iz šerpe.', 'Tasting caramel with a finger or a spoon straight from the pan.', 'Пробовать карамель пальцем или ложкой прямо из кастрюли.'),
    fix: l(
      'Karamel je 175°C i lepi se za kožu: to je opekotina trećeg stepena. Probaj tek gotov sos, ohlađen na kašici. Činija hladne vode stoji pored šporeta za svaki slučaj.',
      'Caramel is 175°C and sticks to skin: that is a third-degree burn. Taste only the finished sauce, cooled on a spoon. Keep a bowl of cold water by the stove just in case.',
      'Карамель — 175°C и липнет к коже: это ожог третьей степени. Пробуй только готовый соус, остуженный на ложке. Миска холодной воды стоит у плиты на всякий случай.',
    ),
  },
  think: {
    question: l('Karamel se pretvorio u beli šećerni pesak. Šta se desilo?', 'The caramel turned into white sugar sand. What happened?', 'Карамель превратилась в белый сахарный песок. Что произошло?'),
    options: [
      l('Kristalizacija: mešanje ili kristal sa zida', 'Crystallisation: stirring or a crystal from the side', 'Кристаллизация: помешивание или кристалл со стенки'),
      l('Premalo šećera', 'Too little sugar', 'Мало сахара'),
      l('Vatra je bila prejaka', 'The heat was too high', 'Огонь был слишком сильным'),
    ],
    answer: 0,
    explain: l(
      'Šećer želi da se vrati u kristal. Dodaj malo vode, otopi ga ponovo i kuvaj bez mešanja. Kašika limunovog soka ili glukoze sprečava da se ponovi.',
      'Sugar wants to go back to crystal. Add a little water, dissolve it again and cook without stirring. A spoon of lemon juice or glucose stops it happening again.',
      'Сахар стремится вернуться в кристалл. Добавь немного воды, снова раствори и вари без помешивания. Ложка лимонного сока или глюкозы не даст этому повториться.',
    ),
  },
}

const fruitTart: Lesson = {
  id: '2.7.6',
  title: l('Voćni tart', 'Fruit tart', 'Фруктовый тарт'),
  goal: l(
    'Složiš voćni tart od prhke korpe, kreme i voća, sa sjajnim premazom, koji se seče čisto.',
    'You assemble a fruit tart from a shortcrust case, pastry cream and fruit, with a glossy glaze, that cuts cleanly.',
    'Ты собираешь фруктовый тарт из песочной корзинки, крема и фруктов с блестящей глазурью, который режется чисто.',
  ),
  minutes: 6,
  key: { value: l('3', '3', '3'), label: l('sloja', 'layers', 'слоя') },
  need: [
    { item: l('Pečena korpa od prhkog testa (2.5.3)', 'Baked shortcrust case (2.5.3)', 'Выпеченная песочная корзинка (2.5.3)'), qty: l('24 cm', '24 cm', '24 см') },
    { item: l('Krem za kolače, hladan (2.7.1)', 'Pastry cream, cold (2.7.1)', 'Заварной крем, холодный (2.7.1)'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Sveže voće, sezonsko', 'Fresh seasonal fruit', 'Свежие сезонные фрукты'), qty: l('400 g', '400 g', '400 г') },
    { item: l('Džem od kajsije i kašika vode', 'Apricot jam and a spoon of water', 'Абрикосовый джем и ложка воды'), qty: l('3 kašike', '3 tbsp', '3 ст. л.') },
    { item: l('Četkica, oštar nož', 'Pastry brush, sharp knife', 'Кисточка, острый нож'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Tart je završni ispit modula: prhko testo, krem i oko za raspored. Svaka komponenta se pravi unapred, a slaže se par sati pre serviranja.',
    'The tart is the module\'s final test: shortcrust, cream and an eye for arrangement. Every part is made ahead and assembled a few hours before serving.',
    'Тарт — итоговое испытание модуля: песочное тесто, крем и глаз для раскладки. Каждую часть готовят заранее, а собирают за несколько часов до подачи.',
  ),
  steps: [
    {
      text: l('Premaži unutrašnjost korpe tankim slojem otopljene čokolade.', 'Brush the inside of the case with a thin layer of melted chocolate.', 'Смажь внутреннюю сторону корзинки тонким слоем растопленного шоколада.'),
      params: [l('30 g bele ili tamne', '30 g white or dark', '30 г белого или тёмного')],
      done: l('Dno korpe je pokriveno tankom, stegnutom čokoladom.', 'The base of the case is covered with a thin, set layer of chocolate.', 'Дно корзинки покрыто тонким застывшим слоем шоколада.'),
      why: l('Čokolada je zid između vlažnog krema i hrskavog testa. Bez nje dno za sat vremena razmekša.', 'The chocolate is a wall between moist cream and crisp pastry. Without it the base goes soggy within an hour.', 'Шоколад — стенка между влажным кремом и хрустящим тестом. Без неё дно размокнет за час.'),
    },
    {
      text: l('Umuti hladan krem dok ne postane gladak, pa ga rasporedi u korpu.', 'Whisk the cold cream until smooth, then spread it in the case.', 'Взбей холодный крем до гладкости и распредели в корзинке.'),
      params: [l('sloj 1.5 cm', '1.5 cm layer', 'слой 1,5 см')],
      done: l('Krem je ravan i stiže do ivice korpe.', 'The cream is level and reaches the rim of the case.', 'Крем ровный и доходит до края корзинки.'),
    },
    {
      text: l('Složi voće u koncentrične krugove, od ivice ka sredini.', 'Arrange the fruit in concentric circles, from the edge to the centre.', 'Выложи фрукты концентрическими кругами от края к центру.'),
      done: l('Krem se ne vidi, a voće je u urednim redovima.', 'No cream shows and the fruit sits in neat rows.', 'Крема не видно, фрукты лежат аккуратными рядами.'),
      why: l('Voće mora da bude suvo. Mokre jagode puste sok u krem i tart postane vodenast.', 'The fruit must be dry. Wet strawberries bleed juice into the cream and the tart turns watery.', 'Фрукты должны быть сухими. Мокрая клубника пустит сок в крем, и тарт станет водянистым.'),
      drawing: 'tartFruit',
    },
    {
      text: l('Zagrej džem sa vodom, procedi i premaži voće.', 'Warm the jam with the water, strain it and brush over the fruit.', 'Подогрей джем с водой, процеди и смажь фрукты.'),
      params: [l('tanak sloj', 'a thin coat', 'тонкий слой')],
      done: l('Voće sija i ne suši se na vazduhu.', 'The fruit shines and does not dry out in the air.', 'Фрукты блестят и не заветриваются.'),
      why: l('Premaz čuva voće od sušenja i tamnjenja, i daje izgled iz izloga poslastičarnice.', 'The glaze keeps the fruit from drying and browning and gives it a patisserie-window look.', 'Глазурь защищает фрукты от высыхания и потемнения и придаёт вид витрины кондитерской.'),
    },
    {
      text: l('Ohladi tart i seci nožem umočenim u vrelu vodu.', 'Chill the tart and cut it with a knife dipped in hot water.', 'Охлади тарт и режь ножом, смоченным в горячей воде.'),
      params: [l('1 h u frižideru', '1 h in the fridge', '1 ч в холодильнике'), l('obriši nož posle svakog reza', 'wipe the knife after every cut', 'вытирай нож после каждого разреза')],
      done: l('Svako parče ima čiste slojeve: testo, krem, voće.', 'Every slice shows clean layers: pastry, cream, fruit.', 'У каждого куска чистые слои: тесто, крем, фрукты.'),
      why: l('Topao, čist nož prolazi kroz krem bez povlačenja. Tart se jede isti dan.', 'A warm, clean knife goes through the cream without dragging. The tart is eaten the same day.', 'Тёплый чистый нож проходит сквозь крем, не таща его. Тарт съедают в тот же день.'),
    },
  ],
  mistake: {
    title: l('Tart složen dan ranije.', 'A tart assembled the day before.', 'Тарт собран накануне.'),
    fix: l(
      'Krem omekša testo, a voće pusti sok. Sutradan imaš mokar kolač. Korpa, krem i premaz se prave dan ranije, a slažu najviše 4 sata pre serviranja.',
      'The cream softens the pastry and the fruit weeps. The next day you have a soggy cake. Case, cream and glaze are made the day before and assembled no more than 4 hours before serving.',
      'Крем размягчает тесто, а фрукты пускают сок. Назавтра будет мокрый пирог. Корзинку, крем и глазурь готовят накануне, а собирают не раньше чем за 4 часа до подачи.',
    ),
  },
  think: {
    question: l('Za meni u 20h, kad slažeš tart?', 'For a menu at 8 pm, when do you assemble the tart?', 'Для меню в 20:00 когда собираешь тарт?'),
    options: [
      l('Oko 17h, a delove dan ranije', 'Around 5 pm, with the parts made the day before', 'Около 17:00, а части — накануне'),
      l('Dan ranije, ceo', 'The day before, all of it', 'Накануне, целиком'),
      l('Posle glavnog jela, u 21h', 'After the main course, at 9 pm', 'После основного блюда, в 21:00'),
    ],
    answer: 0,
    explain: l(
      'Radni plan iz 2.1.2: komponente dan ranije, slaganje par sati pre, a tart čeka u frižideru. Posle glavnog jela samo sečeš i serviraš.',
      'The work plan from 2.1.2: components the day before, assembly a few hours ahead, and the tart waits in the fridge. After the main you only slice and serve.',
      'Рабочий план из 2.1.2: компоненты накануне, сборка за несколько часов, тарт ждёт в холодильнике. После основного блюда только режешь и подаёшь.',
    ),
  },
  recipe: { name: l('Voćni tart', 'Fruit tart', 'Фруктовый тарт'), protein: 4, carbs: 34, fat: 11, kcal: 250 },
}

export const dessertLessons: Lesson[] = [pastryCream, anglaise, pannaCotta, mousse, caramel, fruitTart]
