import { AppSharedModule } from './../app-shared/app-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictRoutingModule } from './restrict-routing.module';
import { RestrictComponent } from './restrict.component';


@NgModule({
  declarations: [RestrictComponent],
  imports: [
    CommonModule,
    RestrictRoutingModule,
    AppSharedModule
  ]
})
export class RestrictModule { }
