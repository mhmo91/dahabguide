import { MinionsService } from './../../../app-shared/services/minions.service'
import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { IPlaceWizard } from '../place-wizard-state/place-wizard.reducer'
import * as placeActions from 'src/app/actions/place.actions'
import { PlainGalleryConfig, PlainGalleryStrategy, GridLayout, Image } from '@ks89/angular-modal-gallery'
@Component({
  selector: 'dahab-place-images',
  templateUrl: './place-images.component.html',
  styleUrls: ['./place-images.component.scss'],
})
export class PlaceImagesComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() place: Partial<IPlace>
  placePhotos: Image[]
  attachedPhotos: Array<File>
  isHovered: boolean
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '15vw', height: 'auto' }, { length: 4, wrap: true })
  }

  constructor(private store: Store<AppState & IPlaceWizard>, private minion: MinionsService) {
    this.attachedPhotos = []
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.updateImagesArray(this.place.photos)
    }
  }

  updateImagesArray(imagesUrl) {
    this.placePhotos = this.minion.createImagesArray(imagesUrl)
    console.log(this.placePhotos)
  }
  ngOnInit() {
    this.updateImagesArray(this.place.photos)
    console.log(this.place)
  }

  setImageURL(photo, img: ElementRef) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(photo)
    fileReader.onload = (e) => {
      img.nativeElement.src = fileReader.result
    }
  }

  onDrop(files: FileList) {
    console.log(files)
    Array.from(files).forEach((f) => {
      this.attachedPhotos.push(f)
    })
  }


  ngAfterViewInit(): void {

  }

  triggerPicker() {
  }
  uploadEnd(event, photoIndex) {
    if (event.action === 1) {
      this.addImageToPlace(event.payload)
    }
    this.attachedPhotos.splice(photoIndex, 1)
  }

  addImageToPlace(imgUrl) {
    const placePhotos = Array.isArray(this.place.photos) ? JSON.parse(JSON.stringify(this.place.photos)) : []
    placePhotos.push(imgUrl)
    this.store.dispatch(new placeActions.UpdatePlace({
      place: {
        id: this.place.id,
        changes: {
          photos: placePhotos
        }
      }
    }))
  }

}
