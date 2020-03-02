import { PlacesFilter } from './../models/places-filter.model'
import { EntityState, EntityAdapter, createEntityAdapter, Dictionary } from '@ngrx/entity'
import { IPlace as Place, IPlace } from '../models/place.model'
import { PlaceActions, PlaceActionTypes } from '../actions/place.actions'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ApiModel } from '../models/api.model'
import { IBooking } from '../models/booking.model'
export const placesFeatureKey = 'places'

export interface ICurrentPlace extends IPlace {
  bookings: Array<IBooking>
}
export interface IPlacesState extends EntityState<Place>, ApiModel {
  // additional entities state properties
  currentPlace: ICurrentPlace
  palcesFilter: PlacesFilter

}

export const adapter: EntityAdapter<Place> = createEntityAdapter<Place>()

export const initialState: IPlacesState = adapter.getInitialState({
  // additional entity state properties
  currentPlace: null,
  palcesFilter: new PlacesFilter()

})

export function reducer(
  state = initialState,
  action: PlaceActions
): IPlacesState {
  switch (action.type) {
    case PlaceActionTypes.AddPlace: {
      return adapter.addOne(
        { ...action.payload.place, loading: true },
        { ...state, currentPlaceId: action.payload.place.id }
      )
    }
    case PlaceActionTypes.UpdateCurrentPlace: {
      return { ...state, currentPlace: action.currentPlace }
    }
    case PlaceActionTypes.ResetPlacesFilter: {
      return { ...state, palcesFilter: new PlacesFilter() }
    }

    case PlaceActionTypes.UpdatePlacesFilter: {
      return { ...state, palcesFilter: action.payload.placesFilter }
    }

    case PlaceActionTypes.AddPlaceSuccess: {
      return adapter.upsertOne(
        { ...action.payload.place, loading: false }, state
      )
    }

    case PlaceActionTypes.AddPlaceFailure: {
      return adapter.upsertOne({ ...action.payload.place, loading: false }, state)
    }

    case PlaceActionTypes.AddPlace: {
      return adapter.addOne(action.payload.place, state)
    }

    case PlaceActionTypes.UpsertPlace: {
      return adapter.upsertOne(action.payload.place, state)
    }

    case PlaceActionTypes.AddPlaces: {
      return adapter.addMany(action.payload.places, state)
    }

    case PlaceActionTypes.UpsertPlaces: {
      return adapter.upsertMany(action.payload.places, state)
    }

    case PlaceActionTypes.UpdatePlace: {
      return adapter.updateOne(action.payload.place, state)
    }

    case PlaceActionTypes.UpdatePlaces: {
      return adapter.updateMany(action.payload.places, state)
    }

    case PlaceActionTypes.DeletePlace: {
      return adapter.removeOne(action.payload.id, state)
    }

    case PlaceActionTypes.DeletePlaces: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case PlaceActionTypes.InitLoadPlaces: {
      return { ...state, loading: true }
    }

    case PlaceActionTypes.LoadPlaces: {
      return adapter.addAll(action.payload.places, { ...state, loading: false })
    }

    case PlaceActionTypes.ClearPlaces: {
      return adapter.removeAll(state)
    }

    default: {
      return state
    }
  }
}


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()




// even though this is an observable, but it bahaves as a promise, so it doesn't subscribe to changes in the object


