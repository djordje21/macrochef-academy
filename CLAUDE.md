# Macro Chef Academy

A step-by-step cooking school as a PWA, written for a professional chef, Đorđe (Đole). Talk to him in Serbian (Latin script), casual tone, no flattery. He reviews content as a chef; anything about food safety or professional practice is his call.

Live: macrochef-academy.macrochef.workers.dev. Every push to `main` deploys through Cloudflare Workers Builds (`wrangler.jsonc`, static assets from `dist/`). There is no backend: no accounts, no payments, no server code. An AI assistant was built and removed on his request; do not add one back unless he asks.

## Commands

- `npm run build`: `tsc -b && vite build`. Must pass before every push.
- `npx oxlint`: lint. Do not run Prettier; the code style is no semicolons, single quotes, 2 spaces.
- `npm run dev` / `npm run preview`: local server. Playwright and Chromium are available for screenshots.

## Structure

- `src/content/`: all course text. `grade1/` (16 modules, 90 lessons), `grade2/` (14 modules, 78), `grade3/` (14 modules, 70). Each grade's `index.ts` lists modules; lessons live in one file per module. `reference.ts` is the "Mere i temperature" screen. `types.ts` defines `Lesson`, `Step`, `Module`, `Grade`.
- `src/screens/`, `src/components/`, `src/app/` (router, progress, menu, app bar, share prompt).
- `src/drawings/index.tsx`: inline SVG step drawings, palette `C`, helpers `Cut` and `Board`. New drawings go before `} satisfies Record<string, ReactNode>`, under a `// Grade N · Module M · Topic` comment.
- `src/i18n/{sr,en,ru}.json`: UI strings; `sr.json` defines the keys.
- `public/media/`: cover photos (Pexels, up to 1200 px wide). Focal point for each cover in `src/components/photoFocus.ts`. Credits in README.

## Content rules

- Every text is `l(sr, en, ru)`. Serbian in Latin script, Russian in Cyrillic. No Cyrillic letters inside Serbian or English strings, no Serbian diacritics inside Russian, and no Latin words in Russian (write "а-ля карт", not "à la carte"). Check every new file for this.
- Lesson ids carry the grade: `"2.4.1"`, `"3.10.5"`; grade 1 uses `"N.M"`. Module ids: `m1`…, `g2m1`…, `g3m1`….
- A step: one action of about 15 words, exact `params` (grams, °C, minutes, mm), a `done` sign the cook can see, hear or feel, and a one-sentence `why`. Each lesson ends with the common mistake and a three-option question.
- Cross-reference other lessons by id in parentheses, e.g. "(3.11.2)".
- Macros in `recipe` are per 100 g.
- Grade rooms: grade 1 navy and amber, grade 2 charcoal and copper, grade 3 near-black and champagne with Fraunces headings. `App.tsx` sets `data-grade` from the route; tokens are in `src/styles/tokens.css`.

## Food safety numbers used across the course

Keep every lesson consistent with these; change them only on Đole's word.

- Chicken and turkey 74°C (thigh 80°C for texture). Minced meat 71°C. Pork chop and tenderloin 63°C plus 3 min rest, inspected meat; slow-roasted shoulder 85–90°C for tenderness; wild boar and home-slaughtered pork 71°C and tested for trichinella. Beef medium rare 54–55°C. Fish 50–55°C.
- Danger zone 5–63°C. Hold hot above 63°C, cold at 0–5°C. Cooling 60→21°C in 2 h, then to 5°C in 4 h. Reheat once to 75°C. Out of temperature control: 2 h at most.
- Cooked food and sauces in the fridge up to 3 days. Herb or garlic oil only in the fridge, up to 3 days.
- Fish served raw: frozen at −20°C for at least 24 h. Lacto-fermentation done at pH 4.6 or below. Eggs set above about 80°C.

## Workflow

- Commit as `git -c user.name="Đorđe" -c user.email="dzordzcook@gmail.com" commit`, then `git push origin main`.
- After content changes: build, then look at the step drawings and screens in a browser before pushing. Remove drawings that do not fit the step.
- He tests on his phone and sends screenshots in Serbian; fix what he shows and say plainly what changed and what was not verified.

## Project family

One name, three doors. The umbrella brand is Đorđe himself; the portfolio is the centre, Academy and MacroChef are his projects. The three stay separate: own repo, own deploy, own look and tone. Never merge repos or apps. This section is the same in all three CLAUDE.md files; when it changes, change it in all three.

| Project | What it is | Repo | Live | Stack | Deploys from |
|---|---|---|---|---|---|
| Portfolio | Who he is | `djordje21/portfolio` | djordje-milenkovic.netlify.app (`/sr/`, `/en/`, `/ru/`) | Astro + Tailwind, static | `main` → Netlify |
| Macro Chef Academy | What he gives: cooking school for young cooks and learners | `djordje21/macrochef-academy` | macrochef-academy.macrochef.workers.dev | React + Vite PWA, no backend | `main` → Cloudflare Workers Builds |
| MacroChef | What he builds: ad-free calorie and macro tracker | `djordje21/macrochef` | macrochef.macrochef.workers.dev | React + Vite PWA, Dexie, Supabase accounts | `ccr-e80a272b-xkto0p` → Cloudflare Workers Builds |

MacroChef's `netlify.toml` is a leftover; Cloudflare is the only live host. Each project has its own Claude Code session; the main session coordinates the three and tells Đole every task it sends to another session.

### Shared signature

- Signature line, exactly: **Executive Chef Đorđe Milenković · MacroChef · Macro Chef Academy**. It goes in each project's footer, with the monogram. The name of the project you are in is not a link.
- Monogram: Đorđe's own hand-drawn ĐM signature, traced to one SVG path. Each repo has it as a `Monogram` component; reuse it, do not redraw it. The app name is written "Macro Chef Academy" (separate words) everywhere users see it; the in-app badge stays "MCA".
- Thread colour: yellow `#F5B83D`. In MacroChef and Academy it is already the primary/grade-1 accent. In the portfolio the signature uses gold `#C8A982` instead (monogram and dots only, `--color-gold`); the portfolio stays navy with ice blue.
- Full rules for signature, colour and tone: `docs/family.md` in the portfolio repo.

### Bridges

| Bridge | From | To | Status |
|---|---|---|---|
| "My projects" cards | Portfolio | Academy, MacroChef | planned |
| Footer signature with links | all three | the other two | built: portfolio footer, Academy landing and menu, MacroChef side menu. On the portfolio Academy is plain text until review (`site.family.showAcademyLink`) |
| "Ko predaje" → "Ceo put" | Academy landing (`landing-chef` section) | Portfolio | planned |
| "Otvori u MacroChef-u" | Academy lesson end (`lesson.recipe`) | MacroChef | planned, design not agreed |
| "Nauči tehniku" | MacroChef recipe | Academy lesson | planned, design not agreed |

Deep links: both apps use hash routing. Academy lesson: `https://macrochef-academy.macrochef.workers.dev/#/lesson/<id>` (ids like `5.2`, `2.4.1`, `3.10.5`). MacroChef library recipe: `https://macrochef.macrochef.workers.dev/#/lib?key=<key>`. MacroChef data lives on the device (IndexedDB), so anything passed between the apps goes in the link.

Known gap: an Academy `recipe` is only a name and macros per 100 g; a MacroChef recipe is built from ingredients in raw grams. A full recipe import needs ingredient lists for the Academy dishes, which is content Đole reviews.

### Family rules

- Do not feature Academy on the portfolio until Đole has reviewed the course content.
- Before any change users can see on the portfolio or in MacroChef, show Đole a preview (screenshot or preview URL) and wait for his OK.
- Later, not now: one domain with three addresses, possibly one shared account.

## Open items

- Lesson 13.3 "Svinjsko pečenje" teaches pork neck pink at 70°C. Waiting for Đole: keep it, rewrite as traditional slow-roasted shoulder, or both.
- The review table artifact covers grade 1 only; grades 2 and 3 have not been reviewed by Đole.
- Russian has not been proofread by a native speaker.
- Ideas discussed but not built: accounts, payments, certificate and recommendation from Đole, short technique videos filmed by him.
