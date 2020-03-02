import { StayPeriods } from 'src/app/constants/bookings.enum'
import { BookingMinionService } from './../services/booking-minion.service'
import { bookingSelector, placesSelector } from 'src/app/selectors'
import { AngularFirestore } from '@angular/fire/firestore'
import { RentalTypes, IBooking } from 'src/app/models/booking.model'
import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet'
import { AppState } from 'src/app/reducers'
import { Store } from '@ngrx/store'
import * as bookingActions from 'src/app/actions/booking.actions'
import { Observable } from 'rxjs'
import { SnackbarService } from '../services/snackbar.service'
import { take, filter } from 'rxjs/operators'
import * as moment from 'moment'

@Component({
  selector: 'dahab-add-new-booking',
  templateUrl: './add-new-booking.component.html',
  styleUrls: ['./add-new-booking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddNewBookingComponent implements OnInit {
  stayPeriods = StayPeriods
  rentalTypes = RentalTypes
  addBookingForm: FormGroup
  id: string
  @Input() placeId: string
  @Input() creatorId: string
  currentBooking$: Observable<Partial<IBooking>>
  futureBookings: Array<IBooking>
  constructor(
    private store: Store<AppState>, private formBuilder: FormBuilder,
    private afs: AngularFirestore, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<AddNewBookingComponent>,
    private snackbar: SnackbarService,
    public bookingMinion: BookingMinionService
  ) {
    this.store.dispatch(new bookingActions.InitAddBooking())
    this.currentBooking$ = this.store.select(bookingSelector.getCurrentBooking)

    if (this.data) {
      this.placeId = data.placeId
      this.creatorId = data.creatorId
    }
    this.constructForm()
    this.id = this.afs.createId()
  }

  constructForm() {
    this.addBookingForm = this.formBuilder.group({
      rentalType: [this.rentalTypes.shortTerm, Validators.required],
      fromDate: [null, Validators.required],
      toDate: [null],
      stayPeriod: [null]
    })
  }
  ngOnInit() {

  }

  book(formValue) {
    this.store.dispatch(new bookingActions.AddBooking({
      booking: { ...formValue, id: this.id, creatorId: this.creatorId, placeId: this.placeId }
    }))

    this.currentBooking$.pipe(filter(b => b.id ? true : false)).subscribe((b: IBooking) => {
      if (b.saving) { return } // skip if it's still saving
      if (b.error) {
        this.snackbar.error('Something went wrong, please try again')

      } else {
        this.bottomSheetRef.dismiss()
        this.snackbar.success('We will process your request and get back to you the soonest')
      }
    })
  }

  // date range validation for short term rentals
  get maxDate() {
    const dateFrom = this.addBookingForm.get('fromDate').value
    if (dateFrom) {
      const dateRange = this.bookingMinion.dateRanges.find(dr => moment(dateFrom).isSameOrBefore(dr.to))
      return dateRange ? dateRange.from.toDate() : moment().add(1, 'y').toDate()
    } else {
      return moment().add(1, 'y').toDate()
    }
  }

}
