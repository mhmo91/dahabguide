import { RestrictSharedModule } from './restrict-shared/restrict-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictRoutingModule } from './restrict-routing.module';
import { RestrictComponent } from './restrict.component';
import { RestrictToolbarComponent } from './restrict-toolbar/restrict-toolbar.component';


@NgModule({
  declarations: [RestrictComponent, RestrictToolbarComponent],
  imports: [
    CommonModule,
    RestrictRoutingModule,
    RestrictSharedModule
  ]
})
export class RestrictModule { }
