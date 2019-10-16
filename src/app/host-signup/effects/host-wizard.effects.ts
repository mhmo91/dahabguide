import * as userActions from './../../actions/user.actions'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { concatMap, switchMap, map } from 'rxjs/operators'
import * as hostWizardActions from '../actions/host-wizard.actions'



@Injectable()
export class HostWizardEffects {


  @Effect()
  getHostWizardState = this.actions$.pipe(
    ofType(hostWizardActions.HostWizardActionTypes.GetHostWizardState),
    map((res) => new userActions.GetUser())
  )

  @Effect()
  updateHostWizardState = this.actions$.pipe(
    ofType(userActions.ActionTypes.GET_USER_SUCCESS, userActions.ActionTypes.GET_USER_FAIL),
    map((userAction: userActions.GetUserSuccess) => new hostWizardActions.UpdateWizardState(userAction.payload))
  )

  constructor(private actions$: Actions<hostWizardActions.HostWizardActions>) { }

}
