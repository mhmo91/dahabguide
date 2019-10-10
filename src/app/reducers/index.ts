import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import { environment } from '../../environments/environment'
import { reducer as userReducer } from './user.reducer'
import { reducer as authReducer } from './auth.reducer'
// tslint:disable-next-line: semicolon
import { User } from '../models/user.model'
import { AuthState } from '../models/auth.state'

export interface AppState {
  readonly user
  readonly auth
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  auth: authReducer
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : []


// app state mock for testing purposes
export const appStateMock = {
  user: new User(null),
  auth: new AuthState(false)
}
