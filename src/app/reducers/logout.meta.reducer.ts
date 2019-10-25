import { ActionTypes } from '../actions/user.actions'
import { AppState } from '.'
import { User } from '../models/user.model'
import { AuthState } from '../models/auth.state'

// meta reducer when user logout
export function clearUserState(metaReducer) {
    return (state: AppState, action) => {
        let newState: AppState
        if (action.type === ActionTypes.LOGOUT) {
            newState = {
                ...state,
                user: new User(null),
                auth: new AuthState(false),
            }
        }

        return metaReducer(state, action)
    }
}

