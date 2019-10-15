import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'dahab-restrict',
  templateUrl: './restrict.component.html',
  styleUrls: ['./restrict.component.scss']
})
export class RestrictComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList

  private mobileQueryListener: () => void

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this.mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addEventListener('change', this.mobileQueryListener)
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener)
  }


}
