import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PlacesRoutingModule } from './places-routing.module'
import { PlacesListComponent } from './places-list/places-list.component'
import { PlaceComponent } from './place/place.component'
import { LandingSharedModule } from '../landing-shared/landing-shared.module'
import { PlacesFilterComponent } from './places-filter/places-filter.component'
@NgModule({
  declarations: [
    PlacesListComponent,
    PlaceComponent,
    PlacesFilterComponent,
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    LandingSharedModule,
  ],
  entryComponents: [PlacesFilterComponent]
})
export class PlacesModule { }
