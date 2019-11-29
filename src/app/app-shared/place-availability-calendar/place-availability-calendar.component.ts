import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import * as moment from 'moment'
@Component({
  selector: 'dahab-place-availability-calendar',
  templateUrl: './place-availability-calendar.component.html',
  styleUrls: ['./place-availability-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceAvailabilityCalendarComponent implements OnInit {
  today: Date = new Date()
  maxDate = new Date()
  calendarConfig = {
    minDate: moment().toDate(),
    maxDate: moment().add(1, 'year').toDate()
  }

  @Input() place: IPlace
  constructor() { }

  ngOnInit() {
    this.maxDate.setDate(this.maxDate.getFullYear() + 1)
  }

}
