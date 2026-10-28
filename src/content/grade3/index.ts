import { l, type Grade, type L } from '../types'
import { stationLessons } from './station'
import { chefSauceLessons } from './chefsauces'
import { fineDiningLessons } from './finedining'
import { modernLessons } from './modern'
import { proteinLessons } from './protein'
import { pastryLessons } from './pastry'
import { creatingLessons } from './creating'
import { menuLessons } from './menu'
import { nutritionLessons } from './nutrition'

// Grade 3 · Chef. From a cook with the craft to a chef: technique at restaurant level, creating dishes
// and menus, then the kitchen as a business: food cost, HACCP, the team, opening a kitchen and the hotel.
// Lesson ids carry the grade: "3.4.1". Every lesson is announced as planned first.

const p = (id: string, title: L) => ({ id, title })

export const grade3: Grade = {
  n: 3,
  title: l('Chef', 'Chef', 'Шеф'),
  tagline: l(
    'Fine dining, pastry, meni, food cost, HACCP i vođenje kuhinje.',
    'Fine dining, pastry, menus, food cost, HACCP and running a kitchen.',
    'Высокая кухня, кондитерка, меню, фудкост, ХАССП и управление кухней.',
  ),
  photo: 'grade-3.webp',
  audience: l(
    'Za one koji kuvaju kao zanatlije, a hoće da vode: meni, ljude i brojeve.',
    'For cooks with the craft who want to lead: the menu, the people and the numbers.',
    'Для тех, кто владеет ремеслом и хочет руководить: меню, людьми и цифрами.',
  ),
  outcome: l(
    'Osmisliš meni, izračunaš mu cenu i vodiš kuhinju kao chef.',
    'You design a menu, cost it and run a kitchen like a chef.',
    'Ты составляешь меню, считаешь его себестоимость и руководишь кухней как шеф.',
  ),
  modules: [
    {
      id: 'g3m1',
      n: 1,
      title: l('Mise en place kao u restoranu', 'Restaurant mise en place', 'Мизанплас как в ресторане'),
      intro: l(
        'Stanica, prep lista, par nivoi i provera pred servis. Kuhinja koja je spremna pre prvog gosta.',
        'The station, prep list, par levels and the line check. A kitchen that is ready before the first guest.',
        'Станция, преп-лист, пар-уровни и проверка перед сервисом. Кухня, готовая до первого гостя.',
      ),
      photo: 'grade-3.webp',
      lessons: stationLessons,
    },
    {
      id: 'g3m2',
      n: 2,
      title: l('Sosevi šefa', 'The chef\'s sauces', 'Соусы шефа'),
      intro: l(
        'Demi-glace, jus, sabayon, zeleno ulje i završavanje sosa puterom. Sos je potpis kuhinje.',
        'Demi-glace, jus, sabayon, green oil and finishing a sauce with butter. Sauce is a kitchen\'s signature.',
        'Деми-глас, жю, сабайон, зелёное масло и завершение соуса маслом. Соус — подпись кухни.',
      ),
      photo: 'grade-3.webp',
      lessons: chefSauceLessons,
    },
    {
      id: 'g3m3',
      n: 3,
      title: l('Fine dining tehnike', 'Fine dining techniques', 'Техники высокой кухни'),
      intro: l(
        'Svilen pire, gel od agara, pena, tuile i quenelle. Male tehnike koje tanjir podižu na drugi nivo.',
        'Silky purée, agar gel, foam, tuile and quenelle. Small techniques that lift a plate to another level.',
        'Шелковистое пюре, гель из агара, пена, тюиль и кнель. Небольшие техники, поднимающие тарелку на другой уровень.',
      ),
      photo: 'grade-3.webp',
      lessons: fineDiningLessons,
    },
    {
      id: 'g3m4',
      n: 4,
      title: l('Moderne tehnike', 'Modern techniques', 'Современные техники'),
      intro: l(
        'Pasterizacija sous vide po tablici, laktofermentacija, prahovi, suvo soljenje i infuzije.',
        'Sous vide pasteurisation by the table, lacto-fermentation, powders, dry brining and infusions.',
        'Пастеризация су-вид по таблице, лактоферментация, порошки, сухой посол и настои.',
      ),
      photo: 'grade-3.webp',
      lessons: modernLessons,
    },
    {
      id: 'g3m5',
      n: 5,
      title: l('Protein na nivou šefa', 'Protein at chef level', 'Белок на уровне шефа'),
      intro: l(
        'Rib-eye sa podlivanjem putera, crudo od ribe, jagnjeći kare, srneći file i kapice.',
        'Basted rib-eye, fish crudo, rack of lamb, venison loin and scallops.',
        'Рибай с поливкой маслом, крудо из рыбы, каре ягнёнка, филе косули и гребешки.',
      ),
      photo: 'grade-3.webp',
      lessons: proteinLessons,
    },
    {
      id: 'g3m6',
      n: 6,
      title: l('Pastry', 'Pastry', 'Кондитерка'),
      intro: l(
        'Temperirana čokolada, ganache, sorbe, madlene i ogledalna glazura. Završnica menija.',
        'Tempered chocolate, ganache, sorbet, madeleines and mirror glaze. The end of the menu.',
        'Темперированный шоколад, ганаш, сорбет, мадлен и зеркальная глазурь. Финал меню.',
      ),
      photo: 'grade-3.webp',
      lessons: pastryLessons,
    },
    {
      id: 'g3m7',
      n: 7,
      title: l('Kako nastaje jelo', 'How a dish is made', 'Как рождается блюдо'),
      intro: l(
        'Od sastojka u sezoni do jela na meniju: uparivanje, tekstura, proba i recept-kartica.',
        'From an ingredient in season to a dish on the menu: pairing, texture, tasting and the recipe card.',
        'От продукта в сезон до блюда в меню: сочетания, текстура, дегустация и техкарта.',
      ),
      photo: 'grade-3.webp',
      lessons: creatingLessons,
    },
    {
      id: 'g3m8',
      n: 8,
      title: l('Kreiranje menija', 'Building a menu', 'Создание меню'),
      intro: l(
        'Struktura menija, ritam degustacionog menija, opis jela i matrica koja pokazuje šta zarađuje.',
        'Menu structure, the rhythm of a tasting menu, dish descriptions and the matrix that shows what earns.',
        'Структура меню, ритм дегустационного меню, описание блюд и матрица, показывающая, что приносит прибыль.',
      ),
      photo: 'grade-3.webp',
      lessons: menuLessons,
    },
    {
      id: 'g3m9',
      n: 9,
      title: l('Nutritivni dizajn sa MacroChefom', 'Nutrition by design, with MacroChef', 'Питательный дизайн с MacroChef'),
      intro: l(
        'Makro-balans tanjira, 14 alergena, zamene i lakše verzije klasika, uneti u MacroChef.',
        'Macro balance on the plate, the 14 allergens, swaps and lighter classics, entered in MacroChef.',
        'Баланс макросов на тарелке, 14 аллергенов, замены и облегчённая классика в MacroChef.',
      ),
      photo: 'grade-3.webp',
      lessons: nutritionLessons,
    },
    {
      id: 'g3m10',
      n: 10,
      title: l('Food cost i nabavka', 'Food cost and purchasing', 'Фудкост и закупки'),
      intro: l(
        'Yield test, recept-kartica sa cenom, food cost %, prijem robe, inventura i otpad.',
        'Yield test, costed recipe card, food cost %, receiving goods, stocktake and waste.',
        'Тест выхода, техкарта с ценой, фудкост %, приёмка товара, инвентаризация и отходы.',
      ),
      photo: 'grade-3.webp',
      lessons: [],
      planned: [
        p('3.10.1', l('Yield test', 'The yield test', 'Тест выхода')),
        p('3.10.2', l('Recept-kartica sa cenom', 'The costed recipe card', 'Техкарта с себестоимостью')),
        p('3.10.3', l('Food cost i prodajna cena', 'Food cost and the menu price', 'Фудкост и цена в меню')),
        p('3.10.4', l('Prijem robe i dobavljači', 'Receiving goods and suppliers', 'Приёмка товара и поставщики')),
        p('3.10.5', l('Inventura i otpad', 'Stocktake and waste', 'Инвентаризация и отходы')),
      ],
    },
    {
      id: 'g3m11',
      n: 11,
      title: l('HACCP u praksi', 'HACCP in practice', 'ХАССП на практике'),
      intro: l(
        'Sedam principa, hlađenje i podgrevanje, temperaturne liste, alergeni i plan čišćenja.',
        'The seven principles, cooling and reheating, temperature logs, allergens and the cleaning plan.',
        'Семь принципов, охлаждение и разогрев, температурные журналы, аллергены и план уборки.',
      ),
      photo: 'grade-3.webp',
      lessons: [],
      planned: [
        p('3.11.1', l('Sedam principa HACCP-a', 'The seven HACCP principles', 'Семь принципов ХАССП')),
        p('3.11.2', l('Hlađenje i podgrevanje', 'Cooling and reheating', 'Охлаждение и разогрев')),
        p('3.11.3', l('Temperaturne liste', 'Temperature logs', 'Температурные журналы')),
        p('3.11.4', l('Alergeni u kuhinji', 'Allergens in the kitchen', 'Аллергены на кухне')),
        p('3.11.5', l('Plan čišćenja i inspekcija', 'Cleaning plan and inspection', 'План уборки и проверка')),
      ],
    },
    {
      id: 'g3m12',
      n: 12,
      title: l('Vođenje tima', 'Leading the team', 'Управление командой'),
      intro: l(
        'Brigada, raspored smena, obuka novog kuvara, komunikacija na servisu i kultura kuhinje.',
        'The brigade, the rota, training a new cook, communication on service and kitchen culture.',
        'Бригада, график смен, обучение нового повара, общение на сервисе и культура кухни.',
      ),
      photo: 'grade-3.webp',
      lessons: [],
      planned: [
        p('3.12.1', l('Brigada u restoranu', 'The restaurant brigade', 'Бригада в ресторане')),
        p('3.12.2', l('Raspored smena', 'The rota', 'График смен')),
        p('3.12.3', l('Obuka novog kuvara', 'Training a new cook', 'Обучение нового повара')),
        p('3.12.4', l('Komunikacija na servisu', 'Communication on service', 'Общение на сервисе')),
        p('3.12.5', l('Kultura kuhinje i pritisak', 'Kitchen culture and pressure', 'Культура кухни и давление')),
      ],
    },
    {
      id: 'g3m13',
      n: 13,
      title: l('Otvaranje kuhinje', 'Opening a kitchen', 'Открытие кухни'),
      intro: l(
        'Tok rada i raspored, oprema, test kuhinja, soft opening i prvih 90 dana.',
        'Workflow and layout, equipment, test kitchen, soft opening and the first 90 days.',
        'Поток работы и планировка, оборудование, тестовая кухня, мягкое открытие и первые 90 дней.',
      ),
      photo: 'grade-3.webp',
      lessons: [],
      planned: [
        p('3.13.1', l('Tok rada i raspored prostora', 'Workflow and layout', 'Поток работы и планировка')),
        p('3.13.2', l('Izbor opreme', 'Choosing equipment', 'Выбор оборудования')),
        p('3.13.3', l('Test kuhinja', 'The test kitchen', 'Тестовая кухня')),
        p('3.13.4', l('Soft opening', 'The soft opening', 'Мягкое открытие')),
        p('3.13.5', l('Prvih 90 dana', 'The first 90 days', 'Первые 90 дней')),
      ],
    },
    {
      id: 'g3m14',
      n: 14,
      title: l('Banket i hotelska kuhinja', 'Banquets and the hotel kitchen', 'Банкеты и гостиничная кухня'),
      intro: l(
        'Banket za sto ljudi, topla linija, hotelski doručak, room service i švedski sto.',
        'A banquet for a hundred, the hot line, hotel breakfast, room service and the buffet.',
        'Банкет на сто человек, горячая линия, гостиничный завтрак, рум-сервис и шведский стол.',
      ),
      photo: 'grade-3.webp',
      lessons: [],
      planned: [
        p('3.14.1', l('Banket za sto ljudi', 'A banquet for a hundred', 'Банкет на сто человек')),
        p('3.14.2', l('Topla i hladna linija', 'Hot and cold holding', 'Горячая и холодная линия')),
        p('3.14.3', l('Hotelski doručak', 'Hotel breakfast', 'Гостиничный завтрак')),
        p('3.14.4', l('Room service', 'Room service', 'Рум-сервис')),
        p('3.14.5', l('Švedski sto', 'The buffet', 'Шведский стол')),
      ],
    },
  ],
  exam: {
    title: l('Tvoj meni', 'Your menu', 'Твоё меню'),
    text: l(
      'Degustacioni meni od pet jela, sa recept-karticama, food costom, alergenima i makroima za svako jelo.',
      'A five-course tasting menu with recipe cards, food cost, allergens and macros for every dish.',
      'Дегустационное меню из пяти блюд с техкартами, фудкостом, аллергенами и макросами для каждого.',
    ),
  },
}
