import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { IPlace } from '../models/place.model'
import { IPlacesFilter } from '../models/places-filter.model'

export enum PlaceActionTypes {
  LoadPlaces = '[Place] Load Places',
  GetPlaceDetails = '[Place] Get Place details',
  UpdateCurrentPlace = '[Place] Update Current Place',
  InitLoadPlaces = '[Place] Load Places init',
  LoadPlacesSuccess = '[Place] Load Places Success',
  AddPlace = '[Place] Add Place',
  AddPlaceSuccess = '[Place] Add Place Success',
  AddPlaceFailure = '[Place] Add Place Failure',
  ResetPlacesFilter = '[Place] reset Places filter',
  UpsertPlace = '[Place] Upsert Place',
  AddPlaces = '[Place] Add Places',
  UpsertPlaces = '[Place] Upsert Places',
  UpdatePlace = '[Place] Update Place',
  UpdatePlaceSuccess = '[From Firebase] Update Place Success',
  UpdatePlaceFailure = '[From Firebase] Updating Place failed',
  UpdatePlaces = '[Place] Update Places',
  DeletePlace = '[Place] Delete Place',
  DeletePlaces = '[Place] Delete Places',
  ClearPlaces = '[Place] Clear Places',
  DeletePlaceImage = '[Place][User action] delete place image',
  UpdatePlacesFilter = '[Places] [User changed filter value] update places filter model'
}

export class InitLoadPlaces implements Action {
  readonly type = PlaceActionTypes.InitLoadPlaces
}


export class GetPlaceDetails implements Action {
  readonly type = PlaceActionTypes.GetPlaceDetails
  constructor(public place: Partial<IPlace>) {
  }
}

export class UpdateCurrentPlace implements Action {
  readonly type = PlaceActionTypes.UpdateCurrentPlace
  constructor(public currentPlace: any) {
  }
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

export class ResetPlacesFilter implements Action {
  readonly type = PlaceActionTypes.ResetPlacesFilter
}


export class UpdatePlacesFilter implements Action {
  constructor(public payload: { placesFilter: IPlacesFilter }) { }

  readonly type = PlaceActionTypes.UpdatePlacesFilter
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


export class UpdatePlaceSuccess implements Action {
  readonly type = PlaceActionTypes.UpdatePlaceSuccess
}
export class UpdatePlaceFailure implements Action {
  readonly type = PlaceActionTypes.UpdatePlaceFailure
  constructor(public payload?: { place: IPlace }) { }
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

export class DeletePlaceImage implements Action {
  readonly type = PlaceActionTypes.DeletePlaceImage
  constructor(public url: string) {
  }
}

export type PlaceActions =
  InitLoadPlaces
  | UpdatePlacesFilter
  | LoadPlaces
  | GetPlaceDetails
  | UpdateCurrentPlace
  | AddPlace
  | AddPlaceSuccess
  | AddPlaceFailure
  | UpsertPlace
  | AddPlaces
  | UpsertPlaces
  | UpdatePlace
  | UpdatePlaceSuccess
  | UpdatePlaceFailure
  | UpdatePlaces
  | DeletePlace
  | DeletePlaces
  | ClearPlaces
  | ResetPlacesFilter
  | DeletePlaceImage
