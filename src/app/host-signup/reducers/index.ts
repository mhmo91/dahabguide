import { HostWizard, IHostWizard } from './../models/host-wizard'
import { reducer as hostWizardReducer } from './host-wizard.reducer'

import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store'

export const reducers = hostWizardReducer

export interface IHostWizardState {
    hostWizard: IHostWizard
}
// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : []


// app state mock for testing purposes
export const hostWizardStateMock = {
    hostWizard: new HostWizard(false)
}
