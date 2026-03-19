import { Component, OnInit, OnDestroy, inject, signal, effect, HostListener } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-idopont',
  imports: [ReactiveFormsModule],
  templateUrl: './idopont.html',
  styleUrl: './idopont.scss',
})
export class IdopontModal implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  bookingService = inject(BookingService);

  bookingForm!: FormGroup;
  isLoading = false;
  isSuccess = false;
  isError = false;
  selectedDate = signal('');

  readonly services = [
    'Hawaii Lomi Lomi Masszázs',
    'Kineziológia',
    'Energetikai Kezelés',
    'Holisztikus Tanácsadás',
  ];

  readonly weekdaySlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00',
  ];
  readonly saturdaySlots = ['09:00', '10:00', '11:00', '12:00', '13:00'];

  private localDay(dateStr: string): number {
    return new Date(dateStr + 'T12:00:00').getDay();
  }

  get slotItems(): { slot: string; available: boolean }[] {
    const dateStr = this.selectedDate();
    if (!dateStr) return [];
    const day = this.localDay(dateStr);
    if (day === 0) return []; // #3: vasárnap nincs slot
    const allSlots = day === 6 ? this.saturdaySlots : this.weekdaySlots;
    const booked = this.bookingService.getBookedSlots(dateStr);
    return allSlots.map(slot => ({ slot, available: !booked.includes(slot) }));
  }

  get hasAnyFreeSlot(): boolean {
    return this.slotItems.some(s => s.available);
  }

  get minDate() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  constructor() {
    effect(() => {
      // #2: selectedService változáskor is resetelünk, nem csak isOpen változáskor
      const service = this.bookingService.selectedService();
      const isOpen = this.bookingService.isOpen();
      if (isOpen && this.bookingForm) {
        this.bookingForm.get('service')?.setValue(service);
        this.isSuccess = false;
        this.isError = false;
        this.selectedDate.set('');
        this.bookingForm.get('date')?.reset();
        this.bookingForm.get('time')?.reset();
      }
    });
  }

  ngOnDestroy() {
    // #5: overflow cleanup ha a komponens dialog közben megsemmisül
    document.body.style.overflow = '';
  }

  ngOnInit() {
    emailjs.init('3LXVLmoGpS0KxtWce');
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: [this.bookingService.selectedService(), Validators.required],
      date: ['', [Validators.required, this.notSundayValidator]],
      time: ['', Validators.required],
      note: [''],
    });
  }

  notSundayValidator(control: AbstractControl) {
    if (!control.value) return null;
    // #1: T12:00:00 hogy helyi napot kapjuk, ne UTC-t
    const day = new Date(control.value + 'T12:00:00').getDay();
    return day === 0 ? { sunday: true } : null;
  }

  selectTime(slot: string) {
    // #4: availability guard – csak szabad slotot fogadunk el
    const isAvailable = this.slotItems.find(i => i.slot === slot)?.available;
    if (!isAvailable) return;
    this.bookingForm.get('time')?.setValue(slot);
    this.bookingForm.get('time')?.markAsTouched();
  }

  onDateChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.selectedDate.set(value);
    this.bookingForm.get('time')?.reset();
  }

  @HostListener('document:keydown.escape')
  close() {
    this.bookingService.close();
  }

  async onSubmit() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.isError = false;
    const { name, email, phone, service, date, time, note } = this.bookingForm.value;
    try {
      await emailjs.send('service_ap48rjr', 'template_dr9bwbh', {
        from_name: name,
        from_email: email,
        service,
        message: `📅 Foglalt időpont: ${date} – ${time}\n📞 Telefon: ${phone || '–'}\n💬 Megjegyzés: ${note || '–'}`,
      });
      this.isSuccess = true;
      // #6: service mezőt visszaállítjuk, hogy újrafoglaláskor ne legyen üres
      const currentService = this.bookingService.selectedService();
      this.bookingForm.reset();
      this.bookingForm.get('service')?.setValue(currentService);
      this.selectedDate.set('');
    } catch {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
