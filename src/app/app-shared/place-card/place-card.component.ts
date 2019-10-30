import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import { MatRipple } from '@angular/material/core'

@Component({
  selector: 'dahab-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceCardComponent implements OnInit {

  @Input() place: IPlace
  @Output() clicked: EventEmitter<void> = new EventEmitter()
  images = [
    'https://a0.muscache.com/im/pictures/3e19651f-4987-4922-8233-4dee67293794.jpg?aki_policy=large',
    'https://a0.muscache.com/im/pictures/cff67781-a301-4d7f-8937-5e6d1908835f.jpg',
    'https://a0.muscache.com/im/pictures/2e825f9d-c4e3-4265-8988-76420e5a6fec.jpg?aki_policy=large'
  ]
  // images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

  openPlace() {
    this.clicked.emit()
  }


}
