import { IPlace } from './../models/place.model'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import * as placesActions from '../actions/place.actions'
import { AngularFirestore } from '@angular/fire/firestore'
import { map, switchMap, catchError } from 'rxjs/operators'
import { from, of, EMPTY } from 'rxjs'

@Injectable()
export class PlaceEffects {

  selectedPlace: IPlace

  constructor(private actions$: Actions, private afs: AngularFirestore) { }


  @Effect()

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
  loadPlacesInit = this.actions$.pipe(
    ofType(placesActions.PlaceActionTypes.InitLoadPlaces),
    switchMap((payload: any) => this.afs.collection<IPlace>(`places`).valueChanges()),
    map((res) => {
      console.log(res)
      return new placesActions.LoadPlaces({ places: res })
    }),
    catchError(error => of(new placesActions.AddPlaceFailure({ place: { ...this.selectedPlace, error } })))
  )
}
