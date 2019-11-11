
import { PlaceWizardActions, PlaceWizardActionTypes } from './place-wizard.actions'

export const placeWizardFeatureKey = 'placeWizard'
export interface IPlaceWizardState {
  placeWizard: IPlaceWizard
}


export interface IPlaceWizard {
  mode: PlaceWizardMode,
  busy: boolean
  currentPlaceId: string
  currentWizardStep: number
}
export enum PlaceWizardMode {
  Add = 'ADD',
  Update = 'UPDATE'
}

export const initialState: IPlaceWizard = {
  mode: PlaceWizardMode.Add,
  busy: false,
  currentPlaceId: null,
  currentWizardStep: 0

}

export function reducer(state = initialState, action: PlaceWizardActions): IPlaceWizard {
  switch (action.type) {


    case PlaceWizardActionTypes.AddNewPlaceInit:
      return initialState


    case PlaceWizardActionTypes.InitPlaceUpdateWizard:
      return { ...state, mode: PlaceWizardMode.Update, currentWizardStep: 0, busy: false }


    case PlaceWizardActionTypes.UpdatePlaceWizard:
      return { ...state, currentWizardStep: action.payload.currentWizardStep }

    case PlaceWizardActionTypes.UpdatePlace:
      return { ...state, busy: true }

    case PlaceWizardActionTypes.SaveMainInfo:
      return { ...state, busy: true }


    case PlaceWizardActionTypes.SaveMainInfoSuccess:
      const newWizardStep = state.mode === PlaceWizardMode.Add ? 1 : state.currentWizardStep
      return { ...state, busy: false, currentWizardStep: newWizardStep }

    case PlaceWizardActionTypes.UpdatePlaceSuccess:
      const wizardStep =
        ((state.mode === PlaceWizardMode.Add) && state.currentWizardStep < 2) ?
          (state.currentWizardStep + 1) : state.currentWizardStep
      return { ...state, busy: false, currentWizardStep: wizardStep }

    default:
      return state
  }
}

export const placeWizardStateMock = {
  mode: PlaceWizardMode.Add,
  busy: false,
  currentPlaceId: null,
  currentWizardStep: 0
}
