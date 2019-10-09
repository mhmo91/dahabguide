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
    this.mobileQueryListener = () => changeDetectorRef.detectChanges()
    // this.mobileQuery.addListener(this.mobileQueryListener);
    this.mobileQuery.addEventListener('change', this.mobileQueryListener)
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener)
  }



}
