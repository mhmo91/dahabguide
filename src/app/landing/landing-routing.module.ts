import { LandingComponent } from './landing.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [
    { path: 'places', loadChildren: () => import('./places/places.module').then(m => m.PlacesModule) },
    { path: '**', redirectTo: 'places' }
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
