import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import { environment } from '../../environments/environment'
import { reducer as userReducer } from './user.reducer'
import { reducer as authReducer, clearState } from './auth.reducer'
import { reducer as resourcesReducer } from './resources.reducer'
import { reducer as placesReducer } from './place.reducer'
// tslint:disable-next-line: semicolon
import { User } from '../models/user.model'
import { AuthState } from '../models/auth.state'

export interface AppState {
  readonly user
  readonly auth
  readonly resources?
  readonly places?
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  auth: authReducer,
  resources: resourcesReducer,
  places: placesReducer
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [clearState] : [clearState]


// app state mock for testing purposes
export const appStateMock = {
  user: new User(null),
  auth: new AuthState(false)
}
