import { AngularFirestore } from '@angular/fire/firestore'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import * as bookingsActions from '../actions/booking.actions'
import { withLatestFrom, filter, exhaustMap, map, switchMap, catchError } from 'rxjs/operators'
import { AppState } from '../reducers'
import { Store } from '@ngrx/store'
import { bookingSelector } from '../selectors'
import { IBooking } from '../models/booking.model'
import { from, of } from 'rxjs'

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

  currentBooking: IBooking
  @Effect()
  addPlace = this.actions$.pipe(
    ofType<bookingsActions.AddBooking>(bookingsActions.BookingActionTypes.AddBooking),
    map((action) => {
      this.currentBooking = action.payload.booking
      return action.payload.booking
    }),
    switchMap((booking) => from(this.afs.doc(`/bookings/${booking.id}`).set(booking, { merge: true }))),
    map((res) => {
      return new bookingsActions.AddBookingSuccess({ booking: { ...this.currentBooking, error: null } })
    }),
    catchError(error => of(new bookingsActions.AddBookingFailure({ booking: { ...this.currentBooking, error } })))
  )

  // @Effect()
  // updatePlace = this.actions$.pipe(
  //   ofType(bookingsActions.BookingActionTypes.UpdatePlace),
  //   switchMap((payload: any) => {
  //     const place = payload.payload.place
  //     return from(this.afs.doc(`/places/${place.id}`).update(place.changes))
  //   }),
  //   map(() => new bookingsActions.UpdatePlaceSuccess()),
  //   catchError(error => of(new bookingsActions.UpdatePlaceFailure({ place: { ...this.selectedPlace, error } })))
  // )

}
