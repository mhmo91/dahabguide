import { User as FirebaseUser } from 'firebase/app'
import { Action } from '@ngrx/store'
import { User, IUser } from '../models/user.model'

export enum ActionTypes {
  GET_USER = '[AUTH] Get User',
  AUTHENTICATED = '[Auth] Authenticated',
  NOT_AUTHENTICATED = '[Auth] Not Authenticated',
  GOOGLE_LOGIN = '[Auth] Google login attempt',
  FACEBOOK_LOGIN = '[Auth] facebook login attempt',
  LOGOUT = '[Auth] Logout',
  AUTH_ERROR = '[Auth] Error',
  UPDATE_USER = '[fb] Update User',
  UPDATE_USER_SUCCESS = '[fb] Update User Success',
  UPDATE_USER_FAIL = '[fb] Update User Fail',
}

export class GetUser implements Action {
  readonly type = ActionTypes.GET_USER
}

export class Authenticated implements Action {
  readonly type = ActionTypes.AUTHENTICATED
  constructor(public payload: User) {
  }
}

export class NotAuthenticated implements Action {
  readonly type = ActionTypes.NOT_AUTHENTICATED
  constructor(public payload?: any) {
  }
}

export class GoogleLogin implements Action {
  readonly type = ActionTypes.GOOGLE_LOGIN
}

export class FacebookLogin implements Action {
  readonly type = ActionTypes.FACEBOOK_LOGIN
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

export class AuthenticationFail implements Action {
  readonly type = ActionTypes.AUTH_ERROR
  constructor(public payload?: any) {
  }
}

export class UpdateUserFail implements Action {
  readonly type = ActionTypes.UPDATE_USER_FAIL
  constructor(public payload?: any) {
  }
}

export type UserActions = GetUser | Authenticated | NotAuthenticated | AuthenticationFail
  | GoogleLogin | FacebookLogin | Logout | UpdateUser | UpdateUserSuccess | UpdateUserFail
