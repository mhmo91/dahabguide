import { Dictionary } from '@ngrx/entity'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as userSelectors from './user.selector'
import { IPlace } from '../models/place.model'
import * as placeReducer from '../reducers/place.reducer'


const getPlacesFeature = createFeatureSelector(placeReducer.placesFeatureKey)

const isLoading = createSelector(getPlacesFeature, (placesState: placeReducer.IPlacesState) => placesState.loading)

const selectAllPlaces = createSelector(getPlacesFeature, placeReducer.selectAll)
const selectPlacesFilter = createSelector(getPlacesFeature,
    (
        (PlacesFeature: placeReducer.IPlacesState) => PlacesFeature.palcesFilter
    ))

// select place by the place id
const getPlaceById = createSelector(
    selectAllPlaces,
    (places: Array<IPlace>, props: { id: string }) =>
        places.find(p => p.id === props.id)
)

// select all places by creator id
const getPlacesByCreatorId = createSelector(
    selectAllPlaces,
    (places: Array<IPlace>, props: { creatorId: string }) => places.filter(place => place.creatorId === props.creatorId)
)

// select all places for authenticated users
const myCreatedPlaces = createSelector(
    selectAllPlaces,
    userSelectors.selectUserId,
    (places: Array<IPlace>, creatorId: string) => places.filter((place) => place.creatorId === creatorId)
)

// select current active place
const getCurrentPlace = createSelector(getPlacesFeature, (placeState: placeReducer.IPlacesState) => {
    return placeState.currentPlace as placeReducer.ICurrentPlace
})


export {
    getPlacesFeature, selectAllPlaces, getPlaceById,
    getPlacesByCreatorId, myCreatedPlaces,
    getCurrentPlace, isLoading, selectPlacesFilter
}

