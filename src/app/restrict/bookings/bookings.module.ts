import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BookingsRoutingModule } from './bookings-routing.module'
import { BookingsListComponent } from './bookings-list/bookings-list.component'
import { RestrictSharedModule } from '../restrict-shared/restrict-shared.module'


@NgModule({
  declarations: [BookingsListComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    RestrictSharedModule
  ]
})
export class BookingsModule { }
