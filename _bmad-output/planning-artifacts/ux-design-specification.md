---
stepsCompleted: [1, 2, 3, 4]
inputDocuments: []
---

# UX Design Specification – Shanti

**Author:** Zsófi
**Date:** 2026-03-19

---

## Executive Summary

### Projekt víziója

A Shanti egy holisztikus terápiás praxis online jelenléte, amely meleg, nyugodt és spirituális hangulatot áraszt. Az oldal célja, hogy bizalmat építsen a látogatókban, bemutassa a szolgáltatásokat (Hawaii Lomi Lomi masszázs, Kineziológia, Energetikai kezelés, Holisztikus tanácsadás), és egyszerűvé tegye az időpontfoglalást. A vizuális világ a természet, napfény és belső béke érzését közvetíti.

### Célközönség

- **Elsődleges**: Nők, 25–55 év, akik nyitottak a holisztikus gyógyításra és alternatív terápiákra
- **Földrajzi fókusz**: Budapest és agglomerációja, különösen **Biatorbágy, Budaörs, Herceghalom** környéke
- **Technikai jártasság**: Közepes – mobilról böngésznek, szolgáltatást keresnek
- **Motiváció**: Testi-lelki egyensúly, stresszoldás, önismeret, természetes gyógymódok iránti nyitottság
- **Eszközhasználat**: Elsősorban mobil, másodsorban desktop

### Fő UX kihívások

- **Bizalomépítés első pillantásra** – A vizuális megjelenésnek azonnal nyugalmat és professzionalizmust kell sugároznia
- **Mobile-first élmény** – A célközönség nagy része mobilról érkezik
- **Egyszerű időpontfoglalás** – A kapcsolatfelvételi flow legyen gyors és akadálymentes
- **Helyi relevancia** – Budapest nyugati agglomerációjának megszólítása (Biatorbágy, Budaörs, Herceghalom)

### Design lehetőségek

- **Képek ereje** – A természetes, meleg fotók (naplemente, tengerpart, meditáció) azonnali hangulatot teremtenek
- **Árlista átláthatósága** – Önálló árlista oldal mint versenyelőny a transzparencia által
- **Lokális SEO** – A helyi fókusz kiemelése a tartalomban és meta adatokban

---

## Színpaletta

| Szín | Hex | Használat |
|---|---|---|
| **Terrakotta** | `#C17B5E` | Elsődleges akció szín (CTA gombok, kiemelések) |
| Terrakotta világos | `#D4A088` | Hover állapotok, enyhe kiemelések |
| Terrakotta sötét | `#A8624A` | Aktív/pressed állapotok |
| **Zsálya zöld** | `#9CAF88` | Másodlagos szín (elválasztók, ikonok, badge-ek) |
| Zsálya világos | `#B5C4A5` | Háttér kiemelések |
| Zsálya sötét | `#7D9466` | Hover variáns |
| **Krém** | `#FFF9F0` | Fő háttér szín |
| **Bézs** | `#F5EDE3` | Szekció háttér váltakozás |
| Bézs világos | `#FAF7F2` | Könnyű háttér variáns |
| Bézs sötét | `#E8DDD0` | Input mezők háttere |
| **Sötét barna** | `#3D3229` | Fő szöveg szín, footer háttér |
| Világos barna | `#6B5E52` | Másodlagos szöveg |
| Fehér | `#FFFFFF` | Kártya hátterek |

---

## Tipográfia

| Elem | Font | Méret | Súly | Megjegyzés |
|---|---|---|---|---|
| H1 (hero) | Playfair Display | clamp(2.5rem, 5vw, 4rem) | 400 | Elegáns, lélegző |
| H2 (szekció címek) | Playfair Display | clamp(2rem, 4vw, 3rem) | 400 | |
| H3 (alcímek) | Playfair Display | 1.5rem | 400 | |
| Subtitle/label | Inter | 0.85rem | 600 | Uppercase, 3px letter-spacing |
| Body | Inter | 1rem (16px) | 400 | line-height: 1.7 |
| Button | Inter | 0.9rem | 600 | Uppercase, 1px letter-spacing |
| Small/caption | Inter | 0.85rem | 400 | |

---

## Képek használata

- **Hero szekció**: Naplemente/tengerparti kép háttérként vagy vizuális elemként
- **Rólam szekció**: Meditáló nő fotó – a jelenlegi SVG placeholder helyére
- **Képstílus**: Enyhe warm-tone overlay az egységes megjelenés érdekében
- **Formátum**: WebP elsődlegesen, fallback JPG
- **Lazy loading**: Minden kép a fold alatt

---

## Kapcsolatfelvételi form

- **Megoldás**: EmailJS integráció (szerver nélküli, kliens oldali email küldés)
- **Cél email**: delizsofia108@gmail.com
- **Mezők**: Név (kötelező), Email (kötelező, validált), Szolgáltatás (dropdown), Üzenet (kötelező)
- **Validáció**: Kötelező mezők jelölése, email formátum ellenőrzés, valós idejű hibaüzenetek
- **Visszajelzés**: Sikeres küldés → zsálya zöld üzenet, hiba → terrakotta üzenet
- **Spam védelem**: Honeypot mező (rejtett mező, amit bot tölt ki)

---

## Mobil-specifikus UX

| Szempont | Döntés |
|---|---|
| **Megközelítés** | Mobile-first design |
| **Breakpointok** | 480px (mobil), 768px (tablet), 1024px (desktop) |
| **Navigáció** | Hamburger menü → teljes képernyős overlay |
| **Hero** | Egy oszlopos layout, badge-ek kisebb méretben |
| **Kártyák** | Teljes szélességű, egymás alatt |
| **CTA gombok** | Teljes szélesség mobilon |
| **Sticky CTA** | „Időpontfoglalás" gomb alul rögzítve mobilon |
| **Képek** | Adaptív méret, lazy loading |
| **Touch targets** | Minimum 44×44px minden interaktív elem |
| **Form inputok** | Nagyobb méret, megfelelő input type (email, tel) |

---

## Árlista oldal

- **Route**: `/arlista` – önálló oldal, nem landing page szekció
- **Navigáció**: Új „Árak" menüpont a headerben
- **Layout**: Szolgáltatásonkénti kártyák árakkal, időtartammal és rövid leírással
- **Design**: Meglévő kártya stílus továbbvitele (20px border-radius, hover effekt)
- **CTA**: Minden szolgáltatáskártyánál „Időpontfoglalás" gomb
- **Reszponzív**: Mobilon teljes szélességű kártyák egymás alatt

---

## Core User Experience

### Meghatározó élmény

A Shanti oldal két egyenrangú fő felhasználói akciót szolgál:
1. **Online időpontfoglalás** – A látogató a lehető legkevesebb lépésben tudjon időpontot kérni
2. **Árlista megtekintése** – Átlátható, önálló szekció, nem a szolgáltatásleírásba ágyazva

Minden szekció (hero, szolgáltatások, rólam, vélemények) ezekre a pillanatokra épít – bizalmat épít, hogy a látogató végül foglaljon vagy tájékozódjon az árakról.

### Platform stratégia

- **Platform**: Reszponzív web (Angular), mobile-first megközelítés
- **Forgalmi források**: Google keresés, Instagram, szájhagyomány
- **SEO fókusz**: Lokális keresés (Biatorbágy, Budaörs, Herceghalom + holisztikus terápia kulcsszavak)
- **Instagram integráció**: Link az oldalra, konzisztens vizuális világ az Insta tartalmakkal
- **Offline**: Nem szükséges

### Erőfeszítés nélküli interakciók

- **Időpontfoglalás**: Maximum 3 lépés – szolgáltatás kiválasztása → kapcsolatfelvételi form kitöltése → küldés. Minden oldalról elérhető a sticky CTA-n keresztül.
- **Árlista**: Egy kattintás a navigációból, azonnal átlátható kártya-layout. Nem kell keresgélni.
- **Kapcsolatfelvétel választása**: A felhasználó eldöntheti, hogy emailben vagy telefonon szeretne választ kapni (form mező: „Hogyan keresselek?")
- **Mobil navigáció**: Az oldal bármely pontjáról 1 kattintásra van az időpontfoglalás

### Kritikus sikerpillanatok

| Pillanat | Leírás | Hogyan érjük el |
|---|---|---|
| **Első benyomás** | A látogató megérkezik → azonnal érzi a nyugalmat | Meleg fotók, természetes színek, lélegző layout |
| **Bizalomépítés** | „Ez a terapeuta hiteles és tapasztalt" | Valódi fotók, vendégvélemények, 10+ év tapasztalat badge |
| **Ár átláthatóság** | „Pontosan tudom, mire számíthatok" | Önálló árlista szekció, tiszta kártya design |
| **Foglalás könnyedsége** | „Ez gyors volt és egyszerű" | Rövid form, azonnali visszajelzés küldés után |

### Élmény-alapelvek

1. **Nyugalom első** – Minden vizuális és interakciós döntés a belső béke érzetét erősíti. Nincs zsúfoltság, nincs agresszív CTA.
2. **Átláthatóság** – Árak, szolgáltatások, elérhetőség – semmi rejtett. A bizalom az átláthatóságból ered.
3. **Minimális erőfeszítés** – Időpontfoglalás és árlista megtekintése egyaránt 1-3 lépésen belül elérhető bármely oldalról.
4. **Személyes kapcsolat** – Az oldal nem automatizált rendszert közvetít, hanem egy valódi ember személyes figyelmét. A válasz emailben vagy visszahívással érkezik – a látogató választ.
