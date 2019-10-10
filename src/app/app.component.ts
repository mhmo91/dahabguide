import * as  userActions from './actions/user.actions'
import * as  authActions from './actions/auth.actions'
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
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new userActions.GetUser())
  }
}
