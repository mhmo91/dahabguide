import { AppSharedModule } from 'src/app/app-shared/app-shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlaceMainInfoComponent } from './place-main-info/place-main-info.component'



@NgModule({
  declarations: [
    PlaceMainInfoComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    PlaceMainInfoComponent,
    AppSharedModule
  ]
})
export class RestrictSharedModule { }
