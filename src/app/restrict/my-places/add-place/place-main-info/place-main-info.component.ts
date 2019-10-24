import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { Observable } from 'rxjs'
import { IResources } from 'src/app/models/resources.model'
import * as placesActions from 'src/app/actions/place.actions'
import * as placeWizardActions from '../state/place-wizard.actions'
import { MatSnackBar } from '@angular/material/snack-bar'
import { IPlace } from 'src/app/models/place.model'
import { AngularFirestore } from '@angular/fire/firestore'
import { IPlaceWizardState, IPlaceWizard } from '../state/place-wizard.reducer'
@Component({
  selector: 'dahab-place-main-info',
  templateUrl: './place-main-info.component.html',
  styleUrls: ['./place-main-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceMainInfoComponent implements OnInit {
  placeInfoFormGroup: FormGroup
  resources$: Observable<IResources>
  placeWizard$: Observable<IPlaceWizard>
  @Input() place: Partial<IPlace>
  loading
  constructor(
    private formBuilder: FormBuilder, private store: Store<AppState & IPlaceWizardState>,
    private matSnackBar: MatSnackBar, private afs: AngularFirestore
  ) {
    this.resources$ = this.store.select('resources')
    this.placeWizard$ = this.store.select('placeWizard')
    const layoutFormGroup = this.formBuilder.group({
      beds: ['', Validators.required],
      bedrooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
    })
    const guestsFormGroup = this.formBuilder.group({
      adults: ['', Validators.required],
      children: ['', Validators.required],
      Infants: ['', Validators.required]
    })
    this.placeInfoFormGroup = this.formBuilder.group({
      type: ['', Validators.required],
      inside: [{ value: '', disabled: true }, Validators.required],
      brandName: [''],
      layout: layoutFormGroup,
      guests: guestsFormGroup

    })
  }

  ngOnInit() {

  }


  whenPlaceTypeChange(placeTypeId) { // workaround for bug https://github.com/angular/components/issues/9038
    this.placeInfoFormGroup.controls.inside.enable()
    if (this.placeInfoFormGroup.controls.inside.value === placeTypeId) {
      this.placeInfoFormGroup.controls.inside.reset()
    }
  }

  addPlace(value) {
    if (this.placeInfoFormGroup.invalid) {
      this.matSnackBar.open('Please enter the missing information', 'dismiss')
      return
    }
    this.loading = true
    this.store.dispatch(new placesActions.AddPlace(
      { place: { ...this.place, ...value } })
    )
    this.store.dispatch(new placeWizardActions.SaveMainInfo())
  }

}
