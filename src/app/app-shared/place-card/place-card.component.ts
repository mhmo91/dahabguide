import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output, SimpleChanges, OnChanges, } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import { Store, select } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { take } from 'rxjs/operators'
import { resourcesSelector } from 'src/app/selectors'
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
  placeTypeName: string
  PlaceParentName: string
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.pipe(take(1), select(resourcesSelector.getPlaceTypeById, { id: this.place.type }))
      .subscribe((placeType) => {
        this.placeTypeName = placeType.name_en
      })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.photos = this.place ? this.place.photos : null
  }
  openPlace() {
    this.clicked.emit()
  }

}
