import { RestrictComponent } from './restrict.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [
  { path: '', component: RestrictComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictRoutingModule { }
