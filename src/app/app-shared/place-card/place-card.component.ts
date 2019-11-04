import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import { MatRipple } from '@angular/material/core'

@Component({
  selector: 'dahab-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceCardComponent implements OnInit, OnChanges {

  @Input() place: IPlace
  @Output() clicked: EventEmitter<void> = new EventEmitter()
  photos: Array<string>


  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.photos = this.place ? this.place.photos : null
  }
  openPlace() {
    this.clicked.emit()
  }


}
