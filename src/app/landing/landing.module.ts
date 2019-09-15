import { AppSharedModule } from './../app-shared/app-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LandingToolbarComponent } from './landing-toolbar/landing-toolbar.component';


@NgModule({
  declarations: [LandingComponent, LandingToolbarComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    AppSharedModule
  ]
})
export class LandingModule { }
