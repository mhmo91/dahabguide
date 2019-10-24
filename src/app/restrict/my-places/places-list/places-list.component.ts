import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { AppState } from 'src/app/reducers'
import { Store, select } from '@ngrx/store'
import { fromPlaces } from 'src/app/selectors'
import { IPlace } from 'src/app/models/place.model'
@Component({
  selector: 'dahab-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  myPlaces$: Observable<IPlace[]>
  isLoading$: Observable<boolean>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.myPlaces$ = this.store.select(fromPlaces.myCreatedPlaces)
    this.isLoading$ = this.store.select(fromPlaces.isLoading)

  }

}
