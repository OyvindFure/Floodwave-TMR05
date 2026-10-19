# Flood wave: visualiseringar til WAMIT-prosjektet (TMR05)

Statisk nettstad utan bygging. Opne `index.html` i nettlesaren, eller publiser mappa med GitHub Pages.

## Filer

- `index.html`: forside med kort for kvar visualisering
- `box-generator.html`: box generator steg for steg
- `overview.html`: oversikt over korleis WAMIT-oppsettet køyrer, frå config.py til rapport
- `assets/site.js`: meny, språkval (NO/EN), lys/mørk modus og forsidekort
- `assets/site.css`: felles stil
- `assets/box-generator.js` og `assets/box.css`: alt som høyrer til box generator-sida
- `assets/overview.js` og `assets/overview.css`: alt som høyrer til oversiktssida
  (viser òg dei 5 bølgjeprobane: 1B, 3B og 5B frå kanten, pluss 1λ og 2λ, 43 feltpunkt i case.frc)

## Leggje til ei ny visualisering

1. Kopier `box-generator.html` til ei ny fil, til dømes `wave-visual.html`, og byt innhaldet.
2. Legg sida til i lista `PAGES` øvst i `assets/site.js`: `{ key:"wave", href:"wave-visual.html" }`.
3. Legg strengane i `TR` i same fil, både `no` og `en`: `nav.wave`, `card.wave.t` og `card.wave.d`.
4. Skriv sida sin eigen tekst i ei eiga JS-fil med `SITE.add({ no:{...}, en:{...} })`, og bruk `data-i18n="nøkkel"` i HTML og `SITE.t("nøkkel")` i kode.
5. Avslutt sida med `SITE.start(...)` og `SITE.onLang(...)` slik som i `assets/box-generator.js`.

Menyen og forsidekortet blir då laga automatisk.
