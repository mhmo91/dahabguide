import { Action } from '@ngrx/store'
import { User as FireUser } from 'firebase'

export enum AuthActionTypes {
  GOOGLE_LOGIN = '[Auth] Google login attempt',
  FACEBOOK_LOGIN = '[Auth] facebook login attempt',
  AUTH_SUCCESS = '[Auth] Authenticated',
  NOT_AUTHENTICATED = '[Auth] Not Authenticated',
  AUTH_ERROR = '[Auth] Error'
}


export class AuthenticationSuccess implements Action {
  readonly type = AuthActionTypes.AUTH_SUCCESS
  constructor() {
  }
}

export class NotAuthenticated implements Action {
  readonly type = AuthActionTypes.NOT_AUTHENTICATED
  constructor(public payload?: any) {
  }
}

export class GoogleLogin implements Action {
  readonly type = AuthActionTypes.GOOGLE_LOGIN
}

export class FacebookLogin implements Action {
  readonly type = AuthActionTypes.FACEBOOK_LOGIN
}

export class AuthenticationFail implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR
  constructor(public payload?: any) {
  }
}

export type AuthActions = AuthenticationSuccess | NotAuthenticated | AuthenticationFail
  | GoogleLogin | FacebookLogin
