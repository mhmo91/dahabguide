import { Action } from '@ngrx/store'
import { IPlace } from 'src/app/models/place.model'

export enum PlaceWizardActionTypes {
  AddNewPlaceInit = '[User action] click add new place',
  SaveMainInfo = '[PlaceWizard] Save place main info',
  SaveMainInfoSuccess = '[PlaceWizard] saveMainInfo success',
  UpdatePlaceSuccess = '[PlaceWizard] updated the location successfully',
  UpdatePlace = '[PlaceWizard] Update place',
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

export class UpdatePlace implements Action {
  readonly type = PlaceWizardActionTypes.UpdatePlace
  constructor(public payload: Partial<IPlace>) {

  }
}
export class SaveMainInfoSuccess implements Action {
  readonly type = PlaceWizardActionTypes.SaveMainInfoSuccess
}
export class UpdatePlaceSuccess implements Action {
  readonly type = PlaceWizardActionTypes.UpdatePlaceSuccess
}


export type PlaceWizardActions = AddNewPlaceInit | UpdatePlaceWizard | SaveMainInfo | UpdatePlace | SaveMainInfoSuccess | UpdatePlaceSuccess
