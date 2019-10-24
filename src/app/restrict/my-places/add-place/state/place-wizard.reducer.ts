
import { PlaceWizardActions, PlaceWizardActionTypes } from './place-wizard.actions'

export const placeWizardFeatureKey = 'placeWizard'
export interface IPlaceWizardState {
  placeWizard: IPlaceWizard
}


export interface IPlaceWizard {
  mode: WizardMode,
  busy: boolean
  currentPlaceId: string
  currentWizardStep: number
}
enum WizardMode {
  Add = 'ADD',
  Update = 'UPDATE'
}

export const initialState: IPlaceWizard = {
  mode: WizardMode.Add,
  busy: false,
  currentPlaceId: null,
  currentWizardStep: 0

}

export function reducer(state = initialState, action: PlaceWizardActions): IPlaceWizard {
  switch (action.type) {
    case PlaceWizardActionTypes.SaveMainInfo:
      return { ...state, busy: true }


    case PlaceWizardActionTypes.SaveMainInfoSuccess:
      const newWizardStep = state.mode === WizardMode.Add ? 1 : state.currentWizardStep
      return { ...state, busy: false, currentWizardStep: newWizardStep }

    default:
      return state
  }
}

export const placeWizardStateMock = {
  mode: WizardMode.Add,
  busy: false,
  currentPlaceId: null,
  currentWizardStep: 0
}
