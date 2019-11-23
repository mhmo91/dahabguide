import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { placesSelector, resourcesSelector } from 'src/app/selectors'
import { IPlace } from 'src/app/models/place.model'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { PlainGalleryConfig, AdvancedLayout, PlainGalleryStrategy } from '@ks89/angular-modal-gallery'
import { MinionsService } from 'src/app/app-shared/services/minions.service'
import { IAmenity } from 'src/app/models/resources.model'
import { take } from 'rxjs/operators'
import * as placesActions from 'src/app/actions/place.actions'
import { IUser } from 'src/app/models/user.model'
@Component({
  selector: 'dahab-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  placeTypeName: string
  placeAmenities: Array<IAmenity>
  PlaceParentName: string
  place: Partial<IPlace & { host: IUser }>
  currentView
  activeImg
  currentPlace: Partial<IPlace & { host: IUser }>
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  }
  placePhotos
  constructor(
    private store: Store<AppState>, private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver, private minion: MinionsService
  ) {
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
    this.detectScreenResolution()
  }

  openImagesModal(index) {
    this.plainGalleryGrid = Object.assign({}, this.plainGalleryGrid, { layout: new AdvancedLayout(index, true) })
  }

  ngOnInit() {
  }

  detectScreenResolution() {
    this.breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.matches) {
        this.currentView = result.breakpoints[Breakpoints.Large] ? 'lg' : this.currentView
        this.currentView = result.breakpoints[Breakpoints.Medium] ? 'md' : this.currentView
        this.currentView = result.breakpoints[Breakpoints.XSmall] ? 'xs' : this.currentView
      }
    })
  }

  loadPlaceInfo() {
    this.placePhotos = this.minion.createImagesArray(this.place.photos)
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
}
