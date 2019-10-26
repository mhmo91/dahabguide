import { Action } from '@ngrx/store'

export enum PlaceWizardActionTypes {
  AddNewPlaceInit = '[User action] click add new place',
  SaveMainInfo = '[PlaceWizard] saveMainInfo',
  SaveMainInfoSuccess = '[PlaceWizard] saveMainInfo success',
  UpdatePlaceWizard = '[PlaceWizard] update state'

}

export class AddNewPlaceInit implements Action {
  readonly type = PlaceWizardActionTypes.AddNewPlaceInit
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


export type PlaceWizardActions = AddNewPlaceInit | UpdatePlaceWizard | SaveMainInfo | SaveMainInfoSuccess
