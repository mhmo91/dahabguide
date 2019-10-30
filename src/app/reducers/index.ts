import { IUser } from './../models/user.model'
import { clearUserState } from './logout.meta.reducer'
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
import { reducer as resourcesReducer } from './resources.reducer'
import { reducer as placesReducer, IPlacesState } from './place.reducer'
// tslint:disable-next-line: semicolon
import { User } from '../models/user.model'
import { AuthState } from '../models/auth.state'
import { IResources } from '../models/resources.model'
import { localStorageSync } from 'ngrx-store-localstorage'
import { PlacesFilter } from '../models/places-filter.model'

export interface AppState {
  readonly user
  readonly auth
  readonly resources?
  readonly places?
}
export interface IAppState {
  readonly user: Partial<IUser>
  readonly auth: AuthState
  readonly resources?: IResources
  readonly places?: IPlacesState
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  auth: authReducer,
  resources: resourcesReducer,
  places: placesReducer
}
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['user', 'resources', 'auth', 'places'], rehydrate: true })(reducer)
}


export const metaReducers: MetaReducer<any>[] =
  !environment.production ? [clearUserState, localStorageSyncReducer] : [clearUserState, localStorageSyncReducer]


// app state mock for testing purposes
export const appStateMock: IAppState = {
  user: new User(null),
  auth: new AuthState(false),
  resources: {
    placesTypes: [],
    amenities: [],
    facilities: []
  },
  places: {
    loading: false,
    ids: [],
    entities: {},
    currentPlaceId: null,
    palcesFilter: new PlacesFilter()
  }
}
