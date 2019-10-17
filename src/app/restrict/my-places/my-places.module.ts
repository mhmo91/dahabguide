import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MyPlacesRoutingModule } from './my-places-routing.module'
import { PlacesListComponent } from './places-list/places-list.component'
import { AddPlaceComponent } from './add-place/add-place.component'


@NgModule({
  declarations: [PlacesListComponent, AddPlaceComponent],
  imports: [
    CommonModule,
    MyPlacesRoutingModule
  ]
})
export class MyPlacesModule { }
