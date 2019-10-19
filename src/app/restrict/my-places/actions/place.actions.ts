import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { Place } from '../models/place.model'

export enum PlaceActionTypes {
  LoadPlaces = '[Place] Load Places',
  AddPlace = '[Place] Add Place',
  UpsertPlace = '[Place] Upsert Place',
  AddPlaces = '[Place] Add Places',
  UpsertPlaces = '[Place] Upsert Places',
  UpdatePlace = '[Place] Update Place',
  UpdatePlaces = '[Place] Update Places',
  DeletePlace = '[Place] Delete Place',
  DeletePlaces = '[Place] Delete Places',
  ClearPlaces = '[Place] Clear Places'
}

export class LoadPlaces implements Action {
  readonly type = PlaceActionTypes.LoadPlaces

  constructor(public payload: { places: Place[] }) {}
}

export class AddPlace implements Action {
  readonly type = PlaceActionTypes.AddPlace

  constructor(public payload: { place: Place }) {}
}

export class UpsertPlace implements Action {
  readonly type = PlaceActionTypes.UpsertPlace

  constructor(public payload: { place: Place }) {}
}

export class AddPlaces implements Action {
  readonly type = PlaceActionTypes.AddPlaces

  constructor(public payload: { places: Place[] }) {}
}

export class UpsertPlaces implements Action {
  readonly type = PlaceActionTypes.UpsertPlaces

  constructor(public payload: { places: Place[] }) {}
}

export class UpdatePlace implements Action {
  readonly type = PlaceActionTypes.UpdatePlace

  constructor(public payload: { place: Update<Place> }) {}
}

export class UpdatePlaces implements Action {
  readonly type = PlaceActionTypes.UpdatePlaces

  constructor(public payload: { places: Update<Place>[] }) {}
}

export class DeletePlace implements Action {
  readonly type = PlaceActionTypes.DeletePlace

  constructor(public payload: { id: string }) {}
}

export class DeletePlaces implements Action {
  readonly type = PlaceActionTypes.DeletePlaces

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPlaces implements Action {
  readonly type = PlaceActionTypes.ClearPlaces
}

export type PlaceActions =
 LoadPlaces
 | AddPlace
 | UpsertPlace
 | AddPlaces
 | UpsertPlaces
 | UpdatePlace
 | UpdatePlaces
 | DeletePlace
 | DeletePlaces
 | ClearPlaces
