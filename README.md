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
- **Cloudflare Pages:** poveži GitHub repo, build `npm run build`, output `dist`, promenljiva `NODE_VERSION=22`. Zaglavlja su u `public/_headers`. Svaki push na `main` ide uživo.
- **Netlify:** čita `netlify.toml`.

## Struktura

- `src/content/` – sadržaj kursa, odvojen od koda. Svaki tekst postoji na sva tri jezika (`l(sr, en, ru)`).
  - `grade1/index.ts` – program 1. razreda: 8 modula i završni ispit.
  - `grade1/m2-knife.ts` – modul 2 Nož, 5 lekcija.
  - `reference.ts` – šalabahter: temperature i rezovi.
- `src/drawings/` – crteži koraka. Hrana i alat su pune boje, ono što kuvar radi je žuta linija koja se iscrta kad se korak otvori.
- `src/screens/` – početna, modul, lekcija, korak, kraj lekcije, šalabahter.
- `public/media/` – naslovne fotografije (Pexels).

## Pravila pisanja lekcije

1. Jedan korak, jedna radnja, do 15 reči.
2. Svaki broj ima jedinicu: 5 mm, 74°C, 8 min.
3. Svaki korak ima „Gotovo kad“: znak koji početnik vidi, čuje ili oseti.
4. „Zašto“ u jednoj rečenici, ispod koraka.
5. Crtež umesto fotografije za tehniku.
6. Jedna greška po lekciji, ona koju prave svi.

## Status

- 1. razred: program svih 8 modula, napisan modul 2 Nož (5 lekcija), šalabahter.
- 2. i 3. razred: najavljeni na početnoj.

## Fotografije

Sa [Pexels](https://www.pexels.com), pod Pexels licencom (besplatno, i za komercijalnu upotrebu):
[grade-1](https://www.pexels.com/photo/person-holding-knife-cutting-food-8448077/),
[grade-2](https://www.pexels.com/photo/photo-of-person-holding-knife-3296281/),
[grade-3](https://www.pexels.com/photo/person-holding-bowl-2403392/),
[m1](https://www.pexels.com/photo/assorted-vegetables-placed-on-counter-near-jars-with-pasta-7262895/),
[m2](https://www.pexels.com/photo/a-person-cutting-an-onion-thinly-8859774/),
[m3](https://www.pexels.com/photo/a-hand-holding-a-burning-pan-13630440/),
[m4](https://www.pexels.com/photo/assorted-spices-near-white-ceramic-bowls-678414/),
[m5](https://www.pexels.com/photo/elegant-arrangement-of-eggs-in-dark-bowl-28930249/),
[m6](https://www.pexels.com/photo/close-up-photo-of-steak-on-barbeque-grill-8477345/),
[m7](https://www.pexels.com/photo/stew-in-a-pot-20943934/),
[m8](https://www.pexels.com/photo/various-types-of-raw-pasta-in-bowls-6287344/).
