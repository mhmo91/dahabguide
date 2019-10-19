import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MyPlacesRoutingModule } from './my-places-routing.module'
import { PlacesListComponent } from './places-list/places-list.component'
import { AddPlaceComponent } from './add-place/add-place.component'
import { RestrictSharedModule } from '../restrict-shared/restrict-shared.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import * as places from './reducers/place.reducer'
import { PlaceEffects } from './effects/place.effects'

@NgModule({
  declarations: [PlacesListComponent, AddPlaceComponent],
  imports: [
    CommonModule,
    MyPlacesRoutingModule,
    RestrictSharedModule,
    StoreModule.forFeature(places.placesFeatureKey, places.reducer),
    EffectsModule.forFeature([PlaceEffects])
  ]
})
export class MyPlacesModule { }
