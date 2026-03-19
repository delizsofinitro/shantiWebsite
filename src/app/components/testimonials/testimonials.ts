import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = [
    {
      text: 'A Lomi Lomi masszázs után teljesen újjászülettem. Olyan mélyen tudtam elengedni a feszültségeimet, mint még soha. Azóta rendszeresen járok, és minden alkalom egy kis csoda.',
      name: 'Katalin',
      service: 'Lomi Lomi masszázs'
    },
    {
      text: 'A kineziológiai kezelések segítettek megérteni, honnan erednek a visszatérő fájdalmaim. Végre nemcsak a tüneteket kezelem, hanem az okokat is. Köszönöm a türelmes és figyelmes munkát!',
      name: 'Ágnes',
      service: 'Kineziológia'
    },
    {
      text: 'Először szkeptikus voltam, de már az első kezelés után éreztem a változást. A légkör csodálatos, és érzem, hogy valóban törődnek velem. Mindenkinek szívből ajánlom.',
      name: 'Eszter',
      service: 'Energetikai kezelés'
    }
  ];
}
