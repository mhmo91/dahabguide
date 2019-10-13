import { HostWizard, IHostWizard } from './../models/host-wizard'

import { HostWizardActions, HostWizardActionTypes } from '../actions/host-wizard.actions'
import { AppState } from 'src/app/reducers'
import { IUser, Role } from 'src/app/models/user.model'

export const hostWizardFeatureKey = 'hostWizard'



export const initialState = new HostWizard(20)
console.log(initialState)
export function reducer(state = initialState, action: HostWizardActions): Partial<IHostWizard> {
  switch (action.type) {

    case HostWizardActionTypes.GetHostWizardState:
      return { ...state, loading: true }

    case HostWizardActionTypes.UpdateHostWizardState:
      const user: IUser = action.payload
      if (user.uid) { // means user is logged in
        if (Array.isArray(user.roles) && user.roles.includes(Role.Host)) {
          return { ...state, userInfo: user, progress: 100, currentStep: 2, loading: false }
        } else {
          return { ...state, userInfo: user, progress: 65, currentStep: 1, loading: false }
        }
      } else {
        return { ...state, progress: 20, currentStep: 0, loading: false }
      }

    default:
      return state
  }
}
