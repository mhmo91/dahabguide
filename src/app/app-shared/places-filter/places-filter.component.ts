import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { IResources } from 'src/app/models/resources.model'
import { FormGroup, FormBuilder } from '@angular/forms'
import { formatCurrency } from '@angular/common'

@Component({
  selector: 'dahab-places-filter',
  templateUrl: './places-filter.component.html',
  styleUrls: ['./places-filter.component.scss']
})
export class PlacesFilterComponent implements OnInit {
  resources$: Observable<IResources>
  filterFormGroup: FormGroup
  filter: {
    placesTypes: []
  }
  constructor(private store: Store<AppState>, private afb: FormBuilder) {
    this.constructForm()
    this.resources$ = store.select('resources')
  }

  constructForm() {
    this.filterFormGroup = this.afb.group({
      types: null,
      bedrooms: [],
      adultGuests: [],
      longTermOnly: false,
      dates: null,
      budget: null
    })
  }
  ngOnInit() {
    this.filterFormGroup.valueChanges.subscribe(v => {
      console.log(v)
    })
  }
  updateState() {

  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 100) + '00'
    }
    // formatCurrency

    return value
  }
  onLongTermChange(value) {
    this.filterFormGroup.controls.dates.reset()
    this.filterFormGroup.controls.budget.reset()
  }

}
