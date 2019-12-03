import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core'
import { MinionsService } from '../services/minions.service'
import { PlainGalleryConfig, PlainGalleryStrategy, AdvancedLayout } from '@ks89/angular-modal-gallery'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'dahab-place-images',
  templateUrl: './place-images.component.html',
  styleUrls: ['./place-images.component.scss']
})
export class PlaceImagesComponent implements OnInit, OnChanges {
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  }
  placePhotos
  currentView: string
  activeImg
  @Input() photosUrl: Array<string> = []
  constructor(private minion: MinionsService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.detectScreenResolution()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photosUrl.currentValue) {
      this.placePhotos = this.minion.createImagesArray(changes.photosUrl.currentValue)
    }
  }

  openImagesModal(index) {
    this.plainGalleryGrid = Object.assign({}, this.plainGalleryGrid, { layout: new AdvancedLayout(index, true) })
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

}
