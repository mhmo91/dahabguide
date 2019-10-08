import * as userActions from './../../actions/user.actions'
import { UserService } from './../../services/user.service'
import { take } from 'rxjs/operators'
import { MatDialog } from '@angular/material'
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { Observable } from 'rxjs'
import { User, IUser } from 'src/app/models/user.model'

@Component({
  selector: 'dahab-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter()
  user$: Observable<IUser>
  constructor(public userService: UserService, private store: Store<AppState>) {
    this.user$ = this.store.select('user')
  }

  ngOnInit() {
    this.store.dispatch(new userActions.GetUser())
  }

  signOut() {
    this.store.dispatch(new userActions.Logout())
  }

  async logInWithFacebook() {
    this.store.dispatch(new userActions.FacebookLogin())
  }
  async logInWithgoogle() {
    this.store.dispatch(new userActions.GoogleLogin())
  }
}
