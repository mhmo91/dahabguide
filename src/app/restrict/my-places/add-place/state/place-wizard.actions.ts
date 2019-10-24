import { Action } from '@ngrx/store'

export enum PlaceWizardActionTypes {
  SaveMainInfo = '[PlaceWizard] saveMainInfo',
  SaveMainInfoSuccess = '[PlaceWizard] saveMainInfo success',
  UpdatePlaceWizard = '[PlaceWizard] update state'

}

export class UpdatePlaceWizard implements Action {
  readonly type = PlaceWizardActionTypes.UpdatePlaceWizard
}
export class SaveMainInfo implements Action {
  readonly type = PlaceWizardActionTypes.SaveMainInfo
}
export class SaveMainInfoSuccess implements Action {
  readonly type = PlaceWizardActionTypes.SaveMainInfoSuccess
}


export type PlaceWizardActions = UpdatePlaceWizard | SaveMainInfo | SaveMainInfoSuccess
