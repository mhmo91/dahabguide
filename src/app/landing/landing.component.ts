import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'dahab-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList

  private mobileQueryListener: () => void

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    console.log(this.mobileQuery)
    this.mobileQueryListener = () => changeDetectorRef.detectChanges()
    // until  onchange is supported  https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/onchange
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this.mobileQueryListener)
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    // until  onchange is supported  https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/onchange
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this.mobileQueryListener)
  }



}
