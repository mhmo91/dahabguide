import { HostWizard, IHostWizard } from './../models/host-wizard'

import { HostWizardActions, HostWizardActionTypes } from '../actions/host-wizard.actions'
import { AppState } from 'src/app/reducers'

export const hostWizardFeatureKey = 'hostWizard'



export const initialState = new HostWizard(20)

export function reducer(state = initialState, action: HostWizardActions): Partial<IHostWizard> {
  switch (action.type) {

    case HostWizardActionTypes.LoadHostWizardState:
      return state

    default:
      return state
  }
}
