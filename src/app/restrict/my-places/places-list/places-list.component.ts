import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { AppState } from 'src/app/reducers'
import { Store, select } from '@ngrx/store'
import { placesSelector } from 'src/app/selectors'
import { IPlace } from 'src/app/models/place.model'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'dahab-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  myPlaces$: Observable<IPlace[]>
  isLoading$: Observable<boolean>
  mapConfig: any
  constructor(private store: Store<AppState>, public router: Router, private activatedRoute: ActivatedRoute) {
    this.myPlaces$ = this.store.select(placesSelector.myCreatedPlaces)
    this.isLoading$ = this.store.select(placesSelector.isLoading)
  }

  ngOnInit() {
  }

  editPlace(place: IPlace) {
    this.router.navigate(['edit-place', place.id], { relativeTo: this.activatedRoute })
  }

}
