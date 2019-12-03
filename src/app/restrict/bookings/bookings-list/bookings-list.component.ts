import { AddNewBookingComponent } from './../../../app-shared/add-new-booking/add-new-booking.component'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IBooking } from 'src/app/models/booking.model'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { bookingSelector } from 'src/app/selectors'
import * as bookingsActions from 'src/app/actions/booking.actions'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'dahab-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss']
})
export class BookingsListComponent implements OnInit {
  bookings$: Observable<IBooking[]>
  isLoading$: Observable<boolean>

  constructor(private store: Store<AppState>, private matDialog: MatDialog) {
    this.bookings$ = this.store.select(bookingSelector.selectAllBookings)
  }

  ngOnInit() {
    this.store.dispatch(new bookingsActions.LoadBookingsInit())
  }

  addNewBookingModal() {
    this.matDialog.open(AddNewBookingComponent).afterClosed().subscribe((res) => {
      console.log(res)
    })
  }

}
