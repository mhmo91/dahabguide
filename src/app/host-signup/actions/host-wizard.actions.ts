import { Action } from '@ngrx/store'
import { IUser } from 'src/app/models/user.model'

export enum HostWizardActionTypes {
  GetHostWizardState = '[HostWizard] Load HostWizard State',
  UpdateHostWizardState = '[HostWizard] update HostWizard State',
}

export class GetHostWizardState implements Action {
  readonly type = HostWizardActionTypes.GetHostWizardState
}

export class UpdateWizardState implements Action {
  readonly type = HostWizardActionTypes.UpdateHostWizardState
  constructor(public payload: IUser) { }
}


export type HostWizardActions = GetHostWizardState | UpdateWizardState
