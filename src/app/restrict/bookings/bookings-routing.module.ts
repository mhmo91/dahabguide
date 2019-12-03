import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BookingsListComponent } from './bookings-list/bookings-list.component'


const routes: Routes = [
  { path: 'bookings', component: BookingsListComponent },
  { path: '**', redirectTo: 'bookings' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
