import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import { environment } from '../../environments/environment'
import { reducer as userReducer } from './user.reducer'
// tslint:disable-next-line: semicolon
import { User } from '../models/user.model'

export interface AppState {
  readonly user
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : []

export const appStateMock = {
  user: new User(null)
}
