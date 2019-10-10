import { AppState } from './../../reducers/index'
import { environment } from './../../../environments/environment.prod'
import { HostWizard } from './../models/host-wizard'
import { reducer as hostWizardReducer } from './host-wizard.reducer'

import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store'

export interface IWizardState extends Partial<AppState> {
    readonly hostWizard
}
export const reducers: ActionReducerMap<IWizardState> = {
    hostWizard: hostWizardReducer
}


// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : []


// app state mock for testing purposes
export const hostWizardStateMock = {
    hostWizard: new HostWizard(false)
}
