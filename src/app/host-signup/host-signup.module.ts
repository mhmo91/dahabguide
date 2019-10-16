import { reducers } from './reducers/index'
import { HostSignupComponent } from './host-signup.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HostSignupRoutingModule } from './host-signup-routing.module'
import { AppSharedModule } from '../app-shared/app-shared.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import * as fromHostWizard from './reducers/host-wizard.reducer'
import { HostWizardEffects } from './effects/host-wizard.effects'
import { UserInfoComponent } from './user-info/user-info.component'


@NgModule({
  declarations: [
    HostSignupComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    HostSignupRoutingModule,
    AppSharedModule,
    StoreModule.forFeature(fromHostWizard.hostWizardFeatureKey, reducers),
    EffectsModule.forFeature([HostWizardEffects]),
  ]
})
export class HostSignupModule { }
