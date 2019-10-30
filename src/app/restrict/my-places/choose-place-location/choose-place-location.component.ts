import { IPlaceWizard, IPlaceWizardState, PlaceWizardMode } from './../place-wizard-state/place-wizard.reducer'
import { Observable } from 'rxjs'
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import * as fromPlaceWizard from '../place-wizard-state/place-wizard.actions'
import { IPlace } from 'src/app/models/place.model'

@Component({
  selector: 'dahab-choose-place-location',
  templateUrl: './choose-place-location.component.html',
  styleUrls: ['./choose-place-location.component.scss']
})
export class ChoosePlaceLocationComponent implements OnInit, OnChanges {
  mapConfigurations = {
    latitude: 28.5001444,  // dahab center
    longitude: 34.5201866, // dahab center
  }
  lat
  lng
  @Input() place: Partial<IPlace>
  mode = PlaceWizardMode
  placeWizard$: Observable<IPlaceWizard>
  constructor(private store: Store<AppState & IPlaceWizardState>) {
    this.placeWizard$ = this.store.select('placeWizard')
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.lat = this.place.location.latitude
    this.lng = this.place.location.longitude
  }


  updateMarkerLocation(location) {
    this.lat = location.coords.lat
    this.lng = location.coords.lng
  }

  updateLocation() {
    this.store.dispatch(new fromPlaceWizard.UpdatePlace(
      {
        id: this.place.id,
        location: {
          latitude: this.lat,
          longitude: this.lng
        }
      }))
  }
}
