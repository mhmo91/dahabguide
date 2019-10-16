import * as userActions from './../../actions/user.actions'
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core'
import { AppState } from 'src/app/reducers'
import { Store } from '@ngrx/store'
import { IUser } from 'src/app/models/user.model'

@Component({
  selector: 'dahab-restrict-toolbar',
  templateUrl: './restrict-toolbar.component.html',
  styleUrls: ['./restrict-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestrictToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter()
  user: IUser
  constructor(private store: Store<AppState>) {
    this.store.select('user').subscribe((user) => this.user = user)
  }

  ngOnInit() {
  }

  signOut() {
    this.store.dispatch(new userActions.Logout())
  }
}
