import { AppSharedModule } from 'src/app/app-shared/app-shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'



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
export class RestrictSharedModule { }
