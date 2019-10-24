
import { ResourcesActions, ResourcesActionTypes } from '../actions/resources.actions'
import { Resources, IResources } from '../models/resources.model'

export const resourcesFeatureKey = 'resources'


export const initialState = new Resources()

export function reducer(state = initialState, action: ResourcesActions): IResources {
  switch (action.type) {

    case ResourcesActionTypes.LoadResources:
      return { ...state, loading: true }

    case ResourcesActionTypes.LoadResourcesSuccess:
      return { ...state, ...action.payload, loading: false }

    case ResourcesActionTypes.LoadResourcesFail:
      return { ...state, error: action.error, loading: false }

    default:
      return state
  }
}
