import { Component, inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  bookingService = inject(BookingService);
}
