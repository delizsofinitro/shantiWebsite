---
stepsCompleted: [1, 2]
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
