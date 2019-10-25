import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatStepperModule } from '@angular/material/stepper'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { ToolbarLogoComponent } from './toolbar-logo/toolbar-logo.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NiceImageComponent } from './nice-image/nice-image.component'
import { NotPipe } from './not.pipe'
import { PlaceCardComponent } from './place-card/place-card.component'
import { NgbCarouselModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { AgmCoreModule } from '@agm/core'


@NgModule({
  declarations: [ToolbarLogoComponent, NiceImageComponent, NotPipe, PlaceCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    NgbCarouselModule,
    NgbDatepickerModule,
    MatListModule,
  ],
  exports: [
    ReactiveFormsModule,
    AgmCoreModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatStepperModule,
    // bootstrap module
    NgbCarouselModule,
    NgbDatepickerModule,

    // components
    ToolbarLogoComponent,
    NiceImageComponent,
    PlaceCardComponent,

    // pipes
    NotPipe,
  ]
})
export class AppSharedModule { }
