import { bookingSelector } from 'src/app/selectors';
import { AngularFirestore } from '@angular/fire/firestore'
import { RentalTypes, IBooking } from 'src/app/models/booking.model'
import { Component, OnInit, Input, Inject } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet'
import { AppState } from 'src/app/reducers'
import { Store } from '@ngrx/store'
import * as bookingActions from 'src/app/actions/booking.actions'
import { Observable } from 'rxjs'
import { SnackbarService } from '../services/snackbar.service'
@Component({
  selector: 'dahab-add-new-booking',
  templateUrl: './add-new-booking.component.html',
  styleUrls: ['./add-new-booking.component.scss']
})
export class AddNewBookingComponent implements OnInit {
  today: Date = new Date()
  rentalTypes = RentalTypes
  addBookingForm: FormGroup
  id: string
  @Input() placeId: string
  @Input() creatorId: string
  currentBooking$: Observable<Partial<IBooking>>
  constructor(
    private store: Store<AppState>, private formBuilder: FormBuilder,
    private afs: AngularFirestore, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<AddNewBookingComponent>,
    private snackbar: SnackbarService
  ) {
    this.store.dispatch(new bookingActions.InitAddBooking())
    this.currentBooking$ = this.store.select(bookingSelector.getCurrentBooking)
    if (this.data) {
      console.log(this.data)
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

    this.currentBooking$.subscribe((b: IBooking) => {
      if (b.saving) { return } // skip if it's still saving
      if (b.error) {
        this.snackbar.error('Something went wrong, please try again', 'Dismiss')

      } else {
        this.bottomSheetRef.dismiss()
        this.snackbar.success('We will process your request and get back to you the soonest', 'Dismiss')
      }
    })
  }


}
