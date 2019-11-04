import { CommonModule } from '@angular/common'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { RestrictRoutingModule } from './restrict-routing.module'
import { RestrictSharedModule } from './restrict-shared/restrict-shared.module'
import { RestrictToolbarComponent } from './restrict-toolbar/restrict-toolbar.component'
import { RestrictComponent } from './restrict.component'
import { HostNavListComponent } from './host-nav-list/host-nav-list.component'



@NgModule({
  declarations: [
    RestrictComponent,
    RestrictToolbarComponent,
    HostNavListComponent
  ],
  imports: [
    CommonModule,
    RestrictRoutingModule,
    RestrictSharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RestrictModule { }
