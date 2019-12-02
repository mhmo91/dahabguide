import { BookingMinionService } from './../services/booking-minion.service';
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import * as moment from 'moment'
import { IBooking, RentalTypes } from 'src/app/models/booking.model'
@Component({
  selector: 'dahab-place-availability-calendar',
  templateUrl: './place-availability-calendar.component.html',
  styleUrls: ['./place-availability-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceAvailabilityCalendarComponent implements OnInit {
  today: Date = new Date()
  calendarConfig = {
    minDate: moment().toDate(),
    maxDate: moment().add(1, 'year').toDate()
  }
  @Input() place: IPlace
  constructor(public bookingMinion: BookingMinionService) { }

  ngOnInit() {
  }

}
