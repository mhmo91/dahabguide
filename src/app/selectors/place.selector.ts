import { createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromPlace from '../reducers/place.reducer'
import * as fromUser from '../reducers/user.reducer'
import { Dictionary } from '@ngrx/entity'
import { IPlace } from '../models/place.model'

const getPlacesFeature = createFeatureSelector(fromPlace.placesFeatureKey)

const isLoading = createSelector(getPlacesFeature, (placesState: fromPlace.IPlacesState) => placesState.loading)

const selectAllPlaces = createSelector(getPlacesFeature, fromPlace.selectAll)

// select place by the place id
const getPlaceById = createSelector(
    fromPlace.selectEntities,
    (entities: Dictionary<IPlace>, props: { id: string }) => {
        if (entities) {
            return entities[props.id]
        } else {
            return null
        }
    }
)

// select all places by creator id
const getPlacesByCreatorId = createSelector(
    selectAllPlaces,
    (places: Array<IPlace>, props: { creatorId: string }) => places.filter(place => place.creatorId === props.creatorId)
)

// select all places for authenticated users
const myCreatedPlaces = createSelector(
    selectAllPlaces,
    fromUser.selectUserId,
    (places: Array<IPlace>, creatorId: string) => places.filter((place) => place.creatorId === creatorId)
)

// select current active place
const getCurrentPlace = createSelector(getPlacesFeature, (placeState: fromPlace.IPlacesState) => {
    return placeState.entities[placeState.currentPlaceId]
})


export {
    getPlacesFeature,
    selectAllPlaces,
    getPlaceById,
    getPlacesByCreatorId,
    myCreatedPlaces,
    getCurrentPlace,
    isLoading
}
