import { PlaceWizardMode } from './../../my-places/place-wizard-state/place-wizard.reducer'
import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges, OnChanges } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { Observable } from 'rxjs'
import { IResources } from 'src/app/models/resources.model'
import * as placesActions from 'src/app/actions/place.actions'
import * as placeWizardActions from '../../my-places/place-wizard-state/place-wizard.actions'
import { MatSnackBar } from '@angular/material/snack-bar'
import { IPlace } from 'src/app/models/place.model'
import { IPlaceWizardState, IPlaceWizard } from '../../my-places/place-wizard-state/place-wizard.reducer'
import * as selectors from 'src/app/selectors'
import { take, map } from 'rxjs/operators'
import { MatCheckboxChange } from '@angular/material/checkbox'
@Component({
  selector: 'dahab-place-main-info',
  templateUrl: './place-main-info.component.html',
  styleUrls: ['./place-main-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceMainInfoComponent implements OnInit, OnChanges {
  @Input() place: Partial<IPlace>
  placeInfoFormGroup: FormGroup
  resources$: Observable<IResources>
  placeWizard$: Observable<IPlaceWizard>
  mode = PlaceWizardMode
  constructor(
    private formBuilder: FormBuilder, private store: Store<AppState & IPlaceWizardState>,
    private matSnackBar: MatSnackBar
  ) {
    this.resources$ = this.store.select('resources')
    this.placeWizard$ = this.store.select('placeWizard')
    this.constructForm()

  }

  ngOnInit() {

  }

  get isChecked() {
    return true
  }

  amenityCheckChange(e: MatCheckboxChange) {
    const amenitiesValue: Array<string> = JSON.parse(JSON.stringify(this.placeInfoFormGroup.controls.amenities.value))
    if (e.checked) {
      amenitiesValue.push(e.source.value)
      this.placeInfoFormGroup.controls.amenities.setValue(amenitiesValue)
    } else {
      amenitiesValue.splice(amenitiesValue.indexOf(e.source.value), 1)
      this.placeInfoFormGroup.controls.amenities.setValue(amenitiesValue)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const place = changes.place.currentValue
    if (place) {
      this.placeInfoFormGroup.controls.inside.enable()
      this.placeInfoFormGroup.patchValue(place)
    }
  }

  constructForm() {
    const layoutFormGroup = this.formBuilder.group({
      beds: [null, Validators.required],
      bedrooms: [null, Validators.required],
      bathrooms: [null, Validators.required],
      privateGarden: [false],
    })
    const guestsFormGroup = this.formBuilder.group({
      adults: [null, Validators.required],
      children: [null, Validators.required],
      infants: [null, Validators.required]
    })
    this.placeInfoFormGroup = this.formBuilder.group({
      type: [null, Validators.required],
      inside: [{ value: null, disabled: true }, Validators.required],
      brandName: [null],
      layout: layoutFormGroup,
      guests: guestsFormGroup,
      amenities: [[]]
    })
  }


  whenPlaceTypeChange(placeTypeId) { // workaround for bug https://github.com/angular/components/issues/9038
    this.placeInfoFormGroup.controls.inside.enable()
    const insideValue = this.placeInfoFormGroup.controls.inside.value
    if (insideValue === placeTypeId || insideValue === 'standalone') {
      this.placeInfoFormGroup.controls.inside.reset()
    }
    // be smart and set default value 'standalone' in inside control
    this.store.pipe(take(1), select(selectors.resourcesSelector.getPlaceTypeById, { id: placeTypeId }))
      .subscribe((placeType) => {
        if (placeType.standAlone) {
          this.placeInfoFormGroup.controls.inside.setValue('standalone')
        }
      })
  }

  addPlace(value) {
    if (this.placeInfoFormGroup.invalid) {
      this.matSnackBar.open('Please enter the missing information', 'dismiss')
      return
    }
    this.store.dispatch(new placesActions.AddPlace(
      { place: { ...this.place, ...value } })
    )
    this.store.dispatch(new placeWizardActions.SaveMainInfo())
  }

}
