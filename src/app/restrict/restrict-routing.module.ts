import { RestrictComponent } from './restrict.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [
  {
    path: '', component: RestrictComponent,
    children: [
      {
        path: 'my-places', loadChildren: () => import('./my-places/my-places.module').then(m => m.MyPlacesModule)
      },
      {
        path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule)
      },
      {
        path: '**', redirectTo: 'my-places'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictRoutingModule { }
