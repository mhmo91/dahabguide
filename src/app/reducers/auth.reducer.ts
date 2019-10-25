import { ActionTypes } from './../actions/user.actions'
import { AuthState, IAuthState } from './../models/auth.state'

import { AuthActions, AuthActionTypes } from '../actions/auth.actions'

export const authFeatureKey = 'auth'

export const initialState = new AuthState(false)
export function reducer(state = initialState, action: AuthActions): IAuthState {
  switch (action.type) {

    case AuthActionTypes.FACEBOOK_LOGIN:
      return { ...state, authenticating: true }

    case AuthActionTypes.GOOGLE_LOGIN:
      return { ...state, authenticating: true }

    case AuthActionTypes.AUTH_SUCCESS:
      return { ...state, authenticated: true, authenticating: false }


    case AuthActionTypes.NOT_AUTHENTICATED:
      return { ...state, authenticated: false, authenticating: false }

    case AuthActionTypes.AUTH_ERROR:
      return null


    default:
      return state
  }
}

