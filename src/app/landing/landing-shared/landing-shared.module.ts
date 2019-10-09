import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppSharedModule } from 'src/app/app-shared/app-shared.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    AppSharedModule
  ]
})
export class LandingSharedModule { }
