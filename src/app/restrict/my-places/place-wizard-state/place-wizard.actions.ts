import { Action } from '@ngrx/store'
import { IPlace } from 'src/app/models/place.model'
import { IPlaceWizard } from './place-wizard.reducer'

export enum PlaceWizardActionTypes {
  AddNewPlaceInit = '[User action] add new place',
  InitPlaceUpdateWizard = '[PlaceWizard][User action] update place',
  SaveMainInfo = '[PlaceWizard] Save place main info',
  SaveMainInfoSuccess = '[PlaceWizard] saveMainInfo success',
  UpdatePlaceSuccess = '[PlaceWizard] updated the location successfully',
  UpdatePlace = '[PlaceWizard] Update place',
  UpdatePlaceWizard = '[PlaceWizard] update state',

}

export class AddNewPlaceInit implements Action {
  readonly type = PlaceWizardActionTypes.AddNewPlaceInit
}
export class InitPlaceUpdateWizard implements Action {
  readonly type = PlaceWizardActionTypes.InitPlaceUpdateWizard
}
export class UpdatePlaceWizard implements Action {
  readonly type = PlaceWizardActionTypes.UpdatePlaceWizard
  constructor(public payload: Partial<IPlaceWizard>) {
  }
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


export type PlaceWizardActions =
  AddNewPlaceInit | InitPlaceUpdateWizard |
  UpdatePlaceWizard | SaveMainInfo |
  UpdatePlace | SaveMainInfoSuccess |
  UpdatePlaceSuccess

