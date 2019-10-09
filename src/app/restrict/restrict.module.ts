import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RestrictRoutingModule } from './restrict-routing.module'
import { RestrictSharedModule } from './restrict-shared/restrict-shared.module'
import { RestrictToolbarComponent } from './restrict-toolbar/restrict-toolbar.component'
import { RestrictComponent } from './restrict.component'



@NgModule({
  declarations: [RestrictComponent, RestrictToolbarComponent],
  imports: [
    CommonModule,
    RestrictRoutingModule,
    RestrictSharedModule
  ]
})
export class RestrictModule { }
