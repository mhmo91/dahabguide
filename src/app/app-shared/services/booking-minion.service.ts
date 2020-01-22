import { StayPeriods } from 'src/app/constants/bookings.enum'
import { Injectable } from '@angular/core'
import { IBooking, RentalTypes } from 'src/app/models/booking.model'
import * as moment from 'moment'
import { placesSelector } from 'src/app/selectors'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'

@Injectable({
  providedIn: 'root'
})
export class BookingMinionService {

  calendarConfig = {
    today: moment().toDate(),
    oneYearFromNow: moment().add(1, 'year').toDate()
  }

  // the work of this service is related and based ALWAYS AND ONLY on the currentPlace state
  futureBookings: Array<IBooking>
  constructor(private store: Store<AppState>) {
    this.store.select(placesSelector.getCurrentPlace).subscribe((currentPlace) => {
      this.futureBookings = currentPlace.bookings
    })
  }

  // return true only if date is not booked by someone else
  dateFilter = (d: Date): boolean => {
    if (this.futureBookings && Array.isArray(this.futureBookings)) {
      return !this.dateRanges.find(dateRange =>
        moment(d).isSameOrAfter(moment(dateRange.from))
        && moment(d).isSameOrBefore(moment(dateRange.to))
      )
    } else {
      return true
    }
  }

  longTermRentalEndDate = (booking: IBooking) => {
    switch (booking.stayPeriod) {
      case StayPeriods.upTo3Month:
        return moment.unix(booking.fromDate.seconds).add(3, 'M') // add three more months
      case StayPeriods.upTo6Month:
        return moment.unix(booking.fromDate.seconds).add(6, 'M') // add three more months
      case StayPeriods.upTo12Month:
      case StayPeriods.moreThan1Year:
        return moment.unix(booking.fromDate.seconds).add(12, 'M') // add three more months
      default:
        return moment.unix(booking.fromDate.seconds).add(12, 'M') // add three more months
    }
  }


  get dateRanges() {
    const dateRanges: Array<{ from: any, to: any }> = []
    this.futureBookings.forEach(b => {
      if (b.rentalType === RentalTypes.shortTerm) {
        dateRanges.push({
          from: moment.unix(b.fromDate.seconds).add(1, 'd'),
          to: moment.unix(b.toDate.seconds).add(-1, 'd'),
        })
      } else { // long term
        dateRanges.push({
          from: moment.unix(b.fromDate.seconds).add(1, 'd'),
          to: this.longTermRentalEndDate(b).add(-1, 'd'),
        })
      }
    })
    return dateRanges
  }

}
