import { IPlaceType } from 'src/app/models/resources.model'
import { Observable } from 'rxjs'
import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromResources from '../reducers/resources.reducer'
import { IResources } from '../models/resources.model'


export const ResourcesFeature = createFeatureSelector(fromResources.resourcesFeatureKey)

export const getPlaceTypes = createSelector(ResourcesFeature, (resources: IResources) => resources.placesTypes)

export const getPlaceTypeById =
    createSelector(getPlaceTypes,
        (types: Array<IPlaceType>, props: { id: string }) => types.find(t => t.id === props.id)
    )
