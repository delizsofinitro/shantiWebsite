import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {
  isOpen = signal(false);
  selectedService = signal('');

  // foglalt időpontok – itt cserélhető valódi backend hívásra
  private readonly bookedSlots: Record<string, string[]> = {
    '2026-03-20': ['10:00', '11:00', '14:00', '15:00'],
    '2026-03-21': ['09:00', '13:00', '17:00', '18:00'],
    '2026-03-22': ['12:00'],
    '2026-03-23': ['12:00'],
    '2026-03-24': ['09:00', '10:00', '14:00'],
    '2026-03-25': ['09:00', '10:00', '11:00', '12:00', '13:00'],
    '2026-03-26': ['10:00', '14:00', '16:00'],
    '2026-03-27': ['09:00', '11:00', '15:00'],
  };

  getBookedSlots(date: string): string[] {
    return this.bookedSlots[date] ?? [];
  }

  open(service = '') {
    this.selectedService.set(service);
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }
}
