import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { concatMap, switchMap, map, catchError } from 'rxjs/operators'
import { EMPTY, forkJoin, of, combineLatest } from 'rxjs'
import * as resourcesActions from '../actions/resources.actions'
import { AngularFirestore } from '@angular/fire/firestore'
import { IPlaceType, IAmenity, IFacility } from '../models/resources.model'



@Injectable()
export class ResourcesEffects {


  @Effect()
  loadResourcess$ = this.actions$.pipe(
    ofType(resourcesActions.ResourcesActionTypes.LoadResources),
    switchMap(() => {
      console.log('heyy dude')
      const sources = [
        this.afs.collection<IPlaceType>(`propertyTypes`).valueChanges(),
        this.afs.collection<IAmenity>(`amenities`).valueChanges(),
        this.afs.collection<IFacility>(`facilities`).valueChanges(),
      ]
      return combineLatest(sources)
    }),
    map((res: any) => {
      return new resourcesActions.LoadResourcesSuccess({
        placesTypes: res[0],
        amenities: res[1],
        facilities: res[2]
      })
    }),
    catchError(err => of(new resourcesActions.LoadResourcesFail(err))) // this means api failure
  )


  constructor(private actions$: Actions<resourcesActions.ResourcesActions>, private afs: AngularFirestore) { }

}
