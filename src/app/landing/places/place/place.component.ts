import { ActivatedRoute } from '@angular/router'
import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { placesSelector, resourcesSelector } from 'src/app/selectors'
import { IPlace } from 'src/app/models/place.model'
import { IAmenity } from 'src/app/models/resources.model'
import * as placesActions from 'src/app/actions/place.actions'
import { IUser } from 'src/app/models/user.model'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { AddNewBookingComponent } from 'src/app/app-shared/add-new-booking/add-new-booking.component'
@Component({
  selector: 'dahab-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceComponent implements OnInit {

  placeTypeName: string
  placeAmenities: Array<IAmenity>
  PlaceParentName: string
  place: Partial<IPlace & { host: IUser }>

  currentPlace: Partial<IPlace & { host: IUser }>
  constructor(
    private store: Store<AppState>, private activatedRoute: ActivatedRoute, private bottomSheet: MatBottomSheet) {
    this.store.select(placesSelector.getCurrentPlace).subscribe((cp) => {
      this.currentPlace = cp
    })
    this.activatedRoute.params.subscribe((res) => {
      this.store.pipe(select(placesSelector.getPlaceById, { id: res.id })).subscribe(p => {
        this.place = p
        if (p) {
          this.loadPlaceInfo()
        }
      })
    })
  }


  ngOnInit() {
  }



  loadPlaceInfo() {
    this.store.dispatch(new placesActions.GetPlaceDetails(this.place))
    // get informative data about the place
    this.store.pipe(select(resourcesSelector.getPlaceTypeById, { id: this.place.type }))
      .subscribe((placeType) => {
        if (placeType) {
          this.placeTypeName = placeType.name_en
        }
      })
    this.store.pipe(select(resourcesSelector.getAmenitiesByIds, { ids: this.place.amenities }))
      .subscribe((amens: Array<IAmenity>) => {
        this.placeAmenities = amens
      })
  }

  openBookModal() {
    this.bottomSheet.open(AddNewBookingComponent, {
      data: {
        placeId: this.place.id,
        creatorId: this.place.creatorId
      }
    })

  }
}
