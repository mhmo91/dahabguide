import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { Place } from '../models/place.model'
import { PlaceActions, PlaceActionTypes } from '../actions/place.actions'

export const placesFeatureKey = 'places'

export interface IPlacesState extends EntityState<Place> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Place> = createEntityAdapter<Place>()

export const initialState: IPlacesState = adapter.getInitialState({
  // additional entity state properties
})

console.log(initialState)
export function reducer(
  state = initialState,
  action: PlaceActions
): IPlacesState {
  switch (action.type) {
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

    case PlaceActionTypes.LoadPlaces: {
      return adapter.addAll(action.payload.places, state)
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
