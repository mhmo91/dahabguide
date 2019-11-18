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
import { reducer as bookingsReducer, IBookingsState } from './booking.reducer'
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
  readonly bookings?
}
export interface IAppState {
  readonly user: Partial<IUser>
  readonly auth: AuthState
  readonly resources?: IResources
  readonly places?: IPlacesState
  readonly bookings: IBookingsState

}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  auth: authReducer,
  resources: resourcesReducer,
  places: placesReducer,
  bookings: bookingsReducer
}
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['user', 'resources', 'auth', 'places', 'placeWizard'], rehydrate: true })(reducer)
}


export const metaReducers: MetaReducer<any>[] =
  !environment.production ? [clearUserState, localStorageSyncReducer] : [clearUserState, localStorageSyncReducer]

