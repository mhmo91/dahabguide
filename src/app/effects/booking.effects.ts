import { AngularFirestore } from '@angular/fire/firestore'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import * as bookingsActions from '../actions/booking.actions'
import { withLatestFrom, filter, exhaustMap, map } from 'rxjs/operators'
import { AppState } from '../reducers'
import { Store } from '@ngrx/store'
import { bookingSelector } from '../selectors'
import { IBooking } from '../models/booking.model'

@Injectable()
export class BookingEffects {



  constructor(private actions$: Actions, private afs: AngularFirestore) { }

  @Effect()
  loadBookingsInit$ = this.actions$.pipe(
    ofType<bookingsActions.LoadBookingsInit>(bookingsActions.BookingActionTypes.LoadBookingsInit),
    // Don't load if we've already loaded.
    // withLatestFrom(this.store.select(bookingSelector.getBookingsFeature)),
    // we can use this filter later to avoid subscribing if the app is offline
    // filter((res: any) => {
    //   console.log(res)
    //   return true if i'm online
    // }),
    // Don't handle more than one load request at a time.
    exhaustMap(() => this.afs.collection<IBooking>(`bookings`).valueChanges().pipe(
      map(result => {
        console.log(result)
        return new bookingsActions.LoadBookings({ bookings: result, subscribed: true })
      })
    ))
  )

}
