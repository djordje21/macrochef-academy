# MacroChef Academy

Škola kuvanja u tri razreda, korak po korak. Bez videa: jedan korak po ekranu, tačna mera, crtež i znak po kome vidiš da je gotovo. SR / EN / RU. Instalira se kao PWA i radi bez interneta.

Deo istog portfolija kao [MacroChef](https://github.com/djordje21/macrochef): isti fontovi, iste boje, isti ključ za jezik.

## Pokretanje

```
npm install
npm run dev -- --host   # otvori Network URL na telefonu (ista Wi-Fi mreža)
npm run build           # produkcijski build u dist/
```

Deploy:
- **Cloudflare (Workers & Pages):** poveži GitHub repo, build command `npm run build`, deploy command `npx wrangler deploy`. Podešavanje je u `wrangler.jsonc`, zaglavlja u `public/_headers`. Svaki push na `main` ide uživo.
- **Netlify:** čita `netlify.toml`.

## Struktura

- `src/content/` – sadržaj kursa, odvojen od koda. Svaki tekst postoji na sva tri jezika (`l(sr, en, ru)`).
  - `grade1/index.ts` – program 1. razreda: 8 modula i završni ispit.
  - `grade1/*.ts` – lekcije po temama (kitchen, knife, heat, …); `grade1/index.ts` slaže ih u 16 modula.
  - `reference.ts` – Mere i temperature: temperature, odnosi, vremena i rezovi.
  - `exam.ts` – završni ispit: namirnice po grupama, tri odluke i kontrolna lista.
- `src/drawings/` – crteži koraka. Hrana i alat su pune boje, ono što kuvar radi je žuta linija koja se iscrta kad se korak otvori.
- `src/screens/` – početna, modul, lekcija (teorija i praksa), korak, kraj lekcije, mere i temperature, ispit, pregled razreda, landing.
- `public/media/` – naslovne fotografije (Pexels). Video na landing stranici je `public/media/hero.mp4` (Pexels, [seckanje celera](https://www.pexels.com/video/close-up-shot-of-cutting-vegetable-6544256/), 12 s, bez zvuka). Ako ga nema, prikazuje se fotografija.

## Pravila pisanja lekcije

1. Jedan korak, jedna radnja, do 15 reči.
2. Svaki broj ima jedinicu: 5 mm, 74°C, 8 min.
3. Svaki korak ima „Gotovo kad“: znak koji početnik vidi, čuje ili oseti.
4. „Zašto“ u jednoj rečenici, ispod koraka.
5. Crtež umesto fotografije za tehniku.
6. Jedna greška po lekciji, ona koju prave svi.

## Status

- 1. razred: 16 modula po partijama kuhinje, 90 lekcija na SR/EN/RU, sve napisane, svaka sa crtežima koraka. Teorija i praksa, tajmeri, Mere i temperature, interaktivni završni ispit, landing stranica.
- 2. razred (Zanat): 14 modula, 78 lekcija, sve napisane. Kuhinje sveta: Francuska, Italija i Mediteran, Azija kao bonus.
- 3. razred (Chef): 14 modula, 70 lekcija, sve napisane. Tehnika visokog nivoa, kreiranje jela i menija, food cost, HACCP, vođenje tima, otvaranje kuhinje i hotelska kuhinja. Svaki razred ima svoje okruženje: teget i žuta, antracit i bakar, crna i šampanj.

## Fotografije

Sa [Pexels](https://www.pexels.com), pod Pexels licencom (besplatno, i za komercijalnu upotrebu). Hero je [8448077](https://www.pexels.com/photo/8448077/). Fajlovi su u `public/media/`, širine do 1200 px, a tačka fokusa za isečak naslovne slike je u `src/components/photoFocus.ts`.

1. razred i naslovne: [grade-1](https://www.pexels.com/photo/8448077/), [grade-3](https://www.pexels.com/photo/2403392/), [kitchen](https://www.pexels.com/photo/7262895/), [knife](https://www.pexels.com/photo/8859774/), [heat](https://www.pexels.com/photo/13630440/), [taste](https://www.pexels.com/photo/678414/), [eggs](https://www.pexels.com/photo/28930249/), [meat](https://www.pexels.com/photo/2374946/), [soups](https://www.pexels.com/photo/20943934/), [starches](https://www.pexels.com/photo/6287344/), [cold](https://www.pexels.com/photo/9004736/), [sauces](https://www.pexels.com/photo/6287476/), [legumes](https://www.pexels.com/photo/11369845/), [braise](https://www.pexels.com/photo/8024112/), [roast](https://www.pexels.com/photo/6210955/), [grill](https://www.pexels.com/photo/2233730/), [leftovers](https://www.pexels.com/photo/5740485/), [mealprep](https://www.pexels.com/photo/4929705/).

2. razred: [g2-timing](https://www.pexels.com/photo/30120987/), [g2-poultry](https://www.pexels.com/photo/10842249/), [g2-butchery](https://www.pexels.com/photo/9424951/), [g2-fish](https://www.pexels.com/photo/14062105/), [g2-doughs](https://www.pexels.com/photo/6937404/), [g2-bread](https://www.pexels.com/photo/4881596/), [g2-desserts](https://www.pexels.com/photo/835741/), [g2-preserves](https://www.pexels.com/photo/34711401/), [g2-lowtemp](https://www.pexels.com/photo/17391580/), [g2-french](https://www.pexels.com/photo/7004842/), [g2-italian](https://www.pexels.com/photo/1398688/), [g2-med](https://www.pexels.com/photo/11653557/), [g2-plating](https://www.pexels.com/photo/30507463/), [g2-asia](https://www.pexels.com/photo/34615582/).

3. razred: [g3-station](https://www.pexels.com/photo/19020744/), [g3-sauces](https://www.pexels.com/photo/32742923/), [g3-finedining](https://www.pexels.com/photo/3297884/), [g3-modern](https://www.pexels.com/photo/6823261/), [g3-protein](https://www.pexels.com/photo/40366703/), [g3-pastry](https://www.pexels.com/photo/6035333/), [g3-creating](https://www.pexels.com/photo/9133003/), [g3-menu](https://www.pexels.com/photo/18978083/), [g3-nutrition](https://www.pexels.com/photo/6546181/), [g3-foodcost](https://www.pexels.com/photo/1093837/), [g3-haccp](https://www.pexels.com/photo/5779747/), [g3-team](https://www.pexels.com/photo/6937464/), [g3-opening](https://www.pexels.com/photo/6375553/), [g3-hotel](https://www.pexels.com/photo/37240724/).
