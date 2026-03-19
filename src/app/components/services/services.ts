import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
        <path d="M32 12C32 12 18 24 18 34C18 44 32 52 32 52C32 52 46 44 46 34C46 24 32 12 32 12Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.1"/>
        <circle cx="32" cy="32" r="6" stroke="currentColor" stroke-width="1.5"/>
      </svg>`,
      title: 'Hawaii Lomi Lomi Masszázs',
      description: 'Az ősi hawaii gyógyító masszázs, amely mély ellazulást és energetikai egyensúlyt teremt. Ritmikus, áramló mozdulatokkal oldja a testi és lelki feszültségeket.',
      duration: '90 perc',
      price: 'Egyéni árazás'
    },
    {
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="20" r="8" stroke="currentColor" stroke-width="1.5"/>
        <path d="M20 52V44C20 38 25 33 32 33C39 33 44 38 44 44V52" stroke="currentColor" stroke-width="1.5"/>
        <path d="M32 33V52" stroke="currentColor" stroke-width="1" opacity="0.4"/>
        <path d="M24 42H40" stroke="currentColor" stroke-width="1" opacity="0.4"/>
      </svg>`,
      title: 'Kineziológia',
      description: 'Az izomtesztelésen alapuló módszer feltárja a testi-lelki egyensúlyzavarokat, és segít megtalálni a megfelelő korrekciós technikákat az egyensúly helyreállításához.',
      duration: '60-90 perc',
      price: 'Egyéni árazás'
    },
    {
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8L36 24H52L39 34L43 50L32 40L21 50L25 34L12 24H28L32 8Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.1"/>
      </svg>`,
      title: 'Energetikai Kezelés',
      description: 'Finom energetikai technikákkal segítem a tested öngyógyító folyamatait. A kezelés során helyreáll az energiaáramlás és mélyreható harmónia jön létre.',
      duration: '60 perc',
      price: 'Egyéni árazás'
    },
    {
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="32" cy="32" r="8" stroke="currentColor" stroke-width="1" opacity="0.5"/>
        <circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>
        <line x1="32" y1="8" x2="32" y2="16" stroke="currentColor" stroke-width="1"/>
        <line x1="32" y1="48" x2="32" y2="56" stroke="currentColor" stroke-width="1"/>
        <line x1="8" y1="32" x2="16" y2="32" stroke="currentColor" stroke-width="1"/>
        <line x1="48" y1="32" x2="56" y2="32" stroke="currentColor" stroke-width="1"/>
      </svg>`,
      title: 'Holisztikus Tanácsadás',
      description: 'Személyre szabott tanácsadás, amely segít megérteni tested üzeneteit. Együtt dolgozunk ki egy tervet a testi-lelki jóllét eléréséhez.',
      duration: '45 perc',
      price: 'Egyéni árazás'
    }
  ];
}
