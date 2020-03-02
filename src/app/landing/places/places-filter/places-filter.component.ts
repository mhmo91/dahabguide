import { BookingMinionService } from '../../../app-shared/services/booking-minion.service'
import { placesSelector } from 'src/app/selectors'
import { PlacesFilter } from '../../../models/places-filter.model'
import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { IResources } from 'src/app/models/resources.model'
import { FormGroup, FormBuilder } from '@angular/forms'
import { formatCurrency } from '@angular/common'
import * as placesActions from 'src/app/actions/place.actions'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { Platform } from '@angular/cdk/platform'

@Component({
  selector: 'dahab-places-filter',
  templateUrl: './places-filter.component.html',
  styleUrls: ['./places-filter.component.scss']
})
export class PlacesFilterComponent implements OnInit {
  resources$: Observable<IResources>
  filter$: Observable<PlacesFilter>

  filterFormGroup: FormGroup


  constructor(
    private store: Store<AppState>, private afb: FormBuilder, public bookingMinion: BookingMinionService, public platform: Platform,
    private bottomSheet: MatBottomSheet
  ) {
    this.constructForm()
    this.resources$ = store.select('resources')
    store.select(placesSelector.selectPlacesFilter).subscribe((res) => {
      this.filterFormGroup.patchValue(res)
    })
  }

  constructForm() {
    // maintain the form structure to emit a model similar to PlacesFilter
    this.filterFormGroup = this.afb.group({
      types: null,
      longTermOnly: null,
      date: null,
      // disable this feature for now
      // bedrooms: null,
      // adultGuests: null,
      // budget: null
    })
  }

  ngOnInit() {

  }
  updateState(formValue) {
    console.log(formValue)
    this.store.dispatch(new placesActions.UpdatePlacesFilter({ placesFilter: formValue }))
  }


  onLongTermChange(value) {
    this.filterFormGroup.controls.date.reset()
  }

  resetFilter() {
    this.store.dispatch(new placesActions.ResetPlacesFilter())
    this.dismissBottomSheet()
  }

  // dismiss bottom sheet if found
  dismissBottomSheet() {
    this.bottomSheet.dismiss()
  }

}
