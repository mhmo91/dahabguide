import { Component, OnInit } from '@angular/core'
import { AppState } from 'src/app/reducers'
import { Store } from '@ngrx/store'

@Component({
  selector: 'dahab-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
