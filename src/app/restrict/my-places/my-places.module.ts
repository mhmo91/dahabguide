import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MyPlacesRoutingModule } from './my-places-routing.module'
import { PlacesListComponent } from './places-list/places-list.component'
import { AddPlaceComponent } from './add-place/add-place.component'
import { RestrictSharedModule } from '../restrict-shared/restrict-shared.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { PlaceMainInfoComponent } from './add-place/place-main-info/place-main-info.component'
import { PlacesPipe } from './add-place/place-main-info/places.pipe'
import * as fromPlaceWizard from './add-place/state/place-wizard.reducer'
import { PlaceWizardEffects } from './add-place/state/place-wizard.effects'
@NgModule({
  declarations: [PlacesListComponent, AddPlaceComponent, PlaceMainInfoComponent, PlacesPipe],
  imports: [
    CommonModule,
    MyPlacesRoutingModule,
    RestrictSharedModule,
    StoreModule.forFeature(fromPlaceWizard.placeWizardFeatureKey, fromPlaceWizard.reducer),
    EffectsModule.forFeature([PlaceWizardEffects])
  ]
})
export class MyPlacesModule { }
