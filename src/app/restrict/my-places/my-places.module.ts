import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MyPlacesRoutingModule } from './my-places-routing.module'
import { PlacesListComponent } from './places-list/places-list.component'
import { AddPlaceComponent } from './add-place/add-place.component'
import { RestrictSharedModule } from '../restrict-shared/restrict-shared.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import * as fromPlaceWizard from './place-wizard-state/place-wizard.reducer'
import { PlaceWizardEffects } from './place-wizard-state/place-wizard.effects'
import { EditPlaceComponent } from './edit-place/edit-place.component'
import { ChoosePlaceLocationComponent } from './choose-place-location/choose-place-location.component'
import { PlacePricingFormComponent } from './place-pricing-form/place-pricing-form.component'
import { EditPlaceImagesComponent } from './edit-place-images/edit-place-images.component'

@NgModule({
  declarations: [
    PlacesListComponent, AddPlaceComponent, EditPlaceComponent,
    ChoosePlaceLocationComponent, EditPlaceImagesComponent, PlacePricingFormComponent
  ],
  imports: [
    CommonModule,
    MyPlacesRoutingModule,
    RestrictSharedModule,
    StoreModule.forFeature(fromPlaceWizard.placeWizardFeatureKey, fromPlaceWizard.reducer),
    EffectsModule.forFeature([PlaceWizardEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyPlacesModule { }
