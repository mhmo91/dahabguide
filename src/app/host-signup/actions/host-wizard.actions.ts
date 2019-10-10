import { Action } from '@ngrx/store'

export enum HostWizardActionTypes {
  LoadHostWizardState = '[HostWizard] Load HostWizard State',
}

export class LoadHostWizardState implements Action {
  readonly type = HostWizardActionTypes.LoadHostWizardState
}


export type HostWizardActions = LoadHostWizardState
