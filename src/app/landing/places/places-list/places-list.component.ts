import { AppState } from 'src/app/reducers'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IPlace } from 'src/app/models/place.model'
import * as placeActions from 'src/app/actions/place.actions'
import * as appState from 'src/app/selectors'
import { MapStyle } from 'src/app/constants/map.config'

@Component({
  selector: 'dahab-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  places$: Observable<IPlace[]>
  isLoading$: Observable<boolean>
  mapConfigurations

  constructor(private store: Store<AppState>) {
    this.mapConfigurations = {
      latitude: 28.5001444,
      longitude: 34.5201866,
      style: MapStyle
    }
  }

  ngOnInit() {
    this.places$ = this.store.select(appState.fromPlaces.selectAllPlaces)
    this.isLoading$ = this.store.select(appState.fromPlaces.isLoading)
  }

}
