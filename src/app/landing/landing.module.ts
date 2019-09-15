import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingSharedModule } from './landing-shared/landing-shared.module';
import { LandingToolbarComponent } from './landing-toolbar/landing-toolbar.component';
import { LandingComponent } from './landing.component';
import { LogInComponent } from './log-in/log-in.component';



@NgModule({
  declarations: [LandingComponent, LandingToolbarComponent, LogInComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LandingSharedModule
  ],
  entryComponents: [LogInComponent]
})
export class LandingModule { }
