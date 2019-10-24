import { Router, NavigationStart, NavigationEnd } from '@angular/router'
import * as  userActions from './actions/user.actions'
import * as  resourcesActions from './actions/resources.actions'
import * as  placeActions from './actions/place.actions'
import { Component } from '@angular/core'
import { AppState } from './reducers'
import { Store } from '@ngrx/store'

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dahabguide'
  navigating: boolean
  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new userActions.GetUser())
    this.store.dispatch(new resourcesActions.LoadResources())
    this.store.dispatch(new placeActions.InitLoadPlaces())
    this.router.events.subscribe((url: any) => {
      if (url instanceof NavigationStart) {
        this.navigating = true
      } else if (url instanceof NavigationEnd) {
        this.navigating = false
      }
    })
  }

}
