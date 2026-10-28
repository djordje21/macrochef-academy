import { l, type Lesson } from '../types'

// Grade 3 · Module 3 · Fine dining techniques. The small things that separate a restaurant plate from a good
// home plate: a purée with no grain, a gel that holds its shape warm, a foam, a crisp, and a quenelle.

const puree: Lesson = {
  id: '3.3.1',
  title: l('Svilen pire kroz sito', 'Silky purée through a sieve', 'Шелковистое пюре через сито'),
  goal: l(
    'Napraviš pire od karfiola bez ijedne grudvice, koji stoji na tanjiru i ne pušta vodu.',
    'You make a cauliflower purée without a single grain, which holds on the plate and does not weep.',
    'Ты готовишь пюре из цветной капусты без единого комочка, которое держится на тарелке и не отдаёт воду.',
  ),
  minutes: 7,
  key: { value: l('3 min', '3 min', '3 мин'), label: l('u blenderu, vrelo', 'in the blender, hot', 'в блендере, горячим') },
  need: [
    { item: l('Karfiol', 'Cauliflower', 'Цветная капуста'), qty: l('500 g', '500 g', '500 г') },
    { item: l('Mleko i voda, pola-pola', 'Milk and water, half and half', 'Молоко и вода пополам'), qty: l('500 ml', '500 ml', '500 мл') },
    { item: l('Puter', 'Butter', 'Сливочное масло'), qty: l('50 g', '50 g', '50 г') },
    { item: l('Blender i fino sito', 'Blender and fine sieve', 'Блендер и мелкое сито'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Pire na tanjiru u restoranu je podloga, sos i ukus u jednom. Mora biti glatko kao krema, inače izgleda kao bebi hrana.',
    'A purée on a restaurant plate is base, sauce and flavour in one. It must be as smooth as cream, or it looks like baby food.',
    'Пюре на ресторанной тарелке — это подложка, соус и вкус в одном. Оно должно быть гладким, как крем, иначе похоже на детское питание.',
  ),
  steps: [
    {
      text: l('Iseci karfiol na jednake komade i kuvaj u mleku i vodi dok ne omekša potpuno.', 'Cut the cauliflower into even pieces and cook in milk and water until completely soft.', 'Нарежь капусту равными кусками и вари в молоке с водой до полной мягкости.'),
      params: [l('15–20 min', '15–20 min', '15–20 мин')],
      done: l('Nož prolazi kroz najdeblji komad bez otpora.', 'A knife goes through the thickest piece with no resistance.', 'Нож проходит через самый толстый кусок без сопротивления.'),
      why: l('Polukuvani komadi ostave zrnca koja ni sito ne spasava.', 'Half-cooked pieces leave grains that even a sieve cannot save.', 'Недоваренные куски оставляют комочки, которые не спасёт даже сито.'),
    },
    {
      text: l('Ocedi karfiol, a tečnost sačuvaj.', 'Drain the cauliflower and keep the liquid.', 'Слей капусту, жидкость сохрани.'),
      done: l('Karfiol je u blenderu, a tečnost u šoljici pored.', 'The cauliflower is in the blender and the liquid in a cup beside it.', 'Капуста в блендере, жидкость в чашке рядом.'),
      why: l('Tečnost dodaješ malo po malo. Ako sve ostane u blenderu, pire bude supa.', 'You add the liquid little by little. Leave it all in and the purée becomes soup.', 'Жидкость добавляешь понемногу. Оставишь всю — пюре станет супом.'),
    },
    {
      text: l('Blenduj vrelo sa puterom na najjačoj brzini, dodajući tečnost kašiku po kašiku.', 'Blend hot with the butter at top speed, adding the liquid a spoonful at a time.', 'Взбей горячим с маслом на максимальной скорости, добавляя жидкость по ложке.'),
      params: [l('3 min', '3 min', '3 мин'), l('50 g putera', '50 g butter', '50 г масла')],
      done: l('Pire se vrti u blenderu kao gusta krema.', 'The purée turns in the blender like a thick cream.', 'Пюре вращается в блендере, как густой крем.'),
      why: l('Vreo pire se blenduje glađe od hladnog. Tri minuta je duže nego što misliš, ali tek tad nestanu vlakna.', 'A hot purée blends smoother than a cold one. Three minutes is longer than you think, but only then do the fibres disappear.', 'Горячее пюре взбивается глаже холодного. Три минуты — дольше, чем кажется, но только тогда исчезают волокна.'),
    },
    {
      text: l('Protisni pire kroz fino sito, kašikom ili lopaticom.', 'Push the purée through a fine sieve with a spoon or spatula.', 'Протри пюре через мелкое сито ложкой или лопаткой.'),
      done: l('Na situ ostaju samo vlakna, a ispod je svilena masa.', 'Only fibres stay in the sieve, and a silky mass comes through below.', 'В сите остаются только волокна, а внизу шелковистая масса.'),
      why: l('Blender ne hvata svako vlakno. Sito hvata. Ovo je razlika između dobrog i savršenog pirea.', 'A blender misses some fibres. A sieve does not. This is the difference between a good purée and a perfect one.', 'Блендер пропускает некоторые волокна. Сито — нет. В этом разница между хорошим пюре и идеальным.'),
    },
    {
      text: l('Začini, pa stavi kašiku pirea na tanjir.', 'Season, then put a spoonful of purée on a plate.', 'Посоли и положи ложку пюре на тарелку.'),
      done: l('Pire drži oblik, a oko njega nema vode.', 'The purée holds its shape and there is no water around it.', 'Пюре держит форму, вокруг нет воды.'),
      why: l('Ako pusti vodu, previše je redak. Vrati ga na tihu vatru da ispari višak.', 'If it weeps, it is too thin. Put it back on a low heat to cook off the excess.', 'Если отдаёт воду — слишком жидкое. Верни на слабый огонь, чтобы выпарить лишнее.'),
    },
  ],
  mistake: {
    title: l('Pire od krompira u blenderu.', 'Potato purée in the blender.', 'Картофельное пюре в блендере.'),
    fix: l(
      'Blender kida skrob u krompiru i pire postane lepak. Ovaj postupak je za povrće sa malo skroba: karfiol, celer, šargarepa, grašak. Krompir samo kroz sito ili presu (10.3).',
      'A blender tears the starch in potatoes and the purée turns to glue. This method is for low-starch vegetables: cauliflower, celeriac, carrot, peas. Potatoes go only through a sieve or ricer (10.3).',
      'Блендер разрывает крахмал картофеля, и пюре становится клейстером. Этот способ для овощей с малым количеством крахмала: цветная капуста, сельдерей, морковь, горошек. Картофель — только через сито или пресс (10.3).',
    ),
  },
  think: {
    question: l('Zašto pire ide kroz sito i posle blendera?', 'Why does the purée go through a sieve even after the blender?', 'Зачем протирать пюре через сито даже после блендера?'),
    options: [
      l('Sito zadrži vlakna koja blender propusti', 'The sieve catches fibres the blender misses', 'Сито задерживает волокна, которые пропускает блендер'),
      l('Da se brže ohladi', 'So it cools faster', 'Чтобы быстрее остыло'),
      l('Da bude gušći', 'To make it thicker', 'Чтобы было гуще'),
    ],
    answer: 0,
    explain: l(
      'I najjači blender ostavi sitna vlakna koja jezik oseti. Sito je poslednja kontrola: šta ne prođe, ne ide na tanjir.',
      'Even the strongest blender leaves tiny fibres the tongue can feel. The sieve is the final check: what does not pass does not go on the plate.',
      'Даже самый мощный блендер оставляет мелкие волокна, которые чувствует язык. Сито — последний контроль: что не прошло, не идёт на тарелку.',
    ),
  },
}

const agar: Lesson = {
  id: '3.3.2',
  title: l('Agar gel i fluid gel', 'Agar gel and fluid gel', 'Гель из агара и флюид-гель'),
  goal: l(
    'Stegneš sok agarom u gel koji se seče, pa ga izblenduješ u fluid gel koji drži tačke na tanjiru.',
    'You set a juice with agar into a gel you can slice, then blend it into a fluid gel that holds dots on a plate.',
    'Ты загущаешь сок агаром в режущийся гель, а затем взбиваешь его во флюид-гель, который держит точки на тарелке.',
  ),
  minutes: 6,
  key: { value: l('1%', '1%', '1%'), label: l('agara na tečnost', 'agar to liquid', 'агара к жидкости') },
  need: [
    { item: l('Sok od cvekle ili pomorandže', 'Beetroot or orange juice', 'Свекольный или апельсиновый сок'), qty: l('300 ml', '300 ml', '300 мл') },
    { item: l('Agar u prahu', 'Agar powder', 'Агар-агар в порошке'), qty: l('3 g', '3 g', '3 г') },
    { item: l('Vaga sa 0,1 g, blender, flašica', 'Scale reading 0.1 g, blender, squeeze bottle', 'Весы с шагом 0,1 г, блендер, бутылочка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Agar je želatin iz algi. Steže se na sobnoj temperaturi i ne topi se ni na toplom tanjiru, pa ga koristiš tamo gde želatin ne može.',
    'Agar is gelatine from seaweed. It sets at room temperature and does not melt even on a warm plate, so you use it where gelatine cannot go.',
    'Агар — желатин из водорослей. Он застывает при комнатной температуре и не тает даже на тёплой тарелке, поэтому его используют там, где желатин не годится.',
  ),
  steps: [
    {
      text: l('Izmeri agar na vagi koja meri desetinke grama.', 'Weigh the agar on a scale that reads tenths of a gram.', 'Взвесь агар на весах с точностью до десятых грамма.'),
      params: [l('1 g na 100 ml', '1 g per 100 ml', '1 г на 100 мл'), l('3 g na 300 ml', '3 g for 300 ml', '3 г на 300 мл')],
      done: l('Vaga pokazuje tačno 3,0 g.', 'The scale reads exactly 3.0 g.', 'Весы показывают ровно 3,0 г.'),
      why: l('Pola grama razlike pravi gumu ili žele koji curi. Agar se ne meri kašičicom.', 'Half a gram either way makes rubber or a runny jelly. Agar is not measured by the teaspoon.', 'Полграмма разницы — и получится резина или текучее желе. Агар не меряют ложкой.'),
      drawing: 'scaleTare',
    },
    {
      text: l('Umuti agar u hladan sok, pa zakuvaj i kuvaj uz mešanje.', 'Whisk the agar into the cold juice, then bring to the boil and boil, stirring.', 'Вмешай агар в холодный сок, доведи до кипения и вари, помешивая.'),
      params: [l('2 min ključanja', '2 min at the boil', '2 мин кипения')],
      done: l('U soku nema zrnaca, a površina je glatka.', 'There are no grains in the juice and the surface is smooth.', 'В соке нет крупинок, поверхность гладкая.'),
      why: l('Agar se aktivira tek na ključanju. Samo zagrejan, nikad se ne stegne.', 'Agar only activates at the boil. Merely warmed, it never sets.', 'Агар активируется только при кипении. Просто подогретый — никогда не застынет.'),
    },
    {
      text: l('Za gel: sipaj u plitku posudu i ostavi da se stegne.', 'For a gel: pour into a shallow dish and leave it to set.', 'Для геля: вылей в плоскую ёмкость и дай застыть.'),
      params: [l('steže se na 35–40°C', 'sets at 35–40°C', 'застывает при 35–40°C'), l('10 min', '10 min', '10 мин')],
      done: l('Gel je čvrst i seče se nožem u kocke.', 'The gel is firm and cuts into cubes with a knife.', 'Гель плотный и режется ножом на кубики.'),
      why: l('Za razliku od želatina, agar ne treba frižider i ostaje čvrst do oko 85°C. Kocke mogu na toplo jelo.', 'Unlike gelatine, agar needs no fridge and stays firm up to about 85°C. The cubes can go on a hot dish.', 'В отличие от желатина, агару не нужен холодильник, и он остаётся твёрдым примерно до 85°C. Кубики можно класть на горячее.'),
    },
    {
      text: l('Za fluid gel: stegnut gel izblenduj do glatkog.', 'For a fluid gel: blend the set gel until smooth.', 'Для флюид-геля: взбей застывший гель до гладкости.'),
      params: [l('1–2 min', '1–2 min', '1–2 мин')],
      done: l('Masa je glatka i sjajna, gusta kao krema, a drži oblik.', 'The mixture is smooth and glossy, thick as cream, and holds its shape.', 'Масса гладкая и блестящая, густая как крем, и держит форму.'),
      why: l('Blender kida gel na mikroskopske komade. Masa teče kad je pritisneš, a stoji kad je pustiš.', 'The blender breaks the gel into microscopic pieces. It flows when pushed and stands still when left alone.', 'Блендер разбивает гель на микроскопические части. Масса течёт под нажимом и стоит, когда её отпускают.'),
    },
    {
      text: l('Prebaci u flašicu i napravi tačke na tanjiru.', 'Transfer to a squeeze bottle and make dots on the plate.', 'Переложи в бутылочку и сделай точки на тарелке.'),
      done: l('Tačke stoje okrugle i ne razlivaju se ni posle 10 minuta.', 'The dots stay round and do not spread even after 10 minutes.', 'Точки остаются круглыми и не расплываются даже через 10 минут.'),
      why: l('Obična redukcija bi se razlila. Fluid gel drži oblik i boju ceo servis.', 'An ordinary reduction would spread. A fluid gel keeps its shape and colour through the whole service.', 'Обычная уварка расплылась бы. Флюид-гель держит форму и цвет весь сервис.'),
      drawing: 'sauceDots',
    },
  ],
  mistake: {
    title: l('Agar samo zagrejan, ne prokuvan.', 'Agar warmed but not boiled.', 'Агар подогрет, но не прокипячён.'),
    fix: l(
      'Agar se ne aktivira i gel se nikad ne stegne. Uvek: umuti u hladnu tečnost, zakuvaj i drži dva minuta na ključanju.',
      'The agar does not activate and the gel never sets. Always whisk it into cold liquid, bring to the boil and keep it boiling for two minutes.',
      'Агар не активируется, и гель не застывает. Всегда: вмешай в холодную жидкость, доведи до кипения и держи кипение две минуты.',
    ),
  },
  think: {
    question: l('Šta agar može, a želatin ne?', 'What can agar do that gelatine cannot?', 'Что может агар, чего не может желатин?'),
    options: [
      l('Ostaje čvrst i na toplom jelu', 'It stays firm on a warm dish', 'Остаётся твёрдым на тёплом блюде'),
      l('Topi se u ustima', 'It melts in the mouth', 'Тает во рту'),
      l('Steže se samo u frižideru', 'It sets only in the fridge', 'Застывает только в холодильнике'),
    ],
    answer: 0,
    explain: l(
      'Želatin se topi oko 35°C, pa se topi i u ustima, što je dobro za panakotu (2.7.3). Agar drži oblik do oko 85°C, pa ide i na toplo.',
      'Gelatine melts around 35°C, so it melts in the mouth, which is good for panna cotta (2.7.3). Agar holds its shape up to about 85°C, so it works on warm food too.',
      'Желатин тает около 35°C, поэтому тает и во рту — это хорошо для панакоты (2.7.3). Агар держит форму примерно до 85°C, поэтому подходит и к тёплому.',
    ),
  },
}

const foam: Lesson = {
  id: '3.3.3',
  title: l('Pena od lecitina', 'Lecithin foam', 'Пена на лецитине'),
  goal: l(
    'Napraviš laganu penu od tečnosti sa jakim ukusom, koja stoji na tanjiru dok gost ne počne da jede.',
    'You make a light foam from a strongly flavoured liquid that stands on the plate until the guest starts eating.',
    'Ты делаешь лёгкую пену из жидкости с ярким вкусом, которая стоит на тарелке, пока гость не начнёт есть.',
  ),
  minutes: 5,
  key: { value: l('0,5–1%', '0.5–1%', '0,5–1%'), label: l('lecitina', 'lecithin', 'лецитина') },
  need: [
    { item: l('Tečnost jakog ukusa: paradajz voda, limeta, đumbir', 'A strongly flavoured liquid: tomato water, lime, ginger', 'Жидкость с ярким вкусом: томатная вода, лайм, имбирь'), qty: l('300 ml', '300 ml', '300 мл') },
    { item: l('Sojin lecitin u prahu', 'Soy lecithin powder', 'Соевый лецитин в порошке'), qty: l('2–3 g', '2–3 g', '2–3 г') },
    { item: l('Štapni mikser i široka posuda', 'Stick blender and a wide container', 'Погружной блендер и широкая ёмкость'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Pena nosi ukus bez težine. Kašika pene od limete na masnoj ribi daje kiselinu u svakom zalogaju, a tanjir ostaje lagan.',
    'A foam carries flavour without weight. A spoonful of lime foam on oily fish puts acid in every bite and keeps the plate light.',
    'Пена несёт вкус без тяжести. Ложка пены из лайма на жирной рыбе даёт кислоту в каждом куске, а тарелка остаётся лёгкой.',
  ),
  steps: [
    {
      text: l('Napravi tečnost i probaj je: ukus mora biti jači nego za sos.', 'Make the liquid and taste it: the flavour must be stronger than for a sauce.', 'Приготовь жидкость и попробуй: вкус должен быть сильнее, чем для соуса.'),
      params: [l('300 ml', '300 ml', '300 мл')],
      done: l('Tečnost je jasno slana, kisela ili ljuta već iz kašike.', 'The liquid is clearly salty, sour or hot straight from the spoon.', 'Жидкость явно солёная, кислая или острая уже с ложки.'),
      why: l('Pena je uglavnom vazduh. Blag ukus postane neprimetan.', 'A foam is mostly air. A mild flavour disappears.', 'Пена — в основном воздух. Мягкий вкус исчезнет.'),
    },
    {
      text: l('Dodaj lecitin i promešaj.', 'Add the lecithin and stir.', 'Добавь лецитин и перемешай.'),
      params: [l('0,5–1%', '0.5–1%', '0,5–1%'), l('2–3 g na 300 ml', '2–3 g per 300 ml', '2–3 г на 300 мл')],
      done: l('Lecitin se rastvorio bez grudvica.', 'The lecithin has dissolved with no lumps.', 'Лецитин растворился без комков.'),
      why: l('Lecitin oblaže mehuriće vazduha i ne da im da puknu. Više od 1% daje ukus po soji.', 'Lecithin coats the air bubbles and keeps them from bursting. More than 1% tastes of soy.', 'Лецитин обволакивает пузырьки воздуха и не даёт им лопнуть. Больше 1% даёт привкус сои.'),
    },
    {
      text: l('Nagni posudu i drži mikser tik ispod površine.', 'Tilt the container and hold the blender just below the surface.', 'Наклони ёмкость и держи блендер прямо под поверхностью.'),
      params: [l('1–2 min', '1–2 min', '1–2 мин')],
      done: l('Na površini raste debeo sloj pene.', 'A thick layer of foam builds on the surface.', 'На поверхности растёт толстый слой пены.'),
      why: l('Nož miksera mora da uvlači vazduh. Na dnu samo meša tečnost.', 'The blade has to pull air in. At the bottom it only stirs the liquid.', 'Нож блендера должен захватывать воздух. На дне он только мешает жидкость.'),
      drawing: 'foamStick',
    },
    {
      text: l('Ostavi minut da se pena smiri.', 'Leave the foam for a minute to settle.', 'Оставь пену на минуту, чтобы она успокоилась.'),
      done: l('Krupni mehurići su pukli, ostali su sitni i ujednačeni.', 'The large bubbles have burst, leaving small, even ones.', 'Крупные пузыри лопнули, остались мелкие и ровные.'),
      why: l('Krupni mehurići padnu na tanjiru za par sekundi. Sitni stoje.', 'Large bubbles collapse on the plate within seconds. Small ones hold.', 'Крупные пузыри опадают на тарелке за секунды. Мелкие держатся.'),
    },
    {
      text: l('Kašikom skini samo vrh pene i stavi je na tanjir poslednju.', 'Spoon off only the top of the foam and put it on the plate last.', 'Ложкой сними только верх пены и положи на тарелку последней.'),
      done: l('Pena stoji na jelu bar dva minuta.', 'The foam sits on the dish for at least two minutes.', 'Пена держится на блюде не меньше двух минут.'),
      why: l('Pena je poslednji pokret pre nego što tanjir ode. Svaki minut čekanja je minut manje na stolu.', 'The foam is the last move before the plate goes. Every minute of waiting is a minute less at the table.', 'Пена — последнее движение перед отправкой тарелки. Каждая минута ожидания — минута меньше на столе.'),
    },
  ],
  mistake: {
    title: l('Mikser na dnu posude.', 'The blender at the bottom of the container.', 'Блендер на дне ёмкости.'),
    fix: l(
      'Na dnu mikser samo vrti tečnost i pena ne nastaje. Nagni posudu da tečnost bude duboka uz jednu stranu, a mikser drži da mu glava jedva viri iz tečnosti.',
      'At the bottom the blender just spins the liquid and no foam forms. Tilt the container so the liquid is deep along one side, and hold the blender with its head barely below the surface.',
      'На дне блендер просто крутит жидкость, и пена не образуется. Наклони ёмкость, чтобы жидкость была глубокой у одной стенки, и держи блендер так, чтобы головка едва была под поверхностью.',
    ),
  },
  think: {
    question: l('Zašto pena ide poslednja na tanjir?', 'Why does foam go on the plate last?', 'Почему пену кладут на тарелку последней?'),
    options: [
      l('Raspada se za nekoliko minuta', 'It breaks down within minutes', 'Она распадается за несколько минут'),
      l('Hladna je', 'It is cold', 'Она холодная'),
      l('Tako se lakše nosi', 'It is easier to carry', 'Так её легче нести'),
    ],
    answer: 0,
    explain: l(
      'I stabilna pena živi minutima. Sve ostalo na tanjiru može da sačeka sekundu, pena ne može.',
      'Even a stable foam lives for minutes. Everything else on the plate can wait a second; the foam cannot.',
      'Даже стабильная пена живёт минуты. Всё остальное на тарелке может подождать секунду, пена — нет.',
    ),
  },
}

const crisps: Lesson = {
  id: '3.3.4',
  title: l('Tuile i čips od povrća', 'Tuile and vegetable crisps', 'Тюиль и овощные чипсы'),
  goal: l(
    'Ispečeš tanke tuile i hrskav čips od povrća koji daju zvuk i kontrast mekom tanjiru.',
    'You bake thin tuiles and crisp vegetable chips that add crunch and contrast to a soft plate.',
    'Ты выпекаешь тонкие тюили и хрустящие овощные чипсы, которые добавляют хруст и контраст мягкой тарелке.',
  ),
  minutes: 7,
  key: { value: l('1 : 1 : 1 : 1', '1 : 1 : 1 : 1', '1 : 1 : 1 : 1'), label: l('brašno, šećer, belanca, puter', 'flour, sugar, whites, butter', 'мука, сахар, белки, масло') },
  need: [
    { item: l('Brašno, šećer, belanca, otopljen puter', 'Flour, sugar, egg whites, melted butter', 'Мука, сахар, белки, растопленное масло'), qty: l('po 50 g', '50 g each', 'по 50 г') },
    { item: l('Cvekla ili paškanat', 'Beetroot or parsnip', 'Свёкла или пастернак'), qty: l('1', '1', '1') },
    { item: l('Silikonska podloga, mandolina, oklagija', 'Silicone mat, mandoline, rolling pin', 'Силиконовый коврик, мандолина, скалка'), qty: l('1', '1', '1') },
  ],
  why: l(
    'Fine dining tanjir je često sav mek: pire, sos, riba. Jedan hrskav element daje zvuk i čini da ceo tanjir deluje živo (2.13.3).',
    'A fine dining plate is often all soft: purée, sauce, fish. One crisp element adds sound and makes the whole plate feel alive (2.13.3).',
    'Тарелка высокой кухни часто вся мягкая: пюре, соус, рыба. Один хрустящий элемент добавляет звук и оживляет всю тарелку (2.13.3).',
  ),
  steps: [
    {
      text: l('Umuti brašno, šećer, belanca i otopljen puter u glatko testo.', 'Whisk the flour, sugar, egg whites and melted butter into a smooth batter.', 'Взбей муку, сахар, белки и растопленное масло в гладкое тесто.'),
      params: [l('po 50 g', '50 g each', 'по 50 г')],
      done: l('Testo je glatko i sjajno, bez grudvica.', 'The batter is smooth and glossy, with no lumps.', 'Тесто гладкое и блестящее, без комков.'),
      why: l('Četiri sastojka u istoj meri, lako se pamti. Odmori ga 30 minuta u frižideru i lakše se maže.', 'Four ingredients in equal weight, easy to remember. Rest it 30 minutes in the fridge and it spreads more easily.', 'Четыре ингредиента в равной мере, легко запомнить. Дай отдохнуть 30 минут в холодильнике, и оно легче намазывается.'),
    },
    {
      text: l('Razmaži testo tanko na silikonskoj podlozi.', 'Spread the batter thinly on a silicone mat.', 'Тонко намажь тесто на силиконовый коврик.'),
      params: [l('1 mm', '1 mm', '1 мм')],
      done: l('Kroz testo se skoro vidi podloga.', 'You can almost see the mat through the batter.', 'Сквозь тесто почти виден коврик.'),
      why: l('Deblji deo ostane mek u sredini dok se ivice zapeku.', 'A thicker patch stays soft in the middle while the edges burn.', 'Толстое место останется мягким в центре, пока края подгорают.'),
    },
    {
      text: l('Peci dok ivice ne porumene.', 'Bake until the edges turn golden.', 'Выпекай, пока края не зарумянятся.'),
      params: [l('170°C', '170°C', '170°C'), l('6–8 min', '6–8 min', '6–8 мин')],
      done: l('Ivice su zlatne, a sredina svetla.', 'The edges are golden and the middle is pale.', 'Края золотистые, середина светлая.'),
      why: l('Tuile ide od svetlog do zagorelog za minut. Gledaj kroz staklo rerne poslednja dva minuta.', 'A tuile goes from pale to burnt in a minute. Watch through the oven door for the last two minutes.', 'Тюиль за минуту переходит от светлого к подгоревшему. Последние две минуты смотри через стекло духовки.'),
    },
    {
      text: l('Dok je topla, prebaci tuile preko oklagije.', 'While it is warm, drape the tuile over a rolling pin.', 'Пока тёплый, положи тюиль на скалку.'),
      params: [l('10 s', '10 s', '10 с')],
      done: l('Tuile se stvrdne u luk.', 'The tuile sets into a curve.', 'Тюиль застывает дугой.'),
      why: l('Topla je savitljiva nekoliko sekundi, a ohlađena puca. Ako se stvrdne pre vremena, vrati je u rernu na 30 sekundi.', 'Warm, it bends for a few seconds; cool, it snaps. If it sets too soon, put it back in the oven for 30 seconds.', 'Тёплый гнётся несколько секунд, остывший ломается. Если застыл раньше времени, верни в духовку на 30 секунд.'),
      drawing: 'tuileCurl',
    },
    {
      text: l('Za čips: povrće iseci na mandolini i suši ga u rerni.', 'For crisps: slice the vegetable on a mandoline and dry it in the oven.', 'Для чипсов: нарежь овощ на мандолине и подсуши в духовке.'),
      params: [l('1–2 mm', '1–2 mm', '1–2 мм'), l('120°C', '120°C', '120°C'), l('30–40 min', '30–40 min', '30–40 мин')],
      done: l('Čips je hrskav kad se ohladi.', 'The crisps are crunchy once cool.', 'Чипсы хрустят, когда остынут.'),
      why: l('Niska temperatura suši bez zagorevanja. Vruć čips je još mek, hrskav postane tek na vazduhu.', 'A low temperature dries without burning. Hot crisps are still soft; they turn crunchy only in the air.', 'Низкая температура сушит без подгорания. Горячие чипсы ещё мягкие, хрустящими становятся только на воздухе.'),
    },
  ],
  mistake: {
    title: l('Tuile ostavljene na vazduhu u vlažnoj kuhinji.', 'Tuiles left out in a humid kitchen.', 'Тюили, оставленные на воздухе во влажной кухне.'),
    fix: l(
      'Šećer upija vlagu i tuile omekšaju za sat vremena. Čuvaj ih u zatvorenoj kutiji sa kesicom silika gela ili kockom šećera, i stavljaj ih na tanjir poslednje.',
      'Sugar draws moisture and tuiles soften within an hour. Keep them in an airtight box with a silica gel sachet or a sugar cube, and put them on the plate last.',
      'Сахар впитывает влагу, и тюили размягчаются за час. Храни их в закрытой коробке с пакетиком силикагеля или кусочком сахара и клади на тарелку последними.',
    ),
  },
  think: {
    question: l('Kad se tuile oblikuje?', 'When do you shape a tuile?', 'Когда придают форму тюилю?'),
    options: [
      l('Odmah, dok je topla', 'Straight away, while warm', 'Сразу, пока тёплый'),
      l('Kad se ohladi', 'Once it has cooled', 'Когда остынет'),
      l('Pre pečenja', 'Before baking', 'До выпечки'),
    ],
    answer: 0,
    explain: l(
      'Šećer u toploj tuile je mek kao karamel. Kako se hladi, stvrdne se u staklo. Imaš nekoliko sekundi.',
      'The sugar in a warm tuile is soft like caramel. As it cools, it hardens like glass. You have a few seconds.',
      'Сахар в тёплом тюиле мягкий, как карамель. Остывая, он твердеет, как стекло. У тебя несколько секунд.',
    ),
  },
}

const quenelle: Lesson = {
  id: '3.3.5',
  title: l('Quenelle jednom kašikom', 'A one-spoon quenelle', 'Кнель одной ложкой'),
  goal: l(
    'Oblikuješ glatku quenelle od sladoleda, kreme ili tartara jednom toplom kašikom.',
    'You shape a smooth quenelle of ice cream, cream or tartare with one warm spoon.',
    'Ты формируешь гладкую кнель из мороженого, крема или тартара одной тёплой ложкой.',
  ),
  minutes: 5,
  key: { value: l('3', '3', '3'), label: l('glatke strane', 'smooth sides', 'гладкие стороны') },
  need: [
    { item: l('Čvrsta, hladna masa: sladoled, krem fraiche, mus', 'A firm, cold mixture: ice cream, crème fraîche, mousse', 'Плотная холодная масса: мороженое, крем-фреш, мусс'), qty: l('300 g', '300 g', '300 г') },
    { item: l('Kašika sa dubokim, ovalnim delom', 'A spoon with a deep oval bowl', 'Ложка с глубокой овальной частью'), qty: l('1', '1', '1') },
    { item: l('Čaša vrele vode i krpa', 'A glass of hot water and a cloth', 'Стакан горячей воды и полотенце'), qty: l('1 + 1', '1 + 1', '1 + 1') },
  ],
  why: l(
    'Quenelle je potpis profesionalne kuhinje. Isti sladoled u kugli izgleda kao poslastičarnica, u quenelle kao restoran.',
    'A quenelle is the signature of a professional kitchen. The same ice cream in a scoop looks like a parlour; in a quenelle it looks like a restaurant.',
    'Кнель — подпись профессиональной кухни. То же мороженое шариком выглядит как кафе-мороженое, кнелью — как ресторан.',
  ),
  steps: [
    {
      text: l('Masu drži hladnom i čvrstom, u posudi sa ravnom površinom.', 'Keep the mixture cold and firm, in a container with a flat surface.', 'Держи массу холодной и плотной, в ёмкости с ровной поверхностью.'),
      params: [l('sladoled: 5 min van zamrzivača', 'ice cream: 5 min out of the freezer', 'мороженое: 5 мин вне морозилки')],
      done: l('Kašika ulazi u masu, ali masa ne curi.', 'The spoon goes into the mixture, but the mixture does not run.', 'Ложка входит в массу, но масса не течёт.'),
      why: l('Mek krem ne drži oblik, a led tvrd sladoled se kida.', 'Soft cream will not hold a shape, and rock-hard ice cream tears.', 'Мягкий крем не держит форму, а каменное мороженое рвётся.'),
    },
    {
      text: l('Zagrej kašiku u vreloj vodi i obriši je.', 'Warm the spoon in hot water and wipe it.', 'Нагрей ложку в горячей воде и вытри.'),
      done: l('Kašika je topla i suva.', 'The spoon is warm and dry.', 'Ложка тёплая и сухая.'),
      why: l('Topla kašika otopi tanak sloj mase, i quenelle sklizne. Voda na kašici ostavi trag na tanjiru.', 'A warm spoon melts a thin layer of the mixture, so the quenelle slides off. Water on the spoon leaves a mark on the plate.', 'Тёплая ложка подтапливает тонкий слой массы, и кнель соскальзывает. Вода на ложке оставит след на тарелке.'),
    },
    {
      text: l('Povuci kašiku preko površine prema sebi, okrećući zglob.', 'Drag the spoon across the surface towards you, turning your wrist.', 'Проведи ложкой по поверхности к себе, поворачивая кисть.'),
      done: l('Masa se uvija u oval unutar kašike.', 'The mixture curls into an oval inside the spoon.', 'Масса закручивается в овал внутри ложки.'),
      why: l('Pokret je jedan, iz zgloba. Ako ga radiš iz ramena, masa se lomi.', 'It is one movement, from the wrist. Done from the shoulder, the mixture breaks.', 'Движение одно, из кисти. Если делать от плеча, масса ломается.'),
      drawing: 'quenelle',
    },
    {
      text: l('Proveri oblik: tri glatke strane i oštar greben.', 'Check the shape: three smooth sides and a sharp ridge.', 'Проверь форму: три гладкие стороны и острый гребень.'),
      done: l('Quenelle izgleda kao izdužen, gladak orah.', 'The quenelle looks like an elongated, smooth nut.', 'Кнель выглядит как вытянутый гладкий орех.'),
      why: l('Ako nije glatka, vrati masu i ponovi. Treća quenelle je uvek bolja od prve.', 'If it is not smooth, put the mixture back and repeat. The third quenelle is always better than the first.', 'Если не гладкая, верни массу и повтори. Третья кнель всегда лучше первой.'),
    },
    {
      text: l('Vrh kašike spusti na tanjir i nagni je da quenelle isklizne.', 'Touch the tip of the spoon to the plate and tilt it so the quenelle slides off.', 'Коснись кончиком ложки тарелки и наклони её, чтобы кнель соскользнула.'),
      done: l('Quenelle leži na tanjiru glatka, bez tragova prstiju.', 'The quenelle lies on the plate, smooth and without fingerprints.', 'Кнель лежит на тарелке гладкая, без следов пальцев.'),
      why: l('Prst koji gura quenelle ostavlja otisak. Toplota kašike radi posao umesto prsta.', 'A finger pushing the quenelle leaves a mark. The warmth of the spoon does the job instead.', 'Палец, толкающий кнель, оставит след. Тепло ложки делает работу вместо пальца.'),
    },
  ],
  mistake: {
    title: l('Hladna kašika i masa koja se lepi.', 'A cold spoon and a mixture that sticks.', 'Холодная ложка и прилипающая масса.'),
    fix: l(
      'Bez toplote masa se lepi za kašiku i kida pri spuštanju. Kašiku umoči u vrelu vodu pre svake quenelle i obriši je.',
      'Without warmth the mixture sticks to the spoon and tears as you set it down. Dip the spoon in hot water before every quenelle and wipe it.',
      'Без тепла масса прилипает к ложке и рвётся при выкладывании. Опускай ложку в горячую воду перед каждой кнелью и вытирай.',
    ),
  },
  think: {
    question: l('Zašto se kašika greje pre svake quenelle?', 'Why is the spoon warmed before every quenelle?', 'Зачем греть ложку перед каждой кнелью?'),
    options: [
      l('Tanak otopljen sloj pušta masu da isklizne', 'A thin melted layer lets the mixture slide off', 'Тонкий подтаявший слой даёт массе соскользнуть'),
      l('Da se masa zagreje', 'To warm the mixture', 'Чтобы масса согрелась'),
      l('Zbog higijene', 'For hygiene', 'Ради гигиены'),
    ],
    answer: 0,
    explain: l(
      'Topla kašika otopi milimetar mase uz metal. Taj sloj je podmazivanje: quenelle se odvaja sama i ostaje glatka.',
      'A warm spoon melts a millimetre of the mixture against the metal. That layer is the lubricant: the quenelle comes away on its own and stays smooth.',
      'Тёплая ложка подтапливает миллиметр массы у металла. Этот слой — смазка: кнель отделяется сама и остаётся гладкой.',
    ),
  },
}

export const fineDiningLessons: Lesson[] = [puree, agar, foam, crisps, quenelle]
