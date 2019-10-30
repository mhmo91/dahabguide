import { AppState } from 'src/app/reducers'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IPlace } from 'src/app/models/place.model'
import { placesSelector } from 'src/app/selectors'
import { MapStyle } from 'src/app/constants/map.config'

@Component({
  selector: 'dahab-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.mapConfigurations = {
      latitude: 28.5001444,
      longitude: 34.5201866,
      style: MapStyle
    }
  }
  places$: Observable<IPlace[]>
  isLoading$: Observable<boolean>
  mapConfigurations
  currentPlace: any

  ngOnInit() {
    this.places$ = this.store.select(placesSelector.selectAllPlaces)
    this.isLoading$ = this.store.select(placesSelector.isLoading)
  }

}
