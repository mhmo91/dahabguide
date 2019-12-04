import { Component, OnInit, Input } from '@angular/core'
import { IPlaceLocation } from 'src/app/models/place.model'

@Component({
  selector: 'dahab-place-location',
  templateUrl: './place-location.component.html',
  styleUrls: ['./place-location.component.scss']
})
export class PlaceLocationComponent implements OnInit {

  @Input() placeLocation: IPlaceLocation
  constructor() { }

  ngOnInit() {
  }

}
