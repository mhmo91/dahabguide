import { MatSnackBar } from '@angular/material/snack-bar'
import { PlaceWizardMode } from './../place-wizard-state/place-wizard.reducer'
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { Observable } from 'rxjs'
import { IPlaceWizardState, IPlaceWizard } from '../place-wizard-state/place-wizard.reducer'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { IPlace } from 'src/app/models/place.model'
import * as fromPlaceWizard from '../place-wizard-state/place-wizard.actions'
@Component({
  selector: 'dahab-place-pricing-form',
  templateUrl: './place-pricing-form.component.html',
  styleUrls: ['./place-pricing-form.component.scss']
})
export class PlacePricingFormComponent implements OnInit, OnChanges {
  pricingFormGroup: FormGroup
  placeWizard$: Observable<IPlaceWizard>
  mode = PlaceWizardMode
  @Input() place: Partial<IPlace>
  constructor(
    private store: Store<AppState & IPlaceWizardState>,
    private formBuilder: FormBuilder, private snackbar: MatSnackBar
  ) {
    this.placeWizard$ = this.store.select('placeWizard')
    this.constructForm()
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const place = changes.place.currentValue
    if (place) {
      this.pricingFormGroup.patchValue(place)
    }
  }

  constructForm() {
    const priceGroup = this.formBuilder.group({
      longTerm: [true],
      shortTerm: [true, Validators.required],
      perNight: [null, Validators.required],
      minNights: [null],
      perMonth: [null, Validators.required],
      minMonths: [null],
    })

    this.pricingFormGroup = this.formBuilder.group({
      price: priceGroup,
      instantBooking: [null]
    })
    const perNightCtrl = priceGroup.get('perNight')
    const shortTermCtrl = priceGroup.get('shortTerm')
    const longTermCtrl = priceGroup.get('longTerm')
    const perMonthCtrl = priceGroup.get('perMonth')
    shortTermCtrl.valueChanges.subscribe((newValue) => {
      if (newValue) {
        perNightCtrl.setValidators([Validators.required])
      } else {
        perNightCtrl.setValidators(null)
        perNightCtrl.reset()
      }
      perNightCtrl.updateValueAndValidity()

    })

    longTermCtrl.valueChanges.subscribe((val) => {
      if (val) {
        perMonthCtrl.setValidators([Validators.required])
      } else {
        perMonthCtrl.setValidators(null)
        perMonthCtrl.reset()
      }
      perMonthCtrl.updateValueAndValidity()
    })

  }

  save(form: FormGroup) {
    if (form.value.price.shortTerm || form.value.price.longTerm) {
      this.store.dispatch(new fromPlaceWizard.UpdatePlace(
        {
          id: this.place.id,
          ...form.value
        }))
    } else {
      this.snackbar.open('You must select at least once rental type', 'Dismiss', {
        duration: 3000
      })
      return
    }

  }
}

