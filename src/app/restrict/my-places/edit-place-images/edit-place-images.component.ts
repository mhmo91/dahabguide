import { MinionsService } from './../../../app-shared/services/minions.service'
import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { IPlaceWizard } from '../place-wizard-state/place-wizard.reducer'
import * as placeActions from 'src/app/actions/place.actions'
import { PlainGalleryConfig, PlainGalleryStrategy, Image, AdvancedLayout } from '@ks89/angular-modal-gallery'
import { trigger, transition, query, stagger, animate, style } from '@angular/animations'

@Component({
  selector: 'dahab-edit-place-images',
  templateUrl: './edit-place-images.component.html',
  styleUrls: ['./edit-place-images.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.3s', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class EditPlaceImagesComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() place: Partial<IPlace>
  hoveringOn: number
  placePhotos: Image[]
  attachedPhotos: Array<File>
  isHovered: boolean
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
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
    Array.from(files).forEach((f) => {
      this.attachedPhotos.push(f)
    })
  }

  openImagesModal(index) {
    this.plainGalleryGrid = Object.assign({}, this.plainGalleryGrid, { layout: new AdvancedLayout(index, true) })
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


  deleteMe(index, imgUrl) {
    const placePhotos = Array.isArray(this.place.photos) ? JSON.parse(JSON.stringify(this.place.photos)) : []
    placePhotos.splice(index, 1)
    this.store.dispatch(new placeActions.UpdatePlace({
      place: {
        id: this.place.id,
        changes: {
          photos: placePhotos
        }
      }
    }))
    this.store.dispatch(new placeActions.DeletePlaceImage(imgUrl))
  }

  makeMeMainImage(imgUrl) {
    const placePhotos: Array<string> = this.place.photos.filter(i => i !== imgUrl)
    placePhotos.unshift(imgUrl)
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
