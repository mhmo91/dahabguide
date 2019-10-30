import { User, IUser } from './../models/user.model'
import { UserActions, ActionTypes } from '../actions/user.actions'

export const userFeatureKey = 'user'



export const defaultUser = new User(null)
export function reducer(state: Partial<IUser> = defaultUser, action: UserActions): Partial<IUser> {
  switch (action.type) {

    case ActionTypes.GET_USER:
      return { ...state, loading: true }

    case ActionTypes.GET_USER_SUCCESS:
      console.log(action)
      return { ...state, ...action.payload, loading: false }

    case ActionTypes.GET_USER_FAIL:
      return { ...state, error: action.payload, loading: false }

    case ActionTypes.UPDATE_USER:
      return { ...state, ...action.payload, loading: true }

    case ActionTypes.UPDATE_USER_SUCCESS:
      return { ...state, loading: false }

    case ActionTypes.UPDATE_USER_FAIL:
      return { ...state, error: action.payload, loading: false }

    case ActionTypes.LOGOUT:
      return { loading: false }

    default:
      return { ...state }
  }
}
