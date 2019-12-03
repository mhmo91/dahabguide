import { PlacesListComponent } from './places-list/places-list.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PlaceComponent } from './place/place.component'


const routes: Routes = [{
  path: '', component: PlacesListComponent
}, {
  path: ':id', component: PlaceComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
