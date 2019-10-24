import { AppState } from 'src/app/reducers'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IPlace } from 'src/app/models/place.model'
import * as placeActions from 'src/app/actions/place.actions'
import * as appState from 'src/app/selectors'

@Component({
  selector: 'dahab-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  places$: Observable<IPlace[]>
  isLoading$: Observable<boolean>
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.places$ = this.store.select(appState.fromPlaces.selectAllPlaces)
    this.isLoading$ = this.store.select(appState.fromPlaces.isLoading)
  }

}
