import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { concatMap } from 'rxjs/operators'
import { EMPTY } from 'rxjs'
import { HostWizardActionTypes, HostWizardActions } from '../actions/host-wizard.actions'



@Injectable()
export class HostWizardEffects {


  @Effect()
  loadHostWizards$ = this.actions$.pipe(
    ofType(HostWizardActionTypes.LoadHostWizardState),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  )


  constructor(private actions$: Actions<HostWizardActions>) { }

}
