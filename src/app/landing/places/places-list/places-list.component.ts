import { AppState } from 'src/app/reducers'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IPlace } from 'src/app/models/place.model'
import { placesSelector } from 'src/app/selectors'
import { MapStyle } from 'src/app/constants/map.config'
import { Router, ActivatedRoute } from '@angular/router'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { PlacesFilterComponent } from '../places-filter/places-filter.component'
import { IPlacesFilter } from '../../../models/places-filter.model'
import { listAnimation, fadeAnimation } from 'src/app/app-shared/animations/list.animations'


@Component({
  selector: 'dahab-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss'],
  animations: [fadeAnimation, listAnimation]
})
export class PlacesListComponent implements OnInit {
  currentDisplayedPlaces
  places$: Observable<IPlace[]>
  isLoading$: Observable<boolean>
  mapConfigurations
  currentPlace: any
  placesFilter: Observable<IPlacesFilter>

  constructor(
    private store: Store<AppState>, private router: Router, private activatedRoute: ActivatedRoute, private bottomSheet: MatBottomSheet) {
    this.mapConfigurations = {
      latitude: 28.5001444,
      longitude: 34.5201866,
      style: MapStyle
    }
  }

  ngOnInit() {
    this.places$ = this.store.select(placesSelector.selectAllPlaces)
    this.placesFilter = this.store.select(placesSelector.selectPlacesFilter)
    this.isLoading$ = this.store.select(placesSelector.isLoading)
  }

  openPlace(place) {
    console.log(place)
    this.router.navigate([place.id], { relativeTo: this.activatedRoute })
  }

  openFilter(): void {
    this.bottomSheet.open(PlacesFilterComponent)
  }

  trackPlaceByFn(index: number, place: IPlace) {
    return place.id
  }

}


