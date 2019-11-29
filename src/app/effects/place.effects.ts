import { IPlace } from './../models/place.model'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import * as placesActions from '../actions/place.actions'
import { AngularFirestore } from '@angular/fire/firestore'
import { map, switchMap, catchError, zip } from 'rxjs/operators'
import { from, of, EMPTY, combineLatest, merge, forkJoin } from 'rxjs'
import { AngularFireStorage } from '@angular/fire/storage'
import { IUser } from '../models/user.model'
import { IBooking } from '../models/booking.model'
import * as moment from 'moment'
@Injectable()
export class PlaceEffects {

  selectedPlace: IPlace

  constructor(private actions$: Actions, private afs: AngularFirestore, private storage: AngularFireStorage) { }


  @Effect()
  deletePlaceImage$ = this.actions$.pipe(
    ofType(placesActions.PlaceActionTypes.DeletePlaceImage),
    switchMap((action: any) => {
      return this.storage.storage.refFromURL(action.url).delete()
    }),
    map((v) => {
      return new placesActions.UpdatePlaceSuccess()
    }),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    catchError(() => EMPTY)
  )


  @Effect()
  addPlace = this.actions$.pipe(
    ofType(placesActions.PlaceActionTypes.AddPlace),
    map((action: any) => {
      this.selectedPlace = action.payload.place
      return action.payload
    }),
    switchMap((payload: any) => from(this.afs.doc(`/places/${payload.place.id}`).set(payload.place, { merge: true }))),
    map(() => new placesActions.AddPlaceSuccess({ place: this.selectedPlace })),
    catchError(error => of(new placesActions.AddPlaceFailure({ place: { ...this.selectedPlace, error } })))
  )

  @Effect()
  updatePlace = this.actions$.pipe(
    ofType(placesActions.PlaceActionTypes.UpdatePlace),
    switchMap((payload: any) => {
      const place = payload.payload.place
      return from(this.afs.doc(`/places/${place.id}`).update(place.changes))
    }),
    map(() => new placesActions.UpdatePlaceSuccess()),
    catchError(error => of(new placesActions.UpdatePlaceFailure({ place: { ...this.selectedPlace, error } })))
  )

  @Effect()
  loadPlacesInit = this.actions$.pipe(
    ofType(placesActions.PlaceActionTypes.InitLoadPlaces),
    switchMap((payload: any) => this.afs.collection<IPlace>(`places`).valueChanges()),
    map((res) => {
      return new placesActions.LoadPlaces({ places: res })
    }),
    catchError(error => of(new placesActions.AddPlaceFailure({ place: { ...this.selectedPlace, error } })))
  )


  @Effect()
  GetPlaceDetails = this.actions$.pipe(
    ofType<placesActions.GetPlaceDetails>(placesActions.PlaceActionTypes.GetPlaceDetails),
    switchMap((payload) => {
      const place = payload.place
      const resources = [
        this.afs.doc<IUser>(`users/${place.creatorId}`).valueChanges(),
        of(place),
        this.afs.collection<any>(`bookings`, ref => {
          return ref.where('placeId', '==', place.id)
        }).valueChanges(),
      ]
      return combineLatest(resources)
    }),
    map((res: any) => {
      console.log(res)
      return new placesActions.UpdateCurrentPlace({ host: res[0], ...res[1], bookings: res[2] })
    }),
    catchError(error => EMPTY)
  )


}
