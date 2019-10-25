import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { IPlace } from '../models/place.model'

export enum PlaceActionTypes {
  LoadPlaces = '[Place] Load Places',
  InitLoadPlaces = '[Place] Load Places init',
  LoadPlacesSuccess = '[Place] Load Places Success',
  AddPlace = '[Place] Add Place',
  AddPlaceSuccess = '[Place] Add Place Success',
  AddPlaceFailure = '[Place] Add Place Failure',

  UpsertPlace = '[Place] Upsert Place',
  AddPlaces = '[Place] Add Places',
  UpsertPlaces = '[Place] Upsert Places',
  UpdatePlace = '[Place] Update Place',
  UpdatePlaces = '[Place] Update Places',
  DeletePlace = '[Place] Delete Place',
  DeletePlaces = '[Place] Delete Places',
  ClearPlaces = '[Place] Clear Places',
}

export class InitLoadPlaces implements Action {
  readonly type = PlaceActionTypes.InitLoadPlaces
}
export class LoadPlaces implements Action {
  readonly type = PlaceActionTypes.LoadPlaces
  constructor(public payload: { places: IPlace[] }) { }
}

export class AddPlace implements Action {
  readonly type = PlaceActionTypes.AddPlace

  constructor(public payload: { place: IPlace }) { }
}

export class AddPlaceSuccess implements Action {
  readonly type = PlaceActionTypes.AddPlaceSuccess
  constructor(public payload: { place: IPlace }) { }
}
export class AddPlaceFailure implements Action {
  readonly type = PlaceActionTypes.AddPlaceFailure
  constructor(public payload: { place: IPlace }) { }
}
export class UpsertPlace implements Action {
  readonly type = PlaceActionTypes.UpsertPlace

  constructor(public payload: { place: IPlace }) { }
}

export class AddPlaces implements Action {
  readonly type = PlaceActionTypes.AddPlaces

  constructor(public payload: { places: IPlace[] }) { }
}

export class UpsertPlaces implements Action {
  readonly type = PlaceActionTypes.UpsertPlaces

  constructor(public payload: { places: IPlace[] }) { }
}

export class UpdatePlace implements Action {
  readonly type = PlaceActionTypes.UpdatePlace

  constructor(public payload: { place: Update<IPlace> }) { }
}

export class UpdatePlaces implements Action {
  readonly type = PlaceActionTypes.UpdatePlaces

  constructor(public payload: { places: Update<IPlace>[] }) { }
}

export class DeletePlace implements Action {
  readonly type = PlaceActionTypes.DeletePlace

  constructor(public payload: { id: string }) { }
}

export class DeletePlaces implements Action {
  readonly type = PlaceActionTypes.DeletePlaces

  constructor(public payload: { ids: string[] }) { }
}

export class ClearPlaces implements Action {
  readonly type = PlaceActionTypes.ClearPlaces
}

export type PlaceActions =
  InitLoadPlaces
  | LoadPlaces
  | AddPlace
  | AddPlaceSuccess
  | AddPlaceFailure
  | UpsertPlace
  | AddPlaces
  | UpsertPlaces
  | UpdatePlace
  | UpdatePlaces
  | DeletePlace
  | DeletePlaces
  | ClearPlaces