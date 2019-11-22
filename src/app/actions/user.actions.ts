import { Action } from '@ngrx/store'
import { User, IUser } from '../models/user.model'

export enum ActionTypes {
  GET_USER = '[AUTH,fb] Get User',
  GET_USER_SUCCESS = '[fb] Get User Success',
  GET_USER_FAIL = '[fb] Get User Fail',

  LOGOUT = '[Auth] Logout',

  UPDATE_USER = '[fb] Update User',
  UPDATE_USER_SUCCESS = '[fb] Update User Success',
  UPDATE_USER_FAIL = '[fb] Update User Fail',
}

export class GetUser implements Action {
  readonly type = ActionTypes.GET_USER
}

export class GetUserSuccess implements Action {
  readonly type = ActionTypes.GET_USER_SUCCESS
  constructor(public payload: IUser) { }
}

export class GetUserFail implements Action {
  readonly type = ActionTypes.GET_USER_FAIL
  constructor(public payload?: any) {
  }
}


export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT
}

export class UpdateUser implements Action {
  readonly type = ActionTypes.UPDATE_USER
  constructor(public payload: Partial<IUser>) {
  }
}

export class UpdateUserSuccess implements Action {
  readonly type = ActionTypes.UPDATE_USER_SUCCESS
}


export class UpdateUserFail implements Action {
  readonly type = ActionTypes.UPDATE_USER_FAIL
  constructor(public payload?: any) {
  }
}

export type UserActions = GetUser | GetUserSuccess | GetUserFail | Logout | UpdateUser | UpdateUserSuccess | UpdateUserFail
