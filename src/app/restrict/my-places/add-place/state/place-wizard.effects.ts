import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { concatMap, map, switchMap, catchError } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs'
import * as placeWizardActions from './place-wizard.actions'
import * as placesActions from 'src/app/actions/place.actions'



@Injectable()
export class PlaceWizardEffects {


  @Effect()
  updatePlaceWizard$ = this.actions$.pipe(
    ofType(placesActions.PlaceActionTypes.AddPlaceSuccess),
    switchMap(() => of(new placeWizardActions.SaveMainInfoSuccess())),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    catchError(() => EMPTY)
  )


  constructor(private actions$: Actions<placeWizardActions.PlaceWizardActions>) { }

}
