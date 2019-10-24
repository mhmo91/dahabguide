import { Action } from '@ngrx/store'
import { IResources } from '../models/resources.model'

export enum ResourcesActionTypes {
  LoadResources = '[Resources] Load Resources',
  LoadResourcesFail = '[Resources] Load Resources failes',
  LoadResourcesSuccess = '[Resources] Load Resources success'


}

export class LoadResources implements Action {
  readonly type = ResourcesActionTypes.LoadResources
}

export class LoadResourcesFail implements Action {
  readonly type = ResourcesActionTypes.LoadResourcesFail
  constructor(public error: any) { }
}
export class LoadResourcesSuccess implements Action {
  readonly type = ResourcesActionTypes.LoadResourcesSuccess
  constructor(public payload: Partial<IResources>) { }
}




export type ResourcesActions = LoadResources | LoadResourcesFail | LoadResourcesSuccess
