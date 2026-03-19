import { Component, HostListener, inject, signal } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  scrolled = signal(false);
  mobileMenuOpen = signal(false);
  bookingService = inject(BookingService);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  openBooking() {
    this.closeMobileMenu();
    this.bookingService.open();
  }
}
