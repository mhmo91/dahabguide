import { HostSignupComponent } from './host-signup.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [{
  path: '', component: HostSignupComponent

}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostSignupRoutingModule { }
