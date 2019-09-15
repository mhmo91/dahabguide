import { AppSharedModule } from './../app-shared/app-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictRoutingModule } from './restrict-routing.module';
import { RestrictComponent } from './restrict.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    RestrictComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    RestrictRoutingModule,
    AppSharedModule
  ],
  entryComponents: [
    LogInComponent
  ]
})
export class RestrictModule { }
