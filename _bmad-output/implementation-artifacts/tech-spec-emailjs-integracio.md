---
title: 'EmailJS Integráció – Kapcsolatfelvételi Forma'
slug: 'emailjs-integracio'
created: '2026-03-19'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['Angular 21', 'TypeScript', 'SCSS', '@emailjs/browser', 'ReactiveFormsModule']
files_to_modify:
  - 'src/app/components/contact/contact.ts'
  - 'src/app/components/contact/contact.html'
  - 'src/app/components/contact/contact.scss'
code_patterns: ['Angular standalone components', 'CSS Custom Properties', 'SCSS nesting']
test_patterns: []
---

# Tech-Spec: EmailJS Integráció – Kapcsolatfelvételi Forma

**Created:** 2026-03-19

## Overview

### Problem Statement

A contact form HTML layoutja kész, de a `Contact` komponens TypeScript osztálya teljesen üres – nincs beküldési logika, nincs validáció, és az emailek nem jutnak el sehová. A felhasználó jelenleg kitöltheti a formot, de a "Üzenet küldése" gombra kattintva nem történik semmi.

### Solution

Az `@emailjs/browser` csomag telepítésével és Angular Reactive Forms bekötésével a form valódi emaileket küld a `delizsofia108@gmail.com` címre. Betöltés / siker / hiba állapotkezeléssel, és „Nem gond, hívj fel" fallback megjelenítéssel hiba esetén.

### Scope

**In Scope:**
- `@emailjs/browser` npm csomag telepítése
- `contact.ts` – ReactiveFormsModule, validáció, küldési logika, állapotkezelés
- `contact.html` – reaktív form kötések, loading/success/error üzenetek
- `contact.scss` – visszajelzés állapotok stílusai
- EmailJS credentials bekötése (service_ap48rjr / template_dr9bwbh / public key)

**Out of Scope:**
- EmailJS fiók konfigurálása
- Árlista oldal
- Sticky CTA
- Egyéb komponensek módosítása

## Context for Development

### Codebase Patterns

- **Angular 21 standalone components** – minden komponens `imports: []` tömbben kapja a függőségeit, nem NgModule
- **CSS Custom Properties** – `var(--color-terracotta)`, `var(--color-beige-light)` stb., globálisan definiálva `src/styles.scss`-ben
- **SCSS nesting** – a komponensek saját `.scss` fájlt használnak, `BEM`-szerű osztálynevekkel
- **Nincs HttpClientModule** – emailjs browser csomag maga kezeli a HTTP hívást, nem kell Angular service
- **Nincs meglévő form logika** – clean slate, nem kell meglévő patternt követni

### EmailJS Credentials

| Kulcs | Érték |
|-------|-------|
| Service ID | `service_ap48rjr` |
| Template ID | `template_dr9bwbh` |
| Public Key | `3LXVLmoGpS0KxtWce` |
| Célcím | `delizsofia108@gmail.com` |

### EmailJS Template mezők (a dashboardon be kell állítani)

A template-ben ezeket a változóneveket KELL használni (pontosan így):
- `{{from_name}}` – feladó neve
- `{{from_email}}` – feladó email
- `{{service}}` – választott szolgáltatás
- `{{message}}` – üzenet szövege

### Files to Reference

| File | Purpose |
|------|---------|
| `src/app/components/contact/contact.ts` | **MÓDOSÍTANDÓ** – jelenleg üres osztály |
| `src/app/components/contact/contact.html` | **MÓDOSÍTANDÓ** – form kötések hozzáadása |
| `src/app/components/contact/contact.scss` | **MÓDOSÍTANDÓ** – success/error stílusok |
| `src/styles.scss` | Referencia – CSS custom properties értékei |
| `src/app/app.config.ts` | Referencia – standalone app config, nincs HttpClient |

### Technical Decisions

1. **`@emailjs/browser` npm csomag** – nem CDN script tag, hanem npm import, mert Angular build pipeline ezt kezeli jobban
2. **ReactiveFormsModule** – nem template-driven forms, mert validációt programozottan kell kezelni
3. **Inline credentials a TS fájlban** – nem environment fájlban, mert a public key eleve publikus (client-side), és az oldal nem igényel CI/CD pipeline-t
4. **`emailjs.init()` az `ngOnInit`-ban** – nem app szinten, mert csak ez a komponens használja

## Implementation Plan

### Tasks

- [ ] Task 1: `@emailjs/browser` csomag telepítése
  - File: `package.json` (npm parancs, nem kézi szerkesztés)
  - Action: `npm install @emailjs/browser` futtatása a terminálban
  - Notes: Verzió: legújabb stabil; a csomag maga tartalmaz TypeScript típusdefiníciókat

- [ ] Task 2: `contact.ts` – ReactiveFormsModule import és form felépítése
  - File: `src/app/components/contact/contact.ts`
  - Action:
    - Import: `ReactiveFormsModule` az `imports` tömbbe
    - Import: `FormBuilder`, `FormGroup`, `Validators` az `@angular/forms`-ból
    - Import: `emailjs` az `@emailjs/browser`-ből
    - Import: `OnInit` az `@angular/core`-ból
    - Az osztályban `implements OnInit`
    - `ngOnInit()`-ban: `emailjs.init('3LXVLmoGpS0KxtWce')`
    - `FormGroup` létrehozása 4 mezővel: `name` (required), `email` (required, email), `service` (required), `message` (required, minLength 10)
    - Állapotváltozók: `isLoading = false`, `isSuccess = false`, `isError = false`
    - `onSubmit()` metódus: validáció ellenőrzés, loading állapot, emailjs.send() hívás, success/error kezelés

- [ ] Task 3: `contact.ts` – `onSubmit()` metódus implementálása
  - File: `src/app/components/contact/contact.ts`
  - Action: Az `onSubmit()` metódus az alábbi logikával:
    ```typescript
    async onSubmit() {
      if (this.contactForm.invalid) {
        this.contactForm.markAllAsTouched();
        return;
      }
      this.isLoading = true;
      this.isError = false;
      try {
        await emailjs.send('service_ap48rjr', 'template_dr9bwbh', {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          service: this.contactForm.value.service,
          message: this.contactForm.value.message,
        });
        this.isSuccess = true;
        this.contactForm.reset();
      } catch {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    }
    ```

- [ ] Task 4: `contact.html` – reaktív form kötések hozzáadása
  - File: `src/app/components/contact/contact.html`
  - Action:
    - `<form>` elemre: `[formGroup]="contactForm"` és `(ngSubmit)="onSubmit()"` (a jelenlegi `(submit)` eltávolítandó)
    - Minden `<input>`, `<select>`, `<textarea>` elemre: `formControlName="NAME"` hozzáadása
    - Minden mező alá validációs hibaüzenet div: csak akkor látható, ha mező `invalid && touched`
    - Gomb: `[disabled]="isLoading"` és loading szöveg váltás
    - Success üzenet blokk: `*ngIf="isSuccess"`
    - Error üzenet blokk: `*ngIf="isError"` – tartalmaz telefonszámot fallback-ként

- [ ] Task 5: `contact.html` – success és error üzenet blokkok
  - File: `src/app/components/contact/contact.html`
  - Action:
    - Success blokk (form után, vagy form helyett): zsálya zöld háttér, „Köszönöm az üzeneted! 4 órán belül válaszolok. 💚" szöveg
    - Error blokk (form felett, toast-szerűen): terrakotta szín, „Valami hiba történt. Nem gond, hívj fel: +36 30 123 4567" szöveg (placeholder szám – Zsófi cserélje le!)
    - `@if` szintaxis (Angular 17+ control flow, nem `*ngIf`)

- [ ] Task 6: `contact.scss` – visszajelzés állapotok stílusai
  - File: `src/app/components/contact/contact.scss`
  - Action:
    - `.form-success` osztály: `background: var(--color-sage)`, `color: white`, `padding: 20px 24px`, `border-radius: 14px`, `text-align: center`
    - `.form-error` osztály: `background: var(--color-terracotta)`, `color: white`, `padding: 16px 20px`, `border-radius: 10px`, `margin-bottom: 20px`
    - `.field-error` osztály (validációs hibaüzenetek): `color: var(--color-terracotta)`, `font-size: 0.8rem`, `margin-top: 4px`
    - Input fókusz stílus: `border-color: var(--color-terracotta)`, `outline: none`, `box-shadow: 0 0 0 3px rgba(193, 123, 94, 0.15)`
    - Disabled gomb: `opacity: 0.7`, `cursor: not-allowed`

### Acceptance Criteria

- [ ] AC 1: Given a teljesen kitöltetlen form, when a felhasználó rákattint a "Üzenet küldése" gombra, then az összes kötelező mező pirossal kiemelt hibaüzenettel jelenik meg és az email NEM kerül elküldésre.

- [ ] AC 2: Given érvénytelen email cím van megadva (pl. "nem-email"), when a felhasználó elhagyja az email mezőt, then „Kérlek adjon meg érvényes email címet" hibaüzenet jelenik meg a mező alatt.

- [ ] AC 3: Given az összes mező helyesen kitöltve, when a felhasználó elküldi a formot, then a gomb „Küldés..." feliratú és disabled állapotba kerül amíg a kérés fut.

- [ ] AC 4: Given az összes mező helyesen kitöltve és az EmailJS sikeresen elküldi az emailt, when a küldés befejeződik, then a form eltűnik és zöld „Köszönöm az üzeneted! 4 órán belül válaszolok. 💚" üzenet jelenik meg, a `delizsofia108@gmail.com` postaládájába megérkezik az email.

- [ ] AC 5: Given az összes mező helyesen kitöltve, when az EmailJS hálózati hibával tér vissza, then terrakotta színű hibaüzenet jelenik meg a form felett telefonszám fallback-kel, a form kitöltve marad (nem reseteléodik hiba esetén).

- [ ] AC 6: Given a form sikeresen elküldve (success állapot), when a felhasználó újra látni akarja a formot, then az oldal újratöltése visszaállítja az eredeti üres formot.

## Additional Context

### Dependencies

- `@emailjs/browser` npm csomag – telepítendő
- EmailJS fiók konfigurálva: service_ap48rjr (Gmail bekötve), template_dr9bwbh (mezők: from_name, from_email, service, message)
- Angular `ReactiveFormsModule` – már elérhető az `@angular/forms` csomagban (már telepítve)

### Testing Strategy

Manuális tesztelés sorrendben:
1. Kitöltetlen form beküldése → validációs hibák megjelennek (AC 1)
2. Hibás email cím → mező elhagyáskor hibaüzenet (AC 2)
3. Helyes adatokkal beküldés → loading állapot látható (AC 3)
4. Sikeres küldés → success üzenet + email megérkezett (AC 4)
5. DevTools → Network → Offline → beküldés → error fallback (AC 5)

### Notes

- **FONTOS**: A `+36 30 123 4567` telefonszám placeholder – Zsófi cserélje le a valódira a `contact.html`-ben (Task 5)
- **FONTOS**: Az `info@shanti-terapia.hu` email cím szintén placeholder a contact info kártyában
- Angular 17+ `@if` / `@for` control flow szintaxist használunk `*ngIf` helyett
- Az EmailJS public key kliens oldali – nem kell `.env` fájlba elrejteni, ez szándékos
- Ha a template változónevei eltérnek az EmailJS dashboardon beállítottaktól, az email küldés sikeres lesz, de üres mezőkkel érkezik – pontosan egyeznie kell
