import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PlacesListComponent } from './places-list/places-list.component'
import { AddPlaceComponent } from './add-place/add-place.component'
import { EditPlaceComponent } from './edit-place/edit-place.component'


const routes: Routes = [
  { path: '', component: PlacesListComponent },
  { path: 'add-place', component: AddPlaceComponent },
  { path: 'edit-place/:id', component: EditPlaceComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlacesRoutingModule { }
