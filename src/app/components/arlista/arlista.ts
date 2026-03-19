import { Component } from '@angular/core';

@Component({
  selector: 'app-arlista',
  imports: [],
  templateUrl: './arlista.html',
  styleUrl: './arlista.scss',
})
export class Arlista {
  services = [
    {
      title: 'Hawaii Lomi Lomi Masszázs',
      duration: '90 perc',
      price: '18 000 Ft',
      image: '1000_1695124318.jpeg',
      recommendation: 'Neked ajánlom, ha feszültséget érzel a testedben és szeretnéd elengedni',
      includes: [
        'Teljes test masszázs',
        'Ritmikus, áramló mozdulatokkal',
        'Mély ellazulás és energetikai egyensúly',
        'Személyre szabott kezelés',
      ],
    },
    {
      title: 'Kineziológia',
      duration: '60–90 perc',
      price: '16 000 Ft',
      image: '1000_1767853125.jpeg',
      recommendation: 'Neked ajánlom, ha szeretnéd megérteni a stressz mélyebb okait',
      includes: [
        'Izomtesztelésen alapuló vizsgálat',
        'Testi-lelki egyensúlyzavarok feltárása',
        'Korrekciós technikák',
        'Utánkövetési javaslat',
      ],
    },
    {
      title: 'Energetikai Kezelés',
      duration: '60 perc',
      price: '14 000 Ft',
      image: '1000_1695124318.jpeg',
      recommendation: 'Neked ajánlom, ha kimerültnek érzed magad és szeretnéd visszanyerni az energiádat',
      includes: [
        'Finom energetikai technikák',
        'Energiaáramlás helyreállítása',
        'Öngyógyító folyamatok támogatása',
        'Mélyreható harmónia',
      ],
    },
    {
      title: 'Holisztikus Tanácsadás',
      duration: '45 perc',
      price: '10 000 Ft',
      image: '1000_1767853125.jpeg',
      recommendation: 'Neked ajánlom, ha úgy érzed, elakadtál és új perspektívára van szükséged',
      includes: [
        'Személyre szabott konzultáció',
        'Testi üzenetek értelmezése',
        'Egyéni jóllét terv kidolgozása',
        'Gyakorlati tanácsok',
      ],
    },
  ];
}
